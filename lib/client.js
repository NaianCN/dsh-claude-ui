window.__ModuleLoader__.load({
	id: "dsh-claude-ui",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
		Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
		const SOURCE = "dsh-claude-ui";
		const STYLE_ID = "dsh-claude-ui-style";
		/** Same value in both palettes. */
		const both = (value) => ({ light: value, dark: value });
		/**
		* Static scales re-pointed to Claude's warm neutrals and clay accent, so
		* every alias that reads them (borders, labels, hovers) turns warm at once.
		*/
		const STATIC_TOKENS = {
			"--dsw-static-neutral-bluish-00": both("#ffffff"),
			"--dsw-static-neutral-bluish-50": both("#faf9f5"),
			"--dsw-static-neutral-bluish-60": both("#f5f4ed"),
			"--dsw-static-neutral-bluish-75": both("#f0eee6"),
			"--dsw-static-neutral-bluish-100": both("#e8e6dc"),
			"--dsw-static-neutral-bluish-150": both("#e5e3d8"),
			"--dsw-static-neutral-bluish-200": both("#dedcd1"),
			"--dsw-static-neutral-bluish-300": both("#c2c0b6"),
			"--dsw-static-neutral-bluish-400": both("#a6a39a"),
			"--dsw-static-neutral-bluish-500": both("#8e8b82"),
			"--dsw-static-neutral-bluish-600": both("#73726c"),
			"--dsw-static-neutral-bluish-700": both("#5e5d59"),
			"--dsw-static-neutral-bluish-750": both("#4a4945"),
			"--dsw-static-neutral-bluish-800": both("#3d3d3a"),
			"--dsw-static-neutral-bluish-850": both("#30302e"),
			"--dsw-static-neutral-bluish-875": both("#2b2a28"),
			"--dsw-static-neutral-bluish-900": both("#1f1e1d"),
			"--dsw-static-neutral-bluish-950": both("#1a1918"),
			"--dsw-static-neutral-bluish-1000": both("#141413"),
			"--dsw-static-deepseek-50": both("#fbf0eb"),
			"--dsw-static-deepseek-100": both("#f7e4db"),
			"--dsw-static-deepseek-200": both("#f0cdbd"),
			"--dsw-static-deepseek-300": both("#e8b29b"),
			"--dsw-static-deepseek-400": both("#e08a6a"),
			"--dsw-static-deepseek-450": both("#dd7f5f"),
			"--dsw-static-deepseek-500": both("#d97757"),
			"--dsw-static-deepseek-600": both("#c6613f"),
			"--dsw-static-deepseek-800": both("#5a3528"),
			"--dsw-static-deepseek-900": both("#3d2a22")
		};
		/** Surface aliases set directly where Claude Desktop departs from the scale order. */
		const ALIAS_TOKENS = {
			"--dsw-alias-bg-base": { light: "#faf9f5", dark: "#262624" },
			"--dsw-alias-bg-layer-1": { light: "#ffffff", dark: "#30302e" },
			"--dsw-alias-bg-layer-2": { light: "#ffffff", dark: "#30302e" },
			"--dsw-alias-bg-layer-3": { light: "#f5f4ed", dark: "#3d3d3a" },
			"--dsw-alias-bg-module-platform": { light: "#f5f4ed", dark: "#30302e" },
			"--dsw-specific-sidebar-fill": { light: "#f5f4ed", dark: "#1f1e1d" },
			"--dsw-specific-input-major": { light: "#ffffff", dark: "#30302e" },
			"--dsw-specific-bubble": { light: "#f0eee6", dark: "#141413" },
			"--dsw-alias-markdown-code-block": { light: "#f5f4ed", dark: "#1f1e1d" },
			"--dsw-alias-label-primary": { light: "#141413", dark: "#faf9f5" },
			"--dsw-alias-label-secondary": { light: "#5e5d59", dark: "#c2c0b6" },
			"--dsw-alias-label-tertiary": { light: "#73726c", dark: "#a6a39a" },
			"--dsw-alias-border-l1": { light: "#1f1e1d0d", dark: "#faf9f50f" },
			"--dsw-alias-border-l2": { light: "#1f1e1d1a", dark: "#faf9f51a" },
			"--dsw-alias-border-l3": { light: "#1f1e1d24", dark: "#faf9f524" },
			"--dsw-alias-border-l4": { light: "#1f1e1d33", dark: "#faf9f533" },
			"--dsw-alias-interactive-bg-hover": { light: "#1f1e1d0d", dark: "#faf9f512" },
			"--dsw-alias-state-business-primary": { light: "#d97757", dark: "#e08a6a" },
			"--dsw-alias-link": { light: "#c6613f", dark: "#e08a6a" },
			"--dsw-alias-button-info-fill": { light: "#d97757", dark: "#d97757" },
			"--dsw-alias-button-info-hover": { light: "#c6613f", dark: "#e08a6a" },
			"--dsw-focus-ring-color": { light: "#d97757", dark: "#e08a6a" }
		};
		/**
		* Full-width CJK punctuation is pinned by unicode-range ahead of the Latin
		* serifs, so it always matches the Song ideographs it sits beside.
		* Windows' bundled Song faces (SimSun, STSong) render thin and grey under
		* ClearType, so there CJK falls to Source Han Serif if installed, else YaHei.
		* Georgia only has old-style figures (0 reads as o), so Latin prefers the
		* lining-figure system serifs Charter (macOS) and Cambria (Windows).
		*/
		const CJK_PUNCT_FACE = "Claude UI CJK Punct";
		const SERIF = `"${CJK_PUNCT_FACE}", ui-serif, "Tiempos Text", "Source Serif 4", Charter, Cambria, Georgia, "Songti SC", "Noto Serif SC", "Source Han Serif SC", "Noto Serif CJK SC", "Microsoft YaHei UI", "Microsoft YaHei", serif`;
		/**
		* Pixel whale frames on a 16x8 grid: O body, L belly, E eye, C closed eye.
		* It faces left, tail on the right, and its belly row rests on the composer
		* edge. The spout and the sleeping z's are a separate overlay above the head.
		*/
		const WHALE_FRAMES = {
			open: [
				"..............OO",
				"..OOOOOO.....OO.",
				".OOOOOOOOO..OO..",
				"OOEOOOOOOOOOOO..",
				"OOOOOOOOOOOOO...",
				"OOOOOOOOOOOO....",
				".LLLLLLLLLO.....",
				"..LLLLLLL......."
			],
			tail: [
				"................",
				"..OOOOOO........",
				".OOOOOOOOO......",
				"OOEOOOOOOOOOO.OO",
				"OOOOOOOOOOOOOOO.",
				"OOOOOOOOOOOO....",
				".LLLLLLLLLO.....",
				"..LLLLLLL......."
			]
		};
		WHALE_FRAMES.blink = WHALE_FRAMES.open.map((row) => row.replace("E", "O"));
		WHALE_FRAMES.sleep = WHALE_FRAMES.open.map((row) => row.replace("OOE", "OCC"));
		const WHALE_OVERLAYS = {
			spout: [
				"S...S",
				".S.S.",
				"..S..",
				"..S.."
			],
			zzz: [
				"......ZZZZ",
				"........Z.",
				".......Z..",
				"......ZZZZ",
				"ZZZZZ.....",
				"...Z......",
				"..Z.......",
				".Z........",
				"ZZZZZ....."
			]
		};
		const WHALE_COLORS = { O: "#d97757", L: "#f2c4b0", E: "#141413", C: "#7a3a24", S: "#e8a58c", Z: "#a6a39a" };
		const WHALE_CELL = 4;
		/** Blowhole column on the grid; the overlay is centred over it. */
		const WHALE_BLOWHOLE = 4.5;
		/** Render a grid of colour letters as a crisp pixel-art SVG data URI. */
		function pixelArt(rows) {
			const rects = rows.flatMap((row, y) => [...row].map((c, x) => WHALE_COLORS[c] ? `<rect x="${x}" y="${y}" width="1" height="1" fill="${WHALE_COLORS[c]}"/>` : "")).join("");
			return `url("data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${rows[0].length} ${rows.length}" shape-rendering="crispEdges">${rects}</svg>`)}")`;
		}
		const WHALE_WIDTH = WHALE_FRAMES.open[0].length * WHALE_CELL;
		const WHALE_HEIGHT = WHALE_FRAMES.open.length * WHALE_CELL;
		const WHALE_RIGHT = 32;
		/** Body-wide variables holding every frame, so the rules below stay short. */
		const WHALE_VARS = [...Object.entries(WHALE_FRAMES), ...Object.entries(WHALE_OVERLAYS)].map(([name, rows]) => `--claude-ui-whale-${name}: ${pixelArt(rows)};`).join("\n\t");
		/** Overlay box: placed so its bottom sits on the head and its centre on the blowhole. */
		const overlayBox = (rows) => {
			const width = rows[0].length * WHALE_CELL;
			return `width: ${width}px; height: ${rows.length * WHALE_CELL}px; right: ${WHALE_RIGHT + WHALE_WIDTH - WHALE_BLOWHOLE * WHALE_CELL - width / 2}px;`;
		};
		/** Whale mood, set on <body> by the plugin: typing, jump or sleep; idle when absent. */
		const WHALE_ATTR = "data-claude-ui-whale";
		const COMPOSER = `[data-slot="conversation.composer"]`;
		const HERO = `:is([class$="_hero"], [class*="_hero "])`;
		/**
		* Composer card that can carry the whale. With no workspace picked the card
		* becomes a "choose a workspace" trigger whose own ::after draws a dashed
		* frame, so the whale steps aside until a workspace is chosen.
		*/
		const WHALE_CARD = `:is([class$="_card"], [class*="_card "]):not([class*="_cardWorkspaceTrigger"])`;
		const WHALE_HOST = `${COMPOSER} ${HERO} > ${WHALE_CARD}`;
		/** While hopping, the whale may ride whichever composer card the chat swaps in. */
		const WHALE_JUMP_HOST = `body[${WHALE_ATTR}=jump] ${COMPOSER} ${WHALE_CARD}`;
		/** One CSS-module local class, whatever its hashed prefix. */
		const CLS = (name) => `:is([class$="_${name}"], [class*="_${name} "])`;
		/**
		* The in-chat composer (not the new-chat hero, whose card hosts the whale).
		* Its card and toolbars dissolve into one grid so the pill holds only
		* "+ | draft | send" and the mode / model controls sit on a line beneath.
		*/
		const SESSION_BAR = `[data-slot="conversation.composer.bar"] > ${CLS("root")}:not([class*="_hero"])`;
		const SESSION_CARD = `${SESSION_BAR} > [data-composer-card]`;
		/**
		* Layout layer. Hashed CSS-module prefixes change between dsh builds, so
		* selectors anchor on data-slot / data attributes plus the stable
		* `_localName` suffix.
		*/
		const CSS = `
/* Song SC draws ？ and ！ as small left-hung glyphs; take centered ones from Mincho / Song TC */
@font-face {
	font-family: "${CJK_PUNCT_FACE}";
	src: local("HiraMinProN-W3"), local("Hiragino Mincho ProN W3"), local("STSongti-TC-Regular"),
		local("NotoSerifCJKjp-Regular"), local("Noto Serif CJK JP");
	unicode-range: U+FF01, U+FF1F;
}
@font-face {
	font-family: "${CJK_PUNCT_FACE}";
	src: local("STSongti-SC-Regular"), local("Songti SC Regular"),
		local("NotoSerifSC-Regular"), local("Noto Serif SC"), local("NotoSerifCJKsc-Regular"),
		local("Noto Serif CJK SC"), local("SourceHanSerifSC-Regular");
	unicode-range: U+3000-303F, U+FF00, U+FF02-FF1E, U+FF20-FFEF;
}
body {
	--claude-ui-serif: ${SERIF};
	--dsh-chat-content-width: 768px;
}

/* Sidebar: no hard divider, quiet new-chat button, rounded rows */
[data-slot=sidebar] > [class*="_root"] { border-right: none; }
/* No product logo up top, like Claude: drop the brand, and the row if nothing else is left in it */
[data-slot=sidebar] :is([class$="_brand"], [class*="_brand "]) { display: none; }
[data-slot=sidebar] [class*="_logoRow"]:not(:has([class*="_toggle"])) { display: none; }
[data-slot=sidebar] [class*="_root"]:not([class*="_collapsed"]) > [class*="_logoRow"] { height: 44px; }
/* Windows pins the toggle into the title bar (position: fixed), so the row only held the brand */
[data-windows-titlebar] [data-slot=sidebar] [class*="_root"] > [class*="_logoRow"] { height: 0; margin: 0; }
[data-slot=sidebar] [class*="_root"] [class*="_toggle"] [class*="_railMark"] { display: none; }
[data-slot=sidebar] [class*="_root"] [class*="_toggle"] [class*="_panelIcon"] { display: inline; }
/* New chat reads as the first plain row of the list, not a framed button */
[data-slot=sidebar] [class*="_root"]:not([class*="_collapsed"]) > button:is([class$="_newSession"], [class*="_newSession "]) {
	justify-content: flex-start;
	height: 36px;
	margin: 0 2px 2px;
	padding: 7px 8px;
	border: none;
	border-radius: 8px;
	box-shadow: none;
	background: transparent;
	font-weight: 400;
}
[data-slot=sidebar] [class*="_root"]:not([class*="_collapsed"]) > button:is([class$="_newSession"], [class*="_newSession "]):hover {
	background: var(--dsw-alias-interactive-bg-hover);
}
[data-slot=sidebar] [class*="_root"]:not([class*="_collapsed"]) [class*="_newSessionContent"] { justify-content: flex-start; gap: 8px; }
[data-slot=sidebar] [class*="_newSessionContent"] > svg { width: 16px; height: 16px; }
/* Section headers: small and quiet */
[data-slot=sidebar] [class*="_sectionLabel"] { font-size: 13px; color: var(--dsw-alias-label-tertiary); }
[data-slot=sidebar] :is([class*="_panelRow"], [class*="_sessionRow"]) { border-radius: 8px; }
[data-slot=sidebar] [class*="_sessionRow"][class*="_selected"] { font-weight: 500; }
/* Workspace headers read like Claude's group labels: quiet text, then a small solid triangle */
[data-slot=sidebar] [class*="_projectRow"] > [class*="_folder"] { display: none; }
[data-slot=sidebar] [class*="_projectRow"] > [class*="_projectText"] { order: 1; flex: 0 1 auto; min-width: 0; }
[data-slot=sidebar] [class*="_projectRow"] > [class*="_projectText"] [class*="_title"] {
	font-size: 13px;
	font-weight: 400;
	color: var(--dsw-alias-label-tertiary);
}
[data-slot=sidebar] [class*="_projectRow"]:hover > [class*="_projectText"] [class*="_title"] { color: var(--dsw-alias-label-secondary); }
[data-slot=sidebar] [class*="_projectRow"] > [class*="_chevron"] {
	order: 2;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	width: 14px;
	min-width: 14px;
	color: var(--dsw-alias-label-tertiary);
	opacity: 1;
	visibility: visible;
}
[data-slot=sidebar] [class*="_projectRow"] > [class*="_chevron"] > * { display: none; }
[data-slot=sidebar] [class*="_projectRow"] > [class*="_chevron"]::before {
	content: "";
	border-style: solid;
	border-color: transparent transparent transparent currentColor;
	border-width: 3.5px 0 3.5px 5px;
	transition: rotate 0.15s ease;
}
[data-slot=sidebar] [class*="_projectRow"][aria-expanded=true] > [class*="_chevron"]::before { rotate: 90deg; }
[data-slot=sidebar] [class*="_projectRow"] > [class*="_rowActions"] { order: 3; margin-left: auto; }

/* Hero: keep the whale, swap the headline for a Claude-style serif greeting */
body[data-claude-ui-greeting] [class*="_headline"] { gap: 14px; align-items: center; }
body[data-claude-ui-greeting] [class*="_titleGroup"] > span:first-child { font-size: 0; }
body[data-claude-ui-greeting] [class*="_titleGroup"] > span:first-child::after {
	content: var(--claude-ui-greeting);
	font-family: var(--claude-ui-serif);
	font-size: 34px;
	font-weight: 400;
	line-height: 40px;
	letter-spacing: -0.01em;
	color: var(--dsw-alias-label-primary);
}
body[data-claude-ui-greeting] [class*="_previewBadge"] { display: none; }

/* Conversation: rounder user bubble, assistant prose in serif */
[data-chat-flow-kind=user] :is([class$="_bubble"], [class*="_bubble "]) {
	border-radius: 16px;
	padding: 10px 16px;
}
[data-chat-flow-kind=assistant-step] [class*="_markdown"] :is(p, li, blockquote, h1, h2, h3, h4) {
	font-family: var(--claude-ui-serif);
}
[data-chat-flow-kind=assistant-step] [class*="_markdown"] :is(p, li) {
	line-height: 1.7;
}
[data-chat-flow-kind=assistant-step] [class*="_markdown"] :is(h1, h2, h3, h4) {
	font-weight: 600;
	letter-spacing: -0.01em;
}
/* Inline code: clay text on a faint clay wash instead of a white chip */
[class*="_markdown"] :not(pre) > code {
	color: #c6613f;
	background: color-mix(in srgb, #d97757 9%, transparent);
	border-color: transparent;
}
body[data-ds-dark-theme] [class*="_markdown"] :not(pre) > code {
	color: #e8916f;
	background: color-mix(in srgb, #d97757 16%, transparent);
}

/* Composer: floating rounded card, rounded-square clay send button */
[data-slot="conversation.composer"] :is([class$="_card"], [class*="_card "]) {
	border-radius: 20px;
	border: 1px solid var(--dsw-alias-border-l2);
	box-shadow: 0 0.25rem 1.25rem rgba(31, 30, 29, 0.035), 0 0 0 0.5px rgba(31, 30, 29, 0.08);
}
body[data-ds-dark-theme] [data-slot="conversation.composer"] :is([class$="_card"], [class*="_card "]) {
	box-shadow: 0 0.25rem 1.25rem rgba(0, 0, 0, 0.25);
}
[data-slot="conversation.composer"] :is([class$="_card"], [class*="_card "]):focus-within {
	border-color: var(--dsw-alias-border-l4);
}
[data-slot="conversation.composer"] button:is([class$="_primary"], [class*="_primary "]) {
	border-radius: 10px;
	corner-shape: round;
}
/*
 * In-chat composer, laid out like Claude Code: columns are
 * [+] [modes] [draft / left slot] [model] [activity] [send / context ring].
 * Row 1 holds attachments, row 2 the pill line, row 3 the controls under it;
 * ::before paints the pill behind rows 1-2.
 */
${SESSION_BAR} {
	display: grid;
	grid-template-columns: auto auto minmax(0, 1fr) auto auto auto;
	align-items: center;
	column-gap: 6px;
	box-sizing: border-box;
	width: min(100%, calc(var(--dsh-composer-card-max-width) + 2 * var(--dsh-composer-side-clearance)));
	margin: 0 auto;
	position: relative;
	isolation: isolate;
}
${SESSION_BAR}::before {
	content: "";
	grid-column: 1 / -1;
	grid-row: 1 / 3;
	align-self: stretch;
	z-index: -1;
	border: 1px solid var(--dsw-alias-border-l2);
	border-radius: 20px;
	background: var(--dsw-specific-input-major);
	box-shadow: 0 0.25rem 1.25rem rgba(31, 30, 29, 0.035), 0 0 0 0.5px rgba(31, 30, 29, 0.08);
}
body[data-ds-dark-theme] ${SESSION_BAR}::before { box-shadow: 0 0.25rem 1.25rem rgba(0, 0, 0, 0.25); }
${SESSION_BAR}:has([data-composer-card]:focus-within)::before { border-color: var(--dsw-alias-border-l4); }
${SESSION_CARD},
${SESSION_CARD} > ${CLS("row")},
${SESSION_CARD} > ${CLS("row")} > :is(${CLS("tools")}, ${CLS("trailing")}) { display: contents; }
/* A display:contents row measures 0px wide, which would fold the model picker to its icon */
${SESSION_CARD} > ${CLS("row")} { --dsh-composer-model-text-display: block; --dsh-composer-model-icon-display: none; }
${SESSION_CARD} > [data-composer-overlay] { grid-column: 1 / -1; grid-row: 1; align-self: start; position: relative; }
${SESSION_CARD} > [data-slot="conversation.input.attachments"] { grid-column: 1 / -1; grid-row: 1; padding: 8px 12px 0; }
${SESSION_CARD} > [data-slot="conversation.input.attachments"]:empty { display: none; }
/*
 * Pill line geometry: the draft's first line and the buttons share one centre,
 * 27px from the pill's bottom edge. The input keeps 4px above its text, so the
 * scroll pads 11px on top and 15px below (= 54px for one line); as the draft
 * grows, the buttons stay level with its last line.
 */
${SESSION_CARD} > [data-input-scroll] { grid-column: 2 / 5; grid-row: 2; align-self: stretch; margin: 0; padding: 11px 0 15px; }
${SESSION_CARD} [data-composer-input] { min-height: 28px; }
${SESSION_CARD} ${CLS("tools")} > ${CLS("add")} { grid-column: 1; grid-row: 2; align-self: end; margin: 0 0 13px 10px; background: transparent; }
${SESSION_CARD} ${CLS("trailing")} > ${CLS("activity")} { grid-column: 5; grid-row: 2; align-self: end; margin-bottom: 12px; }
${SESSION_CARD} ${CLS("trailing")} > button${CLS("primary")} { grid-column: 6; grid-row: 2; align-self: end; justify-self: end; margin: 0 10px 11px 0; transform: none; width: 32px; height: 32px; }
${SESSION_CARD} ${CLS("tools")} > ${CLS("modes")} { grid-column: 1 / 3; grid-row: 3; justify-self: start; display: flex; align-items: center; gap: 8px; padding-top: 6px; margin-left: 9px; }
${SESSION_CARD} ${CLS("tools")} > [data-slot="conversation.input.left"] { grid-column: 3; grid-row: 3; justify-self: start; padding-top: 6px; }
${SESSION_CARD} ${CLS("trailing")} > ${CLS("standardControls")} { grid-column: 4 / 6; grid-row: 3; justify-self: end; padding-top: 6px; }
${SESSION_BAR} > [data-composer-dock] { grid-column: 6; grid-row: 3; justify-self: end; padding-top: 6px; gap: 4px; margin-right: 2px; }
/* Turn / token pills fold into the context ring's panel (see "context ring stats"); the ring stays */
${SESSION_BAR} > [data-composer-dock] [data-composer-stat] { display: none; }
/* DeepSeek peak / off-peak billing tints the ring: red at peak, green off-peak (see "context ring stats") */
body { --claude-ui-tariff-peak: #d1453b; --claude-ui-tariff-offpeak: #3f9a5c; }
body[data-ds-dark-theme] { --claude-ui-tariff-peak: #ef6a5e; --claude-ui-tariff-offpeak: #5cbf7d; }
body[data-claude-ui-tariff=peak] { --claude-ui-tariff: var(--claude-ui-tariff-peak); }
body[data-claude-ui-tariff=offpeak] { --claude-ui-tariff: var(--claude-ui-tariff-offpeak); }
body[data-claude-ui-tariff] [data-composer-dock] button[aria-haspopup=dialog] ${CLS("fill")} { stroke: var(--claude-ui-tariff); }
body[data-claude-ui-tariff] [data-composer-dock] button[aria-haspopup=dialog] ${CLS("track")} { stroke: color-mix(in srgb, var(--claude-ui-tariff) 40%, transparent); }

/*
 * A little pixel whale resting on the new-chat composer's top edge. ::after is
 * the body, ::before the spout / z's over its head. Idle it bobs, blinks and
 * now and then spouts; it wags its tail while you type, hops off when you send
 * (riding the composer into the chat for a moment) and dozes late at night.
 */
body { ${WHALE_VARS} }
${WHALE_HOST}::after, ${WHALE_JUMP_HOST}::after {
	content: "";
	position: absolute;
	right: ${WHALE_RIGHT}px;
	bottom: calc(100% - 3px);
	width: ${WHALE_WIDTH}px;
	height: ${WHALE_HEIGHT}px;
	background: var(--claude-ui-whale-open) no-repeat center / contain;
	image-rendering: pixelated;
	pointer-events: none;
	animation: claude-ui-whale-bob 3.2s ease-in-out infinite, claude-ui-whale-blink 5.3s steps(1, end) infinite;
}
${WHALE_HOST}::before {
	content: "";
	position: absolute;
	bottom: calc(100% - 3px + ${(WHALE_FRAMES.open.length - 1) * WHALE_CELL}px);
	${overlayBox(WHALE_OVERLAYS.spout)}
	background: var(--claude-ui-whale-spout) no-repeat center / contain;
	image-rendering: pixelated;
	pointer-events: none;
	clip-path: inset(100% 0 0 0);
	animation: claude-ui-whale-bob 3.2s ease-in-out infinite, claude-ui-whale-spout 9s steps(1, end) infinite;
}
body[${WHALE_ATTR}=typing] ${WHALE_HOST}::after { animation: claude-ui-whale-wag 0.36s steps(1, end) infinite; }
body[${WHALE_ATTR}=typing] ${WHALE_HOST}::before { animation: none; }
body[${WHALE_ATTR}=sleep] ${WHALE_HOST}::after {
	background-image: var(--claude-ui-whale-sleep);
	animation: claude-ui-whale-bob 5s ease-in-out infinite;
}
body[${WHALE_ATTR}=sleep] ${WHALE_HOST}::before {
	${overlayBox(WHALE_OVERLAYS.zzz)}
	margin: 0 -${WHALE_CELL * 3}px ${WHALE_CELL * 2}px 0;
	background-image: var(--claude-ui-whale-zzz);
	clip-path: none;
	animation: claude-ui-whale-zzz 3s ease-in-out infinite;
}
${WHALE_JUMP_HOST}::after { animation: claude-ui-whale-hop 0.8s ease-out forwards; }
body[${WHALE_ATTR}=jump] ${WHALE_HOST}::before { animation: none; }
@keyframes claude-ui-whale-bob {
	0%, 100% { translate: 0 0; }
	50% { translate: 0 -2px; }
}
@keyframes claude-ui-whale-blink {
	0%, 100% { background-image: var(--claude-ui-whale-open); }
	93% { background-image: var(--claude-ui-whale-blink); }
	96% { background-image: var(--claude-ui-whale-open); }
}
@keyframes claude-ui-whale-spout {
	0%, 100% { clip-path: inset(100% 0 0 0); }
	82% { clip-path: inset(50% 0 0 0); }
	84% { clip-path: inset(0 0 0 0); }
	92% { clip-path: inset(50% 0 0 0); }
	94% { clip-path: inset(100% 0 0 0); }
}
@keyframes claude-ui-whale-wag {
	0%, 100% { background-image: var(--claude-ui-whale-open); }
	50% { background-image: var(--claude-ui-whale-tail); }
}
@keyframes claude-ui-whale-zzz {
	0% { opacity: 0; translate: 0 4px; }
	30% { opacity: 1; }
	100% { opacity: 0; translate: 6px -10px; }
}
@keyframes claude-ui-whale-hop {
	0% { translate: 0 0; }
	35% { translate: 0 -18px; }
	60% { translate: 0 0; opacity: 1; }
	100% { translate: 0 -6px; opacity: 0; }
}
@media (prefers-reduced-motion: reduce) {
	${WHALE_HOST}::after, ${WHALE_HOST}::before, ${WHALE_JUMP_HOST}::after { animation: none !important; }
	${WHALE_JUMP_HOST}::after { content: none; }
}

/* Tool cards: thin hairline, small radius */
[data-slot="conversation.session"] :is([class$="_card"], [class*="_card "], [class$="_ioCard"], [class*="_ioCard "]) {
	border-radius: 10px;
	border-color: var(--dsw-alias-border-l2);
	box-shadow: none;
}

[role=dialog] { border-radius: 16px; }
::selection { background: color-mix(in srgb, #d97757 28%, transparent); }
`;
		/** dshmarket's own sidebar-entry switch, resolved against the page base like the market does. */
		const MARKET_SIDEBAR_ENTRY = () => new URL("dsh-market/sidebar-entry", document.baseURI).pathname;
		/**
		* Turn on dshmarket's sidebar entry once, only while nobody has chosen;
		* an explicit off from the market's own settings is kept. The market reads
		* the choice at boot, so the row appears from the next load.
		*/
		async function defaultMarketSidebarOn() {
			const current = await fetch(MARKET_SIDEBAR_ENTRY(), { cache: "no-store" });
			if (!current.ok) return;
			const { chosen } = await current.json();
			if (chosen) return;
			await fetch(MARKET_SIDEBAR_ENTRY(), {
				method: "POST",
				headers: { "content-type": "application/json" },
				body: JSON.stringify({ enabled: true })
			});
		}
		const GREETING_VAR = "--claude-ui-greeting";
		const GREETING_ATTR = "data-claude-ui-greeting";
		/** Client version the account remote expects; dsh exposes no global for it. */
		const ACCOUNT_CLIENT_VERSION = "0.2.1-rc.3";
		const WEEKDAYS_ZH = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
		const WEEKDAYS_EN = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
		/**
		* Greeting pools by period. Each line takes the account name (possibly
		* empty) and the weekday index; lines that read badly without a name drop it.
		*/
		const withName = (zh) => (base, name) => name ? `${base}${zh ? "，" : ", "}${name}` : base;
		const zhName = withName(true);
		const enName = withName(false);
		const GREETINGS = {
			zh: {
				morning: [
					(n) => zhName("早上好", n),
					(n) => zhName("早安", n),
					(n) => n ? `${n}，咖啡准备好了吗？` : "咖啡准备好了吗？",
					() => "新的一天，从这里开始",
					(n) => n ? `早，${n}。今天想做点什么？` : "今天想做点什么？"
				],
				afternoon: [
					(n, d) => zhName(`${WEEKDAYS_ZH[d]}快乐`, n),
					(n) => zhName("下午好", n),
					(n) => n ? `来杯下午茶吗，${n}？` : "来杯下午茶吗？",
					(n) => zhName("继续加油", n),
					() => "下午的灵感正当时"
				],
				evening: [
					(n) => zhName("晚上好", n),
					(n) => n ? `今天过得怎么样，${n}？` : "今天过得怎么样？",
					(n) => n ? `${n}，忙了一天辛苦了` : "忙了一天，辛苦了",
					() => "夜晚适合安静地思考"
				],
				night: [
					(n) => zhName("夜深了", n),
					(n) => n ? `还没睡呀，${n}？` : "还没睡呀？",
					() => "夜猫子时间",
					() => "安静的深夜，适合专注"
				],
				anytime: [
					(n) => zhName("欢迎回来", n),
					(n) => zhName("又见面了", n),
					() => "今天想聊点什么？",
					(n) => n ? `${n}，准备好了吗？` : "准备好了吗？"
				],
				weekend: [
					(n) => zhName("周末愉快", n),
					(n) => n ? `周末也在忙呀，${n}？` : "周末也在忙呀？"
				]
			},
			en: {
				morning: [
					(n) => enName("Good morning", n),
					(n) => enName("Morning", n),
					(n) => n ? `Coffee and code, ${n}?` : "Coffee and code?",
					() => "A fresh start",
					(n) => n ? `What's on today, ${n}?` : "What's on today?"
				],
				afternoon: [
					(n, d) => enName(`Happy ${WEEKDAYS_EN[d]}`, n),
					(n) => enName("Good afternoon", n),
					(n) => n ? `Afternoon tea, ${n}?` : "Afternoon tea?",
					(n) => enName("Keep it going", n),
					() => "Prime time for ideas"
				],
				evening: [
					(n) => enName("Good evening", n),
					(n) => n ? `How was your day, ${n}?` : "How was your day?",
					(n) => n ? `Long day, ${n}?` : "Long day?",
					() => "Evening thinking time"
				],
				night: [
					(n) => enName("Burning the midnight oil", n),
					(n) => n ? `Still up, ${n}?` : "Still up?",
					() => "Night owl hours",
					() => "Quiet hours, deep focus"
				],
				anytime: [
					(n) => enName("Welcome back", n),
					(n) => enName("Back at it", n),
					() => "What shall we think through?",
					(n) => n ? `Ready when you are, ${n}` : "Ready when you are"
				],
				weekend: [
					(n) => enName("Happy weekend", n),
					(n) => n ? `Working the weekend, ${n}?` : "Working the weekend?"
				]
			}
		};
		/** Period of the day a time falls in; it also keys how long a pick stays. */
		function period(date) {
			const hour = date.getHours();
			if (hour >= 5 && hour < 12) return "morning";
			if (hour >= 12 && hour < 18) return "afternoon";
			if (hour >= 18 && hour < 23) return "evening";
			return "night";
		}
		/**
		* Claude-style hero line: one line from the period's pool plus the shared
		* anytime pool (and the weekend pool on Saturday/Sunday daytime).
		* @param date - current time.
		* @param locale - active UI locale id.
		* @param name - account display name, or empty.
		* @param pick - stable random number in [0, 1) choosing the line.
		*/
		function greeting(date, locale, name, pick) {
			const pools = GREETINGS[locale.toLowerCase().startsWith("zh") ? "zh" : "en"];
			const part = period(date);
			const day = date.getDay();
			const weekend = (day === 0 || day === 6) && part !== "night";
			const lines = [...pools[part], ...pools.anytime, ...weekend ? pools.weekend : []];
			return lines[Math.floor(pick * lines.length) % lines.length](name, day);
		}
		/** Required services: the theme runtime and the locale runtime. */
		const inject = ["theme", "locale"];
		/**
		* Stack the Claude palette over the active theme and mount the layout sheet;
		* both are retracted when the plugin unloads.
		* @param ctx - plugin context.
		*/
		function apply(ctx) {
			ctx.effect(() => ctx.theme.overrideTokens(SOURCE, { ...STATIC_TOKENS, ...ALIAS_TOKENS }), "dsh-claude-ui: palette");
			ctx.effect(() => {
				const style = document.createElement("style");
				style.id = STYLE_ID;
				style.textContent = CSS;
				document.head.append(style);
				return () => style.remove();
			}, "dsh-claude-ui: layout stylesheet");
			let accountName = "";
			ctx.effect(() => {
				let shown;
				/** Re-roll the line only when the period (or day) changes, so it never flickers. */
				let pickKey;
				let pick = 0;
				const render = () => {
					const now = new Date();
					const key = `${now.toDateString()}|${period(now)}`;
					if (key !== pickKey) {
						pickKey = key;
						pick = Math.random();
					}
					const text = greeting(now, ctx.locale.getSnapshot().active, accountName, pick);
					if (text === shown) return;
					shown = text;
					document.body.style.setProperty(GREETING_VAR, JSON.stringify(text));
					document.body.setAttribute(GREETING_ATTR, "");
				};
				render();
				const timer = setInterval(render, 60000);
				const offLocale = ctx.on("locale/change", render);
				const offName = ctx.on("claude-ui/account-name", render);
				return () => {
					clearInterval(timer);
					offLocale();
					offName();
					document.body.style.removeProperty(GREETING_VAR);
					document.body.removeAttribute(GREETING_ATTR);
				};
			}, "dsh-claude-ui: hero greeting");
			ctx.effect(() => {
				const body = document.body;
				/** True when the event came from the new-chat (hero) composer. */
				const inHero = (target) => target instanceof Element && !!target.closest(COMPOSER)?.querySelector(HERO);
				/** Text waiting in the composer; an empty Enter sends nothing, so no hop. */
				const draft = (target) => {
					const field = target.closest(COMPOSER)?.querySelector("textarea, [contenteditable=true]");
					return (field?.value ?? field?.textContent ?? "").trim();
				};
				let typing = false;
				let jumping = false;
				let typingTimer;
				let jumpTimer;
				const sync = () => {
					const mood = jumping ? "jump" : typing ? "typing" : period(new Date()) === "night" ? "sleep" : "";
					if (mood) body.setAttribute(WHALE_ATTR, mood);
					else body.removeAttribute(WHALE_ATTR);
				};
				const hop = () => {
					jumping = true;
					typing = false;
					clearTimeout(jumpTimer);
					jumpTimer = setTimeout(() => {
						jumping = false;
						sync();
					}, 800);
					sync();
				};
				const onInput = (event) => {
					if (!inHero(event.target)) return;
					typing = true;
					clearTimeout(typingTimer);
					typingTimer = setTimeout(() => {
						typing = false;
						sync();
					}, 700);
					sync();
				};
				const onKey = (event) => {
					if (event.key === "Enter" && !event.shiftKey && !event.isComposing && inHero(event.target) && draft(event.target)) hop();
				};
				const onClick = (event) => {
					const button = event.target instanceof Element ? event.target.closest(`${COMPOSER} button:is([class$="_primary"], [class*="_primary "])`) : null;
					if (button && !button.disabled && inHero(button)) hop();
				};
				document.addEventListener("input", onInput, true);
				document.addEventListener("keydown", onKey, true);
				document.addEventListener("click", onClick, true);
				const timer = setInterval(sync, 60000);
				sync();
				return () => {
					document.removeEventListener("input", onInput, true);
					document.removeEventListener("keydown", onKey, true);
					document.removeEventListener("click", onClick, true);
					clearInterval(timer);
					clearTimeout(typingTimer);
					clearTimeout(jumpTimer);
					body.removeAttribute(WHALE_ATTR);
				};
			}, "dsh-claude-ui: whale moods");
			ctx.effect(() => {
				/*
				* The in-chat composer hides its turn / token pills (CSS above); their
				* readings move into the context ring's click-open panel, a body-level
				* dialog, as extra rows under its own legend, together with DeepSeek's
				* peak / off-peak billing state. The pills stay mounted, so their labels
				* are the live source; the rows refresh while the panel is open. The
				* panel re-anchors itself when it grows, so it is never moved here.
				*/
				const MARK = "data-claude-ui-stats";
				const TARIFF_ATTR = "data-claude-ui-tariff";
				const LABELS = {
					zh: { activity: "运行", usage: "用量", tariff: "计费", peak: "高峰", offpeak: "低谷", until: (state, when) => `${when} 转${state}`, tomorrow: "明天", weekdays: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"] },
					en: { activity: "Activity", usage: "Usage", tariff: "Billing", peak: "Peak", offpeak: "Off-peak", until: (state, when) => `${state.toLowerCase()} from ${when}`, tomorrow: "tomorrow", weekdays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"] }
				};
				const labelSet = () => LABELS[ctx.locale.getSnapshot().active.toLowerCase().startsWith("zh") ? "zh" : "en"];
				/*
				* DeepSeek API billing: peak is Mon–Fri 09:00–12:00 and 14:00–18:00
				* Beijing time (UTC+8), off-peak at half price otherwise. Statutory
				* holidays are also off-peak but aren't known here, so they read as weekdays.
				*/
				const HOUR = 3600000;
				const isPeak = (time) => {
					const bj = new Date(time + 8 * HOUR);
					const day = bj.getUTCDay();
					const hour = bj.getUTCHours();
					return day >= 1 && day <= 5 && (hour >= 9 && hour < 12 || hour >= 14 && hour < 18);
				};
				const tariff = (now = Date.now()) => {
					const peak = isPeak(now);
					// Every boundary falls on a whole hour, which is a whole hour in UTC too.
					let next = Math.floor(now / HOUR) * HOUR + HOUR;
					while (isPeak(next) === peak) next += HOUR;
					return { peak, next: new Date(next) };
				};
				const formatWhen = (date, labels) => {
					const time = `${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}`;
					const today = new Date();
					const days = Math.round((new Date(date).setHours(0, 0, 0, 0) - today.setHours(0, 0, 0, 0)) / (24 * HOUR));
					if (days <= 0) return time;
					return `${days === 1 ? labels.tomorrow : labels.weekdays[date.getDay()]} ${time}`;
				};
				const paintTariff = () => document.body.setAttribute(TARIFF_ATTR, isPeak(Date.now()) ? "peak" : "offpeak");
				const isRingPanel = (el) => el instanceof HTMLElement && el.getAttribute("role") === "dialog" && el.querySelector(":scope > [class*='_rows']") && el.querySelector("[class*='_segment']");
				const fill = (panel) => {
					const rows = panel.querySelector(":scope > [class*='_rows']");
					const legendRow = rows?.firstElementChild;
					if (!rows || !legendRow) return;
					const labels = labelSet();
					const stats = [...document.querySelectorAll(`${SESSION_BAR} [data-composer-stat]`)].map((anchor) => [labels[anchor.dataset.composerStat] ?? anchor.dataset.composerStat, anchor.querySelector("[aria-label]")?.getAttribute("aria-label") ?? anchor.textContent]).filter(([, text]) => text);
					const { peak, next } = tariff();
					stats.push([labels.tariff, `${labels[peak ? "peak" : "offpeak"]} · ${labels.until(labels[peak ? "offpeak" : "peak"], formatWhen(next, labels))}`, peak ? "peak" : "offpeak"]);
					let block = panel.querySelector(`:scope > [${MARK}]`);
					if (!block) {
						block = document.createElement("dl");
						block.className = rows.className;
						block.setAttribute(MARK, "");
						block.style.cssText = "margin-top: 8px; padding-top: 8px; border-top: 1px solid var(--dsw-alias-border-l2);";
						panel.append(block);
					}
					const html = stats.map(([label, text, state]) => {
						const row = legendRow.cloneNode(false);
						const dt = document.createElement("dt");
						const dd = document.createElement("dd");
						dt.textContent = label;
						if (state) {
							const dot = document.createElement("span");
							dot.style.cssText = `display: inline-block; width: 8px; height: 8px; border-radius: 50%; margin-right: 6px; background: var(--claude-ui-tariff-${state});`;
							dt.prepend(dot);
						}
						dd.textContent = text;
						row.append(dt, dd);
						return row.outerHTML;
					}).join("");
					if (block.innerHTML !== html) block.innerHTML = html;
				};
				let timer;
				const scan = () => {
					const panel = [...document.body.children].find(isRingPanel);
					clearInterval(timer);
					timer = void 0;
					if (!panel) return;
					if (!panel.hasAttribute(MARK)) {
						// Rows added here grow the panel after it was anchored; keep it hidden for the frame until it re-anchors.
						panel.setAttribute(MARK, "");
						const top = panel.style.top;
						panel.style.visibility = "hidden";
						const reveal = () => {
							moved.disconnect();
							clearTimeout(fallback);
							panel.style.visibility = "";
						};
						const moved = new MutationObserver(() => panel.style.top !== top && reveal());
						moved.observe(panel, { attributes: true, attributeFilter: ["style"] });
						const fallback = setTimeout(reveal, 150);
					}
					fill(panel);
					timer = setInterval(() => panel.isConnected ? fill(panel) : scan(), 1000);
				};
				const observer = new MutationObserver(scan);
				observer.observe(document.body, { childList: true });
				paintTariff();
				const tariffTimer = setInterval(paintTariff, 30000);
				return () => {
					observer.disconnect();
					clearInterval(timer);
					clearInterval(tariffTimer);
					document.body.removeAttribute(TARIFF_ATTR);
					document.querySelectorAll(`dl[${MARK}]`).forEach((el) => el.remove());
				};
			}, "dsh-claude-ui: context ring stats");
			ctx.plugin({ name: "dsh-claude-ui/account-name", inject: ["remote", "remote.account"], apply: (scoped) => {
				scoped.remote.account.getProfile({
					version: ACCOUNT_CLIENT_VERSION,
					locale: ctx.locale.getSnapshot().active,
					timezoneOffsetSeconds: -new Date().getTimezoneOffset() * 60
				}).then((result) => {
					const profile = result?.ok ? result.value : void 0;
					const name = profile?.status === "ready" ? profile.value?.name : void 0;
					if (typeof name !== "string" || name.trim() === "") return;
					accountName = name.trim();
					ctx.emit("claude-ui/account-name");
				}).catch(() => {});
			} });
			ctx.inject(["market"], () => {
				defaultMarketSidebarOn().catch(() => {});
			});
		}
		exports.apply = apply;
		exports.inject = inject;
		return module.exports;
	}
});
