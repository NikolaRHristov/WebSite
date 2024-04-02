function __vite__mapDeps(indexes) {
	if (!__vite__mapDeps.viteFileDeps) {
		__vite__mapDeps.viteFileDeps = [
			"_astro/index.modern.B7ehEGeJ.js",
			"_astro/index.modern.CkIAsQri.js",
			"_astro/index.modern.FjGODCox.js",
			"_astro/index.modern.Dp50zjzP.js",
			"_astro/Swup.modern.DSkug2J8.js",
			"_astro/index.modern.CZr5Eu0Z.js",
			"_astro/index.modern.aa8fLSdp.js",
		];
	}
	return indexes.map((i) => __vite__mapDeps.viteFileDeps[i]);
}
const te = "modulepreload",
	ne = function (e) {
		return "/" + e;
	},
	H = {},
	b = function (t, n, o) {
		let r = Promise.resolve();
		if (n && n.length > 0) {
			const a = document.getElementsByTagName("link"),
				l = document.querySelector("meta[property=csp-nonce]"),
				f = l?.nonce || l?.getAttribute("nonce");
			r = Promise.all(
				n.map((i) => {
					if (((i = ne(i)), i in H)) return;
					H[i] = !0;
					const d = i.endsWith(".css"),
						y = d ? '[rel="stylesheet"]' : "";
					if (!!o)
						for (let u = a.length - 1; u >= 0; u--) {
							const h = a[u];
							if (h.href === i && (!d || h.rel === "stylesheet"))
								return;
						}
					else if (document.querySelector(`link[href="${i}"]${y}`))
						return;
					const s = document.createElement("link");
					if (
						((s.rel = d ? "stylesheet" : te),
						d || ((s.as = "script"), (s.crossOrigin = "")),
						(s.href = i),
						f && s.setAttribute("nonce", f),
						document.head.appendChild(s),
						d)
					)
						return new Promise((u, h) => {
							s.addEventListener("load", u),
								s.addEventListener("error", () =>
									h(
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
			.then(() => t())
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
(await b(() => import("./index.esm.CDbocLk8.js"), [])).initializeApp({
	apiKey: "AIzaSyCiIOIiAvdRwC5n6AzX_F5WSivt9bvosTQ",
	authDomain: "nikolahristov-web.firebaseapp.com",
	projectId: "nikolahristov-web",
	storageBucket: "nikolahristov-web.appspot.com",
	messagingSenderId: "540449914377",
	appId: "1:540449914377:web:bf0a39a757e9ebcd1ec2d8",
	measurementId: "G-146FB9N18L",
});
new (await b(() => import("./Swup.modern.DSkug2J8.js"), [])).default({
	containers: ["#footer", "#main", "#header"],
	plugins: [
		new (
			await b(
				() => import("./index.modern.B7ehEGeJ.js"),
				__vite__mapDeps([0, 1]),
			)
		).default(),
		new (
			await b(
				() => import("./index.modern.FjGODCox.js"),
				__vite__mapDeps([2, 1]),
			)
		).default(),
		new (
			await b(
				() => import("./index.modern.Dp50zjzP.js"),
				__vite__mapDeps([3, 1, 4]),
			)
		).default(),
		new (
			await b(
				() => import("./index.modern.CZr5Eu0Z.js"),
				__vite__mapDeps([5, 1, 4]),
			)
		).default(),
		new (
			await b(
				() => import("./index.modern.aa8fLSdp.js"),
				__vite__mapDeps([6, 1]),
			)
		).default(),
	],
});
document.documentElement.classList.remove("no-js");
document.documentElement.classList.add("js");
const oe = "astro:before-preparation",
	re = "astro:after-preparation",
	ie = "astro:before-swap",
	se = "astro:after-swap",
	ae = (e) => document.dispatchEvent(new Event(e));
class B extends Event {
	from;
	to;
	direction;
	navigationType;
	sourceElement;
	info;
	newDocument;
	constructor(t, n, o, r, a, l, f, i, d) {
		super(t, n),
			(this.from = o),
			(this.to = r),
			(this.direction = a),
			(this.navigationType = l),
			(this.sourceElement = f),
			(this.info = i),
			(this.newDocument = d),
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
class ce extends B {
	formData;
	loader;
	constructor(t, n, o, r, a, l, f, i, d) {
		super(oe, { cancelable: !0 }, t, n, o, r, a, l, f),
			(this.formData = i),
			(this.loader = d.bind(this, this)),
			Object.defineProperties(this, {
				formData: { enumerable: !0 },
				loader: { enumerable: !0, writable: !0 },
			});
	}
}
class le extends B {
	direction;
	viewTransition;
	swap;
	constructor(t, n, o) {
		super(
			ie,
			void 0,
			t.from,
			t.to,
			t.direction,
			t.navigationType,
			t.sourceElement,
			t.info,
			t.newDocument,
		),
			(this.direction = t.direction),
			(this.viewTransition = n),
			(this.swap = o.bind(this, this)),
			Object.defineProperties(this, {
				direction: { enumerable: !0 },
				viewTransition: { enumerable: !0 },
				swap: { enumerable: !0, writable: !0 },
			});
	}
}
async function ue(e, t, n, o, r, a, l, f) {
	const i = new ce(e, t, n, o, r, a, window.document, l, f);
	return (
		document.dispatchEvent(i) &&
			(await i.loader(),
			i.defaultPrevented ||
				(ae(re),
				i.navigationType !== "traverse" && k({ scrollX, scrollY }))),
		i
	);
}
async function de(e, t, n) {
	const o = new le(e, t, n);
	return document.dispatchEvent(o), o.swap(), o;
}
const fe = history.pushState.bind(history),
	S = history.replaceState.bind(history),
	k = (e) => {
		history.state &&
			((history.scrollRestoration = "manual"),
			S({ ...history.state, ...e }, ""));
	},
	x = !!document.startViewTransition,
	O = () =>
		!!document.querySelector('[name="astro-view-transitions-enabled"]'),
	Y = (e, t) => e.pathname === t.pathname && e.search === t.search;
let R,
	g,
	_ = !1,
	q;
const U = (e) => document.dispatchEvent(new Event(e)),
	W = () => U("astro:page-load"),
	me = () => {
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
	p = "data-astro-transition-persist",
	j = "data-astro-transition",
	K = "data-astro-transition-fallback";
let M,
	A = 0;
history.state
	? ((A = history.state.index),
		scrollTo({ left: history.state.scrollX, top: history.state.scrollY }))
	: O() &&
		(S({ index: A, scrollX, scrollY }, ""),
		(history.scrollRestoration = "manual"));
async function he(e, t) {
	try {
		const n = await fetch(e, t),
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
function z() {
	const e = document.querySelector(
		'[name="astro-view-transitions-fallback"]',
	);
	return e ? e.getAttribute("content") : "animate";
}
function we() {
	let e = Promise.resolve();
	for (const t of Array.from(document.scripts)) {
		if (t.dataset.astroExec === "") continue;
		const n = t.getAttribute("type");
		if (n && n !== "module" && n !== "text/javascript") continue;
		const o = document.createElement("script");
		o.innerHTML = t.innerHTML;
		for (const r of t.attributes) {
			if (r.name === "src") {
				const a = new Promise((l) => {
					o.onload = o.onerror = l;
				});
				e = e.then(() => a);
			}
			o.setAttribute(r.name, r.value);
		}
		(o.dataset.astroExec = ""), t.replaceWith(o);
	}
	return e;
}
const G = (e, t, n, o, r) => {
	const a = Y(t, e),
		l = document.title;
	document.title = o;
	let f = !1;
	if (e.href !== location.href && !r)
		if (n.history === "replace") {
			const i = history.state;
			S(
				{
					...n.state,
					index: i.index,
					scrollX: i.scrollX,
					scrollY: i.scrollY,
				},
				"",
				e.href,
			);
		} else
			fe({ ...n.state, index: ++A, scrollX: 0, scrollY: 0 }, "", e.href);
	if (
		((document.title = l),
		(R = e),
		a || (scrollTo({ left: 0, top: 0, behavior: "instant" }), (f = !0)),
		r)
	)
		scrollTo(r.scrollX, r.scrollY);
	else {
		if (e.hash) {
			history.scrollRestoration = "auto";
			const i = history.state;
			(location.href = e.href), history.state || S(i, "");
		} else f || scrollTo({ left: 0, top: 0, behavior: "instant" });
		history.scrollRestoration = "manual";
	}
};
function pe(e) {
	const t = [];
	for (const n of e.querySelectorAll("head link[rel=stylesheet]"))
		if (
			!document.querySelector(
				`[${p}="${n.getAttribute(
					p,
				)}"], link[rel=stylesheet][href="${n.getAttribute("href")}"]`,
			)
		) {
			const o = document.createElement("link");
			o.setAttribute("rel", "preload"),
				o.setAttribute("as", "style"),
				o.setAttribute("href", n.getAttribute("href")),
				t.push(
					new Promise((r) => {
						["load", "error"].forEach((a) =>
							o.addEventListener(a, r),
						),
							document.head.append(o);
					}),
				);
		}
	return t;
}
async function C(e, t, n, o) {
	const r = (s, u) => {
			const h = s.getAttribute(p),
				v = h && u.head.querySelector(`[${p}="${h}"]`);
			if (v) return v;
			if (s.matches("link[rel=stylesheet]")) {
				const E = s.getAttribute("href");
				return u.head.querySelector(
					`link[rel=stylesheet][href="${E}"]`,
				);
			}
			return null;
		},
		a = () => {
			const s = document.activeElement;
			if (s?.closest(`[${p}]`)) {
				if (
					s instanceof HTMLInputElement ||
					s instanceof HTMLTextAreaElement
				) {
					const u = s.selectionStart,
						h = s.selectionEnd;
					return { activeElement: s, start: u, end: h };
				}
				return { activeElement: s };
			} else return { activeElement: null };
		},
		l = ({ activeElement: s, start: u, end: h }) => {
			s &&
				(s.focus(),
				(s instanceof HTMLInputElement ||
					s instanceof HTMLTextAreaElement) &&
					((s.selectionStart = u), (s.selectionEnd = h)));
		},
		f = (s) => {
			const u = s.dataset.astroTransitionPersistProps;
			return u == null || u === "false";
		},
		i = (s) => {
			const u = document.documentElement,
				h = [...u.attributes].filter(
					({ name: c }) => (
						u.removeAttribute(c), c.startsWith("data-astro-")
					),
				);
			[...s.newDocument.documentElement.attributes, ...h].forEach(
				({ name: c, value: m }) => u.setAttribute(c, m),
			);
			for (const c of document.scripts)
				for (const m of s.newDocument.scripts)
					if (
						!m.hasAttribute("data-astro-rerun") &&
						((!c.src && c.textContent === m.textContent) ||
							(c.src && c.type === m.type && c.src === m.src))
					) {
						m.dataset.astroExec = "";
						break;
					}
			for (const c of Array.from(document.head.children)) {
				const m = r(c, s.newDocument);
				m ? m.remove() : c.remove();
			}
			document.head.append(...s.newDocument.head.children);
			const v = document.body,
				E = a();
			document.body.replaceWith(s.newDocument.body);
			for (const c of v.querySelectorAll(`[${p}]`)) {
				const m = c.getAttribute(p),
					T = document.querySelector(`[${p}="${m}"]`);
				T &&
					(T.replaceWith(c),
					T.localName === "astro-island" &&
						f(c) &&
						(c.setAttribute("ssr", ""),
						c.setAttribute("props", T.getAttribute("props"))));
			}
			l(E);
		};
	async function d(s) {
		function u(c) {
			const m = c.effect;
			return !m || !(m instanceof KeyframeEffect) || !m.target
				? !1
				: window.getComputedStyle(m.target, m.pseudoElement)
						.animationIterationCount === "infinite";
		}
		const h = document.getAnimations();
		document.documentElement.setAttribute(K, s);
		const E = document
			.getAnimations()
			.filter((c) => !h.includes(c) && !u(c));
		return Promise.all(E.map((c) => c.finished));
	}
	if (!_)
		document.documentElement.setAttribute(j, e.direction),
			o === "animate" && (await d("old"));
	else throw new DOMException("Transition was skipped");
	const y = document.title,
		w = await de(e, g, i);
	G(w.to, w.from, t, y, n),
		U(se),
		o === "animate" && !_ && d("new").then(() => q());
}
async function Q(e, t, n, o, r) {
	if (!O() || location.origin !== n.origin) {
		location.href = n.href;
		return;
	}
	const a = r ? "traverse" : o.history === "replace" ? "replace" : "push";
	if (
		(a !== "traverse" && k({ scrollX, scrollY }),
		Y(t, n) && ((e !== "back" && n.hash) || (e === "back" && t.hash)))
	) {
		G(n, t, o, document.title, r);
		return;
	}
	const l = await ue(t, n, e, a, o.sourceElement, o.info, o.formData, f);
	if (l.defaultPrevented) {
		location.href = n.href;
		return;
	}
	async function f(i) {
		const d = i.to.href,
			y = {};
		if (i.formData) {
			y.method = "POST";
			const u =
				i.sourceElement instanceof HTMLFormElement
					? i.sourceElement
					: i.sourceElement instanceof HTMLElement &&
							"form" in i.sourceElement
						? i.sourceElement.form
						: i.sourceElement?.closest("form");
			y.body =
				u?.attributes.getNamedItem("enctype")?.value ===
				"application/x-www-form-urlencoded"
					? new URLSearchParams(i.formData)
					: i.formData;
		}
		const w = await he(d, y);
		if (w === null) {
			i.preventDefault();
			return;
		}
		if (
			(w.redirected && (i.to = new URL(w.redirected)),
			(M ??= new DOMParser()),
			(i.newDocument = M.parseFromString(w.html, w.mediaType)),
			i.newDocument
				.querySelectorAll("noscript")
				.forEach((u) => u.remove()),
			!i.newDocument.querySelector(
				'[name="astro-view-transitions-enabled"]',
			) && !i.formData)
		) {
			i.preventDefault();
			return;
		}
		const s = pe(i.newDocument);
		s.length && (await Promise.all(s));
	}
	if (((_ = !1), x))
		g = document.startViewTransition(async () => await C(l, o, r));
	else {
		const i = (async () => {
			await new Promise((d) => setTimeout(d)), await C(l, o, r, z());
		})();
		g = {
			updateCallbackDone: i,
			ready: i,
			finished: new Promise((d) => (q = d)),
			skipTransition: () => {
				_ = !0;
			},
		};
	}
	g.ready.then(async () => {
		await we(), W(), me();
	}),
		g.finished.then(() => {
			document.documentElement.removeAttribute(j),
				document.documentElement.removeAttribute(K);
		}),
		await g.ready;
}
async function F(e, t) {
	await Q("forward", R, new URL(e, location.href), t ?? {});
}
function ye(e) {
	if (!O() && e.state) {
		location.reload();
		return;
	}
	if (e.state === null) return;
	const t = history.state,
		n = t.index,
		o = n > A ? "forward" : "back";
	(A = n), Q(o, R, new URL(location.href), {}, t);
}
const $ = () => {
	history.state &&
		(scrollX !== history.state.scrollX ||
			scrollY !== history.state.scrollY) &&
		k({ scrollX, scrollY });
};
{
	if (x || z() !== "none")
		if (
			((R = new URL(location.href)),
			addEventListener("popstate", ye),
			addEventListener("load", W),
			"onscrollend" in window)
		)
			addEventListener("scrollend", $);
		else {
			let e, t, n, o;
			const r = () => {
				if (o !== history.state?.index) {
					clearInterval(e), (e = void 0);
					return;
				}
				if (t === scrollY && n === scrollX) {
					clearInterval(e), (e = void 0), $();
					return;
				} else (t = scrollY), (n = scrollX);
			};
			addEventListener(
				"scroll",
				() => {
					e === void 0 &&
						((o = history.state.index),
						(t = scrollY),
						(n = scrollX),
						(e = window.setInterval(r, 50)));
				},
				{ passive: !0 },
			);
		}
	for (const e of document.scripts) e.dataset.astroExec = "";
}
const J = new Set(),
	P = new WeakSet();
let D,
	Z,
	V = !1;
function be(e) {
	V ||
		((V = !0),
		(D ??= e?.prefetchAll ?? !1),
		(Z ??= e?.defaultStrategy ?? "hover"),
		ge(),
		ve(),
		Ee(),
		Ae());
}
function ge() {
	for (const e of ["touchstart", "mousedown"])
		document.body.addEventListener(
			e,
			(t) => {
				L(t.target, "tap") &&
					I(t.target.href, {
						with: "fetch",
						ignoreSlowConnection: !0,
					});
			},
			{ passive: !0 },
		);
}
function ve() {
	let e;
	document.body.addEventListener(
		"focusin",
		(o) => {
			L(o.target, "hover") && t(o);
		},
		{ passive: !0 },
	),
		document.body.addEventListener("focusout", n, { passive: !0 }),
		N(() => {
			for (const o of document.getElementsByTagName("a"))
				P.has(o) ||
					(L(o, "hover") &&
						(P.add(o),
						o.addEventListener("mouseenter", t, { passive: !0 }),
						o.addEventListener("mouseleave", n, { passive: !0 })));
		});
	function t(o) {
		const r = o.target.href;
		e && clearTimeout(e),
			(e = setTimeout(() => {
				I(r, { with: "fetch" });
			}, 80));
	}
	function n() {
		e && (clearTimeout(e), (e = 0));
	}
}
function Ee() {
	let e;
	N(() => {
		for (const t of document.getElementsByTagName("a"))
			P.has(t) ||
				(L(t, "viewport") && (P.add(t), (e ??= Te()), e.observe(t)));
	});
}
function Te() {
	const e = new WeakMap();
	return new IntersectionObserver((t, n) => {
		for (const o of t) {
			const r = o.target,
				a = e.get(r);
			o.isIntersecting
				? (a && clearTimeout(a),
					e.set(
						r,
						setTimeout(() => {
							n.unobserve(r),
								e.delete(r),
								I(r.href, { with: "link" });
						}, 300),
					))
				: a && (clearTimeout(a), e.delete(r));
		}
	});
}
function Ae() {
	N(() => {
		for (const e of document.getElementsByTagName("a"))
			L(e, "load") && I(e.href, { with: "link" });
	});
}
function I(e, t) {
	const n = t?.ignoreSlowConnection ?? !1;
	if (!Le(e, n)) return;
	if ((J.add(e), (t?.with ?? "link") === "link")) {
		const r = document.createElement("link");
		(r.rel = "prefetch"),
			r.setAttribute("href", e),
			document.head.append(r);
	} else
		fetch(e).catch((r) => {
			console.log(`[astro] Failed to prefetch ${e}`), console.error(r);
		});
}
function Le(e, t) {
	if (!navigator.onLine || (!t && ee())) return !1;
	try {
		const n = new URL(e, location.href);
		return (
			location.origin === n.origin &&
			(location.pathname !== n.pathname ||
				location.search !== n.search) &&
			!J.has(e)
		);
	} catch {}
	return !1;
}
function L(e, t) {
	if (e?.tagName !== "A") return !1;
	const n = e.dataset.astroPrefetch;
	return n === "false"
		? !1
		: t === "tap" && (n != null || D) && ee()
			? !0
			: (n == null && D) || n === ""
				? t === Z
				: n === t;
}
function ee() {
	if ("connection" in navigator) {
		const e = navigator.connection;
		return e.saveData || /2g/.test(e.effectiveType);
	}
	return !1;
}
function N(e) {
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
function Se() {
	const e = document.querySelector(
		'[name="astro-view-transitions-fallback"]',
	);
	return e ? e.getAttribute("content") : "animate";
}
function X(e) {
	return e.dataset.astroReload !== void 0;
}
(x || Se() !== "none") &&
	(document.addEventListener("click", (e) => {
		let t = e.target;
		if (
			(e.composed && (t = e.composedPath()[0]),
			t instanceof Element && (t = t.closest("a, area")),
			!(t instanceof HTMLAnchorElement) &&
				!(t instanceof SVGAElement) &&
				!(t instanceof HTMLAreaElement))
		)
			return;
		const n = t instanceof HTMLElement ? t.target : t.target.baseVal,
			o = t instanceof HTMLElement ? t.href : t.href.baseVal,
			r = new URL(o, location.href).origin;
		X(t) ||
			t.hasAttribute("download") ||
			!t.href ||
			(n && n !== "_self") ||
			r !== location.origin ||
			e.button !== 0 ||
			e.metaKey ||
			e.ctrlKey ||
			e.altKey ||
			e.shiftKey ||
			e.defaultPrevented ||
			(e.preventDefault(),
			F(o, {
				history:
					t.dataset.astroHistory === "replace" ? "replace" : "auto",
				sourceElement: t,
			}));
	}),
	document.addEventListener("submit", (e) => {
		let t = e.target;
		if (t.tagName !== "FORM" || e.defaultPrevented || X(t)) return;
		const n = t,
			o = e.submitter,
			r = new FormData(n, o);
		let a = o?.getAttribute("formaction") ?? n.action ?? location.pathname;
		const l = o?.getAttribute("formmethod") ?? n.method;
		if (
			l === "dialog" ||
			location.origin !== new URL(a, location.href).origin
		)
			return;
		const f = { sourceElement: o ?? n };
		if (l === "get") {
			const i = new URLSearchParams(r),
				d = new URL(a);
			(d.search = i.toString()), (a = d.toString());
		} else f.formData = r;
		e.preventDefault(), F(a, f);
	}),
	be({ prefetchAll: !0 }));
//# sourceMappingURL=hoisted.CiRUXaub.js.map
