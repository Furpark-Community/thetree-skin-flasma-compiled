const require__plugin_vue_export_helper = require("./_plugin-vue_export-helper-C1TPHJvg.cjs");
const require_server = require("../server.cjs");
const require_seedForm = require("./seedForm-DLpXnK6K.cjs");
const require_prevNextBtn = require("./prevNextBtn-BuquZ4_C.cjs");
//#region src/components/backlinkNamespaceSelector.vue
var _sfc_main$1 = {
	components: {
		SeedForm: require_seedForm.seedForm_default,
		SelectMenu: require_server.selectMenu_default,
		GeneralButton: require_server.generalButton_default
	},
	props: { namespaces: {
		type: Array,
		required: true
	} }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_SeedForm = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("SeedForm");
	const _component_SelectMenu = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("SelectMenu");
	const _component_GeneralButton = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("GeneralButton");
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedForm, (0, require__plugin_vue_export_helper.vue_exports.mergeProps)({
		flex: "",
		box: ""
	}, _attrs), {
		default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push(`<label for="namespaceSelect" data-v-137d2af1${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("components.backlink_namespace_selector.namespace"))}</label>`);
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SelectMenu, {
					id: "namespaceSelect",
					name: "namespace",
					value: _ctx.$route.query.namespace || $props.namespaces[0]?.namespace
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) {
							_push(`<!--[-->`);
							(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderList)($props.namespaces, (ns) => {
								_push(`<option${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttr)("value", ns.namespace)} data-v-137d2af1${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(ns.namespace)} (${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(ns.count)})</option>`);
							});
							_push(`<!--]-->`);
						} else return [((0, require__plugin_vue_export_helper.vue_exports.openBlock)(true), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(require__plugin_vue_export_helper.vue_exports.Fragment, null, (0, require__plugin_vue_export_helper.vue_exports.renderList)($props.namespaces, (ns) => {
							return (0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)("option", { value: ns.namespace }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(ns.namespace) + " (" + (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(ns.count) + ")", 9, ["value"]);
						}), 256))];
					}),
					_: 1
				}, _parent, _scopeId));
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SelectMenu, {
					name: "flag",
					value: _ctx.$route.query.flag || 0
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push(`<option value="0" data-v-137d2af1${_scopeId}>(${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("components.backlink_namespace_selector.all"))})</option><option value="1" data-v-137d2af1${_scopeId}>link</option><option value="2" data-v-137d2af1${_scopeId}>file</option><option value="4" data-v-137d2af1${_scopeId}>include</option><option value="8" data-v-137d2af1${_scopeId}>redirect</option>`);
						else return [
							(0, require__plugin_vue_export_helper.vue_exports.createVNode)("option", { value: "0" }, "(" + (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("components.backlink_namespace_selector.all")) + ")", 1),
							(0, require__plugin_vue_export_helper.vue_exports.createVNode)("option", { value: "1" }, "link"),
							(0, require__plugin_vue_export_helper.vue_exports.createVNode)("option", { value: "2" }, "file"),
							(0, require__plugin_vue_export_helper.vue_exports.createVNode)("option", { value: "4" }, "include"),
							(0, require__plugin_vue_export_helper.vue_exports.createVNode)("option", { value: "8" }, "redirect")
						];
					}),
					_: 1
				}, _parent, _scopeId));
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_GeneralButton, {
					type: "submit",
					theme: "primary"
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("components.backlink_namespace_selector.submit"))}`);
						else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("components.backlink_namespace_selector.submit")), 1)];
					}),
					_: 1
				}, _parent, _scopeId));
			} else return [
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("label", { for: "namespaceSelect" }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("components.backlink_namespace_selector.namespace")), 1),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SelectMenu, {
					id: "namespaceSelect",
					name: "namespace",
					value: _ctx.$route.query.namespace || $props.namespaces[0]?.namespace
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [((0, require__plugin_vue_export_helper.vue_exports.openBlock)(true), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(require__plugin_vue_export_helper.vue_exports.Fragment, null, (0, require__plugin_vue_export_helper.vue_exports.renderList)($props.namespaces, (ns) => {
						return (0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)("option", { value: ns.namespace }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(ns.namespace) + " (" + (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(ns.count) + ")", 9, ["value"]);
					}), 256))]),
					_: 1
				}, 8, ["value"]),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SelectMenu, {
					name: "flag",
					value: _ctx.$route.query.flag || 0
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [
						(0, require__plugin_vue_export_helper.vue_exports.createVNode)("option", { value: "0" }, "(" + (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("components.backlink_namespace_selector.all")) + ")", 1),
						(0, require__plugin_vue_export_helper.vue_exports.createVNode)("option", { value: "1" }, "link"),
						(0, require__plugin_vue_export_helper.vue_exports.createVNode)("option", { value: "2" }, "file"),
						(0, require__plugin_vue_export_helper.vue_exports.createVNode)("option", { value: "4" }, "include"),
						(0, require__plugin_vue_export_helper.vue_exports.createVNode)("option", { value: "8" }, "redirect")
					]),
					_: 1
				}, 8, ["value"]),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_GeneralButton, {
					type: "submit",
					theme: "primary"
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("components.backlink_namespace_selector.submit")), 1)]),
					_: 1
				})
			];
		}),
		_: 1
	}, _parent));
}
var _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
	const ssrContext = (0, require__plugin_vue_export_helper.vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/backlinkNamespaceSelector.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var backlinkNamespaceSelector_default = /*#__PURE__*/ require__plugin_vue_export_helper._plugin_vue_export_helper_default(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-137d2af1"]]);
//#endregion
//#region src/views/contents/document/backlink.vue
var _sfc_main = {
	mixins: [require_server.common_default],
	components: {
		SeedForm: require_seedForm.seedForm_default,
		GeneralButton: require_server.generalButton_default,
		PrevNextBtn: require_prevNextBtn.prevNextBtn_default,
		SelectMenu: require_server.selectMenu_default,
		BacklinkNamespaceSelector: backlinkNamespaceSelector_default,
		NuxtLink: require_server.nuxtLink_default
	},
	computed: { pageProps() {
		const prevItem = this.data.prevItem;
		const nextItem = this.data.nextItem;
		return {
			prev: prevItem ? { query: { until: prevItem.title } } : null,
			next: nextItem ? { query: { from: nextItem.title } } : null
		};
	} }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_BacklinkNamespaceSelector = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("BacklinkNamespaceSelector");
	const _component_PrevNextBtn = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("PrevNextBtn");
	const _component_NuxtLink = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("NuxtLink");
	_push(`<!--[-->`);
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_BacklinkNamespaceSelector, { namespaces: _ctx.data.namespaceCounts }, null, _parent));
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_PrevNextBtn, (0, require__plugin_vue_export_helper.vue_exports.mergeProps)({ flex: "" }, $options.pageProps), null, _parent));
	if (Object.keys(_ctx.data.backlinksPerChar).length) {
		_push(`<div class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)({ "many-wrapper": Object.keys(_ctx.data.backlinksPerChar).length >= 3 })}" data-v-df05eabb><!--[-->`);
		(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderList)(_ctx.data.backlinksPerChar, (documents, char) => {
			_push(`<div data-v-df05eabb><h3 data-v-df05eabb>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(char)}</h3><ul data-v-df05eabb><!--[-->`);
			(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderList)(documents, (doc) => {
				_push(`<li data-v-df05eabb>`);
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_NuxtLink, { to: _ctx.doc_action_link(doc.parsedName, "w") }, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.doc_fulltitle(doc.parsedName))}`);
						else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.doc_fulltitle(doc.parsedName)), 1)];
					}),
					_: 2
				}, _parent));
				_push(` (${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(doc.flags.map((a) => ({
					1: "link",
					2: "file",
					4: "include",
					8: "redirect"
				})[a]).join(", "))}) </li>`);
			});
			_push(`<!--]--></ul></div>`);
		});
		_push(`<!--]--></div>`);
	} else _push(`<div data-v-df05eabb>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.backlink.no_backlink"))}</div>`);
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_PrevNextBtn, (0, require__plugin_vue_export_helper.vue_exports.mergeProps)({ flex: "" }, $options.pageProps), null, _parent));
	_push(`<!--]-->`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = (0, require__plugin_vue_export_helper.vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/contents/document/backlink.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var backlink_default = /*#__PURE__*/ require__plugin_vue_export_helper._plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-df05eabb"]]);
//#endregion
exports.default = backlink_default;
