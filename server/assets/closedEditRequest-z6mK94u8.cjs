const require__plugin_vue_export_helper = require("./_plugin-vue_export-helper-C1TPHJvg.cjs");
//#region src/views/contents/document/closedEditRequest.vue
var _sfc_main = { components: { NuxtLink: require("../server.cjs").nuxtLink_default } };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_NuxtLink = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("NuxtLink");
	_push(`<ul${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttrs)(_attrs)} data-v-7669e0b1><!--[-->`);
	(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderList)(_ctx.data.editRequests, (item) => {
		_push(`<li data-v-7669e0b1>`);
		_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_NuxtLink, { to: "/edit_request/" + item.url }, {
			default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
				if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.user_contribution.edit_request_link", { slug: item.url }))}`);
				else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.user_contribution.edit_request_link", { slug: item.url })), 1)];
			}),
			_: 2
		}, _parent));
		_push(`</li>`);
	});
	_push(`<!--]--></ul>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = (0, require__plugin_vue_export_helper.vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/contents/document/closedEditRequest.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var closedEditRequest_default = /*#__PURE__*/ require__plugin_vue_export_helper._plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-7669e0b1"]]);
//#endregion
exports.default = closedEditRequest_default;
