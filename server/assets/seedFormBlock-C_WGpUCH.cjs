const require__plugin_vue_export_helper = require("./_plugin-vue_export-helper-C1TPHJvg.cjs");
const require_showError = require("./showError-A8EkGqzL.cjs");
var seedFormBlock_vue_vue_type_style_index_0_lang_module_default = {
	form: "_form_ptsbf_1",
	"form--large": "_form--large_ptsbf_1",
	"form--full": "_form--full_ptsbf_1",
	form__row: "_form__row_ptsbf_1",
	"form__row--self-center": "_form__row--self-center_ptsbf_1",
	"form__row--center": "_form__row--center_ptsbf_1",
	"form__row--between": "_form__row--between_ptsbf_1",
	"form__row--gap": "_form__row--gap_ptsbf_1",
	"form__row--links": "_form__row--links_ptsbf_1",
	"form__row--buttons": "_form__row--buttons_ptsbf_1",
	"form__row--block-buttons": "_form__row--block-buttons_ptsbf_1",
	"form--row-bordered": "_form--row-bordered_ptsbf_1",
	"form__row-inner": "_form__row-inner_ptsbf_1",
	"form__section-title": "_form__section-title_ptsbf_1",
	"form__icon-row": "_form__icon-row_ptsbf_1",
	form__buttons: "_form__buttons_ptsbf_1",
	icon: "_icon_ptsbf_1",
	text: "_text_ptsbf_1",
	"text--help": "_text--help_ptsbf_1",
	"text--error": "_text--error_ptsbf_1",
	list: "_list_ptsbf_1",
	link: "_link_ptsbf_1",
	button: "_button_ptsbf_1",
	"block-button": "_block-button_ptsbf_1",
	"block-button__icon": "_block-button__icon_ptsbf_1",
	"block-button__content": "_block-button__content_ptsbf_1",
	"block-button__description": "_block-button__description_ptsbf_1",
	"block-button__chevron": "_block-button__chevron_ptsbf_1"
};
//#endregion
//#region src/components/form/seedFormBlock.vue
var _sfc_main = {
	components: { ShowError: require_showError.showError_default },
	props: {
		inputId: String,
		name: String,
		label: String,
		newStyle: Boolean
	}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_ShowError = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("ShowError");
	_push(`<div${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttrs)((0, require__plugin_vue_export_helper.vue_exports.mergeProps)({ class: { [_ctx.$style.form__row]: $props.newStyle } }, _attrs))} data-v-60c8c0be>`);
	if ($props.label) _push(`<label${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttr)("for", $props.inputId)} data-v-60c8c0be>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)($props.label)}</label>`);
	else _push(`<!---->`);
	(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "default", {}, null, _push, _parent);
	if ($props.name) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_ShowError, {
		tag: $props.name,
		class: { [_ctx.$style.text]: $props.newStyle }
	}, null, _parent));
	else _push(`<!---->`);
	_push(`</div>`);
}
var cssModules = { "$style": seedFormBlock_vue_vue_type_style_index_0_lang_module_default };
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = (0, require__plugin_vue_export_helper.vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/form/seedFormBlock.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var seedFormBlock_default = /*#__PURE__*/ require__plugin_vue_export_helper._plugin_vue_export_helper_default(_sfc_main, [
	["ssrRender", _sfc_ssrRender],
	["__cssModules", cssModules],
	["__scopeId", "data-v-60c8c0be"]
]);
//#endregion
Object.defineProperty(exports, "seedFormBlock_default", {
	enumerable: true,
	get: function() {
		return seedFormBlock_default;
	}
});
