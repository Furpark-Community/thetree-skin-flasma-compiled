const require__plugin_vue_export_helper = require("./_plugin-vue_export-helper-C1TPHJvg.cjs");
//#region src/views/contents/document/diff.vue
var _sfc_main = {
	components: { Diff: require("./diff-BCMxBxY-.cjs").diff_default },
	data() {
		return this.$store.state.viewData;
	}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)((0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("Diff", true), (0, require__plugin_vue_export_helper.vue_exports.mergeProps)({
		title: `r${_ctx.oldRev} vs r${_ctx.rev}`,
		diffHtml: _ctx.diff.diffHtml
	}, _attrs), null, _parent));
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = (0, require__plugin_vue_export_helper.vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/contents/document/diff.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var diff_default = /*#__PURE__*/ require__plugin_vue_export_helper._plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
//#endregion
exports.default = diff_default;
