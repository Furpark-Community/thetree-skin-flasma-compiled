const require__plugin_vue_export_helper = require("./_plugin-vue_export-helper-C1TPHJvg.cjs");
//#region src/components/diff.vue
var _sfc_main = { props: {
	title: String,
	diffHtml: {
		type: String,
		required: true
	}
} };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	_push(`<table${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttrs)((0, require__plugin_vue_export_helper.vue_exports.mergeProps)({ class: "diff-table" }, _attrs))} data-v-40501dd8>`);
	if ($props.title) _push(`<thead data-v-40501dd8><tr data-v-40501dd8><th data-v-40501dd8></th><th data-v-40501dd8></th><th class="texttitle" data-v-40501dd8>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)($props.title)}</th></tr></thead>`);
	else _push(`<!---->`);
	_push(`<tbody data-v-40501dd8>${$props.diffHtml ?? ""}</tbody></table>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = (0, require__plugin_vue_export_helper.vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/diff.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var diff_default = /*#__PURE__*/ require__plugin_vue_export_helper._plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-40501dd8"]]);
//#endregion
Object.defineProperty(exports, "diff_default", {
	enumerable: true,
	get: function() {
		return diff_default;
	}
});
