const require__plugin_vue_export_helper = require("./_plugin-vue_export-helper-C1TPHJvg.cjs");
//#region src/components/showError.vue
var _sfc_main = {
	props: { tag: {
		type: String,
		required: true
	} },
	computed: { error() {
		return this.tag && this.$store.state.viewData.fieldErrors?.[this.tag];
	} }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	if ($options.error) _push(`<p${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttrs)(_attrs)} data-v-906cefb2>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)($options.error.msg)}</p>`);
	else _push(`<!---->`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = (0, require__plugin_vue_export_helper.vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/showError.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var showError_default = /*#__PURE__*/ require__plugin_vue_export_helper._plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-906cefb2"]]);
//#endregion
Object.defineProperty(exports, "showError_default", {
	enumerable: true,
	get: function() {
		return showError_default;
	}
});
