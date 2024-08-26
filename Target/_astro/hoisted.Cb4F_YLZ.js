const __vite__mapDeps = (
	i,
	m = __vite__mapDeps,
	d = m.f ||
		(m.f = [
			"_astro/index.modern.DpLP8u1C.js",
			"_astro/index.modern.CkIAsQri.js",
			"_astro/index.modern.FjGODCox.js",
			"_astro/index.modern.Dzx6rguv.js",
			"_astro/Swup.modern.UA9jlYbO.js",
			"_astro/index.modern.CiCz6VZW.js",
			"_astro/index.modern.aa8fLSdp.js",
		]),
) => i.map((i) => d[i]);
import { i as U } from "./index.D6rU_tt3.js";
const B = "modulepreload",
	W = function (t) {
		return "/" + t;
	},
	D = {},
	b = function (e, n, o) {
		let r = Promise.resolve();
		if (n && n.length > 0) {
			document.getElementsByTagName("link");
			const a = document.querySelector("meta[property=csp-nonce]"),
				l = a?.nonce || a?.getAttribute("nonce");
			r = Promise.all(
				n.map((i) => {
					if (((i = W(i)), i in D)) return;
					D[i] = !0;
					const u = i.endsWith(".css"),
						d = u ? '[rel="stylesheet"]' : "";
					if (document.querySelector(`link[href="${i}"]${d}`)) return;
					const c = document.createElement("link");
					if (
						((c.rel = u ? "stylesheet" : B),
						u || ((c.as = "script"), (c.crossOrigin = "")),
						(c.href = i),
						l && c.setAttribute("nonce", l),
						document.head.appendChild(c),
						u)
					)
						return new Promise((s, m) => {
							c.addEventListener("load", s),
								c.addEventListener("error", () =>
									m(
										new Error(
											`Unable to preload CSS for ${i}`,
										),
									),
								);
						});
				}),
			);
		}
		return r
			.then(() => e())
			.catch((a) => {
				const l = new Event("vite:preloadError", { cancelable: !0 });
				if (
					((l.payload = a),
					window.dispatchEvent(l),
					!l.defaultPrevented)
				)
					throw a;
			});
	};
(
	await b(async () => {
		const { initializeApp: t } = await import("./index.esm.WPJ9Gp6O.js");
		return { initializeApp: t };
	}, [])
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
	await b(async () => {
		const { default: t } = await import("./Swup.modern.UA9jlYbO.js");
		return { default: t };
	}, [])
).default({
	containers: ["#footer", "#main", "#header"],
	plugins: [
		new (
			await b(
				async () => {
					const { default: t } = await import(
						"./index.modern.DpLP8u1C.js"
					);
					return { default: t };
				},
				__vite__mapDeps([0, 1]),
			)
		).default(),
		new (
			await b(
				async () => {
					const { default: t } = await import(
						"./index.modern.FjGODCox.js"
					);
					return { default: t };
				},
				__vite__mapDeps([2, 1]),
			)
		).default(),
		new (
			await b(
				async () => {
					const { default: t } = await import(
						"./index.modern.Dzx6rguv.js"
					);
					return { default: t };
				},
				__vite__mapDeps([3, 1, 4]),
			)
		).default(),
		new (
			await b(
				async () => {
					const { default: t } = await import(
						"./index.modern.CiCz6VZW.js"
					);
					return { default: t };
				},
				__vite__mapDeps([5, 1, 4]),
			)
		).default(),
		new (
			await b(
				async () => {
					const { default: t } = await import(
						"./index.modern.aa8fLSdp.js"
					);
					return { default: t };
				},
				__vite__mapDeps([6, 1]),
			)
		).default(),
	],
});
document.documentElement.classList.remove("no-js");
document.documentElement.classList.add("js");
const v = "data-astro-transition-persist";
function j(t) {
	for (const e of document.scripts)
		for (const n of t.scripts)
			if (
				!n.hasAttribute("data-astro-rerun") &&
				((!e.src && e.textContent === n.textContent) ||
					(e.src && e.type === n.type && e.src === n.src))
			) {
				n.dataset.astroExec = "";
				break;
			}
}
function K(t) {
	const e = document.documentElement,
		n = [...e.attributes].filter(
			({ name: o }) => (
				e.removeAttribute(o), o.startsWith("data-astro-")
			),
		);
	[...t.documentElement.attributes, ...n].forEach(({ name: o, value: r }) =>
		e.setAttribute(o, r),
	);
}
function z(t) {
	for (const e of Array.from(document.head.children)) {
		const n = J(e, t);
		n ? n.remove() : e.remove();
	}
	document.head.append(...t.head.children);
}
function G(t, e) {
	e.replaceWith(t);
	for (const n of e.querySelectorAll(`[${v}]`)) {
		const o = n.getAttribute(v),
			r = t.querySelector(`[${v}="${o}"]`);
		r &&
			(r.replaceWith(n),
			r.localName === "astro-island" &&
				Z(n) &&
				(n.setAttribute("ssr", ""),
				n.setAttribute("props", r.getAttribute("props"))));
	}
}
const Q = () => {
		const t = document.activeElement;
		if (t?.closest(`[${v}]`)) {
			if (
				t instanceof HTMLInputElement ||
				t instanceof HTMLTextAreaElement
			) {
				const e = t.selectionStart,
					n = t.selectionEnd;
				return () => _({ activeElement: t, start: e, end: n });
			}
			return () => _({ activeElement: t });
		} else return () => _({ activeElement: null });
	},
	_ = ({ activeElement: t, start: e, end: n }) => {
		t &&
			(t.focus(),
			(t instanceof HTMLInputElement ||
				t instanceof HTMLTextAreaElement) &&
				(typeof e == "number" && (t.selectionStart = e),
				typeof n == "number" && (t.selectionEnd = n)));
	},
	J = (t, e) => {
		const n = t.getAttribute(v),
			o = n && e.head.querySelector(`[${v}="${n}"]`);
		if (o) return o;
		if (t.matches("link[rel=stylesheet]")) {
			const r = t.getAttribute("href");
			return e.head.querySelector(`link[rel=stylesheet][href="${r}"]`);
		}
		return null;
	},
	Z = (t) => {
		const e = t.dataset.astroTransitionPersistProps;
		return e == null || e === "false";
	},
	tt = (t) => {
		j(t), K(t), z(t);
		const e = Q();
		G(t.body, document.body), e();
	},
	et = "astro:before-preparation",
	nt = "astro:after-preparation",
	ot = "astro:before-swap",
	rt = "astro:after-swap",
	it = (t) => document.dispatchEvent(new Event(t));
class C extends Event {
	from;
	to;
	direction;
	navigationType;
	sourceElement;
	info;
	newDocument;
	signal;
	constructor(e, n, o, r, a, l, i, u, d, c) {
		super(e, n),
			(this.from = o),
			(this.to = r),
			(this.direction = a),
			(this.navigationType = l),
			(this.sourceElement = i),
			(this.info = u),
			(this.newDocument = d),
			(this.signal = c),
			Object.defineProperties(this, {
				from: { enumerable: !0 },
				to: { enumerable: !0, writable: !0 },
				direction: { enumerable: !0, writable: !0 },
				navigationType: { enumerable: !0 },
				sourceElement: { enumerable: !0 },
				info: { enumerable: !0 },
				newDocument: { enumerable: !0, writable: !0 },
				signal: { enumerable: !0 },
			});
	}
}
class st extends C {
	formData;
	loader;
	constructor(e, n, o, r, a, l, i, u, d, c) {
		super(et, { cancelable: !0 }, e, n, o, r, a, l, i, u),
			(this.formData = d),
			(this.loader = c.bind(this, this)),
			Object.defineProperties(this, {
				formData: { enumerable: !0 },
				loader: { enumerable: !0, writable: !0 },
			});
	}
}
class at extends C {
	direction;
	viewTransition;
	swap;
	constructor(e, n) {
		super(
			ot,
			void 0,
			e.from,
			e.to,
			e.direction,
			e.navigationType,
			e.sourceElement,
			e.info,
			e.newDocument,
			e.signal,
		),
			(this.direction = e.direction),
			(this.viewTransition = n),
			(this.swap = () => tt(this.newDocument)),
			Object.defineProperties(this, {
				direction: { enumerable: !0 },
				viewTransition: { enumerable: !0 },
				swap: { enumerable: !0, writable: !0 },
			});
	}
}
async function ct(t, e, n, o, r, a, l, i, u) {
	const d = new st(t, e, n, o, r, a, window.document, l, i, u);
	return (
		document.dispatchEvent(d) &&
			(await d.loader(),
			d.defaultPrevented ||
				(it(nt),
				d.navigationType !== "traverse" && R({ scrollX, scrollY }))),
		d
	);
}
function lt(t, e) {
	const n = new at(t, e);
	return document.dispatchEvent(n), n.swap(), n;
}
const ut = history.pushState.bind(history),
	T = history.replaceState.bind(history),
	R = (t) => {
		history.state &&
			((history.scrollRestoration = "manual"),
			T({ ...history.state, ...t }, ""));
	},
	L = !!document.startViewTransition,
	P = () =>
		!!document.querySelector('[name="astro-view-transitions-enabled"]'),
	H = (t, e) => t.pathname === e.pathname && t.search === e.search;
let f, p, E;
const X = (t) => document.dispatchEvent(new Event(t)),
	$ = () => X("astro:page-load"),
	dt = () => {
		let t = document.createElement("div");
		t.setAttribute("aria-live", "assertive"),
			t.setAttribute("aria-atomic", "true"),
			(t.className = "astro-route-announcer"),
			document.body.append(t),
			setTimeout(() => {
				let e =
					document.title ||
					document.querySelector("h1")?.textContent ||
					location.pathname;
				t.textContent = e;
			}, 60);
	},
	I = "data-astro-transition-persist",
	k = "data-astro-transition",
	S = "data-astro-transition-fallback";
let x,
	g = 0;
history.state
	? ((g = history.state.index),
		scrollTo({ left: history.state.scrollX, top: history.state.scrollY }))
	: P() &&
		(T({ index: g, scrollX, scrollY }, ""),
		(history.scrollRestoration = "manual"));
async function ft(t, e) {
	try {
		const n = await fetch(t, e),
			r = (n.headers.get("content-type") ?? "").split(";", 1)[0].trim();
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
function Y() {
	const t = document.querySelector(
		'[name="astro-view-transitions-fallback"]',
	);
	return t ? t.getAttribute("content") : "animate";
}
function mt() {
	let t = Promise.resolve();
	for (const e of Array.from(document.scripts)) {
		if (e.dataset.astroExec === "") continue;
		const n = e.getAttribute("type");
		if (n && n !== "module" && n !== "text/javascript") continue;
		const o = document.createElement("script");
		o.innerHTML = e.innerHTML;
		for (const r of e.attributes) {
			if (r.name === "src") {
				const a = new Promise((l) => {
					o.onload = o.onerror = l;
				});
				t = t.then(() => a);
			}
			o.setAttribute(r.name, r.value);
		}
		(o.dataset.astroExec = ""), e.replaceWith(o);
	}
	return t;
}
const q = (t, e, n, o, r) => {
	const a = H(e, t),
		l = document.title;
	document.title = o;
	let i = !1;
	if (t.href !== location.href && !r)
		if (n.history === "replace") {
			const u = history.state;
			T(
				{
					...n.state,
					index: u.index,
					scrollX: u.scrollX,
					scrollY: u.scrollY,
				},
				"",
				t.href,
			);
		} else
			ut({ ...n.state, index: ++g, scrollX: 0, scrollY: 0 }, "", t.href);
	if (
		((document.title = l),
		(E = t),
		a || (scrollTo({ left: 0, top: 0, behavior: "instant" }), (i = !0)),
		r)
	)
		scrollTo(r.scrollX, r.scrollY);
	else {
		if (t.hash) {
			history.scrollRestoration = "auto";
			const u = history.state;
			(location.href = t.href),
				history.state ||
					(T(u, ""),
					a && window.dispatchEvent(new PopStateEvent("popstate")));
		} else i || scrollTo({ left: 0, top: 0, behavior: "instant" });
		history.scrollRestoration = "manual";
	}
};
function ht(t) {
	const e = [];
	for (const n of t.querySelectorAll("head link[rel=stylesheet]"))
		if (
			!document.querySelector(
				`[${I}="${n.getAttribute(I)}"], link[rel=stylesheet][href="${n.getAttribute("href")}"]`,
			)
		) {
			const o = document.createElement("link");
			o.setAttribute("rel", "preload"),
				o.setAttribute("as", "style"),
				o.setAttribute("href", n.getAttribute("href")),
				e.push(
					new Promise((r) => {
						["load", "error"].forEach((a) =>
							o.addEventListener(a, r),
						),
							document.head.append(o);
					}),
				);
		}
	return e;
}
async function O(t, e, n, o, r) {
	async function a(u) {
		function d(w) {
			const h = w.effect;
			return !h || !(h instanceof KeyframeEffect) || !h.target
				? !1
				: window.getComputedStyle(h.target, h.pseudoElement)
						.animationIterationCount === "infinite";
		}
		const c = document.getAnimations();
		document.documentElement.setAttribute(S, u);
		const m = document
			.getAnimations()
			.filter((w) => !c.includes(w) && !d(w));
		return Promise.allSettled(m.map((w) => w.finished));
	}
	if (r === "animate" && !n.transitionSkipped && !t.signal.aborted)
		try {
			await a("old");
		} catch {}
	const l = document.title,
		i = lt(t, n.viewTransition);
	q(i.to, i.from, e, l, o),
		X(rt),
		r === "animate" &&
			(!n.transitionSkipped && !i.signal.aborted
				? a("new").finally(() => n.viewTransitionFinished())
				: n.viewTransitionFinished());
}
function wt() {
	return f?.controller.abort(), (f = { controller: new AbortController() });
}
async function V(t, e, n, o, r) {
	const a = wt();
	if (!P() || location.origin !== n.origin) {
		a === f && (f = void 0), (location.href = n.href);
		return;
	}
	const l = r ? "traverse" : o.history === "replace" ? "replace" : "push";
	if (
		(l !== "traverse" && R({ scrollX, scrollY }),
		H(e, n) && ((t !== "back" && n.hash) || (t === "back" && e.hash)))
	) {
		q(n, e, o, document.title, r), a === f && (f = void 0);
		return;
	}
	const i = await ct(
		e,
		n,
		t,
		l,
		o.sourceElement,
		o.info,
		a.controller.signal,
		o.formData,
		u,
	);
	if (i.defaultPrevented || i.signal.aborted) {
		a === f && (f = void 0), i.signal.aborted || (location.href = n.href);
		return;
	}
	async function u(s) {
		const m = s.to.href,
			w = { signal: s.signal };
		if (s.formData) {
			w.method = "POST";
			const y =
				s.sourceElement instanceof HTMLFormElement
					? s.sourceElement
					: s.sourceElement instanceof HTMLElement &&
							"form" in s.sourceElement
						? s.sourceElement.form
						: s.sourceElement?.closest("form");
			w.body =
				y?.attributes.getNamedItem("enctype")?.value ===
				"application/x-www-form-urlencoded"
					? new URLSearchParams(s.formData)
					: s.formData;
		}
		const h = await ft(m, w);
		if (h === null) {
			s.preventDefault();
			return;
		}
		if (h.redirected) {
			const y = new URL(h.redirected);
			if (y.origin !== s.to.origin) {
				s.preventDefault();
				return;
			}
			s.to = y;
		}
		if (
			((x ??= new DOMParser()),
			(s.newDocument = x.parseFromString(h.html, h.mediaType)),
			s.newDocument
				.querySelectorAll("noscript")
				.forEach((y) => y.remove()),
			!s.newDocument.querySelector(
				'[name="astro-view-transitions-enabled"]',
			) && !s.formData)
		) {
			s.preventDefault();
			return;
		}
		const A = ht(s.newDocument);
		A.length && !s.signal.aborted && (await Promise.all(A));
	}
	async function d() {
		if (p && p.viewTransition) {
			try {
				p.viewTransition.skipTransition();
			} catch {}
			try {
				await p.viewTransition.updateCallbackDone;
			} catch {}
		}
		return (p = { transitionSkipped: !1 });
	}
	const c = await d();
	if (i.signal.aborted) {
		a === f && (f = void 0);
		return;
	}
	if ((document.documentElement.setAttribute(k, i.direction), L))
		c.viewTransition = document.startViewTransition(
			async () => await O(i, o, c, r),
		);
	else {
		const s = (async () => {
			await Promise.resolve(), await O(i, o, c, r, Y());
		})();
		c.viewTransition = {
			updateCallbackDone: s,
			ready: s,
			finished: new Promise((m) => (c.viewTransitionFinished = m)),
			skipTransition: () => {
				(c.transitionSkipped = !0),
					document.documentElement.removeAttribute(S);
			},
		};
	}
	c.viewTransition.updateCallbackDone.finally(async () => {
		await mt(), $(), dt();
	}),
		c.viewTransition.finished.finally(() => {
			(c.viewTransition = void 0),
				c === p && (p = void 0),
				a === f && (f = void 0),
				document.documentElement.removeAttribute(k),
				document.documentElement.removeAttribute(S);
		});
	try {
		await c.viewTransition.updateCallbackDone;
	} catch (s) {
		const m = s;
		console.log("[astro]", m.name, m.message, m.stack);
	}
}
async function N(t, e) {
	await V("forward", E, new URL(t, location.href), e ?? {});
}
function pt(t) {
	if (!P() && t.state) {
		location.reload();
		return;
	}
	if (t.state === null) return;
	const e = history.state,
		n = e.index,
		o = n > g ? "forward" : "back";
	(g = n), V(o, E, new URL(location.href), {}, e);
}
const F = () => {
	history.state &&
		(scrollX !== history.state.scrollX ||
			scrollY !== history.state.scrollY) &&
		R({ scrollX, scrollY });
};
{
	if (L || Y() !== "none")
		if (
			((E = new URL(location.href)),
			addEventListener("popstate", pt),
			addEventListener("load", $),
			"onscrollend" in window)
		)
			addEventListener("scrollend", F);
		else {
			let t, e, n, o;
			const r = () => {
				if (o !== history.state?.index) {
					clearInterval(t), (t = void 0);
					return;
				}
				if (e === scrollY && n === scrollX) {
					clearInterval(t), (t = void 0), F();
					return;
				} else (e = scrollY), (n = scrollX);
			};
			addEventListener(
				"scroll",
				() => {
					t === void 0 &&
						((o = history.state.index),
						(e = scrollY),
						(n = scrollX),
						(t = window.setInterval(r, 50)));
				},
				{ passive: !0 },
			);
		}
	for (const t of document.scripts) t.dataset.astroExec = "";
}
function bt() {
	const t = document.querySelector(
		'[name="astro-view-transitions-fallback"]',
	);
	return t ? t.getAttribute("content") : "animate";
}
function M(t) {
	return t.dataset.astroReload !== void 0;
}
(L || bt() !== "none") &&
	(document.addEventListener("click", (t) => {
		let e = t.target;
		if (
			(t.composed && (e = t.composedPath()[0]),
			e instanceof Element && (e = e.closest("a, area")),
			!(e instanceof HTMLAnchorElement) &&
				!(e instanceof SVGAElement) &&
				!(e instanceof HTMLAreaElement))
		)
			return;
		const n = e instanceof HTMLElement ? e.target : e.target.baseVal,
			o = e instanceof HTMLElement ? e.href : e.href.baseVal,
			r = new URL(o, location.href).origin;
		M(e) ||
			e.hasAttribute("download") ||
			!e.href ||
			(n && n !== "_self") ||
			r !== location.origin ||
			t.button !== 0 ||
			t.metaKey ||
			t.ctrlKey ||
			t.altKey ||
			t.shiftKey ||
			t.defaultPrevented ||
			(t.preventDefault(),
			N(o, {
				history:
					e.dataset.astroHistory === "replace" ? "replace" : "auto",
				sourceElement: e,
			}));
	}),
	document.addEventListener("submit", (t) => {
		let e = t.target;
		if (e.tagName !== "FORM" || t.defaultPrevented || M(e)) return;
		const n = e,
			o = t.submitter,
			r = new FormData(n, o),
			a =
				typeof n.action == "string"
					? n.action
					: n.getAttribute("action"),
			l =
				typeof n.method == "string"
					? n.method
					: n.getAttribute("method");
		let i = o?.getAttribute("formaction") ?? a ?? location.pathname;
		const u = o?.getAttribute("formmethod") ?? l ?? "get";
		if (
			u === "dialog" ||
			location.origin !== new URL(i, location.href).origin
		)
			return;
		const d = { sourceElement: o ?? n };
		if (u === "get") {
			const c = new URLSearchParams(r),
				s = new URL(i);
			(s.search = c.toString()), (i = s.toString());
		} else d.formData = r;
		t.preventDefault(), N(i, d);
	}),
	U({ prefetchAll: !0 }));
//# sourceMappingURL=hoisted.Cb4F_YLZ.js.map
