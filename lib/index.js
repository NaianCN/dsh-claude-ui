/**
 * dsh-claude-ui, node half. The browser half ships through `exports["./client"]`;
 * this side only relays DeepSeek's public status feed, which sends no CORS
 * headers and so can't be read from the page directly.
 */
const STATUS_PAGE = "https://status.deepseek.com";
const STATUS_FEED = `${STATUS_PAGE}/feed.rss`;
const STATUS_ROUTE = "/claude-ui/deepseek-status";
const CACHE_MS = 120_000;
const TIMEOUT_MS = 8_000;
/** Incident states that mean it is over. */
const SETTLED = new Set(["resolved", "completed", "postmortem"]);

const decode = (text) => text
	.replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
	.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, "\"").replace(/&#39;/g, "'")
	.replace(/&#x([0-9a-f]+);/gi, (_, hex) => String.fromCodePoint(parseInt(hex, 16)))
	.replace(/&#(\d+);/g, (_, dec) => String.fromCodePoint(Number(dec)))
	.replace(/&amp;/g, "&");
const tag = (xml, name) => decode(xml.match(new RegExp(`<${name}>([\\s\\S]*?)</${name}>`))?.[1] ?? "").trim();

/**
 * Open API incidents from the status feed. Items are updates, newest first;
 * the first item seen for an incident link carries its current state.
 * @param xml - RSS document.
 * @returns unresolved incidents whose affected components include an API service.
 */
function openApiIncidents(xml) {
	const seen = new Set();
	const active = [];
	for (const [, item] of xml.matchAll(/<item>([\s\S]*?)<\/item>/g)) {
		const link = tag(item, "link");
		if (seen.has(link)) continue;
		seen.add(link);
		const description = tag(item, "description");
		const status = description.match(/Status:<\/strong>\s*([a-z_ ]+)/i)?.[1].trim().toLowerCase() ?? "";
		const components = description.match(/Affected components:<\/strong>\s*([^<]*)/i)?.[1] ?? "";
		if (SETTLED.has(status) || !/API/.test(components)) continue;
		active.push({ title: tag(item, "title"), status, link });
	}
	return active;
}

function apply(ctx) {
	ctx.inject(["webServer"], (scope) => {
		let cached;
		let inflight;
		const read = () => {
			if (cached && Date.now() - cached.at < CACHE_MS) return Promise.resolve(cached.body);
			inflight ??= fetch(STATUS_FEED, { signal: AbortSignal.timeout(TIMEOUT_MS) })
				.then((response) => {
					if (!response.ok) throw new Error(`status feed answered ${response.status}`);
					return response.text();
				})
				.then((xml) => ({ ok: true, page: STATUS_PAGE, checkedAt: Date.now(), active: openApiIncidents(xml) }))
				.catch(() => ({ ok: false, page: STATUS_PAGE, checkedAt: Date.now(), active: [] }))
				.then((body) => {
					cached = { at: Date.now(), body };
					inflight = void 0;
					return body;
				});
			return inflight;
		};
		scope.effect(() => scope.webServer.register({
			kind: "exact",
			path: STATUS_ROUTE,
			handler: (request, response) => {
				if (request.method !== "GET") {
					response.writeHead(405, { allow: "GET" });
					response.end();
					return;
				}
				read().then((body) => {
					response.writeHead(200, { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" });
					response.end(JSON.stringify(body));
				});
			}
		}), "dsh-claude-ui: DeepSeek status relay");
	});
}
export { apply };
