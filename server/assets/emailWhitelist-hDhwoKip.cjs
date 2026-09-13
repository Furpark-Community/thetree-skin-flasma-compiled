const require__plugin_vue_export_helper = require("./_plugin-vue_export-helper-C1TPHJvg.cjs");
//#region src/components/emailWhitelist.vue
var _sfc_main = { props: { domains: {
	type: Array,
	required: true
} } };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	if ($props.domains.length) {
		_push(`<!--[--><p>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("components.email_whitelist.text_1"))} <br>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("components.email_whitelist.text_2"))}</p><ul><!--[-->`);
		(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderList)($props.domains, (domain) => {
			_push(`<li>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(domain)}</li>`);
		});
		_push(`<!--]--></ul><!--]-->`);
	} else _push(`<!---->`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = (0, require__plugin_vue_export_helper.vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/emailWhitelist.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var emailWhitelist_default = /*#__PURE__*/ require__plugin_vue_export_helper._plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
//#endregion
Object.defineProperty(exports, "emailWhitelist_default", {
	enumerable: true,
	get: function() {
		return emailWhitelist_default;
	}
});
