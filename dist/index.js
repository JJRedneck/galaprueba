import { Fragment as e, jsx as t, jsxs as n } from "react/jsx-runtime";
import { useCallback as r, useEffect as i, useId as a, useRef as o, useState as s } from "react";
//#region src/components/ProgressIndicator.tsx
var c = {
	sm: 24,
	md: 48
}, l = {
	sm: 2,
	md: 2
}, u = {
	blue: "var(--basic-content-brand-primary)",
	white: "var(--basic-content-inverse)",
	black: "var(--basic-content-default)"
};
function d({ size: e = "md", color: n = "blue", className: r = "" }) {
	let i = c[e], a = l[e], o = (i - a) / 2, s = i / 2, d = (e) => {
		let t = e * Math.PI / 180;
		return {
			x: s + o * Math.cos(t),
			y: s + o * Math.sin(t)
		};
	}, f = d(-80), p = d(190);
	return /* @__PURE__ */ t("svg", {
		className: `fm-spin ${r}`.trim(),
		width: i,
		height: i,
		viewBox: `0 0 ${i} ${i}`,
		fill: "none",
		role: "status",
		"aria-label": "Loading",
		children: /* @__PURE__ */ t("path", {
			d: `M ${f.x} ${f.y} A ${o} ${o} 0 1 1 ${p.x} ${p.y}`,
			stroke: u[n],
			strokeWidth: a,
			strokeLinecap: "round"
		})
	});
}
//#endregion
//#region src/components/Button.tsx
var f = ["icon", "floating"];
function p(e, t) {
	return f.includes(e) ? t === "md" ? "fm-btn--icon-md" : "fm-btn--icon-sm" : t === "md" ? "fm-btn--md" : "fm-btn--sm";
}
function m(e, t) {
	switch (e) {
		case "primary": return "fm-btn--primary";
		case "secondary": return "fm-btn--secondary";
		case "tertiary":
		case "icon": return "fm-btn--tertiary";
		case "floating": return "fm-btn--floating";
		case "toggle": return t ? "fm-btn--primary" : "fm-btn--tertiary";
	}
}
function h({ category: r = "primary", size: i = "md", iconLeft: a, iconRight: o, icon: s, pressed: c = !1, loading: l = !1, children: u, className: h = "", disabled: g, onClick: _, ...v }) {
	let y = f.includes(r), b = [
		"fm-btn",
		p(r, i),
		m(r, c),
		h
	].filter(Boolean).join(" "), x = r === "toggle" ? c : void 0, S = r === "primary" || r === "toggle" && c ? "white" : "blue", C = (e) => /* @__PURE__ */ t("span", {
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
		className: b,
		disabled: g,
		"aria-pressed": x,
		"aria-busy": l || void 0,
		"aria-disabled": l || void 0,
		onClick: l ? void 0 : _,
		...v,
		children: l ? /* @__PURE__ */ t(d, {
			size: "sm",
			color: S
		}) : y ? C(s) : /* @__PURE__ */ n(e, { children: [
			a && C(a),
			u,
			o && C(o)
		] })
	});
}
//#endregion
//#region src/components/Dropdown.tsx
function g({ up: e }) {
	return /* @__PURE__ */ t("svg", {
		width: "14",
		height: "8",
		viewBox: "0 0 14 8",
		fill: "none",
		"aria-hidden": "true",
		style: {
			display: "block",
			transform: e ? "rotate(180deg)" : void 0
		},
		children: /* @__PURE__ */ t("path", {
			d: "M1 1.5L7 6.5L13 1.5",
			stroke: "currentColor",
			strokeWidth: "2",
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	});
}
function _() {
	return /* @__PURE__ */ n("svg", {
		width: "14",
		height: "14",
		viewBox: "0 0 14 14",
		fill: "none",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ t("circle", {
				cx: "7",
				cy: "7",
				r: "6",
				stroke: "currentColor",
				strokeWidth: "1.5"
			}),
			/* @__PURE__ */ t("path", {
				d: "M7 4v3.5",
				stroke: "currentColor",
				strokeWidth: "1.5",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ t("circle", {
				cx: "7",
				cy: "10",
				r: "0.75",
				fill: "currentColor"
			})
		]
	});
}
function v({ label: c, value: l, helperText: u, errorMessage: d, disabled: f = !1, open: p, defaultOpen: m = !1, onOpenChange: h, children: v, id: y, className: b = "", style: x }) {
	let S = a(), C = y ?? `fm-dd-${S}`, w = `${C}-listbox`, T = p !== void 0, [E, D] = s(m), O = T ? p : E, k = o(null), A = o(null), j = r((e) => {
		T || D(e), h?.(e);
	}, [T, h]);
	i(() => {
		if (!O) return;
		let e = (e) => {
			k.current?.contains(e.target) || j(!1);
		};
		return document.addEventListener("pointerdown", e), () => document.removeEventListener("pointerdown", e);
	}, [O, j]);
	let M = (e) => {
		if (!f) {
			if (e.key === "Escape") {
				O && (e.preventDefault(), j(!1));
				return;
			}
			(e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") && (e.preventDefault(), j(!O));
		}
	}, N = (e) => {
		j(!1), A.current?.focus();
	}, P = !!d, F = l != null && l !== "", I = P ? d : u, L = [
		"fm-dd-box",
		P ? "fm-dd-box--error" : "",
		f ? "fm-dd-box--disabled" : "",
		O ? "fm-dd-box--open" : ""
	].filter(Boolean).join(" ");
	return /* @__PURE__ */ n("div", {
		ref: k,
		className: [
			"fm-dd",
			O ? "fm-dd--open" : "",
			b
		].filter(Boolean).join(" "),
		style: x,
		children: [
			/* @__PURE__ */ n("button", {
				ref: A,
				type: "button",
				id: C,
				className: L,
				disabled: f,
				"aria-haspopup": "listbox",
				"aria-expanded": O,
				"aria-controls": O ? w : void 0,
				"aria-invalid": P || void 0,
				onClick: () => !f && j(!O),
				onKeyDown: M,
				children: [/* @__PURE__ */ t("span", {
					className: "fm-dd-text",
					children: F ? /* @__PURE__ */ n(e, { children: [/* @__PURE__ */ t("span", {
						className: "fm-dd-floating fm-font-label-sm",
						children: c
					}), /* @__PURE__ */ t("span", {
						className: "fm-dd-value fm-font-label-md",
						children: l
					})] }) : /* @__PURE__ */ t("span", {
						className: "fm-dd-label fm-font-label-md",
						children: c
					})
				}), /* @__PURE__ */ t("span", {
					className: "fm-dd-chevron",
					"aria-hidden": "true",
					children: /* @__PURE__ */ t(g, { up: O })
				})]
			}),
			O && !f && /* @__PURE__ */ t("ul", {
				id: w,
				role: "listbox",
				"aria-labelledby": C,
				className: "fm-dd-listbox",
				onClick: N,
				children: v
			}),
			I && /* @__PURE__ */ n("div", {
				className: `fm-dd-message ${P ? "fm-dd-message--error" : ""}`,
				children: [P && /* @__PURE__ */ t("span", {
					className: "fm-dd-message-icon",
					"aria-hidden": "true",
					children: /* @__PURE__ */ t(_, {})
				}), /* @__PURE__ */ t("span", {
					className: "fm-font-label-sm",
					children: I
				})]
			})
		]
	});
}
//#endregion
//#region src/components/DropdownItem.tsx
function y() {
	return /* @__PURE__ */ t("svg", {
		width: "14",
		height: "10",
		viewBox: "0 0 14 10",
		fill: "none",
		"aria-hidden": "true",
		children: /* @__PURE__ */ t("path", {
			d: "M1 5L5 9L13 1",
			stroke: "currentColor",
			strokeWidth: "2",
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	});
}
function b({ variant: e = "option", selected: r = !1, multiline: i = !1, className: a = "", children: o, ...s }) {
	let c = e === "option", l = [
		"fm-di",
		`fm-di--${e}`,
		i ? "fm-di--multiline" : "",
		r ? "fm-di--selected" : "",
		a
	].filter(Boolean).join(" "), u = r || e === "no-results" ? "fm-font-label-md-strong" : "fm-font-label-md";
	return /* @__PURE__ */ n("li", {
		className: l,
		role: c ? "option" : "status",
		"aria-selected": c ? r : void 0,
		...s,
		children: [/* @__PURE__ */ t("span", {
			className: `fm-di-label ${u}`,
			children: o
		}), c && r && /* @__PURE__ */ t("span", {
			className: "fm-di-check",
			"aria-hidden": "true",
			children: /* @__PURE__ */ t(y, {})
		})]
	});
}
//#endregion
//#region src/components/InfoLabel.tsx
var x = {
	sm: "fm-font-label-lg",
	xs: "fm-font-label-md",
	xxs: "fm-font-label-sm"
};
function S({ size: e = "sm", head: r, body: i, className: a = "" }) {
	return /* @__PURE__ */ n("div", {
		className: a,
		style: {
			display: "flex",
			flexDirection: "column",
			gap: "var(--Component-text-to-element-gap-xs)",
			paddingTop: "var(--Component-vertical-padding-xs)",
			paddingBottom: "var(--Component-vertical-padding-xs)"
		},
		children: [/* @__PURE__ */ t("span", {
			className: "fm-font-text-sm",
			style: { color: "var(--basic-content-soft)" },
			children: r
		}), /* @__PURE__ */ t("span", {
			className: x[e],
			style: { color: "var(--basic-content-default)" },
			children: i
		})]
	});
}
//#endregion
//#region src/components/Input.tsx
function C() {
	return /* @__PURE__ */ n("svg", {
		width: "20",
		height: "20",
		viewBox: "0 0 20 20",
		fill: "none",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ t("rect", {
				x: "3",
				y: "4.5",
				width: "14",
				height: "13",
				rx: "1.5",
				stroke: "currentColor",
				strokeWidth: "1.5"
			}),
			/* @__PURE__ */ t("path", {
				d: "M3 8h14",
				stroke: "currentColor",
				strokeWidth: "1.5"
			}),
			/* @__PURE__ */ t("path", {
				d: "M7 2.5v3M13 2.5v3",
				stroke: "currentColor",
				strokeWidth: "1.5",
				strokeLinecap: "round"
			})
		]
	});
}
function w() {
	return /* @__PURE__ */ t("svg", {
		width: "14",
		height: "14",
		viewBox: "0 0 14 14",
		fill: "none",
		"aria-hidden": "true",
		children: /* @__PURE__ */ t("path", {
			d: "M2.5 2.5l9 9M11.5 2.5l-9 9",
			stroke: "currentColor",
			strokeWidth: "1.5",
			strokeLinecap: "round"
		})
	});
}
function T() {
	return /* @__PURE__ */ n("svg", {
		width: "20",
		height: "18",
		viewBox: "0 0 20 18",
		fill: "none",
		"aria-hidden": "true",
		children: [/* @__PURE__ */ t("path", {
			d: "M1 9s3.5-6.5 9-6.5 9 6.5 9 6.5-3.5 6.5-9 6.5S1 9 1 9z",
			stroke: "currentColor",
			strokeWidth: "1.5"
		}), /* @__PURE__ */ t("circle", {
			cx: "10",
			cy: "9",
			r: "2.5",
			stroke: "currentColor",
			strokeWidth: "1.5"
		})]
	});
}
function E() {
	return /* @__PURE__ */ t("svg", {
		width: "20",
		height: "18",
		viewBox: "0 0 20 18",
		fill: "none",
		"aria-hidden": "true",
		children: /* @__PURE__ */ t("path", {
			d: "M3 3l14 12M4.5 5.2C2.5 6.8 1 9 1 9s3.5 6.5 9 6.5c1.7 0 3.2-.4 4.5-1.1M8 3.2A9.8 9.8 0 0110 3c5.5 0 9 6 9 6s-.8 1.4-2.3 2.9",
			stroke: "currentColor",
			strokeWidth: "1.5",
			strokeLinecap: "round"
		})
	});
}
function D() {
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
			fill: "var(--feedback-content-error)"
		}), /* @__PURE__ */ t("path", {
			d: "M4.5 4.5l5 5M9.5 4.5l-5 5",
			stroke: "white",
			strokeWidth: "1.5",
			strokeLinecap: "round"
		})]
	});
}
function O() {
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
			fill: "var(--feedback-content-success)"
		}), /* @__PURE__ */ t("path", {
			d: "M3.8 7.2l2.2 2.2 4.2-4.2",
			stroke: "white",
			strokeWidth: "1.5",
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})]
	});
}
function k() {
	return /* @__PURE__ */ n("svg", {
		width: "14",
		height: "14",
		viewBox: "0 0 14 14",
		fill: "none",
		"aria-hidden": "true",
		children: [/* @__PURE__ */ t("path", {
			d: "M7 1l6.5 11.5h-13L7 1z",
			fill: "var(--feedback-content-warning)"
		}), /* @__PURE__ */ t("path", {
			d: "M7 5.5v3.2M7 10.3v.8",
			stroke: "white",
			strokeWidth: "1.5",
			strokeLinecap: "round"
		})]
	});
}
function A(e) {
	return e === "error" ? /* @__PURE__ */ t(D, {}) : e === "success" ? /* @__PURE__ */ t(O, {}) : e === "alert" ? /* @__PURE__ */ t(k, {}) : null;
}
function j({ type: e = "text", label: r, value: i, defaultValue: o, placeholder: c, state: l = "default", message: u, iconLeft: d, readOnly: f = !1, disabled: p = !1, rows: m = 3, onClear: h, onChange: g, onFocus: _, onBlur: v, className: y = "", style: b, id: x, name: S, ...D }) {
	let O = a(), k = x ?? O, j = i !== void 0, [M, N] = s(o ?? ""), P = j ? i : M, [F, I] = s(!1), [L, R] = s(!1), z = P != null && P !== "", B = F || z || e === "date" || e === "textarea", V = [
		"fm-input-box",
		B ? "fm-input-box--floating" : "",
		F ? "fm-input-box--focus" : "",
		p ? "fm-input-box--disabled" : "",
		f ? "fm-input-box--readonly" : "",
		l === "error" ? "fm-input-box--error" : "",
		l === "success" ? "fm-input-box--success" : "",
		l === "alert" ? "fm-input-box--alert" : ""
	].filter(Boolean).join(" "), H = (e) => {
		j || N(e.target.value), g?.(e);
	}, U = (e) => {
		I(!0), _?.(e);
	}, W = (e) => {
		I(!1), v?.(e);
	}, G = e === "password" && L ? "text" : e, K = !!h && z && !p && !f && e !== "textarea" && e !== "password", q = d ?? (e === "date" ? /* @__PURE__ */ t(C, {}) : null), J = () => e === "textarea" ? /* @__PURE__ */ t("textarea", {
		id: k,
		name: S,
		className: "fm-input-native fm-input-native--textarea",
		value: P,
		placeholder: B ? c : void 0,
		readOnly: f,
		disabled: p,
		rows: m,
		"aria-invalid": l === "error" || void 0,
		onChange: H,
		onFocus: U,
		onBlur: W,
		...D
	}) : /* @__PURE__ */ t("input", {
		id: k,
		name: S,
		type: G,
		className: "fm-input-native",
		value: P,
		placeholder: B ? c : void 0,
		readOnly: f,
		disabled: p,
		"aria-invalid": l === "error" || void 0,
		onChange: H,
		onFocus: U,
		onBlur: W,
		...D
	}), Y = p || f ? "var(--basic-content-disabled)" : "var(--basic-content-soft)";
	return /* @__PURE__ */ n("div", {
		className: `fm-input ${y}`,
		style: b,
		children: [/* @__PURE__ */ n("label", {
			htmlFor: k,
			className: V,
			children: [
				q && /* @__PURE__ */ t("span", {
					className: "fm-input-icon fm-input-icon--leading",
					"aria-hidden": "true",
					children: q
				}),
				/* @__PURE__ */ n("span", {
					className: "fm-input-text",
					children: [r && /* @__PURE__ */ t("span", {
						className: B ? "fm-input-label fm-input-label--floating" : "fm-input-label",
						children: r
					}), J()]
				}),
				e === "password" && !p && /* @__PURE__ */ t("button", {
					type: "button",
					className: "fm-input-icon-btn",
					"aria-label": L ? "Hide password" : "Show password",
					"aria-pressed": L,
					onClick: () => R((e) => !e),
					tabIndex: -1,
					children: t(L ? E : T, {})
				}),
				K && /* @__PURE__ */ t("button", {
					type: "button",
					className: "fm-input-icon-btn",
					"aria-label": "Clear",
					onClick: (e) => {
						e.preventDefault(), j || N(""), h?.();
					},
					tabIndex: -1,
					children: /* @__PURE__ */ t(w, {})
				})
			]
		}), u != null && /* @__PURE__ */ n("div", {
			className: "fm-input-message",
			style: { color: Y },
			children: [A(l), /* @__PURE__ */ t("span", {
				className: "fm-font-label-sm",
				children: u
			})]
		})]
	});
}
//#endregion
//#region src/components/Link.tsx
var M = {
	lg: "fm-font-label-lg",
	md: "fm-font-label-md",
	sm: "fm-font-label-sm"
}, N = {
	lg: "var(--Component-text-to-element-gap-md)",
	md: "var(--Component-text-to-element-gap-xs)",
	sm: "var(--Component-text-to-element-gap-xs)"
}, P = {
	lg: 20,
	md: 14,
	sm: 14
};
function F(e) {
	return {
		display: "inline-flex",
		alignItems: "center",
		justifyContent: "center",
		width: P[e],
		height: P[e],
		flexShrink: 0
	};
}
function I({ size: e = "lg", iconLeft: r, iconRight: i, iconTop: a, children: o, className: s = "", ...c }) {
	let l = ["fm-link", s].filter(Boolean).join(" "), u = {
		display: "inline-flex",
		alignItems: "center",
		gap: "var(--Component-text-to-element-gap-md)"
	}, d = /* @__PURE__ */ n("span", {
		style: u,
		children: [
			r && /* @__PURE__ */ t("span", {
				style: F(e),
				children: r
			}),
			/* @__PURE__ */ t("span", {
				className: M[e],
				children: o
			}),
			i && /* @__PURE__ */ t("span", {
				style: F(e),
				children: i
			})
		]
	});
	return a ? /* @__PURE__ */ n("a", {
		className: l,
		style: {
			display: "inline-flex",
			flexDirection: "column",
			alignItems: "flex-start",
			gap: N[e]
		},
		...c,
		children: [/* @__PURE__ */ t("span", {
			style: F(e),
			children: a
		}), d]
	}) : /* @__PURE__ */ t("a", {
		className: l,
		style: u,
		...c,
		children: d
	});
}
//#endregion
//#region src/components/QuickAction.tsx
function L({ size: e = "xs", icon: r, loading: i = !1, children: a, className: o = "", disabled: s, onClick: c, ...l }) {
	return /* @__PURE__ */ n("button", {
		type: "button",
		className: [
			"fm-qa",
			`fm-qa--${e}`,
			i ? "fm-qa--loading" : "",
			o
		].filter(Boolean).join(" "),
		disabled: s || i,
		"aria-busy": i || void 0,
		onClick: i ? void 0 : c,
		...l,
		children: [/* @__PURE__ */ t("span", {
			className: "fm-qa-icon",
			"aria-hidden": "true",
			children: i ? null : r
		}), /* @__PURE__ */ t("span", {
			className: "fm-qa-label",
			children: i ? null : a
		})]
	});
}
//#endregion
export { h as Button, v as Dropdown, b as DropdownItem, S as InfoLabel, j as Input, I as Link, d as ProgressIndicator, L as QuickAction };

//# sourceMappingURL=index.js.map