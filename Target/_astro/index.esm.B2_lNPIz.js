var H = {}; /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const G = function (t) {
		const e = [];
		let n = 0;
		for (let s = 0; s < t.length; s++) {
			let r = t.charCodeAt(s);
			r < 128
				? (e[n++] = r)
				: r < 2048
				  ? ((e[n++] = (r >> 6) | 192), (e[n++] = (r & 63) | 128))
				  : (r & 64512) === 55296 &&
						  s + 1 < t.length &&
						  (t.charCodeAt(s + 1) & 64512) === 56320
					  ? ((r =
								65536 +
								((r & 1023) << 10) +
								(t.charCodeAt(++s) & 1023)),
						  (e[n++] = (r >> 18) | 240),
						  (e[n++] = ((r >> 12) & 63) | 128),
						  (e[n++] = ((r >> 6) & 63) | 128),
						  (e[n++] = (r & 63) | 128))
					  : ((e[n++] = (r >> 12) | 224),
						  (e[n++] = ((r >> 6) & 63) | 128),
						  (e[n++] = (r & 63) | 128));
		}
		return e;
	},
	re = function (t) {
		const e = [];
		let n = 0,
			s = 0;
		for (; n < t.length; ) {
			const r = t[n++];
			if (r < 128) e[s++] = String.fromCharCode(r);
			else if (r > 191 && r < 224) {
				const a = t[n++];
				e[s++] = String.fromCharCode(((r & 31) << 6) | (a & 63));
			} else if (r > 239 && r < 365) {
				const a = t[n++],
					i = t[n++],
					c = t[n++],
					o =
						(((r & 7) << 18) |
							((a & 63) << 12) |
							((i & 63) << 6) |
							(c & 63)) -
						65536;
				(e[s++] = String.fromCharCode(55296 + (o >> 10))),
					(e[s++] = String.fromCharCode(56320 + (o & 1023)));
			} else {
				const a = t[n++],
					i = t[n++];
				e[s++] = String.fromCharCode(
					((r & 15) << 12) | ((a & 63) << 6) | (i & 63),
				);
			}
		}
		return e.join("");
	},
	K = {
		byteToCharMap_: null,
		charToByteMap_: null,
		byteToCharMapWebSafe_: null,
		charToByteMapWebSafe_: null,
		ENCODED_VALS_BASE:
			"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
		get ENCODED_VALS() {
			return this.ENCODED_VALS_BASE + "+/=";
		},
		get ENCODED_VALS_WEBSAFE() {
			return this.ENCODED_VALS_BASE + "-_.";
		},
		HAS_NATIVE_SUPPORT: typeof atob == "function",
		encodeByteArray(t, e) {
			if (!Array.isArray(t))
				throw Error("encodeByteArray takes an array as a parameter");
			this.init_();
			const n = e ? this.byteToCharMapWebSafe_ : this.byteToCharMap_,
				s = [];
			for (let r = 0; r < t.length; r += 3) {
				const a = t[r],
					i = r + 1 < t.length,
					c = i ? t[r + 1] : 0,
					o = r + 2 < t.length,
					h = o ? t[r + 2] : 0,
					P = a >> 2,
					g = ((a & 3) << 4) | (c >> 4);
				let E = ((c & 15) << 2) | (h >> 6),
					y = h & 63;
				o || ((y = 64), i || (E = 64)), s.push(n[P], n[g], n[E], n[y]);
			}
			return s.join("");
		},
		encodeString(t, e) {
			return this.HAS_NATIVE_SUPPORT && !e
				? btoa(t)
				: this.encodeByteArray(G(t), e);
		},
		decodeString(t, e) {
			return this.HAS_NATIVE_SUPPORT && !e
				? atob(t)
				: re(this.decodeStringToByteArray(t, e));
		},
		decodeStringToByteArray(t, e) {
			this.init_();
			const n = e ? this.charToByteMapWebSafe_ : this.charToByteMap_,
				s = [];
			for (let r = 0; r < t.length; ) {
				const a = n[t.charAt(r++)],
					c = r < t.length ? n[t.charAt(r)] : 0;
				++r;
				const h = r < t.length ? n[t.charAt(r)] : 64;
				++r;
				const g = r < t.length ? n[t.charAt(r)] : 64;
				if ((++r, a == null || c == null || h == null || g == null))
					throw new se();
				const E = (a << 2) | (c >> 4);
				if ((s.push(E), h !== 64)) {
					const y = ((c << 4) & 240) | (h >> 2);
					if ((s.push(y), g !== 64)) {
						const ne = ((h << 6) & 192) | g;
						s.push(ne);
					}
				}
			}
			return s;
		},
		init_() {
			if (!this.byteToCharMap_) {
				(this.byteToCharMap_ = {}),
					(this.charToByteMap_ = {}),
					(this.byteToCharMapWebSafe_ = {}),
					(this.charToByteMapWebSafe_ = {});
				for (let t = 0; t < this.ENCODED_VALS.length; t++)
					(this.byteToCharMap_[t] = this.ENCODED_VALS.charAt(t)),
						(this.charToByteMap_[this.byteToCharMap_[t]] = t),
						(this.byteToCharMapWebSafe_[t] =
							this.ENCODED_VALS_WEBSAFE.charAt(t)),
						(this.charToByteMapWebSafe_[
							this.byteToCharMapWebSafe_[t]
						] = t),
						t >= this.ENCODED_VALS_BASE.length &&
							((this.charToByteMap_[
								this.ENCODED_VALS_WEBSAFE.charAt(t)
							] = t),
							(this.charToByteMapWebSafe_[
								this.ENCODED_VALS.charAt(t)
							] = t));
			}
		},
	};
class se extends Error {
	constructor() {
		super(...arguments), (this.name = "DecodeBase64StringError");
	}
}
const ae = function (t) {
		const e = G(t);
		return K.encodeByteArray(e, !0);
	},
	J = function (t) {
		return ae(t).replace(/\./g, "");
	},
	ie = function (t) {
		try {
			return K.decodeString(t, !0);
		} catch (e) {
			console.error("base64Decode failed: ", e);
		}
		return null;
	}; /**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function oe() {
	if (typeof self < "u") return self;
	if (typeof window < "u") return window;
	if (typeof global < "u") return global;
	throw new Error("Unable to locate global object.");
} /**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ce = () => oe().__FIREBASE_DEFAULTS__,
	le = () => {
		if (typeof process > "u" || typeof H > "u") return;
		const t = H.__FIREBASE_DEFAULTS__;
		if (t) return JSON.parse(t);
	},
	he = () => {
		if (typeof document > "u") return;
		let t;
		try {
			t = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
		} catch {
			return;
		}
		const e = t && ie(t[1]);
		return e && JSON.parse(e);
	},
	de = () => {
		try {
			return ce() || le() || he();
		} catch (t) {
			console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);
			return;
		}
	},
	Y = () => {
		var t;
		return (t = de()) === null || t === void 0 ? void 0 : t.config;
	}; /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fe {
	constructor() {
		(this.reject = () => {}),
			(this.resolve = () => {}),
			(this.promise = new Promise((e, n) => {
				(this.resolve = e), (this.reject = n);
			}));
	}
	wrapCallback(e) {
		return (n, s) => {
			n ? this.reject(n) : this.resolve(s),
				typeof e == "function" &&
					(this.promise.catch(() => {}),
					e.length === 1 ? e(n) : e(n, s));
		};
	}
}
function ue() {
	try {
		return typeof indexedDB == "object";
	} catch {
		return !1;
	}
}
function pe() {
	return new Promise((t, e) => {
		try {
			let n = !0;
			const s = "validate-browser-context-for-indexeddb-analytics-module",
				r = self.indexedDB.open(s);
			(r.onsuccess = () => {
				r.result.close(), n || self.indexedDB.deleteDatabase(s), t(!0);
			}),
				(r.onupgradeneeded = () => {
					n = !1;
				}),
				(r.onerror = () => {
					var a;
					e(
						((a = r.error) === null || a === void 0
							? void 0
							: a.message) || "",
					);
				});
		} catch (n) {
			e(n);
		}
	});
} /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const me = "FirebaseError";
class _ extends Error {
	constructor(e, n, s) {
		super(n),
			(this.code = e),
			(this.customData = s),
			(this.name = me),
			Object.setPrototypeOf(this, _.prototype),
			Error.captureStackTrace &&
				Error.captureStackTrace(this, X.prototype.create);
	}
}
class X {
	constructor(e, n, s) {
		(this.service = e), (this.serviceName = n), (this.errors = s);
	}
	create(e, ...n) {
		const s = n[0] || {},
			r = `${this.service}/${e}`,
			a = this.errors[e],
			i = a ? ge(a, s) : "Error",
			c = `${this.serviceName}: ${i} (${r}).`;
		return new _(r, c, s);
	}
}
function ge(t, e) {
	return t.replace(be, (n, s) => {
		const r = e[s];
		return r != null ? String(r) : `<${s}?>`;
	});
}
const be = /\{\$([^}]+)}/g;
function O(t, e) {
	if (t === e) return !0;
	const n = Object.keys(t),
		s = Object.keys(e);
	for (const r of n) {
		if (!s.includes(r)) return !1;
		const a = t[r],
			i = e[r];
		if (F(a) && F(i)) {
			if (!O(a, i)) return !1;
		} else if (a !== i) return !1;
	}
	for (const r of s) if (!n.includes(r)) return !1;
	return !0;
}
function F(t) {
	return t !== null && typeof t == "object";
}
class D {
	constructor(e, n, s) {
		(this.name = e),
			(this.instanceFactory = n),
			(this.type = s),
			(this.multipleInstances = !1),
			(this.serviceProps = {}),
			(this.instantiationMode = "LAZY"),
			(this.onInstanceCreated = null);
	}
	setInstantiationMode(e) {
		return (this.instantiationMode = e), this;
	}
	setMultipleInstances(e) {
		return (this.multipleInstances = e), this;
	}
	setServiceProps(e) {
		return (this.serviceProps = e), this;
	}
	setInstanceCreatedCallback(e) {
		return (this.onInstanceCreated = e), this;
	}
} /**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const u = "[DEFAULT]"; /**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _e {
	constructor(e, n) {
		(this.name = e),
			(this.container = n),
			(this.component = null),
			(this.instances = new Map()),
			(this.instancesDeferred = new Map()),
			(this.instancesOptions = new Map()),
			(this.onInitCallbacks = new Map());
	}
	get(e) {
		const n = this.normalizeInstanceIdentifier(e);
		if (!this.instancesDeferred.has(n)) {
			const s = new fe();
			if (
				(this.instancesDeferred.set(n, s),
				this.isInitialized(n) || this.shouldAutoInitialize())
			)
				try {
					const r = this.getOrInitializeService({
						instanceIdentifier: n,
					});
					r && s.resolve(r);
				} catch {}
		}
		return this.instancesDeferred.get(n).promise;
	}
	getImmediate(e) {
		var n;
		const s = this.normalizeInstanceIdentifier(e?.identifier),
			r = (n = e?.optional) !== null && n !== void 0 ? n : !1;
		if (this.isInitialized(s) || this.shouldAutoInitialize())
			try {
				return this.getOrInitializeService({ instanceIdentifier: s });
			} catch (a) {
				if (r) return null;
				throw a;
			}
		else {
			if (r) return null;
			throw Error(`Service ${this.name} is not available`);
		}
	}
	getComponent() {
		return this.component;
	}
	setComponent(e) {
		if (e.name !== this.name)
			throw Error(
				`Mismatching Component ${e.name} for Provider ${this.name}.`,
			);
		if (this.component)
			throw Error(`Component for ${this.name} has already been provided`);
		if (((this.component = e), !!this.shouldAutoInitialize())) {
			if (ye(e))
				try {
					this.getOrInitializeService({ instanceIdentifier: u });
				} catch {}
			for (const [n, s] of this.instancesDeferred.entries()) {
				const r = this.normalizeInstanceIdentifier(n);
				try {
					const a = this.getOrInitializeService({
						instanceIdentifier: r,
					});
					s.resolve(a);
				} catch {}
			}
		}
	}
	clearInstance(e = u) {
		this.instancesDeferred.delete(e),
			this.instancesOptions.delete(e),
			this.instances.delete(e);
	}
	async delete() {
		const e = Array.from(this.instances.values());
		await Promise.all([
			...e.filter((n) => "INTERNAL" in n).map((n) => n.INTERNAL.delete()),
			...e.filter((n) => "_delete" in n).map((n) => n._delete()),
		]);
	}
	isComponentSet() {
		return this.component != null;
	}
	isInitialized(e = u) {
		return this.instances.has(e);
	}
	getOptions(e = u) {
		return this.instancesOptions.get(e) || {};
	}
	initialize(e = {}) {
		const { options: n = {} } = e,
			s = this.normalizeInstanceIdentifier(e.instanceIdentifier);
		if (this.isInitialized(s))
			throw Error(`${this.name}(${s}) has already been initialized`);
		if (!this.isComponentSet())
			throw Error(`Component ${this.name} has not been registered yet`);
		const r = this.getOrInitializeService({
			instanceIdentifier: s,
			options: n,
		});
		for (const [a, i] of this.instancesDeferred.entries()) {
			const c = this.normalizeInstanceIdentifier(a);
			s === c && i.resolve(r);
		}
		return r;
	}
	onInit(e, n) {
		var s;
		const r = this.normalizeInstanceIdentifier(n),
			a =
				(s = this.onInitCallbacks.get(r)) !== null && s !== void 0
					? s
					: new Set();
		a.add(e), this.onInitCallbacks.set(r, a);
		const i = this.instances.get(r);
		return (
			i && e(i, r),
			() => {
				a.delete(e);
			}
		);
	}
	invokeOnInitCallbacks(e, n) {
		const s = this.onInitCallbacks.get(n);
		if (s)
			for (const r of s)
				try {
					r(e, n);
				} catch {}
	}
	getOrInitializeService({ instanceIdentifier: e, options: n = {} }) {
		let s = this.instances.get(e);
		if (
			!s &&
			this.component &&
			((s = this.component.instanceFactory(this.container, {
				instanceIdentifier: Ee(e),
				options: n,
			})),
			this.instances.set(e, s),
			this.instancesOptions.set(e, n),
			this.invokeOnInitCallbacks(s, e),
			this.component.onInstanceCreated)
		)
			try {
				this.component.onInstanceCreated(this.container, e, s);
			} catch {}
		return s || null;
	}
	normalizeInstanceIdentifier(e = u) {
		return this.component ? (this.component.multipleInstances ? e : u) : e;
	}
	shouldAutoInitialize() {
		return (
			!!this.component && this.component.instantiationMode !== "EXPLICIT"
		);
	}
}
function Ee(t) {
	return t === u ? void 0 : t;
}
function ye(t) {
	return t.instantiationMode === "EAGER";
} /**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ie {
	constructor(e) {
		(this.name = e), (this.providers = new Map());
	}
	addComponent(e) {
		const n = this.getProvider(e.name);
		if (n.isComponentSet())
			throw new Error(
				`Component ${e.name} has already been registered with ${this.name}`,
			);
		n.setComponent(e);
	}
	addOrOverwriteComponent(e) {
		this.getProvider(e.name).isComponentSet() &&
			this.providers.delete(e.name),
			this.addComponent(e);
	}
	getProvider(e) {
		if (this.providers.has(e)) return this.providers.get(e);
		const n = new _e(e, this);
		return this.providers.set(e, n), n;
	}
	getProviders() {
		return Array.from(this.providers.values());
	}
} /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const $ = [];
var l;
(function (t) {
	(t[(t.DEBUG = 0)] = "DEBUG"),
		(t[(t.VERBOSE = 1)] = "VERBOSE"),
		(t[(t.INFO = 2)] = "INFO"),
		(t[(t.WARN = 3)] = "WARN"),
		(t[(t.ERROR = 4)] = "ERROR"),
		(t[(t.SILENT = 5)] = "SILENT");
})(l || (l = {}));
const Z = {
		debug: l.DEBUG,
		verbose: l.VERBOSE,
		info: l.INFO,
		warn: l.WARN,
		error: l.ERROR,
		silent: l.SILENT,
	},
	De = l.INFO,
	ve = {
		[l.DEBUG]: "log",
		[l.VERBOSE]: "log",
		[l.INFO]: "info",
		[l.WARN]: "warn",
		[l.ERROR]: "error",
	},
	we = (t, e, ...n) => {
		if (e < t.logLevel) return;
		const s = new Date().toISOString(),
			r = ve[e];
		if (r) console[r](`[${s}]  ${t.name}:`, ...n);
		else
			throw new Error(
				`Attempted to log a message with an invalid logType (value: ${e})`,
			);
	};
class Se {
	constructor(e) {
		(this.name = e),
			(this._logLevel = De),
			(this._logHandler = we),
			(this._userLogHandler = null),
			$.push(this);
	}
	get logLevel() {
		return this._logLevel;
	}
	set logLevel(e) {
		if (!(e in l))
			throw new TypeError(
				`Invalid value "${e}" assigned to \`logLevel\``,
			);
		this._logLevel = e;
	}
	setLogLevel(e) {
		this._logLevel = typeof e == "string" ? Z[e] : e;
	}
	get logHandler() {
		return this._logHandler;
	}
	set logHandler(e) {
		if (typeof e != "function")
			throw new TypeError(
				"Value assigned to `logHandler` must be a function",
			);
		this._logHandler = e;
	}
	get userLogHandler() {
		return this._userLogHandler;
	}
	set userLogHandler(e) {
		this._userLogHandler = e;
	}
	debug(...e) {
		this._userLogHandler && this._userLogHandler(this, l.DEBUG, ...e),
			this._logHandler(this, l.DEBUG, ...e);
	}
	log(...e) {
		this._userLogHandler && this._userLogHandler(this, l.VERBOSE, ...e),
			this._logHandler(this, l.VERBOSE, ...e);
	}
	info(...e) {
		this._userLogHandler && this._userLogHandler(this, l.INFO, ...e),
			this._logHandler(this, l.INFO, ...e);
	}
	warn(...e) {
		this._userLogHandler && this._userLogHandler(this, l.WARN, ...e),
			this._logHandler(this, l.WARN, ...e);
	}
	error(...e) {
		this._userLogHandler && this._userLogHandler(this, l.ERROR, ...e),
			this._logHandler(this, l.ERROR, ...e);
	}
}
function Ce(t) {
	$.forEach((e) => {
		e.setLogLevel(t);
	});
}
function Ae(t, e) {
	for (const n of $) {
		let s = null;
		e && e.level && (s = Z[e.level]),
			t === null
				? (n.userLogHandler = null)
				: (n.userLogHandler = (r, a, ...i) => {
						const c = i
							.map((o) => {
								if (o == null) return null;
								if (typeof o == "string") return o;
								if (
									typeof o == "number" ||
									typeof o == "boolean"
								)
									return o.toString();
								if (o instanceof Error) return o.message;
								try {
									return JSON.stringify(o);
								} catch {
									return null;
								}
							})
							.filter((o) => o)
							.join(" ");
						a >= (s ?? r.logLevel) &&
							t({
								level: l[a].toLowerCase(),
								message: c,
								args: i,
								type: r.name,
							});
				  });
	}
}
const Be = (t, e) => e.some((n) => t instanceof n);
let x, V;
function Oe() {
	return (
		x ||
		(x = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])
	);
}
function Te() {
	return (
		V ||
		(V = [
			IDBCursor.prototype.advance,
			IDBCursor.prototype.continue,
			IDBCursor.prototype.continuePrimaryKey,
		])
	);
}
const Q = new WeakMap(),
	T = new WeakMap(),
	q = new WeakMap(),
	S = new WeakMap(),
	R = new WeakMap();
function Me(t) {
	const e = new Promise((n, s) => {
		const r = () => {
				t.removeEventListener("success", a),
					t.removeEventListener("error", i);
			},
			a = () => {
				n(f(t.result)), r();
			},
			i = () => {
				s(t.error), r();
			};
		t.addEventListener("success", a), t.addEventListener("error", i);
	});
	return (
		e
			.then((n) => {
				n instanceof IDBCursor && Q.set(n, t);
			})
			.catch(() => {}),
		R.set(e, t),
		e
	);
}
function Ne(t) {
	if (T.has(t)) return;
	const e = new Promise((n, s) => {
		const r = () => {
				t.removeEventListener("complete", a),
					t.removeEventListener("error", i),
					t.removeEventListener("abort", i);
			},
			a = () => {
				n(), r();
			},
			i = () => {
				s(t.error || new DOMException("AbortError", "AbortError")), r();
			};
		t.addEventListener("complete", a),
			t.addEventListener("error", i),
			t.addEventListener("abort", i);
	});
	T.set(t, e);
}
let M = {
	get(t, e, n) {
		if (t instanceof IDBTransaction) {
			if (e === "done") return T.get(t);
			if (e === "objectStoreNames") return t.objectStoreNames || q.get(t);
			if (e === "store")
				return n.objectStoreNames[1]
					? void 0
					: n.objectStore(n.objectStoreNames[0]);
		}
		return f(t[e]);
	},
	set(t, e, n) {
		return (t[e] = n), !0;
	},
	has(t, e) {
		return t instanceof IDBTransaction && (e === "done" || e === "store")
			? !0
			: e in t;
	},
};
function Le(t) {
	M = t(M);
}
function $e(t) {
	return t === IDBDatabase.prototype.transaction &&
		!("objectStoreNames" in IDBTransaction.prototype)
		? function (e, ...n) {
				const s = t.call(C(this), e, ...n);
				return q.set(s, e.sort ? e.sort() : [e]), f(s);
		  }
		: Te().includes(t)
		  ? function (...e) {
					return t.apply(C(this), e), f(Q.get(this));
			  }
		  : function (...e) {
					return f(t.apply(C(this), e));
			  };
}
function Re(t) {
	return typeof t == "function"
		? $e(t)
		: (t instanceof IDBTransaction && Ne(t),
		  Be(t, Oe()) ? new Proxy(t, M) : t);
}
function f(t) {
	if (t instanceof IDBRequest) return Me(t);
	if (S.has(t)) return S.get(t);
	const e = Re(t);
	return e !== t && (S.set(t, e), R.set(e, t)), e;
}
const C = (t) => R.get(t);
function Pe(t, e, { blocked: n, upgrade: s, blocking: r, terminated: a } = {}) {
	const i = indexedDB.open(t, e),
		c = f(i);
	return (
		s &&
			i.addEventListener("upgradeneeded", (o) => {
				s(f(i.result), o.oldVersion, o.newVersion, f(i.transaction), o);
			}),
		n &&
			i.addEventListener("blocked", (o) =>
				n(o.oldVersion, o.newVersion, o),
			),
		c
			.then((o) => {
				a && o.addEventListener("close", () => a()),
					r &&
						o.addEventListener("versionchange", (h) =>
							r(h.oldVersion, h.newVersion, h),
						);
			})
			.catch(() => {}),
		c
	);
}
const He = ["get", "getKey", "getAll", "getAllKeys", "count"],
	Fe = ["put", "add", "delete", "clear"],
	A = new Map();
function j(t, e) {
	if (!(t instanceof IDBDatabase && !(e in t) && typeof e == "string"))
		return;
	if (A.get(e)) return A.get(e);
	const n = e.replace(/FromIndex$/, ""),
		s = e !== n,
		r = Fe.includes(n);
	if (
		!(n in (s ? IDBIndex : IDBObjectStore).prototype) ||
		!(r || He.includes(n))
	)
		return;
	const a = async function (i, ...c) {
		const o = this.transaction(i, r ? "readwrite" : "readonly");
		let h = o.store;
		return (
			s && (h = h.index(c.shift())),
			(await Promise.all([h[n](...c), r && o.done]))[0]
		);
	};
	return A.set(e, a), a;
}
Le((t) => ({
	...t,
	get: (e, n, s) => j(e, n) || t.get(e, n, s),
	has: (e, n) => !!j(e, n) || t.has(e, n),
})); /**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xe {
	constructor(e) {
		this.container = e;
	}
	getPlatformInfoString() {
		return this.container
			.getProviders()
			.map((n) => {
				if (Ve(n)) {
					const s = n.getImmediate();
					return `${s.library}/${s.version}`;
				} else return null;
			})
			.filter((n) => n)
			.join(" ");
	}
}
function Ve(t) {
	const e = t.getComponent();
	return e?.type === "VERSION";
}
const N = "@firebase/app",
	U = "0.9.28"; /**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const p = new Se("@firebase/app"),
	je = "@firebase/app-compat",
	Ue = "@firebase/analytics-compat",
	ke = "@firebase/analytics",
	ze = "@firebase/app-check-compat",
	We = "@firebase/app-check",
	Ge = "@firebase/auth",
	Ke = "@firebase/auth-compat",
	Je = "@firebase/database",
	Ye = "@firebase/database-compat",
	Xe = "@firebase/functions",
	Ze = "@firebase/functions-compat",
	Qe = "@firebase/installations",
	qe = "@firebase/installations-compat",
	et = "@firebase/messaging",
	tt = "@firebase/messaging-compat",
	nt = "@firebase/performance",
	rt = "@firebase/performance-compat",
	st = "@firebase/remote-config",
	at = "@firebase/remote-config-compat",
	it = "@firebase/storage",
	ot = "@firebase/storage-compat",
	ct = "@firebase/firestore",
	lt = "@firebase/firestore-compat",
	ht = "firebase",
	dt = "10.8.1"; /**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const v = "[DEFAULT]",
	ft = {
		[N]: "fire-core",
		[je]: "fire-core-compat",
		[ke]: "fire-analytics",
		[Ue]: "fire-analytics-compat",
		[We]: "fire-app-check",
		[ze]: "fire-app-check-compat",
		[Ge]: "fire-auth",
		[Ke]: "fire-auth-compat",
		[Je]: "fire-rtdb",
		[Ye]: "fire-rtdb-compat",
		[Xe]: "fire-fn",
		[Ze]: "fire-fn-compat",
		[Qe]: "fire-iid",
		[qe]: "fire-iid-compat",
		[et]: "fire-fcm",
		[tt]: "fire-fcm-compat",
		[nt]: "fire-perf",
		[rt]: "fire-perf-compat",
		[st]: "fire-rc",
		[at]: "fire-rc-compat",
		[it]: "fire-gcs",
		[ot]: "fire-gcs-compat",
		[ct]: "fire-fst",
		[lt]: "fire-fst-compat",
		"fire-js": "fire-js",
		[ht]: "fire-js-all",
	}; /**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const m = new Map(),
	w = new Map();
function ut(t, e) {
	try {
		t.container.addComponent(e);
	} catch (n) {
		p.debug(
			`Component ${e.name} failed to register with FirebaseApp ${t.name}`,
			n,
		);
	}
}
function Ot(t, e) {
	t.container.addOrOverwriteComponent(e);
}
function L(t) {
	const e = t.name;
	if (w.has(e))
		return (
			p.debug(`There were multiple attempts to register component ${e}.`),
			!1
		);
	w.set(e, t);
	for (const n of m.values()) ut(n, t);
	return !0;
}
function pt(t, e) {
	const n = t.container
		.getProvider("heartbeat")
		.getImmediate({ optional: !0 });
	return n && n.triggerHeartbeat(), t.container.getProvider(e);
}
function Tt(t, e, n = v) {
	pt(t, e).clearInstance(n);
}
function Mt() {
	w.clear();
} /**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const mt = {
		"no-app":
			"No Firebase App '{$appName}' has been created - call initializeApp() first",
		"bad-app-name": "Illegal App name: '{$appName}",
		"duplicate-app":
			"Firebase App named '{$appName}' already exists with different options or config",
		"app-deleted": "Firebase App named '{$appName}' already deleted",
		"no-options":
			"Need to provide options, when not being deployed to hosting via source.",
		"invalid-app-argument":
			"firebase.{$appName}() takes either no argument or a Firebase App instance.",
		"invalid-log-argument":
			"First argument to `onLog` must be null or a function.",
		"idb-open":
			"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
		"idb-get":
			"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
		"idb-set":
			"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
		"idb-delete":
			"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",
	},
	d = new X("app", "Firebase", mt); /**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gt {
	constructor(e, n, s) {
		(this._isDeleted = !1),
			(this._options = Object.assign({}, e)),
			(this._config = Object.assign({}, n)),
			(this._name = n.name),
			(this._automaticDataCollectionEnabled =
				n.automaticDataCollectionEnabled),
			(this._container = s),
			this.container.addComponent(new D("app", () => this, "PUBLIC"));
	}
	get automaticDataCollectionEnabled() {
		return this.checkDestroyed(), this._automaticDataCollectionEnabled;
	}
	set automaticDataCollectionEnabled(e) {
		this.checkDestroyed(), (this._automaticDataCollectionEnabled = e);
	}
	get name() {
		return this.checkDestroyed(), this._name;
	}
	get options() {
		return this.checkDestroyed(), this._options;
	}
	get config() {
		return this.checkDestroyed(), this._config;
	}
	get container() {
		return this._container;
	}
	get isDeleted() {
		return this._isDeleted;
	}
	set isDeleted(e) {
		this._isDeleted = e;
	}
	checkDestroyed() {
		if (this.isDeleted)
			throw d.create("app-deleted", { appName: this._name });
	}
} /**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Nt = dt;
function bt(t, e = {}) {
	let n = t;
	typeof e != "object" && (e = { name: e });
	const s = Object.assign({ name: v, automaticDataCollectionEnabled: !1 }, e),
		r = s.name;
	if (typeof r != "string" || !r)
		throw d.create("bad-app-name", { appName: String(r) });
	if ((n || (n = Y()), !n)) throw d.create("no-options");
	const a = m.get(r);
	if (a) {
		if (O(n, a.options) && O(s, a.config)) return a;
		throw d.create("duplicate-app", { appName: r });
	}
	const i = new Ie(r);
	for (const o of w.values()) i.addComponent(o);
	const c = new gt(n, s, i);
	return m.set(r, c), c;
}
function Lt(t = v) {
	const e = m.get(t);
	if (!e && t === v && Y()) return bt();
	if (!e) throw d.create("no-app", { appName: t });
	return e;
}
function $t() {
	return Array.from(m.values());
}
async function Rt(t) {
	const e = t.name;
	m.has(e) &&
		(m.delete(e),
		await Promise.all(t.container.getProviders().map((n) => n.delete())),
		(t.isDeleted = !0));
}
function I(t, e, n) {
	var s;
	let r = (s = ft[t]) !== null && s !== void 0 ? s : t;
	n && (r += `-${n}`);
	const a = r.match(/\s|\//),
		i = e.match(/\s|\//);
	if (a || i) {
		const c = [`Unable to register library "${r}" with version "${e}":`];
		a &&
			c.push(
				`library name "${r}" contains illegal characters (whitespace or "/")`,
			),
			a && i && c.push("and"),
			i &&
				c.push(
					`version name "${e}" contains illegal characters (whitespace or "/")`,
				),
			p.warn(c.join(" "));
		return;
	}
	L(new D(`${r}-version`, () => ({ library: r, version: e }), "VERSION"));
}
function Pt(t, e) {
	if (t !== null && typeof t != "function")
		throw d.create("invalid-log-argument");
	Ae(t, e);
}
function Ht(t) {
	Ce(t);
} /**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const _t = "firebase-heartbeat-database",
	Et = 1,
	b = "firebase-heartbeat-store";
let B = null;
function ee() {
	return (
		B ||
			(B = Pe(_t, Et, {
				upgrade: (t, e) => {
					switch (e) {
						case 0:
							try {
								t.createObjectStore(b);
							} catch (n) {
								console.warn(n);
							}
					}
				},
			}).catch((t) => {
				throw d.create("idb-open", { originalErrorMessage: t.message });
			})),
		B
	);
}
async function yt(t) {
	try {
		const n = (await ee()).transaction(b),
			s = await n.objectStore(b).get(te(t));
		return await n.done, s;
	} catch (e) {
		if (e instanceof _) p.warn(e.message);
		else {
			const n = d.create("idb-get", { originalErrorMessage: e?.message });
			p.warn(n.message);
		}
	}
}
async function k(t, e) {
	try {
		const s = (await ee()).transaction(b, "readwrite");
		await s.objectStore(b).put(e, te(t)), await s.done;
	} catch (n) {
		if (n instanceof _) p.warn(n.message);
		else {
			const s = d.create("idb-set", { originalErrorMessage: n?.message });
			p.warn(s.message);
		}
	}
}
function te(t) {
	return `${t.name}!${t.options.appId}`;
} /**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const It = 1024,
	Dt = 30 * 24 * 60 * 60 * 1e3;
class vt {
	constructor(e) {
		(this.container = e), (this._heartbeatsCache = null);
		const n = this.container.getProvider("app").getImmediate();
		(this._storage = new St(n)),
			(this._heartbeatsCachePromise = this._storage
				.read()
				.then((s) => ((this._heartbeatsCache = s), s)));
	}
	async triggerHeartbeat() {
		var e, n;
		const r = this.container
				.getProvider("platform-logger")
				.getImmediate()
				.getPlatformInfoString(),
			a = z();
		if (
			!(
				((e = this._heartbeatsCache) === null || e === void 0
					? void 0
					: e.heartbeats) == null &&
				((this._heartbeatsCache = await this._heartbeatsCachePromise),
				((n = this._heartbeatsCache) === null || n === void 0
					? void 0
					: n.heartbeats) == null)
			) &&
			!(
				this._heartbeatsCache.lastSentHeartbeatDate === a ||
				this._heartbeatsCache.heartbeats.some((i) => i.date === a)
			)
		)
			return (
				this._heartbeatsCache.heartbeats.push({ date: a, agent: r }),
				(this._heartbeatsCache.heartbeats =
					this._heartbeatsCache.heartbeats.filter((i) => {
						const c = new Date(i.date).valueOf();
						return Date.now() - c <= Dt;
					})),
				this._storage.overwrite(this._heartbeatsCache)
			);
	}
	async getHeartbeatsHeader() {
		var e;
		if (
			(this._heartbeatsCache === null &&
				(await this._heartbeatsCachePromise),
			((e = this._heartbeatsCache) === null || e === void 0
				? void 0
				: e.heartbeats) == null ||
				this._heartbeatsCache.heartbeats.length === 0)
		)
			return "";
		const n = z(),
			{ heartbeatsToSend: s, unsentEntries: r } = wt(
				this._heartbeatsCache.heartbeats,
			),
			a = J(JSON.stringify({ version: 2, heartbeats: s }));
		return (
			(this._heartbeatsCache.lastSentHeartbeatDate = n),
			r.length > 0
				? ((this._heartbeatsCache.heartbeats = r),
				  await this._storage.overwrite(this._heartbeatsCache))
				: ((this._heartbeatsCache.heartbeats = []),
				  this._storage.overwrite(this._heartbeatsCache)),
			a
		);
	}
}
function z() {
	return new Date().toISOString().substring(0, 10);
}
function wt(t, e = It) {
	const n = [];
	let s = t.slice();
	for (const r of t) {
		const a = n.find((i) => i.agent === r.agent);
		if (a) {
			if ((a.dates.push(r.date), W(n) > e)) {
				a.dates.pop();
				break;
			}
		} else if ((n.push({ agent: r.agent, dates: [r.date] }), W(n) > e)) {
			n.pop();
			break;
		}
		s = s.slice(1);
	}
	return { heartbeatsToSend: n, unsentEntries: s };
}
class St {
	constructor(e) {
		(this.app = e),
			(this._canUseIndexedDBPromise =
				this.runIndexedDBEnvironmentCheck());
	}
	async runIndexedDBEnvironmentCheck() {
		return ue()
			? pe()
					.then(() => !0)
					.catch(() => !1)
			: !1;
	}
	async read() {
		if (await this._canUseIndexedDBPromise) {
			const n = await yt(this.app);
			return n?.heartbeats ? n : { heartbeats: [] };
		} else return { heartbeats: [] };
	}
	async overwrite(e) {
		var n;
		if (await this._canUseIndexedDBPromise) {
			const r = await this.read();
			return k(this.app, {
				lastSentHeartbeatDate:
					(n = e.lastSentHeartbeatDate) !== null && n !== void 0
						? n
						: r.lastSentHeartbeatDate,
				heartbeats: e.heartbeats,
			});
		} else return;
	}
	async add(e) {
		var n;
		if (await this._canUseIndexedDBPromise) {
			const r = await this.read();
			return k(this.app, {
				lastSentHeartbeatDate:
					(n = e.lastSentHeartbeatDate) !== null && n !== void 0
						? n
						: r.lastSentHeartbeatDate,
				heartbeats: [...r.heartbeats, ...e.heartbeats],
			});
		} else return;
	}
}
function W(t) {
	return J(JSON.stringify({ version: 2, heartbeats: t })).length;
} /**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ct(t) {
	L(new D("platform-logger", (e) => new xe(e), "PRIVATE")),
		L(new D("heartbeat", (e) => new vt(e), "PRIVATE")),
		I(N, U, t),
		I(N, U, "esm2017"),
		I("fire-js", "");
}
Ct("");
var At = "firebase",
	Bt = "10.8.1"; /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
I(At, Bt, "app");
export {
	_ as FirebaseError,
	Nt as SDK_VERSION,
	v as _DEFAULT_ENTRY_NAME,
	ut as _addComponent,
	Ot as _addOrOverwriteComponent,
	m as _apps,
	Mt as _clearComponents,
	w as _components,
	pt as _getProvider,
	L as _registerComponent,
	Tt as _removeServiceInstance,
	Rt as deleteApp,
	Lt as getApp,
	$t as getApps,
	bt as initializeApp,
	Pt as onLog,
	I as registerVersion,
	Ht as setLogLevel,
};
//# sourceMappingURL=index.esm.B2_lNPIz.js.map
