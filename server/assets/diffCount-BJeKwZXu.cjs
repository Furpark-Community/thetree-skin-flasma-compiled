const require__plugin_vue_export_helper = require("./_plugin-vue_export-helper-C1TPHJvg.cjs");
//#region src/components/diffCount.vue
var _sfc_main = {
	props: { count: {
		type: Number,
		required: true,
		default: 0
	} },
	computed: { countStr() {
		return this.count > 0 ? "+" + this.count : this.count;
	} }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	_push(`<span${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttrs)((0, require__plugin_vue_export_helper.vue_exports.mergeProps)({ class: {
		plus: $props.count > 0,
		minus: $props.count < 0
	} }, _attrs))} data-v-4bae4800>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)($options.countStr)}</span>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = (0, require__plugin_vue_export_helper.vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/diffCount.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var diffCount_default = /*#__PURE__*/ require__plugin_vue_export_helper._plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-4bae4800"]]);
//#endregion
Object.defineProperty(exports, "diffCount_default", {
	enumerable: true,
	get: function() {
		return diffCount_default;
	}
});
