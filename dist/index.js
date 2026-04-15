import { Fragment as e, jsx as t, jsxs as n } from "react/jsx-runtime";
import { useEffect as r, useId as i, useRef as a, useState as o } from "react";
//#region src/components/ProgressIndicator.tsx
var s = {
	sm: 24,
	md: 48
}, c = {
	sm: 2,
	md: 2
}, l = {
	blue: "var(--basic-content-brand-primary)",
	white: "var(--basic-content-inverse)",
	black: "var(--basic-content-default)"
};
function u({ size: e = "md", color: n = "blue", className: r = "" }) {
	let i = s[e], a = c[e], o = (i - a) / 2, u = i / 2, d = (e) => {
		let t = e * Math.PI / 180;
		return {
			x: u + o * Math.cos(t),
			y: u + o * Math.sin(t)
		};
	}, f = d(-80), p = d(190);
	return /* @__PURE__ */ t("svg", {
		className: `animate-spin ${r}`,
		width: i,
		height: i,
		viewBox: `0 0 ${i} ${i}`,
		fill: "none",
		role: "status",
		"aria-label": "Loading",
		children: /* @__PURE__ */ t("path", {
			d: `M ${f.x} ${f.y} A ${o} ${o} 0 1 1 ${p.x} ${p.y}`,
			stroke: l[n],
			strokeWidth: a,
			strokeLinecap: "round"
		})
	});
}
//#endregion
//#region src/components/Button.tsx
var d = "inline-flex items-center justify-center gap-Component-text-to-element-gap-md rounded-Button-border-radius font-label-md-default text-label-md-default outline-none disabled:cursor-not-allowed focus-visible:shadow-focus-outset", f = ["icon", "floating"];
function p(e, t) {
	return f.includes(e) ? t === "md" ? "p-Component-horizontal-padding-lg" : "p-Component-horizontal-padding-xs" : `${t === "md" ? "py-Component-vertical-padding-lg" : "py-Component-vertical-padding-xs"} px-Component-horizontal-padding-xl`;
}
var m = [
	"bg-button-primary-background-default text-button-primary-content-default",
	"hover:bg-button-primary-background-hover hover:text-button-primary-content-hover",
	"active:bg-button-primary-background-pressed",
	"disabled:bg-button-primary-background-disabled disabled:text-button-primary-content-disabled"
].join(" "), h = [
	"bg-button-secondary-background-default text-button-secondary-content-default",
	"border-Button-border-width border-button-secondary-border-default",
	"hover:bg-button-secondary-background-hover hover:text-button-secondary-content-hover hover:border-button-secondary-border-hover",
	"active:bg-button-secondary-background-pressed active:border-button-secondary-border-pressed",
	"disabled:bg-button-secondary-background-disabled disabled:text-button-secondary-content-disabled disabled:border-button-secondary-border-disabled"
].join(" "), g = [
	"bg-transparent text-button-tertiary-content-default",
	"hover:bg-button-tertiary-background-hover hover:text-button-tertiary-content-hover",
	"active:bg-button-tertiary-background-pressed",
	"disabled:text-button-tertiary-content-disabled"
].join(" "), _ = [
	"bg-button-secondary-background-default text-action-content-default",
	"border-Button-border-width border-button-secondary-border-default",
	"shadow-elevation-raised",
	"hover:bg-button-secondary-background-hover hover:border-button-secondary-border-hover",
	"active:bg-button-secondary-background-pressed active:border-button-secondary-border-pressed"
].join(" ");
function v(e, t) {
	switch (e) {
		case "primary": return m;
		case "secondary": return h;
		case "tertiary": return g;
		case "icon": return g;
		case "floating": return _;
		case "toggle": return t ? m : g;
	}
}
function y({ category: r = "primary", size: i = "md", iconLeft: a, iconRight: o, icon: s, pressed: c = !1, loading: l = !1, children: m, className: h = "", disabled: g, onClick: _, ...y }) {
	let b = f.includes(r), x = [
		d,
		p(r, i),
		v(r, c),
		h
	].join(" "), S = r === "toggle" ? c : void 0, C = r === "primary" || r === "toggle" && c ? "white" : "blue", w = (e) => /* @__PURE__ */ t("span", {
		className: "fm-icon-24",
		style: {
			display: "inline-flex",
			alignItems: "center",
			justifyContent: "center",
			width: "24px",
			height: "24px",
			flexShrink: 0
		},
		children: e
	});
	return /* @__PURE__ */ t("button", {
		className: x,
		disabled: g,
		"aria-pressed": S,
		"aria-busy": l || void 0,
		"aria-disabled": l || void 0,
		onClick: l ? void 0 : _,
		...y,
		children: l ? /* @__PURE__ */ t(u, {
			size: "sm",
			color: C
		}) : b ? w(s) : /* @__PURE__ */ n(e, { children: [
			a && w(a),
			m,
			o && w(o)
		] })
	});
}
//#endregion
//#region src/components/Checkbox.tsx
function b() {
	return /* @__PURE__ */ t("svg", {
		width: "16",
		height: "16",
		viewBox: "0 0 16 16",
		fill: "none",
		"aria-hidden": "true",
		children: /* @__PURE__ */ t("path", {
			d: "M3 8.5l3.2 3.2L13 5",
			stroke: "currentColor",
			strokeWidth: "2.5",
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	});
}
function x() {
	return /* @__PURE__ */ t("svg", {
		width: "16",
		height: "16",
		viewBox: "0 0 16 16",
		fill: "none",
		"aria-hidden": "true",
		children: /* @__PURE__ */ t("path", {
			d: "M3.5 8h9",
			stroke: "currentColor",
			strokeWidth: "2.5",
			strokeLinecap: "round"
		})
	});
}
function S() {
	return /* @__PURE__ */ n("svg", {
		width: "14",
		height: "14",
		viewBox: "0 0 14 14",
		fill: "none",
		"aria-hidden": "true",
		children: [/* @__PURE__ */ t("circle", {
			cx: "7",
			cy: "7",
			r: "7",
			fill: "#b3001b"
		}), /* @__PURE__ */ t("path", {
			d: "M4.5 4.5l5 5M9.5 4.5l-5 5",
			stroke: "white",
			strokeWidth: "1.5",
			strokeLinecap: "round"
		})]
	});
}
var C = {
	boxSizing: "border-box",
	display: "inline-flex",
	alignItems: "center",
	justifyContent: "center",
	flexShrink: 0,
	width: "32px",
	height: "32px",
	minWidth: "32px",
	minHeight: "32px",
	maxWidth: "32px",
	maxHeight: "32px",
	padding: 0,
	lineHeight: 0,
	borderRadius: "var(--Component-border-radius)",
	borderStyle: "solid",
	borderWidth: "var(--Component-border-width)",
	transition: "background-color 120ms, border-color 120ms"
};
function w(e, t, n) {
	return e && t ? {
		...C,
		background: "var(--action-background-disabled)",
		borderColor: "var(--action-background-disabled)",
		color: "var(--action-content-selected)"
	} : e ? {
		...C,
		background: "var(--basic-background-disabled)",
		borderColor: "var(--basic-border-disabled)",
		color: "transparent"
	} : t ? {
		...C,
		background: "var(--action-background-selected)",
		borderColor: "var(--action-background-selected)",
		color: "var(--action-content-selected)"
	} : {
		...C,
		background: n ? "var(--basic-background-hover)" : "var(--basic-background-default)",
		borderColor: n ? "var(--basic-border-hover)" : "var(--basic-border-default)",
		color: "transparent"
	};
}
function T({ label: e, indeterminate: s = !1, errorMessage: c, checked: l, disabled: u = !1, id: d, className: f = "", ...p }) {
	let m = a(null), h = i(), g = d ?? h, [_, v] = o(!1);
	r(() => {
		m.current && (m.current.indeterminate = s);
	}, [s]);
	let y = !!l || s, C = /* @__PURE__ */ n("label", {
		htmlFor: g,
		className: "fm-checkbox-row",
		style: {
			display: "inline-flex",
			alignItems: "center",
			gap: "var(--Component-text-to-element-gap-lg)",
			cursor: u ? "not-allowed" : "pointer"
		},
		onMouseEnter: () => !u && v(!0),
		onMouseLeave: () => v(!1),
		children: [/* @__PURE__ */ n("span", {
			style: {
				position: "relative",
				display: "inline-block",
				width: "32px",
				height: "32px",
				flexShrink: 0,
				lineHeight: 0,
				verticalAlign: "top"
			},
			children: [/* @__PURE__ */ t("input", {
				ref: m,
				id: g,
				type: "checkbox",
				checked: l,
				disabled: u,
				"aria-checked": s ? "mixed" : void 0,
				"aria-invalid": c ? !0 : void 0,
				className: "peer",
				style: {
					position: "absolute",
					inset: 0,
					width: "100%",
					height: "100%",
					opacity: 0,
					margin: 0,
					padding: 0,
					border: 0,
					appearance: "none",
					WebkitAppearance: "none",
					cursor: "inherit"
				},
				...p
			}), /* @__PURE__ */ t("span", {
				className: `fm-checkbox-box peer-focus-visible:shadow-focus-outset ${!u && !y ? "fm-checkbox-unchecked" : ""}`,
				style: w(u, y, _),
				children: y && t(s ? x : b, {})
			})]
		}), e != null && /* @__PURE__ */ t("span", {
			className: "font-label-md-default text-label-md-default",
			style: { color: u ? "var(--basic-content-disabled)" : "var(--basic-content-default)" },
			children: e
		})]
	});
	return c ? /* @__PURE__ */ n("div", {
		className: f,
		style: {
			display: "inline-flex",
			flexDirection: "column",
			gap: "var(--Component-horizontal-padding-xs)"
		},
		children: [C, /* @__PURE__ */ n("div", {
			style: {
				display: "inline-flex",
				alignItems: "center",
				gap: "var(--Component-text-to-element-gap-md)"
			},
			children: [/* @__PURE__ */ t(S, {}), /* @__PURE__ */ t("span", {
				className: "font-text-sm-default text-text-sm-default",
				style: { color: "var(--basic-content-soft)" },
				children: c
			})]
		})]
	}) : /* @__PURE__ */ t("div", {
		className: f,
		children: C
	});
}
//#endregion
//#region src/components/InfoLabel.tsx
var E = {
	sm: "font-label-lg-default text-label-lg-default",
	xs: "font-label-md-default text-label-md-default",
	xxs: "font-label-sm-default text-label-sm-default"
};
function D({ size: e = "sm", head: r, body: i, className: a = "" }) {
	return /* @__PURE__ */ n("div", {
		className: ["flex flex-col gap-Component-text-to-element-gap-xs py-Component-vertical-padding-xs", a].join(" "),
		children: [/* @__PURE__ */ t("span", {
			className: "font-text-sm-default text-text-sm-default text-basic-content-soft",
			children: r
		}), /* @__PURE__ */ t("span", {
			className: `${E[e]} text-basic-content-default`,
			children: i
		})]
	});
}
//#endregion
//#region src/components/Link.tsx
var O = {
	lg: "font-label-lg-default text-label-lg-default",
	md: "font-label-md-default text-label-md-default",
	sm: "font-label-sm-default text-label-sm-default"
}, k = {
	lg: "gap-Component-text-to-element-gap-md",
	md: "gap-Component-text-to-element-gap-xs",
	sm: "gap-Component-text-to-element-gap-xs"
}, A = {
	lg: "inline-flex items-center justify-center w-5 h-5",
	md: "inline-flex items-center justify-center w-3.5 h-3.5",
	sm: "inline-flex items-center justify-center w-3.5 h-3.5"
};
function j({ size: e = "lg", iconLeft: r, iconRight: i, iconTop: a, children: o, className: s = "", ...c }) {
	let l = "fm-link", u = "outline-none focus-visible:shadow-focus-outset rounded-sm", d = /* @__PURE__ */ n("span", {
		className: "inline-flex items-center gap-Component-text-to-element-gap-md",
		children: [
			r && /* @__PURE__ */ t("span", {
				className: A[e],
				children: r
			}),
			/* @__PURE__ */ t("span", {
				className: O[e],
				children: o
			}),
			i && /* @__PURE__ */ t("span", {
				className: A[e],
				children: i
			})
		]
	});
	return a ? /* @__PURE__ */ n("a", {
		className: `inline-flex flex-col items-start ${k[e]} ${l} ${u} ${s}`,
		...c,
		children: [/* @__PURE__ */ t("span", {
			className: A[e],
			children: a
		}), d]
	}) : /* @__PURE__ */ t("a", {
		className: `inline-flex items-center ${l} ${u} ${s}`,
		...c,
		children: d
	});
}
//#endregion
export { y as Button, T as Checkbox, D as InfoLabel, j as Link, u as ProgressIndicator };

//# sourceMappingURL=index.js.map