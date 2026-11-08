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
			"--dsw-specific-bubble": { light: "#f0eee6", dark: "#1f1e1d" },
			"--dsw-alias-markdown-code-block": { light: "#f5f4ed", dark: "#1f1e1d" },
			"--dsw-alias-label-primary": { light: "#141413", dark: "#faf9f5" },
			"--dsw-alias-label-secondary": { light: "#5e5d59", dark: "#c2c0b6" },
			"--dsw-alias-label-tertiary": { light: "#73726c", dark: "#a6a39a" },
			"--dsw-alias-label-caption": { light: "#a6a39a", dark: "#a09d94" },
			"--dsw-alias-border-l1": { light: "#1f1e1d0d", dark: "#faf9f50f" },
			"--dsw-alias-border-l2": { light: "#1f1e1d1a", dark: "#faf9f51a" },
			"--dsw-alias-border-l3": { light: "#1f1e1d24", dark: "#faf9f524" },
			"--dsw-alias-border-l4": { light: "#1f1e1d33", dark: "#faf9f533" },
			"--dsw-alias-interactive-bg-hover": { light: "#1f1e1d0d", dark: "#faf9f512" },
			"--dsw-alias-state-business-primary": { light: "#d97757", dark: "#e08a6a" },
			"--dsw-alias-link": { light: "#c6613f", dark: "#e08a6a" },
			"--dsw-alias-button-info-fill": { light: "#d97757", dark: "#d97757" },
			"--dsw-alias-button-info-hover": { light: "#c6613f", dark: "#e08a6a" },
			"--dsw-focus-ring-color": { light: "#d97757", dark: "#e08a6a" },
			/*
			* Dark menus and popovers sit one step above the composer (#30302e) in a
			* warm grey, nearly opaque; the stock value is a translucent bluish grey
			* that reads darker than the card it opens from. Their shadow deepens to match.
			*/
			"--dsw-specific-menu": { light: "#fcfdfeb3", dark: "#353432f2" },
			"--dsw-elevation-prominent": {
				light: "0 0 0 .5px #1f1e1d33, 0 3px 8px 0 #0000000a, 0 0 20px 0 #0000000d",
				dark: "0 0 0 .5px #faf9f529, 0 4px 12px 0 #00000052, 0 0 24px 0 #0000002e"
			}
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
		* Pixel whale on a 24x12 grid, facing left with its tail curling up on the
		* right and its belly row resting on the composer edge. Letters are colours
		* (see WHALE_COLORS); "." is clear. Each frame is the body plus a tail pose,
		* a fin pose, eyes, mouth and cheeks laid over it; frames of one action sit
		* side by side in a strip that CSS steps through. Strips are painted to PNG
		* at runtime (see "whale moods"), which keeps the stylesheet small.
		*/
		const WHALE_COLORS = {
			O: "#d97757", H: "#e9997a", D: "#c0623f", K: "#9e4a2f", L: "#f6d5c4", G: "#eab9a2",
			E: "#141413", W: "#ffffff", B: "#f29a85", C: "#7a3a24",
			S: "#8fcfe8", s: "#d9f1fa", b: "#9fd3e8", Z: "#a6a39a", z: "#cfccc4"
		};
		const WHALE_COLS = 24;
		const WHALE_ROWS = 12;
		const WHALE_CELL = 3;
		const WHALE_BODY = [
			"........................",
			"........................",
			"....HHHHHHH.............",
			"..HHHHHHHHHHH...........",
			".HHOOOOOOOOOOOO.........",
			".OOOOOOOOOOOOOOO........",
			"OOOOOOOOOOOOOOOOO.......",
			"OOOOOOOOOOOOOOOOO.......",
			"OOOOOOOOOOOOOOOOD.......",
			"ODLLLLLLLLLOOOODD.......",
			".LLGLLLGLLLGLDD.........",
			"..LLLLLLLLLLD..........."
		];
		/** Tail poses as [left column, top row, rows]. */
		const WHALE_TAILS = {
			up: [16, 1, ["......HH", ".....HO.", "HH..OO..", ".OOOOD..", "..OOD...", "..OD....", ".OD.....", ".D......"]],
			mid: [16, 3, [".......H", "......HO", ".....HO.", "..OOOO..", "OOOOOOD.", "DDD..OO.", "......DK"]],
			low: [16, 6, ["......H.", "OOO..HO.", "DOOOOOD.", ".DDDDOO.", "......DK"]]
		};
		/** Small parts as "x,y,colour" points. */
		const WHALE_EYES = {
			open: "4,6,E 5,6,E 4,7,E 5,7,E 4,6,W",
			blink: "3,7,C 4,7,C 5,7,C",
			look: "3,6,E 4,6,E 3,7,E 4,7,E 4,6,W",
			wide: "3,5,E 4,5,E 5,5,E 3,6,E 4,6,E 5,6,E 3,7,E 4,7,E 5,7,E 3,5,W 5,6,W",
			sleep: "3,6,C 4,7,C 5,7,C 6,6,C"
		};
		const WHALE_FINS = {
			rest: "9,9,D 10,9,D 11,10,D 12,10,D 12,11,K 13,11,K",
			half: "9,9,D 10,9,D 11,9,D 12,9,D 13,9,K",
			up: "9,9,D 10,8,D 11,8,D 11,7,D 12,7,K 12,6,K"
		};
		const WHALE_CHEEKS = { soft: "6,8,B", warm: "6,8,B 7,8,B 6,7,B" };
		const WHALE_MOUTH = "1,8,D 2,8,D";
		const whaleFrame = (tail = "up", eye = "open", cheek = "soft", fin = "rest") => {
			const [left, top, rows] = WHALE_TAILS[tail];
			const grid = WHALE_BODY.map((row) => [...row]);
			rows.forEach((row, y) => [...row].forEach((c, x) => {
				if (c !== ".") grid[top + y][left + x] = c;
			}));
			for (const item of [WHALE_FINS[fin], WHALE_EYES[eye], WHALE_MOUTH, WHALE_CHEEKS[cheek]].join(" ").split(" ")) {
				const [x, y, c] = item.split(",");
				grid[y][x] = c;
			}
			return grid.map((row) => row.join(""));
		};
		/** Body strips: frames in play order. */
		const WHALE_STRIPS = {
			idle: [["up"], ["up"], ["mid"], ["low"], ["low"], ["mid"], ["up", "open", "soft", "half"], ["up", "open", "soft", "up"], ["up", "open", "soft", "half"], ["up"], ["up", "blink"], ["up"]],
			happy: [["up", "wide", "warm", "up"], ["mid", "wide", "warm", "half"], ["up", "wide", "warm", "rest"], ["mid", "wide", "warm", "half"]],
			look: [["up", "look"], ["up", "look"], ["mid", "look"], ["mid", "look"]],
			wag: [["up", "look"], ["mid", "look"], ["low", "look"], ["mid", "look"]],
			jump: [["up", "wide", "warm", "up"]],
			sleep: [["low", "sleep"]]
		};
		/**
		* Effects over the whale, each [columns, rows, frames of points]. The spout
		* and dream grids stand on the head with `hole` over the blowhole; the
		* splash spreads under the whale's middle when it lands.
		*/
		const z4 = (x, y, c = "Z") => [[0, 0], [1, 0], [2, 0], [3, 0], [2, 1], [1, 2], [0, 3], [1, 3], [2, 3], [3, 3]].map(([dx, dy]) => `${x + dx},${y + dy},${c}`).join(" ");
		const bubble = (x, y) => `${x + 1},${y},b ${x},${y + 1},b ${x + 2},${y + 1},b ${x + 1},${y + 2},b ${x},${y},s`;
		const WHALE_FX = {
			spout: { cols: 11, rows: 9, hole: 5, frames: [
				"",
				"5,8,S",
				"5,8,S 5,7,S 5,6,s",
				"5,8,S 5,7,S 5,6,S 5,5,S 5,4,s",
				"5,8,S 5,7,S 5,6,S 5,5,S 5,4,S 5,3,S 4,2,S 6,2,S 5,2,s 5,1,s",
				"5,8,S 5,7,S 5,6,S 5,5,S 5,4,s 4,3,S 6,3,S 3,2,S 7,2,S 4,2,s 6,2,s 2,1,s 8,1,s",
				"5,8,S 5,7,s 2,2,S 8,2,S 1,3,s 9,3,s 3,4,s 7,4,s",
				"1,5,S 9,5,S 2,4,s 8,4,s",
				"1,7,S 9,7,S"
			] },
			dream: { cols: 14, rows: 11, hole: 3, frames: [
				z4(4, 6), z4(5, 5), `${z4(6, 4)} ${z4(4, 7, "z")}`, `${z4(7, 3, "z")} ${z4(5, 6)}`, `${z4(8, 2, "z")} ${z4(6, 5)}`, `${z4(9, 1, "z")} ${z4(7, 4)}`,
				z4(8, 3, "z"), z4(9, 2, "z"), "3,10,b", bubble(2, 8), bubble(2, 5), "2,3,s 4,3,s 3,2,s 2,1,z 4,1,z"
			] },
			splash: { cols: 34, rows: 6, frames: [
				"",
				"15,5,S 18,5,S 16,4,s 17,4,s",
				"11,4,S 22,4,S 12,3,s 21,3,s 9,5,S 24,5,S 14,5,s 19,5,s",
				"7,2,S 26,2,S 9,1,s 24,1,s 5,4,S 28,4,S",
				"4,3,S 29,3,S 3,5,S 30,5,S 6,1,s 27,1,s",
				"2,5,s 31,5,s"
			] }
		};
		const fxGrid = ({ cols, rows }, points) => {
			const grid = Array.from({ length: rows }, () => Array(cols).fill("."));
			for (const item of points.split(" ").filter(Boolean)) {
				const [x, y, c] = item.split(",");
				grid[y][x] = c;
			}
			return grid.map((row) => row.join(""));
		};
		/** Every strip as frames of letter rows, keyed by its CSS variable suffix. */
		const WHALE_SHEETS = {
			...Object.fromEntries(Object.entries(WHALE_STRIPS).map(([name, frames]) => [name, frames.map((args) => whaleFrame(...args))])),
			...Object.fromEntries(Object.entries(WHALE_FX).map(([name, fx]) => [name, fx.frames.map((points) => fxGrid(fx, points))]))
		};
		const WHALE_WIDTH = WHALE_COLS * WHALE_CELL;
		const WHALE_HEIGHT = WHALE_ROWS * WHALE_CELL;
		const WHALE_RIGHT = 32;
		/** Blowhole: between columns 6 and 7, on top of row 2. */
		const WHALE_HOLE_X = 6.5;
		const WHALE_HOLE_Y = 2;
		/** Sending hop, shared by the CSS animation and the mood timer. */
		const WHALE_HOP_MS = 1000;
		/** Box for an effect standing on the head, its `hole` column over the blowhole. */
		const headFx = ({ cols, rows, hole }) => `width: ${cols * WHALE_CELL}px; height: ${rows * WHALE_CELL}px; bottom: calc(100% - 3px + ${(WHALE_ROWS - WHALE_HOLE_Y) * WHALE_CELL}px); right: ${WHALE_RIGHT + (WHALE_COLS - WHALE_HOLE_X) * WHALE_CELL - (cols - hole - .5) * WHALE_CELL}px;`;
		/** Width in px of one frame of a strip. */
		const frameWidth = (name) => WHALE_SHEETS[name][0][0].length * WHALE_CELL;
		/** Step through every frame of a strip once per loop. */
		const stripSteps = (name) => `@keyframes claude-ui-whale-${name} { to { background-position-x: -${WHALE_SHEETS[name].length * frameWidth(name)}px; } }`;
		/**
		* Show a strip's frames 1..n-1 one after another from `start`% of a longer
		* loop, `step`% each, and its blank frame 0 the rest of the time.
		*/
		const stripAt = (name, start, step) => {
			const count = WHALE_SHEETS[name].length;
			const stops = [`0%, ${(start + (count - 1) * step).toFixed(2)}%, 100% { background-position-x: 0; }`];
			for (let i = 1; i < count; i++) stops.push(`${(start + (i - 1) * step).toFixed(2)}% { background-position-x: -${i * frameWidth(name)}px; }`);
			return `@keyframes claude-ui-whale-${name} { ${stops.join(" ")} }`;
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
/* Dark: a disabled send button is neutral grey, not a muddy 40% clay */
body[data-ds-dark-theme] [data-slot="conversation.composer"] button:is([class$="_primary"], [class*="_primary "]):disabled {
	background: #3d3d3a;
	color: #8e8b82;
	opacity: 1;
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
/*
 * DeepSeek peak / off-peak billing tints the ring: red at peak, green off-peak;
 * an amber dot on the ring flags an open API incident (see "context ring stats").
 * Dots and the ring use the bright tone; words in the panel use the -text tone,
 * which keeps 4.5:1 on the panel in both themes.
 */
body {
	--claude-ui-tariff-peak: #dc2626; --claude-ui-tariff-peak-text: #b91c1c;
	--claude-ui-tariff-offpeak: #16a34a; --claude-ui-tariff-offpeak-text: #15803d;
	--claude-ui-api-ok: var(--claude-ui-tariff-offpeak); --claude-ui-api-ok-text: var(--claude-ui-tariff-offpeak-text);
	--claude-ui-api-issue: #f59e0b; --claude-ui-api-issue-text: #b45309;
	--claude-ui-api-unknown: var(--dsw-alias-label-tertiary); --claude-ui-api-unknown-text: var(--dsw-alias-label-tertiary);
}
body[data-ds-dark-theme] {
	--claude-ui-tariff-peak: #f87171; --claude-ui-tariff-peak-text: #fca5a5;
	--claude-ui-tariff-offpeak: #4ade80; --claude-ui-tariff-offpeak-text: #86efac;
	--claude-ui-api-issue: #fbbf24; --claude-ui-api-issue-text: #fcd34d;
}
body[data-claude-ui-tariff=peak] { --claude-ui-tariff: var(--claude-ui-tariff-peak); }
body[data-claude-ui-tariff=offpeak] { --claude-ui-tariff: var(--claude-ui-tariff-offpeak); }
body[data-claude-ui-tariff] [data-composer-dock] button[aria-haspopup=dialog] ${CLS("fill")} { stroke: var(--claude-ui-tariff); }
body[data-claude-ui-tariff] [data-composer-dock] button[aria-haspopup=dialog] ${CLS("track")} { stroke: color-mix(in srgb, var(--claude-ui-tariff) 65%, transparent); }
body[data-claude-ui-api=issue] [data-composer-dock] button[aria-haspopup=dialog] { position: relative; }
body[data-claude-ui-api=issue] [data-composer-dock] button[aria-haspopup=dialog]::after {
	content: ""; position: absolute; top: 1px; left: 17px; width: 6px; height: 6px; border-radius: 50%;
	background: var(--claude-ui-api-issue); box-shadow: 0 0 0 1.5px var(--dsw-alias-bg-base);
}
[data-claude-ui-stats] > div > dt { white-space: nowrap; flex: none; display: inline-flex; align-items: center; }
[data-claude-ui-stats] > div > dd { min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
[data-claude-ui-stats] a { color: inherit; text-decoration: none; }
[data-claude-ui-stats] a:hover { text-decoration: underline; text-underline-offset: 2px; }
.claude-ui-dot { display: inline-block; flex: none; width: 9px; height: 9px; border-radius: 50%; margin-right: 6px; }

/* Thinking-effort slider that stands in for the model menu's Effort row (see "effort slider") */
.claude-ui-effort { box-sizing: border-box; display: flex; align-items: center; gap: 10px; height: 34px; padding: 0 8px; font-size: 13px; line-height: 20px; color: var(--dsw-alias-label-primary); }
.claude-ui-effort > span:first-child { flex: none; white-space: nowrap; }
.claude-ui-effort > output { flex: none; min-width: 36px; text-align: right; color: var(--dsw-alias-label-tertiary); white-space: nowrap; }
.claude-ui-effort > input {
	--p: 0%;
	flex: 1; min-width: 96px; height: 4px; margin: 0; appearance: none; -webkit-appearance: none; cursor: pointer; border-radius: 999px; outline: none;
	background: linear-gradient(to right, var(--dsw-alias-state-business-primary) var(--p), var(--dsw-alias-border-l4) var(--p));
}
.claude-ui-effort > input[aria-busy] { cursor: progress; opacity: .6; }
.claude-ui-effort > input::-webkit-slider-thumb {
	-webkit-appearance: none; width: 14px; height: 14px; border-radius: 50%; border: 2px solid var(--dsw-specific-input-major);
	background: var(--dsw-alias-state-business-primary); box-shadow: 0 0 0 .5px var(--dsw-alias-border-l3), 0 1px 3px #0000002e;
}
.claude-ui-effort > input::-moz-range-thumb { width: 10px; height: 10px; border-radius: 50%; border: 2px solid var(--dsw-specific-input-major); background: var(--dsw-alias-state-business-primary); }
.claude-ui-effort > input:focus-visible::-webkit-slider-thumb { box-shadow: 0 0 0 2px var(--dsw-focus-ring-color); }

/*
 * A little pixel whale resting on the new-chat composer's top edge. ::after is
 * the whale, ::before the effect over it. Idle it sways its tail, flaps a fin,
 * blinks, breathes and now and then spouts. Hovering the composer makes it
 * blush and wave, focusing it makes it watch the text, typing sets its tail
 * going; sending makes it crouch, leap and splash down (riding the composer into
 * the chat for a moment), and late at night it dozes, dreaming z's and bubbles.
 */
${WHALE_HOST}::after, ${WHALE_JUMP_HOST}::after {
	content: "";
	position: absolute;
	right: ${WHALE_RIGHT}px;
	bottom: calc(100% - 3px);
	width: ${WHALE_WIDTH}px;
	height: ${WHALE_HEIGHT}px;
	background: var(--claude-ui-whale-idle) 0 0 / auto 100% no-repeat;
	image-rendering: pixelated;
	pointer-events: none;
	transform-origin: 50% 100%;
	animation: claude-ui-whale-idle 4.8s steps(${WHALE_SHEETS.idle.length}) infinite, claude-ui-whale-bob 3.2s ease-in-out infinite, claude-ui-whale-breathe 4s ease-in-out infinite;
}
${WHALE_HOST}::before {
	content: "";
	position: absolute;
	${headFx(WHALE_FX.spout)}
	background: var(--claude-ui-whale-spout) 0 0 / auto 100% no-repeat;
	image-rendering: pixelated;
	pointer-events: none;
	animation: claude-ui-whale-spout 9s steps(1, end) infinite, claude-ui-whale-bob 3.2s ease-in-out infinite;
}
body:not([${WHALE_ATTR}]) ${WHALE_HOST}:focus-within::after {
	background-image: var(--claude-ui-whale-look);
	animation: claude-ui-whale-look 2.4s steps(${WHALE_SHEETS.look.length}) infinite, claude-ui-whale-bob 3.2s ease-in-out infinite, claude-ui-whale-breathe 4s ease-in-out infinite;
}
body[${WHALE_ATTR}=typing] ${WHALE_HOST}::after {
	background-image: var(--claude-ui-whale-wag);
	animation: claude-ui-whale-wag 0.4s steps(${WHALE_SHEETS.wag.length}) infinite;
}
body[${WHALE_ATTR}=typing] ${WHALE_HOST}::before { animation: none; }
body[${WHALE_ATTR}=sleep] ${WHALE_HOST}::after {
	background-image: var(--claude-ui-whale-sleep);
	animation: claude-ui-whale-bob 5s ease-in-out infinite, claude-ui-whale-breathe-deep 5s ease-in-out infinite;
}
body[${WHALE_ATTR}=sleep] ${WHALE_HOST}::before {
	${headFx(WHALE_FX.dream)}
	background-image: var(--claude-ui-whale-dream);
	animation: claude-ui-whale-dream 6s steps(${WHALE_SHEETS.dream.length}) infinite;
}
/* Hover wins over focus and sleep: it wakes up, blushes and waves */
body:not([${WHALE_ATTR}=typing]):not([${WHALE_ATTR}=jump]) ${WHALE_HOST}:hover::after {
	background-image: var(--claude-ui-whale-happy);
	animation: claude-ui-whale-happy 0.6s steps(${WHALE_SHEETS.happy.length}) infinite, claude-ui-whale-bob 1.6s ease-in-out infinite;
}
body[${WHALE_ATTR}=sleep] ${WHALE_HOST}:hover::before { animation: none; background-position-x: 0; background-image: var(--claude-ui-whale-spout); }
${WHALE_JUMP_HOST}::after {
	background-image: var(--claude-ui-whale-jump);
	animation: claude-ui-whale-hop ${WHALE_HOP_MS}ms cubic-bezier(.3, .7, .4, 1) forwards;
}
body[${WHALE_ATTR}=jump] ${WHALE_HOST}::before, ${WHALE_JUMP_HOST}::before {
	content: "";
	position: absolute;
	width: ${WHALE_FX.splash.cols * WHALE_CELL}px;
	height: ${WHALE_FX.splash.rows * WHALE_CELL}px;
	bottom: calc(100% - 3px);
	right: ${WHALE_RIGHT + WHALE_WIDTH / 2 - 6 - WHALE_FX.splash.cols * WHALE_CELL / 2}px;
	background: var(--claude-ui-whale-splash) 0 0 / auto 100% no-repeat;
	image-rendering: pixelated;
	pointer-events: none;
	animation: claude-ui-whale-splash ${WHALE_HOP_MS}ms steps(1, end) forwards;
}
${stripSteps("idle")}
${stripSteps("look")}
${stripSteps("wag")}
${stripSteps("happy")}
${stripSteps("dream")}
${stripAt("spout", 80, 1.3)}
${stripAt("splash", 60, 7)}
@keyframes claude-ui-whale-bob {
	0%, 100% { translate: 0 0; }
	50% { translate: 0 -2px; }
}
@keyframes claude-ui-whale-breathe {
	0%, 100% { scale: 1 1; }
	50% { scale: 1.02 1.04; }
}
@keyframes claude-ui-whale-breathe-deep {
	0%, 100% { scale: 1 1; }
	50% { scale: 1.03 1.07; }
}
/* Crouch, leap leaning forward, right itself at the top, squash on landing, bounce and fade */
@keyframes claude-ui-whale-hop {
	0% { translate: 0 0; scale: 1 1; rotate: 0deg; }
	14% { translate: 0 1px; scale: 1.12 .84; rotate: 0deg; }
	40% { translate: -4px -24px; scale: .9 1.12; rotate: -14deg; }
	52% { translate: -6px -26px; scale: 1 1; rotate: 6deg; }
	64% { translate: -6px 0; scale: 1.14 .82; rotate: 0deg; }
	76% { translate: -6px -5px; scale: .96 1.05; opacity: 1; }
	100% { translate: -6px -1px; scale: 1 1; opacity: 0; }
}
@media (prefers-reduced-motion: reduce) {
	${WHALE_HOST}::after, ${WHALE_HOST}::before, ${WHALE_JUMP_HOST}::after { animation: none !important; background-position-x: 0 !important; }
	${WHALE_JUMP_HOST}::after, ${WHALE_JUMP_HOST}::before { content: none; }
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
				/** Paint each strip to a PNG, one grid cell per pixel; CSS scales it up crisply. */
				for (const [name, frames] of Object.entries(WHALE_SHEETS)) {
					const cols = frames[0][0].length;
					const canvas = document.createElement("canvas");
					canvas.width = cols * frames.length;
					canvas.height = frames[0].length;
					const paint = canvas.getContext("2d");
					if (!paint) break;
					frames.forEach((frame, i) => frame.forEach((row, y) => [...row].forEach((c, x) => {
						if (!WHALE_COLORS[c]) return;
						paint.fillStyle = WHALE_COLORS[c];
						paint.fillRect(i * cols + x, y, 1, 1);
					})));
					body.style.setProperty(`--claude-ui-whale-${name}`, `url("${canvas.toDataURL("image/png")}")`);
				}
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
					}, WHALE_HOP_MS);
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
					for (const name of Object.keys(WHALE_SHEETS)) body.style.removeProperty(`--claude-ui-whale-${name}`);
				};
			}, "dsh-claude-ui: whale moods");
			ctx.effect(() => {
				/*
				* The in-chat composer hides its turn / token pills (CSS above); their
				* readings move into the context ring's click-open panel, a body-level
				* dialog, as extra rows under its own legend, together with DeepSeek's
				* peak / off-peak billing state and the official API status (relayed by
				* the node half from status.deepseek.com). The pills stay mounted, so
				* their labels are the live source; the rows refresh while the panel is
				* open. The panel re-anchors itself when it grows, so it is never moved here.
				*/
				const MARK = "data-claude-ui-stats";
				const TARIFF_ATTR = "data-claude-ui-tariff";
				const API_ATTR = "data-claude-ui-api";
				const LABELS = {
					zh: {
						activity: "运行", usage: "用量", tariff: "计费", peak: "高峰", offpeak: "低谷",
						until: (state, when) => `${when} 转${state}`, tomorrow: "明天", weekdays: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
						api: "API 状态", apiOk: "正常", apiUnknown: "未知", apiStates: { investigating: "排查中", identified: "已定位", monitoring: "观察中" }, apiOngoing: "处理中"
					},
					en: {
						activity: "Activity", usage: "Usage", tariff: "Billing", peak: "Peak", offpeak: "Off-peak",
						until: (_state, when) => `until ${when}`, tomorrow: "tmrw", weekdays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
						api: "API status", apiOk: "Operational", apiUnknown: "Unknown", apiStates: { investigating: "Investigating", identified: "Identified", monitoring: "Monitoring" }, apiOngoing: "Ongoing"
					}
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
				/** Last relay answer; `at` 0 means never fetched. */
				let api = { at: 0, ok: false, page: "https://status.deepseek.com", active: [] };
				let apiInflight;
				const API_ROUTE = () => new URL("claude-ui/deepseek-status", document.baseURI).href;
				const refreshApi = () => {
					apiInflight ??= fetch(API_ROUTE(), { cache: "no-store" })
						.then((response) => response.ok ? response.json() : { ok: false, active: [] })
						.catch(() => ({ ok: false, active: [] }))
						.then((body) => {
							api = { ...api, ...body, at: Date.now() };
							document.body.setAttribute(API_ATTR, !api.ok ? "unknown" : api.active.length ? "issue" : "ok");
							apiInflight = void 0;
						});
					return apiInflight;
				};
				const apiRow = (labels) => {
					if (!api.at || !api.ok) return { label: labels.api, lead: labels.apiUnknown, tone: "api-unknown", href: api.page };
					const [first] = api.active;
					if (!first) return { label: labels.api, lead: labels.apiOk, tone: "api-ok", href: api.page };
					const more = api.active.length > 1 ? ` +${api.active.length - 1}` : "";
					return { label: labels.api, lead: labels.apiStates[first.status] ?? labels.apiOngoing, value: `${first.title}${more}`, tone: "api-issue", href: first.link || api.page };
				};
				const isRingPanel = (el) => el instanceof HTMLElement && el.getAttribute("role") === "dialog" && el.querySelector(":scope > [class*='_rows']") && el.querySelector("[class*='_segment']");
				const fill = (panel) => {
					const rows = panel.querySelector(":scope > [class*='_rows']");
					const legendRow = rows?.firstElementChild;
					if (!rows || !legendRow) return;
					const labels = labelSet();
					const entries = [...document.querySelectorAll(`${SESSION_BAR} [data-composer-stat]`)].map((anchor) => ({ label: labels[anchor.dataset.composerStat] ?? anchor.dataset.composerStat, value: anchor.querySelector("[aria-label]")?.getAttribute("aria-label") ?? anchor.textContent })).filter((entry) => entry.value);
					const { peak, next } = tariff();
					const state = peak ? "peak" : "offpeak";
					entries.push({ label: labels.tariff, lead: labels[state], value: labels.until(labels[peak ? "offpeak" : "peak"], formatWhen(next, labels)), tone: `tariff-${state}` });
					entries.push(apiRow(labels));
					let block = panel.querySelector(`:scope > [${MARK}]`);
					if (!block) {
						block = document.createElement("dl");
						block.className = rows.className;
						block.setAttribute(MARK, "");
						block.style.cssText = "margin-top: 8px; padding-top: 8px; border-top: 1px solid var(--dsw-alias-border-l2);";
						panel.append(block);
					}
					const html = entries.map(({ label, lead, value, tone, href }) => {
						const row = legendRow.cloneNode(false);
						const dt = document.createElement("dt");
						const dd = document.createElement("dd");
						if (tone) {
							const dot = document.createElement("span");
							dot.className = "claude-ui-dot";
							dot.style.background = `var(--claude-ui-${tone})`;
							dt.append(dot);
						}
						dt.append(label);
						const host = href ? Object.assign(document.createElement("a"), { href, target: "_blank", rel: "noopener noreferrer" }) : dd;
						if (lead) {
							const strong = document.createElement("span");
							strong.style.cssText = `color: var(--claude-ui-${tone}-text); font-weight: 500;`;
							strong.textContent = lead;
							host.append(strong, value ? ` · ${value}` : "");
						} else host.append(value);
						if (host !== dd) dd.append(host);
						dd.title = [lead, value].filter(Boolean).join(" · ");
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
					if (Date.now() - api.at > 60000) refreshApi().then(() => panel.isConnected && fill(panel));
					timer = setInterval(() => panel.isConnected ? fill(panel) : scan(), 1000);
				};
				const observer = new MutationObserver(scan);
				observer.observe(document.body, { childList: true });
				paintTariff();
				const tariffTimer = setInterval(paintTariff, 30000);
				refreshApi();
				const apiTimer = setInterval(refreshApi, 180000);
				return () => {
					observer.disconnect();
					clearInterval(timer);
					clearInterval(tariffTimer);
					clearInterval(apiTimer);
					document.body.removeAttribute(TARIFF_ATTR);
					document.body.removeAttribute(API_ATTR);
					document.querySelectorAll(`dl[${MARK}]`).forEach((el) => el.remove());
				};
			}, "dsh-claude-ui: context ring stats");
			ctx.inject(["slots", "modelDirectories"], (scope) => {
				/*
				* The model menu's root pane has two 34px rows, Model and Effort; Effort
				* drills into a list. A slider row of the same height replaces it, so the
				* menu keeps its size and anchor. The menu is a body-level portal, so a
				* render-nothing seat in the session's composer (`conversation.input.right`)
				* supplies the session id and only serves the menu its own trigger opened.
				*/
				const React = require("react");
				const ROW = "claude-ui-effort";
				const LABEL = { zh: "思考强度", en: "Thinking" };
				const models = scope.modelDirectories;
				const levelsOf = (snap) => {
					const current = snap.current;
					const model = current && snap.groups.find((group) => group.id === current.provider)?.models.find((entry) => entry.id === current.model);
					const reasoning = model?.reasoning;
					if (!reasoning || reasoning.efforts.length < 2) return void 0;
					const levels = [...reasoning.defaultEffort === void 0 ? [{ id: void 0, name: "Default" }] : [], ...reasoning.efforts];
					const active = current.reasoningEffort ?? reasoning.defaultEffort;
					return { current, levels, index: Math.max(0, levels.findIndex((level) => level.id === active)) };
				};
				function EffortSeat({ sessionId }) {
					const ref = React.useRef(null);
					React.useEffect(() => {
						const bar = ref.current?.closest("[data-slot='conversation.composer.bar']");
						let directory;
						try {
							directory = models.directoryFor(sessionId);
						} catch {
							return;
						}
						if (!bar || !directory) return;
						let row;
						let unsubscribe;
						const sync = () => {
							const input = row?.querySelector("input");
							const info = levelsOf(directory.store.getSnapshot());
							if (!input || !info || document.activeElement === input && input.dataset.dragging) return;
							input.max = String(info.levels.length - 1);
							input.value = String(info.index);
							// Never `disabled`: a disabled focused control drops focus, and the menu closes when focus leaves it.
							input.toggleAttribute("aria-busy", directory.store.getSnapshot().pending !== null);
							paint(input, info.levels);
						};
						const paint = (input, levels) => {
							input.style.setProperty("--p", `${Number(input.value) / Math.max(1, levels.length - 1) * 100}%`);
							row.querySelector("output").textContent = levels[Number(input.value)]?.name ?? "";
						};
						const build = (cell, info) => {
							row = document.createElement("div");
							row.className = ROW;
							const label = document.createElement("span");
							label.textContent = LABEL[ctx.locale.getSnapshot().active.toLowerCase().startsWith("zh") ? "zh" : "en"];
							const input = document.createElement("input");
							input.type = "range";
							input.min = "0";
							input.step = "1";
							input.setAttribute("aria-label", label.textContent);
							const output = document.createElement("output");
							row.append(label, input, output);
							input.addEventListener("keydown", (event) => event.key !== "Escape" && event.key !== "Tab" && event.stopPropagation());
							input.addEventListener("pointerdown", () => input.dataset.dragging = "1");
							input.addEventListener("input", () => paint(input, levelsOf(directory.store.getSnapshot())?.levels ?? info.levels));
							input.addEventListener("change", () => {
								delete input.dataset.dragging;
								const now = levelsOf(directory.store.getSnapshot());
								const level = now?.levels[Number(input.value)];
								if (!now || !level || level.id === now.levels[now.index].id || input.hasAttribute("aria-busy")) return sync();
								input.setAttribute("aria-busy", "");
								directory.select({ provider: now.current.provider, model: now.current.model, ...level.id === void 0 ? {} : { reasoningEffort: level.id } }).catch(() => {}).finally(sync);
							});
							cell.after(row);
							cell.style.display = "none";
							unsubscribe = directory.store.subscribe(sync);
							sync();
						};
						const teardown = () => {
							unsubscribe?.();
							unsubscribe = void 0;
							row?.previousElementSibling?.style.removeProperty("display");
							row?.remove();
							row = void 0;
						};
						const scan = () => {
							const trigger = bar.querySelector("[data-slot='conversation.input.model'] button[aria-expanded='true']");
							if (row && (!row.isConnected || !trigger)) teardown();
							if (!trigger || row) return;
							const info = levelsOf(directory.store.getSnapshot());
							const menu = [...document.body.children].find((el) => el.matches("[class*='_menu']") && el.querySelectorAll("button[class*='_cell']").length === 2);
							const cell = menu?.querySelectorAll("button[class*='_cell']")[1];
							if (info && cell) build(cell, info);
						};
						const observer = new MutationObserver(scan);
						observer.observe(document.body, { childList: true, subtree: true });
						return () => {
							observer.disconnect();
							teardown();
						};
					}, [sessionId]);
					return React.createElement("span", { ref, hidden: true });
				}
				scope.slots.inject("conversation.input.right", () => scope.slots.register({
					name: "conversation.input.right",
					id: "claude-ui-effort",
					order: 100,
					inject: (sessionId) => ({ sessionId })
				}, EffortSeat));
			});
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
