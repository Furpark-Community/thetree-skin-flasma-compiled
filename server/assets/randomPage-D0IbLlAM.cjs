const require__plugin_vue_export_helper = require("./_plugin-vue_export-helper-C1TPHJvg.cjs");
const require_server = require("../server.cjs");
const require_namespaceSelector = require("./namespaceSelector-KA3qVwAd.cjs");
//#region src/views/contents/special/randomPage.vue
var _sfc_main = {
	mixins: [require_server.common_default],
	components: {
		NuxtLink: require_server.nuxtLink_default,
		NamespaceSelector: require_namespaceSelector.namespaceSelector_default
	}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_NamespaceSelector = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("NamespaceSelector");
	const _component_NuxtLink = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("NuxtLink");
	_push(`<!--[-->`);
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_NamespaceSelector, null, null, _parent));
	_push(`<ul data-v-52775197><!--[-->`);
	(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderList)(_ctx.data.docs, (item) => {
		_push(`<li data-v-52775197>`);
		_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_NuxtLink, { to: _ctx.doc_action_link(item, "w") }, {
			default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
				if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.doc_fulltitle(item))}`);
				else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.doc_fulltitle(item)), 1)];
			}),
			_: 2
		}, _parent));
		_push(`</li>`);
	});
	_push(`<!--]--></ul><!--]-->`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = (0, require__plugin_vue_export_helper.vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/contents/special/randomPage.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var randomPage_default = /*#__PURE__*/ require__plugin_vue_export_helper._plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-52775197"]]);
//#endregion
exports.default = randomPage_default;
