Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const require__plugin_vue_export_helper = require("./assets/_plugin-vue_export-helper-C1TPHJvg.cjs");
let node_path = require("node:path");
//#region node_modules/unhead/node_modules/hookable/dist/index.mjs
function flatHooks(configHooks, hooks = {}, parentName) {
	for (const key in configHooks) {
		const subHook = configHooks[key];
		const name = parentName ? `${parentName}:${key}` : key;
		if (typeof subHook === "object" && subHook !== null) flatHooks(subHook, hooks, name);
		else if (typeof subHook === "function") hooks[name] = subHook;
	}
	return hooks;
}
var createTask = /* @__PURE__ */ (() => {
	if (console.createTask) return console.createTask;
	const defaultTask = { run: (fn) => fn() };
	return () => defaultTask;
})();
function callHooks$1(hooks, args, startIndex, task) {
	for (let i = startIndex; i < hooks.length; i += 1) try {
		const result = task ? task.run(() => hooks[i](...args)) : hooks[i](...args);
		if (result && typeof result.then === "function") return Promise.resolve(result).then(() => callHooks$1(hooks, args, i + 1, task));
	} catch (error) {
		return Promise.reject(error);
	}
}
function serialTaskCaller(hooks, args, name) {
	if (hooks.length > 0) return callHooks$1(hooks, args, 0, createTask(name));
}
function parallelTaskCaller(hooks, args, name) {
	if (hooks.length > 0) {
		const task = createTask(name);
		return Promise.all(hooks.map((hook) => task.run(() => hook(...args))));
	}
}
function callEachWith(callbacks, arg0) {
	for (const callback of [...callbacks]) callback(arg0);
}
var Hookable = class {
	_hooks;
	_before;
	_after;
	_deprecatedHooks;
	_deprecatedMessages;
	constructor() {
		this._hooks = {};
		this._before = void 0;
		this._after = void 0;
		this._deprecatedMessages = void 0;
		this._deprecatedHooks = {};
		this.hook = this.hook.bind(this);
		this.callHook = this.callHook.bind(this);
		this.callHookWith = this.callHookWith.bind(this);
	}
	hook(name, function_, options = {}) {
		if (!name || typeof function_ !== "function") return () => {};
		const originalName = name;
		let dep;
		while (this._deprecatedHooks[name]) {
			dep = this._deprecatedHooks[name];
			name = dep.to;
		}
		if (dep && !options.allowDeprecated) {
			let message = dep.message;
			if (!message) message = `${originalName} hook has been deprecated` + (dep.to ? `, please use ${dep.to}` : "");
			if (!this._deprecatedMessages) this._deprecatedMessages = /* @__PURE__ */ new Set();
			if (!this._deprecatedMessages.has(message)) {
				console.warn(message);
				this._deprecatedMessages.add(message);
			}
		}
		if (!function_.name) try {
			Object.defineProperty(function_, "name", {
				get: () => "_" + name.replace(/\W+/g, "_") + "_hook_cb",
				configurable: true
			});
		} catch {}
		this._hooks[name] = this._hooks[name] || [];
		this._hooks[name].push(function_);
		return () => {
			if (function_) {
				this.removeHook(name, function_);
				function_ = void 0;
			}
		};
	}
	hookOnce(name, function_) {
		let _unreg;
		let _function = (...arguments_) => {
			if (typeof _unreg === "function") _unreg();
			_unreg = void 0;
			_function = void 0;
			return function_(...arguments_);
		};
		_unreg = this.hook(name, _function);
		return _unreg;
	}
	removeHook(name, function_) {
		const hooks = this._hooks[name];
		if (hooks) {
			const index = hooks.indexOf(function_);
			if (index !== -1) hooks.splice(index, 1);
			if (hooks.length === 0) this._hooks[name] = void 0;
		}
	}
	clearHook(name) {
		this._hooks[name] = void 0;
	}
	deprecateHook(name, deprecated) {
		this._deprecatedHooks[name] = typeof deprecated === "string" ? { to: deprecated } : deprecated;
		const _hooks = this._hooks[name] || [];
		this._hooks[name] = void 0;
		for (const hook of _hooks) this.hook(name, hook);
	}
	deprecateHooks(deprecatedHooks) {
		for (const name in deprecatedHooks) this.deprecateHook(name, deprecatedHooks[name]);
	}
	addHooks(configHooks) {
		const hooks = flatHooks(configHooks);
		const removeFns = Object.keys(hooks).map((key) => this.hook(key, hooks[key]));
		return () => {
			for (const unreg of removeFns) unreg();
			removeFns.length = 0;
		};
	}
	removeHooks(configHooks) {
		const hooks = flatHooks(configHooks);
		for (const key in hooks) this.removeHook(key, hooks[key]);
	}
	removeAllHooks() {
		this._hooks = {};
	}
	callHook(name, ...args) {
		return this.callHookWith(serialTaskCaller, name, args);
	}
	callHookParallel(name, ...args) {
		return this.callHookWith(parallelTaskCaller, name, args);
	}
	callHookWith(caller, name, args) {
		const event = this._before || this._after ? {
			name,
			args,
			context: {}
		} : void 0;
		if (this._before) callEachWith(this._before, event);
		const result = caller(this._hooks[name] ? [...this._hooks[name]] : [], args, name);
		if (result instanceof Promise) return result.finally(() => {
			if (this._after && event) callEachWith(this._after, event);
		});
		if (this._after && event) callEachWith(this._after, event);
		return result;
	}
	beforeEach(function_) {
		this._before = this._before || [];
		this._before.push(function_);
		return () => {
			if (this._before !== void 0) {
				const index = this._before.indexOf(function_);
				if (index !== -1) this._before.splice(index, 1);
			}
		};
	}
	afterEach(function_) {
		this._after = this._after || [];
		this._after.push(function_);
		return () => {
			if (this._after !== void 0) {
				const index = this._after.indexOf(function_);
				if (index !== -1) this._after.splice(index, 1);
			}
		};
	}
};
function createHooks() {
	return new Hookable();
}
//#endregion
//#region node_modules/unhead/dist/shared/unhead.yem5I2v_.mjs
var SelfClosingTags = /* @__PURE__ */ new Set([
	"meta",
	"link",
	"base"
]);
var DupeableTags = /* @__PURE__ */ new Set([
	"link",
	"style",
	"script",
	"noscript"
]);
var TagsWithInnerContent = /* @__PURE__ */ new Set([
	"title",
	"titleTemplate",
	"script",
	"style",
	"noscript"
]);
var HasElementTags = /* @__PURE__ */ new Set([
	"base",
	"meta",
	"link",
	"style",
	"script",
	"noscript"
]);
var ValidHeadTags = /* @__PURE__ */ new Set([
	"title",
	"base",
	"htmlAttrs",
	"bodyAttrs",
	"meta",
	"link",
	"style",
	"script",
	"noscript"
]);
var UniqueTags = /* @__PURE__ */ new Set([
	"base",
	"title",
	"titleTemplate",
	"bodyAttrs",
	"htmlAttrs",
	"templateParams"
]);
var TagConfigKeys = /* @__PURE__ */ new Set([
	"key",
	"tagPosition",
	"tagPriority",
	"tagDuplicateStrategy",
	"innerHTML",
	"textContent",
	"processTemplateParams"
]);
var UsesMergeStrategy = /* @__PURE__ */ new Set([
	"templateParams",
	"htmlAttrs",
	"bodyAttrs"
]);
var MetaTagsArrayable = /* @__PURE__ */ new Set([
	"theme-color",
	"google-site-verification",
	"og",
	"article",
	"book",
	"profile",
	"twitter",
	"author"
]);
//#endregion
//#region node_modules/unhead/dist/shared/unhead.B3VbJo7Y.mjs
var allowedMetaProperties = [
	"name",
	"property",
	"http-equiv"
];
var StandardSingleMetaTags = /* @__PURE__ */ new Set([
	"viewport",
	"description",
	"keywords",
	"robots"
]);
function isMetaArrayDupeKey(v) {
	const parts = v.split(":");
	if (!parts.length) return false;
	return MetaTagsArrayable.has(parts[1]);
}
function dedupeKey(tag) {
	const { props, tag: name } = tag;
	if (UniqueTags.has(name)) return name;
	if (name === "link" && props.rel === "canonical") return "canonical";
	if (name === "link" && props.rel === "alternate") {
		if (props.hreflang) return `alternate:${props.hreflang}`;
		if (props.type) return `alternate:${props.type}:${props.href || ""}`;
	}
	if (props.charset) return "charset";
	if (tag.tag === "meta") {
		for (const n of allowedMetaProperties) if (props[n] !== void 0) {
			const propValue = props[n];
			const isStructured = propValue && typeof propValue === "string" && propValue.includes(":");
			const isStandardSingle = propValue && StandardSingleMetaTags.has(propValue);
			return `${name}:${propValue}${!(isStructured || isStandardSingle) && tag.key ? `:key:${tag.key}` : ""}`;
		}
	}
	if (tag.key) return `${name}:key:${tag.key}`;
	if (props.id) return `${name}:id:${props.id}`;
	if (name === "link" && props.rel === "alternate") return `alternate:${props.href || ""}`;
	if (TagsWithInnerContent.has(name)) {
		const v = tag.textContent || tag.innerHTML;
		if (v) return `${name}:content:${v}`;
	}
}
function hashTag(tag) {
	const dedupe = tag._h || tag._d;
	if (dedupe) return dedupe;
	const inner = tag.textContent || tag.innerHTML;
	if (inner) return inner;
	return `${tag.tag}:${Object.entries(tag.props).map(([k, v]) => `${k}:${String(v)}`).join(",")}`;
}
function walkResolver(val, resolve, key) {
	if (typeof val === "function") {
		if (!key || key !== "titleTemplate" && !(key[0] === "o" && key[1] === "n")) val = val();
	}
	const v = resolve ? resolve(key, val) : val;
	if (Array.isArray(v)) return v.map((r) => walkResolver(r, resolve));
	if (v?.constructor === Object) {
		const next = {};
		for (const k of Object.keys(v)) next[k] = walkResolver(v[k], resolve, k);
		return next;
	}
	return v;
}
function normalizeStyleClassProps(key, value) {
	const store = key === "style" ? /* @__PURE__ */ new Map() : /* @__PURE__ */ new Set();
	function processValue(rawValue) {
		if (rawValue == null || rawValue === void 0) return;
		const value2 = String(rawValue).trim();
		if (!value2) return;
		if (key === "style") {
			const [k, ...v] = value2.split(":").map((s) => s ? s.trim() : "");
			if (k && v.length) store.set(k, v.join(":"));
		} else value2.split(" ").filter(Boolean).forEach((c) => store.add(c));
	}
	if (typeof value === "string") key === "style" ? value.split(";").forEach(processValue) : processValue(value);
	else if (Array.isArray(value)) value.forEach((item) => processValue(item));
	else if (value && typeof value === "object") Object.entries(value).forEach(([k, v]) => {
		if (v && v !== "false") key === "style" ? store.set(String(k).trim(), String(v)) : processValue(k);
	});
	return store;
}
function normalizeProps(tag, input) {
	tag.props = tag.props || {};
	if (!input) return tag;
	if (tag.tag === "templateParams") {
		tag.props = input;
		return tag;
	}
	const isHtmlTag = HasElementTags.has(tag.tag) || tag.tag === "htmlAttrs" || tag.tag === "bodyAttrs";
	Object.entries(input).forEach(([prop, value]) => {
		if (prop === "__proto__" || prop === "constructor" || prop === "prototype") return;
		if (value === null) {
			tag.props[prop] = null;
			return;
		}
		if (prop === "class" || prop === "style") {
			tag.props[prop] = normalizeStyleClassProps(prop, value);
			return;
		}
		if (TagConfigKeys.has(prop)) {
			if ((prop === "textContent" || prop === "innerHTML") && typeof value === "object") {
				let type = input.type;
				if (!input.type) type = "application/json";
				if (!type?.endsWith("json") && type !== "speculationrules") return;
				input.type = type;
				tag.props.type = type;
				tag[prop] = JSON.stringify(value);
			} else tag[prop] = value;
			return;
		}
		const isDataKey = prop.startsWith("data-");
		const key = isHtmlTag && !isDataKey ? prop.toLowerCase() : prop;
		const strValue = String(value);
		const isMetaContentKey = tag.tag === "meta" && key === "content";
		if (strValue === "true" || strValue === "") tag.props[key] = isDataKey || isMetaContentKey ? strValue : true;
		else if (!value && isDataKey && strValue === "false") tag.props[key] = "false";
		else if (value !== void 0) tag.props[key] = value;
	});
	return tag;
}
function normalizeTag(tagName, _input) {
	const tag = normalizeProps({
		tag: tagName,
		props: {}
	}, typeof _input === "object" && typeof _input !== "function" ? _input : { [tagName === "script" || tagName === "noscript" || tagName === "style" ? "innerHTML" : "textContent"]: _input });
	if (tag.key && DupeableTags.has(tag.tag)) tag.props["data-hid"] = tag._h = tag.key;
	if (tag.tag === "script" && typeof tag.innerHTML === "object") {
		tag.innerHTML = JSON.stringify(tag.innerHTML);
		tag.props.type = tag.props.type || "application/json";
	}
	return Array.isArray(tag.props.content) ? tag.props.content.map((v) => ({
		...tag,
		props: {
			...tag.props,
			content: v
		}
	})) : tag;
}
function normalizeEntryToTags(input, propResolvers) {
	if (!input) return [];
	if (typeof input === "function") input = input();
	const resolvers = (key, val) => {
		for (let i = 0; i < propResolvers.length; i++) val = propResolvers[i](key, val);
		return val;
	};
	input = resolvers(void 0, input);
	const tags = [];
	input = walkResolver(input, resolvers);
	Object.entries(input || {}).forEach(([key, value]) => {
		if (value === void 0) return;
		for (const v of Array.isArray(value) ? value : [value]) tags.push(normalizeTag(key, v));
	});
	return tags.flat();
}
//#endregion
//#region node_modules/unhead/dist/shared/unhead.CbpEuj3y.mjs
var sortTags = (a, b) => a._w === b._w ? a._p - b._p : a._w - b._w;
var TAG_WEIGHTS = {
	base: -10,
	title: 10
};
var TAG_ALIASES = {
	critical: -8,
	high: -1,
	low: 2
};
var WEIGHT_MAP = {
	meta: {
		"content-security-policy": -30,
		"charset": -20,
		"viewport": -15
	},
	link: {
		"preconnect": 20,
		"stylesheet": 60,
		"preload": 70,
		"modulepreload": 70,
		"prefetch": 90,
		"dns-prefetch": 90,
		"prerender": 90
	},
	script: {
		async: 30,
		defer: 80,
		sync: 50
	},
	style: {
		imported: 40,
		sync: 60
	}
};
var ImportStyleRe = /@import/;
var isTruthy = (val) => val === "" || val === true;
function tagWeight(head, tag) {
	if (typeof tag.tagPriority === "number") return tag.tagPriority;
	let weight = 100;
	const offset = TAG_ALIASES[tag.tagPriority] || 0;
	const weightMap = head.resolvedOptions.disableCapoSorting ? {
		link: {},
		script: {},
		style: {}
	} : WEIGHT_MAP;
	if (tag.tag in TAG_WEIGHTS) weight = TAG_WEIGHTS[tag.tag];
	else if (tag.tag === "meta") {
		const metaType = tag.props["http-equiv"] === "content-security-policy" ? "content-security-policy" : tag.props.charset ? "charset" : tag.props.name === "viewport" ? "viewport" : null;
		if (metaType) weight = WEIGHT_MAP.meta[metaType];
	} else if (tag.tag === "link" && tag.props.rel) weight = weightMap.link[tag.props.rel];
	else if (tag.tag === "script") {
		const type = String(tag.props.type);
		if (isTruthy(tag.props.async)) weight = weightMap.script.async;
		else if (tag.props.src && !isTruthy(tag.props.defer) && !isTruthy(tag.props.async) && type !== "module" && !type.endsWith("json") || tag.innerHTML && !type.endsWith("json")) weight = weightMap.script.sync;
		else if (isTruthy(tag.props.defer) && tag.props.src && !isTruthy(tag.props.async) || type === "module") weight = weightMap.script.defer;
	} else if (tag.tag === "style") weight = tag.innerHTML && ImportStyleRe.test(tag.innerHTML) ? weightMap.style.imported : weightMap.style.sync;
	return (weight || 100) + offset;
}
//#endregion
//#region node_modules/unhead/dist/shared/unhead.CaI5ZD4O.mjs
function registerPlugin(head, p) {
	const plugin = typeof p === "function" ? p(head) : p;
	const key = plugin.key || String(head.plugins.size + 1);
	if (!head.plugins.get(key)) {
		head.plugins.set(key, plugin);
		head.hooks.addHooks(plugin.hooks || {});
	}
}
// @__NO_SIDE_EFFECTS__
function createUnhead(resolvedOptions = {}) {
	const hooks = createHooks();
	hooks.addHooks(resolvedOptions.hooks || {});
	const ssr = !resolvedOptions.document;
	const entries = /* @__PURE__ */ new Map();
	const plugins = /* @__PURE__ */ new Map();
	const normalizeQueue = /* @__PURE__ */ new Set();
	const head = {
		_entryCount: 1,
		plugins,
		dirty: false,
		resolvedOptions,
		hooks,
		ssr,
		entries,
		headEntries() {
			return [...entries.values()];
		},
		use: (p) => registerPlugin(head, p),
		push(input, _options) {
			const options = { ..._options || {} };
			delete options.head;
			const _i = options._index ?? head._entryCount++;
			const inst = {
				_i,
				input,
				options
			};
			const _ = {
				_poll(rm = false) {
					head.dirty = true;
					!rm && normalizeQueue.add(_i);
					hooks.callHook("entries:updated", head);
				},
				dispose() {
					if (entries.delete(_i)) head.invalidate();
				},
				patch(input2) {
					if (!options.mode || options.mode === "server" && ssr || options.mode === "client" && !ssr) {
						inst.input = input2;
						entries.set(_i, inst);
						_._poll();
					}
				}
			};
			_.patch(input);
			return _;
		},
		async resolveTags() {
			const ctx = {
				tagMap: /* @__PURE__ */ new Map(),
				tags: [],
				entries: [...head.entries.values()]
			};
			await hooks.callHook("entries:resolve", ctx);
			while (normalizeQueue.size) {
				const i = normalizeQueue.values().next().value;
				normalizeQueue.delete(i);
				const e = entries.get(i);
				if (e) {
					const normalizeCtx = {
						tags: normalizeEntryToTags(e.input, resolvedOptions.propResolvers || []).map((t) => Object.assign(t, e.options)),
						entry: e
					};
					await hooks.callHook("entries:normalize", normalizeCtx);
					e._tags = normalizeCtx.tags.map((t, i2) => {
						t._w = tagWeight(head, t);
						t._p = (e._i << 10) + i2;
						t._d = dedupeKey(t);
						if (!t._d) t._h = hashTag(t);
						return t;
					});
				}
			}
			let hasFlatMeta = false;
			ctx.entries.flatMap((e) => (e._tags || []).map((t) => ({
				...t,
				props: { ...t.props }
			}))).sort(sortTags).reduce((acc, next) => {
				const k = next._d || next._h;
				if (!acc.has(k)) return acc.set(k, next);
				const prev = acc.get(k);
				if ((next?.tagDuplicateStrategy || (UsesMergeStrategy.has(next.tag) ? "merge" : null) || (next.key && next.key === prev.key ? "merge" : null)) === "merge") {
					const newProps = { ...prev.props };
					Object.entries(next.props).forEach(([p, v]) => newProps[p] = p === "style" ? new Map([...prev.props.style || /* @__PURE__ */ new Map(), ...v]) : p === "class" ? /* @__PURE__ */ new Set([...prev.props.class || /* @__PURE__ */ new Set(), ...v]) : v);
					acc.set(k, {
						...next,
						props: newProps
					});
				} else if (next._p >> 10 === prev._p >> 10 && next.tag === "meta" && isMetaArrayDupeKey(k)) {
					acc.set(k, Object.assign([...Array.isArray(prev) ? prev : [prev], next], next));
					hasFlatMeta = true;
				} else if (next._w === prev._w ? next._p > prev._p : next?._w < prev?._w) acc.set(k, next);
				return acc;
			}, ctx.tagMap);
			const title = ctx.tagMap.get("title");
			const titleTemplate = ctx.tagMap.get("titleTemplate");
			head._title = title?.textContent;
			if (titleTemplate) {
				const titleTemplateFn = titleTemplate?.textContent;
				head._titleTemplate = titleTemplateFn;
				if (titleTemplateFn) {
					let newTitle = typeof titleTemplateFn === "function" ? titleTemplateFn(title?.textContent) : titleTemplateFn;
					if (typeof newTitle === "string" && !head.plugins.has("template-params")) newTitle = newTitle.replace("%s", title?.textContent || "");
					if (title) newTitle === null ? ctx.tagMap.delete("title") : ctx.tagMap.set("title", {
						...title,
						textContent: newTitle
					});
					else {
						titleTemplate.tag = "title";
						titleTemplate.textContent = newTitle;
					}
				}
			}
			ctx.tags = Array.from(ctx.tagMap.values());
			if (hasFlatMeta) ctx.tags = ctx.tags.flat().sort(sortTags);
			await hooks.callHook("tags:beforeResolve", ctx);
			await hooks.callHook("tags:resolve", ctx);
			await hooks.callHook("tags:afterResolve", ctx);
			const finalTags = [];
			for (const t of ctx.tags) {
				const { innerHTML, tag, props } = t;
				if (!ValidHeadTags.has(tag)) continue;
				if (Object.keys(props).length === 0 && !t.innerHTML && !t.textContent) continue;
				if (tag === "meta" && !props.content && !props["http-equiv"] && !props.charset) continue;
				if (tag === "script" && innerHTML) {
					if (String(props.type).endsWith("json")) t.innerHTML = (typeof innerHTML === "string" ? innerHTML : JSON.stringify(innerHTML)).replace(/</g, "\\u003C");
					else if (typeof innerHTML === "string") t.innerHTML = innerHTML.replace(new RegExp(`</${tag}`, "g"), `<\\/${tag}`);
					t._d = dedupeKey(t);
				}
				finalTags.push(t);
			}
			return finalTags;
		},
		invalidate() {
			for (const entry of entries.values()) normalizeQueue.add(entry._i);
			head.dirty = true;
			hooks.callHook("entries:updated", head);
		}
	};
	(resolvedOptions?.plugins || []).forEach((p) => registerPlugin(head, p));
	head.hooks.callHook("init", head);
	resolvedOptions.init?.forEach((e) => e && head.push(e));
	return head;
}
//#endregion
//#region node_modules/unhead/dist/server.mjs
// @__NO_SIDE_EFFECTS__
function createHead$1(options = {}) {
	const unhead = /* @__PURE__ */ createUnhead({
		...options,
		document: false,
		propResolvers: [...options.propResolvers || [], (k, v) => {
			if (k && k.startsWith("on") && typeof v === "function") return `this.dataset.${k}fired = true`;
			return v;
		}],
		init: [options.disableDefaults ? void 0 : {
			htmlAttrs: { lang: "en" },
			meta: [{ charset: "utf-8" }, {
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			}]
		}, ...options.init || []]
	});
	unhead._ssrPayload = {};
	unhead.use({
		key: "server",
		hooks: { "tags:resolve": function(ctx) {
			const title = ctx.tagMap.get("title");
			const titleTemplate = ctx.tagMap.get("titleTemplate");
			let payload = {
				title: title?.mode === "server" ? unhead._title : void 0,
				titleTemplate: titleTemplate?.mode === "server" ? unhead._titleTemplate : void 0
			};
			if (Object.keys(unhead._ssrPayload || {}).length > 0) payload = {
				...unhead._ssrPayload,
				...payload
			};
			if (Object.values(payload).some(Boolean)) ctx.tags.push({
				tag: "script",
				innerHTML: JSON.stringify(payload),
				props: {
					id: "unhead:payload",
					type: "application/json"
				}
			});
		} }
	});
	return unhead;
}
function encodeAttribute(value) {
	return String(value).replace(/"/g, "&quot;");
}
function propsToString(props) {
	let attrs = "";
	for (const key in props) {
		if (!Object.hasOwn(props, key)) continue;
		let value = props[key];
		if ((key === "class" || key === "style") && typeof value !== "string") value = key === "class" ? Array.from(value).join(" ") : Array.from(value).map(([k, v]) => `${k}:${v}`).join(";");
		if (value !== false && value !== null) attrs += value === true ? ` ${key}` : ` ${key}="${encodeAttribute(value)}"`;
	}
	return attrs;
}
function escapeHtml$1(str) {
	return str.replace(/[&<>"'/]/g, (char) => {
		switch (char) {
			case "&": return "&amp;";
			case "<": return "&lt;";
			case ">": return "&gt;";
			case "\"": return "&quot;";
			case "'": return "&#x27;";
			case "/": return "&#x2F;";
			default: return char;
		}
	});
}
function tagToString(tag) {
	const attrs = propsToString(tag.props);
	const openTag = `<${tag.tag}${attrs}>`;
	if (!TagsWithInnerContent.has(tag.tag)) return SelfClosingTags.has(tag.tag) ? openTag : `${openTag}</${tag.tag}>`;
	let content = String(tag.textContent || tag.innerHTML || "");
	content = tag.tag === "title" ? escapeHtml$1(content) : content.replace(new RegExp(`</${tag.tag}`, "gi"), `<\\/${tag.tag}`);
	return SelfClosingTags.has(tag.tag) ? openTag : `${openTag}${content}</${tag.tag}>`;
}
function ssrRenderTags(tags, options) {
	const schema = {
		htmlAttrs: {},
		bodyAttrs: {},
		tags: {
			head: "",
			bodyClose: "",
			bodyOpen: ""
		}
	};
	const lineBreaks = !options?.omitLineBreaks ? "\n" : "";
	for (const tag of tags) {
		if (tag.tag === "htmlAttrs" || tag.tag === "bodyAttrs") {
			Object.assign(schema[tag.tag], tag.props);
			continue;
		}
		const s = tagToString(tag);
		const tagPosition = tag.tagPosition || "head";
		schema.tags[tagPosition] += schema.tags[tagPosition] ? `${lineBreaks}${s}` : s;
	}
	return {
		headTags: schema.tags.head,
		bodyTags: schema.tags.bodyClose,
		bodyTagsOpen: schema.tags.bodyOpen,
		htmlAttrs: propsToString(schema.htmlAttrs),
		bodyAttrs: propsToString(schema.bodyAttrs)
	};
}
// @__NO_SIDE_EFFECTS__
async function renderSSRHead(head, options) {
	const beforeRenderCtx = { shouldRender: true };
	await head.hooks.callHook("ssr:beforeRender", beforeRenderCtx);
	if (!beforeRenderCtx.shouldRender) return {
		headTags: "",
		bodyTags: "",
		bodyTagsOpen: "",
		htmlAttrs: "",
		bodyAttrs: ""
	};
	const ctx = { tags: options?.resolvedTags || await head.resolveTags() };
	await head.hooks.callHook("ssr:render", ctx);
	const html = ssrRenderTags(ctx.tags, options);
	const renderCtx = {
		tags: ctx.tags,
		html
	};
	await head.hooks.callHook("ssr:rendered", renderCtx);
	return renderCtx.html;
}
//#endregion
//#region node_modules/@unhead/vue/dist/shared/vue.N9zWjxoK.mjs
var VueResolver = (_, value) => {
	return (0, require__plugin_vue_export_helper.vue_exports.isRef)(value) ? (0, require__plugin_vue_export_helper.vue_exports.toValue)(value) : value;
};
//#endregion
//#region node_modules/@unhead/vue/dist/shared/vue.Cr7xSEtD.mjs
var headSymbol = "usehead";
// @__NO_SIDE_EFFECTS__
function vueInstall(head) {
	return { install(app) {
		app.config.globalProperties.$unhead = head;
		app.config.globalProperties.$head = head;
		app.provide(headSymbol, head);
	} }.install;
}
// @__NO_SIDE_EFFECTS__
function injectHead() {
	if ((0, require__plugin_vue_export_helper.vue_exports.hasInjectionContext)()) {
		const instance = (0, require__plugin_vue_export_helper.vue_exports.inject)(headSymbol);
		if (instance) return instance;
	}
	throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.");
}
function useHead(input, options = {}) {
	const head = options.head || /* @__PURE__ */ injectHead();
	return head.ssr ? head.push(input || {}, options) : clientUseHead(head, input, options);
}
function clientUseHead(head, input, options = {}) {
	const deactivated = (0, require__plugin_vue_export_helper.vue_exports.ref)(false);
	let entry;
	(0, require__plugin_vue_export_helper.vue_exports.watchEffect)(() => {
		const i = deactivated.value ? {} : walkResolver(input, VueResolver);
		if (entry) entry.patch(i);
		else entry = head.push(i, options);
	});
	if ((0, require__plugin_vue_export_helper.vue_exports.getCurrentInstance)()) {
		(0, require__plugin_vue_export_helper.vue_exports.onBeforeUnmount)(() => {
			entry.dispose();
		});
		(0, require__plugin_vue_export_helper.vue_exports.onDeactivated)(() => {
			deactivated.value = true;
		});
		(0, require__plugin_vue_export_helper.vue_exports.onActivated)(() => {
			deactivated.value = false;
		});
	}
	return entry;
}
//#endregion
//#region node_modules/@unhead/vue/dist/shared/vue.BM998iwd.mjs
var VueHeadMixin = { created() {
	let source = false;
	const instance = (0, require__plugin_vue_export_helper.vue_exports.getCurrentInstance)();
	if (!instance) return;
	const options = instance.type;
	if (!options || !("head" in options)) return;
	source = typeof options.head === "function" ? () => options.head.call(instance.proxy) : options.head;
	source && useHead(source);
} };
//#endregion
//#region node_modules/@unhead/vue/dist/server.mjs
// @__NO_SIDE_EFFECTS__
function createHead(options = {}) {
	const head = /* @__PURE__ */ createHead$1({
		...options,
		propResolvers: [VueResolver]
	});
	head.install = /* @__PURE__ */ vueInstall(head);
	return head;
}
//#endregion
//#region node_modules/pako/dist/pako.esm.mjs
/*! pako 2.1.0 https://github.com/nodeca/pako @license (MIT AND Zlib) */
var Z_FIXED$1 = 4;
var Z_BINARY = 0;
var Z_TEXT = 1;
var Z_UNKNOWN$1 = 2;
function zero$1(buf) {
	let len = buf.length;
	while (--len >= 0) buf[len] = 0;
}
var STORED_BLOCK = 0;
var STATIC_TREES = 1;
var DYN_TREES = 2;
var LENGTH_CODES$1 = 29;
var LITERALS$1 = 256;
var L_CODES$1 = 286;
var D_CODES$1 = 30;
var BL_CODES$1 = 19;
var HEAP_SIZE$1 = 573;
var MAX_BITS$1 = 15;
var Buf_size = 16;
var MAX_BL_BITS = 7;
var END_BLOCK = 256;
var REP_3_6 = 16;
var REPZ_3_10 = 17;
var REPZ_11_138 = 18;
var extra_lbits = new Uint8Array([
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	1,
	1,
	1,
	1,
	2,
	2,
	2,
	2,
	3,
	3,
	3,
	3,
	4,
	4,
	4,
	4,
	5,
	5,
	5,
	5,
	0
]);
var extra_dbits = new Uint8Array([
	0,
	0,
	0,
	0,
	1,
	1,
	2,
	2,
	3,
	3,
	4,
	4,
	5,
	5,
	6,
	6,
	7,
	7,
	8,
	8,
	9,
	9,
	10,
	10,
	11,
	11,
	12,
	12,
	13,
	13
]);
var extra_blbits = new Uint8Array([
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	2,
	3,
	7
]);
var bl_order = new Uint8Array([
	16,
	17,
	18,
	0,
	8,
	7,
	9,
	6,
	10,
	5,
	11,
	4,
	12,
	3,
	13,
	2,
	14,
	1,
	15
]);
var DIST_CODE_LEN = 512;
var static_ltree = new Array(288 * 2);
zero$1(static_ltree);
var static_dtree = new Array(D_CODES$1 * 2);
zero$1(static_dtree);
var _dist_code = new Array(DIST_CODE_LEN);
zero$1(_dist_code);
var _length_code = new Array(256);
zero$1(_length_code);
var base_length = new Array(LENGTH_CODES$1);
zero$1(base_length);
var base_dist = new Array(D_CODES$1);
zero$1(base_dist);
function StaticTreeDesc(static_tree, extra_bits, extra_base, elems, max_length) {
	this.static_tree = static_tree;
	this.extra_bits = extra_bits;
	this.extra_base = extra_base;
	this.elems = elems;
	this.max_length = max_length;
	this.has_stree = static_tree && static_tree.length;
}
var static_l_desc;
var static_d_desc;
var static_bl_desc;
function TreeDesc(dyn_tree, stat_desc) {
	this.dyn_tree = dyn_tree;
	this.max_code = 0;
	this.stat_desc = stat_desc;
}
var d_code = (dist) => {
	return dist < 256 ? _dist_code[dist] : _dist_code[256 + (dist >>> 7)];
};
var put_short = (s, w) => {
	s.pending_buf[s.pending++] = w & 255;
	s.pending_buf[s.pending++] = w >>> 8 & 255;
};
var send_bits = (s, value, length) => {
	if (s.bi_valid > Buf_size - length) {
		s.bi_buf |= value << s.bi_valid & 65535;
		put_short(s, s.bi_buf);
		s.bi_buf = value >> Buf_size - s.bi_valid;
		s.bi_valid += length - Buf_size;
	} else {
		s.bi_buf |= value << s.bi_valid & 65535;
		s.bi_valid += length;
	}
};
var send_code = (s, c, tree) => {
	send_bits(s, tree[c * 2], tree[c * 2 + 1]);
};
var bi_reverse = (code, len) => {
	let res = 0;
	do {
		res |= code & 1;
		code >>>= 1;
		res <<= 1;
	} while (--len > 0);
	return res >>> 1;
};
var bi_flush = (s) => {
	if (s.bi_valid === 16) {
		put_short(s, s.bi_buf);
		s.bi_buf = 0;
		s.bi_valid = 0;
	} else if (s.bi_valid >= 8) {
		s.pending_buf[s.pending++] = s.bi_buf & 255;
		s.bi_buf >>= 8;
		s.bi_valid -= 8;
	}
};
var gen_bitlen = (s, desc) => {
	const tree = desc.dyn_tree;
	const max_code = desc.max_code;
	const stree = desc.stat_desc.static_tree;
	const has_stree = desc.stat_desc.has_stree;
	const extra = desc.stat_desc.extra_bits;
	const base = desc.stat_desc.extra_base;
	const max_length = desc.stat_desc.max_length;
	let h;
	let n, m;
	let bits;
	let xbits;
	let f;
	let overflow = 0;
	for (bits = 0; bits <= MAX_BITS$1; bits++) s.bl_count[bits] = 0;
	tree[s.heap[s.heap_max] * 2 + 1] = 0;
	for (h = s.heap_max + 1; h < HEAP_SIZE$1; h++) {
		n = s.heap[h];
		bits = tree[tree[n * 2 + 1] * 2 + 1] + 1;
		if (bits > max_length) {
			bits = max_length;
			overflow++;
		}
		tree[n * 2 + 1] = bits;
		if (n > max_code) continue;
		s.bl_count[bits]++;
		xbits = 0;
		if (n >= base) xbits = extra[n - base];
		f = tree[n * 2];
		s.opt_len += f * (bits + xbits);
		if (has_stree) s.static_len += f * (stree[n * 2 + 1] + xbits);
	}
	if (overflow === 0) return;
	do {
		bits = max_length - 1;
		while (s.bl_count[bits] === 0) bits--;
		s.bl_count[bits]--;
		s.bl_count[bits + 1] += 2;
		s.bl_count[max_length]--;
		overflow -= 2;
	} while (overflow > 0);
	for (bits = max_length; bits !== 0; bits--) {
		n = s.bl_count[bits];
		while (n !== 0) {
			m = s.heap[--h];
			if (m > max_code) continue;
			if (tree[m * 2 + 1] !== bits) {
				s.opt_len += (bits - tree[m * 2 + 1]) * tree[m * 2];
				tree[m * 2 + 1] = bits;
			}
			n--;
		}
	}
};
var gen_codes = (tree, max_code, bl_count) => {
	const next_code = new Array(16);
	let code = 0;
	let bits;
	let n;
	for (bits = 1; bits <= MAX_BITS$1; bits++) {
		code = code + bl_count[bits - 1] << 1;
		next_code[bits] = code;
	}
	for (n = 0; n <= max_code; n++) {
		let len = tree[n * 2 + 1];
		if (len === 0) continue;
		tree[n * 2] = bi_reverse(next_code[len]++, len);
	}
};
var tr_static_init = () => {
	let n;
	let bits;
	let length;
	let code;
	let dist;
	const bl_count = new Array(16);
	length = 0;
	for (code = 0; code < LENGTH_CODES$1 - 1; code++) {
		base_length[code] = length;
		for (n = 0; n < 1 << extra_lbits[code]; n++) _length_code[length++] = code;
	}
	_length_code[length - 1] = code;
	dist = 0;
	for (code = 0; code < 16; code++) {
		base_dist[code] = dist;
		for (n = 0; n < 1 << extra_dbits[code]; n++) _dist_code[dist++] = code;
	}
	dist >>= 7;
	for (; code < D_CODES$1; code++) {
		base_dist[code] = dist << 7;
		for (n = 0; n < 1 << extra_dbits[code] - 7; n++) _dist_code[256 + dist++] = code;
	}
	for (bits = 0; bits <= MAX_BITS$1; bits++) bl_count[bits] = 0;
	n = 0;
	while (n <= 143) {
		static_ltree[n * 2 + 1] = 8;
		n++;
		bl_count[8]++;
	}
	while (n <= 255) {
		static_ltree[n * 2 + 1] = 9;
		n++;
		bl_count[9]++;
	}
	while (n <= 279) {
		static_ltree[n * 2 + 1] = 7;
		n++;
		bl_count[7]++;
	}
	while (n <= 287) {
		static_ltree[n * 2 + 1] = 8;
		n++;
		bl_count[8]++;
	}
	gen_codes(static_ltree, 287, bl_count);
	for (n = 0; n < D_CODES$1; n++) {
		static_dtree[n * 2 + 1] = 5;
		static_dtree[n * 2] = bi_reverse(n, 5);
	}
	static_l_desc = new StaticTreeDesc(static_ltree, extra_lbits, 257, L_CODES$1, MAX_BITS$1);
	static_d_desc = new StaticTreeDesc(static_dtree, extra_dbits, 0, D_CODES$1, MAX_BITS$1);
	static_bl_desc = new StaticTreeDesc(new Array(0), extra_blbits, 0, BL_CODES$1, MAX_BL_BITS);
};
var init_block = (s) => {
	let n;
	for (n = 0; n < L_CODES$1; n++) s.dyn_ltree[n * 2] = 0;
	for (n = 0; n < D_CODES$1; n++) s.dyn_dtree[n * 2] = 0;
	for (n = 0; n < BL_CODES$1; n++) s.bl_tree[n * 2] = 0;
	s.dyn_ltree[END_BLOCK * 2] = 1;
	s.opt_len = s.static_len = 0;
	s.sym_next = s.matches = 0;
};
var bi_windup = (s) => {
	if (s.bi_valid > 8) put_short(s, s.bi_buf);
	else if (s.bi_valid > 0) s.pending_buf[s.pending++] = s.bi_buf;
	s.bi_buf = 0;
	s.bi_valid = 0;
};
var smaller = (tree, n, m, depth) => {
	const _n2 = n * 2;
	const _m2 = m * 2;
	return tree[_n2] < tree[_m2] || tree[_n2] === tree[_m2] && depth[n] <= depth[m];
};
var pqdownheap = (s, tree, k) => {
	const v = s.heap[k];
	let j = k << 1;
	while (j <= s.heap_len) {
		if (j < s.heap_len && smaller(tree, s.heap[j + 1], s.heap[j], s.depth)) j++;
		if (smaller(tree, v, s.heap[j], s.depth)) break;
		s.heap[k] = s.heap[j];
		k = j;
		j <<= 1;
	}
	s.heap[k] = v;
};
var compress_block = (s, ltree, dtree) => {
	let dist;
	let lc;
	let sx = 0;
	let code;
	let extra;
	if (s.sym_next !== 0) do {
		dist = s.pending_buf[s.sym_buf + sx++] & 255;
		dist += (s.pending_buf[s.sym_buf + sx++] & 255) << 8;
		lc = s.pending_buf[s.sym_buf + sx++];
		if (dist === 0) send_code(s, lc, ltree);
		else {
			code = _length_code[lc];
			send_code(s, code + LITERALS$1 + 1, ltree);
			extra = extra_lbits[code];
			if (extra !== 0) {
				lc -= base_length[code];
				send_bits(s, lc, extra);
			}
			dist--;
			code = d_code(dist);
			send_code(s, code, dtree);
			extra = extra_dbits[code];
			if (extra !== 0) {
				dist -= base_dist[code];
				send_bits(s, dist, extra);
			}
		}
	} while (sx < s.sym_next);
	send_code(s, END_BLOCK, ltree);
};
var build_tree = (s, desc) => {
	const tree = desc.dyn_tree;
	const stree = desc.stat_desc.static_tree;
	const has_stree = desc.stat_desc.has_stree;
	const elems = desc.stat_desc.elems;
	let n, m;
	let max_code = -1;
	let node;
	s.heap_len = 0;
	s.heap_max = HEAP_SIZE$1;
	for (n = 0; n < elems; n++) if (tree[n * 2] !== 0) {
		s.heap[++s.heap_len] = max_code = n;
		s.depth[n] = 0;
	} else tree[n * 2 + 1] = 0;
	while (s.heap_len < 2) {
		node = s.heap[++s.heap_len] = max_code < 2 ? ++max_code : 0;
		tree[node * 2] = 1;
		s.depth[node] = 0;
		s.opt_len--;
		if (has_stree) s.static_len -= stree[node * 2 + 1];
	}
	desc.max_code = max_code;
	for (n = s.heap_len >> 1; n >= 1; n--) pqdownheap(s, tree, n);
	node = elems;
	do {
		/*** pqremove ***/
		n = s.heap[1];
		s.heap[1] = s.heap[s.heap_len--];
		pqdownheap(s, tree, 1);
		m = s.heap[1];
		s.heap[--s.heap_max] = n;
		s.heap[--s.heap_max] = m;
		tree[node * 2] = tree[n * 2] + tree[m * 2];
		s.depth[node] = (s.depth[n] >= s.depth[m] ? s.depth[n] : s.depth[m]) + 1;
		tree[n * 2 + 1] = tree[m * 2 + 1] = node;
		s.heap[1] = node++;
		pqdownheap(s, tree, 1);
	} while (s.heap_len >= 2);
	s.heap[--s.heap_max] = s.heap[1];
	gen_bitlen(s, desc);
	gen_codes(tree, max_code, s.bl_count);
};
var scan_tree = (s, tree, max_code) => {
	let n;
	let prevlen = -1;
	let curlen;
	let nextlen = tree[1];
	let count = 0;
	let max_count = 7;
	let min_count = 4;
	if (nextlen === 0) {
		max_count = 138;
		min_count = 3;
	}
	tree[(max_code + 1) * 2 + 1] = 65535;
	for (n = 0; n <= max_code; n++) {
		curlen = nextlen;
		nextlen = tree[(n + 1) * 2 + 1];
		if (++count < max_count && curlen === nextlen) continue;
		else if (count < min_count) s.bl_tree[curlen * 2] += count;
		else if (curlen !== 0) {
			if (curlen !== prevlen) s.bl_tree[curlen * 2]++;
			s.bl_tree[REP_3_6 * 2]++;
		} else if (count <= 10) s.bl_tree[REPZ_3_10 * 2]++;
		else s.bl_tree[REPZ_11_138 * 2]++;
		count = 0;
		prevlen = curlen;
		if (nextlen === 0) {
			max_count = 138;
			min_count = 3;
		} else if (curlen === nextlen) {
			max_count = 6;
			min_count = 3;
		} else {
			max_count = 7;
			min_count = 4;
		}
	}
};
var send_tree = (s, tree, max_code) => {
	let n;
	let prevlen = -1;
	let curlen;
	let nextlen = tree[1];
	let count = 0;
	let max_count = 7;
	let min_count = 4;
	if (nextlen === 0) {
		max_count = 138;
		min_count = 3;
	}
	for (n = 0; n <= max_code; n++) {
		curlen = nextlen;
		nextlen = tree[(n + 1) * 2 + 1];
		if (++count < max_count && curlen === nextlen) continue;
		else if (count < min_count) do
			send_code(s, curlen, s.bl_tree);
		while (--count !== 0);
		else if (curlen !== 0) {
			if (curlen !== prevlen) {
				send_code(s, curlen, s.bl_tree);
				count--;
			}
			send_code(s, REP_3_6, s.bl_tree);
			send_bits(s, count - 3, 2);
		} else if (count <= 10) {
			send_code(s, REPZ_3_10, s.bl_tree);
			send_bits(s, count - 3, 3);
		} else {
			send_code(s, REPZ_11_138, s.bl_tree);
			send_bits(s, count - 11, 7);
		}
		count = 0;
		prevlen = curlen;
		if (nextlen === 0) {
			max_count = 138;
			min_count = 3;
		} else if (curlen === nextlen) {
			max_count = 6;
			min_count = 3;
		} else {
			max_count = 7;
			min_count = 4;
		}
	}
};
var build_bl_tree = (s) => {
	let max_blindex;
	scan_tree(s, s.dyn_ltree, s.l_desc.max_code);
	scan_tree(s, s.dyn_dtree, s.d_desc.max_code);
	build_tree(s, s.bl_desc);
	for (max_blindex = BL_CODES$1 - 1; max_blindex >= 3; max_blindex--) if (s.bl_tree[bl_order[max_blindex] * 2 + 1] !== 0) break;
	s.opt_len += 3 * (max_blindex + 1) + 5 + 5 + 4;
	return max_blindex;
};
var send_all_trees = (s, lcodes, dcodes, blcodes) => {
	let rank;
	send_bits(s, lcodes - 257, 5);
	send_bits(s, dcodes - 1, 5);
	send_bits(s, blcodes - 4, 4);
	for (rank = 0; rank < blcodes; rank++) send_bits(s, s.bl_tree[bl_order[rank] * 2 + 1], 3);
	send_tree(s, s.dyn_ltree, lcodes - 1);
	send_tree(s, s.dyn_dtree, dcodes - 1);
};
var detect_data_type = (s) => {
	let block_mask = 4093624447;
	let n;
	for (n = 0; n <= 31; n++, block_mask >>>= 1) if (block_mask & 1 && s.dyn_ltree[n * 2] !== 0) return Z_BINARY;
	if (s.dyn_ltree[18] !== 0 || s.dyn_ltree[20] !== 0 || s.dyn_ltree[26] !== 0) return Z_TEXT;
	for (n = 32; n < LITERALS$1; n++) if (s.dyn_ltree[n * 2] !== 0) return Z_TEXT;
	return Z_BINARY;
};
var static_init_done = false;
var _tr_init$1 = (s) => {
	if (!static_init_done) {
		tr_static_init();
		static_init_done = true;
	}
	s.l_desc = new TreeDesc(s.dyn_ltree, static_l_desc);
	s.d_desc = new TreeDesc(s.dyn_dtree, static_d_desc);
	s.bl_desc = new TreeDesc(s.bl_tree, static_bl_desc);
	s.bi_buf = 0;
	s.bi_valid = 0;
	init_block(s);
};
var _tr_stored_block$1 = (s, buf, stored_len, last) => {
	send_bits(s, (STORED_BLOCK << 1) + (last ? 1 : 0), 3);
	bi_windup(s);
	put_short(s, stored_len);
	put_short(s, ~stored_len);
	if (stored_len) s.pending_buf.set(s.window.subarray(buf, buf + stored_len), s.pending);
	s.pending += stored_len;
};
var _tr_align$1 = (s) => {
	send_bits(s, STATIC_TREES << 1, 3);
	send_code(s, END_BLOCK, static_ltree);
	bi_flush(s);
};
var _tr_flush_block$1 = (s, buf, stored_len, last) => {
	let opt_lenb, static_lenb;
	let max_blindex = 0;
	if (s.level > 0) {
		if (s.strm.data_type === Z_UNKNOWN$1) s.strm.data_type = detect_data_type(s);
		build_tree(s, s.l_desc);
		build_tree(s, s.d_desc);
		max_blindex = build_bl_tree(s);
		opt_lenb = s.opt_len + 3 + 7 >>> 3;
		static_lenb = s.static_len + 3 + 7 >>> 3;
		if (static_lenb <= opt_lenb) opt_lenb = static_lenb;
	} else opt_lenb = static_lenb = stored_len + 5;
	if (stored_len + 4 <= opt_lenb && buf !== -1) _tr_stored_block$1(s, buf, stored_len, last);
	else if (s.strategy === Z_FIXED$1 || static_lenb === opt_lenb) {
		send_bits(s, (STATIC_TREES << 1) + (last ? 1 : 0), 3);
		compress_block(s, static_ltree, static_dtree);
	} else {
		send_bits(s, (DYN_TREES << 1) + (last ? 1 : 0), 3);
		send_all_trees(s, s.l_desc.max_code + 1, s.d_desc.max_code + 1, max_blindex + 1);
		compress_block(s, s.dyn_ltree, s.dyn_dtree);
	}
	init_block(s);
	if (last) bi_windup(s);
};
var _tr_tally$1 = (s, dist, lc) => {
	s.pending_buf[s.sym_buf + s.sym_next++] = dist;
	s.pending_buf[s.sym_buf + s.sym_next++] = dist >> 8;
	s.pending_buf[s.sym_buf + s.sym_next++] = lc;
	if (dist === 0) s.dyn_ltree[lc * 2]++;
	else {
		s.matches++;
		dist--;
		s.dyn_ltree[(_length_code[lc] + LITERALS$1 + 1) * 2]++;
		s.dyn_dtree[d_code(dist) * 2]++;
	}
	return s.sym_next === s.sym_end;
};
var trees = {
	_tr_init: _tr_init$1,
	_tr_stored_block: _tr_stored_block$1,
	_tr_flush_block: _tr_flush_block$1,
	_tr_tally: _tr_tally$1,
	_tr_align: _tr_align$1
};
var adler32 = (adler, buf, len, pos) => {
	let s1 = adler & 65535 | 0, s2 = adler >>> 16 & 65535 | 0, n = 0;
	while (len !== 0) {
		n = len > 2e3 ? 2e3 : len;
		len -= n;
		do {
			s1 = s1 + buf[pos++] | 0;
			s2 = s2 + s1 | 0;
		} while (--n);
		s1 %= 65521;
		s2 %= 65521;
	}
	return s1 | s2 << 16 | 0;
};
var adler32_1 = adler32;
var makeTable = () => {
	let c, table = [];
	for (var n = 0; n < 256; n++) {
		c = n;
		for (var k = 0; k < 8; k++) c = c & 1 ? 3988292384 ^ c >>> 1 : c >>> 1;
		table[n] = c;
	}
	return table;
};
var crcTable = new Uint32Array(makeTable());
var crc32 = (crc, buf, len, pos) => {
	const t = crcTable;
	const end = pos + len;
	crc ^= -1;
	for (let i = pos; i < end; i++) crc = crc >>> 8 ^ t[(crc ^ buf[i]) & 255];
	return crc ^ -1;
};
var crc32_1 = crc32;
var messages = {
	2: "need dictionary",
	1: "stream end",
	0: "",
	"-1": "file error",
	"-2": "stream error",
	"-3": "data error",
	"-4": "insufficient memory",
	"-5": "buffer error",
	"-6": "incompatible version"
};
var constants$2 = {
	Z_NO_FLUSH: 0,
	Z_PARTIAL_FLUSH: 1,
	Z_SYNC_FLUSH: 2,
	Z_FULL_FLUSH: 3,
	Z_FINISH: 4,
	Z_BLOCK: 5,
	Z_TREES: 6,
	Z_OK: 0,
	Z_STREAM_END: 1,
	Z_NEED_DICT: 2,
	Z_ERRNO: -1,
	Z_STREAM_ERROR: -2,
	Z_DATA_ERROR: -3,
	Z_MEM_ERROR: -4,
	Z_BUF_ERROR: -5,
	Z_NO_COMPRESSION: 0,
	Z_BEST_SPEED: 1,
	Z_BEST_COMPRESSION: 9,
	Z_DEFAULT_COMPRESSION: -1,
	Z_FILTERED: 1,
	Z_HUFFMAN_ONLY: 2,
	Z_RLE: 3,
	Z_FIXED: 4,
	Z_DEFAULT_STRATEGY: 0,
	Z_BINARY: 0,
	Z_TEXT: 1,
	Z_UNKNOWN: 2,
	Z_DEFLATED: 8
};
var { _tr_init, _tr_stored_block, _tr_flush_block, _tr_tally, _tr_align } = trees;
var { Z_NO_FLUSH: Z_NO_FLUSH$2, Z_PARTIAL_FLUSH, Z_FULL_FLUSH: Z_FULL_FLUSH$1, Z_FINISH: Z_FINISH$3, Z_BLOCK: Z_BLOCK$1, Z_OK: Z_OK$3, Z_STREAM_END: Z_STREAM_END$3, Z_STREAM_ERROR: Z_STREAM_ERROR$2, Z_DATA_ERROR: Z_DATA_ERROR$2, Z_BUF_ERROR: Z_BUF_ERROR$1, Z_DEFAULT_COMPRESSION: Z_DEFAULT_COMPRESSION$1, Z_FILTERED, Z_HUFFMAN_ONLY, Z_RLE, Z_FIXED, Z_DEFAULT_STRATEGY: Z_DEFAULT_STRATEGY$1, Z_UNKNOWN, Z_DEFLATED: Z_DEFLATED$2 } = constants$2;
var MAX_MEM_LEVEL = 9;
var MAX_WBITS$1 = 15;
var DEF_MEM_LEVEL = 8;
var HEAP_SIZE = 573;
var MIN_MATCH = 3;
var MAX_MATCH = 258;
var MIN_LOOKAHEAD = 262;
var PRESET_DICT = 32;
var INIT_STATE = 42;
var GZIP_STATE = 57;
var EXTRA_STATE = 69;
var NAME_STATE = 73;
var COMMENT_STATE = 91;
var HCRC_STATE = 103;
var BUSY_STATE = 113;
var FINISH_STATE = 666;
var BS_NEED_MORE = 1;
var BS_BLOCK_DONE = 2;
var BS_FINISH_STARTED = 3;
var BS_FINISH_DONE = 4;
var OS_CODE = 3;
var err = (strm, errorCode) => {
	strm.msg = messages[errorCode];
	return errorCode;
};
var rank = (f) => {
	return f * 2 - (f > 4 ? 9 : 0);
};
var zero = (buf) => {
	let len = buf.length;
	while (--len >= 0) buf[len] = 0;
};
var slide_hash = (s) => {
	let n, m;
	let p;
	let wsize = s.w_size;
	n = s.hash_size;
	p = n;
	do {
		m = s.head[--p];
		s.head[p] = m >= wsize ? m - wsize : 0;
	} while (--n);
	n = wsize;
	p = n;
	do {
		m = s.prev[--p];
		s.prev[p] = m >= wsize ? m - wsize : 0;
	} while (--n);
};
var HASH_ZLIB = (s, prev, data) => (prev << s.hash_shift ^ data) & s.hash_mask;
var HASH = HASH_ZLIB;
var flush_pending = (strm) => {
	const s = strm.state;
	let len = s.pending;
	if (len > strm.avail_out) len = strm.avail_out;
	if (len === 0) return;
	strm.output.set(s.pending_buf.subarray(s.pending_out, s.pending_out + len), strm.next_out);
	strm.next_out += len;
	s.pending_out += len;
	strm.total_out += len;
	strm.avail_out -= len;
	s.pending -= len;
	if (s.pending === 0) s.pending_out = 0;
};
var flush_block_only = (s, last) => {
	_tr_flush_block(s, s.block_start >= 0 ? s.block_start : -1, s.strstart - s.block_start, last);
	s.block_start = s.strstart;
	flush_pending(s.strm);
};
var put_byte = (s, b) => {
	s.pending_buf[s.pending++] = b;
};
var putShortMSB = (s, b) => {
	s.pending_buf[s.pending++] = b >>> 8 & 255;
	s.pending_buf[s.pending++] = b & 255;
};
var read_buf = (strm, buf, start, size) => {
	let len = strm.avail_in;
	if (len > size) len = size;
	if (len === 0) return 0;
	strm.avail_in -= len;
	buf.set(strm.input.subarray(strm.next_in, strm.next_in + len), start);
	if (strm.state.wrap === 1) strm.adler = adler32_1(strm.adler, buf, len, start);
	else if (strm.state.wrap === 2) strm.adler = crc32_1(strm.adler, buf, len, start);
	strm.next_in += len;
	strm.total_in += len;
	return len;
};
var longest_match = (s, cur_match) => {
	let chain_length = s.max_chain_length;
	let scan = s.strstart;
	let match;
	let len;
	let best_len = s.prev_length;
	let nice_match = s.nice_match;
	const limit = s.strstart > s.w_size - MIN_LOOKAHEAD ? s.strstart - (s.w_size - MIN_LOOKAHEAD) : 0;
	const _win = s.window;
	const wmask = s.w_mask;
	const prev = s.prev;
	const strend = s.strstart + MAX_MATCH;
	let scan_end1 = _win[scan + best_len - 1];
	let scan_end = _win[scan + best_len];
	if (s.prev_length >= s.good_match) chain_length >>= 2;
	if (nice_match > s.lookahead) nice_match = s.lookahead;
	do {
		match = cur_match;
		if (_win[match + best_len] !== scan_end || _win[match + best_len - 1] !== scan_end1 || _win[match] !== _win[scan] || _win[++match] !== _win[scan + 1]) continue;
		scan += 2;
		match++;
		do		;
while (_win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && scan < strend);
		len = MAX_MATCH - (strend - scan);
		scan = strend - MAX_MATCH;
		if (len > best_len) {
			s.match_start = cur_match;
			best_len = len;
			if (len >= nice_match) break;
			scan_end1 = _win[scan + best_len - 1];
			scan_end = _win[scan + best_len];
		}
	} while ((cur_match = prev[cur_match & wmask]) > limit && --chain_length !== 0);
	if (best_len <= s.lookahead) return best_len;
	return s.lookahead;
};
var fill_window = (s) => {
	const _w_size = s.w_size;
	let n, more, str;
	do {
		more = s.window_size - s.lookahead - s.strstart;
		if (s.strstart >= _w_size + (_w_size - MIN_LOOKAHEAD)) {
			s.window.set(s.window.subarray(_w_size, _w_size + _w_size - more), 0);
			s.match_start -= _w_size;
			s.strstart -= _w_size;
			s.block_start -= _w_size;
			if (s.insert > s.strstart) s.insert = s.strstart;
			slide_hash(s);
			more += _w_size;
		}
		if (s.strm.avail_in === 0) break;
		n = read_buf(s.strm, s.window, s.strstart + s.lookahead, more);
		s.lookahead += n;
		if (s.lookahead + s.insert >= MIN_MATCH) {
			str = s.strstart - s.insert;
			s.ins_h = s.window[str];
			s.ins_h = HASH(s, s.ins_h, s.window[str + 1]);
			while (s.insert) {
				s.ins_h = HASH(s, s.ins_h, s.window[str + MIN_MATCH - 1]);
				s.prev[str & s.w_mask] = s.head[s.ins_h];
				s.head[s.ins_h] = str;
				str++;
				s.insert--;
				if (s.lookahead + s.insert < MIN_MATCH) break;
			}
		}
	} while (s.lookahead < MIN_LOOKAHEAD && s.strm.avail_in !== 0);
};
var deflate_stored = (s, flush) => {
	let min_block = s.pending_buf_size - 5 > s.w_size ? s.w_size : s.pending_buf_size - 5;
	let len, left, have, last = 0;
	let used = s.strm.avail_in;
	do {
		len = 65535;
		have = s.bi_valid + 42 >> 3;
		if (s.strm.avail_out < have) break;
		have = s.strm.avail_out - have;
		left = s.strstart - s.block_start;
		if (len > left + s.strm.avail_in) len = left + s.strm.avail_in;
		if (len > have) len = have;
		if (len < min_block && (len === 0 && flush !== Z_FINISH$3 || flush === Z_NO_FLUSH$2 || len !== left + s.strm.avail_in)) break;
		last = flush === Z_FINISH$3 && len === left + s.strm.avail_in ? 1 : 0;
		_tr_stored_block(s, 0, 0, last);
		s.pending_buf[s.pending - 4] = len;
		s.pending_buf[s.pending - 3] = len >> 8;
		s.pending_buf[s.pending - 2] = ~len;
		s.pending_buf[s.pending - 1] = ~len >> 8;
		flush_pending(s.strm);
		if (left) {
			if (left > len) left = len;
			s.strm.output.set(s.window.subarray(s.block_start, s.block_start + left), s.strm.next_out);
			s.strm.next_out += left;
			s.strm.avail_out -= left;
			s.strm.total_out += left;
			s.block_start += left;
			len -= left;
		}
		if (len) {
			read_buf(s.strm, s.strm.output, s.strm.next_out, len);
			s.strm.next_out += len;
			s.strm.avail_out -= len;
			s.strm.total_out += len;
		}
	} while (last === 0);
	used -= s.strm.avail_in;
	if (used) {
		if (used >= s.w_size) {
			s.matches = 2;
			s.window.set(s.strm.input.subarray(s.strm.next_in - s.w_size, s.strm.next_in), 0);
			s.strstart = s.w_size;
			s.insert = s.strstart;
		} else {
			if (s.window_size - s.strstart <= used) {
				s.strstart -= s.w_size;
				s.window.set(s.window.subarray(s.w_size, s.w_size + s.strstart), 0);
				if (s.matches < 2) s.matches++;
				if (s.insert > s.strstart) s.insert = s.strstart;
			}
			s.window.set(s.strm.input.subarray(s.strm.next_in - used, s.strm.next_in), s.strstart);
			s.strstart += used;
			s.insert += used > s.w_size - s.insert ? s.w_size - s.insert : used;
		}
		s.block_start = s.strstart;
	}
	if (s.high_water < s.strstart) s.high_water = s.strstart;
	if (last) return BS_FINISH_DONE;
	if (flush !== Z_NO_FLUSH$2 && flush !== Z_FINISH$3 && s.strm.avail_in === 0 && s.strstart === s.block_start) return BS_BLOCK_DONE;
	have = s.window_size - s.strstart;
	if (s.strm.avail_in > have && s.block_start >= s.w_size) {
		s.block_start -= s.w_size;
		s.strstart -= s.w_size;
		s.window.set(s.window.subarray(s.w_size, s.w_size + s.strstart), 0);
		if (s.matches < 2) s.matches++;
		have += s.w_size;
		if (s.insert > s.strstart) s.insert = s.strstart;
	}
	if (have > s.strm.avail_in) have = s.strm.avail_in;
	if (have) {
		read_buf(s.strm, s.window, s.strstart, have);
		s.strstart += have;
		s.insert += have > s.w_size - s.insert ? s.w_size - s.insert : have;
	}
	if (s.high_water < s.strstart) s.high_water = s.strstart;
	have = s.bi_valid + 42 >> 3;
	have = s.pending_buf_size - have > 65535 ? 65535 : s.pending_buf_size - have;
	min_block = have > s.w_size ? s.w_size : have;
	left = s.strstart - s.block_start;
	if (left >= min_block || (left || flush === Z_FINISH$3) && flush !== Z_NO_FLUSH$2 && s.strm.avail_in === 0 && left <= have) {
		len = left > have ? have : left;
		last = flush === Z_FINISH$3 && s.strm.avail_in === 0 && len === left ? 1 : 0;
		_tr_stored_block(s, s.block_start, len, last);
		s.block_start += len;
		flush_pending(s.strm);
	}
	return last ? BS_FINISH_STARTED : BS_NEED_MORE;
};
var deflate_fast = (s, flush) => {
	let hash_head;
	let bflush;
	for (;;) {
		if (s.lookahead < MIN_LOOKAHEAD) {
			fill_window(s);
			if (s.lookahead < MIN_LOOKAHEAD && flush === Z_NO_FLUSH$2) return BS_NEED_MORE;
			if (s.lookahead === 0) break;
		}
		hash_head = 0;
		if (s.lookahead >= MIN_MATCH) {
			/*** INSERT_STRING(s, s.strstart, hash_head); ***/
			s.ins_h = HASH(s, s.ins_h, s.window[s.strstart + MIN_MATCH - 1]);
			hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
			s.head[s.ins_h] = s.strstart;
		}
		if (hash_head !== 0 && s.strstart - hash_head <= s.w_size - MIN_LOOKAHEAD) s.match_length = longest_match(s, hash_head);
		if (s.match_length >= MIN_MATCH) {
			/*** _tr_tally_dist(s, s.strstart - s.match_start,
			s.match_length - MIN_MATCH, bflush); ***/
			bflush = _tr_tally(s, s.strstart - s.match_start, s.match_length - MIN_MATCH);
			s.lookahead -= s.match_length;
			if (s.match_length <= s.max_lazy_match && s.lookahead >= MIN_MATCH) {
				s.match_length--;
				do {
					s.strstart++;
					/*** INSERT_STRING(s, s.strstart, hash_head); ***/
					s.ins_h = HASH(s, s.ins_h, s.window[s.strstart + MIN_MATCH - 1]);
					hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
					s.head[s.ins_h] = s.strstart;
				} while (--s.match_length !== 0);
				s.strstart++;
			} else {
				s.strstart += s.match_length;
				s.match_length = 0;
				s.ins_h = s.window[s.strstart];
				s.ins_h = HASH(s, s.ins_h, s.window[s.strstart + 1]);
			}
		} else {
			/*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/
			bflush = _tr_tally(s, 0, s.window[s.strstart]);
			s.lookahead--;
			s.strstart++;
		}
		if (bflush) {
			/*** FLUSH_BLOCK(s, 0); ***/
			flush_block_only(s, false);
			if (s.strm.avail_out === 0) return BS_NEED_MORE;
		}
	}
	s.insert = s.strstart < MIN_MATCH - 1 ? s.strstart : MIN_MATCH - 1;
	if (flush === Z_FINISH$3) {
		/*** FLUSH_BLOCK(s, 1); ***/
		flush_block_only(s, true);
		if (s.strm.avail_out === 0) return BS_FINISH_STARTED;
		return BS_FINISH_DONE;
	}
	if (s.sym_next) {
		/*** FLUSH_BLOCK(s, 0); ***/
		flush_block_only(s, false);
		if (s.strm.avail_out === 0) return BS_NEED_MORE;
	}
	return BS_BLOCK_DONE;
};
var deflate_slow = (s, flush) => {
	let hash_head;
	let bflush;
	let max_insert;
	for (;;) {
		if (s.lookahead < MIN_LOOKAHEAD) {
			fill_window(s);
			if (s.lookahead < MIN_LOOKAHEAD && flush === Z_NO_FLUSH$2) return BS_NEED_MORE;
			if (s.lookahead === 0) break;
		}
		hash_head = 0;
		if (s.lookahead >= MIN_MATCH) {
			/*** INSERT_STRING(s, s.strstart, hash_head); ***/
			s.ins_h = HASH(s, s.ins_h, s.window[s.strstart + MIN_MATCH - 1]);
			hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
			s.head[s.ins_h] = s.strstart;
		}
		s.prev_length = s.match_length;
		s.prev_match = s.match_start;
		s.match_length = MIN_MATCH - 1;
		if (hash_head !== 0 && s.prev_length < s.max_lazy_match && s.strstart - hash_head <= s.w_size - MIN_LOOKAHEAD) {
			s.match_length = longest_match(s, hash_head);
			if (s.match_length <= 5 && (s.strategy === Z_FILTERED || s.match_length === MIN_MATCH && s.strstart - s.match_start > 4096)) s.match_length = MIN_MATCH - 1;
		}
		if (s.prev_length >= MIN_MATCH && s.match_length <= s.prev_length) {
			max_insert = s.strstart + s.lookahead - MIN_MATCH;
			/***_tr_tally_dist(s, s.strstart - 1 - s.prev_match,
			s.prev_length - MIN_MATCH, bflush);***/
			bflush = _tr_tally(s, s.strstart - 1 - s.prev_match, s.prev_length - MIN_MATCH);
			s.lookahead -= s.prev_length - 1;
			s.prev_length -= 2;
			do
				if (++s.strstart <= max_insert) {
					/*** INSERT_STRING(s, s.strstart, hash_head); ***/
					s.ins_h = HASH(s, s.ins_h, s.window[s.strstart + MIN_MATCH - 1]);
					hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
					s.head[s.ins_h] = s.strstart;
				}
			while (--s.prev_length !== 0);
			s.match_available = 0;
			s.match_length = MIN_MATCH - 1;
			s.strstart++;
			if (bflush) {
				/*** FLUSH_BLOCK(s, 0); ***/
				flush_block_only(s, false);
				if (s.strm.avail_out === 0) return BS_NEED_MORE;
			}
		} else if (s.match_available) {
			/*** _tr_tally_lit(s, s.window[s.strstart-1], bflush); ***/
			bflush = _tr_tally(s, 0, s.window[s.strstart - 1]);
			if (bflush)
 /*** FLUSH_BLOCK_ONLY(s, 0) ***/
			flush_block_only(s, false);
			s.strstart++;
			s.lookahead--;
			if (s.strm.avail_out === 0) return BS_NEED_MORE;
		} else {
			s.match_available = 1;
			s.strstart++;
			s.lookahead--;
		}
	}
	if (s.match_available) {
		/*** _tr_tally_lit(s, s.window[s.strstart-1], bflush); ***/
		bflush = _tr_tally(s, 0, s.window[s.strstart - 1]);
		s.match_available = 0;
	}
	s.insert = s.strstart < MIN_MATCH - 1 ? s.strstart : MIN_MATCH - 1;
	if (flush === Z_FINISH$3) {
		/*** FLUSH_BLOCK(s, 1); ***/
		flush_block_only(s, true);
		if (s.strm.avail_out === 0) return BS_FINISH_STARTED;
		return BS_FINISH_DONE;
	}
	if (s.sym_next) {
		/*** FLUSH_BLOCK(s, 0); ***/
		flush_block_only(s, false);
		if (s.strm.avail_out === 0) return BS_NEED_MORE;
	}
	return BS_BLOCK_DONE;
};
var deflate_rle = (s, flush) => {
	let bflush;
	let prev;
	let scan, strend;
	const _win = s.window;
	for (;;) {
		if (s.lookahead <= MAX_MATCH) {
			fill_window(s);
			if (s.lookahead <= MAX_MATCH && flush === Z_NO_FLUSH$2) return BS_NEED_MORE;
			if (s.lookahead === 0) break;
		}
		s.match_length = 0;
		if (s.lookahead >= MIN_MATCH && s.strstart > 0) {
			scan = s.strstart - 1;
			prev = _win[scan];
			if (prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan]) {
				strend = s.strstart + MAX_MATCH;
				do				;
while (prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && scan < strend);
				s.match_length = MAX_MATCH - (strend - scan);
				if (s.match_length > s.lookahead) s.match_length = s.lookahead;
			}
		}
		if (s.match_length >= MIN_MATCH) {
			/*** _tr_tally_dist(s, 1, s.match_length - MIN_MATCH, bflush); ***/
			bflush = _tr_tally(s, 1, s.match_length - MIN_MATCH);
			s.lookahead -= s.match_length;
			s.strstart += s.match_length;
			s.match_length = 0;
		} else {
			/*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/
			bflush = _tr_tally(s, 0, s.window[s.strstart]);
			s.lookahead--;
			s.strstart++;
		}
		if (bflush) {
			/*** FLUSH_BLOCK(s, 0); ***/
			flush_block_only(s, false);
			if (s.strm.avail_out === 0) return BS_NEED_MORE;
		}
	}
	s.insert = 0;
	if (flush === Z_FINISH$3) {
		/*** FLUSH_BLOCK(s, 1); ***/
		flush_block_only(s, true);
		if (s.strm.avail_out === 0) return BS_FINISH_STARTED;
		return BS_FINISH_DONE;
	}
	if (s.sym_next) {
		/*** FLUSH_BLOCK(s, 0); ***/
		flush_block_only(s, false);
		if (s.strm.avail_out === 0) return BS_NEED_MORE;
	}
	return BS_BLOCK_DONE;
};
var deflate_huff = (s, flush) => {
	let bflush;
	for (;;) {
		if (s.lookahead === 0) {
			fill_window(s);
			if (s.lookahead === 0) {
				if (flush === Z_NO_FLUSH$2) return BS_NEED_MORE;
				break;
			}
		}
		s.match_length = 0;
		/*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/
		bflush = _tr_tally(s, 0, s.window[s.strstart]);
		s.lookahead--;
		s.strstart++;
		if (bflush) {
			/*** FLUSH_BLOCK(s, 0); ***/
			flush_block_only(s, false);
			if (s.strm.avail_out === 0) return BS_NEED_MORE;
		}
	}
	s.insert = 0;
	if (flush === Z_FINISH$3) {
		/*** FLUSH_BLOCK(s, 1); ***/
		flush_block_only(s, true);
		if (s.strm.avail_out === 0) return BS_FINISH_STARTED;
		return BS_FINISH_DONE;
	}
	if (s.sym_next) {
		/*** FLUSH_BLOCK(s, 0); ***/
		flush_block_only(s, false);
		if (s.strm.avail_out === 0) return BS_NEED_MORE;
	}
	return BS_BLOCK_DONE;
};
function Config(good_length, max_lazy, nice_length, max_chain, func) {
	this.good_length = good_length;
	this.max_lazy = max_lazy;
	this.nice_length = nice_length;
	this.max_chain = max_chain;
	this.func = func;
}
var configuration_table = [
	new Config(0, 0, 0, 0, deflate_stored),
	new Config(4, 4, 8, 4, deflate_fast),
	new Config(4, 5, 16, 8, deflate_fast),
	new Config(4, 6, 32, 32, deflate_fast),
	new Config(4, 4, 16, 16, deflate_slow),
	new Config(8, 16, 32, 32, deflate_slow),
	new Config(8, 16, 128, 128, deflate_slow),
	new Config(8, 32, 128, 256, deflate_slow),
	new Config(32, 128, 258, 1024, deflate_slow),
	new Config(32, 258, 258, 4096, deflate_slow)
];
var lm_init = (s) => {
	s.window_size = 2 * s.w_size;
	/*** CLEAR_HASH(s); ***/
	zero(s.head);
	s.max_lazy_match = configuration_table[s.level].max_lazy;
	s.good_match = configuration_table[s.level].good_length;
	s.nice_match = configuration_table[s.level].nice_length;
	s.max_chain_length = configuration_table[s.level].max_chain;
	s.strstart = 0;
	s.block_start = 0;
	s.lookahead = 0;
	s.insert = 0;
	s.match_length = s.prev_length = MIN_MATCH - 1;
	s.match_available = 0;
	s.ins_h = 0;
};
function DeflateState() {
	this.strm = null;
	this.status = 0;
	this.pending_buf = null;
	this.pending_buf_size = 0;
	this.pending_out = 0;
	this.pending = 0;
	this.wrap = 0;
	this.gzhead = null;
	this.gzindex = 0;
	this.method = Z_DEFLATED$2;
	this.last_flush = -1;
	this.w_size = 0;
	this.w_bits = 0;
	this.w_mask = 0;
	this.window = null;
	this.window_size = 0;
	this.prev = null;
	this.head = null;
	this.ins_h = 0;
	this.hash_size = 0;
	this.hash_bits = 0;
	this.hash_mask = 0;
	this.hash_shift = 0;
	this.block_start = 0;
	this.match_length = 0;
	this.prev_match = 0;
	this.match_available = 0;
	this.strstart = 0;
	this.match_start = 0;
	this.lookahead = 0;
	this.prev_length = 0;
	this.max_chain_length = 0;
	this.max_lazy_match = 0;
	this.level = 0;
	this.strategy = 0;
	this.good_match = 0;
	this.nice_match = 0;
	this.dyn_ltree = new Uint16Array(HEAP_SIZE * 2);
	this.dyn_dtree = /* @__PURE__ */ new Uint16Array(122);
	this.bl_tree = /* @__PURE__ */ new Uint16Array(78);
	zero(this.dyn_ltree);
	zero(this.dyn_dtree);
	zero(this.bl_tree);
	this.l_desc = null;
	this.d_desc = null;
	this.bl_desc = null;
	this.bl_count = /* @__PURE__ */ new Uint16Array(16);
	this.heap = /* @__PURE__ */ new Uint16Array(573);
	zero(this.heap);
	this.heap_len = 0;
	this.heap_max = 0;
	this.depth = /* @__PURE__ */ new Uint16Array(573);
	zero(this.depth);
	this.sym_buf = 0;
	this.lit_bufsize = 0;
	this.sym_next = 0;
	this.sym_end = 0;
	this.opt_len = 0;
	this.static_len = 0;
	this.matches = 0;
	this.insert = 0;
	this.bi_buf = 0;
	this.bi_valid = 0;
}
var deflateStateCheck = (strm) => {
	if (!strm) return 1;
	const s = strm.state;
	if (!s || s.strm !== strm || s.status !== INIT_STATE && s.status !== GZIP_STATE && s.status !== EXTRA_STATE && s.status !== NAME_STATE && s.status !== COMMENT_STATE && s.status !== HCRC_STATE && s.status !== BUSY_STATE && s.status !== FINISH_STATE) return 1;
	return 0;
};
var deflateResetKeep = (strm) => {
	if (deflateStateCheck(strm)) return err(strm, Z_STREAM_ERROR$2);
	strm.total_in = strm.total_out = 0;
	strm.data_type = Z_UNKNOWN;
	const s = strm.state;
	s.pending = 0;
	s.pending_out = 0;
	if (s.wrap < 0) s.wrap = -s.wrap;
	s.status = s.wrap === 2 ? GZIP_STATE : s.wrap ? INIT_STATE : BUSY_STATE;
	strm.adler = s.wrap === 2 ? 0 : 1;
	s.last_flush = -2;
	_tr_init(s);
	return Z_OK$3;
};
var deflateReset = (strm) => {
	const ret = deflateResetKeep(strm);
	if (ret === Z_OK$3) lm_init(strm.state);
	return ret;
};
var deflateSetHeader = (strm, head) => {
	if (deflateStateCheck(strm) || strm.state.wrap !== 2) return Z_STREAM_ERROR$2;
	strm.state.gzhead = head;
	return Z_OK$3;
};
var deflateInit2 = (strm, level, method, windowBits, memLevel, strategy) => {
	if (!strm) return Z_STREAM_ERROR$2;
	let wrap = 1;
	if (level === Z_DEFAULT_COMPRESSION$1) level = 6;
	if (windowBits < 0) {
		wrap = 0;
		windowBits = -windowBits;
	} else if (windowBits > 15) {
		wrap = 2;
		windowBits -= 16;
	}
	if (memLevel < 1 || memLevel > MAX_MEM_LEVEL || method !== Z_DEFLATED$2 || windowBits < 8 || windowBits > 15 || level < 0 || level > 9 || strategy < 0 || strategy > Z_FIXED || windowBits === 8 && wrap !== 1) return err(strm, Z_STREAM_ERROR$2);
	if (windowBits === 8) windowBits = 9;
	const s = new DeflateState();
	strm.state = s;
	s.strm = strm;
	s.status = INIT_STATE;
	s.wrap = wrap;
	s.gzhead = null;
	s.w_bits = windowBits;
	s.w_size = 1 << s.w_bits;
	s.w_mask = s.w_size - 1;
	s.hash_bits = memLevel + 7;
	s.hash_size = 1 << s.hash_bits;
	s.hash_mask = s.hash_size - 1;
	s.hash_shift = ~~((s.hash_bits + MIN_MATCH - 1) / MIN_MATCH);
	s.window = new Uint8Array(s.w_size * 2);
	s.head = new Uint16Array(s.hash_size);
	s.prev = new Uint16Array(s.w_size);
	s.lit_bufsize = 1 << memLevel + 6;
	s.pending_buf_size = s.lit_bufsize * 4;
	s.pending_buf = new Uint8Array(s.pending_buf_size);
	s.sym_buf = s.lit_bufsize;
	s.sym_end = (s.lit_bufsize - 1) * 3;
	s.level = level;
	s.strategy = strategy;
	s.method = method;
	return deflateReset(strm);
};
var deflateInit = (strm, level) => {
	return deflateInit2(strm, level, Z_DEFLATED$2, MAX_WBITS$1, DEF_MEM_LEVEL, Z_DEFAULT_STRATEGY$1);
};
var deflate$2 = (strm, flush) => {
	if (deflateStateCheck(strm) || flush > Z_BLOCK$1 || flush < 0) return strm ? err(strm, Z_STREAM_ERROR$2) : Z_STREAM_ERROR$2;
	const s = strm.state;
	if (!strm.output || strm.avail_in !== 0 && !strm.input || s.status === FINISH_STATE && flush !== Z_FINISH$3) return err(strm, strm.avail_out === 0 ? Z_BUF_ERROR$1 : Z_STREAM_ERROR$2);
	const old_flush = s.last_flush;
	s.last_flush = flush;
	if (s.pending !== 0) {
		flush_pending(strm);
		if (strm.avail_out === 0) {
			s.last_flush = -1;
			return Z_OK$3;
		}
	} else if (strm.avail_in === 0 && rank(flush) <= rank(old_flush) && flush !== Z_FINISH$3) return err(strm, Z_BUF_ERROR$1);
	if (s.status === FINISH_STATE && strm.avail_in !== 0) return err(strm, Z_BUF_ERROR$1);
	if (s.status === INIT_STATE && s.wrap === 0) s.status = BUSY_STATE;
	if (s.status === INIT_STATE) {
		let header = Z_DEFLATED$2 + (s.w_bits - 8 << 4) << 8;
		let level_flags = -1;
		if (s.strategy >= Z_HUFFMAN_ONLY || s.level < 2) level_flags = 0;
		else if (s.level < 6) level_flags = 1;
		else if (s.level === 6) level_flags = 2;
		else level_flags = 3;
		header |= level_flags << 6;
		if (s.strstart !== 0) header |= PRESET_DICT;
		header += 31 - header % 31;
		putShortMSB(s, header);
		if (s.strstart !== 0) {
			putShortMSB(s, strm.adler >>> 16);
			putShortMSB(s, strm.adler & 65535);
		}
		strm.adler = 1;
		s.status = BUSY_STATE;
		flush_pending(strm);
		if (s.pending !== 0) {
			s.last_flush = -1;
			return Z_OK$3;
		}
	}
	if (s.status === GZIP_STATE) {
		strm.adler = 0;
		put_byte(s, 31);
		put_byte(s, 139);
		put_byte(s, 8);
		if (!s.gzhead) {
			put_byte(s, 0);
			put_byte(s, 0);
			put_byte(s, 0);
			put_byte(s, 0);
			put_byte(s, 0);
			put_byte(s, s.level === 9 ? 2 : s.strategy >= Z_HUFFMAN_ONLY || s.level < 2 ? 4 : 0);
			put_byte(s, OS_CODE);
			s.status = BUSY_STATE;
			flush_pending(strm);
			if (s.pending !== 0) {
				s.last_flush = -1;
				return Z_OK$3;
			}
		} else {
			put_byte(s, (s.gzhead.text ? 1 : 0) + (s.gzhead.hcrc ? 2 : 0) + (!s.gzhead.extra ? 0 : 4) + (!s.gzhead.name ? 0 : 8) + (!s.gzhead.comment ? 0 : 16));
			put_byte(s, s.gzhead.time & 255);
			put_byte(s, s.gzhead.time >> 8 & 255);
			put_byte(s, s.gzhead.time >> 16 & 255);
			put_byte(s, s.gzhead.time >> 24 & 255);
			put_byte(s, s.level === 9 ? 2 : s.strategy >= Z_HUFFMAN_ONLY || s.level < 2 ? 4 : 0);
			put_byte(s, s.gzhead.os & 255);
			if (s.gzhead.extra && s.gzhead.extra.length) {
				put_byte(s, s.gzhead.extra.length & 255);
				put_byte(s, s.gzhead.extra.length >> 8 & 255);
			}
			if (s.gzhead.hcrc) strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending, 0);
			s.gzindex = 0;
			s.status = EXTRA_STATE;
		}
	}
	if (s.status === EXTRA_STATE) {
		if (s.gzhead.extra) {
			let beg = s.pending;
			let left = (s.gzhead.extra.length & 65535) - s.gzindex;
			while (s.pending + left > s.pending_buf_size) {
				let copy = s.pending_buf_size - s.pending;
				s.pending_buf.set(s.gzhead.extra.subarray(s.gzindex, s.gzindex + copy), s.pending);
				s.pending = s.pending_buf_size;
				if (s.gzhead.hcrc && s.pending > beg) strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending - beg, beg);
				s.gzindex += copy;
				flush_pending(strm);
				if (s.pending !== 0) {
					s.last_flush = -1;
					return Z_OK$3;
				}
				beg = 0;
				left -= copy;
			}
			let gzhead_extra = new Uint8Array(s.gzhead.extra);
			s.pending_buf.set(gzhead_extra.subarray(s.gzindex, s.gzindex + left), s.pending);
			s.pending += left;
			if (s.gzhead.hcrc && s.pending > beg) strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending - beg, beg);
			s.gzindex = 0;
		}
		s.status = NAME_STATE;
	}
	if (s.status === NAME_STATE) {
		if (s.gzhead.name) {
			let beg = s.pending;
			let val;
			do {
				if (s.pending === s.pending_buf_size) {
					if (s.gzhead.hcrc && s.pending > beg) strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending - beg, beg);
					flush_pending(strm);
					if (s.pending !== 0) {
						s.last_flush = -1;
						return Z_OK$3;
					}
					beg = 0;
				}
				if (s.gzindex < s.gzhead.name.length) val = s.gzhead.name.charCodeAt(s.gzindex++) & 255;
				else val = 0;
				put_byte(s, val);
			} while (val !== 0);
			if (s.gzhead.hcrc && s.pending > beg) strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending - beg, beg);
			s.gzindex = 0;
		}
		s.status = COMMENT_STATE;
	}
	if (s.status === COMMENT_STATE) {
		if (s.gzhead.comment) {
			let beg = s.pending;
			let val;
			do {
				if (s.pending === s.pending_buf_size) {
					if (s.gzhead.hcrc && s.pending > beg) strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending - beg, beg);
					flush_pending(strm);
					if (s.pending !== 0) {
						s.last_flush = -1;
						return Z_OK$3;
					}
					beg = 0;
				}
				if (s.gzindex < s.gzhead.comment.length) val = s.gzhead.comment.charCodeAt(s.gzindex++) & 255;
				else val = 0;
				put_byte(s, val);
			} while (val !== 0);
			if (s.gzhead.hcrc && s.pending > beg) strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending - beg, beg);
		}
		s.status = HCRC_STATE;
	}
	if (s.status === HCRC_STATE) {
		if (s.gzhead.hcrc) {
			if (s.pending + 2 > s.pending_buf_size) {
				flush_pending(strm);
				if (s.pending !== 0) {
					s.last_flush = -1;
					return Z_OK$3;
				}
			}
			put_byte(s, strm.adler & 255);
			put_byte(s, strm.adler >> 8 & 255);
			strm.adler = 0;
		}
		s.status = BUSY_STATE;
		flush_pending(strm);
		if (s.pending !== 0) {
			s.last_flush = -1;
			return Z_OK$3;
		}
	}
	if (strm.avail_in !== 0 || s.lookahead !== 0 || flush !== Z_NO_FLUSH$2 && s.status !== FINISH_STATE) {
		let bstate = s.level === 0 ? deflate_stored(s, flush) : s.strategy === Z_HUFFMAN_ONLY ? deflate_huff(s, flush) : s.strategy === Z_RLE ? deflate_rle(s, flush) : configuration_table[s.level].func(s, flush);
		if (bstate === BS_FINISH_STARTED || bstate === BS_FINISH_DONE) s.status = FINISH_STATE;
		if (bstate === BS_NEED_MORE || bstate === BS_FINISH_STARTED) {
			if (strm.avail_out === 0) s.last_flush = -1;
			return Z_OK$3;
		}
		if (bstate === BS_BLOCK_DONE) {
			if (flush === Z_PARTIAL_FLUSH) _tr_align(s);
			else if (flush !== Z_BLOCK$1) {
				_tr_stored_block(s, 0, 0, false);
				if (flush === Z_FULL_FLUSH$1) {
					/*** CLEAR_HASH(s); ***/ zero(s.head);
					if (s.lookahead === 0) {
						s.strstart = 0;
						s.block_start = 0;
						s.insert = 0;
					}
				}
			}
			flush_pending(strm);
			if (strm.avail_out === 0) {
				s.last_flush = -1;
				return Z_OK$3;
			}
		}
	}
	if (flush !== Z_FINISH$3) return Z_OK$3;
	if (s.wrap <= 0) return Z_STREAM_END$3;
	if (s.wrap === 2) {
		put_byte(s, strm.adler & 255);
		put_byte(s, strm.adler >> 8 & 255);
		put_byte(s, strm.adler >> 16 & 255);
		put_byte(s, strm.adler >> 24 & 255);
		put_byte(s, strm.total_in & 255);
		put_byte(s, strm.total_in >> 8 & 255);
		put_byte(s, strm.total_in >> 16 & 255);
		put_byte(s, strm.total_in >> 24 & 255);
	} else {
		putShortMSB(s, strm.adler >>> 16);
		putShortMSB(s, strm.adler & 65535);
	}
	flush_pending(strm);
	if (s.wrap > 0) s.wrap = -s.wrap;
	return s.pending !== 0 ? Z_OK$3 : Z_STREAM_END$3;
};
var deflateEnd = (strm) => {
	if (deflateStateCheck(strm)) return Z_STREAM_ERROR$2;
	const status = strm.state.status;
	strm.state = null;
	return status === BUSY_STATE ? err(strm, Z_DATA_ERROR$2) : Z_OK$3;
};
var deflateSetDictionary = (strm, dictionary) => {
	let dictLength = dictionary.length;
	if (deflateStateCheck(strm)) return Z_STREAM_ERROR$2;
	const s = strm.state;
	const wrap = s.wrap;
	if (wrap === 2 || wrap === 1 && s.status !== INIT_STATE || s.lookahead) return Z_STREAM_ERROR$2;
	if (wrap === 1) strm.adler = adler32_1(strm.adler, dictionary, dictLength, 0);
	s.wrap = 0;
	if (dictLength >= s.w_size) {
		if (wrap === 0) {
			/*** CLEAR_HASH(s); ***/
			zero(s.head);
			s.strstart = 0;
			s.block_start = 0;
			s.insert = 0;
		}
		let tmpDict = new Uint8Array(s.w_size);
		tmpDict.set(dictionary.subarray(dictLength - s.w_size, dictLength), 0);
		dictionary = tmpDict;
		dictLength = s.w_size;
	}
	const avail = strm.avail_in;
	const next = strm.next_in;
	const input = strm.input;
	strm.avail_in = dictLength;
	strm.next_in = 0;
	strm.input = dictionary;
	fill_window(s);
	while (s.lookahead >= MIN_MATCH) {
		let str = s.strstart;
		let n = s.lookahead - (MIN_MATCH - 1);
		do {
			s.ins_h = HASH(s, s.ins_h, s.window[str + MIN_MATCH - 1]);
			s.prev[str & s.w_mask] = s.head[s.ins_h];
			s.head[s.ins_h] = str;
			str++;
		} while (--n);
		s.strstart = str;
		s.lookahead = MIN_MATCH - 1;
		fill_window(s);
	}
	s.strstart += s.lookahead;
	s.block_start = s.strstart;
	s.insert = s.lookahead;
	s.lookahead = 0;
	s.match_length = s.prev_length = MIN_MATCH - 1;
	s.match_available = 0;
	strm.next_in = next;
	strm.input = input;
	strm.avail_in = avail;
	s.wrap = wrap;
	return Z_OK$3;
};
var deflate_1$2 = {
	deflateInit,
	deflateInit2,
	deflateReset,
	deflateResetKeep,
	deflateSetHeader,
	deflate: deflate$2,
	deflateEnd,
	deflateSetDictionary,
	deflateInfo: "pako deflate (from Nodeca project)"
};
var _has = (obj, key) => {
	return Object.prototype.hasOwnProperty.call(obj, key);
};
var assign$1 = function(obj) {
	const sources = Array.prototype.slice.call(arguments, 1);
	while (sources.length) {
		const source = sources.shift();
		if (!source) continue;
		if (typeof source !== "object") throw new TypeError(source + "must be non-object");
		for (const p in source) if (_has(source, p)) obj[p] = source[p];
	}
	return obj;
};
var flattenChunks = (chunks) => {
	let len = 0;
	for (let i = 0, l = chunks.length; i < l; i++) len += chunks[i].length;
	const result = new Uint8Array(len);
	for (let i = 0, pos = 0, l = chunks.length; i < l; i++) {
		let chunk = chunks[i];
		result.set(chunk, pos);
		pos += chunk.length;
	}
	return result;
};
var common = {
	assign: assign$1,
	flattenChunks
};
var STR_APPLY_UIA_OK = true;
try {
	String.fromCharCode.apply(null, /* @__PURE__ */ new Uint8Array(1));
} catch (__) {
	STR_APPLY_UIA_OK = false;
}
var _utf8len = /* @__PURE__ */ new Uint8Array(256);
for (let q = 0; q < 256; q++) _utf8len[q] = q >= 252 ? 6 : q >= 248 ? 5 : q >= 240 ? 4 : q >= 224 ? 3 : q >= 192 ? 2 : 1;
_utf8len[254] = _utf8len[254] = 1;
var string2buf = (str) => {
	if (typeof TextEncoder === "function" && TextEncoder.prototype.encode) return new TextEncoder().encode(str);
	let buf, c, c2, m_pos, i, str_len = str.length, buf_len = 0;
	for (m_pos = 0; m_pos < str_len; m_pos++) {
		c = str.charCodeAt(m_pos);
		if ((c & 64512) === 55296 && m_pos + 1 < str_len) {
			c2 = str.charCodeAt(m_pos + 1);
			if ((c2 & 64512) === 56320) {
				c = 65536 + (c - 55296 << 10) + (c2 - 56320);
				m_pos++;
			}
		}
		buf_len += c < 128 ? 1 : c < 2048 ? 2 : c < 65536 ? 3 : 4;
	}
	buf = new Uint8Array(buf_len);
	for (i = 0, m_pos = 0; i < buf_len; m_pos++) {
		c = str.charCodeAt(m_pos);
		if ((c & 64512) === 55296 && m_pos + 1 < str_len) {
			c2 = str.charCodeAt(m_pos + 1);
			if ((c2 & 64512) === 56320) {
				c = 65536 + (c - 55296 << 10) + (c2 - 56320);
				m_pos++;
			}
		}
		if (c < 128) buf[i++] = c;
		else if (c < 2048) {
			buf[i++] = 192 | c >>> 6;
			buf[i++] = 128 | c & 63;
		} else if (c < 65536) {
			buf[i++] = 224 | c >>> 12;
			buf[i++] = 128 | c >>> 6 & 63;
			buf[i++] = 128 | c & 63;
		} else {
			buf[i++] = 240 | c >>> 18;
			buf[i++] = 128 | c >>> 12 & 63;
			buf[i++] = 128 | c >>> 6 & 63;
			buf[i++] = 128 | c & 63;
		}
	}
	return buf;
};
var buf2binstring = (buf, len) => {
	if (len < 65534) {
		if (buf.subarray && STR_APPLY_UIA_OK) return String.fromCharCode.apply(null, buf.length === len ? buf : buf.subarray(0, len));
	}
	let result = "";
	for (let i = 0; i < len; i++) result += String.fromCharCode(buf[i]);
	return result;
};
var buf2string = (buf, max) => {
	const len = max || buf.length;
	if (typeof TextDecoder === "function" && TextDecoder.prototype.decode) return new TextDecoder().decode(buf.subarray(0, max));
	let i, out;
	const utf16buf = new Array(len * 2);
	for (out = 0, i = 0; i < len;) {
		let c = buf[i++];
		if (c < 128) {
			utf16buf[out++] = c;
			continue;
		}
		let c_len = _utf8len[c];
		if (c_len > 4) {
			utf16buf[out++] = 65533;
			i += c_len - 1;
			continue;
		}
		c &= c_len === 2 ? 31 : c_len === 3 ? 15 : 7;
		while (c_len > 1 && i < len) {
			c = c << 6 | buf[i++] & 63;
			c_len--;
		}
		if (c_len > 1) {
			utf16buf[out++] = 65533;
			continue;
		}
		if (c < 65536) utf16buf[out++] = c;
		else {
			c -= 65536;
			utf16buf[out++] = 55296 | c >> 10 & 1023;
			utf16buf[out++] = 56320 | c & 1023;
		}
	}
	return buf2binstring(utf16buf, out);
};
var utf8border = (buf, max) => {
	max = max || buf.length;
	if (max > buf.length) max = buf.length;
	let pos = max - 1;
	while (pos >= 0 && (buf[pos] & 192) === 128) pos--;
	if (pos < 0) return max;
	if (pos === 0) return max;
	return pos + _utf8len[buf[pos]] > max ? pos : max;
};
var strings = {
	string2buf,
	buf2string,
	utf8border
};
function ZStream() {
	this.input = null;
	this.next_in = 0;
	this.avail_in = 0;
	this.total_in = 0;
	this.output = null;
	this.next_out = 0;
	this.avail_out = 0;
	this.total_out = 0;
	this.msg = "";
	this.state = null;
	this.data_type = 2;
	this.adler = 0;
}
var zstream = ZStream;
var toString$1 = Object.prototype.toString;
var { Z_NO_FLUSH: Z_NO_FLUSH$1, Z_SYNC_FLUSH, Z_FULL_FLUSH, Z_FINISH: Z_FINISH$2, Z_OK: Z_OK$2, Z_STREAM_END: Z_STREAM_END$2, Z_DEFAULT_COMPRESSION, Z_DEFAULT_STRATEGY, Z_DEFLATED: Z_DEFLATED$1 } = constants$2;
/**
* class Deflate
*
* Generic JS-style wrapper for zlib calls. If you don't need
* streaming behaviour - use more simple functions: [[deflate]],
* [[deflateRaw]] and [[gzip]].
**/
/**
* Deflate.result -> Uint8Array
*
* Compressed result, generated by default [[Deflate#onData]]
* and [[Deflate#onEnd]] handlers. Filled after you push last chunk
* (call [[Deflate#push]] with `Z_FINISH` / `true` param).
**/
/**
* Deflate.err -> Number
*
* Error code after deflate finished. 0 (Z_OK) on success.
* You will not need it in real life, because deflate errors
* are possible only on wrong options or bad `onData` / `onEnd`
* custom handlers.
**/
/**
* Deflate.msg -> String
*
* Error message, if [[Deflate.err]] != 0
**/
/**
* new Deflate(options)
* - options (Object): zlib deflate options.
*
* Creates new deflator instance with specified params. Throws exception
* on bad params. Supported options:
*
* - `level`
* - `windowBits`
* - `memLevel`
* - `strategy`
* - `dictionary`
*
* [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
* for more information on these.
*
* Additional options, for internal needs:
*
* - `chunkSize` - size of generated data chunks (16K by default)
* - `raw` (Boolean) - do raw deflate
* - `gzip` (Boolean) - create gzip wrapper
* - `header` (Object) - custom header for gzip
*   - `text` (Boolean) - true if compressed data believed to be text
*   - `time` (Number) - modification time, unix timestamp
*   - `os` (Number) - operation system code
*   - `extra` (Array) - array of bytes with extra data (max 65536)
*   - `name` (String) - file name (binary string)
*   - `comment` (String) - comment (binary string)
*   - `hcrc` (Boolean) - true if header crc should be added
*
* ##### Example:
*
* ```javascript
* const pako = require('pako')
*   , chunk1 = new Uint8Array([1,2,3,4,5,6,7,8,9])
*   , chunk2 = new Uint8Array([10,11,12,13,14,15,16,17,18,19]);
*
* const deflate = new pako.Deflate({ level: 3});
*
* deflate.push(chunk1, false);
* deflate.push(chunk2, true);  // true -> last chunk
*
* if (deflate.err) { throw new Error(deflate.err); }
*
* console.log(deflate.result);
* ```
**/
function Deflate$1(options) {
	this.options = common.assign({
		level: Z_DEFAULT_COMPRESSION,
		method: Z_DEFLATED$1,
		chunkSize: 16384,
		windowBits: 15,
		memLevel: 8,
		strategy: Z_DEFAULT_STRATEGY
	}, options || {});
	let opt = this.options;
	if (opt.raw && opt.windowBits > 0) opt.windowBits = -opt.windowBits;
	else if (opt.gzip && opt.windowBits > 0 && opt.windowBits < 16) opt.windowBits += 16;
	this.err = 0;
	this.msg = "";
	this.ended = false;
	this.chunks = [];
	this.strm = new zstream();
	this.strm.avail_out = 0;
	let status = deflate_1$2.deflateInit2(this.strm, opt.level, opt.method, opt.windowBits, opt.memLevel, opt.strategy);
	if (status !== Z_OK$2) throw new Error(messages[status]);
	if (opt.header) deflate_1$2.deflateSetHeader(this.strm, opt.header);
	if (opt.dictionary) {
		let dict;
		if (typeof opt.dictionary === "string") dict = strings.string2buf(opt.dictionary);
		else if (toString$1.call(opt.dictionary) === "[object ArrayBuffer]") dict = new Uint8Array(opt.dictionary);
		else dict = opt.dictionary;
		status = deflate_1$2.deflateSetDictionary(this.strm, dict);
		if (status !== Z_OK$2) throw new Error(messages[status]);
		this._dict_set = true;
	}
}
/**
* Deflate#push(data[, flush_mode]) -> Boolean
* - data (Uint8Array|ArrayBuffer|String): input data. Strings will be
*   converted to utf8 byte sequence.
* - flush_mode (Number|Boolean): 0..6 for corresponding Z_NO_FLUSH..Z_TREE modes.
*   See constants. Skipped or `false` means Z_NO_FLUSH, `true` means Z_FINISH.
*
* Sends input data to deflate pipe, generating [[Deflate#onData]] calls with
* new compressed chunks. Returns `true` on success. The last data block must
* have `flush_mode` Z_FINISH (or `true`). That will flush internal pending
* buffers and call [[Deflate#onEnd]].
*
* On fail call [[Deflate#onEnd]] with error code and return false.
*
* ##### Example
*
* ```javascript
* push(chunk, false); // push one of data chunks
* ...
* push(chunk, true);  // push last chunk
* ```
**/
Deflate$1.prototype.push = function(data, flush_mode) {
	const strm = this.strm;
	const chunkSize = this.options.chunkSize;
	let status, _flush_mode;
	if (this.ended) return false;
	if (flush_mode === ~~flush_mode) _flush_mode = flush_mode;
	else _flush_mode = flush_mode === true ? Z_FINISH$2 : Z_NO_FLUSH$1;
	if (typeof data === "string") strm.input = strings.string2buf(data);
	else if (toString$1.call(data) === "[object ArrayBuffer]") strm.input = new Uint8Array(data);
	else strm.input = data;
	strm.next_in = 0;
	strm.avail_in = strm.input.length;
	for (;;) {
		if (strm.avail_out === 0) {
			strm.output = new Uint8Array(chunkSize);
			strm.next_out = 0;
			strm.avail_out = chunkSize;
		}
		if ((_flush_mode === Z_SYNC_FLUSH || _flush_mode === Z_FULL_FLUSH) && strm.avail_out <= 6) {
			this.onData(strm.output.subarray(0, strm.next_out));
			strm.avail_out = 0;
			continue;
		}
		status = deflate_1$2.deflate(strm, _flush_mode);
		if (status === Z_STREAM_END$2) {
			if (strm.next_out > 0) this.onData(strm.output.subarray(0, strm.next_out));
			status = deflate_1$2.deflateEnd(this.strm);
			this.onEnd(status);
			this.ended = true;
			return status === Z_OK$2;
		}
		if (strm.avail_out === 0) {
			this.onData(strm.output);
			continue;
		}
		if (_flush_mode > 0 && strm.next_out > 0) {
			this.onData(strm.output.subarray(0, strm.next_out));
			strm.avail_out = 0;
			continue;
		}
		if (strm.avail_in === 0) break;
	}
	return true;
};
/**
* Deflate#onData(chunk) -> Void
* - chunk (Uint8Array): output data.
*
* By default, stores data blocks in `chunks[]` property and glue
* those in `onEnd`. Override this handler, if you need another behaviour.
**/
Deflate$1.prototype.onData = function(chunk) {
	this.chunks.push(chunk);
};
/**
* Deflate#onEnd(status) -> Void
* - status (Number): deflate status. 0 (Z_OK) on success,
*   other if not.
*
* Called once after you tell deflate that the input stream is
* complete (Z_FINISH). By default - join collected chunks,
* free memory and fill `results` / `err` properties.
**/
Deflate$1.prototype.onEnd = function(status) {
	if (status === Z_OK$2) this.result = common.flattenChunks(this.chunks);
	this.chunks = [];
	this.err = status;
	this.msg = this.strm.msg;
};
/**
* deflate(data[, options]) -> Uint8Array
* - data (Uint8Array|ArrayBuffer|String): input data to compress.
* - options (Object): zlib deflate options.
*
* Compress `data` with deflate algorithm and `options`.
*
* Supported options are:
*
* - level
* - windowBits
* - memLevel
* - strategy
* - dictionary
*
* [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
* for more information on these.
*
* Sugar (options):
*
* - `raw` (Boolean) - say that we work with raw stream, if you don't wish to specify
*   negative windowBits implicitly.
*
* ##### Example:
*
* ```javascript
* const pako = require('pako')
* const data = new Uint8Array([1,2,3,4,5,6,7,8,9]);
*
* console.log(pako.deflate(data));
* ```
**/
function deflate$1(input, options) {
	const deflator = new Deflate$1(options);
	deflator.push(input, true);
	if (deflator.err) throw deflator.msg || messages[deflator.err];
	return deflator.result;
}
/**
* deflateRaw(data[, options]) -> Uint8Array
* - data (Uint8Array|ArrayBuffer|String): input data to compress.
* - options (Object): zlib deflate options.
*
* The same as [[deflate]], but creates raw data, without wrapper
* (header and adler32 crc).
**/
function deflateRaw$1(input, options) {
	options = options || {};
	options.raw = true;
	return deflate$1(input, options);
}
/**
* gzip(data[, options]) -> Uint8Array
* - data (Uint8Array|ArrayBuffer|String): input data to compress.
* - options (Object): zlib deflate options.
*
* The same as [[deflate]], but create gzip wrapper instead of
* deflate one.
**/
function gzip$1(input, options) {
	options = options || {};
	options.gzip = true;
	return deflate$1(input, options);
}
var deflate_1$1 = {
	Deflate: Deflate$1,
	deflate: deflate$1,
	deflateRaw: deflateRaw$1,
	gzip: gzip$1,
	constants: constants$2
};
var BAD$1 = 16209;
var TYPE$1 = 16191;
var inffast = function inflate_fast(strm, start) {
	let _in;
	let last;
	let _out;
	let beg;
	let end;
	let dmax;
	let wsize;
	let whave;
	let wnext;
	let s_window;
	let hold;
	let bits;
	let lcode;
	let dcode;
	let lmask;
	let dmask;
	let here;
	let op;
	let len;
	let dist;
	let from;
	let from_source;
	let input, output;
	const state = strm.state;
	_in = strm.next_in;
	input = strm.input;
	last = _in + (strm.avail_in - 5);
	_out = strm.next_out;
	output = strm.output;
	beg = _out - (start - strm.avail_out);
	end = _out + (strm.avail_out - 257);
	dmax = state.dmax;
	wsize = state.wsize;
	whave = state.whave;
	wnext = state.wnext;
	s_window = state.window;
	hold = state.hold;
	bits = state.bits;
	lcode = state.lencode;
	dcode = state.distcode;
	lmask = (1 << state.lenbits) - 1;
	dmask = (1 << state.distbits) - 1;
	top: do {
		if (bits < 15) {
			hold += input[_in++] << bits;
			bits += 8;
			hold += input[_in++] << bits;
			bits += 8;
		}
		here = lcode[hold & lmask];
		dolen: for (;;) {
			op = here >>> 24;
			hold >>>= op;
			bits -= op;
			op = here >>> 16 & 255;
			if (op === 0) output[_out++] = here & 65535;
			else if (op & 16) {
				len = here & 65535;
				op &= 15;
				if (op) {
					if (bits < op) {
						hold += input[_in++] << bits;
						bits += 8;
					}
					len += hold & (1 << op) - 1;
					hold >>>= op;
					bits -= op;
				}
				if (bits < 15) {
					hold += input[_in++] << bits;
					bits += 8;
					hold += input[_in++] << bits;
					bits += 8;
				}
				here = dcode[hold & dmask];
				dodist: for (;;) {
					op = here >>> 24;
					hold >>>= op;
					bits -= op;
					op = here >>> 16 & 255;
					if (op & 16) {
						dist = here & 65535;
						op &= 15;
						if (bits < op) {
							hold += input[_in++] << bits;
							bits += 8;
							if (bits < op) {
								hold += input[_in++] << bits;
								bits += 8;
							}
						}
						dist += hold & (1 << op) - 1;
						if (dist > dmax) {
							strm.msg = "invalid distance too far back";
							state.mode = BAD$1;
							break top;
						}
						hold >>>= op;
						bits -= op;
						op = _out - beg;
						if (dist > op) {
							op = dist - op;
							if (op > whave) {
								if (state.sane) {
									strm.msg = "invalid distance too far back";
									state.mode = BAD$1;
									break top;
								}
							}
							from = 0;
							from_source = s_window;
							if (wnext === 0) {
								from += wsize - op;
								if (op < len) {
									len -= op;
									do
										output[_out++] = s_window[from++];
									while (--op);
									from = _out - dist;
									from_source = output;
								}
							} else if (wnext < op) {
								from += wsize + wnext - op;
								op -= wnext;
								if (op < len) {
									len -= op;
									do
										output[_out++] = s_window[from++];
									while (--op);
									from = 0;
									if (wnext < len) {
										op = wnext;
										len -= op;
										do
											output[_out++] = s_window[from++];
										while (--op);
										from = _out - dist;
										from_source = output;
									}
								}
							} else {
								from += wnext - op;
								if (op < len) {
									len -= op;
									do
										output[_out++] = s_window[from++];
									while (--op);
									from = _out - dist;
									from_source = output;
								}
							}
							while (len > 2) {
								output[_out++] = from_source[from++];
								output[_out++] = from_source[from++];
								output[_out++] = from_source[from++];
								len -= 3;
							}
							if (len) {
								output[_out++] = from_source[from++];
								if (len > 1) output[_out++] = from_source[from++];
							}
						} else {
							from = _out - dist;
							do {
								output[_out++] = output[from++];
								output[_out++] = output[from++];
								output[_out++] = output[from++];
								len -= 3;
							} while (len > 2);
							if (len) {
								output[_out++] = output[from++];
								if (len > 1) output[_out++] = output[from++];
							}
						}
					} else if ((op & 64) === 0) {
						here = dcode[(here & 65535) + (hold & (1 << op) - 1)];
						continue dodist;
					} else {
						strm.msg = "invalid distance code";
						state.mode = BAD$1;
						break top;
					}
					break;
				}
			} else if ((op & 64) === 0) {
				here = lcode[(here & 65535) + (hold & (1 << op) - 1)];
				continue dolen;
			} else if (op & 32) {
				state.mode = TYPE$1;
				break top;
			} else {
				strm.msg = "invalid literal/length code";
				state.mode = BAD$1;
				break top;
			}
			break;
		}
	} while (_in < last && _out < end);
	len = bits >> 3;
	_in -= len;
	bits -= len << 3;
	hold &= (1 << bits) - 1;
	strm.next_in = _in;
	strm.next_out = _out;
	strm.avail_in = _in < last ? 5 + (last - _in) : 5 - (_in - last);
	strm.avail_out = _out < end ? 257 + (end - _out) : 257 - (_out - end);
	state.hold = hold;
	state.bits = bits;
};
var MAXBITS = 15;
var ENOUGH_LENS$1 = 852;
var ENOUGH_DISTS$1 = 592;
var CODES$1 = 0;
var LENS$1 = 1;
var DISTS$1 = 2;
var lbase = new Uint16Array([
	3,
	4,
	5,
	6,
	7,
	8,
	9,
	10,
	11,
	13,
	15,
	17,
	19,
	23,
	27,
	31,
	35,
	43,
	51,
	59,
	67,
	83,
	99,
	115,
	131,
	163,
	195,
	227,
	258,
	0,
	0
]);
var lext = new Uint8Array([
	16,
	16,
	16,
	16,
	16,
	16,
	16,
	16,
	17,
	17,
	17,
	17,
	18,
	18,
	18,
	18,
	19,
	19,
	19,
	19,
	20,
	20,
	20,
	20,
	21,
	21,
	21,
	21,
	16,
	72,
	78
]);
var dbase = new Uint16Array([
	1,
	2,
	3,
	4,
	5,
	7,
	9,
	13,
	17,
	25,
	33,
	49,
	65,
	97,
	129,
	193,
	257,
	385,
	513,
	769,
	1025,
	1537,
	2049,
	3073,
	4097,
	6145,
	8193,
	12289,
	16385,
	24577,
	0,
	0
]);
var dext = new Uint8Array([
	16,
	16,
	16,
	16,
	17,
	17,
	18,
	18,
	19,
	19,
	20,
	20,
	21,
	21,
	22,
	22,
	23,
	23,
	24,
	24,
	25,
	25,
	26,
	26,
	27,
	27,
	28,
	28,
	29,
	29,
	64,
	64
]);
var inflate_table = (type, lens, lens_index, codes, table, table_index, work, opts) => {
	const bits = opts.bits;
	let len = 0;
	let sym = 0;
	let min = 0, max = 0;
	let root = 0;
	let curr = 0;
	let drop = 0;
	let left = 0;
	let used = 0;
	let huff = 0;
	let incr;
	let fill;
	let low;
	let mask;
	let next;
	let base = null;
	let match;
	const count = /* @__PURE__ */ new Uint16Array(16);
	const offs = /* @__PURE__ */ new Uint16Array(16);
	let extra = null;
	let here_bits, here_op, here_val;
	for (len = 0; len <= MAXBITS; len++) count[len] = 0;
	for (sym = 0; sym < codes; sym++) count[lens[lens_index + sym]]++;
	root = bits;
	for (max = MAXBITS; max >= 1; max--) if (count[max] !== 0) break;
	if (root > max) root = max;
	if (max === 0) {
		table[table_index++] = 20971520;
		table[table_index++] = 20971520;
		opts.bits = 1;
		return 0;
	}
	for (min = 1; min < max; min++) if (count[min] !== 0) break;
	if (root < min) root = min;
	left = 1;
	for (len = 1; len <= MAXBITS; len++) {
		left <<= 1;
		left -= count[len];
		if (left < 0) return -1;
	}
	if (left > 0 && (type === CODES$1 || max !== 1)) return -1;
	offs[1] = 0;
	for (len = 1; len < MAXBITS; len++) offs[len + 1] = offs[len] + count[len];
	for (sym = 0; sym < codes; sym++) if (lens[lens_index + sym] !== 0) work[offs[lens[lens_index + sym]]++] = sym;
	if (type === CODES$1) {
		base = extra = work;
		match = 20;
	} else if (type === LENS$1) {
		base = lbase;
		extra = lext;
		match = 257;
	} else {
		base = dbase;
		extra = dext;
		match = 0;
	}
	huff = 0;
	sym = 0;
	len = min;
	next = table_index;
	curr = root;
	drop = 0;
	low = -1;
	used = 1 << root;
	mask = used - 1;
	if (type === LENS$1 && used > ENOUGH_LENS$1 || type === DISTS$1 && used > ENOUGH_DISTS$1) return 1;
	for (;;) {
		here_bits = len - drop;
		if (work[sym] + 1 < match) {
			here_op = 0;
			here_val = work[sym];
		} else if (work[sym] >= match) {
			here_op = extra[work[sym] - match];
			here_val = base[work[sym] - match];
		} else {
			here_op = 96;
			here_val = 0;
		}
		incr = 1 << len - drop;
		fill = 1 << curr;
		min = fill;
		do {
			fill -= incr;
			table[next + (huff >> drop) + fill] = here_bits << 24 | here_op << 16 | here_val | 0;
		} while (fill !== 0);
		incr = 1 << len - 1;
		while (huff & incr) incr >>= 1;
		if (incr !== 0) {
			huff &= incr - 1;
			huff += incr;
		} else huff = 0;
		sym++;
		if (--count[len] === 0) {
			if (len === max) break;
			len = lens[lens_index + work[sym]];
		}
		if (len > root && (huff & mask) !== low) {
			if (drop === 0) drop = root;
			next += min;
			curr = len - drop;
			left = 1 << curr;
			while (curr + drop < max) {
				left -= count[curr + drop];
				if (left <= 0) break;
				curr++;
				left <<= 1;
			}
			used += 1 << curr;
			if (type === LENS$1 && used > ENOUGH_LENS$1 || type === DISTS$1 && used > ENOUGH_DISTS$1) return 1;
			low = huff & mask;
			table[low] = root << 24 | curr << 16 | next - table_index | 0;
		}
	}
	if (huff !== 0) table[next + huff] = len - drop << 24 | 4194304;
	opts.bits = root;
	return 0;
};
var inftrees = inflate_table;
var CODES = 0;
var LENS = 1;
var DISTS = 2;
var { Z_FINISH: Z_FINISH$1, Z_BLOCK, Z_TREES, Z_OK: Z_OK$1, Z_STREAM_END: Z_STREAM_END$1, Z_NEED_DICT: Z_NEED_DICT$1, Z_STREAM_ERROR: Z_STREAM_ERROR$1, Z_DATA_ERROR: Z_DATA_ERROR$1, Z_MEM_ERROR: Z_MEM_ERROR$1, Z_BUF_ERROR, Z_DEFLATED } = constants$2;
var HEAD = 16180;
var FLAGS = 16181;
var TIME = 16182;
var OS = 16183;
var EXLEN = 16184;
var EXTRA = 16185;
var NAME = 16186;
var COMMENT = 16187;
var HCRC = 16188;
var DICTID = 16189;
var DICT = 16190;
var TYPE = 16191;
var TYPEDO = 16192;
var STORED = 16193;
var COPY_ = 16194;
var COPY = 16195;
var TABLE = 16196;
var LENLENS = 16197;
var CODELENS = 16198;
var LEN_ = 16199;
var LEN = 16200;
var LENEXT = 16201;
var DIST = 16202;
var DISTEXT = 16203;
var MATCH = 16204;
var LIT = 16205;
var CHECK = 16206;
var LENGTH = 16207;
var DONE = 16208;
var BAD = 16209;
var MEM = 16210;
var SYNC = 16211;
var ENOUGH_LENS = 852;
var ENOUGH_DISTS = 592;
var DEF_WBITS = 15;
var zswap32 = (q) => {
	return (q >>> 24 & 255) + (q >>> 8 & 65280) + ((q & 65280) << 8) + ((q & 255) << 24);
};
function InflateState() {
	this.strm = null;
	this.mode = 0;
	this.last = false;
	this.wrap = 0;
	this.havedict = false;
	this.flags = 0;
	this.dmax = 0;
	this.check = 0;
	this.total = 0;
	this.head = null;
	this.wbits = 0;
	this.wsize = 0;
	this.whave = 0;
	this.wnext = 0;
	this.window = null;
	this.hold = 0;
	this.bits = 0;
	this.length = 0;
	this.offset = 0;
	this.extra = 0;
	this.lencode = null;
	this.distcode = null;
	this.lenbits = 0;
	this.distbits = 0;
	this.ncode = 0;
	this.nlen = 0;
	this.ndist = 0;
	this.have = 0;
	this.next = null;
	this.lens = /* @__PURE__ */ new Uint16Array(320);
	this.work = /* @__PURE__ */ new Uint16Array(288);
	this.lendyn = null;
	this.distdyn = null;
	this.sane = 0;
	this.back = 0;
	this.was = 0;
}
var inflateStateCheck = (strm) => {
	if (!strm) return 1;
	const state = strm.state;
	if (!state || state.strm !== strm || state.mode < HEAD || state.mode > SYNC) return 1;
	return 0;
};
var inflateResetKeep = (strm) => {
	if (inflateStateCheck(strm)) return Z_STREAM_ERROR$1;
	const state = strm.state;
	strm.total_in = strm.total_out = state.total = 0;
	strm.msg = "";
	if (state.wrap) strm.adler = state.wrap & 1;
	state.mode = HEAD;
	state.last = 0;
	state.havedict = 0;
	state.flags = -1;
	state.dmax = 32768;
	state.head = null;
	state.hold = 0;
	state.bits = 0;
	state.lencode = state.lendyn = new Int32Array(ENOUGH_LENS);
	state.distcode = state.distdyn = new Int32Array(ENOUGH_DISTS);
	state.sane = 1;
	state.back = -1;
	return Z_OK$1;
};
var inflateReset = (strm) => {
	if (inflateStateCheck(strm)) return Z_STREAM_ERROR$1;
	const state = strm.state;
	state.wsize = 0;
	state.whave = 0;
	state.wnext = 0;
	return inflateResetKeep(strm);
};
var inflateReset2 = (strm, windowBits) => {
	let wrap;
	if (inflateStateCheck(strm)) return Z_STREAM_ERROR$1;
	const state = strm.state;
	if (windowBits < 0) {
		wrap = 0;
		windowBits = -windowBits;
	} else {
		wrap = (windowBits >> 4) + 5;
		if (windowBits < 48) windowBits &= 15;
	}
	if (windowBits && (windowBits < 8 || windowBits > 15)) return Z_STREAM_ERROR$1;
	if (state.window !== null && state.wbits !== windowBits) state.window = null;
	state.wrap = wrap;
	state.wbits = windowBits;
	return inflateReset(strm);
};
var inflateInit2 = (strm, windowBits) => {
	if (!strm) return Z_STREAM_ERROR$1;
	const state = new InflateState();
	strm.state = state;
	state.strm = strm;
	state.window = null;
	state.mode = HEAD;
	const ret = inflateReset2(strm, windowBits);
	if (ret !== Z_OK$1) strm.state = null;
	return ret;
};
var inflateInit = (strm) => {
	return inflateInit2(strm, DEF_WBITS);
};
var virgin = true;
var lenfix;
var distfix;
var fixedtables = (state) => {
	if (virgin) {
		lenfix = /* @__PURE__ */ new Int32Array(512);
		distfix = /* @__PURE__ */ new Int32Array(32);
		let sym = 0;
		while (sym < 144) state.lens[sym++] = 8;
		while (sym < 256) state.lens[sym++] = 9;
		while (sym < 280) state.lens[sym++] = 7;
		while (sym < 288) state.lens[sym++] = 8;
		inftrees(LENS, state.lens, 0, 288, lenfix, 0, state.work, { bits: 9 });
		sym = 0;
		while (sym < 32) state.lens[sym++] = 5;
		inftrees(DISTS, state.lens, 0, 32, distfix, 0, state.work, { bits: 5 });
		virgin = false;
	}
	state.lencode = lenfix;
	state.lenbits = 9;
	state.distcode = distfix;
	state.distbits = 5;
};
var updatewindow = (strm, src, end, copy) => {
	let dist;
	const state = strm.state;
	if (state.window === null) {
		state.wsize = 1 << state.wbits;
		state.wnext = 0;
		state.whave = 0;
		state.window = new Uint8Array(state.wsize);
	}
	if (copy >= state.wsize) {
		state.window.set(src.subarray(end - state.wsize, end), 0);
		state.wnext = 0;
		state.whave = state.wsize;
	} else {
		dist = state.wsize - state.wnext;
		if (dist > copy) dist = copy;
		state.window.set(src.subarray(end - copy, end - copy + dist), state.wnext);
		copy -= dist;
		if (copy) {
			state.window.set(src.subarray(end - copy, end), 0);
			state.wnext = copy;
			state.whave = state.wsize;
		} else {
			state.wnext += dist;
			if (state.wnext === state.wsize) state.wnext = 0;
			if (state.whave < state.wsize) state.whave += dist;
		}
	}
	return 0;
};
var inflate$2 = (strm, flush) => {
	let state;
	let input, output;
	let next;
	let put;
	let have, left;
	let hold;
	let bits;
	let _in, _out;
	let copy;
	let from;
	let from_source;
	let here = 0;
	let here_bits, here_op, here_val;
	let last_bits, last_op, last_val;
	let len;
	let ret;
	const hbuf = /* @__PURE__ */ new Uint8Array(4);
	let opts;
	let n;
	const order = new Uint8Array([
		16,
		17,
		18,
		0,
		8,
		7,
		9,
		6,
		10,
		5,
		11,
		4,
		12,
		3,
		13,
		2,
		14,
		1,
		15
	]);
	if (inflateStateCheck(strm) || !strm.output || !strm.input && strm.avail_in !== 0) return Z_STREAM_ERROR$1;
	state = strm.state;
	if (state.mode === TYPE) state.mode = TYPEDO;
	put = strm.next_out;
	output = strm.output;
	left = strm.avail_out;
	next = strm.next_in;
	input = strm.input;
	have = strm.avail_in;
	hold = state.hold;
	bits = state.bits;
	_in = have;
	_out = left;
	ret = Z_OK$1;
	inf_leave: for (;;) switch (state.mode) {
		case HEAD:
			if (state.wrap === 0) {
				state.mode = TYPEDO;
				break;
			}
			while (bits < 16) {
				if (have === 0) break inf_leave;
				have--;
				hold += input[next++] << bits;
				bits += 8;
			}
			if (state.wrap & 2 && hold === 35615) {
				if (state.wbits === 0) state.wbits = 15;
				state.check = 0;
				hbuf[0] = hold & 255;
				hbuf[1] = hold >>> 8 & 255;
				state.check = crc32_1(state.check, hbuf, 2, 0);
				hold = 0;
				bits = 0;
				state.mode = FLAGS;
				break;
			}
			if (state.head) state.head.done = false;
			if (!(state.wrap & 1) || (((hold & 255) << 8) + (hold >> 8)) % 31) {
				strm.msg = "incorrect header check";
				state.mode = BAD;
				break;
			}
			if ((hold & 15) !== Z_DEFLATED) {
				strm.msg = "unknown compression method";
				state.mode = BAD;
				break;
			}
			hold >>>= 4;
			bits -= 4;
			len = (hold & 15) + 8;
			if (state.wbits === 0) state.wbits = len;
			if (len > 15 || len > state.wbits) {
				strm.msg = "invalid window size";
				state.mode = BAD;
				break;
			}
			state.dmax = 1 << state.wbits;
			state.flags = 0;
			strm.adler = state.check = 1;
			state.mode = hold & 512 ? DICTID : TYPE;
			hold = 0;
			bits = 0;
			break;
		case FLAGS:
			while (bits < 16) {
				if (have === 0) break inf_leave;
				have--;
				hold += input[next++] << bits;
				bits += 8;
			}
			state.flags = hold;
			if ((state.flags & 255) !== Z_DEFLATED) {
				strm.msg = "unknown compression method";
				state.mode = BAD;
				break;
			}
			if (state.flags & 57344) {
				strm.msg = "unknown header flags set";
				state.mode = BAD;
				break;
			}
			if (state.head) state.head.text = hold >> 8 & 1;
			if (state.flags & 512 && state.wrap & 4) {
				hbuf[0] = hold & 255;
				hbuf[1] = hold >>> 8 & 255;
				state.check = crc32_1(state.check, hbuf, 2, 0);
			}
			hold = 0;
			bits = 0;
			state.mode = TIME;
		case TIME:
			while (bits < 32) {
				if (have === 0) break inf_leave;
				have--;
				hold += input[next++] << bits;
				bits += 8;
			}
			if (state.head) state.head.time = hold;
			if (state.flags & 512 && state.wrap & 4) {
				hbuf[0] = hold & 255;
				hbuf[1] = hold >>> 8 & 255;
				hbuf[2] = hold >>> 16 & 255;
				hbuf[3] = hold >>> 24 & 255;
				state.check = crc32_1(state.check, hbuf, 4, 0);
			}
			hold = 0;
			bits = 0;
			state.mode = OS;
		case OS:
			while (bits < 16) {
				if (have === 0) break inf_leave;
				have--;
				hold += input[next++] << bits;
				bits += 8;
			}
			if (state.head) {
				state.head.xflags = hold & 255;
				state.head.os = hold >> 8;
			}
			if (state.flags & 512 && state.wrap & 4) {
				hbuf[0] = hold & 255;
				hbuf[1] = hold >>> 8 & 255;
				state.check = crc32_1(state.check, hbuf, 2, 0);
			}
			hold = 0;
			bits = 0;
			state.mode = EXLEN;
		case EXLEN:
			if (state.flags & 1024) {
				while (bits < 16) {
					if (have === 0) break inf_leave;
					have--;
					hold += input[next++] << bits;
					bits += 8;
				}
				state.length = hold;
				if (state.head) state.head.extra_len = hold;
				if (state.flags & 512 && state.wrap & 4) {
					hbuf[0] = hold & 255;
					hbuf[1] = hold >>> 8 & 255;
					state.check = crc32_1(state.check, hbuf, 2, 0);
				}
				hold = 0;
				bits = 0;
			} else if (state.head) state.head.extra = null;
			state.mode = EXTRA;
		case EXTRA:
			if (state.flags & 1024) {
				copy = state.length;
				if (copy > have) copy = have;
				if (copy) {
					if (state.head) {
						len = state.head.extra_len - state.length;
						if (!state.head.extra) state.head.extra = new Uint8Array(state.head.extra_len);
						state.head.extra.set(input.subarray(next, next + copy), len);
					}
					if (state.flags & 512 && state.wrap & 4) state.check = crc32_1(state.check, input, copy, next);
					have -= copy;
					next += copy;
					state.length -= copy;
				}
				if (state.length) break inf_leave;
			}
			state.length = 0;
			state.mode = NAME;
		case NAME:
			if (state.flags & 2048) {
				if (have === 0) break inf_leave;
				copy = 0;
				do {
					len = input[next + copy++];
					if (state.head && len && state.length < 65536) state.head.name += String.fromCharCode(len);
				} while (len && copy < have);
				if (state.flags & 512 && state.wrap & 4) state.check = crc32_1(state.check, input, copy, next);
				have -= copy;
				next += copy;
				if (len) break inf_leave;
			} else if (state.head) state.head.name = null;
			state.length = 0;
			state.mode = COMMENT;
		case COMMENT:
			if (state.flags & 4096) {
				if (have === 0) break inf_leave;
				copy = 0;
				do {
					len = input[next + copy++];
					if (state.head && len && state.length < 65536) state.head.comment += String.fromCharCode(len);
				} while (len && copy < have);
				if (state.flags & 512 && state.wrap & 4) state.check = crc32_1(state.check, input, copy, next);
				have -= copy;
				next += copy;
				if (len) break inf_leave;
			} else if (state.head) state.head.comment = null;
			state.mode = HCRC;
		case HCRC:
			if (state.flags & 512) {
				while (bits < 16) {
					if (have === 0) break inf_leave;
					have--;
					hold += input[next++] << bits;
					bits += 8;
				}
				if (state.wrap & 4 && hold !== (state.check & 65535)) {
					strm.msg = "header crc mismatch";
					state.mode = BAD;
					break;
				}
				hold = 0;
				bits = 0;
			}
			if (state.head) {
				state.head.hcrc = state.flags >> 9 & 1;
				state.head.done = true;
			}
			strm.adler = state.check = 0;
			state.mode = TYPE;
			break;
		case DICTID:
			while (bits < 32) {
				if (have === 0) break inf_leave;
				have--;
				hold += input[next++] << bits;
				bits += 8;
			}
			strm.adler = state.check = zswap32(hold);
			hold = 0;
			bits = 0;
			state.mode = DICT;
		case DICT:
			if (state.havedict === 0) {
				strm.next_out = put;
				strm.avail_out = left;
				strm.next_in = next;
				strm.avail_in = have;
				state.hold = hold;
				state.bits = bits;
				return Z_NEED_DICT$1;
			}
			strm.adler = state.check = 1;
			state.mode = TYPE;
		case TYPE: if (flush === Z_BLOCK || flush === Z_TREES) break inf_leave;
		case TYPEDO:
			if (state.last) {
				hold >>>= bits & 7;
				bits -= bits & 7;
				state.mode = CHECK;
				break;
			}
			while (bits < 3) {
				if (have === 0) break inf_leave;
				have--;
				hold += input[next++] << bits;
				bits += 8;
			}
			state.last = hold & 1;
			hold >>>= 1;
			bits -= 1;
			switch (hold & 3) {
				case 0:
					state.mode = STORED;
					break;
				case 1:
					fixedtables(state);
					state.mode = LEN_;
					if (flush === Z_TREES) {
						hold >>>= 2;
						bits -= 2;
						break inf_leave;
					}
					break;
				case 2:
					state.mode = TABLE;
					break;
				case 3:
					strm.msg = "invalid block type";
					state.mode = BAD;
			}
			hold >>>= 2;
			bits -= 2;
			break;
		case STORED:
			hold >>>= bits & 7;
			bits -= bits & 7;
			while (bits < 32) {
				if (have === 0) break inf_leave;
				have--;
				hold += input[next++] << bits;
				bits += 8;
			}
			if ((hold & 65535) !== (hold >>> 16 ^ 65535)) {
				strm.msg = "invalid stored block lengths";
				state.mode = BAD;
				break;
			}
			state.length = hold & 65535;
			hold = 0;
			bits = 0;
			state.mode = COPY_;
			if (flush === Z_TREES) break inf_leave;
		case COPY_: state.mode = COPY;
		case COPY:
			copy = state.length;
			if (copy) {
				if (copy > have) copy = have;
				if (copy > left) copy = left;
				if (copy === 0) break inf_leave;
				output.set(input.subarray(next, next + copy), put);
				have -= copy;
				next += copy;
				left -= copy;
				put += copy;
				state.length -= copy;
				break;
			}
			state.mode = TYPE;
			break;
		case TABLE:
			while (bits < 14) {
				if (have === 0) break inf_leave;
				have--;
				hold += input[next++] << bits;
				bits += 8;
			}
			state.nlen = (hold & 31) + 257;
			hold >>>= 5;
			bits -= 5;
			state.ndist = (hold & 31) + 1;
			hold >>>= 5;
			bits -= 5;
			state.ncode = (hold & 15) + 4;
			hold >>>= 4;
			bits -= 4;
			if (state.nlen > 286 || state.ndist > 30) {
				strm.msg = "too many length or distance symbols";
				state.mode = BAD;
				break;
			}
			state.have = 0;
			state.mode = LENLENS;
		case LENLENS:
			while (state.have < state.ncode) {
				while (bits < 3) {
					if (have === 0) break inf_leave;
					have--;
					hold += input[next++] << bits;
					bits += 8;
				}
				state.lens[order[state.have++]] = hold & 7;
				hold >>>= 3;
				bits -= 3;
			}
			while (state.have < 19) state.lens[order[state.have++]] = 0;
			state.lencode = state.lendyn;
			state.lenbits = 7;
			opts = { bits: state.lenbits };
			ret = inftrees(CODES, state.lens, 0, 19, state.lencode, 0, state.work, opts);
			state.lenbits = opts.bits;
			if (ret) {
				strm.msg = "invalid code lengths set";
				state.mode = BAD;
				break;
			}
			state.have = 0;
			state.mode = CODELENS;
		case CODELENS:
			while (state.have < state.nlen + state.ndist) {
				for (;;) {
					here = state.lencode[hold & (1 << state.lenbits) - 1];
					here_bits = here >>> 24;
					here_op = here >>> 16 & 255;
					here_val = here & 65535;
					if (here_bits <= bits) break;
					if (have === 0) break inf_leave;
					have--;
					hold += input[next++] << bits;
					bits += 8;
				}
				if (here_val < 16) {
					hold >>>= here_bits;
					bits -= here_bits;
					state.lens[state.have++] = here_val;
				} else {
					if (here_val === 16) {
						n = here_bits + 2;
						while (bits < n) {
							if (have === 0) break inf_leave;
							have--;
							hold += input[next++] << bits;
							bits += 8;
						}
						hold >>>= here_bits;
						bits -= here_bits;
						if (state.have === 0) {
							strm.msg = "invalid bit length repeat";
							state.mode = BAD;
							break;
						}
						len = state.lens[state.have - 1];
						copy = 3 + (hold & 3);
						hold >>>= 2;
						bits -= 2;
					} else if (here_val === 17) {
						n = here_bits + 3;
						while (bits < n) {
							if (have === 0) break inf_leave;
							have--;
							hold += input[next++] << bits;
							bits += 8;
						}
						hold >>>= here_bits;
						bits -= here_bits;
						len = 0;
						copy = 3 + (hold & 7);
						hold >>>= 3;
						bits -= 3;
					} else {
						n = here_bits + 7;
						while (bits < n) {
							if (have === 0) break inf_leave;
							have--;
							hold += input[next++] << bits;
							bits += 8;
						}
						hold >>>= here_bits;
						bits -= here_bits;
						len = 0;
						copy = 11 + (hold & 127);
						hold >>>= 7;
						bits -= 7;
					}
					if (state.have + copy > state.nlen + state.ndist) {
						strm.msg = "invalid bit length repeat";
						state.mode = BAD;
						break;
					}
					while (copy--) state.lens[state.have++] = len;
				}
			}
			if (state.mode === BAD) break;
			if (state.lens[256] === 0) {
				strm.msg = "invalid code -- missing end-of-block";
				state.mode = BAD;
				break;
			}
			state.lenbits = 9;
			opts = { bits: state.lenbits };
			ret = inftrees(LENS, state.lens, 0, state.nlen, state.lencode, 0, state.work, opts);
			state.lenbits = opts.bits;
			if (ret) {
				strm.msg = "invalid literal/lengths set";
				state.mode = BAD;
				break;
			}
			state.distbits = 6;
			state.distcode = state.distdyn;
			opts = { bits: state.distbits };
			ret = inftrees(DISTS, state.lens, state.nlen, state.ndist, state.distcode, 0, state.work, opts);
			state.distbits = opts.bits;
			if (ret) {
				strm.msg = "invalid distances set";
				state.mode = BAD;
				break;
			}
			state.mode = LEN_;
			if (flush === Z_TREES) break inf_leave;
		case LEN_: state.mode = LEN;
		case LEN:
			if (have >= 6 && left >= 258) {
				strm.next_out = put;
				strm.avail_out = left;
				strm.next_in = next;
				strm.avail_in = have;
				state.hold = hold;
				state.bits = bits;
				inffast(strm, _out);
				put = strm.next_out;
				output = strm.output;
				left = strm.avail_out;
				next = strm.next_in;
				input = strm.input;
				have = strm.avail_in;
				hold = state.hold;
				bits = state.bits;
				if (state.mode === TYPE) state.back = -1;
				break;
			}
			state.back = 0;
			for (;;) {
				here = state.lencode[hold & (1 << state.lenbits) - 1];
				here_bits = here >>> 24;
				here_op = here >>> 16 & 255;
				here_val = here & 65535;
				if (here_bits <= bits) break;
				if (have === 0) break inf_leave;
				have--;
				hold += input[next++] << bits;
				bits += 8;
			}
			if (here_op && (here_op & 240) === 0) {
				last_bits = here_bits;
				last_op = here_op;
				last_val = here_val;
				for (;;) {
					here = state.lencode[last_val + ((hold & (1 << last_bits + last_op) - 1) >> last_bits)];
					here_bits = here >>> 24;
					here_op = here >>> 16 & 255;
					here_val = here & 65535;
					if (last_bits + here_bits <= bits) break;
					if (have === 0) break inf_leave;
					have--;
					hold += input[next++] << bits;
					bits += 8;
				}
				hold >>>= last_bits;
				bits -= last_bits;
				state.back += last_bits;
			}
			hold >>>= here_bits;
			bits -= here_bits;
			state.back += here_bits;
			state.length = here_val;
			if (here_op === 0) {
				state.mode = LIT;
				break;
			}
			if (here_op & 32) {
				state.back = -1;
				state.mode = TYPE;
				break;
			}
			if (here_op & 64) {
				strm.msg = "invalid literal/length code";
				state.mode = BAD;
				break;
			}
			state.extra = here_op & 15;
			state.mode = LENEXT;
		case LENEXT:
			if (state.extra) {
				n = state.extra;
				while (bits < n) {
					if (have === 0) break inf_leave;
					have--;
					hold += input[next++] << bits;
					bits += 8;
				}
				state.length += hold & (1 << state.extra) - 1;
				hold >>>= state.extra;
				bits -= state.extra;
				state.back += state.extra;
			}
			state.was = state.length;
			state.mode = DIST;
		case DIST:
			for (;;) {
				here = state.distcode[hold & (1 << state.distbits) - 1];
				here_bits = here >>> 24;
				here_op = here >>> 16 & 255;
				here_val = here & 65535;
				if (here_bits <= bits) break;
				if (have === 0) break inf_leave;
				have--;
				hold += input[next++] << bits;
				bits += 8;
			}
			if ((here_op & 240) === 0) {
				last_bits = here_bits;
				last_op = here_op;
				last_val = here_val;
				for (;;) {
					here = state.distcode[last_val + ((hold & (1 << last_bits + last_op) - 1) >> last_bits)];
					here_bits = here >>> 24;
					here_op = here >>> 16 & 255;
					here_val = here & 65535;
					if (last_bits + here_bits <= bits) break;
					if (have === 0) break inf_leave;
					have--;
					hold += input[next++] << bits;
					bits += 8;
				}
				hold >>>= last_bits;
				bits -= last_bits;
				state.back += last_bits;
			}
			hold >>>= here_bits;
			bits -= here_bits;
			state.back += here_bits;
			if (here_op & 64) {
				strm.msg = "invalid distance code";
				state.mode = BAD;
				break;
			}
			state.offset = here_val;
			state.extra = here_op & 15;
			state.mode = DISTEXT;
		case DISTEXT:
			if (state.extra) {
				n = state.extra;
				while (bits < n) {
					if (have === 0) break inf_leave;
					have--;
					hold += input[next++] << bits;
					bits += 8;
				}
				state.offset += hold & (1 << state.extra) - 1;
				hold >>>= state.extra;
				bits -= state.extra;
				state.back += state.extra;
			}
			if (state.offset > state.dmax) {
				strm.msg = "invalid distance too far back";
				state.mode = BAD;
				break;
			}
			state.mode = MATCH;
		case MATCH:
			if (left === 0) break inf_leave;
			copy = _out - left;
			if (state.offset > copy) {
				copy = state.offset - copy;
				if (copy > state.whave) {
					if (state.sane) {
						strm.msg = "invalid distance too far back";
						state.mode = BAD;
						break;
					}
				}
				if (copy > state.wnext) {
					copy -= state.wnext;
					from = state.wsize - copy;
				} else from = state.wnext - copy;
				if (copy > state.length) copy = state.length;
				from_source = state.window;
			} else {
				from_source = output;
				from = put - state.offset;
				copy = state.length;
			}
			if (copy > left) copy = left;
			left -= copy;
			state.length -= copy;
			do
				output[put++] = from_source[from++];
			while (--copy);
			if (state.length === 0) state.mode = LEN;
			break;
		case LIT:
			if (left === 0) break inf_leave;
			output[put++] = state.length;
			left--;
			state.mode = LEN;
			break;
		case CHECK:
			if (state.wrap) {
				while (bits < 32) {
					if (have === 0) break inf_leave;
					have--;
					hold |= input[next++] << bits;
					bits += 8;
				}
				_out -= left;
				strm.total_out += _out;
				state.total += _out;
				if (state.wrap & 4 && _out) strm.adler = state.check = state.flags ? crc32_1(state.check, output, _out, put - _out) : adler32_1(state.check, output, _out, put - _out);
				_out = left;
				if (state.wrap & 4 && (state.flags ? hold : zswap32(hold)) !== state.check) {
					strm.msg = "incorrect data check";
					state.mode = BAD;
					break;
				}
				hold = 0;
				bits = 0;
			}
			state.mode = LENGTH;
		case LENGTH:
			if (state.wrap && state.flags) {
				while (bits < 32) {
					if (have === 0) break inf_leave;
					have--;
					hold += input[next++] << bits;
					bits += 8;
				}
				if (state.wrap & 4 && hold !== (state.total & 4294967295)) {
					strm.msg = "incorrect length check";
					state.mode = BAD;
					break;
				}
				hold = 0;
				bits = 0;
			}
			state.mode = DONE;
		case DONE:
			ret = Z_STREAM_END$1;
			break inf_leave;
		case BAD:
			ret = Z_DATA_ERROR$1;
			break inf_leave;
		case MEM: return Z_MEM_ERROR$1;
		case SYNC:
		default: return Z_STREAM_ERROR$1;
	}
	strm.next_out = put;
	strm.avail_out = left;
	strm.next_in = next;
	strm.avail_in = have;
	state.hold = hold;
	state.bits = bits;
	if (state.wsize || _out !== strm.avail_out && state.mode < BAD && (state.mode < CHECK || flush !== Z_FINISH$1)) {
		if (updatewindow(strm, strm.output, strm.next_out, _out - strm.avail_out));
	}
	_in -= strm.avail_in;
	_out -= strm.avail_out;
	strm.total_in += _in;
	strm.total_out += _out;
	state.total += _out;
	if (state.wrap & 4 && _out) strm.adler = state.check = state.flags ? crc32_1(state.check, output, _out, strm.next_out - _out) : adler32_1(state.check, output, _out, strm.next_out - _out);
	strm.data_type = state.bits + (state.last ? 64 : 0) + (state.mode === TYPE ? 128 : 0) + (state.mode === LEN_ || state.mode === COPY_ ? 256 : 0);
	if ((_in === 0 && _out === 0 || flush === Z_FINISH$1) && ret === Z_OK$1) ret = Z_BUF_ERROR;
	return ret;
};
var inflateEnd = (strm) => {
	if (inflateStateCheck(strm)) return Z_STREAM_ERROR$1;
	let state = strm.state;
	if (state.window) state.window = null;
	strm.state = null;
	return Z_OK$1;
};
var inflateGetHeader = (strm, head) => {
	if (inflateStateCheck(strm)) return Z_STREAM_ERROR$1;
	const state = strm.state;
	if ((state.wrap & 2) === 0) return Z_STREAM_ERROR$1;
	state.head = head;
	head.done = false;
	return Z_OK$1;
};
var inflateSetDictionary = (strm, dictionary) => {
	const dictLength = dictionary.length;
	let state;
	let dictid;
	let ret;
	if (inflateStateCheck(strm)) return Z_STREAM_ERROR$1;
	state = strm.state;
	if (state.wrap !== 0 && state.mode !== DICT) return Z_STREAM_ERROR$1;
	if (state.mode === DICT) {
		dictid = 1;
		dictid = adler32_1(dictid, dictionary, dictLength, 0);
		if (dictid !== state.check) return Z_DATA_ERROR$1;
	}
	ret = updatewindow(strm, dictionary, dictLength, dictLength);
	if (ret) {
		state.mode = MEM;
		return Z_MEM_ERROR$1;
	}
	state.havedict = 1;
	return Z_OK$1;
};
var inflate_1$2 = {
	inflateReset,
	inflateReset2,
	inflateResetKeep,
	inflateInit,
	inflateInit2,
	inflate: inflate$2,
	inflateEnd,
	inflateGetHeader,
	inflateSetDictionary,
	inflateInfo: "pako inflate (from Nodeca project)"
};
function GZheader() {
	this.text = 0;
	this.time = 0;
	this.xflags = 0;
	this.os = 0;
	this.extra = null;
	this.extra_len = 0;
	this.name = "";
	this.comment = "";
	this.hcrc = 0;
	this.done = false;
}
var gzheader = GZheader;
var toString = Object.prototype.toString;
var { Z_NO_FLUSH, Z_FINISH, Z_OK, Z_STREAM_END, Z_NEED_DICT, Z_STREAM_ERROR, Z_DATA_ERROR, Z_MEM_ERROR } = constants$2;
/**
* class Inflate
*
* Generic JS-style wrapper for zlib calls. If you don't need
* streaming behaviour - use more simple functions: [[inflate]]
* and [[inflateRaw]].
**/
/**
* Inflate.result -> Uint8Array|String
*
* Uncompressed result, generated by default [[Inflate#onData]]
* and [[Inflate#onEnd]] handlers. Filled after you push last chunk
* (call [[Inflate#push]] with `Z_FINISH` / `true` param).
**/
/**
* Inflate.err -> Number
*
* Error code after inflate finished. 0 (Z_OK) on success.
* Should be checked if broken data possible.
**/
/**
* Inflate.msg -> String
*
* Error message, if [[Inflate.err]] != 0
**/
/**
* new Inflate(options)
* - options (Object): zlib inflate options.
*
* Creates new inflator instance with specified params. Throws exception
* on bad params. Supported options:
*
* - `windowBits`
* - `dictionary`
*
* [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
* for more information on these.
*
* Additional options, for internal needs:
*
* - `chunkSize` - size of generated data chunks (16K by default)
* - `raw` (Boolean) - do raw inflate
* - `to` (String) - if equal to 'string', then result will be converted
*   from utf8 to utf16 (javascript) string. When string output requested,
*   chunk length can differ from `chunkSize`, depending on content.
*
* By default, when no options set, autodetect deflate/gzip data format via
* wrapper header.
*
* ##### Example:
*
* ```javascript
* const pako = require('pako')
* const chunk1 = new Uint8Array([1,2,3,4,5,6,7,8,9])
* const chunk2 = new Uint8Array([10,11,12,13,14,15,16,17,18,19]);
*
* const inflate = new pako.Inflate({ level: 3});
*
* inflate.push(chunk1, false);
* inflate.push(chunk2, true);  // true -> last chunk
*
* if (inflate.err) { throw new Error(inflate.err); }
*
* console.log(inflate.result);
* ```
**/
function Inflate$1(options) {
	this.options = common.assign({
		chunkSize: 1024 * 64,
		windowBits: 15,
		to: ""
	}, options || {});
	const opt = this.options;
	if (opt.raw && opt.windowBits >= 0 && opt.windowBits < 16) {
		opt.windowBits = -opt.windowBits;
		if (opt.windowBits === 0) opt.windowBits = -15;
	}
	if (opt.windowBits >= 0 && opt.windowBits < 16 && !(options && options.windowBits)) opt.windowBits += 32;
	if (opt.windowBits > 15 && opt.windowBits < 48) {
		if ((opt.windowBits & 15) === 0) opt.windowBits |= 15;
	}
	this.err = 0;
	this.msg = "";
	this.ended = false;
	this.chunks = [];
	this.strm = new zstream();
	this.strm.avail_out = 0;
	let status = inflate_1$2.inflateInit2(this.strm, opt.windowBits);
	if (status !== Z_OK) throw new Error(messages[status]);
	this.header = new gzheader();
	inflate_1$2.inflateGetHeader(this.strm, this.header);
	if (opt.dictionary) {
		if (typeof opt.dictionary === "string") opt.dictionary = strings.string2buf(opt.dictionary);
		else if (toString.call(opt.dictionary) === "[object ArrayBuffer]") opt.dictionary = new Uint8Array(opt.dictionary);
		if (opt.raw) {
			status = inflate_1$2.inflateSetDictionary(this.strm, opt.dictionary);
			if (status !== Z_OK) throw new Error(messages[status]);
		}
	}
}
/**
* Inflate#push(data[, flush_mode]) -> Boolean
* - data (Uint8Array|ArrayBuffer): input data
* - flush_mode (Number|Boolean): 0..6 for corresponding Z_NO_FLUSH..Z_TREE
*   flush modes. See constants. Skipped or `false` means Z_NO_FLUSH,
*   `true` means Z_FINISH.
*
* Sends input data to inflate pipe, generating [[Inflate#onData]] calls with
* new output chunks. Returns `true` on success. If end of stream detected,
* [[Inflate#onEnd]] will be called.
*
* `flush_mode` is not needed for normal operation, because end of stream
* detected automatically. You may try to use it for advanced things, but
* this functionality was not tested.
*
* On fail call [[Inflate#onEnd]] with error code and return false.
*
* ##### Example
*
* ```javascript
* push(chunk, false); // push one of data chunks
* ...
* push(chunk, true);  // push last chunk
* ```
**/
Inflate$1.prototype.push = function(data, flush_mode) {
	const strm = this.strm;
	const chunkSize = this.options.chunkSize;
	const dictionary = this.options.dictionary;
	let status, _flush_mode, last_avail_out;
	if (this.ended) return false;
	if (flush_mode === ~~flush_mode) _flush_mode = flush_mode;
	else _flush_mode = flush_mode === true ? Z_FINISH : Z_NO_FLUSH;
	if (toString.call(data) === "[object ArrayBuffer]") strm.input = new Uint8Array(data);
	else strm.input = data;
	strm.next_in = 0;
	strm.avail_in = strm.input.length;
	for (;;) {
		if (strm.avail_out === 0) {
			strm.output = new Uint8Array(chunkSize);
			strm.next_out = 0;
			strm.avail_out = chunkSize;
		}
		status = inflate_1$2.inflate(strm, _flush_mode);
		if (status === Z_NEED_DICT && dictionary) {
			status = inflate_1$2.inflateSetDictionary(strm, dictionary);
			if (status === Z_OK) status = inflate_1$2.inflate(strm, _flush_mode);
			else if (status === Z_DATA_ERROR) status = Z_NEED_DICT;
		}
		while (strm.avail_in > 0 && status === Z_STREAM_END && strm.state.wrap > 0 && data[strm.next_in] !== 0) {
			inflate_1$2.inflateReset(strm);
			status = inflate_1$2.inflate(strm, _flush_mode);
		}
		switch (status) {
			case Z_STREAM_ERROR:
			case Z_DATA_ERROR:
			case Z_NEED_DICT:
			case Z_MEM_ERROR:
				this.onEnd(status);
				this.ended = true;
				return false;
		}
		last_avail_out = strm.avail_out;
		if (strm.next_out) {
			if (strm.avail_out === 0 || status === Z_STREAM_END) if (this.options.to === "string") {
				let next_out_utf8 = strings.utf8border(strm.output, strm.next_out);
				let tail = strm.next_out - next_out_utf8;
				let utf8str = strings.buf2string(strm.output, next_out_utf8);
				strm.next_out = tail;
				strm.avail_out = chunkSize - tail;
				if (tail) strm.output.set(strm.output.subarray(next_out_utf8, next_out_utf8 + tail), 0);
				this.onData(utf8str);
			} else this.onData(strm.output.length === strm.next_out ? strm.output : strm.output.subarray(0, strm.next_out));
		}
		if (status === Z_OK && last_avail_out === 0) continue;
		if (status === Z_STREAM_END) {
			status = inflate_1$2.inflateEnd(this.strm);
			this.onEnd(status);
			this.ended = true;
			return true;
		}
		if (strm.avail_in === 0) break;
	}
	return true;
};
/**
* Inflate#onData(chunk) -> Void
* - chunk (Uint8Array|String): output data. When string output requested,
*   each chunk will be string.
*
* By default, stores data blocks in `chunks[]` property and glue
* those in `onEnd`. Override this handler, if you need another behaviour.
**/
Inflate$1.prototype.onData = function(chunk) {
	this.chunks.push(chunk);
};
/**
* Inflate#onEnd(status) -> Void
* - status (Number): inflate status. 0 (Z_OK) on success,
*   other if not.
*
* Called either after you tell inflate that the input stream is
* complete (Z_FINISH). By default - join collected chunks,
* free memory and fill `results` / `err` properties.
**/
Inflate$1.prototype.onEnd = function(status) {
	if (status === Z_OK) if (this.options.to === "string") this.result = this.chunks.join("");
	else this.result = common.flattenChunks(this.chunks);
	this.chunks = [];
	this.err = status;
	this.msg = this.strm.msg;
};
/**
* inflate(data[, options]) -> Uint8Array|String
* - data (Uint8Array|ArrayBuffer): input data to decompress.
* - options (Object): zlib inflate options.
*
* Decompress `data` with inflate/ungzip and `options`. Autodetect
* format via wrapper header by default. That's why we don't provide
* separate `ungzip` method.
*
* Supported options are:
*
* - windowBits
*
* [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
* for more information.
*
* Sugar (options):
*
* - `raw` (Boolean) - say that we work with raw stream, if you don't wish to specify
*   negative windowBits implicitly.
* - `to` (String) - if equal to 'string', then result will be converted
*   from utf8 to utf16 (javascript) string. When string output requested,
*   chunk length can differ from `chunkSize`, depending on content.
*
*
* ##### Example:
*
* ```javascript
* const pako = require('pako');
* const input = pako.deflate(new Uint8Array([1,2,3,4,5,6,7,8,9]));
* let output;
*
* try {
*   output = pako.inflate(input);
* } catch (err) {
*   console.log(err);
* }
* ```
**/
function inflate$1(input, options) {
	const inflator = new Inflate$1(options);
	inflator.push(input);
	if (inflator.err) throw inflator.msg || messages[inflator.err];
	return inflator.result;
}
/**
* inflateRaw(data[, options]) -> Uint8Array|String
* - data (Uint8Array|ArrayBuffer): input data to decompress.
* - options (Object): zlib inflate options.
*
* The same as [[inflate]], but creates raw data, without wrapper
* (header and adler32 crc).
**/
function inflateRaw$1(input, options) {
	options = options || {};
	options.raw = true;
	return inflate$1(input, options);
}
var inflate_1$1 = {
	Inflate: Inflate$1,
	inflate: inflate$1,
	inflateRaw: inflateRaw$1,
	ungzip: inflate$1,
	constants: constants$2
};
var { Deflate, deflate, deflateRaw, gzip } = deflate_1$1;
var { Inflate, inflate, inflateRaw, ungzip } = inflate_1$1;
var inflate_1 = inflate;
new TextEncoder();
var CHUNK_SIZE = 4096;
function utf8DecodeJs(bytes, inputOffset, byteLength) {
	let offset = inputOffset;
	const end = offset + byteLength;
	const units = [];
	let result = "";
	while (offset < end) {
		const byte1 = bytes[offset++];
		if ((byte1 & 128) === 0) units.push(byte1);
		else if ((byte1 & 224) === 192) {
			const byte2 = bytes[offset++] & 63;
			units.push((byte1 & 31) << 6 | byte2);
		} else if ((byte1 & 240) === 224) {
			const byte2 = bytes[offset++] & 63;
			const byte3 = bytes[offset++] & 63;
			units.push((byte1 & 31) << 12 | byte2 << 6 | byte3);
		} else if ((byte1 & 248) === 240) {
			const byte2 = bytes[offset++] & 63;
			const byte3 = bytes[offset++] & 63;
			const byte4 = bytes[offset++] & 63;
			let unit = (byte1 & 7) << 18 | byte2 << 12 | byte3 << 6 | byte4;
			if (unit > 65535) {
				unit -= 65536;
				units.push(unit >>> 10 & 1023 | 55296);
				unit = 56320 | unit & 1023;
			}
			units.push(unit);
		} else units.push(byte1);
		if (units.length >= CHUNK_SIZE) {
			result += String.fromCharCode(...units);
			units.length = 0;
		}
	}
	if (units.length > 0) result += String.fromCharCode(...units);
	return result;
}
var sharedTextDecoder = new TextDecoder();
var TEXT_DECODER_THRESHOLD = 200;
function utf8DecodeTD(bytes, inputOffset, byteLength) {
	const stringBytes = bytes.subarray(inputOffset, inputOffset + byteLength);
	return sharedTextDecoder.decode(stringBytes);
}
function utf8Decode(bytes, inputOffset, byteLength) {
	if (byteLength > TEXT_DECODER_THRESHOLD) return utf8DecodeTD(bytes, inputOffset, byteLength);
	else return utf8DecodeJs(bytes, inputOffset, byteLength);
}
//#endregion
//#region node_modules/@msgpack/msgpack/dist.esm/ExtData.mjs
/**
* ExtData is used to handle Extension Types that are not registered to ExtensionCodec.
*/
var ExtData = class {
	constructor(type, data) {
		this.type = type;
		this.data = data;
	}
};
//#endregion
//#region node_modules/@msgpack/msgpack/dist.esm/DecodeError.mjs
var DecodeError = class DecodeError extends Error {
	constructor(message) {
		super(message);
		const proto = Object.create(DecodeError.prototype);
		Object.setPrototypeOf(this, proto);
		Object.defineProperty(this, "name", {
			configurable: true,
			enumerable: false,
			value: DecodeError.name
		});
	}
};
function setInt64(view, offset, value) {
	const high = Math.floor(value / 4294967296);
	const low = value;
	view.setUint32(offset, high);
	view.setUint32(offset + 4, low);
}
function getInt64(view, offset) {
	const high = view.getInt32(offset);
	const low = view.getUint32(offset + 4);
	return high * 4294967296 + low;
}
function getUint64(view, offset) {
	const high = view.getUint32(offset);
	const low = view.getUint32(offset + 4);
	return high * 4294967296 + low;
}
var TIMESTAMP32_MAX_SEC = 4294967295;
var TIMESTAMP64_MAX_SEC = 17179869183;
function encodeTimeSpecToTimestamp({ sec, nsec }) {
	if (sec >= 0 && nsec >= 0 && sec <= TIMESTAMP64_MAX_SEC) if (nsec === 0 && sec <= TIMESTAMP32_MAX_SEC) {
		const rv = /* @__PURE__ */ new Uint8Array(4);
		new DataView(rv.buffer).setUint32(0, sec);
		return rv;
	} else {
		const secHigh = sec / 4294967296;
		const secLow = sec & 4294967295;
		const rv = /* @__PURE__ */ new Uint8Array(8);
		const view = new DataView(rv.buffer);
		view.setUint32(0, nsec << 2 | secHigh & 3);
		view.setUint32(4, secLow);
		return rv;
	}
	else {
		const rv = /* @__PURE__ */ new Uint8Array(12);
		const view = new DataView(rv.buffer);
		view.setUint32(0, nsec);
		setInt64(view, 4, sec);
		return rv;
	}
}
function encodeDateToTimeSpec(date) {
	const msec = date.getTime();
	const sec = Math.floor(msec / 1e3);
	const nsec = (msec - sec * 1e3) * 1e6;
	const nsecInSec = Math.floor(nsec / 1e9);
	return {
		sec: sec + nsecInSec,
		nsec: nsec - nsecInSec * 1e9
	};
}
function encodeTimestampExtension(object) {
	if (object instanceof Date) return encodeTimeSpecToTimestamp(encodeDateToTimeSpec(object));
	else return null;
}
function decodeTimestampToTimeSpec(data) {
	const view = new DataView(data.buffer, data.byteOffset, data.byteLength);
	switch (data.byteLength) {
		case 4: return {
			sec: view.getUint32(0),
			nsec: 0
		};
		case 8: {
			const nsec30AndSecHigh2 = view.getUint32(0);
			const secLow32 = view.getUint32(4);
			return {
				sec: (nsec30AndSecHigh2 & 3) * 4294967296 + secLow32,
				nsec: nsec30AndSecHigh2 >>> 2
			};
		}
		case 12: return {
			sec: getInt64(view, 4),
			nsec: view.getUint32(0)
		};
		default: throw new DecodeError(`Unrecognized data size for timestamp (expected 4, 8, or 12): ${data.length}`);
	}
}
function decodeTimestampExtension(data) {
	const timeSpec = decodeTimestampToTimeSpec(data);
	return /* @__PURE__ */ new Date(timeSpec.sec * 1e3 + timeSpec.nsec / 1e6);
}
var timestampExtension = {
	type: -1,
	encode: encodeTimestampExtension,
	decode: decodeTimestampExtension
};
//#endregion
//#region node_modules/@msgpack/msgpack/dist.esm/ExtensionCodec.mjs
var ExtensionCodec = class {
	constructor() {
		this.builtInEncoders = [];
		this.builtInDecoders = [];
		this.encoders = [];
		this.decoders = [];
		this.register(timestampExtension);
	}
	register({ type, encode, decode }) {
		if (type >= 0) {
			this.encoders[type] = encode;
			this.decoders[type] = decode;
		} else {
			const index = -1 - type;
			this.builtInEncoders[index] = encode;
			this.builtInDecoders[index] = decode;
		}
	}
	tryToEncode(object, context) {
		for (let i = 0; i < this.builtInEncoders.length; i++) {
			const encodeExt = this.builtInEncoders[i];
			if (encodeExt != null) {
				const data = encodeExt(object, context);
				if (data != null) return new ExtData(-1 - i, data);
			}
		}
		for (let i = 0; i < this.encoders.length; i++) {
			const encodeExt = this.encoders[i];
			if (encodeExt != null) {
				const data = encodeExt(object, context);
				if (data != null) return new ExtData(i, data);
			}
		}
		if (object instanceof ExtData) return object;
		return null;
	}
	decode(data, type, context) {
		const decodeExt = type < 0 ? this.builtInDecoders[-1 - type] : this.decoders[type];
		if (decodeExt) return decodeExt(data, type, context);
		else return new ExtData(type, data);
	}
};
ExtensionCodec.defaultCodec = new ExtensionCodec();
//#endregion
//#region node_modules/@msgpack/msgpack/dist.esm/utils/typedArrays.mjs
function isArrayBufferLike(buffer) {
	return buffer instanceof ArrayBuffer || typeof SharedArrayBuffer !== "undefined" && buffer instanceof SharedArrayBuffer;
}
function ensureUint8Array(buffer) {
	if (buffer instanceof Uint8Array) return buffer;
	else if (ArrayBuffer.isView(buffer)) return new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength);
	else if (isArrayBufferLike(buffer)) return new Uint8Array(buffer);
	else return Uint8Array.from(buffer);
}
//#endregion
//#region node_modules/@msgpack/msgpack/dist.esm/utils/prettyByte.mjs
function prettyByte(byte) {
	return `${byte < 0 ? "-" : ""}0x${Math.abs(byte).toString(16).padStart(2, "0")}`;
}
//#endregion
//#region node_modules/@msgpack/msgpack/dist.esm/CachedKeyDecoder.mjs
var DEFAULT_MAX_KEY_LENGTH = 16;
var DEFAULT_MAX_LENGTH_PER_KEY = 16;
var CachedKeyDecoder = class {
	constructor(maxKeyLength = DEFAULT_MAX_KEY_LENGTH, maxLengthPerKey = DEFAULT_MAX_LENGTH_PER_KEY) {
		this.hit = 0;
		this.miss = 0;
		this.maxKeyLength = maxKeyLength;
		this.maxLengthPerKey = maxLengthPerKey;
		this.caches = [];
		for (let i = 0; i < this.maxKeyLength; i++) this.caches.push([]);
	}
	canBeCached(byteLength) {
		return byteLength > 0 && byteLength <= this.maxKeyLength;
	}
	find(bytes, inputOffset, byteLength) {
		const records = this.caches[byteLength - 1];
		FIND_CHUNK: for (const record of records) {
			const recordBytes = record.bytes;
			for (let j = 0; j < byteLength; j++) if (recordBytes[j] !== bytes[inputOffset + j]) continue FIND_CHUNK;
			return record.str;
		}
		return null;
	}
	store(bytes, value) {
		const records = this.caches[bytes.length - 1];
		const record = {
			bytes,
			str: value
		};
		if (records.length >= this.maxLengthPerKey) records[Math.random() * records.length | 0] = record;
		else records.push(record);
	}
	decode(bytes, inputOffset, byteLength) {
		const cachedValue = this.find(bytes, inputOffset, byteLength);
		if (cachedValue != null) {
			this.hit++;
			return cachedValue;
		}
		this.miss++;
		const str = utf8DecodeJs(bytes, inputOffset, byteLength);
		const slicedCopyOfBytes = Uint8Array.prototype.slice.call(bytes, inputOffset, inputOffset + byteLength);
		this.store(slicedCopyOfBytes, str);
		return str;
	}
};
//#endregion
//#region node_modules/@msgpack/msgpack/dist.esm/Decoder.mjs
var STATE_ARRAY = "array";
var STATE_MAP_KEY = "map_key";
var STATE_MAP_VALUE = "map_value";
var mapKeyConverter = (key) => {
	if (typeof key === "string" || typeof key === "number") return key;
	throw new DecodeError("The type of key must be string or number but " + typeof key);
};
var StackPool = class {
	constructor() {
		this.stack = [];
		this.stackHeadPosition = -1;
	}
	get length() {
		return this.stackHeadPosition + 1;
	}
	top() {
		return this.stack[this.stackHeadPosition];
	}
	pushArrayState(size) {
		const state = this.getUninitializedStateFromPool();
		state.type = STATE_ARRAY;
		state.position = 0;
		state.size = size;
		state.array = new Array(size);
	}
	pushMapState(size) {
		const state = this.getUninitializedStateFromPool();
		state.type = STATE_MAP_KEY;
		state.readCount = 0;
		state.size = size;
		state.map = {};
	}
	getUninitializedStateFromPool() {
		this.stackHeadPosition++;
		if (this.stackHeadPosition === this.stack.length) this.stack.push({
			type: void 0,
			size: 0,
			array: void 0,
			position: 0,
			readCount: 0,
			map: void 0,
			key: null
		});
		return this.stack[this.stackHeadPosition];
	}
	release(state) {
		if (this.stack[this.stackHeadPosition] !== state) throw new Error("Invalid stack state. Released state is not on top of the stack.");
		if (state.type === STATE_ARRAY) {
			const partialState = state;
			partialState.size = 0;
			partialState.array = void 0;
			partialState.position = 0;
			partialState.type = void 0;
		}
		if (state.type === STATE_MAP_KEY || state.type === STATE_MAP_VALUE) {
			const partialState = state;
			partialState.size = 0;
			partialState.map = void 0;
			partialState.readCount = 0;
			partialState.type = void 0;
		}
		this.stackHeadPosition--;
	}
	reset() {
		this.stack.length = 0;
		this.stackHeadPosition = -1;
	}
};
var HEAD_BYTE_REQUIRED = -1;
var EMPTY_VIEW = /* @__PURE__ */ new DataView(/* @__PURE__ */ new ArrayBuffer(0));
var EMPTY_BYTES = new Uint8Array(EMPTY_VIEW.buffer);
try {
	EMPTY_VIEW.getInt8(0);
} catch (e) {
	if (!(e instanceof RangeError)) throw new Error("This module is not supported in the current JavaScript engine because DataView does not throw RangeError on out-of-bounds access");
}
var MORE_DATA = /* @__PURE__ */ new RangeError("Insufficient data");
var sharedCachedKeyDecoder = new CachedKeyDecoder();
var Decoder = class Decoder {
	constructor(options) {
		this.totalPos = 0;
		this.pos = 0;
		this.view = EMPTY_VIEW;
		this.bytes = EMPTY_BYTES;
		this.headByte = HEAD_BYTE_REQUIRED;
		this.stack = new StackPool();
		this.entered = false;
		this.extensionCodec = options?.extensionCodec ?? ExtensionCodec.defaultCodec;
		this.context = options?.context;
		this.useBigInt64 = options?.useBigInt64 ?? false;
		this.rawStrings = options?.rawStrings ?? false;
		this.maxStrLength = options?.maxStrLength ?? 4294967295;
		this.maxBinLength = options?.maxBinLength ?? 4294967295;
		this.maxArrayLength = options?.maxArrayLength ?? 4294967295;
		this.maxMapLength = options?.maxMapLength ?? 4294967295;
		this.maxExtLength = options?.maxExtLength ?? 4294967295;
		this.keyDecoder = options?.keyDecoder !== void 0 ? options.keyDecoder : sharedCachedKeyDecoder;
		this.mapKeyConverter = options?.mapKeyConverter ?? mapKeyConverter;
	}
	clone() {
		return new Decoder({
			extensionCodec: this.extensionCodec,
			context: this.context,
			useBigInt64: this.useBigInt64,
			rawStrings: this.rawStrings,
			maxStrLength: this.maxStrLength,
			maxBinLength: this.maxBinLength,
			maxArrayLength: this.maxArrayLength,
			maxMapLength: this.maxMapLength,
			maxExtLength: this.maxExtLength,
			keyDecoder: this.keyDecoder
		});
	}
	reinitializeState() {
		this.totalPos = 0;
		this.headByte = HEAD_BYTE_REQUIRED;
		this.stack.reset();
	}
	setBuffer(buffer) {
		const bytes = ensureUint8Array(buffer);
		this.bytes = bytes;
		this.view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
		this.pos = 0;
	}
	appendBuffer(buffer) {
		if (this.headByte === HEAD_BYTE_REQUIRED && !this.hasRemaining(1)) this.setBuffer(buffer);
		else {
			const remainingData = this.bytes.subarray(this.pos);
			const newData = ensureUint8Array(buffer);
			const newBuffer = new Uint8Array(remainingData.length + newData.length);
			newBuffer.set(remainingData);
			newBuffer.set(newData, remainingData.length);
			this.setBuffer(newBuffer);
		}
	}
	hasRemaining(size) {
		return this.view.byteLength - this.pos >= size;
	}
	createExtraByteError(posToShow) {
		const { view, pos } = this;
		return /* @__PURE__ */ new RangeError(`Extra ${view.byteLength - pos} of ${view.byteLength} byte(s) found at buffer[${posToShow}]`);
	}
	/**
	* @throws {@link DecodeError}
	* @throws {@link RangeError}
	*/
	decode(buffer) {
		if (this.entered) return this.clone().decode(buffer);
		try {
			this.entered = true;
			this.reinitializeState();
			this.setBuffer(buffer);
			const object = this.doDecodeSync();
			if (this.hasRemaining(1)) throw this.createExtraByteError(this.pos);
			return object;
		} finally {
			this.entered = false;
		}
	}
	*decodeMulti(buffer) {
		if (this.entered) {
			yield* this.clone().decodeMulti(buffer);
			return;
		}
		try {
			this.entered = true;
			this.reinitializeState();
			this.setBuffer(buffer);
			while (this.hasRemaining(1)) yield this.doDecodeSync();
		} finally {
			this.entered = false;
		}
	}
	async decodeAsync(stream) {
		if (this.entered) return this.clone().decodeAsync(stream);
		try {
			this.entered = true;
			let decoded = false;
			let object;
			for await (const buffer of stream) {
				if (decoded) {
					this.entered = false;
					throw this.createExtraByteError(this.totalPos);
				}
				this.appendBuffer(buffer);
				try {
					object = this.doDecodeSync();
					decoded = true;
				} catch (e) {
					if (!(e instanceof RangeError)) throw e;
				}
				this.totalPos += this.pos;
			}
			if (decoded) {
				if (this.hasRemaining(1)) throw this.createExtraByteError(this.totalPos);
				return object;
			}
			const { headByte, pos, totalPos } = this;
			throw new RangeError(`Insufficient data in parsing ${prettyByte(headByte)} at ${totalPos} (${pos} in the current buffer)`);
		} finally {
			this.entered = false;
		}
	}
	decodeArrayStream(stream) {
		return this.decodeMultiAsync(stream, true);
	}
	decodeStream(stream) {
		return this.decodeMultiAsync(stream, false);
	}
	async *decodeMultiAsync(stream, isArray) {
		if (this.entered) {
			yield* this.clone().decodeMultiAsync(stream, isArray);
			return;
		}
		try {
			this.entered = true;
			let isArrayHeaderRequired = isArray;
			let arrayItemsLeft = -1;
			for await (const buffer of stream) {
				if (isArray && arrayItemsLeft === 0) throw this.createExtraByteError(this.totalPos);
				this.appendBuffer(buffer);
				if (isArrayHeaderRequired) {
					arrayItemsLeft = this.readArraySize();
					isArrayHeaderRequired = false;
					this.complete();
				}
				try {
					while (true) {
						yield this.doDecodeSync();
						if (--arrayItemsLeft === 0) break;
					}
				} catch (e) {
					if (!(e instanceof RangeError)) throw e;
				}
				this.totalPos += this.pos;
			}
		} finally {
			this.entered = false;
		}
	}
	doDecodeSync() {
		DECODE: while (true) {
			const headByte = this.readHeadByte();
			let object;
			if (headByte >= 224) object = headByte - 256;
			else if (headByte < 192) if (headByte < 128) object = headByte;
			else if (headByte < 144) {
				const size = headByte - 128;
				if (size !== 0) {
					this.pushMapState(size);
					this.complete();
					continue DECODE;
				} else object = {};
			} else if (headByte < 160) {
				const size = headByte - 144;
				if (size !== 0) {
					this.pushArrayState(size);
					this.complete();
					continue DECODE;
				} else object = [];
			} else {
				const byteLength = headByte - 160;
				object = this.decodeString(byteLength, 0);
			}
			else if (headByte === 192) object = null;
			else if (headByte === 194) object = false;
			else if (headByte === 195) object = true;
			else if (headByte === 202) object = this.readF32();
			else if (headByte === 203) object = this.readF64();
			else if (headByte === 204) object = this.readU8();
			else if (headByte === 205) object = this.readU16();
			else if (headByte === 206) object = this.readU32();
			else if (headByte === 207) if (this.useBigInt64) object = this.readU64AsBigInt();
			else object = this.readU64();
			else if (headByte === 208) object = this.readI8();
			else if (headByte === 209) object = this.readI16();
			else if (headByte === 210) object = this.readI32();
			else if (headByte === 211) if (this.useBigInt64) object = this.readI64AsBigInt();
			else object = this.readI64();
			else if (headByte === 217) {
				const byteLength = this.lookU8();
				object = this.decodeString(byteLength, 1);
			} else if (headByte === 218) {
				const byteLength = this.lookU16();
				object = this.decodeString(byteLength, 2);
			} else if (headByte === 219) {
				const byteLength = this.lookU32();
				object = this.decodeString(byteLength, 4);
			} else if (headByte === 220) {
				const size = this.readU16();
				if (size !== 0) {
					this.pushArrayState(size);
					this.complete();
					continue DECODE;
				} else object = [];
			} else if (headByte === 221) {
				const size = this.readU32();
				if (size !== 0) {
					this.pushArrayState(size);
					this.complete();
					continue DECODE;
				} else object = [];
			} else if (headByte === 222) {
				const size = this.readU16();
				if (size !== 0) {
					this.pushMapState(size);
					this.complete();
					continue DECODE;
				} else object = {};
			} else if (headByte === 223) {
				const size = this.readU32();
				if (size !== 0) {
					this.pushMapState(size);
					this.complete();
					continue DECODE;
				} else object = {};
			} else if (headByte === 196) {
				const size = this.lookU8();
				object = this.decodeBinary(size, 1);
			} else if (headByte === 197) {
				const size = this.lookU16();
				object = this.decodeBinary(size, 2);
			} else if (headByte === 198) {
				const size = this.lookU32();
				object = this.decodeBinary(size, 4);
			} else if (headByte === 212) object = this.decodeExtension(1, 0);
			else if (headByte === 213) object = this.decodeExtension(2, 0);
			else if (headByte === 214) object = this.decodeExtension(4, 0);
			else if (headByte === 215) object = this.decodeExtension(8, 0);
			else if (headByte === 216) object = this.decodeExtension(16, 0);
			else if (headByte === 199) {
				const size = this.lookU8();
				object = this.decodeExtension(size, 1);
			} else if (headByte === 200) {
				const size = this.lookU16();
				object = this.decodeExtension(size, 2);
			} else if (headByte === 201) {
				const size = this.lookU32();
				object = this.decodeExtension(size, 4);
			} else throw new DecodeError(`Unrecognized type byte: ${prettyByte(headByte)}`);
			this.complete();
			const stack = this.stack;
			while (stack.length > 0) {
				const state = stack.top();
				if (state.type === STATE_ARRAY) {
					state.array[state.position] = object;
					state.position++;
					if (state.position === state.size) {
						object = state.array;
						stack.release(state);
					} else continue DECODE;
				} else if (state.type === STATE_MAP_KEY) {
					if (object === "__proto__") throw new DecodeError("The key __proto__ is not allowed");
					state.key = this.mapKeyConverter(object);
					state.type = STATE_MAP_VALUE;
					continue DECODE;
				} else {
					state.map[state.key] = object;
					state.readCount++;
					if (state.readCount === state.size) {
						object = state.map;
						stack.release(state);
					} else {
						state.key = null;
						state.type = STATE_MAP_KEY;
						continue DECODE;
					}
				}
			}
			return object;
		}
	}
	readHeadByte() {
		if (this.headByte === HEAD_BYTE_REQUIRED) this.headByte = this.readU8();
		return this.headByte;
	}
	complete() {
		this.headByte = HEAD_BYTE_REQUIRED;
	}
	readArraySize() {
		const headByte = this.readHeadByte();
		switch (headByte) {
			case 220: return this.readU16();
			case 221: return this.readU32();
			default: if (headByte < 160) return headByte - 144;
			else throw new DecodeError(`Unrecognized array type byte: ${prettyByte(headByte)}`);
		}
	}
	pushMapState(size) {
		if (size > this.maxMapLength) throw new DecodeError(`Max length exceeded: map length (${size}) > maxMapLengthLength (${this.maxMapLength})`);
		this.stack.pushMapState(size);
	}
	pushArrayState(size) {
		if (size > this.maxArrayLength) throw new DecodeError(`Max length exceeded: array length (${size}) > maxArrayLength (${this.maxArrayLength})`);
		this.stack.pushArrayState(size);
	}
	decodeString(byteLength, headerOffset) {
		if (!this.rawStrings || this.stateIsMapKey()) return this.decodeUtf8String(byteLength, headerOffset);
		return this.decodeBinary(byteLength, headerOffset);
	}
	/**
	* @throws {@link RangeError}
	*/
	decodeUtf8String(byteLength, headerOffset) {
		if (byteLength > this.maxStrLength) throw new DecodeError(`Max length exceeded: UTF-8 byte length (${byteLength}) > maxStrLength (${this.maxStrLength})`);
		if (this.bytes.byteLength < this.pos + headerOffset + byteLength) throw MORE_DATA;
		const offset = this.pos + headerOffset;
		let object;
		if (this.stateIsMapKey() && this.keyDecoder?.canBeCached(byteLength)) object = this.keyDecoder.decode(this.bytes, offset, byteLength);
		else object = utf8Decode(this.bytes, offset, byteLength);
		this.pos += headerOffset + byteLength;
		return object;
	}
	stateIsMapKey() {
		if (this.stack.length > 0) return this.stack.top().type === STATE_MAP_KEY;
		return false;
	}
	/**
	* @throws {@link RangeError}
	*/
	decodeBinary(byteLength, headOffset) {
		if (byteLength > this.maxBinLength) throw new DecodeError(`Max length exceeded: bin length (${byteLength}) > maxBinLength (${this.maxBinLength})`);
		if (!this.hasRemaining(byteLength + headOffset)) throw MORE_DATA;
		const offset = this.pos + headOffset;
		const object = this.bytes.subarray(offset, offset + byteLength);
		this.pos += headOffset + byteLength;
		return object;
	}
	decodeExtension(size, headOffset) {
		if (size > this.maxExtLength) throw new DecodeError(`Max length exceeded: ext length (${size}) > maxExtLength (${this.maxExtLength})`);
		const extType = this.view.getInt8(this.pos + headOffset);
		const data = this.decodeBinary(size, headOffset + 1);
		return this.extensionCodec.decode(data, extType, this.context);
	}
	lookU8() {
		return this.view.getUint8(this.pos);
	}
	lookU16() {
		return this.view.getUint16(this.pos);
	}
	lookU32() {
		return this.view.getUint32(this.pos);
	}
	readU8() {
		const value = this.view.getUint8(this.pos);
		this.pos++;
		return value;
	}
	readI8() {
		const value = this.view.getInt8(this.pos);
		this.pos++;
		return value;
	}
	readU16() {
		const value = this.view.getUint16(this.pos);
		this.pos += 2;
		return value;
	}
	readI16() {
		const value = this.view.getInt16(this.pos);
		this.pos += 2;
		return value;
	}
	readU32() {
		const value = this.view.getUint32(this.pos);
		this.pos += 4;
		return value;
	}
	readI32() {
		const value = this.view.getInt32(this.pos);
		this.pos += 4;
		return value;
	}
	readU64() {
		const value = getUint64(this.view, this.pos);
		this.pos += 8;
		return value;
	}
	readI64() {
		const value = getInt64(this.view, this.pos);
		this.pos += 8;
		return value;
	}
	readU64AsBigInt() {
		const value = this.view.getBigUint64(this.pos);
		this.pos += 8;
		return value;
	}
	readI64AsBigInt() {
		const value = this.view.getBigInt64(this.pos);
		this.pos += 8;
		return value;
	}
	readF32() {
		const value = this.view.getFloat32(this.pos);
		this.pos += 4;
		return value;
	}
	readF64() {
		const value = this.view.getFloat64(this.pos);
		this.pos += 8;
		return value;
	}
};
//#endregion
//#region node_modules/@msgpack/msgpack/dist.esm/decode.mjs
/**
* It decodes a single MessagePack object in a buffer.
*
* This is a synchronous decoding function.
* See other variants for asynchronous decoding: {@link decodeAsync}, {@link decodeStream}, or {@link decodeArrayStream}.
*
* @throws {@link RangeError} if the buffer is incomplete, including the case where the buffer is empty.
* @throws {@link DecodeError} if the buffer contains invalid data.
*/
function decode$1(buffer, options) {
	return new Decoder(options).decode(buffer);
}
//#endregion
//#region src/utils/index.js
var isMobile = (() => {
	return false;
})();
var formatDate = (date, format = "Y-m-d H:i:s") => {
	date = new Date(date);
	const strs = {
		Y: date.getFullYear(),
		m: date.getMonth() + 1,
		d: date.getDate(),
		H: date.getHours(),
		i: date.getMinutes(),
		s: date.getSeconds()
	};
	let result = format;
	for (let [key, value] of Object.entries(strs)) result = result.replaceAll(key, value.toString().padStart(2, "0"));
	return result;
};
var escapeHtml = (text) => (text?.toString() ?? "").replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll(`"`, "&quot;").replaceAll(`'`, "&#039;");
var unescapeHtml = (text) => (text?.toString() ?? "").replaceAll("&amp;", "&").replaceAll("&lt;", "<").replaceAll("&gt;", ">").replaceAll("&quot;", `"`).replaceAll("&#039;", `'`);
var sha256 = async (str) => {
	const arr = new TextEncoder().encode(str);
	const buf = await window.crypto.subtle.digest("SHA-256", arr);
	return Array.from(new Uint8Array(buf)).map((a) => a.toString(16).padStart(2, "0")).join("");
};
//#endregion
//#region src/mixins/common.js
var common_default = { methods: {
	doc_fulltitle(document) {
		if (typeof document === "object") {
			if (document.forceShowNamespace === false) return document.title;
			return `${this.$t(`namespaces.${document.namespace}`, {
				defaultValue: document.namespace,
				lng: this.config.lang || "ko"
			})}:${document.title}`;
		} else return document;
	},
	user_doc(str, type = 1) {
		return `${this.$t(`namespaces.${type ? "사용자" : "아이피사용자"}`, { lng: this.config.lang || "ko" })}:${str}`;
	},
	contribution_link(uuid) {
		return `/contribution/${uuid}/document`;
	},
	contribution_link_discuss(uuid) {
		return `/contribution/${uuid}/discuss`;
	},
	contribution_link_edit_request(uuid) {
		return `/contribution/${uuid}/edit_request`;
	},
	contribution_link_accepted_edit_request(uuid) {
		return `/contribution/${uuid}/accepted_edit_request`;
	},
	encodeSpecialChars(str, exclude = []) {
		if (!str) return str;
		const specialChars = "?&=+$#%\\".split("");
		return str.split("").map((a) => specialChars.includes(a) && !exclude.includes(a) ? encodeURIComponent(a) : a).join("");
	},
	doc_action_link(document, route, query = {}) {
		const specialUrls = [
			".",
			"..",
			"\\"
		];
		const title = typeof document === "string" ? document : this.doc_fulltitle(document);
		let str;
		if (specialUrls.includes(title) || route.startsWith("a/")) {
			query.doc = encodeURIComponent(title);
			str = `/${route}`;
		} else str = `/${route}/${this.encodeSpecialChars(title)}`;
		if (Object.keys(query).length > 0) {
			str += "?";
			str += Object.keys(query).filter((k) => query[k]).map((k) => `${k}=${query[k]}`).join("&");
		}
		return str;
	},
	getTitleDescription(page) {
		const text = {
			edit_edit_request: this.$t("title_description.edit_request"),
			edit_request: this.$t("title_description.edit_request"),
			edit: this.$t("title_description.edit"),
			history: this.$t("title_description.history"),
			backlinks: this.$t("title_description.backlinks"),
			move: this.$t("title_description.move"),
			delete: this.$t("title_description.delete"),
			acl: this.$t("title_description.acl"),
			thread: this.$t("title_description.thread"),
			thread_list: this.$t("title_description.thread_list"),
			thread_list_close: this.$t("title_description.thread_list_close"),
			edit_request_close: this.$t("title_description.edit_request_close"),
			diff: this.$t("title_description.diff"),
			revert: this.$t("title_description.revert", { rev: page.data.rev }),
			raw: this.$t("title_description.raw", { rev: page.data.rev }),
			blame: this.$t("title_description.blame", { rev: page.data.rev }),
			wiki: page.data.rev ? this.$t("title_description.w", { rev: page.data.rev }) : ""
		}[page.viewName];
		let additionalText;
		if (page.data.thread) additionalText = page.data.thread.topic;
		return text ? ` (${text})` + (additionalText ? ` - ${additionalText}` : "") : "";
	},
	removeHtmlTags(text) {
		return unescapeHtml(text.replaceAll(/<[^>]+>/g, ""));
	},
	durationToExactString(duration) {
		const strs = [];
		let weeks = 0;
		const week = 1e3 * 60 * 60 * 24 * 7;
		while (duration >= week) {
			duration -= week;
			weeks++;
		}
		if (weeks) strs.push(`${weeks}${this.$t("duration.weeks", { count: weeks })}`);
		let days = 0;
		const day = 1e3 * 60 * 60 * 24;
		while (duration >= day) {
			duration -= day;
			days++;
		}
		if (days) strs.push(`${days}${this.$t("duration.days", { count: days })}`);
		let hours = 0;
		const hour = 1e3 * 60 * 60;
		while (duration >= hour) {
			duration -= hour;
			hours++;
		}
		if (hours) strs.push(`${hours}${this.$t("duration.hours", { count: hours })}`);
		let minutes = 0;
		const minute = 1e3 * 60;
		while (duration >= minute) {
			duration -= minute;
			minutes++;
		}
		if (minutes) strs.push(`${minutes}${this.$t("duration.minutes", { count: minutes })}`);
		let seconds = 0;
		const second = 1e3;
		while (duration >= second) {
			duration -= second;
			seconds++;
		}
		if (seconds) strs.push(`${seconds}${this.$t("duration.seconds", { count: seconds })}`);
		return strs.join(" ");
	},
	async internalRequest(url, options) {
		const noProgress = options?.noProgress ?? false;
		delete options?.noProgress;
		const mainView = this.$store.state.components.mainView;
		const progressBar = noProgress ? null : mainView.$refs.progressBar;
		progressBar?.start();
		const userUrl = options?.userUrl;
		delete options?.userUrl;
		const encKey = [
			84,
			208,
			245,
			136,
			138,
			220,
			234,
			141,
			54,
			159,
			31,
			174,
			188,
			207,
			29,
			146,
			143,
			3,
			177,
			40,
			112,
			247,
			226,
			148,
			80,
			137,
			237,
			104,
			251,
			197,
			85,
			184
		];
		const parsedUrl = new URL(url, location.origin);
		const encryptedPath = ("d4f245783b17926e4" + parsedUrl.pathname).split("").map((a, i) => a.charCodeAt(0) ^ encKey[i % encKey.length]);
		const shuffleArray = (arr) => {
			for (let i in arr) {
				const j = encKey[i % encKey.length] % arr.length;
				[arr[i], arr[j]] = [arr[j], arr[i]];
			}
		};
		shuffleArray(encryptedPath);
		const urlChars = [
			...[
				...[...Array(26)].map((a, i) => i + 97),
				...[...Array(26)].map((a, i) => i + 65),
				...[...Array(10)].map((a, i) => i + 48)
			].map((a) => String.fromCharCode(a)),
			"-",
			"_"
		];
		shuffleArray(urlChars);
		const binary = encryptedPath.map((a) => a.toString(2).padStart(8, "0")).join("");
		let finalPath = "";
		for (let i = 0; i < binary.length; i += 6) {
			const chunk = binary.slice(i, i + 6);
			finalPath += urlChars[parseInt(chunk.padEnd(6, "0"), 2)];
		}
		const res = await fetch("/i/" + finalPath + parsedUrl.search, {
			...options,
			headers: {
				...options?.headers || {},
				"X-Chika": "d4f245783b17926e4",
				"X-Riko": this.$store.state.sessionHash,
				"X-You": this.$store.state.configHash
			}
		});
		if (res.status !== 200) {
			if (!this.$store.state.page.contentHtml && !this.$store.state.page.contentName) {
				this.$store.state.page.title = this.$t("titles.error");
				this.$store.state.page.contentHtml = `${this.$t("errors.api_request_failed")}: ${res.status}`;
				await this.$store.state.updateView();
			} else if (userUrl) location.href = userUrl;
			else if (url !== "/sidebar") location.reload();
			progressBar?.finish();
			return;
		}
		let json = decode$1(inflate_1(await res.arrayBuffer()));
		json = this.afterInternalRequest(json, progressBar, (options?.method || "GET").toUpperCase());
		return this.withoutKeys(json, [
			"config",
			"configHash",
			"session",
			"sessionHash",
			"partialData",
			"url"
		]);
	},
	afterInternalRequest(json, progressBar, method = "GET") {
		if (json.config) this.$store.state.$patch((state) => {
			state.config = json.config;
			state.configHash = json.configHash;
		});
		if (json.session) this.$store.state.$patch((state) => {
			state.session = json.session;
			state.sessionHash = json.sessionHash;
		});
		if (json.partialData) this.$store.state.patchPartialPageData(json.partialData);
		if ((json.code?.toString() || "").startsWith("3")) {
			if (!json.url.startsWith("/")) {
				location.href = json.url;
				return;
			}
			if (method === "GET" || json.url === this.$route.fullPath) this.$store.state.components.mainView.nextUrl = json.url;
			else this.$router.push(json.url);
			return;
		}
		if (!json.page?.contentName) progressBar?.finish();
		return json;
	},
	async processInternalResponse(json, form) {
		if (!json) {
			this.$store.state.components.mainView.processNextUrl();
			return;
		}
		const statePatches = this.$store.state.parseResponse(json);
		if (json.page) await this.$store.state.updateView(statePatches);
		if (json.data) {
			this.$store.state.clearFormErrors();
			const strCode = json.code?.toString() || "";
			if (strCode[0] === "4" || strCode[0] === "5") if (typeof json.data === "string") {
				this.$store.state.viewData.errorAlert = json.data;
				if (json.code?.toString().startsWith("4")) {
					const firstInput = form?.querySelector("input, select, textarea");
					if (firstInput) this.$nextTick().then(() => firstInput.focus());
				}
				this.$store.state.viewData.errorAlertExists = false;
				await this.$nextTick();
				if (!this.$store.state.viewData.errorAlertExists) alert(json.data);
			} else {
				const fieldErrors = json.data.fieldErrors;
				this.$store.state.viewData.fieldErrors = fieldErrors;
				if (fieldErrors) {
					const firstInputName = Object.keys(json.data.fieldErrors)[0];
					const firstInput = form?.querySelector(`[name="${firstInputName}"]`);
					await this.$nextTick();
					firstInput?.focus();
				}
			}
		}
		if (json.action) switch (json.action) {
			case "reloadView":
				await this.$store.state.components.mainView.loadView();
				break;
		}
	},
	async internalRequestAndProcess(url, options) {
		const res = await this.internalRequest(url, options);
		await this.processInternalResponse(res);
		return res;
	},
	onDynamicContentClick(e) {
		if (e.metaKey || e.ctrlKey || e.shiftKey || e.defaultPrevented) return;
		const container = this.$refs.div;
		let link = null;
		for (let el = e.target; el && el !== container; el = el.parentNode) {
			if (el.tagName === "BUTTON") return;
			if (el.tagName === "A") {
				link = el;
				break;
			}
		}
		if (!link || link.getAttribute("target")) return;
		const href = link.getAttribute("href");
		if (href && !(href.startsWith("//") || href.startsWith("http://") || href.startsWith("https://"))) {
			e.preventDefault();
			let path = href;
			if (href.startsWith("#")) {
				const fullPath = this.$route.fullPath;
				const hashIndex = fullPath.lastIndexOf("#");
				path = (hashIndex === -1 ? fullPath : fullPath.slice(0, hashIndex)) + href;
			}
			this.$router.push(path);
		}
	},
	camelToSnakeCase(str) {
		return str.replace(/(.)([A-Z][a-z]+)/, "$1_$2").replace(/([a-z0-9])([A-Z])/, "$1_$2").toLowerCase();
	},
	snakeToCamelCase(str) {
		return str.toLowerCase().replace(/(?:^|_)(\w)/g, (_, c) => c.toUpperCase());
	},
	async waitUntil(promise, timeout = -1) {
		let resolved = false;
		return new Promise((resolve, reject) => {
			let timeoutId;
			if (timeout >= 0) timeoutId = setTimeout(() => {
				resolve("timeout");
				resolved = true;
			}, timeout);
			promise.then((result) => {
				if (resolved) return;
				if (timeoutId) clearTimeout(timeoutId);
				resolve(result);
			}).catch((error) => {
				if (resolved) return;
				if (timeoutId) clearTimeout(timeoutId);
				reject(error);
			});
		});
	},
	async openQuickACLGroup(data) {
		const QuickACLGroupModal = (await Promise.resolve().then(() => require("./assets/quickACLGroupModal-DLgkyoYY.cjs"))).default;
		await this.$vfm.show({ component: QuickACLGroupModal }, data);
	},
	withoutKeys(obj, keys = []) {
		if (!obj) return obj;
		if (Array.isArray(obj)) return obj.map((a) => this.withoutKeys(a, keys));
		obj = JSON.parse(JSON.stringify(obj));
		return Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));
	}
} };
//#endregion
//#region src/components/alert.vue
var _sfc_main$31 = {
	props: {
		theme: String,
		error: Boolean,
		closable: Boolean
	},
	methods: { close() {
		this.$emit("close");
	} }
};
function _sfc_ssrRender$31(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_FontAwesomeIcon = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("FontAwesomeIcon");
	_push(`<div${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttrs)((0, require__plugin_vue_export_helper.vue_exports.mergeProps)({ class: ["thetree-alert", {
		"thetree-alert-primary": $props.theme === "primary",
		"thetree-alert-danger": $props.theme === "danger" || $props.error
	}] }, _attrs))} data-v-cd2a4b79><div class="alert-content" data-v-cd2a4b79>`);
	(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "default", {}, null, _push, _parent);
	_push(`</div>`);
	if ($props.closable) {
		_push(`<div data-v-cd2a4b79><a href="#" class="close-link" data-v-cd2a4b79>`);
		_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_FontAwesomeIcon, { icon: "xmark" }, null, _parent));
		_push(`</a></div>`);
	} else _push(`<!---->`);
	_push(`</div>`);
}
var _sfc_setup$31 = _sfc_main$31.setup;
_sfc_main$31.setup = (props, ctx) => {
	const ssrContext = (0, require__plugin_vue_export_helper.vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/alert.vue");
	return _sfc_setup$31 ? _sfc_setup$31(props, ctx) : void 0;
};
var alert_default = /*#__PURE__*/ require__plugin_vue_export_helper._plugin_vue_export_helper_default(_sfc_main$31, [["ssrRender", _sfc_ssrRender$31], ["__scopeId", "data-v-cd2a4b79"]]);
//#endregion
//#region node_modules/vue-router/node_modules/@vue/devtools-api/lib/esm/env.js
function getDevtoolsGlobalHook() {
	return getTarget().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function getTarget() {
	return typeof navigator !== "undefined" && typeof window !== "undefined" ? window : typeof globalThis !== "undefined" ? globalThis : {};
}
var isProxyAvailable = typeof Proxy === "function";
//#endregion
//#region node_modules/vue-router/node_modules/@vue/devtools-api/lib/esm/const.js
var HOOK_SETUP = "devtools-plugin:setup";
var HOOK_PLUGIN_SETTINGS_SET = "plugin:settings:set";
//#endregion
//#region node_modules/vue-router/node_modules/@vue/devtools-api/lib/esm/time.js
var supported;
var perf$1;
function isPerformanceSupported() {
	var _a;
	if (supported !== void 0) return supported;
	if (typeof window !== "undefined" && window.performance) {
		supported = true;
		perf$1 = window.performance;
	} else if (typeof globalThis !== "undefined" && ((_a = globalThis.perf_hooks) === null || _a === void 0 ? void 0 : _a.performance)) {
		supported = true;
		perf$1 = globalThis.perf_hooks.performance;
	} else supported = false;
	return supported;
}
function now() {
	return isPerformanceSupported() ? perf$1.now() : Date.now();
}
//#endregion
//#region node_modules/vue-router/node_modules/@vue/devtools-api/lib/esm/proxy.js
var ApiProxy = class {
	constructor(plugin, hook) {
		this.target = null;
		this.targetQueue = [];
		this.onQueue = [];
		this.plugin = plugin;
		this.hook = hook;
		const defaultSettings = {};
		if (plugin.settings) for (const id in plugin.settings) defaultSettings[id] = plugin.settings[id].defaultValue;
		const localSettingsSaveId = `__vue-devtools-plugin-settings__${plugin.id}`;
		let currentSettings = Object.assign({}, defaultSettings);
		try {
			const raw = localStorage.getItem(localSettingsSaveId);
			const data = JSON.parse(raw);
			Object.assign(currentSettings, data);
		} catch (e) {}
		this.fallbacks = {
			getSettings() {
				return currentSettings;
			},
			setSettings(value) {
				try {
					localStorage.setItem(localSettingsSaveId, JSON.stringify(value));
				} catch (e) {}
				currentSettings = value;
			},
			now() {
				return now();
			}
		};
		if (hook) hook.on(HOOK_PLUGIN_SETTINGS_SET, (pluginId, value) => {
			if (pluginId === this.plugin.id) this.fallbacks.setSettings(value);
		});
		this.proxiedOn = new Proxy({}, { get: (_target, prop) => {
			if (this.target) return this.target.on[prop];
			else return (...args) => {
				this.onQueue.push({
					method: prop,
					args
				});
			};
		} });
		this.proxiedTarget = new Proxy({}, { get: (_target, prop) => {
			if (this.target) return this.target[prop];
			else if (prop === "on") return this.proxiedOn;
			else if (Object.keys(this.fallbacks).includes(prop)) return (...args) => {
				this.targetQueue.push({
					method: prop,
					args,
					resolve: () => {}
				});
				return this.fallbacks[prop](...args);
			};
			else return (...args) => {
				return new Promise((resolve) => {
					this.targetQueue.push({
						method: prop,
						args,
						resolve
					});
				});
			};
		} });
	}
	async setRealTarget(target) {
		this.target = target;
		for (const item of this.onQueue) this.target.on[item.method](...item.args);
		for (const item of this.targetQueue) item.resolve(await this.target[item.method](...item.args));
	}
};
//#endregion
//#region node_modules/vue-router/node_modules/@vue/devtools-api/lib/esm/index.js
function setupDevtoolsPlugin$1(pluginDescriptor, setupFn) {
	const descriptor = pluginDescriptor;
	const target = getTarget();
	const hook = getDevtoolsGlobalHook();
	const enableProxy = isProxyAvailable && descriptor.enableEarlyProxy;
	if (hook && (target.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !enableProxy)) hook.emit(HOOK_SETUP, pluginDescriptor, setupFn);
	else {
		const proxy = enableProxy ? new ApiProxy(descriptor, hook) : null;
		(target.__VUE_DEVTOOLS_PLUGINS__ = target.__VUE_DEVTOOLS_PLUGINS__ || []).push({
			pluginDescriptor: descriptor,
			setupFn,
			proxy
		});
		if (proxy) setupFn(proxy.proxiedTarget);
	}
}
//#endregion
//#region node_modules/vue-router/dist/vue-router.mjs
/*!
* vue-router v4.5.1
* (c) 2025 Eduardo San Martin Morote
* @license MIT
*/
var isBrowser = typeof document !== "undefined";
/**
* Allows differentiating lazy components from functional components and vue-class-component
* @internal
*
* @param component
*/
function isRouteComponent(component) {
	return typeof component === "object" || "displayName" in component || "props" in component || "__vccOpts" in component;
}
function isESModule(obj) {
	return obj.__esModule || obj[Symbol.toStringTag] === "Module" || obj.default && isRouteComponent(obj.default);
}
var assign = Object.assign;
function applyToParams(fn, params) {
	const newParams = {};
	for (const key in params) {
		const value = params[key];
		newParams[key] = isArray(value) ? value.map(fn) : fn(value);
	}
	return newParams;
}
var noop$4 = () => {};
/**
* Typesafe alternative to Array.isArray
* https://github.com/microsoft/TypeScript/pull/48228
*/
var isArray = Array.isArray;
function warn(msg) {
	const args = Array.from(arguments).slice(1);
	console.warn.apply(console, ["[Vue Router warn]: " + msg].concat(args));
}
/**
* Encoding Rules (␣ = Space)
* - Path: ␣ " < > # ? { }
* - Query: ␣ " < > # & =
* - Hash: ␣ " < > `
*
* On top of that, the RFC3986 (https://tools.ietf.org/html/rfc3986#section-2.2)
* defines some extra characters to be encoded. Most browsers do not encode them
* in encodeURI https://github.com/whatwg/url/issues/369, so it may be safer to
* also encode `!'()*`. Leaving un-encoded only ASCII alphanumeric(`a-zA-Z0-9`)
* plus `-._~`. This extra safety should be applied to query by patching the
* string returned by encodeURIComponent encodeURI also encodes `[\]^`. `\`
* should be encoded to avoid ambiguity. Browsers (IE, FF, C) transform a `\`
* into a `/` if directly typed in. The _backtick_ (`````) should also be
* encoded everywhere because some browsers like FF encode it when directly
* written while others don't. Safari and IE don't encode ``"<>{}``` in hash.
*/
var HASH_RE = /#/g;
var AMPERSAND_RE = /&/g;
var SLASH_RE = /\//g;
var EQUAL_RE = /=/g;
var IM_RE = /\?/g;
var PLUS_RE = /\+/g;
/**
* NOTE: It's not clear to me if we should encode the + symbol in queries, it
* seems to be less flexible than not doing so and I can't find out the legacy
* systems requiring this for regular requests like text/html. In the standard,
* the encoding of the plus character is only mentioned for
* application/x-www-form-urlencoded
* (https://url.spec.whatwg.org/#urlencoded-parsing) and most browsers seems lo
* leave the plus character as is in queries. To be more flexible, we allow the
* plus character on the query, but it can also be manually encoded by the user.
*
* Resources:
* - https://url.spec.whatwg.org/#urlencoded-parsing
* - https://stackoverflow.com/questions/1634271/url-encoding-the-space-character-or-20
*/
var ENC_BRACKET_OPEN_RE = /%5B/g;
var ENC_BRACKET_CLOSE_RE = /%5D/g;
var ENC_CARET_RE = /%5E/g;
var ENC_BACKTICK_RE = /%60/g;
var ENC_CURLY_OPEN_RE = /%7B/g;
var ENC_PIPE_RE = /%7C/g;
var ENC_CURLY_CLOSE_RE = /%7D/g;
var ENC_SPACE_RE = /%20/g;
/**
* Encode characters that need to be encoded on the path, search and hash
* sections of the URL.
*
* @internal
* @param text - string to encode
* @returns encoded string
*/
function commonEncode(text) {
	return encodeURI("" + text).replace(ENC_PIPE_RE, "|").replace(ENC_BRACKET_OPEN_RE, "[").replace(ENC_BRACKET_CLOSE_RE, "]");
}
/**
* Encode characters that need to be encoded on the hash section of the URL.
*
* @param text - string to encode
* @returns encoded string
*/
function encodeHash(text) {
	return commonEncode(text).replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
}
/**
* Encode characters that need to be encoded query values on the query
* section of the URL.
*
* @param text - string to encode
* @returns encoded string
*/
function encodeQueryValue(text) {
	return commonEncode(text).replace(PLUS_RE, "%2B").replace(ENC_SPACE_RE, "+").replace(HASH_RE, "%23").replace(AMPERSAND_RE, "%26").replace(ENC_BACKTICK_RE, "`").replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
}
/**
* Like `encodeQueryValue` but also encodes the `=` character.
*
* @param text - string to encode
*/
function encodeQueryKey(text) {
	return encodeQueryValue(text).replace(EQUAL_RE, "%3D");
}
/**
* Encode characters that need to be encoded on the path section of the URL.
*
* @param text - string to encode
* @returns encoded string
*/
function encodePath(text) {
	return commonEncode(text).replace(HASH_RE, "%23").replace(IM_RE, "%3F");
}
/**
* Encode characters that need to be encoded on the path section of the URL as a
* param. This function encodes everything {@link encodePath} does plus the
* slash (`/`) character. If `text` is `null` or `undefined`, returns an empty
* string instead.
*
* @param text - string to encode
* @returns encoded string
*/
function encodeParam(text) {
	return text == null ? "" : encodePath(text).replace(SLASH_RE, "%2F");
}
/**
* Decode text using `decodeURIComponent`. Returns the original text if it
* fails.
*
* @param text - string to decode
* @returns decoded string
*/
function decode(text) {
	try {
		return decodeURIComponent("" + text);
	} catch (err) {
		process.env.NODE_ENV !== "production" && warn(`Error decoding "${text}". Using original value`);
	}
	return "" + text;
}
var TRAILING_SLASH_RE = /\/$/;
var removeTrailingSlash = (path) => path.replace(TRAILING_SLASH_RE, "");
/**
* Transforms a URI into a normalized history location
*
* @param parseQuery
* @param location - URI to normalize
* @param currentLocation - current absolute location. Allows resolving relative
* paths. Must start with `/`. Defaults to `/`
* @returns a normalized history location
*/
function parseURL(parseQuery, location, currentLocation = "/") {
	let path, query = {}, searchString = "", hash = "";
	const hashPos = location.indexOf("#");
	let searchPos = location.indexOf("?");
	if (hashPos < searchPos && hashPos >= 0) searchPos = -1;
	if (searchPos > -1) {
		path = location.slice(0, searchPos);
		searchString = location.slice(searchPos + 1, hashPos > -1 ? hashPos : location.length);
		query = parseQuery(searchString);
	}
	if (hashPos > -1) {
		path = path || location.slice(0, hashPos);
		hash = location.slice(hashPos, location.length);
	}
	path = resolveRelativePath(path != null ? path : location, currentLocation);
	return {
		fullPath: path + (searchString && "?") + searchString + hash,
		path,
		query,
		hash: decode(hash)
	};
}
/**
* Stringifies a URL object
*
* @param stringifyQuery
* @param location
*/
function stringifyURL(stringifyQuery, location) {
	const query = location.query ? stringifyQuery(location.query) : "";
	return location.path + (query && "?") + query + (location.hash || "");
}
/**
* Checks if two RouteLocation are equal. This means that both locations are
* pointing towards the same {@link RouteRecord} and that all `params`, `query`
* parameters and `hash` are the same
*
* @param stringifyQuery - A function that takes a query object of type LocationQueryRaw and returns a string representation of it.
* @param a - first {@link RouteLocation}
* @param b - second {@link RouteLocation}
*/
function isSameRouteLocation(stringifyQuery, a, b) {
	const aLastIndex = a.matched.length - 1;
	const bLastIndex = b.matched.length - 1;
	return aLastIndex > -1 && aLastIndex === bLastIndex && isSameRouteRecord(a.matched[aLastIndex], b.matched[bLastIndex]) && isSameRouteLocationParams(a.params, b.params) && stringifyQuery(a.query) === stringifyQuery(b.query) && a.hash === b.hash;
}
/**
* Check if two `RouteRecords` are equal. Takes into account aliases: they are
* considered equal to the `RouteRecord` they are aliasing.
*
* @param a - first {@link RouteRecord}
* @param b - second {@link RouteRecord}
*/
function isSameRouteRecord(a, b) {
	return (a.aliasOf || a) === (b.aliasOf || b);
}
function isSameRouteLocationParams(a, b) {
	if (Object.keys(a).length !== Object.keys(b).length) return false;
	for (const key in a) if (!isSameRouteLocationParamsValue(a[key], b[key])) return false;
	return true;
}
function isSameRouteLocationParamsValue(a, b) {
	return isArray(a) ? isEquivalentArray(a, b) : isArray(b) ? isEquivalentArray(b, a) : a === b;
}
/**
* Check if two arrays are the same or if an array with one single entry is the
* same as another primitive value. Used to check query and parameters
*
* @param a - array of values
* @param b - array of values or a single value
*/
function isEquivalentArray(a, b) {
	return isArray(b) ? a.length === b.length && a.every((value, i) => value === b[i]) : a.length === 1 && a[0] === b;
}
/**
* Resolves a relative path that starts with `.`.
*
* @param to - path location we are resolving
* @param from - currentLocation.path, should start with `/`
*/
function resolveRelativePath(to, from) {
	if (to.startsWith("/")) return to;
	if (process.env.NODE_ENV !== "production" && !from.startsWith("/")) {
		warn(`Cannot resolve a relative location without an absolute path. Trying to resolve "${to}" from "${from}". It should look like "/${from}".`);
		return to;
	}
	if (!to) return from;
	const fromSegments = from.split("/");
	const toSegments = to.split("/");
	const lastToSegment = toSegments[toSegments.length - 1];
	if (lastToSegment === ".." || lastToSegment === ".") toSegments.push("");
	let position = fromSegments.length - 1;
	let toPosition;
	let segment;
	for (toPosition = 0; toPosition < toSegments.length; toPosition++) {
		segment = toSegments[toPosition];
		if (segment === ".") continue;
		if (segment === "..") {
			if (position > 1) position--;
		} else break;
	}
	return fromSegments.slice(0, position).join("/") + "/" + toSegments.slice(toPosition).join("/");
}
/**
* Initial route location where the router is. Can be used in navigation guards
* to differentiate the initial navigation.
*
* @example
* ```js
* import { START_LOCATION } from 'vue-router'
*
* router.beforeEach((to, from) => {
*   if (from === START_LOCATION) {
*     // initial navigation
*   }
* })
* ```
*/
var START_LOCATION_NORMALIZED = {
	path: "/",
	name: void 0,
	params: {},
	query: {},
	hash: "",
	fullPath: "/",
	matched: [],
	meta: {},
	redirectedFrom: void 0
};
var NavigationType;
(function(NavigationType) {
	NavigationType["pop"] = "pop";
	NavigationType["push"] = "push";
})(NavigationType || (NavigationType = {}));
var NavigationDirection;
(function(NavigationDirection) {
	NavigationDirection["back"] = "back";
	NavigationDirection["forward"] = "forward";
	NavigationDirection["unknown"] = "";
})(NavigationDirection || (NavigationDirection = {}));
/**
* Starting location for Histories
*/
var START = "";
/**
* Normalizes a base by removing any trailing slash and reading the base tag if
* present.
*
* @param base - base to normalize
*/
function normalizeBase(base) {
	if (!base) if (isBrowser) {
		const baseEl = document.querySelector("base");
		base = baseEl && baseEl.getAttribute("href") || "/";
		base = base.replace(/^\w+:\/\/[^\/]+/, "");
	} else base = "/";
	if (base[0] !== "/" && base[0] !== "#") base = "/" + base;
	return removeTrailingSlash(base);
}
var BEFORE_HASH_RE = /^[^#]+#/;
function createHref(base, location) {
	return base.replace(BEFORE_HASH_RE, "#") + location;
}
function getElementPosition(el, offset) {
	const docRect = document.documentElement.getBoundingClientRect();
	const elRect = el.getBoundingClientRect();
	return {
		behavior: offset.behavior,
		left: elRect.left - docRect.left - (offset.left || 0),
		top: elRect.top - docRect.top - (offset.top || 0)
	};
}
var computeScrollPosition = () => ({
	left: window.scrollX,
	top: window.scrollY
});
function scrollToPosition(position) {
	let scrollToOptions;
	if ("el" in position) {
		const positionEl = position.el;
		const isIdSelector = typeof positionEl === "string" && positionEl.startsWith("#");
		/**
		* `id`s can accept pretty much any characters, including CSS combinators
		* like `>` or `~`. It's still possible to retrieve elements using
		* `document.getElementById('~')` but it needs to be escaped when using
		* `document.querySelector('#\\~')` for it to be valid. The only
		* requirements for `id`s are them to be unique on the page and to not be
		* empty (`id=""`). Because of that, when passing an id selector, it should
		* be properly escaped for it to work with `querySelector`. We could check
		* for the id selector to be simple (no CSS combinators `+ >~`) but that
		* would make things inconsistent since they are valid characters for an
		* `id` but would need to be escaped when using `querySelector`, breaking
		* their usage and ending up in no selector returned. Selectors need to be
		* escaped:
		*
		* - `#1-thing` becomes `#\31 -thing`
		* - `#with~symbols` becomes `#with\\~symbols`
		*
		* - More information about  the topic can be found at
		*   https://mathiasbynens.be/notes/html5-id-class.
		* - Practical example: https://mathiasbynens.be/demo/html5-id
		*/
		if (process.env.NODE_ENV !== "production" && typeof position.el === "string") {
			if (!isIdSelector || !document.getElementById(position.el.slice(1))) try {
				const foundEl = document.querySelector(position.el);
				if (isIdSelector && foundEl) {
					warn(`The selector "${position.el}" should be passed as "el: document.querySelector('${position.el}')" because it starts with "#".`);
					return;
				}
			} catch (err) {
				warn(`The selector "${position.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);
				return;
			}
		}
		const el = typeof positionEl === "string" ? isIdSelector ? document.getElementById(positionEl.slice(1)) : document.querySelector(positionEl) : positionEl;
		if (!el) {
			process.env.NODE_ENV !== "production" && warn(`Couldn't find element using selector "${position.el}" returned by scrollBehavior.`);
			return;
		}
		scrollToOptions = getElementPosition(el, position);
	} else scrollToOptions = position;
	if ("scrollBehavior" in document.documentElement.style) window.scrollTo(scrollToOptions);
	else window.scrollTo(scrollToOptions.left != null ? scrollToOptions.left : window.scrollX, scrollToOptions.top != null ? scrollToOptions.top : window.scrollY);
}
function getScrollKey(path, delta) {
	return (history.state ? history.state.position - delta : -1) + path;
}
var scrollPositions = /* @__PURE__ */ new Map();
function saveScrollPosition(key, scrollPosition) {
	scrollPositions.set(key, scrollPosition);
}
function getSavedScrollPosition(key) {
	const scroll = scrollPositions.get(key);
	scrollPositions.delete(key);
	return scroll;
}
/**
* Creates an in-memory based history. The main purpose of this history is to handle SSR. It starts in a special location that is nowhere.
* It's up to the user to replace that location with the starter location by either calling `router.push` or `router.replace`.
*
* @param base - Base applied to all urls, defaults to '/'
* @returns a history object that can be passed to the router constructor
*/
function createMemoryHistory(base = "") {
	let listeners = [];
	let queue = [[START, {}]];
	let position = 0;
	base = normalizeBase(base);
	function setLocation(location, state = {}) {
		position++;
		if (position !== queue.length) queue.splice(position);
		queue.push([location, state]);
	}
	function triggerListeners(to, from, { direction, delta }) {
		const info = {
			direction,
			delta,
			type: NavigationType.pop
		};
		for (const callback of listeners) callback(to, from, info);
	}
	const routerHistory = {
		location: START,
		state: {},
		base,
		createHref: createHref.bind(null, base),
		replace(to, state) {
			queue.splice(position--, 1);
			setLocation(to, state);
		},
		push(to, state) {
			setLocation(to, state);
		},
		listen(callback) {
			listeners.push(callback);
			return () => {
				const index = listeners.indexOf(callback);
				if (index > -1) listeners.splice(index, 1);
			};
		},
		destroy() {
			listeners = [];
			queue = [[START, {}]];
			position = 0;
		},
		go(delta, shouldTrigger = true) {
			const from = this.location;
			const direction = delta < 0 ? NavigationDirection.back : NavigationDirection.forward;
			position = Math.max(0, Math.min(position + delta, queue.length - 1));
			if (shouldTrigger) triggerListeners(this.location, from, {
				direction,
				delta
			});
		}
	};
	Object.defineProperty(routerHistory, "location", {
		enumerable: true,
		get: () => queue[position][0]
	});
	Object.defineProperty(routerHistory, "state", {
		enumerable: true,
		get: () => queue[position][1]
	});
	return routerHistory;
}
function isRouteLocation(route) {
	return typeof route === "string" || route && typeof route === "object";
}
function isRouteName(name) {
	return typeof name === "string" || typeof name === "symbol";
}
var NavigationFailureSymbol = Symbol(process.env.NODE_ENV !== "production" ? "navigation failure" : "");
/**
* Enumeration with all possible types for navigation failures. Can be passed to
* {@link isNavigationFailure} to check for specific failures.
*/
var NavigationFailureType;
(function(NavigationFailureType) {
	/**
	* An aborted navigation is a navigation that failed because a navigation
	* guard returned `false` or called `next(false)`
	*/
	NavigationFailureType[NavigationFailureType["aborted"] = 4] = "aborted";
	/**
	* A cancelled navigation is a navigation that failed because a more recent
	* navigation finished started (not necessarily finished).
	*/
	NavigationFailureType[NavigationFailureType["cancelled"] = 8] = "cancelled";
	/**
	* A duplicated navigation is a navigation that failed because it was
	* initiated while already being at the exact same location.
	*/
	NavigationFailureType[NavigationFailureType["duplicated"] = 16] = "duplicated";
})(NavigationFailureType || (NavigationFailureType = {}));
var ErrorTypeMessages = {
	[1]({ location, currentLocation }) {
		return `No match for\n ${JSON.stringify(location)}${currentLocation ? "\nwhile being at\n" + JSON.stringify(currentLocation) : ""}`;
	},
	[2]({ from, to }) {
		return `Redirected from "${from.fullPath}" to "${stringifyRoute(to)}" via a navigation guard.`;
	},
	[4]({ from, to }) {
		return `Navigation aborted from "${from.fullPath}" to "${to.fullPath}" via a navigation guard.`;
	},
	[8]({ from, to }) {
		return `Navigation cancelled from "${from.fullPath}" to "${to.fullPath}" with a new navigation.`;
	},
	[16]({ from, to }) {
		return `Avoided redundant navigation to current location: "${from.fullPath}".`;
	}
};
/**
* Creates a typed NavigationFailure object.
* @internal
* @param type - NavigationFailureType
* @param params - { from, to }
*/
function createRouterError(type, params) {
	if (process.env.NODE_ENV !== "production" || false) return assign(new Error(ErrorTypeMessages[type](params)), {
		type,
		[NavigationFailureSymbol]: true
	}, params);
	else return assign(/* @__PURE__ */ new Error(), {
		type,
		[NavigationFailureSymbol]: true
	}, params);
}
function isNavigationFailure(error, type) {
	return error instanceof Error && NavigationFailureSymbol in error && (type == null || !!(error.type & type));
}
var propertiesToLog = [
	"params",
	"query",
	"hash"
];
function stringifyRoute(to) {
	if (typeof to === "string") return to;
	if (to.path != null) return to.path;
	const location = {};
	for (const key of propertiesToLog) if (key in to) location[key] = to[key];
	return JSON.stringify(location, null, 2);
}
var BASE_PARAM_PATTERN = "[^/]+?";
var BASE_PATH_PARSER_OPTIONS = {
	sensitive: false,
	strict: false,
	start: true,
	end: true
};
var REGEX_CHARS_RE = /[.+*?^${}()[\]/\\]/g;
/**
* Creates a path parser from an array of Segments (a segment is an array of Tokens)
*
* @param segments - array of segments returned by tokenizePath
* @param extraOptions - optional options for the regexp
* @returns a PathParser
*/
function tokensToParser(segments, extraOptions) {
	const options = assign({}, BASE_PATH_PARSER_OPTIONS, extraOptions);
	const score = [];
	let pattern = options.start ? "^" : "";
	const keys = [];
	for (const segment of segments) {
		const segmentScores = segment.length ? [] : [90];
		if (options.strict && !segment.length) pattern += "/";
		for (let tokenIndex = 0; tokenIndex < segment.length; tokenIndex++) {
			const token = segment[tokenIndex];
			let subSegmentScore = 40 + (options.sensitive ? .25 : 0);
			if (token.type === 0) {
				if (!tokenIndex) pattern += "/";
				pattern += token.value.replace(REGEX_CHARS_RE, "\\$&");
				subSegmentScore += 40;
			} else if (token.type === 1) {
				const { value, repeatable, optional, regexp } = token;
				keys.push({
					name: value,
					repeatable,
					optional
				});
				const re = regexp ? regexp : BASE_PARAM_PATTERN;
				if (re !== BASE_PARAM_PATTERN) {
					subSegmentScore += 10;
					try {
						new RegExp(`(${re})`);
					} catch (err) {
						throw new Error(`Invalid custom RegExp for param "${value}" (${re}): ` + err.message);
					}
				}
				let subPattern = repeatable ? `((?:${re})(?:/(?:${re}))*)` : `(${re})`;
				if (!tokenIndex) subPattern = optional && segment.length < 2 ? `(?:/${subPattern})` : "/" + subPattern;
				if (optional) subPattern += "?";
				pattern += subPattern;
				subSegmentScore += 20;
				if (optional) subSegmentScore += -8;
				if (repeatable) subSegmentScore += -20;
				if (re === ".*") subSegmentScore += -50;
			}
			segmentScores.push(subSegmentScore);
		}
		score.push(segmentScores);
	}
	if (options.strict && options.end) {
		const i = score.length - 1;
		score[i][score[i].length - 1] += .7000000000000001;
	}
	if (!options.strict) pattern += "/?";
	if (options.end) pattern += "$";
	else if (options.strict && !pattern.endsWith("/")) pattern += "(?:/|$)";
	const re = new RegExp(pattern, options.sensitive ? "" : "i");
	function parse(path) {
		const match = path.match(re);
		const params = {};
		if (!match) return null;
		for (let i = 1; i < match.length; i++) {
			const value = match[i] || "";
			const key = keys[i - 1];
			params[key.name] = value && key.repeatable ? value.split("/") : value;
		}
		return params;
	}
	function stringify(params) {
		let path = "";
		let avoidDuplicatedSlash = false;
		for (const segment of segments) {
			if (!avoidDuplicatedSlash || !path.endsWith("/")) path += "/";
			avoidDuplicatedSlash = false;
			for (const token of segment) if (token.type === 0) path += token.value;
			else if (token.type === 1) {
				const { value, repeatable, optional } = token;
				const param = value in params ? params[value] : "";
				if (isArray(param) && !repeatable) throw new Error(`Provided param "${value}" is an array but it is not repeatable (* or + modifiers)`);
				const text = isArray(param) ? param.join("/") : param;
				if (!text) if (optional) {
					if (segment.length < 2) if (path.endsWith("/")) path = path.slice(0, -1);
					else avoidDuplicatedSlash = true;
				} else throw new Error(`Missing required param "${value}"`);
				path += text;
			}
		}
		return path || "/";
	}
	return {
		re,
		score,
		keys,
		parse,
		stringify
	};
}
/**
* Compares an array of numbers as used in PathParser.score and returns a
* number. This function can be used to `sort` an array
*
* @param a - first array of numbers
* @param b - second array of numbers
* @returns 0 if both are equal, < 0 if a should be sorted first, > 0 if b
* should be sorted first
*/
function compareScoreArray(a, b) {
	let i = 0;
	while (i < a.length && i < b.length) {
		const diff = b[i] - a[i];
		if (diff) return diff;
		i++;
	}
	if (a.length < b.length) return a.length === 1 && a[0] === 80 ? -1 : 1;
	else if (a.length > b.length) return b.length === 1 && b[0] === 80 ? 1 : -1;
	return 0;
}
/**
* Compare function that can be used with `sort` to sort an array of PathParser
*
* @param a - first PathParser
* @param b - second PathParser
* @returns 0 if both are equal, < 0 if a should be sorted first, > 0 if b
*/
function comparePathParserScore(a, b) {
	let i = 0;
	const aScore = a.score;
	const bScore = b.score;
	while (i < aScore.length && i < bScore.length) {
		const comp = compareScoreArray(aScore[i], bScore[i]);
		if (comp) return comp;
		i++;
	}
	if (Math.abs(bScore.length - aScore.length) === 1) {
		if (isLastScoreNegative(aScore)) return 1;
		if (isLastScoreNegative(bScore)) return -1;
	}
	return bScore.length - aScore.length;
}
/**
* This allows detecting splats at the end of a path: /home/:id(.*)*
*
* @param score - score to check
* @returns true if the last entry is negative
*/
function isLastScoreNegative(score) {
	const last = score[score.length - 1];
	return score.length > 0 && last[last.length - 1] < 0;
}
var ROOT_TOKEN = {
	type: 0,
	value: ""
};
var VALID_PARAM_RE = /[a-zA-Z0-9_]/;
function tokenizePath(path) {
	if (!path) return [[]];
	if (path === "/") return [[ROOT_TOKEN]];
	if (!path.startsWith("/")) throw new Error(process.env.NODE_ENV !== "production" ? `Route paths should start with a "/": "${path}" should be "/${path}".` : `Invalid path "${path}"`);
	function crash(message) {
		throw new Error(`ERR (${state})/"${buffer}": ${message}`);
	}
	let state = 0;
	let previousState = state;
	const tokens = [];
	let segment;
	function finalizeSegment() {
		if (segment) tokens.push(segment);
		segment = [];
	}
	let i = 0;
	let char;
	let buffer = "";
	let customRe = "";
	function consumeBuffer() {
		if (!buffer) return;
		if (state === 0) segment.push({
			type: 0,
			value: buffer
		});
		else if (state === 1 || state === 2 || state === 3) {
			if (segment.length > 1 && (char === "*" || char === "+")) crash(`A repeatable param (${buffer}) must be alone in its segment. eg: '/:ids+.`);
			segment.push({
				type: 1,
				value: buffer,
				regexp: customRe,
				repeatable: char === "*" || char === "+",
				optional: char === "*" || char === "?"
			});
		} else crash("Invalid state to consume buffer");
		buffer = "";
	}
	function addCharToBuffer() {
		buffer += char;
	}
	while (i < path.length) {
		char = path[i++];
		if (char === "\\" && state !== 2) {
			previousState = state;
			state = 4;
			continue;
		}
		switch (state) {
			case 0:
				if (char === "/") {
					if (buffer) consumeBuffer();
					finalizeSegment();
				} else if (char === ":") {
					consumeBuffer();
					state = 1;
				} else addCharToBuffer();
				break;
			case 4:
				addCharToBuffer();
				state = previousState;
				break;
			case 1:
				if (char === "(") state = 2;
				else if (VALID_PARAM_RE.test(char)) addCharToBuffer();
				else {
					consumeBuffer();
					state = 0;
					if (char !== "*" && char !== "?" && char !== "+") i--;
				}
				break;
			case 2:
				if (char === ")") if (customRe[customRe.length - 1] == "\\") customRe = customRe.slice(0, -1) + char;
				else state = 3;
				else customRe += char;
				break;
			case 3:
				consumeBuffer();
				state = 0;
				if (char !== "*" && char !== "?" && char !== "+") i--;
				customRe = "";
				break;
			default:
				crash("Unknown state");
				break;
		}
	}
	if (state === 2) crash(`Unfinished custom RegExp for param "${buffer}"`);
	consumeBuffer();
	finalizeSegment();
	return tokens;
}
function createRouteRecordMatcher(record, parent, options) {
	const parser = tokensToParser(tokenizePath(record.path), options);
	if (process.env.NODE_ENV !== "production") {
		const existingKeys = /* @__PURE__ */ new Set();
		for (const key of parser.keys) {
			if (existingKeys.has(key.name)) warn(`Found duplicated params with name "${key.name}" for path "${record.path}". Only the last one will be available on "$route.params".`);
			existingKeys.add(key.name);
		}
	}
	const matcher = assign(parser, {
		record,
		parent,
		children: [],
		alias: []
	});
	if (parent) {
		if (!matcher.record.aliasOf === !parent.record.aliasOf) parent.children.push(matcher);
	}
	return matcher;
}
/**
* Creates a Router Matcher.
*
* @internal
* @param routes - array of initial routes
* @param globalOptions - global route options
*/
function createRouterMatcher(routes, globalOptions) {
	const matchers = [];
	const matcherMap = /* @__PURE__ */ new Map();
	globalOptions = mergeOptions({
		strict: false,
		end: true,
		sensitive: false
	}, globalOptions);
	function getRecordMatcher(name) {
		return matcherMap.get(name);
	}
	function addRoute(record, parent, originalRecord) {
		const isRootAdd = !originalRecord;
		const mainNormalizedRecord = normalizeRouteRecord(record);
		if (process.env.NODE_ENV !== "production") checkChildMissingNameWithEmptyPath(mainNormalizedRecord, parent);
		mainNormalizedRecord.aliasOf = originalRecord && originalRecord.record;
		const options = mergeOptions(globalOptions, record);
		const normalizedRecords = [mainNormalizedRecord];
		if ("alias" in record) {
			const aliases = typeof record.alias === "string" ? [record.alias] : record.alias;
			for (const alias of aliases) normalizedRecords.push(normalizeRouteRecord(assign({}, mainNormalizedRecord, {
				components: originalRecord ? originalRecord.record.components : mainNormalizedRecord.components,
				path: alias,
				aliasOf: originalRecord ? originalRecord.record : mainNormalizedRecord
			})));
		}
		let matcher;
		let originalMatcher;
		for (const normalizedRecord of normalizedRecords) {
			const { path } = normalizedRecord;
			if (parent && path[0] !== "/") {
				const parentPath = parent.record.path;
				const connectingSlash = parentPath[parentPath.length - 1] === "/" ? "" : "/";
				normalizedRecord.path = parent.record.path + (path && connectingSlash + path);
			}
			if (process.env.NODE_ENV !== "production" && normalizedRecord.path === "*") throw new Error("Catch all routes (\"*\") must now be defined using a param with a custom regexp.\nSee more at https://router.vuejs.org/guide/migration/#Removed-star-or-catch-all-routes.");
			matcher = createRouteRecordMatcher(normalizedRecord, parent, options);
			if (process.env.NODE_ENV !== "production" && parent && path[0] === "/") checkMissingParamsInAbsolutePath(matcher, parent);
			if (originalRecord) {
				originalRecord.alias.push(matcher);
				if (process.env.NODE_ENV !== "production") checkSameParams(originalRecord, matcher);
			} else {
				originalMatcher = originalMatcher || matcher;
				if (originalMatcher !== matcher) originalMatcher.alias.push(matcher);
				if (isRootAdd && record.name && !isAliasRecord(matcher)) {
					if (process.env.NODE_ENV !== "production") checkSameNameAsAncestor(record, parent);
					removeRoute(record.name);
				}
			}
			if (isMatchable(matcher)) insertMatcher(matcher);
			if (mainNormalizedRecord.children) {
				const children = mainNormalizedRecord.children;
				for (let i = 0; i < children.length; i++) addRoute(children[i], matcher, originalRecord && originalRecord.children[i]);
			}
			originalRecord = originalRecord || matcher;
		}
		return originalMatcher ? () => {
			removeRoute(originalMatcher);
		} : noop$4;
	}
	function removeRoute(matcherRef) {
		if (isRouteName(matcherRef)) {
			const matcher = matcherMap.get(matcherRef);
			if (matcher) {
				matcherMap.delete(matcherRef);
				matchers.splice(matchers.indexOf(matcher), 1);
				matcher.children.forEach(removeRoute);
				matcher.alias.forEach(removeRoute);
			}
		} else {
			const index = matchers.indexOf(matcherRef);
			if (index > -1) {
				matchers.splice(index, 1);
				if (matcherRef.record.name) matcherMap.delete(matcherRef.record.name);
				matcherRef.children.forEach(removeRoute);
				matcherRef.alias.forEach(removeRoute);
			}
		}
	}
	function getRoutes() {
		return matchers;
	}
	function insertMatcher(matcher) {
		const index = findInsertionIndex(matcher, matchers);
		matchers.splice(index, 0, matcher);
		if (matcher.record.name && !isAliasRecord(matcher)) matcherMap.set(matcher.record.name, matcher);
	}
	function resolve(location, currentLocation) {
		let matcher;
		let params = {};
		let path;
		let name;
		if ("name" in location && location.name) {
			matcher = matcherMap.get(location.name);
			if (!matcher) throw createRouterError(1, { location });
			if (process.env.NODE_ENV !== "production") {
				const invalidParams = Object.keys(location.params || {}).filter((paramName) => !matcher.keys.find((k) => k.name === paramName));
				if (invalidParams.length) warn(`Discarded invalid param(s) "${invalidParams.join("\", \"")}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`);
			}
			name = matcher.record.name;
			params = assign(paramsFromLocation(currentLocation.params, matcher.keys.filter((k) => !k.optional).concat(matcher.parent ? matcher.parent.keys.filter((k) => k.optional) : []).map((k) => k.name)), location.params && paramsFromLocation(location.params, matcher.keys.map((k) => k.name)));
			path = matcher.stringify(params);
		} else if (location.path != null) {
			path = location.path;
			if (process.env.NODE_ENV !== "production" && !path.startsWith("/")) warn(`The Matcher cannot resolve relative paths but received "${path}". Unless you directly called \`matcher.resolve("${path}")\`, this is probably a bug in vue-router. Please open an issue at https://github.com/vuejs/router/issues/new/choose.`);
			matcher = matchers.find((m) => m.re.test(path));
			if (matcher) {
				params = matcher.parse(path);
				name = matcher.record.name;
			}
		} else {
			matcher = currentLocation.name ? matcherMap.get(currentLocation.name) : matchers.find((m) => m.re.test(currentLocation.path));
			if (!matcher) throw createRouterError(1, {
				location,
				currentLocation
			});
			name = matcher.record.name;
			params = assign({}, currentLocation.params, location.params);
			path = matcher.stringify(params);
		}
		const matched = [];
		let parentMatcher = matcher;
		while (parentMatcher) {
			matched.unshift(parentMatcher.record);
			parentMatcher = parentMatcher.parent;
		}
		return {
			name,
			path,
			params,
			matched,
			meta: mergeMetaFields(matched)
		};
	}
	routes.forEach((route) => addRoute(route));
	function clearRoutes() {
		matchers.length = 0;
		matcherMap.clear();
	}
	return {
		addRoute,
		resolve,
		removeRoute,
		clearRoutes,
		getRoutes,
		getRecordMatcher
	};
}
function paramsFromLocation(params, keys) {
	const newParams = {};
	for (const key of keys) if (key in params) newParams[key] = params[key];
	return newParams;
}
/**
* Normalizes a RouteRecordRaw. Creates a copy
*
* @param record
* @returns the normalized version
*/
function normalizeRouteRecord(record) {
	const normalized = {
		path: record.path,
		redirect: record.redirect,
		name: record.name,
		meta: record.meta || {},
		aliasOf: record.aliasOf,
		beforeEnter: record.beforeEnter,
		props: normalizeRecordProps(record),
		children: record.children || [],
		instances: {},
		leaveGuards: /* @__PURE__ */ new Set(),
		updateGuards: /* @__PURE__ */ new Set(),
		enterCallbacks: {},
		components: "components" in record ? record.components || null : record.component && { default: record.component }
	};
	Object.defineProperty(normalized, "mods", { value: {} });
	return normalized;
}
/**
* Normalize the optional `props` in a record to always be an object similar to
* components. Also accept a boolean for components.
* @param record
*/
function normalizeRecordProps(record) {
	const propsObject = {};
	const props = record.props || false;
	if ("component" in record) propsObject.default = props;
	else for (const name in record.components) propsObject[name] = typeof props === "object" ? props[name] : props;
	return propsObject;
}
/**
* Checks if a record or any of its parent is an alias
* @param record
*/
function isAliasRecord(record) {
	while (record) {
		if (record.record.aliasOf) return true;
		record = record.parent;
	}
	return false;
}
/**
* Merge meta fields of an array of records
*
* @param matched - array of matched records
*/
function mergeMetaFields(matched) {
	return matched.reduce((meta, record) => assign(meta, record.meta), {});
}
function mergeOptions(defaults, partialOptions) {
	const options = {};
	for (const key in defaults) options[key] = key in partialOptions ? partialOptions[key] : defaults[key];
	return options;
}
function isSameParam(a, b) {
	return a.name === b.name && a.optional === b.optional && a.repeatable === b.repeatable;
}
/**
* Check if a path and its alias have the same required params
*
* @param a - original record
* @param b - alias record
*/
function checkSameParams(a, b) {
	for (const key of a.keys) if (!key.optional && !b.keys.find(isSameParam.bind(null, key))) return warn(`Alias "${b.record.path}" and the original record: "${a.record.path}" must have the exact same param named "${key.name}"`);
	for (const key of b.keys) if (!key.optional && !a.keys.find(isSameParam.bind(null, key))) return warn(`Alias "${b.record.path}" and the original record: "${a.record.path}" must have the exact same param named "${key.name}"`);
}
/**
* A route with a name and a child with an empty path without a name should warn when adding the route
*
* @param mainNormalizedRecord - RouteRecordNormalized
* @param parent - RouteRecordMatcher
*/
function checkChildMissingNameWithEmptyPath(mainNormalizedRecord, parent) {
	if (parent && parent.record.name && !mainNormalizedRecord.name && !mainNormalizedRecord.path) warn(`The route named "${String(parent.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`);
}
function checkSameNameAsAncestor(record, parent) {
	for (let ancestor = parent; ancestor; ancestor = ancestor.parent) if (ancestor.record.name === record.name) throw new Error(`A route named "${String(record.name)}" has been added as a ${parent === ancestor ? "child" : "descendant"} of a route with the same name. Route names must be unique and a nested route cannot use the same name as an ancestor.`);
}
function checkMissingParamsInAbsolutePath(record, parent) {
	for (const key of parent.keys) if (!record.keys.find(isSameParam.bind(null, key))) return warn(`Absolute path "${record.record.path}" must have the exact same param named "${key.name}" as its parent "${parent.record.path}".`);
}
/**
* Performs a binary search to find the correct insertion index for a new matcher.
*
* Matchers are primarily sorted by their score. If scores are tied then we also consider parent/child relationships,
* with descendants coming before ancestors. If there's still a tie, new routes are inserted after existing routes.
*
* @param matcher - new matcher to be inserted
* @param matchers - existing matchers
*/
function findInsertionIndex(matcher, matchers) {
	let lower = 0;
	let upper = matchers.length;
	while (lower !== upper) {
		const mid = lower + upper >> 1;
		if (comparePathParserScore(matcher, matchers[mid]) < 0) upper = mid;
		else lower = mid + 1;
	}
	const insertionAncestor = getInsertionAncestor(matcher);
	if (insertionAncestor) {
		upper = matchers.lastIndexOf(insertionAncestor, upper - 1);
		if (process.env.NODE_ENV !== "production" && upper < 0) warn(`Finding ancestor route "${insertionAncestor.record.path}" failed for "${matcher.record.path}"`);
	}
	return upper;
}
function getInsertionAncestor(matcher) {
	let ancestor = matcher;
	while (ancestor = ancestor.parent) if (isMatchable(ancestor) && comparePathParserScore(matcher, ancestor) === 0) return ancestor;
}
/**
* Checks if a matcher can be reachable. This means if it's possible to reach it as a route. For example, routes without
* a component, or name, or redirect, are just used to group other routes.
* @param matcher
* @param matcher.record record of the matcher
* @returns
*/
function isMatchable({ record }) {
	return !!(record.name || record.components && Object.keys(record.components).length || record.redirect);
}
/**
* Transforms a queryString into a {@link LocationQuery} object. Accept both, a
* version with the leading `?` and without Should work as URLSearchParams

* @internal
*
* @param search - search string to parse
* @returns a query object
*/
function parseQuery(search) {
	const query = {};
	if (search === "" || search === "?") return query;
	const searchParams = (search[0] === "?" ? search.slice(1) : search).split("&");
	for (let i = 0; i < searchParams.length; ++i) {
		const searchParam = searchParams[i].replace(PLUS_RE, " ");
		const eqPos = searchParam.indexOf("=");
		const key = decode(eqPos < 0 ? searchParam : searchParam.slice(0, eqPos));
		const value = eqPos < 0 ? null : decode(searchParam.slice(eqPos + 1));
		if (key in query) {
			let currentValue = query[key];
			if (!isArray(currentValue)) currentValue = query[key] = [currentValue];
			currentValue.push(value);
		} else query[key] = value;
	}
	return query;
}
/**
* Stringifies a {@link LocationQueryRaw} object. Like `URLSearchParams`, it
* doesn't prepend a `?`
*
* @internal
*
* @param query - query object to stringify
* @returns string version of the query without the leading `?`
*/
function stringifyQuery(query) {
	let search = "";
	for (let key in query) {
		const value = query[key];
		key = encodeQueryKey(key);
		if (value == null) {
			if (value !== void 0) search += (search.length ? "&" : "") + key;
			continue;
		}
		(isArray(value) ? value.map((v) => v && encodeQueryValue(v)) : [value && encodeQueryValue(value)]).forEach((value) => {
			if (value !== void 0) {
				search += (search.length ? "&" : "") + key;
				if (value != null) search += "=" + value;
			}
		});
	}
	return search;
}
/**
* Transforms a {@link LocationQueryRaw} into a {@link LocationQuery} by casting
* numbers into strings, removing keys with an undefined value and replacing
* undefined with null in arrays
*
* @param query - query object to normalize
* @returns a normalized query object
*/
function normalizeQuery(query) {
	const normalizedQuery = {};
	for (const key in query) {
		const value = query[key];
		if (value !== void 0) normalizedQuery[key] = isArray(value) ? value.map((v) => v == null ? null : "" + v) : value == null ? value : "" + value;
	}
	return normalizedQuery;
}
/**
* RouteRecord being rendered by the closest ancestor Router View. Used for
* `onBeforeRouteUpdate` and `onBeforeRouteLeave`. rvlm stands for Router View
* Location Matched
*
* @internal
*/
var matchedRouteKey = Symbol(process.env.NODE_ENV !== "production" ? "router view location matched" : "");
/**
* Allows overriding the router view depth to control which component in
* `matched` is rendered. rvd stands for Router View Depth
*
* @internal
*/
var viewDepthKey = Symbol(process.env.NODE_ENV !== "production" ? "router view depth" : "");
/**
* Allows overriding the router instance returned by `useRouter` in tests. r
* stands for router
*
* @internal
*/
var routerKey = Symbol(process.env.NODE_ENV !== "production" ? "router" : "");
/**
* Allows overriding the current route returned by `useRoute` in tests. rl
* stands for route location
*
* @internal
*/
var routeLocationKey = Symbol(process.env.NODE_ENV !== "production" ? "route location" : "");
/**
* Allows overriding the current route used by router-view. Internally this is
* used when the `route` prop is passed.
*
* @internal
*/
var routerViewLocationKey = Symbol(process.env.NODE_ENV !== "production" ? "router view location" : "");
/**
* Create a list of callbacks that can be reset. Used to create before and after navigation guards list
*/
function useCallbacks() {
	let handlers = [];
	function add(handler) {
		handlers.push(handler);
		return () => {
			const i = handlers.indexOf(handler);
			if (i > -1) handlers.splice(i, 1);
		};
	}
	function reset() {
		handlers = [];
	}
	return {
		add,
		list: () => handlers.slice(),
		reset
	};
}
function guardToPromiseFn(guard, to, from, record, name, runWithContext = (fn) => fn()) {
	const enterCallbackArray = record && (record.enterCallbacks[name] = record.enterCallbacks[name] || []);
	return () => new Promise((resolve, reject) => {
		const next = (valid) => {
			if (valid === false) reject(createRouterError(4, {
				from,
				to
			}));
			else if (valid instanceof Error) reject(valid);
			else if (isRouteLocation(valid)) reject(createRouterError(2, {
				from: to,
				to: valid
			}));
			else {
				if (enterCallbackArray && record.enterCallbacks[name] === enterCallbackArray && typeof valid === "function") enterCallbackArray.push(valid);
				resolve();
			}
		};
		const guardReturn = runWithContext(() => guard.call(record && record.instances[name], to, from, process.env.NODE_ENV !== "production" ? canOnlyBeCalledOnce(next, to, from) : next));
		let guardCall = Promise.resolve(guardReturn);
		if (guard.length < 3) guardCall = guardCall.then(next);
		if (process.env.NODE_ENV !== "production" && guard.length > 2) {
			const message = `The "next" callback was never called inside of ${guard.name ? "\"" + guard.name + "\"" : ""}:\n${guard.toString()}\n. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;
			if (typeof guardReturn === "object" && "then" in guardReturn) guardCall = guardCall.then((resolvedValue) => {
				if (!next._called) {
					warn(message);
					return Promise.reject(/* @__PURE__ */ new Error("Invalid navigation guard"));
				}
				return resolvedValue;
			});
			else if (guardReturn !== void 0) {
				if (!next._called) {
					warn(message);
					reject(/* @__PURE__ */ new Error("Invalid navigation guard"));
					return;
				}
			}
		}
		guardCall.catch((err) => reject(err));
	});
}
function canOnlyBeCalledOnce(next, to, from) {
	let called = 0;
	return function() {
		if (called++ === 1) warn(`The "next" callback was called more than once in one navigation guard when going from "${from.fullPath}" to "${to.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`);
		next._called = true;
		if (called === 1) next.apply(null, arguments);
	};
}
function extractComponentsGuards(matched, guardType, to, from, runWithContext = (fn) => fn()) {
	const guards = [];
	for (const record of matched) {
		if (process.env.NODE_ENV !== "production" && !record.components && !record.children.length) warn(`Record with path "${record.path}" is either missing a "component(s)" or "children" property.`);
		for (const name in record.components) {
			let rawComponent = record.components[name];
			if (process.env.NODE_ENV !== "production") {
				if (!rawComponent || typeof rawComponent !== "object" && typeof rawComponent !== "function") {
					warn(`Component "${name}" in record with path "${record.path}" is not a valid component. Received "${String(rawComponent)}".`);
					throw new Error("Invalid route component");
				} else if ("then" in rawComponent) {
					warn(`Component "${name}" in record with path "${record.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);
					const promise = rawComponent;
					rawComponent = () => promise;
				} else if (rawComponent.__asyncLoader && !rawComponent.__warnedDefineAsync) {
					rawComponent.__warnedDefineAsync = true;
					warn(`Component "${name}" in record with path "${record.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`);
				}
			}
			if (guardType !== "beforeRouteEnter" && !record.instances[name]) continue;
			if (isRouteComponent(rawComponent)) {
				const guard = (rawComponent.__vccOpts || rawComponent)[guardType];
				guard && guards.push(guardToPromiseFn(guard, to, from, record, name, runWithContext));
			} else {
				let componentPromise = rawComponent();
				if (process.env.NODE_ENV !== "production" && !("catch" in componentPromise)) {
					warn(`Component "${name}" in record with path "${record.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`);
					componentPromise = Promise.resolve(componentPromise);
				}
				guards.push(() => componentPromise.then((resolved) => {
					if (!resolved) throw new Error(`Couldn't resolve component "${name}" at "${record.path}"`);
					const resolvedComponent = isESModule(resolved) ? resolved.default : resolved;
					record.mods[name] = resolved;
					record.components[name] = resolvedComponent;
					const guard = (resolvedComponent.__vccOpts || resolvedComponent)[guardType];
					return guard && guardToPromiseFn(guard, to, from, record, name, runWithContext)();
				}));
			}
		}
	}
	return guards;
}
/**
* Returns the internal behavior of a {@link RouterLink} without the rendering part.
*
* @param props - a `to` location and an optional `replace` flag
*/
function useLink(props) {
	const router = (0, require__plugin_vue_export_helper.vue_exports.inject)(routerKey);
	const currentRoute = (0, require__plugin_vue_export_helper.vue_exports.inject)(routeLocationKey);
	let hasPrevious = false;
	let previousTo = null;
	const route = (0, require__plugin_vue_export_helper.vue_exports.computed)(() => {
		const to = (0, require__plugin_vue_export_helper.vue_exports.unref)(props.to);
		if (process.env.NODE_ENV !== "production" && (!hasPrevious || to !== previousTo)) {
			if (!isRouteLocation(to)) if (hasPrevious) warn(`Invalid value for prop "to" in useLink()\n- to:`, to, `\n- previous to:`, previousTo, `\n- props:`, props);
			else warn(`Invalid value for prop "to" in useLink()\n- to:`, to, `\n- props:`, props);
			previousTo = to;
			hasPrevious = true;
		}
		return router.resolve(to);
	});
	const activeRecordIndex = (0, require__plugin_vue_export_helper.vue_exports.computed)(() => {
		const { matched } = route.value;
		const { length } = matched;
		const routeMatched = matched[length - 1];
		const currentMatched = currentRoute.matched;
		if (!routeMatched || !currentMatched.length) return -1;
		const index = currentMatched.findIndex(isSameRouteRecord.bind(null, routeMatched));
		if (index > -1) return index;
		const parentRecordPath = getOriginalPath(matched[length - 2]);
		return length > 1 && getOriginalPath(routeMatched) === parentRecordPath && currentMatched[currentMatched.length - 1].path !== parentRecordPath ? currentMatched.findIndex(isSameRouteRecord.bind(null, matched[length - 2])) : index;
	});
	const isActive = (0, require__plugin_vue_export_helper.vue_exports.computed)(() => activeRecordIndex.value > -1 && includesParams(currentRoute.params, route.value.params));
	const isExactActive = (0, require__plugin_vue_export_helper.vue_exports.computed)(() => activeRecordIndex.value > -1 && activeRecordIndex.value === currentRoute.matched.length - 1 && isSameRouteLocationParams(currentRoute.params, route.value.params));
	function navigate(e = {}) {
		if (guardEvent(e)) {
			const p = router[(0, require__plugin_vue_export_helper.vue_exports.unref)(props.replace) ? "replace" : "push"]((0, require__plugin_vue_export_helper.vue_exports.unref)(props.to)).catch(noop$4);
			if (props.viewTransition && typeof document !== "undefined" && "startViewTransition" in document) document.startViewTransition(() => p);
			return p;
		}
		return Promise.resolve();
	}
	if ((process.env.NODE_ENV !== "production" || false) && isBrowser) {
		const instance = (0, require__plugin_vue_export_helper.vue_exports.getCurrentInstance)();
		if (instance) {
			const linkContextDevtools = {
				route: route.value,
				isActive: isActive.value,
				isExactActive: isExactActive.value,
				error: null
			};
			instance.__vrl_devtools = instance.__vrl_devtools || [];
			instance.__vrl_devtools.push(linkContextDevtools);
			(0, require__plugin_vue_export_helper.vue_exports.watchEffect)(() => {
				linkContextDevtools.route = route.value;
				linkContextDevtools.isActive = isActive.value;
				linkContextDevtools.isExactActive = isExactActive.value;
				linkContextDevtools.error = isRouteLocation((0, require__plugin_vue_export_helper.vue_exports.unref)(props.to)) ? null : "Invalid \"to\" value";
			}, { flush: "post" });
		}
	}
	/**
	* NOTE: update {@link _RouterLinkI}'s `$slots` type when updating this
	*/
	return {
		route,
		href: (0, require__plugin_vue_export_helper.vue_exports.computed)(() => route.value.href),
		isActive,
		isExactActive,
		navigate
	};
}
function preferSingleVNode(vnodes) {
	return vnodes.length === 1 ? vnodes[0] : vnodes;
}
/**
* Component to render a link that triggers a navigation on click.
*/
var RouterLink = /* @__PURE__ */ (0, require__plugin_vue_export_helper.vue_exports.defineComponent)({
	name: "RouterLink",
	compatConfig: { MODE: 3 },
	props: {
		to: {
			type: [String, Object],
			required: true
		},
		replace: Boolean,
		activeClass: String,
		exactActiveClass: String,
		custom: Boolean,
		ariaCurrentValue: {
			type: String,
			default: "page"
		},
		viewTransition: Boolean
	},
	useLink,
	setup(props, { slots }) {
		const link = (0, require__plugin_vue_export_helper.vue_exports.reactive)(useLink(props));
		const { options } = (0, require__plugin_vue_export_helper.vue_exports.inject)(routerKey);
		const elClass = (0, require__plugin_vue_export_helper.vue_exports.computed)(() => ({
			[getLinkClass(props.activeClass, options.linkActiveClass, "router-link-active")]: link.isActive,
			[getLinkClass(props.exactActiveClass, options.linkExactActiveClass, "router-link-exact-active")]: link.isExactActive
		}));
		return () => {
			const children = slots.default && preferSingleVNode(slots.default(link));
			return props.custom ? children : (0, require__plugin_vue_export_helper.vue_exports.h)("a", {
				"aria-current": link.isExactActive ? props.ariaCurrentValue : null,
				href: link.href,
				onClick: link.navigate,
				class: elClass.value
			}, children);
		};
	}
});
function guardEvent(e) {
	if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) return;
	if (e.defaultPrevented) return;
	if (e.button !== void 0 && e.button !== 0) return;
	if (e.currentTarget && e.currentTarget.getAttribute) {
		const target = e.currentTarget.getAttribute("target");
		if (/\b_blank\b/i.test(target)) return;
	}
	if (e.preventDefault) e.preventDefault();
	return true;
}
function includesParams(outer, inner) {
	for (const key in inner) {
		const innerValue = inner[key];
		const outerValue = outer[key];
		if (typeof innerValue === "string") {
			if (innerValue !== outerValue) return false;
		} else if (!isArray(outerValue) || outerValue.length !== innerValue.length || innerValue.some((value, i) => value !== outerValue[i])) return false;
	}
	return true;
}
/**
* Get the original path value of a record by following its aliasOf
* @param record
*/
function getOriginalPath(record) {
	return record ? record.aliasOf ? record.aliasOf.path : record.path : "";
}
/**
* Utility class to get the active class based on defaults.
* @param propClass
* @param globalClass
* @param defaultClass
*/
var getLinkClass = (propClass, globalClass, defaultClass) => propClass != null ? propClass : globalClass != null ? globalClass : defaultClass;
var RouterViewImpl = /*#__PURE__*/ (0, require__plugin_vue_export_helper.vue_exports.defineComponent)({
	name: "RouterView",
	inheritAttrs: false,
	props: {
		name: {
			type: String,
			default: "default"
		},
		route: Object
	},
	compatConfig: { MODE: 3 },
	setup(props, { attrs, slots }) {
		process.env.NODE_ENV !== "production" && warnDeprecatedUsage();
		const injectedRoute = (0, require__plugin_vue_export_helper.vue_exports.inject)(routerViewLocationKey);
		const routeToDisplay = (0, require__plugin_vue_export_helper.vue_exports.computed)(() => props.route || injectedRoute.value);
		const injectedDepth = (0, require__plugin_vue_export_helper.vue_exports.inject)(viewDepthKey, 0);
		const depth = (0, require__plugin_vue_export_helper.vue_exports.computed)(() => {
			let initialDepth = (0, require__plugin_vue_export_helper.vue_exports.unref)(injectedDepth);
			const { matched } = routeToDisplay.value;
			let matchedRoute;
			while ((matchedRoute = matched[initialDepth]) && !matchedRoute.components) initialDepth++;
			return initialDepth;
		});
		const matchedRouteRef = (0, require__plugin_vue_export_helper.vue_exports.computed)(() => routeToDisplay.value.matched[depth.value]);
		(0, require__plugin_vue_export_helper.vue_exports.provide)(viewDepthKey, (0, require__plugin_vue_export_helper.vue_exports.computed)(() => depth.value + 1));
		(0, require__plugin_vue_export_helper.vue_exports.provide)(matchedRouteKey, matchedRouteRef);
		(0, require__plugin_vue_export_helper.vue_exports.provide)(routerViewLocationKey, routeToDisplay);
		const viewRef = (0, require__plugin_vue_export_helper.vue_exports.ref)();
		(0, require__plugin_vue_export_helper.vue_exports.watch)(() => [
			viewRef.value,
			matchedRouteRef.value,
			props.name
		], ([instance, to, name], [oldInstance, from, oldName]) => {
			if (to) {
				to.instances[name] = instance;
				if (from && from !== to && instance && instance === oldInstance) {
					if (!to.leaveGuards.size) to.leaveGuards = from.leaveGuards;
					if (!to.updateGuards.size) to.updateGuards = from.updateGuards;
				}
			}
			if (instance && to && (!from || !isSameRouteRecord(to, from) || !oldInstance)) (to.enterCallbacks[name] || []).forEach((callback) => callback(instance));
		}, { flush: "post" });
		return () => {
			const route = routeToDisplay.value;
			const currentName = props.name;
			const matchedRoute = matchedRouteRef.value;
			const ViewComponent = matchedRoute && matchedRoute.components[currentName];
			if (!ViewComponent) return normalizeSlot(slots.default, {
				Component: ViewComponent,
				route
			});
			const routePropsOption = matchedRoute.props[currentName];
			const routeProps = routePropsOption ? routePropsOption === true ? route.params : typeof routePropsOption === "function" ? routePropsOption(route) : routePropsOption : null;
			const onVnodeUnmounted = (vnode) => {
				if (vnode.component.isUnmounted) matchedRoute.instances[currentName] = null;
			};
			const component = (0, require__plugin_vue_export_helper.vue_exports.h)(ViewComponent, assign({}, routeProps, attrs, {
				onVnodeUnmounted,
				ref: viewRef
			}));
			if ((process.env.NODE_ENV !== "production" || false) && isBrowser && component.ref) {
				const info = {
					depth: depth.value,
					name: matchedRoute.name,
					path: matchedRoute.path,
					meta: matchedRoute.meta
				};
				(isArray(component.ref) ? component.ref.map((r) => r.i) : [component.ref.i]).forEach((instance) => {
					instance.__vrv_devtools = info;
				});
			}
			return normalizeSlot(slots.default, {
				Component: component,
				route
			}) || component;
		};
	}
});
function normalizeSlot(slot, data) {
	if (!slot) return null;
	const slotContent = slot(data);
	return slotContent.length === 1 ? slotContent[0] : slotContent;
}
/**
* Component to display the current route the user is at.
*/
var RouterView = RouterViewImpl;
function warnDeprecatedUsage() {
	const instance = (0, require__plugin_vue_export_helper.vue_exports.getCurrentInstance)();
	const parentName = instance.parent && instance.parent.type.name;
	const parentSubTreeType = instance.parent && instance.parent.subTree && instance.parent.subTree.type;
	if (parentName && (parentName === "KeepAlive" || parentName.includes("Transition")) && typeof parentSubTreeType === "object" && parentSubTreeType.name === "RouterView") {
		const comp = parentName === "KeepAlive" ? "keep-alive" : "transition";
		warn(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${comp}>\n    <component :is="Component" />\n  </${comp}>\n</router-view>`);
	}
}
/**
* Copies a route location and removes any problematic properties that cannot be shown in devtools (e.g. Vue instances).
*
* @param routeLocation - routeLocation to format
* @param tooltip - optional tooltip
* @returns a copy of the routeLocation
*/
function formatRouteLocation(routeLocation, tooltip) {
	const copy = assign({}, routeLocation, { matched: routeLocation.matched.map((matched) => omit(matched, [
		"instances",
		"children",
		"aliasOf"
	])) });
	return { _custom: {
		type: null,
		readOnly: true,
		display: routeLocation.fullPath,
		tooltip,
		value: copy
	} };
}
function formatDisplay(display) {
	return { _custom: { display } };
}
var routerId = 0;
function addDevtools(app, router, matcher) {
	if (router.__hasDevtools) return;
	router.__hasDevtools = true;
	const id = routerId++;
	setupDevtoolsPlugin$1({
		id: "org.vuejs.router" + (id ? "." + id : ""),
		label: "Vue Router",
		packageName: "vue-router",
		homepage: "https://router.vuejs.org",
		logo: "https://router.vuejs.org/logo.png",
		componentStateTypes: ["Routing"],
		app
	}, (api) => {
		if (typeof api.now !== "function") console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html.");
		api.on.inspectComponent((payload, ctx) => {
			if (payload.instanceData) payload.instanceData.state.push({
				type: "Routing",
				key: "$route",
				editable: false,
				value: formatRouteLocation(router.currentRoute.value, "Current Route")
			});
		});
		api.on.visitComponentTree(({ treeNode: node, componentInstance }) => {
			if (componentInstance.__vrv_devtools) {
				const info = componentInstance.__vrv_devtools;
				node.tags.push({
					label: (info.name ? `${info.name.toString()}: ` : "") + info.path,
					textColor: 0,
					tooltip: "This component is rendered by &lt;router-view&gt;",
					backgroundColor: PINK_500
				});
			}
			if (isArray(componentInstance.__vrl_devtools)) {
				componentInstance.__devtoolsApi = api;
				componentInstance.__vrl_devtools.forEach((devtoolsData) => {
					let label = devtoolsData.route.path;
					let backgroundColor = ORANGE_400;
					let tooltip = "";
					let textColor = 0;
					if (devtoolsData.error) {
						label = devtoolsData.error;
						backgroundColor = RED_100;
						textColor = RED_700;
					} else if (devtoolsData.isExactActive) {
						backgroundColor = LIME_500;
						tooltip = "This is exactly active";
					} else if (devtoolsData.isActive) {
						backgroundColor = BLUE_600;
						tooltip = "This link is active";
					}
					node.tags.push({
						label,
						textColor,
						tooltip,
						backgroundColor
					});
				});
			}
		});
		(0, require__plugin_vue_export_helper.vue_exports.watch)(router.currentRoute, () => {
			refreshRoutesView();
			api.notifyComponentUpdate();
			api.sendInspectorTree(routerInspectorId);
			api.sendInspectorState(routerInspectorId);
		});
		const navigationsLayerId = "router:navigations:" + id;
		api.addTimelineLayer({
			id: navigationsLayerId,
			label: `Router${id ? " " + id : ""} Navigations`,
			color: 4237508
		});
		router.onError((error, to) => {
			api.addTimelineEvent({
				layerId: navigationsLayerId,
				event: {
					title: "Error during Navigation",
					subtitle: to.fullPath,
					logType: "error",
					time: api.now(),
					data: { error },
					groupId: to.meta.__navigationId
				}
			});
		});
		let navigationId = 0;
		router.beforeEach((to, from) => {
			const data = {
				guard: formatDisplay("beforeEach"),
				from: formatRouteLocation(from, "Current Location during this navigation"),
				to: formatRouteLocation(to, "Target location")
			};
			Object.defineProperty(to.meta, "__navigationId", { value: navigationId++ });
			api.addTimelineEvent({
				layerId: navigationsLayerId,
				event: {
					time: api.now(),
					title: "Start of navigation",
					subtitle: to.fullPath,
					data,
					groupId: to.meta.__navigationId
				}
			});
		});
		router.afterEach((to, from, failure) => {
			const data = { guard: formatDisplay("afterEach") };
			if (failure) {
				data.failure = { _custom: {
					type: Error,
					readOnly: true,
					display: failure ? failure.message : "",
					tooltip: "Navigation Failure",
					value: failure
				} };
				data.status = formatDisplay("❌");
			} else data.status = formatDisplay("✅");
			data.from = formatRouteLocation(from, "Current Location during this navigation");
			data.to = formatRouteLocation(to, "Target location");
			api.addTimelineEvent({
				layerId: navigationsLayerId,
				event: {
					title: "End of navigation",
					subtitle: to.fullPath,
					time: api.now(),
					data,
					logType: failure ? "warning" : "default",
					groupId: to.meta.__navigationId
				}
			});
		});
		/**
		* Inspector of Existing routes
		*/
		const routerInspectorId = "router-inspector:" + id;
		api.addInspector({
			id: routerInspectorId,
			label: "Routes" + (id ? " " + id : ""),
			icon: "book",
			treeFilterPlaceholder: "Search routes"
		});
		function refreshRoutesView() {
			if (!activeRoutesPayload) return;
			const payload = activeRoutesPayload;
			let routes = matcher.getRoutes().filter((route) => !route.parent || !route.parent.record.components);
			routes.forEach(resetMatchStateOnRouteRecord);
			if (payload.filter) routes = routes.filter((route) => isRouteMatching(route, payload.filter.toLowerCase()));
			routes.forEach((route) => markRouteRecordActive(route, router.currentRoute.value));
			payload.rootNodes = routes.map(formatRouteRecordForInspector);
		}
		let activeRoutesPayload;
		api.on.getInspectorTree((payload) => {
			activeRoutesPayload = payload;
			if (payload.app === app && payload.inspectorId === routerInspectorId) refreshRoutesView();
		});
		/**
		* Display information about the currently selected route record
		*/
		api.on.getInspectorState((payload) => {
			if (payload.app === app && payload.inspectorId === routerInspectorId) {
				const route = matcher.getRoutes().find((route) => route.record.__vd_id === payload.nodeId);
				if (route) payload.state = { options: formatRouteRecordMatcherForStateInspector(route) };
			}
		});
		api.sendInspectorTree(routerInspectorId);
		api.sendInspectorState(routerInspectorId);
	});
}
function modifierForKey(key) {
	if (key.optional) return key.repeatable ? "*" : "?";
	else return key.repeatable ? "+" : "";
}
function formatRouteRecordMatcherForStateInspector(route) {
	const { record } = route;
	const fields = [{
		editable: false,
		key: "path",
		value: record.path
	}];
	if (record.name != null) fields.push({
		editable: false,
		key: "name",
		value: record.name
	});
	fields.push({
		editable: false,
		key: "regexp",
		value: route.re
	});
	if (route.keys.length) fields.push({
		editable: false,
		key: "keys",
		value: { _custom: {
			type: null,
			readOnly: true,
			display: route.keys.map((key) => `${key.name}${modifierForKey(key)}`).join(" "),
			tooltip: "Param keys",
			value: route.keys
		} }
	});
	if (record.redirect != null) fields.push({
		editable: false,
		key: "redirect",
		value: record.redirect
	});
	if (route.alias.length) fields.push({
		editable: false,
		key: "aliases",
		value: route.alias.map((alias) => alias.record.path)
	});
	if (Object.keys(route.record.meta).length) fields.push({
		editable: false,
		key: "meta",
		value: route.record.meta
	});
	fields.push({
		key: "score",
		editable: false,
		value: { _custom: {
			type: null,
			readOnly: true,
			display: route.score.map((score) => score.join(", ")).join(" | "),
			tooltip: "Score used to sort routes",
			value: route.score
		} }
	});
	return fields;
}
/**
* Extracted from tailwind palette
*/
var PINK_500 = 15485081;
var BLUE_600 = 2450411;
var LIME_500 = 8702998;
var CYAN_400 = 2282478;
var ORANGE_400 = 16486972;
var DARK = 6710886;
var RED_100 = 16704226;
var RED_700 = 12131356;
function formatRouteRecordForInspector(route) {
	const tags = [];
	const { record } = route;
	if (record.name != null) tags.push({
		label: String(record.name),
		textColor: 0,
		backgroundColor: CYAN_400
	});
	if (record.aliasOf) tags.push({
		label: "alias",
		textColor: 0,
		backgroundColor: ORANGE_400
	});
	if (route.__vd_match) tags.push({
		label: "matches",
		textColor: 0,
		backgroundColor: PINK_500
	});
	if (route.__vd_exactActive) tags.push({
		label: "exact",
		textColor: 0,
		backgroundColor: LIME_500
	});
	if (route.__vd_active) tags.push({
		label: "active",
		textColor: 0,
		backgroundColor: BLUE_600
	});
	if (record.redirect) tags.push({
		label: typeof record.redirect === "string" ? `redirect: ${record.redirect}` : "redirects",
		textColor: 16777215,
		backgroundColor: DARK
	});
	let id = record.__vd_id;
	if (id == null) {
		id = String(routeRecordId++);
		record.__vd_id = id;
	}
	return {
		id,
		label: record.path,
		tags,
		children: route.children.map(formatRouteRecordForInspector)
	};
}
var routeRecordId = 0;
var EXTRACT_REGEXP_RE = /^\/(.*)\/([a-z]*)$/;
function markRouteRecordActive(route, currentRoute) {
	const isExactActive = currentRoute.matched.length && isSameRouteRecord(currentRoute.matched[currentRoute.matched.length - 1], route.record);
	route.__vd_exactActive = route.__vd_active = isExactActive;
	if (!isExactActive) route.__vd_active = currentRoute.matched.some((match) => isSameRouteRecord(match, route.record));
	route.children.forEach((childRoute) => markRouteRecordActive(childRoute, currentRoute));
}
function resetMatchStateOnRouteRecord(route) {
	route.__vd_match = false;
	route.children.forEach(resetMatchStateOnRouteRecord);
}
function isRouteMatching(route, filter) {
	const found = String(route.re).match(EXTRACT_REGEXP_RE);
	route.__vd_match = false;
	if (!found || found.length < 3) return false;
	if (new RegExp(found[1].replace(/\$$/, ""), found[2]).test(filter)) {
		route.children.forEach((child) => isRouteMatching(child, filter));
		if (route.record.path !== "/" || filter === "/") {
			route.__vd_match = route.re.test(filter);
			return true;
		}
		return false;
	}
	const path = route.record.path.toLowerCase();
	const decodedPath = decode(path);
	if (!filter.startsWith("/") && (decodedPath.includes(filter) || path.includes(filter))) return true;
	if (decodedPath.startsWith(filter) || path.startsWith(filter)) return true;
	if (route.record.name && String(route.record.name).includes(filter)) return true;
	return route.children.some((child) => isRouteMatching(child, filter));
}
function omit(obj, keys) {
	const ret = {};
	for (const key in obj) if (!keys.includes(key)) ret[key] = obj[key];
	return ret;
}
/**
* Creates a Router instance that can be used by a Vue app.
*
* @param options - {@link RouterOptions}
*/
function createRouter(options) {
	const matcher = createRouterMatcher(options.routes, options);
	const parseQuery$1 = options.parseQuery || parseQuery;
	const stringifyQuery$1 = options.stringifyQuery || stringifyQuery;
	const routerHistory = options.history;
	if (process.env.NODE_ENV !== "production" && !routerHistory) throw new Error("Provide the \"history\" option when calling \"createRouter()\": https://router.vuejs.org/api/interfaces/RouterOptions.html#history");
	const beforeGuards = useCallbacks();
	const beforeResolveGuards = useCallbacks();
	const afterGuards = useCallbacks();
	const currentRoute = (0, require__plugin_vue_export_helper.vue_exports.shallowRef)(START_LOCATION_NORMALIZED);
	let pendingLocation = START_LOCATION_NORMALIZED;
	if (isBrowser && options.scrollBehavior && "scrollRestoration" in history) history.scrollRestoration = "manual";
	const normalizeParams = applyToParams.bind(null, (paramValue) => "" + paramValue);
	const encodeParams = applyToParams.bind(null, encodeParam);
	const decodeParams = applyToParams.bind(null, decode);
	function addRoute(parentOrRoute, route) {
		let parent;
		let record;
		if (isRouteName(parentOrRoute)) {
			parent = matcher.getRecordMatcher(parentOrRoute);
			if (process.env.NODE_ENV !== "production" && !parent) warn(`Parent route "${String(parentOrRoute)}" not found when adding child route`, route);
			record = route;
		} else record = parentOrRoute;
		return matcher.addRoute(record, parent);
	}
	function removeRoute(name) {
		const recordMatcher = matcher.getRecordMatcher(name);
		if (recordMatcher) matcher.removeRoute(recordMatcher);
		else if (process.env.NODE_ENV !== "production") warn(`Cannot remove non-existent route "${String(name)}"`);
	}
	function getRoutes() {
		return matcher.getRoutes().map((routeMatcher) => routeMatcher.record);
	}
	function hasRoute(name) {
		return !!matcher.getRecordMatcher(name);
	}
	function resolve(rawLocation, currentLocation) {
		currentLocation = assign({}, currentLocation || currentRoute.value);
		if (typeof rawLocation === "string") {
			const locationNormalized = parseURL(parseQuery$1, rawLocation, currentLocation.path);
			const matchedRoute = matcher.resolve({ path: locationNormalized.path }, currentLocation);
			const href = routerHistory.createHref(locationNormalized.fullPath);
			if (process.env.NODE_ENV !== "production") {
				if (href.startsWith("//")) warn(`Location "${rawLocation}" resolved to "${href}". A resolved location cannot start with multiple slashes.`);
				else if (!matchedRoute.matched.length) warn(`No match found for location with path "${rawLocation}"`);
			}
			return assign(locationNormalized, matchedRoute, {
				params: decodeParams(matchedRoute.params),
				hash: decode(locationNormalized.hash),
				redirectedFrom: void 0,
				href
			});
		}
		if (process.env.NODE_ENV !== "production" && !isRouteLocation(rawLocation)) {
			warn(`router.resolve() was passed an invalid location. This will fail in production.\n- Location:`, rawLocation);
			return resolve({});
		}
		let matcherLocation;
		if (rawLocation.path != null) {
			if (process.env.NODE_ENV !== "production" && "params" in rawLocation && !("name" in rawLocation) && Object.keys(rawLocation.params).length) warn(`Path "${rawLocation.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`);
			matcherLocation = assign({}, rawLocation, { path: parseURL(parseQuery$1, rawLocation.path, currentLocation.path).path });
		} else {
			const targetParams = assign({}, rawLocation.params);
			for (const key in targetParams) if (targetParams[key] == null) delete targetParams[key];
			matcherLocation = assign({}, rawLocation, { params: encodeParams(targetParams) });
			currentLocation.params = encodeParams(currentLocation.params);
		}
		const matchedRoute = matcher.resolve(matcherLocation, currentLocation);
		const hash = rawLocation.hash || "";
		if (process.env.NODE_ENV !== "production" && hash && !hash.startsWith("#")) warn(`A \`hash\` should always start with the character "#". Replace "${hash}" with "#${hash}".`);
		matchedRoute.params = normalizeParams(decodeParams(matchedRoute.params));
		const fullPath = stringifyURL(stringifyQuery$1, assign({}, rawLocation, {
			hash: encodeHash(hash),
			path: matchedRoute.path
		}));
		const href = routerHistory.createHref(fullPath);
		if (process.env.NODE_ENV !== "production") {
			if (href.startsWith("//")) warn(`Location "${rawLocation}" resolved to "${href}". A resolved location cannot start with multiple slashes.`);
			else if (!matchedRoute.matched.length) warn(`No match found for location with path "${rawLocation.path != null ? rawLocation.path : rawLocation}"`);
		}
		return assign({
			fullPath,
			hash,
			query: stringifyQuery$1 === stringifyQuery ? normalizeQuery(rawLocation.query) : rawLocation.query || {}
		}, matchedRoute, {
			redirectedFrom: void 0,
			href
		});
	}
	function locationAsObject(to) {
		return typeof to === "string" ? parseURL(parseQuery$1, to, currentRoute.value.path) : assign({}, to);
	}
	function checkCanceledNavigation(to, from) {
		if (pendingLocation !== to) return createRouterError(8, {
			from,
			to
		});
	}
	function push(to) {
		return pushWithRedirect(to);
	}
	function replace(to) {
		return push(assign(locationAsObject(to), { replace: true }));
	}
	function handleRedirectRecord(to) {
		const lastMatched = to.matched[to.matched.length - 1];
		if (lastMatched && lastMatched.redirect) {
			const { redirect } = lastMatched;
			let newTargetLocation = typeof redirect === "function" ? redirect(to) : redirect;
			if (typeof newTargetLocation === "string") {
				newTargetLocation = newTargetLocation.includes("?") || newTargetLocation.includes("#") ? newTargetLocation = locationAsObject(newTargetLocation) : { path: newTargetLocation };
				newTargetLocation.params = {};
			}
			if (process.env.NODE_ENV !== "production" && newTargetLocation.path == null && !("name" in newTargetLocation)) {
				warn(`Invalid redirect found:\n${JSON.stringify(newTargetLocation, null, 2)}\n when navigating to "${to.fullPath}". A redirect must contain a name or path. This will break in production.`);
				throw new Error("Invalid redirect");
			}
			return assign({
				query: to.query,
				hash: to.hash,
				params: newTargetLocation.path != null ? {} : to.params
			}, newTargetLocation);
		}
	}
	function pushWithRedirect(to, redirectedFrom) {
		const targetLocation = pendingLocation = resolve(to);
		const from = currentRoute.value;
		const data = to.state;
		const force = to.force;
		const replace = to.replace === true;
		const shouldRedirect = handleRedirectRecord(targetLocation);
		if (shouldRedirect) return pushWithRedirect(assign(locationAsObject(shouldRedirect), {
			state: typeof shouldRedirect === "object" ? assign({}, data, shouldRedirect.state) : data,
			force,
			replace
		}), redirectedFrom || targetLocation);
		const toLocation = targetLocation;
		toLocation.redirectedFrom = redirectedFrom;
		let failure;
		if (!force && isSameRouteLocation(stringifyQuery$1, from, targetLocation)) {
			failure = createRouterError(16, {
				to: toLocation,
				from
			});
			handleScroll(from, from, true, false);
		}
		return (failure ? Promise.resolve(failure) : navigate(toLocation, from)).catch((error) => isNavigationFailure(error) ? isNavigationFailure(error, 2) ? error : markAsReady(error) : triggerError(error, toLocation, from)).then((failure) => {
			if (failure) {
				if (isNavigationFailure(failure, 2)) {
					if (process.env.NODE_ENV !== "production" && isSameRouteLocation(stringifyQuery$1, resolve(failure.to), toLocation) && redirectedFrom && (redirectedFrom._count = redirectedFrom._count ? redirectedFrom._count + 1 : 1) > 30) {
						warn(`Detected a possibly infinite redirection in a navigation guard when going from "${from.fullPath}" to "${toLocation.fullPath}". Aborting to avoid a Stack Overflow.\n Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`);
						return Promise.reject(/* @__PURE__ */ new Error("Infinite redirect in navigation guard"));
					}
					return pushWithRedirect(assign({ replace }, locationAsObject(failure.to), {
						state: typeof failure.to === "object" ? assign({}, data, failure.to.state) : data,
						force
					}), redirectedFrom || toLocation);
				}
			} else failure = finalizeNavigation(toLocation, from, true, replace, data);
			triggerAfterEach(toLocation, from, failure);
			return failure;
		});
	}
	/**
	* Helper to reject and skip all navigation guards if a new navigation happened
	* @param to
	* @param from
	*/
	function checkCanceledNavigationAndReject(to, from) {
		const error = checkCanceledNavigation(to, from);
		return error ? Promise.reject(error) : Promise.resolve();
	}
	function runWithContext(fn) {
		const app = installedApps.values().next().value;
		return app && typeof app.runWithContext === "function" ? app.runWithContext(fn) : fn();
	}
	function navigate(to, from) {
		let guards;
		const [leavingRecords, updatingRecords, enteringRecords] = extractChangingRecords(to, from);
		guards = extractComponentsGuards(leavingRecords.reverse(), "beforeRouteLeave", to, from);
		for (const record of leavingRecords) record.leaveGuards.forEach((guard) => {
			guards.push(guardToPromiseFn(guard, to, from));
		});
		const canceledNavigationCheck = checkCanceledNavigationAndReject.bind(null, to, from);
		guards.push(canceledNavigationCheck);
		return runGuardQueue(guards).then(() => {
			guards = [];
			for (const guard of beforeGuards.list()) guards.push(guardToPromiseFn(guard, to, from));
			guards.push(canceledNavigationCheck);
			return runGuardQueue(guards);
		}).then(() => {
			guards = extractComponentsGuards(updatingRecords, "beforeRouteUpdate", to, from);
			for (const record of updatingRecords) record.updateGuards.forEach((guard) => {
				guards.push(guardToPromiseFn(guard, to, from));
			});
			guards.push(canceledNavigationCheck);
			return runGuardQueue(guards);
		}).then(() => {
			guards = [];
			for (const record of enteringRecords) if (record.beforeEnter) if (isArray(record.beforeEnter)) for (const beforeEnter of record.beforeEnter) guards.push(guardToPromiseFn(beforeEnter, to, from));
			else guards.push(guardToPromiseFn(record.beforeEnter, to, from));
			guards.push(canceledNavigationCheck);
			return runGuardQueue(guards);
		}).then(() => {
			to.matched.forEach((record) => record.enterCallbacks = {});
			guards = extractComponentsGuards(enteringRecords, "beforeRouteEnter", to, from, runWithContext);
			guards.push(canceledNavigationCheck);
			return runGuardQueue(guards);
		}).then(() => {
			guards = [];
			for (const guard of beforeResolveGuards.list()) guards.push(guardToPromiseFn(guard, to, from));
			guards.push(canceledNavigationCheck);
			return runGuardQueue(guards);
		}).catch((err) => isNavigationFailure(err, 8) ? err : Promise.reject(err));
	}
	function triggerAfterEach(to, from, failure) {
		afterGuards.list().forEach((guard) => runWithContext(() => guard(to, from, failure)));
	}
	/**
	* - Cleans up any navigation guards
	* - Changes the url if necessary
	* - Calls the scrollBehavior
	*/
	function finalizeNavigation(toLocation, from, isPush, replace, data) {
		const error = checkCanceledNavigation(toLocation, from);
		if (error) return error;
		const isFirstNavigation = from === START_LOCATION_NORMALIZED;
		const state = !isBrowser ? {} : history.state;
		if (isPush) if (replace || isFirstNavigation) routerHistory.replace(toLocation.fullPath, assign({ scroll: isFirstNavigation && state && state.scroll }, data));
		else routerHistory.push(toLocation.fullPath, data);
		currentRoute.value = toLocation;
		handleScroll(toLocation, from, isPush, isFirstNavigation);
		markAsReady();
	}
	let removeHistoryListener;
	function setupListeners() {
		if (removeHistoryListener) return;
		removeHistoryListener = routerHistory.listen((to, _from, info) => {
			if (!router.listening) return;
			const toLocation = resolve(to);
			const shouldRedirect = handleRedirectRecord(toLocation);
			if (shouldRedirect) {
				pushWithRedirect(assign(shouldRedirect, {
					replace: true,
					force: true
				}), toLocation).catch(noop$4);
				return;
			}
			pendingLocation = toLocation;
			const from = currentRoute.value;
			if (isBrowser) saveScrollPosition(getScrollKey(from.fullPath, info.delta), computeScrollPosition());
			navigate(toLocation, from).catch((error) => {
				if (isNavigationFailure(error, 12)) return error;
				if (isNavigationFailure(error, 2)) {
					pushWithRedirect(assign(locationAsObject(error.to), { force: true }), toLocation).then((failure) => {
						if (isNavigationFailure(failure, 20) && !info.delta && info.type === NavigationType.pop) routerHistory.go(-1, false);
					}).catch(noop$4);
					return Promise.reject();
				}
				if (info.delta) routerHistory.go(-info.delta, false);
				return triggerError(error, toLocation, from);
			}).then((failure) => {
				failure = failure || finalizeNavigation(toLocation, from, false);
				if (failure) {
					if (info.delta && !isNavigationFailure(failure, 8)) routerHistory.go(-info.delta, false);
					else if (info.type === NavigationType.pop && isNavigationFailure(failure, 20)) routerHistory.go(-1, false);
				}
				triggerAfterEach(toLocation, from, failure);
			}).catch(noop$4);
		});
	}
	let readyHandlers = useCallbacks();
	let errorListeners = useCallbacks();
	let ready;
	/**
	* Trigger errorListeners added via onError and throws the error as well
	*
	* @param error - error to throw
	* @param to - location we were navigating to when the error happened
	* @param from - location we were navigating from when the error happened
	* @returns the error as a rejected promise
	*/
	function triggerError(error, to, from) {
		markAsReady(error);
		const list = errorListeners.list();
		if (list.length) list.forEach((handler) => handler(error, to, from));
		else {
			if (process.env.NODE_ENV !== "production") warn("uncaught error during route navigation:");
			console.error(error);
		}
		return Promise.reject(error);
	}
	function isReady() {
		if (ready && currentRoute.value !== START_LOCATION_NORMALIZED) return Promise.resolve();
		return new Promise((resolve, reject) => {
			readyHandlers.add([resolve, reject]);
		});
	}
	function markAsReady(err) {
		if (!ready) {
			ready = !err;
			setupListeners();
			readyHandlers.list().forEach(([resolve, reject]) => err ? reject(err) : resolve());
			readyHandlers.reset();
		}
		return err;
	}
	function handleScroll(to, from, isPush, isFirstNavigation) {
		const { scrollBehavior } = options;
		if (!isBrowser || !scrollBehavior) return Promise.resolve();
		const scrollPosition = !isPush && getSavedScrollPosition(getScrollKey(to.fullPath, 0)) || (isFirstNavigation || !isPush) && history.state && history.state.scroll || null;
		return (0, require__plugin_vue_export_helper.vue_exports.nextTick)().then(() => scrollBehavior(to, from, scrollPosition)).then((position) => position && scrollToPosition(position)).catch((err) => triggerError(err, to, from));
	}
	const go = (delta) => routerHistory.go(delta);
	let started;
	const installedApps = /* @__PURE__ */ new Set();
	const router = {
		currentRoute,
		listening: true,
		addRoute,
		removeRoute,
		clearRoutes: matcher.clearRoutes,
		hasRoute,
		getRoutes,
		resolve,
		options,
		push,
		replace,
		go,
		back: () => go(-1),
		forward: () => go(1),
		beforeEach: beforeGuards.add,
		beforeResolve: beforeResolveGuards.add,
		afterEach: afterGuards.add,
		onError: errorListeners.add,
		isReady,
		install(app) {
			const router = this;
			app.component("RouterLink", RouterLink);
			app.component("RouterView", RouterView);
			app.config.globalProperties.$router = router;
			Object.defineProperty(app.config.globalProperties, "$route", {
				enumerable: true,
				get: () => (0, require__plugin_vue_export_helper.vue_exports.unref)(currentRoute)
			});
			if (isBrowser && !started && currentRoute.value === START_LOCATION_NORMALIZED) {
				started = true;
				push(routerHistory.location).catch((err) => {
					if (process.env.NODE_ENV !== "production") warn("Unexpected error when starting the router:", err);
				});
			}
			const reactiveRoute = {};
			for (const key in START_LOCATION_NORMALIZED) Object.defineProperty(reactiveRoute, key, {
				get: () => currentRoute.value[key],
				enumerable: true
			});
			app.provide(routerKey, router);
			app.provide(routeLocationKey, (0, require__plugin_vue_export_helper.vue_exports.shallowReactive)(reactiveRoute));
			app.provide(routerViewLocationKey, currentRoute);
			const unmountApp = app.unmount;
			installedApps.add(app);
			app.unmount = function() {
				installedApps.delete(app);
				if (installedApps.size < 1) {
					pendingLocation = START_LOCATION_NORMALIZED;
					removeHistoryListener && removeHistoryListener();
					removeHistoryListener = null;
					currentRoute.value = START_LOCATION_NORMALIZED;
					started = false;
					ready = false;
				}
				unmountApp();
			};
			if ((process.env.NODE_ENV !== "production" || false) && isBrowser) addDevtools(app, router, matcher);
		}
	};
	function runGuardQueue(guards) {
		return guards.reduce((promise, guard) => promise.then(() => runWithContext(guard)), Promise.resolve());
	}
	return router;
}
function extractChangingRecords(to, from) {
	const leavingRecords = [];
	const updatingRecords = [];
	const enteringRecords = [];
	const len = Math.max(from.matched.length, to.matched.length);
	for (let i = 0; i < len; i++) {
		const recordFrom = from.matched[i];
		if (recordFrom) if (to.matched.find((record) => isSameRouteRecord(record, recordFrom))) updatingRecords.push(recordFrom);
		else leavingRecords.push(recordFrom);
		const recordTo = to.matched[i];
		if (recordTo) {
			if (!from.matched.find((record) => isSameRouteRecord(record, recordTo))) enteringRecords.push(recordTo);
		}
	}
	return [
		leavingRecords,
		updatingRecords,
		enteringRecords
	];
}
//#endregion
//#region src/components/global/nuxtLink.vue
var nuxtLink_exports = /* @__PURE__ */ require__plugin_vue_export_helper.__exportAll({ default: () => nuxtLink_default });
var _sfc_main$30 = {
	props: { ...RouterLink.props },
	components: { VueRouterLink: RouterLink },
	data() {
		return { actualTo: this.to };
	},
	created() {
		this.calculateActualTo();
	},
	watch: {
		$route() {
			this.calculateActualTo();
		},
		to() {
			this.calculateActualTo();
		}
	},
	methods: {
		calculateActualTo() {
			if (typeof this.to === "string") {
				this.actualTo = this.to;
				return;
			}
			const url = new URL(this.to.path || this.$route.fullPath, "https://example.com");
			for (let [key, value] of Object.entries(this.to.query)) if (value === null) url.searchParams.delete(key);
			else url.searchParams.set(key, value);
			this.actualTo = url.pathname + url.search;
		},
		click(e) {
			if (e.metaKey || e.ctrlKey || e.shiftKey || e.defaultPrevented) return;
			let url = this.$refs.link.getAttribute("href");
			if (this.actualTo.startsWith("#")) {
				url = this.$router.resolve(url);
				url.query = this.$route.query;
			}
			this.$store.state.components.mainView.routerPush(url).then();
			e.preventDefault();
		}
	}
};
function _sfc_ssrRender$30(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)((0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("VueRouterLink"), (0, require__plugin_vue_export_helper.vue_exports.mergeProps)(_ctx.$props, {
		to: $data.actualTo,
		custom: ""
	}, _attrs), {
		default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(({ href }, _push, _parent, _scopeId) => {
			if (_push) {
				_push(`<a${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttrs)((0, require__plugin_vue_export_helper.vue_exports.mergeProps)({ ref: "link" }, _ctx.$attrs, { href }))}${_scopeId}>`);
				(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "default", {}, null, _push, _parent, _scopeId);
				_push(`</a>`);
			} else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("a", (0, require__plugin_vue_export_helper.vue_exports.mergeProps)({ ref: "link" }, _ctx.$attrs, {
				href,
				onClick: $options.click
			}), [(0, require__plugin_vue_export_helper.vue_exports.renderSlot)(_ctx.$slots, "default")], 16, ["href", "onClick"])];
		}),
		_: 3
	}, _parent));
}
var _sfc_setup$30 = _sfc_main$30.setup;
_sfc_main$30.setup = (props, ctx) => {
	const ssrContext = (0, require__plugin_vue_export_helper.vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/global/nuxtLink.vue");
	return _sfc_setup$30 ? _sfc_setup$30(props, ctx) : void 0;
};
var nuxtLink_default = /*#__PURE__*/ require__plugin_vue_export_helper._plugin_vue_export_helper_default(_sfc_main$30, [["ssrRender", _sfc_ssrRender$30]]);
var generalButton_vue_vue_type_style_index_0_lang_module_default = {
	base: "_base_ohjgv_1",
	link: "_link_ohjgv_1",
	button: "_button_ohjgv_1",
	"button--unresponsive": "_button--unresponsive_ohjgv_1",
	"button--unreactive": "_button--unreactive_ohjgv_1",
	"button--disabled": "_button--disabled_ohjgv_1",
	"button--hover": "_button--hover_ohjgv_1",
	"button--focus": "_button--focus_ohjgv_1",
	"button--secondary": "_button--secondary_ohjgv_1",
	"button--primary": "_button--primary_ohjgv_1",
	"button--danger": "_button--danger_ohjgv_1",
	"button--super": "_button--super_ohjgv_1",
	"button--brand": "_button--brand_ohjgv_1",
	"button--disabled--unreactive": "_button--disabled--unreactive_ohjgv_1",
	"button--small-size": "_button--small-size_ohjgv_1",
	"button--no-border": "_button--no-border_ohjgv_1",
	"button--big-size": "_button--big-size_ohjgv_1",
	"button--block": "_button--block_ohjgv_1"
};
//#endregion
//#region src/components/generalButton.vue
var _sfc_main$29 = {
	inject: { submittingSeedForm: { default: false } },
	components: { NuxtLink: nuxtLink_default },
	props: {
		type: String,
		theme: String,
		href: [String, Object],
		nofollow: Boolean,
		noBorder: Boolean,
		size: String,
		disabled: Boolean,
		block: Boolean,
		state: String,
		value: String,
		whenClick: Function,
		dummy: Boolean
	},
	emits: ["click"],
	methods: { click(e) {
		this.whenClick?.(e);
		this.$emit("click", e);
	} },
	computed: {
		disable() {
			return this.disabled || this.submittingSeedForm;
		},
		buttonClass() {
			const result = [this.$style.base];
			if (this.theme === "link") result.push(this.$style.link);
			else result.push(this.$style.button);
			switch (this.theme) {
				case "secondary":
					result.push(this.$style["button--secondary"]);
					break;
				case "primary":
					result.push(this.$style["button--primary"]);
					break;
				case "danger":
					result.push(this.$style["button--danger"]);
					break;
				case "super":
					result.push(this.$style["button--super"]);
					break;
				case "brand":
					result.push(this.$style["button--brand"]);
					break;
			}
			if (this.disable) result.push(this.$style["button--disabled"]);
			if (this.noBorder) result.push(this.$style["button--no-border"]);
			if (this.size === "small") result.push(this.$style["button--small-size"]);
			else if (this.size === "big") result.push(this.$style["button--big-size"]);
			if (this.block) result.push(this.$style["button--block"]);
			if (this.state === "hover") result.push(this.$style["button--hover"]);
			else if (this.state === "focus") result.push(this.$style["button--focus"]);
			return result;
		},
		dummyButton() {
			return {
				role: "button",
				class: this.buttonClass
			};
		}
	}
};
function _sfc_ssrRender$29(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_NuxtLink = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("NuxtLink");
	if ($options.disable) (0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderVNode)(_push, (0, require__plugin_vue_export_helper.vue_exports.createVNode)((0, require__plugin_vue_export_helper.vue_exports.resolveDynamicComponent)($props.block ? "div" : "span"), (0, require__plugin_vue_export_helper.vue_exports.mergeProps)($options.dummyButton, _attrs), {
		default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
			if (_push) (0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "default", {}, null, _push, _parent, _scopeId);
			else return [(0, require__plugin_vue_export_helper.vue_exports.renderSlot)(_ctx.$slots, "default")];
		}),
		_: 3
	}), _parent);
	else if ($props.whenClick || $props.type === "event") {
		_push(`<a${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttrs)((0, require__plugin_vue_export_helper.vue_exports.mergeProps)({
			href: "#",
			role: "button",
			class: $options.buttonClass
		}, _attrs))}>`);
		(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "default", {}, null, _push, _parent);
		_push(`</a>`);
	} else if ($props.type === "submit" || $props.type === "reset") {
		_push(`<button${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttrs)((0, require__plugin_vue_export_helper.vue_exports.mergeProps)({
			type: $props.type,
			class: $options.buttonClass
		}, _attrs))}>`);
		(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "default", {}, null, _push, _parent);
		_push(`</button>`);
	} else if ($props.href) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_NuxtLink, (0, require__plugin_vue_export_helper.vue_exports.mergeProps)({
		to: $props.href,
		rel: $props.nofollow ? "nofollow" : null,
		role: "button",
		class: $options.buttonClass
	}, _attrs), {
		default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
			if (_push) (0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "default", {}, null, _push, _parent, _scopeId);
			else return [(0, require__plugin_vue_export_helper.vue_exports.renderSlot)(_ctx.$slots, "default")];
		}),
		_: 3
	}, _parent));
	else (0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderVNode)(_push, (0, require__plugin_vue_export_helper.vue_exports.createVNode)((0, require__plugin_vue_export_helper.vue_exports.resolveDynamicComponent)($props.block ? "div" : "span"), (0, require__plugin_vue_export_helper.vue_exports.mergeProps)($options.dummyButton, _attrs), {
		default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
			if (_push) (0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "default", {}, null, _push, _parent, _scopeId);
			else return [(0, require__plugin_vue_export_helper.vue_exports.renderSlot)(_ctx.$slots, "default")];
		}),
		_: 3
	}), _parent);
}
var cssModules = { "$style": generalButton_vue_vue_type_style_index_0_lang_module_default };
var _sfc_setup$29 = _sfc_main$29.setup;
_sfc_main$29.setup = (props, ctx) => {
	const ssrContext = (0, require__plugin_vue_export_helper.vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/generalButton.vue");
	return _sfc_setup$29 ? _sfc_setup$29(props, ctx) : void 0;
};
var generalButton_default = /*#__PURE__*/ require__plugin_vue_export_helper._plugin_vue_export_helper_default(_sfc_main$29, [["ssrRender", _sfc_ssrRender$29], ["__cssModules", cssModules]]);
//#endregion
//#region src/components/global/nuxt.vue
var nuxt_exports = /* @__PURE__ */ require__plugin_vue_export_helper.__exportAll({ default: () => nuxt_default });
var _sfc_main$28 = {
	components: {
		GeneralButton: generalButton_default,
		Alert: alert_default,
		NuxtLink: nuxtLink_default
	},
	mixins: [common_default],
	data() {
		return { hideNotificationAlert: false };
	},
	computed: { legacySkin() {
		return ["liberty", "buma"].includes("flasma");
	} }
};
function _sfc_ssrRender$28(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_Alert = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("Alert");
	const _component_i18next = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("i18next");
	const _component_NuxtLink = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("NuxtLink");
	const _component_GeneralButton = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("GeneralButton");
	_push(`<!--[-->`);
	if ($options.legacySkin && _ctx.session.notifications.length && !$data.hideNotificationAlert) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_Alert, {
		theme: "primary",
		closable: "",
		onClose: ($event) => $data.hideNotificationAlert = true
	}, {
		default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
			if (_push) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_i18next, { translation: _ctx.$t("components.nuxt.unchecked_notification" + (_ctx.session.notifications.length >= 5 ? "_many" : ""), { count: _ctx.session.notifications.length }) }, {
				link: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_NuxtLink, { to: "/member/notifications" }, {
						default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
							if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("components.nuxt.unchecked_notification_link_text"))}`);
							else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("components.nuxt.unchecked_notification_link_text")), 1)];
						}),
						_: 1
					}, _parent, _scopeId));
					else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_NuxtLink, { to: "/member/notifications" }, {
						default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("components.nuxt.unchecked_notification_link_text")), 1)]),
						_: 1
					})];
				}),
				_: 1
			}, _parent, _scopeId));
			else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_i18next, { translation: _ctx.$t("components.nuxt.unchecked_notification" + (_ctx.session.notifications.length >= 5 ? "_many" : ""), { count: _ctx.session.notifications.length }) }, {
				link: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_NuxtLink, { to: "/member/notifications" }, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("components.nuxt.unchecked_notification_link_text")), 1)]),
					_: 1
				})]),
				_: 1
			}, 8, ["translation"])];
		}),
		_: 1
	}, _parent));
	else _push(`<!---->`);
	if (_ctx.$store.state.page.contentHtml) {
		_push(`<!--[--><div>${_ctx.$store.state.page.contentHtml ?? ""}</div>`);
		if (_ctx.page.title === _ctx.$t("titles.error") && _ctx.data.document) {
			_push(`<p>`);
			_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_GeneralButton, { href: _ctx.doc_action_link(_ctx.data.document, "w") }, {
				default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("components.nuxt.go_back_to_document"))}`);
					else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("components.nuxt.go_back_to_document")), 1)];
				}),
				_: 1
			}, _parent));
			_push(`</p>`);
		} else _push(`<!---->`);
		_push(`<!--]-->`);
	} else (0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderVNode)(_push, (0, require__plugin_vue_export_helper.vue_exports.createVNode)((0, require__plugin_vue_export_helper.vue_exports.resolveDynamicComponent)(_ctx.$store.state.viewData.viewComponent), null, null), _parent);
	_push(`<!--]-->`);
}
var _sfc_setup$28 = _sfc_main$28.setup;
_sfc_main$28.setup = (props, ctx) => {
	const ssrContext = (0, require__plugin_vue_export_helper.vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/global/nuxt.vue");
	return _sfc_setup$28 ? _sfc_setup$28(props, ctx) : void 0;
};
var nuxt_default = /*#__PURE__*/ require__plugin_vue_export_helper._plugin_vue_export_helper_default(_sfc_main$28, [["ssrRender", _sfc_ssrRender$28]]);
//#endregion
//#region node_modules/@vue/devtools-shared/dist/index.cjs
var require_dist$5 = /* @__PURE__ */ require__plugin_vue_export_helper.__commonJSMin(((exports, module) => {
	var __create = Object.create;
	var __defProp = Object.defineProperty;
	var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
	var __getOwnPropNames = Object.getOwnPropertyNames;
	var __getProtoOf = Object.getPrototypeOf;
	var __hasOwnProp = Object.prototype.hasOwnProperty;
	var __esm = (fn, res) => function __init() {
		return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
	};
	var __commonJS = (cb, mod) => function __require() {
		return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
	};
	var __export = (target2, all) => {
		for (var name in all) __defProp(target2, name, {
			get: all[name],
			enumerable: true
		});
	};
	var __copyProps = (to, from, except, desc) => {
		if (from && typeof from === "object" || typeof from === "function") {
			for (let key of __getOwnPropNames(from)) if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
				get: () => from[key],
				enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
			});
		}
		return to;
	};
	var __toESM = (mod, isNodeMode, target2) => (target2 = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target2, "default", {
		value: mod,
		enumerable: true
	}) : target2, mod));
	var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
	var init_cjs_shims = __esm({ "../../node_modules/.pnpm/tsup@8.3.5_@microsoft+api-extractor@7.48.1_@types+node@22.10.5__jiti@2.4.2_postcss@8.4.49_tsx_s7k37zks4wtn7x2grzma6lrsfa/node_modules/tsup/assets/cjs_shims.js"() {
		"use strict";
	} });
	var require_rfdc = __commonJS({ "../../node_modules/.pnpm/rfdc@1.4.1/node_modules/rfdc/index.js"(exports2, module2) {
		"use strict";
		init_cjs_shims();
		module2.exports = rfdc2;
		function copyBuffer(cur) {
			if (cur instanceof Buffer) return Buffer.from(cur);
			return new cur.constructor(cur.buffer.slice(), cur.byteOffset, cur.length);
		}
		function rfdc2(opts) {
			opts = opts || {};
			if (opts.circles) return rfdcCircles(opts);
			const constructorHandlers = /* @__PURE__ */ new Map();
			constructorHandlers.set(Date, (o) => new Date(o));
			constructorHandlers.set(Map, (o, fn) => new Map(cloneArray(Array.from(o), fn)));
			constructorHandlers.set(Set, (o, fn) => new Set(cloneArray(Array.from(o), fn)));
			if (opts.constructorHandlers) for (const handler2 of opts.constructorHandlers) constructorHandlers.set(handler2[0], handler2[1]);
			let handler = null;
			return opts.proto ? cloneProto : clone;
			function cloneArray(a, fn) {
				const keys = Object.keys(a);
				const a2 = new Array(keys.length);
				for (let i = 0; i < keys.length; i++) {
					const k = keys[i];
					const cur = a[k];
					if (typeof cur !== "object" || cur === null) a2[k] = cur;
					else if (cur.constructor !== Object && (handler = constructorHandlers.get(cur.constructor))) a2[k] = handler(cur, fn);
					else if (ArrayBuffer.isView(cur)) a2[k] = copyBuffer(cur);
					else a2[k] = fn(cur);
				}
				return a2;
			}
			function clone(o) {
				if (typeof o !== "object" || o === null) return o;
				if (Array.isArray(o)) return cloneArray(o, clone);
				if (o.constructor !== Object && (handler = constructorHandlers.get(o.constructor))) return handler(o, clone);
				const o2 = {};
				for (const k in o) {
					if (Object.hasOwnProperty.call(o, k) === false) continue;
					const cur = o[k];
					if (typeof cur !== "object" || cur === null) o2[k] = cur;
					else if (cur.constructor !== Object && (handler = constructorHandlers.get(cur.constructor))) o2[k] = handler(cur, clone);
					else if (ArrayBuffer.isView(cur)) o2[k] = copyBuffer(cur);
					else o2[k] = clone(cur);
				}
				return o2;
			}
			function cloneProto(o) {
				if (typeof o !== "object" || o === null) return o;
				if (Array.isArray(o)) return cloneArray(o, cloneProto);
				if (o.constructor !== Object && (handler = constructorHandlers.get(o.constructor))) return handler(o, cloneProto);
				const o2 = {};
				for (const k in o) {
					const cur = o[k];
					if (typeof cur !== "object" || cur === null) o2[k] = cur;
					else if (cur.constructor !== Object && (handler = constructorHandlers.get(cur.constructor))) o2[k] = handler(cur, cloneProto);
					else if (ArrayBuffer.isView(cur)) o2[k] = copyBuffer(cur);
					else o2[k] = cloneProto(cur);
				}
				return o2;
			}
		}
		function rfdcCircles(opts) {
			const refs = [];
			const refsNew = [];
			const constructorHandlers = /* @__PURE__ */ new Map();
			constructorHandlers.set(Date, (o) => new Date(o));
			constructorHandlers.set(Map, (o, fn) => new Map(cloneArray(Array.from(o), fn)));
			constructorHandlers.set(Set, (o, fn) => new Set(cloneArray(Array.from(o), fn)));
			if (opts.constructorHandlers) for (const handler2 of opts.constructorHandlers) constructorHandlers.set(handler2[0], handler2[1]);
			let handler = null;
			return opts.proto ? cloneProto : clone;
			function cloneArray(a, fn) {
				const keys = Object.keys(a);
				const a2 = new Array(keys.length);
				for (let i = 0; i < keys.length; i++) {
					const k = keys[i];
					const cur = a[k];
					if (typeof cur !== "object" || cur === null) a2[k] = cur;
					else if (cur.constructor !== Object && (handler = constructorHandlers.get(cur.constructor))) a2[k] = handler(cur, fn);
					else if (ArrayBuffer.isView(cur)) a2[k] = copyBuffer(cur);
					else {
						const index = refs.indexOf(cur);
						if (index !== -1) a2[k] = refsNew[index];
						else a2[k] = fn(cur);
					}
				}
				return a2;
			}
			function clone(o) {
				if (typeof o !== "object" || o === null) return o;
				if (Array.isArray(o)) return cloneArray(o, clone);
				if (o.constructor !== Object && (handler = constructorHandlers.get(o.constructor))) return handler(o, clone);
				const o2 = {};
				refs.push(o);
				refsNew.push(o2);
				for (const k in o) {
					if (Object.hasOwnProperty.call(o, k) === false) continue;
					const cur = o[k];
					if (typeof cur !== "object" || cur === null) o2[k] = cur;
					else if (cur.constructor !== Object && (handler = constructorHandlers.get(cur.constructor))) o2[k] = handler(cur, clone);
					else if (ArrayBuffer.isView(cur)) o2[k] = copyBuffer(cur);
					else {
						const i = refs.indexOf(cur);
						if (i !== -1) o2[k] = refsNew[i];
						else o2[k] = clone(cur);
					}
				}
				refs.pop();
				refsNew.pop();
				return o2;
			}
			function cloneProto(o) {
				if (typeof o !== "object" || o === null) return o;
				if (Array.isArray(o)) return cloneArray(o, cloneProto);
				if (o.constructor !== Object && (handler = constructorHandlers.get(o.constructor))) return handler(o, cloneProto);
				const o2 = {};
				refs.push(o);
				refsNew.push(o2);
				for (const k in o) {
					const cur = o[k];
					if (typeof cur !== "object" || cur === null) o2[k] = cur;
					else if (cur.constructor !== Object && (handler = constructorHandlers.get(cur.constructor))) o2[k] = handler(cur, cloneProto);
					else if (ArrayBuffer.isView(cur)) o2[k] = copyBuffer(cur);
					else {
						const i = refs.indexOf(cur);
						if (i !== -1) o2[k] = refsNew[i];
						else o2[k] = cloneProto(cur);
					}
				}
				refs.pop();
				refsNew.pop();
				return o2;
			}
		}
	} });
	var index_exports = {};
	__export(index_exports, {
		BROADCAST_CHANNEL_NAME: () => BROADCAST_CHANNEL_NAME,
		NOOP: () => NOOP,
		VIEW_MODE_STORAGE_KEY: () => VIEW_MODE_STORAGE_KEY,
		VITE_PLUGIN_CLIENT_URL_STORAGE_KEY: () => VITE_PLUGIN_CLIENT_URL_STORAGE_KEY,
		VITE_PLUGIN_DETECTED_STORAGE_KEY: () => VITE_PLUGIN_DETECTED_STORAGE_KEY,
		basename: () => basename,
		camelize: () => camelize,
		classify: () => classify,
		deepClone: () => deepClone,
		isArray: () => isArray,
		isBrowser: () => isBrowser,
		isInChromePanel: () => isInChromePanel,
		isInElectron: () => isInElectron,
		isInIframe: () => isInIframe,
		isInSeparateWindow: () => isInSeparateWindow,
		isMacOS: () => isMacOS,
		isMap: () => isMap,
		isNumeric: () => isNumeric,
		isNuxtApp: () => isNuxtApp,
		isObject: () => isObject,
		isSet: () => isSet,
		isUrlString: () => isUrlString,
		kebabize: () => kebabize,
		randomStr: () => randomStr,
		sortByKey: () => sortByKey,
		target: () => target
	});
	module.exports = __toCommonJS(index_exports);
	init_cjs_shims();
	init_cjs_shims();
	var VIEW_MODE_STORAGE_KEY = "__vue-devtools-view-mode__";
	var VITE_PLUGIN_DETECTED_STORAGE_KEY = "__vue-devtools-vite-plugin-detected__";
	var VITE_PLUGIN_CLIENT_URL_STORAGE_KEY = "__vue-devtools-vite-plugin-client-url__";
	var BROADCAST_CHANNEL_NAME = "__vue-devtools-broadcast-channel__";
	init_cjs_shims();
	var isBrowser = typeof navigator !== "undefined";
	var target = typeof window !== "undefined" ? window : typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : {};
	var isInChromePanel = typeof target.chrome !== "undefined" && !!target.chrome.devtools;
	var isInIframe = isBrowser && target.self !== target.top;
	var _a;
	var isInElectron = typeof navigator !== "undefined" && ((_a = navigator.userAgent) == null ? void 0 : _a.toLowerCase().includes("electron"));
	var isNuxtApp = typeof window !== "undefined" && !!window.__NUXT__;
	var isInSeparateWindow = !isInIframe && !isInChromePanel && !isInElectron;
	init_cjs_shims();
	var import_rfdc = __toESM(require_rfdc(), 1);
	function NOOP() {}
	var isNumeric = (str) => `${+str}` === str;
	var isMacOS = () => (navigator == null ? void 0 : navigator.platform) ? navigator == null ? void 0 : navigator.platform.toLowerCase().includes("mac") : /Macintosh/.test(navigator.userAgent);
	var classifyRE = /(?:^|[-_/])(\w)/g;
	var camelizeRE = /-(\w)/g;
	var kebabizeRE = /([a-z0-9])([A-Z])/g;
	function toUpper(_, c) {
		return c ? c.toUpperCase() : "";
	}
	function classify(str) {
		return str && `${str}`.replace(classifyRE, toUpper);
	}
	function camelize(str) {
		return str && str.replace(camelizeRE, toUpper);
	}
	function kebabize(str) {
		return str && str.replace(kebabizeRE, (_, lowerCaseCharacter, upperCaseLetter) => {
			return `${lowerCaseCharacter}-${upperCaseLetter}`;
		}).toLowerCase();
	}
	function basename(filename, ext) {
		let normalizedFilename = filename.replace(/^[a-z]:/i, "").replace(/\\/g, "/");
		if (normalizedFilename.endsWith(`index${ext}`)) normalizedFilename = normalizedFilename.replace(`/index${ext}`, ext);
		const lastSlashIndex = normalizedFilename.lastIndexOf("/");
		const baseNameWithExt = normalizedFilename.substring(lastSlashIndex + 1);
		if (ext) {
			const extIndex = baseNameWithExt.lastIndexOf(ext);
			return baseNameWithExt.substring(0, extIndex);
		}
		return "";
	}
	function sortByKey(state) {
		return state && state.slice().sort((a, b) => {
			if (a.key < b.key) return -1;
			if (a.key > b.key) return 1;
			return 0;
		});
	}
	var HTTP_URL_RE = /^https?:\/\//;
	function isUrlString(str) {
		return str.startsWith("/") || HTTP_URL_RE.test(str);
	}
	var deepClone = (0, import_rfdc.default)({ circles: true });
	function randomStr() {
		return Math.random().toString(36).slice(2);
	}
	function isObject(value) {
		return typeof value === "object" && !Array.isArray(value) && value !== null;
	}
	function isArray(value) {
		return Array.isArray(value);
	}
	function isSet(value) {
		return value instanceof Set;
	}
	function isMap(value) {
		return value instanceof Map;
	}
	0 && (module.exports = {
		BROADCAST_CHANNEL_NAME,
		NOOP,
		VIEW_MODE_STORAGE_KEY,
		VITE_PLUGIN_CLIENT_URL_STORAGE_KEY,
		VITE_PLUGIN_DETECTED_STORAGE_KEY,
		basename,
		camelize,
		classify,
		deepClone,
		isArray,
		isBrowser,
		isInChromePanel,
		isInElectron,
		isInIframe,
		isInSeparateWindow,
		isMacOS,
		isMap,
		isNumeric,
		isNuxtApp,
		isObject,
		isSet,
		isUrlString,
		kebabize,
		randomStr,
		sortByKey,
		target
	});
}));
//#endregion
//#region node_modules/perfect-debounce/dist/index.cjs
var require_dist$4 = /* @__PURE__ */ require__plugin_vue_export_helper.__commonJSMin(((exports) => {
	var DEBOUNCE_DEFAULTS = { trailing: true };
	function debounce(fn, wait = 25, options = {}) {
		options = {
			...DEBOUNCE_DEFAULTS,
			...options
		};
		if (!Number.isFinite(wait)) throw new TypeError("Expected `wait` to be a finite number");
		let leadingValue;
		let timeout;
		let resolveList = [];
		let currentPromise;
		let trailingArgs;
		const applyFn = (_this, args) => {
			currentPromise = _applyPromised(fn, _this, args);
			currentPromise.finally(() => {
				currentPromise = null;
				if (options.trailing && trailingArgs && !timeout) {
					const promise = applyFn(_this, trailingArgs);
					trailingArgs = null;
					return promise;
				}
			});
			return currentPromise;
		};
		return function(...args) {
			if (currentPromise) {
				if (options.trailing) trailingArgs = args;
				return currentPromise;
			}
			return new Promise((resolve) => {
				const shouldCallNow = !timeout && options.leading;
				clearTimeout(timeout);
				timeout = setTimeout(() => {
					timeout = null;
					const promise = options.leading ? leadingValue : applyFn(this, args);
					for (const _resolve of resolveList) _resolve(promise);
					resolveList = [];
				}, wait);
				if (shouldCallNow) {
					leadingValue = applyFn(this, args);
					resolve(leadingValue);
				} else resolveList.push(resolve);
			});
		};
	}
	async function _applyPromised(fn, _this, args) {
		return await fn.apply(_this, args);
	}
	exports.debounce = debounce;
}));
//#endregion
//#region node_modules/hookable/dist/index.cjs
var require_dist$3 = /* @__PURE__ */ require__plugin_vue_export_helper.__commonJSMin(((exports) => {
	function flatHooks(configHooks, hooks = {}, parentName) {
		for (const key in configHooks) {
			const subHook = configHooks[key];
			const name = parentName ? `${parentName}:${key}` : key;
			if (typeof subHook === "object" && subHook !== null) flatHooks(subHook, hooks, name);
			else if (typeof subHook === "function") hooks[name] = subHook;
		}
		return hooks;
	}
	function mergeHooks(...hooks) {
		const finalHooks = {};
		for (const hook of hooks) {
			const flatenHook = flatHooks(hook);
			for (const key in flatenHook) if (finalHooks[key]) finalHooks[key].push(flatenHook[key]);
			else finalHooks[key] = [flatenHook[key]];
		}
		for (const key in finalHooks) if (finalHooks[key].length > 1) {
			const array = finalHooks[key];
			finalHooks[key] = (...arguments_) => serial(array, (function_) => function_(...arguments_));
		} else finalHooks[key] = finalHooks[key][0];
		return finalHooks;
	}
	function serial(tasks, function_) {
		return tasks.reduce((promise, task) => promise.then(() => function_(task)), Promise.resolve());
	}
	var defaultTask = { run: (function_) => function_() };
	var _createTask = () => defaultTask;
	var createTask = typeof console.createTask !== "undefined" ? console.createTask : _createTask;
	function serialTaskCaller(hooks, args) {
		const task = createTask(args.shift());
		return hooks.reduce((promise, hookFunction) => promise.then(() => task.run(() => hookFunction(...args))), Promise.resolve());
	}
	function parallelTaskCaller(hooks, args) {
		const task = createTask(args.shift());
		return Promise.all(hooks.map((hook) => task.run(() => hook(...args))));
	}
	function serialCaller(hooks, arguments_) {
		return hooks.reduce((promise, hookFunction) => promise.then(() => hookFunction(...arguments_ || [])), Promise.resolve());
	}
	function parallelCaller(hooks, args) {
		return Promise.all(hooks.map((hook) => hook(...args || [])));
	}
	function callEachWith(callbacks, arg0) {
		for (const callback of [...callbacks]) callback(arg0);
	}
	var Hookable = class {
		constructor() {
			this._hooks = {};
			this._before = void 0;
			this._after = void 0;
			this._deprecatedMessages = void 0;
			this._deprecatedHooks = {};
			this.hook = this.hook.bind(this);
			this.callHook = this.callHook.bind(this);
			this.callHookWith = this.callHookWith.bind(this);
		}
		hook(name, function_, options = {}) {
			if (!name || typeof function_ !== "function") return () => {};
			const originalName = name;
			let dep;
			while (this._deprecatedHooks[name]) {
				dep = this._deprecatedHooks[name];
				name = dep.to;
			}
			if (dep && !options.allowDeprecated) {
				let message = dep.message;
				if (!message) message = `${originalName} hook has been deprecated` + (dep.to ? `, please use ${dep.to}` : "");
				if (!this._deprecatedMessages) this._deprecatedMessages = /* @__PURE__ */ new Set();
				if (!this._deprecatedMessages.has(message)) {
					console.warn(message);
					this._deprecatedMessages.add(message);
				}
			}
			if (!function_.name) try {
				Object.defineProperty(function_, "name", {
					get: () => "_" + name.replace(/\W+/g, "_") + "_hook_cb",
					configurable: true
				});
			} catch {}
			this._hooks[name] = this._hooks[name] || [];
			this._hooks[name].push(function_);
			return () => {
				if (function_) {
					this.removeHook(name, function_);
					function_ = void 0;
				}
			};
		}
		hookOnce(name, function_) {
			let _unreg;
			let _function = (...arguments_) => {
				if (typeof _unreg === "function") _unreg();
				_unreg = void 0;
				_function = void 0;
				return function_(...arguments_);
			};
			_unreg = this.hook(name, _function);
			return _unreg;
		}
		removeHook(name, function_) {
			if (this._hooks[name]) {
				const index = this._hooks[name].indexOf(function_);
				if (index !== -1) this._hooks[name].splice(index, 1);
				if (this._hooks[name].length === 0) delete this._hooks[name];
			}
		}
		deprecateHook(name, deprecated) {
			this._deprecatedHooks[name] = typeof deprecated === "string" ? { to: deprecated } : deprecated;
			const _hooks = this._hooks[name] || [];
			delete this._hooks[name];
			for (const hook of _hooks) this.hook(name, hook);
		}
		deprecateHooks(deprecatedHooks) {
			Object.assign(this._deprecatedHooks, deprecatedHooks);
			for (const name in deprecatedHooks) this.deprecateHook(name, deprecatedHooks[name]);
		}
		addHooks(configHooks) {
			const hooks = flatHooks(configHooks);
			const removeFns = Object.keys(hooks).map((key) => this.hook(key, hooks[key]));
			return () => {
				for (const unreg of removeFns.splice(0, removeFns.length)) unreg();
			};
		}
		removeHooks(configHooks) {
			const hooks = flatHooks(configHooks);
			for (const key in hooks) this.removeHook(key, hooks[key]);
		}
		removeAllHooks() {
			for (const key in this._hooks) delete this._hooks[key];
		}
		callHook(name, ...arguments_) {
			arguments_.unshift(name);
			return this.callHookWith(serialTaskCaller, name, ...arguments_);
		}
		callHookParallel(name, ...arguments_) {
			arguments_.unshift(name);
			return this.callHookWith(parallelTaskCaller, name, ...arguments_);
		}
		callHookWith(caller, name, ...arguments_) {
			const event = this._before || this._after ? {
				name,
				args: arguments_,
				context: {}
			} : void 0;
			if (this._before) callEachWith(this._before, event);
			const result = caller(name in this._hooks ? [...this._hooks[name]] : [], arguments_);
			if (result instanceof Promise) return result.finally(() => {
				if (this._after && event) callEachWith(this._after, event);
			});
			if (this._after && event) callEachWith(this._after, event);
			return result;
		}
		beforeEach(function_) {
			this._before = this._before || [];
			this._before.push(function_);
			return () => {
				if (this._before !== void 0) {
					const index = this._before.indexOf(function_);
					if (index !== -1) this._before.splice(index, 1);
				}
			};
		}
		afterEach(function_) {
			this._after = this._after || [];
			this._after.push(function_);
			return () => {
				if (this._after !== void 0) {
					const index = this._after.indexOf(function_);
					if (index !== -1) this._after.splice(index, 1);
				}
			};
		}
	};
	function createHooks() {
		return new Hookable();
	}
	var isBrowser = typeof window !== "undefined";
	function createDebugger(hooks, _options = {}) {
		const options = {
			inspect: isBrowser,
			group: isBrowser,
			filter: () => true,
			..._options
		};
		const _filter = options.filter;
		const filter = typeof _filter === "string" ? (name) => name.startsWith(_filter) : _filter;
		const _tag = options.tag ? `[${options.tag}] ` : "";
		const logPrefix = (event) => _tag + event.name + "".padEnd(event._id, "\0");
		const _idCtr = {};
		const unsubscribeBefore = hooks.beforeEach((event) => {
			if (filter !== void 0 && !filter(event.name)) return;
			_idCtr[event.name] = _idCtr[event.name] || 0;
			event._id = _idCtr[event.name]++;
			console.time(logPrefix(event));
		});
		const unsubscribeAfter = hooks.afterEach((event) => {
			if (filter !== void 0 && !filter(event.name)) return;
			if (options.group) console.groupCollapsed(event.name);
			if (options.inspect) console.timeLog(logPrefix(event), event.args);
			else console.timeEnd(logPrefix(event));
			if (options.group) console.groupEnd();
			_idCtr[event.name]--;
		});
		return { 
		/** Stop debugging and remove listeners */
close: () => {
			unsubscribeBefore();
			unsubscribeAfter();
		} };
	}
	exports.Hookable = Hookable;
	exports.createDebugger = createDebugger;
	exports.createHooks = createHooks;
	exports.flatHooks = flatHooks;
	exports.mergeHooks = mergeHooks;
	exports.parallelCaller = parallelCaller;
	exports.serial = serial;
	exports.serialCaller = serialCaller;
}));
//#endregion
//#region node_modules/birpc/dist/index.cjs
var require_dist$2 = /* @__PURE__ */ require__plugin_vue_export_helper.__commonJSMin(((exports) => {
	var DEFAULT_TIMEOUT = 6e4;
	function defaultSerialize(i) {
		return i;
	}
	var defaultDeserialize = defaultSerialize;
	var { clearTimeout, setTimeout } = globalThis;
	var random = Math.random.bind(Math);
	function createBirpc(functions, options) {
		const { post, on, off = () => {}, eventNames = [], serialize = defaultSerialize, deserialize = defaultDeserialize, resolver, bind = "rpc", timeout = DEFAULT_TIMEOUT } = options;
		const rpcPromiseMap = /* @__PURE__ */ new Map();
		let _promise;
		let closed = false;
		const rpc = new Proxy({}, { get(_, method) {
			if (method === "$functions") return functions;
			if (method === "$close") return close;
			if (method === "then" && !eventNames.includes("then") && !("then" in functions)) return void 0;
			const sendEvent = (...args) => {
				post(serialize({
					m: method,
					a: args,
					t: "q"
				}));
			};
			if (eventNames.includes(method)) {
				sendEvent.asEvent = sendEvent;
				return sendEvent;
			}
			const sendCall = async (...args) => {
				if (closed) throw new Error(`[birpc] rpc is closed, cannot call "${method}"`);
				if (_promise) try {
					await _promise;
				} finally {
					_promise = void 0;
				}
				return new Promise((resolve, reject) => {
					const id = nanoid();
					let timeoutId;
					if (timeout >= 0) {
						timeoutId = setTimeout(() => {
							try {
								options.onTimeoutError?.(method, args);
								throw new Error(`[birpc] timeout on calling "${method}"`);
							} catch (e) {
								reject(e);
							}
							rpcPromiseMap.delete(id);
						}, timeout);
						if (typeof timeoutId === "object") timeoutId = timeoutId.unref?.();
					}
					rpcPromiseMap.set(id, {
						resolve,
						reject,
						timeoutId,
						method
					});
					post(serialize({
						m: method,
						a: args,
						i: id,
						t: "q"
					}));
				});
			};
			sendCall.asEvent = sendEvent;
			return sendCall;
		} });
		function close() {
			closed = true;
			rpcPromiseMap.forEach(({ reject, method }) => {
				reject(/* @__PURE__ */ new Error(`[birpc] rpc is closed, cannot call "${method}"`));
			});
			rpcPromiseMap.clear();
			off(onMessage);
		}
		async function onMessage(data, ...extra) {
			const msg = deserialize(data);
			if (msg.t === "q") {
				const { m: method, a: args } = msg;
				let result, error;
				const fn = resolver ? resolver(method, functions[method]) : functions[method];
				if (!fn) error = /* @__PURE__ */ new Error(`[birpc] function "${method}" not found`);
				else try {
					result = await fn.apply(bind === "rpc" ? rpc : functions, args);
				} catch (e) {
					error = e;
				}
				if (msg.i) {
					if (error && options.onError) options.onError(error, method, args);
					post(serialize({
						t: "s",
						i: msg.i,
						r: result,
						e: error
					}), ...extra);
				}
			} else {
				const { i: ack, r: result, e: error } = msg;
				const promise = rpcPromiseMap.get(ack);
				if (promise) {
					clearTimeout(promise.timeoutId);
					if (error) promise.reject(error);
					else promise.resolve(result);
				}
				rpcPromiseMap.delete(ack);
			}
		}
		_promise = on(onMessage);
		return rpc;
	}
	var cacheMap = /* @__PURE__ */ new WeakMap();
	function cachedMap(items, fn) {
		return items.map((i) => {
			let r = cacheMap.get(i);
			if (!r) {
				r = fn(i);
				cacheMap.set(i, r);
			}
			return r;
		});
	}
	function createBirpcGroup(functions, channels, options = {}) {
		const getChannels = () => typeof channels === "function" ? channels() : channels;
		const getClients = (channels2 = getChannels()) => cachedMap(channels2, (s) => createBirpc(functions, {
			...options,
			...s
		}));
		const broadcastProxy = new Proxy({}, { get(_, method) {
			const callbacks = getClients().map((c) => c[method]);
			const sendCall = (...args) => {
				return Promise.all(callbacks.map((i) => i(...args)));
			};
			sendCall.asEvent = (...args) => {
				callbacks.map((i) => i.asEvent(...args));
			};
			return sendCall;
		} });
		function updateChannels(fn) {
			const channels2 = getChannels();
			fn?.(channels2);
			return getClients(channels2);
		}
		getClients();
		return {
			get clients() {
				return getClients();
			},
			functions,
			updateChannels,
			broadcast: broadcastProxy,
			/**
			* @deprecated use `broadcast`
			*/
			boardcast: broadcastProxy
		};
	}
	var urlAlphabet = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
	function nanoid(size = 21) {
		let id = "";
		let i = size;
		while (i--) id += urlAlphabet[random() * 64 | 0];
		return id;
	}
	exports.DEFAULT_TIMEOUT = DEFAULT_TIMEOUT;
	exports.cachedMap = cachedMap;
	exports.createBirpc = createBirpc;
	exports.createBirpcGroup = createBirpcGroup;
}));
//#endregion
//#region node_modules/@vue/devtools-kit/dist/index.cjs
var require_dist$1 = /* @__PURE__ */ require__plugin_vue_export_helper.__commonJSMin(((exports, module) => {
	var __create = Object.create;
	var __defProp = Object.defineProperty;
	var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
	var __getOwnPropNames = Object.getOwnPropertyNames;
	var __getProtoOf = Object.getPrototypeOf;
	var __hasOwnProp = Object.prototype.hasOwnProperty;
	var __esm = (fn, res) => function __init() {
		return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
	};
	var __commonJS = (cb, mod) => function __require() {
		return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
	};
	var __export = (target22, all) => {
		for (var name in all) __defProp(target22, name, {
			get: all[name],
			enumerable: true
		});
	};
	var __copyProps = (to, from, except, desc) => {
		if (from && typeof from === "object" || typeof from === "function") {
			for (let key of __getOwnPropNames(from)) if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
				get: () => from[key],
				enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
			});
		}
		return to;
	};
	var __toESM = (mod, isNodeMode, target22) => (target22 = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target22, "default", {
		value: mod,
		enumerable: true
	}) : target22, mod));
	var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
	var init_cjs_shims = __esm({ "../../node_modules/.pnpm/tsup@8.3.5_@microsoft+api-extractor@7.48.1_@types+node@22.10.5__jiti@2.4.2_postcss@8.4.49_tsx_s7k37zks4wtn7x2grzma6lrsfa/node_modules/tsup/assets/cjs_shims.js"() {
		"use strict";
	} });
	var require_speakingurl = __commonJS({ "../../node_modules/.pnpm/speakingurl@14.0.1/node_modules/speakingurl/lib/speakingurl.js"(exports2, module2) {
		"use strict";
		init_cjs_shims();
		(function(root) {
			"use strict";
			var charMap = {
				"À": "A",
				"Á": "A",
				"Â": "A",
				"Ã": "A",
				"Ä": "Ae",
				"Å": "A",
				"Æ": "AE",
				"Ç": "C",
				"È": "E",
				"É": "E",
				"Ê": "E",
				"Ë": "E",
				"Ì": "I",
				"Í": "I",
				"Î": "I",
				"Ï": "I",
				"Ð": "D",
				"Ñ": "N",
				"Ò": "O",
				"Ó": "O",
				"Ô": "O",
				"Õ": "O",
				"Ö": "Oe",
				"Ő": "O",
				"Ø": "O",
				"Ù": "U",
				"Ú": "U",
				"Û": "U",
				"Ü": "Ue",
				"Ű": "U",
				"Ý": "Y",
				"Þ": "TH",
				"ß": "ss",
				"à": "a",
				"á": "a",
				"â": "a",
				"ã": "a",
				"ä": "ae",
				"å": "a",
				"æ": "ae",
				"ç": "c",
				"è": "e",
				"é": "e",
				"ê": "e",
				"ë": "e",
				"ì": "i",
				"í": "i",
				"î": "i",
				"ï": "i",
				"ð": "d",
				"ñ": "n",
				"ò": "o",
				"ó": "o",
				"ô": "o",
				"õ": "o",
				"ö": "oe",
				"ő": "o",
				"ø": "o",
				"ù": "u",
				"ú": "u",
				"û": "u",
				"ü": "ue",
				"ű": "u",
				"ý": "y",
				"þ": "th",
				"ÿ": "y",
				"ẞ": "SS",
				"ا": "a",
				"أ": "a",
				"إ": "i",
				"آ": "aa",
				"ؤ": "u",
				"ئ": "e",
				"ء": "a",
				"ب": "b",
				"ت": "t",
				"ث": "th",
				"ج": "j",
				"ح": "h",
				"خ": "kh",
				"د": "d",
				"ذ": "th",
				"ر": "r",
				"ز": "z",
				"س": "s",
				"ش": "sh",
				"ص": "s",
				"ض": "dh",
				"ط": "t",
				"ظ": "z",
				"ع": "a",
				"غ": "gh",
				"ف": "f",
				"ق": "q",
				"ك": "k",
				"ل": "l",
				"م": "m",
				"ن": "n",
				"ه": "h",
				"و": "w",
				"ي": "y",
				"ى": "a",
				"ة": "h",
				"ﻻ": "la",
				"ﻷ": "laa",
				"ﻹ": "lai",
				"ﻵ": "laa",
				"گ": "g",
				"چ": "ch",
				"پ": "p",
				"ژ": "zh",
				"ک": "k",
				"ی": "y",
				"َ": "a",
				"ً": "an",
				"ِ": "e",
				"ٍ": "en",
				"ُ": "u",
				"ٌ": "on",
				"ْ": "",
				"٠": "0",
				"١": "1",
				"٢": "2",
				"٣": "3",
				"٤": "4",
				"٥": "5",
				"٦": "6",
				"٧": "7",
				"٨": "8",
				"٩": "9",
				"۰": "0",
				"۱": "1",
				"۲": "2",
				"۳": "3",
				"۴": "4",
				"۵": "5",
				"۶": "6",
				"۷": "7",
				"۸": "8",
				"۹": "9",
				"က": "k",
				"ခ": "kh",
				"ဂ": "g",
				"ဃ": "ga",
				"င": "ng",
				"စ": "s",
				"ဆ": "sa",
				"ဇ": "z",
				"စျ": "za",
				"ည": "ny",
				"ဋ": "t",
				"ဌ": "ta",
				"ဍ": "d",
				"ဎ": "da",
				"ဏ": "na",
				"တ": "t",
				"ထ": "ta",
				"ဒ": "d",
				"ဓ": "da",
				"န": "n",
				"ပ": "p",
				"ဖ": "pa",
				"ဗ": "b",
				"ဘ": "ba",
				"မ": "m",
				"ယ": "y",
				"ရ": "ya",
				"လ": "l",
				"ဝ": "w",
				"သ": "th",
				"ဟ": "h",
				"ဠ": "la",
				"အ": "a",
				"ြ": "y",
				"ျ": "ya",
				"ွ": "w",
				"ြွ": "yw",
				"ျွ": "ywa",
				"ှ": "h",
				"ဧ": "e",
				"၏": "-e",
				"ဣ": "i",
				"ဤ": "-i",
				"ဉ": "u",
				"ဦ": "-u",
				"ဩ": "aw",
				"သြော": "aw",
				"ဪ": "aw",
				"၀": "0",
				"၁": "1",
				"၂": "2",
				"၃": "3",
				"၄": "4",
				"၅": "5",
				"၆": "6",
				"၇": "7",
				"၈": "8",
				"၉": "9",
				"္": "",
				"့": "",
				"း": "",
				"č": "c",
				"ď": "d",
				"ě": "e",
				"ň": "n",
				"ř": "r",
				"š": "s",
				"ť": "t",
				"ů": "u",
				"ž": "z",
				"Č": "C",
				"Ď": "D",
				"Ě": "E",
				"Ň": "N",
				"Ř": "R",
				"Š": "S",
				"Ť": "T",
				"Ů": "U",
				"Ž": "Z",
				"ހ": "h",
				"ށ": "sh",
				"ނ": "n",
				"ރ": "r",
				"ބ": "b",
				"ޅ": "lh",
				"ކ": "k",
				"އ": "a",
				"ވ": "v",
				"މ": "m",
				"ފ": "f",
				"ދ": "dh",
				"ތ": "th",
				"ލ": "l",
				"ގ": "g",
				"ޏ": "gn",
				"ސ": "s",
				"ޑ": "d",
				"ޒ": "z",
				"ޓ": "t",
				"ޔ": "y",
				"ޕ": "p",
				"ޖ": "j",
				"ޗ": "ch",
				"ޘ": "tt",
				"ޙ": "hh",
				"ޚ": "kh",
				"ޛ": "th",
				"ޜ": "z",
				"ޝ": "sh",
				"ޞ": "s",
				"ޟ": "d",
				"ޠ": "t",
				"ޡ": "z",
				"ޢ": "a",
				"ޣ": "gh",
				"ޤ": "q",
				"ޥ": "w",
				"ަ": "a",
				"ާ": "aa",
				"ި": "i",
				"ީ": "ee",
				"ު": "u",
				"ޫ": "oo",
				"ެ": "e",
				"ޭ": "ey",
				"ޮ": "o",
				"ޯ": "oa",
				"ް": "",
				"ა": "a",
				"ბ": "b",
				"გ": "g",
				"დ": "d",
				"ე": "e",
				"ვ": "v",
				"ზ": "z",
				"თ": "t",
				"ი": "i",
				"კ": "k",
				"ლ": "l",
				"მ": "m",
				"ნ": "n",
				"ო": "o",
				"პ": "p",
				"ჟ": "zh",
				"რ": "r",
				"ს": "s",
				"ტ": "t",
				"უ": "u",
				"ფ": "p",
				"ქ": "k",
				"ღ": "gh",
				"ყ": "q",
				"შ": "sh",
				"ჩ": "ch",
				"ც": "ts",
				"ძ": "dz",
				"წ": "ts",
				"ჭ": "ch",
				"ხ": "kh",
				"ჯ": "j",
				"ჰ": "h",
				"α": "a",
				"β": "v",
				"γ": "g",
				"δ": "d",
				"ε": "e",
				"ζ": "z",
				"η": "i",
				"θ": "th",
				"ι": "i",
				"κ": "k",
				"λ": "l",
				"μ": "m",
				"ν": "n",
				"ξ": "ks",
				"ο": "o",
				"π": "p",
				"ρ": "r",
				"σ": "s",
				"τ": "t",
				"υ": "y",
				"φ": "f",
				"χ": "x",
				"ψ": "ps",
				"ω": "o",
				"ά": "a",
				"έ": "e",
				"ί": "i",
				"ό": "o",
				"ύ": "y",
				"ή": "i",
				"ώ": "o",
				"ς": "s",
				"ϊ": "i",
				"ΰ": "y",
				"ϋ": "y",
				"ΐ": "i",
				"Α": "A",
				"Β": "B",
				"Γ": "G",
				"Δ": "D",
				"Ε": "E",
				"Ζ": "Z",
				"Η": "I",
				"Θ": "TH",
				"Ι": "I",
				"Κ": "K",
				"Λ": "L",
				"Μ": "M",
				"Ν": "N",
				"Ξ": "KS",
				"Ο": "O",
				"Π": "P",
				"Ρ": "R",
				"Σ": "S",
				"Τ": "T",
				"Υ": "Y",
				"Φ": "F",
				"Χ": "X",
				"Ψ": "PS",
				"Ω": "O",
				"Ά": "A",
				"Έ": "E",
				"Ί": "I",
				"Ό": "O",
				"Ύ": "Y",
				"Ή": "I",
				"Ώ": "O",
				"Ϊ": "I",
				"Ϋ": "Y",
				"ā": "a",
				"ē": "e",
				"ģ": "g",
				"ī": "i",
				"ķ": "k",
				"ļ": "l",
				"ņ": "n",
				"ū": "u",
				"Ā": "A",
				"Ē": "E",
				"Ģ": "G",
				"Ī": "I",
				"Ķ": "k",
				"Ļ": "L",
				"Ņ": "N",
				"Ū": "U",
				"Ќ": "Kj",
				"ќ": "kj",
				"Љ": "Lj",
				"љ": "lj",
				"Њ": "Nj",
				"њ": "nj",
				"Тс": "Ts",
				"тс": "ts",
				"ą": "a",
				"ć": "c",
				"ę": "e",
				"ł": "l",
				"ń": "n",
				"ś": "s",
				"ź": "z",
				"ż": "z",
				"Ą": "A",
				"Ć": "C",
				"Ę": "E",
				"Ł": "L",
				"Ń": "N",
				"Ś": "S",
				"Ź": "Z",
				"Ż": "Z",
				"Є": "Ye",
				"І": "I",
				"Ї": "Yi",
				"Ґ": "G",
				"є": "ye",
				"і": "i",
				"ї": "yi",
				"ґ": "g",
				"ă": "a",
				"Ă": "A",
				"ș": "s",
				"Ș": "S",
				"ț": "t",
				"Ț": "T",
				"ţ": "t",
				"Ţ": "T",
				"а": "a",
				"б": "b",
				"в": "v",
				"г": "g",
				"д": "d",
				"е": "e",
				"ё": "yo",
				"ж": "zh",
				"з": "z",
				"и": "i",
				"й": "i",
				"к": "k",
				"л": "l",
				"м": "m",
				"н": "n",
				"о": "o",
				"п": "p",
				"р": "r",
				"с": "s",
				"т": "t",
				"у": "u",
				"ф": "f",
				"х": "kh",
				"ц": "c",
				"ч": "ch",
				"ш": "sh",
				"щ": "sh",
				"ъ": "",
				"ы": "y",
				"ь": "",
				"э": "e",
				"ю": "yu",
				"я": "ya",
				"А": "A",
				"Б": "B",
				"В": "V",
				"Г": "G",
				"Д": "D",
				"Е": "E",
				"Ё": "Yo",
				"Ж": "Zh",
				"З": "Z",
				"И": "I",
				"Й": "I",
				"К": "K",
				"Л": "L",
				"М": "M",
				"Н": "N",
				"О": "O",
				"П": "P",
				"Р": "R",
				"С": "S",
				"Т": "T",
				"У": "U",
				"Ф": "F",
				"Х": "Kh",
				"Ц": "C",
				"Ч": "Ch",
				"Ш": "Sh",
				"Щ": "Sh",
				"Ъ": "",
				"Ы": "Y",
				"Ь": "",
				"Э": "E",
				"Ю": "Yu",
				"Я": "Ya",
				"ђ": "dj",
				"ј": "j",
				"ћ": "c",
				"џ": "dz",
				"Ђ": "Dj",
				"Ј": "j",
				"Ћ": "C",
				"Џ": "Dz",
				"ľ": "l",
				"ĺ": "l",
				"ŕ": "r",
				"Ľ": "L",
				"Ĺ": "L",
				"Ŕ": "R",
				"ş": "s",
				"Ş": "S",
				"ı": "i",
				"İ": "I",
				"ğ": "g",
				"Ğ": "G",
				"ả": "a",
				"Ả": "A",
				"ẳ": "a",
				"Ẳ": "A",
				"ẩ": "a",
				"Ẩ": "A",
				"đ": "d",
				"Đ": "D",
				"ẹ": "e",
				"Ẹ": "E",
				"ẽ": "e",
				"Ẽ": "E",
				"ẻ": "e",
				"Ẻ": "E",
				"ế": "e",
				"Ế": "E",
				"ề": "e",
				"Ề": "E",
				"ệ": "e",
				"Ệ": "E",
				"ễ": "e",
				"Ễ": "E",
				"ể": "e",
				"Ể": "E",
				"ỏ": "o",
				"ọ": "o",
				"Ọ": "o",
				"ố": "o",
				"Ố": "O",
				"ồ": "o",
				"Ồ": "O",
				"ổ": "o",
				"Ổ": "O",
				"ộ": "o",
				"Ộ": "O",
				"ỗ": "o",
				"Ỗ": "O",
				"ơ": "o",
				"Ơ": "O",
				"ớ": "o",
				"Ớ": "O",
				"ờ": "o",
				"Ờ": "O",
				"ợ": "o",
				"Ợ": "O",
				"ỡ": "o",
				"Ỡ": "O",
				"Ở": "o",
				"ở": "o",
				"ị": "i",
				"Ị": "I",
				"ĩ": "i",
				"Ĩ": "I",
				"ỉ": "i",
				"Ỉ": "i",
				"ủ": "u",
				"Ủ": "U",
				"ụ": "u",
				"Ụ": "U",
				"ũ": "u",
				"Ũ": "U",
				"ư": "u",
				"Ư": "U",
				"ứ": "u",
				"Ứ": "U",
				"ừ": "u",
				"Ừ": "U",
				"ự": "u",
				"Ự": "U",
				"ữ": "u",
				"Ữ": "U",
				"ử": "u",
				"Ử": "ư",
				"ỷ": "y",
				"Ỷ": "y",
				"ỳ": "y",
				"Ỳ": "Y",
				"ỵ": "y",
				"Ỵ": "Y",
				"ỹ": "y",
				"Ỹ": "Y",
				"ạ": "a",
				"Ạ": "A",
				"ấ": "a",
				"Ấ": "A",
				"ầ": "a",
				"Ầ": "A",
				"ậ": "a",
				"Ậ": "A",
				"ẫ": "a",
				"Ẫ": "A",
				"ắ": "a",
				"Ắ": "A",
				"ằ": "a",
				"Ằ": "A",
				"ặ": "a",
				"Ặ": "A",
				"ẵ": "a",
				"Ẵ": "A",
				"⓪": "0",
				"①": "1",
				"②": "2",
				"③": "3",
				"④": "4",
				"⑤": "5",
				"⑥": "6",
				"⑦": "7",
				"⑧": "8",
				"⑨": "9",
				"⑩": "10",
				"⑪": "11",
				"⑫": "12",
				"⑬": "13",
				"⑭": "14",
				"⑮": "15",
				"⑯": "16",
				"⑰": "17",
				"⑱": "18",
				"⑲": "18",
				"⑳": "18",
				"⓵": "1",
				"⓶": "2",
				"⓷": "3",
				"⓸": "4",
				"⓹": "5",
				"⓺": "6",
				"⓻": "7",
				"⓼": "8",
				"⓽": "9",
				"⓾": "10",
				"⓿": "0",
				"⓫": "11",
				"⓬": "12",
				"⓭": "13",
				"⓮": "14",
				"⓯": "15",
				"⓰": "16",
				"⓱": "17",
				"⓲": "18",
				"⓳": "19",
				"⓴": "20",
				"Ⓐ": "A",
				"Ⓑ": "B",
				"Ⓒ": "C",
				"Ⓓ": "D",
				"Ⓔ": "E",
				"Ⓕ": "F",
				"Ⓖ": "G",
				"Ⓗ": "H",
				"Ⓘ": "I",
				"Ⓙ": "J",
				"Ⓚ": "K",
				"Ⓛ": "L",
				"Ⓜ": "M",
				"Ⓝ": "N",
				"Ⓞ": "O",
				"Ⓟ": "P",
				"Ⓠ": "Q",
				"Ⓡ": "R",
				"Ⓢ": "S",
				"Ⓣ": "T",
				"Ⓤ": "U",
				"Ⓥ": "V",
				"Ⓦ": "W",
				"Ⓧ": "X",
				"Ⓨ": "Y",
				"Ⓩ": "Z",
				"ⓐ": "a",
				"ⓑ": "b",
				"ⓒ": "c",
				"ⓓ": "d",
				"ⓔ": "e",
				"ⓕ": "f",
				"ⓖ": "g",
				"ⓗ": "h",
				"ⓘ": "i",
				"ⓙ": "j",
				"ⓚ": "k",
				"ⓛ": "l",
				"ⓜ": "m",
				"ⓝ": "n",
				"ⓞ": "o",
				"ⓟ": "p",
				"ⓠ": "q",
				"ⓡ": "r",
				"ⓢ": "s",
				"ⓣ": "t",
				"ⓤ": "u",
				"ⓦ": "v",
				"ⓥ": "w",
				"ⓧ": "x",
				"ⓨ": "y",
				"ⓩ": "z",
				"“": "\"",
				"”": "\"",
				"‘": "'",
				"’": "'",
				"∂": "d",
				"ƒ": "f",
				"™": "(TM)",
				"©": "(C)",
				"œ": "oe",
				"Œ": "OE",
				"®": "(R)",
				"†": "+",
				"℠": "(SM)",
				"…": "...",
				"˚": "o",
				"º": "o",
				"ª": "a",
				"•": "*",
				"၊": ",",
				"။": ".",
				"$": "USD",
				"€": "EUR",
				"₢": "BRN",
				"₣": "FRF",
				"£": "GBP",
				"₤": "ITL",
				"₦": "NGN",
				"₧": "ESP",
				"₩": "KRW",
				"₪": "ILS",
				"₫": "VND",
				"₭": "LAK",
				"₮": "MNT",
				"₯": "GRD",
				"₱": "ARS",
				"₲": "PYG",
				"₳": "ARA",
				"₴": "UAH",
				"₵": "GHS",
				"¢": "cent",
				"¥": "CNY",
				"元": "CNY",
				"円": "YEN",
				"﷼": "IRR",
				"₠": "EWE",
				"฿": "THB",
				"₨": "INR",
				"₹": "INR",
				"₰": "PF",
				"₺": "TRY",
				"؋": "AFN",
				"₼": "AZN",
				"лв": "BGN",
				"៛": "KHR",
				"₡": "CRC",
				"₸": "KZT",
				"ден": "MKD",
				"zł": "PLN",
				"₽": "RUB",
				"₾": "GEL"
			};
			var lookAheadCharArray = ["်", "ް"];
			var diatricMap = {
				"ာ": "a",
				"ါ": "a",
				"ေ": "e",
				"ဲ": "e",
				"ိ": "i",
				"ီ": "i",
				"ို": "o",
				"ု": "u",
				"ူ": "u",
				"ေါင်": "aung",
				"ော": "aw",
				"ော်": "aw",
				"ေါ": "aw",
				"ေါ်": "aw",
				"်": "်",
				"က်": "et",
				"ိုက်": "aik",
				"ောက်": "auk",
				"င်": "in",
				"ိုင်": "aing",
				"ောင်": "aung",
				"စ်": "it",
				"ည်": "i",
				"တ်": "at",
				"ိတ်": "eik",
				"ုတ်": "ok",
				"ွတ်": "ut",
				"ေတ်": "it",
				"ဒ်": "d",
				"ိုဒ်": "ok",
				"ုဒ်": "ait",
				"န်": "an",
				"ာန်": "an",
				"ိန်": "ein",
				"ုန်": "on",
				"ွန်": "un",
				"ပ်": "at",
				"ိပ်": "eik",
				"ုပ်": "ok",
				"ွပ်": "ut",
				"န်ုပ်": "nub",
				"မ်": "an",
				"ိမ်": "ein",
				"ုမ်": "on",
				"ွမ်": "un",
				"ယ်": "e",
				"ိုလ်": "ol",
				"ဉ်": "in",
				"ံ": "an",
				"ိံ": "ein",
				"ုံ": "on",
				"ައް": "ah",
				"ަށް": "ah"
			};
			var langCharMap = {
				"en": {},
				"az": {
					"ç": "c",
					"ə": "e",
					"ğ": "g",
					"ı": "i",
					"ö": "o",
					"ş": "s",
					"ü": "u",
					"Ç": "C",
					"Ə": "E",
					"Ğ": "G",
					"İ": "I",
					"Ö": "O",
					"Ş": "S",
					"Ü": "U"
				},
				"cs": {
					"č": "c",
					"ď": "d",
					"ě": "e",
					"ň": "n",
					"ř": "r",
					"š": "s",
					"ť": "t",
					"ů": "u",
					"ž": "z",
					"Č": "C",
					"Ď": "D",
					"Ě": "E",
					"Ň": "N",
					"Ř": "R",
					"Š": "S",
					"Ť": "T",
					"Ů": "U",
					"Ž": "Z"
				},
				"fi": {
					"ä": "a",
					"Ä": "A",
					"ö": "o",
					"Ö": "O"
				},
				"hu": {
					"ä": "a",
					"Ä": "A",
					"ö": "o",
					"Ö": "O",
					"ü": "u",
					"Ü": "U",
					"ű": "u",
					"Ű": "U"
				},
				"lt": {
					"ą": "a",
					"č": "c",
					"ę": "e",
					"ė": "e",
					"į": "i",
					"š": "s",
					"ų": "u",
					"ū": "u",
					"ž": "z",
					"Ą": "A",
					"Č": "C",
					"Ę": "E",
					"Ė": "E",
					"Į": "I",
					"Š": "S",
					"Ų": "U",
					"Ū": "U"
				},
				"lv": {
					"ā": "a",
					"č": "c",
					"ē": "e",
					"ģ": "g",
					"ī": "i",
					"ķ": "k",
					"ļ": "l",
					"ņ": "n",
					"š": "s",
					"ū": "u",
					"ž": "z",
					"Ā": "A",
					"Č": "C",
					"Ē": "E",
					"Ģ": "G",
					"Ī": "i",
					"Ķ": "k",
					"Ļ": "L",
					"Ņ": "N",
					"Š": "S",
					"Ū": "u",
					"Ž": "Z"
				},
				"pl": {
					"ą": "a",
					"ć": "c",
					"ę": "e",
					"ł": "l",
					"ń": "n",
					"ó": "o",
					"ś": "s",
					"ź": "z",
					"ż": "z",
					"Ą": "A",
					"Ć": "C",
					"Ę": "e",
					"Ł": "L",
					"Ń": "N",
					"Ó": "O",
					"Ś": "S",
					"Ź": "Z",
					"Ż": "Z"
				},
				"sv": {
					"ä": "a",
					"Ä": "A",
					"ö": "o",
					"Ö": "O"
				},
				"sk": {
					"ä": "a",
					"Ä": "A"
				},
				"sr": {
					"љ": "lj",
					"њ": "nj",
					"Љ": "Lj",
					"Њ": "Nj",
					"đ": "dj",
					"Đ": "Dj"
				},
				"tr": {
					"Ü": "U",
					"Ö": "O",
					"ü": "u",
					"ö": "o"
				}
			};
			var symbolMap = {
				"ar": {
					"∆": "delta",
					"∞": "la-nihaya",
					"♥": "hob",
					"&": "wa",
					"|": "aw",
					"<": "aqal-men",
					">": "akbar-men",
					"∑": "majmou",
					"¤": "omla"
				},
				"az": {},
				"ca": {
					"∆": "delta",
					"∞": "infinit",
					"♥": "amor",
					"&": "i",
					"|": "o",
					"<": "menys que",
					">": "mes que",
					"∑": "suma dels",
					"¤": "moneda"
				},
				"cs": {
					"∆": "delta",
					"∞": "nekonecno",
					"♥": "laska",
					"&": "a",
					"|": "nebo",
					"<": "mensi nez",
					">": "vetsi nez",
					"∑": "soucet",
					"¤": "mena"
				},
				"de": {
					"∆": "delta",
					"∞": "unendlich",
					"♥": "Liebe",
					"&": "und",
					"|": "oder",
					"<": "kleiner als",
					">": "groesser als",
					"∑": "Summe von",
					"¤": "Waehrung"
				},
				"dv": {
					"∆": "delta",
					"∞": "kolunulaa",
					"♥": "loabi",
					"&": "aai",
					"|": "noonee",
					"<": "ah vure kuda",
					">": "ah vure bodu",
					"∑": "jumula",
					"¤": "faisaa"
				},
				"en": {
					"∆": "delta",
					"∞": "infinity",
					"♥": "love",
					"&": "and",
					"|": "or",
					"<": "less than",
					">": "greater than",
					"∑": "sum",
					"¤": "currency"
				},
				"es": {
					"∆": "delta",
					"∞": "infinito",
					"♥": "amor",
					"&": "y",
					"|": "u",
					"<": "menos que",
					">": "mas que",
					"∑": "suma de los",
					"¤": "moneda"
				},
				"fa": {
					"∆": "delta",
					"∞": "bi-nahayat",
					"♥": "eshgh",
					"&": "va",
					"|": "ya",
					"<": "kamtar-az",
					">": "bishtar-az",
					"∑": "majmooe",
					"¤": "vahed"
				},
				"fi": {
					"∆": "delta",
					"∞": "aarettomyys",
					"♥": "rakkaus",
					"&": "ja",
					"|": "tai",
					"<": "pienempi kuin",
					">": "suurempi kuin",
					"∑": "summa",
					"¤": "valuutta"
				},
				"fr": {
					"∆": "delta",
					"∞": "infiniment",
					"♥": "Amour",
					"&": "et",
					"|": "ou",
					"<": "moins que",
					">": "superieure a",
					"∑": "somme des",
					"¤": "monnaie"
				},
				"ge": {
					"∆": "delta",
					"∞": "usasruloba",
					"♥": "siqvaruli",
					"&": "da",
					"|": "an",
					"<": "naklebi",
					">": "meti",
					"∑": "jami",
					"¤": "valuta"
				},
				"gr": {},
				"hu": {
					"∆": "delta",
					"∞": "vegtelen",
					"♥": "szerelem",
					"&": "es",
					"|": "vagy",
					"<": "kisebb mint",
					">": "nagyobb mint",
					"∑": "szumma",
					"¤": "penznem"
				},
				"it": {
					"∆": "delta",
					"∞": "infinito",
					"♥": "amore",
					"&": "e",
					"|": "o",
					"<": "minore di",
					">": "maggiore di",
					"∑": "somma",
					"¤": "moneta"
				},
				"lt": {
					"∆": "delta",
					"∞": "begalybe",
					"♥": "meile",
					"&": "ir",
					"|": "ar",
					"<": "maziau nei",
					">": "daugiau nei",
					"∑": "suma",
					"¤": "valiuta"
				},
				"lv": {
					"∆": "delta",
					"∞": "bezgaliba",
					"♥": "milestiba",
					"&": "un",
					"|": "vai",
					"<": "mazak neka",
					">": "lielaks neka",
					"∑": "summa",
					"¤": "valuta"
				},
				"my": {
					"∆": "kwahkhyaet",
					"∞": "asaonasme",
					"♥": "akhyait",
					"&": "nhin",
					"|": "tho",
					"<": "ngethaw",
					">": "kyithaw",
					"∑": "paungld",
					"¤": "ngwekye"
				},
				"mk": {},
				"nl": {
					"∆": "delta",
					"∞": "oneindig",
					"♥": "liefde",
					"&": "en",
					"|": "of",
					"<": "kleiner dan",
					">": "groter dan",
					"∑": "som",
					"¤": "valuta"
				},
				"pl": {
					"∆": "delta",
					"∞": "nieskonczonosc",
					"♥": "milosc",
					"&": "i",
					"|": "lub",
					"<": "mniejsze niz",
					">": "wieksze niz",
					"∑": "suma",
					"¤": "waluta"
				},
				"pt": {
					"∆": "delta",
					"∞": "infinito",
					"♥": "amor",
					"&": "e",
					"|": "ou",
					"<": "menor que",
					">": "maior que",
					"∑": "soma",
					"¤": "moeda"
				},
				"ro": {
					"∆": "delta",
					"∞": "infinit",
					"♥": "dragoste",
					"&": "si",
					"|": "sau",
					"<": "mai mic ca",
					">": "mai mare ca",
					"∑": "suma",
					"¤": "valuta"
				},
				"ru": {
					"∆": "delta",
					"∞": "beskonechno",
					"♥": "lubov",
					"&": "i",
					"|": "ili",
					"<": "menshe",
					">": "bolshe",
					"∑": "summa",
					"¤": "valjuta"
				},
				"sk": {
					"∆": "delta",
					"∞": "nekonecno",
					"♥": "laska",
					"&": "a",
					"|": "alebo",
					"<": "menej ako",
					">": "viac ako",
					"∑": "sucet",
					"¤": "mena"
				},
				"sr": {},
				"tr": {
					"∆": "delta",
					"∞": "sonsuzluk",
					"♥": "ask",
					"&": "ve",
					"|": "veya",
					"<": "kucuktur",
					">": "buyuktur",
					"∑": "toplam",
					"¤": "para birimi"
				},
				"uk": {
					"∆": "delta",
					"∞": "bezkinechnist",
					"♥": "lubov",
					"&": "i",
					"|": "abo",
					"<": "menshe",
					">": "bilshe",
					"∑": "suma",
					"¤": "valjuta"
				},
				"vn": {
					"∆": "delta",
					"∞": "vo cuc",
					"♥": "yeu",
					"&": "va",
					"|": "hoac",
					"<": "nho hon",
					">": "lon hon",
					"∑": "tong",
					"¤": "tien te"
				}
			};
			var uricChars = [
				";",
				"?",
				":",
				"@",
				"&",
				"=",
				"+",
				"$",
				",",
				"/"
			].join("");
			var uricNoSlashChars = [
				";",
				"?",
				":",
				"@",
				"&",
				"=",
				"+",
				"$",
				","
			].join("");
			var markChars = [
				".",
				"!",
				"~",
				"*",
				"'",
				"(",
				")"
			].join("");
			var getSlug = function getSlug2(input, opts) {
				var separator = "-";
				var result = "";
				var diatricString = "";
				var convertSymbols = true;
				var customReplacements = {};
				var maintainCase;
				var titleCase;
				var truncate;
				var uricFlag;
				var uricNoSlashFlag;
				var markFlag;
				var symbol;
				var langChar;
				var lucky;
				var i;
				var ch;
				var l;
				var lastCharWasSymbol;
				var lastCharWasDiatric;
				var allowedChars = "";
				if (typeof input !== "string") return "";
				if (typeof opts === "string") separator = opts;
				symbol = symbolMap.en;
				langChar = langCharMap.en;
				if (typeof opts === "object") {
					maintainCase = opts.maintainCase || false;
					customReplacements = opts.custom && typeof opts.custom === "object" ? opts.custom : customReplacements;
					truncate = +opts.truncate > 1 && opts.truncate || false;
					uricFlag = opts.uric || false;
					uricNoSlashFlag = opts.uricNoSlash || false;
					markFlag = opts.mark || false;
					convertSymbols = opts.symbols === false || opts.lang === false ? false : true;
					separator = opts.separator || separator;
					if (uricFlag) allowedChars += uricChars;
					if (uricNoSlashFlag) allowedChars += uricNoSlashChars;
					if (markFlag) allowedChars += markChars;
					symbol = opts.lang && symbolMap[opts.lang] && convertSymbols ? symbolMap[opts.lang] : convertSymbols ? symbolMap.en : {};
					langChar = opts.lang && langCharMap[opts.lang] ? langCharMap[opts.lang] : opts.lang === false || opts.lang === true ? {} : langCharMap.en;
					if (opts.titleCase && typeof opts.titleCase.length === "number" && Array.prototype.toString.call(opts.titleCase)) {
						opts.titleCase.forEach(function(v) {
							customReplacements[v + ""] = v + "";
						});
						titleCase = true;
					} else titleCase = !!opts.titleCase;
					if (opts.custom && typeof opts.custom.length === "number" && Array.prototype.toString.call(opts.custom)) opts.custom.forEach(function(v) {
						customReplacements[v + ""] = v + "";
					});
					Object.keys(customReplacements).forEach(function(v) {
						var r;
						if (v.length > 1) r = new RegExp("\\b" + escapeChars(v) + "\\b", "gi");
						else r = new RegExp(escapeChars(v), "gi");
						input = input.replace(r, customReplacements[v]);
					});
					for (ch in customReplacements) allowedChars += ch;
				}
				allowedChars += separator;
				allowedChars = escapeChars(allowedChars);
				input = input.replace(/(^\s+|\s+$)/g, "");
				lastCharWasSymbol = false;
				lastCharWasDiatric = false;
				for (i = 0, l = input.length; i < l; i++) {
					ch = input[i];
					if (isReplacedCustomChar(ch, customReplacements)) lastCharWasSymbol = false;
					else if (langChar[ch]) {
						ch = lastCharWasSymbol && langChar[ch].match(/[A-Za-z0-9]/) ? " " + langChar[ch] : langChar[ch];
						lastCharWasSymbol = false;
					} else if (ch in charMap) {
						if (i + 1 < l && lookAheadCharArray.indexOf(input[i + 1]) >= 0) {
							diatricString += ch;
							ch = "";
						} else if (lastCharWasDiatric === true) {
							ch = diatricMap[diatricString] + charMap[ch];
							diatricString = "";
						} else ch = lastCharWasSymbol && charMap[ch].match(/[A-Za-z0-9]/) ? " " + charMap[ch] : charMap[ch];
						lastCharWasSymbol = false;
						lastCharWasDiatric = false;
					} else if (ch in diatricMap) {
						diatricString += ch;
						ch = "";
						if (i === l - 1) ch = diatricMap[diatricString];
						lastCharWasDiatric = true;
					} else if (symbol[ch] && !(uricFlag && uricChars.indexOf(ch) !== -1) && !(uricNoSlashFlag && uricNoSlashChars.indexOf(ch) !== -1)) {
						ch = lastCharWasSymbol || result.substr(-1).match(/[A-Za-z0-9]/) ? separator + symbol[ch] : symbol[ch];
						ch += input[i + 1] !== void 0 && input[i + 1].match(/[A-Za-z0-9]/) ? separator : "";
						lastCharWasSymbol = true;
					} else {
						if (lastCharWasDiatric === true) {
							ch = diatricMap[diatricString] + ch;
							diatricString = "";
							lastCharWasDiatric = false;
						} else if (lastCharWasSymbol && (/[A-Za-z0-9]/.test(ch) || result.substr(-1).match(/A-Za-z0-9]/))) ch = " " + ch;
						lastCharWasSymbol = false;
					}
					result += ch.replace(new RegExp("[^\\w\\s" + allowedChars + "_-]", "g"), separator);
				}
				if (titleCase) result = result.replace(/(\w)(\S*)/g, function(_, i2, r) {
					var j = i2.toUpperCase() + (r !== null ? r : "");
					return Object.keys(customReplacements).indexOf(j.toLowerCase()) < 0 ? j : j.toLowerCase();
				});
				result = result.replace(/\s+/g, separator).replace(new RegExp("\\" + separator + "+", "g"), separator).replace(new RegExp("(^\\" + separator + "+|\\" + separator + "+$)", "g"), "");
				if (truncate && result.length > truncate) {
					lucky = result.charAt(truncate) === separator;
					result = result.slice(0, truncate);
					if (!lucky) result = result.slice(0, result.lastIndexOf(separator));
				}
				if (!maintainCase && !titleCase) result = result.toLowerCase();
				return result;
			};
			var createSlug = function createSlug2(opts) {
				return function getSlugWithConfig(input) {
					return getSlug(input, opts);
				};
			};
			var escapeChars = function escapeChars2(input) {
				return input.replace(/[-\\^$*+?.()|[\]{}\/]/g, "\\$&");
			};
			var isReplacedCustomChar = function(ch, customReplacements) {
				for (var c in customReplacements) if (customReplacements[c] === ch) return true;
			};
			if (typeof module2 !== "undefined" && module2.exports) {
				module2.exports = getSlug;
				module2.exports.createSlug = createSlug;
			} else if (typeof define !== "undefined" && define.amd) define([], function() {
				return getSlug;
			});
			else try {
				if (root.getSlug || root.createSlug) throw "speakingurl: globals exists /(getSlug|createSlug)/";
				else {
					root.getSlug = getSlug;
					root.createSlug = createSlug;
				}
			} catch (e) {}
		})(exports2);
	} });
	var require_speakingurl2 = __commonJS({ "../../node_modules/.pnpm/speakingurl@14.0.1/node_modules/speakingurl/index.js"(exports2, module2) {
		"use strict";
		init_cjs_shims();
		module2.exports = require_speakingurl();
	} });
	var index_exports = {};
	__export(index_exports, {
		DevToolsContextHookKeys: () => DevToolsContextHookKeys,
		DevToolsMessagingHookKeys: () => DevToolsMessagingHookKeys,
		DevToolsV6PluginAPIHookKeys: () => DevToolsV6PluginAPIHookKeys,
		INFINITY: () => INFINITY,
		NAN: () => NAN,
		NEGATIVE_INFINITY: () => NEGATIVE_INFINITY,
		ROUTER_INFO_KEY: () => ROUTER_INFO_KEY,
		ROUTER_KEY: () => ROUTER_KEY,
		UNDEFINED: () => UNDEFINED,
		activeAppRecord: () => activeAppRecord,
		addCustomCommand: () => addCustomCommand,
		addCustomTab: () => addCustomTab,
		addDevToolsAppRecord: () => addDevToolsAppRecord,
		addDevToolsPluginToBuffer: () => addDevToolsPluginToBuffer,
		addInspector: () => addInspector,
		callConnectedUpdatedHook: () => callConnectedUpdatedHook,
		callDevToolsPluginSetupFn: () => callDevToolsPluginSetupFn,
		callInspectorUpdatedHook: () => callInspectorUpdatedHook,
		callStateUpdatedHook: () => callStateUpdatedHook,
		createComponentsDevToolsPlugin: () => createComponentsDevToolsPlugin,
		createDevToolsApi: () => createDevToolsApi,
		createDevToolsCtxHooks: () => createDevToolsCtxHooks,
		createRpcClient: () => createRpcClient,
		createRpcProxy: () => createRpcProxy,
		createRpcServer: () => createRpcServer,
		devtools: () => devtools,
		devtoolsAppRecords: () => devtoolsAppRecords,
		devtoolsContext: () => devtoolsContext,
		devtoolsInspector: () => devtoolsInspector,
		devtoolsPluginBuffer: () => devtoolsPluginBuffer,
		devtoolsRouter: () => devtoolsRouter,
		devtoolsRouterInfo: () => devtoolsRouterInfo,
		devtoolsState: () => devtoolsState,
		escape: () => escape,
		formatInspectorStateValue: () => formatInspectorStateValue,
		getActiveInspectors: () => getActiveInspectors,
		getDevToolsEnv: () => getDevToolsEnv,
		getExtensionClientContext: () => getExtensionClientContext,
		getInspector: () => getInspector,
		getInspectorActions: () => getInspectorActions,
		getInspectorInfo: () => getInspectorInfo,
		getInspectorNodeActions: () => getInspectorNodeActions,
		getInspectorStateValueType: () => getInspectorStateValueType,
		getRaw: () => getRaw,
		getRpcClient: () => getRpcClient,
		getRpcServer: () => getRpcServer,
		getViteRpcClient: () => getViteRpcClient,
		getViteRpcServer: () => getViteRpcServer,
		initDevTools: () => initDevTools,
		isPlainObject: () => isPlainObject,
		onDevToolsClientConnected: () => onDevToolsClientConnected,
		onDevToolsConnected: () => onDevToolsConnected,
		parse: () => parse2,
		registerDevToolsPlugin: () => registerDevToolsPlugin,
		removeCustomCommand: () => removeCustomCommand,
		removeDevToolsAppRecord: () => removeDevToolsAppRecord,
		removeRegisteredPluginApp: () => removeRegisteredPluginApp,
		resetDevToolsState: () => resetDevToolsState,
		setActiveAppRecord: () => setActiveAppRecord,
		setActiveAppRecordId: () => setActiveAppRecordId,
		setDevToolsEnv: () => setDevToolsEnv,
		setElectronClientContext: () => setElectronClientContext,
		setElectronProxyContext: () => setElectronProxyContext,
		setElectronServerContext: () => setElectronServerContext,
		setExtensionClientContext: () => setExtensionClientContext,
		setIframeServerContext: () => setIframeServerContext,
		setOpenInEditorBaseUrl: () => setOpenInEditorBaseUrl,
		setRpcServerToGlobal: () => setRpcServerToGlobal,
		setViteClientContext: () => setViteClientContext,
		setViteRpcClientToGlobal: () => setViteRpcClientToGlobal,
		setViteRpcServerToGlobal: () => setViteRpcServerToGlobal,
		setViteServerContext: () => setViteServerContext,
		setupDevToolsPlugin: () => setupDevToolsPlugin,
		stringify: () => stringify2,
		toEdit: () => toEdit,
		toSubmit: () => toSubmit,
		toggleClientConnected: () => toggleClientConnected,
		toggleComponentInspectorEnabled: () => toggleComponentInspectorEnabled,
		toggleHighPerfMode: () => toggleHighPerfMode,
		updateDevToolsClientDetected: () => updateDevToolsClientDetected,
		updateDevToolsState: () => updateDevToolsState,
		updateTimelineLayersState: () => updateTimelineLayersState
	});
	module.exports = __toCommonJS(index_exports);
	init_cjs_shims();
	init_cjs_shims();
	var import_devtools_shared21 = require_dist$5();
	init_cjs_shims();
	var import_devtools_shared = require_dist$5();
	function onLegacyDevToolsPluginApiAvailable(cb) {
		if (import_devtools_shared.target.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__) {
			cb();
			return;
		}
		Object.defineProperty(import_devtools_shared.target, "__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__", {
			set(value) {
				if (value) cb();
			},
			configurable: true
		});
	}
	init_cjs_shims();
	var import_devtools_shared19 = require_dist$5();
	init_cjs_shims();
	var import_devtools_shared17 = require_dist$5();
	init_cjs_shims();
	init_cjs_shims();
	init_cjs_shims();
	var import_devtools_shared2 = require_dist$5();
	function getComponentTypeName(options) {
		var _a25;
		const name = options.name || options._componentTag || options.__VUE_DEVTOOLS_COMPONENT_GUSSED_NAME__ || options.__name;
		if (name === "index" && ((_a25 = options.__file) == null ? void 0 : _a25.endsWith("index.vue"))) return "";
		return name;
	}
	function getComponentFileName(options) {
		const file = options.__file;
		if (file) return (0, import_devtools_shared2.classify)((0, import_devtools_shared2.basename)(file, ".vue"));
	}
	function getComponentName(options) {
		const name = options.displayName || options.name || options._componentTag;
		if (name) return name;
		return getComponentFileName(options);
	}
	function saveComponentGussedName(instance, name) {
		instance.type.__VUE_DEVTOOLS_COMPONENT_GUSSED_NAME__ = name;
		return name;
	}
	function getAppRecord(instance) {
		if (instance.__VUE_DEVTOOLS_NEXT_APP_RECORD__) return instance.__VUE_DEVTOOLS_NEXT_APP_RECORD__;
		else if (instance.root) return instance.appContext.app.__VUE_DEVTOOLS_NEXT_APP_RECORD__;
	}
	async function getComponentId(options) {
		const { app, uid, instance } = options;
		try {
			if (instance.__VUE_DEVTOOLS_NEXT_UID__) return instance.__VUE_DEVTOOLS_NEXT_UID__;
			const appRecord = await getAppRecord(app);
			if (!appRecord) return null;
			const isRoot = appRecord.rootInstance === instance;
			return `${appRecord.id}:${isRoot ? "root" : uid}`;
		} catch (e) {}
	}
	function isFragment(instance) {
		var _a25, _b25;
		const subTreeType = (_a25 = instance.subTree) == null ? void 0 : _a25.type;
		const appRecord = getAppRecord(instance);
		if (appRecord) return ((_b25 = appRecord == null ? void 0 : appRecord.types) == null ? void 0 : _b25.Fragment) === subTreeType;
		return false;
	}
	function isBeingDestroyed(instance) {
		return instance._isBeingDestroyed || instance.isUnmounted;
	}
	function getInstanceName(instance) {
		var _a25, _b25, _c;
		const name = getComponentTypeName((instance == null ? void 0 : instance.type) || {});
		if (name) return name;
		if ((instance == null ? void 0 : instance.root) === instance) return "Root";
		for (const key in (_b25 = (_a25 = instance.parent) == null ? void 0 : _a25.type) == null ? void 0 : _b25.components) if (instance.parent.type.components[key] === (instance == null ? void 0 : instance.type)) return saveComponentGussedName(instance, key);
		for (const key in (_c = instance.appContext) == null ? void 0 : _c.components) if (instance.appContext.components[key] === (instance == null ? void 0 : instance.type)) return saveComponentGussedName(instance, key);
		const fileName = getComponentFileName((instance == null ? void 0 : instance.type) || {});
		if (fileName) return fileName;
		return "Anonymous Component";
	}
	function getUniqueComponentId(instance) {
		var _a25, _b25, _c;
		return `${(_c = (_b25 = (_a25 = instance == null ? void 0 : instance.appContext) == null ? void 0 : _a25.app) == null ? void 0 : _b25.__VUE_DEVTOOLS_NEXT_APP_RECORD_ID__) != null ? _c : 0}:${instance === (instance == null ? void 0 : instance.root) ? "root" : instance.uid}`;
	}
	function getRenderKey(value) {
		if (value == null) return "";
		if (typeof value === "number") return value;
		else if (typeof value === "string") return `'${value}'`;
		else if (Array.isArray(value)) return "Array";
		else return "Object";
	}
	function returnError(cb) {
		try {
			return cb();
		} catch (e) {
			return e;
		}
	}
	function getComponentInstance(appRecord, instanceId) {
		instanceId = instanceId || `${appRecord.id}:root`;
		return appRecord.instanceMap.get(instanceId) || appRecord.instanceMap.get(":root");
	}
	function ensurePropertyExists(obj, key, skipObjCheck = false) {
		return skipObjCheck ? key in obj : typeof obj === "object" && obj !== null ? key in obj : false;
	}
	function createRect() {
		const rect = {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
			get width() {
				return rect.right - rect.left;
			},
			get height() {
				return rect.bottom - rect.top;
			}
		};
		return rect;
	}
	var range;
	function getTextRect(node) {
		if (!range) range = document.createRange();
		range.selectNode(node);
		return range.getBoundingClientRect();
	}
	function getFragmentRect(vnode) {
		const rect = createRect();
		if (!vnode.children) return rect;
		for (let i = 0, l = vnode.children.length; i < l; i++) {
			const childVnode = vnode.children[i];
			let childRect;
			if (childVnode.component) childRect = getComponentBoundingRect(childVnode.component);
			else if (childVnode.el) {
				const el = childVnode.el;
				if (el.nodeType === 1 || el.getBoundingClientRect) childRect = el.getBoundingClientRect();
				else if (el.nodeType === 3 && el.data.trim()) childRect = getTextRect(el);
			}
			if (childRect) mergeRects(rect, childRect);
		}
		return rect;
	}
	function mergeRects(a, b) {
		if (!a.top || b.top < a.top) a.top = b.top;
		if (!a.bottom || b.bottom > a.bottom) a.bottom = b.bottom;
		if (!a.left || b.left < a.left) a.left = b.left;
		if (!a.right || b.right > a.right) a.right = b.right;
		return a;
	}
	var DEFAULT_RECT = {
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		width: 0,
		height: 0
	};
	function getComponentBoundingRect(instance) {
		const el = instance.subTree.el;
		if (typeof window === "undefined") return DEFAULT_RECT;
		if (isFragment(instance)) return getFragmentRect(instance.subTree);
		else if ((el == null ? void 0 : el.nodeType) === 1) return el == null ? void 0 : el.getBoundingClientRect();
		else if (instance.subTree.component) return getComponentBoundingRect(instance.subTree.component);
		else return DEFAULT_RECT;
	}
	init_cjs_shims();
	function getRootElementsFromComponentInstance(instance) {
		if (isFragment(instance)) return getFragmentRootElements(instance.subTree);
		if (!instance.subTree) return [];
		return [instance.subTree.el];
	}
	function getFragmentRootElements(vnode) {
		if (!vnode.children) return [];
		const list = [];
		vnode.children.forEach((childVnode) => {
			if (childVnode.component) list.push(...getRootElementsFromComponentInstance(childVnode.component));
			else if (childVnode == null ? void 0 : childVnode.el) list.push(childVnode.el);
		});
		return list;
	}
	var CONTAINER_ELEMENT_ID = "__vue-devtools-component-inspector__";
	var CARD_ELEMENT_ID = "__vue-devtools-component-inspector__card__";
	var COMPONENT_NAME_ELEMENT_ID = "__vue-devtools-component-inspector__name__";
	var INDICATOR_ELEMENT_ID = "__vue-devtools-component-inspector__indicator__";
	var containerStyles = {
		display: "block",
		zIndex: 2147483640,
		position: "fixed",
		backgroundColor: "#42b88325",
		border: "1px solid #42b88350",
		borderRadius: "5px",
		transition: "all 0.1s ease-in",
		pointerEvents: "none"
	};
	var cardStyles = {
		fontFamily: "Arial, Helvetica, sans-serif",
		padding: "5px 8px",
		borderRadius: "4px",
		textAlign: "left",
		position: "absolute",
		left: 0,
		color: "#e9e9e9",
		fontSize: "14px",
		fontWeight: 600,
		lineHeight: "24px",
		backgroundColor: "#42b883",
		boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)"
	};
	var indicatorStyles = {
		display: "inline-block",
		fontWeight: 400,
		fontStyle: "normal",
		fontSize: "12px",
		opacity: .7
	};
	function getContainerElement() {
		return document.getElementById(CONTAINER_ELEMENT_ID);
	}
	function getCardElement() {
		return document.getElementById(CARD_ELEMENT_ID);
	}
	function getIndicatorElement() {
		return document.getElementById(INDICATOR_ELEMENT_ID);
	}
	function getNameElement() {
		return document.getElementById(COMPONENT_NAME_ELEMENT_ID);
	}
	function getStyles(bounds) {
		return {
			left: `${Math.round(bounds.left * 100) / 100}px`,
			top: `${Math.round(bounds.top * 100) / 100}px`,
			width: `${Math.round(bounds.width * 100) / 100}px`,
			height: `${Math.round(bounds.height * 100) / 100}px`
		};
	}
	function create(options) {
		var _a25;
		const containerEl = document.createElement("div");
		containerEl.id = (_a25 = options.elementId) != null ? _a25 : CONTAINER_ELEMENT_ID;
		Object.assign(containerEl.style, {
			...containerStyles,
			...getStyles(options.bounds),
			...options.style
		});
		const cardEl = document.createElement("span");
		cardEl.id = CARD_ELEMENT_ID;
		Object.assign(cardEl.style, {
			...cardStyles,
			top: options.bounds.top < 35 ? 0 : "-35px"
		});
		const nameEl = document.createElement("span");
		nameEl.id = COMPONENT_NAME_ELEMENT_ID;
		nameEl.innerHTML = `&lt;${options.name}&gt;&nbsp;&nbsp;`;
		const indicatorEl = document.createElement("i");
		indicatorEl.id = INDICATOR_ELEMENT_ID;
		indicatorEl.innerHTML = `${Math.round(options.bounds.width * 100) / 100} x ${Math.round(options.bounds.height * 100) / 100}`;
		Object.assign(indicatorEl.style, indicatorStyles);
		cardEl.appendChild(nameEl);
		cardEl.appendChild(indicatorEl);
		containerEl.appendChild(cardEl);
		document.body.appendChild(containerEl);
		return containerEl;
	}
	function update(options) {
		const containerEl = getContainerElement();
		const cardEl = getCardElement();
		const nameEl = getNameElement();
		const indicatorEl = getIndicatorElement();
		if (containerEl) {
			Object.assign(containerEl.style, {
				...containerStyles,
				...getStyles(options.bounds)
			});
			Object.assign(cardEl.style, { top: options.bounds.top < 35 ? 0 : "-35px" });
			nameEl.innerHTML = `&lt;${options.name}&gt;&nbsp;&nbsp;`;
			indicatorEl.innerHTML = `${Math.round(options.bounds.width * 100) / 100} x ${Math.round(options.bounds.height * 100) / 100}`;
		}
	}
	function highlight(instance) {
		const bounds = getComponentBoundingRect(instance);
		if (!bounds.width && !bounds.height) return;
		const name = getInstanceName(instance);
		getContainerElement() ? update({
			bounds,
			name
		}) : create({
			bounds,
			name
		});
	}
	function unhighlight() {
		const el = getContainerElement();
		if (el) el.style.display = "none";
	}
	var inspectInstance = null;
	function inspectFn(e) {
		const target22 = e.target;
		if (target22) {
			const instance = target22.__vueParentComponent;
			if (instance) {
				inspectInstance = instance;
				if (instance.vnode.el) {
					const bounds = getComponentBoundingRect(instance);
					const name = getInstanceName(instance);
					getContainerElement() ? update({
						bounds,
						name
					}) : create({
						bounds,
						name
					});
				}
			}
		}
	}
	function selectComponentFn(e, cb) {
		e.preventDefault();
		e.stopPropagation();
		if (inspectInstance) cb(getUniqueComponentId(inspectInstance));
	}
	var inspectComponentHighLighterSelectFn = null;
	function cancelInspectComponentHighLighter() {
		unhighlight();
		window.removeEventListener("mouseover", inspectFn);
		window.removeEventListener("click", inspectComponentHighLighterSelectFn, true);
		inspectComponentHighLighterSelectFn = null;
	}
	function inspectComponentHighLighter() {
		window.addEventListener("mouseover", inspectFn);
		return new Promise((resolve) => {
			function onSelect(e) {
				e.preventDefault();
				e.stopPropagation();
				selectComponentFn(e, (id) => {
					window.removeEventListener("click", onSelect, true);
					inspectComponentHighLighterSelectFn = null;
					window.removeEventListener("mouseover", inspectFn);
					const el = getContainerElement();
					if (el) el.style.display = "none";
					resolve(JSON.stringify({ id }));
				});
			}
			inspectComponentHighLighterSelectFn = onSelect;
			window.addEventListener("click", onSelect, true);
		});
	}
	function scrollToComponent(options) {
		const instance = getComponentInstance(activeAppRecord.value, options.id);
		if (instance) {
			const [el] = getRootElementsFromComponentInstance(instance);
			if (typeof el.scrollIntoView === "function") el.scrollIntoView({ behavior: "smooth" });
			else {
				const bounds = getComponentBoundingRect(instance);
				const scrollTarget = document.createElement("div");
				const styles = {
					...getStyles(bounds),
					position: "absolute"
				};
				Object.assign(scrollTarget.style, styles);
				document.body.appendChild(scrollTarget);
				scrollTarget.scrollIntoView({ behavior: "smooth" });
				setTimeout(() => {
					document.body.removeChild(scrollTarget);
				}, 2e3);
			}
			setTimeout(() => {
				const bounds = getComponentBoundingRect(instance);
				if (bounds.width || bounds.height) {
					const name = getInstanceName(instance);
					const el2 = getContainerElement();
					el2 ? update({
						...options,
						name,
						bounds
					}) : create({
						...options,
						name,
						bounds
					});
					setTimeout(() => {
						if (el2) el2.style.display = "none";
					}, 1500);
				}
			}, 1200);
		}
	}
	init_cjs_shims();
	var import_devtools_shared3 = require_dist$5();
	var _a;
	(_a = import_devtools_shared3.target).__VUE_DEVTOOLS_COMPONENT_INSPECTOR_ENABLED__ ?? (_a.__VUE_DEVTOOLS_COMPONENT_INSPECTOR_ENABLED__ = true);
	function toggleComponentInspectorEnabled(enabled) {
		import_devtools_shared3.target.__VUE_DEVTOOLS_COMPONENT_INSPECTOR_ENABLED__ = enabled;
	}
	function waitForInspectorInit(cb) {
		let total = 0;
		const timer = setInterval(() => {
			if (import_devtools_shared3.target.__VUE_INSPECTOR__) {
				clearInterval(timer);
				total += 30;
				cb();
			}
			if (total >= 5e3) clearInterval(timer);
		}, 30);
	}
	function setupInspector() {
		const inspector = import_devtools_shared3.target.__VUE_INSPECTOR__;
		const _openInEditor = inspector.openInEditor;
		inspector.openInEditor = async (...params) => {
			inspector.disable();
			_openInEditor(...params);
		};
	}
	function getComponentInspector() {
		return new Promise((resolve) => {
			function setup() {
				setupInspector();
				resolve(import_devtools_shared3.target.__VUE_INSPECTOR__);
			}
			if (!import_devtools_shared3.target.__VUE_INSPECTOR__) waitForInspectorInit(() => {
				setup();
			});
			else setup();
		});
	}
	init_cjs_shims();
	init_cjs_shims();
	function isReadonly(value) {
		return !!(value && value["__v_isReadonly"]);
	}
	function isReactive(value) {
		if (isReadonly(value)) return isReactive(value["__v_raw"]);
		return !!(value && value["__v_isReactive"]);
	}
	function isRef(r) {
		return !!(r && r.__v_isRef === true);
	}
	function toRaw(observed) {
		const raw = observed && observed["__v_raw"];
		return raw ? toRaw(raw) : observed;
	}
	var StateEditor = class {
		constructor() {
			this.refEditor = new RefStateEditor();
		}
		set(object, path, value, cb) {
			const sections = Array.isArray(path) ? path : path.split(".");
			while (sections.length > 1) {
				const section = sections.shift();
				if (object instanceof Map) object = object.get(section);
				if (object instanceof Set) object = Array.from(object.values())[section];
				else object = object[section];
				if (this.refEditor.isRef(object)) object = this.refEditor.get(object);
			}
			const field = sections[0];
			const item = this.refEditor.get(object)[field];
			if (cb) cb(object, field, value);
			else if (this.refEditor.isRef(item)) this.refEditor.set(item, value);
			else object[field] = value;
		}
		get(object, path) {
			const sections = Array.isArray(path) ? path : path.split(".");
			for (let i = 0; i < sections.length; i++) {
				if (object instanceof Map) object = object.get(sections[i]);
				else object = object[sections[i]];
				if (this.refEditor.isRef(object)) object = this.refEditor.get(object);
				if (!object) return void 0;
			}
			return object;
		}
		has(object, path, parent = false) {
			if (typeof object === "undefined") return false;
			const sections = Array.isArray(path) ? path.slice() : path.split(".");
			const size = !parent ? 1 : 2;
			while (object && sections.length > size) {
				const section = sections.shift();
				object = object[section];
				if (this.refEditor.isRef(object)) object = this.refEditor.get(object);
			}
			return object != null && Object.prototype.hasOwnProperty.call(object, sections[0]);
		}
		createDefaultSetCallback(state) {
			return (object, field, value) => {
				if (state.remove || state.newKey) if (Array.isArray(object)) object.splice(field, 1);
				else if (toRaw(object) instanceof Map) object.delete(field);
				else if (toRaw(object) instanceof Set) object.delete(Array.from(object.values())[field]);
				else Reflect.deleteProperty(object, field);
				if (!state.remove) {
					const target22 = object[state.newKey || field];
					if (this.refEditor.isRef(target22)) this.refEditor.set(target22, value);
					else if (toRaw(object) instanceof Map) object.set(state.newKey || field, value);
					else if (toRaw(object) instanceof Set) object.add(value);
					else object[state.newKey || field] = value;
				}
			};
		}
	};
	var RefStateEditor = class {
		set(ref, value) {
			if (isRef(ref)) ref.value = value;
			else {
				if (ref instanceof Set && Array.isArray(value)) {
					ref.clear();
					value.forEach((v) => ref.add(v));
					return;
				}
				const currentKeys = Object.keys(value);
				if (ref instanceof Map) {
					const previousKeysSet2 = new Set(ref.keys());
					currentKeys.forEach((key) => {
						ref.set(key, Reflect.get(value, key));
						previousKeysSet2.delete(key);
					});
					previousKeysSet2.forEach((key) => ref.delete(key));
					return;
				}
				const previousKeysSet = new Set(Object.keys(ref));
				currentKeys.forEach((key) => {
					Reflect.set(ref, key, Reflect.get(value, key));
					previousKeysSet.delete(key);
				});
				previousKeysSet.forEach((key) => Reflect.deleteProperty(ref, key));
			}
		}
		get(ref) {
			return isRef(ref) ? ref.value : ref;
		}
		isRef(ref) {
			return isRef(ref) || isReactive(ref);
		}
	};
	async function editComponentState(payload, stateEditor2) {
		const { path, nodeId, state, type } = payload;
		const instance = getComponentInstance(activeAppRecord.value, nodeId);
		if (!instance) return;
		const targetPath = path.slice();
		let target22;
		if (Object.keys(instance.props).includes(path[0])) target22 = instance.props;
		else if (instance.devtoolsRawSetupState && Object.keys(instance.devtoolsRawSetupState).includes(path[0])) target22 = instance.devtoolsRawSetupState;
		else if (instance.data && Object.keys(instance.data).includes(path[0])) target22 = instance.data;
		else target22 = instance.proxy;
		if (target22 && targetPath) {
			if (state.type === "object" && type === "reactive") {}
			stateEditor2.set(target22, targetPath, state.value, stateEditor2.createDefaultSetCallback(state));
		}
	}
	var stateEditor = new StateEditor();
	async function editState(payload) {
		editComponentState(payload, stateEditor);
	}
	init_cjs_shims();
	var import_devtools_shared8 = require_dist$5();
	init_cjs_shims();
	var import_devtools_shared7 = require_dist$5();
	var import_perfect_debounce3 = require_dist$4();
	init_cjs_shims();
	var import_devtools_shared4 = require_dist$5();
	var TIMELINE_LAYERS_STATE_STORAGE_ID = "__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS_STATE__";
	function addTimelineLayersStateToStorage(state) {
		if (!import_devtools_shared4.isBrowser || typeof localStorage === "undefined" || localStorage === null) return;
		localStorage.setItem(TIMELINE_LAYERS_STATE_STORAGE_ID, JSON.stringify(state));
	}
	function getTimelineLayersStateFromStorage() {
		if (!import_devtools_shared4.isBrowser || typeof localStorage === "undefined" || localStorage === null) return {
			recordingState: false,
			mouseEventEnabled: false,
			keyboardEventEnabled: false,
			componentEventEnabled: false,
			performanceEventEnabled: false,
			selected: ""
		};
		const state = localStorage.getItem(TIMELINE_LAYERS_STATE_STORAGE_ID);
		return state ? JSON.parse(state) : {
			recordingState: false,
			mouseEventEnabled: false,
			keyboardEventEnabled: false,
			componentEventEnabled: false,
			performanceEventEnabled: false,
			selected: ""
		};
	}
	init_cjs_shims();
	var import_hookable = require_dist$3();
	var import_perfect_debounce2 = require_dist$4();
	init_cjs_shims();
	var import_devtools_shared6 = require_dist$5();
	var import_perfect_debounce = require_dist$4();
	init_cjs_shims();
	var import_devtools_shared5 = require_dist$5();
	var _a2;
	(_a2 = import_devtools_shared5.target).__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS ?? (_a2.__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS = []);
	var devtoolsTimelineLayers = new Proxy(import_devtools_shared5.target.__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS, { get(target22, prop, receiver) {
		return Reflect.get(target22, prop, receiver);
	} });
	function addTimelineLayer(options, descriptor) {
		devtoolsState.timelineLayersState[descriptor.id] = false;
		devtoolsTimelineLayers.push({
			...options,
			descriptorId: descriptor.id,
			appRecord: getAppRecord(descriptor.app)
		});
	}
	function updateTimelineLayersState(state) {
		const updatedState = {
			...devtoolsState.timelineLayersState,
			...state
		};
		addTimelineLayersStateToStorage(updatedState);
		updateDevToolsState({ timelineLayersState: updatedState });
	}
	var _a3;
	(_a3 = import_devtools_shared6.target).__VUE_DEVTOOLS_KIT_INSPECTOR__ ?? (_a3.__VUE_DEVTOOLS_KIT_INSPECTOR__ = []);
	var devtoolsInspector = new Proxy(import_devtools_shared6.target.__VUE_DEVTOOLS_KIT_INSPECTOR__, { get(target22, prop, receiver) {
		return Reflect.get(target22, prop, receiver);
	} });
	var callInspectorUpdatedHook = (0, import_perfect_debounce.debounce)(() => {
		devtoolsContext.hooks.callHook("sendInspectorToClient", getActiveInspectors());
	});
	function addInspector(inspector, descriptor) {
		var _a25, _b25;
		devtoolsInspector.push({
			options: inspector,
			descriptor,
			treeFilterPlaceholder: (_a25 = inspector.treeFilterPlaceholder) != null ? _a25 : "Search tree...",
			stateFilterPlaceholder: (_b25 = inspector.stateFilterPlaceholder) != null ? _b25 : "Search state...",
			treeFilter: "",
			selectedNodeId: "",
			appRecord: getAppRecord(descriptor.app)
		});
		callInspectorUpdatedHook();
	}
	function getActiveInspectors() {
		return devtoolsInspector.filter((inspector) => inspector.descriptor.app === activeAppRecord.value.app).filter((inspector) => inspector.descriptor.id !== "components").map((inspector) => {
			var _a25;
			const descriptor = inspector.descriptor;
			const options = inspector.options;
			return {
				id: options.id,
				label: options.label,
				logo: descriptor.logo,
				icon: `custom-ic-baseline-${(_a25 = options == null ? void 0 : options.icon) == null ? void 0 : _a25.replace(/_/g, "-")}`,
				packageName: descriptor.packageName,
				homepage: descriptor.homepage,
				pluginId: descriptor.id
			};
		});
	}
	function getInspectorInfo(id) {
		const inspector = getInspector(id, activeAppRecord.value.app);
		if (!inspector) return;
		const descriptor = inspector.descriptor;
		const options = inspector.options;
		const timelineLayers = devtoolsTimelineLayers.filter((layer) => layer.descriptorId === descriptor.id).map((item) => ({
			id: item.id,
			label: item.label,
			color: item.color
		}));
		return {
			id: options.id,
			label: options.label,
			logo: descriptor.logo,
			packageName: descriptor.packageName,
			homepage: descriptor.homepage,
			timelineLayers,
			treeFilterPlaceholder: inspector.treeFilterPlaceholder,
			stateFilterPlaceholder: inspector.stateFilterPlaceholder
		};
	}
	function getInspector(id, app) {
		return devtoolsInspector.find((inspector) => inspector.options.id === id && (app ? inspector.descriptor.app === app : true));
	}
	function getInspectorActions(id) {
		const inspector = getInspector(id);
		return inspector == null ? void 0 : inspector.options.actions;
	}
	function getInspectorNodeActions(id) {
		const inspector = getInspector(id);
		return inspector == null ? void 0 : inspector.options.nodeActions;
	}
	var DevToolsV6PluginAPIHookKeys = /* @__PURE__ */ ((DevToolsV6PluginAPIHookKeys2) => {
		DevToolsV6PluginAPIHookKeys2["VISIT_COMPONENT_TREE"] = "visitComponentTree";
		DevToolsV6PluginAPIHookKeys2["INSPECT_COMPONENT"] = "inspectComponent";
		DevToolsV6PluginAPIHookKeys2["EDIT_COMPONENT_STATE"] = "editComponentState";
		DevToolsV6PluginAPIHookKeys2["GET_INSPECTOR_TREE"] = "getInspectorTree";
		DevToolsV6PluginAPIHookKeys2["GET_INSPECTOR_STATE"] = "getInspectorState";
		DevToolsV6PluginAPIHookKeys2["EDIT_INSPECTOR_STATE"] = "editInspectorState";
		DevToolsV6PluginAPIHookKeys2["INSPECT_TIMELINE_EVENT"] = "inspectTimelineEvent";
		DevToolsV6PluginAPIHookKeys2["TIMELINE_CLEARED"] = "timelineCleared";
		DevToolsV6PluginAPIHookKeys2["SET_PLUGIN_SETTINGS"] = "setPluginSettings";
		return DevToolsV6PluginAPIHookKeys2;
	})(DevToolsV6PluginAPIHookKeys || {});
	var DevToolsContextHookKeys = /* @__PURE__ */ ((DevToolsContextHookKeys2) => {
		DevToolsContextHookKeys2["ADD_INSPECTOR"] = "addInspector";
		DevToolsContextHookKeys2["SEND_INSPECTOR_TREE"] = "sendInspectorTree";
		DevToolsContextHookKeys2["SEND_INSPECTOR_STATE"] = "sendInspectorState";
		DevToolsContextHookKeys2["CUSTOM_INSPECTOR_SELECT_NODE"] = "customInspectorSelectNode";
		DevToolsContextHookKeys2["TIMELINE_LAYER_ADDED"] = "timelineLayerAdded";
		DevToolsContextHookKeys2["TIMELINE_EVENT_ADDED"] = "timelineEventAdded";
		DevToolsContextHookKeys2["GET_COMPONENT_INSTANCES"] = "getComponentInstances";
		DevToolsContextHookKeys2["GET_COMPONENT_BOUNDS"] = "getComponentBounds";
		DevToolsContextHookKeys2["GET_COMPONENT_NAME"] = "getComponentName";
		DevToolsContextHookKeys2["COMPONENT_HIGHLIGHT"] = "componentHighlight";
		DevToolsContextHookKeys2["COMPONENT_UNHIGHLIGHT"] = "componentUnhighlight";
		return DevToolsContextHookKeys2;
	})(DevToolsContextHookKeys || {});
	var DevToolsMessagingHookKeys = /* @__PURE__ */ ((DevToolsMessagingHookKeys2) => {
		DevToolsMessagingHookKeys2["SEND_INSPECTOR_TREE_TO_CLIENT"] = "sendInspectorTreeToClient";
		DevToolsMessagingHookKeys2["SEND_INSPECTOR_STATE_TO_CLIENT"] = "sendInspectorStateToClient";
		DevToolsMessagingHookKeys2["SEND_TIMELINE_EVENT_TO_CLIENT"] = "sendTimelineEventToClient";
		DevToolsMessagingHookKeys2["SEND_INSPECTOR_TO_CLIENT"] = "sendInspectorToClient";
		DevToolsMessagingHookKeys2["SEND_ACTIVE_APP_UNMOUNTED_TO_CLIENT"] = "sendActiveAppUpdatedToClient";
		DevToolsMessagingHookKeys2["DEVTOOLS_STATE_UPDATED"] = "devtoolsStateUpdated";
		DevToolsMessagingHookKeys2["DEVTOOLS_CONNECTED_UPDATED"] = "devtoolsConnectedUpdated";
		DevToolsMessagingHookKeys2["ROUTER_INFO_UPDATED"] = "routerInfoUpdated";
		return DevToolsMessagingHookKeys2;
	})(DevToolsMessagingHookKeys || {});
	function createDevToolsCtxHooks() {
		const hooks2 = (0, import_hookable.createHooks)();
		hooks2.hook("addInspector", ({ inspector, plugin }) => {
			addInspector(inspector, plugin.descriptor);
		});
		const debounceSendInspectorTree = (0, import_perfect_debounce2.debounce)(async ({ inspectorId, plugin }) => {
			var _a25;
			if (!inspectorId || !((_a25 = plugin == null ? void 0 : plugin.descriptor) == null ? void 0 : _a25.app) || devtoolsState.highPerfModeEnabled) return;
			const inspector = getInspector(inspectorId, plugin.descriptor.app);
			const _payload = {
				app: plugin.descriptor.app,
				inspectorId,
				filter: (inspector == null ? void 0 : inspector.treeFilter) || "",
				rootNodes: []
			};
			await new Promise((resolve) => {
				hooks2.callHookWith(async (callbacks) => {
					await Promise.all(callbacks.map((cb) => cb(_payload)));
					resolve();
				}, "getInspectorTree");
			});
			hooks2.callHookWith(async (callbacks) => {
				await Promise.all(callbacks.map((cb) => cb({
					inspectorId,
					rootNodes: _payload.rootNodes
				})));
			}, "sendInspectorTreeToClient");
		}, 120);
		hooks2.hook("sendInspectorTree", debounceSendInspectorTree);
		const debounceSendInspectorState = (0, import_perfect_debounce2.debounce)(async ({ inspectorId, plugin }) => {
			var _a25;
			if (!inspectorId || !((_a25 = plugin == null ? void 0 : plugin.descriptor) == null ? void 0 : _a25.app) || devtoolsState.highPerfModeEnabled) return;
			const inspector = getInspector(inspectorId, plugin.descriptor.app);
			const _payload = {
				app: plugin.descriptor.app,
				inspectorId,
				nodeId: (inspector == null ? void 0 : inspector.selectedNodeId) || "",
				state: null
			};
			const ctx = { currentTab: `custom-inspector:${inspectorId}` };
			if (_payload.nodeId) await new Promise((resolve) => {
				hooks2.callHookWith(async (callbacks) => {
					await Promise.all(callbacks.map((cb) => cb(_payload, ctx)));
					resolve();
				}, "getInspectorState");
			});
			hooks2.callHookWith(async (callbacks) => {
				await Promise.all(callbacks.map((cb) => cb({
					inspectorId,
					nodeId: _payload.nodeId,
					state: _payload.state
				})));
			}, "sendInspectorStateToClient");
		}, 120);
		hooks2.hook("sendInspectorState", debounceSendInspectorState);
		hooks2.hook("customInspectorSelectNode", ({ inspectorId, nodeId, plugin }) => {
			const inspector = getInspector(inspectorId, plugin.descriptor.app);
			if (!inspector) return;
			inspector.selectedNodeId = nodeId;
		});
		hooks2.hook("timelineLayerAdded", ({ options, plugin }) => {
			addTimelineLayer(options, plugin.descriptor);
		});
		hooks2.hook("timelineEventAdded", ({ options, plugin }) => {
			var _a25;
			if (devtoolsState.highPerfModeEnabled || !((_a25 = devtoolsState.timelineLayersState) == null ? void 0 : _a25[plugin.descriptor.id]) && ![
				"performance",
				"component-event",
				"keyboard",
				"mouse"
			].includes(options.layerId)) return;
			hooks2.callHookWith(async (callbacks) => {
				await Promise.all(callbacks.map((cb) => cb(options)));
			}, "sendTimelineEventToClient");
		});
		hooks2.hook("getComponentInstances", async ({ app }) => {
			const appRecord = app.__VUE_DEVTOOLS_NEXT_APP_RECORD__;
			if (!appRecord) return null;
			const appId = appRecord.id.toString();
			return [...appRecord.instanceMap].filter(([key]) => key.split(":")[0] === appId).map(([, instance]) => instance);
		});
		hooks2.hook("getComponentBounds", async ({ instance }) => {
			return getComponentBoundingRect(instance);
		});
		hooks2.hook("getComponentName", ({ instance }) => {
			return getInstanceName(instance);
		});
		hooks2.hook("componentHighlight", ({ uid }) => {
			const instance = activeAppRecord.value.instanceMap.get(uid);
			if (instance) highlight(instance);
		});
		hooks2.hook("componentUnhighlight", () => {
			unhighlight();
		});
		return hooks2;
	}
	var _a4;
	(_a4 = import_devtools_shared7.target).__VUE_DEVTOOLS_KIT_APP_RECORDS__ ?? (_a4.__VUE_DEVTOOLS_KIT_APP_RECORDS__ = []);
	var _a5;
	(_a5 = import_devtools_shared7.target).__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__ ?? (_a5.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__ = {});
	var _a6;
	(_a6 = import_devtools_shared7.target).__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__ ?? (_a6.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__ = "");
	var _a7;
	(_a7 = import_devtools_shared7.target).__VUE_DEVTOOLS_KIT_CUSTOM_TABS__ ?? (_a7.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__ = []);
	var _a8;
	(_a8 = import_devtools_shared7.target).__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__ ?? (_a8.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__ = []);
	var STATE_KEY = "__VUE_DEVTOOLS_KIT_GLOBAL_STATE__";
	function initStateFactory() {
		return {
			connected: false,
			clientConnected: false,
			vitePluginDetected: true,
			appRecords: [],
			activeAppRecordId: "",
			tabs: [],
			commands: [],
			highPerfModeEnabled: true,
			devtoolsClientDetected: {},
			perfUniqueGroupId: 0,
			timelineLayersState: getTimelineLayersStateFromStorage()
		};
	}
	var _a9;
	(_a9 = import_devtools_shared7.target)[STATE_KEY] ?? (_a9[STATE_KEY] = initStateFactory());
	var callStateUpdatedHook = (0, import_perfect_debounce3.debounce)((state) => {
		devtoolsContext.hooks.callHook("devtoolsStateUpdated", { state });
	});
	var callConnectedUpdatedHook = (0, import_perfect_debounce3.debounce)((state, oldState) => {
		devtoolsContext.hooks.callHook("devtoolsConnectedUpdated", {
			state,
			oldState
		});
	});
	var devtoolsAppRecords = new Proxy(import_devtools_shared7.target.__VUE_DEVTOOLS_KIT_APP_RECORDS__, { get(_target, prop, receiver) {
		if (prop === "value") return import_devtools_shared7.target.__VUE_DEVTOOLS_KIT_APP_RECORDS__;
		return import_devtools_shared7.target.__VUE_DEVTOOLS_KIT_APP_RECORDS__[prop];
	} });
	var addDevToolsAppRecord = (app) => {
		import_devtools_shared7.target.__VUE_DEVTOOLS_KIT_APP_RECORDS__ = [...import_devtools_shared7.target.__VUE_DEVTOOLS_KIT_APP_RECORDS__, app];
	};
	var removeDevToolsAppRecord = (app) => {
		import_devtools_shared7.target.__VUE_DEVTOOLS_KIT_APP_RECORDS__ = devtoolsAppRecords.value.filter((record) => record.app !== app);
	};
	var activeAppRecord = new Proxy(import_devtools_shared7.target.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__, { get(_target, prop, receiver) {
		if (prop === "value") return import_devtools_shared7.target.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__;
		else if (prop === "id") return import_devtools_shared7.target.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__;
		return import_devtools_shared7.target.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__[prop];
	} });
	function updateAllStates() {
		callStateUpdatedHook({
			...import_devtools_shared7.target[STATE_KEY],
			appRecords: devtoolsAppRecords.value,
			activeAppRecordId: activeAppRecord.id,
			tabs: import_devtools_shared7.target.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__,
			commands: import_devtools_shared7.target.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__
		});
	}
	function setActiveAppRecord(app) {
		import_devtools_shared7.target.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__ = app;
		updateAllStates();
	}
	function setActiveAppRecordId(id) {
		import_devtools_shared7.target.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__ = id;
		updateAllStates();
	}
	var devtoolsState = new Proxy(import_devtools_shared7.target[STATE_KEY], {
		get(target22, property) {
			if (property === "appRecords") return devtoolsAppRecords;
			else if (property === "activeAppRecordId") return activeAppRecord.id;
			else if (property === "tabs") return import_devtools_shared7.target.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__;
			else if (property === "commands") return import_devtools_shared7.target.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__;
			return import_devtools_shared7.target[STATE_KEY][property];
		},
		deleteProperty(target22, property) {
			delete target22[property];
			return true;
		},
		set(target22, property, value) {
			({ ...import_devtools_shared7.target[STATE_KEY] });
			target22[property] = value;
			import_devtools_shared7.target[STATE_KEY][property] = value;
			return true;
		}
	});
	function resetDevToolsState() {
		Object.assign(import_devtools_shared7.target[STATE_KEY], initStateFactory());
	}
	function updateDevToolsState(state) {
		const oldState = {
			...import_devtools_shared7.target[STATE_KEY],
			appRecords: devtoolsAppRecords.value,
			activeAppRecordId: activeAppRecord.id
		};
		if (oldState.connected !== state.connected && state.connected || oldState.clientConnected !== state.clientConnected && state.clientConnected) callConnectedUpdatedHook(import_devtools_shared7.target[STATE_KEY], oldState);
		Object.assign(import_devtools_shared7.target[STATE_KEY], state);
		updateAllStates();
	}
	function onDevToolsConnected(fn) {
		return new Promise((resolve) => {
			if (devtoolsState.connected) {
				fn();
				resolve();
			}
			devtoolsContext.hooks.hook("devtoolsConnectedUpdated", ({ state }) => {
				if (state.connected) {
					fn();
					resolve();
				}
			});
		});
	}
	var resolveIcon = (icon) => {
		if (!icon) return;
		if (icon.startsWith("baseline-")) return `custom-ic-${icon}`;
		if (icon.startsWith("i-") || (0, import_devtools_shared7.isUrlString)(icon)) return icon;
		return `custom-ic-baseline-${icon}`;
	};
	function addCustomTab(tab) {
		const tabs = import_devtools_shared7.target.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__;
		if (tabs.some((t) => t.name === tab.name)) return;
		tabs.push({
			...tab,
			icon: resolveIcon(tab.icon)
		});
		updateAllStates();
	}
	function addCustomCommand(action) {
		const commands = import_devtools_shared7.target.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__;
		if (commands.some((t) => t.id === action.id)) return;
		commands.push({
			...action,
			icon: resolveIcon(action.icon),
			children: action.children ? action.children.map((child) => ({
				...child,
				icon: resolveIcon(child.icon)
			})) : void 0
		});
		updateAllStates();
	}
	function removeCustomCommand(actionId) {
		const commands = import_devtools_shared7.target.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__;
		const index = commands.findIndex((t) => t.id === actionId);
		if (index === -1) return;
		commands.splice(index, 1);
		updateAllStates();
	}
	function toggleClientConnected(state) {
		updateDevToolsState({ clientConnected: state });
	}
	function setOpenInEditorBaseUrl(url) {
		import_devtools_shared8.target.__VUE_DEVTOOLS_OPEN_IN_EDITOR_BASE_URL__ = url;
	}
	function openInEditor(options = {}) {
		var _a25, _b25, _c;
		const { file, host, baseUrl = window.location.origin, line = 0, column = 0 } = options;
		if (file) {
			if (host === "chrome-extension") {
				const fileName = file.replace(/\\/g, "\\\\");
				const _baseUrl = (_b25 = (_a25 = window.VUE_DEVTOOLS_CONFIG) == null ? void 0 : _a25.openInEditorHost) != null ? _b25 : "/";
				fetch(`${_baseUrl}__open-in-editor?file=${encodeURI(file)}`).then((response) => {
					if (!response.ok) {
						const msg = `Opening component ${fileName} failed`;
						console.log(`%c${msg}`, "color:red");
					}
				});
			} else if (devtoolsState.vitePluginDetected) {
				const _baseUrl = (_c = import_devtools_shared8.target.__VUE_DEVTOOLS_OPEN_IN_EDITOR_BASE_URL__) != null ? _c : baseUrl;
				import_devtools_shared8.target.__VUE_INSPECTOR__.openInEditor(_baseUrl, file, line, column);
			}
		}
	}
	init_cjs_shims();
	var import_devtools_shared14 = require_dist$5();
	init_cjs_shims();
	init_cjs_shims();
	init_cjs_shims();
	init_cjs_shims();
	var import_devtools_shared9 = require_dist$5();
	var _a10;
	(_a10 = import_devtools_shared9.target).__VUE_DEVTOOLS_KIT_PLUGIN_BUFFER__ ?? (_a10.__VUE_DEVTOOLS_KIT_PLUGIN_BUFFER__ = []);
	var devtoolsPluginBuffer = new Proxy(import_devtools_shared9.target.__VUE_DEVTOOLS_KIT_PLUGIN_BUFFER__, { get(target22, prop, receiver) {
		return Reflect.get(target22, prop, receiver);
	} });
	function addDevToolsPluginToBuffer(pluginDescriptor, setupFn) {
		devtoolsPluginBuffer.push([pluginDescriptor, setupFn]);
	}
	function _getSettings(settings) {
		const _settings = {};
		Object.keys(settings).forEach((key) => {
			_settings[key] = settings[key].defaultValue;
		});
		return _settings;
	}
	function getPluginLocalKey(pluginId) {
		return `__VUE_DEVTOOLS_NEXT_PLUGIN_SETTINGS__${pluginId}__`;
	}
	function getPluginSettingsOptions(pluginId) {
		var _a25, _b25, _c;
		const item = (_b25 = (_a25 = devtoolsPluginBuffer.find((item2) => {
			var _a26;
			return item2[0].id === pluginId && !!((_a26 = item2[0]) == null ? void 0 : _a26.settings);
		})) == null ? void 0 : _a25[0]) != null ? _b25 : null;
		return (_c = item == null ? void 0 : item.settings) != null ? _c : null;
	}
	function getPluginSettings(pluginId, fallbackValue) {
		var _a25, _b25, _c;
		const localKey = getPluginLocalKey(pluginId);
		if (localKey) {
			const localSettings = localStorage.getItem(localKey);
			if (localSettings) return JSON.parse(localSettings);
		}
		if (pluginId) {
			const item = (_b25 = (_a25 = devtoolsPluginBuffer.find((item2) => item2[0].id === pluginId)) == null ? void 0 : _a25[0]) != null ? _b25 : null;
			return _getSettings((_c = item == null ? void 0 : item.settings) != null ? _c : {});
		}
		return _getSettings(fallbackValue);
	}
	function initPluginSettings(pluginId, settings) {
		const localKey = getPluginLocalKey(pluginId);
		if (!localStorage.getItem(localKey)) localStorage.setItem(localKey, JSON.stringify(_getSettings(settings)));
	}
	function setPluginSettings(pluginId, key, value) {
		const localKey = getPluginLocalKey(pluginId);
		const localSettings = localStorage.getItem(localKey);
		const parsedLocalSettings = JSON.parse(localSettings || "{}");
		const updated = {
			...parsedLocalSettings,
			[key]: value
		};
		localStorage.setItem(localKey, JSON.stringify(updated));
		devtoolsContext.hooks.callHookWith((callbacks) => {
			callbacks.forEach((cb) => cb({
				pluginId,
				key,
				oldValue: parsedLocalSettings[key],
				newValue: value,
				settings: updated
			}));
		}, "setPluginSettings");
	}
	init_cjs_shims();
	var import_devtools_shared10 = require_dist$5();
	var import_hookable2 = require_dist$3();
	init_cjs_shims();
	init_cjs_shims();
	init_cjs_shims();
	init_cjs_shims();
	init_cjs_shims();
	init_cjs_shims();
	init_cjs_shims();
	init_cjs_shims();
	init_cjs_shims();
	init_cjs_shims();
	var _a11;
	var _b11;
	var devtoolsHooks = (_b11 = (_a11 = import_devtools_shared10.target).__VUE_DEVTOOLS_HOOK) != null ? _b11 : _a11.__VUE_DEVTOOLS_HOOK = (0, import_hookable2.createHooks)();
	var on = {
		vueAppInit(fn) {
			devtoolsHooks.hook("app:init", fn);
		},
		vueAppUnmount(fn) {
			devtoolsHooks.hook("app:unmount", fn);
		},
		vueAppConnected(fn) {
			devtoolsHooks.hook("app:connected", fn);
		},
		componentAdded(fn) {
			return devtoolsHooks.hook("component:added", fn);
		},
		componentEmit(fn) {
			return devtoolsHooks.hook("component:emit", fn);
		},
		componentUpdated(fn) {
			return devtoolsHooks.hook("component:updated", fn);
		},
		componentRemoved(fn) {
			return devtoolsHooks.hook("component:removed", fn);
		},
		setupDevtoolsPlugin(fn) {
			devtoolsHooks.hook("devtools-plugin:setup", fn);
		},
		perfStart(fn) {
			return devtoolsHooks.hook("perf:start", fn);
		},
		perfEnd(fn) {
			return devtoolsHooks.hook("perf:end", fn);
		}
	};
	function createDevToolsHook() {
		return {
			id: "vue-devtools-next",
			devtoolsVersion: "7.0",
			enabled: false,
			appRecords: [],
			apps: [],
			events: /* @__PURE__ */ new Map(),
			on(event, fn) {
				var _a25;
				if (!this.events.has(event)) this.events.set(event, []);
				(_a25 = this.events.get(event)) == null || _a25.push(fn);
				return () => this.off(event, fn);
			},
			once(event, fn) {
				const onceFn = (...args) => {
					this.off(event, onceFn);
					fn(...args);
				};
				this.on(event, onceFn);
				return [event, onceFn];
			},
			off(event, fn) {
				if (this.events.has(event)) {
					const eventCallbacks = this.events.get(event);
					const index = eventCallbacks.indexOf(fn);
					if (index !== -1) eventCallbacks.splice(index, 1);
				}
			},
			emit(event, ...payload) {
				if (this.events.has(event)) this.events.get(event).forEach((fn) => fn(...payload));
			}
		};
	}
	function subscribeDevToolsHook(hook2) {
		hook2.on("app:init", (app, version, types) => {
			var _a25, _b25, _c;
			if ((_c = (_b25 = (_a25 = app == null ? void 0 : app._instance) == null ? void 0 : _a25.type) == null ? void 0 : _b25.devtools) == null ? void 0 : _c.hide) return;
			devtoolsHooks.callHook("app:init", app, version, types);
		});
		hook2.on("app:unmount", (app) => {
			devtoolsHooks.callHook("app:unmount", app);
		});
		hook2.on("component:added", async (app, uid, parentUid, component) => {
			var _a25, _b25, _c;
			if (((_c = (_b25 = (_a25 = app == null ? void 0 : app._instance) == null ? void 0 : _a25.type) == null ? void 0 : _b25.devtools) == null ? void 0 : _c.hide) || devtoolsState.highPerfModeEnabled) return;
			if (!app || typeof uid !== "number" && !uid || !component) return;
			devtoolsHooks.callHook("component:added", app, uid, parentUid, component);
		});
		hook2.on("component:updated", (app, uid, parentUid, component) => {
			if (!app || typeof uid !== "number" && !uid || !component || devtoolsState.highPerfModeEnabled) return;
			devtoolsHooks.callHook("component:updated", app, uid, parentUid, component);
		});
		hook2.on("component:removed", async (app, uid, parentUid, component) => {
			if (!app || typeof uid !== "number" && !uid || !component || devtoolsState.highPerfModeEnabled) return;
			devtoolsHooks.callHook("component:removed", app, uid, parentUid, component);
		});
		hook2.on("component:emit", async (app, instance, event, params) => {
			if (!app || !instance || devtoolsState.highPerfModeEnabled) return;
			devtoolsHooks.callHook("component:emit", app, instance, event, params);
		});
		hook2.on("perf:start", (app, uid, vm, type, time) => {
			if (!app || devtoolsState.highPerfModeEnabled) return;
			devtoolsHooks.callHook("perf:start", app, uid, vm, type, time);
		});
		hook2.on("perf:end", (app, uid, vm, type, time) => {
			if (!app || devtoolsState.highPerfModeEnabled) return;
			devtoolsHooks.callHook("perf:end", app, uid, vm, type, time);
		});
		hook2.on("devtools-plugin:setup", (pluginDescriptor, setupFn, options) => {
			if ((options == null ? void 0 : options.target) === "legacy") return;
			devtoolsHooks.callHook("devtools-plugin:setup", pluginDescriptor, setupFn);
		});
	}
	var hook = {
		on,
		setupDevToolsPlugin(pluginDescriptor, setupFn) {
			return devtoolsHooks.callHook("devtools-plugin:setup", pluginDescriptor, setupFn);
		}
	};
	var DevToolsV6PluginAPI = class {
		constructor({ plugin, ctx }) {
			this.hooks = ctx.hooks;
			this.plugin = plugin;
		}
		get on() {
			return {
				visitComponentTree: (handler) => {
					this.hooks.hook("visitComponentTree", handler);
				},
				inspectComponent: (handler) => {
					this.hooks.hook("inspectComponent", handler);
				},
				editComponentState: (handler) => {
					this.hooks.hook("editComponentState", handler);
				},
				getInspectorTree: (handler) => {
					this.hooks.hook("getInspectorTree", handler);
				},
				getInspectorState: (handler) => {
					this.hooks.hook("getInspectorState", handler);
				},
				editInspectorState: (handler) => {
					this.hooks.hook("editInspectorState", handler);
				},
				inspectTimelineEvent: (handler) => {
					this.hooks.hook("inspectTimelineEvent", handler);
				},
				timelineCleared: (handler) => {
					this.hooks.hook("timelineCleared", handler);
				},
				setPluginSettings: (handler) => {
					this.hooks.hook("setPluginSettings", handler);
				}
			};
		}
		notifyComponentUpdate(instance) {
			var _a25;
			if (devtoolsState.highPerfModeEnabled) return;
			const inspector = getActiveInspectors().find((i) => i.packageName === this.plugin.descriptor.packageName);
			if (inspector == null ? void 0 : inspector.id) {
				if (instance) {
					const args = [
						instance.appContext.app,
						instance.uid,
						(_a25 = instance.parent) == null ? void 0 : _a25.uid,
						instance
					];
					devtoolsHooks.callHook("component:updated", ...args);
				} else devtoolsHooks.callHook("component:updated");
				this.hooks.callHook("sendInspectorState", {
					inspectorId: inspector.id,
					plugin: this.plugin
				});
			}
		}
		addInspector(options) {
			this.hooks.callHook("addInspector", {
				inspector: options,
				plugin: this.plugin
			});
			if (this.plugin.descriptor.settings) initPluginSettings(options.id, this.plugin.descriptor.settings);
		}
		sendInspectorTree(inspectorId) {
			if (devtoolsState.highPerfModeEnabled) return;
			this.hooks.callHook("sendInspectorTree", {
				inspectorId,
				plugin: this.plugin
			});
		}
		sendInspectorState(inspectorId) {
			if (devtoolsState.highPerfModeEnabled) return;
			this.hooks.callHook("sendInspectorState", {
				inspectorId,
				plugin: this.plugin
			});
		}
		selectInspectorNode(inspectorId, nodeId) {
			this.hooks.callHook("customInspectorSelectNode", {
				inspectorId,
				nodeId,
				plugin: this.plugin
			});
		}
		visitComponentTree(payload) {
			return this.hooks.callHook("visitComponentTree", payload);
		}
		now() {
			if (devtoolsState.highPerfModeEnabled) return 0;
			return Date.now();
		}
		addTimelineLayer(options) {
			this.hooks.callHook("timelineLayerAdded", {
				options,
				plugin: this.plugin
			});
		}
		addTimelineEvent(options) {
			if (devtoolsState.highPerfModeEnabled) return;
			this.hooks.callHook("timelineEventAdded", {
				options,
				plugin: this.plugin
			});
		}
		getSettings(pluginId) {
			return getPluginSettings(pluginId != null ? pluginId : this.plugin.descriptor.id, this.plugin.descriptor.settings);
		}
		getComponentInstances(app) {
			return this.hooks.callHook("getComponentInstances", { app });
		}
		getComponentBounds(instance) {
			return this.hooks.callHook("getComponentBounds", { instance });
		}
		getComponentName(instance) {
			return this.hooks.callHook("getComponentName", { instance });
		}
		highlightElement(instance) {
			const uid = instance.__VUE_DEVTOOLS_NEXT_UID__;
			return this.hooks.callHook("componentHighlight", { uid });
		}
		unhighlightElement() {
			return this.hooks.callHook("componentUnhighlight");
		}
	};
	var DevToolsPluginAPI = DevToolsV6PluginAPI;
	init_cjs_shims();
	var import_perfect_debounce4 = require_dist$4();
	init_cjs_shims();
	init_cjs_shims();
	var import_devtools_shared11 = require_dist$5();
	init_cjs_shims();
	var vueBuiltins = /* @__PURE__ */ new Set([
		"nextTick",
		"defineComponent",
		"defineAsyncComponent",
		"defineCustomElement",
		"ref",
		"computed",
		"reactive",
		"readonly",
		"watchEffect",
		"watchPostEffect",
		"watchSyncEffect",
		"watch",
		"isRef",
		"unref",
		"toRef",
		"toRefs",
		"isProxy",
		"isReactive",
		"isReadonly",
		"shallowRef",
		"triggerRef",
		"customRef",
		"shallowReactive",
		"shallowReadonly",
		"toRaw",
		"markRaw",
		"effectScope",
		"getCurrentScope",
		"onScopeDispose",
		"onMounted",
		"onUpdated",
		"onUnmounted",
		"onBeforeMount",
		"onBeforeUpdate",
		"onBeforeUnmount",
		"onErrorCaptured",
		"onRenderTracked",
		"onRenderTriggered",
		"onActivated",
		"onDeactivated",
		"onServerPrefetch",
		"provide",
		"inject",
		"h",
		"mergeProps",
		"cloneVNode",
		"isVNode",
		"resolveComponent",
		"resolveDirective",
		"withDirectives",
		"withModifiers"
	]);
	var symbolRE = /^\[native Symbol Symbol\((.*)\)\]$/;
	var rawTypeRE = /^\[object (\w+)\]$/;
	var specialTypeRE = /^\[native (\w+) (.*?)(<>(([\s\S])*))?\]$/;
	var fnTypeRE = /^(?:function|class) (\w+)/;
	var MAX_STRING_SIZE = 1e4;
	var MAX_ARRAY_SIZE = 5e3;
	var UNDEFINED = "__vue_devtool_undefined__";
	var INFINITY = "__vue_devtool_infinity__";
	var NEGATIVE_INFINITY = "__vue_devtool_negative_infinity__";
	var NAN = "__vue_devtool_nan__";
	var ESC = {
		"<": "&lt;",
		">": "&gt;",
		"\"": "&quot;",
		"&": "&amp;"
	};
	init_cjs_shims();
	init_cjs_shims();
	function isVueInstance(value) {
		if (!ensurePropertyExists(value, "_")) return false;
		if (!isPlainObject(value._)) return false;
		return Object.keys(value._).includes("vnode");
	}
	function isPlainObject(obj) {
		return Object.prototype.toString.call(obj) === "[object Object]";
	}
	function isPrimitive(data) {
		if (data == null) return true;
		const type = typeof data;
		return type === "string" || type === "number" || type === "boolean";
	}
	function isRef2(raw) {
		return !!raw.__v_isRef;
	}
	function isComputed(raw) {
		return isRef2(raw) && !!raw.effect;
	}
	function isReactive2(raw) {
		return !!raw.__v_isReactive;
	}
	function isReadOnly(raw) {
		return !!raw.__v_isReadonly;
	}
	var tokenMap = {
		[UNDEFINED]: "undefined",
		[NAN]: "NaN",
		[INFINITY]: "Infinity",
		[NEGATIVE_INFINITY]: "-Infinity"
	};
	var reversedTokenMap = Object.entries(tokenMap).reduce((acc, [key, value]) => {
		acc[value] = key;
		return acc;
	}, {});
	function internalStateTokenToString(value) {
		if (value === null) return "null";
		return typeof value === "string" && tokenMap[value] || false;
	}
	function replaceTokenToString(value) {
		const replaceRegex = new RegExp(`"(${Object.keys(tokenMap).join("|")})"`, "g");
		return value.replace(replaceRegex, (_, g1) => tokenMap[g1]);
	}
	function replaceStringToToken(value) {
		const literalValue = reversedTokenMap[value.trim()];
		if (literalValue) return `"${literalValue}"`;
		const replaceRegex = new RegExp(`:\\s*(${Object.keys(reversedTokenMap).join("|")})`, "g");
		return value.replace(replaceRegex, (_, g1) => `:"${reversedTokenMap[g1]}"`);
	}
	function getPropType(type) {
		if (Array.isArray(type)) return type.map((t) => getPropType(t)).join(" or ");
		if (type == null) return "null";
		const match = type.toString().match(fnTypeRE);
		return typeof type === "function" ? match && match[1] || "any" : "any";
	}
	function sanitize(data) {
		if (!isPrimitive(data) && !Array.isArray(data) && !isPlainObject(data)) return Object.prototype.toString.call(data);
		else return data;
	}
	function getSetupStateType(raw) {
		try {
			return {
				ref: isRef2(raw),
				computed: isComputed(raw),
				reactive: isReactive2(raw),
				readonly: isReadOnly(raw)
			};
		} catch (e) {
			return {
				ref: false,
				computed: false,
				reactive: false,
				readonly: false
			};
		}
	}
	function toRaw2(value) {
		if (value == null ? void 0 : value.__v_raw) return value.__v_raw;
		return value;
	}
	function escape(s) {
		return s.replace(/[<>"&]/g, (s2) => {
			return ESC[s2] || s2;
		});
	}
	function mergeOptions(to, from, instance) {
		if (typeof from === "function") from = from.options;
		if (!from) return to;
		const { mixins, extends: extendsOptions } = from;
		extendsOptions && mergeOptions(to, extendsOptions, instance);
		mixins && mixins.forEach((m) => mergeOptions(to, m, instance));
		for (const key of ["computed", "inject"]) if (Object.prototype.hasOwnProperty.call(from, key)) if (!to[key]) to[key] = from[key];
		else Object.assign(to[key], from[key]);
		return to;
	}
	function resolveMergedOptions(instance) {
		const raw = instance == null ? void 0 : instance.type;
		if (!raw) return {};
		const { mixins, extends: extendsOptions } = raw;
		const globalMixins = instance.appContext.mixins;
		if (!globalMixins.length && !mixins && !extendsOptions) return raw;
		const options = {};
		globalMixins.forEach((m) => mergeOptions(options, m, instance));
		mergeOptions(options, raw, instance);
		return options;
	}
	function processProps(instance) {
		var _a25;
		const props = [];
		const propDefinitions = (_a25 = instance == null ? void 0 : instance.type) == null ? void 0 : _a25.props;
		for (const key in instance == null ? void 0 : instance.props) {
			const propDefinition = propDefinitions ? propDefinitions[key] : null;
			const camelizeKey = (0, import_devtools_shared11.camelize)(key);
			props.push({
				type: "props",
				key: camelizeKey,
				value: returnError(() => instance.props[key]),
				editable: true,
				meta: propDefinition ? {
					type: propDefinition.type ? getPropType(propDefinition.type) : "any",
					required: !!propDefinition.required,
					...propDefinition.default ? { default: propDefinition.default.toString() } : {}
				} : { type: "invalid" }
			});
		}
		return props;
	}
	function processState(instance) {
		const type = instance.type;
		const props = type == null ? void 0 : type.props;
		const getters = type.vuex && type.vuex.getters;
		const computedDefs = type.computed;
		const data = {
			...instance.data,
			...instance.renderContext
		};
		return Object.keys(data).filter((key) => !(props && key in props) && !(getters && key in getters) && !(computedDefs && key in computedDefs)).map((key) => ({
			key,
			type: "data",
			value: returnError(() => data[key]),
			editable: true
		}));
	}
	function getStateTypeAndName(info) {
		const stateType = info.computed ? "computed" : info.ref ? "ref" : info.reactive ? "reactive" : null;
		return {
			stateType,
			stateTypeName: stateType ? `${stateType.charAt(0).toUpperCase()}${stateType.slice(1)}` : null
		};
	}
	function processSetupState(instance) {
		const raw = instance.devtoolsRawSetupState || {};
		return Object.keys(instance.setupState).filter((key) => !vueBuiltins.has(key) && key.split(/(?=[A-Z])/)[0] !== "use").map((key) => {
			var _a25, _b25, _c, _d;
			const value = returnError(() => toRaw2(instance.setupState[key]));
			const accessError = value instanceof Error;
			const rawData = raw[key];
			let result;
			let isOtherType = accessError || typeof value === "function" || ensurePropertyExists(value, "render") && typeof value.render === "function" || ensurePropertyExists(value, "__asyncLoader") && typeof value.__asyncLoader === "function" || typeof value === "object" && value && ("setup" in value || "props" in value) || /^v[A-Z]/.test(key);
			if (rawData && !accessError) {
				const info = getSetupStateType(rawData);
				const { stateType, stateTypeName } = getStateTypeAndName(info);
				const isState = info.ref || info.computed || info.reactive;
				const raw2 = ensurePropertyExists(rawData, "effect") ? ((_b25 = (_a25 = rawData.effect) == null ? void 0 : _a25.raw) == null ? void 0 : _b25.toString()) || ((_d = (_c = rawData.effect) == null ? void 0 : _c.fn) == null ? void 0 : _d.toString()) : null;
				if (stateType) isOtherType = false;
				result = {
					...stateType ? {
						stateType,
						stateTypeName
					} : {},
					...raw2 ? { raw: raw2 } : {},
					editable: isState && !info.readonly
				};
			}
			return {
				key,
				value,
				type: isOtherType ? "setup (other)" : "setup",
				...result
			};
		});
	}
	function processComputed(instance, mergedType) {
		const type = mergedType;
		const computed = [];
		const defs = type.computed || {};
		for (const key in defs) {
			const def = defs[key];
			const type2 = typeof def === "function" && def.vuex ? "vuex bindings" : "computed";
			computed.push({
				type: type2,
				key,
				value: returnError(() => {
					var _a25;
					return (_a25 = instance == null ? void 0 : instance.proxy) == null ? void 0 : _a25[key];
				}),
				editable: typeof def.set === "function"
			});
		}
		return computed;
	}
	function processAttrs(instance) {
		return Object.keys(instance.attrs).map((key) => ({
			type: "attrs",
			key,
			value: returnError(() => instance.attrs[key])
		}));
	}
	function processProvide(instance) {
		return Reflect.ownKeys(instance.provides).map((key) => ({
			type: "provided",
			key: key.toString(),
			value: returnError(() => instance.provides[key])
		}));
	}
	function processInject(instance, mergedType) {
		if (!(mergedType == null ? void 0 : mergedType.inject)) return [];
		let keys = [];
		let defaultValue;
		if (Array.isArray(mergedType.inject)) keys = mergedType.inject.map((key) => ({
			key,
			originalKey: key
		}));
		else keys = Reflect.ownKeys(mergedType.inject).map((key) => {
			const value = mergedType.inject[key];
			let originalKey;
			if (typeof value === "string" || typeof value === "symbol") originalKey = value;
			else {
				originalKey = value.from;
				defaultValue = value.default;
			}
			return {
				key,
				originalKey
			};
		});
		return keys.map(({ key, originalKey }) => ({
			type: "injected",
			key: originalKey && key !== originalKey ? `${originalKey.toString()} \u279E ${key.toString()}` : key.toString(),
			value: returnError(() => instance.ctx.hasOwnProperty(key) ? instance.ctx[key] : instance.provides.hasOwnProperty(originalKey) ? instance.provides[originalKey] : defaultValue)
		}));
	}
	function processRefs(instance) {
		return Object.keys(instance.refs).map((key) => ({
			type: "template refs",
			key,
			value: returnError(() => instance.refs[key])
		}));
	}
	function processEventListeners(instance) {
		var _a25, _b25;
		const emitsDefinition = instance.type.emits;
		const declaredEmits = Array.isArray(emitsDefinition) ? emitsDefinition : Object.keys(emitsDefinition != null ? emitsDefinition : {});
		const keys = Object.keys((_b25 = (_a25 = instance == null ? void 0 : instance.vnode) == null ? void 0 : _a25.props) != null ? _b25 : {});
		const result = [];
		for (const key of keys) {
			const [prefix, ...eventNameParts] = key.split(/(?=[A-Z])/);
			if (prefix === "on") {
				const eventName = eventNameParts.join("-").toLowerCase();
				const isDeclared = declaredEmits.includes(eventName);
				result.push({
					type: "event listeners",
					key: eventName,
					value: { _custom: {
						displayText: isDeclared ? "✅ Declared" : "⚠️ Not declared",
						key: isDeclared ? "✅ Declared" : "⚠️ Not declared",
						value: isDeclared ? "✅ Declared" : "⚠️ Not declared",
						tooltipText: !isDeclared ? `The event <code>${eventName}</code> is not declared in the <code>emits</code> option. It will leak into the component's attributes (<code>$attrs</code>).` : null
					} }
				});
			}
		}
		return result;
	}
	function processInstanceState(instance) {
		const mergedType = resolveMergedOptions(instance);
		return processProps(instance).concat(processState(instance), processSetupState(instance), processComputed(instance, mergedType), processAttrs(instance), processProvide(instance), processInject(instance, mergedType), processRefs(instance), processEventListeners(instance));
	}
	function getInstanceState(params) {
		var _a25;
		const instance = getComponentInstance(activeAppRecord.value, params.instanceId);
		return {
			id: getUniqueComponentId(instance),
			name: getInstanceName(instance),
			file: (_a25 = instance == null ? void 0 : instance.type) == null ? void 0 : _a25.__file,
			state: processInstanceState(instance),
			instance
		};
	}
	init_cjs_shims();
	init_cjs_shims();
	var import_devtools_shared12 = require_dist$5();
	var ComponentFilter = class {
		constructor(filter) {
			this.filter = filter || "";
		}
		/**
		* Check if an instance is qualified.
		*
		* @param {Vue|Vnode} instance
		* @return {boolean}
		*/
		isQualified(instance) {
			const name = getInstanceName(instance);
			return (0, import_devtools_shared12.classify)(name).toLowerCase().includes(this.filter) || (0, import_devtools_shared12.kebabize)(name).toLowerCase().includes(this.filter);
		}
	};
	function createComponentFilter(filterText) {
		return new ComponentFilter(filterText);
	}
	var ComponentWalker = class {
		constructor(options) {
			this.captureIds = /* @__PURE__ */ new Map();
			const { filterText = "", maxDepth, recursively, api } = options;
			this.componentFilter = createComponentFilter(filterText);
			this.maxDepth = maxDepth;
			this.recursively = recursively;
			this.api = api;
		}
		getComponentTree(instance) {
			this.captureIds = /* @__PURE__ */ new Map();
			return this.findQualifiedChildren(instance, 0);
		}
		getComponentParents(instance) {
			this.captureIds = /* @__PURE__ */ new Map();
			const parents = [];
			this.captureId(instance);
			let parent = instance;
			while (parent = parent.parent) {
				this.captureId(parent);
				parents.push(parent);
			}
			return parents;
		}
		captureId(instance) {
			if (!instance) return null;
			const id = instance.__VUE_DEVTOOLS_NEXT_UID__ != null ? instance.__VUE_DEVTOOLS_NEXT_UID__ : getUniqueComponentId(instance);
			instance.__VUE_DEVTOOLS_NEXT_UID__ = id;
			if (this.captureIds.has(id)) return null;
			else this.captureIds.set(id, void 0);
			this.mark(instance);
			return id;
		}
		/**
		* Capture the meta information of an instance. (recursive)
		*
		* @param {Vue} instance
		* @return {object}
		*/
		async capture(instance, depth) {
			var _a25;
			if (!instance) return null;
			const id = this.captureId(instance);
			const name = getInstanceName(instance);
			const children = this.getInternalInstanceChildren(instance.subTree).filter((child) => !isBeingDestroyed(child));
			const parents = this.getComponentParents(instance) || [];
			const inactive = !!instance.isDeactivated || parents.some((parent) => parent.isDeactivated);
			const treeNode = {
				uid: instance.uid,
				id,
				name,
				renderKey: getRenderKey(instance.vnode ? instance.vnode.key : null),
				inactive,
				children: [],
				isFragment: isFragment(instance),
				tags: typeof instance.type !== "function" ? [] : [{
					label: "functional",
					textColor: 5592405,
					backgroundColor: 15658734
				}],
				autoOpen: this.recursively,
				file: instance.type.__file || ""
			};
			if (depth < this.maxDepth || instance.type.__isKeepAlive || parents.some((parent) => parent.type.__isKeepAlive)) treeNode.children = await Promise.all(children.map((child) => this.capture(child, depth + 1)).filter(Boolean));
			if (this.isKeepAlive(instance)) {
				const cachedComponents = this.getKeepAliveCachedInstances(instance);
				const childrenIds = children.map((child) => child.__VUE_DEVTOOLS_NEXT_UID__);
				for (const cachedChild of cachedComponents) if (!childrenIds.includes(cachedChild.__VUE_DEVTOOLS_NEXT_UID__)) {
					const node = await this.capture({
						...cachedChild,
						isDeactivated: true
					}, depth + 1);
					if (node) treeNode.children.push(node);
				}
			}
			const firstElement = getRootElementsFromComponentInstance(instance)[0];
			if (firstElement == null ? void 0 : firstElement.parentElement) {
				const parentInstance = instance.parent;
				const parentRootElements = parentInstance ? getRootElementsFromComponentInstance(parentInstance) : [];
				let el = firstElement;
				const indexList = [];
				do {
					indexList.push(Array.from(el.parentElement.childNodes).indexOf(el));
					el = el.parentElement;
				} while (el.parentElement && parentRootElements.length && !parentRootElements.includes(el));
				treeNode.domOrder = indexList.reverse();
			} else treeNode.domOrder = [-1];
			if ((_a25 = instance.suspense) == null ? void 0 : _a25.suspenseKey) {
				treeNode.tags.push({
					label: instance.suspense.suspenseKey,
					backgroundColor: 14979812,
					textColor: 16777215
				});
				this.mark(instance, true);
			}
			this.api.visitComponentTree({
				treeNode,
				componentInstance: instance,
				app: instance.appContext.app,
				filter: this.componentFilter.filter
			});
			return treeNode;
		}
		/**
		* Find qualified children from a single instance.
		* If the instance itself is qualified, just return itself.
		* This is ok because [].concat works in both cases.
		*
		* @param {Vue|Vnode} instance
		* @return {Vue|Array}
		*/
		async findQualifiedChildren(instance, depth) {
			var _a25;
			if (this.componentFilter.isQualified(instance) && !((_a25 = instance.type.devtools) == null ? void 0 : _a25.hide)) return [await this.capture(instance, depth)];
			else if (instance.subTree) {
				const list = this.isKeepAlive(instance) ? this.getKeepAliveCachedInstances(instance) : this.getInternalInstanceChildren(instance.subTree);
				return this.findQualifiedChildrenFromList(list, depth);
			} else return [];
		}
		/**
		* Iterate through an array of instances and flatten it into
		* an array of qualified instances. This is a depth-first
		* traversal - e.g. if an instance is not matched, we will
		* recursively go deeper until a qualified child is found.
		*
		* @param {Array} instances
		* @return {Array}
		*/
		async findQualifiedChildrenFromList(instances, depth) {
			instances = instances.filter((child) => {
				var _a25;
				return !isBeingDestroyed(child) && !((_a25 = child.type.devtools) == null ? void 0 : _a25.hide);
			});
			if (!this.componentFilter.filter) return Promise.all(instances.map((child) => this.capture(child, depth)));
			else return Array.prototype.concat.apply([], await Promise.all(instances.map((i) => this.findQualifiedChildren(i, depth))));
		}
		/**
		* Get children from a component instance.
		*/
		getInternalInstanceChildren(subTree, suspense = null) {
			const list = [];
			if (subTree) {
				if (subTree.component) !suspense ? list.push(subTree.component) : list.push({
					...subTree.component,
					suspense
				});
				else if (subTree.suspense) {
					const suspenseKey = !subTree.suspense.isInFallback ? "suspense default" : "suspense fallback";
					list.push(...this.getInternalInstanceChildren(subTree.suspense.activeBranch, {
						...subTree.suspense,
						suspenseKey
					}));
				} else if (Array.isArray(subTree.children)) subTree.children.forEach((childSubTree) => {
					if (childSubTree.component) !suspense ? list.push(childSubTree.component) : list.push({
						...childSubTree.component,
						suspense
					});
					else list.push(...this.getInternalInstanceChildren(childSubTree, suspense));
				});
			}
			return list.filter((child) => {
				var _a25;
				return !isBeingDestroyed(child) && !((_a25 = child.type.devtools) == null ? void 0 : _a25.hide);
			});
		}
		/**
		* Mark an instance as captured and store it in the instance map.
		*
		* @param {Vue} instance
		*/
		mark(instance, force = false) {
			const instanceMap = getAppRecord(instance).instanceMap;
			if (force || !instanceMap.has(instance.__VUE_DEVTOOLS_NEXT_UID__)) {
				instanceMap.set(instance.__VUE_DEVTOOLS_NEXT_UID__, instance);
				activeAppRecord.value.instanceMap = instanceMap;
			}
		}
		isKeepAlive(instance) {
			return instance.type.__isKeepAlive && instance.__v_cache;
		}
		getKeepAliveCachedInstances(instance) {
			return Array.from(instance.__v_cache.values()).map((vnode) => vnode.component).filter(Boolean);
		}
	};
	init_cjs_shims();
	var import_devtools_shared13 = require_dist$5();
	init_cjs_shims();
	var markEndQueue = /* @__PURE__ */ new Map();
	var PERFORMANCE_EVENT_LAYER_ID = "performance";
	async function performanceMarkStart(api, app, uid, vm, type, time) {
		const appRecord = await getAppRecord(app);
		if (!appRecord) return;
		const componentName = getInstanceName(vm) || "Unknown Component";
		const groupId = devtoolsState.perfUniqueGroupId++;
		const groupKey = `${uid}-${type}`;
		appRecord.perfGroupIds.set(groupKey, {
			groupId,
			time
		});
		await api.addTimelineEvent({
			layerId: PERFORMANCE_EVENT_LAYER_ID,
			event: {
				time: Date.now(),
				data: {
					component: componentName,
					type,
					measure: "start"
				},
				title: componentName,
				subtitle: type,
				groupId
			}
		});
		if (markEndQueue.has(groupKey)) {
			const { app: app2, uid: uid2, instance, type: type2, time: time2 } = markEndQueue.get(groupKey);
			markEndQueue.delete(groupKey);
			await performanceMarkEnd(api, app2, uid2, instance, type2, time2);
		}
	}
	function performanceMarkEnd(api, app, uid, vm, type, time) {
		const appRecord = getAppRecord(app);
		if (!appRecord) return;
		const componentName = getInstanceName(vm) || "Unknown Component";
		const groupKey = `${uid}-${type}`;
		const groupInfo = appRecord.perfGroupIds.get(groupKey);
		if (groupInfo) {
			const groupId = groupInfo.groupId;
			const duration = time - groupInfo.time;
			api.addTimelineEvent({
				layerId: PERFORMANCE_EVENT_LAYER_ID,
				event: {
					time: Date.now(),
					data: {
						component: componentName,
						type,
						measure: "end",
						duration: { _custom: {
							type: "Duration",
							value: duration,
							display: `${duration} ms`
						} }
					},
					title: componentName,
					subtitle: type,
					groupId
				}
			});
		} else markEndQueue.set(groupKey, {
			app,
			uid,
			instance: vm,
			type,
			time
		});
	}
	var COMPONENT_EVENT_LAYER_ID = "component-event";
	function setupBuiltinTimelineLayers(api) {
		if (!import_devtools_shared13.isBrowser) return;
		api.addTimelineLayer({
			id: "mouse",
			label: "Mouse",
			color: 10768815
		});
		[
			"mousedown",
			"mouseup",
			"click",
			"dblclick"
		].forEach((eventType) => {
			if (!devtoolsState.timelineLayersState.recordingState || !devtoolsState.timelineLayersState.mouseEventEnabled) return;
			window.addEventListener(eventType, async (event) => {
				await api.addTimelineEvent({
					layerId: "mouse",
					event: {
						time: Date.now(),
						data: {
							type: eventType,
							x: event.clientX,
							y: event.clientY
						},
						title: eventType
					}
				});
			}, {
				capture: true,
				passive: true
			});
		});
		api.addTimelineLayer({
			id: "keyboard",
			label: "Keyboard",
			color: 8475055
		});
		[
			"keyup",
			"keydown",
			"keypress"
		].forEach((eventType) => {
			window.addEventListener(eventType, async (event) => {
				if (!devtoolsState.timelineLayersState.recordingState || !devtoolsState.timelineLayersState.keyboardEventEnabled) return;
				await api.addTimelineEvent({
					layerId: "keyboard",
					event: {
						time: Date.now(),
						data: {
							type: eventType,
							key: event.key,
							ctrlKey: event.ctrlKey,
							shiftKey: event.shiftKey,
							altKey: event.altKey,
							metaKey: event.metaKey
						},
						title: event.key
					}
				});
			}, {
				capture: true,
				passive: true
			});
		});
		api.addTimelineLayer({
			id: COMPONENT_EVENT_LAYER_ID,
			label: "Component events",
			color: 5226637
		});
		hook.on.componentEmit(async (app, instance, event, params) => {
			if (!devtoolsState.timelineLayersState.recordingState || !devtoolsState.timelineLayersState.componentEventEnabled) return;
			const appRecord = await getAppRecord(app);
			if (!appRecord) return;
			const componentId = `${appRecord.id}:${instance.uid}`;
			const componentName = getInstanceName(instance) || "Unknown Component";
			api.addTimelineEvent({
				layerId: COMPONENT_EVENT_LAYER_ID,
				event: {
					time: Date.now(),
					data: {
						component: { _custom: {
							type: "component-definition",
							display: componentName
						} },
						event,
						params
					},
					title: event,
					subtitle: `by ${componentName}`,
					meta: { componentId }
				}
			});
		});
		api.addTimelineLayer({
			id: "performance",
			label: PERFORMANCE_EVENT_LAYER_ID,
			color: 4307050
		});
		hook.on.perfStart((app, uid, vm, type, time) => {
			if (!devtoolsState.timelineLayersState.recordingState || !devtoolsState.timelineLayersState.performanceEventEnabled) return;
			performanceMarkStart(api, app, uid, vm, type, time);
		});
		hook.on.perfEnd((app, uid, vm, type, time) => {
			if (!devtoolsState.timelineLayersState.recordingState || !devtoolsState.timelineLayersState.performanceEventEnabled) return;
			performanceMarkEnd(api, app, uid, vm, type, time);
		});
	}
	init_cjs_shims();
	var MAX_$VM = 10;
	var $vmQueue = [];
	function exposeInstanceToWindow(componentInstance) {
		if (typeof window === "undefined") return;
		const win = window;
		if (!componentInstance) return;
		win.$vm = componentInstance;
		if ($vmQueue[0] !== componentInstance) {
			if ($vmQueue.length >= MAX_$VM) $vmQueue.pop();
			for (let i = $vmQueue.length; i > 0; i--) win[`$vm${i}`] = $vmQueue[i] = $vmQueue[i - 1];
			win.$vm0 = $vmQueue[0] = componentInstance;
		}
	}
	var INSPECTOR_ID = "components";
	function createComponentsDevToolsPlugin(app) {
		const descriptor = {
			id: INSPECTOR_ID,
			label: "Components",
			app
		};
		const setupFn = (api) => {
			api.addInspector({
				id: INSPECTOR_ID,
				label: "Components",
				treeFilterPlaceholder: "Search components"
			});
			setupBuiltinTimelineLayers(api);
			api.on.getInspectorTree(async (payload) => {
				if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
					const instance = getComponentInstance(activeAppRecord.value, payload.instanceId);
					if (instance) payload.rootNodes = await new ComponentWalker({
						filterText: payload.filter,
						maxDepth: 100,
						recursively: false,
						api
					}).getComponentTree(instance);
				}
			});
			api.on.getInspectorState(async (payload) => {
				var _a25;
				if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
					const result = getInstanceState({ instanceId: payload.nodeId });
					const componentInstance = result.instance;
					const _payload = {
						componentInstance,
						app: (_a25 = result.instance) == null ? void 0 : _a25.appContext.app,
						instanceData: result
					};
					devtoolsContext.hooks.callHookWith((callbacks) => {
						callbacks.forEach((cb) => cb(_payload));
					}, "inspectComponent");
					payload.state = result;
					exposeInstanceToWindow(componentInstance);
				}
			});
			api.on.editInspectorState(async (payload) => {
				if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
					editState(payload);
					await api.sendInspectorState("components");
				}
			});
			const debounceSendInspectorTree = (0, import_perfect_debounce4.debounce)(() => {
				api.sendInspectorTree(INSPECTOR_ID);
			}, 120);
			const debounceSendInspectorState = (0, import_perfect_debounce4.debounce)(() => {
				api.sendInspectorState(INSPECTOR_ID);
			}, 120);
			hook.on.componentAdded(async (app2, uid, parentUid, component) => {
				var _a25, _b25, _c;
				if (devtoolsState.highPerfModeEnabled) return;
				if ((_c = (_b25 = (_a25 = app2 == null ? void 0 : app2._instance) == null ? void 0 : _a25.type) == null ? void 0 : _b25.devtools) == null ? void 0 : _c.hide) return;
				if (!app2 || typeof uid !== "number" && !uid || !component) return;
				const id = await getComponentId({
					app: app2,
					uid,
					instance: component
				});
				const appRecord = await getAppRecord(app2);
				if (component) {
					if (component.__VUE_DEVTOOLS_NEXT_UID__ == null) component.__VUE_DEVTOOLS_NEXT_UID__ = id;
					if (!(appRecord == null ? void 0 : appRecord.instanceMap.has(id))) {
						appRecord?.instanceMap.set(id, component);
						if (activeAppRecord.value.id === (appRecord == null ? void 0 : appRecord.id)) activeAppRecord.value.instanceMap = appRecord.instanceMap;
					}
				}
				if (!appRecord) return;
				debounceSendInspectorTree();
			});
			hook.on.componentUpdated(async (app2, uid, parentUid, component) => {
				var _a25, _b25, _c;
				if (devtoolsState.highPerfModeEnabled) return;
				if ((_c = (_b25 = (_a25 = app2 == null ? void 0 : app2._instance) == null ? void 0 : _a25.type) == null ? void 0 : _b25.devtools) == null ? void 0 : _c.hide) return;
				if (!app2 || typeof uid !== "number" && !uid || !component) return;
				const id = await getComponentId({
					app: app2,
					uid,
					instance: component
				});
				const appRecord = await getAppRecord(app2);
				if (component) {
					if (component.__VUE_DEVTOOLS_NEXT_UID__ == null) component.__VUE_DEVTOOLS_NEXT_UID__ = id;
					if (!(appRecord == null ? void 0 : appRecord.instanceMap.has(id))) {
						appRecord?.instanceMap.set(id, component);
						if (activeAppRecord.value.id === (appRecord == null ? void 0 : appRecord.id)) activeAppRecord.value.instanceMap = appRecord.instanceMap;
					}
				}
				if (!appRecord) return;
				debounceSendInspectorTree();
				debounceSendInspectorState();
			});
			hook.on.componentRemoved(async (app2, uid, parentUid, component) => {
				var _a25, _b25, _c;
				if (devtoolsState.highPerfModeEnabled) return;
				if ((_c = (_b25 = (_a25 = app2 == null ? void 0 : app2._instance) == null ? void 0 : _a25.type) == null ? void 0 : _b25.devtools) == null ? void 0 : _c.hide) return;
				if (!app2 || typeof uid !== "number" && !uid || !component) return;
				const appRecord = await getAppRecord(app2);
				if (!appRecord) return;
				const id = await getComponentId({
					app: app2,
					uid,
					instance: component
				});
				appRecord?.instanceMap.delete(id);
				if (activeAppRecord.value.id === (appRecord == null ? void 0 : appRecord.id)) activeAppRecord.value.instanceMap = appRecord.instanceMap;
				debounceSendInspectorTree();
			});
		};
		return [descriptor, setupFn];
	}
	var _a12;
	(_a12 = import_devtools_shared14.target).__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__ ?? (_a12.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__ = /* @__PURE__ */ new Set());
	function setupDevToolsPlugin(pluginDescriptor, setupFn) {
		return hook.setupDevToolsPlugin(pluginDescriptor, setupFn);
	}
	function callDevToolsPluginSetupFn(plugin, app) {
		const [pluginDescriptor, setupFn] = plugin;
		if (pluginDescriptor.app !== app) return;
		const api = new DevToolsPluginAPI({
			plugin: {
				setupFn,
				descriptor: pluginDescriptor
			},
			ctx: devtoolsContext
		});
		if (pluginDescriptor.packageName === "vuex") api.on.editInspectorState((payload) => {
			api.sendInspectorState(payload.inspectorId);
		});
		setupFn(api);
	}
	function removeRegisteredPluginApp(app) {
		import_devtools_shared14.target.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__.delete(app);
	}
	function registerDevToolsPlugin(app, options) {
		if (import_devtools_shared14.target.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__.has(app)) return;
		if (devtoolsState.highPerfModeEnabled && !(options == null ? void 0 : options.inspectingComponent)) return;
		import_devtools_shared14.target.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__.add(app);
		devtoolsPluginBuffer.forEach((plugin) => {
			callDevToolsPluginSetupFn(plugin, app);
		});
	}
	init_cjs_shims();
	var import_devtools_shared16 = require_dist$5();
	var import_perfect_debounce5 = require_dist$4();
	init_cjs_shims();
	var import_devtools_shared15 = require_dist$5();
	var ROUTER_KEY = "__VUE_DEVTOOLS_ROUTER__";
	var ROUTER_INFO_KEY = "__VUE_DEVTOOLS_ROUTER_INFO__";
	var _a13;
	(_a13 = import_devtools_shared15.target)[ROUTER_INFO_KEY] ?? (_a13[ROUTER_INFO_KEY] = {
		currentRoute: null,
		routes: []
	});
	var _a14;
	(_a14 = import_devtools_shared15.target)[ROUTER_KEY] ?? (_a14[ROUTER_KEY] = {});
	var devtoolsRouterInfo = new Proxy(import_devtools_shared15.target[ROUTER_INFO_KEY], { get(target22, property) {
		return import_devtools_shared15.target[ROUTER_INFO_KEY][property];
	} });
	var devtoolsRouter = new Proxy(import_devtools_shared15.target[ROUTER_KEY], { get(target22, property) {
		if (property === "value") return import_devtools_shared15.target[ROUTER_KEY];
	} });
	function getRoutes(router) {
		const routesMap = /* @__PURE__ */ new Map();
		return ((router == null ? void 0 : router.getRoutes()) || []).filter((i) => !routesMap.has(i.path) && routesMap.set(i.path, 1));
	}
	function filterRoutes(routes) {
		return routes.map((item) => {
			let { path, name, children, meta } = item;
			if (children == null ? void 0 : children.length) children = filterRoutes(children);
			return {
				path,
				name,
				children,
				meta
			};
		});
	}
	function filterCurrentRoute(route) {
		if (route) {
			const { fullPath, hash, href, path, name, matched, params, query } = route;
			return {
				fullPath,
				hash,
				href,
				path,
				name,
				params,
				query,
				matched: filterRoutes(matched)
			};
		}
		return route;
	}
	function normalizeRouterInfo(appRecord, activeAppRecord2) {
		function init() {
			var _a25;
			const router = (_a25 = appRecord.app) == null ? void 0 : _a25.config.globalProperties.$router;
			const currentRoute = filterCurrentRoute(router == null ? void 0 : router.currentRoute.value);
			const routes = filterRoutes(getRoutes(router));
			const c = console.warn;
			console.warn = () => {};
			import_devtools_shared16.target[ROUTER_INFO_KEY] = {
				currentRoute: currentRoute ? (0, import_devtools_shared16.deepClone)(currentRoute) : {},
				routes: (0, import_devtools_shared16.deepClone)(routes)
			};
			import_devtools_shared16.target[ROUTER_KEY] = router;
			console.warn = c;
		}
		init();
		hook.on.componentUpdated((0, import_perfect_debounce5.debounce)(() => {
			var _a25;
			if (((_a25 = activeAppRecord2.value) == null ? void 0 : _a25.app) !== appRecord.app) return;
			init();
			if (devtoolsState.highPerfModeEnabled) return;
			devtoolsContext.hooks.callHook("routerInfoUpdated", { state: import_devtools_shared16.target[ROUTER_INFO_KEY] });
		}, 200));
	}
	function createDevToolsApi(hooks2) {
		return {
			async getInspectorTree(payload) {
				const _payload = {
					...payload,
					app: activeAppRecord.value.app,
					rootNodes: []
				};
				await new Promise((resolve) => {
					hooks2.callHookWith(async (callbacks) => {
						await Promise.all(callbacks.map((cb) => cb(_payload)));
						resolve();
					}, "getInspectorTree");
				});
				return _payload.rootNodes;
			},
			async getInspectorState(payload) {
				const _payload = {
					...payload,
					app: activeAppRecord.value.app,
					state: null
				};
				const ctx = { currentTab: `custom-inspector:${payload.inspectorId}` };
				await new Promise((resolve) => {
					hooks2.callHookWith(async (callbacks) => {
						await Promise.all(callbacks.map((cb) => cb(_payload, ctx)));
						resolve();
					}, "getInspectorState");
				});
				return _payload.state;
			},
			editInspectorState(payload) {
				const stateEditor2 = new StateEditor();
				const _payload = {
					...payload,
					app: activeAppRecord.value.app,
					set: (obj, path = payload.path, value = payload.state.value, cb) => {
						stateEditor2.set(obj, path, value, cb || stateEditor2.createDefaultSetCallback(payload.state));
					}
				};
				hooks2.callHookWith((callbacks) => {
					callbacks.forEach((cb) => cb(_payload));
				}, "editInspectorState");
			},
			sendInspectorState(inspectorId) {
				const inspector = getInspector(inspectorId);
				hooks2.callHook("sendInspectorState", {
					inspectorId,
					plugin: {
						descriptor: inspector.descriptor,
						setupFn: () => ({})
					}
				});
			},
			inspectComponentInspector() {
				return inspectComponentHighLighter();
			},
			cancelInspectComponentInspector() {
				return cancelInspectComponentHighLighter();
			},
			getComponentRenderCode(id) {
				const instance = getComponentInstance(activeAppRecord.value, id);
				if (instance) return !((instance == null ? void 0 : instance.type) instanceof Function) ? instance.render.toString() : instance.type.toString();
			},
			scrollToComponent(id) {
				return scrollToComponent({ id });
			},
			openInEditor,
			getVueInspector: getComponentInspector,
			toggleApp(id, options) {
				const appRecord = devtoolsAppRecords.value.find((record) => record.id === id);
				if (appRecord) {
					setActiveAppRecordId(id);
					setActiveAppRecord(appRecord);
					normalizeRouterInfo(appRecord, activeAppRecord);
					callInspectorUpdatedHook();
					registerDevToolsPlugin(appRecord.app, options);
				}
			},
			inspectDOM(instanceId) {
				const instance = getComponentInstance(activeAppRecord.value, instanceId);
				if (instance) {
					const [el] = getRootElementsFromComponentInstance(instance);
					if (el) import_devtools_shared17.target.__VUE_DEVTOOLS_INSPECT_DOM_TARGET__ = el;
				}
			},
			updatePluginSettings(pluginId, key, value) {
				setPluginSettings(pluginId, key, value);
			},
			getPluginSettings(pluginId) {
				return {
					options: getPluginSettingsOptions(pluginId),
					values: getPluginSettings(pluginId)
				};
			}
		};
	}
	init_cjs_shims();
	var import_devtools_shared18 = require_dist$5();
	var _a15;
	(_a15 = import_devtools_shared18.target).__VUE_DEVTOOLS_ENV__ ?? (_a15.__VUE_DEVTOOLS_ENV__ = { vitePluginDetected: false });
	function getDevToolsEnv() {
		return import_devtools_shared18.target.__VUE_DEVTOOLS_ENV__;
	}
	function setDevToolsEnv(env) {
		import_devtools_shared18.target.__VUE_DEVTOOLS_ENV__ = {
			...import_devtools_shared18.target.__VUE_DEVTOOLS_ENV__,
			...env
		};
	}
	var hooks = createDevToolsCtxHooks();
	var _a16;
	(_a16 = import_devtools_shared19.target).__VUE_DEVTOOLS_KIT_CONTEXT__ ?? (_a16.__VUE_DEVTOOLS_KIT_CONTEXT__ = {
		hooks,
		get state() {
			return {
				...devtoolsState,
				activeAppRecordId: activeAppRecord.id,
				activeAppRecord: activeAppRecord.value,
				appRecords: devtoolsAppRecords.value
			};
		},
		api: createDevToolsApi(hooks)
	});
	var devtoolsContext = import_devtools_shared19.target.__VUE_DEVTOOLS_KIT_CONTEXT__;
	init_cjs_shims();
	var import_devtools_shared20 = require_dist$5();
	var import_speakingurl = __toESM(require_speakingurl2(), 1);
	var _a17;
	var _b17;
	var appRecordInfo = (_b17 = (_a17 = import_devtools_shared20.target).__VUE_DEVTOOLS_NEXT_APP_RECORD_INFO__) != null ? _b17 : _a17.__VUE_DEVTOOLS_NEXT_APP_RECORD_INFO__ = {
		id: 0,
		appIds: /* @__PURE__ */ new Set()
	};
	function getAppRecordName(app, fallbackName) {
		var _a25;
		return ((_a25 = app == null ? void 0 : app._component) == null ? void 0 : _a25.name) || `App ${fallbackName}`;
	}
	function getAppRootInstance(app) {
		var _a25, _b25, _c, _d;
		if (app._instance) return app._instance;
		else if ((_b25 = (_a25 = app._container) == null ? void 0 : _a25._vnode) == null ? void 0 : _b25.component) return (_d = (_c = app._container) == null ? void 0 : _c._vnode) == null ? void 0 : _d.component;
	}
	function removeAppRecordId(app) {
		const id = app.__VUE_DEVTOOLS_NEXT_APP_RECORD_ID__;
		if (id != null) {
			appRecordInfo.appIds.delete(id);
			appRecordInfo.id--;
		}
	}
	function getAppRecordId(app, defaultId) {
		if (app.__VUE_DEVTOOLS_NEXT_APP_RECORD_ID__ != null) return app.__VUE_DEVTOOLS_NEXT_APP_RECORD_ID__;
		let id = defaultId != null ? defaultId : (appRecordInfo.id++).toString();
		if (defaultId && appRecordInfo.appIds.has(id)) {
			let count = 1;
			while (appRecordInfo.appIds.has(`${defaultId}_${count}`)) count++;
			id = `${defaultId}_${count}`;
		}
		appRecordInfo.appIds.add(id);
		app.__VUE_DEVTOOLS_NEXT_APP_RECORD_ID__ = id;
		return id;
	}
	function createAppRecord(app, types) {
		const rootInstance = getAppRootInstance(app);
		if (rootInstance) {
			appRecordInfo.id++;
			const name = getAppRecordName(app, appRecordInfo.id.toString());
			const record = {
				id: getAppRecordId(app, (0, import_speakingurl.default)(name)),
				name,
				types,
				instanceMap: /* @__PURE__ */ new Map(),
				perfGroupIds: /* @__PURE__ */ new Map(),
				rootInstance
			};
			app.__VUE_DEVTOOLS_NEXT_APP_RECORD__ = record;
			const rootId = `${record.id}:root`;
			record.instanceMap.set(rootId, record.rootInstance);
			record.rootInstance.__VUE_DEVTOOLS_NEXT_UID__ = rootId;
			return record;
		} else return {};
	}
	function initDevTools() {
		var _a25;
		updateDevToolsState({ vitePluginDetected: getDevToolsEnv().vitePluginDetected });
		const isDevToolsNext = ((_a25 = import_devtools_shared21.target.__VUE_DEVTOOLS_GLOBAL_HOOK__) == null ? void 0 : _a25.id) === "vue-devtools-next";
		if (import_devtools_shared21.target.__VUE_DEVTOOLS_GLOBAL_HOOK__ && isDevToolsNext) return;
		const _devtoolsHook = createDevToolsHook();
		if (import_devtools_shared21.target.__VUE_DEVTOOLS_HOOK_REPLAY__) try {
			import_devtools_shared21.target.__VUE_DEVTOOLS_HOOK_REPLAY__.forEach((cb) => cb(_devtoolsHook));
			import_devtools_shared21.target.__VUE_DEVTOOLS_HOOK_REPLAY__ = [];
		} catch (e) {
			console.error("[vue-devtools] Error during hook replay", e);
		}
		_devtoolsHook.once("init", (Vue) => {
			import_devtools_shared21.target.__VUE_DEVTOOLS_VUE2_APP_DETECTED__ = true;
			console.log("%c[_____Vue DevTools v7 log_____]", "color: red; font-bold: 600; font-size: 16px;");
			console.log("%cVue DevTools v7 detected in your Vue2 project. v7 only supports Vue3 and will not work.", "font-bold: 500; font-size: 14px;");
			console.log(`%cThe legacy version that supports both Vue 2 and Vue 3 has been moved to %c https://chromewebstore.google.com/detail/vuejs-devtools/iaajmlceplecbljialhhkmedjlpdblhp`, "font-size: 14px;", "text-decoration: underline; cursor: pointer;font-size: 14px;");
			console.log("%cPlease install and enable only the legacy version for your Vue2 app.", "font-bold: 500; font-size: 14px;");
			console.log("%c[_____Vue DevTools v7 log_____]", "color: red; font-bold: 600; font-size: 16px;");
		});
		hook.on.setupDevtoolsPlugin((pluginDescriptor, setupFn) => {
			var _a26;
			addDevToolsPluginToBuffer(pluginDescriptor, setupFn);
			const { app } = (_a26 = activeAppRecord) != null ? _a26 : {};
			if (pluginDescriptor.settings) initPluginSettings(pluginDescriptor.id, pluginDescriptor.settings);
			if (!app) return;
			callDevToolsPluginSetupFn([pluginDescriptor, setupFn], app);
		});
		onLegacyDevToolsPluginApiAvailable(() => {
			devtoolsPluginBuffer.filter(([item]) => item.id !== "components").forEach(([pluginDescriptor, setupFn]) => {
				_devtoolsHook.emit("devtools-plugin:setup", pluginDescriptor, setupFn, { target: "legacy" });
			});
		});
		hook.on.vueAppInit(async (app, version, types) => {
			const normalizedAppRecord = {
				...createAppRecord(app, types),
				app,
				version
			};
			addDevToolsAppRecord(normalizedAppRecord);
			if (devtoolsAppRecords.value.length === 1) {
				setActiveAppRecord(normalizedAppRecord);
				setActiveAppRecordId(normalizedAppRecord.id);
				normalizeRouterInfo(normalizedAppRecord, activeAppRecord);
				registerDevToolsPlugin(normalizedAppRecord.app);
			}
			setupDevToolsPlugin(...createComponentsDevToolsPlugin(normalizedAppRecord.app));
			updateDevToolsState({ connected: true });
			_devtoolsHook.apps.push(app);
		});
		hook.on.vueAppUnmount(async (app) => {
			const activeRecords = devtoolsAppRecords.value.filter((appRecord) => appRecord.app !== app);
			if (activeRecords.length === 0) updateDevToolsState({ connected: false });
			removeDevToolsAppRecord(app);
			removeAppRecordId(app);
			if (activeAppRecord.value.app === app) {
				setActiveAppRecord(activeRecords[0]);
				devtoolsContext.hooks.callHook("sendActiveAppUpdatedToClient");
			}
			import_devtools_shared21.target.__VUE_DEVTOOLS_GLOBAL_HOOK__.apps.splice(import_devtools_shared21.target.__VUE_DEVTOOLS_GLOBAL_HOOK__.apps.indexOf(app), 1);
			removeRegisteredPluginApp(app);
		});
		subscribeDevToolsHook(_devtoolsHook);
		if (!import_devtools_shared21.target.__VUE_DEVTOOLS_GLOBAL_HOOK__) Object.defineProperty(import_devtools_shared21.target, "__VUE_DEVTOOLS_GLOBAL_HOOK__", { get() {
			return _devtoolsHook;
		} });
		else if (!import_devtools_shared21.isNuxtApp) Object.assign(__VUE_DEVTOOLS_GLOBAL_HOOK__, _devtoolsHook);
	}
	function onDevToolsClientConnected(fn) {
		return new Promise((resolve) => {
			if (devtoolsState.connected && devtoolsState.clientConnected) {
				fn();
				resolve();
				return;
			}
			devtoolsContext.hooks.hook("devtoolsConnectedUpdated", ({ state }) => {
				if (state.connected && state.clientConnected) {
					fn();
					resolve();
				}
			});
		});
	}
	init_cjs_shims();
	function toggleHighPerfMode(state) {
		devtoolsState.highPerfModeEnabled = state != null ? state : !devtoolsState.highPerfModeEnabled;
		if (!state && activeAppRecord.value) registerDevToolsPlugin(activeAppRecord.value.app);
	}
	init_cjs_shims();
	init_cjs_shims();
	var import_devtools_shared22 = require_dist$5();
	function reviveSet(val) {
		const result = /* @__PURE__ */ new Set();
		const list = val._custom.value;
		for (let i = 0; i < list.length; i++) {
			const value = list[i];
			result.add(revive(value));
		}
		return result;
	}
	function reviveMap(val) {
		const result = /* @__PURE__ */ new Map();
		const list = val._custom.value;
		for (let i = 0; i < list.length; i++) {
			const { key, value } = list[i];
			result.set(key, revive(value));
		}
		return result;
	}
	function revive(val) {
		if (val === UNDEFINED) return;
		else if (val === INFINITY) return Number.POSITIVE_INFINITY;
		else if (val === NEGATIVE_INFINITY) return Number.NEGATIVE_INFINITY;
		else if (val === NAN) return NaN;
		else if (val && val._custom) {
			const { _custom: custom } = val;
			if (custom.type === "component") return activeAppRecord.value.instanceMap.get(custom.id);
			else if (custom.type === "map") return reviveMap(val);
			else if (custom.type === "set") return reviveSet(val);
			else if (custom.type === "bigint") return BigInt(custom.value);
			else return revive(custom.value);
		} else if (symbolRE.test(val)) {
			const [, string] = symbolRE.exec(val);
			return Symbol.for(string);
		} else if (specialTypeRE.test(val)) {
			const [, type, string, , details] = specialTypeRE.exec(val);
			const result = new import_devtools_shared22.target[type](string);
			if (type === "Error" && details) result.stack = details;
			return result;
		} else return val;
	}
	function reviver(key, value) {
		return revive(value);
	}
	function getInspectorStateValueType(value, raw = true) {
		const type = typeof value;
		if (value == null || value === UNDEFINED || value === "undefined") return "null";
		else if (type === "boolean" || type === "number" || value === INFINITY || value === NEGATIVE_INFINITY || value === NAN) return "literal";
		else if (value == null ? void 0 : value._custom) if (raw || value._custom.display != null || value._custom.displayText != null) return "custom";
		else return getInspectorStateValueType(value._custom.value);
		else if (typeof value === "string") {
			const typeMatch = specialTypeRE.exec(value);
			if (typeMatch) {
				const [, type2] = typeMatch;
				return `native ${type2}`;
			} else return "string";
		} else if (Array.isArray(value) || (value == null ? void 0 : value._isArray)) return "array";
		else if (isPlainObject(value)) return "plain-object";
		else return "unknown";
	}
	function formatInspectorStateValue(value, quotes = false, options) {
		var _a25, _b25, _c;
		const { customClass } = options != null ? options : {};
		let result;
		const type = getInspectorStateValueType(value, false);
		if (type !== "custom" && (value == null ? void 0 : value._custom)) value = value._custom.value;
		if (result = internalStateTokenToString(value)) return result;
		else if (type === "custom") return ((_a25 = value._custom.value) == null ? void 0 : _a25._custom) && formatInspectorStateValue(value._custom.value, quotes, options) || value._custom.displayText || value._custom.display;
		else if (type === "array") return `Array[${value.length}]`;
		else if (type === "plain-object") return `Object${Object.keys(value).length ? "" : " (empty)"}`;
		else if (type == null ? void 0 : type.includes("native")) return escape((_b25 = specialTypeRE.exec(value)) == null ? void 0 : _b25[2]);
		else if (typeof value === "string") {
			const typeMatch = value.match(rawTypeRE);
			if (typeMatch) value = escapeString(typeMatch[1]);
			else if (quotes) value = `<span>"</span>${(customClass == null ? void 0 : customClass.string) ? `<span class=${customClass.string}>${escapeString(value)}</span>` : escapeString(value)}<span>"</span>`;
			else value = (customClass == null ? void 0 : customClass.string) ? `<span class="${(_c = customClass == null ? void 0 : customClass.string) != null ? _c : ""}">${escapeString(value)}</span>` : escapeString(value);
		}
		return value;
	}
	function escapeString(value) {
		return escape(value).replace(/ /g, "&nbsp;").replace(/\n/g, "<span>\\n</span>");
	}
	function getRaw(value) {
		var _a25, _b25, _c;
		let customType;
		const isCustom = getInspectorStateValueType(value) === "custom";
		let inherit = {};
		if (isCustom) {
			const data = value;
			const customValue = (_a25 = data._custom) == null ? void 0 : _a25.value;
			const currentCustomType = (_b25 = data._custom) == null ? void 0 : _b25.type;
			const nestedCustom = typeof customValue === "object" && customValue !== null && "_custom" in customValue ? getRaw(customValue) : {
				inherit: void 0,
				value: void 0,
				customType: void 0
			};
			inherit = nestedCustom.inherit || ((_c = data._custom) == null ? void 0 : _c.fields) || {};
			value = nestedCustom.value || customValue;
			customType = nestedCustom.customType || currentCustomType;
		}
		if (value && value._isArray) value = value.items;
		return {
			value,
			inherit,
			customType
		};
	}
	function toEdit(value, customType) {
		if (customType === "bigint") return value;
		if (customType === "date") return value;
		return replaceTokenToString(JSON.stringify(value));
	}
	function toSubmit(value, customType) {
		if (customType === "bigint") return BigInt(value);
		if (customType === "date") return new Date(value);
		return JSON.parse(replaceStringToToken(value), reviver);
	}
	init_cjs_shims();
	var import_devtools_shared23 = require_dist$5();
	function updateDevToolsClientDetected(params) {
		devtoolsState.devtoolsClientDetected = {
			...devtoolsState.devtoolsClientDetected,
			...params
		};
		toggleHighPerfMode(!Object.values(devtoolsState.devtoolsClientDetected).some(Boolean));
	}
	var _a18;
	(_a18 = import_devtools_shared23.target).__VUE_DEVTOOLS_UPDATE_CLIENT_DETECTED__ ?? (_a18.__VUE_DEVTOOLS_UPDATE_CLIENT_DETECTED__ = updateDevToolsClientDetected);
	init_cjs_shims();
	var import_devtools_shared31 = require_dist$5();
	var import_birpc = require_dist$2();
	init_cjs_shims();
	init_cjs_shims();
	init_cjs_shims();
	init_cjs_shims();
	init_cjs_shims();
	init_cjs_shims();
	var DoubleIndexedKV = class {
		constructor() {
			this.keyToValue = /* @__PURE__ */ new Map();
			this.valueToKey = /* @__PURE__ */ new Map();
		}
		set(key, value) {
			this.keyToValue.set(key, value);
			this.valueToKey.set(value, key);
		}
		getByKey(key) {
			return this.keyToValue.get(key);
		}
		getByValue(value) {
			return this.valueToKey.get(value);
		}
		clear() {
			this.keyToValue.clear();
			this.valueToKey.clear();
		}
	};
	var Registry = class {
		constructor(generateIdentifier) {
			this.generateIdentifier = generateIdentifier;
			this.kv = new DoubleIndexedKV();
		}
		register(value, identifier) {
			if (this.kv.getByValue(value)) return;
			if (!identifier) identifier = this.generateIdentifier(value);
			this.kv.set(identifier, value);
		}
		clear() {
			this.kv.clear();
		}
		getIdentifier(value) {
			return this.kv.getByValue(value);
		}
		getValue(identifier) {
			return this.kv.getByKey(identifier);
		}
	};
	var ClassRegistry = class extends Registry {
		constructor() {
			super((c) => c.name);
			this.classToAllowedProps = /* @__PURE__ */ new Map();
		}
		register(value, options) {
			if (typeof options === "object") {
				if (options.allowProps) this.classToAllowedProps.set(value, options.allowProps);
				super.register(value, options.identifier);
			} else super.register(value, options);
		}
		getAllowedProps(value) {
			return this.classToAllowedProps.get(value);
		}
	};
	init_cjs_shims();
	init_cjs_shims();
	function valuesOfObj(record) {
		if ("values" in Object) return Object.values(record);
		const values = [];
		for (const key in record) if (record.hasOwnProperty(key)) values.push(record[key]);
		return values;
	}
	function find(record, predicate) {
		const values = valuesOfObj(record);
		if ("find" in values) return values.find(predicate);
		const valuesNotNever = values;
		for (let i = 0; i < valuesNotNever.length; i++) {
			const value = valuesNotNever[i];
			if (predicate(value)) return value;
		}
	}
	function forEach(record, run) {
		Object.entries(record).forEach(([key, value]) => run(value, key));
	}
	function includes(arr, value) {
		return arr.indexOf(value) !== -1;
	}
	function findArr(record, predicate) {
		for (let i = 0; i < record.length; i++) {
			const value = record[i];
			if (predicate(value)) return value;
		}
	}
	var CustomTransformerRegistry = class {
		constructor() {
			this.transfomers = {};
		}
		register(transformer) {
			this.transfomers[transformer.name] = transformer;
		}
		findApplicable(v) {
			return find(this.transfomers, (transformer) => transformer.isApplicable(v));
		}
		findByName(name) {
			return this.transfomers[name];
		}
	};
	init_cjs_shims();
	init_cjs_shims();
	var getType = (payload) => Object.prototype.toString.call(payload).slice(8, -1);
	var isUndefined = (payload) => typeof payload === "undefined";
	var isNull = (payload) => payload === null;
	var isPlainObject2 = (payload) => {
		if (typeof payload !== "object" || payload === null) return false;
		if (payload === Object.prototype) return false;
		if (Object.getPrototypeOf(payload) === null) return true;
		return Object.getPrototypeOf(payload) === Object.prototype;
	};
	var isEmptyObject = (payload) => isPlainObject2(payload) && Object.keys(payload).length === 0;
	var isArray = (payload) => Array.isArray(payload);
	var isString = (payload) => typeof payload === "string";
	var isNumber = (payload) => typeof payload === "number" && !isNaN(payload);
	var isBoolean = (payload) => typeof payload === "boolean";
	var isRegExp = (payload) => payload instanceof RegExp;
	var isMap = (payload) => payload instanceof Map;
	var isSet = (payload) => payload instanceof Set;
	var isSymbol = (payload) => getType(payload) === "Symbol";
	var isDate = (payload) => payload instanceof Date && !isNaN(payload.valueOf());
	var isError = (payload) => payload instanceof Error;
	var isNaNValue = (payload) => typeof payload === "number" && isNaN(payload);
	var isPrimitive2 = (payload) => isBoolean(payload) || isNull(payload) || isUndefined(payload) || isNumber(payload) || isString(payload) || isSymbol(payload);
	var isBigint = (payload) => typeof payload === "bigint";
	var isInfinite = (payload) => payload === Infinity || payload === -Infinity;
	var isTypedArray = (payload) => ArrayBuffer.isView(payload) && !(payload instanceof DataView);
	var isURL = (payload) => payload instanceof URL;
	init_cjs_shims();
	var escapeKey = (key) => key.replace(/\./g, "\\.");
	var stringifyPath = (path) => path.map(String).map(escapeKey).join(".");
	var parsePath = (string) => {
		const result = [];
		let segment = "";
		for (let i = 0; i < string.length; i++) {
			let char = string.charAt(i);
			if (char === "\\" && string.charAt(i + 1) === ".") {
				segment += ".";
				i++;
				continue;
			}
			if (char === ".") {
				result.push(segment);
				segment = "";
				continue;
			}
			segment += char;
		}
		const lastSegment = segment;
		result.push(lastSegment);
		return result;
	};
	init_cjs_shims();
	function simpleTransformation(isApplicable, annotation, transform, untransform) {
		return {
			isApplicable,
			annotation,
			transform,
			untransform
		};
	}
	var simpleRules = [
		simpleTransformation(isUndefined, "undefined", () => null, () => void 0),
		simpleTransformation(isBigint, "bigint", (v) => v.toString(), (v) => {
			if (typeof BigInt !== "undefined") return BigInt(v);
			console.error("Please add a BigInt polyfill.");
			return v;
		}),
		simpleTransformation(isDate, "Date", (v) => v.toISOString(), (v) => new Date(v)),
		simpleTransformation(isError, "Error", (v, superJson) => {
			const baseError = {
				name: v.name,
				message: v.message
			};
			superJson.allowedErrorProps.forEach((prop) => {
				baseError[prop] = v[prop];
			});
			return baseError;
		}, (v, superJson) => {
			const e = new Error(v.message);
			e.name = v.name;
			e.stack = v.stack;
			superJson.allowedErrorProps.forEach((prop) => {
				e[prop] = v[prop];
			});
			return e;
		}),
		simpleTransformation(isRegExp, "regexp", (v) => "" + v, (regex) => {
			const body = regex.slice(1, regex.lastIndexOf("/"));
			const flags = regex.slice(regex.lastIndexOf("/") + 1);
			return new RegExp(body, flags);
		}),
		simpleTransformation(isSet, "set", (v) => [...v.values()], (v) => new Set(v)),
		simpleTransformation(isMap, "map", (v) => [...v.entries()], (v) => new Map(v)),
		simpleTransformation((v) => isNaNValue(v) || isInfinite(v), "number", (v) => {
			if (isNaNValue(v)) return "NaN";
			if (v > 0) return "Infinity";
			else return "-Infinity";
		}, Number),
		simpleTransformation((v) => v === 0 && 1 / v === -Infinity, "number", () => {
			return "-0";
		}, Number),
		simpleTransformation(isURL, "URL", (v) => v.toString(), (v) => new URL(v))
	];
	function compositeTransformation(isApplicable, annotation, transform, untransform) {
		return {
			isApplicable,
			annotation,
			transform,
			untransform
		};
	}
	var symbolRule = compositeTransformation((s, superJson) => {
		if (isSymbol(s)) return !!superJson.symbolRegistry.getIdentifier(s);
		return false;
	}, (s, superJson) => {
		return ["symbol", superJson.symbolRegistry.getIdentifier(s)];
	}, (v) => v.description, (_, a, superJson) => {
		const value = superJson.symbolRegistry.getValue(a[1]);
		if (!value) throw new Error("Trying to deserialize unknown symbol");
		return value;
	});
	var constructorToName = [
		Int8Array,
		Uint8Array,
		Int16Array,
		Uint16Array,
		Int32Array,
		Uint32Array,
		Float32Array,
		Float64Array,
		Uint8ClampedArray
	].reduce((obj, ctor) => {
		obj[ctor.name] = ctor;
		return obj;
	}, {});
	var typedArrayRule = compositeTransformation(isTypedArray, (v) => ["typed-array", v.constructor.name], (v) => [...v], (v, a) => {
		const ctor = constructorToName[a[1]];
		if (!ctor) throw new Error("Trying to deserialize unknown typed array");
		return new ctor(v);
	});
	function isInstanceOfRegisteredClass(potentialClass, superJson) {
		if (potentialClass == null ? void 0 : potentialClass.constructor) return !!superJson.classRegistry.getIdentifier(potentialClass.constructor);
		return false;
	}
	var classRule = compositeTransformation(isInstanceOfRegisteredClass, (clazz, superJson) => {
		return ["class", superJson.classRegistry.getIdentifier(clazz.constructor)];
	}, (clazz, superJson) => {
		const allowedProps = superJson.classRegistry.getAllowedProps(clazz.constructor);
		if (!allowedProps) return { ...clazz };
		const result = {};
		allowedProps.forEach((prop) => {
			result[prop] = clazz[prop];
		});
		return result;
	}, (v, a, superJson) => {
		const clazz = superJson.classRegistry.getValue(a[1]);
		if (!clazz) throw new Error(`Trying to deserialize unknown class '${a[1]}' - check https://github.com/blitz-js/superjson/issues/116#issuecomment-773996564`);
		return Object.assign(Object.create(clazz.prototype), v);
	});
	var customRule = compositeTransformation((value, superJson) => {
		return !!superJson.customTransformerRegistry.findApplicable(value);
	}, (value, superJson) => {
		return ["custom", superJson.customTransformerRegistry.findApplicable(value).name];
	}, (value, superJson) => {
		return superJson.customTransformerRegistry.findApplicable(value).serialize(value);
	}, (v, a, superJson) => {
		const transformer = superJson.customTransformerRegistry.findByName(a[1]);
		if (!transformer) throw new Error("Trying to deserialize unknown custom value");
		return transformer.deserialize(v);
	});
	var compositeRules = [
		classRule,
		symbolRule,
		customRule,
		typedArrayRule
	];
	var transformValue = (value, superJson) => {
		const applicableCompositeRule = findArr(compositeRules, (rule) => rule.isApplicable(value, superJson));
		if (applicableCompositeRule) return {
			value: applicableCompositeRule.transform(value, superJson),
			type: applicableCompositeRule.annotation(value, superJson)
		};
		const applicableSimpleRule = findArr(simpleRules, (rule) => rule.isApplicable(value, superJson));
		if (applicableSimpleRule) return {
			value: applicableSimpleRule.transform(value, superJson),
			type: applicableSimpleRule.annotation
		};
	};
	var simpleRulesByAnnotation = {};
	simpleRules.forEach((rule) => {
		simpleRulesByAnnotation[rule.annotation] = rule;
	});
	var untransformValue = (json, type, superJson) => {
		if (isArray(type)) switch (type[0]) {
			case "symbol": return symbolRule.untransform(json, type, superJson);
			case "class": return classRule.untransform(json, type, superJson);
			case "custom": return customRule.untransform(json, type, superJson);
			case "typed-array": return typedArrayRule.untransform(json, type, superJson);
			default: throw new Error("Unknown transformation: " + type);
		}
		else {
			const transformation = simpleRulesByAnnotation[type];
			if (!transformation) throw new Error("Unknown transformation: " + type);
			return transformation.untransform(json, superJson);
		}
	};
	init_cjs_shims();
	var getNthKey = (value, n) => {
		if (n > value.size) throw new Error("index out of bounds");
		const keys = value.keys();
		while (n > 0) {
			keys.next();
			n--;
		}
		return keys.next().value;
	};
	function validatePath(path) {
		if (includes(path, "__proto__")) throw new Error("__proto__ is not allowed as a property");
		if (includes(path, "prototype")) throw new Error("prototype is not allowed as a property");
		if (includes(path, "constructor")) throw new Error("constructor is not allowed as a property");
	}
	var getDeep = (object, path) => {
		validatePath(path);
		for (let i = 0; i < path.length; i++) {
			const key = path[i];
			if (isSet(object)) object = getNthKey(object, +key);
			else if (isMap(object)) {
				const row = +key;
				const type = +path[++i] === 0 ? "key" : "value";
				const keyOfRow = getNthKey(object, row);
				switch (type) {
					case "key":
						object = keyOfRow;
						break;
					case "value":
						object = object.get(keyOfRow);
						break;
				}
			} else object = object[key];
		}
		return object;
	};
	var setDeep = (object, path, mapper) => {
		validatePath(path);
		if (path.length === 0) return mapper(object);
		let parent = object;
		for (let i = 0; i < path.length - 1; i++) {
			const key = path[i];
			if (isArray(parent)) {
				const index = +key;
				parent = parent[index];
			} else if (isPlainObject2(parent)) parent = parent[key];
			else if (isSet(parent)) {
				const row = +key;
				parent = getNthKey(parent, row);
			} else if (isMap(parent)) {
				if (i === path.length - 2) break;
				const row = +key;
				const type = +path[++i] === 0 ? "key" : "value";
				const keyOfRow = getNthKey(parent, row);
				switch (type) {
					case "key":
						parent = keyOfRow;
						break;
					case "value":
						parent = parent.get(keyOfRow);
						break;
				}
			}
		}
		const lastKey = path[path.length - 1];
		if (isArray(parent)) parent[+lastKey] = mapper(parent[+lastKey]);
		else if (isPlainObject2(parent)) parent[lastKey] = mapper(parent[lastKey]);
		if (isSet(parent)) {
			const oldValue = getNthKey(parent, +lastKey);
			const newValue = mapper(oldValue);
			if (oldValue !== newValue) {
				parent.delete(oldValue);
				parent.add(newValue);
			}
		}
		if (isMap(parent)) {
			const row = +path[path.length - 2];
			const keyToRow = getNthKey(parent, row);
			switch (+lastKey === 0 ? "key" : "value") {
				case "key": {
					const newKey = mapper(keyToRow);
					parent.set(newKey, parent.get(keyToRow));
					if (newKey !== keyToRow) parent.delete(keyToRow);
					break;
				}
				case "value":
					parent.set(keyToRow, mapper(parent.get(keyToRow)));
					break;
			}
		}
		return object;
	};
	function traverse(tree, walker2, origin = []) {
		if (!tree) return;
		if (!isArray(tree)) {
			forEach(tree, (subtree, key) => traverse(subtree, walker2, [...origin, ...parsePath(key)]));
			return;
		}
		const [nodeValue, children] = tree;
		if (children) forEach(children, (child, key) => {
			traverse(child, walker2, [...origin, ...parsePath(key)]);
		});
		walker2(nodeValue, origin);
	}
	function applyValueAnnotations(plain, annotations, superJson) {
		traverse(annotations, (type, path) => {
			plain = setDeep(plain, path, (v) => untransformValue(v, type, superJson));
		});
		return plain;
	}
	function applyReferentialEqualityAnnotations(plain, annotations) {
		function apply(identicalPaths, path) {
			const object = getDeep(plain, parsePath(path));
			identicalPaths.map(parsePath).forEach((identicalObjectPath) => {
				plain = setDeep(plain, identicalObjectPath, () => object);
			});
		}
		if (isArray(annotations)) {
			const [root, other] = annotations;
			root.forEach((identicalPath) => {
				plain = setDeep(plain, parsePath(identicalPath), () => plain);
			});
			if (other) forEach(other, apply);
		} else forEach(annotations, apply);
		return plain;
	}
	var isDeep = (object, superJson) => isPlainObject2(object) || isArray(object) || isMap(object) || isSet(object) || isInstanceOfRegisteredClass(object, superJson);
	function addIdentity(object, path, identities) {
		const existingSet = identities.get(object);
		if (existingSet) existingSet.push(path);
		else identities.set(object, [path]);
	}
	function generateReferentialEqualityAnnotations(identitites, dedupe) {
		const result = {};
		let rootEqualityPaths = void 0;
		identitites.forEach((paths) => {
			if (paths.length <= 1) return;
			if (!dedupe) paths = paths.map((path) => path.map(String)).sort((a, b) => a.length - b.length);
			const [representativePath, ...identicalPaths] = paths;
			if (representativePath.length === 0) rootEqualityPaths = identicalPaths.map(stringifyPath);
			else result[stringifyPath(representativePath)] = identicalPaths.map(stringifyPath);
		});
		if (rootEqualityPaths) if (isEmptyObject(result)) return [rootEqualityPaths];
		else return [rootEqualityPaths, result];
		else return isEmptyObject(result) ? void 0 : result;
	}
	var walker = (object, identities, superJson, dedupe, path = [], objectsInThisPath = [], seenObjects = /* @__PURE__ */ new Map()) => {
		var _a25;
		const primitive = isPrimitive2(object);
		if (!primitive) {
			addIdentity(object, path, identities);
			const seen = seenObjects.get(object);
			if (seen) return dedupe ? { transformedValue: null } : seen;
		}
		if (!isDeep(object, superJson)) {
			const transformed2 = transformValue(object, superJson);
			const result2 = transformed2 ? {
				transformedValue: transformed2.value,
				annotations: [transformed2.type]
			} : { transformedValue: object };
			if (!primitive) seenObjects.set(object, result2);
			return result2;
		}
		if (includes(objectsInThisPath, object)) return { transformedValue: null };
		const transformationResult = transformValue(object, superJson);
		const transformed = (_a25 = transformationResult == null ? void 0 : transformationResult.value) != null ? _a25 : object;
		const transformedValue = isArray(transformed) ? [] : {};
		const innerAnnotations = {};
		forEach(transformed, (value, index) => {
			if (index === "__proto__" || index === "constructor" || index === "prototype") throw new Error(`Detected property ${index}. This is a prototype pollution risk, please remove it from your object.`);
			const recursiveResult = walker(value, identities, superJson, dedupe, [...path, index], [...objectsInThisPath, object], seenObjects);
			transformedValue[index] = recursiveResult.transformedValue;
			if (isArray(recursiveResult.annotations)) innerAnnotations[index] = recursiveResult.annotations;
			else if (isPlainObject2(recursiveResult.annotations)) forEach(recursiveResult.annotations, (tree, key) => {
				innerAnnotations[escapeKey(index) + "." + key] = tree;
			});
		});
		const result = isEmptyObject(innerAnnotations) ? {
			transformedValue,
			annotations: !!transformationResult ? [transformationResult.type] : void 0
		} : {
			transformedValue,
			annotations: !!transformationResult ? [transformationResult.type, innerAnnotations] : innerAnnotations
		};
		if (!primitive) seenObjects.set(object, result);
		return result;
	};
	init_cjs_shims();
	init_cjs_shims();
	function getType2(payload) {
		return Object.prototype.toString.call(payload).slice(8, -1);
	}
	function isArray2(payload) {
		return getType2(payload) === "Array";
	}
	function isPlainObject3(payload) {
		if (getType2(payload) !== "Object") return false;
		const prototype = Object.getPrototypeOf(payload);
		return !!prototype && prototype.constructor === Object && prototype === Object.prototype;
	}
	function assignProp(carry, key, newVal, originalObject, includeNonenumerable) {
		const propType = {}.propertyIsEnumerable.call(originalObject, key) ? "enumerable" : "nonenumerable";
		if (propType === "enumerable") carry[key] = newVal;
		if (includeNonenumerable && propType === "nonenumerable") Object.defineProperty(carry, key, {
			value: newVal,
			enumerable: false,
			writable: true,
			configurable: true
		});
	}
	function copy(target22, options = {}) {
		if (isArray2(target22)) return target22.map((item) => copy(item, options));
		if (!isPlainObject3(target22)) return target22;
		const props = Object.getOwnPropertyNames(target22);
		const symbols = Object.getOwnPropertySymbols(target22);
		return [...props, ...symbols].reduce((carry, key) => {
			if (isArray2(options.props) && !options.props.includes(key)) return carry;
			const val = target22[key];
			assignProp(carry, key, copy(val, options), target22, options.nonenumerable);
			return carry;
		}, {});
	}
	var SuperJSON = class {
		/**
		* @param dedupeReferentialEqualities  If true, SuperJSON will make sure only one instance of referentially equal objects are serialized and the rest are replaced with `null`.
		*/
		constructor({ dedupe = false } = {}) {
			this.classRegistry = new ClassRegistry();
			this.symbolRegistry = new Registry((s) => {
				var _a25;
				return (_a25 = s.description) != null ? _a25 : "";
			});
			this.customTransformerRegistry = new CustomTransformerRegistry();
			this.allowedErrorProps = [];
			this.dedupe = dedupe;
		}
		serialize(object) {
			const identities = /* @__PURE__ */ new Map();
			const output = walker(object, identities, this, this.dedupe);
			const res = { json: output.transformedValue };
			if (output.annotations) res.meta = {
				...res.meta,
				values: output.annotations
			};
			const equalityAnnotations = generateReferentialEqualityAnnotations(identities, this.dedupe);
			if (equalityAnnotations) res.meta = {
				...res.meta,
				referentialEqualities: equalityAnnotations
			};
			return res;
		}
		deserialize(payload) {
			const { json, meta } = payload;
			let result = copy(json);
			if (meta == null ? void 0 : meta.values) result = applyValueAnnotations(result, meta.values, this);
			if (meta == null ? void 0 : meta.referentialEqualities) result = applyReferentialEqualityAnnotations(result, meta.referentialEqualities);
			return result;
		}
		stringify(object) {
			return JSON.stringify(this.serialize(object));
		}
		parse(string) {
			return this.deserialize(JSON.parse(string));
		}
		registerClass(v, options) {
			this.classRegistry.register(v, options);
		}
		registerSymbol(v, identifier) {
			this.symbolRegistry.register(v, identifier);
		}
		registerCustom(transformer, name) {
			this.customTransformerRegistry.register({
				name,
				...transformer
			});
		}
		allowErrorProps(...props) {
			this.allowedErrorProps.push(...props);
		}
	};
	SuperJSON.defaultInstance = new SuperJSON();
	SuperJSON.serialize = SuperJSON.defaultInstance.serialize.bind(SuperJSON.defaultInstance);
	SuperJSON.deserialize = SuperJSON.defaultInstance.deserialize.bind(SuperJSON.defaultInstance);
	SuperJSON.stringify = SuperJSON.defaultInstance.stringify.bind(SuperJSON.defaultInstance);
	SuperJSON.parse = SuperJSON.defaultInstance.parse.bind(SuperJSON.defaultInstance);
	SuperJSON.registerClass = SuperJSON.defaultInstance.registerClass.bind(SuperJSON.defaultInstance);
	SuperJSON.registerSymbol = SuperJSON.defaultInstance.registerSymbol.bind(SuperJSON.defaultInstance);
	SuperJSON.registerCustom = SuperJSON.defaultInstance.registerCustom.bind(SuperJSON.defaultInstance);
	SuperJSON.allowErrorProps = SuperJSON.defaultInstance.allowErrorProps.bind(SuperJSON.defaultInstance);
	SuperJSON.serialize;
	SuperJSON.deserialize;
	var stringify = SuperJSON.stringify;
	var parse = SuperJSON.parse;
	SuperJSON.registerClass;
	SuperJSON.registerCustom;
	SuperJSON.registerSymbol;
	SuperJSON.allowErrorProps;
	init_cjs_shims();
	var __DEVTOOLS_KIT_BROADCAST_MESSAGING_EVENT_KEY = "__devtools-kit-broadcast-messaging-event-key__";
	var BROADCAST_CHANNEL_NAME = "__devtools-kit:broadcast-channel__";
	function createBroadcastChannel() {
		const channel = new BroadcastChannel(BROADCAST_CHANNEL_NAME);
		return {
			post: (data) => {
				channel.postMessage(SuperJSON.stringify({
					event: __DEVTOOLS_KIT_BROADCAST_MESSAGING_EVENT_KEY,
					data
				}));
			},
			on: (handler) => {
				channel.onmessage = (event) => {
					const parsed = SuperJSON.parse(event.data);
					if (parsed.event === __DEVTOOLS_KIT_BROADCAST_MESSAGING_EVENT_KEY) handler(parsed.data);
				};
			}
		};
	}
	init_cjs_shims();
	init_cjs_shims();
	init_cjs_shims();
	var import_devtools_shared24 = require_dist$5();
	var __ELECTRON_CLIENT_CONTEXT__ = "electron:client-context";
	var __ELECTRON_RPOXY_CONTEXT__ = "electron:proxy-context";
	var __ELECTRON_SERVER_CONTEXT__ = "electron:server-context";
	var __DEVTOOLS_KIT_ELECTRON_MESSAGING_EVENT_KEY__ = {
		CLIENT_TO_PROXY: "client->proxy",
		PROXY_TO_CLIENT: "proxy->client",
		PROXY_TO_SERVER: "proxy->server",
		SERVER_TO_PROXY: "server->proxy"
	};
	function getElectronClientContext() {
		return import_devtools_shared24.target[__ELECTRON_CLIENT_CONTEXT__];
	}
	function setElectronClientContext(context) {
		import_devtools_shared24.target[__ELECTRON_CLIENT_CONTEXT__] = context;
	}
	function getElectronProxyContext() {
		return import_devtools_shared24.target[__ELECTRON_RPOXY_CONTEXT__];
	}
	function setElectronProxyContext(context) {
		import_devtools_shared24.target[__ELECTRON_RPOXY_CONTEXT__] = context;
	}
	function getElectronServerContext() {
		return import_devtools_shared24.target[__ELECTRON_SERVER_CONTEXT__];
	}
	function setElectronServerContext(context) {
		import_devtools_shared24.target[__ELECTRON_SERVER_CONTEXT__] = context;
	}
	function createElectronClientChannel() {
		const socket = getElectronClientContext();
		return {
			post: (data) => {
				socket.emit(__DEVTOOLS_KIT_ELECTRON_MESSAGING_EVENT_KEY__.CLIENT_TO_PROXY, SuperJSON.stringify(data));
			},
			on: (handler) => {
				socket.on(__DEVTOOLS_KIT_ELECTRON_MESSAGING_EVENT_KEY__.PROXY_TO_CLIENT, (e) => {
					handler(SuperJSON.parse(e));
				});
			}
		};
	}
	init_cjs_shims();
	function createElectronProxyChannel() {
		const socket = getElectronProxyContext();
		return {
			post: (data) => {},
			on: (handler) => {
				socket.on(__DEVTOOLS_KIT_ELECTRON_MESSAGING_EVENT_KEY__.SERVER_TO_PROXY, (data) => {
					socket.broadcast.emit(__DEVTOOLS_KIT_ELECTRON_MESSAGING_EVENT_KEY__.PROXY_TO_CLIENT, data);
				});
				socket.on(__DEVTOOLS_KIT_ELECTRON_MESSAGING_EVENT_KEY__.CLIENT_TO_PROXY, (data) => {
					socket.broadcast.emit(__DEVTOOLS_KIT_ELECTRON_MESSAGING_EVENT_KEY__.PROXY_TO_SERVER, data);
				});
			}
		};
	}
	init_cjs_shims();
	function createElectronServerChannel() {
		const socket = getElectronServerContext();
		return {
			post: (data) => {
				socket.emit(__DEVTOOLS_KIT_ELECTRON_MESSAGING_EVENT_KEY__.SERVER_TO_PROXY, SuperJSON.stringify(data));
			},
			on: (handler) => {
				socket.on(__DEVTOOLS_KIT_ELECTRON_MESSAGING_EVENT_KEY__.PROXY_TO_SERVER, (data) => {
					handler(SuperJSON.parse(data));
				});
			}
		};
	}
	init_cjs_shims();
	init_cjs_shims();
	init_cjs_shims();
	var import_devtools_shared25 = require_dist$5();
	var __EXTENSION_CLIENT_CONTEXT__ = "electron:client-context";
	var __DEVTOOLS_KIT_EXTENSION_MESSAGING_EVENT_KEY__ = {
		CLIENT_TO_PROXY: "client->proxy",
		PROXY_TO_CLIENT: "proxy->client",
		PROXY_TO_SERVER: "proxy->server",
		SERVER_TO_PROXY: "server->proxy"
	};
	function getExtensionClientContext() {
		return import_devtools_shared25.target[__EXTENSION_CLIENT_CONTEXT__];
	}
	function setExtensionClientContext(context) {
		import_devtools_shared25.target[__EXTENSION_CLIENT_CONTEXT__] = context;
	}
	function createExtensionClientChannel() {
		let disconnected = false;
		let port = null;
		let reconnectTimer = null;
		let onMessageHandler = null;
		function connect() {
			try {
				clearTimeout(reconnectTimer);
				port = chrome.runtime.connect({ name: `${chrome.devtools.inspectedWindow.tabId}` });
				setExtensionClientContext(port);
				disconnected = false;
				port?.onMessage.addListener(onMessageHandler);
				port.onDisconnect.addListener(() => {
					disconnected = true;
					port?.onMessage.removeListener(onMessageHandler);
					reconnectTimer = setTimeout(connect, 1e3);
				});
			} catch (e) {
				disconnected = true;
			}
		}
		connect();
		return {
			post: (data) => {
				if (disconnected) return;
				port?.postMessage(SuperJSON.stringify(data));
			},
			on: (handler) => {
				onMessageHandler = (data) => {
					if (disconnected) return;
					handler(SuperJSON.parse(data));
				};
				port?.onMessage.addListener(onMessageHandler);
			}
		};
	}
	init_cjs_shims();
	function createExtensionProxyChannel() {
		const port = chrome.runtime.connect({ name: "content-script" });
		function sendMessageToUserApp(payload) {
			window.postMessage({
				source: __DEVTOOLS_KIT_EXTENSION_MESSAGING_EVENT_KEY__.PROXY_TO_SERVER,
				payload
			}, "*");
		}
		function sendMessageToDevToolsClient(e) {
			if (e.data && e.data.source === __DEVTOOLS_KIT_EXTENSION_MESSAGING_EVENT_KEY__.SERVER_TO_PROXY) try {
				port.postMessage(e.data.payload);
			} catch (e2) {}
		}
		port.onMessage.addListener(sendMessageToUserApp);
		window.addEventListener("message", sendMessageToDevToolsClient);
		port.onDisconnect.addListener(() => {
			window.removeEventListener("message", sendMessageToDevToolsClient);
			sendMessageToUserApp(SuperJSON.stringify({ event: "shutdown" }));
		});
		sendMessageToUserApp(SuperJSON.stringify({ event: "init" }));
		return {
			post: (data) => {},
			on: (handler) => {}
		};
	}
	init_cjs_shims();
	function createExtensionServerChannel() {
		return {
			post: (data) => {
				window.postMessage({
					source: __DEVTOOLS_KIT_EXTENSION_MESSAGING_EVENT_KEY__.SERVER_TO_PROXY,
					payload: SuperJSON.stringify(data)
				}, "*");
			},
			on: (handler) => {
				const listener = (event) => {
					if (event.data.source === __DEVTOOLS_KIT_EXTENSION_MESSAGING_EVENT_KEY__.PROXY_TO_SERVER && event.data.payload) handler(SuperJSON.parse(event.data.payload));
				};
				window.addEventListener("message", listener);
				return () => {
					window.removeEventListener("message", listener);
				};
			}
		};
	}
	init_cjs_shims();
	init_cjs_shims();
	var import_devtools_shared27 = require_dist$5();
	init_cjs_shims();
	var import_devtools_shared26 = require_dist$5();
	var __DEVTOOLS_KIT_IFRAME_MESSAGING_EVENT_KEY = "__devtools-kit-iframe-messaging-event-key__";
	var __IFRAME_SERVER_CONTEXT__ = "iframe:server-context";
	function getIframeServerContext() {
		return import_devtools_shared26.target[__IFRAME_SERVER_CONTEXT__];
	}
	function setIframeServerContext(context) {
		import_devtools_shared26.target[__IFRAME_SERVER_CONTEXT__] = context;
	}
	function createIframeClientChannel() {
		if (!import_devtools_shared27.isBrowser) return {
			post: (data) => {},
			on: (handler) => {}
		};
		return {
			post: (data) => window.parent.postMessage(SuperJSON.stringify({
				event: __DEVTOOLS_KIT_IFRAME_MESSAGING_EVENT_KEY,
				data
			}), "*"),
			on: (handler) => window.addEventListener("message", (event) => {
				try {
					const parsed = SuperJSON.parse(event.data);
					if (event.source === window.parent && parsed.event === __DEVTOOLS_KIT_IFRAME_MESSAGING_EVENT_KEY) handler(parsed.data);
				} catch (e) {}
			})
		};
	}
	init_cjs_shims();
	var import_devtools_shared28 = require_dist$5();
	function createIframeServerChannel() {
		if (!import_devtools_shared28.isBrowser) return {
			post: (data) => {},
			on: (handler) => {}
		};
		return {
			post: (data) => {
				var _a25;
				const iframe = getIframeServerContext();
				(_a25 = iframe == null ? void 0 : iframe.contentWindow) == null || _a25.postMessage(SuperJSON.stringify({
					event: __DEVTOOLS_KIT_IFRAME_MESSAGING_EVENT_KEY,
					data
				}), "*");
			},
			on: (handler) => {
				window.addEventListener("message", (event) => {
					const iframe = getIframeServerContext();
					try {
						const parsed = SuperJSON.parse(event.data);
						if (event.source === (iframe == null ? void 0 : iframe.contentWindow) && parsed.event === __DEVTOOLS_KIT_IFRAME_MESSAGING_EVENT_KEY) handler(parsed.data);
					} catch (e) {}
				});
			}
		};
	}
	init_cjs_shims();
	init_cjs_shims();
	init_cjs_shims();
	var import_devtools_shared29 = require_dist$5();
	var __DEVTOOLS_KIT_VITE_MESSAGING_EVENT_KEY = "__devtools-kit-vite-messaging-event-key__";
	var __VITE_CLIENT_CONTEXT__ = "vite:client-context";
	var __VITE_SERVER_CONTEXT__ = "vite:server-context";
	function getViteClientContext() {
		return import_devtools_shared29.target[__VITE_CLIENT_CONTEXT__];
	}
	function setViteClientContext(context) {
		import_devtools_shared29.target[__VITE_CLIENT_CONTEXT__] = context;
	}
	function getViteServerContext() {
		return import_devtools_shared29.target[__VITE_SERVER_CONTEXT__];
	}
	function setViteServerContext(context) {
		import_devtools_shared29.target[__VITE_SERVER_CONTEXT__] = context;
	}
	function createViteClientChannel() {
		const client = getViteClientContext();
		return {
			post: (data) => {
				client?.send(__DEVTOOLS_KIT_VITE_MESSAGING_EVENT_KEY, SuperJSON.stringify(data));
			},
			on: (handler) => {
				client?.on(__DEVTOOLS_KIT_VITE_MESSAGING_EVENT_KEY, (event) => {
					handler(SuperJSON.parse(event));
				});
			}
		};
	}
	init_cjs_shims();
	function createViteServerChannel() {
		var _a25;
		const viteServer = getViteServerContext();
		const ws = (_a25 = viteServer.hot) != null ? _a25 : viteServer.ws;
		return {
			post: (data) => ws == null ? void 0 : ws.send(__DEVTOOLS_KIT_VITE_MESSAGING_EVENT_KEY, SuperJSON.stringify(data)),
			on: (handler) => ws == null ? void 0 : ws.on(__DEVTOOLS_KIT_VITE_MESSAGING_EVENT_KEY, (event) => {
				handler(SuperJSON.parse(event));
			})
		};
	}
	init_cjs_shims();
	init_cjs_shims();
	init_cjs_shims();
	require_dist$5();
	init_cjs_shims();
	var _a19;
	(_a19 = import_devtools_shared31.target).__VUE_DEVTOOLS_KIT_MESSAGE_CHANNELS__ ?? (_a19.__VUE_DEVTOOLS_KIT_MESSAGE_CHANNELS__ = []);
	var _a20;
	(_a20 = import_devtools_shared31.target).__VUE_DEVTOOLS_KIT_RPC_CLIENT__ ?? (_a20.__VUE_DEVTOOLS_KIT_RPC_CLIENT__ = null);
	var _a21;
	(_a21 = import_devtools_shared31.target).__VUE_DEVTOOLS_KIT_RPC_SERVER__ ?? (_a21.__VUE_DEVTOOLS_KIT_RPC_SERVER__ = null);
	var _a22;
	(_a22 = import_devtools_shared31.target).__VUE_DEVTOOLS_KIT_VITE_RPC_CLIENT__ ?? (_a22.__VUE_DEVTOOLS_KIT_VITE_RPC_CLIENT__ = null);
	var _a23;
	(_a23 = import_devtools_shared31.target).__VUE_DEVTOOLS_KIT_VITE_RPC_SERVER__ ?? (_a23.__VUE_DEVTOOLS_KIT_VITE_RPC_SERVER__ = null);
	var _a24;
	(_a24 = import_devtools_shared31.target).__VUE_DEVTOOLS_KIT_BROADCAST_RPC_SERVER__ ?? (_a24.__VUE_DEVTOOLS_KIT_BROADCAST_RPC_SERVER__ = null);
	function setRpcClientToGlobal(rpc) {
		import_devtools_shared31.target.__VUE_DEVTOOLS_KIT_RPC_CLIENT__ = rpc;
	}
	function setRpcServerToGlobal(rpc) {
		import_devtools_shared31.target.__VUE_DEVTOOLS_KIT_RPC_SERVER__ = rpc;
	}
	function getRpcClient() {
		return import_devtools_shared31.target.__VUE_DEVTOOLS_KIT_RPC_CLIENT__;
	}
	function getRpcServer() {
		return import_devtools_shared31.target.__VUE_DEVTOOLS_KIT_RPC_SERVER__;
	}
	function setViteRpcClientToGlobal(rpc) {
		import_devtools_shared31.target.__VUE_DEVTOOLS_KIT_VITE_RPC_CLIENT__ = rpc;
	}
	function setViteRpcServerToGlobal(rpc) {
		import_devtools_shared31.target.__VUE_DEVTOOLS_KIT_VITE_RPC_SERVER__ = rpc;
	}
	function getViteRpcClient() {
		return import_devtools_shared31.target.__VUE_DEVTOOLS_KIT_VITE_RPC_CLIENT__;
	}
	function getViteRpcServer() {
		return import_devtools_shared31.target.__VUE_DEVTOOLS_KIT_VITE_RPC_SERVER__;
	}
	function getChannel(preset, host = "client") {
		const channel = {
			iframe: {
				client: createIframeClientChannel,
				server: createIframeServerChannel
			}[host],
			electron: {
				client: createElectronClientChannel,
				proxy: createElectronProxyChannel,
				server: createElectronServerChannel
			}[host],
			vite: {
				client: createViteClientChannel,
				server: createViteServerChannel
			}[host],
			broadcast: {
				client: createBroadcastChannel,
				server: createBroadcastChannel
			}[host],
			extension: {
				client: createExtensionClientChannel,
				proxy: createExtensionProxyChannel,
				server: createExtensionServerChannel
			}[host]
		}[preset];
		return channel();
	}
	function createRpcClient(functions, options = {}) {
		const { channel: _channel, options: _options, preset } = options;
		const channel = preset ? getChannel(preset) : _channel;
		const rpc = (0, import_birpc.createBirpc)(functions, {
			..._options,
			...channel,
			timeout: -1
		});
		if (preset === "vite") {
			setViteRpcClientToGlobal(rpc);
			return;
		}
		setRpcClientToGlobal(rpc);
		return rpc;
	}
	function createRpcServer(functions, options = {}) {
		const { channel: _channel, options: _options, preset } = options;
		const channel = preset ? getChannel(preset, "server") : _channel;
		const rpcServer = getRpcServer();
		if (!rpcServer) {
			const group = (0, import_birpc.createBirpcGroup)(functions, [channel], {
				..._options,
				timeout: -1
			});
			if (preset === "vite") {
				setViteRpcServerToGlobal(group);
				return;
			}
			setRpcServerToGlobal(group);
		} else rpcServer.updateChannels((channels) => {
			channels.push(channel);
		});
	}
	function createRpcProxy(options = {}) {
		const { channel: _channel, options: _options, preset } = options;
		const channel = preset ? getChannel(preset, "proxy") : _channel;
		return (0, import_birpc.createBirpc)({}, {
			..._options,
			...channel,
			timeout: -1
		});
	}
	init_cjs_shims();
	init_cjs_shims();
	init_cjs_shims();
	init_cjs_shims();
	init_cjs_shims();
	init_cjs_shims();
	function getFunctionDetails(func) {
		let string = "";
		let matches = null;
		try {
			string = Function.prototype.toString.call(func);
			matches = String.prototype.match.call(string, /\([\s\S]*?\)/);
		} catch (e) {}
		const match = matches && matches[0];
		const args = typeof match === "string" ? match : "(?)";
		return { _custom: {
			type: "function",
			displayText: `<span style="opacity:.8;margin-right:5px;">function</span> <span style="white-space:nowrap;">${escape(typeof func.name === "string" ? func.name : "")}${args}</span>`,
			tooltipText: string.trim() ? `<pre>${string}</pre>` : null
		} };
	}
	function getBigIntDetails(val) {
		const stringifiedBigInt = BigInt.prototype.toString.call(val);
		return { _custom: {
			type: "bigint",
			displayText: `BigInt(${stringifiedBigInt})`,
			value: stringifiedBigInt
		} };
	}
	function getDateDetails(val) {
		const date = new Date(val.getTime());
		date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
		return { _custom: {
			type: "date",
			displayText: Date.prototype.toString.call(val),
			value: date.toISOString().slice(0, -1)
		} };
	}
	function getMapDetails(val) {
		return { _custom: {
			type: "map",
			displayText: "Map",
			value: Object.fromEntries(val),
			readOnly: true,
			fields: { abstract: true }
		} };
	}
	function getSetDetails(val) {
		const list = Array.from(val);
		return { _custom: {
			type: "set",
			displayText: `Set[${list.length}]`,
			value: list,
			readOnly: true
		} };
	}
	function getCaughtGetters(store) {
		const getters = {};
		const origGetters = store.getters || {};
		const keys = Object.keys(origGetters);
		for (let i = 0; i < keys.length; i++) {
			const key = keys[i];
			Object.defineProperty(getters, key, {
				enumerable: true,
				get: () => {
					try {
						return origGetters[key];
					} catch (e) {
						return e;
					}
				}
			});
		}
		return getters;
	}
	function reduceStateList(list) {
		if (!list.length) return void 0;
		return list.reduce((map, item) => {
			const key = item.type || "data";
			const obj = map[key] = map[key] || {};
			obj[item.key] = item.value;
			return map;
		}, {});
	}
	function namedNodeMapToObject(map) {
		const result = {};
		const l = map.length;
		for (let i = 0; i < l; i++) {
			const node = map.item(i);
			result[node.name] = node.value;
		}
		return result;
	}
	function getStoreDetails(store) {
		return { _custom: {
			type: "store",
			displayText: "Store",
			value: {
				state: store.state,
				getters: getCaughtGetters(store)
			},
			fields: { abstract: true }
		} };
	}
	function getRouterDetails(router) {
		return { _custom: {
			type: "router",
			displayText: "VueRouter",
			value: {
				options: router.options,
				currentRoute: router.currentRoute
			},
			fields: { abstract: true }
		} };
	}
	function getInstanceDetails(instance) {
		if (instance._) instance = instance._;
		const state = processInstanceState(instance);
		return { _custom: {
			type: "component",
			id: instance.__VUE_DEVTOOLS_NEXT_UID__,
			displayText: getInstanceName(instance),
			tooltipText: "Component instance",
			value: reduceStateList(state),
			fields: { abstract: true }
		} };
	}
	function getComponentDefinitionDetails(definition) {
		let display = getComponentName(definition);
		if (display) {
			if (definition.name && definition.__file) display += ` <span>(${definition.__file})</span>`;
		} else display = "<i>Unknown Component</i>";
		return { _custom: {
			type: "component-definition",
			displayText: display,
			tooltipText: "Component definition",
			...definition.__file ? { file: definition.__file } : {}
		} };
	}
	function getHTMLElementDetails(value) {
		try {
			return { _custom: {
				type: "HTMLElement",
				displayText: `<span class="opacity-30">&lt;</span><span class="text-blue-500">${value.tagName.toLowerCase()}</span><span class="opacity-30">&gt;</span>`,
				value: namedNodeMapToObject(value.attributes)
			} };
		} catch (e) {
			return { _custom: {
				type: "HTMLElement",
				displayText: `<span class="text-blue-500">${String(value)}</span>`
			} };
		}
	}
	function tryGetRefValue(ref) {
		if (ensurePropertyExists(ref, "_value", true)) return ref._value;
		if (ensurePropertyExists(ref, "value", true)) return ref.value;
	}
	function getObjectDetails(object) {
		var _a25, _b25, _c, _d;
		const info = getSetupStateType(object);
		if (info.ref || info.computed || info.reactive) {
			const stateTypeName = info.computed ? "Computed" : info.ref ? "Ref" : info.reactive ? "Reactive" : null;
			const value = toRaw2(info.reactive ? object : tryGetRefValue(object));
			const raw = ensurePropertyExists(object, "effect") ? ((_b25 = (_a25 = object.effect) == null ? void 0 : _a25.raw) == null ? void 0 : _b25.toString()) || ((_d = (_c = object.effect) == null ? void 0 : _c.fn) == null ? void 0 : _d.toString()) : null;
			return { _custom: {
				type: stateTypeName == null ? void 0 : stateTypeName.toLowerCase(),
				stateTypeName,
				value,
				...raw ? { tooltipText: `<span class="font-mono">${raw}</span>` } : {}
			} };
		}
		if (ensurePropertyExists(object, "__asyncLoader") && typeof object.__asyncLoader === "function") return { _custom: {
			type: "component-definition",
			display: "Async component definition"
		} };
	}
	function stringifyReplacer(key, _value, depth, seenInstance) {
		var _a25;
		if (key === "compilerOptions") return;
		const val = this[key];
		const type = typeof val;
		if (Array.isArray(val)) {
			const l = val.length;
			if (l > MAX_ARRAY_SIZE) return {
				_isArray: true,
				length: l,
				items: val.slice(0, MAX_ARRAY_SIZE)
			};
			return val;
		} else if (typeof val === "string") if (val.length > MAX_STRING_SIZE) return `${val.substring(0, MAX_STRING_SIZE)}... (${val.length} total length)`;
		else return val;
		else if (type === "undefined") return UNDEFINED;
		else if (val === Number.POSITIVE_INFINITY) return INFINITY;
		else if (val === Number.NEGATIVE_INFINITY) return NEGATIVE_INFINITY;
		else if (typeof val === "function") return getFunctionDetails(val);
		else if (type === "symbol") return `[native Symbol ${Symbol.prototype.toString.call(val)}]`;
		else if (typeof val === "bigint") return getBigIntDetails(val);
		else if (val !== null && typeof val === "object") {
			const proto = Object.prototype.toString.call(val);
			if (proto === "[object Map]") return getMapDetails(val);
			else if (proto === "[object Set]") return getSetDetails(val);
			else if (proto === "[object RegExp]") return `[native RegExp ${RegExp.prototype.toString.call(val)}]`;
			else if (proto === "[object Date]") return getDateDetails(val);
			else if (proto === "[object Error]") return `[native Error ${val.message}<>${val.stack}]`;
			else if (ensurePropertyExists(val, "state", true) && ensurePropertyExists(val, "_vm", true)) return getStoreDetails(val);
			else if (val.constructor && val.constructor.name === "VueRouter") return getRouterDetails(val);
			else if (isVueInstance(val)) {
				const componentVal = getInstanceDetails(val);
				const parentInstanceDepth = seenInstance == null ? void 0 : seenInstance.get(val);
				if (parentInstanceDepth && parentInstanceDepth < depth) return `[[CircularRef]] <${componentVal._custom.displayText}>`;
				seenInstance?.set(val, depth);
				return componentVal;
			} else if (ensurePropertyExists(val, "render", true) && typeof val.render === "function") return getComponentDefinitionDetails(val);
			else if (val.constructor && val.constructor.name === "VNode") return `[native VNode <${val.tag}>]`;
			else if (typeof HTMLElement !== "undefined" && val instanceof HTMLElement) return getHTMLElementDetails(val);
			else if (((_a25 = val.constructor) == null ? void 0 : _a25.name) === "Store" && "_wrappedGetters" in val) return "[object Store]";
			else if (ensurePropertyExists(val, "currentRoute", true)) return "[object Router]";
			const customDetails = getObjectDetails(val);
			if (customDetails != null) return customDetails;
		} else if (Number.isNaN(val)) return NAN;
		return sanitize(val);
	}
	init_cjs_shims();
	var MAX_SERIALIZED_SIZE = 2 * 1024 * 1024;
	function isObject(_data, proto) {
		return proto === "[object Object]";
	}
	function isArray3(_data, proto) {
		return proto === "[object Array]";
	}
	function isVueReactiveLinkNode(node) {
		var _a25;
		const constructorName = (_a25 = node == null ? void 0 : node.constructor) == null ? void 0 : _a25.name;
		return constructorName === "Dep" && "activeLink" in node || constructorName === "Link" && "dep" in node;
	}
	function encode(data, replacer, list, seen, depth = 0, seenVueInstance = /* @__PURE__ */ new Map()) {
		let stored;
		let key;
		let value;
		let i;
		let l;
		const seenIndex = seen.get(data);
		if (seenIndex != null) return seenIndex;
		const index = list.length;
		const proto = Object.prototype.toString.call(data);
		if (isObject(data, proto)) {
			if (isVueReactiveLinkNode(data)) return index;
			stored = {};
			seen.set(data, index);
			list.push(stored);
			const keys = Object.keys(data);
			for (i = 0, l = keys.length; i < l; i++) {
				key = keys[i];
				if (key === "compilerOptions") return index;
				value = data[key];
				const isVm = value != null && isObject(value, Object.prototype.toString.call(data)) && isVueInstance(value);
				try {
					if (replacer) value = replacer.call(data, key, value, depth, seenVueInstance);
				} catch (e) {
					value = e;
				}
				stored[key] = encode(value, replacer, list, seen, depth + 1, seenVueInstance);
				if (isVm) seenVueInstance.delete(value);
			}
		} else if (isArray3(data, proto)) {
			stored = [];
			seen.set(data, index);
			list.push(stored);
			for (i = 0, l = data.length; i < l; i++) {
				try {
					value = data[i];
					if (replacer) value = replacer.call(data, i, value, depth, seenVueInstance);
				} catch (e) {
					value = e;
				}
				stored[i] = encode(value, replacer, list, seen, depth + 1, seenVueInstance);
			}
		} else list.push(data);
		return index;
	}
	function decode(list, reviver2 = null) {
		let i = list.length;
		let j, k, data, key, value, proto;
		while (i--) {
			data = list[i];
			proto = Object.prototype.toString.call(data);
			if (proto === "[object Object]") {
				const keys = Object.keys(data);
				for (j = 0, k = keys.length; j < k; j++) {
					key = keys[j];
					value = list[data[key]];
					if (reviver2) value = reviver2.call(data, key, value);
					data[key] = value;
				}
			} else if (proto === "[object Array]") for (j = 0, k = data.length; j < k; j++) {
				value = list[data[j]];
				if (reviver2) value = reviver2.call(data, j, value);
				data[j] = value;
			}
		}
	}
	function stringifyCircularAutoChunks(data, replacer = null, space = null) {
		let result;
		try {
			result = arguments.length === 1 ? JSON.stringify(data) : JSON.stringify(data, (k, v) => {
				var _a25;
				return (_a25 = replacer == null ? void 0 : replacer(k, v)) == null ? void 0 : _a25.call(this);
			}, space);
		} catch (e) {
			result = stringifyStrictCircularAutoChunks(data, replacer, space);
		}
		if (result.length > MAX_SERIALIZED_SIZE) {
			const chunkCount = Math.ceil(result.length / MAX_SERIALIZED_SIZE);
			const chunks = [];
			for (let i = 0; i < chunkCount; i++) chunks.push(result.slice(i * MAX_SERIALIZED_SIZE, (i + 1) * MAX_SERIALIZED_SIZE));
			return chunks;
		}
		return result;
	}
	function stringifyStrictCircularAutoChunks(data, replacer = null, space = null) {
		const list = [];
		encode(data, replacer, list, /* @__PURE__ */ new Map());
		return space ? ` ${JSON.stringify(list, null, space)}` : ` ${JSON.stringify(list)}`;
	}
	function parseCircularAutoChunks(data, reviver2 = null) {
		if (Array.isArray(data)) data = data.join("");
		if (!/^\s/.test(data)) return arguments.length === 1 ? JSON.parse(data) : JSON.parse(data, reviver2);
		else {
			const list = JSON.parse(data);
			decode(list, reviver2);
			return list[0];
		}
	}
	function stringify2(data) {
		return stringifyCircularAutoChunks(data, stringifyReplacer);
	}
	function parse2(data, revive2 = false) {
		if (data == void 0) return {};
		return revive2 ? parseCircularAutoChunks(data, reviver) : parseCircularAutoChunks(data);
	}
	var devtools = {
		hook,
		init: () => {
			initDevTools();
		},
		get ctx() {
			return devtoolsContext;
		},
		get api() {
			return devtoolsContext.api;
		}
	};
	0 && (module.exports = {
		DevToolsContextHookKeys,
		DevToolsMessagingHookKeys,
		DevToolsV6PluginAPIHookKeys,
		INFINITY,
		NAN,
		NEGATIVE_INFINITY,
		ROUTER_INFO_KEY,
		ROUTER_KEY,
		UNDEFINED,
		activeAppRecord,
		addCustomCommand,
		addCustomTab,
		addDevToolsAppRecord,
		addDevToolsPluginToBuffer,
		addInspector,
		callConnectedUpdatedHook,
		callDevToolsPluginSetupFn,
		callInspectorUpdatedHook,
		callStateUpdatedHook,
		createComponentsDevToolsPlugin,
		createDevToolsApi,
		createDevToolsCtxHooks,
		createRpcClient,
		createRpcProxy,
		createRpcServer,
		devtools,
		devtoolsAppRecords,
		devtoolsContext,
		devtoolsInspector,
		devtoolsPluginBuffer,
		devtoolsRouter,
		devtoolsRouterInfo,
		devtoolsState,
		escape,
		formatInspectorStateValue,
		getActiveInspectors,
		getDevToolsEnv,
		getExtensionClientContext,
		getInspector,
		getInspectorActions,
		getInspectorInfo,
		getInspectorNodeActions,
		getInspectorStateValueType,
		getRaw,
		getRpcClient,
		getRpcServer,
		getViteRpcClient,
		getViteRpcServer,
		initDevTools,
		isPlainObject,
		onDevToolsClientConnected,
		onDevToolsConnected,
		parse,
		registerDevToolsPlugin,
		removeCustomCommand,
		removeDevToolsAppRecord,
		removeRegisteredPluginApp,
		resetDevToolsState,
		setActiveAppRecord,
		setActiveAppRecordId,
		setDevToolsEnv,
		setElectronClientContext,
		setElectronProxyContext,
		setElectronServerContext,
		setExtensionClientContext,
		setIframeServerContext,
		setOpenInEditorBaseUrl,
		setRpcServerToGlobal,
		setViteClientContext,
		setViteRpcClientToGlobal,
		setViteRpcServerToGlobal,
		setViteServerContext,
		setupDevToolsPlugin,
		stringify,
		toEdit,
		toSubmit,
		toggleClientConnected,
		toggleComponentInspectorEnabled,
		toggleHighPerfMode,
		updateDevToolsClientDetected,
		updateDevToolsState,
		updateTimelineLayersState
	});
}));
//#endregion
//#region node_modules/@vue/devtools-api/dist/index.cjs
var require_dist = /* @__PURE__ */ require__plugin_vue_export_helper.__commonJSMin(((exports, module) => {
	var __defProp = Object.defineProperty;
	var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
	var __getOwnPropNames = Object.getOwnPropertyNames;
	var __hasOwnProp = Object.prototype.hasOwnProperty;
	var __export = (target, all) => {
		for (var name in all) __defProp(target, name, {
			get: all[name],
			enumerable: true
		});
	};
	var __copyProps = (to, from, except, desc) => {
		if (from && typeof from === "object" || typeof from === "function") {
			for (let key of __getOwnPropNames(from)) if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
				get: () => from[key],
				enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
			});
		}
		return to;
	};
	var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
	var index_exports = {};
	__export(index_exports, {
		addCustomCommand: () => import_devtools_kit.addCustomCommand,
		addCustomTab: () => import_devtools_kit.addCustomTab,
		onDevToolsClientConnected: () => import_devtools_kit.onDevToolsClientConnected,
		onDevToolsConnected: () => import_devtools_kit.onDevToolsConnected,
		removeCustomCommand: () => import_devtools_kit.removeCustomCommand,
		setupDevToolsPlugin: () => import_devtools_kit.setupDevToolsPlugin,
		setupDevtoolsPlugin: () => import_devtools_kit.setupDevToolsPlugin
	});
	module.exports = __toCommonJS(index_exports);
	var import_devtools_kit = require_dist$1();
	0 && (module.exports = {
		addCustomCommand,
		addCustomTab,
		onDevToolsClientConnected,
		onDevToolsConnected,
		removeCustomCommand,
		setupDevToolsPlugin,
		setupDevtoolsPlugin
	});
}));
/*!
* pinia v3.0.3
* (c) 2025 Eduardo San Martin Morote
* @license MIT
*/
/*! #__NO_SIDE_EFFECTS__ */
//#endregion
//#region node_modules/vue-final-modal/dist/VueFinalModal.esm.js
var import_pinia_prod = (/* @__PURE__ */ require__plugin_vue_export_helper.__commonJSMin(((exports) => {
	var vue = require__plugin_vue_export_helper.require_vue_cjs_prod();
	require_dist();
	/**
	* setActivePinia must be called to handle SSR at the top of functions like
	* `fetch`, `setup`, `serverPrefetch` and others
	*/
	var activePinia;
	/**
	* Sets or unsets the active pinia. Used in SSR and internally when calling
	* actions and getters
	*
	* @param pinia - Pinia instance
	*/
	var setActivePinia = (pinia) => activePinia = pinia;
	/**
	* Get the currently active pinia if there is any.
	*/
	var getActivePinia = () => vue.hasInjectionContext() && vue.inject(piniaSymbol) || activePinia;
	var piniaSymbol = Symbol();
	function isPlainObject(o) {
		return o && typeof o === "object" && Object.prototype.toString.call(o) === "[object Object]" && typeof o.toJSON !== "function";
	}
	/**
	* Possible types for SubscriptionCallback
	*/
	exports.MutationType = void 0;
	(function(MutationType) {
		/**
		* Direct mutation of the state:
		*
		* - `store.name = 'new name'`
		* - `store.$state.name = 'new name'`
		* - `store.list.push('new item')`
		*/
		MutationType["direct"] = "direct";
		/**
		* Mutated the state with `$patch` and an object
		*
		* - `store.$patch({ name: 'newName' })`
		*/
		MutationType["patchObject"] = "patch object";
		/**
		* Mutated the state with `$patch` and a function
		*
		* - `store.$patch(state => state.name = 'newName')`
		*/
		MutationType["patchFunction"] = "patch function";
	})(exports.MutationType || (exports.MutationType = {}));
	/**
	* Creates a Pinia instance to be used by the application
	*/
	function createPinia() {
		const scope = vue.effectScope(true);
		const state = scope.run(() => vue.ref({}));
		let _p = [];
		let toBeInstalled = [];
		const pinia = vue.markRaw({
			install(app) {
				setActivePinia(pinia);
				pinia._a = app;
				app.provide(piniaSymbol, pinia);
				app.config.globalProperties.$pinia = pinia;
				toBeInstalled.forEach((plugin) => _p.push(plugin));
				toBeInstalled = [];
			},
			use(plugin) {
				if (!this._a) toBeInstalled.push(plugin);
				else _p.push(plugin);
				return this;
			},
			_p,
			_a: null,
			_e: scope,
			_s: /* @__PURE__ */ new Map(),
			state
		});
		return pinia;
	}
	/**
	* Dispose a Pinia instance by stopping its effectScope and removing the state, plugins and stores. This is mostly
	* useful in tests, with both a testing pinia or a regular pinia and in applications that use multiple pinia instances.
	* Once disposed, the pinia instance cannot be used anymore.
	*
	* @param pinia - pinia instance
	*/
	function disposePinia(pinia) {
		pinia._e.stop();
		pinia._s.clear();
		pinia._p.splice(0);
		pinia.state.value = {};
		pinia._a = null;
	}
	/**
	* Creates an _accept_ function to pass to `import.meta.hot` in Vite applications.
	*
	* @example
	* ```js
	* const useUser = defineStore(...)
	* if (import.meta.hot) {
	*   import.meta.hot.accept(acceptHMRUpdate(useUser, import.meta.hot))
	* }
	* ```
	*
	* @param initialUseStore - return of the defineStore to hot update
	* @param hot - `import.meta.hot`
	*/
	function acceptHMRUpdate(initialUseStore, hot) {
		return () => {};
	}
	var noop = () => {};
	function addSubscription(subscriptions, callback, detached, onCleanup = noop) {
		subscriptions.push(callback);
		const removeSubscription = () => {
			const idx = subscriptions.indexOf(callback);
			if (idx > -1) {
				subscriptions.splice(idx, 1);
				onCleanup();
			}
		};
		if (!detached && vue.getCurrentScope()) vue.onScopeDispose(removeSubscription);
		return removeSubscription;
	}
	function triggerSubscriptions(subscriptions, ...args) {
		subscriptions.slice().forEach((callback) => {
			callback(...args);
		});
	}
	var fallbackRunWithContext = (fn) => fn();
	/**
	* Marks a function as an action for `$onAction`
	* @internal
	*/
	var ACTION_MARKER = Symbol();
	/**
	* Action name symbol. Allows to add a name to an action after defining it
	* @internal
	*/
	var ACTION_NAME = Symbol();
	function mergeReactiveObjects(target, patchToApply) {
		if (target instanceof Map && patchToApply instanceof Map) patchToApply.forEach((value, key) => target.set(key, value));
		else if (target instanceof Set && patchToApply instanceof Set) patchToApply.forEach(target.add, target);
		for (const key in patchToApply) {
			if (!patchToApply.hasOwnProperty(key)) continue;
			const subPatch = patchToApply[key];
			const targetValue = target[key];
			if (isPlainObject(targetValue) && isPlainObject(subPatch) && target.hasOwnProperty(key) && !vue.isRef(subPatch) && !vue.isReactive(subPatch)) target[key] = mergeReactiveObjects(targetValue, subPatch);
			else target[key] = subPatch;
		}
		return target;
	}
	var skipHydrateSymbol = Symbol();
	/**
	* Tells Pinia to skip the hydration process of a given object. This is useful in setup stores (only) when you return a
	* stateful object in the store but it isn't really state. e.g. returning a router instance in a setup store.
	*
	* @param obj - target object
	* @returns obj
	*/
	function skipHydrate(obj) {
		return Object.defineProperty(obj, skipHydrateSymbol, {});
	}
	/**
	* Returns whether a value should be hydrated
	*
	* @param obj - target variable
	* @returns true if `obj` should be hydrated
	*/
	function shouldHydrate(obj) {
		return !isPlainObject(obj) || !Object.prototype.hasOwnProperty.call(obj, skipHydrateSymbol);
	}
	var { assign } = Object;
	function isComputed(o) {
		return !!(vue.isRef(o) && o.effect);
	}
	function createOptionsStore(id, options, pinia, hot) {
		const { state, actions, getters } = options;
		const initialState = pinia.state.value[id];
		let store;
		function setup() {
			if (!initialState && true)
 /* istanbul ignore if */
			pinia.state.value[id] = state ? state() : {};
			return assign(vue.toRefs(pinia.state.value[id]), actions, Object.keys(getters || {}).reduce((computedGetters, name) => {
				computedGetters[name] = vue.markRaw(vue.computed(() => {
					setActivePinia(pinia);
					const store = pinia._s.get(id);
					return getters[name].call(store, store);
				}));
				return computedGetters;
			}, {}));
		}
		store = createSetupStore(id, setup, options, pinia, hot, true);
		return store;
	}
	function createSetupStore($id, setup, options = {}, pinia, hot, isOptionsStore) {
		let scope;
		const optionsForPlugin = assign({ actions: {} }, options);
		const $subscribeOptions = { deep: true };
		let isListening;
		let isSyncListening;
		let subscriptions = [];
		let actionSubscriptions = [];
		let debuggerEvents;
		const initialState = pinia.state.value[$id];
		if (!isOptionsStore && !initialState && true)
 /* istanbul ignore if */
		pinia.state.value[$id] = {};
		vue.ref({});
		let activeListener;
		function $patch(partialStateOrMutator) {
			let subscriptionMutation;
			isListening = isSyncListening = false;
			if (typeof partialStateOrMutator === "function") {
				partialStateOrMutator(pinia.state.value[$id]);
				subscriptionMutation = {
					type: exports.MutationType.patchFunction,
					storeId: $id,
					events: debuggerEvents
				};
			} else {
				mergeReactiveObjects(pinia.state.value[$id], partialStateOrMutator);
				subscriptionMutation = {
					type: exports.MutationType.patchObject,
					payload: partialStateOrMutator,
					storeId: $id,
					events: debuggerEvents
				};
			}
			const myListenerId = activeListener = Symbol();
			vue.nextTick().then(() => {
				if (activeListener === myListenerId) isListening = true;
			});
			isSyncListening = true;
			triggerSubscriptions(subscriptions, subscriptionMutation, pinia.state.value[$id]);
		}
		const $reset = isOptionsStore ? function $reset() {
			const { state } = options;
			const newState = state ? state() : {};
			this.$patch(($state) => {
				assign($state, newState);
			});
		} : noop;
		function $dispose() {
			scope.stop();
			subscriptions = [];
			actionSubscriptions = [];
			pinia._s.delete($id);
		}
		/**
		* Helper that wraps function so it can be tracked with $onAction
		* @param fn - action to wrap
		* @param name - name of the action
		*/
		const action = (fn, name = "") => {
			if (ACTION_MARKER in fn) {
				fn[ACTION_NAME] = name;
				return fn;
			}
			const wrappedAction = function() {
				setActivePinia(pinia);
				const args = Array.from(arguments);
				const afterCallbackList = [];
				const onErrorCallbackList = [];
				function after(callback) {
					afterCallbackList.push(callback);
				}
				function onError(callback) {
					onErrorCallbackList.push(callback);
				}
				triggerSubscriptions(actionSubscriptions, {
					args,
					name: wrappedAction[ACTION_NAME],
					store,
					after,
					onError
				});
				let ret;
				try {
					ret = fn.apply(this && this.$id === $id ? this : store, args);
				} catch (error) {
					triggerSubscriptions(onErrorCallbackList, error);
					throw error;
				}
				if (ret instanceof Promise) return ret.then((value) => {
					triggerSubscriptions(afterCallbackList, value);
					return value;
				}).catch((error) => {
					triggerSubscriptions(onErrorCallbackList, error);
					return Promise.reject(error);
				});
				triggerSubscriptions(afterCallbackList, ret);
				return ret;
			};
			wrappedAction[ACTION_MARKER] = true;
			wrappedAction[ACTION_NAME] = name;
			return wrappedAction;
		};
		const partialStore = {
			_p: pinia,
			$id,
			$onAction: addSubscription.bind(null, actionSubscriptions),
			$patch,
			$reset,
			$subscribe(callback, options = {}) {
				const removeSubscription = addSubscription(subscriptions, callback, options.detached, () => stopWatcher());
				const stopWatcher = scope.run(() => vue.watch(() => pinia.state.value[$id], (state) => {
					if (options.flush === "sync" ? isSyncListening : isListening) callback({
						storeId: $id,
						type: exports.MutationType.direct,
						events: debuggerEvents
					}, state);
				}, assign({}, $subscribeOptions, options)));
				return removeSubscription;
			},
			$dispose
		};
		const store = vue.reactive(partialStore);
		pinia._s.set($id, store);
		const setupStore = (pinia._a && pinia._a.runWithContext || fallbackRunWithContext)(() => pinia._e.run(() => (scope = vue.effectScope()).run(() => setup({ action }))));
		for (const key in setupStore) {
			const prop = setupStore[key];
			if (vue.isRef(prop) && !isComputed(prop) || vue.isReactive(prop)) {
				if (!isOptionsStore) {
					if (initialState && shouldHydrate(prop)) if (vue.isRef(prop)) prop.value = initialState[key];
					else mergeReactiveObjects(prop, initialState[key]);
					pinia.state.value[$id][key] = prop;
				}
			} else if (typeof prop === "function") {
				setupStore[key] = action(prop, key);
				optionsForPlugin.actions[key] = prop;
			}
		}
		/* istanbul ignore if */
		assign(store, setupStore);
		assign(vue.toRaw(store), setupStore);
		Object.defineProperty(store, "$state", {
			get: () => pinia.state.value[$id],
			set: (state) => {
				$patch(($state) => {
					assign($state, state);
				});
			}
		});
		pinia._p.forEach((extender) => {
			assign(store, scope.run(() => extender({
				store,
				app: pinia._a,
				pinia,
				options: optionsForPlugin
			})));
		});
		if (initialState && isOptionsStore && options.hydrate) options.hydrate(store.$state, initialState);
		isListening = true;
		isSyncListening = true;
		return store;
	}
	function defineStore(id, setup, setupOptions) {
		let options;
		const isSetupStore = typeof setup === "function";
		options = isSetupStore ? setupOptions : setup;
		function useStore(pinia, hot) {
			const hasContext = vue.hasInjectionContext();
			pinia = (process.env.NODE_ENV === "test" && activePinia && activePinia._testing ? null : pinia) || (hasContext ? vue.inject(piniaSymbol, null) : null);
			if (pinia) setActivePinia(pinia);
			pinia = activePinia;
			if (!pinia._s.has(id)) if (isSetupStore) createSetupStore(id, setup, options, pinia);
			else createOptionsStore(id, options, pinia);
			return pinia._s.get(id);
		}
		useStore.$id = id;
		return useStore;
	}
	var mapStoreSuffix = "Store";
	/**
	* Changes the suffix added by `mapStores()`. Can be set to an empty string.
	* Defaults to `"Store"`. Make sure to extend the MapStoresCustomization
	* interface if you are using TypeScript.
	*
	* @param suffix - new suffix
	*/
	function setMapStoreSuffix(suffix) {
		mapStoreSuffix = suffix;
	}
	/**
	* Allows using stores without the composition API (`setup()`) by generating an
	* object to be spread in the `computed` field of a component. It accepts a list
	* of store definitions.
	*
	* @example
	* ```js
	* export default {
	*   computed: {
	*     // other computed properties
	*     ...mapStores(useUserStore, useCartStore)
	*   },
	*
	*   created() {
	*     this.userStore // store with id "user"
	*     this.cartStore // store with id "cart"
	*   }
	* }
	* ```
	*
	* @param stores - list of stores to map to an object
	*/
	function mapStores(...stores) {
		return stores.reduce((reduced, useStore) => {
			reduced[useStore.$id + mapStoreSuffix] = function() {
				return useStore(this.$pinia);
			};
			return reduced;
		}, {});
	}
	/**
	* Allows using state and getters from one store without using the composition
	* API (`setup()`) by generating an object to be spread in the `computed` field
	* of a component.
	*
	* @param useStore - store to map from
	* @param keysOrMapper - array or object
	*/
	function mapState(useStore, keysOrMapper) {
		return Array.isArray(keysOrMapper) ? keysOrMapper.reduce((reduced, key) => {
			reduced[key] = function() {
				return useStore(this.$pinia)[key];
			};
			return reduced;
		}, {}) : Object.keys(keysOrMapper).reduce((reduced, key) => {
			reduced[key] = function() {
				const store = useStore(this.$pinia);
				const storeKey = keysOrMapper[key];
				return typeof storeKey === "function" ? storeKey.call(this, store) : store[storeKey];
			};
			return reduced;
		}, {});
	}
	/**
	* Alias for `mapState()`. You should use `mapState()` instead.
	* @deprecated use `mapState()` instead.
	*/
	var mapGetters = mapState;
	/**
	* Allows directly using actions from your store without using the composition
	* API (`setup()`) by generating an object to be spread in the `methods` field
	* of a component.
	*
	* @param useStore - store to map from
	* @param keysOrMapper - array or object
	*/
	function mapActions(useStore, keysOrMapper) {
		return Array.isArray(keysOrMapper) ? keysOrMapper.reduce((reduced, key) => {
			reduced[key] = function(...args) {
				return useStore(this.$pinia)[key](...args);
			};
			return reduced;
		}, {}) : Object.keys(keysOrMapper).reduce((reduced, key) => {
			reduced[key] = function(...args) {
				return useStore(this.$pinia)[keysOrMapper[key]](...args);
			};
			return reduced;
		}, {});
	}
	/**
	* Allows using state and getters from one store without using the composition
	* API (`setup()`) by generating an object to be spread in the `computed` field
	* of a component.
	*
	* @param useStore - store to map from
	* @param keysOrMapper - array or object
	*/
	function mapWritableState(useStore, keysOrMapper) {
		return Array.isArray(keysOrMapper) ? keysOrMapper.reduce((reduced, key) => {
			reduced[key] = {
				get() {
					return useStore(this.$pinia)[key];
				},
				set(value) {
					return useStore(this.$pinia)[key] = value;
				}
			};
			return reduced;
		}, {}) : Object.keys(keysOrMapper).reduce((reduced, key) => {
			reduced[key] = {
				get() {
					return useStore(this.$pinia)[keysOrMapper[key]];
				},
				set(value) {
					return useStore(this.$pinia)[keysOrMapper[key]] = value;
				}
			};
			return reduced;
		}, {});
	}
	/**
	* Creates an object of references with all the state, getters, and plugin-added
	* state properties of the store. Similar to `toRefs()` but specifically
	* designed for Pinia stores so methods and non reactive properties are
	* completely ignored.
	*
	* @param store - store to extract the refs from
	*/
	function storeToRefs(store) {
		const rawStore = vue.toRaw(store);
		const refs = {};
		for (const key in rawStore) {
			const value = rawStore[key];
			if (value.effect) refs[key] = vue.computed({
				get: () => store[key],
				set(value) {
					store[key] = value;
				}
			});
			else if (vue.isRef(value) || vue.isReactive(value)) refs[key] = vue.toRef(store, key);
		}
		return refs;
	}
	exports.acceptHMRUpdate = acceptHMRUpdate;
	exports.createPinia = createPinia;
	exports.defineStore = defineStore;
	exports.disposePinia = disposePinia;
	exports.getActivePinia = getActivePinia;
	exports.mapActions = mapActions;
	exports.mapGetters = mapGetters;
	exports.mapState = mapState;
	exports.mapStores = mapStores;
	exports.mapWritableState = mapWritableState;
	exports.setActivePinia = setActivePinia;
	exports.setMapStoreSuffix = setMapStoreSuffix;
	exports.shouldHydrate = shouldHydrate;
	exports.skipHydrate = skipHydrate;
	exports.storeToRefs = storeToRefs;
})))();
function _typeof$1(obj) {
	"@babel/helpers - typeof";
	if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof$1 = function(obj) {
		return typeof obj;
	};
	else _typeof$1 = function(obj) {
		return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	};
	return _typeof$1(obj);
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
	try {
		var info = gen[key](arg);
		var value = info.value;
	} catch (error) {
		reject(error);
		return;
	}
	if (info.done) resolve(value);
	else Promise.resolve(value).then(_next, _throw);
}
function _asyncToGenerator(fn) {
	return function() {
		var self = this, args = arguments;
		return new Promise(function(resolve, reject) {
			var gen = fn.apply(self, args);
			function _next(value) {
				asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
			}
			function _throw(err) {
				asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
			}
			_next(void 0);
		});
	};
}
function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
	for (var i = 0; i < props.length; i++) {
		var descriptor = props[i];
		descriptor.enumerable = descriptor.enumerable || false;
		descriptor.configurable = true;
		if ("value" in descriptor) descriptor.writable = true;
		Object.defineProperty(target, descriptor.key, descriptor);
	}
}
function _createClass(Constructor, protoProps, staticProps) {
	if (protoProps) _defineProperties(Constructor.prototype, protoProps);
	if (staticProps) _defineProperties(Constructor, staticProps);
	return Constructor;
}
function _defineProperty$2(obj, key, value) {
	if (key in obj) Object.defineProperty(obj, key, {
		value,
		enumerable: true,
		configurable: true,
		writable: true
	});
	else obj[key] = value;
	return obj;
}
function ownKeys$2(object, enumerableOnly) {
	var keys = Object.keys(object);
	if (Object.getOwnPropertySymbols) {
		var symbols = Object.getOwnPropertySymbols(object);
		if (enumerableOnly) symbols = symbols.filter(function(sym) {
			return Object.getOwnPropertyDescriptor(object, sym).enumerable;
		});
		keys.push.apply(keys, symbols);
	}
	return keys;
}
function _objectSpread2$2(target) {
	for (var i = 1; i < arguments.length; i++) {
		var source = arguments[i] != null ? arguments[i] : {};
		if (i % 2) ownKeys$2(Object(source), true).forEach(function(key) {
			_defineProperty$2(target, key, source[key]);
		});
		else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
		else ownKeys$2(Object(source)).forEach(function(key) {
			Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
		});
	}
	return target;
}
function _toConsumableArray$1(arr) {
	return _arrayWithoutHoles$1(arr) || _iterableToArray$1(arr) || _unsupportedIterableToArray$1(arr) || _nonIterableSpread$1();
}
function _arrayWithoutHoles$1(arr) {
	if (Array.isArray(arr)) return _arrayLikeToArray$1(arr);
}
function _iterableToArray$1(iter) {
	if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}
function _unsupportedIterableToArray$1(o, minLen) {
	if (!o) return;
	if (typeof o === "string") return _arrayLikeToArray$1(o, minLen);
	var n = Object.prototype.toString.call(o).slice(8, -1);
	if (n === "Object" && o.constructor) n = o.constructor.name;
	if (n === "Map" || n === "Set") return Array.from(o);
	if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen);
}
function _arrayLikeToArray$1(arr, len) {
	if (len == null || len > arr.length) len = arr.length;
	for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
	return arr2;
}
function _nonIterableSpread$1() {
	throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
var FOCUSABLE_ELEMENTS_QUERY = "button:not([disabled]), select:not([disabled]), a[href]:not([disabled]), area[href]:not([disabled]), [contentEditable=\"\"]:not([disabled]), [contentEditable=\"true\"]:not([disabled]), [contentEditable=\"TRUE\"]:not([disabled]), textarea:not([disabled]), iframe:not([disabled]), input:not([disabled]), summary:not([disabled]), [tabindex]:not([tabindex=\"-1\"])";
var isTabPressed = function isTabPressed(event) {
	return event.key === "Tab" || event.keyCode === 9;
};
var querySelectorAll = function querySelectorAll(element, selector) {
	return _toConsumableArray$1(element.querySelectorAll(selector) || []);
};
var queryFocusableElements = function queryFocusableElements(element) {
	return querySelectorAll(element, FOCUSABLE_ELEMENTS_QUERY);
};
var isFocused = function isFocused(element) {
	return element == document.activeElement;
};
var isNothingFocused = function isNothingFocused() {
	return !document.activeElement;
};
var FocusTrap = /*#__PURE__*/ function() {
	function FocusTrap() {
		_classCallCheck(this, FocusTrap);
		this.root = null;
		this.elements = [];
		this.onKeyDown = this.onKeyDown.bind(this);
		this.enable = this.enable.bind(this);
		this.disable = this.disable.bind(this);
		this.firstElement = this.firstElement.bind(this);
		this.lastElement = this.lastElement.bind(this);
	}
	_createClass(FocusTrap, [
		{
			key: "lastElement",
			value: function lastElement() {
				return this.elements[this.elements.length - 1] || null;
			}
		},
		{
			key: "firstElement",
			value: function firstElement() {
				return this.elements[0] || null;
			}
		},
		{
			key: "onKeyDown",
			value: function onKeyDown(event) {
				if (!isTabPressed(event)) return;
				if (event.shiftKey) {
					if (isFocused(this.firstElement())) {
						this.lastElement().focus();
						event.preventDefault();
					}
					return;
				}
				if (isNothingFocused() || isFocused(this.lastElement())) {
					this.firstElement().focus();
					event.preventDefault();
					return;
				}
			}
		},
		{
			key: "enabled",
			value: function enabled() {
				return !!this.root;
			}
		},
		{
			key: "enable",
			value: function enable(root) {
				if (!root) return;
				this.root = root;
				this.elements = queryFocusableElements(this.root);
				this.root.addEventListener("keydown", this.onKeyDown);
			}
		},
		{
			key: "disable",
			value: function disable() {
				this.root.removeEventListener("keydown", this.onKeyDown);
				this.root = null;
			}
		}
	]);
	return FocusTrap;
}();
var setStyle = function setStyle(el, key, value) {
	var cacheStyle = el.style[key];
	el.style[key] = value;
	return function() {
		el.style[key] = cacheStyle;
	};
};
var getPosition = function getPosition(e) {
	var _ref = e.targetTouches ? e.targetTouches[0] : e;
	return {
		x: _ref.clientX,
		y: _ref.clientY
	};
};
var capitalize = function capitalize(s) {
	return s.charAt(0).toUpperCase() + s.slice(1);
};
var clamp = function clamp(min, num, max) {
	if (typeof min !== "number") min = Math.min(num, max) || num;
	if (typeof max !== "number") max = Math.max(num, min);
	return Math.min(Math.max(num, min), max);
};
var trimPx = function trimPx(distance) {
	return distance && Number(distance.replace(/px$/, "")) || 0;
};
var validDragElement = function validDragElement(e, el, dragSelector) {
	if (dragSelector === "") return true;
	return _toConsumableArray$1(el.querySelectorAll(dragSelector)).includes(e.target);
};
var pointerType = {
	down: {
		pc: "mousedown",
		m: "touchstart"
	},
	move: {
		pc: "mousemove",
		m: "touchmove"
	},
	up: {
		pc: "mouseup",
		m: "touchend"
	}
};
var addListener = function addListener(type, el, callback) {
	el && el.addEventListener(pointerType[type].pc, callback);
	el && el.addEventListener(pointerType[type].m, callback, { passive: false });
};
var removeListener = function removeListener(type, el, callback) {
	el && el.removeEventListener(pointerType[type].pc, callback);
	el && el.removeEventListener(pointerType[type].m, callback);
};
var hasPassiveEvents = false;
if (typeof window !== "undefined") {
	var passiveTestOptions = { get passive() {
		hasPassiveEvents = true;
	} };
	window.addEventListener("testPassive", null, passiveTestOptions);
	window.removeEventListener("testPassive", null, passiveTestOptions);
}
var isIosDevice = typeof window !== "undefined" && window.navigator && window.navigator.platform && (/iP(ad|hone|od)/.test(window.navigator.platform) || window.navigator.platform === "MacIntel" && window.navigator.maxTouchPoints > 1);
var locks = [];
var documentListenerAdded = false;
var clientY = 0;
var initialClientY = -1;
var previousBodyOverflowSetting;
var previousBodyPaddingRight;
var hasScrollbar = function hasScrollbar(el) {
	if (!el || el.nodeType !== Node.ELEMENT_NODE) return false;
	var style = window.getComputedStyle(el);
	return ["auto", "scroll"].includes(style.overflowY) && el.scrollHeight > el.clientHeight;
};
var shouldScroll = function shouldScroll(el, delta) {
	if (el.scrollTop === 0 && delta < 0) return false;
	if (el.scrollTop + el.clientHeight + delta >= el.scrollHeight && delta > 0) return false;
	return true;
};
var composedPath = function composedPath(el) {
	var path = [];
	while (el) {
		path.push(el);
		if (el.classList.contains("vfm")) return path;
		el = el.parentElement;
	}
	return path;
};
var hasAnyScrollableEl = function hasAnyScrollableEl(el, delta) {
	var hasAnyScrollableEl = false;
	composedPath(el).forEach(function(el) {
		if (hasScrollbar(el) && shouldScroll(el, delta)) hasAnyScrollableEl = true;
	});
	return hasAnyScrollableEl;
};
var allowTouchMove = function allowTouchMove(el) {
	return locks.some(function() {
		return hasAnyScrollableEl(el, -clientY);
	});
};
var preventDefault = function preventDefault(rawEvent) {
	var e = rawEvent || window.event;
	if (allowTouchMove(e.target)) return true;
	if (e.touches.length > 1) return true;
	if (e.preventDefault) e.preventDefault();
	return false;
};
var setOverflowHidden = function setOverflowHidden(options) {
	if (previousBodyPaddingRight === void 0) {
		var reserveScrollBarGap = !!options && options.reserveScrollBarGap === true;
		var scrollBarGap = window.innerWidth - document.documentElement.clientWidth;
		if (reserveScrollBarGap && scrollBarGap > 0) {
			var computedBodyPaddingRight = parseInt(getComputedStyle(document.body).getPropertyValue("padding-right"), 10);
			previousBodyPaddingRight = document.body.style.paddingRight;
			document.body.style.paddingRight = "".concat(computedBodyPaddingRight + scrollBarGap, "px");
		}
	}
	if (previousBodyOverflowSetting === void 0) {
		previousBodyOverflowSetting = document.body.style.overflow;
		document.body.style.overflow = "hidden";
	}
};
var restoreOverflowSetting = function restoreOverflowSetting() {
	if (previousBodyPaddingRight !== void 0) {
		document.body.style.paddingRight = previousBodyPaddingRight;
		previousBodyPaddingRight = void 0;
	}
	if (previousBodyOverflowSetting !== void 0) {
		document.body.style.overflow = previousBodyOverflowSetting;
		previousBodyOverflowSetting = void 0;
	}
};
var isTargetElementTotallyScrolled = function isTargetElementTotallyScrolled(targetElement) {
	return targetElement ? targetElement.scrollHeight - targetElement.scrollTop <= targetElement.clientHeight : false;
};
var handleScroll = function handleScroll(event, targetElement) {
	clientY = event.targetTouches[0].clientY - initialClientY;
	if (allowTouchMove(event.target)) return false;
	if (targetElement && targetElement.scrollTop === 0 && clientY > 0) return preventDefault(event);
	if (isTargetElementTotallyScrolled(targetElement) && clientY < 0) return preventDefault(event);
	event.stopPropagation();
	return true;
};
var disableBodyScroll = function disableBodyScroll(targetElement, options) {
	if (!targetElement) {
		console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");
		return;
	}
	if (locks.some(function(lock) {
		return lock.targetElement === targetElement;
	})) return;
	var lock = {
		targetElement,
		options: options || {}
	};
	locks = [].concat(_toConsumableArray$1(locks), [lock]);
	if (isIosDevice) {
		targetElement.ontouchstart = function(event) {
			if (event.targetTouches.length === 1) initialClientY = event.targetTouches[0].clientY;
		};
		targetElement.ontouchmove = function(event) {
			if (event.targetTouches.length === 1) handleScroll(event, targetElement);
		};
		if (!documentListenerAdded) {
			document.addEventListener("touchmove", preventDefault, hasPassiveEvents ? { passive: false } : void 0);
			documentListenerAdded = true;
		}
	} else setOverflowHidden(options);
};
var enableBodyScroll = function enableBodyScroll(targetElement) {
	if (!targetElement) {
		console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");
		return;
	}
	locks = locks.filter(function(lock) {
		return lock.targetElement !== targetElement;
	});
	if (isIosDevice) {
		targetElement.ontouchstart = null;
		targetElement.ontouchmove = null;
		if (documentListenerAdded && locks.length === 0) {
			document.removeEventListener("touchmove", preventDefault, hasPassiveEvents ? { passive: false } : void 0);
			documentListenerAdded = false;
		}
	} else if (!locks.length) restoreOverflowSetting();
};
var noop$3 = function noop() {};
var TransitionState = {
	Enter: "enter",
	Entering: "entering",
	Leave: "leave",
	Leaving: "leavng"
};
var resizeCursor = {
	t: "ns-resize",
	tr: "nesw-resize",
	r: "ew-resize",
	br: "nwse-resize",
	b: "ns-resize",
	bl: "nesw-resize",
	l: "ew-resize",
	tl: "nwse-resize"
};
var script$1 = {
	props: {
		name: {
			type: String,
			"default": null
		},
		modelValue: {
			type: Boolean,
			"default": false
		},
		ssr: {
			type: Boolean,
			"default": true
		},
		classes: {
			type: [
				String,
				Object,
				Array
			],
			"default": ""
		},
		overlayClass: {
			type: [
				String,
				Object,
				Array
			],
			"default": ""
		},
		contentClass: {
			type: [
				String,
				Object,
				Array
			],
			"default": ""
		},
		styles: {
			type: [Object, Array],
			"default": function _default() {
				return {};
			}
		},
		overlayStyle: {
			type: [Object, Array],
			"default": function _default() {
				return {};
			}
		},
		contentStyle: {
			type: [Object, Array],
			"default": function _default() {
				return {};
			}
		},
		lockScroll: {
			type: Boolean,
			"default": true
		},
		hideOverlay: {
			type: Boolean,
			"default": false
		},
		clickToClose: {
			type: Boolean,
			"default": true
		},
		escToClose: {
			type: Boolean,
			"default": false
		},
		preventClick: {
			type: Boolean,
			"default": false
		},
		attach: {
			type: null,
			"default": false,
			validator: function validator(val) {
				var type = _typeof$1(val);
				if (type === "boolean" || type === "string") return true;
				return val.nodeType === Node.ELEMENT_NODE;
			}
		},
		transition: {
			type: [String, Object],
			"default": "vfm"
		},
		overlayTransition: {
			type: [String, Object],
			"default": "vfm"
		},
		keepOverlay: {
			type: Boolean,
			"default": false
		},
		zIndexAuto: {
			type: Boolean,
			"default": true
		},
		zIndexBase: {
			type: [String, Number],
			"default": 1e3
		},
		zIndex: {
			type: [
				Boolean,
				String,
				Number
			],
			"default": false
		},
		focusRetain: {
			type: Boolean,
			"default": true
		},
		focusTrap: {
			type: Boolean,
			"default": false
		},
		fitParent: {
			type: Boolean,
			"default": true
		},
		drag: {
			type: Boolean,
			"default": false
		},
		dragSelector: {
			type: String,
			"default": ""
		},
		keepChangedStyle: {
			type: Boolean,
			"default": false
		},
		resize: {
			type: Boolean,
			"default": false
		},
		resizeDirections: {
			type: Array,
			"default": function _default() {
				return [
					"t",
					"tr",
					"r",
					"br",
					"b",
					"bl",
					"l",
					"tl"
				];
			},
			validator: function validator(val) {
				return [
					"t",
					"tr",
					"r",
					"br",
					"b",
					"bl",
					"l",
					"tl"
				].filter(function(value) {
					return val.indexOf(value) !== -1;
				}).length === val.length;
			}
		},
		minWidth: {
			type: Number,
			"default": 0
		},
		minHeight: {
			type: Number,
			"default": 0
		},
		maxWidth: {
			type: Number,
			"default": Infinity
		},
		maxHeight: {
			type: Number,
			"default": Infinity
		}
	},
	emits: [
		"update:modelValue",
		"click-outside",
		"before-open",
		"opened",
		"before-close",
		"closed",
		"_before-open",
		"_opened",
		"_closed",
		"drag:start",
		"drag:move",
		"drag:end",
		"resize:start",
		"resize:move",
		"resize:end"
	],
	setup: function setup(props, _ref) {
		var emit = _ref.emit;
		var uid = Symbol("vfm");
		var root = (0, require__plugin_vue_export_helper.vue_exports.ref)(null);
		var vfmContainer = (0, require__plugin_vue_export_helper.vue_exports.ref)(null);
		var vfmContent = (0, require__plugin_vue_export_helper.vue_exports.ref)(null);
		var vfmResize = (0, require__plugin_vue_export_helper.vue_exports.ref)(null);
		var vfmOverlayTransition = (0, require__plugin_vue_export_helper.vue_exports.ref)(null);
		var vfmTransition = (0, require__plugin_vue_export_helper.vue_exports.ref)(null);
		var modalStackIndex = (0, require__plugin_vue_export_helper.vue_exports.ref)(null);
		var $focusTrap = new FocusTrap();
		var visible = (0, require__plugin_vue_export_helper.vue_exports.ref)(false);
		var visibility = (0, require__plugin_vue_export_helper.vue_exports.reactive)({
			modal: false,
			overlay: false,
			resize: false
		});
		var overlayTransitionState = (0, require__plugin_vue_export_helper.vue_exports.ref)(null);
		var modalTransitionState = (0, require__plugin_vue_export_helper.vue_exports.ref)(null);
		var _stopEvent = (0, require__plugin_vue_export_helper.vue_exports.ref)(false);
		var params = (0, require__plugin_vue_export_helper.vue_exports.ref)({});
		var dragResizeStyle = (0, require__plugin_vue_export_helper.vue_exports.ref)({});
		var _state = (0, require__plugin_vue_export_helper.vue_exports.ref)(null);
		var lastMousedownEl = (0, require__plugin_vue_export_helper.vue_exports.ref)(null);
		var _resolveToggle = noop$3;
		var _rejectToggle = noop$3;
		var computedOverlayTransition = (0, require__plugin_vue_export_helper.vue_exports.computed)(function() {
			if (typeof props.overlayTransition === "string") return { name: props.overlayTransition };
			return _objectSpread2$2({}, props.overlayTransition);
		});
		var computedTransition = (0, require__plugin_vue_export_helper.vue_exports.computed)(function() {
			if (typeof props.transition === "string") return { name: props.transition };
			return _objectSpread2$2({}, props.transition);
		});
		var isComponentReadyToBeDestroyed = (0, require__plugin_vue_export_helper.vue_exports.computed)(function() {
			return (props.hideOverlay || overlayTransitionState.value === TransitionState.Leave) && modalTransitionState.value === TransitionState.Leave;
		});
		var calculateZIndex = (0, require__plugin_vue_export_helper.vue_exports.computed)(function() {
			if (props.zIndex === false) if (props.zIndexAuto) return +props.zIndexBase + 2 * (modalStackIndex.value || 0);
			else return false;
			else return props.zIndex;
		});
		var bindStyle = (0, require__plugin_vue_export_helper.vue_exports.computed)(function() {
			return _objectSpread2$2({}, calculateZIndex.value !== false && { zIndex: calculateZIndex.value });
		});
		var bindContentStyle = (0, require__plugin_vue_export_helper.vue_exports.computed)(function() {
			var style = [dragResizeStyle.value];
			Array.isArray(props.contentStyle) ? style.push.apply(style, _toConsumableArray$1(props.contentStyle)) : style.push(props.contentStyle);
			return style;
		});
		(0, require__plugin_vue_export_helper.vue_exports.watch)(function() {
			return props.modelValue;
		}, function(value) {
			if (_stopEvent.value) {
				_stopEvent.value = false;
				return;
			}
			mounted();
			if (!value) {
				if (emitEvent("before-close", true)) {
					_rejectToggle("hide");
					return;
				}
				close();
			}
		});
		(0, require__plugin_vue_export_helper.vue_exports.watch)(function() {
			return props.lockScroll;
		}, handleLockScroll);
		(0, require__plugin_vue_export_helper.vue_exports.watch)(function() {
			return props.hideOverlay;
		}, function(value) {
			if (props.modelValue && !value) visibility.overlay = true;
		});
		(0, require__plugin_vue_export_helper.vue_exports.watch)(function() {
			return props.attach;
		}, mounted);
		(0, require__plugin_vue_export_helper.vue_exports.watch)(isComponentReadyToBeDestroyed, function(val) {
			if (val) {
				visible.value = false;
				vfmContainer.value.style.display = "none";
			}
		}, { flush: "post" });
		(0, require__plugin_vue_export_helper.vue_exports.watch)(function() {
			return props.drag;
		}, function(val) {
			if (visible.value) val ? addDragDown() : removeDragDown();
		});
		(0, require__plugin_vue_export_helper.vue_exports.watch)(function() {
			return props.resize;
		}, function(val) {
			if (visible.value) val ? addResizeDown() : removeResizeDown();
		});
		(0, require__plugin_vue_export_helper.vue_exports.watch)(function() {
			return props.keepChangedStyle;
		}, function(val) {
			if (!val) dragResizeStyle.value = {};
		});
		(0, require__plugin_vue_export_helper.vue_exports.onMounted)(function() {
			props.api.modals.push(getModalInfo());
			mounted();
		});
		(0, require__plugin_vue_export_helper.vue_exports.onBeforeUnmount)(function() {
			var _root$value;
			close();
			props.lockScroll && vfmContainer.value && enableBodyScroll(vfmContainer.value);
			root === null || root === void 0 || (_root$value = root.value) == null || _root$value.remove();
			var index = props.api.modals.findIndex(function(vm) {
				return vm.uid === uid;
			});
			props.api.modals.splice(index, 1);
		});
		function getModalInfo() {
			return {
				uid,
				props,
				emit,
				vfmContainer,
				vfmContent,
				vfmResize,
				vfmOverlayTransition,
				vfmTransition,
				getAttachElement,
				modalStackIndex,
				visibility,
				handleLockScroll,
				$focusTrap,
				toggle,
				params
			};
		}
		function mounted() {
			if (props.modelValue) {
				emit("_before-open", createModalEvent({ type: "_before-open" }));
				if (emitEvent("before-open", false)) {
					_rejectToggle("show");
					return;
				}
				var target = getAttachElement();
				if (target || props.attach === false) {
					if (props.attach !== false) if (root.value) target.appendChild(root.value);
					else {
						visible.value = true;
						(0, require__plugin_vue_export_helper.vue_exports.nextTick)(function() {
							mounted();
						});
						return;
					}
					var index = props.api.openedModals.findIndex(function(vm) {
						return vm.uid === uid;
					});
					if (index !== -1) props.api.openedModals.splice(index, 1);
					props.api.openedModals.push(getModalInfo());
					modalStackIndex.value = props.api.openedModals.length - 1;
					handleLockScroll();
					props.api.openedModals.filter(function(vm) {
						return vm.uid !== uid;
					}).forEach(function(vm, index) {
						if (vm.getAttachElement() === target) {
							vm.modalStackIndex.value = index;
							!vm.props.keepOverlay && (vm.visibility.overlay = false);
						}
					});
					visible.value = true;
					startTransitionEnter();
				} else if (target !== false) console.warn("Unable to locate target ".concat(props.attach));
			}
		}
		function close() {
			var index = props.api.openedModals.findIndex(function(vm) {
				return vm.uid === uid;
			});
			if (index !== -1) props.api.openedModals.splice(index, 1);
			if (props.api.openedModals.length > 0) {
				var $_vm = props.api.openedModals[props.api.openedModals.length - 1];
				$_vm.props.focusTrap && $_vm.$focusTrap.firstElement().focus();
				if ($_vm.props.focusRetain || $_vm.props.focusTrap) $_vm.vfmContainer.value.focus();
				!$_vm.props.hideOverlay && ($_vm.visibility.overlay = true);
			}
			props.drag && removeDragDown();
			props.resize && removeResizeDown();
			_state.value = null;
			startTransitionLeave();
		}
		function handleLockScroll() {
			if (props.modelValue) (0, require__plugin_vue_export_helper.vue_exports.nextTick)(function() {
				if (props.lockScroll) disableBodyScroll(vfmContainer.value, { reserveScrollBarGap: true });
				else enableBodyScroll(vfmContainer.value);
			});
		}
		function getAttachElement() {
			var target;
			if (props.attach === false) target = false;
			else if (typeof props.attach === "string") if (window) target = window.document.querySelector(props.attach);
			else target = false;
			else target = props.attach;
			return target;
		}
		function startTransitionEnter() {
			visibility.overlay = true;
			visibility.modal = true;
		}
		function startTransitionLeave() {
			visibility.overlay = false;
			visibility.modal = false;
		}
		function beforeOverlayEnter() {
			overlayTransitionState.value = TransitionState.Entering;
		}
		function afterOverlayEnter() {
			overlayTransitionState.value = TransitionState.Enter;
		}
		function beforeOverlayLeave() {
			overlayTransitionState.value = TransitionState.Leaving;
		}
		function afterOverlayLeave() {
			overlayTransitionState.value = TransitionState.Leave;
		}
		function beforeModalEnter() {
			modalTransitionState.value = TransitionState.Entering;
		}
		function afterModalEnter() {
			modalTransitionState.value = TransitionState.Enter;
			if (props.focusRetain || props.focusTrap) vfmContainer.value.focus();
			props.focusTrap && $focusTrap.enable(vfmContainer.value);
			props.drag && addDragDown();
			props.resize && addResizeDown();
			emit("_opened");
			emit("opened", createModalEvent({ type: "opened" }));
			_resolveToggle("show");
		}
		function beforeModalLeave() {
			modalTransitionState.value = TransitionState.Leaving;
			if ($focusTrap.enabled()) $focusTrap.disable();
		}
		function afterModalLeave() {
			modalTransitionState.value = TransitionState.Leave;
			modalStackIndex.value = null;
			props.lockScroll && enableBodyScroll(vfmContainer.value);
			if (!props.keepChangedStyle) dragResizeStyle.value = {};
			var stopEvent = false;
			var event = createModalEvent({
				type: "closed",
				stop: function stop() {
					stopEvent = true;
				}
			});
			emit("_closed");
			emit("closed", event);
			_resolveToggle("hide");
			if (stopEvent) return;
			params.value = {};
		}
		function onMousedown(e) {
			lastMousedownEl.value = e === null || e === void 0 ? void 0 : e.target;
		}
		function onMouseupContainer() {
			if (lastMousedownEl.value !== vfmContainer.value) return;
			if (_state.value === "resize:move") return;
			emit("click-outside", createModalEvent({ type: "click-outside" }));
			props.clickToClose && emit("update:modelValue", false);
		}
		function onEsc() {
			if (visible.value && props.escToClose) emit("update:modelValue", false);
		}
		function createModalEvent() {
			var eventProps = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
			return _objectSpread2$2({ ref: getModalInfo() }, eventProps);
		}
		function emitEvent(eventType, value) {
			var stopEvent = false;
			emit(eventType, createModalEvent({
				type: eventType,
				stop: function stop() {
					stopEvent = true;
				}
			}));
			if (stopEvent) {
				_stopEvent.value = true;
				(0, require__plugin_vue_export_helper.vue_exports.nextTick)(function() {
					emit("update:modelValue", value);
				});
				return true;
			}
			return false;
		}
		function emitState(e, state, action) {
			_state.value = "".concat(state, ":").concat(action);
			emit(_state.value, e);
		}
		function toggle(show, _params) {
			var _arguments = arguments;
			return new Promise(function(resolve, reject) {
				_resolveToggle = function resolveToggle(res) {
					resolve(res);
					_resolveToggle = noop$3;
				};
				_rejectToggle = function rejectToggle(err) {
					reject(err);
					_rejectToggle = noop$3;
				};
				var value = typeof show === "boolean" ? show : !props.modelValue;
				if (value && _arguments.length === 2) params.value = _params;
				emit("update:modelValue", value);
			});
		}
		function pointerDown(e) {
			e.stopPropagation();
			var STATE_RESIZE = "resize";
			var STATE_DRAG = "drag";
			var direction = e.target.getAttribute("direction");
			var state;
			if (direction) state = STATE_RESIZE;
			else if (validDragElement(e, vfmContent.value, props.dragSelector)) state = STATE_DRAG;
			else return;
			emitState(e, state, "start");
			var down = getPosition(e);
			var rectContainer = vfmContainer.value.getBoundingClientRect();
			var rectContent = vfmContent.value.getBoundingClientRect();
			var isAbsolute = window.getComputedStyle(vfmContent.value).position === "absolute";
			var position = {
				top: trimPx(dragResizeStyle.value.top),
				left: trimPx(dragResizeStyle.value.left)
			};
			var limit = function() {
				if (props.fitParent) {
					var _limit = {
						absolute: function absolute() {
							return {
								minTop: 0,
								minLeft: 0,
								maxTop: rectContainer.height - rectContent.height,
								maxLeft: rectContainer.width - rectContent.width
							};
						},
						relative: function relative() {
							return {
								minTop: position.top + rectContainer.top - rectContent.top,
								minLeft: position.left + rectContainer.left - rectContent.left,
								maxTop: position.top + rectContainer.bottom - rectContent.bottom,
								maxLeft: position.left + rectContainer.right - rectContent.right
							};
						}
					};
					return isAbsolute ? _limit.absolute() : _limit.relative();
				} else return {};
			}();
			var resetBodyCursor = state === STATE_RESIZE && setStyle(document.body, "cursor", resizeCursor[direction]);
			var moving = function moving(e) {
				e.stopPropagation();
				emitState(e, state, "move");
				var move = getPosition(e);
				var offset = {
					x: move.x - down.x,
					y: move.y - down.y
				};
				if (state === STATE_RESIZE) offset = getResizeOffset(direction, offset, rectContainer, rectContent, isAbsolute);
				var top;
				var left;
				if (isAbsolute) {
					top = rectContent.top - rectContainer.top + offset.y;
					left = rectContent.left - rectContainer.left + offset.x;
				} else {
					top = position.top + offset.y;
					left = position.left + offset.x;
				}
				if (state === STATE_DRAG && props.fitParent) {
					top = clamp(limit.minTop, top, limit.maxTop);
					left = clamp(limit.minLeft, left, limit.maxLeft);
				}
				var style = _objectSpread2$2(_objectSpread2$2(_objectSpread2$2({
					position: "relative",
					top: top + "px",
					left: left + "px",
					margin: "unset",
					touchAction: "none"
				}, isAbsolute && {
					position: "absolute",
					transform: "unset",
					width: rectContent.width + "px",
					height: rectContent.height + "px"
				}), offset.width && { width: offset.width + "px" }), offset.height && { height: offset.height + "px" });
				dragResizeStyle.value = _objectSpread2$2(_objectSpread2$2({}, dragResizeStyle.value), style);
			};
			var end = function end(e) {
				e.stopPropagation();
				if (state === STATE_RESIZE) resetBodyCursor && resetBodyCursor();
				setTimeout(function() {
					emitState(e, state, "end");
				});
				removeListener("move", document, moving);
				removeListener("up", document, end);
			};
			addListener("move", document, moving);
			addListener("up", document, end);
		}
		function addDragDown() {
			addListener("down", vfmContent.value, pointerDown);
			dragResizeStyle.value.touchAction = "none";
		}
		function removeDragDown() {
			removeListener("down", vfmContent.value, pointerDown);
		}
		function addResizeDown() {
			visibility.resize = true;
			(0, require__plugin_vue_export_helper.vue_exports.nextTick)(function() {
				addListener("down", vfmResize.value, pointerDown);
			});
		}
		function removeResizeDown() {
			removeListener("down", vfmResize.value, pointerDown);
			visibility.resize = false;
		}
		function getResizeOffset(direction, offset, rectContainer, rectContent, isAbsolute) {
			var setOffset = function setOffset(dir) {
				var _ref2;
				var offsetAxis = offset[dir.axis];
				offsetAxis = props.fitParent ? clamp(dir.min, offsetAxis, dir.max) : offsetAxis;
				var edge = clamp(dir.minEdge, dir.getEdge(offsetAxis), dir.maxEdge);
				offsetAxis = dir.getOffsetAxis(edge, isAbsolute);
				return _ref2 = {}, _defineProperty$2(_ref2, dir.edgeName, edge), _defineProperty$2(_ref2, dir.axis, offsetAxis), _ref2;
			};
			var getDirectionInfo = function getDirectionInfo(position, edgeName, axis, isPositive) {
				var rectContentEdge = rectContent[edgeName];
				var positionOffset = rectContainer[position] - rectContent[position];
				var EdgeName = capitalize(edgeName);
				return {
					axis,
					edgeName,
					min: isPositive ? positionOffset : -rectContentEdge,
					max: isPositive ? rectContentEdge : positionOffset,
					minEdge: props["min".concat(EdgeName)],
					maxEdge: props["max".concat(EdgeName)],
					getEdge: function getEdge(offsetAxis) {
						return rectContent[edgeName] - offsetAxis * (isPositive ? 1 : -1);
					},
					getOffsetAxis: function getOffsetAxis(edge, isAbsolute) {
						var offsetAxis = rectContent[edgeName] - edge;
						if (isAbsolute) return isPositive ? offsetAxis : 0;
						else return (isPositive ? 1 : -1) * offsetAxis / 2;
					}
				};
			};
			var directions = {
				t: [
					"top",
					"height",
					"y",
					true
				],
				b: [
					"bottom",
					"height",
					"y",
					false
				],
				l: [
					"left",
					"width",
					"x",
					true
				],
				r: [
					"right",
					"width",
					"x",
					false
				]
			};
			var _offset = {
				x: 0,
				y: 0
			};
			direction.split("").forEach(function(dir) {
				var directionInfo = getDirectionInfo.apply(void 0, _toConsumableArray$1(directions[dir]));
				_offset = _objectSpread2$2(_objectSpread2$2({}, _offset), setOffset(directionInfo));
			});
			return _offset;
		}
		return {
			root,
			vfmContainer,
			vfmContent,
			vfmResize,
			vfmOverlayTransition,
			vfmTransition,
			computedOverlayTransition,
			computedTransition,
			visible,
			visibility,
			params,
			calculateZIndex,
			bindStyle,
			bindContentStyle,
			beforeOverlayEnter,
			afterOverlayEnter,
			beforeOverlayLeave,
			afterOverlayLeave,
			beforeModalEnter,
			afterModalEnter,
			beforeModalLeave,
			afterModalLeave,
			onMousedown,
			onMouseupContainer,
			onEsc
		};
	}
};
var _withId = (0, require__plugin_vue_export_helper.vue_exports.withScopeId)("data-v-2836fdb5");
(0, require__plugin_vue_export_helper.vue_exports.pushScopeId)("data-v-2836fdb5");
var _hoisted_1$1 = {
	key: 0,
	ref: "vfmResize",
	"class": "vfm__resize vfm--absolute vfm--inset vfm--prevent-none vfm--select-none vfm--touch-none"
};
(0, require__plugin_vue_export_helper.vue_exports.popScopeId)();
var render$1$1 = _withId(function(_ctx, _cache, $props, $setup, $data, $options) {
	return $props.ssr || $setup.visible ? (0, require__plugin_vue_export_helper.vue_exports.withDirectives)(((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)("div", {
		key: 0,
		ref: "root",
		style: $setup.bindStyle,
		"class": ["vfm vfm--inset", [$props.attach === false ? "vfm--fixed" : "vfm--absolute", { "vfm--prevent-none": $props.preventClick }]],
		onKeydown: _cache[4] || (_cache[4] = (0, require__plugin_vue_export_helper.vue_exports.withKeys)(function() {
			return $setup.onEsc && $setup.onEsc.apply($setup, arguments);
		}, ["esc"]))
	}, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(require__plugin_vue_export_helper.vue_exports.Transition, (0, require__plugin_vue_export_helper.vue_exports.mergeProps)($setup.computedOverlayTransition, {
		onBeforeEnter: $setup.beforeOverlayEnter,
		onAfterEnter: $setup.afterOverlayEnter,
		onBeforeLeave: $setup.beforeOverlayLeave,
		onAfterLeave: $setup.afterOverlayLeave
	}), {
		"default": _withId(function() {
			return [!$props.hideOverlay && $setup.visibility.overlay ? ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)("div", {
				key: 0,
				"class": ["vfm__overlay vfm--overlay vfm--absolute vfm--inset", $props.overlayClass],
				style: $props.overlayStyle
			}, null, 6)) : (0, require__plugin_vue_export_helper.vue_exports.createCommentVNode)("v-if", true)];
		}),
		_: 1
	}, 16, [
		"onBeforeEnter",
		"onAfterEnter",
		"onBeforeLeave",
		"onAfterLeave"
	]), (0, require__plugin_vue_export_helper.vue_exports.createVNode)(require__plugin_vue_export_helper.vue_exports.Transition, (0, require__plugin_vue_export_helper.vue_exports.mergeProps)($setup.computedTransition, {
		onBeforeEnter: $setup.beforeModalEnter,
		onAfterEnter: $setup.afterModalEnter,
		onBeforeLeave: $setup.beforeModalLeave,
		onAfterLeave: $setup.afterModalLeave
	}), {
		"default": _withId(function() {
			return [(0, require__plugin_vue_export_helper.vue_exports.withDirectives)((0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", {
				ref: "vfmContainer",
				"class": ["vfm__container vfm--absolute vfm--inset vfm--outline-none", $props.classes],
				style: $props.styles,
				"aria-expanded": $setup.visibility.modal.toString(),
				role: "dialog",
				"aria-modal": "true",
				tabindex: "-1",
				onMouseup: _cache[2] || (_cache[2] = (0, require__plugin_vue_export_helper.vue_exports.withModifiers)(function() {
					return $setup.onMouseupContainer && $setup.onMouseupContainer.apply($setup, arguments);
				}, ["self"])),
				onMousedown: _cache[3] || (_cache[3] = (0, require__plugin_vue_export_helper.vue_exports.withModifiers)(function() {
					return $setup.onMousedown && $setup.onMousedown.apply($setup, arguments);
				}, ["self"]))
			}, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", {
				ref: "vfmContent",
				"class": ["vfm__content", [$props.contentClass, { "vfm--prevent-auto": $props.preventClick }]],
				style: $setup.bindContentStyle,
				onMousedown: _cache[1] || (_cache[1] = function($event) {
					return $setup.onMousedown(null);
				})
			}, [(0, require__plugin_vue_export_helper.vue_exports.renderSlot)(_ctx.$slots, "default", {
				params: $setup.params,
				close: function close() {
					return _ctx.$emit("update:modelValue", false);
				}
			}), $setup.visibility.resize && $setup.visibility.modal ? ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)("div", _hoisted_1$1, [((0, require__plugin_vue_export_helper.vue_exports.openBlock)(true), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(require__plugin_vue_export_helper.vue_exports.Fragment, null, (0, require__plugin_vue_export_helper.vue_exports.renderList)($props.resizeDirections, function(direction) {
				return (0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)("div", {
					key: direction,
					direction,
					"class": ["vfm--resize-".concat(direction), "vfm--absolute vfm--prevent-auto"]
				}, null, 10, ["direction"]);
			}), 128))], 512)) : (0, require__plugin_vue_export_helper.vue_exports.createCommentVNode)("v-if", true)], 38)], 46, ["aria-expanded"]), [[require__plugin_vue_export_helper.vue_exports.vShow, $setup.visibility.modal]])];
		}),
		_: 3
	}, 16, [
		"onBeforeEnter",
		"onAfterEnter",
		"onBeforeLeave",
		"onAfterLeave"
	])], 38)), [[require__plugin_vue_export_helper.vue_exports.vShow, !$props.ssr || $setup.visible]]) : (0, require__plugin_vue_export_helper.vue_exports.createCommentVNode)("v-if", true);
});
function styleInject(css, ref) {
	if (ref === void 0) ref = {};
	var insertAt = ref.insertAt;
	if (!css || typeof document === "undefined") return;
	var head = document.head || document.getElementsByTagName("head")[0];
	var style = document.createElement("style");
	style.type = "text/css";
	if (insertAt === "top") if (head.firstChild) head.insertBefore(style, head.firstChild);
	else head.appendChild(style);
	else head.appendChild(style);
	if (style.styleSheet) style.styleSheet.cssText = css;
	else style.appendChild(document.createTextNode(css));
}
styleInject("\n.vfm--fixed[data-v-2836fdb5] {\n  position: fixed;\n}\n.vfm--absolute[data-v-2836fdb5] {\n  position: absolute;\n}\n.vfm--inset[data-v-2836fdb5] {\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n.vfm--overlay[data-v-2836fdb5] {\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.vfm--prevent-none[data-v-2836fdb5] {\n  pointer-events: none;\n}\n.vfm--prevent-auto[data-v-2836fdb5] {\n  pointer-events: auto;\n}\n.vfm--outline-none[data-v-2836fdb5]:focus {\n  outline: none;\n}\n.vfm-enter-active[data-v-2836fdb5],\n.vfm-leave-active[data-v-2836fdb5] {\n  transition: opacity 0.2s;\n}\n.vfm-enter-from[data-v-2836fdb5],\n.vfm-leave-to[data-v-2836fdb5] {\n  opacity: 0;\n}\n.vfm--touch-none[data-v-2836fdb5] {\n  touch-action: none;\n}\n.vfm--select-none[data-v-2836fdb5] {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.vfm--resize-tr[data-v-2836fdb5],\n.vfm--resize-br[data-v-2836fdb5],\n.vfm--resize-bl[data-v-2836fdb5],\n.vfm--resize-tl[data-v-2836fdb5] {\n  width: 12px;\n  height: 12px;\n  z-index: 10;\n}\n.vfm--resize-t[data-v-2836fdb5] {\n  top: -6px;\n  left: 0;\n  width: 100%;\n  height: 12px;\n  cursor: ns-resize;\n}\n.vfm--resize-tr[data-v-2836fdb5] {\n  top: -6px;\n  right: -6px;\n  cursor: nesw-resize;\n}\n.vfm--resize-r[data-v-2836fdb5] {\n  top: 0;\n  right: -6px;\n  width: 12px;\n  height: 100%;\n  cursor: ew-resize;\n}\n.vfm--resize-br[data-v-2836fdb5] {\n  bottom: -6px;\n  right: -6px;\n  cursor: nwse-resize;\n}\n.vfm--resize-b[data-v-2836fdb5] {\n  bottom: -6px;\n  left: 0;\n  width: 100%;\n  height: 12px;\n  cursor: ns-resize;\n}\n.vfm--resize-bl[data-v-2836fdb5] {\n  bottom: -6px;\n  left: -6px;\n  cursor: nesw-resize;\n}\n.vfm--resize-l[data-v-2836fdb5] {\n  top: 0;\n  left: -6px;\n  width: 12px;\n  height: 100%;\n  cursor: ew-resize;\n}\n.vfm--resize-tl[data-v-2836fdb5] {\n  top: -6px;\n  left: -6px;\n  cursor: nwse-resize;\n}\n");
script$1.render = render$1$1;
script$1.__scopeId = "data-v-2836fdb5";
script$1.__file = "lib/VueFinalModal.vue";
var script = {
	props: {},
	methods: {
		slice: function slice(index) {
			this.api.dynamicModals.splice(index, 1);
		},
		beforeOpen: function beforeOpen(e, modal, index) {
			var _this = this;
			return _asyncToGenerator(function* () {
				e.ref.params.value = modal.params;
				yield _this.$nextTick();
				yield _this.$nextTick();
				if (!modal.value) {
					_this.slice(index);
					modal.reject("show");
				}
			})();
		},
		isString: function isString(val) {
			return typeof val === "string";
		}
	}
};
var _hoisted_1 = { "class": "modals-container" };
function render$2(_ctx, _cache, $props, $setup, $data, $options) {
	return (0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)("div", _hoisted_1, [((0, require__plugin_vue_export_helper.vue_exports.openBlock)(true), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(require__plugin_vue_export_helper.vue_exports.Fragment, null, (0, require__plugin_vue_export_helper.vue_exports.renderList)(_ctx.api.dynamicModals, function(modal, index) {
		return (0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)((0, require__plugin_vue_export_helper.vue_exports.resolveDynamicComponent)(modal.component), (0, require__plugin_vue_export_helper.vue_exports.mergeProps)({ key: modal.id }, modal.bind, {
			modelValue: modal.value,
			"onUpdate:modelValue": function onUpdateModelValue($event) {
				return modal.value = $event;
			}
		}, (0, require__plugin_vue_export_helper.vue_exports.toHandlers)(modal.on), {
			on_closed: function on_closed($event) {
				return $options.slice(index);
			},
			on_beforeOpen: function on_beforeOpen(e) {
				return $options.beforeOpen(e, modal);
			},
			on_opened: modal.opened
		}), (0, require__plugin_vue_export_helper.vue_exports.createSlots)({ _: 2 }, [(0, require__plugin_vue_export_helper.vue_exports.renderList)(modal.slots, function(slot, key) {
			return {
				name: key,
				fn: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(function() {
					return [(0, require__plugin_vue_export_helper.vue_exports.createCommentVNode)(" eslint-disable vue/no-v-html "), $options.isString(slot) ? ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)("div", {
						key: 0,
						innerHTML: slot
					}, null, 8, ["innerHTML"])) : ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)((0, require__plugin_vue_export_helper.vue_exports.resolveDynamicComponent)(slot.component), (0, require__plugin_vue_export_helper.vue_exports.mergeProps)({ key: 1 }, slot.bind, (0, require__plugin_vue_export_helper.vue_exports.toHandlers)(slot.on || {})), null, 16))];
				})
			};
		})]), 1040, [
			"modelValue",
			"onUpdate:modelValue",
			"on_closed",
			"on_beforeOpen",
			"on_opened"
		]);
	}), 128))]);
}
script.render = render$2;
script.__file = "lib/ModalsContainer.vue";
function defineApi() {
	var _modalComponent = null;
	return {
		show: function show(modal) {
			var _this = this;
			for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) args[_key - 1] = arguments[_key];
			switch (_typeof$1(modal)) {
				case "string": return this.toggle.apply(this, [modal, true].concat(args));
				case "object": return Promise.allSettled([new Promise(function(resolve, reject) {
					var defaultModal = {
						value: true,
						id: Symbol("dynamicModal"),
						component: _modalComponent,
						bind: {},
						slots: {},
						on: {},
						params: args[0],
						reject,
						opened: function opened() {
							resolve("show");
						}
					};
					_this.dynamicModals.push((0, require__plugin_vue_export_helper.vue_exports.shallowReactive)(Object.assign(defaultModal, modal)));
				})]);
			}
		},
		hide: function hide() {
			for (var _len2 = arguments.length, names = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) names[_key2] = arguments[_key2];
			return this.toggle(names, false);
		},
		hideAll: function hideAll() {
			return this.hide.apply(this, _toConsumableArray$1(this.openedModals.map(function(modal) {
				return modal.props.name;
			})));
		},
		toggle: function toggle(name) {
			for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) args[_key3 - 1] = arguments[_key3];
			var modals = Array.isArray(name) ? this.get.apply(this, _toConsumableArray$1(name)) : this.get(name);
			return Promise.allSettled(modals.map(function(modal) {
				return modal.toggle.apply(modal, args);
			}));
		},
		get: function get() {
			for (var _len4 = arguments.length, names = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) names[_key4] = arguments[_key4];
			return this.modals.filter(function(modal) {
				return names.includes(modal.props.name);
			});
		},
		dynamicModals: (0, require__plugin_vue_export_helper.vue_exports.shallowReactive)([]),
		openedModals: [],
		modals: [],
		_setDefaultModal: function _setDefaultModal(modalComponent) {
			_modalComponent = modalComponent;
		}
	};
}
function bindApi(component, api) {
	var _component = _objectSpread2$2(_objectSpread2$2({}, component), {}, { props: _objectSpread2$2({}, component.props) });
	Object.assign(_component.props, { api: {
		type: Object,
		"default": function _default() {
			return api;
		}
	} });
	return _component;
}
function defineModal(api) {
	var modalComponent = bindApi(script$1, api);
	api._setDefaultModal(modalComponent);
	return modalComponent;
}
function defineContainer(api) {
	return bindApi(script, api);
}
var _count = 0;
var _key = "$vfm";
var _componentName = "VueFinalModal";
var _dynamicContainerName = "ModalsContainer";
var defineVfm = function defineVfm() {
	var _ref;
	var api = defineApi();
	return _ref = {}, _defineProperty$2(_ref, _key, api), _defineProperty$2(_ref, _componentName, defineModal(api)), _defineProperty$2(_ref, _dynamicContainerName, defineContainer(api)), _ref;
};
var _vfm = defineVfm();
_vfm.$vfm;
_vfm.VueFinalModal;
_vfm.ModalsContainer;
var installVfm = function installVfm(App) {
	var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
	var _ref2 = _count === 0 ? _vfm : defineVfm(), $vfm = _ref2.$vfm, VueFinalModal = _ref2.VueFinalModal, ModalsContainer = _ref2.ModalsContainer;
	_count += 1;
	var key = options.key || _key;
	var componentName = options.componentName || _componentName;
	var dynamicContainerName = options.dynamicContainerName || _dynamicContainerName;
	Object.defineProperty(App.config.globalProperties, key, { get: function get() {
		return $vfm;
	} });
	App.provide(key, $vfm);
	App.component(componentName, VueFinalModal);
	App.component(dynamicContainerName, ModalsContainer);
};
var vfmPlugin = function vfmPlugin(pluginOptions) {
	return { install: function install(App, options) {
		installVfm(App, Object.assign({}, pluginOptions, options));
	} };
};
vfmPlugin.install = installVfm;
//#endregion
//#region src/App.vue
var _sfc_main$27 = { components: { VueRouterView: RouterView } };
function _sfc_ssrRender$27(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_VueRouterView = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("VueRouterView");
	const _component_ModalsContainer = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("ModalsContainer");
	_push(`<!--[-->`);
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_VueRouterView, null, null, _parent));
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_ModalsContainer, null, null, _parent));
	_push(`<!--]-->`);
}
var _sfc_setup$27 = _sfc_main$27.setup;
_sfc_main$27.setup = (props, ctx) => {
	const ssrContext = (0, require__plugin_vue_export_helper.vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/App.vue");
	return _sfc_setup$27 ? _sfc_setup$27(props, ctx) : void 0;
};
var App_default = /*#__PURE__*/ require__plugin_vue_export_helper._plugin_vue_export_helper_default(_sfc_main$27, [["ssrRender", _sfc_ssrRender$27]]);
//#endregion
//#region node_modules/vue-sonner/lib/vue-sonner.js
var qt = Object.defineProperty;
var Jt = (s, a, t) => a in s ? qt(s, a, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: t
}) : s[a] = t;
var x$1 = (s, a, t) => Jt(s, typeof a != "symbol" ? a + "" : a, t);
function Zt(s) {
	if (!s || typeof document > "u") return;
	let a = document.head || document.getElementsByTagName("head")[0], t = document.createElement("style");
	t.type = "text/css", a.appendChild(t), t.styleSheet ? t.styleSheet.cssText = s : t.appendChild(document.createTextNode(s));
}
Zt(":where([data-sonner-toaster][dir=ltr]),:where(html[dir=ltr]){--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}:where([data-sonner-toaster][dir=rtl]),:where(html[dir=rtl]){--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted=true]){transform:translateY(-10px)}@media (hover:none) and (pointer:coarse){:where([data-sonner-toaster][data-lifted=true]){transform:none}}:where([data-sonner-toaster][data-x-position=right]){right:max(var(--offset),env(safe-area-inset-right))}:where([data-sonner-toaster][data-x-position=left]){left:max(var(--offset),env(safe-area-inset-left))}:where([data-sonner-toaster][data-x-position=center]){left:50%;transform:translateX(-50%)}:where([data-sonner-toaster][data-y-position=top]){top:max(var(--offset),env(safe-area-inset-top))}:where([data-sonner-toaster][data-y-position=bottom]){bottom:max(var(--offset),env(safe-area-inset-bottom))}:where([data-sonner-toast]){--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled=true]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}:where([data-sonner-toast][data-y-position=top]){top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position=bottom]){bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise=true]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme=dark]) :where([data-cancel]){background:rgba(255,255,255,.3)}[data-sonner-toast] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}:where([data-sonner-toast]) :where([data-disabled=true]){cursor:not-allowed}[data-sonner-toast]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping=true])::before{content:'';position:absolute;left:0;right:0;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position=top][data-swiping=true])::before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position=bottom][data-swiping=true])::before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping=false][data-removed=true])::before{content:'';position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast])::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted=true]){--y:translateY(0);opacity:1}:where([data-sonner-toast][data-expanded=false][data-front=false]){--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded=false][data-front=false][data-styled=true])>*{opacity:0}:where([data-sonner-toast][data-visible=false]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted=true][data-expanded=true]){--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]){--y:translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]){--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]){--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed=true][data-front=false])::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation:swipe-out .2s ease-out forwards}@keyframes swipe-out{from{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount)));opacity:1}to{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount) + var(--lift) * -100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;--mobile-offset:16px;right:var(--mobile-offset);left:var(--mobile-offset);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset)}[data-sonner-toaster][data-y-position=bottom]{bottom:20px}[data-sonner-toaster][data-y-position=top]{top:20px}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset);right:var(--mobile-offset);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 91%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 91%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 91%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 100%, 12%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 12%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}");
var vt = 0;
var ae = class {
	constructor() {
		x$1(this, "subscribers");
		x$1(this, "toasts");
		x$1(this, "subscribe", (a) => (this.subscribers.push(a), () => {
			const t = this.subscribers.indexOf(a);
			this.subscribers.splice(t, 1);
		}));
		x$1(this, "publish", (a) => {
			this.subscribers.forEach((t) => t(a));
		});
		x$1(this, "addToast", (a) => {
			this.publish(a), this.toasts = [...this.toasts, a];
		});
		x$1(this, "create", (a) => {
			var P;
			const { message: t, ...i } = a, n = typeof a.id == "number" || a.id && ((P = a.id) == null ? void 0 : P.length) > 0 ? a.id : vt++, g = this.toasts.find((h) => h.id === n), T = a.dismissible === void 0 ? !0 : a.dismissible;
			return g ? this.toasts = this.toasts.map((h) => h.id === n ? (this.publish({
				...h,
				...a,
				id: n,
				title: t
			}), {
				...h,
				...a,
				id: n,
				dismissible: T,
				title: t
			}) : h) : this.addToast({
				title: t,
				...i,
				dismissible: T,
				id: n
			}), n;
		});
		x$1(this, "dismiss", (a) => (a || this.toasts.forEach((t) => {
			this.subscribers.forEach((i) => i({
				id: t.id,
				dismiss: !0
			}));
		}), this.subscribers.forEach((t) => t({
			id: a,
			dismiss: !0
		})), a));
		x$1(this, "message", (a, t) => this.create({
			...t,
			message: a,
			type: "default"
		}));
		x$1(this, "error", (a, t) => this.create({
			...t,
			type: "error",
			message: a
		}));
		x$1(this, "success", (a, t) => this.create({
			...t,
			type: "success",
			message: a
		}));
		x$1(this, "info", (a, t) => this.create({
			...t,
			type: "info",
			message: a
		}));
		x$1(this, "warning", (a, t) => this.create({
			...t,
			type: "warning",
			message: a
		}));
		x$1(this, "loading", (a, t) => this.create({
			...t,
			type: "loading",
			message: a
		}));
		x$1(this, "promise", (a, t) => {
			if (!t) return;
			let i;
			t.loading !== void 0 && (i = this.create({
				...t,
				promise: a,
				type: "loading",
				message: t.loading,
				description: typeof t.description != "function" ? t.description : void 0
			}));
			const n = a instanceof Promise ? a : a();
			let g = i !== void 0, T;
			const P = n.then(async (u) => {
				if (T = ["resolve", u], se(u) && !u.ok) {
					g = !1;
					const m = typeof t.error == "function" ? await t.error(`HTTP error! status: ${u.status}`) : t.error, y = typeof t.description == "function" ? await t.description(`HTTP error! status: ${u.status}`) : t.description;
					this.create({
						id: i,
						type: "error",
						message: m,
						description: y
					});
				} else if (t.success !== void 0) {
					g = !1;
					const m = typeof t.success == "function" ? await t.success(u) : t.success, y = typeof t.description == "function" ? await t.description(u) : t.description;
					this.create({
						id: i,
						type: "success",
						message: m,
						description: y
					});
				}
			}).catch(async (u) => {
				if (T = ["reject", u], t.error !== void 0) {
					g = !1;
					const m = typeof t.error == "function" ? await t.error(u) : t.error, y = typeof t.description == "function" ? await t.description(u) : t.description;
					this.create({
						id: i,
						type: "error",
						message: m,
						description: y
					});
				}
			}).finally(() => {
				var u;
				g && (this.dismiss(i), i = void 0), (u = t.finally) == null || u.call(t);
			}), h = () => new Promise((u, m) => P.then(() => T[0] === "reject" ? m(T[1]) : u(T[1])).catch(m));
			return typeof i != "string" && typeof i != "number" ? { unwrap: h } : Object.assign(i, { unwrap: h });
		});
		x$1(this, "custom", (a, t) => {
			const i = (t == null ? void 0 : t.id) || vt++;
			return this.publish({
				component: a,
				id: i,
				...t
			}), i;
		});
		this.subscribers = [], this.toasts = [];
	}
};
var I = new ae();
function oe(s, a) {
	const t = (a == null ? void 0 : a.id) || vt++;
	return I.create({
		message: s,
		id: t,
		type: "default",
		...a
	}), t;
}
var se = (s) => s && typeof s == "object" && "ok" in s && typeof s.ok == "boolean" && "status" in s && typeof s.status == "number";
var ne = oe;
var re = () => I.toasts;
var Ke = Object.assign(ne, {
	success: I.success,
	info: I.info,
	warning: I.warning,
	error: I.error,
	custom: I.custom,
	message: I.message,
	promise: I.promise,
	dismiss: I.dismiss,
	loading: I.loading
}, { getHistory: re });
function ut(s) {
	return s.label !== void 0;
}
function ie() {
	const s = (0, require__plugin_vue_export_helper.vue_exports.ref)(!1);
	return (0, require__plugin_vue_export_helper.vue_exports.watchEffect)(() => {
		const a = () => {
			s.value = document.hidden;
		};
		return document.addEventListener("visibilitychange", a), () => window.removeEventListener("visibilitychange", a);
	}), { isDocumentHidden: s };
}
var le = [
	"aria-live",
	"data-rich-colors",
	"data-styled",
	"data-mounted",
	"data-promise",
	"data-removed",
	"data-visible",
	"data-y-position",
	"data-x-position",
	"data-index",
	"data-front",
	"data-swiping",
	"data-dismissible",
	"data-type",
	"data-invert",
	"data-swipe-out",
	"data-expanded"
];
var de = ["aria-label", "data-disabled"];
var Wt$1 = 4e3;
var ue = 20;
var ce = 200;
var fe = /* @__PURE__ */ (0, require__plugin_vue_export_helper.vue_exports.defineComponent)({
	__name: "Toast",
	props: {
		toast: {},
		toasts: {},
		index: {},
		expanded: { type: Boolean },
		invert: { type: Boolean },
		heights: {},
		gap: {},
		position: {},
		visibleToasts: {},
		expandByDefault: { type: Boolean },
		closeButton: { type: Boolean },
		interacting: { type: Boolean },
		style: {},
		cancelButtonStyle: {},
		actionButtonStyle: {},
		duration: {},
		class: {},
		unstyled: { type: Boolean },
		descriptionClass: {},
		loadingIcon: {},
		classes: {},
		icons: {},
		closeButtonAriaLabel: {},
		pauseWhenPageIsHidden: { type: Boolean },
		cn: { type: Function },
		defaultRichColors: { type: Boolean }
	},
	emits: ["update:heights", "removeToast"],
	setup(s, { emit: a }) {
		const t = s, i = a, n = (0, require__plugin_vue_export_helper.vue_exports.ref)(!1), g = (0, require__plugin_vue_export_helper.vue_exports.ref)(!1), T = (0, require__plugin_vue_export_helper.vue_exports.ref)(!1), P = (0, require__plugin_vue_export_helper.vue_exports.ref)(!1), h = (0, require__plugin_vue_export_helper.vue_exports.ref)(!1), u = (0, require__plugin_vue_export_helper.vue_exports.ref)(0), m = (0, require__plugin_vue_export_helper.vue_exports.ref)(0), y = (0, require__plugin_vue_export_helper.vue_exports.ref)(t.toast.duration || t.duration || Wt$1), H = (0, require__plugin_vue_export_helper.vue_exports.ref)(null), B = (0, require__plugin_vue_export_helper.vue_exports.ref)(null), pt = (0, require__plugin_vue_export_helper.vue_exports.computed)(() => t.index === 0), ht = (0, require__plugin_vue_export_helper.vue_exports.computed)(() => t.index + 1 <= t.visibleToasts), E = (0, require__plugin_vue_export_helper.vue_exports.computed)(() => t.toast.type), Y = (0, require__plugin_vue_export_helper.vue_exports.computed)(() => t.toast.dismissible !== !1), gt = (0, require__plugin_vue_export_helper.vue_exports.computed)(() => t.toast.class || ""), o = (0, require__plugin_vue_export_helper.vue_exports.computed)(() => t.descriptionClass || ""), r = t.toast.style || {}, l = (0, require__plugin_vue_export_helper.vue_exports.computed)(() => t.heights.findIndex((e) => e.toastId === t.toast.id) || 0), k = (0, require__plugin_vue_export_helper.vue_exports.computed)(() => t.toast.closeButton ?? t.closeButton);
		(0, require__plugin_vue_export_helper.vue_exports.computed)(() => t.toast.duration || t.duration || Wt$1);
		const b = (0, require__plugin_vue_export_helper.vue_exports.ref)(0), z = (0, require__plugin_vue_export_helper.vue_exports.ref)(0), O = (0, require__plugin_vue_export_helper.vue_exports.ref)(null), G = (0, require__plugin_vue_export_helper.vue_exports.computed)(() => t.position.split("-")), Q = (0, require__plugin_vue_export_helper.vue_exports.computed)(() => G.value[0]), ot = (0, require__plugin_vue_export_helper.vue_exports.computed)(() => G.value[1]), st = (0, require__plugin_vue_export_helper.vue_exports.computed)(() => typeof t.toast.title != "string"), nt = (0, require__plugin_vue_export_helper.vue_exports.computed)(() => typeof t.toast.description != "string"), rt = (0, require__plugin_vue_export_helper.vue_exports.computed)(() => t.heights.reduce((e, c, S) => S >= l.value ? e : e + c.height, 0)), it = ie(), lt = (0, require__plugin_vue_export_helper.vue_exports.computed)(() => t.toast.invert || t.invert), V = (0, require__plugin_vue_export_helper.vue_exports.computed)(() => E.value === "loading"), M = (0, require__plugin_vue_export_helper.vue_exports.computed)(() => l.value * t.gap + rt.value || 0);
		(0, require__plugin_vue_export_helper.vue_exports.onMounted)(() => {
			if (!n.value) return;
			const e = B.value, c = e == null ? void 0 : e.style.height;
			e.style.height = "auto";
			const S = e.getBoundingClientRect().height;
			e.style.height = c, m.value = S;
			let C;
			t.heights.find((w) => w.toastId === t.toast.id) ? C = t.heights.map((w) => w.toastId === t.toast.id ? {
				...w,
				height: S
			} : w) : C = [{
				toastId: t.toast.id,
				height: S,
				position: t.toast.position
			}, ...t.heights], i("update:heights", C);
		});
		function W() {
			g.value = !0, u.value = M.value;
			const e = t.heights.filter((c) => c.toastId !== t.toast.id);
			i("update:heights", e), setTimeout(() => {
				i("removeToast", t.toast);
			}, ce);
		}
		function bt() {
			var e, c;
			if (V.value || !Y.value) return {};
			W(), (c = (e = t.toast).onDismiss) == null || c.call(e, t.toast);
		}
		function Xt(e) {
			V.value || !Y.value || (H.value = /* @__PURE__ */ new Date(), u.value = M.value, e.target.setPointerCapture(e.pointerId), e.target.tagName !== "BUTTON" && (T.value = !0, O.value = {
				x: e.clientX,
				y: e.clientY
			}));
		}
		function Gt() {
			var C, $, w, q, J;
			if (P.value || !Y) return;
			O.value = null;
			const e = Number(((C = B.value) == null ? void 0 : C.style.getPropertyValue("--swipe-amount").replace("px", "")) || 0), c = (/* @__PURE__ */ new Date()).getTime() - (($ = H.value) == null ? void 0 : $.getTime()), S = Math.abs(e) / c;
			if (Math.abs(e) >= ue || S > .11) {
				u.value = M.value, (q = (w = t.toast).onDismiss) == null || q.call(w, t.toast), W(), P.value = !0, h.value = !1;
				return;
			}
			(J = B.value) == null || J.style.setProperty("--swipe-amount", "0px"), T.value = !1;
		}
		function Qt(e) {
			var $, w;
			if (!O.value || !Y.value) return;
			const c = e.clientY - O.value.y, S = (($ = window.getSelection()) == null ? void 0 : $.toString().length) > 0, C = Q.value === "top" ? Math.min(0, c) : Math.max(0, c);
			Math.abs(C) > 0 && (h.value = !0), !S && ((w = B.value) == null || w.style.setProperty("--swipe-amount", `${C}px`));
		}
		return (0, require__plugin_vue_export_helper.vue_exports.watchEffect)((e) => {
			if (t.toast.promise && E.value === "loading" || t.toast.duration === Infinity || t.toast.type === "loading") return;
			let c;
			const S = () => {
				if (z.value < b.value) {
					const $ = (/* @__PURE__ */ new Date()).getTime() - b.value;
					y.value = y.value - $;
				}
				z.value = (/* @__PURE__ */ new Date()).getTime();
			}, C = () => {
				y.value !== Infinity && (b.value = (/* @__PURE__ */ new Date()).getTime(), c = setTimeout(() => {
					var $, w;
					(w = ($ = t.toast).onAutoClose) == null || w.call($, t.toast), W();
				}, y.value));
			};
			t.expanded || t.interacting || t.pauseWhenPageIsHidden && it ? S() : C(), e(() => {
				clearTimeout(c);
			});
		}), (0, require__plugin_vue_export_helper.vue_exports.watch)(() => t.toast.delete, () => {
			t.toast.delete && W();
		}, { deep: !0 }), (0, require__plugin_vue_export_helper.vue_exports.onMounted)(() => {
			if (n.value = !0, B.value) {
				const e = B.value.getBoundingClientRect().height;
				m.value = e;
				const c = [{
					toastId: t.toast.id,
					height: e,
					position: t.toast.position
				}, ...t.heights];
				i("update:heights", c);
			}
		}), (0, require__plugin_vue_export_helper.vue_exports.onBeforeUnmount)(() => {
			if (B.value) {
				const e = t.heights.filter((c) => c.toastId !== t.toast.id);
				i("update:heights", e);
			}
		}), (e, c) => {
			var S, C, $, w, q, J, wt, kt, xt, Tt, Bt, St, Ct, $t, It, Et, Pt, Dt, Ht, zt, Mt, Ot, At, Lt, Yt, Nt, Rt;
			return (0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createElementBlock)("li", {
				ref_key: "toastRef",
				ref: B,
				"aria-live": e.toast.important ? "assertive" : "polite",
				"aria-atomic": "true",
				role: "status",
				tabindex: "0",
				"data-sonner-toast": "true",
				class: (0, require__plugin_vue_export_helper.vue_exports.normalizeClass)(e.cn(t.class, gt.value, (S = e.classes) == null ? void 0 : S.toast, (C = e.toast.classes) == null ? void 0 : C.toast, ($ = e.classes) == null ? void 0 : $[E.value], (q = (w = e.toast) == null ? void 0 : w.classes) == null ? void 0 : q[E.value])),
				"data-rich-colors": e.toast.richColors ?? e.defaultRichColors,
				"data-styled": !(e.toast.component || (J = e.toast) != null && J.unstyled || e.unstyled),
				"data-mounted": n.value,
				"data-promise": !!e.toast.promise,
				"data-removed": g.value,
				"data-visible": ht.value,
				"data-y-position": Q.value,
				"data-x-position": ot.value,
				"data-index": e.index,
				"data-front": pt.value,
				"data-swiping": T.value,
				"data-dismissible": Y.value,
				"data-type": E.value,
				"data-invert": lt.value,
				"data-swipe-out": P.value,
				"data-expanded": !!(e.expanded || e.expandByDefault && n.value),
				style: (0, require__plugin_vue_export_helper.vue_exports.normalizeStyle)({
					"--index": e.index,
					"--toasts-before": e.index,
					"--z-index": e.toasts.length - e.index,
					"--offset": `${g.value ? u.value : M.value}px`,
					"--initial-height": e.expandByDefault ? "auto" : `${m.value}px`,
					...e.style,
					...(0, require__plugin_vue_export_helper.vue_exports.unref)(r)
				}),
				onPointerdown: Xt,
				onPointerup: Gt,
				onPointermove: Qt
			}, [k.value && !e.toast.component ? ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createElementBlock)("button", {
				key: 0,
				"aria-label": e.closeButtonAriaLabel || "Close toast",
				"data-disabled": V.value,
				"data-close-button": "true",
				class: (0, require__plugin_vue_export_helper.vue_exports.normalizeClass)(e.cn((wt = e.classes) == null ? void 0 : wt.closeButton, (xt = (kt = e.toast) == null ? void 0 : kt.classes) == null ? void 0 : xt.closeButton)),
				onClick: bt
			}, [(Tt = e.icons) != null && Tt.close ? ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)((0, require__plugin_vue_export_helper.vue_exports.resolveDynamicComponent)((Bt = e.icons) == null ? void 0 : Bt.close), { key: 0 })) : (0, require__plugin_vue_export_helper.vue_exports.renderSlot)(e.$slots, "close-icon", { key: 1 })], 10, de)) : (0, require__plugin_vue_export_helper.vue_exports.createCommentVNode)("", !0), e.toast.component ? ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)((0, require__plugin_vue_export_helper.vue_exports.resolveDynamicComponent)(e.toast.component), (0, require__plugin_vue_export_helper.vue_exports.mergeProps)({ key: 1 }, e.toast.componentProps, { onCloseToast: bt }), null, 16)) : ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createElementBlock)(require__plugin_vue_export_helper.vue_exports.Fragment, { key: 2 }, [
				E.value !== "default" || e.toast.icon || e.toast.promise ? ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createElementBlock)("div", {
					key: 0,
					"data-icon": "",
					class: (0, require__plugin_vue_export_helper.vue_exports.normalizeClass)(e.cn((St = e.classes) == null ? void 0 : St.icon, ($t = (Ct = e.toast) == null ? void 0 : Ct.classes) == null ? void 0 : $t.icon))
				}, [(e.toast.promise || E.value === "loading") && !e.toast.icon ? (0, require__plugin_vue_export_helper.vue_exports.renderSlot)(e.$slots, "loading-icon", { key: 0 }) : (0, require__plugin_vue_export_helper.vue_exports.createCommentVNode)("", !0), e.toast.icon ? ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)((0, require__plugin_vue_export_helper.vue_exports.resolveDynamicComponent)(e.toast.icon), { key: 1 })) : ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createElementBlock)(require__plugin_vue_export_helper.vue_exports.Fragment, { key: 2 }, [E.value === "success" ? (0, require__plugin_vue_export_helper.vue_exports.renderSlot)(e.$slots, "success-icon", { key: 0 }) : E.value === "error" ? (0, require__plugin_vue_export_helper.vue_exports.renderSlot)(e.$slots, "error-icon", { key: 1 }) : E.value === "warning" ? (0, require__plugin_vue_export_helper.vue_exports.renderSlot)(e.$slots, "warning-icon", { key: 2 }) : E.value === "info" ? (0, require__plugin_vue_export_helper.vue_exports.renderSlot)(e.$slots, "info-icon", { key: 3 }) : (0, require__plugin_vue_export_helper.vue_exports.createCommentVNode)("", !0)], 64))], 2)) : (0, require__plugin_vue_export_helper.vue_exports.createCommentVNode)("", !0),
				(0, require__plugin_vue_export_helper.vue_exports.createElementVNode)("div", {
					"data-content": "",
					class: (0, require__plugin_vue_export_helper.vue_exports.normalizeClass)(e.cn((It = e.classes) == null ? void 0 : It.content, (Pt = (Et = e.toast) == null ? void 0 : Et.classes) == null ? void 0 : Pt.content))
				}, [(0, require__plugin_vue_export_helper.vue_exports.createElementVNode)("div", {
					"data-title": "",
					class: (0, require__plugin_vue_export_helper.vue_exports.normalizeClass)(e.cn((Dt = e.classes) == null ? void 0 : Dt.title, (Ht = e.toast.classes) == null ? void 0 : Ht.title))
				}, [st.value ? ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)((0, require__plugin_vue_export_helper.vue_exports.resolveDynamicComponent)(e.toast.title), (0, require__plugin_vue_export_helper.vue_exports.normalizeProps)((0, require__plugin_vue_export_helper.vue_exports.mergeProps)({ key: 0 }, e.toast.componentProps)), null, 16)) : ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createElementBlock)(require__plugin_vue_export_helper.vue_exports.Fragment, { key: 1 }, [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(e.toast.title), 1)], 64))], 2), e.toast.description ? ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createElementBlock)("div", {
					key: 0,
					"data-description": "",
					class: (0, require__plugin_vue_export_helper.vue_exports.normalizeClass)(e.cn(e.descriptionClass, o.value, (zt = e.classes) == null ? void 0 : zt.description, (Mt = e.toast.classes) == null ? void 0 : Mt.description))
				}, [nt.value ? ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)((0, require__plugin_vue_export_helper.vue_exports.resolveDynamicComponent)(e.toast.description), (0, require__plugin_vue_export_helper.vue_exports.normalizeProps)((0, require__plugin_vue_export_helper.vue_exports.mergeProps)({ key: 0 }, e.toast.componentProps)), null, 16)) : ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createElementBlock)(require__plugin_vue_export_helper.vue_exports.Fragment, { key: 1 }, [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(e.toast.description), 1)], 64))], 2)) : (0, require__plugin_vue_export_helper.vue_exports.createCommentVNode)("", !0)], 2),
				e.toast.cancel ? ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createElementBlock)("button", {
					key: 1,
					style: (0, require__plugin_vue_export_helper.vue_exports.normalizeStyle)(e.toast.cancelButtonStyle || e.cancelButtonStyle),
					class: (0, require__plugin_vue_export_helper.vue_exports.normalizeClass)(e.cn((Ot = e.classes) == null ? void 0 : Ot.cancelButton, (At = e.toast.classes) == null ? void 0 : At.cancelButton)),
					"data-button": "",
					"data-cancel": "",
					onClick: c[0] || (c[0] = (Z) => {
						var _, tt;
						(0, require__plugin_vue_export_helper.vue_exports.unref)(ut)(e.toast.cancel) && Y.value && ((tt = (_ = e.toast.cancel).onClick) == null || tt.call(_, Z), W());
					})
				}, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)((0, require__plugin_vue_export_helper.vue_exports.unref)(ut)(e.toast.cancel) ? (Lt = e.toast.cancel) == null ? void 0 : Lt.label : e.toast.cancel), 7)) : (0, require__plugin_vue_export_helper.vue_exports.createCommentVNode)("", !0),
				e.toast.action ? ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createElementBlock)("button", {
					key: 2,
					style: (0, require__plugin_vue_export_helper.vue_exports.normalizeStyle)(e.toast.actionButtonStyle || e.actionButtonStyle),
					class: (0, require__plugin_vue_export_helper.vue_exports.normalizeClass)(e.cn((Yt = e.classes) == null ? void 0 : Yt.actionButton, (Nt = e.toast.classes) == null ? void 0 : Nt.actionButton)),
					"data-button": "",
					"data-action": "",
					onClick: c[1] || (c[1] = (Z) => {
						var _, tt;
						(0, require__plugin_vue_export_helper.vue_exports.unref)(ut)(e.toast.action) && (Z.defaultPrevented || ((tt = (_ = e.toast.action).onClick) == null || tt.call(_, Z), !Z.defaultPrevented && W()));
					})
				}, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)((0, require__plugin_vue_export_helper.vue_exports.unref)(ut)(e.toast.action) ? (Rt = e.toast.action) == null ? void 0 : Rt.label : e.toast.action), 7)) : (0, require__plugin_vue_export_helper.vue_exports.createCommentVNode)("", !0)
			], 64))], 46, le);
		};
	}
});
var at = (s, a) => {
	const t = s.__vccOpts || s;
	for (const [i, n] of a) t[i] = n;
	return t;
};
var pe = {};
var he = {
	xmlns: "http://www.w3.org/2000/svg",
	width: "12",
	height: "12",
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stoke-width": "1.5",
	"stroke-linecap": "round",
	"stroke-linejoin": "round"
};
function ge(s, a) {
	return (0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createElementBlock)("svg", he, a[0] || (a[0] = [(0, require__plugin_vue_export_helper.vue_exports.createElementVNode)("line", {
		x1: "18",
		y1: "6",
		x2: "6",
		y2: "18"
	}, null, -1), (0, require__plugin_vue_export_helper.vue_exports.createElementVNode)("line", {
		x1: "6",
		y1: "6",
		x2: "18",
		y2: "18"
	}, null, -1)]));
}
var me = /* @__PURE__ */ at(pe, [["render", ge]]);
var ve = ["data-visible"];
var ye = { class: "sonner-spinner" };
var be = /* @__PURE__ */ (0, require__plugin_vue_export_helper.vue_exports.defineComponent)({
	__name: "Loader",
	props: { visible: { type: Boolean } },
	setup(s) {
		const a = Array(12).fill(0);
		return (t, i) => ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createElementBlock)("div", {
			class: "sonner-loading-wrapper",
			"data-visible": t.visible
		}, [(0, require__plugin_vue_export_helper.vue_exports.createElementVNode)("div", ye, [((0, require__plugin_vue_export_helper.vue_exports.openBlock)(!0), (0, require__plugin_vue_export_helper.vue_exports.createElementBlock)(require__plugin_vue_export_helper.vue_exports.Fragment, null, (0, require__plugin_vue_export_helper.vue_exports.renderList)((0, require__plugin_vue_export_helper.vue_exports.unref)(a), (n) => ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createElementBlock)("div", {
			key: `spinner-bar-${n}`,
			class: "sonner-loading-bar"
		}))), 128))])], 8, ve));
	}
});
var we = {};
var ke = {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 20 20",
	fill: "currentColor",
	height: "20",
	width: "20"
};
function xe(s, a) {
	return (0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createElementBlock)("svg", ke, a[0] || (a[0] = [(0, require__plugin_vue_export_helper.vue_exports.createElementVNode)("path", {
		"fill-rule": "evenodd",
		d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
		"clip-rule": "evenodd"
	}, null, -1)]));
}
var Te = /* @__PURE__ */ at(we, [["render", xe]]);
var Be = {};
var Se = {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 20 20",
	fill: "currentColor",
	height: "20",
	width: "20"
};
function Ce(s, a) {
	return (0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createElementBlock)("svg", Se, a[0] || (a[0] = [(0, require__plugin_vue_export_helper.vue_exports.createElementVNode)("path", {
		"fill-rule": "evenodd",
		d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
		"clip-rule": "evenodd"
	}, null, -1)]));
}
var $e = /* @__PURE__ */ at(Be, [["render", Ce]]);
var Ie = {};
var Ee = {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 24 24",
	fill: "currentColor",
	height: "20",
	width: "20"
};
function Pe(s, a) {
	return (0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createElementBlock)("svg", Ee, a[0] || (a[0] = [(0, require__plugin_vue_export_helper.vue_exports.createElementVNode)("path", {
		"fill-rule": "evenodd",
		d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
		"clip-rule": "evenodd"
	}, null, -1)]));
}
var De = /* @__PURE__ */ at(Ie, [["render", Pe]]);
var He = {};
var ze = {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 20 20",
	fill: "currentColor",
	height: "20",
	width: "20"
};
function Me(s, a) {
	return (0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createElementBlock)("svg", ze, a[0] || (a[0] = [(0, require__plugin_vue_export_helper.vue_exports.createElementVNode)("path", {
		"fill-rule": "evenodd",
		d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
		"clip-rule": "evenodd"
	}, null, -1)]));
}
var Oe = /* @__PURE__ */ at(He, [["render", Me]]);
var Ae = ["aria-label"];
var Le = [
	"dir",
	"data-theme",
	"data-rich-colors",
	"data-y-position",
	"data-x-position",
	"data-lifted"
];
var Ye = 3;
var Ut = "32px";
var Ne = 356;
var Re = 14;
var Fe = typeof window < "u" && typeof document < "u";
function je(...s) {
	return s.filter(Boolean).join(" ");
}
var Ve = /* @__PURE__ */ (0, require__plugin_vue_export_helper.vue_exports.defineComponent)({
	name: "Toaster",
	inheritAttrs: !1,
	__name: "Toaster",
	props: {
		invert: {
			type: Boolean,
			default: !1
		},
		theme: { default: "light" },
		position: { default: "bottom-right" },
		hotkey: { default: () => ["altKey", "KeyT"] },
		richColors: {
			type: Boolean,
			default: !1
		},
		expand: {
			type: Boolean,
			default: !1
		},
		duration: {},
		gap: { default: Re },
		visibleToasts: { default: Ye },
		closeButton: {
			type: Boolean,
			default: !1
		},
		toastOptions: { default: () => ({}) },
		class: { default: "" },
		style: { default: () => ({}) },
		offset: { default: Ut },
		dir: { default: "auto" },
		icons: {},
		containerAriaLabel: { default: "Notifications" },
		pauseWhenPageIsHidden: {
			type: Boolean,
			default: !1
		},
		cn: {
			type: Function,
			default: je
		}
	},
	setup(s) {
		const a = s;
		function t() {
			if (typeof window > "u" || typeof document > "u") return "ltr";
			const o = document.documentElement.getAttribute("dir");
			return o === "auto" || !o ? window.getComputedStyle(document.documentElement).direction : o;
		}
		const i = (0, require__plugin_vue_export_helper.vue_exports.useAttrs)(), n = (0, require__plugin_vue_export_helper.vue_exports.ref)([]), g = (0, require__plugin_vue_export_helper.vue_exports.computed)(() => (o, r) => n.value.filter((l) => !l.position && r === 0 || l.position === o)), T = (0, require__plugin_vue_export_helper.vue_exports.computed)(() => {
			const o = n.value.filter((r) => r.position).map((r) => r.position);
			return o.length > 0 ? Array.from(new Set([a.position].concat(o))) : [a.position];
		}), P = (0, require__plugin_vue_export_helper.vue_exports.ref)([]), h = (0, require__plugin_vue_export_helper.vue_exports.ref)(!1), u = (0, require__plugin_vue_export_helper.vue_exports.ref)(!1), m = (0, require__plugin_vue_export_helper.vue_exports.ref)(a.theme !== "system" ? a.theme : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), y = (0, require__plugin_vue_export_helper.vue_exports.ref)(null), H = (0, require__plugin_vue_export_helper.vue_exports.ref)(null), B = (0, require__plugin_vue_export_helper.vue_exports.ref)(!1), pt = a.hotkey.join("+").replace(/Key/g, "").replace(/Digit/g, "");
		function ht(o) {
			var r;
			(r = n.value.find((l) => l.id === o.id)) != null && r.delete || I.dismiss(o.id), n.value = n.value.filter(({ id: l }) => l !== o.id);
		}
		function E(o) {
			var r, l;
			B.value && !((l = (r = o.currentTarget) == null ? void 0 : r.contains) != null && l.call(r, o.relatedTarget)) && (B.value = !1, H.value && (H.value.focus({ preventScroll: !0 }), H.value = null));
		}
		function Y(o) {
			o.target instanceof HTMLElement && o.target.dataset.dismissible === "false" || B.value || (B.value = !0, H.value = o.relatedTarget);
		}
		function gt(o) {
			o.target && o.target instanceof HTMLElement && o.target.dataset.dismissible === "false" || (u.value = !0);
		}
		return (0, require__plugin_vue_export_helper.vue_exports.watchEffect)((o) => {
			o(I.subscribe((l) => {
				if (l.dismiss) {
					n.value = n.value.map((k) => k.id === l.id ? {
						...k,
						delete: !0
					} : k);
					return;
				}
				(0, require__plugin_vue_export_helper.vue_exports.nextTick)(() => {
					const k = n.value.findIndex((b) => b.id === l.id);
					k !== -1 ? n.value = [
						...n.value.slice(0, k),
						{
							...n.value[k],
							...l
						},
						...n.value.slice(k + 1)
					] : n.value = [l, ...n.value];
				});
			}));
		}), (0, require__plugin_vue_export_helper.vue_exports.watch)(() => a.theme, (o) => {
			if (o !== "system") {
				m.value = o;
				return;
			}
			if (o === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? m.value = "dark" : m.value = "light"), typeof window > "u") return;
			const r = window.matchMedia("(prefers-color-scheme: dark)");
			try {
				r.addEventListener("change", ({ matches: l }) => {
					l ? m.value = "dark" : m.value = "light";
				});
			} catch {
				r.addListener(({ matches: k }) => {
					try {
						k ? m.value = "dark" : m.value = "light";
					} catch (b) {
						console.error(b);
					}
				});
			}
		}), (0, require__plugin_vue_export_helper.vue_exports.watchEffect)(() => {
			y.value && H.value && (H.value.focus({ preventScroll: !0 }), H.value = null, B.value = !1);
		}), (0, require__plugin_vue_export_helper.vue_exports.watchEffect)(() => {
			n.value.length <= 1 && (h.value = !1);
		}), (0, require__plugin_vue_export_helper.vue_exports.watchEffect)((o) => {
			function r(l) {
				const k = a.hotkey.every((O) => l[O] || l.code === O), b = Array.isArray(y.value) ? y.value[0] : y.value;
				k && (h.value = !0, b?.focus());
				const z = document.activeElement === y.value || (b == null ? void 0 : b.contains(document.activeElement));
				l.code === "Escape" && z && (h.value = !1);
			}
			Fe && (document.addEventListener("keydown", r), o(() => {
				document.removeEventListener("keydown", r);
			}));
		}), (o, r) => ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createElementBlock)("section", {
			"aria-label": `${o.containerAriaLabel} ${(0, require__plugin_vue_export_helper.vue_exports.unref)(pt)}`,
			tabIndex: -1,
			"aria-live": "polite",
			"aria-relevant": "additions text",
			"aria-atomic": "false"
		}, [((0, require__plugin_vue_export_helper.vue_exports.openBlock)(!0), (0, require__plugin_vue_export_helper.vue_exports.createElementBlock)(require__plugin_vue_export_helper.vue_exports.Fragment, null, (0, require__plugin_vue_export_helper.vue_exports.renderList)(T.value, (l, k) => {
			var b;
			return (0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createElementBlock)("ol", (0, require__plugin_vue_export_helper.vue_exports.mergeProps)({
				key: l,
				ref_for: !0,
				ref_key: "listRef",
				ref: y,
				"data-sonner-toaster": "",
				class: a.class,
				dir: o.dir === "auto" ? t() : o.dir,
				tabIndex: -1,
				"data-theme": o.theme,
				"data-rich-colors": o.richColors,
				"data-y-position": l.split("-")[0],
				"data-x-position": l.split("-")[1],
				"data-lifted": h.value && n.value.length > 1 && !o.expand,
				style: {
					"--front-toast-height": `${(b = P.value[0]) == null ? void 0 : b.height}px`,
					"--offset": typeof o.offset == "number" ? `${o.offset}px` : o.offset || Ut,
					"--width": `${Ne}px`,
					"--gap": `${o.gap}px`,
					...o.style,
					...(0, require__plugin_vue_export_helper.vue_exports.unref)(i).style
				}
			}, o.$attrs, {
				onBlur: E,
				onFocus: Y,
				onMouseenter: r[1] || (r[1] = () => h.value = !0),
				onMousemove: r[2] || (r[2] = () => h.value = !0),
				onMouseleave: r[3] || (r[3] = () => {
					u.value || (h.value = !1);
				}),
				onPointerdown: gt,
				onPointerup: r[4] || (r[4] = () => u.value = !1)
			}), [((0, require__plugin_vue_export_helper.vue_exports.openBlock)(!0), (0, require__plugin_vue_export_helper.vue_exports.createElementBlock)(require__plugin_vue_export_helper.vue_exports.Fragment, null, (0, require__plugin_vue_export_helper.vue_exports.renderList)(g.value(l, k), (z, O) => {
				var G, Q, ot, st, nt, rt, it, lt, V;
				return (0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(fe, {
					key: z.id,
					heights: P.value.filter((M) => M.position === z.position),
					icons: o.icons,
					index: O,
					toast: z,
					defaultRichColors: o.richColors,
					duration: ((G = o.toastOptions) == null ? void 0 : G.duration) ?? o.duration,
					class: (0, require__plugin_vue_export_helper.vue_exports.normalizeClass)(((Q = o.toastOptions) == null ? void 0 : Q.class) ?? ""),
					descriptionClass: (ot = o.toastOptions) == null ? void 0 : ot.descriptionClass,
					invert: o.invert,
					visibleToasts: o.visibleToasts,
					closeButton: ((st = o.toastOptions) == null ? void 0 : st.closeButton) ?? o.closeButton,
					interacting: u.value,
					position: l,
					style: (0, require__plugin_vue_export_helper.vue_exports.normalizeStyle)((nt = o.toastOptions) == null ? void 0 : nt.style),
					unstyled: (rt = o.toastOptions) == null ? void 0 : rt.unstyled,
					classes: (it = o.toastOptions) == null ? void 0 : it.classes,
					cancelButtonStyle: (lt = o.toastOptions) == null ? void 0 : lt.cancelButtonStyle,
					actionButtonStyle: (V = o.toastOptions) == null ? void 0 : V.actionButtonStyle,
					toasts: n.value.filter((M) => M.position === z.position),
					expandByDefault: o.expand,
					gap: o.gap,
					expanded: h.value,
					pauseWhenPageIsHidden: o.pauseWhenPageIsHidden,
					cn: o.cn,
					"onUpdate:heights": r[0] || (r[0] = (M) => {
						P.value = M;
					}),
					onRemoveToast: ht
				}, {
					"close-icon": (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.renderSlot)(o.$slots, "close-icon", {}, () => [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(me)])]),
					"loading-icon": (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.renderSlot)(o.$slots, "loading-icon", {}, () => [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(be, { visible: z.type === "loading" }, null, 8, ["visible"])])]),
					"success-icon": (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.renderSlot)(o.$slots, "success-icon", {}, () => [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(Te)])]),
					"error-icon": (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.renderSlot)(o.$slots, "error-icon", {}, () => [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(Oe)])]),
					"warning-icon": (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.renderSlot)(o.$slots, "warning-icon", {}, () => [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(De)])]),
					"info-icon": (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.renderSlot)(o.$slots, "info-icon", {}, () => [(0, require__plugin_vue_export_helper.vue_exports.createVNode)($e)])]),
					_: 2
				}, 1032, [
					"heights",
					"icons",
					"index",
					"toast",
					"defaultRichColors",
					"duration",
					"class",
					"descriptionClass",
					"invert",
					"visibleToasts",
					"closeButton",
					"interacting",
					"position",
					"style",
					"unstyled",
					"classes",
					"cancelButtonStyle",
					"actionButtonStyle",
					"toasts",
					"expandByDefault",
					"gap",
					"expanded",
					"pauseWhenPageIsHidden",
					"cn"
				]);
			}), 128))], 16, Le);
		}), 128))], 8, Ae));
	}
});
//#endregion
//#region node_modules/vue-global-events/dist/index.mjs
/*!
* vue-global-events v3.0.1
* (c) 2019-2023 Eduardo San Martin Morote, Damian Dulisz
* Released under the MIT License.
*/
var _isIE;
function isIE() {
	return _isIE == null ? _isIE = /msie|trident/.test(window.navigator.userAgent.toLowerCase()) : _isIE;
}
var EVENT_NAME_RE = /^on(\w+?)((?:Once|Capture|Passive)*)$/;
var MODIFIERS_SEPARATOR_RE = /[OCP]/g;
function extractEventOptions(modifiersRaw) {
	if (!modifiersRaw) return;
	if (isIE()) return modifiersRaw.includes("Capture");
	return modifiersRaw.replace(MODIFIERS_SEPARATOR_RE, ",$&").toLowerCase().slice(1).split(",").reduce((options, modifier) => {
		options[modifier] = true;
		return options;
	}, {});
}
var GlobalEvents = (0, require__plugin_vue_export_helper.vue_exports.defineComponent)({
	name: "GlobalEvents",
	props: {
		target: {
			type: String,
			default: "document"
		},
		filter: {
			type: [Function, Array],
			default: () => () => true
		},
		stop: Boolean,
		prevent: Boolean
	},
	setup(props, { attrs }) {
		let activeListeners = /* @__PURE__ */ Object.create(null);
		const isActive = (0, require__plugin_vue_export_helper.vue_exports.ref)(true);
		(0, require__plugin_vue_export_helper.vue_exports.onActivated)(() => {
			isActive.value = true;
		});
		(0, require__plugin_vue_export_helper.vue_exports.onDeactivated)(() => {
			isActive.value = false;
		});
		(0, require__plugin_vue_export_helper.vue_exports.onMounted)(() => {
			Object.keys(attrs).filter((name) => name.startsWith("on")).forEach((eventNameWithModifiers) => {
				const listener = attrs[eventNameWithModifiers];
				const listeners = Array.isArray(listener) ? listener : [listener];
				const match = eventNameWithModifiers.match(EVENT_NAME_RE);
				if (!match) {
					if (__DEV__) console.warn(`[vue-global-events] Unable to parse "${eventNameWithModifiers}". If this should work, you should probably open a new issue on https://github.com/shentao/vue-global-events.`);
					return;
				}
				let [, eventName, modifiersRaw] = match;
				eventName = eventName.toLowerCase();
				const handlers = listeners.map((listener2) => (event) => {
					const filters = Array.isArray(props.filter) ? props.filter : [props.filter];
					if (isActive.value && filters.every((filter) => filter(event, listener2, eventName))) {
						if (props.stop) event.stopPropagation();
						if (props.prevent) event.preventDefault();
						listener2(event);
					}
				});
				const options = extractEventOptions(modifiersRaw);
				handlers.forEach((handler) => {
					window[props.target].addEventListener(eventName, handler, options);
				});
				activeListeners[eventNameWithModifiers] = [
					handlers,
					eventName,
					options
				];
			});
		});
		(0, require__plugin_vue_export_helper.vue_exports.onBeforeUnmount)(() => {
			for (const eventNameWithModifiers in activeListeners) {
				const [handlers, eventName, options] = activeListeners[eventNameWithModifiers];
				handlers.forEach((handler) => {
					window[props.target].removeEventListener(eventName, handler, options);
				});
			}
			activeListeners = {};
		});
		return () => null;
	}
});
//#endregion
//#region src/components/progressBar.vue
var _sfc_main$26 = {
	data() {
		return {
			done: false,
			interval: null
		};
	},
	methods: {
		set(progress = 0) {
			const progressBar = this.$refs.progressBar;
			if (this.interval) this.clearProgressInterval();
			this.done = false;
			progressBar.style.width = progress + "%";
			if (progress === 100) this.done = true;
		},
		start(progress = 100, during = 3e3, interval = 50) {
			if (this.interval) return;
			const progressBar = this.$refs.progressBar;
			if (this.interval) this.clearProgressInterval();
			this.done = false;
			let currentProgress = parseFloat(progressBar.style.width) || 0;
			let increase = progress / (during / interval);
			this.interval = setInterval(() => {
				currentProgress += increase;
				progressBar.style.width = currentProgress + "%";
				if (currentProgress >= progress) this.clearProgressInterval();
			}, interval);
		},
		finish() {
			if (!this.done) this.set(100);
		},
		clearProgressInterval() {
			if (this.interval) clearInterval(this.interval);
			this.interval = null;
		},
		onTransitionEnd(e) {
			const progressBar = this.$refs.progressBar;
			if (e.propertyName !== "opacity" || !this.done) return;
			this.done = false;
			progressBar.style.width = "0";
		}
	}
};
function _sfc_ssrRender$26(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	_push(`<div${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttrs)((0, require__plugin_vue_export_helper.vue_exports.mergeProps)({
		class: ["app-progress", { done: $data.done }],
		ref: "progressBar"
	}, _attrs))} data-v-5c562d8c></div>`);
}
var _sfc_setup$26 = _sfc_main$26.setup;
_sfc_main$26.setup = (props, ctx) => {
	const ssrContext = (0, require__plugin_vue_export_helper.vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/progressBar.vue");
	return _sfc_setup$26 ? _sfc_setup$26(props, ctx) : void 0;
};
var progressBar_default = /*#__PURE__*/ require__plugin_vue_export_helper._plugin_vue_export_helper_default(_sfc_main$26, [["ssrRender", _sfc_ssrRender$26], ["__scopeId", "data-v-5c562d8c"]]);
//#endregion
//#region src/components/localDate.vue
var _sfc_main$25 = {
	props: {
		date: {
			type: [
				Number,
				String,
				Date
			],
			required: true
		},
		format: {
			type: String,
			default: "Y-m-d H:i:s"
		},
		relative: {
			type: Boolean,
			default: false
		},
		forceRelative: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			currDate: /* @__PURE__ */ new Date(),
			intervalId: null
		};
	},
	mounted() {
		if (this.isRelative) this.intervalId = setInterval(() => {
			this.currDate = /* @__PURE__ */ new Date();
		}, 1e4);
	},
	beforeUnmount() {
		clearInterval(this.intervalId);
	},
	computed: {
		dateObject() {
			return new Date(typeof this.date === "string" || this.date * 1e3 >= Date.now() + 1e3 * 60 ? this.date : this.date * 1e3);
		},
		isRelative() {
			return (this.forceRelative || this.relative && !this.$store.state.localConfig["wiki.no_relative_date"]) && this.relativeDate;
		},
		relativeDate() {
			const diff = this.currDate - this.dateObject;
			const relative = new Intl.RelativeTimeFormat(this.$i18next.language.slice(0, 2));
			let text;
			if (diff < 1e3 * 10) text = this.$t("components.local_date.recent");
			else if (diff < 1e3 * 60) text = relative.format(-Math.floor(diff / 1e3), "second");
			else if (diff < 1e3 * 60 * 60) text = relative.format(-Math.floor(diff / 1e3 / 60), "minute");
			else if (diff < 1e3 * 60 * 60 * 24) text = relative.format(-Math.floor(diff / 1e3 / 60 / 60), "hour");
			else if (diff < 1e3 * 60 * 60 * 24 * 30) text = relative.format(-Math.floor(diff / 1e3 / 60 / 60 / 24), "day");
			return text;
		},
		formattedDate() {
			return formatDate(this.dateObject, this.format);
		},
		dateString() {
			return this.isRelative ? this.relativeDate : this.formattedDate;
		}
	}
};
function _sfc_ssrRender$25(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	_push(`<time${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttrs)((0, require__plugin_vue_export_helper.vue_exports.mergeProps)({
		datetime: $options.dateObject.toISOString(),
		title: $options.dateObject.toISOString()
	}, _attrs))}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)($options.dateString)}</time>`);
}
var _sfc_setup$25 = _sfc_main$25.setup;
_sfc_main$25.setup = (props, ctx) => {
	const ssrContext = (0, require__plugin_vue_export_helper.vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/localDate.vue");
	return _sfc_setup$25 ? _sfc_setup$25(props, ctx) : void 0;
};
var localDate_default = /*#__PURE__*/ require__plugin_vue_export_helper._plugin_vue_export_helper_default(_sfc_main$25, [["ssrRender", _sfc_ssrRender$25]]);
//#endregion
//#region src/components/seedLinkButton.vue
var _sfc_main$24 = {
	inject: { submittingSeedForm: { default: false } },
	components: { NuxtLink: nuxtLink_default },
	props: {
		to: {
			type: String,
			required: true
		},
		disabled: Boolean,
		large: Boolean,
		green: Boolean,
		submit: Boolean,
		info: Boolean,
		danger: Boolean,
		block: Boolean
	},
	computed: { disable() {
		return this.disabled || this.submittingSeedForm;
	} },
	methods: { clickBlocker(e) {
		if (this.disable) {
			e.preventDefault();
			e.stopPropagation();
		}
	} }
};
function _sfc_ssrRender$24(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)((0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("NuxtLink"), (0, require__plugin_vue_export_helper.vue_exports.mergeProps)({
		to: _ctx.$props.to,
		disabled: $options.disable || null,
		onClick: $options.clickBlocker,
		class: {
			large: _ctx.$props.large,
			green: _ctx.$props.green,
			submit: _ctx.$props.submit,
			info: _ctx.$props.info,
			danger: _ctx.$props.danger,
			block: _ctx.$props.block
		}
	}, _attrs), {
		default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
			if (_push) (0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "default", {}, null, _push, _parent, _scopeId);
			else return [(0, require__plugin_vue_export_helper.vue_exports.renderSlot)(_ctx.$slots, "default", {}, void 0, true)];
		}),
		_: 3
	}, _parent));
}
var _sfc_setup$24 = _sfc_main$24.setup;
_sfc_main$24.setup = (props, ctx) => {
	const ssrContext = (0, require__plugin_vue_export_helper.vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/seedLinkButton.vue");
	return _sfc_setup$24 ? _sfc_setup$24(props, ctx) : void 0;
};
var seedLinkButton_default = /*#__PURE__*/ require__plugin_vue_export_helper._plugin_vue_export_helper_default(_sfc_main$24, [["ssrRender", _sfc_ssrRender$24], ["__scopeId", "data-v-b9060165"]]);
//#endregion
//#region skins/flasma/mixins/flasma.js
var NAVBAR_MODES = [
	"fixed",
	"auto",
	"static"
];
var HEAD_MODES = [
	"off",
	"auto",
	"fixed"
];
var SIDEBAR_MODES = [
	"fix",
	"right",
	"footer",
	"hide"
];
var HEX = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i;
/**
* 사용자가 고를 수 있는 스킨 색상.
* 이 한 값에서 링크·버튼·오로라가 전부 파생되므로, 파생색의 대비까지 확인하고 고른 값이다.
* (본문 링크 라이트/다크, 브랜드 버튼 위 흰 글씨 모두 4.5:1 이상)
*/
var COLOR_PRESETS = {
	blue: "#2f6fe0",
	green: "#14855f",
	orange: "#b25e0c",
	purple: "#823fff"
};
var flasma_default = {
	mixins: [common_default],
	computed: {
		config() {
			return this.$store.state.config;
		},
		session() {
			return this.$store.state.session;
		},
		page() {
			return this.$store.state.page;
		},
		viewData() {
			return this.$store.state.viewData || {};
		},
		localConfig() {
			return this.$store.state.localConfig || {};
		},
		isDark() {
			return this.$store.state.currentTheme === "dark";
		},
		/**
		* 상단 바 동작
		* fixed: 항상 상단에 고정
		* auto: 스크롤을 내리면 숨고 올리면 따라옴
		* static: 고정하지 않고 문서와 함께 스크롤
		*/
		navbarMode() {
			const mode = this.localConfig["flasma.navbar"];
			return NAVBAR_MODES.includes(mode) ? mode : "fixed";
		},
		/**
		* 문서 제목 카드 동작
		* off: 문서와 함께 스크롤 (기본)
		* auto: 스크롤을 올리면 따라와서 보임
		* fixed: 항상 상단에 고정
		*/
		headMode() {
			const mode = this.localConfig["flasma.head"];
			return HEAD_MODES.includes(mode) ? mode : "off";
		},
		/** 'default' 면 위키가 설정한 브랜드 색을 그대로 쓴다. */
		colorPreset() {
			const preset = this.localConfig["flasma.color"];
			return COLOR_PRESETS[preset] ? preset : "default";
		},
		/**
		* 위키가 설정해 둔 브랜드 색. 사용자가 고른 프리셋과 무관하게 늘 같은 값이다.
		*
		* 지금 화면에 적용 중인 색(--fl-brand / layout.vue 의 brandColor)과 헷갈리면 안 된다.
		* 설정 모달의 '위키 기본값' 견본처럼 "고르면 어떤 색이 되는지"를 보여줘야 하는 자리는
		* 반드시 이 값을 써야 한다. --fl-brand 를 쓰면 프리셋을 고를 때마다 견본까지 따라 바뀐다.
		*/
		wikiBrandColor() {
			const configured = this.skinConfig("brand_color", null) || this.config["skin.liberty.brand_color_1"] || this.config["theme_color"];
			return this.normalizeHex(configured) || "#4188f1";
		},
		sidebarMode() {
			const mode = this.localConfig["flasma.sidebar"];
			if (SIDEBAR_MODES.includes(mode)) return mode;
			return isMobile ? "hide" : "right";
		},
		sidebarVisible() {
			return this.sidebarMode === "right" || this.sidebarMode === "fix";
		},
		/** 사용자 문서에서만 내려오는 프로필 정보 (엔진이 제공하지 않으면 null) */
		userProfile() {
			return this.viewData.userProfile || null;
		},
		adminConvenience() {
			return this.session.quick_block && this.localConfig["flasma.admin_convenience"] !== false;
		}
	},
	methods: {
		/**
		* 엔진 i18n이 있으면 사용하고, 없거나 번역이 비어 있으면 fallback을 그대로 쓴다.
		* vars 를 넘기면 `{{이름}}` 자리를 채운다. (i18next 와 같은 표기)
		*
		* 주의: `{{ }}` 가 들어간 문구는 템플릿 mustache 안에 인라인으로 쓰면 안 된다.
		* Vue 파서가 첫 `}}` 에서 보간을 끊는다. computed 나 메서드에서 만들어 쓸 것.
		*/
		t(key, fallback, vars) {
			let text = fallback;
			if (typeof this.$t === "function") try {
				const value = this.$t(key, vars);
				if (value && value !== key) return value;
			} catch {}
			if (!vars) return text;
			return text.replace(/\{\{(\w+)\}\}/g, (match, name) => vars[name] ?? match);
		},
		skinConfig(key, fallback) {
			const value = this.config[`skin.flasma.${key}`];
			return value === void 0 || value === "" ? fallback : value;
		},
		/** `#abc` 는 `#aabbcc` 로 펴고, 색이 아니면 null. 항상 소문자로 돌려준다. */
		normalizeHex(value) {
			if (typeof value !== "string") return null;
			const hex = value.trim().toLowerCase();
			if (!HEX.test(hex)) return null;
			if (hex.length === 4) return "#" + hex.slice(1).split("").map((c) => c + c).join("");
			return hex;
		}
	}
};
//#endregion
//#region skins/flasma/components/dropdown.vue
var _sfc_main$23 = {
	props: { right: Boolean },
	data() {
		return { show: false };
	},
	methods: {
		toggle() {
			this.show = !this.show;
		},
		hide() {
			this.show = false;
		},
		backdrop(e) {
			if (this.show && !this.$refs.dropdown.contains(e.target)) this.show = false;
		},
		escape(e) {
			if (e.key === "Escape") this.show = false;
		}
	},
	watch: { $route() {
		this.show = false;
	} },
	mounted() {
		document.addEventListener("click", this.backdrop);
		document.addEventListener("keydown", this.escape);
	},
	beforeUnmount() {
		document.removeEventListener("click", this.backdrop);
		document.removeEventListener("keydown", this.escape);
	}
};
function _sfc_ssrRender$23(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	_push(`<div${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttrs)((0, require__plugin_vue_export_helper.vue_exports.mergeProps)({
		ref: "dropdown",
		class: ["fl-dropdown", { "is-open": $data.show }]
	}, _attrs))}><div class="fl-dropdown-toggle">`);
	(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "toggle", { open: $data.show }, null, _push, _parent);
	_push(`</div>`);
	if ($data.show) {
		_push(`<div class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)([{ "fl-dropdown-menu-right": $props.right }, "fl-dropdown-menu fl-glass"])}">`);
		(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "default", {}, null, _push, _parent);
		_push(`</div>`);
	} else _push(`<!---->`);
	_push(`</div>`);
}
var _sfc_setup$23 = _sfc_main$23.setup;
_sfc_main$23.setup = (props, ctx) => {
	const ssrContext = (0, require__plugin_vue_export_helper.vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("skins/flasma/components/dropdown.vue");
	return _sfc_setup$23 ? _sfc_setup$23(props, ctx) : void 0;
};
var dropdown_default = /*#__PURE__*/ require__plugin_vue_export_helper._plugin_vue_export_helper_default(_sfc_main$23, [["ssrRender", _sfc_ssrRender$23]]);
//#endregion
//#region skins/flasma/components/icon.vue
/**
* 스킨 크롬(내비게이션·툴바·카드)에서 쓰는 아이콘.
* 엔진이 제공하는 FontAwesome은 등록된 아이콘이 한정적이라, 선 굵기가 통일된 자체 세트를 쓴다.
*/
var ICONS = {
	search: "<circle cx=\"11\" cy=\"11\" r=\"6.5\"/><path d=\"m16.2 16.2 4.3 4.3\"/>",
	arrowRight: "<path d=\"M4 12h14\"/><path d=\"m12.5 6.5 6 5.5-6 5.5\"/>",
	arrowUp: "<path d=\"M12 20V5\"/><path d=\"m5.5 11.5 6.5-6.5 6.5 6.5\"/>",
	arrowDown: "<path d=\"M12 4v15\"/><path d=\"m5.5 12.5 6.5 6.5 6.5-6.5\"/>",
	chevronDown: "<path d=\"m6.5 9.5 5.5 5.5 5.5-5.5\"/>",
	user: "<circle cx=\"12\" cy=\"8\" r=\"3.8\"/><path d=\"M4.8 20a7.2 7.2 0 0 1 14.4 0\"/>",
	users: "<circle cx=\"9.2\" cy=\"8.5\" r=\"3.3\"/><path d=\"M3 20a6.2 6.2 0 0 1 12.4 0\"/><path d=\"M15.8 5.6a3.3 3.3 0 0 1 0 6.6\"/><path d=\"M17 14.6a6.2 6.2 0 0 1 4 5.4\"/>",
	bell: "<path d=\"M18 9.5a6 6 0 1 0-12 0c0 5-2.2 6.5-2.2 6.5h16.4S18 14.5 18 9.5z\"/><path d=\"M10.2 19.5a2.2 2.2 0 0 0 3.6 0\"/>",
	settings: "<path d=\"M4 7h9\"/><path d=\"M18.5 7H20\"/><path d=\"M4 12h4.5\"/><path d=\"M14 12h6\"/><path d=\"M4 17h9\"/><path d=\"M18.5 17H20\"/><circle cx=\"15.7\" cy=\"7\" r=\"2.2\"/><circle cx=\"11.2\" cy=\"12\" r=\"2.2\"/><circle cx=\"15.7\" cy=\"17\" r=\"2.2\"/>",
	sun: "<circle cx=\"12\" cy=\"12\" r=\"4\"/><path d=\"M12 2.8v2.1\"/><path d=\"M12 19.1v2.1\"/><path d=\"M4.5 4.5 6 6\"/><path d=\"M18 18l1.5 1.5\"/><path d=\"M2.8 12h2.1\"/><path d=\"M19.1 12h2.1\"/><path d=\"M4.5 19.5 6 18\"/><path d=\"M18 6l1.5-1.5\"/>",
	moon: "<path d=\"M20.4 14.3A8.5 8.5 0 1 1 10.6 3.6a6.6 6.6 0 0 0 9.8 10.7z\"/>",
	star: "<path d=\"m12 3.8 2.6 5.3 5.8.8-4.2 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8-4.2-4.1 5.8-.8z\"/>",
	pencil: "<path d=\"M4 20.2h4.2L19 9.4a2.9 2.9 0 0 0-4.2-4.2L4 16v4.2z\"/><path d=\"m13.6 6.4 4.2 4.2\"/>",
	clock: "<circle cx=\"12\" cy=\"12\" r=\"8.2\"/><path d=\"M12 7.4V12l3.1 1.9\"/>",
	refresh: "<path d=\"M20.2 12a8.2 8.2 0 1 1-2.5-5.9\"/><path d=\"M20.4 4v4.2h-4.2\"/>",
	comments: "<path d=\"M4 6.4A2.4 2.4 0 0 1 6.4 4h11.2A2.4 2.4 0 0 1 20 6.4v7.2a2.4 2.4 0 0 1-2.4 2.4H9.4L4 20V6.4z\"/>",
	sparkle: "<path d=\"m11 3.4 1.7 4.6 4.6 1.7-4.6 1.7L11 16l-1.7-4.6L4.7 9.7l4.6-1.7z\"/><path d=\"m18 14.6.8 2.1 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8z\"/>",
	link: "<path d=\"M10.5 13.5a4 4 0 0 0 5.7 0l2.4-2.4a4 4 0 1 0-5.7-5.7l-1.1 1.1\"/><path d=\"M13.5 10.5a4 4 0 0 0-5.7 0l-2.4 2.4a4 4 0 1 0 5.7 5.7l1.1-1.1\"/>",
	shield: "<path d=\"M12 3.4 5.4 5.9v5.4c0 4.1 2.7 7.5 6.6 8.9 3.9-1.4 6.6-4.8 6.6-8.9V5.9L12 3.4z\"/>",
	list: "<path d=\"M4.5 6.5h15\"/><path d=\"M4.5 12h15\"/><path d=\"M4.5 17.5h9\"/>",
	dice: "<rect x=\"4\" y=\"4\" width=\"16\" height=\"16\" rx=\"4.5\"/><circle cx=\"8.6\" cy=\"8.6\" r=\"1.05\" fill=\"currentColor\" stroke=\"none\"/><circle cx=\"15.4\" cy=\"8.6\" r=\"1.05\" fill=\"currentColor\" stroke=\"none\"/><circle cx=\"12\" cy=\"12\" r=\"1.05\" fill=\"currentColor\" stroke=\"none\"/><circle cx=\"8.6\" cy=\"15.4\" r=\"1.05\" fill=\"currentColor\" stroke=\"none\"/><circle cx=\"15.4\" cy=\"15.4\" r=\"1.05\" fill=\"currentColor\" stroke=\"none\"/>",
	close: "<path d=\"m6.5 6.5 11 11\"/><path d=\"m17.5 6.5-11 11\"/>",
	menu: "<path d=\"M4 7h16\"/><path d=\"M4 12h16\"/><path d=\"M4 17h16\"/>",
	calendar: "<rect x=\"3.6\" y=\"5.2\" width=\"16.8\" height=\"15.2\" rx=\"3.4\"/><path d=\"M8.2 3v4\"/><path d=\"M15.8 3v4\"/><path d=\"M3.6 10h16.8\"/>",
	key: "<circle cx=\"7.4\" cy=\"14.6\" r=\"3.6\"/><path d=\"m10.2 12.2 8.4-8.4\"/><path d=\"m16.4 6 2.2 2.2\"/><path d=\"m13.6 8.8 2.2 2.2\"/>",
	file: "<path d=\"M13.6 3.4H7.4a1.8 1.8 0 0 0-1.8 1.8v13.6a1.8 1.8 0 0 0 1.8 1.8h9.2a1.8 1.8 0 0 0 1.8-1.8V8.2z\"/><path d=\"M13.6 3.4v4.8h5\"/>",
	lock: "<rect x=\"4.8\" y=\"10.4\" width=\"14.4\" height=\"9.6\" rx=\"3\"/><path d=\"M8.4 10.4V7.8a3.6 3.6 0 0 1 7.2 0v2.6\"/>",
	logout: "<path d=\"M14.4 4.6H7.2A2.2 2.2 0 0 0 5 6.8v10.4a2.2 2.2 0 0 0 2.2 2.2h7.2\"/><path d=\"M18.6 12H10\"/><path d=\"m15.6 8.6 3.4 3.4-3.4 3.4\"/>",
	login: "<path d=\"M9.6 4.6h7.2A2.2 2.2 0 0 1 19 6.8v10.4a2.2 2.2 0 0 1-2.2 2.2H9.6\"/><path d=\"M13.4 12H5\"/><path d=\"m8.4 8.6-3.4 3.4 3.4 3.4\"/>"
};
var _sfc_main$22 = {
	props: {
		name: {
			type: String,
			required: true
		},
		filled: Boolean
	},
	computed: { shape() {
		return ICONS[this.name] || "";
	} }
};
function _sfc_ssrRender$22(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	_push(`<svg${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttrs)((0, require__plugin_vue_export_helper.vue_exports.mergeProps)({
		class: ["fl-icon", { "fl-icon-filled": $props.filled }],
		viewBox: "0 0 24 24",
		xmlns: "http://www.w3.org/2000/svg",
		fill: "none",
		stroke: "currentColor",
		"stroke-width": "1.7",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"aria-hidden": "true",
		focusable: "false"
	}, _attrs))} data-v-a7727873>${$options.shape ?? ""}</svg>`);
}
var _sfc_setup$22 = _sfc_main$22.setup;
_sfc_main$22.setup = (props, ctx) => {
	const ssrContext = (0, require__plugin_vue_export_helper.vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("skins/flasma/components/icon.vue");
	return _sfc_setup$22 ? _sfc_setup$22(props, ctx) : void 0;
};
var icon_default = /*#__PURE__*/ require__plugin_vue_export_helper._plugin_vue_export_helper_default(_sfc_main$22, [["ssrRender", _sfc_ssrRender$22], ["__scopeId", "data-v-a7727873"]]);
//#endregion
//#region skins/flasma/components/searchForm.vue
var _sfc_main$21 = {
	mixins: [{
		mixins: [common_default],
		data() {
			return {
				searchText: "",
				searchTextModel: "",
				showList: false,
				cursor: -1,
				internalItems: this.items || [],
				value: null,
				minLen: 1,
				wait: 50,
				items: [],
				controller: null,
				timeout: null
			};
		},
		computed: {
			hasItems() {
				return !!this.internalItems.length;
			},
			show() {
				return this.showList && this.hasItems;
			}
		},
		created() {
			this.onSelectItem(this.value);
		},
		watch: {
			items(newValue) {
				this.setItems(newValue);
				const item = this.findItem(this.items, this.searchText, false);
				if (item) {
					this.onSelectItem(item);
					this.showList = false;
				}
			},
			value(newValue) {
				if (!this.isSelectedValue(newValue)) {
					this.onSelectItem(newValue);
					this.searchTextModel = this.getLabel(newValue);
				}
			}
		},
		methods: {
			callUpdateItems(searchText, afterWait) {
				if (this.timeout) {
					clearTimeout(this.timeout);
					this.timeout = null;
				}
				if (searchText.length) this.timeout = setTimeout(afterWait, this.wait);
				else this.items = [];
			},
			findItem(items, searchText, getFirst) {
				return getFirst && items.length === 1 ? items[0] : void 0;
			},
			getLabel(label) {
				return label;
			},
			inputChange() {
				this.showList = true;
				this.cursor = -1;
				this.onSelectItem(null, "inputChange");
				this.callUpdateItems(this.searchText, () => this.updateItems());
			},
			async updateItems() {
				if (this.controller) {
					this.controller.abort();
					await this.$nextTick();
				}
				this.controller = new AbortController();
				try {
					this.items = Object.values(await this.internalRequest(`/Complete?q=${encodeURIComponent(this.searchText)}`, {
						signal: this.controller.signal,
						noProgress: true
					}));
				} catch (e) {} finally {
					this.controller = null;
				}
			},
			focus() {
				this.showList = true;
			},
			blur() {
				setTimeout(() => this.showList = false, 200);
			},
			onClickItem(item) {
				this.onSelectItem(item);
			},
			onSelectItem(item) {
				if (item) {
					this.internalItems = [item];
					this.searchTextModel = this.getLabel(item);
					this.$router.push(this.doc_action_link(item, "w"));
				} else this.setItems(this.items);
			},
			setItems(items) {
				this.internalItems = items || [];
			},
			isSelectedValue(item) {
				return this.internalItems.length === 1 && item === this.internalItems[0];
			},
			keyUp() {
				if (this.cursor > -1) {
					this.cursor--;
					this.itemView(this.$el.getElementsByClassName("v-autocomplete-list-item"));
				}
			},
			keyDown() {
				if (this.cursor < this.internalItems.length) {
					this.cursor++;
					this.itemView(this.$el.getElementsByClassName("v-autocomplete-list-item"));
				}
			},
			itemView(item) {
				if (item && item.scrollIntoView) item.scrollIntoView(false);
			},
			keyEnter(e) {
				e.preventDefault();
				if (this.showList && this.internalItems[this.cursor]) {
					this.onSelectItem(this.internalItems[this.cursor]);
					this.showList = false;
				} else if (this.searchText) {
					this.$router.push(`/Go?q=${encodeURIComponent(this.searchText)}`);
					this.showList = false;
				}
			},
			reset() {
				this.searchTextModel = "";
				this.searchText = "";
				this.cursor = -1;
				this.items = [];
			}
		}
	}, flasma_default],
	components: { FlIcon: icon_default },
	methods: {
		onClickSearch() {
			if (!this.searchText) return;
			this.$router.push("/Search?q=" + encodeURIComponent(this.searchText));
		},
		onClickMove() {
			if (!this.searchText) return;
			this.$router.push(common_default.methods.doc_action_link(this.searchText, "w"));
		}
	},
	watch: { $route() {
		if (this.localConfig["flasma.reset_search_on_move"] !== false) this.reset();
	} }
};
function _sfc_ssrRender$21(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_fl_icon = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("fl-icon");
	_push(`<form${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttrs)((0, require__plugin_vue_export_helper.vue_exports.mergeProps)({ class: ["fl-search", { "is-open": _ctx.show }] }, _attrs))}><span class="fl-search-icon">`);
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_fl_icon, { name: "search" }, null, _parent));
	_push(`</span><input id="searchInput" type="search" name="q" accesskey="f" autocomplete="off" class="fl-search-input"${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttr)("placeholder", _ctx.t("skin.search", "검색"))}${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttr)("value", _ctx.searchTextModel)}><button type="submit" class="fl-search-btn"${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttr)("title", _ctx.t("skin.search", "검색"))}>`);
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_fl_icon, { name: "search" }, null, _parent));
	_push(`</button><button type="submit" class="fl-search-btn"${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttr)("title", _ctx.t("skin.go", "바로가기"))}>`);
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_fl_icon, { name: "arrowRight" }, null, _parent));
	_push(`</button>`);
	if (_ctx.show) {
		_push(`<div class="fl-search-list fl-glass"><!--[-->`);
		(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderList)(_ctx.internalItems, (item, i) => {
			_push(`<div class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)([{ "is-active": i === _ctx.cursor }, "v-autocomplete-list-item fl-search-item"])}">${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(item)}</div>`);
		});
		_push(`<!--]--></div>`);
	} else _push(`<!---->`);
	_push(`</form>`);
}
var _sfc_setup$21 = _sfc_main$21.setup;
_sfc_main$21.setup = (props, ctx) => {
	const ssrContext = (0, require__plugin_vue_export_helper.vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("skins/flasma/components/searchForm.vue");
	return _sfc_setup$21 ? _sfc_setup$21(props, ctx) : void 0;
};
//#endregion
//#region skins/flasma/components/navbar.vue
var _sfc_main$20 = {
	mixins: [flasma_default],
	components: {
		Dropdown: dropdown_default,
		FlIcon: icon_default,
		SearchForm: /* @__PURE__ */ require__plugin_vue_export_helper._plugin_vue_export_helper_default(_sfc_main$21, [["ssrRender", _sfc_ssrRender$21]])
	},
	props: {
		mode: {
			type: String,
			default: "fixed"
		},
		hidden: Boolean,
		scrolled: Boolean
	},
	emits: ["openSetting"],
	computed: {
		logoImage() {
			return this.logoUrl(this.skinConfig("navbar_logo_image", null)) || this.logoUrl(this.config["wiki.logo_url"]);
		},
		/** 다크 테마 전용 로고. 없으면 라이트 로고를 그대로 쓴다. */
		logoImageDark() {
			const dark = this.logoUrl(this.skinConfig("navbar_logo_image_dark", null));
			return dark && dark !== this.logoImage ? dark : null;
		},
		logoText() {
			return this.skinConfig("navbar_logo_text", null) || this.config["wiki.site_name"] || "the tree";
		},
		logoStyle() {
			const height = this.skinConfig("navbar_logo_height", null);
			return height ? { height } : null;
		},
		isMember() {
			return this.session.account && this.session.account.type === 1;
		},
		notificationCount() {
			return this.session.notifications && this.session.notifications.length || 0;
		},
		themeLabel() {
			return this.isDark ? this.t("skin_flasma:toLight", "라이트 테마로") : this.t("skin_flasma:toDark", "다크 테마로");
		},
		specialMenus() {
			return [
				{
					to: "/NeededPages",
					title: this.t("titles.needed_pages", "작성이 필요한 문서")
				},
				{
					to: "/OrphanedPages",
					title: this.t("titles.orphaned_pages", "고립된 문서")
				},
				{
					to: "/OrphanedCategories",
					title: this.t("titles.orphaned_categories", "고립된 분류")
				},
				{
					to: "/UncategorizedPages",
					title: this.t("titles.uncategorized_pages", "분류가 없는 문서")
				},
				{
					to: "/OldPages",
					title: this.t("titles.old_pages", "오래된 문서")
				},
				{
					to: "/ShortestPages",
					title: this.t("titles.short_title_pages", "내용이 짧은 문서")
				},
				{
					to: "/LongestPages",
					title: this.t("titles.long_title_pages", "내용이 긴 문서")
				},
				{
					to: "/BlockHistory",
					title: this.t("titles.block_history", "차단 내역")
				},
				{
					to: "/RandomPage",
					title: this.t("titles.random_page", "임의 문서")
				},
				{
					to: "/Upload",
					title: this.t("titles.upload", "파일 올리기")
				},
				{
					to: "/License",
					title: this.t("titles.license", "라이선스")
				}
			];
		}
	},
	methods: {
		/** 설정값이 `url(...)` 형태로 들어오는 경우가 있어 순수 URL 로 정리한다. */
		logoUrl(value) {
			if (typeof value !== "string") return null;
			return value.trim().replace(/^url\((['"]?)(.*)\1\)$/, "$2") || null;
		},
		toggleTheme() {
			this.$store.commit("localConfigSetValue", {
				key: "wiki.theme",
				value: this.isDark ? "light" : "dark"
			});
		}
	}
};
function _sfc_ssrRender$20(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_nuxt_link = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("nuxt-link");
	const _component_fl_icon = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("fl-icon");
	const _component_dropdown = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("dropdown");
	const _component_search_form = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("search-form");
	_push(`<div${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttrs)((0, require__plugin_vue_export_helper.vue_exports.mergeProps)({ class: ["fl-navbar-wrap", [`fl-navbar-${$props.mode}`, {
		"is-hidden": $props.hidden,
		"is-scrolled": $props.scrolled
	}]] }, _attrs))}><nav class="fl-navbar fl-glass">`);
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_nuxt_link, {
		class: "fl-brand",
		to: "/",
		title: $options.logoText
	}, {
		default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
			if (_push) if ($options.logoImage) {
				_push(`<!--[--><img class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)([{ "fl-brand-logo-light": $options.logoImageDark }, "fl-brand-logo"])}"${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttr)("src", $options.logoImage)}${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttr)("alt", $options.logoText)} style="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderStyle)($options.logoStyle)}"${_scopeId}>`);
				if ($options.logoImageDark) _push(`<img class="fl-brand-logo fl-brand-logo-dark"${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttr)("src", $options.logoImageDark)}${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttr)("alt", $options.logoText)} style="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderStyle)($options.logoStyle)}"${_scopeId}>`);
				else _push(`<!---->`);
				_push(`<!--]-->`);
			} else _push(`<span class="fl-brand-text"${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)($options.logoText)}</span>`);
			else return [$options.logoImage ? ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(require__plugin_vue_export_helper.vue_exports.Fragment, { key: 0 }, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("img", {
				class: ["fl-brand-logo", { "fl-brand-logo-light": $options.logoImageDark }],
				src: $options.logoImage,
				alt: $options.logoText,
				style: $options.logoStyle
			}, null, 14, ["src", "alt"]), $options.logoImageDark ? ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)("img", {
				key: 0,
				class: "fl-brand-logo fl-brand-logo-dark",
				src: $options.logoImageDark,
				alt: $options.logoText,
				style: $options.logoStyle
			}, null, 12, ["src", "alt"])) : (0, require__plugin_vue_export_helper.vue_exports.createCommentVNode)("", true)], 64)) : ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)("span", {
				key: 1,
				class: "fl-brand-text"
			}, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)($options.logoText), 1))];
		}),
		_: 1
	}, _parent));
	_push(`<ul class="fl-nav"><li>`);
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_nuxt_link, {
		class: "fl-nav-link",
		to: "/RecentChanges"
	}, {
		default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_fl_icon, { name: "refresh" }, null, _parent, _scopeId));
				_push(`<span class="fl-nav-label"${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.t("skin.recent_changes", "최근 변경"))}</span>`);
			} else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_fl_icon, { name: "refresh" }), (0, require__plugin_vue_export_helper.vue_exports.createVNode)("span", { class: "fl-nav-label" }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.t("skin.recent_changes", "최근 변경")), 1)];
		}),
		_: 1
	}, _parent));
	_push(`</li><li>`);
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_nuxt_link, {
		class: "fl-nav-link",
		to: "/RecentDiscuss"
	}, {
		default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_fl_icon, { name: "comments" }, null, _parent, _scopeId));
				_push(`<span class="fl-nav-label"${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.t("skin.recent_discuss", "최근 토론"))}</span>`);
			} else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_fl_icon, { name: "comments" }), (0, require__plugin_vue_export_helper.vue_exports.createVNode)("span", { class: "fl-nav-label" }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.t("skin.recent_discuss", "최근 토론")), 1)];
		}),
		_: 1
	}, _parent));
	_push(`</li><li>`);
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_dropdown, null, {
		toggle: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push(`<a class="fl-nav-link" href="#"${_scopeId}>`);
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_fl_icon, { name: "sparkle" }, null, _parent, _scopeId));
				_push(`<span class="fl-nav-label"${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.t("skin.special_tab", "특수 기능"))}</span>`);
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_fl_icon, {
					class: "fl-caret",
					name: "chevronDown"
				}, null, _parent, _scopeId));
				_push(`</a>`);
			} else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("a", {
				class: "fl-nav-link",
				href: "#",
				onClick: (0, require__plugin_vue_export_helper.vue_exports.withModifiers)(() => {}, ["prevent"])
			}, [
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_fl_icon, { name: "sparkle" }),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("span", { class: "fl-nav-label" }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.t("skin.special_tab", "특수 기능")), 1),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_fl_icon, {
					class: "fl-caret",
					name: "chevronDown"
				})
			], 8, ["onClick"])];
		}),
		default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push(`<a href="https://board.furpark.kr" class="fl-dropdown-item" target="_blank"${_scopeId}>Furpark Shelter</a><div class="fl-dropdown-divider"${_scopeId}></div><!--[-->`);
				(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderList)($options.specialMenus, (item) => {
					_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_nuxt_link, {
						key: item.to,
						to: item.to,
						class: "fl-dropdown-item"
					}, {
						default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
							if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(item.title)}`);
							else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(item.title), 1)];
						}),
						_: 2
					}, _parent, _scopeId));
				});
				_push(`<!--]-->`);
				if (_ctx.session.menus && _ctx.session.menus.length) {
					_push(`<!--[--><div class="fl-dropdown-divider"${_scopeId}></div><!--[-->`);
					(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderList)(_ctx.session.menus, (m) => {
						_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_nuxt_link, {
							key: m.l,
							to: m.l,
							class: "fl-dropdown-item"
						}, {
							default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
								if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(m.t)}`);
								else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(m.t), 1)];
							}),
							_: 2
						}, _parent, _scopeId));
					});
					_push(`<!--]--><!--]-->`);
				} else _push(`<!---->`);
			} else return [
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("a", {
					href: "https://board.furpark.kr",
					class: "fl-dropdown-item",
					target: "_blank"
				}, "Furpark Shelter"),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: "fl-dropdown-divider" }),
				((0, require__plugin_vue_export_helper.vue_exports.openBlock)(true), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(require__plugin_vue_export_helper.vue_exports.Fragment, null, (0, require__plugin_vue_export_helper.vue_exports.renderList)($options.specialMenus, (item) => {
					return (0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(_component_nuxt_link, {
						key: item.to,
						to: item.to,
						class: "fl-dropdown-item"
					}, {
						default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(item.title), 1)]),
						_: 2
					}, 1032, ["to"]);
				}), 128)),
				_ctx.session.menus && _ctx.session.menus.length ? ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(require__plugin_vue_export_helper.vue_exports.Fragment, { key: 0 }, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: "fl-dropdown-divider" }), ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(true), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(require__plugin_vue_export_helper.vue_exports.Fragment, null, (0, require__plugin_vue_export_helper.vue_exports.renderList)(_ctx.session.menus, (m) => {
					return (0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(_component_nuxt_link, {
						key: m.l,
						to: m.l,
						class: "fl-dropdown-item"
					}, {
						default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(m.t), 1)]),
						_: 2
					}, 1032, ["to"]);
				}), 128))], 64)) : (0, require__plugin_vue_export_helper.vue_exports.createCommentVNode)("", true)
			];
		}),
		_: 1
	}, _parent));
	_push(`</li></ul><div class="fl-navbar-tail">`);
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_search_form, { class: "fl-navbar-search" }, null, _parent));
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_nuxt_link, {
		class: "fl-icon-btn",
		to: "/random",
		title: _ctx.t("titles.random_page", "임의 문서")
	}, {
		default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
			if (_push) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_fl_icon, { name: "dice" }, null, _parent, _scopeId));
			else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_fl_icon, { name: "dice" })];
		}),
		_: 1
	}, _parent));
	if ($options.notificationCount) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_nuxt_link, {
		class: "fl-icon-btn fl-has-badge",
		to: "/member/notifications",
		title: _ctx.t("skin.notifications", "알림")
	}, {
		default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_fl_icon, { name: "bell" }, null, _parent, _scopeId));
				_push(`<span class="fl-badge"${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)($options.notificationCount > 99 ? "99+" : $options.notificationCount)}</span>`);
			} else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_fl_icon, { name: "bell" }), (0, require__plugin_vue_export_helper.vue_exports.createVNode)("span", { class: "fl-badge" }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)($options.notificationCount > 99 ? "99+" : $options.notificationCount), 1)];
		}),
		_: 1
	}, _parent));
	else _push(`<!---->`);
	_push(`<a class="fl-icon-btn" href="#"${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttr)("title", $options.themeLabel)}>`);
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_fl_icon, { name: _ctx.isDark ? "sun" : "moon" }, null, _parent));
	_push(`</a>`);
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_dropdown, {
		right: "",
		class: "fl-user-dropdown"
	}, {
		toggle: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push(`<a id="login-menu" class="fl-icon-btn fl-avatar-btn" href="#"${_scopeId}>`);
				if (_ctx.session.gravatar_url) _push(`<img class="fl-avatar"${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttr)("src", _ctx.session.gravatar_url)} alt=""${_scopeId}>`);
				else _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_fl_icon, { name: "user" }, null, _parent, _scopeId));
				_push(`</a>`);
			} else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("a", {
				id: "login-menu",
				class: "fl-icon-btn fl-avatar-btn",
				href: "#",
				onClick: (0, require__plugin_vue_export_helper.vue_exports.withModifiers)(() => {}, ["prevent"])
			}, [_ctx.session.gravatar_url ? ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)("img", {
				key: 0,
				class: "fl-avatar",
				src: _ctx.session.gravatar_url,
				alt: ""
			}, null, 8, ["src"])) : ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(_component_fl_icon, {
				key: 1,
				name: "user"
			}))], 8, ["onClick"])];
		}),
		default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push(`<div class="fl-dropdown-user"${_scopeId}><b${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.session.account && _ctx.session.account.name)}</b><small${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)($options.isMember ? _ctx.t("skin.member", "위키 회원") : _ctx.t("skin.anonymous", "로그인이 필요합니다"))}</small></div><div class="fl-dropdown-divider"${_scopeId}></div><a href="#" class="fl-dropdown-item"${_scopeId}>`);
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_fl_icon, { name: "settings" }, null, _parent, _scopeId));
				_push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.t("components.setting.title", "설정"))}</a><a href="#" class="fl-dropdown-item"${_scopeId}>`);
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_fl_icon, { name: _ctx.isDark ? "sun" : "moon" }, null, _parent, _scopeId));
				_push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)($options.themeLabel)}</a>`);
				if ($options.isMember) {
					_push(`<!--[--><div class="fl-dropdown-divider"${_scopeId}></div>`);
					_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_nuxt_link, {
						to: "/member/mypage",
						class: "fl-dropdown-item"
					}, {
						default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
							if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.t("titles.mypage", "내 정보"))}`);
							else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.t("titles.mypage", "내 정보")), 1)];
						}),
						_: 1
					}, _parent, _scopeId));
					_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_nuxt_link, {
						to: _ctx.doc_action_link(_ctx.user_doc(_ctx.session.account.name), "w"),
						class: "fl-dropdown-item"
					}, {
						default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
							if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.t("skin.my_user_doc", "내 사용자 문서"))}`);
							else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.t("skin.my_user_doc", "내 사용자 문서")), 1)];
						}),
						_: 1
					}, _parent, _scopeId));
					_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_nuxt_link, {
						to: _ctx.doc_action_link(_ctx.user_doc(_ctx.session.account.name), "w") + encodeURI("/연습장"),
						class: "fl-dropdown-item"
					}, {
						default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
							if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.t("skin_flasma:mySandbox", "내 연습장"))}`);
							else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.t("skin_flasma:mySandbox", "내 연습장")), 1)];
						}),
						_: 1
					}, _parent, _scopeId));
					_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_nuxt_link, {
						to: "/member/starred_documents",
						class: "fl-dropdown-item"
					}, {
						default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
							if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.t("skin.my_stars", "내 문서함"))}`);
							else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.t("skin.my_stars", "내 문서함")), 1)];
						}),
						_: 1
					}, _parent, _scopeId));
					_push(`<!--]-->`);
				} else _push(`<!---->`);
				if (_ctx.session.account && _ctx.session.account.uuid) {
					_push(`<!--[--><div class="fl-dropdown-divider"${_scopeId}></div>`);
					_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_nuxt_link, {
						to: _ctx.contribution_link(_ctx.session.account.uuid),
						class: "fl-dropdown-item"
					}, {
						default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
							if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.t("skin.my_contribution_document", "내 문서 기여"))}`);
							else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.t("skin.my_contribution_document", "내 문서 기여")), 1)];
						}),
						_: 1
					}, _parent, _scopeId));
					_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_nuxt_link, {
						to: _ctx.contribution_link_discuss(_ctx.session.account.uuid),
						class: "fl-dropdown-item"
					}, {
						default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
							if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.t("skin.my_contribution_discuss", "내 토론 기여"))}`);
							else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.t("skin.my_contribution_discuss", "내 토론 기여")), 1)];
						}),
						_: 1
					}, _parent, _scopeId));
					_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_nuxt_link, {
						to: _ctx.contribution_link_edit_request(_ctx.session.account.uuid),
						class: "fl-dropdown-item"
					}, {
						default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
							if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.t("skin.my_contribution_edit_request", "내 편집 요청"))}`);
							else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.t("skin.my_contribution_edit_request", "내 편집 요청")), 1)];
						}),
						_: 1
					}, _parent, _scopeId));
					_push(`<!--]-->`);
				} else _push(`<!---->`);
				_push(`<div class="fl-dropdown-divider"${_scopeId}></div>`);
				if ($options.isMember) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_nuxt_link, {
					to: {
						path: "/member/logout",
						query: { redirect: _ctx.$route.fullPath }
					},
					class: "fl-dropdown-item"
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) {
							_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_fl_icon, { name: "logout" }, null, _parent, _scopeId));
							_push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.t("skin.logout", "로그아웃"))}`);
						} else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_fl_icon, { name: "logout" }), (0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.t("skin.logout", "로그아웃")), 1)];
					}),
					_: 1
				}, _parent, _scopeId));
				else _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_nuxt_link, {
					to: {
						path: "/member/login",
						query: { redirect: _ctx.$route.fullPath }
					},
					class: "fl-dropdown-item"
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) {
							_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_fl_icon, { name: "login" }, null, _parent, _scopeId));
							_push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.t("skin.login", "로그인"))}`);
						} else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_fl_icon, { name: "login" }), (0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.t("skin.login", "로그인")), 1)];
					}),
					_: 1
				}, _parent, _scopeId));
			} else return [
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: "fl-dropdown-user" }, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("b", null, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.session.account && _ctx.session.account.name), 1), (0, require__plugin_vue_export_helper.vue_exports.createVNode)("small", null, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)($options.isMember ? _ctx.t("skin.member", "위키 회원") : _ctx.t("skin.anonymous", "로그인이 필요합니다")), 1)]),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: "fl-dropdown-divider" }),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("a", {
					href: "#",
					class: "fl-dropdown-item",
					onClick: (0, require__plugin_vue_export_helper.vue_exports.withModifiers)(($event) => _ctx.$emit("openSetting"), ["prevent"])
				}, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_fl_icon, { name: "settings" }), (0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.t("components.setting.title", "설정")), 1)], 8, ["onClick"]),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("a", {
					href: "#",
					class: "fl-dropdown-item",
					onClick: (0, require__plugin_vue_export_helper.vue_exports.withModifiers)($options.toggleTheme, ["prevent"])
				}, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_fl_icon, { name: _ctx.isDark ? "sun" : "moon" }, null, 8, ["name"]), (0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)($options.themeLabel), 1)], 8, ["onClick"]),
				$options.isMember ? ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(require__plugin_vue_export_helper.vue_exports.Fragment, { key: 0 }, [
					(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: "fl-dropdown-divider" }),
					(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_nuxt_link, {
						to: "/member/mypage",
						class: "fl-dropdown-item"
					}, {
						default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.t("titles.mypage", "내 정보")), 1)]),
						_: 1
					}),
					(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_nuxt_link, {
						to: _ctx.doc_action_link(_ctx.user_doc(_ctx.session.account.name), "w"),
						class: "fl-dropdown-item"
					}, {
						default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.t("skin.my_user_doc", "내 사용자 문서")), 1)]),
						_: 1
					}, 8, ["to"]),
					(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_nuxt_link, {
						to: _ctx.doc_action_link(_ctx.user_doc(_ctx.session.account.name), "w") + encodeURI("/연습장"),
						class: "fl-dropdown-item"
					}, {
						default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.t("skin_flasma:mySandbox", "내 연습장")), 1)]),
						_: 1
					}, 8, ["to"]),
					(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_nuxt_link, {
						to: "/member/starred_documents",
						class: "fl-dropdown-item"
					}, {
						default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.t("skin.my_stars", "내 문서함")), 1)]),
						_: 1
					})
				], 64)) : (0, require__plugin_vue_export_helper.vue_exports.createCommentVNode)("", true),
				_ctx.session.account && _ctx.session.account.uuid ? ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(require__plugin_vue_export_helper.vue_exports.Fragment, { key: 1 }, [
					(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: "fl-dropdown-divider" }),
					(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_nuxt_link, {
						to: _ctx.contribution_link(_ctx.session.account.uuid),
						class: "fl-dropdown-item"
					}, {
						default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.t("skin.my_contribution_document", "내 문서 기여")), 1)]),
						_: 1
					}, 8, ["to"]),
					(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_nuxt_link, {
						to: _ctx.contribution_link_discuss(_ctx.session.account.uuid),
						class: "fl-dropdown-item"
					}, {
						default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.t("skin.my_contribution_discuss", "내 토론 기여")), 1)]),
						_: 1
					}, 8, ["to"]),
					(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_nuxt_link, {
						to: _ctx.contribution_link_edit_request(_ctx.session.account.uuid),
						class: "fl-dropdown-item"
					}, {
						default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.t("skin.my_contribution_edit_request", "내 편집 요청")), 1)]),
						_: 1
					}, 8, ["to"])
				], 64)) : (0, require__plugin_vue_export_helper.vue_exports.createCommentVNode)("", true),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: "fl-dropdown-divider" }),
				$options.isMember ? ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(_component_nuxt_link, {
					key: 2,
					to: {
						path: "/member/logout",
						query: { redirect: _ctx.$route.fullPath }
					},
					class: "fl-dropdown-item"
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_fl_icon, { name: "logout" }), (0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.t("skin.logout", "로그아웃")), 1)]),
					_: 1
				}, 8, ["to"])) : ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(_component_nuxt_link, {
					key: 3,
					to: {
						path: "/member/login",
						query: { redirect: _ctx.$route.fullPath }
					},
					class: "fl-dropdown-item"
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_fl_icon, { name: "login" }), (0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.t("skin.login", "로그인")), 1)]),
					_: 1
				}, 8, ["to"]))
			];
		}),
		_: 1
	}, _parent));
	_push(`</div></nav></div>`);
}
var _sfc_setup$20 = _sfc_main$20.setup;
_sfc_main$20.setup = (props, ctx) => {
	const ssrContext = (0, require__plugin_vue_export_helper.vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("skins/flasma/components/navbar.vue");
	return _sfc_setup$20 ? _sfc_setup$20(props, ctx) : void 0;
};
var navbar_default = /*#__PURE__*/ require__plugin_vue_export_helper._plugin_vue_export_helper_default(_sfc_main$20, [["ssrRender", _sfc_ssrRender$20]]);
//#endregion
//#region skins/flasma/components/contentTools.vue
var _sfc_main$19 = {
	mixins: [flasma_default],
	components: {
		Dropdown: dropdown_default,
		FlIcon: icon_default
	},
	emits: ["onClickEditBtn"],
	data() {
		return {
			main: [],
			menu: []
		};
	},
	computed: { pageData() {
		return this.page.data || {};
	} },
	methods: {
		push(list, item) {
			item.key = item.key || item.to || item.title || String(list.length);
			list.push(item);
		},
		calculate() {
			const d = this.pageData;
			const uuid = d.uuid;
			const main = [];
			const menu = [];
			const backlink = () => this.push(main, {
				to: this.doc_action_link(d.document, "backlink"),
				icon: "link",
				title: this.t("skin.backlink", "역링크")
			});
			const acl = (hash = "") => this.push(main, {
				to: this.doc_action_link(d.document, "acl") + hash,
				icon: "shield",
				title: "ACL"
			});
			const discuss = () => this.push(main, {
				to: this.doc_action_link(d.document, "discuss"),
				class: d.discuss_progress ? "is-progress" : null,
				icon: "comments",
				title: this.t("skin.discuss", "토론")
			});
			const history = () => this.push(main, {
				to: this.doc_action_link(d.document, "history", d.rev ? { from: d.rev } : void 0),
				icon: "clock",
				title: this.t("skin.history", "역사")
			});
			const edit = () => {
				if (d.editable === true && d.edit_acl_message) this.push(main, {
					onclick: () => this.$emit("onClickEditBtn"),
					icon: "pencil",
					title: this.t("skin_flasma:edit_request", "편집 요청")
				});
				else if (d.editable === false && d.edit_acl_message) this.push(main, {
					onclick: () => this.$emit("onClickEditBtn"),
					icon: "lock",
					title: this.t("skin.edit", "편집")
				});
				else this.push(main, {
					to: this.doc_action_link(d.document, "edit"),
					class: "is-primary",
					icon: "pencil",
					title: this.t("skin.edit", "편집")
				});
			};
			const adminMenus = (account) => {
				if (!this.adminConvenience || !account) return;
				if (account.type !== -1) this.push(menu, {
					class: "is-admin",
					onclick: () => this.openQuickACLGroup({
						username: account.type === 1 ? account.name : void 0,
						ip: account.type === 0 ? account.name + "/" + (account.name.indexOf(".") === -1 ? "128" : "32") : void 0,
						note: "긴급차단"
					}),
					title: this.t("skin_flasma:admin_block", "사용자 차단")
				});
				this.push(menu, {
					class: "is-admin",
					to: `/BlockHistory?query=${account.uuid}&target=text`,
					title: this.t("skin_flasma:admin_block_history", "차단 내역")
				});
				this.push(menu, {
					class: "is-admin",
					onclick: () => this.copyUuid(account.name, account.uuid),
					title: this.t("skin_flasma:admin_copy_uuid", "UUID 복사")
				});
			};
			switch (this.page.viewName) {
				case "wiki": if (d.date === null) {
					backlink();
					acl("#namespace.read");
					break;
				} else if (!uuid) {
					if (d.starred) this.push(main, {
						to: this.doc_action_link(d.document, "member/unstar"),
						class: "is-star is-starred",
						icon: "star",
						iconFilled: true,
						badge: d.star_count
					});
					else if (d.star_count >= 0) this.push(main, {
						to: this.doc_action_link(d.document, "member/star"),
						class: "is-star",
						icon: "star",
						badge: d.star_count
					});
					backlink();
					discuss();
					edit();
					history();
					acl();
					if (d.user) {
						this.push(menu, {
							to: this.contribution_link(d.user.uuid),
							title: this.t("skin_flasma:contribution", "기여 목록")
						});
						adminMenus({
							...d.user,
							name: d.document.title,
							type: d.user.type ?? 1
						});
					}
					break;
				}
				case "raw":
				case "blame":
				case "revert":
				case "diff":
					history();
					[
						[
							"w",
							this.t("skin.view", "보기"),
							"wiki"
						],
						[
							"raw",
							"RAW",
							"raw"
						],
						[
							"blame",
							"blame",
							"blame"
						],
						[
							"revert",
							this.t("skin.revert", "되돌리기"),
							"revert"
						],
						[
							"diff",
							this.t("skin.diff", "비교"),
							"diff"
						]
					].forEach(([route, title, viewName]) => this.push(main, {
						to: this.doc_action_link(d.document, route, uuid ? { uuid } : void 0),
						class: this.page.viewName === viewName ? "is-disabled" : null,
						title
					}));
					break;
				case "notfound":
					backlink();
					discuss();
					edit();
					history();
					acl();
					break;
				case "edit":
					this.push(main, {
						to: this.doc_action_link(d.document, "move"),
						title: this.t("skin.move", "이동")
					});
					this.push(main, {
						to: this.doc_action_link(d.document, "delete"),
						class: "is-danger",
						title: this.t("skin.delete", "삭제")
					});
					history();
					acl("#document.edit");
					break;
				case "edit_edit_request":
					history();
					acl("#document.edit_request");
					break;
				case "history":
					discuss();
					this.push(main, {
						to: this.doc_action_link(d.document, "edit"),
						icon: "pencil",
						title: this.t("skin.edit", "편집")
					});
					acl();
					break;
				case "thread_list":
					this.push(main, {
						to: this.doc_action_link(d.document, "edit"),
						icon: "pencil",
						title: this.t("skin.edit", "편집")
					});
					acl("#document.create_thread");
					break;
				case "thread_list_close":
				case "edit_request_close":
					discuss();
					break;
				case "thread":
					discuss();
					acl("#document.write_thread_comment");
					break;
				case "edit_request":
					discuss();
					acl("#document.edit");
					break;
				case "contribution":
				case "contribution_discuss":
				case "contribution_edit_request": {
					const account = d.account || {};
					this.push(main, {
						to: account.type === 1 ? this.doc_action_link(this.user_doc(account.name), "w") : "#",
						class: account.type === 1 ? null : "is-disabled",
						icon: "file",
						title: this.t("skin.user_doc", "사용자 문서")
					});
					if (this.adminConvenience && account.type === -1 && account.uuid) this.push(menu, {
						to: this.doc_action_link(this.user_doc("*" + account.uuid), "w"),
						class: "is-admin",
						title: this.t("skin_flasma:admin_deleted_user_doc", "삭제된 사용자 문서")
					});
					adminMenus(account);
					break;
				}
				default:
					if (this.page.title === "오류") this.push(main, {
						onclick: () => this.$router.back(),
						title: this.t("skin_flasma:back", "이전 화면")
					});
					break;
			}
			this.main = main;
			this.menu = d.menus ? menu.concat(d.menus) : menu;
		},
		async copyUuid(name, uuid) {
			try {
				await navigator.clipboard.writeText(uuid);
				Ke(this.t("skin_flasma:toast_uuid_copied", "{{name}} 사용자의 UUID가 복사되었습니다.", { name }));
			} catch {
				Ke(this.t("skin_flasma:toast_copy_failed", "복사하지 못했습니다."));
			}
		}
	},
	mounted() {
		this.calculate();
	},
	watch: {
		$route() {
			this.$nextTick(() => this.calculate());
		},
		"$store.state.page.data"() {
			this.$nextTick(() => this.calculate());
		},
		"$store.state.localConfig"() {
			this.$nextTick(() => this.calculate());
		}
	}
};
function _sfc_ssrRender$19(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_fl_icon = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("fl-icon");
	const _component_nuxt_link = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("nuxt-link");
	const _component_dropdown = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("dropdown");
	if ($data.main.length || $data.menu.length) {
		_push(`<div${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttrs)((0, require__plugin_vue_export_helper.vue_exports.mergeProps)({ class: "fl-tools" }, _attrs))}><!--[-->`);
		(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderList)($data.main, (item) => {
			_push(`<!--[-->`);
			if (item.onclick) {
				_push(`<a href="#" class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)([item.class, "fl-tool"])}">`);
				if (item.icon) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_fl_icon, {
					name: item.icon,
					filled: item.iconFilled
				}, null, _parent));
				else _push(`<!---->`);
				_push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(item.title)} `);
				if (item.badge !== void 0) _push(`<span class="fl-tool-badge">${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(item.badge)}</span>`);
				else _push(`<!---->`);
				_push(`</a>`);
			} else _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_nuxt_link, {
				to: item.to,
				class: ["fl-tool", item.class]
			}, {
				default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) {
						if (item.icon) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_fl_icon, {
							name: item.icon,
							filled: item.iconFilled
						}, null, _parent, _scopeId));
						else _push(`<!---->`);
						_push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(item.title)} `);
						if (item.badge !== void 0) _push(`<span class="fl-tool-badge"${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(item.badge)}</span>`);
						else _push(`<!---->`);
					} else return [
						item.icon ? ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(_component_fl_icon, {
							key: 0,
							name: item.icon,
							filled: item.iconFilled
						}, null, 8, ["name", "filled"])) : (0, require__plugin_vue_export_helper.vue_exports.createCommentVNode)("", true),
						(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(item.title) + " ", 1),
						item.badge !== void 0 ? ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)("span", {
							key: 1,
							class: "fl-tool-badge"
						}, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(item.badge), 1)) : (0, require__plugin_vue_export_helper.vue_exports.createCommentVNode)("", true)
					];
				}),
				_: 2
			}, _parent));
			_push(`<!--]-->`);
		});
		_push(`<!--]-->`);
		if ($data.menu.length) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_dropdown, {
			right: "",
			class: "fl-tool-more"
		}, {
			toggle: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
				if (_push) {
					_push(`<a href="#" class="fl-tool fl-tool-toggle"${_scopeId}>`);
					_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_fl_icon, { name: "chevronDown" }, null, _parent, _scopeId));
					_push(`</a>`);
				} else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("a", {
					href: "#",
					class: "fl-tool fl-tool-toggle",
					onClick: (0, require__plugin_vue_export_helper.vue_exports.withModifiers)(() => {}, ["prevent"])
				}, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_fl_icon, { name: "chevronDown" })], 8, ["onClick"])];
			}),
			default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
				if (_push) {
					_push(`<!--[-->`);
					(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderList)($data.menu, (m) => {
						_push(`<!--[-->`);
						if (m.onclick) _push(`<a href="#" class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)([m.class, "fl-dropdown-item"])}"${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(m.title)}</a>`);
						else _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_nuxt_link, {
							to: m.to,
							class: ["fl-dropdown-item", m.class]
						}, {
							default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
								if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(m.title)}`);
								else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(m.title), 1)];
							}),
							_: 2
						}, _parent, _scopeId));
						_push(`<!--]-->`);
					});
					_push(`<!--]-->`);
				} else return [((0, require__plugin_vue_export_helper.vue_exports.openBlock)(true), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(require__plugin_vue_export_helper.vue_exports.Fragment, null, (0, require__plugin_vue_export_helper.vue_exports.renderList)($data.menu, (m) => {
					return (0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(require__plugin_vue_export_helper.vue_exports.Fragment, { key: m.key }, [m.onclick ? ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)("a", {
						key: 0,
						href: "#",
						class: ["fl-dropdown-item", m.class],
						onClick: (0, require__plugin_vue_export_helper.vue_exports.withModifiers)(m.onclick, ["prevent"])
					}, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(m.title), 11, ["onClick"])) : ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(_component_nuxt_link, {
						key: 1,
						to: m.to,
						class: ["fl-dropdown-item", m.class]
					}, {
						default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(m.title), 1)]),
						_: 2
					}, 1032, ["to", "class"]))], 64);
				}), 128))];
			}),
			_: 1
		}, _parent));
		else _push(`<!---->`);
		_push(`</div>`);
	} else _push(`<!---->`);
}
var _sfc_setup$19 = _sfc_main$19.setup;
_sfc_main$19.setup = (props, ctx) => {
	const ssrContext = (0, require__plugin_vue_export_helper.vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("skins/flasma/components/contentTools.vue");
	return _sfc_setup$19 ? _sfc_setup$19(props, ctx) : void 0;
};
var contentTools_default = /*#__PURE__*/ require__plugin_vue_export_helper._plugin_vue_export_helper_default(_sfc_main$19, [["ssrRender", _sfc_ssrRender$19]]);
//#endregion
//#region skins/flasma/components/recentPanel.vue
var _sfc_main$18 = {
	mixins: [{
		mixins: [common_default],
		components: { LocalDate: localDate_default },
		data() {
			return {
				recent: [],
				discuss: [],
				interval: null
			};
		},
		mounted() {
			this.interval = setInterval(() => this.updateSidebar(), 1e3 * 5);
			this.updateSidebar().then();
		},
		beforeUnmount() {
			if (this.interval) {
				clearInterval(this.interval);
				this.interval = null;
			}
		},
		methods: { async updateSidebar() {
			const res = await this.internalRequest("/sidebar", { noProgress: true });
			this.recent = res.document;
			this.discuss = res.discuss;
		} }
	}, flasma_default],
	props: { limit: {
		type: Number,
		default: 14
	} },
	methods: { dateFormat(date) {
		return Math.floor(Date.now() / 1e3) - 86400 > date ? "Y/m/d" : "H:i:s";
	} }
};
function _sfc_ssrRender$18(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_nuxt_link = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("nuxt-link");
	const _component_local_date = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("local-date");
	_push(`<section${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttrs)((0, require__plugin_vue_export_helper.vue_exports.mergeProps)({ class: "fl-card fl-recent" }, _attrs))}><header class="fl-card-head"><h2>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.t("skin.recent_changes", "최근 변경"))}</h2>`);
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_nuxt_link, {
		to: "/RecentChanges",
		class: "fl-pill"
	}, {
		default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
			if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.t("skin_flasma:more", "더 보기"))}`);
			else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.t("skin_flasma:more", "더 보기")), 1)];
		}),
		_: 1
	}, _parent));
	_push(`</header><ul id="live-recent-list" class="fl-recent-list">`);
	if (!_ctx.recent.length) {
		_push(`<!--[-->`);
		(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderList)($props.limit, (i) => {
			_push(`<li class="fl-recent-item is-skeleton"><span></span></li>`);
		});
		_push(`<!--]-->`);
	} else {
		_push(`<!--[-->`);
		(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderList)(_ctx.recent.slice(0, $props.limit), (r, i) => {
			_push(`<li class="fl-recent-item">`);
			_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_nuxt_link, {
				to: _ctx.doc_action_link(r.document, "w"),
				class: { "is-removed": r.status === "delete" }
			}, {
				default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<span class="fl-recent-time"${_scopeId}>`);
						_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_local_date, {
							date: r.date,
							format: $options.dateFormat(r.date)
						}, null, _parent, _scopeId));
						_push(`</span><span class="fl-recent-doc"${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(r.document)}</span>`);
					} else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("span", { class: "fl-recent-time" }, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_local_date, {
						date: r.date,
						format: $options.dateFormat(r.date)
					}, null, 8, ["date", "format"])]), (0, require__plugin_vue_export_helper.vue_exports.createVNode)("span", { class: "fl-recent-doc" }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(r.document), 1)];
				}),
				_: 2
			}, _parent));
			_push(`</li>`);
		});
		_push(`<!--]-->`);
	}
	_push(`</ul></section>`);
}
var _sfc_setup$18 = _sfc_main$18.setup;
_sfc_main$18.setup = (props, ctx) => {
	const ssrContext = (0, require__plugin_vue_export_helper.vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("skins/flasma/components/recentPanel.vue");
	return _sfc_setup$18 ? _sfc_setup$18(props, ctx) : void 0;
};
var recentPanel_default = /*#__PURE__*/ require__plugin_vue_export_helper._plugin_vue_export_helper_default(_sfc_main$18, [["ssrRender", _sfc_ssrRender$18]]);
//#endregion
//#region skins/flasma/components/popularPanel.vue
var _sfc_main$17 = {
	mixins: [flasma_default],
	emits: ["hasItems"],
	computed: { items() {
		const list = this.viewData.pageviewsTop;
		if (!Array.isArray(list)) return [];
		return list.filter((item) => item && item.link && item.title);
	} },
	methods: { countText(count) {
		return this.t("skin_flasma:popular_count", "{{count}}회", { count: Number(count || 0).toLocaleString() });
	} },
	watch: { items: {
		immediate: true,
		handler(list) {
			this.$emit("hasItems", list.length > 0);
		}
	} }
};
function _sfc_ssrRender$17(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_nuxt_link = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("nuxt-link");
	if ($options.items.length) {
		_push(`<section${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttrs)((0, require__plugin_vue_export_helper.vue_exports.mergeProps)({ class: "fl-card fl-popular" }, _attrs))}><header class="fl-card-head"><h2>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.t("skin_flasma:popular", "인기 문서"))}</h2>`);
		_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_nuxt_link, {
			to: "/PopularPages",
			class: "fl-pill"
		}, {
			default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
				if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.t("skin_flasma:more", "더 보기"))}`);
				else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.t("skin_flasma:more", "더 보기")), 1)];
			}),
			_: 1
		}, _parent));
		_push(`</header><ol class="fl-popular-list"><!--[-->`);
		(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderList)($options.items, (item, i) => {
			_push(`<li class="fl-popular-item">`);
			_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_nuxt_link, { to: item.link }, {
				default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<span class="fl-popular-rank"${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(i + 1)}</span><span class="fl-popular-doc"${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(item.title)}</span><span class="fl-popular-count"${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)($options.countText(item.count))}</span>`);
					else return [
						(0, require__plugin_vue_export_helper.vue_exports.createVNode)("span", { class: "fl-popular-rank" }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(i + 1), 1),
						(0, require__plugin_vue_export_helper.vue_exports.createVNode)("span", { class: "fl-popular-doc" }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(item.title), 1),
						(0, require__plugin_vue_export_helper.vue_exports.createVNode)("span", { class: "fl-popular-count" }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)($options.countText(item.count)), 1)
					];
				}),
				_: 2
			}, _parent));
			_push(`</li>`);
		});
		_push(`<!--]--></ol></section>`);
	} else _push(`<!---->`);
}
var _sfc_setup$17 = _sfc_main$17.setup;
_sfc_main$17.setup = (props, ctx) => {
	const ssrContext = (0, require__plugin_vue_export_helper.vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("skins/flasma/components/popularPanel.vue");
	return _sfc_setup$17 ? _sfc_setup$17(props, ctx) : void 0;
};
var popularPanel_default = /*#__PURE__*/ require__plugin_vue_export_helper._plugin_vue_export_helper_default(_sfc_main$17, [["ssrRender", _sfc_ssrRender$17]]);
//#endregion
//#region skins/flasma/components/tocPanel.vue
var ACTIVE_OFFSET = 140;
var MAX_INDENT = 4;
var LANDING_OFFSET = 96;
var PAD_SETTLE_MS = 1200;
var _sfc_main$16 = {
	mixins: [flasma_default],
	emits: ["hasItems"],
	data() {
		return {
			items: [],
			activeId: null,
			observer: null,
			rebuildTimer: null,
			ticking: false,
			scrollPad: 0,
			basePadding: null,
			padLockUntil: 0
		};
	},
	methods: {
		indent(item) {
			return .55 + (Math.min(item.depth, MAX_INDENT) - 1) * .7 + "rem";
		},
		build() {
			const article = document.querySelector(".fl-article");
			const headings = article ? article.querySelectorAll(".wiki-heading") : [];
			const items = [];
			for (const heading of headings) {
				const anchor = heading.querySelector("a[id^=\"s-\"]");
				if (!anchor) continue;
				const clone = heading.cloneNode(true);
				clone.querySelector("a[id^=\"s-\"]")?.remove();
				clone.querySelectorAll(".wiki-edit-section").forEach((el) => el.remove());
				const num = anchor.textContent.trim();
				items.push({
					id: anchor.id,
					num,
					title: clone.textContent.trim(),
					depth: num.replace(/\.\s*$/, "").split(".").length
				});
			}
			this.items = items;
			this.$emit("hasItems", items.length > 0);
			this.updateActive();
		},
		scheduleRebuild() {
			clearTimeout(this.rebuildTimer);
			this.rebuildTimer = setTimeout(() => this.build(), 150);
		},
		updateActive() {
			if (!this.items.length) return;
			let current = null;
			for (const item of this.items) {
				const el = document.getElementById(item.id);
				if (!el) continue;
				if (el.getBoundingClientRect().top <= ACTIVE_OFFSET) current = item.id;
				else break;
			}
			this.activeId = current ?? this.items[0].id;
		},
		ensureRoomFor(id) {
			const el = document.getElementById(id);
			const shell = document.querySelector(".fl-shell");
			if (!el || !shell) return;
			const wanted = window.scrollY + el.getBoundingClientRect().top - LANDING_OFFSET;
			const max = document.documentElement.scrollHeight - window.innerHeight;
			const missing = Math.ceil(wanted - max);
			if (missing <= 0) return;
			this.setScrollPad(this.scrollPad + missing);
			this.padLockUntil = Date.now() + PAD_SETTLE_MS;
		},
		setScrollPad(px) {
			const shell = document.querySelector(".fl-shell");
			if (!shell) return;
			if (this.basePadding === null && !this.scrollPad) this.basePadding = parseFloat(getComputedStyle(shell).paddingBottom) || 0;
			this.scrollPad = Math.max(0, Math.round(px));
			shell.style.paddingBottom = this.scrollPad ? `${this.basePadding + this.scrollPad}px` : "";
		},
		releaseScrollPadIfUnused() {
			if (!this.scrollPad || Date.now() < this.padLockUntil) return;
			const maxWithout = document.documentElement.scrollHeight - this.scrollPad - window.innerHeight;
			if (window.scrollY <= maxWithout) this.setScrollPad(0);
		},
		onItemClick(e) {
			const link = e.target.closest("a[href^=\"#\"]");
			if (link) this.ensureRoomFor(link.getAttribute("href").slice(1));
		},
		onScroll() {
			if (this.ticking) return;
			this.ticking = true;
			requestAnimationFrame(() => {
				this.updateActive();
				this.releaseScrollPadIfUnused();
				this.ticking = false;
			});
		}
	},
	mounted() {
		this.build();
		const article = document.querySelector(".fl-article");
		if (article && window.MutationObserver) {
			this.observer = new MutationObserver(() => this.scheduleRebuild());
			this.observer.observe(article, {
				childList: true,
				subtree: true
			});
		}
		window.addEventListener("scroll", this.onScroll, { passive: true });
	},
	beforeUnmount() {
		this.observer?.disconnect();
		clearTimeout(this.rebuildTimer);
		window.removeEventListener("scroll", this.onScroll);
		this.setScrollPad(0);
	},
	watch: { $route(to, from) {
		if (to.path !== from.path) this.setScrollPad(0);
		this.$nextTick(() => this.scheduleRebuild());
	} }
};
function _sfc_ssrRender$16(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_nuxt_link = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("nuxt-link");
	if ($data.items.length) {
		_push(`<section${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttrs)((0, require__plugin_vue_export_helper.vue_exports.mergeProps)({ class: "fl-card fl-toc" }, _attrs))}><header class="fl-card-head"><h2>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.t("skin_flasma:toc", "목차"))}</h2></header><nav class="fl-toc-list"><!--[-->`);
		(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderList)($data.items, (item) => {
			_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_nuxt_link, {
				key: item.id,
				to: "#" + item.id,
				class: ["fl-toc-item", { "is-active": item.id === $data.activeId }],
				style: { paddingLeft: $options.indent(item) }
			}, {
				default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<span class="fl-toc-num"${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(item.num)}</span><span class="fl-toc-text"${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(item.title)}</span>`);
					else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("span", { class: "fl-toc-num" }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(item.num), 1), (0, require__plugin_vue_export_helper.vue_exports.createVNode)("span", { class: "fl-toc-text" }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(item.title), 1)];
				}),
				_: 2
			}, _parent));
		});
		_push(`<!--]--></nav></section>`);
	} else _push(`<!---->`);
}
var _sfc_setup$16 = _sfc_main$16.setup;
_sfc_main$16.setup = (props, ctx) => {
	const ssrContext = (0, require__plugin_vue_export_helper.vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("skins/flasma/components/tocPanel.vue");
	return _sfc_setup$16 ? _sfc_setup$16(props, ctx) : void 0;
};
var tocPanel_default = /*#__PURE__*/ require__plugin_vue_export_helper._plugin_vue_export_helper_default(_sfc_main$16, [["ssrRender", _sfc_ssrRender$16]]);
//#endregion
//#region skins/flasma/components/userProfileCard.vue
var _sfc_main$15 = {
	mixins: [flasma_default],
	components: { FlIcon: icon_default },
	props: { profile: {
		type: Object,
		required: true
	} },
	computed: {
		createdAt() {
			if (!this.profile.createdAt) return null;
			const date = new Date(this.profile.createdAt);
			if (Number.isNaN(date.getTime())) return null;
			return date.toLocaleDateString();
		},
		permissions() {
			return this.toLines(this.profile.userPerm);
		},
		aclGroups() {
			return this.toLines(this.profile.aclGroups);
		},
		uuid() {
			return this.profile.uuid || this.page.data?.user?.uuid || null;
		}
	},
	mounted() {
		window.bindCloneTrigger?.();
	},
	updated() {
		window.bindCloneTrigger?.();
	},
	methods: { toLines(value) {
		if (!value) return [];
		return String(value).split(/<br\s*\/?>|\r?\n/i).map((line) => line.trim()).filter(Boolean);
	} }
};
function _sfc_ssrRender$15(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_fl_icon = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("fl-icon");
	const _component_nuxt_link = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("nuxt-link");
	_push(`<section${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttrs)((0, require__plugin_vue_export_helper.vue_exports.mergeProps)({ class: "fl-card fl-profile user-profile-table" }, _attrs))}>`);
	if ($props.profile.gravatarUrl) _push(`<div class="fl-profile-avatar"><img${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttr)("src", $props.profile.gravatarUrl)} class="avatar" alt="" decoding="async"></div>`);
	else _push(`<!---->`);
	_push(`<h2 class="fl-profile-name"><strong class="clone-trigger">${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)($props.profile.username)}</strong></h2><dl class="fl-profile-rows">`);
	if ($options.createdAt) {
		_push(`<div class="fl-profile-row"><dt>`);
		_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_fl_icon, { name: "calendar" }, null, _parent));
		_push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.t("skin_flasma:joinedAt", "가입일"))}</dt><dd>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)($options.createdAt)}</dd></div>`);
	} else _push(`<!---->`);
	if ($options.permissions.length) {
		_push(`<div class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)([{ "is-stacked": $options.permissions.length > 1 }, "fl-profile-row"])}"><dt>`);
		_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_fl_icon, { name: "key" }, null, _parent));
		_push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.t("skin_flasma:permission", "권한"))}</dt><dd><!--[-->`);
		(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderList)($options.permissions, (item, i) => {
			_push(`<span class="fl-chip">${item ?? ""}</span>`);
		});
		_push(`<!--]--></dd></div>`);
	} else _push(`<!---->`);
	if ($options.aclGroups.length) {
		_push(`<div class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)([{ "is-stacked": $options.aclGroups.length > 1 }, "fl-profile-row"])}"><dt>`);
		_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_fl_icon, { name: "shield" }, null, _parent));
		_push(`ACL Group</dt><dd><!--[-->`);
		(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderList)($options.aclGroups, (item, i) => {
			_push(`<span class="fl-chip">${item ?? ""}</span>`);
		});
		_push(`<!--]--></dd></div>`);
	} else _push(`<!---->`);
	_push(`</dl>`);
	if ($options.uuid) {
		_push(`<div class="fl-profile-actions">`);
		_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_nuxt_link, {
			to: _ctx.contribution_link($options.uuid),
			class: "fl-pill"
		}, {
			default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
				if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.t("skin.contribution", "기여 목록"))}`);
				else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.t("skin.contribution", "기여 목록")), 1)];
			}),
			_: 1
		}, _parent));
		_push(`</div>`);
	} else _push(`<!---->`);
	_push(`</section>`);
}
var _sfc_setup$15 = _sfc_main$15.setup;
_sfc_main$15.setup = (props, ctx) => {
	const ssrContext = (0, require__plugin_vue_export_helper.vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("skins/flasma/components/userProfileCard.vue");
	return _sfc_setup$15 ? _sfc_setup$15(props, ctx) : void 0;
};
var userProfileCard_default = /*#__PURE__*/ require__plugin_vue_export_helper._plugin_vue_export_helper_default(_sfc_main$15, [["ssrRender", _sfc_ssrRender$15]]);
//#endregion
//#region skins/flasma/components/scrollButtons.vue
var _sfc_main$14 = {
	mixins: [flasma_default],
	components: { FlIcon: icon_default }
};
function _sfc_ssrRender$14(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_nuxt_link = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("nuxt-link");
	const _component_fl_icon = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("fl-icon");
	_push(`<div${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttrs)((0, require__plugin_vue_export_helper.vue_exports.mergeProps)({ class: "fl-scroll fl-glass" }, _attrs))}>`);
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_nuxt_link, {
		class: "fl-scroll-btn",
		to: "#toc",
		title: _ctx.t("skin_flasma:toc", "목차")
	}, {
		default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
			if (_push) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_fl_icon, { name: "list" }, null, _parent, _scopeId));
			else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_fl_icon, { name: "list" })];
		}),
		_: 1
	}, _parent));
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_nuxt_link, {
		class: "fl-scroll-btn",
		to: "#top",
		title: _ctx.t("skin_flasma:toTop", "맨 위로")
	}, {
		default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
			if (_push) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_fl_icon, { name: "arrowUp" }, null, _parent, _scopeId));
			else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_fl_icon, { name: "arrowUp" })];
		}),
		_: 1
	}, _parent));
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_nuxt_link, {
		class: "fl-scroll-btn",
		to: "#bottom",
		title: _ctx.t("skin_flasma:toBottom", "맨 아래로")
	}, {
		default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
			if (_push) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_fl_icon, { name: "arrowDown" }, null, _parent, _scopeId));
			else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_fl_icon, { name: "arrowDown" })];
		}),
		_: 1
	}, _parent));
	_push(`</div>`);
}
var _sfc_setup$14 = _sfc_main$14.setup;
_sfc_main$14.setup = (props, ctx) => {
	const ssrContext = (0, require__plugin_vue_export_helper.vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("skins/flasma/components/scrollButtons.vue");
	return _sfc_setup$14 ? _sfc_setup$14(props, ctx) : void 0;
};
var scrollButtons_default = /*#__PURE__*/ require__plugin_vue_export_helper._plugin_vue_export_helper_default(_sfc_main$14, [["ssrRender", _sfc_ssrRender$14]]);
//#endregion
//#region src/components/settingItem.vue
var _sfc_main$13 = {
	props: {
		label: { type: String },
		ckey: { type: String },
		note: { type: String },
		noSave: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return { value: this.$store.state.localConfig[this.ckey] ?? this.default };
	},
	watch: { value(newValue) {
		if (!this.noSave) this.$store.state.localConfigSetValue(this.ckey, newValue);
	} }
};
function _sfc_ssrRender$13(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	_push(`<div${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttrs)((0, require__plugin_vue_export_helper.vue_exports.mergeProps)({ class: "setting-item" }, _attrs))} data-v-717a1db4><label${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttr)("for", $props.ckey)} data-v-717a1db4>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)($props.label)} `);
	if ($props.note) _push(`<small data-v-717a1db4>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)($props.note)}</small>`);
	else _push(`<!---->`);
	_push(`</label><div class="setting-item-content" data-v-717a1db4>`);
	(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "default", {}, null, _push, _parent);
	_push(`</div></div>`);
}
var _sfc_setup$13 = _sfc_main$13.setup;
_sfc_main$13.setup = (props, ctx) => {
	const ssrContext = (0, require__plugin_vue_export_helper.vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/settingItem.vue");
	return _sfc_setup$13 ? _sfc_setup$13(props, ctx) : void 0;
};
var settingItem_default = /*#__PURE__*/ require__plugin_vue_export_helper._plugin_vue_export_helper_default(_sfc_main$13, [["ssrRender", _sfc_ssrRender$13], ["__scopeId", "data-v-717a1db4"]]);
//#endregion
//#region src/components/form/checkBox.vue
var _sfc_main$12 = {
	inject: { submittingSeedForm: { default: false } },
	props: {
		modelValue: Boolean,
		disabled: Boolean,
		checked: Boolean,
		whenChange: Function
	},
	data() {
		return { value: this.modelValue };
	},
	emits: ["update:modelValue"],
	created() {
		if (this.checked) this.value = true;
	},
	watch: { checked(newValue) {
		this.value = newValue;
	} },
	computed: {
		fieldError() {
			return this.name && this.$store.state.viewData.fieldErrors?.[this.name];
		},
		error() {
			return !!(this.hasError || this.fieldError || this.$store.state.viewData.errorAlert);
		},
		disable() {
			return this.disabled || this.submittingSeedForm;
		}
	},
	methods: { onInput(e) {
		this.whenChange?.(e);
		this.$emit("update:modelValue", e.target.checked);
	} }
};
function _sfc_ssrRender$12(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	let _temp0;
	_push(`<label${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttrs)((0, require__plugin_vue_export_helper.vue_exports.mergeProps)({ class: { disable: $options.disable } }, _attrs))} data-v-a04762a4><input${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttrs)((_temp0 = (0, require__plugin_vue_export_helper.vue_exports.mergeProps)({ type: "checkbox" }, _ctx.$attrs, {
		checked: Array.isArray($data.value) ? (0, require__plugin_vue_export_helper.server_renderer_exports.ssrLooseContain)($data.value, null) : $data.value,
		disabled: $options.disable
	}), (0, require__plugin_vue_export_helper.vue_exports.mergeProps)(_temp0, (0, require__plugin_vue_export_helper.server_renderer_exports.ssrGetDynamicModelProps)(_temp0, $data.value))))} data-v-a04762a4>`);
	(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "default", {}, null, _push, _parent);
	_push(`</label>`);
}
var _sfc_setup$12 = _sfc_main$12.setup;
_sfc_main$12.setup = (props, ctx) => {
	const ssrContext = (0, require__plugin_vue_export_helper.vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/form/checkBox.vue");
	return _sfc_setup$12 ? _sfc_setup$12(props, ctx) : void 0;
};
var checkBox_default = /*#__PURE__*/ require__plugin_vue_export_helper._plugin_vue_export_helper_default(_sfc_main$12, [["ssrRender", _sfc_ssrRender$12], ["__scopeId", "data-v-a04762a4"]]);
//#endregion
//#region src/components/settingItemCheckbox.vue
var _sfc_main$11 = {
	extends: settingItem_default,
	components: {
		CheckBox: checkBox_default,
		SettingItem: settingItem_default
	},
	props: { default: {
		type: Boolean,
		default: false
	} }
};
function _sfc_ssrRender$11(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_SettingItem = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("SettingItem");
	const _component_CheckBox = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("CheckBox");
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SettingItem, (0, require__plugin_vue_export_helper.vue_exports.mergeProps)(_ctx.$props, _attrs), {
		default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push(`<div class="select-block" data-v-15646972${_scopeId}>`);
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_CheckBox, {
					class: "setting-check",
					id: _ctx.ckey,
					modelValue: _ctx.value,
					"onUpdate:modelValue": ($event) => _ctx.value = $event
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("components.setting_item_checkbox.label"))}`);
						else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("components.setting_item_checkbox.label")), 1)];
					}),
					_: 1
				}, _parent, _scopeId));
				_push(`</div>`);
			} else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: "select-block" }, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_CheckBox, {
				class: "setting-check",
				id: _ctx.ckey,
				modelValue: _ctx.value,
				"onUpdate:modelValue": ($event) => _ctx.value = $event
			}, {
				default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("components.setting_item_checkbox.label")), 1)]),
				_: 1
			}, 8, [
				"id",
				"modelValue",
				"onUpdate:modelValue"
			])])];
		}),
		_: 1
	}, _parent));
}
var _sfc_setup$11 = _sfc_main$11.setup;
_sfc_main$11.setup = (props, ctx) => {
	const ssrContext = (0, require__plugin_vue_export_helper.vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/settingItemCheckbox.vue");
	return _sfc_setup$11 ? _sfc_setup$11(props, ctx) : void 0;
};
var settingItemCheckbox_default = /*#__PURE__*/ require__plugin_vue_export_helper._plugin_vue_export_helper_default(_sfc_main$11, [["ssrRender", _sfc_ssrRender$11], ["__scopeId", "data-v-15646972"]]);
//#endregion
//#region src/components/selectMenu.vue
var _sfc_main$10 = {
	inject: { submittingSeedForm: { default: false } },
	data() {
		return { disable: false };
	},
	props: { modelValue: String },
	emits: ["update:modelValue"],
	watch: {
		submittingSeedForm(newValue) {
			if (this.disabled) return;
			this.disable = newValue;
		},
		disable(newValue) {
			if (newValue) this.$refs.input.classList.add("disabled");
			else this.$refs.input.classList.remove("disabled");
			this.$refs.input.disabled = newValue;
		}
	},
	methods: { onChange(e) {
		this.$emit("update:modelValue", e.target.value);
	} }
};
function _sfc_ssrRender$10(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	_push(`<select${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttrs)((0, require__plugin_vue_export_helper.vue_exports.mergeProps)({
		ref: "input",
		value: $props.modelValue
	}, _attrs))} data-v-d6478f5d>`);
	(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "default", {}, null, _push, _parent);
	_push(`</select>`);
}
var _sfc_setup$10 = _sfc_main$10.setup;
_sfc_main$10.setup = (props, ctx) => {
	const ssrContext = (0, require__plugin_vue_export_helper.vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/selectMenu.vue");
	return _sfc_setup$10 ? _sfc_setup$10(props, ctx) : void 0;
};
var selectMenu_default = /*#__PURE__*/ require__plugin_vue_export_helper._plugin_vue_export_helper_default(_sfc_main$10, [["ssrRender", _sfc_ssrRender$10], ["__scopeId", "data-v-d6478f5d"]]);
//#endregion
//#region src/components/settingItemSelect.vue
var _sfc_main$9 = {
	extends: settingItem_default,
	components: {
		SelectMenu: selectMenu_default,
		SettingItem: settingItem_default
	},
	props: { default: String }
};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_SettingItem = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("SettingItem");
	const _component_SelectMenu = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("SelectMenu");
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SettingItem, (0, require__plugin_vue_export_helper.vue_exports.mergeProps)(_ctx.$props, _attrs), {
		default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
			if (_push) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SelectMenu, {
				id: _ctx.ckey,
				modelValue: _ctx.value,
				"onUpdate:modelValue": ($event) => _ctx.value = $event,
				class: "select-menu"
			}, {
				default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) (0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "default", {}, null, _push, _parent, _scopeId);
					else return [(0, require__plugin_vue_export_helper.vue_exports.renderSlot)(_ctx.$slots, "default", {}, void 0, true)];
				}),
				_: 3
			}, _parent, _scopeId));
			else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SelectMenu, {
				id: _ctx.ckey,
				modelValue: _ctx.value,
				"onUpdate:modelValue": ($event) => _ctx.value = $event,
				class: "select-menu"
			}, {
				default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.renderSlot)(_ctx.$slots, "default", {}, void 0, true)]),
				_: 3
			}, 8, [
				"id",
				"modelValue",
				"onUpdate:modelValue"
			])];
		}),
		_: 3
	}, _parent));
}
var _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
	const ssrContext = (0, require__plugin_vue_export_helper.vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/settingItemSelect.vue");
	return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
var settingItemSelect_default = /*#__PURE__*/ require__plugin_vue_export_helper._plugin_vue_export_helper_default(_sfc_main$9, [["ssrRender", _sfc_ssrRender$9], ["__scopeId", "data-v-92ef4f19"]]);
//#endregion
//#region src/components/setting/wikiSetting.vue
var _sfc_main$8 = {
	mixins: [common_default],
	components: {
		SettingItemCheckbox: settingItemCheckbox_default,
		SettingItemSelect: settingItemSelect_default
	},
	data() {
		return {
			skinName: "flasma",
			locales: [{
				"name": "English",
				"code": "en"
			}, {
				"name": "한국어",
				"code": "ko"
			}]
		};
	},
	computed: {
		footnoteType() {
			return isMobile ? "popup" : "popover";
		},
		editModes() {
			return [...this.$store.state.thetreePlugins.editor.map((a) => a.pluginInfo), {
				name: "raw",
				label: "RAW 편집"
			}];
		},
		defaultEditMode() {
			return isMobile ? "raw" : this.editModes[0].name;
		}
	},
	methods: { async skinChange(e) {
		await this.internalRequestAndProcess("/member/ipskin", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ skin: e.target.value }),
			noProgress: true
		});
	} }
};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_SettingItemSelect = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("SettingItemSelect");
	const _component_SettingItemCheckbox = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("SettingItemCheckbox");
	_push(`<!--[-->`);
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SettingItemSelect, {
		label: _ctx.$t("components.wiki_setting.language"),
		ckey: "lang",
		default: _ctx.$i18next.language,
		onChange: ($event) => _ctx.$i18next.changeLanguage($event.target.value),
		noSave: ""
	}, {
		default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push(`<!--[-->`);
				(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderList)($data.locales, (locale) => {
					_push(`<option${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttr)("value", locale.code)}${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(locale.name)}</option>`);
				});
				_push(`<!--]-->`);
			} else return [((0, require__plugin_vue_export_helper.vue_exports.openBlock)(true), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(require__plugin_vue_export_helper.vue_exports.Fragment, null, (0, require__plugin_vue_export_helper.vue_exports.renderList)($data.locales, (locale) => {
				return (0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)("option", { value: locale.code }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(locale.name), 9, ["value"]);
			}), 256))];
		}),
		_: 1
	}, _parent));
	if (_ctx.session.account.type !== 1) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SettingItemSelect, {
		label: _ctx.$t("views.mypage.skin"),
		ckey: "skin",
		default: $data.skinName,
		onChange: $options.skinChange,
		noSave: ""
	}, {
		default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push(`<option value="default"${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.mypage.default_skin"))}</option><!--[-->`);
				(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderList)(_ctx.config.skins, (skin) => {
					_push(`<option${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(skin)}</option>`);
				});
				_push(`<!--]-->`);
			} else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("option", { value: "default" }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.mypage.default_skin")), 1), ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(true), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(require__plugin_vue_export_helper.vue_exports.Fragment, null, (0, require__plugin_vue_export_helper.vue_exports.renderList)(_ctx.config.skins, (skin) => {
				return (0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)("option", null, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(skin), 1);
			}), 256))];
		}),
		_: 1
	}, _parent));
	else _push(`<!---->`);
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SettingItemSelect, {
		label: _ctx.$t("components.wiki_setting.theme.name"),
		ckey: "wiki.theme",
		default: "auto"
	}, {
		default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
			if (_push) _push(`<option value="auto"${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("components.wiki_setting.theme.auto"))}</option><option value="light"${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("components.wiki_setting.theme.light"))}</option><option value="dark"${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("components.wiki_setting.theme.dark"))}</option>`);
			else return [
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("option", { value: "auto" }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("components.wiki_setting.theme.auto")), 1),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("option", { value: "light" }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("components.wiki_setting.theme.light")), 1),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("option", { value: "dark" }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("components.wiki_setting.theme.dark")), 1)
			];
		}),
		_: 1
	}, _parent));
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SettingItemCheckbox, {
		label: _ctx.$t("components.wiki_setting.unfold_wiki_link"),
		ckey: "wiki.unfold_wiki_link"
	}, null, _parent));
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SettingItemCheckbox, {
		label: _ctx.$t("components.wiki_setting.nowrap_wiki_table"),
		ckey: "wiki.nowrap_wiki_table"
	}, null, _parent));
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SettingItemCheckbox, {
		label: _ctx.$t("components.wiki_setting.hide_heading_content"),
		ckey: "wiki.hide_heading_content"
	}, null, _parent));
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SettingItemCheckbox, {
		label: _ctx.$t("components.wiki_setting.show_folding"),
		ckey: "wiki.show_folding"
	}, null, _parent));
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SettingItemCheckbox, {
		label: _ctx.$t("components.wiki_setting.disable_folding_animation"),
		ckey: "wiki.disable_folding_animation"
	}, null, _parent));
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SettingItemSelect, {
		label: _ctx.$t("components.wiki_setting.strike.name"),
		ckey: "wiki.strike",
		default: "show"
	}, {
		default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
			if (_push) _push(`<option value="show"${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("components.wiki_setting.strike.show"))}</option><option value="remove"${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("components.wiki_setting.strike.remove"))}</option><option value="hide"${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("components.wiki_setting.strike.hide"))}</option>`);
			else return [
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("option", { value: "show" }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("components.wiki_setting.strike.show")), 1),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("option", { value: "remove" }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("components.wiki_setting.strike.remove")), 1),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("option", { value: "hide" }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("components.wiki_setting.strike.hide")), 1)
			];
		}),
		_: 1
	}, _parent));
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SettingItemSelect, {
		label: _ctx.$t("components.wiki_setting.footnote_type.name"),
		ckey: "wiki.footnote_type",
		default: $options.footnoteType
	}, {
		default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
			if (_push) _push(`<option value="default"${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("components.wiki_setting.footnote_type.default"))}</option><option value="popover"${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("components.wiki_setting.footnote_type.popover"))}</option><option value="popup"${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("components.wiki_setting.footnote_type.popup"))}</option><option value="unfold"${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("components.wiki_setting.footnote_type.unfold"))}</option>`);
			else return [
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("option", { value: "default" }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("components.wiki_setting.footnote_type.default")), 1),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("option", { value: "popover" }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("components.wiki_setting.footnote_type.popover")), 1),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("option", { value: "popup" }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("components.wiki_setting.footnote_type.popup")), 1),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("option", { value: "unfold" }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("components.wiki_setting.footnote_type.unfold")), 1)
			];
		}),
		_: 1
	}, _parent));
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SettingItemSelect, {
		label: _ctx.$t("components.wiki_setting.image_hide.name"),
		ckey: "wiki.image_hide",
		default: "show"
	}, {
		default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
			if (_push) _push(`<option value="show"${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("components.wiki_setting.image_hide.show"))}</option><option value="hide"${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("components.wiki_setting.image_hide.hide"))}</option><option value="hide_1mb"${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("components.wiki_setting.image_hide.hide_1mb"))}</option>`);
			else return [
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("option", { value: "show" }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("components.wiki_setting.image_hide.show")), 1),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("option", { value: "hide" }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("components.wiki_setting.image_hide.hide")), 1),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("option", { value: "hide_1mb" }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("components.wiki_setting.image_hide.hide_1mb")), 1)
			];
		}),
		_: 1
	}, _parent));
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SettingItemCheckbox, {
		label: _ctx.$t("components.wiki_setting.disable_image_lazy"),
		ckey: "wiki.disable_image_lazy"
	}, null, _parent));
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SettingItemSelect, {
		label: _ctx.$t("components.wiki_setting.category_position.name"),
		ckey: "wiki.category_position",
		default: "top"
	}, {
		default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
			if (_push) _push(`<option value="top"${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("components.wiki_setting.category_position.top"))}</option><option value="bottom"${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("components.wiki_setting.category_position.bottom"))}</option><option value="both"${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("components.wiki_setting.category_position.both"))}</option>`);
			else return [
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("option", { value: "top" }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("components.wiki_setting.category_position.top")), 1),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("option", { value: "bottom" }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("components.wiki_setting.category_position.bottom")), 1),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("option", { value: "both" }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("components.wiki_setting.category_position.both")), 1)
			];
		}),
		_: 1
	}, _parent));
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SettingItemSelect, {
		label: "기본 편집 모드",
		ckey: "wiki.default_edit_mode",
		default: $options.defaultEditMode
	}, {
		default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push(`<!--[-->`);
				(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderList)($options.editModes, (mode) => {
					_push(`<option${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttr)("value", mode.name)}${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(mode.label)}</option>`);
				});
				_push(`<!--]-->`);
			} else return [((0, require__plugin_vue_export_helper.vue_exports.openBlock)(true), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(require__plugin_vue_export_helper.vue_exports.Fragment, null, (0, require__plugin_vue_export_helper.vue_exports.renderList)($options.editModes, (mode) => {
				return (0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)("option", { value: mode.name }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(mode.label), 9, ["value"]);
			}), 256))];
		}),
		_: 1
	}, _parent));
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SettingItemCheckbox, {
		label: _ctx.$t("components.wiki_setting.no_relative_date"),
		ckey: "wiki.no_relative_date"
	}, null, _parent));
	_push(`<!--]-->`);
}
var _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
	const ssrContext = (0, require__plugin_vue_export_helper.vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/setting/wikiSetting.vue");
	return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
var wikiSetting_default = /*#__PURE__*/ require__plugin_vue_export_helper._plugin_vue_export_helper_default(_sfc_main$8, [["ssrRender", _sfc_ssrRender$8]]);
//#endregion
//#region src/components/setting/discussSetting.vue
var _sfc_main$7 = { components: {
	SettingItemCheckbox: settingItemCheckbox_default,
	SettingItemSelect: settingItemSelect_default
} };
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_SettingItemSelect = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("SettingItemSelect");
	_push(`<!--[-->`);
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SettingItemSelect, {
		label: _ctx.$t("components.wiki_setting.strike.name"),
		ckey: "wiki.strike",
		default: "show"
	}, {
		default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
			if (_push) _push(`<option value="show"${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("components.wiki_setting.strike.show"))}</option><option value="remove"${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("components.discuss_setting.strike.remove"))}</option><option value="hide"${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("components.wiki_setting.strike.hide"))}</option>`);
			else return [
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("option", { value: "show" }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("components.wiki_setting.strike.show")), 1),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("option", { value: "remove" }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("components.discuss_setting.strike.remove")), 1),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("option", { value: "hide" }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("components.wiki_setting.strike.hide")), 1)
			];
		}),
		_: 1
	}, _parent));
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SettingItemSelect, {
		label: _ctx.$t("components.discuss_setting.bold"),
		ckey: "wiki.bold",
		default: "show"
	}, {
		default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
			if (_push) _push(`<option value="show"${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("components.wiki_setting.strike.show"))}</option><option value="remove"${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("components.discuss_setting.strike.remove"))}</option><option value="hide"${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("components.wiki_setting.strike.hide"))}</option>`);
			else return [
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("option", { value: "show" }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("components.wiki_setting.strike.show")), 1),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("option", { value: "remove" }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("components.discuss_setting.strike.remove")), 1),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("option", { value: "hide" }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("components.wiki_setting.strike.hide")), 1)
			];
		}),
		_: 1
	}, _parent));
	_push(`<!--]-->`);
}
var _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
	const ssrContext = (0, require__plugin_vue_export_helper.vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/setting/discussSetting.vue");
	return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
var discussSetting_default = /*#__PURE__*/ require__plugin_vue_export_helper._plugin_vue_export_helper_default(_sfc_main$7, [["ssrRender", _sfc_ssrRender$7]]);
//#endregion
//#region src/components/modal.vue
var _sfc_main$6 = {
	props: { classes: {
		type: [Array, String],
		default: []
	} },
	computed: { modalClasses() {
		return ["thetree-modal-container", ...Array.isArray(this.classes) ? this.classes : this.classes.split(" ")];
	} }
};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)((0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("VueFinalModal"), (0, require__plugin_vue_export_helper.vue_exports.mergeProps)({
		classes: $options.modalClasses,
		"content-class": "thetree-modal-content",
		escToClose: ""
	}, _attrs), {
		default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(({ close, params }, _push, _parent, _scopeId) => {
			if (_push) (0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "default", {
				close,
				params
			}, null, _push, _parent, _scopeId);
			else return [(0, require__plugin_vue_export_helper.vue_exports.renderSlot)(_ctx.$slots, "default", {
				close,
				params
			})];
		}),
		_: 3
	}, _parent));
}
var _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
	const ssrContext = (0, require__plugin_vue_export_helper.vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/modal.vue");
	return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
var modal_default = /*#__PURE__*/ require__plugin_vue_export_helper._plugin_vue_export_helper_default(_sfc_main$6, [["ssrRender", _sfc_ssrRender$6]]);
//#endregion
//#region src/components/setting.vue
var _sfc_main$5 = {
	components: {
		SettingItemSelect: settingItemSelect_default,
		Modal: modal_default
	},
	data() {
		return {
			tabs: [
				{
					name: "wiki",
					component: (0, require__plugin_vue_export_helper.vue_exports.markRaw)(wikiSetting_default)
				},
				{
					name: "discuss",
					component: (0, require__plugin_vue_export_helper.vue_exports.markRaw)(discussSetting_default)
				},
				{
					name: "skin",
					component: this.$slots.default
				}
			],
			selectedTab: null
		};
	},
	created() {
		this.selectedTab = this.tabs[0];
	},
	methods: { selectTab(tab) {
		this.selectedTab = tab;
	} }
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)((0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("Modal"), _attrs, {
		default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((props, _push, _parent, _scopeId) => {
			if (_push) {
				_push(`<div class="setting-block" data-v-3c4c474b${_scopeId}><button data-v-3c4c474b${_scopeId}>×</button><h1 data-v-3c4c474b${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("components.setting.title"))}</h1><header data-v-3c4c474b${_scopeId}><ul data-v-3c4c474b${_scopeId}><!--[-->`);
				(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderList)($data.tabs, (tab) => {
					_push(`<li class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)({ "selected-tab": $data.selectedTab === tab })}" data-v-3c4c474b${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("components.setting.tabs." + tab.name))}</li>`);
				});
				_push(`<!--]--></ul></header><section${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttrs)({
					name: "slide-fade",
					mode: "out-in"
				})} data-v-3c4c474b>`);
				(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderList)($data.tabs, (tab) => {
					if (tab === $data.selectedTab) {
						_push(`<div data-v-3c4c474b${_scopeId}>`);
						(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderVNode)(_push, (0, require__plugin_vue_export_helper.vue_exports.createVNode)((0, require__plugin_vue_export_helper.vue_exports.resolveDynamicComponent)(tab.component), null, null), _parent, _scopeId);
						_push(`</div>`);
					} else _push(`<!---->`);
				});
				_push(`</section></div>`);
			} else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: "setting-block" }, [
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("button", { onClick: props.close }, "×", 8, ["onClick"]),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("h1", null, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("components.setting.title")), 1),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("header", null, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("ul", null, [((0, require__plugin_vue_export_helper.vue_exports.openBlock)(true), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(require__plugin_vue_export_helper.vue_exports.Fragment, null, (0, require__plugin_vue_export_helper.vue_exports.renderList)($data.tabs, (tab) => {
					return (0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)("li", {
						class: { "selected-tab": $data.selectedTab === tab },
						onClick: ($event) => $options.selectTab(tab)
					}, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("components.setting.tabs." + tab.name)), 11, ["onClick"]);
				}), 256))])]),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)(require__plugin_vue_export_helper.vue_exports.TransitionGroup, {
					name: "slide-fade",
					tag: "section",
					mode: "out-in"
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [((0, require__plugin_vue_export_helper.vue_exports.openBlock)(true), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(require__plugin_vue_export_helper.vue_exports.Fragment, null, (0, require__plugin_vue_export_helper.vue_exports.renderList)($data.tabs, (tab) => {
						return (0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(require__plugin_vue_export_helper.vue_exports.Fragment, null, [tab === $data.selectedTab ? ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)("div", { key: tab.name }, [((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)((0, require__plugin_vue_export_helper.vue_exports.resolveDynamicComponent)(tab.component)))])) : (0, require__plugin_vue_export_helper.vue_exports.createCommentVNode)("", true)], 64);
					}), 256))]),
					_: 1
				})
			])];
		}),
		_: 1
	}, _parent));
}
var _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
	const ssrContext = (0, require__plugin_vue_export_helper.vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/setting.vue");
	return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
var setting_default = /*#__PURE__*/ require__plugin_vue_export_helper._plugin_vue_export_helper_default(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5], ["__scopeId", "data-v-3c4c474b"]]);
//#endregion
//#region skins/flasma/components/settingChoice.vue
var _sfc_main$4 = {
	props: {
		label: String,
		note: String,
		ckey: {
			type: String,
			required: true
		},
		default: {
			type: [
				String,
				Number,
				Boolean
			],
			default: null
		},
		/** [{ value, label, swatch? }] — swatch 를 주면 앞에 색 점을 찍는다 */
		options: {
			type: Array,
			required: true
		}
	},
	data() {
		return {
			marker: null,
			trackObserver: null
		};
	},
	computed: { current() {
		return this.$store.state.localConfig?.[this.ckey] ?? this.default;
	} },
	methods: {
		pick(value) {
			if (value === this.current) return;
			this.$store.state.localConfigSetValue(this.ckey, value);
		},
		measure() {
			const track = this.$refs.track;
			const el = track?.querySelector(".fl-set-opt.is-on");
			if (!track || !el) {
				this.marker = null;
				return;
			}
			this.marker = {
				width: `${el.offsetWidth}px`,
				height: `${el.offsetHeight}px`,
				transform: `translate(${el.offsetLeft}px, ${el.offsetTop}px)`
			};
		}
	},
	mounted() {
		this.$nextTick(() => this.measure());
		if (window.ResizeObserver) {
			this.trackObserver = new ResizeObserver(() => this.measure());
			if (this.$refs.track) this.trackObserver.observe(this.$refs.track);
		}
	},
	beforeUnmount() {
		this.trackObserver?.disconnect();
	},
	watch: { current() {
		this.$nextTick(() => this.measure());
	} }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	_push(`<div${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttrs)((0, require__plugin_vue_export_helper.vue_exports.mergeProps)({ class: "fl-set-row" }, _attrs))}><div class="fl-set-head"><span class="fl-set-label">${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)($props.label)}</span>`);
	if ($props.note) _push(`<small class="fl-set-note">${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)($props.note)}</small>`);
	else _push(`<!---->`);
	_push(`</div><div class="fl-set-seg" role="radiogroup"${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttr)("aria-label", $props.label)}>`);
	if ($data.marker) _push(`<span class="fl-set-mark" style="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderStyle)($data.marker)}" aria-hidden="true"></span>`);
	else _push(`<!---->`);
	_push(`<!--[-->`);
	(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderList)($props.options, (option) => {
		_push(`<button type="button" role="radio"${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttr)("aria-checked", option.value === $options.current ? "true" : "false")} class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)([{ "is-on": option.value === $options.current }, "fl-set-opt"])}">`);
		if (option.swatch) _push(`<span class="fl-set-dot" style="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderStyle)({ background: option.swatch })}"></span>`);
		else _push(`<!---->`);
		_push(` ${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(option.label)}</button>`);
	});
	_push(`<!--]--></div></div>`);
}
var _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
	const ssrContext = (0, require__plugin_vue_export_helper.vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("skins/flasma/components/settingChoice.vue");
	return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
var settingChoice_default = /*#__PURE__*/ require__plugin_vue_export_helper._plugin_vue_export_helper_default(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4]]);
//#endregion
//#region skins/flasma/components/settingSwitch.vue
var _sfc_main$3 = {
	props: {
		label: String,
		note: String,
		ckey: {
			type: String,
			required: true
		},
		default: {
			type: Boolean,
			default: false
		}
	},
	computed: { on() {
		return this.$store.state.localConfig?.[this.ckey] ?? this.default;
	} },
	methods: { toggle() {
		this.$store.state.localConfigSetValue(this.ckey, !this.on);
	} }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	_push(`<div${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttrs)((0, require__plugin_vue_export_helper.vue_exports.mergeProps)({ class: "fl-set-row" }, _attrs))}><div class="fl-set-head"><span class="fl-set-label">${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)($props.label)}</span>`);
	if ($props.note) _push(`<small class="fl-set-note">${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)($props.note)}</small>`);
	else _push(`<!---->`);
	_push(`</div><button type="button" role="switch"${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttr)("aria-checked", $options.on ? "true" : "false")}${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttr)("aria-label", $props.label)} class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)([{ "is-on": $options.on }, "fl-set-switch"])}"><span class="fl-set-knob"></span><span class="fl-set-state">${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)($options.on ? "ON" : "OFF")}</span></button></div>`);
}
var _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
	const ssrContext = (0, require__plugin_vue_export_helper.vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("skins/flasma/components/settingSwitch.vue");
	return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
//#endregion
//#region skins/flasma/components/settingModal.vue
var _sfc_main$2 = {
	mixins: [flasma_default],
	components: {
		Setting: setting_default,
		FlSettingChoice: settingChoice_default,
		FlSettingSwitch: /* @__PURE__ */ require__plugin_vue_export_helper._plugin_vue_export_helper_default(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]])
	},
	computed: {
		defaultSidebar() {
			return isMobile ? "hide" : "right";
		},
		colorOptions() {
			return [
				{
					value: "default",
					label: this.t("skin_flasma:setting_color_default", "위키 기본값"),
					swatch: this.wikiBrandColor
				},
				{
					value: "blue",
					label: this.t("skin_flasma:setting_color_blue", "블루"),
					swatch: COLOR_PRESETS.blue
				},
				{
					value: "green",
					label: this.t("skin_flasma:setting_color_green", "그린"),
					swatch: COLOR_PRESETS.green
				},
				{
					value: "orange",
					label: this.t("skin_flasma:setting_color_orange", "오렌지"),
					swatch: COLOR_PRESETS.orange
				},
				{
					value: "purple",
					label: this.t("skin_flasma:setting_color_purple", "퍼플"),
					swatch: COLOR_PRESETS.purple
				}
			];
		},
		navbarOptions() {
			return [
				{
					value: "fixed",
					label: this.t("skin_flasma:setting_navbar_fixed", "항상 고정")
				},
				{
					value: "auto",
					label: this.t("skin_flasma:setting_follow_scroll", "따라오기")
				},
				{
					value: "static",
					label: this.t("skin_flasma:setting_navbar_static", "고정 안 함")
				}
			];
		},
		headOptions() {
			return [
				{
					value: "fixed",
					label: this.t("skin_flasma:setting_head_fixed", "항상 고정")
				},
				{
					value: "auto",
					label: this.t("skin_flasma:setting_follow_scroll", "따라오기")
				},
				{
					value: "off",
					label: this.t("skin_flasma:setting_off", "사용 안 함")
				}
			];
		},
		sidebarOptions() {
			return [
				{
					value: "right",
					label: this.t("skin_flasma:setting_sidebar_right", "우측 표시")
				},
				{
					value: "fix",
					label: this.t("skin_flasma:setting_sidebar_fix", "우측 고정")
				},
				{
					value: "footer",
					label: this.t("skin_flasma:setting_sidebar_footer", "하단 표시")
				},
				{
					value: "hide",
					label: this.t("skin_flasma:setting_sidebar_hide", "숨김")
				}
			];
		},
		glassOptions() {
			return [
				{
					value: "off",
					label: this.t("skin_flasma:setting_glass_off", "끄기")
				},
				{
					value: "normal",
					label: this.t("skin_flasma:setting_glass_normal", "보통")
				},
				{
					value: "strong",
					label: this.t("skin_flasma:setting_glass_strong", "강하게")
				}
			];
		},
		radiusOptions() {
			return [
				{
					value: "sharp",
					label: this.t("skin_flasma:setting_radius_sharp", "각지게")
				},
				{
					value: "soft",
					label: this.t("skin_flasma:setting_radius_soft", "둥글게")
				},
				{
					value: "round",
					label: this.t("skin_flasma:setting_radius_round", "아주 둥글게")
				}
			];
		}
	}
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_setting = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("setting");
	const _component_fl_setting_choice = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("fl-setting-choice");
	const _component_fl_setting_switch = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("fl-setting-switch");
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_setting, _attrs, {
		default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push(`<div class="fl-setting"${_scopeId}>`);
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_fl_setting_choice, {
					ckey: "flasma.color",
					default: "default",
					label: _ctx.t("skin_flasma:setting_color", "스킨 색상 설정"),
					note: _ctx.t("skin_flasma:setting_color_note", "스킨 전체 색이 이 값 하나에서 파생됩니다."),
					options: $options.colorOptions
				}, null, _parent, _scopeId));
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_fl_setting_choice, {
					ckey: "flasma.navbar",
					default: "fixed",
					label: _ctx.t("skin_flasma:setting_navbar", "상단 바 동작"),
					note: _ctx.t("skin_flasma:setting_navbar_note", "스크롤할 때 상단 내비게이션 바가 어떻게 움직일지 정합니다."),
					options: $options.navbarOptions
				}, null, _parent, _scopeId));
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_fl_setting_choice, {
					ckey: "flasma.head",
					default: "off",
					label: _ctx.t("skin_flasma:setting_head", "문서 제목 카드 따라오기"),
					note: _ctx.t("skin_flasma:setting_head_note", "스크롤을 올리면 제목과 편집·역사 버튼이 따라와서 보입니다."),
					options: $options.headOptions
				}, null, _parent, _scopeId));
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_fl_setting_choice, {
					ckey: "flasma.sidebar",
					default: $options.defaultSidebar,
					label: _ctx.t("skin_flasma:setting_sidebar", "최근 변경 표시"),
					note: _ctx.t("skin_flasma:setting_sidebar_note", "최근 변경된 내역의 표시 방법을 선택합니다."),
					options: $options.sidebarOptions
				}, null, _parent, _scopeId));
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_fl_setting_switch, {
					ckey: "flasma.toc",
					default: true,
					label: _ctx.t("skin_flasma:setting_toc", "사이드바에 목차 표시"),
					note: _ctx.t("skin_flasma:setting_toc_note", "켜두면 스크롤을 따라옵니다. 문단이 있는 문서에서만 나타나며, 좁은 화면에서는 본문의 목차를 씁니다.")
				}, null, _parent, _scopeId));
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_fl_setting_switch, {
					ckey: "flasma.popular",
					default: true,
					label: _ctx.t("skin_flasma:setting_popular", "인기 문서 표시"),
					note: _ctx.t("skin_flasma:setting_popular_note", "조회수가 많은 문서 5개를 보여줍니다.")
				}, null, _parent, _scopeId));
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_fl_setting_choice, {
					ckey: "flasma.glass",
					default: "normal",
					label: _ctx.t("skin_flasma:setting_glass", "유리 효과"),
					note: _ctx.t("skin_flasma:setting_glass_note", "반투명·블러 강도입니다. 기기가 느리면 끄기를 권장합니다."),
					options: $options.glassOptions
				}, null, _parent, _scopeId));
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_fl_setting_choice, {
					ckey: "flasma.radius",
					default: "round",
					label: _ctx.t("skin_flasma:setting_radius", "모서리 둥글기"),
					options: $options.radiusOptions
				}, null, _parent, _scopeId));
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_fl_setting_switch, {
					ckey: "flasma.wide",
					label: _ctx.t("skin_flasma:setting_wide", "넓은 레이아웃")
				}, null, _parent, _scopeId));
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_fl_setting_switch, {
					ckey: "flasma.reset_search_on_move",
					default: true,
					label: _ctx.t("skin_flasma:setting_reset_search", "페이지 이동 시 검색 창 초기화")
				}, null, _parent, _scopeId));
				if (_ctx.$store.state.session.quick_block) {
					_push(`<!--[--><hr class="fl-set-sep"${_scopeId}>`);
					_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_fl_setting_switch, {
						ckey: "flasma.admin_convenience",
						default: true,
						label: _ctx.t("skin_flasma:setting_admin_convenience", "[ADMIN] 관리 편의성 개선")
					}, null, _parent, _scopeId));
					_push(`<!--]-->`);
				} else _push(`<!---->`);
				_push(`</div>`);
			} else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: "fl-setting" }, [
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_fl_setting_choice, {
					ckey: "flasma.color",
					default: "default",
					label: _ctx.t("skin_flasma:setting_color", "스킨 색상 설정"),
					note: _ctx.t("skin_flasma:setting_color_note", "스킨 전체 색이 이 값 하나에서 파생됩니다."),
					options: $options.colorOptions
				}, null, 8, [
					"label",
					"note",
					"options"
				]),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_fl_setting_choice, {
					ckey: "flasma.navbar",
					default: "fixed",
					label: _ctx.t("skin_flasma:setting_navbar", "상단 바 동작"),
					note: _ctx.t("skin_flasma:setting_navbar_note", "스크롤할 때 상단 내비게이션 바가 어떻게 움직일지 정합니다."),
					options: $options.navbarOptions
				}, null, 8, [
					"label",
					"note",
					"options"
				]),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_fl_setting_choice, {
					ckey: "flasma.head",
					default: "off",
					label: _ctx.t("skin_flasma:setting_head", "문서 제목 카드 따라오기"),
					note: _ctx.t("skin_flasma:setting_head_note", "스크롤을 올리면 제목과 편집·역사 버튼이 따라와서 보입니다."),
					options: $options.headOptions
				}, null, 8, [
					"label",
					"note",
					"options"
				]),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_fl_setting_choice, {
					ckey: "flasma.sidebar",
					default: $options.defaultSidebar,
					label: _ctx.t("skin_flasma:setting_sidebar", "최근 변경 표시"),
					note: _ctx.t("skin_flasma:setting_sidebar_note", "최근 변경된 내역의 표시 방법을 선택합니다."),
					options: $options.sidebarOptions
				}, null, 8, [
					"default",
					"label",
					"note",
					"options"
				]),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_fl_setting_switch, {
					ckey: "flasma.toc",
					default: true,
					label: _ctx.t("skin_flasma:setting_toc", "사이드바에 목차 표시"),
					note: _ctx.t("skin_flasma:setting_toc_note", "켜두면 스크롤을 따라옵니다. 문단이 있는 문서에서만 나타나며, 좁은 화면에서는 본문의 목차를 씁니다.")
				}, null, 8, ["label", "note"]),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_fl_setting_switch, {
					ckey: "flasma.popular",
					default: true,
					label: _ctx.t("skin_flasma:setting_popular", "인기 문서 표시"),
					note: _ctx.t("skin_flasma:setting_popular_note", "조회수가 많은 문서 5개를 보여줍니다.")
				}, null, 8, ["label", "note"]),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_fl_setting_choice, {
					ckey: "flasma.glass",
					default: "normal",
					label: _ctx.t("skin_flasma:setting_glass", "유리 효과"),
					note: _ctx.t("skin_flasma:setting_glass_note", "반투명·블러 강도입니다. 기기가 느리면 끄기를 권장합니다."),
					options: $options.glassOptions
				}, null, 8, [
					"label",
					"note",
					"options"
				]),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_fl_setting_choice, {
					ckey: "flasma.radius",
					default: "round",
					label: _ctx.t("skin_flasma:setting_radius", "모서리 둥글기"),
					options: $options.radiusOptions
				}, null, 8, ["label", "options"]),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_fl_setting_switch, {
					ckey: "flasma.wide",
					label: _ctx.t("skin_flasma:setting_wide", "넓은 레이아웃")
				}, null, 8, ["label"]),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_fl_setting_switch, {
					ckey: "flasma.reset_search_on_move",
					default: true,
					label: _ctx.t("skin_flasma:setting_reset_search", "페이지 이동 시 검색 창 초기화")
				}, null, 8, ["label"]),
				_ctx.$store.state.session.quick_block ? ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(require__plugin_vue_export_helper.vue_exports.Fragment, { key: 0 }, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("hr", { class: "fl-set-sep" }), (0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_fl_setting_switch, {
					ckey: "flasma.admin_convenience",
					default: true,
					label: _ctx.t("skin_flasma:setting_admin_convenience", "[ADMIN] 관리 편의성 개선")
				}, null, 8, ["label"])], 64)) : (0, require__plugin_vue_export_helper.vue_exports.createCommentVNode)("", true)
			])];
		}),
		_: 1
	}, _parent));
}
var _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
	const ssrContext = (0, require__plugin_vue_export_helper.vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("skins/flasma/components/settingModal.vue");
	return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
var settingModal_default = /*#__PURE__*/ require__plugin_vue_export_helper._plugin_vue_export_helper_default(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
//#endregion
//#region raw-loader!./LICENSE
var LICENSE_default = "Copyright Furpark Community\n\nAll rights reserved.\n\nThis skin is not distributed separately.\n";
//#endregion
//#region skins/flasma/easter-egg.js
/**
* 콘솔 이스터에그. liberty / buma 스킨에 있던 것을 Flasma 구조에 맞게 옮겼다.
* 프로필이 더 이상 본문에 주입되지 않으므로 clonePF 는 프로필 카드를 우선으로 복제한다.
*/
function initEasterEgg() {
	if (typeof window === "undefined") return;
	if (window.__FURPARK_EASTER_EGG__) return;
	window.__FURPARK_EASTER_EGG__ = true;
	console.log("%c개발자 콘솔에서 접근하셨습니다.\nwith Furpark Wiki", "font-size:15px; color: blue; font-weight:bold;");
	console.log("%c이곳에 출처가 불분명한 코드를 작성하면 계정의 접근권한을 탈취당할 수 있습니다. 조심하여주세요.", "font-size:25px; color: red; font-weight:bold;");
	window.clonePF = function() {
		if (!decodeURI(window.location.pathname).startsWith("/w/사용자:")) {
			console.log("이스터에그 조건이 일치하지 않음");
			return;
		}
		const cards = document.querySelectorAll(".user-profile-table");
		const last = cards[cards.length - 1];
		if (!last) {
			console.log("필요한 DOM을 찾을 수 없습니다");
			return;
		}
		const clone = last.cloneNode(true);
		clone.classList.add("fl-profile-clone");
		const trigger = clone.querySelector("strong.clone-trigger");
		if (trigger) {
			trigger.dataset.cloneBound = "1";
			trigger.addEventListener("click", () => window.clonePF());
		}
		last.insertAdjacentElement("afterend", clone);
		alert("EASTER EGG FOUND!");
	};
	window.bindCloneTrigger = function() {
		const strong = document.querySelector("strong.clone-trigger");
		if (!strong || strong.dataset.cloneBound) return;
		strong.dataset.cloneBound = "1";
		strong.addEventListener("click", () => {
			window.clonePF();
		});
	};
	window.doABarrelRoll = function() {
		const root = document.documentElement;
		if (root.classList.contains("barrel-roll")) {
			console.log("이미 회전 중입니다.");
			return;
		}
		root.classList.add("barrel-roll");
		setTimeout(() => {
			root.classList.remove("barrel-roll");
		}, 1e3);
		console.log("🎢 Do a barrel roll!");
	};
}
/** clonePF 로 쌓인 카드 정리. Vue 가 모르는 노드이므로 문서를 옮길 때 직접 치운다. */
function removeProfileClones() {
	if (typeof document === "undefined") return;
	document.querySelectorAll(".fl-profile-clone").forEach((el) => el.remove());
}
/** 문서가 없을 때 본문 오른쪽에 워터마크 이미지를 깔아준다. (/notfound1.png ~ /notfoundN.png) */
function updateNotFoundImage(viewName, count = 2) {
	if (typeof document === "undefined") return;
	const article = document.querySelector(".fl-article");
	if (!article) return;
	document.getElementById("notfound-watermark")?.remove();
	article.classList.toggle("has-notfound-watermark", viewName === "notfound");
	if (viewName !== "notfound") return;
	const image = `<img id="notfound-watermark" class="fl-notfound-watermark" src="/notfound${Math.floor(Math.random() * count) + 1}.png" alt="">`;
	const alertBox = article.querySelector(".thetree-alert");
	if (alertBox) alertBox.insertAdjacentHTML("afterend", image);
	else article.insertAdjacentHTML("afterbegin", image);
}
//#endregion
//#region skins/flasma/konami-egg.js
function rotateAvatar() {
	const el = document.querySelector(".avatar");
	if (!el) return;
	if (el.classList.contains("konami-spin")) return;
	el.classList.add("konami-spin");
	const onEnd = () => {
		el.classList.remove("konami-spin");
		el.removeEventListener("animationend", onEnd);
	};
	el.addEventListener("animationend", onEnd);
}
var KONAMI_CODE = [
	"ArrowUp",
	"ArrowUp",
	"ArrowDown",
	"ArrowDown",
	"ArrowLeft",
	"ArrowRight",
	"ArrowLeft",
	"ArrowRight",
	"KeyB"
];
var SWIPE_CODE = [
	"up",
	"up",
	"down",
	"down",
	"left",
	"right",
	"left",
	"right"
];
var PAD_CODE = [
	"b",
	"a",
	"start"
];
var SWIPE_MIN_DISTANCE = 40;
var SWIPE_TIMEOUT = 2500;
function keyboardKonami() {
	let index = 0;
	window.addEventListener("keydown", (e) => {
		if (e.code === KONAMI_CODE[index]) {
			index++;
			if (index === KONAMI_CODE.length) {
				rotateAvatar();
				index = 0;
			}
		} else index = e.code === KONAMI_CODE[0] ? 1 : 0;
	});
}
/** A/B/▷ 패드를 띄운다. 이미 떠 있으면 아무것도 하지 않는다. */
function openPad(onFinish) {
	if (document.querySelector(".fl-konami")) return;
	const root = document.querySelector(".flasma") || document.body;
	const overlay = document.createElement("div");
	overlay.className = "fl-konami";
	overlay.setAttribute("role", "dialog");
	overlay.setAttribute("aria-modal", "true");
	overlay.innerHTML = `
        <div class="fl-konami-pad">
            <div class="fl-konami-row">
                <button type="button" class="fl-konami-btn" data-key="a">A</button>
                <button type="button" class="fl-konami-btn" data-key="b">B</button>
            </div>
            <button type="button" class="fl-konami-btn fl-konami-start" data-key="start">▷</button>
        </div>`;
	let step = 0;
	const close = (success) => {
		overlay.removeEventListener("click", onClick);
		document.removeEventListener("keydown", onEscape);
		overlay.classList.add("is-closing");
		setTimeout(() => overlay.remove(), 160);
		onFinish?.(success);
	};
	const onClick = (e) => {
		const button = e.target.closest(".fl-konami-btn");
		if (!button) {
			if (!e.target.closest(".fl-konami-pad")) close(false);
			return;
		}
		if (button.dataset.key !== PAD_CODE[step]) return close(false);
		button.classList.add("is-pressed");
		step++;
		if (step === PAD_CODE.length) {
			navigator.vibrate?.(30);
			close(true);
		}
	};
	const onEscape = (e) => {
		if (e.key === "Escape") close(false);
	};
	overlay.addEventListener("click", onClick);
	document.addEventListener("keydown", onEscape);
	root.appendChild(overlay);
}
function swipeKonami() {
	let index = 0;
	let lastAt = 0;
	let start = null;
	window.addEventListener("touchstart", (e) => {
		start = e.touches.length === 1 && !document.querySelector(".fl-konami") ? {
			x: e.touches[0].clientX,
			y: e.touches[0].clientY
		} : null;
	}, { passive: true });
	window.addEventListener("touchend", (e) => {
		if (!start) return;
		const touch = e.changedTouches[0];
		const dx = touch.clientX - start.x;
		const dy = touch.clientY - start.y;
		start = null;
		if (Math.max(Math.abs(dx), Math.abs(dy)) < SWIPE_MIN_DISTANCE) return;
		const direction = Math.abs(dx) > Math.abs(dy) ? dx > 0 ? "right" : "left" : dy > 0 ? "down" : "up";
		const now = Date.now();
		if (now - lastAt > SWIPE_TIMEOUT) index = 0;
		lastAt = now;
		if (direction === SWIPE_CODE[index]) {
			index++;
			if (index === SWIPE_CODE.length) {
				index = 0;
				if (document.querySelector(".avatar")) openPad((success) => success && rotateAvatar());
			}
		} else index = direction === SWIPE_CODE[0] ? 1 : 0;
	}, { passive: true });
}
function initKonamiEasterEgg() {
	if (typeof window === "undefined") return;
	if (window.__FURPARK_KONAMI__) return;
	window.__FURPARK_KONAMI__ = true;
	keyboardKonami();
	swipeKonami();
}
//#endregion
//#region skins/flasma/layout.vue
var RADIUS_LEVELS = [
	"round",
	"soft",
	"sharp"
];
var GLASS_LEVELS = [
	"strong",
	"normal",
	"off"
];
var _sfc_main$1 = {
	mixins: [flasma_default],
	components: {
		Alert: alert_default,
		LocalDate: localDate_default,
		SeedLinkButton: seedLinkButton_default,
		FlNavbar: navbar_default,
		FlContentTools: contentTools_default,
		FlRecentPanel: recentPanel_default,
		FlPopularPanel: popularPanel_default,
		FlTocPanel: tocPanel_default,
		FlUserProfile: userProfileCard_default,
		FlScrollButtons: scrollButtons_default
	},
	data() {
		return {
			License: LICENSE_default,
			isShowACLMessage: false,
			hideNotificationAlert: false,
			isNarrow: false,
			narrowQuery: null,
			pageScrolled: false,
			scrollingDown: false,
			scrolledPast: false,
			lastScrollY: 0,
			scrollTicking: false,
			tocHasItems: false,
			popularHasItems: false,
			railTall: false,
			railStickyTop: 0,
			railObserver: null
		};
	},
	head() {
		return { meta: [{
			name: "theme-color",
			content: this.brandColor
		}] };
	},
	computed: {
		document() {
			return this.page.data && this.page.data.document;
		},
		titleDescription() {
			return this.getTitleDescription(this.page).trim();
		},
		requestable() {
			return this.page.data.editable === true && this.page.data.edit_acl_message && this.page.viewName !== "notfound";
		},
		showNotificationAlert() {
			return !this.hideNotificationAlert && this.session.notifications && this.session.notifications.length > 0;
		},
		notificationAlertText() {
			const count = this.session.notifications?.length ?? 0;
			return count >= 5 ? this.t("skin_flasma:alert_notifications_more", "확인하지 않은 알림이 {{count}}개 이상 있습니다.", { count }) : this.t("skin_flasma:alert_notifications", "확인하지 않은 알림이 {{count}}개 있습니다.", { count });
		},
		notFoundSearchText() {
			return this.t("skin_flasma:alert_search", "'{{title}}'을(를) 검색하시겠습니까?", { title: this.page.title });
		},
		showUserDiscussAlert() {
			return this.session.user_document_discuss && this.localConfig["wiki.hide_user_document_discuss"] !== this.session.user_document_discuss;
		},
		/** 최근 변경 카드를 레일에 둘지 (데스크톱 + 사이드바 표시) */
		showRailRecent() {
			return this.sidebarVisible && !this.isNarrow;
		},
		/** 최근 변경 카드를 문서 하단에 둘지 (하단 표시 설정이거나, 좁은 화면) */
		showFooterRecent() {
			return this.sidebarMode === "footer" || this.sidebarVisible && this.isNarrow;
		},
		popularEnabled() {
			return this.localConfig["flasma.popular"] !== false;
		},
		showRailPopular() {
			return this.popularEnabled && this.sidebarVisible && !this.isNarrow;
		},
		showFooterPopular() {
			return this.popularEnabled && this.showFooterRecent;
		},
		/** 프로필: 데스크톱은 우측 레일, 좁은 화면은 공지 아래 본문 흐름 */
		showRailProfile() {
			return !!this.userProfile && !this.isNarrow;
		},
		showInlineProfile() {
			return !!this.userProfile && this.isNarrow;
		},
		showRailToc() {
			return this.localConfig["flasma.toc"] !== false && !this.isNarrow;
		},
		showRail() {
			return this.showRailRecent || this.showRailProfile || this.showRailToc || this.showRailPopular;
		},
		/** 내용이 하나도 없는 카드만 켜져 있으면 레일이 폭만 잡아먹는다 */
		railIsEmpty() {
			return !this.showRailRecent && !this.showRailProfile && !this.tocHasItems && !this.popularHasItems;
		},
		stickyRail() {
			return this.showRailProfile || this.showRailToc && this.tocHasItems || this.showRailPopular && this.popularHasItems || this.sidebarMode === "fix";
		},
		/** 상단 바: auto 모드에서 아래로 스크롤하면 숨긴다 */
		navHidden() {
			return this.navbarMode === "auto" && this.scrollingDown;
		},
		/** 문서 제목 카드: auto 모드에서 아래로 스크롤하면 밀어 올린다.
		문서 상단에서는 원래 자리에 그대로 두어야 어색하지 않다. */
		headHidden() {
			return this.headMode === "auto" && this.scrollingDown && this.scrolledPast;
		},
		rootClass() {
			return [
				`fl-nav-${this.navbarMode}`,
				`fl-head-${this.headMode}`,
				`fl-glass-${this.glassLevel}`,
				`fl-radius-${this.radiusLevel}`,
				{
					"fl-wide": this.localConfig["flasma.wide"] === true,
					"fl-has-rail": this.showRail,
					"is-head-hidden": this.headHidden
				}
			];
		},
		glassLevel() {
			const level = this.localConfig["flasma.glass"];
			return [
				"strong",
				"normal",
				"off"
			].includes(level) ? level : "normal";
		},
		radiusLevel() {
			const level = this.localConfig["flasma.radius"];
			return RADIUS_LEVELS.includes(level) ? level : "round";
		},
		brandColor() {
			return COLOR_PRESETS[this.colorPreset] || this.wikiBrandColor;
		},
		skinVars() {
			const brand = this.brandColor;
			const dark = this.isDark;
			return {
				"--fl-brand": brand,
				"--fl-brand-rgb": this.toRgb(brand).join(", "),
				"--fl-brand-strong": this.shade(brand, dark ? -30 : -18),
				"--fl-brand-soft": this.shade(brand, dark ? 18 : 34),
				"--fl-brand-softer": this.shade(brand, dark ? 34 : 62),
				"--fl-font": this.skinConfig("font_family", null) || `'Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif`,
				"--brand-color-1": brand,
				"--brand-color-2": this.shade(brand, dark ? -30 : -18),
				"--brand-bright-color-1": this.shade(brand, dark ? 18 : 34),
				"--brand-bright-color-2": this.shade(brand, dark ? 34 : 62),
				"--text-color": dark ? "#e3e6ea" : "#22252a",
				"--article-background-color": dark ? "#181a21" : "#ffffff"
			};
		}
	},
	methods: {
		openSettingModal() {
			this.$vfm.show({ component: settingModal_default });
		},
		closeUserDiscussAlert() {
			this.$store.commit("localConfigSetValue", {
				key: "wiki.hide_user_document_discuss",
				value: this.session.user_document_discuss
			});
		},
		showEditMessage() {
			if (this.isShowACLMessage) this.$router.push(this.doc_action_link(this.page.data.document, this.requestable ? "new_edit_request" : "edit"));
			else this.isShowACLMessage = true;
		},
		toRgb(hex) {
			return [
				1,
				3,
				5
			].map((i) => parseInt(hex.substring(i, i + 2), 16));
		},
		/** percent > 0 이면 밝게, < 0 이면 어둡게 */
		shade(hex, percent) {
			const ratio = Math.abs(percent) / 100;
			return "#" + this.toRgb(hex).map((value) => percent >= 0 ? Math.round(value + (255 - value) * ratio) : Math.round(value * (1 - ratio))).map((v) => v.toString(16).padStart(2, "0")).join("");
		},
		onNarrowChange(e) {
			this.isNarrow = e.matches;
		},
		syncSkinClasses() {
			const body = document.body;
			if (!body) return;
			for (const level of RADIUS_LEVELS) body.classList.toggle(`fl-radius-${level}`, level === this.radiusLevel);
			for (const level of GLASS_LEVELS) body.classList.toggle(`fl-glass-${level}`, level === this.glassLevel);
			const root = document.documentElement;
			for (const [key, value] of Object.entries(this.skinVars)) root.style.setProperty(key, value);
		},
		measureRail() {
			const el = this.$refs.railInner;
			if (!el) return;
			if (!this.railTall) {
				const top = parseFloat(getComputedStyle(el).top);
				if (!Number.isNaN(top)) this.railStickyTop = top;
			}
			const gap = 16;
			const available = window.innerHeight - this.railStickyTop - gap;
			const tall = el.offsetHeight > available;
			el.style.setProperty("--fl-rail-offset", tall ? `${window.innerHeight - el.offsetHeight - gap}px` : "");
			this.railTall = tall;
		},
		onScroll() {
			if (this.scrollTicking) return;
			this.scrollTicking = true;
			requestAnimationFrame(() => {
				const y = window.scrollY || document.documentElement.scrollTop || 0;
				this.pageScrolled = y > 8;
				this.scrolledPast = y > 200;
				if (y < 80) this.scrollingDown = false;
				else if (y > this.lastScrollY + 4) this.scrollingDown = true;
				else if (y < this.lastScrollY - 4) this.scrollingDown = false;
				this.lastScrollY = y;
				this.scrollTicking = false;
			});
		},
		/** 문서 제목으로 발동하는 이스터에그 */
		applyTitleEggs() {
			const title = this.document?.title?.trim().toLowerCase();
			if (!title) return removeStars();
			if (title === "do a barrel roll") window.doABarrelRoll?.();
		}
	},
	created() {
		initEasterEgg();
	},
	mounted() {
		initKonamiEasterEgg();
		this.narrowQuery = window.matchMedia("(max-width: 1023px)");
		this.isNarrow = this.narrowQuery.matches;
		this.narrowQuery.addEventListener("change", this.onNarrowChange);
		window.addEventListener("scroll", this.onScroll, { passive: true });
		this.onScroll();
		if (window.ResizeObserver) {
			this.railObserver = new ResizeObserver(() => this.measureRail());
			if (this.$refs.railInner) this.railObserver.observe(this.$refs.railInner);
		}
		window.addEventListener("resize", this.measureRail, { passive: true });
		this.$nextTick(() => this.measureRail());
		this.syncSkinClasses();
		this.applyTitleEggs();
		this.$nextTick(() => updateNotFoundImage(this.page.viewName));
	},
	beforeUnmount() {
		this.narrowQuery?.removeEventListener("change", this.onNarrowChange);
		window.removeEventListener("scroll", this.onScroll);
		window.removeEventListener("resize", this.measureRail);
		this.railObserver?.disconnect();
		for (const level of RADIUS_LEVELS) document.body?.classList.remove(`fl-radius-${level}`);
		for (const level of GLASS_LEVELS) document.body?.classList.remove(`fl-glass-${level}`);
		for (const key of Object.keys(this.skinVars)) document.documentElement?.style.removeProperty(key);
		removeStars();
	},
	watch: {
		radiusLevel() {
			this.syncSkinClasses();
		},
		glassLevel() {
			this.syncSkinClasses();
		},
		skinVars() {
			this.syncSkinClasses();
		},
		$route(to, from) {
			this.isShowACLMessage = false;
			this.hideNotificationAlert = false;
			if (to.path !== from.path) removeProfileClones();
		},
		showRail(visible) {
			this.$nextTick(() => {
				if (visible && this.railObserver && this.$refs.railInner) this.railObserver.observe(this.$refs.railInner);
				this.measureRail();
			});
		},
		"$store.state.page.viewName"(viewName) {
			this.$nextTick(() => updateNotFoundImage(viewName));
		},
		"$store.state.page.data.document.title"() {
			this.applyTitleEggs();
		}
	}
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_fl_navbar = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("fl-navbar");
	const _component_nuxt_link = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("nuxt-link");
	const _component_fl_content_tools = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("fl-content-tools");
	const _component_fl_user_profile = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("fl-user-profile");
	const _component_alert = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("alert");
	const _component_seed_link_button = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("seed-link-button");
	const _component_nuxt = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("nuxt");
	const _component_local_date = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("local-date");
	const _component_fl_recent_panel = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("fl-recent-panel");
	const _component_fl_popular_panel = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("fl-popular-panel");
	const _component_fl_toc_panel = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("fl-toc-panel");
	const _component_fl_scroll_buttons = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("fl-scroll-buttons");
	_push(`<div${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttrs)((0, require__plugin_vue_export_helper.vue_exports.mergeProps)({
		class: ["flasma", $options.rootClass],
		style: $options.skinVars
	}, _attrs))}><div class="fl-aurora" aria-hidden="true"></div><div id="top" class="fl-anchor"></div>`);
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_fl_navbar, {
		mode: _ctx.navbarMode,
		hidden: $options.navHidden,
		scrolled: $data.pageScrolled,
		onOpenSetting: $options.openSettingModal
	}, null, _parent));
	_push(`<div class="fl-shell"><main class="fl-main">`);
	if (_ctx.config["wiki.sitenotice"]) _push(`<div class="fl-card fl-notice"><span>${_ctx.config["wiki.sitenotice"] ?? ""}</span></div>`);
	else _push(`<!---->`);
	_push(`<header class="fl-card fl-head"><div class="fl-head-title">`);
	if ($options.document && _ctx.page.viewName !== "error") {
		_push(`<h1>`);
		_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_nuxt_link, { to: _ctx.doc_action_link($options.document, "w") }, {
			default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
				if (_push) {
					if ($options.document.forceShowNamespace !== false) _push(`<span class="fl-namespace"${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)($options.document.namespace)}:</span>`);
					else _push(`<!---->`);
					_push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)($options.document.title)}`);
				} else return [$options.document.forceShowNamespace !== false ? ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)("span", {
					key: 0,
					class: "fl-namespace"
				}, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)($options.document.namespace) + ":", 1)) : (0, require__plugin_vue_export_helper.vue_exports.createCommentVNode)("", true), (0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)($options.document.title), 1)];
			}),
			_: 1
		}, _parent));
		if ($options.titleDescription) _push(`<small>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)($options.titleDescription)}</small>`);
		else _push(`<!---->`);
		_push(`</h1>`);
	} else _push(`<h1>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.page.title)}</h1>`);
	_push(`</div>`);
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_fl_content_tools, { onOnClickEditBtn: $options.showEditMessage }, null, _parent));
	_push(`</header>`);
	if ($options.showInlineProfile) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_fl_user_profile, { profile: _ctx.userProfile }, null, _parent));
	else _push(`<!---->`);
	_push(`<article class="fl-card fl-article wiki-article">`);
	if ($data.isShowACLMessage && _ctx.page.data.edit_acl_message) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_alert, {
		error: "",
		closable: "",
		onClose: ($event) => $data.isShowACLMessage = false
	}, {
		default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push(`<span${_scopeId}>${_ctx.page.data.edit_acl_message ?? ""}</span>`);
				if ($options.requestable) {
					_push(`<span${_scopeId}>`);
					if (_ctx.page.data.edit_acl_message.includes("\n")) _push(`<br${_scopeId}>`);
					else _push(`<!---->`);
					_push(` ${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.t("skin_flasma:alert_request_before", "대신 "))}`);
					_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_nuxt_link, { to: _ctx.doc_action_link(_ctx.page.data.document, "new_edit_request") }, {
						default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
							if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.t("skin_flasma:edit_request", "편집 요청"))}`);
							else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.t("skin_flasma:edit_request", "편집 요청")), 1)];
						}),
						_: 1
					}, _parent, _scopeId));
					_push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.t("skin_flasma:alert_request_after", "을 생성할 수 있습니다."))}</span>`);
				} else _push(`<!---->`);
			} else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("span", {
				innerHTML: _ctx.page.data.edit_acl_message,
				onClick: ($event) => _ctx.onDynamicContentClick($event)
			}, null, 8, ["innerHTML", "onClick"]), $options.requestable ? ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)("span", { key: 0 }, [
				_ctx.page.data.edit_acl_message.includes("\n") ? ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)("br", { key: 0 })) : (0, require__plugin_vue_export_helper.vue_exports.createCommentVNode)("", true),
				(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)(" " + (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.t("skin_flasma:alert_request_before", "대신 ")), 1),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_nuxt_link, { to: _ctx.doc_action_link(_ctx.page.data.document, "new_edit_request") }, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.t("skin_flasma:edit_request", "편집 요청")), 1)]),
					_: 1
				}, 8, ["to"]),
				(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.t("skin_flasma:alert_request_after", "을 생성할 수 있습니다.")), 1)
			])) : (0, require__plugin_vue_export_helper.vue_exports.createCommentVNode)("", true)];
		}),
		_: 1
	}, _parent));
	else _push(`<!---->`);
	if ($options.showNotificationAlert) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_alert, {
		theme: "primary",
		closable: "",
		onClose: ($event) => $data.hideNotificationAlert = true
	}, {
		default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)($options.notificationAlertText)} `);
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_nuxt_link, { to: "/member/notifications" }, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.t("skin_flasma:alert_notifications_link", "여기를 눌러 확인하세요"))}`);
						else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.t("skin_flasma:alert_notifications_link", "여기를 눌러 확인하세요")), 1)];
					}),
					_: 1
				}, _parent, _scopeId));
			} else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)($options.notificationAlertText) + " ", 1), (0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_nuxt_link, { to: "/member/notifications" }, {
				default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.t("skin_flasma:alert_notifications_link", "여기를 눌러 확인하세요")), 1)]),
				_: 1
			})];
		}),
		_: 1
	}, _parent));
	else _push(`<!---->`);
	if ($options.showUserDiscussAlert) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_alert, {
		theme: "primary",
		closable: "",
		onClose: $options.closeUserDiscussAlert
	}, {
		default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.t("skin_flasma:alert_discuss_before", "현재 진행 중인 "))}`);
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_nuxt_link, { to: _ctx.doc_action_link(_ctx.user_doc(_ctx.session.account.name), "discuss") }, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.t("skin_flasma:alert_discuss_link", "사용자 토론"))}`);
						else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.t("skin_flasma:alert_discuss_link", "사용자 토론")), 1)];
					}),
					_: 1
				}, _parent, _scopeId));
				_push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.t("skin_flasma:alert_discuss_after", "이 있습니다."))}`);
			} else return [
				(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.t("skin_flasma:alert_discuss_before", "현재 진행 중인 ")), 1),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_nuxt_link, { to: _ctx.doc_action_link(_ctx.user_doc(_ctx.session.account.name), "discuss") }, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.t("skin_flasma:alert_discuss_link", "사용자 토론")), 1)]),
					_: 1
				}, 8, ["to"]),
				(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.t("skin_flasma:alert_discuss_after", "이 있습니다.")), 1)
			];
		}),
		_: 1
	}, _parent));
	else _push(`<!---->`);
	if (_ctx.page.viewName === "notfound" && $options.document && $options.document.namespace === "문서") _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_alert, null, {
		default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push(`<div class="fl-notfound"${_scopeId}><span${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)($options.notFoundSearchText)}</span>`);
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_seed_link_button, { to: "/Search?q=" + _ctx.page.title }, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.t("skin_flasma:search", "검색"))}`);
						else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.t("skin_flasma:search", "검색")), 1)];
					}),
					_: 1
				}, _parent, _scopeId));
				_push(`</div>`);
			} else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: "fl-notfound" }, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("span", null, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)($options.notFoundSearchText), 1), (0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_seed_link_button, { to: "/Search?q=" + _ctx.page.title }, {
				default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.t("skin_flasma:search", "검색")), 1)]),
				_: 1
			}, 8, ["to"])])];
		}),
		_: 1
	}, _parent));
	else _push(`<!---->`);
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_nuxt, null, null, _parent));
	if (_ctx.page.viewName === "license") _push(`<!--[--><h2>Flasma skin license</h2><pre>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)($data.License)}</pre><!--]-->`);
	else _push(`<!---->`);
	_push(`</article><footer id="bottom" class="fl-card fl-footer">`);
	if (_ctx.page.viewName === "wiki" && _ctx.page.data.date) {
		_push(`<ul class="fl-footer-info">`);
		if (_ctx.page.data.rev) {
			_push(`<li>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.t("skin_flasma:footer_rev_before", "이 리비전은 "))}`);
			_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_local_date, { date: _ctx.page.data.date }, null, _parent));
			_push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.t("skin_flasma:footer_rev_after", "에 편집되었습니다."))}</li>`);
		} else {
			_push(`<li>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.t("skin_flasma:footer_edited_before", "이 문서는 "))}`);
			_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_local_date, { date: _ctx.page.data.date }, null, _parent));
			_push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.t("skin_flasma:footer_edited_after", "에 마지막으로 편집되었습니다."))}</li>`);
		}
		_push(`<li>${_ctx.page.data.copyright_text ?? ""}</li></ul>`);
	} else _push(`<!---->`);
	_push(`<ul class="fl-footer-links">${(_ctx.config["skin.flasma.footer_html"] || _ctx.config["wiki.footer_text"]) ?? ""}</ul><div class="fl-footer-brand"><span>Flasma made by Furpark Community</span><span class="fl-footer-sep">·</span><a href="https://github.com/wjdgustn/thetree" target="_blank" rel="noopener">the tree</a></div></footer>`);
	if ($options.showFooterRecent) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_fl_recent_panel, {
		class: "fl-recent-footer",
		limit: 8
	}, null, _parent));
	else _push(`<!---->`);
	if ($options.showFooterPopular) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_fl_popular_panel, { class: "fl-recent-footer" }, null, _parent));
	else _push(`<!---->`);
	_push(`</main>`);
	if ($options.showRail) {
		_push(`<aside class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)([{ "is-empty": $options.railIsEmpty }, "fl-rail"])}"><div class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)([{
			"is-sticky": $options.stickyRail,
			"is-tall": $data.railTall
		}, "fl-rail-inner"])}">`);
		if ($options.showRailProfile) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_fl_user_profile, { profile: _ctx.userProfile }, null, _parent));
		else _push(`<!---->`);
		if ($options.showRailRecent) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_fl_recent_panel, { class: "fl-rail-recent" }, null, _parent));
		else _push(`<!---->`);
		if ($options.showRailPopular) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_fl_popular_panel, { onHasItems: ($event) => $data.popularHasItems = $event }, null, _parent));
		else _push(`<!---->`);
		if ($options.showRailToc) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_fl_toc_panel, { onHasItems: ($event) => $data.tocHasItems = $event }, null, _parent));
		else _push(`<!---->`);
		_push(`</div></aside>`);
	} else _push(`<!---->`);
	_push(`</div>`);
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_fl_scroll_buttons, null, null, _parent));
	_push(`</div>`);
}
var _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
	const ssrContext = (0, require__plugin_vue_export_helper.vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("skins/flasma/layout.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
//#endregion
//#region src/views/MainView.vue
var _sfc_main = {
	mixins: [common_default],
	components: {
		ProgressBar: progressBar_default,
		Toaster: Ve,
		GlobalEvents,
		Skin: /* @__PURE__ */ require__plugin_vue_export_helper._plugin_vue_export_helper_default(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]])
	},
	computed: {
		pageTitle() {
			const page = this.$store.state.page;
			const doc = page.data?.document;
			if (!doc) return page.title;
			return this.doc_fulltitle(doc) + this.getTitleDescription(page);
		},
		wikiTheme() {
			return this.$store.state.localConfig["wiki.theme"];
		}
	},
	head() {
		const state = this.$store.state;
		const siteName = state.config["wiki.site_name"] || "the tree";
		const fullUrl = state.config["wiki.canonical_url"] + this.$route.fullPath;
		return {
			htmlAttrs: { lang: state.config.lang || "ko" },
			title: this.pageTitle,
			titleTemplate: "%s - " + siteName,
			meta: [
				{
					name: "viewport",
					content: "initial-scale=1.0, minimum-scale=1.0, width=device-width"
				},
				{
					name: "generator",
					content: "the tree"
				},
				{
					name: "mobile-web-app-capable",
					content: "yes"
				},
				{
					name: "application-name",
					content: siteName
				},
				{
					name: "application-tooltip",
					content: siteName
				},
				{
					name: "application-starturl",
					content: `/w/${state.config["wiki.front_page"]}`
				},
				...state.page.data?.date && state.viewData.contentHtml ? [
					...state.viewData.embed?.image ? [{
						name: "og:image",
						content: state.viewData.embed.image
					}] : [],
					{
						name: "og:description",
						content: state.viewData.embed?.text ?? this.removeHtmlTags(state.viewData.contentHtml).slice(0, 200)
					},
					{
						name: "og:type",
						content: "article"
					}
				] : [],
				{
					name: "og:title",
					content: this.pageTitle
				},
				{
					name: "og:site_name",
					content: siteName
				},
				{
					name: "og:url",
					content: fullUrl
				},
				...state.config["embed_image"] ? [{
					name: "og:image",
					content: state.config["embed_image"]
				}] : [],
				{
					name: "theme-color",
					content: state.config["theme_color"]
				}
			],
			link: [{
				rel: "canonical",
				content: fullUrl
			}, {
				rel: "search",
				type: "application/opensearchdescription+xml",
				title: siteName,
				href: "/opensearch.xml"
			}]
		};
	},
	data() {
		return {
			nextUrl: null,
			beforeLeave: null,
			loadingView: false,
			afterLoadView: null
		};
	},
	async serverPrefetch() {
		this.afterInternalRequest(this.initialData);
		const statePatches = this.$store.state.parseResponse(this.initialData);
		delete this.initialData;
		const page = statePatches.page;
		if (!page.contentName && !page.contentHtml) return;
		await this.$store.state.updateView(statePatches);
	},
	async created() {
		this.$store.state.components.mainView = this;
	},
	mounted() {
		const loadLocalConfig = this.$store.state.loadLocalConfig;
		loadLocalConfig();
		window.addEventListener("storage", () => loadLocalConfig());
		window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => this.updateThemeClass());
	},
	async beforeRouteUpdate(to, from, next) {
		let prevPath = from.fullPath;
		if (prevPath.includes("#")) prevPath = prevPath.slice(0, from.fullPath.lastIndexOf("#"));
		let nextPath = to.fullPath;
		if (nextPath.includes("#")) nextPath = nextPath.slice(0, to.fullPath.lastIndexOf("#"));
		if (!(to.path === from.path && !!to.hash && to.hash !== from.hash)) await this.loadView(to.fullPath);
		next();
	},
	watch: {
		$route() {
			this.processNextUrl();
			document.activeElement?.blur();
		},
		"wikiTheme"() {
			this.updateThemeClass();
		},
		"$store.state.currentTheme"() {
			this.updateThemeClass();
		}
	},
	methods: {
		updateThemeClass() {
			let theme = this.$store.state.localConfig["wiki.theme"];
			if (!theme || theme === "auto") theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
			this.$store.state.currentTheme = theme;
			const className = `theseed-${theme}-mode`;
			const otherClassName = `theseed-${theme === "dark" ? "light" : "dark"}-mode`;
			document.body.classList.add(className);
			document.body.classList.remove(otherClassName);
		},
		processNextUrl() {
			if (this.nextUrl) {
				if (this.$route.fullPath === this.nextUrl) this.loadView();
				else this.$router.replace(this.nextUrl);
				this.nextUrl = null;
			}
		},
		async routerPush(to) {
			await this.$router.push({
				...typeof to === "string" ? this.$router.resolve(to) : to,
				name: void 0,
				force: true
			});
		},
		async loadView(url) {
			this.loadingView = true;
			url ||= this.$route.fullPath;
			const json = await this.internalRequest(url, { userUrl: url });
			if (!json) return;
			await this.processInternalResponse(json);
			this.afterLoadView?.();
			this.afterLoadView = null;
			this.loadingView = false;
		},
		gotoRandom() {
			this.routerPush("/random");
		},
		gotoEdit() {
			const doc = this.$store.state.page.data.document;
			if (doc) this.routerPush(this.doc_action_link(doc, "edit"));
		},
		gotoRecentDiscuss() {
			this.routerPush("/RecentDiscuss");
		},
		gotoRecent() {
			this.routerPush("/RecentChanges");
		},
		gotoFront() {
			this.routerPush(this.doc_action_link(this.$store.state.config["wiki.front_page"], "w"));
		}
	}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_ProgressBar = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("ProgressBar");
	const _component_Skin = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("Skin");
	const _component_Toaster = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("Toaster");
	const _component_GlobalEvents = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("GlobalEvents");
	_push(`<!--[-->`);
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_ProgressBar, { ref: "progressBar" }, null, _parent));
	if (_ctx.$store.state.isReady) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_Skin, null, null, _parent));
	else _push(`<!---->`);
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_Toaster, {
		theme: _ctx.$store.state.currentTheme,
		richColors: true
	}, null, _parent));
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_GlobalEvents, {
		filter: (e) => !["INPUT", "TEXTAREA"].includes(e.target.tagName),
		onKeydown: [
			$options.gotoRandom,
			$options.gotoEdit,
			$options.gotoRecentDiscuss,
			$options.gotoRecent,
			$options.gotoFront
		]
	}, null, _parent));
	_push(`<!--]-->`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = (0, require__plugin_vue_export_helper.vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/MainView.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var MainView_default = /*#__PURE__*/ require__plugin_vue_export_helper._plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
//#endregion
//#region \0rolldown_dynamic_import_helper.js
var _rolldown_dynamic_import_helper_default = (glob, path, segments) => {
	const query = path.lastIndexOf("?");
	const v = glob[query === -1 || query < path.lastIndexOf("/") ? path : path.slice(0, query)];
	if (v) return typeof v === "function" ? v() : Promise.resolve(v);
	return new Promise((_, reject) => {
		(typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(reject.bind(null, /* @__PURE__ */ new Error("Unknown variable dynamic import: " + path + (path.split("/").length !== segments ? ". Note that variables only represent file names one level deep." : ""))));
	});
};
//#endregion
//#region src/stores/state.js
var useStateStore = (0, import_pinia_prod.defineStore)("state", {
	state() {
		return {
			isReady: false,
			components: { mainView: null },
			thetreePlugins: { editor: [] },
			config: {},
			configHash: "",
			session: {},
			sessionHash: "",
			localConfig: {},
			localConfigInitialized: false,
			currentTheme: "light",
			page: { data: {} },
			viewData: {},
			skin: {}
		};
	},
	actions: {
		parseResponse(json) {
			const statePatches = {};
			if (json.page) {
				const publicData = JSON.parse(JSON.stringify(json.data.publicData));
				if (publicData.document) {
					const i18next = this.components.mainView.$i18next;
					publicData.document.namespace = i18next.t(`namespaces.${publicData.document.namespace}`, {
						defaultValue: publicData.document.namespace,
						lng: this.config.lang || "ko"
					});
				}
				Object.assign(statePatches, {
					page: {
						...json.page,
						data: publicData
					},
					viewData: {
						...json.data,
						...json.data.publicData
					}
				});
			}
			return statePatches;
		},
		patchPageData(statePatches) {
			this.$patch((state) => {
				state.page = statePatches.page;
				state.viewData = statePatches.viewData;
			});
		},
		patchPartialPageData(json) {
			this.clearFormErrors();
			this.$patch((state) => {
				state.page.data = {
					...state.page.data,
					...json.publicData
				};
				state.viewData = {
					...state.viewData,
					...json.viewData
				};
			});
		},
		async updateView(statePatches) {
			const mainView = this.components.mainView;
			if (mainView) mainView.loadingView = true;
			const contentName = statePatches ? statePatches.page.contentName : this.page.contentName;
			if (!contentName) {
				if (statePatches) this.patchPageData(statePatches);
				this.viewData.viewComponent = null;
				this.isReady = true;
				mainView?.$refs.progressBar?.finish();
				return;
			}
			let view;
			try {
				if (contentName.includes("/")) {
					const splitted = contentName.split("/");
					const dir = splitted[0];
					const name = splitted[1];
					view = await _rolldown_dynamic_import_helper_default(/* #__PURE__ */ Object.assign({
						"../views/contents/admin/aclgroup.vue": () => Promise.resolve().then(() => require("./assets/aclgroup-CptxmDd_.cjs")),
						"../views/contents/admin/aclgroupManage.vue": () => Promise.resolve().then(() => require("./assets/aclgroupManage-CIGDroUc.cjs")),
						"../views/contents/admin/auditLog.vue": () => Promise.resolve().then(() => require("./assets/auditLog-c4EvgF4c.cjs")),
						"../views/contents/admin/batch_revert.vue": () => Promise.resolve().then(() => require("./assets/batch_revert-zZ5RmOC5.cjs")),
						"../views/contents/admin/config.vue": () => Promise.resolve().then(() => require("./assets/config-Ck2q5OyS.cjs")),
						"../views/contents/admin/developer.vue": () => Promise.resolve().then(() => require("./assets/developer-D_Xblcwv.cjs")),
						"../views/contents/admin/grant.vue": () => Promise.resolve().then(() => require("./assets/grant-DHhkM6wo.cjs")),
						"../views/contents/admin/initialSetup.vue": () => Promise.resolve().then(() => require("./assets/initialSetup-BuAjj07p.cjs")),
						"../views/contents/admin/login_history.vue": () => Promise.resolve().then(() => require("./assets/login_history-BOxNB26e.cjs")),
						"../views/contents/admin/login_history_result.vue": () => Promise.resolve().then(() => require("./assets/login_history_result-C-vELfRo.cjs")),
						"../views/contents/admin/manageAccount.vue": () => Promise.resolve().then(() => require("./assets/manageAccount-Dzixzb66.cjs")),
						"../views/contents/docList/ContentLength.vue": () => Promise.resolve().then(() => require("./assets/ContentLength-YBwgQJSt.cjs")),
						"../views/contents/docList/NeededPages.vue": () => Promise.resolve().then(() => require("./assets/NeededPages-BiBodps_.cjs")),
						"../views/contents/docList/OldPages.vue": () => Promise.resolve().then(() => require("./assets/OldPages-BvybcmUC.cjs")),
						"../views/contents/docList/OrphanedCategories.vue": () => Promise.resolve().then(() => require("./assets/OrphanedCategories-N9RV4Gjn.cjs")),
						"../views/contents/docList/OrphanedPages.vue": () => Promise.resolve().then(() => require("./assets/OrphanedPages-BgjXf0vD.cjs")),
						"../views/contents/docList/UncategorizedPages.vue": () => Promise.resolve().then(() => require("./assets/UncategorizedPages-CCyQ9j6N.cjs")),
						"../views/contents/document/acl.vue": () => Promise.resolve().then(() => require("./assets/acl-I9MEp43w.cjs")),
						"../views/contents/document/backlink.vue": () => Promise.resolve().then(() => require("./assets/backlink-BlHnuQBi.cjs")),
						"../views/contents/document/blame.vue": () => Promise.resolve().then(() => require("./assets/blame-C15RoQFH.cjs")),
						"../views/contents/document/closedDiscuss.vue": () => Promise.resolve().then(() => require("./assets/closedDiscuss-B4vBUo_u.cjs")),
						"../views/contents/document/closedEditRequest.vue": () => Promise.resolve().then(() => require("./assets/closedEditRequest-z6mK94u8.cjs")),
						"../views/contents/document/delete.vue": () => Promise.resolve().then(() => require("./assets/delete-DzDPGEIh.cjs")),
						"../views/contents/document/diff.vue": () => Promise.resolve().then(() => require("./assets/diff-odAv-k9x2.cjs")),
						"../views/contents/document/discuss.vue": () => Promise.resolve().then(() => require("./assets/discuss-CSUsgSJ8.cjs")),
						"../views/contents/document/edit.vue": () => Promise.resolve().then(() => require("./assets/edit-BAT027EO.cjs")),
						"../views/contents/document/editRequest.vue": () => Promise.resolve().then(() => require("./assets/editRequest-7bBBlKta.cjs")),
						"../views/contents/document/history.vue": () => Promise.resolve().then(() => require("./assets/history-CMQkS3y5.cjs")),
						"../views/contents/document/move.vue": () => Promise.resolve().then(() => require("./assets/move-CNUe9ov9.cjs")),
						"../views/contents/document/raw.vue": () => Promise.resolve().then(() => require("./assets/raw-CJIx86Sy.cjs")),
						"../views/contents/document/revert.vue": () => Promise.resolve().then(() => require("./assets/revert-Bd_wunhT.cjs")),
						"../views/contents/member/activate_otp.vue": () => Promise.resolve().then(() => require("./assets/activate_otp-Rt8EeRhH.cjs")),
						"../views/contents/member/change_email.vue": () => Promise.resolve().then(() => require("./assets/change_email-CkmswTc5.cjs")),
						"../views/contents/member/change_name.vue": () => Promise.resolve().then(() => require("./assets/change_name-BCZ7AxJu.cjs")),
						"../views/contents/member/change_password.vue": () => Promise.resolve().then(() => require("./assets/change_password-DCgOcAyJ.cjs")),
						"../views/contents/member/deactivate_otp.vue": () => Promise.resolve().then(() => require("./assets/deactivate_otp-CJI_NqiB.cjs")),
						"../views/contents/member/login.vue": () => Promise.resolve().then(() => require("./assets/login-C6nh7niz.cjs")),
						"../views/contents/member/mypage.vue": () => Promise.resolve().then(() => require("./assets/mypage--e4N0EI2.cjs")),
						"../views/contents/member/notifications.vue": () => Promise.resolve().then(() => require("./assets/notifications-D-Sea8y0.cjs")),
						"../views/contents/member/pin_verification.vue": () => Promise.resolve().then(() => require("./assets/pin_verification-BpnwSaZM.cjs")),
						"../views/contents/member/recover_password.vue": () => Promise.resolve().then(() => require("./assets/recover_password-DQlawVRn.cjs")),
						"../views/contents/member/recover_password_email_sent.vue": () => Promise.resolve().then(() => require("./assets/recover_password_email_sent-BdLFDhXv.cjs")),
						"../views/contents/member/recover_password_final.vue": () => Promise.resolve().then(() => require("./assets/recover_password_final-km4emzV5.cjs")),
						"../views/contents/member/signup.vue": () => Promise.resolve().then(() => require("./assets/signup-CNvErXyL.cjs")),
						"../views/contents/member/signup_email_sent.vue": () => Promise.resolve().then(() => require("./assets/signup_email_sent-C9AA4qzZ.cjs")),
						"../views/contents/member/signup_final.vue": () => Promise.resolve().then(() => require("./assets/signup_final-CBwzokZk.cjs")),
						"../views/contents/member/signup_verify.vue": () => Promise.resolve().then(() => require("./assets/signup_verify-DvYPCfxN.cjs")),
						"../views/contents/member/signup_verify_code.vue": () => Promise.resolve().then(() => require("./assets/signup_verify_code-B167YAHI.cjs")),
						"../views/contents/member/starred_documents.vue": () => Promise.resolve().then(() => require("./assets/starred_documents-CGtzhlnQ.cjs")),
						"../views/contents/member/withdraw.vue": () => Promise.resolve().then(() => require("./assets/withdraw-1rApVmVf.cjs")),
						"../views/contents/special/blockHistory.vue": () => Promise.resolve().then(() => require("./assets/blockHistory-D4TLU4sG.cjs")),
						"../views/contents/special/license.vue": () => Promise.resolve().then(() => require("./assets/license-Bnd3BSAb.cjs")),
						"../views/contents/special/randomPage.vue": () => Promise.resolve().then(() => require("./assets/randomPage-D0IbLlAM.cjs")),
						"../views/contents/special/recentChanges.vue": () => Promise.resolve().then(() => require("./assets/recentChanges-DU5ckw5t.cjs")),
						"../views/contents/special/recentDiscuss.vue": () => Promise.resolve().then(() => require("./assets/recentDiscuss-BrQZrDO0.cjs")),
						"../views/contents/special/terms.vue": () => Promise.resolve().then(() => require("./assets/terms-CNTZJLkp.cjs")),
						"../views/contents/special/upload.vue": () => Promise.resolve().then(() => require("./assets/upload-Bygn0RQ4.cjs")),
						"../views/contents/userContribution/discuss.vue": () => Promise.resolve().then(() => require("./assets/discuss-wnFcAe-7.cjs")),
						"../views/contents/userContribution/document.vue": () => Promise.resolve().then(() => require("./assets/document-DYSoXNmi.cjs")),
						"../views/contents/userContribution/editRequest.vue": () => Promise.resolve().then(() => require("./assets/editRequest-ODvn3laz.cjs"))
					}), `../views/contents/${dir}/${name}.vue`, 5);
				} else view = await _rolldown_dynamic_import_helper_default(/* #__PURE__ */ Object.assign({
					"../views/contents/notfound.vue": () => Promise.resolve().then(() => require("./assets/notfound-BJ-q6KUm.cjs")),
					"../views/contents/search.vue": () => Promise.resolve().then(() => require("./assets/search-DkK1UTMq.cjs")),
					"../views/contents/thread.vue": () => Promise.resolve().then(() => require("./assets/thread-ChpgF2Sq.cjs")),
					"../views/contents/wiki.vue": () => Promise.resolve().then(() => require("./assets/wiki-Jm3ITxry.cjs"))
				}), `../views/contents/${contentName}.vue`, 4);
			} catch (e) {}
			if (view) {
				if (statePatches) this.patchPageData(statePatches);
				this.viewData.viewComponent = (0, require__plugin_vue_export_helper.vue_exports.markRaw)(view.default);
				this.page.contentHtml = null;
			} else {
				const i18next = this.components.mainView.$i18next;
				this.page.title = i18next.t("titles.error");
				this.page.contentHtml = `missing view ${contentName}`;
			}
			this.isReady = true;
			if (mainView) mainView.loadingView = false;
			this.cleanViewData();
			mainView?.$refs.progressBar?.finish();
		},
		cleanViewData() {
			this.clearFormErrors();
			const mainView = this.components.mainView;
			if (mainView) mainView.beforeLeave = null;
		},
		clearFormErrors() {
			this.viewData.errorAlert = this.viewData.alert ?? null;
			this.viewData.fieldErrors = null;
		},
		loadLocalConfig() {
			this.localConfig = JSON.parse(localStorage.getItem("thetree_settings")) || {};
			this.localConfigInitialized = true;
		},
		localConfigSetValue(key, value) {
			this.localConfig[key] = value;
			localStorage.setItem("thetree_settings", JSON.stringify(this.localConfig));
		},
		skinSetValue(key, value) {
			this.skin[key] = value;
		}
	},
	getters: { isDark() {
		return this.currentTheme === "dark";
	} }
});
//#endregion
//#region src/router/index.js
var router = () => {
	let state = null;
	const waitPageLoad = () => {
		state ??= useStateStore();
		return new Promise((resolve) => {
			if (!state.components.mainView?.loadingView) return resolve();
			state.components.mainView.afterLoadView = resolve;
		});
	};
	return createRouter({
		history: createMemoryHistory(),
		scrollBehavior(to, from, savedPosition) {
			return new Promise(async (resolve) => {
				await waitPageLoad();
				if (to.hash) {
					const el = document.getElementById(to.hash.slice(1));
					if (el) el.focus();
				}
				if (savedPosition && (savedPosition.left > 0 || savedPosition.top > 0)) resolve({
					...savedPosition,
					behavior: to.fullPath.replace(to.hash, "") === from.fullPath.replace(from.hash, "") ? void 0 : "instant"
				});
				else if (to.hash) switch (to.hash) {
					case "#toc": {
						const toc = document.getElementsByClassName("wiki-macro-toc")[0];
						resolve({ el: toc ?? to.hash });
						break;
					}
					default: resolve({ el: to.hash });
				}
				else resolve({
					left: 0,
					top: 0,
					behavior: "instant"
				});
			});
		},
		routes: [{
			path: "/:path(.*)",
			name: "main",
			component: MainView_default
		}]
	});
};
//#endregion
//#region node_modules/@fortawesome/fontawesome-svg-core/index.mjs
/*!
* Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
* License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
* Copyright 2024 Fonticons, Inc.
*/
function _defineProperty$1(e, r, t) {
	return (r = _toPropertyKey$1(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}
function ownKeys$1(e, r) {
	var t = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		r && (o = o.filter(function(r) {
			return Object.getOwnPropertyDescriptor(e, r).enumerable;
		})), t.push.apply(t, o);
	}
	return t;
}
function _objectSpread2$1(e) {
	for (var r = 1; r < arguments.length; r++) {
		var t = null != arguments[r] ? arguments[r] : {};
		r % 2 ? ownKeys$1(Object(t), !0).forEach(function(r) {
			_defineProperty$1(e, r, t[r]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function(r) {
			Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
		});
	}
	return e;
}
function _toPrimitive$1(t, r) {
	if ("object" != typeof t || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != typeof i) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
function _toPropertyKey$1(t) {
	var i = _toPrimitive$1(t, "string");
	return "symbol" == typeof i ? i : i + "";
}
var noop = () => {};
var _WINDOW = {};
var _DOCUMENT = {};
var _MUTATION_OBSERVER = null;
var _PERFORMANCE = {
	mark: noop,
	measure: noop
};
try {
	if (typeof window !== "undefined") _WINDOW = window;
	if (typeof document !== "undefined") _DOCUMENT = document;
	if (typeof MutationObserver !== "undefined") _MUTATION_OBSERVER = MutationObserver;
	if (typeof performance !== "undefined") _PERFORMANCE = performance;
} catch (e) {}
var { userAgent = "" } = _WINDOW.navigator || {};
var WINDOW = _WINDOW;
var DOCUMENT = _DOCUMENT;
var MUTATION_OBSERVER = _MUTATION_OBSERVER;
var PERFORMANCE = _PERFORMANCE;
WINDOW.document;
var IS_DOM = !!DOCUMENT.documentElement && !!DOCUMENT.head && typeof DOCUMENT.addEventListener === "function" && typeof DOCUMENT.createElement === "function";
var IS_IE = ~userAgent.indexOf("MSIE") || ~userAgent.indexOf("Trident/");
var p = /fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/;
var g = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i;
var S = {
	classic: {
		fa: "solid",
		fas: "solid",
		"fa-solid": "solid",
		far: "regular",
		"fa-regular": "regular",
		fal: "light",
		"fa-light": "light",
		fat: "thin",
		"fa-thin": "thin",
		fab: "brands",
		"fa-brands": "brands"
	},
	duotone: {
		fa: "solid",
		fad: "solid",
		"fa-solid": "solid",
		"fa-duotone": "solid",
		fadr: "regular",
		"fa-regular": "regular",
		fadl: "light",
		"fa-light": "light",
		fadt: "thin",
		"fa-thin": "thin"
	},
	sharp: {
		fa: "solid",
		fass: "solid",
		"fa-solid": "solid",
		fasr: "regular",
		"fa-regular": "regular",
		fasl: "light",
		"fa-light": "light",
		fast: "thin",
		"fa-thin": "thin"
	},
	"sharp-duotone": {
		fa: "solid",
		fasds: "solid",
		"fa-solid": "solid",
		fasdr: "regular",
		"fa-regular": "regular",
		fasdl: "light",
		"fa-light": "light",
		fasdt: "thin",
		"fa-thin": "thin"
	}
};
var A = {
	GROUP: "duotone-group",
	SWAP_OPACITY: "swap-opacity",
	PRIMARY: "primary",
	SECONDARY: "secondary"
};
var P = [
	"fa-classic",
	"fa-duotone",
	"fa-sharp",
	"fa-sharp-duotone"
];
var s = "classic";
var t = "duotone";
var L = [
	s,
	t,
	"sharp",
	"sharp-duotone"
];
var G = {
	classic: {
		900: "fas",
		400: "far",
		normal: "far",
		300: "fal",
		100: "fat"
	},
	duotone: {
		900: "fad",
		400: "fadr",
		300: "fadl",
		100: "fadt"
	},
	sharp: {
		900: "fass",
		400: "fasr",
		300: "fasl",
		100: "fast"
	},
	"sharp-duotone": {
		900: "fasds",
		400: "fasdr",
		300: "fasdl",
		100: "fasdt"
	}
};
var lt = {
	"Font Awesome 6 Free": {
		900: "fas",
		400: "far"
	},
	"Font Awesome 6 Pro": {
		900: "fas",
		400: "far",
		normal: "far",
		300: "fal",
		100: "fat"
	},
	"Font Awesome 6 Brands": {
		400: "fab",
		normal: "fab"
	},
	"Font Awesome 6 Duotone": {
		900: "fad",
		400: "fadr",
		normal: "fadr",
		300: "fadl",
		100: "fadt"
	},
	"Font Awesome 6 Sharp": {
		900: "fass",
		400: "fasr",
		normal: "fasr",
		300: "fasl",
		100: "fast"
	},
	"Font Awesome 6 Sharp Duotone": {
		900: "fasds",
		400: "fasdr",
		normal: "fasdr",
		300: "fasdl",
		100: "fasdt"
	}
};
var pt = /* @__PURE__ */ new Map([
	["classic", {
		defaultShortPrefixId: "fas",
		defaultStyleId: "solid",
		styleIds: [
			"solid",
			"regular",
			"light",
			"thin",
			"brands"
		],
		futureStyleIds: [],
		defaultFontWeight: 900
	}],
	["sharp", {
		defaultShortPrefixId: "fass",
		defaultStyleId: "solid",
		styleIds: [
			"solid",
			"regular",
			"light",
			"thin"
		],
		futureStyleIds: [],
		defaultFontWeight: 900
	}],
	["duotone", {
		defaultShortPrefixId: "fad",
		defaultStyleId: "solid",
		styleIds: [
			"solid",
			"regular",
			"light",
			"thin"
		],
		futureStyleIds: [],
		defaultFontWeight: 900
	}],
	["sharp-duotone", {
		defaultShortPrefixId: "fasds",
		defaultStyleId: "solid",
		styleIds: [
			"solid",
			"regular",
			"light",
			"thin"
		],
		futureStyleIds: [],
		defaultFontWeight: 900
	}]
]);
var xt = {
	classic: {
		solid: "fas",
		regular: "far",
		light: "fal",
		thin: "fat",
		brands: "fab"
	},
	duotone: {
		solid: "fad",
		regular: "fadr",
		light: "fadl",
		thin: "fadt"
	},
	sharp: {
		solid: "fass",
		regular: "fasr",
		light: "fasl",
		thin: "fast"
	},
	"sharp-duotone": {
		solid: "fasds",
		regular: "fasdr",
		light: "fasdl",
		thin: "fasdt"
	}
};
var Ft = [
	"fak",
	"fa-kit",
	"fakd",
	"fa-kit-duotone"
];
var St = {
	kit: {
		fak: "kit",
		"fa-kit": "kit"
	},
	"kit-duotone": {
		fakd: "kit-duotone",
		"fa-kit-duotone": "kit-duotone"
	}
};
var At = ["kit"];
var Ct = {
	kit: { "fa-kit": "fak" },
	"kit-duotone": { "fa-kit-duotone": "fakd" }
};
var Lt = ["fak", "fakd"];
var Wt = {
	kit: { fak: "fa-kit" },
	"kit-duotone": { fakd: "fa-kit-duotone" }
};
var Et = {
	kit: { kit: "fak" },
	"kit-duotone": { "kit-duotone": "fakd" }
};
var t$1 = {
	GROUP: "duotone-group",
	SWAP_OPACITY: "swap-opacity",
	PRIMARY: "primary",
	SECONDARY: "secondary"
};
var r$1 = [
	"fa-classic",
	"fa-duotone",
	"fa-sharp",
	"fa-sharp-duotone"
];
var bt$1 = [
	"fak",
	"fa-kit",
	"fakd",
	"fa-kit-duotone"
];
var Yt = {
	"Font Awesome Kit": {
		400: "fak",
		normal: "fak"
	},
	"Font Awesome Kit Duotone": {
		400: "fakd",
		normal: "fakd"
	}
};
var ua = {
	classic: {
		"fa-brands": "fab",
		"fa-duotone": "fad",
		"fa-light": "fal",
		"fa-regular": "far",
		"fa-solid": "fas",
		"fa-thin": "fat"
	},
	duotone: {
		"fa-regular": "fadr",
		"fa-light": "fadl",
		"fa-thin": "fadt"
	},
	sharp: {
		"fa-solid": "fass",
		"fa-regular": "fasr",
		"fa-light": "fasl",
		"fa-thin": "fast"
	},
	"sharp-duotone": {
		"fa-solid": "fasds",
		"fa-regular": "fasdr",
		"fa-light": "fasdl",
		"fa-thin": "fasdt"
	}
};
var I$1 = {
	classic: [
		"fas",
		"far",
		"fal",
		"fat",
		"fad"
	],
	duotone: [
		"fadr",
		"fadl",
		"fadt"
	],
	sharp: [
		"fass",
		"fasr",
		"fasl",
		"fast"
	],
	"sharp-duotone": [
		"fasds",
		"fasdr",
		"fasdl",
		"fasdt"
	]
};
var ga = {
	classic: {
		fab: "fa-brands",
		fad: "fa-duotone",
		fal: "fa-light",
		far: "fa-regular",
		fas: "fa-solid",
		fat: "fa-thin"
	},
	duotone: {
		fadr: "fa-regular",
		fadl: "fa-light",
		fadt: "fa-thin"
	},
	sharp: {
		fass: "fa-solid",
		fasr: "fa-regular",
		fasl: "fa-light",
		fast: "fa-thin"
	},
	"sharp-duotone": {
		fasds: "fa-solid",
		fasdr: "fa-regular",
		fasdl: "fa-light",
		fasdt: "fa-thin"
	}
};
var x = [
	"fa-solid",
	"fa-regular",
	"fa-light",
	"fa-thin",
	"fa-duotone",
	"fa-brands"
];
var Ia = [
	"fa",
	"fas",
	"far",
	"fal",
	"fat",
	"fad",
	"fadr",
	"fadl",
	"fadt",
	"fab",
	"fass",
	"fasr",
	"fasl",
	"fast",
	"fasds",
	"fasdr",
	"fasdl",
	"fasdt",
	...r$1,
	...x
];
var m$1 = [
	"solid",
	"regular",
	"light",
	"thin",
	"duotone",
	"brands"
];
var c$1 = [
	1,
	2,
	3,
	4,
	5,
	6,
	7,
	8,
	9,
	10
];
var F$1 = c$1.concat([
	11,
	12,
	13,
	14,
	15,
	16,
	17,
	18,
	19,
	20
]);
var ma = [
	...Object.keys(I$1),
	...m$1,
	"2xs",
	"xs",
	"sm",
	"lg",
	"xl",
	"2xl",
	"beat",
	"border",
	"fade",
	"beat-fade",
	"bounce",
	"flip-both",
	"flip-horizontal",
	"flip-vertical",
	"flip",
	"fw",
	"inverse",
	"layers-counter",
	"layers-text",
	"layers",
	"li",
	"pull-left",
	"pull-right",
	"pulse",
	"rotate-180",
	"rotate-270",
	"rotate-90",
	"rotate-by",
	"shake",
	"spin-pulse",
	"spin-reverse",
	"spin",
	"stack-1x",
	"stack-2x",
	"stack",
	"ul",
	t$1.GROUP,
	t$1.SWAP_OPACITY,
	t$1.PRIMARY,
	t$1.SECONDARY
].concat(c$1.map((a) => "".concat(a, "x"))).concat(F$1.map((a) => "w-".concat(a)));
var wa = {
	"Font Awesome 5 Free": {
		900: "fas",
		400: "far"
	},
	"Font Awesome 5 Pro": {
		900: "fas",
		400: "far",
		normal: "far",
		300: "fal"
	},
	"Font Awesome 5 Brands": {
		400: "fab",
		normal: "fab"
	},
	"Font Awesome 5 Duotone": { 900: "fad" }
};
var NAMESPACE_IDENTIFIER = "___FONT_AWESOME___";
var UNITS_IN_GRID = 16;
var DEFAULT_CSS_PREFIX = "fa";
var DEFAULT_REPLACEMENT_CLASS = "svg-inline--fa";
var DATA_FA_I2SVG = "data-fa-i2svg";
var DATA_FA_PSEUDO_ELEMENT = "data-fa-pseudo-element";
var DATA_FA_PSEUDO_ELEMENT_PENDING = "data-fa-pseudo-element-pending";
var DATA_PREFIX = "data-prefix";
var DATA_ICON = "data-icon";
var HTML_CLASS_I2SVG_BASE_CLASS = "fontawesome-i2svg";
var MUTATION_APPROACH_ASYNC = "async";
var TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS = [
	"HTML",
	"HEAD",
	"STYLE",
	"SCRIPT"
];
var PRODUCTION$1 = (() => {
	try {
		return process.env.NODE_ENV === "production";
	} catch (e$$1) {
		return false;
	}
})();
function familyProxy(obj) {
	return new Proxy(obj, { get(target, prop) {
		return prop in target ? target[prop] : target[s];
	} });
}
var _PREFIX_TO_STYLE = _objectSpread2$1({}, S);
_PREFIX_TO_STYLE[s] = _objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1({}, { "fa-duotone": "duotone" }), S[s]), St["kit"]), St["kit-duotone"]);
var PREFIX_TO_STYLE = familyProxy(_PREFIX_TO_STYLE);
var _STYLE_TO_PREFIX = _objectSpread2$1({}, xt);
_STYLE_TO_PREFIX[s] = _objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1({}, { duotone: "fad" }), _STYLE_TO_PREFIX[s]), Et["kit"]), Et["kit-duotone"]);
var STYLE_TO_PREFIX = familyProxy(_STYLE_TO_PREFIX);
var _PREFIX_TO_LONG_STYLE = _objectSpread2$1({}, ga);
_PREFIX_TO_LONG_STYLE[s] = _objectSpread2$1(_objectSpread2$1({}, _PREFIX_TO_LONG_STYLE[s]), Wt["kit"]);
var PREFIX_TO_LONG_STYLE = familyProxy(_PREFIX_TO_LONG_STYLE);
var _LONG_STYLE_TO_PREFIX = _objectSpread2$1({}, ua);
_LONG_STYLE_TO_PREFIX[s] = _objectSpread2$1(_objectSpread2$1({}, _LONG_STYLE_TO_PREFIX[s]), Ct["kit"]);
familyProxy(_LONG_STYLE_TO_PREFIX);
var ICON_SELECTION_SYNTAX_PATTERN = p;
var LAYERS_TEXT_CLASSNAME = "fa-layers-text";
var FONT_FAMILY_PATTERN = g;
familyProxy(_objectSpread2$1({}, G));
var ATTRIBUTES_WATCHED_FOR_MUTATION = [
	"class",
	"data-prefix",
	"data-icon",
	"data-fa-transform",
	"data-fa-mask"
];
var DUOTONE_CLASSES = A;
var RESERVED_CLASSES = [...At, ...ma];
var initial = WINDOW.FontAwesomeConfig || {};
function getAttrConfig(attr) {
	var element = DOCUMENT.querySelector("script[" + attr + "]");
	if (element) return element.getAttribute(attr);
}
function coerce(val) {
	if (val === "") return true;
	if (val === "false") return false;
	if (val === "true") return true;
	return val;
}
if (DOCUMENT && typeof DOCUMENT.querySelector === "function") [
	["data-family-prefix", "familyPrefix"],
	["data-css-prefix", "cssPrefix"],
	["data-family-default", "familyDefault"],
	["data-style-default", "styleDefault"],
	["data-replacement-class", "replacementClass"],
	["data-auto-replace-svg", "autoReplaceSvg"],
	["data-auto-add-css", "autoAddCss"],
	["data-auto-a11y", "autoA11y"],
	["data-search-pseudo-elements", "searchPseudoElements"],
	["data-observe-mutations", "observeMutations"],
	["data-mutate-approach", "mutateApproach"],
	["data-keep-original-source", "keepOriginalSource"],
	["data-measure-performance", "measurePerformance"],
	["data-show-missing-icons", "showMissingIcons"]
].forEach((_ref) => {
	let [attr, key] = _ref;
	const val = coerce(getAttrConfig(attr));
	if (val !== void 0 && val !== null) initial[key] = val;
});
var _default = {
	styleDefault: "solid",
	familyDefault: s,
	cssPrefix: DEFAULT_CSS_PREFIX,
	replacementClass: DEFAULT_REPLACEMENT_CLASS,
	autoReplaceSvg: true,
	autoAddCss: true,
	autoA11y: true,
	searchPseudoElements: false,
	observeMutations: true,
	mutateApproach: "async",
	keepOriginalSource: true,
	measurePerformance: false,
	showMissingIcons: true
};
if (initial.familyPrefix) initial.cssPrefix = initial.familyPrefix;
var _config = _objectSpread2$1(_objectSpread2$1({}, _default), initial);
if (!_config.autoReplaceSvg) _config.observeMutations = false;
var config = {};
Object.keys(_default).forEach((key) => {
	Object.defineProperty(config, key, {
		enumerable: true,
		set: function(val) {
			_config[key] = val;
			_onChangeCb.forEach((cb) => cb(config));
		},
		get: function() {
			return _config[key];
		}
	});
});
Object.defineProperty(config, "familyPrefix", {
	enumerable: true,
	set: function(val) {
		_config.cssPrefix = val;
		_onChangeCb.forEach((cb) => cb(config));
	},
	get: function() {
		return _config.cssPrefix;
	}
});
WINDOW.FontAwesomeConfig = config;
var _onChangeCb = [];
function onChange(cb) {
	_onChangeCb.push(cb);
	return () => {
		_onChangeCb.splice(_onChangeCb.indexOf(cb), 1);
	};
}
var d$2 = UNITS_IN_GRID;
var meaninglessTransform = {
	size: 16,
	x: 0,
	y: 0,
	rotate: 0,
	flipX: false,
	flipY: false
};
function insertCss(css) {
	if (!css || !IS_DOM) return;
	const style = DOCUMENT.createElement("style");
	style.setAttribute("type", "text/css");
	style.innerHTML = css;
	const headChildren = DOCUMENT.head.childNodes;
	let beforeChild = null;
	for (let i = headChildren.length - 1; i > -1; i--) {
		const child = headChildren[i];
		const tagName = (child.tagName || "").toUpperCase();
		if (["STYLE", "LINK"].indexOf(tagName) > -1) beforeChild = child;
	}
	DOCUMENT.head.insertBefore(style, beforeChild);
	return css;
}
var idPool = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function nextUniqueId() {
	let size = 12;
	let id = "";
	while (size-- > 0) id += idPool[Math.random() * 62 | 0];
	return id;
}
function toArray(obj) {
	const array = [];
	for (let i = (obj || []).length >>> 0; i--;) array[i] = obj[i];
	return array;
}
function classArray(node) {
	if (node.classList) return toArray(node.classList);
	else return (node.getAttribute("class") || "").split(" ").filter((i) => i);
}
function htmlEscape(str) {
	return "".concat(str).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function joinAttributes(attributes) {
	return Object.keys(attributes || {}).reduce((acc, attributeName) => {
		return acc + "".concat(attributeName, "=\"").concat(htmlEscape(attributes[attributeName]), "\" ");
	}, "").trim();
}
function joinStyles(styles) {
	return Object.keys(styles || {}).reduce((acc, styleName) => {
		return acc + "".concat(styleName, ": ").concat(styles[styleName].trim(), ";");
	}, "");
}
function transformIsMeaningful(transform) {
	return transform.size !== meaninglessTransform.size || transform.x !== meaninglessTransform.x || transform.y !== meaninglessTransform.y || transform.rotate !== meaninglessTransform.rotate || transform.flipX || transform.flipY;
}
function transformForSvg(_ref) {
	let { transform, containerWidth, iconWidth } = _ref;
	const outer = { transform: "translate(".concat(containerWidth / 2, " 256)") };
	const innerTranslate = "translate(".concat(transform.x * 32, ", ").concat(transform.y * 32, ") ");
	const innerScale = "scale(".concat(transform.size / 16 * (transform.flipX ? -1 : 1), ", ").concat(transform.size / 16 * (transform.flipY ? -1 : 1), ") ");
	const innerRotate = "rotate(".concat(transform.rotate, " 0 0)");
	return {
		outer,
		inner: { transform: "".concat(innerTranslate, " ").concat(innerScale, " ").concat(innerRotate) },
		path: { transform: "translate(".concat(iconWidth / 2 * -1, " -256)") }
	};
}
function transformForCss(_ref2) {
	let { transform, width = UNITS_IN_GRID, height = UNITS_IN_GRID, startCentered = false } = _ref2;
	let val = "";
	if (startCentered && IS_IE) val += "translate(".concat(transform.x / d$2 - width / 2, "em, ").concat(transform.y / d$2 - height / 2, "em) ");
	else if (startCentered) val += "translate(calc(-50% + ".concat(transform.x / d$2, "em), calc(-50% + ").concat(transform.y / d$2, "em)) ");
	else val += "translate(".concat(transform.x / d$2, "em, ").concat(transform.y / d$2, "em) ");
	val += "scale(".concat(transform.size / d$2 * (transform.flipX ? -1 : 1), ", ").concat(transform.size / d$2 * (transform.flipY ? -1 : 1), ") ");
	val += "rotate(".concat(transform.rotate, "deg) ");
	return val;
}
var baseStyles = ":root, :host {\n  --fa-font-solid: normal 900 1em/1 \"Font Awesome 6 Free\";\n  --fa-font-regular: normal 400 1em/1 \"Font Awesome 6 Free\";\n  --fa-font-light: normal 300 1em/1 \"Font Awesome 6 Pro\";\n  --fa-font-thin: normal 100 1em/1 \"Font Awesome 6 Pro\";\n  --fa-font-duotone: normal 900 1em/1 \"Font Awesome 6 Duotone\";\n  --fa-font-duotone-regular: normal 400 1em/1 \"Font Awesome 6 Duotone\";\n  --fa-font-duotone-light: normal 300 1em/1 \"Font Awesome 6 Duotone\";\n  --fa-font-duotone-thin: normal 100 1em/1 \"Font Awesome 6 Duotone\";\n  --fa-font-brands: normal 400 1em/1 \"Font Awesome 6 Brands\";\n  --fa-font-sharp-solid: normal 900 1em/1 \"Font Awesome 6 Sharp\";\n  --fa-font-sharp-regular: normal 400 1em/1 \"Font Awesome 6 Sharp\";\n  --fa-font-sharp-light: normal 300 1em/1 \"Font Awesome 6 Sharp\";\n  --fa-font-sharp-thin: normal 100 1em/1 \"Font Awesome 6 Sharp\";\n  --fa-font-sharp-duotone-solid: normal 900 1em/1 \"Font Awesome 6 Sharp Duotone\";\n  --fa-font-sharp-duotone-regular: normal 400 1em/1 \"Font Awesome 6 Sharp Duotone\";\n  --fa-font-sharp-duotone-light: normal 300 1em/1 \"Font Awesome 6 Sharp Duotone\";\n  --fa-font-sharp-duotone-thin: normal 100 1em/1 \"Font Awesome 6 Sharp Duotone\";\n}\n\nsvg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {\n  overflow: visible;\n  box-sizing: content-box;\n}\n\n.svg-inline--fa {\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285705em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  top: 0.25em;\n}\n.svg-inline--fa.fa-fw {\n  width: var(--fa-fw-width, 1.25em);\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-counter-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: 0.625em;\n  line-height: 0.1em;\n  vertical-align: 0.225em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n  line-height: 0.0833333337em;\n  vertical-align: 0.125em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n  line-height: 0.0714285718em;\n  vertical-align: 0.0535714295em;\n}\n\n.fa-lg {\n  font-size: 1.25em;\n  line-height: 0.05em;\n  vertical-align: -0.075em;\n}\n\n.fa-xl {\n  font-size: 1.5em;\n  line-height: 0.0416666682em;\n  vertical-align: -0.125em;\n}\n\n.fa-2xl {\n  font-size: 2em;\n  line-height: 0.03125em;\n  vertical-align: -0.1875em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: var(--fa-li-margin, 2.5em);\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: calc(-1 * var(--fa-li-width, 2em));\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.08em);\n  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);\n}\n\n.fa-pull-left {\n  float: left;\n  margin-right: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right {\n  float: right;\n  margin-left: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  animation-name: fa-beat;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  animation-name: fa-bounce;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  animation-name: fa-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  animation-name: fa-beat-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  animation-name: fa-flip;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  animation-name: fa-shake;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  animation-name: fa-spin;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 2s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  animation-name: fa-spin;\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n.fa-bounce,\n.fa-fade,\n.fa-beat-fade,\n.fa-flip,\n.fa-pulse,\n.fa-shake,\n.fa-spin,\n.fa-spin-pulse {\n    animation-delay: -1ms;\n    animation-duration: 1ms;\n    animation-iteration-count: 1;\n    transition-delay: 0s;\n    transition-duration: 0s;\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    transform: scale(1);\n  }\n  45% {\n    transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-shake {\n  0% {\n    transform: rotate(-15deg);\n  }\n  4% {\n    transform: rotate(15deg);\n  }\n  8%, 24% {\n    transform: rotate(-18deg);\n  }\n  12%, 28% {\n    transform: rotate(18deg);\n  }\n  16% {\n    transform: rotate(-22deg);\n  }\n  20% {\n    transform: rotate(22deg);\n  }\n  32% {\n    transform: rotate(-12deg);\n  }\n  36% {\n    transform: rotate(12deg);\n  }\n  40%, 100% {\n    transform: rotate(0deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  transform: rotate(var(--fa-rotate-angle, 0));\n}\n\n.fa-stack {\n  display: inline-block;\n  vertical-align: middle;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: var(--fa-stack-z-index, auto);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.sr-only,\n.fa-sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.sr-only-focusable:not(:focus),\n.fa-sr-only-focusable:not(:focus) {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}";
function css() {
	const dcp = DEFAULT_CSS_PREFIX;
	const drc = DEFAULT_REPLACEMENT_CLASS;
	const fp = config.cssPrefix;
	const rc = config.replacementClass;
	let s = baseStyles;
	if (fp !== dcp || rc !== drc) {
		const dPatt = new RegExp("\\.".concat(dcp, "\\-"), "g");
		const customPropPatt = new RegExp("\\--".concat(dcp, "\\-"), "g");
		const rPatt = new RegExp("\\.".concat(drc), "g");
		s = s.replace(dPatt, ".".concat(fp, "-")).replace(customPropPatt, "--".concat(fp, "-")).replace(rPatt, ".".concat(rc));
	}
	return s;
}
var _cssInserted = false;
function ensureCss() {
	if (config.autoAddCss && !_cssInserted) {
		insertCss(css());
		_cssInserted = true;
	}
}
var InjectCSS = {
	mixout() {
		return { dom: {
			css,
			insertCss: ensureCss
		} };
	},
	hooks() {
		return {
			beforeDOMElementCreation() {
				ensureCss();
			},
			beforeI2svg() {
				ensureCss();
			}
		};
	}
};
var w = WINDOW || {};
if (!w[NAMESPACE_IDENTIFIER]) w[NAMESPACE_IDENTIFIER] = {};
if (!w[NAMESPACE_IDENTIFIER].styles) w[NAMESPACE_IDENTIFIER].styles = {};
if (!w[NAMESPACE_IDENTIFIER].hooks) w[NAMESPACE_IDENTIFIER].hooks = {};
if (!w[NAMESPACE_IDENTIFIER].shims) w[NAMESPACE_IDENTIFIER].shims = [];
var namespace = w[NAMESPACE_IDENTIFIER];
var functions = [];
var listener = function() {
	DOCUMENT.removeEventListener("DOMContentLoaded", listener);
	loaded = 1;
	functions.map((fn) => fn());
};
var loaded = false;
if (IS_DOM) {
	loaded = (DOCUMENT.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(DOCUMENT.readyState);
	if (!loaded) DOCUMENT.addEventListener("DOMContentLoaded", listener);
}
function domready(fn) {
	if (!IS_DOM) return;
	loaded ? setTimeout(fn, 0) : functions.push(fn);
}
function toHtml(abstractNodes) {
	const { tag, attributes = {}, children = [] } = abstractNodes;
	if (typeof abstractNodes === "string") return htmlEscape(abstractNodes);
	else return "<".concat(tag, " ").concat(joinAttributes(attributes), ">").concat(children.map(toHtml).join(""), "</").concat(tag, ">");
}
function iconFromMapping(mapping, prefix, iconName) {
	if (mapping && mapping[prefix] && mapping[prefix][iconName]) return {
		prefix,
		iconName,
		icon: mapping[prefix][iconName]
	};
}
/**
* Internal helper to bind a function known to have 4 arguments
* to a given context.
*/
var bindInternal4 = function bindInternal4(func, thisContext) {
	return function(a, b, c, d) {
		return func.call(thisContext, a, b, c, d);
	};
};
/**
* # Reduce
*
* A fast object `.reduce()` implementation.
*
* @param  {Object}   subject      The object to reduce over.
* @param  {Function} fn           The reducer function.
* @param  {mixed}    initialValue The initial value for the reducer, defaults to subject[0].
* @param  {Object}   thisContext  The context for the reducer.
* @return {mixed}                 The final result.
*/
var reduce = function fastReduceObject(subject, fn, initialValue, thisContext) {
	var keys = Object.keys(subject), length = keys.length, iterator = thisContext !== void 0 ? bindInternal4(fn, thisContext) : fn, i, key, result;
	if (initialValue === void 0) {
		i = 1;
		result = subject[keys[0]];
	} else {
		i = 0;
		result = initialValue;
	}
	for (; i < length; i++) {
		key = keys[i];
		result = iterator(result, subject[key], key, subject);
	}
	return result;
};
/**
* ucs2decode() and codePointAt() are both works of Mathias Bynens and licensed under MIT
*
* Copyright Mathias Bynens <https://mathiasbynens.be/>

* Permission is hereby granted, free of charge, to any person obtaining
* a copy of this software and associated documentation files (the
* "Software"), to deal in the Software without restriction, including
* without limitation the rights to use, copy, modify, merge, publish,
* distribute, sublicense, and/or sell copies of the Software, and to
* permit persons to whom the Software is furnished to do so, subject to
* the following conditions:

* The above copyright notice and this permission notice shall be
* included in all copies or substantial portions of the Software.

* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
* EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
* MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
* NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
* LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
* OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
* WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
function ucs2decode(string) {
	const output = [];
	let counter = 0;
	const length = string.length;
	while (counter < length) {
		const value = string.charCodeAt(counter++);
		if (value >= 55296 && value <= 56319 && counter < length) {
			const extra = string.charCodeAt(counter++);
			if ((extra & 64512) == 56320) output.push(((value & 1023) << 10) + (extra & 1023) + 65536);
			else {
				output.push(value);
				counter--;
			}
		} else output.push(value);
	}
	return output;
}
function toHex(unicode) {
	const decoded = ucs2decode(unicode);
	return decoded.length === 1 ? decoded[0].toString(16) : null;
}
function codePointAt(string, index) {
	const size = string.length;
	let first = string.charCodeAt(index);
	let second;
	if (first >= 55296 && first <= 56319 && size > index + 1) {
		second = string.charCodeAt(index + 1);
		if (second >= 56320 && second <= 57343) return (first - 55296) * 1024 + second - 56320 + 65536;
	}
	return first;
}
function normalizeIcons(icons) {
	return Object.keys(icons).reduce((acc, iconName) => {
		const icon = icons[iconName];
		if (!!icon.icon) acc[icon.iconName] = icon.icon;
		else acc[iconName] = icon;
		return acc;
	}, {});
}
function defineIcons(prefix, icons) {
	const { skipHooks = false } = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
	const normalized = normalizeIcons(icons);
	if (typeof namespace.hooks.addPack === "function" && !skipHooks) namespace.hooks.addPack(prefix, normalizeIcons(icons));
	else namespace.styles[prefix] = _objectSpread2$1(_objectSpread2$1({}, namespace.styles[prefix] || {}), normalized);
	/**
	* Font Awesome 4 used the prefix of `fa` for all icons. With the introduction
	* of new styles we needed to differentiate between them. Prefix `fa` is now an alias
	* for `fas` so we'll ease the upgrade process for our users by automatically defining
	* this as well.
	*/
	if (prefix === "fas") defineIcons("fa", icons);
}
var { styles, shims } = namespace;
var FAMILY_NAMES = Object.keys(PREFIX_TO_LONG_STYLE);
var PREFIXES_FOR_FAMILY = FAMILY_NAMES.reduce((acc, familyId) => {
	acc[familyId] = Object.keys(PREFIX_TO_LONG_STYLE[familyId]);
	return acc;
}, {});
var _defaultUsablePrefix = null;
var _byUnicode = {};
var _byLigature = {};
var _byOldName = {};
var _byOldUnicode = {};
var _byAlias = {};
function isReserved(name) {
	return ~RESERVED_CLASSES.indexOf(name);
}
function getIconName(cssPrefix, cls) {
	const parts = cls.split("-");
	const prefix = parts[0];
	const iconName = parts.slice(1).join("-");
	if (prefix === cssPrefix && iconName !== "" && !isReserved(iconName)) return iconName;
	else return null;
}
var build = () => {
	const lookup = (reducer) => {
		return reduce(styles, (o$$1, style, prefix) => {
			o$$1[prefix] = reduce(style, reducer, {});
			return o$$1;
		}, {});
	};
	_byUnicode = lookup((acc, icon, iconName) => {
		if (icon[3]) acc[icon[3]] = iconName;
		if (icon[2]) icon[2].filter((a$$1) => {
			return typeof a$$1 === "number";
		}).forEach((alias) => {
			acc[alias.toString(16)] = iconName;
		});
		return acc;
	});
	_byLigature = lookup((acc, icon, iconName) => {
		acc[iconName] = iconName;
		if (icon[2]) icon[2].filter((a$$1) => {
			return typeof a$$1 === "string";
		}).forEach((alias) => {
			acc[alias] = iconName;
		});
		return acc;
	});
	_byAlias = lookup((acc, icon, iconName) => {
		const aliases = icon[2];
		acc[iconName] = iconName;
		aliases.forEach((alias) => {
			acc[alias] = iconName;
		});
		return acc;
	});
	const hasRegular = "far" in styles || config.autoFetchSvg;
	const shimLookups = reduce(shims, (acc, shim) => {
		const maybeNameMaybeUnicode = shim[0];
		let prefix = shim[1];
		const iconName = shim[2];
		if (prefix === "far" && !hasRegular) prefix = "fas";
		if (typeof maybeNameMaybeUnicode === "string") acc.names[maybeNameMaybeUnicode] = {
			prefix,
			iconName
		};
		if (typeof maybeNameMaybeUnicode === "number") acc.unicodes[maybeNameMaybeUnicode.toString(16)] = {
			prefix,
			iconName
		};
		return acc;
	}, {
		names: {},
		unicodes: {}
	});
	_byOldName = shimLookups.names;
	_byOldUnicode = shimLookups.unicodes;
	_defaultUsablePrefix = getCanonicalPrefix(config.styleDefault, { family: config.familyDefault });
};
onChange((c$$1) => {
	_defaultUsablePrefix = getCanonicalPrefix(c$$1.styleDefault, { family: config.familyDefault });
});
build();
function byUnicode(prefix, unicode) {
	return (_byUnicode[prefix] || {})[unicode];
}
function byLigature(prefix, ligature) {
	return (_byLigature[prefix] || {})[ligature];
}
function byAlias(prefix, alias) {
	return (_byAlias[prefix] || {})[alias];
}
function byOldName(name) {
	return _byOldName[name] || {
		prefix: null,
		iconName: null
	};
}
function byOldUnicode(unicode) {
	const oldUnicode = _byOldUnicode[unicode];
	const newUnicode = byUnicode("fas", unicode);
	return oldUnicode || (newUnicode ? {
		prefix: "fas",
		iconName: newUnicode
	} : null) || {
		prefix: null,
		iconName: null
	};
}
function getDefaultUsablePrefix() {
	return _defaultUsablePrefix;
}
var emptyCanonicalIcon = () => {
	return {
		prefix: null,
		iconName: null,
		rest: []
	};
};
function getFamilyId(values) {
	let family = s;
	const famProps = FAMILY_NAMES.reduce((acc, familyId) => {
		acc[familyId] = "".concat(config.cssPrefix, "-").concat(familyId);
		return acc;
	}, {});
	L.forEach((familyId) => {
		if (values.includes(famProps[familyId]) || values.some((v$$1) => PREFIXES_FOR_FAMILY[familyId].includes(v$$1))) family = familyId;
	});
	return family;
}
function getCanonicalPrefix(styleOrPrefix) {
	const { family = s } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
	const style = PREFIX_TO_STYLE[family][styleOrPrefix];
	if (family === t && !styleOrPrefix) return "fad";
	const prefix = STYLE_TO_PREFIX[family][styleOrPrefix] || STYLE_TO_PREFIX[family][style];
	const defined = styleOrPrefix in namespace.styles ? styleOrPrefix : null;
	return prefix || defined || null;
}
function moveNonFaClassesToRest(classNames) {
	let rest = [];
	let iconName = null;
	classNames.forEach((cls) => {
		const result = getIconName(config.cssPrefix, cls);
		if (result) iconName = result;
		else if (cls) rest.push(cls);
	});
	return {
		iconName,
		rest
	};
}
function sortedUniqueValues(arr) {
	return arr.sort().filter((value, index, arr) => {
		return arr.indexOf(value) === index;
	});
}
function getCanonicalIcon(values) {
	const { skipLookups = false } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
	let givenPrefix = null;
	const faCombinedClasses = Ia.concat(bt$1);
	const faStyleOrFamilyClasses = sortedUniqueValues(values.filter((cls) => faCombinedClasses.includes(cls)));
	const nonStyleOrFamilyClasses = sortedUniqueValues(values.filter((cls) => !Ia.includes(cls)));
	const [styleFromValues = null] = faStyleOrFamilyClasses.filter((cls) => {
		givenPrefix = cls;
		return !P.includes(cls);
	});
	const family = getFamilyId(faStyleOrFamilyClasses);
	const canonical = _objectSpread2$1(_objectSpread2$1({}, moveNonFaClassesToRest(nonStyleOrFamilyClasses)), {}, { prefix: getCanonicalPrefix(styleFromValues, { family }) });
	return _objectSpread2$1(_objectSpread2$1(_objectSpread2$1({}, canonical), getDefaultCanonicalPrefix({
		values,
		family,
		styles,
		config,
		canonical,
		givenPrefix
	})), applyShimAndAlias(skipLookups, givenPrefix, canonical));
}
function applyShimAndAlias(skipLookups, givenPrefix, canonical) {
	let { prefix, iconName } = canonical;
	if (skipLookups || !prefix || !iconName) return {
		prefix,
		iconName
	};
	const shim = givenPrefix === "fa" ? byOldName(iconName) : {};
	const aliasIconName = byAlias(prefix, iconName);
	iconName = shim.iconName || aliasIconName || iconName;
	prefix = shim.prefix || prefix;
	if (prefix === "far" && !styles["far"] && styles["fas"] && !config.autoFetchSvg) prefix = "fas";
	return {
		prefix,
		iconName
	};
}
var newCanonicalFamilies = L.filter((familyId) => {
	return familyId !== s || familyId !== t;
});
var newCanonicalStyles = Object.keys(ga).filter((key) => key !== s).map((key) => Object.keys(ga[key])).flat();
function getDefaultCanonicalPrefix(prefixOptions) {
	const { values, family, canonical, givenPrefix = "", styles = {}, config: config$$1 = {} } = prefixOptions;
	const isDuotoneFamily = family === t;
	const valuesHasDuotone = values.includes("fa-duotone") || values.includes("fad");
	const defaultFamilyIsDuotone = config$$1.familyDefault === "duotone";
	const canonicalPrefixIsDuotone = canonical.prefix === "fad" || canonical.prefix === "fa-duotone";
	if (!isDuotoneFamily && (valuesHasDuotone || defaultFamilyIsDuotone || canonicalPrefixIsDuotone)) canonical.prefix = "fad";
	if (values.includes("fa-brands") || values.includes("fab")) canonical.prefix = "fab";
	if (!canonical.prefix && newCanonicalFamilies.includes(family)) {
		if (Object.keys(styles).find((key) => newCanonicalStyles.includes(key)) || config$$1.autoFetchSvg) {
			canonical.prefix = pt.get(family).defaultShortPrefixId;
			canonical.iconName = byAlias(canonical.prefix, canonical.iconName) || canonical.iconName;
		}
	}
	if (canonical.prefix === "fa" || givenPrefix === "fa") canonical.prefix = getDefaultUsablePrefix() || "fas";
	return canonical;
}
var Library = class {
	constructor() {
		this.definitions = {};
	}
	add() {
		for (var _len = arguments.length, definitions = new Array(_len), _key = 0; _key < _len; _key++) definitions[_key] = arguments[_key];
		const additions = definitions.reduce(this._pullDefinitions, {});
		Object.keys(additions).forEach((key) => {
			this.definitions[key] = _objectSpread2$1(_objectSpread2$1({}, this.definitions[key] || {}), additions[key]);
			defineIcons(key, additions[key]);
			const longPrefix = PREFIX_TO_LONG_STYLE[s][key];
			if (longPrefix) defineIcons(longPrefix, additions[key]);
			build();
		});
	}
	reset() {
		this.definitions = {};
	}
	_pullDefinitions(additions, definition) {
		const normalized = definition.prefix && definition.iconName && definition.icon ? { 0: definition } : definition;
		Object.keys(normalized).map((key) => {
			const { prefix, iconName, icon } = normalized[key];
			const aliases = icon[2];
			if (!additions[prefix]) additions[prefix] = {};
			if (aliases.length > 0) aliases.forEach((alias) => {
				if (typeof alias === "string") additions[prefix][alias] = icon;
			});
			additions[prefix][iconName] = icon;
		});
		return additions;
	}
};
var _plugins = [];
var _hooks = {};
var providers = {};
var defaultProviderKeys = Object.keys(providers);
function registerPlugins(nextPlugins, _ref) {
	let { mixoutsTo: obj } = _ref;
	_plugins = nextPlugins;
	_hooks = {};
	Object.keys(providers).forEach((k) => {
		if (defaultProviderKeys.indexOf(k) === -1) delete providers[k];
	});
	_plugins.forEach((plugin) => {
		const mixout = plugin.mixout ? plugin.mixout() : {};
		Object.keys(mixout).forEach((tk) => {
			if (typeof mixout[tk] === "function") obj[tk] = mixout[tk];
			if (typeof mixout[tk] === "object") Object.keys(mixout[tk]).forEach((sk) => {
				if (!obj[tk]) obj[tk] = {};
				obj[tk][sk] = mixout[tk][sk];
			});
		});
		if (plugin.hooks) {
			const hooks = plugin.hooks();
			Object.keys(hooks).forEach((hook) => {
				if (!_hooks[hook]) _hooks[hook] = [];
				_hooks[hook].push(hooks[hook]);
			});
		}
		if (plugin.provides) plugin.provides(providers);
	});
	return obj;
}
function chainHooks(hook, accumulator) {
	for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) args[_key - 2] = arguments[_key];
	(_hooks[hook] || []).forEach((hookFn) => {
		accumulator = hookFn.apply(null, [accumulator, ...args]);
	});
	return accumulator;
}
function callHooks(hook) {
	for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) args[_key2 - 1] = arguments[_key2];
	(_hooks[hook] || []).forEach((hookFn) => {
		hookFn.apply(null, args);
	});
}
function callProvided() {
	const hook = arguments[0];
	const args = Array.prototype.slice.call(arguments, 1);
	return providers[hook] ? providers[hook].apply(null, args) : void 0;
}
function findIconDefinition(iconLookup) {
	if (iconLookup.prefix === "fa") iconLookup.prefix = "fas";
	let { iconName } = iconLookup;
	const prefix = iconLookup.prefix || getDefaultUsablePrefix();
	if (!iconName) return;
	iconName = byAlias(prefix, iconName) || iconName;
	return iconFromMapping(library.definitions, prefix, iconName) || iconFromMapping(namespace.styles, prefix, iconName);
}
var library = new Library();
var noAuto = () => {
	config.autoReplaceSvg = false;
	config.observeMutations = false;
	callHooks("noAuto");
};
var api = {
	noAuto,
	config,
	dom: {
		i2svg: function() {
			let params = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
			if (IS_DOM) {
				callHooks("beforeI2svg", params);
				callProvided("pseudoElements2svg", params);
				return callProvided("i2svg", params);
			} else return Promise.reject(/* @__PURE__ */ new Error("Operation requires a DOM of some kind."));
		},
		watch: function() {
			let params = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
			const { autoReplaceSvgRoot } = params;
			if (config.autoReplaceSvg === false) config.autoReplaceSvg = true;
			config.observeMutations = true;
			domready(() => {
				autoReplace({ autoReplaceSvgRoot });
				callHooks("watch", params);
			});
		}
	},
	parse: { icon: (icon) => {
		if (icon === null) return null;
		if (typeof icon === "object" && icon.prefix && icon.iconName) return {
			prefix: icon.prefix,
			iconName: byAlias(icon.prefix, icon.iconName) || icon.iconName
		};
		if (Array.isArray(icon) && icon.length === 2) {
			const iconName = icon[1].indexOf("fa-") === 0 ? icon[1].slice(3) : icon[1];
			const prefix = getCanonicalPrefix(icon[0]);
			return {
				prefix,
				iconName: byAlias(prefix, iconName) || iconName
			};
		}
		if (typeof icon === "string" && (icon.indexOf("".concat(config.cssPrefix, "-")) > -1 || icon.match(ICON_SELECTION_SYNTAX_PATTERN))) {
			const canonicalIcon = getCanonicalIcon(icon.split(" "), { skipLookups: true });
			return {
				prefix: canonicalIcon.prefix || getDefaultUsablePrefix(),
				iconName: byAlias(canonicalIcon.prefix, canonicalIcon.iconName) || canonicalIcon.iconName
			};
		}
		if (typeof icon === "string") {
			const prefix = getDefaultUsablePrefix();
			return {
				prefix,
				iconName: byAlias(prefix, icon) || icon
			};
		}
	} },
	library,
	findIconDefinition,
	toHtml
};
var autoReplace = function() {
	const { autoReplaceSvgRoot = DOCUMENT } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
	if ((Object.keys(namespace.styles).length > 0 || config.autoFetchSvg) && IS_DOM && config.autoReplaceSvg) api.dom.i2svg({ node: autoReplaceSvgRoot });
};
function domVariants(val, abstractCreator) {
	Object.defineProperty(val, "abstract", { get: abstractCreator });
	Object.defineProperty(val, "html", { get: function() {
		return val.abstract.map((a) => toHtml(a));
	} });
	Object.defineProperty(val, "node", { get: function() {
		if (!IS_DOM) return;
		const container = DOCUMENT.createElement("div");
		container.innerHTML = val.html;
		return container.children;
	} });
	return val;
}
function asIcon(_ref) {
	let { children, main, mask, attributes, styles, transform } = _ref;
	if (transformIsMeaningful(transform) && main.found && !mask.found) {
		const { width, height } = main;
		const offset = {
			x: width / height / 2,
			y: .5
		};
		attributes["style"] = joinStyles(_objectSpread2$1(_objectSpread2$1({}, styles), {}, { "transform-origin": "".concat(offset.x + transform.x / 16, "em ").concat(offset.y + transform.y / 16, "em") }));
	}
	return [{
		tag: "svg",
		attributes,
		children
	}];
}
function asSymbol(_ref) {
	let { prefix, iconName, children, attributes, symbol } = _ref;
	const id = symbol === true ? "".concat(prefix, "-").concat(config.cssPrefix, "-").concat(iconName) : symbol;
	return [{
		tag: "svg",
		attributes: { style: "display: none;" },
		children: [{
			tag: "symbol",
			attributes: _objectSpread2$1(_objectSpread2$1({}, attributes), {}, { id }),
			children
		}]
	}];
}
function makeInlineSvgAbstract(params) {
	const { icons: { main, mask }, prefix, iconName, transform, symbol, title, maskId, titleId, extra, watchable = false } = params;
	const { width, height } = mask.found ? mask : main;
	const isUploadedIcon = Lt.includes(prefix);
	const attrClass = [config.replacementClass, iconName ? "".concat(config.cssPrefix, "-").concat(iconName) : ""].filter((c$$1) => extra.classes.indexOf(c$$1) === -1).filter((c$$1) => c$$1 !== "" || !!c$$1).concat(extra.classes).join(" ");
	let content = {
		children: [],
		attributes: _objectSpread2$1(_objectSpread2$1({}, extra.attributes), {}, {
			"data-prefix": prefix,
			"data-icon": iconName,
			"class": attrClass,
			"role": extra.attributes.role || "img",
			"xmlns": "http://www.w3.org/2000/svg",
			"viewBox": "0 0 ".concat(width, " ").concat(height)
		})
	};
	const uploadedIconWidthStyle = isUploadedIcon && !~extra.classes.indexOf("fa-fw") ? { width: "".concat(width / height * 16 * .0625, "em") } : {};
	if (watchable) content.attributes[DATA_FA_I2SVG] = "";
	if (title) {
		content.children.push({
			tag: "title",
			attributes: { id: content.attributes["aria-labelledby"] || "title-".concat(titleId || nextUniqueId()) },
			children: [title]
		});
		delete content.attributes.title;
	}
	const args = _objectSpread2$1(_objectSpread2$1({}, content), {}, {
		prefix,
		iconName,
		main,
		mask,
		maskId,
		transform,
		symbol,
		styles: _objectSpread2$1(_objectSpread2$1({}, uploadedIconWidthStyle), extra.styles)
	});
	const { children, attributes } = mask.found && main.found ? callProvided("generateAbstractMask", args) || {
		children: [],
		attributes: {}
	} : callProvided("generateAbstractIcon", args) || {
		children: [],
		attributes: {}
	};
	args.children = children;
	args.attributes = attributes;
	if (symbol) return asSymbol(args);
	else return asIcon(args);
}
function makeLayersTextAbstract(params) {
	const { content, width, height, transform, title, extra, watchable = false } = params;
	const attributes = _objectSpread2$1(_objectSpread2$1(_objectSpread2$1({}, extra.attributes), title ? { "title": title } : {}), {}, { "class": extra.classes.join(" ") });
	if (watchable) attributes[DATA_FA_I2SVG] = "";
	const styles = _objectSpread2$1({}, extra.styles);
	if (transformIsMeaningful(transform)) {
		styles["transform"] = transformForCss({
			transform,
			startCentered: true,
			width,
			height
		});
		styles["-webkit-transform"] = styles["transform"];
	}
	const styleString = joinStyles(styles);
	if (styleString.length > 0) attributes["style"] = styleString;
	const val = [];
	val.push({
		tag: "span",
		attributes,
		children: [content]
	});
	if (title) val.push({
		tag: "span",
		attributes: { class: "sr-only" },
		children: [title]
	});
	return val;
}
function makeLayersCounterAbstract(params) {
	const { content, title, extra } = params;
	const attributes = _objectSpread2$1(_objectSpread2$1(_objectSpread2$1({}, extra.attributes), title ? { "title": title } : {}), {}, { "class": extra.classes.join(" ") });
	const styleString = joinStyles(extra.styles);
	if (styleString.length > 0) attributes["style"] = styleString;
	const val = [];
	val.push({
		tag: "span",
		attributes,
		children: [content]
	});
	if (title) val.push({
		tag: "span",
		attributes: { class: "sr-only" },
		children: [title]
	});
	return val;
}
var { styles: styles$1 } = namespace;
function asFoundIcon(icon) {
	const width = icon[0];
	const height = icon[1];
	const [vectorData] = icon.slice(4);
	let element = null;
	if (Array.isArray(vectorData)) element = {
		tag: "g",
		attributes: { class: "".concat(config.cssPrefix, "-").concat(DUOTONE_CLASSES.GROUP) },
		children: [{
			tag: "path",
			attributes: {
				class: "".concat(config.cssPrefix, "-").concat(DUOTONE_CLASSES.SECONDARY),
				fill: "currentColor",
				d: vectorData[0]
			}
		}, {
			tag: "path",
			attributes: {
				class: "".concat(config.cssPrefix, "-").concat(DUOTONE_CLASSES.PRIMARY),
				fill: "currentColor",
				d: vectorData[1]
			}
		}]
	};
	else element = {
		tag: "path",
		attributes: {
			fill: "currentColor",
			d: vectorData
		}
	};
	return {
		found: true,
		width,
		height,
		icon: element
	};
}
var missingIconResolutionMixin = {
	found: false,
	width: 512,
	height: 512
};
function maybeNotifyMissing(iconName, prefix) {
	if (!PRODUCTION$1 && !config.showMissingIcons && iconName) console.error("Icon with name \"".concat(iconName, "\" and prefix \"").concat(prefix, "\" is missing."));
}
function findIcon(iconName, prefix) {
	let givenPrefix = prefix;
	if (prefix === "fa" && config.styleDefault !== null) prefix = getDefaultUsablePrefix();
	return new Promise((resolve, reject) => {
		if (givenPrefix === "fa") {
			const shim = byOldName(iconName) || {};
			iconName = shim.iconName || iconName;
			prefix = shim.prefix || prefix;
		}
		if (iconName && prefix && styles$1[prefix] && styles$1[prefix][iconName]) {
			const icon = styles$1[prefix][iconName];
			return resolve(asFoundIcon(icon));
		}
		maybeNotifyMissing(iconName, prefix);
		resolve(_objectSpread2$1(_objectSpread2$1({}, missingIconResolutionMixin), {}, { icon: config.showMissingIcons && iconName ? callProvided("missingIconAbstract") || {} : {} }));
	});
}
var noop$1 = () => {};
var p$2 = config.measurePerformance && PERFORMANCE && PERFORMANCE.mark && PERFORMANCE.measure ? PERFORMANCE : {
	mark: noop$1,
	measure: noop$1
};
var preamble = "FA \"6.7.2\"";
var begin = (name) => {
	p$2.mark("".concat(preamble, " ").concat(name, " begins"));
	return () => end(name);
};
var end = (name) => {
	p$2.mark("".concat(preamble, " ").concat(name, " ends"));
	p$2.measure("".concat(preamble, " ").concat(name), "".concat(preamble, " ").concat(name, " begins"), "".concat(preamble, " ").concat(name, " ends"));
};
var perf = {
	begin,
	end
};
var noop$2 = () => {};
function isWatched(node) {
	return typeof (node.getAttribute ? node.getAttribute(DATA_FA_I2SVG) : null) === "string";
}
function hasPrefixAndIcon(node) {
	const prefix = node.getAttribute ? node.getAttribute(DATA_PREFIX) : null;
	const icon = node.getAttribute ? node.getAttribute(DATA_ICON) : null;
	return prefix && icon;
}
function hasBeenReplaced(node) {
	return node && node.classList && node.classList.contains && node.classList.contains(config.replacementClass);
}
function getMutator() {
	if (config.autoReplaceSvg === true) return mutators.replace;
	return mutators[config.autoReplaceSvg] || mutators.replace;
}
function createElementNS(tag) {
	return DOCUMENT.createElementNS("http://www.w3.org/2000/svg", tag);
}
function createElement(tag) {
	return DOCUMENT.createElement(tag);
}
function convertSVG(abstractObj) {
	const { ceFn = abstractObj.tag === "svg" ? createElementNS : createElement } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
	if (typeof abstractObj === "string") return DOCUMENT.createTextNode(abstractObj);
	const tag = ceFn(abstractObj.tag);
	Object.keys(abstractObj.attributes || []).forEach(function(key) {
		tag.setAttribute(key, abstractObj.attributes[key]);
	});
	(abstractObj.children || []).forEach(function(child) {
		tag.appendChild(convertSVG(child, { ceFn }));
	});
	return tag;
}
function nodeAsComment(node) {
	let comment = " ".concat(node.outerHTML, " ");
	comment = "".concat(comment, "Font Awesome fontawesome.com ");
	return comment;
}
var mutators = {
	replace: function(mutation) {
		const node = mutation[0];
		if (node.parentNode) {
			mutation[1].forEach((abstract) => {
				node.parentNode.insertBefore(convertSVG(abstract), node);
			});
			if (node.getAttribute(DATA_FA_I2SVG) === null && config.keepOriginalSource) {
				let comment = DOCUMENT.createComment(nodeAsComment(node));
				node.parentNode.replaceChild(comment, node);
			} else node.remove();
		}
	},
	nest: function(mutation) {
		const node = mutation[0];
		const abstract = mutation[1];
		if (~classArray(node).indexOf(config.replacementClass)) return mutators.replace(mutation);
		const forSvg = new RegExp("".concat(config.cssPrefix, "-.*"));
		delete abstract[0].attributes.id;
		if (abstract[0].attributes.class) {
			const splitClasses = abstract[0].attributes.class.split(" ").reduce((acc, cls) => {
				if (cls === config.replacementClass || cls.match(forSvg)) acc.toSvg.push(cls);
				else acc.toNode.push(cls);
				return acc;
			}, {
				toNode: [],
				toSvg: []
			});
			abstract[0].attributes.class = splitClasses.toSvg.join(" ");
			if (splitClasses.toNode.length === 0) node.removeAttribute("class");
			else node.setAttribute("class", splitClasses.toNode.join(" "));
		}
		const newInnerHTML = abstract.map((a) => toHtml(a)).join("\n");
		node.setAttribute(DATA_FA_I2SVG, "");
		node.innerHTML = newInnerHTML;
	}
};
function performOperationSync(op) {
	op();
}
function perform(mutations, callback) {
	const callbackFunction = typeof callback === "function" ? callback : noop$2;
	if (mutations.length === 0) callbackFunction();
	else {
		let frame = performOperationSync;
		if (config.mutateApproach === MUTATION_APPROACH_ASYNC) frame = WINDOW.requestAnimationFrame || performOperationSync;
		frame(() => {
			const mutator = getMutator();
			const mark = perf.begin("mutate");
			mutations.map(mutator);
			mark();
			callbackFunction();
		});
	}
}
var disabled = false;
function disableObservation() {
	disabled = true;
}
function enableObservation() {
	disabled = false;
}
var mo = null;
function observe(options) {
	if (!MUTATION_OBSERVER) return;
	if (!config.observeMutations) return;
	const { treeCallback = noop$2, nodeCallback = noop$2, pseudoElementsCallback = noop$2, observeMutationsRoot = DOCUMENT } = options;
	mo = new MUTATION_OBSERVER((objects) => {
		if (disabled) return;
		const defaultPrefix = getDefaultUsablePrefix();
		toArray(objects).forEach((mutationRecord) => {
			if (mutationRecord.type === "childList" && mutationRecord.addedNodes.length > 0 && !isWatched(mutationRecord.addedNodes[0])) {
				if (config.searchPseudoElements) pseudoElementsCallback(mutationRecord.target);
				treeCallback(mutationRecord.target);
			}
			if (mutationRecord.type === "attributes" && mutationRecord.target.parentNode && config.searchPseudoElements) pseudoElementsCallback(mutationRecord.target.parentNode);
			if (mutationRecord.type === "attributes" && isWatched(mutationRecord.target) && ~ATTRIBUTES_WATCHED_FOR_MUTATION.indexOf(mutationRecord.attributeName)) {
				if (mutationRecord.attributeName === "class" && hasPrefixAndIcon(mutationRecord.target)) {
					const { prefix, iconName } = getCanonicalIcon(classArray(mutationRecord.target));
					mutationRecord.target.setAttribute(DATA_PREFIX, prefix || defaultPrefix);
					if (iconName) mutationRecord.target.setAttribute(DATA_ICON, iconName);
				} else if (hasBeenReplaced(mutationRecord.target)) nodeCallback(mutationRecord.target);
			}
		});
	});
	if (!IS_DOM) return;
	mo.observe(observeMutationsRoot, {
		childList: true,
		attributes: true,
		characterData: true,
		subtree: true
	});
}
function disconnect() {
	if (!mo) return;
	mo.disconnect();
}
function styleParser(node) {
	const style = node.getAttribute("style");
	let val = [];
	if (style) val = style.split(";").reduce((acc, style) => {
		const styles = style.split(":");
		const prop = styles[0];
		const value = styles.slice(1);
		if (prop && value.length > 0) acc[prop] = value.join(":").trim();
		return acc;
	}, {});
	return val;
}
function classParser(node) {
	const existingPrefix = node.getAttribute("data-prefix");
	const existingIconName = node.getAttribute("data-icon");
	const innerText = node.innerText !== void 0 ? node.innerText.trim() : "";
	let val = getCanonicalIcon(classArray(node));
	if (!val.prefix) val.prefix = getDefaultUsablePrefix();
	if (existingPrefix && existingIconName) {
		val.prefix = existingPrefix;
		val.iconName = existingIconName;
	}
	if (val.iconName && val.prefix) return val;
	if (val.prefix && innerText.length > 0) val.iconName = byLigature(val.prefix, node.innerText) || byUnicode(val.prefix, toHex(node.innerText));
	if (!val.iconName && config.autoFetchSvg && node.firstChild && node.firstChild.nodeType === Node.TEXT_NODE) val.iconName = node.firstChild.data;
	return val;
}
function attributesParser(node) {
	const extraAttributes = toArray(node.attributes).reduce((acc, attr) => {
		if (acc.name !== "class" && acc.name !== "style") acc[attr.name] = attr.value;
		return acc;
	}, {});
	const title = node.getAttribute("title");
	const titleId = node.getAttribute("data-fa-title-id");
	if (config.autoA11y) if (title) extraAttributes["aria-labelledby"] = "".concat(config.replacementClass, "-title-").concat(titleId || nextUniqueId());
	else {
		extraAttributes["aria-hidden"] = "true";
		extraAttributes["focusable"] = "false";
	}
	return extraAttributes;
}
function blankMeta() {
	return {
		iconName: null,
		title: null,
		titleId: null,
		prefix: null,
		transform: meaninglessTransform,
		symbol: false,
		mask: {
			iconName: null,
			prefix: null,
			rest: []
		},
		maskId: null,
		extra: {
			classes: [],
			styles: {},
			attributes: {}
		}
	};
}
function parseMeta(node) {
	let parser = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : { styleParser: true };
	const { iconName, prefix, rest: extraClasses } = classParser(node);
	const extraAttributes = attributesParser(node);
	const pluginMeta = chainHooks("parseNodeAttributes", {}, node);
	let extraStyles = parser.styleParser ? styleParser(node) : [];
	return _objectSpread2$1({
		iconName,
		title: node.getAttribute("title"),
		titleId: node.getAttribute("data-fa-title-id"),
		prefix,
		transform: meaninglessTransform,
		mask: {
			iconName: null,
			prefix: null,
			rest: []
		},
		maskId: null,
		symbol: false,
		extra: {
			classes: extraClasses,
			styles: extraStyles,
			attributes: extraAttributes
		}
	}, pluginMeta);
}
var { styles: styles$2 } = namespace;
function generateMutation(node) {
	const nodeMeta = config.autoReplaceSvg === "nest" ? parseMeta(node, { styleParser: false }) : parseMeta(node);
	if (~nodeMeta.extra.classes.indexOf(LAYERS_TEXT_CLASSNAME)) return callProvided("generateLayersText", node, nodeMeta);
	else return callProvided("generateSvgReplacementMutation", node, nodeMeta);
}
function getKnownPrefixes() {
	return [...Ft, ...Ia];
}
function onTree(root) {
	let callback = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
	if (!IS_DOM) return Promise.resolve();
	const htmlClassList = DOCUMENT.documentElement.classList;
	const hclAdd = (suffix) => htmlClassList.add("".concat(HTML_CLASS_I2SVG_BASE_CLASS, "-").concat(suffix));
	const hclRemove = (suffix) => htmlClassList.remove("".concat(HTML_CLASS_I2SVG_BASE_CLASS, "-").concat(suffix));
	const prefixes = config.autoFetchSvg ? getKnownPrefixes() : P.concat(Object.keys(styles$2));
	if (!prefixes.includes("fa")) prefixes.push("fa");
	const prefixesDomQuery = [".".concat(LAYERS_TEXT_CLASSNAME, ":not([").concat(DATA_FA_I2SVG, "])")].concat(prefixes.map((p$$1) => ".".concat(p$$1, ":not([").concat(DATA_FA_I2SVG, "])"))).join(", ");
	if (prefixesDomQuery.length === 0) return Promise.resolve();
	let candidates = [];
	try {
		candidates = toArray(root.querySelectorAll(prefixesDomQuery));
	} catch (e$$1) {}
	if (candidates.length > 0) {
		hclAdd("pending");
		hclRemove("complete");
	} else return Promise.resolve();
	const mark = perf.begin("onTree");
	const mutations = candidates.reduce((acc, node) => {
		try {
			const mutation = generateMutation(node);
			if (mutation) acc.push(mutation);
		} catch (e$$1) {
			if (!PRODUCTION$1) {
				if (e$$1.name === "MissingIcon") console.error(e$$1);
			}
		}
		return acc;
	}, []);
	return new Promise((resolve, reject) => {
		Promise.all(mutations).then((resolvedMutations) => {
			perform(resolvedMutations, () => {
				hclAdd("active");
				hclAdd("complete");
				hclRemove("pending");
				if (typeof callback === "function") callback();
				mark();
				resolve();
			});
		}).catch((e$$1) => {
			mark();
			reject(e$$1);
		});
	});
}
function onNode(node) {
	let callback = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
	generateMutation(node).then((mutation) => {
		if (mutation) perform([mutation], callback);
	});
}
function resolveIcons(next) {
	return function(maybeIconDefinition) {
		let params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
		const iconDefinition = (maybeIconDefinition || {}).icon ? maybeIconDefinition : findIconDefinition(maybeIconDefinition || {});
		let { mask } = params;
		if (mask) mask = (mask || {}).icon ? mask : findIconDefinition(mask || {});
		return next(iconDefinition, _objectSpread2$1(_objectSpread2$1({}, params), {}, { mask }));
	};
}
var render$1 = function(iconDefinition) {
	let params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
	const { transform = meaninglessTransform, symbol = false, mask = null, maskId = null, title = null, titleId = null, classes = [], attributes = {}, styles = {} } = params;
	if (!iconDefinition) return;
	const { prefix, iconName, icon } = iconDefinition;
	return domVariants(_objectSpread2$1({ type: "icon" }, iconDefinition), () => {
		callHooks("beforeDOMElementCreation", {
			iconDefinition,
			params
		});
		if (config.autoA11y) if (title) attributes["aria-labelledby"] = "".concat(config.replacementClass, "-title-").concat(titleId || nextUniqueId());
		else {
			attributes["aria-hidden"] = "true";
			attributes["focusable"] = "false";
		}
		return makeInlineSvgAbstract({
			icons: {
				main: asFoundIcon(icon),
				mask: mask ? asFoundIcon(mask.icon) : {
					found: false,
					width: null,
					height: null,
					icon: {}
				}
			},
			prefix,
			iconName,
			transform: _objectSpread2$1(_objectSpread2$1({}, meaninglessTransform), transform),
			symbol,
			title,
			maskId,
			titleId,
			extra: {
				attributes,
				styles,
				classes
			}
		});
	});
};
var ReplaceElements = {
	mixout() {
		return { icon: resolveIcons(render$1) };
	},
	hooks() {
		return { mutationObserverCallbacks(accumulator) {
			accumulator.treeCallback = onTree;
			accumulator.nodeCallback = onNode;
			return accumulator;
		} };
	},
	provides(providers$$1) {
		providers$$1.i2svg = function(params) {
			const { node = DOCUMENT, callback = () => {} } = params;
			return onTree(node, callback);
		};
		providers$$1.generateSvgReplacementMutation = function(node, nodeMeta) {
			const { iconName, title, titleId, prefix, transform, symbol, mask, maskId, extra } = nodeMeta;
			return new Promise((resolve, reject) => {
				Promise.all([findIcon(iconName, prefix), mask.iconName ? findIcon(mask.iconName, mask.prefix) : Promise.resolve({
					found: false,
					width: 512,
					height: 512,
					icon: {}
				})]).then((_ref) => {
					let [main, mask] = _ref;
					resolve([node, makeInlineSvgAbstract({
						icons: {
							main,
							mask
						},
						prefix,
						iconName,
						transform,
						symbol,
						maskId,
						title,
						titleId,
						extra,
						watchable: true
					})]);
				}).catch(reject);
			});
		};
		providers$$1.generateAbstractIcon = function(_ref2) {
			let { children, attributes, main, transform, styles } = _ref2;
			const styleString = joinStyles(styles);
			if (styleString.length > 0) attributes["style"] = styleString;
			let nextChild;
			if (transformIsMeaningful(transform)) nextChild = callProvided("generateAbstractTransformGrouping", {
				main,
				transform,
				containerWidth: main.width,
				iconWidth: main.width
			});
			children.push(nextChild || main.icon);
			return {
				children,
				attributes
			};
		};
	}
};
var Layers = { mixout() {
	return { layer(assembler) {
		let params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
		const { classes = [] } = params;
		return domVariants({ type: "layer" }, () => {
			callHooks("beforeDOMElementCreation", {
				assembler,
				params
			});
			let children = [];
			assembler((args) => {
				Array.isArray(args) ? args.map((a) => {
					children = children.concat(a.abstract);
				}) : children = children.concat(args.abstract);
			});
			return [{
				tag: "span",
				attributes: { class: ["".concat(config.cssPrefix, "-layers"), ...classes].join(" ") },
				children
			}];
		});
	} };
} };
var LayersCounter = { mixout() {
	return { counter(content) {
		let params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
		const { title = null, classes = [], attributes = {}, styles = {} } = params;
		return domVariants({
			type: "counter",
			content
		}, () => {
			callHooks("beforeDOMElementCreation", {
				content,
				params
			});
			return makeLayersCounterAbstract({
				content: content.toString(),
				title,
				extra: {
					attributes,
					styles,
					classes: ["".concat(config.cssPrefix, "-layers-counter"), ...classes]
				}
			});
		});
	} };
} };
var LayersText = {
	mixout() {
		return { text(content) {
			let params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
			const { transform = meaninglessTransform, title = null, classes = [], attributes = {}, styles = {} } = params;
			return domVariants({
				type: "text",
				content
			}, () => {
				callHooks("beforeDOMElementCreation", {
					content,
					params
				});
				return makeLayersTextAbstract({
					content,
					transform: _objectSpread2$1(_objectSpread2$1({}, meaninglessTransform), transform),
					title,
					extra: {
						attributes,
						styles,
						classes: ["".concat(config.cssPrefix, "-layers-text"), ...classes]
					}
				});
			});
		} };
	},
	provides(providers$$1) {
		providers$$1.generateLayersText = function(node, nodeMeta) {
			const { title, transform, extra } = nodeMeta;
			let width = null;
			let height = null;
			if (IS_IE) {
				const computedFontSize = parseInt(getComputedStyle(node).fontSize, 10);
				const boundingClientRect = node.getBoundingClientRect();
				width = boundingClientRect.width / computedFontSize;
				height = boundingClientRect.height / computedFontSize;
			}
			if (config.autoA11y && !title) extra.attributes["aria-hidden"] = "true";
			return Promise.resolve([node, makeLayersTextAbstract({
				content: node.innerHTML,
				width,
				height,
				transform,
				title,
				extra,
				watchable: true
			})]);
		};
	}
};
var CLEAN_CONTENT_PATTERN = /* @__PURE__ */ new RegExp("\"", "ug");
var SECONDARY_UNICODE_RANGE = [1105920, 1112319];
var _FONT_FAMILY_WEIGHT_TO_PREFIX = _objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1({}, { FontAwesome: {
	normal: "fas",
	400: "fas"
} }), lt), wa), Yt);
var FONT_FAMILY_WEIGHT_TO_PREFIX = Object.keys(_FONT_FAMILY_WEIGHT_TO_PREFIX).reduce((acc, key) => {
	acc[key.toLowerCase()] = _FONT_FAMILY_WEIGHT_TO_PREFIX[key];
	return acc;
}, {});
var FONT_FAMILY_WEIGHT_FALLBACK = Object.keys(FONT_FAMILY_WEIGHT_TO_PREFIX).reduce((acc, fontFamily) => {
	const weights = FONT_FAMILY_WEIGHT_TO_PREFIX[fontFamily];
	acc[fontFamily] = weights[900] || [...Object.entries(weights)][0][1];
	return acc;
}, {});
function hexValueFromContent(content) {
	const cleaned = content.replace(CLEAN_CONTENT_PATTERN, "");
	const codePoint = codePointAt(cleaned, 0);
	const isPrependTen = codePoint >= SECONDARY_UNICODE_RANGE[0] && codePoint <= SECONDARY_UNICODE_RANGE[1];
	const isDoubled = cleaned.length === 2 ? cleaned[0] === cleaned[1] : false;
	return {
		value: isDoubled ? toHex(cleaned[0]) : toHex(cleaned),
		isSecondary: isPrependTen || isDoubled
	};
}
function getPrefix(fontFamily, fontWeight) {
	const fontFamilySanitized = fontFamily.replace(/^['"]|['"]$/g, "").toLowerCase();
	const fontWeightInteger = parseInt(fontWeight);
	const fontWeightSanitized = isNaN(fontWeightInteger) ? "normal" : fontWeightInteger;
	return (FONT_FAMILY_WEIGHT_TO_PREFIX[fontFamilySanitized] || {})[fontWeightSanitized] || FONT_FAMILY_WEIGHT_FALLBACK[fontFamilySanitized];
}
function replaceForPosition(node, position) {
	const pendingAttribute = "".concat(DATA_FA_PSEUDO_ELEMENT_PENDING).concat(position.replace(":", "-"));
	return new Promise((resolve, reject) => {
		if (node.getAttribute(pendingAttribute) !== null) return resolve();
		const alreadyProcessedPseudoElement = toArray(node.children).filter((c$$1) => c$$1.getAttribute(DATA_FA_PSEUDO_ELEMENT) === position)[0];
		const styles = WINDOW.getComputedStyle(node, position);
		const fontFamily = styles.getPropertyValue("font-family");
		const fontFamilyMatch = fontFamily.match(FONT_FAMILY_PATTERN);
		const fontWeight = styles.getPropertyValue("font-weight");
		const content = styles.getPropertyValue("content");
		if (alreadyProcessedPseudoElement && !fontFamilyMatch) {
			node.removeChild(alreadyProcessedPseudoElement);
			return resolve();
		} else if (fontFamilyMatch && content !== "none" && content !== "") {
			const content = styles.getPropertyValue("content");
			let prefix = getPrefix(fontFamily, fontWeight);
			const { value: hexValue, isSecondary } = hexValueFromContent(content);
			const isV4 = fontFamilyMatch[0].startsWith("FontAwesome");
			let iconName = byUnicode(prefix, hexValue);
			let iconIdentifier = iconName;
			if (isV4) {
				const iconName4 = byOldUnicode(hexValue);
				if (iconName4.iconName && iconName4.prefix) {
					iconName = iconName4.iconName;
					prefix = iconName4.prefix;
				}
			}
			if (iconName && !isSecondary && (!alreadyProcessedPseudoElement || alreadyProcessedPseudoElement.getAttribute(DATA_PREFIX) !== prefix || alreadyProcessedPseudoElement.getAttribute(DATA_ICON) !== iconIdentifier)) {
				node.setAttribute(pendingAttribute, iconIdentifier);
				if (alreadyProcessedPseudoElement) node.removeChild(alreadyProcessedPseudoElement);
				const meta = blankMeta();
				const { extra } = meta;
				extra.attributes[DATA_FA_PSEUDO_ELEMENT] = position;
				findIcon(iconName, prefix).then((main) => {
					const abstract = makeInlineSvgAbstract(_objectSpread2$1(_objectSpread2$1({}, meta), {}, {
						icons: {
							main,
							mask: emptyCanonicalIcon()
						},
						prefix,
						iconName: iconIdentifier,
						extra,
						watchable: true
					}));
					const element = DOCUMENT.createElementNS("http://www.w3.org/2000/svg", "svg");
					if (position === "::before") node.insertBefore(element, node.firstChild);
					else node.appendChild(element);
					element.outerHTML = abstract.map((a$$1) => toHtml(a$$1)).join("\n");
					node.removeAttribute(pendingAttribute);
					resolve();
				}).catch(reject);
			} else resolve();
		} else resolve();
	});
}
function replace(node) {
	return Promise.all([replaceForPosition(node, "::before"), replaceForPosition(node, "::after")]);
}
function processable(node) {
	return node.parentNode !== document.head && !~TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS.indexOf(node.tagName.toUpperCase()) && !node.getAttribute(DATA_FA_PSEUDO_ELEMENT) && (!node.parentNode || node.parentNode.tagName !== "svg");
}
function searchPseudoElements(root) {
	if (!IS_DOM) return;
	return new Promise((resolve, reject) => {
		const operations = toArray(root.querySelectorAll("*")).filter(processable).map(replace);
		const end = perf.begin("searchPseudoElements");
		disableObservation();
		Promise.all(operations).then(() => {
			end();
			enableObservation();
			resolve();
		}).catch(() => {
			end();
			enableObservation();
			reject();
		});
	});
}
var PseudoElements = {
	hooks() {
		return { mutationObserverCallbacks(accumulator) {
			accumulator.pseudoElementsCallback = searchPseudoElements;
			return accumulator;
		} };
	},
	provides(providers) {
		providers.pseudoElements2svg = function(params) {
			const { node = DOCUMENT } = params;
			if (config.searchPseudoElements) searchPseudoElements(node);
		};
	}
};
var _unwatched = false;
var MutationObserver$1 = {
	mixout() {
		return { dom: { unwatch() {
			disableObservation();
			_unwatched = true;
		} } };
	},
	hooks() {
		return {
			bootstrap() {
				observe(chainHooks("mutationObserverCallbacks", {}));
			},
			noAuto() {
				disconnect();
			},
			watch(params) {
				const { observeMutationsRoot } = params;
				if (_unwatched) enableObservation();
				else observe(chainHooks("mutationObserverCallbacks", { observeMutationsRoot }));
			}
		};
	}
};
var parseTransformString = (transformString) => {
	return transformString.toLowerCase().split(" ").reduce((acc, n) => {
		const parts = n.toLowerCase().split("-");
		const first = parts[0];
		let rest = parts.slice(1).join("-");
		if (first && rest === "h") {
			acc.flipX = true;
			return acc;
		}
		if (first && rest === "v") {
			acc.flipY = true;
			return acc;
		}
		rest = parseFloat(rest);
		if (isNaN(rest)) return acc;
		switch (first) {
			case "grow":
				acc.size = acc.size + rest;
				break;
			case "shrink":
				acc.size = acc.size - rest;
				break;
			case "left":
				acc.x = acc.x - rest;
				break;
			case "right":
				acc.x = acc.x + rest;
				break;
			case "up":
				acc.y = acc.y - rest;
				break;
			case "down":
				acc.y = acc.y + rest;
				break;
			case "rotate":
				acc.rotate = acc.rotate + rest;
				break;
		}
		return acc;
	}, {
		size: 16,
		x: 0,
		y: 0,
		flipX: false,
		flipY: false,
		rotate: 0
	});
};
var PowerTransforms = {
	mixout() {
		return { parse: { transform: (transformString) => {
			return parseTransformString(transformString);
		} } };
	},
	hooks() {
		return { parseNodeAttributes(accumulator, node) {
			const transformString = node.getAttribute("data-fa-transform");
			if (transformString) accumulator.transform = parseTransformString(transformString);
			return accumulator;
		} };
	},
	provides(providers) {
		providers.generateAbstractTransformGrouping = function(_ref) {
			let { main, transform, containerWidth, iconWidth } = _ref;
			const outer = { transform: "translate(".concat(containerWidth / 2, " 256)") };
			const innerTranslate = "translate(".concat(transform.x * 32, ", ").concat(transform.y * 32, ") ");
			const innerScale = "scale(".concat(transform.size / 16 * (transform.flipX ? -1 : 1), ", ").concat(transform.size / 16 * (transform.flipY ? -1 : 1), ") ");
			const innerRotate = "rotate(".concat(transform.rotate, " 0 0)");
			const operations = {
				outer,
				inner: { transform: "".concat(innerTranslate, " ").concat(innerScale, " ").concat(innerRotate) },
				path: { transform: "translate(".concat(iconWidth / 2 * -1, " -256)") }
			};
			return {
				tag: "g",
				attributes: _objectSpread2$1({}, operations.outer),
				children: [{
					tag: "g",
					attributes: _objectSpread2$1({}, operations.inner),
					children: [{
						tag: main.icon.tag,
						children: main.icon.children,
						attributes: _objectSpread2$1(_objectSpread2$1({}, main.icon.attributes), operations.path)
					}]
				}]
			};
		};
	}
};
var ALL_SPACE = {
	x: 0,
	y: 0,
	width: "100%",
	height: "100%"
};
function fillBlack(abstract) {
	let force = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
	if (abstract.attributes && (abstract.attributes.fill || force)) abstract.attributes.fill = "black";
	return abstract;
}
function deGroup(abstract) {
	if (abstract.tag === "g") return abstract.children;
	else return [abstract];
}
registerPlugins([
	InjectCSS,
	ReplaceElements,
	Layers,
	LayersCounter,
	LayersText,
	PseudoElements,
	MutationObserver$1,
	PowerTransforms,
	{
		hooks() {
			return { parseNodeAttributes(accumulator, node) {
				const maskData = node.getAttribute("data-fa-mask");
				const mask = !maskData ? emptyCanonicalIcon() : getCanonicalIcon(maskData.split(" ").map((i) => i.trim()));
				if (!mask.prefix) mask.prefix = getDefaultUsablePrefix();
				accumulator.mask = mask;
				accumulator.maskId = node.getAttribute("data-fa-mask-id");
				return accumulator;
			} };
		},
		provides(providers) {
			providers.generateAbstractMask = function(_ref) {
				let { children, attributes, main, mask, maskId: explicitMaskId, transform } = _ref;
				const { width: mainWidth, icon: mainPath } = main;
				const { width: maskWidth, icon: maskPath } = mask;
				const trans = transformForSvg({
					transform,
					containerWidth: maskWidth,
					iconWidth: mainWidth
				});
				const maskRect = {
					tag: "rect",
					attributes: _objectSpread2$1(_objectSpread2$1({}, ALL_SPACE), {}, { fill: "white" })
				};
				const maskInnerGroupChildrenMixin = mainPath.children ? { children: mainPath.children.map(fillBlack) } : {};
				const maskInnerGroup = {
					tag: "g",
					attributes: _objectSpread2$1({}, trans.inner),
					children: [fillBlack(_objectSpread2$1({
						tag: mainPath.tag,
						attributes: _objectSpread2$1(_objectSpread2$1({}, mainPath.attributes), trans.path)
					}, maskInnerGroupChildrenMixin))]
				};
				const maskOuterGroup = {
					tag: "g",
					attributes: _objectSpread2$1({}, trans.outer),
					children: [maskInnerGroup]
				};
				const maskId = "mask-".concat(explicitMaskId || nextUniqueId());
				const clipId = "clip-".concat(explicitMaskId || nextUniqueId());
				const maskTag = {
					tag: "mask",
					attributes: _objectSpread2$1(_objectSpread2$1({}, ALL_SPACE), {}, {
						id: maskId,
						maskUnits: "userSpaceOnUse",
						maskContentUnits: "userSpaceOnUse"
					}),
					children: [maskRect, maskOuterGroup]
				};
				const defs = {
					tag: "defs",
					children: [{
						tag: "clipPath",
						attributes: { id: clipId },
						children: deGroup(maskPath)
					}, maskTag]
				};
				children.push(defs, {
					tag: "rect",
					attributes: _objectSpread2$1({
						fill: "currentColor",
						"clip-path": "url(#".concat(clipId, ")"),
						mask: "url(#".concat(maskId, ")")
					}, ALL_SPACE)
				});
				return {
					children,
					attributes
				};
			};
		}
	},
	{ provides(providers) {
		let reduceMotion = false;
		if (WINDOW.matchMedia) reduceMotion = WINDOW.matchMedia("(prefers-reduced-motion: reduce)").matches;
		providers.missingIconAbstract = function() {
			const gChildren = [];
			const FILL = { fill: "currentColor" };
			const ANIMATION_BASE = {
				attributeType: "XML",
				repeatCount: "indefinite",
				dur: "2s"
			};
			gChildren.push({
				tag: "path",
				attributes: _objectSpread2$1(_objectSpread2$1({}, FILL), {}, { d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z" })
			});
			const OPACITY_ANIMATE = _objectSpread2$1(_objectSpread2$1({}, ANIMATION_BASE), {}, { attributeName: "opacity" });
			const dot = {
				tag: "circle",
				attributes: _objectSpread2$1(_objectSpread2$1({}, FILL), {}, {
					cx: "256",
					cy: "364",
					r: "28"
				}),
				children: []
			};
			if (!reduceMotion) dot.children.push({
				tag: "animate",
				attributes: _objectSpread2$1(_objectSpread2$1({}, ANIMATION_BASE), {}, {
					attributeName: "r",
					values: "28;14;28;28;14;28;"
				})
			}, {
				tag: "animate",
				attributes: _objectSpread2$1(_objectSpread2$1({}, OPACITY_ANIMATE), {}, { values: "1;0;1;1;0;1;" })
			});
			gChildren.push(dot);
			gChildren.push({
				tag: "path",
				attributes: _objectSpread2$1(_objectSpread2$1({}, FILL), {}, {
					opacity: "1",
					d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
				}),
				children: reduceMotion ? [] : [{
					tag: "animate",
					attributes: _objectSpread2$1(_objectSpread2$1({}, OPACITY_ANIMATE), {}, { values: "1;0;0;0;0;1;" })
				}]
			});
			if (!reduceMotion) gChildren.push({
				tag: "path",
				attributes: _objectSpread2$1(_objectSpread2$1({}, FILL), {}, {
					opacity: "0",
					d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
				}),
				children: [{
					tag: "animate",
					attributes: _objectSpread2$1(_objectSpread2$1({}, OPACITY_ANIMATE), {}, { values: "0;0;1;1;0;0;" })
				}]
			});
			return {
				tag: "g",
				attributes: { "class": "missing" },
				children: gChildren
			};
		};
	} },
	{ hooks() {
		return { parseNodeAttributes(accumulator, node) {
			const symbolData = node.getAttribute("data-fa-symbol");
			accumulator["symbol"] = symbolData === null ? false : symbolData === "" ? true : symbolData;
			return accumulator;
		} };
	} }
], { mixoutsTo: api });
api.noAuto;
var config$1 = api.config;
var library$1 = api.library;
api.dom;
var parse$1 = api.parse;
api.findIconDefinition;
api.toHtml;
var icon = api.icon;
api.layer;
var text = api.text;
api.counter;
//#endregion
//#region node_modules/@fortawesome/vue-fontawesome/index.es.js
function ownKeys(e, r) {
	var t = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		r && (o = o.filter(function(r) {
			return Object.getOwnPropertyDescriptor(e, r).enumerable;
		})), t.push.apply(t, o);
	}
	return t;
}
function _objectSpread2(e) {
	for (var r = 1; r < arguments.length; r++) {
		var t = null != arguments[r] ? arguments[r] : {};
		r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
			_defineProperty(e, r, t[r]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
			Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
		});
	}
	return e;
}
function _toPrimitive(t, r) {
	if ("object" != typeof t || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != typeof i) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
function _toPropertyKey(t) {
	var i = _toPrimitive(t, "string");
	return "symbol" == typeof i ? i : i + "";
}
function _typeof(o) {
	"@babel/helpers - typeof";
	return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
		return typeof o;
	} : function(o) {
		return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
	}, _typeof(o);
}
function _defineProperty(obj, key, value) {
	key = _toPropertyKey(key);
	if (key in obj) Object.defineProperty(obj, key, {
		value,
		enumerable: true,
		configurable: true,
		writable: true
	});
	else obj[key] = value;
	return obj;
}
function _objectWithoutPropertiesLoose(source, excluded) {
	if (source == null) return {};
	var target = {};
	for (var key in source) if (Object.prototype.hasOwnProperty.call(source, key)) {
		if (excluded.indexOf(key) >= 0) continue;
		target[key] = source[key];
	}
	return target;
}
function _objectWithoutProperties(source, excluded) {
	if (source == null) return {};
	var target = _objectWithoutPropertiesLoose(source, excluded);
	var key, i;
	if (Object.getOwnPropertySymbols) {
		var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
		for (i = 0; i < sourceSymbolKeys.length; i++) {
			key = sourceSymbolKeys[i];
			if (excluded.indexOf(key) >= 0) continue;
			if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
			target[key] = source[key];
		}
	}
	return target;
}
function _toConsumableArray(arr) {
	return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _arrayWithoutHoles(arr) {
	if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _iterableToArray(iter) {
	if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _unsupportedIterableToArray(o, minLen) {
	if (!o) return;
	if (typeof o === "string") return _arrayLikeToArray(o, minLen);
	var n = Object.prototype.toString.call(o).slice(8, -1);
	if (n === "Object" && o.constructor) n = o.constructor.name;
	if (n === "Map" || n === "Set") return Array.from(o);
	if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
	if (len == null || len > arr.length) len = arr.length;
	for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
	return arr2;
}
function _nonIterableSpread() {
	throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var humps$1 = { exports: {} };
(function(module) {
	(function(global) {
		var _processKeys = function(convert, obj, options) {
			if (!_isObject(obj) || _isDate(obj) || _isRegExp(obj) || _isBoolean(obj) || _isFunction(obj)) return obj;
			var output, i = 0, l = 0;
			if (_isArray(obj)) {
				output = [];
				for (l = obj.length; i < l; i++) output.push(_processKeys(convert, obj[i], options));
			} else {
				output = {};
				for (var key in obj) if (Object.prototype.hasOwnProperty.call(obj, key)) output[convert(key, options)] = _processKeys(convert, obj[key], options);
			}
			return output;
		};
		var separateWords = function(string, options) {
			options = options || {};
			var separator = options.separator || "_";
			var split = options.split || /(?=[A-Z])/;
			return string.split(split).join(separator);
		};
		var camelize = function(string) {
			if (_isNumerical(string)) return string;
			string = string.replace(/[\-_\s]+(.)?/g, function(match, chr) {
				return chr ? chr.toUpperCase() : "";
			});
			return string.substr(0, 1).toLowerCase() + string.substr(1);
		};
		var pascalize = function(string) {
			var camelized = camelize(string);
			return camelized.substr(0, 1).toUpperCase() + camelized.substr(1);
		};
		var decamelize = function(string, options) {
			return separateWords(string, options).toLowerCase();
		};
		var toString = Object.prototype.toString;
		var _isFunction = function(obj) {
			return typeof obj === "function";
		};
		var _isObject = function(obj) {
			return obj === Object(obj);
		};
		var _isArray = function(obj) {
			return toString.call(obj) == "[object Array]";
		};
		var _isDate = function(obj) {
			return toString.call(obj) == "[object Date]";
		};
		var _isRegExp = function(obj) {
			return toString.call(obj) == "[object RegExp]";
		};
		var _isBoolean = function(obj) {
			return toString.call(obj) == "[object Boolean]";
		};
		var _isNumerical = function(obj) {
			obj = obj - 0;
			return obj === obj;
		};
		var _processor = function(convert, options) {
			var callback = options && "process" in options ? options.process : options;
			if (typeof callback !== "function") return convert;
			return function(string, options) {
				return callback(string, convert, options);
			};
		};
		var humps = {
			camelize,
			decamelize,
			pascalize,
			depascalize: decamelize,
			camelizeKeys: function(object, options) {
				return _processKeys(_processor(camelize, options), object);
			},
			decamelizeKeys: function(object, options) {
				return _processKeys(_processor(decamelize, options), object, options);
			},
			pascalizeKeys: function(object, options) {
				return _processKeys(_processor(pascalize, options), object);
			},
			depascalizeKeys: function() {
				return this.decamelizeKeys.apply(this, arguments);
			}
		};
		if (module.exports) module.exports = humps;
		else global.humps = humps;
	})(commonjsGlobal);
})(humps$1);
var humps = humps$1.exports;
var _excluded = ["class", "style"];
/**
* Converts a CSS style into a plain Javascript object.
* @param {String} style The style to converts into a plain Javascript object.
* @returns {Object}
*/
function styleToObject(style) {
	return style.split(";").map(function(s) {
		return s.trim();
	}).filter(function(s) {
		return s;
	}).reduce(function(output, pair) {
		var idx = pair.indexOf(":");
		var prop = humps.camelize(pair.slice(0, idx));
		output[prop] = pair.slice(idx + 1).trim();
		return output;
	}, {});
}
/**
* Converts a CSS class list into a plain Javascript object.
* @param {Array<String>} classes The class list to convert.
* @returns {Object}
*/
function classToObject(classes) {
	return classes.split(/\s+/).reduce(function(output, className) {
		output[className] = true;
		return output;
	}, {});
}
/**
* Converts a FontAwesome abstract element of an icon into a Vue VNode.
* @param {AbstractElement | String} abstractElement The element to convert.
* @param {Object} props The user-defined props.
* @param {Object} attrs The user-defined native HTML attributes.
* @returns {VNode}
*/
function convert(abstractElement) {
	var props = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
	var attrs = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
	if (typeof abstractElement === "string") return abstractElement;
	var children = (abstractElement.children || []).map(function(child) {
		return convert(child);
	});
	var mixins = Object.keys(abstractElement.attributes || {}).reduce(function(mixins, key) {
		var value = abstractElement.attributes[key];
		switch (key) {
			case "class":
				mixins.class = classToObject(value);
				break;
			case "style":
				mixins.style = styleToObject(value);
				break;
			default: mixins.attrs[key] = value;
		}
		return mixins;
	}, {
		attrs: {},
		class: {},
		style: {}
	});
	attrs.class;
	var _attrs$style = attrs.style, aStyle = _attrs$style === void 0 ? {} : _attrs$style, otherAttrs = _objectWithoutProperties(attrs, _excluded);
	return (0, require__plugin_vue_export_helper.vue_exports.h)(abstractElement.tag, _objectSpread2(_objectSpread2(_objectSpread2({}, props), {}, {
		class: mixins.class,
		style: _objectSpread2(_objectSpread2({}, mixins.style), aStyle)
	}, mixins.attrs), otherAttrs), children);
}
var PRODUCTION = false;
try {
	PRODUCTION = process.env.NODE_ENV === "production";
} catch (e) {}
function log() {
	if (!PRODUCTION && console && typeof console.error === "function") {
		var _console;
		(_console = console).error.apply(_console, arguments);
	}
}
function objectWithKey(key, value) {
	return Array.isArray(value) && value.length > 0 || !Array.isArray(value) && value ? _defineProperty({}, key, value) : {};
}
function classList(props) {
	var _classes;
	var classes = (_classes = {
		"fa-spin": props.spin,
		"fa-pulse": props.pulse,
		"fa-fw": props.fixedWidth,
		"fa-border": props.border,
		"fa-li": props.listItem,
		"fa-inverse": props.inverse,
		"fa-flip": props.flip === true,
		"fa-flip-horizontal": props.flip === "horizontal" || props.flip === "both",
		"fa-flip-vertical": props.flip === "vertical" || props.flip === "both"
	}, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_classes, "fa-".concat(props.size), props.size !== null), "fa-rotate-".concat(props.rotation), props.rotation !== null), "fa-pull-".concat(props.pull), props.pull !== null), "fa-swap-opacity", props.swapOpacity), "fa-bounce", props.bounce), "fa-shake", props.shake), "fa-beat", props.beat), "fa-fade", props.fade), "fa-beat-fade", props.beatFade), "fa-flash", props.flash), _defineProperty(_defineProperty(_classes, "fa-spin-pulse", props.spinPulse), "fa-spin-reverse", props.spinReverse));
	return Object.keys(classes).map(function(key) {
		return classes[key] ? key : null;
	}).filter(function(key) {
		return key;
	});
}
function normalizeIconArgs(icon) {
	if (icon && _typeof(icon) === "object" && icon.prefix && icon.iconName && icon.icon) return icon;
	if (parse$1.icon) return parse$1.icon(icon);
	if (icon === null) return null;
	if (_typeof(icon) === "object" && icon.prefix && icon.iconName) return icon;
	if (Array.isArray(icon) && icon.length === 2) return {
		prefix: icon[0],
		iconName: icon[1]
	};
	if (typeof icon === "string") return {
		prefix: "fas",
		iconName: icon
	};
}
var FontAwesomeIcon = (0, require__plugin_vue_export_helper.vue_exports.defineComponent)({
	name: "FontAwesomeIcon",
	props: {
		border: {
			type: Boolean,
			default: false
		},
		fixedWidth: {
			type: Boolean,
			default: false
		},
		flip: {
			type: [Boolean, String],
			default: false,
			validator: function validator(value) {
				return [
					true,
					false,
					"horizontal",
					"vertical",
					"both"
				].indexOf(value) > -1;
			}
		},
		icon: {
			type: [
				Object,
				Array,
				String
			],
			required: true
		},
		mask: {
			type: [
				Object,
				Array,
				String
			],
			default: null
		},
		maskId: {
			type: String,
			default: null
		},
		listItem: {
			type: Boolean,
			default: false
		},
		pull: {
			type: String,
			default: null,
			validator: function validator(value) {
				return ["right", "left"].indexOf(value) > -1;
			}
		},
		pulse: {
			type: Boolean,
			default: false
		},
		rotation: {
			type: [String, Number],
			default: null,
			validator: function validator(value) {
				return [
					90,
					180,
					270
				].indexOf(Number.parseInt(value, 10)) > -1;
			}
		},
		swapOpacity: {
			type: Boolean,
			default: false
		},
		size: {
			type: String,
			default: null,
			validator: function validator(value) {
				return [
					"2xs",
					"xs",
					"sm",
					"lg",
					"xl",
					"2xl",
					"1x",
					"2x",
					"3x",
					"4x",
					"5x",
					"6x",
					"7x",
					"8x",
					"9x",
					"10x"
				].indexOf(value) > -1;
			}
		},
		spin: {
			type: Boolean,
			default: false
		},
		transform: {
			type: [String, Object],
			default: null
		},
		symbol: {
			type: [Boolean, String],
			default: false
		},
		title: {
			type: String,
			default: null
		},
		titleId: {
			type: String,
			default: null
		},
		inverse: {
			type: Boolean,
			default: false
		},
		bounce: {
			type: Boolean,
			default: false
		},
		shake: {
			type: Boolean,
			default: false
		},
		beat: {
			type: Boolean,
			default: false
		},
		fade: {
			type: Boolean,
			default: false
		},
		beatFade: {
			type: Boolean,
			default: false
		},
		flash: {
			type: Boolean,
			default: false
		},
		spinPulse: {
			type: Boolean,
			default: false
		},
		spinReverse: {
			type: Boolean,
			default: false
		}
	},
	setup: function setup(props, _ref) {
		var attrs = _ref.attrs;
		var icon$1 = (0, require__plugin_vue_export_helper.vue_exports.computed)(function() {
			return normalizeIconArgs(props.icon);
		});
		var classes = (0, require__plugin_vue_export_helper.vue_exports.computed)(function() {
			return objectWithKey("classes", classList(props));
		});
		var transform = (0, require__plugin_vue_export_helper.vue_exports.computed)(function() {
			return objectWithKey("transform", typeof props.transform === "string" ? parse$1.transform(props.transform) : props.transform);
		});
		var mask = (0, require__plugin_vue_export_helper.vue_exports.computed)(function() {
			return objectWithKey("mask", normalizeIconArgs(props.mask));
		});
		var renderedIcon = (0, require__plugin_vue_export_helper.vue_exports.computed)(function() {
			return icon(icon$1.value, _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, classes.value), transform.value), mask.value), {}, {
				symbol: props.symbol,
				title: props.title,
				titleId: props.titleId,
				maskId: props.maskId
			}));
		});
		(0, require__plugin_vue_export_helper.vue_exports.watch)(renderedIcon, function(value) {
			if (!value) return log("Could not find one or more icon(s)", icon$1.value, mask.value);
		}, { immediate: true });
		var vnode = (0, require__plugin_vue_export_helper.vue_exports.computed)(function() {
			return renderedIcon.value ? convert(renderedIcon.value.abstract[0], {}, attrs) : null;
		});
		return function() {
			return vnode.value;
		};
	}
});
(0, require__plugin_vue_export_helper.vue_exports.defineComponent)({
	name: "FontAwesomeLayers",
	props: { fixedWidth: {
		type: Boolean,
		default: false
	} },
	setup: function setup(props, _ref) {
		var slots = _ref.slots;
		var familyPrefix = config$1.familyPrefix;
		var className = (0, require__plugin_vue_export_helper.vue_exports.computed)(function() {
			return ["".concat(familyPrefix, "-layers")].concat(_toConsumableArray(props.fixedWidth ? ["".concat(familyPrefix, "-fw")] : []));
		});
		return function() {
			return (0, require__plugin_vue_export_helper.vue_exports.h)("div", { class: className.value }, slots.default ? slots.default() : []);
		};
	}
});
(0, require__plugin_vue_export_helper.vue_exports.defineComponent)({
	name: "FontAwesomeLayersText",
	props: {
		value: {
			type: [String, Number],
			default: ""
		},
		transform: {
			type: [String, Object],
			default: null
		},
		counter: {
			type: Boolean,
			default: false
		},
		position: {
			type: String,
			default: null,
			validator: function validator(value) {
				return [
					"bottom-left",
					"bottom-right",
					"top-left",
					"top-right"
				].indexOf(value) > -1;
			}
		}
	},
	setup: function setup(props, _ref) {
		var attrs = _ref.attrs;
		var familyPrefix = config$1.familyPrefix;
		var classes = (0, require__plugin_vue_export_helper.vue_exports.computed)(function() {
			return objectWithKey("classes", [].concat(_toConsumableArray(props.counter ? ["".concat(familyPrefix, "-layers-counter")] : []), _toConsumableArray(props.position ? ["".concat(familyPrefix, "-layers-").concat(props.position)] : [])));
		});
		var transform = (0, require__plugin_vue_export_helper.vue_exports.computed)(function() {
			return objectWithKey("transform", typeof props.transform === "string" ? parse$1.transform(props.transform) : props.transform);
		});
		var abstractElement = (0, require__plugin_vue_export_helper.vue_exports.computed)(function() {
			var abstract = text(props.value.toString(), _objectSpread2(_objectSpread2({}, transform.value), classes.value)).abstract;
			if (props.counter) abstract[0].attributes.class = abstract[0].attributes.class.replace("fa-layers-text", "");
			return abstract[0];
		});
		var vnode = (0, require__plugin_vue_export_helper.vue_exports.computed)(function() {
			return convert(abstractElement.value, {}, attrs);
		});
		return function() {
			return vnode.value;
		};
	}
});
//#endregion
//#region node_modules/@fortawesome/free-solid-svg-icons/index.mjs
/*!
* Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
* License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
* Copyright 2024 Fonticons, Inc.
*/
var faAt = {
	prefix: "fas",
	iconName: "at",
	icon: [
		512,
		512,
		[61946],
		"40",
		"M256 64C150 64 64 150 64 256s86 192 192 192c17.7 0 32 14.3 32 32s-14.3 32-32 32C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256l0 32c0 53-43 96-96 96c-29.3 0-55.6-13.2-73.2-33.9C320 371.1 289.5 384 256 384c-70.7 0-128-57.3-128-128s57.3-128 128-128c27.9 0 53.7 8.9 74.7 24.1c5.7-5 13.1-8.1 21.3-8.1c17.7 0 32 14.3 32 32l0 80 0 32c0 17.7 14.3 32 32 32s32-14.3 32-32l0-32c0-106-86-192-192-192zm64 192a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z"
	]
};
var faTrashCan = {
	prefix: "fas",
	iconName: "trash-can",
	icon: [
		448,
		512,
		[61460, "trash-alt"],
		"f2ed",
		"M135.2 17.7C140.6 6.8 151.7 0 163.8 0L284.2 0c12.1 0 23.2 6.8 28.6 17.7L320 32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l96 0 7.2-14.3zM32 128l384 0 0 320c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-320zm96 64c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16z"
	]
};
var faDoorOpen = {
	prefix: "fas",
	iconName: "door-open",
	icon: [
		576,
		512,
		[],
		"f52b",
		"M320 32c0-9.9-4.5-19.2-12.3-25.2S289.8-1.4 280.2 1l-179.9 45C79 51.3 64 70.5 64 92.5L64 448l-32 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 192 0 32 0 0-32 0-448zM256 256c0 17.7-10.7 32-24 32s-24-14.3-24-32s10.7-32 24-32s24 14.3 24 32zm96-128l96 0 0 352c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-32 0 0-320c0-35.3-28.7-64-64-64l-96 0 0 64z"
	]
};
var faComments = {
	prefix: "fas",
	iconName: "comments",
	icon: [
		640,
		512,
		[128490, 61670],
		"f086",
		"M208 352c114.9 0 208-78.8 208-176S322.9 0 208 0S0 78.8 0 176c0 38.6 14.7 74.3 39.6 103.4c-3.5 9.4-8.7 17.7-14.2 24.7c-4.8 6.2-9.7 11-13.3 14.3c-1.8 1.6-3.3 2.9-4.3 3.7c-.5 .4-.9 .7-1.1 .8l-.2 .2s0 0 0 0s0 0 0 0C1 327.2-1.4 334.4 .8 340.9S9.1 352 16 352c21.8 0 43.8-5.6 62.1-12.5c9.2-3.5 17.8-7.4 25.2-11.4C134.1 343.3 169.8 352 208 352zM448 176c0 112.3-99.1 196.9-216.5 207C255.8 457.4 336.4 512 432 512c38.2 0 73.9-8.7 104.7-23.9c7.5 4 16 7.9 25.2 11.4c18.3 6.9 40.3 12.5 62.1 12.5c6.9 0 13.1-4.5 15.2-11.1c2.1-6.6-.2-13.8-5.8-17.9c0 0 0 0 0 0s0 0 0 0l-.2-.2c-.2-.2-.6-.4-1.1-.8c-1-.8-2.5-2-4.3-3.7c-3.6-3.3-8.5-8.1-13.3-14.3c-5.5-7-10.7-15.4-14.2-24.7c24.9-29 39.6-64.7 39.6-103.4c0-92.8-84.9-168.9-192.6-175.5c.4 5.1 .6 10.3 .6 15.5z"
	]
};
var faUserCheck = {
	prefix: "fas",
	iconName: "user-check",
	icon: [
		640,
		512,
		[],
		"f4fc",
		"M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3zM625 177L497 305c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L591 143c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
	]
};
var faLock = {
	prefix: "fas",
	iconName: "lock",
	icon: [
		448,
		512,
		[128274],
		"f023",
		"M144 144l0 48 160 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192l0-48C80 64.5 144.5 0 224 0s144 64.5 144 144l0 48 16 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 256c0-35.3 28.7-64 64-64l16 0z"
	]
};
var faUser = {
	prefix: "fas",
	iconName: "user",
	icon: [
		448,
		512,
		[128100, 62144],
		"f007",
		"M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"
	]
};
var faKey = {
	prefix: "fas",
	iconName: "key",
	icon: [
		512,
		512,
		[128273],
		"f084",
		"M336 352c97.2 0 176-78.8 176-176S433.2 0 336 0S160 78.8 160 176c0 18.7 2.9 36.8 8.3 53.7L7 391c-4.5 4.5-7 10.6-7 17l0 80c0 13.3 10.7 24 24 24l80 0c13.3 0 24-10.7 24-24l0-40 40 0c13.3 0 24-10.7 24-24l0-40 40 0c6.4 0 12.5-2.5 17-7l33.3-33.3c16.9 5.4 35 8.3 53.7 8.3zM376 96a40 40 0 1 1 0 80 40 40 0 1 1 0-80z"
	]
};
var faBullhorn = {
	prefix: "fas",
	iconName: "bullhorn",
	icon: [
		512,
		512,
		[128226, 128363],
		"f0a1",
		"M480 32c0-12.9-7.8-24.6-19.8-29.6s-25.7-2.2-34.9 6.9L381.7 53c-48 48-113.1 75-181 75l-8.7 0-32 0-96 0c-35.3 0-64 28.7-64 64l0 96c0 35.3 28.7 64 64 64l0 128c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32l0-128 8.7 0c67.9 0 133 27 181 75l43.6 43.6c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6l0-147.6c18.6-8.8 32-32.5 32-60.4s-13.4-51.6-32-60.4L480 32zm-64 76.7L416 240l0 131.3C357.2 317.8 280.5 288 200.7 288l-8.7 0 0-96 8.7 0c79.8 0 156.5-29.8 215.3-83.3z"
	]
};
var faUserMinus = {
	prefix: "fas",
	iconName: "user-minus",
	icon: [
		640,
		512,
		[],
		"f503",
		"M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3zM472 200l144 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-144 0c-13.3 0-24-10.7-24-24s10.7-24 24-24z"
	]
};
var faAnglesRight = {
	prefix: "fas",
	iconName: "angles-right",
	icon: [
		512,
		512,
		[187, "angle-double-right"],
		"f101",
		"M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"
	]
};
var faCircleCheck = {
	prefix: "fas",
	iconName: "circle-check",
	icon: [
		512,
		512,
		[61533, "check-circle"],
		"f058",
		"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
	]
};
var faPause = {
	prefix: "fas",
	iconName: "pause",
	icon: [
		320,
		512,
		[9208],
		"f04c",
		"M48 64C21.5 64 0 85.5 0 112L0 400c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48L48 64zm192 0c-26.5 0-48 21.5-48 48l0 288c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48l-32 0z"
	]
};
var faCode = {
	prefix: "fas",
	iconName: "code",
	icon: [
		640,
		512,
		[],
		"f121",
		"M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"
	]
};
var faUserGear = {
	prefix: "fas",
	iconName: "user-gear",
	icon: [
		640,
		512,
		["user-cog"],
		"f4fe",
		"M224 0a128 128 0 1 1 0 256A128 128 0 1 1 224 0zM178.3 304l91.4 0c11.8 0 23.4 1.2 34.5 3.3c-2.1 18.5 7.4 35.6 21.8 44.8c-16.6 10.6-26.7 31.6-20 53.3c4 12.9 9.4 25.5 16.4 37.6s15.2 23.1 24.4 33c15.7 16.9 39.6 18.4 57.2 8.7l0 .9c0 9.2 2.7 18.5 7.9 26.3L29.7 512C13.3 512 0 498.7 0 482.3C0 383.8 79.8 304 178.3 304zM436 218.2c0-7 4.5-13.3 11.3-14.8c10.5-2.4 21.5-3.7 32.7-3.7s22.2 1.3 32.7 3.7c6.8 1.5 11.3 7.8 11.3 14.8l0 30.6c7.9 3.4 15.4 7.7 22.3 12.8l24.9-14.3c6.1-3.5 13.7-2.7 18.5 2.4c7.6 8.1 14.3 17.2 20.1 27.2s10.3 20.4 13.5 31c2.1 6.7-1.1 13.7-7.2 17.2l-25 14.4c.4 4 .7 8.1 .7 12.3s-.2 8.2-.7 12.3l25 14.4c6.1 3.5 9.2 10.5 7.2 17.2c-3.3 10.6-7.8 21-13.5 31s-12.5 19.1-20.1 27.2c-4.8 5.1-12.5 5.9-18.5 2.4l-24.9-14.3c-6.9 5.1-14.3 9.4-22.3 12.8l0 30.6c0 7-4.5 13.3-11.3 14.8c-10.5 2.4-21.5 3.7-32.7 3.7s-22.2-1.3-32.7-3.7c-6.8-1.5-11.3-7.8-11.3-14.8l0-30.5c-8-3.4-15.6-7.7-22.5-12.9l-24.7 14.3c-6.1 3.5-13.7 2.7-18.5-2.4c-7.6-8.1-14.3-17.2-20.1-27.2s-10.3-20.4-13.5-31c-2.1-6.7 1.1-13.7 7.2-17.2l24.8-14.3c-.4-4.1-.7-8.2-.7-12.4s.2-8.3 .7-12.4L343.8 325c-6.1-3.5-9.2-10.5-7.2-17.2c3.3-10.6 7.7-21 13.5-31s12.5-19.1 20.1-27.2c4.8-5.1 12.4-5.9 18.5-2.4l24.8 14.3c6.9-5.1 14.5-9.4 22.5-12.9l0-30.5zm92.1 133.5a48.1 48.1 0 1 0 -96.1 0 48.1 48.1 0 1 0 96.1 0z"
	]
};
var faDoorClosed = {
	prefix: "fas",
	iconName: "door-closed",
	icon: [
		576,
		512,
		[128682],
		"f52a",
		"M96 64c0-35.3 28.7-64 64-64L416 0c35.3 0 64 28.7 64 64l0 384 64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-112 0-288 0L32 512c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0L96 64zM384 288a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"
	]
};
var faGear = {
	prefix: "fas",
	iconName: "gear",
	icon: [
		512,
		512,
		[9881, "cog"],
		"f013",
		"M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"
	]
};
var faCaretDown = {
	prefix: "fas",
	iconName: "caret-down",
	icon: [
		320,
		512,
		[],
		"f0d7",
		"M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"
	]
};
var faMobileScreen = {
	prefix: "fas",
	iconName: "mobile-screen",
	icon: [
		384,
		512,
		["mobile-android-alt"],
		"f3cf",
		"M16 64C16 28.7 44.7 0 80 0L304 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64L80 512c-35.3 0-64-28.7-64-64L16 64zM144 448c0 8.8 7.2 16 16 16l64 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-64 0c-8.8 0-16 7.2-16 16zM304 64L80 64l0 320 224 0 0-320z"
	]
};
var faEllipsisVertical = {
	prefix: "fas",
	iconName: "ellipsis-vertical",
	icon: [
		128,
		512,
		["ellipsis-v"],
		"f142",
		"M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"
	]
};
var faBell = {
	prefix: "fas",
	iconName: "bell",
	icon: [
		448,
		512,
		[128276, 61602],
		"f0f3",
		"M224 0c-17.7 0-32 14.3-32 32l0 19.2C119 66 64 130.6 64 208l0 18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416l384 0c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8l0-18.8c0-77.4-55-142-128-156.8L256 32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3l-64 0-64 0c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z"
	]
};
var faPlus = {
	prefix: "fas",
	iconName: "plus",
	icon: [
		448,
		512,
		[
			10133,
			61543,
			"add"
		],
		"2b",
		"M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"
	]
};
var faXmark = {
	prefix: "fas",
	iconName: "xmark",
	icon: [
		384,
		512,
		[
			128473,
			10005,
			10006,
			10060,
			215,
			"close",
			"multiply",
			"remove",
			"times"
		],
		"f00d",
		"M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
	]
};
var faChevronLeft = {
	prefix: "fas",
	iconName: "chevron-left",
	icon: [
		320,
		512,
		[9001],
		"f053",
		"M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
	]
};
var faChevronRight = {
	prefix: "fas",
	iconName: "chevron-right",
	icon: [
		320,
		512,
		[9002],
		"f054",
		"M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
	]
};
var faAnglesLeft = {
	prefix: "fas",
	iconName: "angles-left",
	icon: [
		512,
		512,
		[171, "angle-double-left"],
		"f100",
		"M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z"
	]
};
var faClockRotateLeft = {
	prefix: "fas",
	iconName: "clock-rotate-left",
	icon: [
		512,
		512,
		["history"],
		"f1da",
		"M75 75L41 41C25.9 25.9 0 36.6 0 57.9L0 168c0 13.3 10.7 24 24 24l110.1 0c21.4 0 32.1-25.9 17-41l-30.8-30.8C155 85.5 203 64 256 64c106 0 192 86 192 192s-86 192-192 192c-40.8 0-78.6-12.7-109.7-34.4c-14.5-10.1-34.4-6.6-44.6 7.9s-6.6 34.4 7.9 44.6C151.2 495 201.7 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C185.3 0 121.3 28.7 75 75zm181 53c-13.3 0-24 10.7-24 24l0 104c0 6.4 2.5 12.5 7 17l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65 0-94.1c0-13.3-10.7-24-24-24z"
	]
};
var faUserPlus = {
	prefix: "fas",
	iconName: "user-plus",
	icon: [
		640,
		512,
		[],
		"f234",
		"M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3zM504 312l0-64-64 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l64 0 0-64c0-13.3 10.7-24 24-24s24 10.7 24 24l0 64 64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0 0 64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"
	]
};
var faTriangleExclamation = {
	prefix: "fas",
	iconName: "triangle-exclamation",
	icon: [
		512,
		512,
		[
			9888,
			"exclamation-triangle",
			"warning"
		],
		"f071",
		"M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480L40 480c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"
	]
};
var faShare = {
	prefix: "fas",
	iconName: "share",
	icon: [
		512,
		512,
		["mail-forward"],
		"f064",
		"M307 34.8c-11.5 5.1-19 16.6-19 29.2l0 64-112 0C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96l96 0 0 64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z"
	]
};
var faCircleXmark = {
	prefix: "fas",
	iconName: "circle-xmark",
	icon: [
		512,
		512,
		[
			61532,
			"times-circle",
			"xmark-circle"
		],
		"f057",
		"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"
	]
};
//#endregion
//#region node_modules/@fortawesome/free-regular-svg-icons/index.mjs
/*!
* Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
* License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
* Copyright 2024 Fonticons, Inc.
*/
var faFileLines = {
	prefix: "far",
	iconName: "file-lines",
	icon: [
		384,
		512,
		[
			128441,
			128462,
			61686,
			"file-alt",
			"file-text"
		],
		"f15c",
		"M64 464c-8.8 0-16-7.2-16-16L48 64c0-8.8 7.2-16 16-16l160 0 0 80c0 17.7 14.3 32 32 32l80 0 0 288c0 8.8-7.2 16-16 16L64 464zM64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-293.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0L64 0zm56 256c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0z"
	]
};
var faCopy = {
	prefix: "far",
	iconName: "copy",
	icon: [
		448,
		512,
		[],
		"f0c5",
		"M384 336l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l140.1 0L400 115.9 400 320c0 8.8-7.2 16-16 16zM192 384l192 0c35.3 0 64-28.7 64-64l0-204.1c0-12.7-5.1-24.9-14.1-33.9L366.1 14.1c-9-9-21.2-14.1-33.9-14.1L192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-32-48 0 0 32c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l32 0 0-48-32 0z"
	]
};
//#endregion
//#region src/mixins/global/index.js
var global_default = {
	mixins: [{
		created() {
			library$1.add(faXmark, faKey, faChevronLeft, faChevronRight, faMobileScreen, faAnglesLeft, faAnglesRight, faShare, faCircleXmark, faFileLines, faEllipsisVertical, faDoorOpen, faDoorClosed, faPause, faCaretDown, faPlus, faTrashCan, faUserPlus, faUserMinus, faUserCheck, faClockRotateLeft, faUser, faAt, faComments, faBullhorn, faLock, faCode, faTriangleExclamation, faCopy, faBell, faGear, faCircleCheck, faUserGear);
		},
		components: { FontAwesomeIcon }
	}],
	components: {
		RouterView: nuxt_default,
		RouterLink: nuxtLink_default
	},
	computed: {
		config() {
			return this.$store.state.config;
		},
		page() {
			return this.$store.state.page;
		},
		data() {
			return this.$store.state.viewData;
		},
		session() {
			return this.$store.state.session;
		}
	}
};
function createApp() {
	const app = (0, require__plugin_vue_export_helper.vue_exports.createSSRApp)(App_default);
	const router$1 = router();
	app.use(router$1);
	const pinia = (0, import_pinia_prod.createPinia)();
	app.use(pinia);
	app.use(vfmPlugin);
	app.config.globalProperties.$store = {
		state: useStateStore(),
		commit(action, value) {
			switch (action) {
				case "localConfigSetValue":
					this.state.localConfigSetValue(value.key, value.value);
					break;
				case "skinSetValue":
					this.state.skinSetValue(value.key, value.value);
					break;
			}
		}
	};
	const globalComponents = /* #__PURE__ */ Object.assign({
		"./components/global/nuxt.vue": nuxt_exports,
		"./components/global/nuxtLink.vue": nuxtLink_exports
	});
	for (let [path, def] of Object.entries(globalComponents)) {
		let name = path.split("/").pop().replace(".vue", "");
		name = name[0].toUpperCase() + name.slice(1);
		app.component(name, def.default);
	}
	app.mixin(global_default);
	app.mixin(VueHeadMixin);
	return {
		app,
		router: router$1,
		pinia
	};
}
//#endregion
//#region node_modules/i18next-vue/dist/index.mjs
var INJECTION_KEY = Symbol();
function install(app, { i18next, rerenderOn = [
	"languageChanged",
	"loaded",
	"added",
	"removed"
], slotStart = "{", slotEnd = "}" }) {
	const lastI18nChange = (0, require__plugin_vue_export_helper.vue_exports.shallowRef)(/* @__PURE__ */ new Date());
	const invalidate = () => (0, require__plugin_vue_export_helper.vue_exports.nextTick)(() => {
		lastI18nChange.value = /* @__PURE__ */ new Date();
	});
	const usingI18n = () => lastI18nChange.value;
	rerenderOn.forEach((event) => {
		switch (event) {
			case "added":
			case "removed":
				i18next.store?.on(event, invalidate);
				break;
			default:
				i18next.on(event, invalidate);
				break;
		}
	});
	app.component("i18next", TranslationComponent);
	const i18nextReady = () => i18next.isInitialized;
	app.config.globalProperties.$t = withAccessRecording(i18next.t.bind(i18next), usingI18n, i18nextReady);
	const proxiedI18next = new Proxy(i18next, { get(target, prop) {
		usingI18n();
		return Reflect.get(target, prop);
	} });
	app.config.globalProperties.$i18next = proxiedI18next;
	app.provide(INJECTION_KEY, {
		i18next: proxiedI18next,
		slotPattern: slotNamePattern(slotStart, slotEnd),
		withAccessRecording(t, translationsReady) {
			return withAccessRecording(t, usingI18n, translationsReady);
		}
	});
}
function withAccessRecording(t, usingI18n, translationsReady) {
	return new Proxy(t, { apply: function(target, thisArgument, argumentsList) {
		usingI18n();
		if (!translationsReady()) return "";
		return Reflect.apply(target, thisArgument, argumentsList);
	} });
}
function getContext() {
	const i18nextContext = (0, require__plugin_vue_export_helper.vue_exports.inject)(INJECTION_KEY);
	if (!i18nextContext) throw new Error("i18next-vue: Make sure to register the i18next-vue plugin using app.use(...).");
	return i18nextContext;
}
function slotNamePattern(start, end) {
	const pattern = `${start}\\s*([a-z0-9\\-]+)\\s*${end}`;
	return new RegExp(pattern, "gi");
}
var TranslationComponent = (0, require__plugin_vue_export_helper.vue_exports.defineComponent)({
	props: { translation: {
		type: String,
		required: true
	} },
	setup(props, { slots }) {
		const { slotPattern } = getContext();
		return () => {
			const translation = props.translation;
			const result = [];
			let match;
			let lastIndex = 0;
			while ((match = slotPattern.exec(translation)) !== null) {
				result.push(translation.substring(lastIndex, match.index));
				const slot = slots[match[1]];
				if (slot) result.push(...slot());
				else result.push(match[0]);
				lastIndex = slotPattern.lastIndex;
			}
			result.push(translation.substring(lastIndex));
			return result;
		};
	}
});
//#endregion
//#region src/server.js
async function render(url, data, manifest, i18next) {
	const { app, router, pinia } = createApp(url, data);
	const unhead = /* @__PURE__ */ createHead();
	app.use(unhead);
	app.use(install, { i18next });
	app.config.globalProperties.initialData = data;
	router.push(url).then();
	await router.isReady();
	const ctx = {};
	const html = await (0, require__plugin_vue_export_helper.server_renderer_exports.renderToString)(app, ctx);
	const head = await /* @__PURE__ */ renderSSRHead(unhead);
	const links = renderPreloadLinks(ctx.modules, manifest);
	const state = pinia.state.value["state"];
	state.components = {};
	state.viewData.viewComponent = null;
	return {
		head,
		links,
		html,
		state
	};
}
function renderPreloadLinks(modules, manifest) {
	let links = "";
	const seen = /* @__PURE__ */ new Set();
	modules.forEach((id) => {
		const files = manifest[id];
		if (files) files.forEach((file) => {
			if (!seen.has(file)) {
				seen.add(file);
				const filename = (0, node_path.basename)(file);
				if (manifest[filename]) for (const depFile of manifest[filename]) {
					links += renderPreloadLink(depFile);
					seen.add(depFile);
				}
				links += renderPreloadLink(file);
			}
		});
	});
	return links;
}
function renderPreloadLink(file) {
	if (file.endsWith(".js")) return `<link rel="modulepreload" crossorigin href="${file}">`;
	else if (file.endsWith(".css")) return `<link rel="stylesheet" href="${file}">`;
	else if (file.endsWith(".woff")) return `<link rel="preload" href="${file}" as="font" type="font/woff" crossorigin>`;
	else if (file.endsWith(".woff2")) return `<link rel="preload" href="${file}" as="font" type="font/woff2" crossorigin>`;
	else if (file.endsWith(".gif")) return `<link rel="preload" href="${file}" as="image" type="image/gif">`;
	else if (file.endsWith(".jpg") || file.endsWith(".jpeg")) return `<link rel="preload" href="${file}" as="image" type="image/jpeg">`;
	else if (file.endsWith(".png")) return `<link rel="preload" href="${file}" as="image" type="image/png">`;
	else return "";
}
//#endregion
exports.GlobalEvents = GlobalEvents;
exports.Ke = Ke;
exports.alert_default = alert_default;
exports.checkBox_default = checkBox_default;
exports.common_default = common_default;
exports.escapeHtml = escapeHtml;
exports.formatDate = formatDate;
exports.generalButton_default = generalButton_default;
exports.isMobile = isMobile;
exports.localDate_default = localDate_default;
exports.modal_default = modal_default;
exports.nuxtLink_default = nuxtLink_default;
exports.render = render;
exports.seedLinkButton_default = seedLinkButton_default;
exports.selectMenu_default = selectMenu_default;
exports.sha256 = sha256;
exports.unescapeHtml = unescapeHtml;
