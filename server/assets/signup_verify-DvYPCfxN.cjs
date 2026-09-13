const require__plugin_vue_export_helper = require("./_plugin-vue_export-helper-C1TPHJvg.cjs");
const require_server = require("../server.cjs");
const require_seedForm = require("./seedForm-DLpXnK6K.cjs");
const require_showError = require("./showError-A8EkGqzL.cjs");
const require_formErrorAlert = require("./formErrorAlert-l3UJhtgq.cjs");
const require_seedFormBlock = require("./seedFormBlock-C_WGpUCH.cjs");
const require_inputField = require("./inputField-DBSQICqU.cjs");
const require_SearchableSelect = require("./SearchableSelect-CJcVzQ_Q.cjs");
var signup_verify_vue_vue_type_style_index_0_lang_module_default = {
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
//#region src/views/contents/member/signup_verify.vue
var _sfc_main = {
	components: {
		FormErrorAlert: require_formErrorAlert.formErrorAlert_default,
		GeneralButton: require_server.generalButton_default,
		SearchableSelect: require_SearchableSelect.SearchableSelect_default,
		ShowError: require_showError.showError_default,
		InputField: require_inputField.inputField_default,
		SeedFormBlock: require_seedFormBlock.seedFormBlock_default,
		SeedForm: require_seedForm.seedForm_default
	},
	data() {
		return { countryCode: null };
	},
	mounted() {
		this.init();
	},
	watch: { $route() {
		this.init();
	} },
	computed: { countryCodes() {
		return this.data.countryCodes.map((code) => ({
			label: `${code.name} (+${code.dialCode})`,
			value: code.code
		}));
	} },
	methods: { init() {
		const defaultCountryCode = this.countryCodes.find((a) => a.value === this.data.countryCode);
		if (defaultCountryCode) this.countryCode = defaultCountryCode;
	} }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_FormErrorAlert = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("FormErrorAlert");
	const _component_SeedForm = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("SeedForm");
	const _component_SeedFormBlock = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("SeedFormBlock");
	const _component_SearchableSelect = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("SearchableSelect");
	const _component_ShowError = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("ShowError");
	const _component_InputField = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("InputField");
	const _component_GeneralButton = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("GeneralButton");
	_push(`<!--[-->`);
	if (_ctx.data.note) _push(`<p data-v-eeb7efc4>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.signup_verify.message", { note: _ctx.data.note }))}</p>`);
	else _push(`<!---->`);
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_FormErrorAlert, null, null, _parent));
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedForm, {
		class: _ctx.$style.form,
		method: "post"
	}, {
		default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedFormBlock, {
					newStyle: "",
					label: _ctx.$t("views.signup_verify.phone"),
					inputId: "phoneNumberInput",
					name: "phoneNumber"
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) {
							_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SearchableSelect, {
								name: "countryCode",
								options: $options.countryCodes,
								modelValue: $data.countryCode,
								"onUpdate:modelValue": ($event) => $data.countryCode = $event
							}, null, _parent, _scopeId));
							_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_ShowError, {
								tag: "countryCode",
								class: _ctx.$style.text
							}, null, _parent, _scopeId));
							_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_InputField, {
								pattern: "\\d*",
								type: "text",
								id: "phoneNumberInput",
								name: "phoneNumber"
							}, null, _parent, _scopeId));
						} else return [
							(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SearchableSelect, {
								name: "countryCode",
								options: $options.countryCodes,
								modelValue: $data.countryCode,
								"onUpdate:modelValue": ($event) => $data.countryCode = $event
							}, null, 8, [
								"options",
								"modelValue",
								"onUpdate:modelValue"
							]),
							(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_ShowError, {
								tag: "countryCode",
								class: _ctx.$style.text
							}, null, 8, ["class"]),
							(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_InputField, {
								pattern: "\\d*",
								type: "text",
								id: "phoneNumberInput",
								name: "phoneNumber"
							})
						];
					}),
					_: 1
				}, _parent, _scopeId));
				if (_ctx.data.verifyText) _push(`<p class="verify-text" data-v-eeb7efc4${_scopeId}>${_ctx.data.verifyText ?? ""}</p>`);
				else _push(`<!---->`);
				_push(`<div class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)([_ctx.$style.form__row, _ctx.$style["form__row--buttons"]])}" data-v-eeb7efc4${_scopeId}><div class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)(_ctx.$style.form__buttons)}" data-v-eeb7efc4${_scopeId}>`);
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_GeneralButton, {
					class: _ctx.$style.button,
					theme: "primary",
					type: "submit"
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.signup_verify.submit"))}`);
						else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.signup_verify.submit")), 1)];
					}),
					_: 1
				}, _parent, _scopeId));
				_push(`</div></div>`);
			} else return [
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedFormBlock, {
					newStyle: "",
					label: _ctx.$t("views.signup_verify.phone"),
					inputId: "phoneNumberInput",
					name: "phoneNumber"
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [
						(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SearchableSelect, {
							name: "countryCode",
							options: $options.countryCodes,
							modelValue: $data.countryCode,
							"onUpdate:modelValue": ($event) => $data.countryCode = $event
						}, null, 8, [
							"options",
							"modelValue",
							"onUpdate:modelValue"
						]),
						(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_ShowError, {
							tag: "countryCode",
							class: _ctx.$style.text
						}, null, 8, ["class"]),
						(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_InputField, {
							pattern: "\\d*",
							type: "text",
							id: "phoneNumberInput",
							name: "phoneNumber"
						})
					]),
					_: 1
				}, 8, ["label"]),
				_ctx.data.verifyText ? ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)("p", {
					key: 0,
					innerHTML: _ctx.data.verifyText,
					class: "verify-text"
				}, null, 8, ["innerHTML"])) : (0, require__plugin_vue_export_helper.vue_exports.createCommentVNode)("", true),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: [_ctx.$style.form__row, _ctx.$style["form__row--buttons"]] }, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: _ctx.$style.form__buttons }, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_GeneralButton, {
					class: _ctx.$style.button,
					theme: "primary",
					type: "submit"
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.signup_verify.submit")), 1)]),
					_: 1
				}, 8, ["class"])], 2)], 2)
			];
		}),
		_: 1
	}, _parent));
	_push(`<!--]-->`);
}
var cssModules = { "$style": signup_verify_vue_vue_type_style_index_0_lang_module_default };
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = (0, require__plugin_vue_export_helper.vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/contents/member/signup_verify.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var signup_verify_default = /*#__PURE__*/ require__plugin_vue_export_helper._plugin_vue_export_helper_default(_sfc_main, [
	["ssrRender", _sfc_ssrRender],
	["__cssModules", cssModules],
	["__scopeId", "data-v-eeb7efc4"]
]);
//#endregion
exports.default = signup_verify_default;
