import { e as P } from "./index.modern.kBZUKyzZ.js";
import { getCurrentUrl as k, Location as w } from "./Swup.modern.ysAiPt2N.js";
function v() {
	return (
		(v = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s)
							Object.prototype.hasOwnProperty.call(s, o) &&
								(e[o] = s[o]);
					}
					return e;
				}),
		v.apply(this, arguments)
	);
}
function L() {
	return window.matchMedia("(hover: hover)").matches;
}
const y = window.requestIdleCallback || ((e) => setTimeout(e, 1)),
	O = ["preloadVisibleLinks"];
class T extends P {
	constructor(e = {}) {
		var t;
		super(),
			(t = this),
			(this.name = "SwupPreloadPlugin"),
			(this.requires = { swup: ">=4" }),
			(this.defaults = {
				throttle: 5,
				preloadInitialPage: !0,
				preloadHoveredLinks: !0,
				preloadVisibleLinks: {
					enabled: !1,
					threshold: 0.2,
					delay: 500,
					containers: ["body"],
					ignore: () => !1,
				},
			}),
			(this.options = void 0),
			(this.queue = void 0),
			(this.preloadObserver = void 0),
			(this.preloadPromises = new Map()),
			(this.mouseEnterDelegate = void 0),
			(this.touchStartDelegate = void 0),
			(this.focusDelegate = void 0),
			(this.onPageLoad = (e, t, s) => {
				const { url: o } = e.to;
				return o && this.preloadPromises.has(o)
					? this.preloadPromises.get(o)
					: s(e, t);
			}),
			(this.onMouseEnter = async function (e) {
				if (e.target !== e.delegateTarget || !L()) return;
				const s = e.delegateTarget;
				s instanceof HTMLAnchorElement &&
					(t.swup.hooks.callSync("link:hover", { el: s, event: e }),
					t.preload(s, { priority: !0 }));
			}),
			(this.onTouchStart = (e) => {
				if (L()) return;
				const t = e.delegateTarget;
				t instanceof HTMLAnchorElement &&
					this.preload(t, { priority: !0 });
			}),
			(this.onFocus = (e) => {
				const t = e.delegateTarget;
				t instanceof HTMLAnchorElement &&
					this.preload(t, { priority: !0 });
			});
		const { preloadVisibleLinks: s } = e,
			o = (function (e, t) {
				if (null == e) return {};
				var s,
					o,
					r = {},
					i = Object.keys(e);
				for (o = 0; o < i.length; o++)
					t.indexOf((s = i[o])) >= 0 || (r[s] = e[s]);
				return r;
			})(e, O);
		(this.options = v({}, this.defaults, o)),
			"object" == typeof s
				? (this.options.preloadVisibleLinks = v(
						{},
						this.options.preloadVisibleLinks,
						{ enabled: !0 },
						s
					))
				: (this.options.preloadVisibleLinks.enabled = !!s),
			(this.preload = this.preload.bind(this)),
			(this.queue = (function (e = 1) {
				const t = [],
					s = [];
				let o = 0,
					r = 0;
				function i() {
					r < e &&
						o > 0 &&
						((s.shift() || t.shift() || (() => {}))(), o--, r++);
				}
				return {
					add: function (e, r = !1) {
						if (e.__queued) {
							if (!r) return;
							{
								const s = t.indexOf(e);
								if (s >= 0) {
									const e = t.splice(s, 1);
									o -= e.length;
								}
							}
						}
						(e.__queued = !0),
							(r ? s : t).push(e),
							o++,
							o <= 1 && i();
					},
					next: function () {
						r--, i();
					},
				};
			})(this.options.throttle));
	}
	mount() {
		const e = this.swup;
		e.options.cache
			? (e.hooks.create("page:preload"),
				e.hooks.create("link:hover"),
				(e.preload = this.preload),
				(e.preloadLinks = this.preloadLinks),
				this.replace("page:load", this.onPageLoad),
				this.preloadLinks(),
				this.on("page:view", () => this.preloadLinks()),
				this.options.preloadVisibleLinks.enabled &&
					(this.preloadVisibleLinks(),
					this.on("page:view", () => this.preloadVisibleLinks())),
				this.options.preloadHoveredLinks &&
					this.preloadLinksOnAttention(),
				this.options.preloadInitialPage && this.preload(k()))
			: console.warn(
					"SwupPreloadPlugin: swup cache needs to be enabled for preloading"
				);
	}
	unmount() {
		var e, t, s;
		(this.swup.preload = void 0),
			(this.swup.preloadLinks = void 0),
			this.preloadPromises.clear(),
			null == (e = this.mouseEnterDelegate) || e.destroy(),
			null == (t = this.touchStartDelegate) || t.destroy(),
			null == (s = this.focusDelegate) || s.destroy(),
			this.stopPreloadingVisibleLinks();
	}
	async preload(e, t = {}) {
		var s;
		let o, r;
		const i = null != (s = t.priority) && s;
		if (Array.isArray(e)) return Promise.all(e.map((e) => this.preload(e)));
		if (e instanceof HTMLAnchorElement)
			(r = e), ({ url: o } = w.fromElement(e));
		else {
			if ("string" != typeof e) return;
			o = e;
		}
		if (this.preloadPromises.has(o)) return this.preloadPromises.get(o);
		if (!this.shouldPreload(o, { el: r })) return;
		const n = new Promise((e) => {
			this.queue.add(() => {
				this.performPreload(o)
					.catch(() => {})
					.then((t) => e(t))
					.finally(() => {
						this.queue.next(), this.preloadPromises.delete(o);
					});
			}, i);
		});
		return this.preloadPromises.set(o, n), n;
	}
	preloadLinks() {
		y(() => {
			Array.from(
				document.querySelectorAll(
					"a[data-swup-preload], [data-swup-preload-all] a"
				)
			).forEach((e) => this.preload(e));
		});
	}
	preloadLinksOnAttention() {
		const { swup: e } = this,
			{ linkSelector: t } = e.options,
			s = { passive: !0, capture: !0 };
		(this.mouseEnterDelegate = e.delegateEvent(
			t,
			"mouseenter",
			this.onMouseEnter,
			s
		)),
			(this.touchStartDelegate = e.delegateEvent(
				t,
				"touchstart",
				this.onTouchStart,
				s
			)),
			(this.focusDelegate = e.delegateEvent(t, "focus", this.onFocus, s));
	}
	preloadVisibleLinks() {
		if (this.preloadObserver) return void this.preloadObserver.update();
		const {
			threshold: e,
			delay: t,
			containers: s,
		} = this.options.preloadVisibleLinks;
		(this.preloadObserver = (function ({
			threshold: e,
			delay: t,
			containers: s,
			callback: o,
			filter: r,
		}) {
			const i = new Map(),
				n = new IntersectionObserver(
					(e) => {
						e.forEach((e) => {
							e.isIntersecting ? a(e.target) : l(e.target);
						});
					},
					{ threshold: e }
				),
				a = (e) => {
					var s;
					const r = null != (s = i.get(e.href)) ? s : new Set();
					i.set(e.href, r),
						r.add(e),
						setTimeout(() => {
							const t = i.get(e.href);
							null != t &&
								t.size &&
								(o(e), n.unobserve(e), t.delete(e));
						}, t);
				},
				l = (e) => {
					var t;
					return null == (t = i.get(e.href)) ? void 0 : t.delete(e);
				},
				h = () => {
					y(() => {
						const e = s.map((e) => `${e} a[href]`).join(", ");
						Array.from(document.querySelectorAll(e))
							.filter((e) => r(e))
							.forEach((e) => n.observe(e));
					});
				};
			return {
				start: () => h(),
				stop: () => n.disconnect(),
				update: () => (i.clear(), h()),
			};
		})({
			threshold: e,
			delay: t,
			containers: s,
			callback: (e) => this.preload(e),
			filter: (e) =>
				!this.options.preloadVisibleLinks.ignore(e) &&
				this.shouldPreload(e.href, { el: e }),
		})),
			this.preloadObserver.start();
	}
	stopPreloadingVisibleLinks() {
		this.preloadObserver && this.preloadObserver.stop();
	}
	shouldPreload(e, { el: t } = {}) {
		const { url: s, href: o } = w.fromUrl(e);
		return !(
			!(function () {
				var e;
				if (
					navigator.connection &&
					(navigator.connection.saveData ||
						(null != (e = navigator.connection.effectiveType) &&
							e.endsWith("2g")))
				)
					return !1;
				return !0;
			})() ||
			this.swup.cache.has(s) ||
			this.preloadPromises.has(s) ||
			this.swup.shouldIgnoreVisit(o, { el: t }) ||
			(t && this.swup.resolveUrl(s) === this.swup.resolveUrl(k()))
		);
	}
	async performPreload(e) {
		const t = await this.swup.fetchPage(e);
		return await this.swup.hooks.call("page:preload", { page: t }), t;
	}
}
export { T as default };
