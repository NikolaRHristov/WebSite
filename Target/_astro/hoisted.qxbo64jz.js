const J = "modulepreload",
	Z = function (e) {
		return "/" + e;
	},
	I = {},
	v = function (t, n, r) {
		let o = Promise.resolve();
		if (n && n.length > 0) {
			const s = document.getElementsByTagName("link");
			o = Promise.all(
				n.map((a) => {
					if (((a = Z(a)), a in I)) return;
					I[a] = !0;
					const f = a.endsWith(".css"),
						c = f ? '[rel="stylesheet"]' : "";
					if (!!r)
						for (let l = s.length - 1; l >= 0; l--) {
							const d = s[l];
							if (d.href === a && (!f || d.rel === "stylesheet"))
								return;
						}
					else if (document.querySelector(`link[href="${a}"]${c}`))
						return;
					const i = document.createElement("link");
					if (
						((i.rel = f ? "stylesheet" : J),
						f || ((i.as = "script"), (i.crossOrigin = "")),
						(i.href = a),
						document.head.appendChild(i),
						f)
					)
						return new Promise((l, d) => {
							i.addEventListener("load", l),
								i.addEventListener("error", () =>
									d(
										new Error(
											`Unable to preload CSS for ${a}`
										)
									)
								);
						});
				})
			);
		}
		return o
			.then(() => t())
			.catch((s) => {
				const a = new Event("vite:preloadError", { cancelable: !0 });
				if (
					((a.payload = s),
					window.dispatchEvent(a),
					!a.defaultPrevented)
				)
					throw s;
			});
	};
(
	await v(() => import("./index.esm.aHQLvXRj.js"), __vite__mapDeps([]))
).initializeApp({
	apiKey: "AIzaSyCiIOIiAvdRwC5n6AzX_F5WSivt9bvosTQ",
	authDomain: "nikolahristov-web.firebaseapp.com",
	projectId: "nikolahristov-web",
	storageBucket: "nikolahristov-web.appspot.com",
	messagingSenderId: "540449914377",
	appId: "1:540449914377:web:bf0a39a757e9ebcd1ec2d8",
	measurementId: "G-146FB9N18L",
});
new (
	await v(() => import("./Swup.modern.ysAiPt2N.js"), __vite__mapDeps([]))
).default({
	containers: ["#footer", "#main", "#header"],
	plugins: [
		new (
			await v(
				() => import("./index.modern.grwuNUiy.js"),
				__vite__mapDeps([0, 1])
			)
		).default(),
		new (
			await v(
				() => import("./index.modern.cx1mZwdG.js"),
				__vite__mapDeps([2, 1])
			)
		).default(),
		new (
			await v(
				() => import("./index.modern.zoi7uPwP.js"),
				__vite__mapDeps([3, 1, 4])
			)
		).default(),
		new (
			await v(
				() => import("./index.modern.37hqqUNE.js"),
				__vite__mapDeps([5, 1, 4])
			)
		).default(),
		new (
			await v(
				() => import("./index.modern.krbs8bWt.js"),
				__vite__mapDeps([6, 1])
			)
		).default(),
	],
});
document.documentElement.classList.remove("no-js");
document.documentElement.classList.add("js");
const ee = "astro:before-preparation",
	te = "astro:after-preparation",
	ne = "astro:before-swap",
	re = "astro:after-swap",
	oe = (e) => document.dispatchEvent(new Event(e));
class H extends Event {
	from;
	to;
	direction;
	navigationType;
	sourceElement;
	info;
	newDocument;
	constructor(t, n, r, o, s, a, f, c, h) {
		super(t, n),
			(this.from = r),
			(this.to = o),
			(this.direction = s),
			(this.navigationType = a),
			(this.sourceElement = f),
			(this.info = c),
			(this.newDocument = h),
			Object.defineProperties(this, {
				from: { enumerable: !0 },
				to: { enumerable: !0, writable: !0 },
				direction: { enumerable: !0, writable: !0 },
				navigationType: { enumerable: !0 },
				sourceElement: { enumerable: !0 },
				info: { enumerable: !0 },
				newDocument: { enumerable: !0, writable: !0 },
			});
	}
}
class ie extends H {
	formData;
	loader;
	constructor(t, n, r, o, s, a, f, c, h) {
		super(ee, { cancelable: !0 }, t, n, r, o, s, a, f),
			(this.formData = c),
			(this.loader = h.bind(this, this)),
			Object.defineProperties(this, {
				formData: { enumerable: !0 },
				loader: { enumerable: !0, writable: !0 },
			});
	}
}
class se extends H {
	direction;
	viewTransition;
	swap;
	constructor(t, n, r) {
		super(
			ne,
			void 0,
			t.from,
			t.to,
			t.direction,
			t.navigationType,
			t.sourceElement,
			t.info,
			t.newDocument
		),
			(this.direction = t.direction),
			(this.viewTransition = n),
			(this.swap = r.bind(this, this)),
			Object.defineProperties(this, {
				direction: { enumerable: !0 },
				viewTransition: { enumerable: !0 },
				swap: { enumerable: !0, writable: !0 },
			});
	}
}
async function ae(e, t, n, r, o, s, a, f) {
	const c = new ie(e, t, n, r, o, s, window.document, a, f);
	return (
		document.dispatchEvent(c) &&
			(await c.loader(),
			c.defaultPrevented ||
				(oe(te),
				c.navigationType !== "traverse" && R({ scrollX, scrollY }))),
		c
	);
}
async function ce(e, t, n) {
	const r = new se(e, t, n);
	return document.dispatchEvent(r), r.swap(), r;
}
const R = (e) => {
		history.state &&
			((history.scrollRestoration = "manual"),
			history.replaceState({ ...history.state, ...e }, ""));
	},
	D = !!document.startViewTransition,
	P = () =>
		!!document.querySelector('[name="astro-view-transitions-enabled"]'),
	F = (e, t) => e.pathname === t.pathname && e.search === t.search;
let L,
	y,
	g = !1,
	V;
const q = (e) => document.dispatchEvent(new Event(e)),
	B = () => q("astro:page-load"),
	le = () => {
		let e = document.createElement("div");
		e.setAttribute("aria-live", "assertive"),
			e.setAttribute("aria-atomic", "true"),
			(e.className = "astro-route-announcer"),
			document.body.append(e),
			setTimeout(() => {
				let t =
					document.title ||
					document.querySelector("h1")?.textContent ||
					location.pathname;
				e.textContent = t;
			}, 60);
	},
	w = "data-astro-transition-persist",
	U = "data-astro-transition",
	W = "data-astro-transition-fallback";
let O,
	b = 0;
history.state
	? ((b = history.state.index),
		scrollTo({ left: history.state.scrollX, top: history.state.scrollY }))
	: P() &&
		(history.replaceState({ index: b, scrollX, scrollY }, ""),
		(history.scrollRestoration = "manual"));
const ue = (e, t) => {
	let n = !1,
		r = !1;
	return (...o) => {
		if (n) {
			r = !0;
			return;
		}
		e(...o),
			(n = !0),
			setTimeout(() => {
				r && ((r = !1), e(...o)), (n = !1);
			}, t);
	};
};
async function fe(e, t) {
	try {
		const n = await fetch(e, t),
			r = n.headers.get("content-type")?.replace(/;.*$/, "");
		return r !== "text/html" && r !== "application/xhtml+xml"
			? null
			: {
					html: await n.text(),
					redirected: n.redirected ? n.url : void 0,
					mediaType: r,
				};
	} catch {
		return null;
	}
}
function X() {
	const e = document.querySelector(
		'[name="astro-view-transitions-fallback"]'
	);
	return e ? e.getAttribute("content") : "animate";
}
function de() {
	let e = Promise.resolve();
	for (const t of Array.from(document.scripts)) {
		if (t.dataset.astroExec === "") continue;
		const n = document.createElement("script");
		n.innerHTML = t.innerHTML;
		for (const r of t.attributes) {
			if (r.name === "src") {
				const o = new Promise((s) => {
					n.onload = s;
				});
				e = e.then(() => o);
			}
			n.setAttribute(r.name, r.value);
		}
		(n.dataset.astroExec = ""), t.replaceWith(n);
	}
	return e;
}
const Y = (e, t, n, r) => {
	const o = F(t, e);
	let s = !1;
	if (e.href !== location.href && !r)
		if (n.history === "replace") {
			const a = history.state;
			history.replaceState(
				{
					...n.state,
					index: a.index,
					scrollX: a.scrollX,
					scrollY: a.scrollY,
				},
				"",
				e.href
			);
		} else
			history.pushState(
				{ ...n.state, index: ++b, scrollX: 0, scrollY: 0 },
				"",
				e.href
			);
	(L = e),
		o || (scrollTo({ left: 0, top: 0, behavior: "instant" }), (s = !0)),
		r
			? scrollTo(r.scrollX, r.scrollY)
			: (e.hash
					? ((history.scrollRestoration = "auto"),
						(location.href = e.href))
					: s || scrollTo({ left: 0, top: 0, behavior: "instant" }),
				(history.scrollRestoration = "manual"));
};
function me(e) {
	const t = [];
	for (const n of e.querySelectorAll("head link[rel=stylesheet]"))
		if (
			!document.querySelector(
				`[${w}="${n.getAttribute(
					w
				)}"], link[rel=stylesheet][href="${n.getAttribute("href")}"]`
			)
		) {
			const r = document.createElement("link");
			r.setAttribute("rel", "preload"),
				r.setAttribute("as", "style"),
				r.setAttribute("href", n.getAttribute("href")),
				t.push(
					new Promise((o) => {
						["load", "error"].forEach((s) =>
							r.addEventListener(s, o)
						),
							document.head.append(r);
					})
				);
		}
	return t;
}
async function x(e, t, n, r) {
	const o = (i, l) => {
			const d = i.getAttribute(w),
				p = d && l.head.querySelector(`[${w}="${d}"]`);
			if (p) return p;
			if (i.matches("link[rel=stylesheet]")) {
				const E = i.getAttribute("href");
				return l.head.querySelector(
					`link[rel=stylesheet][href="${E}"]`
				);
			}
			return null;
		},
		s = () => {
			const i = document.activeElement;
			if (i?.closest(`[${w}]`)) {
				if (
					i instanceof HTMLInputElement ||
					i instanceof HTMLTextAreaElement
				) {
					const l = i.selectionStart,
						d = i.selectionEnd;
					return { activeElement: i, start: l, end: d };
				}
				return { activeElement: i };
			} else return { activeElement: null };
		},
		a = ({ activeElement: i, start: l, end: d }) => {
			i &&
				(i.focus(),
				(i instanceof HTMLInputElement ||
					i instanceof HTMLTextAreaElement) &&
					((i.selectionStart = l), (i.selectionEnd = d)));
		},
		f = (i) => {
			const l = document.documentElement,
				d = [...l.attributes].filter(
					({ name: u }) => (
						l.removeAttribute(u), u.startsWith("data-astro-")
					)
				);
			[...i.newDocument.documentElement.attributes, ...d].forEach(
				({ name: u, value: m }) => l.setAttribute(u, m)
			);
			for (const u of document.scripts)
				for (const m of i.newDocument.scripts)
					if (
						(!u.src && u.textContent === m.textContent) ||
						(u.src && u.type === m.type && u.src === m.src)
					) {
						m.dataset.astroExec = "";
						break;
					}
			for (const u of Array.from(document.head.children)) {
				const m = o(u, i.newDocument);
				m ? m.remove() : u.remove();
			}
			document.head.append(...i.newDocument.head.children);
			const p = document.body,
				E = s();
			document.body.replaceWith(i.newDocument.body);
			for (const u of p.querySelectorAll(`[${w}]`)) {
				const m = u.getAttribute(w),
					S = document.querySelector(`[${w}="${m}"]`);
				S && S.replaceWith(u);
			}
			a(E);
		};
	async function c(i) {
		function l(u) {
			const m = u.effect;
			return !m || !(m instanceof KeyframeEffect) || !m.target
				? !1
				: window.getComputedStyle(m.target, m.pseudoElement)
						.animationIterationCount === "infinite";
		}
		const d = document.getAnimations();
		document.documentElement.setAttribute(W, i);
		const E = document
			.getAnimations()
			.filter((u) => !d.includes(u) && !l(u));
		return Promise.all(E.map((u) => u.finished));
	}
	if (!g)
		document.documentElement.setAttribute(U, e.direction),
			r === "animate" && (await c("old"));
	else throw new DOMException("Transition was skipped");
	const h = await ce(e, y, f);
	Y(h.to, h.from, t, n),
		q(re),
		r === "animate" && !g && c("new").then(() => V());
}
async function j(e, t, n, r, o) {
	if (!P() || location.origin !== n.origin) {
		location.href = n.href;
		return;
	}
	const s = o ? "traverse" : r.history === "replace" ? "replace" : "push";
	if ((s !== "traverse" && R({ scrollX, scrollY }), F(t, n) && n.hash)) {
		Y(n, t, r, o);
		return;
	}
	const a = await ae(t, n, e, s, r.sourceElement, r.info, r.formData, f);
	if (a.defaultPrevented) {
		location.href = n.href;
		return;
	}
	async function f(c) {
		const h = c.to.href,
			i = {};
		c.formData && ((i.method = "POST"), (i.body = c.formData));
		const l = await fe(h, i);
		if (l === null) {
			c.preventDefault();
			return;
		}
		if (
			(l.redirected && (c.to = new URL(l.redirected)),
			(O ??= new DOMParser()),
			(c.newDocument = O.parseFromString(l.html, l.mediaType)),
			c.newDocument
				.querySelectorAll("noscript")
				.forEach((p) => p.remove()),
			!c.newDocument.querySelector(
				'[name="astro-view-transitions-enabled"]'
			) && !c.formData)
		) {
			c.preventDefault();
			return;
		}
		const d = me(c.newDocument);
		d.length && (await Promise.all(d));
	}
	if (((g = !1), D))
		y = document.startViewTransition(async () => await x(a, r, o));
	else {
		const c = (async () => {
			await new Promise((h) => setTimeout(h)), await x(a, r, o, X());
		})();
		y = {
			updateCallbackDone: c,
			ready: c,
			finished: new Promise((h) => (V = h)),
			skipTransition: () => {
				g = !0;
			},
		};
	}
	y.ready.then(async () => {
		await de(), B(), le();
	}),
		y.finished.then(() => {
			document.documentElement.removeAttribute(U),
				document.documentElement.removeAttribute(W);
		}),
		await y.ready;
}
async function N(e, t) {
	await j("forward", L, new URL(e, location.href), t ?? {});
}
function he(e) {
	if (!P() && e.state) {
		location.reload();
		return;
	}
	if (e.state === null) return;
	const t = history.state,
		n = t.index,
		r = n > b ? "forward" : "back";
	(b = n), j(r, L, new URL(location.href), {}, t);
}
const M = () => {
	R({ scrollX, scrollY });
};
{
	(D || X() !== "none") &&
		((L = new URL(location.href)),
		addEventListener("popstate", he),
		addEventListener("load", B),
		"onscrollend" in window
			? addEventListener("scrollend", M)
			: addEventListener("scroll", ue(M, 350), { passive: !0 }));
	for (const e of document.scripts) e.dataset.astroExec = "";
}
const K = new Set(),
	T = new WeakSet();
let _,
	z,
	$ = !1;
function we(e) {
	$ ||
		(($ = !0),
		(_ ??= e?.prefetchAll ?? !1),
		(z ??= e?.defaultStrategy ?? "hover"),
		pe(),
		ve(),
		ye());
}
function pe() {
	for (const e of ["touchstart", "mousedown"])
		document.body.addEventListener(
			e,
			(t) => {
				A(t.target, "tap") &&
					k(t.target.href, {
						with: "fetch",
						ignoreSlowConnection: !0,
					});
			},
			{ passive: !0 }
		);
}
function ve() {
	let e;
	document.body.addEventListener(
		"focusin",
		(r) => {
			A(r.target, "hover") && t(r);
		},
		{ passive: !0 }
	),
		document.body.addEventListener("focusout", n, { passive: !0 }),
		Q(() => {
			for (const r of document.getElementsByTagName("a"))
				T.has(r) ||
					(A(r, "hover") &&
						(T.add(r),
						r.addEventListener("mouseenter", t, { passive: !0 }),
						r.addEventListener("mouseleave", n, { passive: !0 })));
		});
	function t(r) {
		const o = r.target.href;
		e && clearTimeout(e),
			(e = setTimeout(() => {
				k(o, { with: "fetch" });
			}, 80));
	}
	function n() {
		e && (clearTimeout(e), (e = 0));
	}
}
function ye() {
	let e;
	Q(() => {
		for (const t of document.getElementsByTagName("a"))
			T.has(t) ||
				(A(t, "viewport") && (T.add(t), (e ??= Ee()), e.observe(t)));
	});
}
function Ee() {
	const e = new WeakMap();
	return new IntersectionObserver((t, n) => {
		for (const r of t) {
			const o = r.target,
				s = e.get(o);
			r.isIntersecting
				? (s && clearTimeout(s),
					e.set(
						o,
						setTimeout(() => {
							n.unobserve(o),
								e.delete(o),
								k(o.href, { with: "link" });
						}, 300)
					))
				: s && (clearTimeout(s), e.delete(o));
		}
	});
}
function k(e, t) {
	const n = t?.ignoreSlowConnection ?? !1;
	if (!be(e, n)) return;
	if ((K.add(e), (t?.with ?? "link") === "link")) {
		const o = document.createElement("link");
		(o.rel = "prefetch"),
			o.setAttribute("href", e),
			document.head.append(o);
	} else
		fetch(e).catch((o) => {
			console.log(`[astro] Failed to prefetch ${e}`), console.error(o);
		});
}
function be(e, t) {
	if (!navigator.onLine || (!t && G())) return !1;
	try {
		const n = new URL(e, location.href);
		return (
			location.origin === n.origin &&
			(location.pathname !== n.pathname ||
				location.search !== n.search) &&
			!K.has(e)
		);
	} catch {}
	return !1;
}
function A(e, t) {
	if (e?.tagName !== "A") return !1;
	const n = e.dataset.astroPrefetch;
	return n === "false"
		? !1
		: t === "tap" && (n != null || _) && G()
			? !0
			: (n == null && _) || n === ""
				? t === z
				: n === t;
}
function G() {
	if ("connection" in navigator) {
		const e = navigator.connection;
		return e.saveData || /(2|3)g/.test(e.effectiveType);
	}
	return !1;
}
function Q(e) {
	e();
	let t = !1;
	document.addEventListener("astro:page-load", () => {
		if (!t) {
			t = !0;
			return;
		}
		e();
	});
}
function ge() {
	const e = document.querySelector(
		'[name="astro-view-transitions-fallback"]'
	);
	return e ? e.getAttribute("content") : "animate";
}
function C(e) {
	return e.dataset.astroReload !== void 0;
}
(D || ge() !== "none") &&
	(document.addEventListener("click", (e) => {
		let t = e.target;
		if (
			(t instanceof Element && (t = t.closest("a, area")),
			!(t instanceof HTMLAnchorElement) &&
				!(t instanceof SVGAElement) &&
				!(t instanceof HTMLAreaElement))
		)
			return;
		const n = t instanceof HTMLElement ? t.target : t.target.baseVal,
			r = t instanceof HTMLElement ? t.href : t.href.baseVal,
			o = new URL(r, location.href).origin;
		C(t) ||
			t.hasAttribute("download") ||
			!t.href ||
			(n && n !== "_self") ||
			o !== location.origin ||
			e.button !== 0 ||
			e.metaKey ||
			e.ctrlKey ||
			e.altKey ||
			e.shiftKey ||
			e.defaultPrevented ||
			(e.preventDefault(),
			N(r, {
				history:
					t.dataset.astroHistory === "replace" ? "replace" : "auto",
				sourceElement: t,
			}));
	}),
	document.addEventListener("submit", (e) => {
		let t = e.target;
		if (t.tagName !== "FORM" || C(t)) return;
		const n = t,
			r = e.submitter,
			o = new FormData(n, r);
		let s = r?.getAttribute("formaction") ?? n.action ?? location.pathname;
		const a = r?.getAttribute("formmethod") ?? n.method;
		if (a === "dialog") return;
		const f = { sourceElement: r ?? n };
		if (a === "get") {
			const c = new URLSearchParams(o),
				h = new URL(s);
			(h.search = c.toString()), (s = h.toString());
		} else f.formData = o;
		e.preventDefault(), N(s, f);
	}),
	we({ prefetchAll: !0 }));
//# sourceMappingURL=hoisted.qxbo64jz.js.map
function __vite__mapDeps(indexes) {
	if (!__vite__mapDeps.viteFileDeps) {
		__vite__mapDeps.viteFileDeps = [
			"_astro/index.modern.grwuNUiy.js",
			"_astro/index.modern.kBZUKyzZ.js",
			"_astro/index.modern.cx1mZwdG.js",
			"_astro/index.modern.zoi7uPwP.js",
			"_astro/Swup.modern.ysAiPt2N.js",
			"_astro/index.modern.37hqqUNE.js",
			"_astro/index.modern.krbs8bWt.js",
		];
	}
	return indexes.map((i) => __vite__mapDeps.viteFileDeps[i]);
}
