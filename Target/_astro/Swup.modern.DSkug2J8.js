const M = new WeakMap();
function D(e, t, i, n) {
	if (!e && !M.has(t)) return !1;
	const r = M.get(t) ?? new WeakMap();
	M.set(t, r);
	const s = r.get(i) ?? new Set();
	r.set(i, s);
	const o = s.has(n);
	return e ? s.add(n) : s.delete(n), o && e;
}
function J(e, t) {
	let i = e.target;
	if (
		(i instanceof Text && (i = i.parentElement),
		i instanceof Element && e.currentTarget instanceof Element)
	) {
		const n = i.closest(t);
		if (n && e.currentTarget.contains(n)) return n;
	}
}
function X(e, t, i, n = {}) {
	const { signal: r, base: s = document } = n;
	if (r?.aborted) return;
	const { once: o, ...a } = n,
		c = s instanceof Document ? s.documentElement : s,
		h = !!(typeof n == "object" ? n.capture : n),
		l = (f) => {
			const g = J(f, e);
			if (g) {
				const m = Object.assign(f, { delegateTarget: g });
				i.call(c, m),
					o && (c.removeEventListener(t, l, a), D(!1, c, i, u));
			}
		},
		u = JSON.stringify({ selector: e, type: t, capture: h });
	D(!0, c, i, u) || c.addEventListener(t, l, a),
		r?.addEventListener("abort", () => {
			D(!1, c, i, u);
		});
}
function Q(e) {
	for (var t = [], i = 0; i < e.length; ) {
		var n = e[i];
		if (n === "*" || n === "+" || n === "?") {
			t.push({ type: "MODIFIER", index: i, value: e[i++] });
			continue;
		}
		if (n === "\\") {
			t.push({ type: "ESCAPED_CHAR", index: i++, value: e[i++] });
			continue;
		}
		if (n === "{") {
			t.push({ type: "OPEN", index: i, value: e[i++] });
			continue;
		}
		if (n === "}") {
			t.push({ type: "CLOSE", index: i, value: e[i++] });
			continue;
		}
		if (n === ":") {
			for (var r = "", s = i + 1; s < e.length; ) {
				var o = e.charCodeAt(s);
				if (
					(o >= 48 && o <= 57) ||
					(o >= 65 && o <= 90) ||
					(o >= 97 && o <= 122) ||
					o === 95
				) {
					r += e[s++];
					continue;
				}
				break;
			}
			if (!r) throw new TypeError("Missing parameter name at ".concat(i));
			t.push({ type: "NAME", index: i, value: r }), (i = s);
			continue;
		}
		if (n === "(") {
			var a = 1,
				c = "",
				s = i + 1;
			if (e[s] === "?")
				throw new TypeError(
					'Pattern cannot start with "?" at '.concat(s),
				);
			for (; s < e.length; ) {
				if (e[s] === "\\") {
					c += e[s++] + e[s++];
					continue;
				}
				if (e[s] === ")") {
					if ((a--, a === 0)) {
						s++;
						break;
					}
				} else if (e[s] === "(" && (a++, e[s + 1] !== "?"))
					throw new TypeError(
						"Capturing groups are not allowed at ".concat(s),
					);
				c += e[s++];
			}
			if (a) throw new TypeError("Unbalanced pattern at ".concat(i));
			if (!c) throw new TypeError("Missing pattern at ".concat(i));
			t.push({ type: "PATTERN", index: i, value: c }), (i = s);
			continue;
		}
		t.push({ type: "CHAR", index: i, value: e[i++] });
	}
	return t.push({ type: "END", index: i, value: "" }), t;
}
function Y(e, t) {
	t === void 0 && (t = {});
	for (
		var i = Q(e),
			n = t.prefixes,
			r = n === void 0 ? "./" : n,
			s = "[^".concat(A(t.delimiter || "/#?"), "]+?"),
			o = [],
			a = 0,
			c = 0,
			h = "",
			l = function (E) {
				if (c < i.length && i[c].type === E) return i[c++].value;
			},
			u = function (E) {
				var x = l(E);
				if (x !== void 0) return x;
				var C = i[c],
					N = C.type,
					I = C.index;
				throw new TypeError(
					"Unexpected "
						.concat(N, " at ")
						.concat(I, ", expected ")
						.concat(E),
				);
			},
			d = function () {
				for (var E = "", x; (x = l("CHAR") || l("ESCAPED_CHAR")); )
					E += x;
				return E;
			};
		c < i.length;
	) {
		var f = l("CHAR"),
			g = l("NAME"),
			m = l("PATTERN");
		if (g || m) {
			var v = f || "";
			r.indexOf(v) === -1 && ((h += v), (v = "")),
				h && (o.push(h), (h = "")),
				o.push({
					name: g || a++,
					prefix: v,
					suffix: "",
					pattern: m || s,
					modifier: l("MODIFIER") || "",
				});
			continue;
		}
		var w = f || l("ESCAPED_CHAR");
		if (w) {
			h += w;
			continue;
		}
		h && (o.push(h), (h = ""));
		var b = l("OPEN");
		if (b) {
			var v = d(),
				R = l("NAME") || "",
				p = l("PATTERN") || "",
				k = d();
			u("CLOSE"),
				o.push({
					name: R || (p ? a++ : ""),
					pattern: R && !p ? s : p,
					prefix: v,
					suffix: k,
					modifier: l("MODIFIER") || "",
				});
			continue;
		}
		u("END");
	}
	return o;
}
function Z(e, t) {
	var i = [],
		n = B(e, i, t);
	return tt(n, i, t);
}
function tt(e, t, i) {
	i === void 0 && (i = {});
	var n = i.decode,
		r =
			n === void 0
				? function (s) {
						return s;
					}
				: n;
	return function (s) {
		var o = e.exec(s);
		if (!o) return !1;
		for (
			var a = o[0],
				c = o.index,
				h = Object.create(null),
				l = function (d) {
					if (o[d] === void 0) return "continue";
					var f = t[d - 1];
					f.modifier === "*" || f.modifier === "+"
						? (h[f.name] = o[d]
								.split(f.prefix + f.suffix)
								.map(function (g) {
									return r(g, f);
								}))
						: (h[f.name] = r(o[d], f));
				},
				u = 1;
			u < o.length;
			u++
		)
			l(u);
		return { path: a, index: c, params: h };
	};
}
function A(e) {
	return e.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
function j(e) {
	return e && e.sensitive ? "" : "i";
}
function et(e, t) {
	if (!t) return e;
	for (var i = /\((?:\?<(.*?)>)?(?!\?)/g, n = 0, r = i.exec(e.source); r; )
		t.push({
			name: r[1] || n++,
			prefix: "",
			suffix: "",
			modifier: "",
			pattern: "",
		}),
			(r = i.exec(e.source));
	return e;
}
function it(e, t, i) {
	var n = e.map(function (r) {
		return B(r, t, i).source;
	});
	return new RegExp("(?:".concat(n.join("|"), ")"), j(i));
}
function nt(e, t, i) {
	return st(Y(e, i), t, i);
}
function st(e, t, i) {
	i === void 0 && (i = {});
	for (
		var n = i.strict,
			r = n === void 0 ? !1 : n,
			s = i.start,
			o = s === void 0 ? !0 : s,
			a = i.end,
			c = a === void 0 ? !0 : a,
			h = i.encode,
			l =
				h === void 0
					? function (I) {
							return I;
						}
					: h,
			u = i.delimiter,
			d = u === void 0 ? "/#?" : u,
			f = i.endsWith,
			g = f === void 0 ? "" : f,
			m = "[".concat(A(g), "]|$"),
			v = "[".concat(A(d), "]"),
			w = o ? "^" : "",
			b = 0,
			R = e;
		b < R.length;
		b++
	) {
		var p = R[b];
		if (typeof p == "string") w += A(l(p));
		else {
			var k = A(l(p.prefix)),
				E = A(l(p.suffix));
			if (p.pattern)
				if ((t && t.push(p), k || E))
					if (p.modifier === "+" || p.modifier === "*") {
						var x = p.modifier === "*" ? "?" : "";
						w += "(?:"
							.concat(k, "((?:")
							.concat(p.pattern, ")(?:")
							.concat(E)
							.concat(k, "(?:")
							.concat(p.pattern, "))*)")
							.concat(E, ")")
							.concat(x);
					} else
						w += "(?:"
							.concat(k, "(")
							.concat(p.pattern, ")")
							.concat(E, ")")
							.concat(p.modifier);
				else
					p.modifier === "+" || p.modifier === "*"
						? (w += "((?:"
								.concat(p.pattern, ")")
								.concat(p.modifier, ")"))
						: (w += "(".concat(p.pattern, ")").concat(p.modifier));
			else w += "(?:".concat(k).concat(E, ")").concat(p.modifier);
		}
	}
	if (c)
		r || (w += "".concat(v, "?")),
			(w += i.endsWith ? "(?=".concat(m, ")") : "$");
	else {
		var C = e[e.length - 1],
			N =
				typeof C == "string"
					? v.indexOf(C[C.length - 1]) > -1
					: C === void 0;
		r || (w += "(?:".concat(v, "(?=").concat(m, "))?")),
			N || (w += "(?=".concat(v, "|").concat(m, ")"));
	}
	return new RegExp(w, j(i));
}
function B(e, t, i) {
	return e instanceof RegExp
		? et(e, t)
		: Array.isArray(e)
			? it(e, t, i)
			: nt(e, t, i);
}
function y() {
	return (
		(y = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var i = arguments[t];
						for (var n in i)
							Object.prototype.hasOwnProperty.call(i, n) &&
								(e[n] = i[n]);
					}
					return e;
				}),
		y.apply(this, arguments)
	);
}
const F = (e, t) =>
		String(e)
			.toLowerCase()
			.replace(/[\s/_.]+/g, "-")
			.replace(/[^\w-]+/g, "")
			.replace(/--+/g, "-")
			.replace(/^-+|-+$/g, "") ||
		t ||
		"",
	S = ({ hash: e } = {}) =>
		window.location.pathname +
		window.location.search +
		(e ? window.location.hash : ""),
	rt = (e, t = {}) => {
		const i = y(
			{
				url: (e = e || S({ hash: !0 })),
				random: Math.random(),
				source: "swup",
			},
			t,
		);
		window.history.pushState(i, "", e);
	},
	T = (e = null, t = {}) => {
		e = e || S({ hash: !0 });
		const i = y(
			{},
			window.history.state || {},
			{ url: e, random: Math.random(), source: "swup" },
			t,
		);
		window.history.replaceState(i, "", e);
	},
	ot = (e, t, i, n) => {
		const r = new AbortController();
		return (
			(n = y({}, n, { signal: r.signal })),
			X(e, t, i, n),
			{ destroy: () => r.abort() }
		);
	};
let P = class O extends URL {
	constructor(t, i = document.baseURI) {
		super(t.toString(), i), Object.setPrototypeOf(this, O.prototype);
	}
	get url() {
		return this.pathname + this.search;
	}
	static fromElement(t) {
		const i = t.getAttribute("href") || t.getAttribute("xlink:href") || "";
		return new O(i);
	}
	static fromUrl(t) {
		return new O(t);
	}
};
const Rt = (e, t) => {
	try {
		return Z(e, t);
	} catch (i) {
		throw new Error(`[swup] Error parsing path "${String(e)}":
${String(i)}`);
	}
};
class $ extends Error {
	constructor(t, i) {
		super(t),
			(this.url = void 0),
			(this.status = void 0),
			(this.aborted = void 0),
			(this.timedOut = void 0),
			(this.name = "FetchError"),
			(this.url = i.url),
			(this.status = i.status),
			(this.aborted = i.aborted || !1),
			(this.timedOut = i.timedOut || !1);
	}
}
async function at(e, t = {}) {
	var i;
	e = P.fromUrl(e).url;
	const { visit: n = this.visit } = t,
		r = y({}, this.options.requestHeaders, t.headers),
		s = (i = t.timeout) != null ? i : this.options.timeout,
		o = new AbortController(),
		{ signal: a } = o;
	t = y({}, t, { headers: r, signal: a });
	let c,
		h = !1,
		l = null;
	s &&
		s > 0 &&
		(l = setTimeout(() => {
			(h = !0), o.abort("timeout");
		}, s));
	try {
		(c = await this.hooks.call(
			"fetch:request",
			n,
			{ url: e, options: t },
			(v, { url: w, options: b }) => fetch(w, b),
		)),
			l && clearTimeout(l);
	} catch (v) {
		throw h
			? (this.hooks.call("fetch:timeout", n, { url: e }),
				new $(`Request timed out: ${e}`, { url: e, timedOut: h }))
			: v?.name === "AbortError" || a.aborted
				? new $(`Request aborted: ${e}`, { url: e, aborted: !0 })
				: v;
	}
	const { status: u, url: d } = c,
		f = await c.text();
	if (u === 500)
		throw (
			(this.hooks.call("fetch:error", n, {
				status: u,
				response: c,
				url: d,
			}),
			new $(`Server error: ${d}`, { status: u, url: d }))
		);
	if (!f) throw new $(`Empty response: ${d}`, { status: u, url: d });
	const { url: g } = P.fromUrl(d),
		m = { url: g, html: f };
	return (
		!n.cache.write ||
			(t.method && t.method !== "GET") ||
			e !== g ||
			this.cache.set(m.url, m),
		m
	);
}
class ct {
	constructor(t) {
		(this.swup = void 0), (this.pages = new Map()), (this.swup = t);
	}
	get size() {
		return this.pages.size;
	}
	get all() {
		const t = new Map();
		return (
			this.pages.forEach((i, n) => {
				t.set(n, y({}, i));
			}),
			t
		);
	}
	has(t) {
		return this.pages.has(this.resolve(t));
	}
	get(t) {
		const i = this.pages.get(this.resolve(t));
		return i && y({}, i);
	}
	set(t, i) {
		(i = y({}, i, { url: (t = this.resolve(t)) })),
			this.pages.set(t, i),
			this.swup.hooks.callSync("cache:set", void 0, { page: i });
	}
	update(t, i) {
		t = this.resolve(t);
		const n = y({}, this.get(t), i, { url: t });
		this.pages.set(t, n);
	}
	delete(t) {
		this.pages.delete(this.resolve(t));
	}
	clear() {
		this.pages.clear(),
			this.swup.hooks.callSync("cache:clear", void 0, void 0);
	}
	prune(t) {
		this.pages.forEach((i, n) => {
			t(n, i) && this.delete(n);
		});
	}
	resolve(t) {
		const { url: i } = P.fromUrl(t);
		return this.swup.resolveUrl(i);
	}
}
const q = (e, t = document) => t.querySelector(e),
	V = (e, t = document) => Array.from(t.querySelectorAll(e)),
	K = () =>
		new Promise((e) => {
			requestAnimationFrame(() => {
				requestAnimationFrame(() => {
					e();
				});
			});
		});
function z(e) {
	return (
		!!e &&
		(typeof e == "object" || typeof e == "function") &&
		typeof e.then == "function"
	);
}
function lt(e, t = []) {
	return new Promise((i, n) => {
		const r = e(...t);
		z(r) ? r.then(i, n) : i(r);
	});
}
function Ut(e) {
	var t;
	(t = e = e || document.body) == null || t.getBoundingClientRect();
}
class ht {
	constructor(t) {
		(this.swup = void 0),
			(this.swupClasses = [
				"to-",
				"is-changing",
				"is-rendering",
				"is-popstate",
				"is-animating",
				"is-leaving",
			]),
			(this.swup = t);
	}
	get selectors() {
		const { scope: t } = this.swup.visit.animation;
		return t === "containers"
			? this.swup.visit.containers
			: t === "html"
				? ["html"]
				: Array.isArray(t)
					? t
					: [];
	}
	get selector() {
		return this.selectors.join(",");
	}
	get targets() {
		return this.selector.trim() ? V(this.selector) : [];
	}
	add(...t) {
		this.targets.forEach((i) => i.classList.add(...t));
	}
	remove(...t) {
		this.targets.forEach((i) => i.classList.remove(...t));
	}
	clear() {
		this.targets.forEach((t) => {
			const i = t.className.split(" ").filter((n) => this.isSwupClass(n));
			t.classList.remove(...i);
		});
	}
	isSwupClass(t) {
		return this.swupClasses.some((i) => t.startsWith(i));
	}
}
class G {
	constructor(t, i) {
		(this.id = void 0),
			(this.state = void 0),
			(this.from = void 0),
			(this.to = void 0),
			(this.containers = void 0),
			(this.animation = void 0),
			(this.trigger = void 0),
			(this.cache = void 0),
			(this.history = void 0),
			(this.scroll = void 0);
		const {
			to: n,
			from: r = t.currentPageUrl,
			hash: s,
			el: o,
			event: a,
		} = i;
		(this.id = Math.random()),
			(this.state = 1),
			(this.from = { url: r }),
			(this.to = { url: n, hash: s }),
			(this.containers = t.options.containers),
			(this.animation = {
				animate: !0,
				wait: !1,
				name: void 0,
				native: t.options.native,
				scope: t.options.animationScope,
				selector: t.options.animationSelector,
			}),
			(this.trigger = { el: o, event: a }),
			(this.cache = { read: t.options.cache, write: t.options.cache }),
			(this.history = {
				action: "push",
				popstate: !1,
				direction: void 0,
			}),
			(this.scroll = { reset: !0, target: void 0 });
	}
	advance(t) {
		this.state < t && (this.state = t);
	}
	abort() {
		this.state = 8;
	}
	get done() {
		return this.state >= 7;
	}
}
function ut(e) {
	return new G(this, e);
}
class dt {
	constructor(t) {
		(this.swup = void 0),
			(this.registry = new Map()),
			(this.hooks = [
				"animation:out:start",
				"animation:out:await",
				"animation:out:end",
				"animation:in:start",
				"animation:in:await",
				"animation:in:end",
				"animation:skip",
				"cache:clear",
				"cache:set",
				"content:replace",
				"content:scroll",
				"enable",
				"disable",
				"fetch:request",
				"fetch:error",
				"fetch:timeout",
				"history:popstate",
				"link:click",
				"link:self",
				"link:anchor",
				"link:newtab",
				"page:load",
				"page:view",
				"scroll:top",
				"scroll:anchor",
				"visit:start",
				"visit:transition",
				"visit:abort",
				"visit:end",
			]),
			(this.swup = t),
			this.init();
	}
	init() {
		this.hooks.forEach((t) => this.create(t));
	}
	create(t) {
		this.registry.has(t) || this.registry.set(t, new Map());
	}
	exists(t) {
		return this.registry.has(t);
	}
	get(t) {
		const i = this.registry.get(t);
		if (i) return i;
		console.error(`Unknown hook '${t}'`);
	}
	clear() {
		this.registry.forEach((t) => t.clear());
	}
	on(t, i, n = {}) {
		const r = this.get(t);
		if (!r) return console.warn(`Hook '${t}' not found.`), () => {};
		const s = y({}, n, { id: r.size + 1, hook: t, handler: i });
		return r.set(i, s), () => this.off(t, i);
	}
	before(t, i, n = {}) {
		return this.on(t, i, y({}, n, { before: !0 }));
	}
	replace(t, i, n = {}) {
		return this.on(t, i, y({}, n, { replace: !0 }));
	}
	once(t, i, n = {}) {
		return this.on(t, i, y({}, n, { once: !0 }));
	}
	off(t, i) {
		const n = this.get(t);
		n && i
			? n.delete(i) || console.warn(`Handler for hook '${t}' not found.`)
			: n && n.clear();
	}
	async call(t, i, n, r) {
		const [s, o, a] = this.parseCallArgs(t, i, n, r),
			{ before: c, handler: h, after: l } = this.getHandlers(t, a);
		await this.run(c, s, o);
		const [u] = await this.run(h, s, o, !0);
		return await this.run(l, s, o), this.dispatchDomEvent(t, s, o), u;
	}
	callSync(t, i, n, r) {
		const [s, o, a] = this.parseCallArgs(t, i, n, r),
			{ before: c, handler: h, after: l } = this.getHandlers(t, a);
		this.runSync(c, s, o);
		const [u] = this.runSync(h, s, o, !0);
		return this.runSync(l, s, o), this.dispatchDomEvent(t, s, o), u;
	}
	parseCallArgs(t, i, n, r) {
		return i instanceof G ||
			(typeof i != "object" && typeof n != "function")
			? [i, n, r]
			: [void 0, i, n];
	}
	async run(t, i = this.swup.visit, n, r = !1) {
		const s = [];
		for (const { hook: o, handler: a, defaultHandler: c, once: h } of t)
			if (i == null || !i.done) {
				h && this.off(o, a);
				try {
					const l = await lt(a, [i, n, c]);
					s.push(l);
				} catch (l) {
					if (r) throw l;
					console.error(`Error in hook '${o}':`, l);
				}
			}
		return s;
	}
	runSync(t, i = this.swup.visit, n, r = !1) {
		const s = [];
		for (const { hook: o, handler: a, defaultHandler: c, once: h } of t)
			if (i == null || !i.done) {
				h && this.off(o, a);
				try {
					const l = a(i, n, c);
					s.push(l),
						z(l) &&
							console.warn(
								`Swup will not await Promises in handler for synchronous hook '${o}'.`,
							);
				} catch (l) {
					if (r) throw l;
					console.error(`Error in hook '${o}':`, l);
				}
			}
		return s;
	}
	getHandlers(t, i) {
		const n = this.get(t);
		if (!n)
			return {
				found: !1,
				before: [],
				handler: [],
				after: [],
				replaced: !1,
			};
		const r = Array.from(n.values()),
			s = this.sortRegistrations,
			o = r.filter(({ before: u, replace: d }) => u && !d).sort(s),
			a = r
				.filter(({ replace: u }) => u)
				.filter((u) => !0)
				.sort(s),
			c = r.filter(({ before: u, replace: d }) => !u && !d).sort(s),
			h = a.length > 0;
		let l = [];
		if (i && ((l = [{ id: 0, hook: t, handler: i }]), h)) {
			const u = a.length - 1,
				d = (f) => {
					const g = a[f - 1];
					return g ? (m, v) => g.handler(m, v, d(f - 1)) : i;
				};
			l = [
				{ id: 0, hook: t, handler: a[u].handler, defaultHandler: d(u) },
			];
		}
		return { found: !0, before: o, handler: l, after: c, replaced: h };
	}
	sortRegistrations(t, i) {
		var n, r;
		return (
			((n = t.priority) != null ? n : 0) -
				((r = i.priority) != null ? r : 0) ||
			t.id - i.id ||
			0
		);
	}
	dispatchDomEvent(t, i, n) {
		if (i != null && i.done) return;
		const r = { hook: t, args: n, visit: i || this.swup.visit };
		document.dispatchEvent(
			new CustomEvent("swup:any", { detail: r, bubbles: !0 }),
		),
			document.dispatchEvent(
				new CustomEvent(`swup:${t}`, { detail: r, bubbles: !0 }),
			);
	}
}
const ft = (e) => {
		if ((e && e.charAt(0) === "#" && (e = e.substring(1)), !e)) return null;
		const t = decodeURIComponent(e);
		let i =
			document.getElementById(e) ||
			document.getElementById(t) ||
			q(`a[name='${CSS.escape(e)}']`) ||
			q(`a[name='${CSS.escape(t)}']`);
		return i || e !== "top" || (i = document.body), i;
	},
	U = "transition",
	H = "animation";
async function pt({ elements: e, selector: t }) {
	if (t === !1 && !e) return;
	let i = [];
	if (e) i = Array.from(e);
	else if (t && ((i = V(t, document.body)), !i.length))
		return void console.warn(
			`[swup] No elements found matching animationSelector \`${t}\``,
		);
	const n = i.map((r) =>
		(function (s) {
			const {
				type: o,
				timeout: a,
				propCount: c,
			} = (function (h) {
				const l = window.getComputedStyle(h),
					u = L(l, `${U}Delay`),
					d = L(l, `${U}Duration`),
					f = W(u, d),
					g = L(l, `${H}Delay`),
					m = L(l, `${H}Duration`),
					v = W(g, m),
					w = Math.max(f, v),
					b = w > 0 ? (f > v ? U : H) : null;
				return {
					type: b,
					timeout: w,
					propCount: b ? (b === U ? d.length : m.length) : 0,
				};
			})(s);
			return (
				!(!o || !a) &&
				new Promise((h) => {
					const l = `${o}end`,
						u = performance.now();
					let d = 0;
					const f = () => {
							s.removeEventListener(l, g), h();
						},
						g = (m) => {
							if (m.target === s) {
								if (
									!(function (v) {
										return [`${U}end`, `${H}end`].includes(
											v.type,
										);
									})(m)
								)
									throw new Error(
										"Not a transition or animation event.",
									);
								(performance.now() - u) / 1e3 < m.elapsedTime ||
									(++d >= c && f());
							}
						};
					setTimeout(() => {
						d < c && f();
					}, a + 1),
						s.addEventListener(l, g);
				})
			);
		})(r),
	);
	n.filter(Boolean).length > 0
		? await Promise.all(n)
		: t &&
			console.warn(
				`[swup] No CSS animation duration defined on elements matching \`${t}\``,
			);
}
function L(e, t) {
	return (e[t] || "").split(", ");
}
function W(e, t) {
	for (; e.length < t.length; ) e = e.concat(e);
	return Math.max(...t.map((i, n) => _(i) + _(e[n])));
}
function _(e) {
	return 1e3 * parseFloat(e);
}
function vt(e, t = {}, i = {}) {
	if (typeof e != "string")
		throw new Error("swup.navigate() requires a URL parameter");
	if (this.shouldIgnoreVisit(e, { el: i.el, event: i.event }))
		return void window.location.assign(e);
	const { url: n, hash: r } = P.fromUrl(e),
		s = this.createVisit(y({}, i, { to: n, hash: r }));
	this.performNavigation(s, t);
}
async function mt(e, t = {}) {
	if (this.navigating) {
		if (this.visit.state >= 6)
			return (
				(e.state = 2),
				void (this.onVisitEnd = () => this.performNavigation(e, t))
			);
		await this.hooks.call("visit:abort", this.visit, void 0),
			delete this.visit.to.document,
			(this.visit.state = 8);
	}
	(this.navigating = !0), (this.visit = e);
	const { el: i } = e.trigger;
	(t.referrer = t.referrer || this.currentPageUrl),
		t.animate === !1 && (e.animation.animate = !1),
		e.animation.animate || this.classes.clear();
	const n = t.history || i?.getAttribute("data-swup-history") || void 0;
	n && ["push", "replace"].includes(n) && (e.history.action = n);
	const r = t.animation || i?.getAttribute("data-swup-animation") || void 0;
	var s, o;
	r && (e.animation.name = r),
		typeof t.cache == "object"
			? ((e.cache.read = (s = t.cache.read) != null ? s : e.cache.read),
				(e.cache.write =
					(o = t.cache.write) != null ? o : e.cache.write))
			: t.cache !== void 0 &&
				(e.cache = { read: !!t.cache, write: !!t.cache }),
		delete t.cache;
	try {
		await this.hooks.call("visit:start", e, void 0), (e.state = 3);
		const a = this.hooks.call(
			"page:load",
			e,
			{ options: t },
			async (c, h) => {
				let l;
				return (
					c.cache.read && (l = this.cache.get(c.to.url)),
					(h.page = l || (await this.fetchPage(c.to.url, h.options))),
					(h.cache = !!l),
					h.page
				);
			},
		);
		if (
			(a.then(({ html: c }) => {
				e.advance(5),
					(e.to.html = c),
					(e.to.document = new DOMParser().parseFromString(
						c,
						"text/html",
					));
			}),
			!e.history.popstate)
		) {
			const c = e.to.url + e.to.hash;
			e.history.action === "replace" || e.to.url === this.currentPageUrl
				? T(c)
				: (this.currentHistoryIndex++,
					rt(c, { index: this.currentHistoryIndex }));
		}
		if (
			((this.currentPageUrl = S()),
			e.history.popstate && this.classes.add("is-popstate"),
			e.animation.name && this.classes.add(`to-${F(e.animation.name)}`),
			e.animation.wait && (await a),
			e.done ||
				(await this.hooks.call(
					"visit:transition",
					e,
					void 0,
					async () => {
						if (!e.animation.animate)
							return (
								await this.hooks.call("animation:skip", void 0),
								void (await this.renderPage(e, await a))
							);
						e.advance(4),
							await this.animatePageOut(e),
							e.animation.native && document.startViewTransition
								? await document.startViewTransition(
										async () =>
											await this.renderPage(e, await a),
									).finished
								: await this.renderPage(e, await a),
							await this.animatePageIn(e);
					},
				),
				e.done))
		)
			return;
		await this.hooks.call("visit:end", e, void 0, () =>
			this.classes.clear(),
		),
			(e.state = 7),
			(this.navigating = !1),
			this.onVisitEnd && (this.onVisitEnd(), (this.onVisitEnd = void 0));
	} catch (a) {
		if (!a || (a != null && a.aborted)) return void (e.state = 8);
		(e.state = 9),
			console.error(a),
			(this.options.skipPopStateHandling = () => (
				window.location.assign(e.to.url + e.to.hash), !0
			)),
			window.history.back();
	} finally {
		delete e.to.document;
	}
}
const gt = async function (e) {
		await this.hooks.call("animation:out:start", e, void 0, () => {
			this.classes.add("is-changing", "is-animating", "is-leaving");
		}),
			await this.hooks.call(
				"animation:out:await",
				e,
				{ skip: !1 },
				(t, { skip: i }) => {
					if (!i)
						return this.awaitAnimations({
							selector: t.animation.selector,
						});
				},
			),
			await this.hooks.call("animation:out:end", e, void 0);
	},
	wt = function (e) {
		var t;
		const i = e.to.document;
		if (!i) return !1;
		const n =
			((t = i.querySelector("title")) == null ? void 0 : t.innerText) ||
			"";
		document.title = n;
		const r = V('[data-swup-persist]:not([data-swup-persist=""])'),
			s = e.containers
				.map((o) => {
					const a = document.querySelector(o),
						c = i.querySelector(o);
					return a && c
						? (a.replaceWith(c.cloneNode(!0)), !0)
						: (a ||
								console.warn(
									`[swup] Container missing in current document: ${o}`,
								),
							c ||
								console.warn(
									`[swup] Container missing in incoming document: ${o}`,
								),
							!1);
				})
				.filter(Boolean);
		return (
			r.forEach((o) => {
				const a = o.getAttribute("data-swup-persist"),
					c = q(`[data-swup-persist="${a}"]`);
				c && c !== o && c.replaceWith(o);
			}),
			s.length === e.containers.length
		);
	},
	yt = function (e) {
		const t = { behavior: "auto" },
			{ target: i, reset: n } = e.scroll,
			r = i ?? e.to.hash;
		let s = !1;
		return (
			r &&
				(s = this.hooks.callSync(
					"scroll:anchor",
					e,
					{ hash: r, options: t },
					(o, { hash: a, options: c }) => {
						const h = this.getAnchorElement(a);
						return h && h.scrollIntoView(c), !!h;
					},
				)),
			n &&
				!s &&
				(s = this.hooks.callSync(
					"scroll:top",
					e,
					{ options: t },
					(o, { options: a }) => (
						window.scrollTo(y({ top: 0, left: 0 }, a)), !0
					),
				)),
			s
		);
	},
	Et = async function (e) {
		if (e.done) return;
		const t = this.hooks.call(
			"animation:in:await",
			e,
			{ skip: !1 },
			(i, { skip: n }) => {
				if (!n)
					return this.awaitAnimations({
						selector: i.animation.selector,
					});
			},
		);
		await K(),
			await this.hooks.call("animation:in:start", e, void 0, () => {
				this.classes.remove("is-animating");
			}),
			await t,
			await this.hooks.call("animation:in:end", e, void 0);
	},
	bt = async function (e, t) {
		if (e.done) return;
		e.advance(6);
		const { url: i } = t;
		this.isSameResolvedUrl(S(), i) ||
			(T(i),
			(this.currentPageUrl = S()),
			(e.to.url = this.currentPageUrl)),
			await this.hooks.call(
				"content:replace",
				e,
				{ page: t },
				(n, {}) => {
					if (
						(this.classes.remove("is-leaving"),
						n.animation.animate && this.classes.add("is-rendering"),
						!this.replaceContent(n))
					)
						throw new Error("[swup] Container mismatch, aborting");
					n.animation.animate &&
						(this.classes.add(
							"is-changing",
							"is-animating",
							"is-rendering",
						),
						n.animation.name &&
							this.classes.add(`to-${F(n.animation.name)}`));
				},
			),
			await this.hooks.call("content:scroll", e, void 0, () =>
				this.scrollToContent(e),
			),
			await this.hooks.call("page:view", e, {
				url: this.currentPageUrl,
				title: document.title,
			});
	},
	St = function (e) {
		var t;
		if (((t = e), !!t?.isSwupPlugin)) {
			if (
				((e.swup = this),
				!e._checkRequirements || e._checkRequirements())
			)
				return (
					e._beforeMount && e._beforeMount(),
					e.mount(),
					this.plugins.push(e),
					this.plugins
				);
		} else console.error("Not a swup plugin instance", e);
	};
function kt(e) {
	const t = this.findPlugin(e);
	if (t)
		return (
			t.unmount(),
			t._afterUnmount && t._afterUnmount(),
			(this.plugins = this.plugins.filter((i) => i !== t)),
			this.plugins
		);
	console.error("No such plugin", t);
}
function xt(e) {
	return this.plugins.find(
		(t) => t === e || t.name === e || t.name === `Swup${String(e)}`,
	);
}
function Ct(e) {
	if (typeof this.options.resolveUrl != "function")
		return (
			console.warn(
				"[swup] options.resolveUrl expects a callback function.",
			),
			e
		);
	const t = this.options.resolveUrl(e);
	return t && typeof t == "string"
		? t.startsWith("//") || t.startsWith("http")
			? (console.warn(
					"[swup] options.resolveUrl needs to return a relative url",
				),
				e)
			: t
		: (console.warn("[swup] options.resolveUrl needs to return a url"), e);
}
function Pt(e, t) {
	return this.resolveUrl(e) === this.resolveUrl(t);
}
const At = {
	animateHistoryBrowsing: !1,
	animationSelector: '[class*="transition-"]',
	animationScope: "html",
	cache: !0,
	containers: ["#swup"],
	ignoreVisit: (e, { el: t } = {}) =>
		!(t == null || !t.closest("[data-no-swup]")),
	linkSelector: "a[href]",
	linkToSelf: "scroll",
	native: !1,
	plugins: [],
	resolveUrl: (e) => e,
	requestHeaders: {
		"X-Requested-With": "swup",
		Accept: "text/html, application/xhtml+xml",
	},
	skipPopStateHandling: (e) => {
		var t;
		return ((t = e.state) == null ? void 0 : t.source) !== "swup";
	},
	timeout: 0,
};
class Tt {
	constructor(t = {}) {
		var i, n;
		(this.version = "4.6.1"),
			(this.options = void 0),
			(this.defaults = At),
			(this.plugins = []),
			(this.visit = void 0),
			(this.cache = void 0),
			(this.hooks = void 0),
			(this.classes = void 0),
			(this.currentPageUrl = S()),
			(this.currentHistoryIndex = void 0),
			(this.clickDelegate = void 0),
			(this.navigating = !1),
			(this.onVisitEnd = void 0),
			(this.use = St),
			(this.unuse = kt),
			(this.findPlugin = xt),
			(this.log = () => {}),
			(this.navigate = vt),
			(this.performNavigation = mt),
			(this.createVisit = ut),
			(this.delegateEvent = ot),
			(this.fetchPage = at),
			(this.awaitAnimations = pt),
			(this.renderPage = bt),
			(this.replaceContent = wt),
			(this.animatePageIn = Et),
			(this.animatePageOut = gt),
			(this.scrollToContent = yt),
			(this.getAnchorElement = ft),
			(this.getCurrentUrl = S),
			(this.resolveUrl = Ct),
			(this.isSameResolvedUrl = Pt),
			(this.options = y({}, this.defaults, t)),
			(this.handleLinkClick = this.handleLinkClick.bind(this)),
			(this.handlePopState = this.handlePopState.bind(this)),
			(this.cache = new ct(this)),
			(this.classes = new ht(this)),
			(this.hooks = new dt(this)),
			(this.visit = this.createVisit({ to: "" })),
			(this.currentHistoryIndex =
				(i = (n = window.history.state) == null ? void 0 : n.index) !=
				null
					? i
					: 1),
			this.enable();
	}
	async enable() {
		var t;
		const { linkSelector: i } = this.options;
		(this.clickDelegate = this.delegateEvent(
			i,
			"click",
			this.handleLinkClick,
		)),
			window.addEventListener("popstate", this.handlePopState),
			this.options.animateHistoryBrowsing &&
				(window.history.scrollRestoration = "manual"),
			(this.options.native =
				this.options.native && !!document.startViewTransition),
			this.options.plugins.forEach((n) => this.use(n)),
			((t = window.history.state) == null ? void 0 : t.source) !==
				"swup" && T(null, { index: this.currentHistoryIndex }),
			await K(),
			await this.hooks.call("enable", void 0, void 0, () => {
				const n = document.documentElement;
				n.classList.add("swup-enabled"),
					n.classList.toggle("swup-native", this.options.native);
			});
	}
	async destroy() {
		this.clickDelegate.destroy(),
			window.removeEventListener("popstate", this.handlePopState),
			this.cache.clear(),
			this.options.plugins.forEach((t) => this.unuse(t)),
			await this.hooks.call("disable", void 0, void 0, () => {
				const t = document.documentElement;
				t.classList.remove("swup-enabled"),
					t.classList.remove("swup-native");
			}),
			this.hooks.clear();
	}
	shouldIgnoreVisit(t, { el: i, event: n } = {}) {
		const { origin: r, url: s, hash: o } = P.fromUrl(t);
		return (
			r !== window.location.origin ||
			!(!i || !this.triggerWillOpenNewWindow(i)) ||
			!!this.options.ignoreVisit(s + o, { el: i, event: n })
		);
	}
	handleLinkClick(t) {
		const i = t.delegateTarget,
			{ href: n, url: r, hash: s } = P.fromElement(i);
		if (this.shouldIgnoreVisit(n, { el: i, event: t })) return;
		if (this.navigating && r === this.visit.to.url)
			return void t.preventDefault();
		const o = this.createVisit({ to: r, hash: s, el: i, event: t });
		t.metaKey || t.ctrlKey || t.shiftKey || t.altKey
			? this.hooks.callSync("link:newtab", o, { href: n })
			: t.button === 0 &&
				this.hooks.callSync(
					"link:click",
					o,
					{ el: i, event: t },
					() => {
						var a;
						const c = (a = o.from.url) != null ? a : "";
						t.preventDefault(),
							r && r !== c
								? this.isSameResolvedUrl(r, c) ||
									this.performNavigation(o)
								: s
									? this.hooks.callSync(
											"link:anchor",
											o,
											{ hash: s },
											() => {
												T(r + s),
													this.scrollToContent(o);
											},
										)
									: this.hooks.callSync(
											"link:self",
											o,
											void 0,
											() => {
												this.options.linkToSelf ===
												"navigate"
													? this.performNavigation(o)
													: (T(r),
														this.scrollToContent(
															o,
														));
											},
										);
					},
				);
	}
	handlePopState(t) {
		var i, n, r, s;
		const o =
			(i = (n = t.state) == null ? void 0 : n.url) != null
				? i
				: window.location.href;
		if (
			this.options.skipPopStateHandling(t) ||
			this.isSameResolvedUrl(S(), this.currentPageUrl)
		)
			return;
		const { url: a, hash: c } = P.fromUrl(o),
			h = this.createVisit({ to: a, hash: c, event: t });
		h.history.popstate = !0;
		const l =
			(r = (s = t.state) == null ? void 0 : s.index) != null ? r : 0;
		l &&
			l !== this.currentHistoryIndex &&
			((h.history.direction =
				l - this.currentHistoryIndex > 0 ? "forwards" : "backwards"),
			(this.currentHistoryIndex = l)),
			(h.animation.animate = !1),
			(h.scroll.reset = !1),
			(h.scroll.target = !1),
			this.options.animateHistoryBrowsing &&
				((h.animation.animate = !0), (h.scroll.reset = !0)),
			this.hooks.callSync("history:popstate", h, { event: t }, () => {
				this.performNavigation(h);
			});
	}
	triggerWillOpenNewWindow(t) {
		return !!t.matches('[download], [target="_blank"]');
	}
}
export {
	P as Location,
	F as classify,
	rt as createHistoryRecord,
	Tt as default,
	ot as delegateEvent,
	Ut as forceReflow,
	S as getCurrentUrl,
	z as isPromise,
	Rt as matchPath,
	K as nextTick,
	q as query,
	V as queryAll,
	lt as runAsPromise,
	T as updateHistoryRecord,
};
//# sourceMappingURL=Swup.modern.DSkug2J8.js.map
