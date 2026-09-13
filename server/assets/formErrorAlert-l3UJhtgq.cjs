const require__plugin_vue_export_helper = require("./_plugin-vue_export-helper-C1TPHJvg.cjs");
//#region src/components/form/formErrorAlert.vue
var _sfc_main = {
	components: { Alert: require("../server.cjs").alert_default },
	computed: { errorAlert() {
		return this.$store.state.viewData.errorAlert;
	} },
	watch: {
		errorAlert() {
			this.$store.state.viewData.errorAlertExists = true;
		},
		"$store.state.viewData.errorAlertExists"() {
			this.$store.state.viewData.errorAlertExists = true;
		}
	}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_Alert = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("Alert");
	if ($options.errorAlert) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_Alert, (0, require__plugin_vue_export_helper.vue_exports.mergeProps)({
		error: "",
		class: "error-alert"
	}, _attrs), {
		default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
			if (_push) _push(`<b data-v-9332acb2${_scopeId}>[${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("components.form_error_alert.error"))}]</b>  <span data-v-9332acb2${_scopeId}>${$options.errorAlert ?? ""}</span>`);
			else return [
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("b", null, "[" + (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("components.form_error_alert.error")) + "]", 1),
				(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)(" \xA0"),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("span", { innerHTML: $options.errorAlert }, null, 8, ["innerHTML"])
			];
		}),
		_: 1
	}, _parent));
	else _push(`<!---->`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = (0, require__plugin_vue_export_helper.vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/form/formErrorAlert.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var formErrorAlert_default = /*#__PURE__*/ require__plugin_vue_export_helper._plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-9332acb2"]]);
//#endregion
Object.defineProperty(exports, "formErrorAlert_default", {
	enumerable: true,
	get: function() {
		return formErrorAlert_default;
	}
});
