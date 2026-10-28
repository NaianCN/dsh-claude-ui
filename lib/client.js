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
${SESSION_CARD} > [data-input-scroll] { grid-column: 2 / 5; grid-row: 2; align-self: center; margin: 0; padding: 9px 0; }
${SESSION_CARD} ${CLS("tools")} > ${CLS("add")} { grid-column: 1; grid-row: 2; align-self: end; margin: 0 0 9px 10px; background: transparent; }
${SESSION_CARD} ${CLS("trailing")} > ${CLS("activity")} { grid-column: 5; grid-row: 2; align-self: end; margin-bottom: 12px; }
${SESSION_CARD} ${CLS("trailing")} > button${CLS("primary")} { grid-column: 6; grid-row: 2; align-self: end; justify-self: end; margin: 0 8px 7px 0; transform: none; width: 32px; height: 32px; }
${SESSION_CARD} ${CLS("tools")} > ${CLS("modes")} { grid-column: 1 / 3; grid-row: 3; justify-self: start; display: flex; align-items: center; gap: 8px; padding-top: 6px; }
${SESSION_CARD} ${CLS("tools")} > [data-slot="conversation.input.left"] { grid-column: 3; grid-row: 3; justify-self: start; padding-top: 6px; }
${SESSION_CARD} ${CLS("trailing")} > ${CLS("standardControls")} { grid-column: 4 / 6; grid-row: 3; justify-self: end; padding-top: 6px; }
${SESSION_BAR} > [data-composer-dock] { grid-column: 6; grid-row: 3; justify-self: end; padding-top: 6px; gap: 4px; }
/* Turn / token pills move to the right-hand session panel; the context ring stays */
${SESSION_BAR} > [data-composer-dock] [data-composer-stat] { display: none; }

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
		/*
		* Right-sidebar "Session" tab: Claude Code style cards for the open session's
		* environment, context window and run stats, each collapsible and each one
		* switchable from the panel's ⋯ menu. Values come from the session's own
		* projections, the same ones the composer's stats pills read.
		*/
		const React = require("react");
		const h = React.createElement;
		const PANEL_ID = "dsh-claude-ui/session";
		const PANEL_KIND = "claude-ui-session";
		const PANEL_NS = "claudeUiSession";
		const PANEL_PREFS = "dsh-claude-ui:session-panel";
		const PANEL_CARDS = ["env", "context", "session"];
		const PANEL_ZH = {
			"type.label": "会话",
			"guide.title": "会话信息",
			"guide.description": "查看环境、上下文和会话详情",
			"menu.label": "显示的内容",
			"card.env": "环境",
			"card.context": "上下文",
			"card.session": "会话",
			"env.path": "路径",
			"env.model": "模型",
			"env.none": "无工作区",
			"context.used": "已用",
			"context.system": "系统提示",
			"context.tools": "工具",
			"context.messages": "对话",
			"session.title": "标题",
			"session.state": "状态",
			"session.running": "运行中",
			"session.idle": "空闲",
			"session.turns": "{n} 轮",
			"session.steps": "步数",
			"session.speed": "输出速度",
			"session.tokens": "Token 用量",
			"session.cacheHit": "缓存命中",
			"session.updated": "最近活动",
			empty: "—",
			allHidden: "所有卡片都已隐藏，可在右上角 ⋯ 里重新打开。"
		};
		const PANEL_EN = {
			"type.label": "Session",
			"guide.title": "Session info",
			"guide.description": "Environment, context and session details",
			"menu.label": "Show",
			"card.env": "Environment",
			"card.context": "Context",
			"card.session": "Session",
			"env.path": "Path",
			"env.model": "Model",
			"env.none": "No workspace",
			"context.used": "Used",
			"context.system": "System prompt",
			"context.tools": "Tools",
			"context.messages": "Conversation",
			"session.title": "Title",
			"session.state": "State",
			"session.running": "Running",
			"session.idle": "Idle",
			"session.turns": "{n} turns",
			"session.steps": "Steps",
			"session.speed": "Output speed",
			"session.tokens": "Tokens",
			"session.cacheHit": "Cache hit",
			"session.updated": "Last active",
			empty: "—",
			allHidden: "Every card is hidden; turn them back on from ⋯ above."
		};
		const PANEL_CSS = `
.claude-ui-sp { box-sizing: border-box; height: 100%; overflow-y: auto; padding: 12px; display: flex; flex-direction: column; gap: 10px; font-size: 13px; color: var(--dsw-alias-label-secondary); }
.claude-ui-sp-bar { display: flex; justify-content: flex-end; position: relative; margin-bottom: -4px; }
.claude-ui-sp-more { width: 26px; height: 26px; border: none; border-radius: 6px; background: transparent; color: var(--dsw-alias-label-tertiary); cursor: pointer; font-size: 16px; line-height: 1; }
.claude-ui-sp-more:hover, .claude-ui-sp-more[aria-expanded=true] { background: var(--dsw-alias-interactive-bg-hover); color: var(--dsw-alias-label-primary); }
.claude-ui-sp-menu { position: absolute; top: 30px; right: 0; z-index: 10; min-width: 160px; padding: 6px; border-radius: 10px; background: var(--dsw-specific-menu); box-shadow: var(--dsw-elevation-panel); }
.claude-ui-sp-menu-label { padding: 4px 8px; font-size: 12px; color: var(--dsw-alias-label-tertiary); }
.claude-ui-sp-menu label { display: flex; align-items: center; gap: 8px; padding: 6px 8px; border-radius: 6px; cursor: pointer; color: var(--dsw-alias-label-primary); }
.claude-ui-sp-menu label:hover { background: var(--dsw-alias-interactive-bg-hover); }
.claude-ui-sp-menu input { accent-color: #d97757; margin: 0; }
.claude-ui-sp-card { border: 1px solid var(--dsw-alias-border-l2); border-radius: 14px; background: var(--dsw-specific-input-major); }
.claude-ui-sp-head { all: unset; box-sizing: border-box; width: 100%; display: flex; align-items: center; gap: 8px; padding: 14px 16px; cursor: pointer; border-radius: 14px; }
.claude-ui-sp-head:focus-visible { outline: 2px solid #d97757; outline-offset: -2px; }
.claude-ui-sp-title { font-weight: 500; color: var(--dsw-alias-label-primary); }
.claude-ui-sp-tri { width: 0; height: 0; border-style: solid; border-color: transparent transparent transparent currentColor; border-width: 3.5px 0 3.5px 5px; color: var(--dsw-alias-label-tertiary); transition: rotate 0.15s ease; }
.claude-ui-sp-card[data-open] .claude-ui-sp-tri { rotate: 90deg; }
.claude-ui-sp-value { margin-left: auto; display: flex; align-items: center; gap: 8px; min-width: 0; color: var(--dsw-alias-label-tertiary); font-variant-numeric: tabular-nums; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.claude-ui-sp-meter { flex: none; width: 28px; height: 4px; border-radius: 999px; background: var(--dsw-alias-interactive-bg-hover); overflow: hidden; }
.claude-ui-sp-meter > span { display: block; height: 100%; border-radius: inherit; background: #3b82f6; }
.claude-ui-sp-body { margin: 0; padding: 0 16px 14px; display: grid; grid-template-columns: auto minmax(0, 1fr); gap: 6px 16px; }
.claude-ui-sp-body dt { color: var(--dsw-alias-label-tertiary); }
.claude-ui-sp-body dd { margin: 0; text-align: right; color: var(--dsw-alias-label-primary); font-variant-numeric: tabular-nums; overflow-wrap: anywhere; }
.claude-ui-sp-empty { padding: 24px 8px; text-align: center; color: var(--dsw-alias-label-tertiary); }
.claude-ui-sp-glyph { color: #d97757; }
`;
		/** Saved panel choices: which cards show, which are expanded. */
		function readPanelPrefs() {
			const fallback = { show: { env: true, context: true, session: true }, open: {} };
			try {
				const saved = JSON.parse(localStorage.getItem(PANEL_PREFS) ?? "null");
				return saved && typeof saved === "object" ? { show: { ...fallback.show, ...saved.show }, open: { ...saved.open } } : fallback;
			} catch {
				return fallback;
			}
		}
		function writePanelPrefs(prefs) {
			try {
				localStorage.setItem(PANEL_PREFS, JSON.stringify(prefs));
			} catch {}
		}
		/** 10.5K / 1.2M style token counts. */
		function compactTokens(n) {
			if (!Number.isFinite(n)) return void 0;
			if (n >= 1e6) return `${(n / 1e6).toFixed(n >= 1e7 ? 0 : 1)}M`;
			if (n >= 1e3) return `${(n / 1e3).toFixed(n >= 1e4 ? 1 : 2).replace(/\.?0+$/, "")}K`;
			return String(Math.round(n));
		}
		const lastSegment = (path) => path?.replace(/[/\\]+$/, "").split(/[/\\]/).pop() || path;
		const NO_SUBSCRIBE = () => () => {};
		const NO_VALUE = () => void 0;
		/**
		* Build the tab's body component around the sessions service.
		* @param sessions - the client sessions service (bindings carry projections).
		*/
		function sessionPanel(sessions) {
			/** Live value of one session projection key, or undefined while absent. */
			function useProjection(sessionId, key) {
				const face = React.useMemo(() => sessions.binding(sessionId)?.session.projections.faceOf(key), [sessionId, key]);
				const subscribe = React.useCallback((listener) => face ? face.subscribe(listener) : () => {}, [face]);
				const read = React.useCallback(() => face?.getSnapshot(), [face]);
				return React.useSyncExternalStore(face ? subscribe : NO_SUBSCRIBE, face ? read : NO_VALUE);
			}
			const row = (label, value) => value === void 0 || value === null || value === "" ? null : [h("dt", { key: `${label}-t` }, label), h("dd", { key: `${label}-d` }, value)];
			function Card({ id, title, value, open, onToggle, children }) {
				return h("section", { className: "claude-ui-sp-card", "data-open": open ? "" : void 0 },
					h("button", { type: "button", className: "claude-ui-sp-head", "aria-expanded": open, onClick: () => onToggle(id) },
						h("span", { className: "claude-ui-sp-title" }, title),
						h("span", { className: "claude-ui-sp-tri", "aria-hidden": true }),
						h("span", { className: "claude-ui-sp-value" }, value)),
					open && h("dl", { className: "claude-ui-sp-body" }, children));
			}
			return function SessionPanel({ sessionId, useSessions, t }) {
				const summary = useSessions((s) => s.byId[sessionId]);
				const model = useProjection(sessionId, "modelSelection");
				const pressure = useProjection(sessionId, "contextPressure");
				const breakdown = useProjection(sessionId, "contextBreakdown");
				const stats = useProjection(sessionId, "sessionStats");
				const usage = useProjection(sessionId, "tokenUsage");
				const [prefs, setPrefs] = React.useState(readPanelPrefs);
				const [menu, setMenu] = React.useState(false);
				const barRef = React.useRef(null);
				React.useEffect(() => {
					if (!menu) return;
					const close = (event) => {
						if (!barRef.current?.contains(event.target)) setMenu(false);
					};
					const esc = (event) => {
						if (event.key === "Escape") setMenu(false);
					};
					document.addEventListener("pointerdown", close, true);
					document.addEventListener("keydown", esc, true);
					return () => {
						document.removeEventListener("pointerdown", close, true);
						document.removeEventListener("keydown", esc, true);
					};
				}, [menu]);
				const update = (next) => {
					setPrefs(next);
					writePanelPrefs(next);
				};
				const toggleOpen = (id) => update({ ...prefs, open: { ...prefs.open, [id]: !prefs.open[id] } });
				const toggleShow = (id) => update({ ...prefs, show: { ...prefs.show, [id]: !prefs.show[id] } });
				const empty = t("empty");
				const selection = model?.next ?? model?.lastUsed;
				const modelText = selection?.model ? [selection.model, selection.reasoningEffort].filter(Boolean).join(" · ") : void 0;
				const used = pressure?.projectedTokens ?? pressure?.pressureTokens;
				const capacity = pressure?.contextWindow;
				const percent = used !== void 0 && capacity ? Math.min(100, Math.round(used / capacity * 100)) : void 0;
				const billed = usage ? usage.uncachedInputTokens + usage.cacheReadTokens + usage.cacheWriteTokens : 0;
				const cacheHit = billed > 0 ? `${Math.floor(usage.cacheReadTokens / billed * 1000) / 10}%` : void 0;
				const speed = stats?.decodeMs > 0 ? `${(stats.decodeTokens / (stats.decodeMs / 1e3)).toFixed(0)} tok/s` : void 0;
				const updated = summary?.updatedAt ? new Date(summary.updatedAt).toLocaleString() : void 0;
				const cards = {
					env: () => h(Card, { key: "env", id: "env", title: t("card.env"), open: !!prefs.open.env, onToggle: toggleOpen, value: summary?.cwd ? lastSegment(summary.cwd) : t("env.none") },
						row(t("env.path"), summary?.cwd), row(t("env.model"), modelText)),
					context: () => h(Card, { key: "context", id: "context", title: t("card.context"), open: !!prefs.open.context, onToggle: toggleOpen,
						value: percent === void 0 ? empty : [h("span", { key: "p" }, `${percent}%`), h("span", { key: "m", className: "claude-ui-sp-meter" }, h("span", { style: { width: `${Math.max(percent, 2)}%` } }))] },
						row(t("context.used"), used !== void 0 && capacity ? `${compactTokens(used)} / ${compactTokens(capacity)}` : void 0),
						row(t("context.system"), breakdown ? compactTokens(breakdown.systemTokens) : void 0),
						row(t("context.tools"), breakdown ? compactTokens(breakdown.toolsTokens) : void 0),
						row(t("context.messages"), breakdown ? compactTokens(breakdown.messageTokens) : void 0)),
					session: () => h(Card, { key: "session", id: "session", title: t("card.session"), open: !!prefs.open.session, onToggle: toggleOpen,
						value: stats ? t("session.turns", { n: stats.turns }) : empty },
						row(t("session.title"), summary?.title),
						row(t("session.state"), summary ? t(summary.running ? "session.running" : "session.idle") : void 0),
						row(t("session.steps"), stats?.steps),
						row(t("session.speed"), speed),
						row(t("session.tokens"), usage ? compactTokens(billed + usage.outputTokens) : void 0),
						row(t("session.cacheHit"), cacheHit),
						row(t("session.updated"), updated))
				};
				const visible = PANEL_CARDS.filter((id) => prefs.show[id]);
				return h("div", { className: "claude-ui-sp" },
					h("div", { className: "claude-ui-sp-bar", ref: barRef },
						h("button", { type: "button", className: "claude-ui-sp-more", "aria-label": t("menu.label"), "aria-haspopup": "true", "aria-expanded": menu, onClick: () => setMenu(!menu) }, "⋯"),
						menu && h("div", { className: "claude-ui-sp-menu", role: "group", "aria-label": t("menu.label") },
							h("div", { className: "claude-ui-sp-menu-label" }, t("menu.label")),
							PANEL_CARDS.map((id) => h("label", { key: id },
								h("input", { type: "checkbox", checked: !!prefs.show[id], onChange: () => toggleShow(id) }),
								t(`card.${id}`))))),
					visible.length ? visible.map((id) => cards[id]()) : h("div", { className: "claude-ui-sp-empty" }, t("allHidden")));
			};
		}
		/** Guide glyph: a panel with two stacked cards, in clay. */
		function SessionGlyph({ size = 22, className }) {
			return h("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", className: ["claude-ui-sp-glyph", className].filter(Boolean).join(" "), "aria-hidden": true },
				h("rect", { x: 3, y: 3.5, width: 18, height: 17, rx: 3.5, stroke: "currentColor", strokeWidth: 1.6 }),
				h("rect", { x: 6.5, y: 7, width: 11, height: 4, rx: 1.4, fill: "currentColor", opacity: 0.85 }),
				h("rect", { x: 6.5, y: 13, width: 11, height: 4, rx: 1.4, fill: "currentColor", opacity: 0.45 }));
		}
		function SessionTitle({ useTabInfo }) {
			const { tab } = useTabInfo();
			return h(React.Fragment, null, h(SessionGlyph, { size: 16 }), tab.title);
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
			ctx.inject(["slots", "sidebarRightTabs", "sessions"], (scoped) => {
				scoped.effect(() => ctx.locale.register(PANEL_NS, {
					zh: PANEL_ZH,
					en: PANEL_EN
				}), "dsh-claude-ui: session panel dictionaries");
				scoped.effect(() => {
					const style = document.createElement("style");
					style.id = `${STYLE_ID}-session-panel`;
					style.textContent = PANEL_CSS;
					document.head.append(style);
					return () => style.remove();
				}, "dsh-claude-ui: session panel stylesheet");
				const t = ctx.locale.bind(PANEL_NS);
				scoped.effect(() => scoped.sidebarRightTabs.register({
					id: PANEL_ID,
					kind: PANEL_KIND,
					title: () => t("type.label"),
					guide: [{
						id: "session",
						order: 5,
						title: () => t("guide.title"),
						description: () => t("guide.description"),
						icon: SessionGlyph
					}]
				}), "dsh-claude-ui: session panel type");
				const SessionPanel = sessionPanel(scoped.sessions);
				scoped.effect(() => scoped.slots.inject("sidebar.right.pane.tab", () => scoped.slots.register({
					name: "sidebar.right.pane.tab",
					key: PANEL_ID,
					locale: PANEL_NS
				}, SessionPanel)), "dsh-claude-ui: session panel body");
				scoped.effect(() => scoped.slots.inject("sidebar.right.pane.tab.title", () => scoped.slots.register({
					name: "sidebar.right.pane.tab.title",
					key: PANEL_ID
				}, SessionTitle)), "dsh-claude-ui: session panel title");
			});
			ctx.inject(["market"], () => {
				defaultMarketSidebarOn().catch(() => {});
			});
		}
		exports.apply = apply;
		exports.inject = inject;
		return module.exports;
	}
});
