const require__plugin_vue_export_helper = require("./_plugin-vue_export-helper-C1TPHJvg.cjs");
//#region src/components/loading.vue
var _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
	_push(`<div${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttrs)((0, require__plugin_vue_export_helper.vue_exports.mergeProps)({ class: "loading-block" }, _attrs))} data-v-f8aaee0c><!--[-->`);
	(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderList)(12, (i) => {
		_push(`<div data-v-f8aaee0c></div>`);
	});
	_push(`<!--]--></div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = (0, require__plugin_vue_export_helper.vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/loading.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var loading_default = /*#__PURE__*/ require__plugin_vue_export_helper._plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-f8aaee0c"]]);
//#endregion
Object.defineProperty(exports, "loading_default", {
	enumerable: true,
	get: function() {
		return loading_default;
	}
});
