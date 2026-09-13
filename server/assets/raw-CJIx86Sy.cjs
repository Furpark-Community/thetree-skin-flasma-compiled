const require__plugin_vue_export_helper = require("./_plugin-vue_export-helper-C1TPHJvg.cjs");
//#region src/views/contents/document/raw.vue
var _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
	let _temp0;
	_push(`<textarea${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttrs)(_temp0 = (0, require__plugin_vue_export_helper.vue_exports.mergeProps)({
		readonly: "",
		value: _ctx.data.content
	}, _attrs), "textarea")} data-v-8730be9a>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)("value" in _temp0 ? _temp0.value : "")}</textarea>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = (0, require__plugin_vue_export_helper.vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/contents/document/raw.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var raw_default = /*#__PURE__*/ require__plugin_vue_export_helper._plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-8730be9a"]]);
//#endregion
exports.default = raw_default;
