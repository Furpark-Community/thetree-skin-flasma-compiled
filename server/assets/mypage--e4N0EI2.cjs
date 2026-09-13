const require__plugin_vue_export_helper = require("./_plugin-vue_export-helper-C1TPHJvg.cjs");
const require_server = require("../server.cjs");
const require_seedForm = require("./seedForm-DLpXnK6K.cjs");
const require_seedButton = require("./seedButton-CbrSfLgh.cjs");
const require_formErrorAlert = require("./formErrorAlert-l3UJhtgq.cjs");
const require_seedFormBlock = require("./seedFormBlock-C_WGpUCH.cjs");
const require_inputField = require("./inputField-DBSQICqU.cjs");
const require_seedFormInput = require("./seedFormInput-BLNL06fg.cjs");
const require_esm = require("./esm-B3gcMG7Q.cjs");
var apiTokenModal_vue_vue_type_style_index_0_lang_module_default = {
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
//#region src/components/apiTokenModal.vue
var _sfc_main$1 = {
	components: {
		GeneralButton: require_server.generalButton_default,
		InputField: require_inputField.inputField_default,
		Modal: require_server.modal_default,
		FormErrorAlert: require_formErrorAlert.formErrorAlert_default,
		SeedButton: require_seedButton.seedButton_default,
		SeedForm: require_seedForm.seedForm_default,
		SeedFormBlock: require_seedFormBlock.seedFormBlock_default,
		SeedFormInput: require_seedFormInput.seedFormInput_default
	},
	computed: { apiToken() {
		return this.$store.state.viewData.apiToken;
	} },
	methods: {
		closed() {
			this.$store.state.viewData.apiToken = null;
		},
		copyToken() {
			navigator.clipboard.writeText(this.apiToken);
			require_server.Ke(this.$t("components.api_token_modal.copied_token"));
		}
	}
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_Modal = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("Modal");
	const _component_FormErrorAlert = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("FormErrorAlert");
	const _component_SeedForm = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("SeedForm");
	const _component_InputField = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("InputField");
	const _component_GeneralButton = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("GeneralButton");
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_Modal, (0, require__plugin_vue_export_helper.vue_exports.mergeProps)({ onClosed: $options.closed }, _attrs), {
		default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((props, _push, _parent, _scopeId) => {
			if (_push) {
				_push(`<div class="modal-block" data-v-c490d0e2${_scopeId}><div class="modal-title" data-v-c490d0e2${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("components.api_token_modal.title"))}</div>`);
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_FormErrorAlert, null, null, _parent, _scopeId));
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedForm, {
					method: "post",
					action: "/member/generate_api_token",
					class: [_ctx.$style.form, _ctx.$style["form--full"]]
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) if ($options.apiToken) {
							_push(`<!--[--><div class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)(_ctx.$style.form__row)}" data-v-c490d0e2${_scopeId}>`);
							_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_InputField, {
								multiline: "",
								readonly: "",
								class: "token-textarea",
								value: $options.apiToken
							}, null, _parent, _scopeId));
							_push(`</div><div class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)(_ctx.$style.form__row)}" data-v-c490d0e2${_scopeId}><ul class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)(_ctx.$style.list)}" data-v-c490d0e2${_scopeId}><li data-v-c490d0e2${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("components.api_token_modal.cant_see_again"))}</li><li data-v-c490d0e2${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("components.api_token_modal.token_like_pw"))}</li></ul></div><div class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)([_ctx.$style.form__row, _ctx.$style["form__row--buttons"]])}" data-v-c490d0e2${_scopeId}><div class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)(_ctx.$style.form__buttons)}" data-v-c490d0e2${_scopeId}>`);
							_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_GeneralButton, { whenClick: $options.copyToken }, {
								default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
									if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("components.api_token_modal.copy"))}`);
									else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("components.api_token_modal.copy")), 1)];
								}),
								_: 2
							}, _parent, _scopeId));
							_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_GeneralButton, {
								class: _ctx.$style.button,
								whenClick: props.close
							}, {
								default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
									if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("components.api_token_modal.close"))}`);
									else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("components.api_token_modal.close")), 1)];
								}),
								_: 2
							}, _parent, _scopeId));
							_push(`</div></div><!--]-->`);
						} else {
							_push(`<!--[--><div class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)(_ctx.$style.form__row)}" data-v-c490d0e2${_scopeId}><label for="passwordInput" data-v-c490d0e2${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("components.api_token_modal.password"))}</label>`);
							_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_InputField, {
								type: "password",
								id: "passwordInput",
								name: "password"
							}, null, _parent, _scopeId));
							_push(`<p class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)([_ctx.$style.text, _ctx.$style["text--help"]])}" data-v-c490d0e2${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("components.api_token_modal.input_password"))}</p></div><div class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)([_ctx.$style.form__row, _ctx.$style["form__row--buttons"]])}" data-v-c490d0e2${_scopeId}><div class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)(_ctx.$style.form__buttons)}" data-v-c490d0e2${_scopeId}>`);
							_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_GeneralButton, {
								class: _ctx.$style.button,
								whenClick: props.close
							}, {
								default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
									if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("components.api_token_modal.cancel"))}`);
									else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("components.api_token_modal.cancel")), 1)];
								}),
								_: 2
							}, _parent, _scopeId));
							_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_GeneralButton, {
								class: _ctx.$style.button,
								type: "submit",
								theme: "primary"
							}, {
								default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
									if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("components.api_token_modal.submit"))}`);
									else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("components.api_token_modal.submit")), 1)];
								}),
								_: 2
							}, _parent, _scopeId));
							_push(`</div></div><!--]-->`);
						}
						else return [$options.apiToken ? ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(require__plugin_vue_export_helper.vue_exports.Fragment, { key: 0 }, [
							(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: _ctx.$style.form__row }, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_InputField, {
								multiline: "",
								readonly: "",
								class: "token-textarea",
								value: $options.apiToken
							}, null, 8, ["value"])], 2),
							(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: _ctx.$style.form__row }, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("ul", { class: _ctx.$style.list }, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("li", null, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("components.api_token_modal.cant_see_again")), 1), (0, require__plugin_vue_export_helper.vue_exports.createVNode)("li", null, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("components.api_token_modal.token_like_pw")), 1)], 2)], 2),
							(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: [_ctx.$style.form__row, _ctx.$style["form__row--buttons"]] }, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: _ctx.$style.form__buttons }, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_GeneralButton, { whenClick: $options.copyToken }, {
								default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("components.api_token_modal.copy")), 1)]),
								_: 1
							}, 8, ["whenClick"]), (0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_GeneralButton, {
								class: _ctx.$style.button,
								whenClick: props.close
							}, {
								default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("components.api_token_modal.close")), 1)]),
								_: 1
							}, 8, ["class", "whenClick"])], 2)], 2)
						], 64)) : ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(require__plugin_vue_export_helper.vue_exports.Fragment, { key: 1 }, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: _ctx.$style.form__row }, [
							(0, require__plugin_vue_export_helper.vue_exports.createVNode)("label", { for: "passwordInput" }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("components.api_token_modal.password")), 1),
							(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_InputField, {
								type: "password",
								id: "passwordInput",
								name: "password"
							}),
							(0, require__plugin_vue_export_helper.vue_exports.createVNode)("p", { class: [_ctx.$style.text, _ctx.$style["text--help"]] }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("components.api_token_modal.input_password")), 3)
						], 2), (0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: [_ctx.$style.form__row, _ctx.$style["form__row--buttons"]] }, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: _ctx.$style.form__buttons }, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_GeneralButton, {
							class: _ctx.$style.button,
							whenClick: props.close
						}, {
							default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("components.api_token_modal.cancel")), 1)]),
							_: 1
						}, 8, ["class", "whenClick"]), (0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_GeneralButton, {
							class: _ctx.$style.button,
							type: "submit",
							theme: "primary"
						}, {
							default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("components.api_token_modal.submit")), 1)]),
							_: 1
						}, 8, ["class"])], 2)], 2)], 64))];
					}),
					_: 2
				}, _parent, _scopeId));
				_push(`</div>`);
			} else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: "modal-block" }, [
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: "modal-title" }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("components.api_token_modal.title")), 1),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_FormErrorAlert),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedForm, {
					method: "post",
					action: "/member/generate_api_token",
					class: [_ctx.$style.form, _ctx.$style["form--full"]]
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [$options.apiToken ? ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(require__plugin_vue_export_helper.vue_exports.Fragment, { key: 0 }, [
						(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: _ctx.$style.form__row }, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_InputField, {
							multiline: "",
							readonly: "",
							class: "token-textarea",
							value: $options.apiToken
						}, null, 8, ["value"])], 2),
						(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: _ctx.$style.form__row }, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("ul", { class: _ctx.$style.list }, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("li", null, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("components.api_token_modal.cant_see_again")), 1), (0, require__plugin_vue_export_helper.vue_exports.createVNode)("li", null, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("components.api_token_modal.token_like_pw")), 1)], 2)], 2),
						(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: [_ctx.$style.form__row, _ctx.$style["form__row--buttons"]] }, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: _ctx.$style.form__buttons }, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_GeneralButton, { whenClick: $options.copyToken }, {
							default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("components.api_token_modal.copy")), 1)]),
							_: 1
						}, 8, ["whenClick"]), (0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_GeneralButton, {
							class: _ctx.$style.button,
							whenClick: props.close
						}, {
							default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("components.api_token_modal.close")), 1)]),
							_: 1
						}, 8, ["class", "whenClick"])], 2)], 2)
					], 64)) : ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(require__plugin_vue_export_helper.vue_exports.Fragment, { key: 1 }, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: _ctx.$style.form__row }, [
						(0, require__plugin_vue_export_helper.vue_exports.createVNode)("label", { for: "passwordInput" }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("components.api_token_modal.password")), 1),
						(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_InputField, {
							type: "password",
							id: "passwordInput",
							name: "password"
						}),
						(0, require__plugin_vue_export_helper.vue_exports.createVNode)("p", { class: [_ctx.$style.text, _ctx.$style["text--help"]] }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("components.api_token_modal.input_password")), 3)
					], 2), (0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: [_ctx.$style.form__row, _ctx.$style["form__row--buttons"]] }, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: _ctx.$style.form__buttons }, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_GeneralButton, {
						class: _ctx.$style.button,
						whenClick: props.close
					}, {
						default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("components.api_token_modal.cancel")), 1)]),
						_: 1
					}, 8, ["class", "whenClick"]), (0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_GeneralButton, {
						class: _ctx.$style.button,
						type: "submit",
						theme: "primary"
					}, {
						default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("components.api_token_modal.submit")), 1)]),
						_: 1
					}, 8, ["class"])], 2)], 2)], 64))]),
					_: 2
				}, 1032, ["class"])
			])];
		}),
		_: 1
	}, _parent));
}
var cssModules$1 = { "$style": apiTokenModal_vue_vue_type_style_index_0_lang_module_default };
var _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
	const ssrContext = (0, require__plugin_vue_export_helper.vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/apiTokenModal.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var apiTokenModal_default = /*#__PURE__*/ require__plugin_vue_export_helper._plugin_vue_export_helper_default(_sfc_main$1, [
	["ssrRender", _sfc_ssrRender$1],
	["__cssModules", cssModules$1],
	["__scopeId", "data-v-c490d0e2"]
]);
var mypage_vue_vue_type_style_index_0_lang_module_default = {
	form: "_form_q3qj5_1",
	"form--large": "_form--large_q3qj5_1",
	"form--full": "_form--full_q3qj5_1",
	form__row: "_form__row_q3qj5_1",
	"form__row--self-center": "_form__row--self-center_q3qj5_1",
	"form__row--center": "_form__row--center_q3qj5_1",
	"form__row--between": "_form__row--between_q3qj5_1",
	"form__row--gap": "_form__row--gap_q3qj5_1",
	"form__row--links": "_form__row--links_q3qj5_1",
	"form__row--buttons": "_form__row--buttons_q3qj5_1",
	"form__row--block-buttons": "_form__row--block-buttons_q3qj5_1",
	"form--row-bordered": "_form--row-bordered_q3qj5_1",
	"form__row-inner": "_form__row-inner_q3qj5_1",
	"form__section-title": "_form__section-title_q3qj5_1",
	"form__icon-row": "_form__icon-row_q3qj5_1",
	form__buttons: "_form__buttons_q3qj5_1",
	icon: "_icon_q3qj5_1",
	text: "_text_q3qj5_1",
	"text--help": "_text--help_q3qj5_1",
	"text--error": "_text--error_q3qj5_1",
	list: "_list_q3qj5_1",
	link: "_link_q3qj5_1",
	button: "_button_q3qj5_1",
	"block-button": "_block-button_q3qj5_1",
	"block-button__icon": "_block-button__icon_q3qj5_1",
	"block-button__content": "_block-button__content_q3qj5_1",
	"block-button__description": "_block-button__description_q3qj5_1",
	"block-button__chevron": "_block-button__chevron_q3qj5_1",
	table: "_table_q3qj5_1",
	"table--bordered": "_table--bordered_q3qj5_1",
	row: "_row_q3qj5_1",
	"row--head": "_row--head_q3qj5_1",
	column: "_column_q3qj5_1",
	"column--stack": "_column--stack_q3qj5_1",
	"column--button-parent": "_column--button-parent_q3qj5_1",
	"column--single": "_column--single_q3qj5_1",
	"column--full": "_column--full_q3qj5_1"
};
//#endregion
//#region src/views/contents/member/mypage.vue
var _sfc_main = {
	mixins: [require_server.common_default],
	components: {
		CheckBox: require_server.checkBox_default,
		SeedFormBlock: require_seedFormBlock.seedFormBlock_default,
		InputField: require_inputField.inputField_default,
		LocalDate: require_server.localDate_default,
		GeneralButton: require_server.generalButton_default,
		SeedForm: require_seedForm.seedForm_default,
		SelectMenu: require_server.selectMenu_default
	},
	computed: { data() {
		return this.$store.state.viewData;
	} },
	methods: {
		showTokenModal() {
			this.$vfm.show({ component: apiTokenModal_default });
		},
		async addPasskey() {
			const optionsJSON = await this.internalRequest("/member/register_webauthn", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ name: this.$refs.passkeyName.$el.value })
			});
			if (!optionsJSON) return;
			if (optionsJSON.data) return alert(optionsJSON.data);
			let attResp;
			try {
				attResp = await require_esm.startRegistration({ optionsJSON });
			} catch (e) {
				console.error(e);
				alert(e.toString());
				return;
			}
			await this.internalRequestAndProcess("/member/register_webauthn/challenge", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(attResp)
			});
		},
		async deletePasskey(name) {
			await this.internalRequestAndProcess("/member/delete_webauthn", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ name })
			});
		},
		async getDeveloperPerm() {
			const reason = prompt("요청 사유 입력");
			if (!reason) return;
			await this.internalRequestAndProcess("/member/get_developer_perm", {
				method: "POST",
				headers: { "Content-Type": "application/x-www-form-urlencoded" },
				body: new URLSearchParams({ reason }).toString()
			});
		},
		async removeDeveloperPerm() {
			await this.internalRequestAndProcess("/member/remove_developer_perm", { method: "POST" });
		},
		async removeExternalAccount(provider) {
			await this.internalRequestAndProcess(`/member/login/oauth2/${provider}`, {
				method: "DELETE",
				headers: { "Content-Type": "application/json" }
			});
		}
	}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_SeedForm = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("SeedForm");
	const _component_i18next = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("i18next");
	const _component_GeneralButton = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("GeneralButton");
	const _component_FontAwesomeIcon = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("FontAwesomeIcon");
	const _component_SeedFormBlock = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("SeedFormBlock");
	const _component_SelectMenu = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("SelectMenu");
	const _component_LocalDate = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("LocalDate");
	const _component_InputField = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("InputField");
	const _component_CheckBox = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("CheckBox");
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedForm, (0, require__plugin_vue_export_helper.vue_exports.mergeProps)({
		method: "post",
		class: [
			_ctx.$style.form,
			_ctx.$style["form--full"],
			_ctx.$style["form--row-bordered"]
		]
	}, _attrs), {
		default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push(`<div class="mypage-block" data-v-9899bb3e${_scopeId}><div class="avatar-block" data-v-9899bb3e${_scopeId}><img${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttr)("src", _ctx.session.gravatar_url + "&s=512")} class="avatar-image" data-v-9899bb3e${_scopeId}><div class="avatar-description" data-v-9899bb3e${_scopeId}>`);
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_i18next, { translation: _ctx.$t("views.mypage.gravatar") }, {
					gravatar: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push(`<a href="https://gravatar.com" rel="noopener" target="_blank" data-v-9899bb3e${_scopeId}>Gravatar</a>`);
						else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("a", {
							href: "https://gravatar.com",
							rel: "noopener",
							target: "_blank"
						}, "Gravatar")];
					}),
					_: 1
				}, _parent, _scopeId));
				_push(`</div></div><div class="form-block" data-v-9899bb3e${_scopeId}><div class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)(_ctx.$style.form__row)}" data-v-9899bb3e${_scopeId}><div class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)(_ctx.$style["form__row-inner"])}" data-v-9899bb3e${_scopeId}><label for="usernameInput" data-v-9899bb3e${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.mypage.username"))}</label>`);
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_GeneralButton, {
					theme: "link",
					href: "/member/change_name"
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.mypage.change"))}`);
						else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.mypage.change")), 1)];
					}),
					_: 1
				}, _parent, _scopeId));
				_push(`</div><div data-v-9899bb3e${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)($options.data.user.name)}</div></div><div class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)(_ctx.$style.form__row)}" data-v-9899bb3e${_scopeId}><div class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)(_ctx.$style["form__row-inner"])}" data-v-9899bb3e${_scopeId}><label for="emailInput" data-v-9899bb3e${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.mypage.email"))}</label>`);
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_GeneralButton, {
					theme: "link",
					href: "/member/change_email"
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.mypage.change"))}`);
						else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.mypage.change")), 1)];
					}),
					_: 1
				}, _parent, _scopeId));
				_push(`</div><div data-v-9899bb3e${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)($options.data.user.email)}</div></div><div class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)(_ctx.$style.form__row)}" data-v-9899bb3e${_scopeId}><label for="emailInput" data-v-9899bb3e${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.mypage.password"))}</label><div class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)(_ctx.$style["form__row-inner"])}" data-v-9899bb3e${_scopeId}>`);
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_GeneralButton, {
					class: _ctx.$style.button,
					href: "/member/change_password"
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.mypage.change"))}`);
						else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.mypage.change")), 1)];
					}),
					_: 1
				}, _parent, _scopeId));
				_push(`</div></div><div class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)(_ctx.$style.form__row)}" data-v-9899bb3e${_scopeId}><label for="permInput" data-v-9899bb3e${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.mypage.permission"))}</label><div data-v-9899bb3e${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)($options.data.permissions.join(", "))}</div></div>`);
				if ($options.data.verifyEnabled) {
					_push(`<div class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)(_ctx.$style.form__row)}" data-v-9899bb3e${_scopeId}><label for="permInput" data-v-9899bb3e${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.mypage.mobile_verify"))}</label><div class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)(_ctx.$style["form__row-inner"])}" data-v-9899bb3e${_scopeId}>`);
					if ($options.data.permissions.includes("mobile_verified_member")) {
						_push(`<span class="color-text color-text-green" data-v-9899bb3e${_scopeId}>`);
						_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_FontAwesomeIcon, { icon: "fa-circle-check" }, null, _parent, _scopeId));
						_push(` ${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.mypage.mobile_verified"))}</span>`);
					} else _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_GeneralButton, {
						class: _ctx.$style.button,
						href: "/member/signup_verify"
					}, {
						default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
							if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.mypage.mobile_verify_button"))}`);
							else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.mypage.mobile_verify_button")), 1)];
						}),
						_: 1
					}, _parent, _scopeId));
					_push(`</div></div>`);
				} else _push(`<!---->`);
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedFormBlock, {
					newStyle: "",
					class: _ctx.$style.form__row,
					label: _ctx.$t("views.mypage.skin"),
					inputId: "skinSelect"
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) {
							_push(`<div class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)(_ctx.$style["form__row-inner"])}" data-v-9899bb3e${_scopeId}>`);
							_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SelectMenu, {
								id: "skinSelect",
								name: "skin",
								value: $options.data.user.skin
							}, {
								default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
									if (_push) {
										_push(`<option value="default" data-v-9899bb3e${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.mypage.default_skin"))}</option><!--[-->`);
										(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderList)($options.data.skins, (skin) => {
											_push(`<option${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrIncludeBooleanAttr)(skin === $options.data.user.skin) ? " selected" : ""} data-v-9899bb3e${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(skin)}</option>`);
										});
										_push(`<!--]-->`);
									} else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("option", { value: "default" }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.mypage.default_skin")), 1), ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(true), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(require__plugin_vue_export_helper.vue_exports.Fragment, null, (0, require__plugin_vue_export_helper.vue_exports.renderList)($options.data.skins, (skin) => {
										return (0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)("option", { selected: skin === $options.data.user.skin }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(skin), 9, ["selected"]);
									}), 256))];
								}),
								_: 1
							}, _parent, _scopeId));
							_push(`</div>`);
						} else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: _ctx.$style["form__row-inner"] }, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SelectMenu, {
							id: "skinSelect",
							name: "skin",
							value: $options.data.user.skin
						}, {
							default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("option", { value: "default" }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.mypage.default_skin")), 1), ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(true), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(require__plugin_vue_export_helper.vue_exports.Fragment, null, (0, require__plugin_vue_export_helper.vue_exports.renderList)($options.data.skins, (skin) => {
								return (0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)("option", { selected: skin === $options.data.user.skin }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(skin), 9, ["selected"]);
							}), 256))]),
							_: 1
						}, 8, ["value"])], 2)];
					}),
					_: 1
				}, _parent, _scopeId));
				_push(`<div class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)(_ctx.$style.form__row)}" data-v-9899bb3e${_scopeId}><label data-v-9899bb3e${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.mypage.otp"))}</label><div class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)(_ctx.$style["form__row-inner"])}" data-v-9899bb3e${_scopeId}>`);
				if ($options.data.hasTotp) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_GeneralButton, {
					theme: "danger",
					class: _ctx.$style.button,
					href: "/member/deactivate_otp"
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.mypage.deactivate"))}`);
						else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.mypage.deactivate")), 1)];
					}),
					_: 1
				}, _parent, _scopeId));
				else _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_GeneralButton, {
					class: _ctx.$style.button,
					href: "/member/activate_otp"
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.mypage.activate"))}`);
						else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.mypage.activate")), 1)];
					}),
					_: 1
				}, _parent, _scopeId));
				_push(`</div></div>`);
				if ($options.data.externalProviders?.length) {
					_push(`<div class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)(_ctx.$style.form__row)}" data-v-9899bb3e${_scopeId}><label data-v-9899bb3e${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.mypage.connect_external_account"))}</label><div class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)([_ctx.$style.table, _ctx.$style["table--bordered"]])}" data-v-9899bb3e${_scopeId}><div class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)([
						_ctx.$style.row,
						_ctx.$style["row--head"],
						"table-row"
					])}" data-v-9899bb3e${_scopeId}><!--[-->`);
					(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderList)([
						"provider",
						"name",
						"email",
						""
					].map((a) => a && _ctx.$t("views.mypage.external_" + a)), (text) => {
						_push(`<div class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)([_ctx.$style.column, "table-column"])}" data-v-9899bb3e${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(text)}</div>`);
					});
					_push(`<!--]--></div><!--[-->`);
					(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderList)($options.data.externalProviders, (item) => {
						_push(`<div class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)([_ctx.$style.row, "table-row"])}" data-v-9899bb3e${_scopeId}><div class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)([_ctx.$style.column, "table-column"])}" data-v-9899bb3e${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(item.displayName)}</div><div class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)([_ctx.$style.column, "table-column"])}" data-v-9899bb3e${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)($options.data.oauth2Maps[item.name]?.name)}</div><div class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)([_ctx.$style.column, "table-column"])}" data-v-9899bb3e${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)($options.data.oauth2Maps[item.name]?.email)}</div><div class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)([
							_ctx.$style.column,
							_ctx.$style["column--button-parent"],
							"table-column"
						])}" data-v-9899bb3e${_scopeId}>`);
						if ($options.data.oauth2Maps[item.name]) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_GeneralButton, {
							theme: "danger",
							size: "small",
							whenClick: () => $options.removeExternalAccount(item.name)
						}, {
							default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
								if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.mypage.external_remove"))}`);
								else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.mypage.external_remove")), 1)];
							}),
							_: 2
						}, _parent, _scopeId));
						else _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_GeneralButton, {
							theme: "primary",
							size: "small",
							href: "/member/login/oauth2/" + item.name
						}, {
							default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
								if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.mypage.external_add"))}`);
								else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.mypage.external_add")), 1)];
							}),
							_: 2
						}, _parent, _scopeId));
						_push(`</div></div>`);
					});
					_push(`<!--]--></div></div>`);
				} else _push(`<!---->`);
				if ($options.data.hasTotp) {
					_push(`<div class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)(_ctx.$style.form__row)}" data-v-9899bb3e${_scopeId}><label data-v-9899bb3e${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.mypage.passkey"))}</label><div class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)([_ctx.$style.table, _ctx.$style["table--bordered"]])}" data-v-9899bb3e${_scopeId}><div class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)([
						_ctx.$style.row,
						_ctx.$style["row--head"],
						"table-row"
					])}" data-v-9899bb3e${_scopeId}><!--[-->`);
					(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderList)([
						"name",
						"created",
						"last_used",
						""
					].map((a) => a && _ctx.$t("views.mypage.passkey_" + a)), (text) => {
						_push(`<div class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)([_ctx.$style.column, "table-column"])}" data-v-9899bb3e${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(text)}</div>`);
					});
					_push(`<!--]--></div>`);
					if ($options.data.passkeys.length) {
						_push(`<!--[-->`);
						(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderList)($options.data.passkeys, (passkey) => {
							_push(`<div class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)([_ctx.$style.row, "table-row"])}" data-v-9899bb3e${_scopeId}><div class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)([_ctx.$style.column, "table-column"])}" data-v-9899bb3e${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(passkey.name)}</div><div class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)([_ctx.$style.column, "table-column"])}" data-v-9899bb3e${_scopeId}>`);
							_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_LocalDate, { date: passkey.createdAt }, null, _parent, _scopeId));
							_push(`</div><div class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)([_ctx.$style.column, "table-column"])}" data-v-9899bb3e${_scopeId}>`);
							if (passkey.lastUsedAt) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_LocalDate, { date: passkey.lastUsedAt }, null, _parent, _scopeId));
							else _push(`<!--[-->${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.mypage.passkey_not_used"))}<!--]-->`);
							_push(`</div><div class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)([
								_ctx.$style.column,
								_ctx.$style["column--button-parent"],
								"table-column"
							])}" data-v-9899bb3e${_scopeId}>`);
							_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_GeneralButton, {
								theme: "danger",
								size: "small",
								whenClick: () => $options.deletePasskey(passkey.name)
							}, {
								default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
									if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.mypage.passkey_remove"))}`);
									else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.mypage.passkey_remove")), 1)];
								}),
								_: 2
							}, _parent, _scopeId));
							_push(`</div></div>`);
						});
						_push(`<!--]-->`);
					} else _push(`<div class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)([_ctx.$style.row, "table-row"])}" data-v-9899bb3e${_scopeId}><div class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)([
						_ctx.$style.column,
						_ctx.$style["column--single"],
						"table-column",
						"no-passkey"
					])}" data-v-9899bb3e${_scopeId}> (${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.mypage.no_passkey"))}) </div></div>`);
					_push(`</div><div class="new-passkey-block" data-v-9899bb3e${_scopeId}>`);
					_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_InputField, {
						ref: "passkeyName",
						class: "passkey-name",
						type: "text",
						placeholder: _ctx.$t("views.mypage.new_passkey_name")
					}, null, _parent, _scopeId));
					_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_GeneralButton, { whenClick: $options.addPasskey }, {
						default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
							if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.mypage.passkey_add"))}`);
							else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.mypage.passkey_add")), 1)];
						}),
						_: 1
					}, _parent, _scopeId));
					_push(`</div>`);
					_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_CheckBox, {
						name: "usePasswordlessLogin",
						value: "Y",
						checked: $options.data.user.usePasswordlessLogin
					}, {
						default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
							if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.mypage.use_passwordless_login"))}`);
							else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.mypage.use_passwordless_login")), 1)];
						}),
						_: 1
					}, _parent, _scopeId));
					_push(`</div>`);
				} else _push(`<!---->`);
				_push(`<div class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)(_ctx.$style.form__row)}" data-v-9899bb3e${_scopeId}><label data-v-9899bb3e${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.mypage.api_token"))}</label><div class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)(_ctx.$style["form__row-inner"])}" data-v-9899bb3e${_scopeId}>`);
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_GeneralButton, {
					class: _ctx.$style.button,
					whenClick: $options.showTokenModal
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.mypage.api_token_button"))}`);
						else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.mypage.api_token_button")), 1)];
					}),
					_: 1
				}, _parent, _scopeId));
				_push(`</div></div>`);
				if ($options.data.canWithdraw) {
					_push(`<div class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)(_ctx.$style.form__row)}" data-v-9899bb3e${_scopeId}><label data-v-9899bb3e${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.mypage.account"))}</label><div class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)(_ctx.$style["form__row-inner"])}" data-v-9899bb3e${_scopeId}>`);
					_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_GeneralButton, {
						class: _ctx.$style.button,
						theme: "danger",
						href: "/member/withdraw"
					}, {
						default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
							if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.mypage.withdraw"))}`);
							else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.mypage.withdraw")), 1)];
						}),
						_: 1
					}, _parent, _scopeId));
					_push(`</div></div>`);
				} else _push(`<!---->`);
				if ($options.data.permissions.includes("engine_developer")) {
					_push(`<div class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)(_ctx.$style.form__row)}" data-v-9899bb3e${_scopeId}><label data-v-9899bb3e${_scopeId}>엔진 개발자</label><div class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)(_ctx.$style["form__row-inner"])}" data-v-9899bb3e${_scopeId}>`);
					if ($options.data.permissions.includes("developer")) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_GeneralButton, {
						theme: "danger",
						whenClick: $options.removeDeveloperPerm
					}, {
						default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
							if (_push) _push(`개발자 권한 제거`);
							else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)("개발자 권한 제거")];
						}),
						_: 1
					}, _parent, _scopeId));
					else _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_GeneralButton, {
						theme: "primary",
						whenClick: $options.getDeveloperPerm
					}, {
						default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
							if (_push) _push(`개발자 권한 받기`);
							else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)("개발자 권한 받기")];
						}),
						_: 1
					}, _parent, _scopeId));
					_push(`</div></div>`);
				} else _push(`<!---->`);
				_push(`</div></div><div class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)([_ctx.$style.form__row, _ctx.$style["form__row--buttons"]])}" data-v-9899bb3e${_scopeId}><div class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)(_ctx.$style.form__buttons)}" data-v-9899bb3e${_scopeId}>`);
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_GeneralButton, {
					class: _ctx.$style.button,
					theme: "primary",
					type: "submit"
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.mypage.submit"))}`);
						else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.mypage.submit")), 1)];
					}),
					_: 1
				}, _parent, _scopeId));
				_push(`</div></div>`);
			} else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: "mypage-block" }, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: "avatar-block" }, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("img", {
				src: _ctx.session.gravatar_url + "&s=512",
				class: "avatar-image"
			}, null, 8, ["src"]), (0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: "avatar-description" }, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_i18next, { translation: _ctx.$t("views.mypage.gravatar") }, {
				gravatar: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("a", {
					href: "https://gravatar.com",
					rel: "noopener",
					target: "_blank"
				}, "Gravatar")]),
				_: 1
			}, 8, ["translation"])])]), (0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: "form-block" }, [
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: _ctx.$style.form__row }, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: _ctx.$style["form__row-inner"] }, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("label", { for: "usernameInput" }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.mypage.username")), 1), (0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_GeneralButton, {
					theme: "link",
					href: "/member/change_name"
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.mypage.change")), 1)]),
					_: 1
				})], 2), (0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", null, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)($options.data.user.name), 1)], 2),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: _ctx.$style.form__row }, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: _ctx.$style["form__row-inner"] }, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("label", { for: "emailInput" }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.mypage.email")), 1), (0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_GeneralButton, {
					theme: "link",
					href: "/member/change_email"
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.mypage.change")), 1)]),
					_: 1
				})], 2), (0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", null, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)($options.data.user.email), 1)], 2),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: _ctx.$style.form__row }, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("label", { for: "emailInput" }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.mypage.password")), 1), (0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: _ctx.$style["form__row-inner"] }, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_GeneralButton, {
					class: _ctx.$style.button,
					href: "/member/change_password"
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.mypage.change")), 1)]),
					_: 1
				}, 8, ["class"])], 2)], 2),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: _ctx.$style.form__row }, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("label", { for: "permInput" }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.mypage.permission")), 1), (0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", null, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)($options.data.permissions.join(", ")), 1)], 2),
				$options.data.verifyEnabled ? ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)("div", {
					key: 0,
					class: _ctx.$style.form__row
				}, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("label", { for: "permInput" }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.mypage.mobile_verify")), 1), (0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: _ctx.$style["form__row-inner"] }, [$options.data.permissions.includes("mobile_verified_member") ? ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)("span", {
					key: 0,
					class: "color-text color-text-green"
				}, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_FontAwesomeIcon, { icon: "fa-circle-check" }), (0, require__plugin_vue_export_helper.vue_exports.createTextVNode)(" " + (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.mypage.mobile_verified")), 1)])) : ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(_component_GeneralButton, {
					key: 1,
					class: _ctx.$style.button,
					href: "/member/signup_verify"
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.mypage.mobile_verify_button")), 1)]),
					_: 1
				}, 8, ["class"]))], 2)], 2)) : (0, require__plugin_vue_export_helper.vue_exports.createCommentVNode)("", true),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedFormBlock, {
					newStyle: "",
					class: _ctx.$style.form__row,
					label: _ctx.$t("views.mypage.skin"),
					inputId: "skinSelect"
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: _ctx.$style["form__row-inner"] }, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SelectMenu, {
						id: "skinSelect",
						name: "skin",
						value: $options.data.user.skin
					}, {
						default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("option", { value: "default" }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.mypage.default_skin")), 1), ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(true), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(require__plugin_vue_export_helper.vue_exports.Fragment, null, (0, require__plugin_vue_export_helper.vue_exports.renderList)($options.data.skins, (skin) => {
							return (0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)("option", { selected: skin === $options.data.user.skin }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(skin), 9, ["selected"]);
						}), 256))]),
						_: 1
					}, 8, ["value"])], 2)]),
					_: 1
				}, 8, ["class", "label"]),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: _ctx.$style.form__row }, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("label", null, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.mypage.otp")), 1), (0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: _ctx.$style["form__row-inner"] }, [$options.data.hasTotp ? ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(_component_GeneralButton, {
					key: 0,
					theme: "danger",
					class: _ctx.$style.button,
					href: "/member/deactivate_otp"
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.mypage.deactivate")), 1)]),
					_: 1
				}, 8, ["class"])) : ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(_component_GeneralButton, {
					key: 1,
					class: _ctx.$style.button,
					href: "/member/activate_otp"
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.mypage.activate")), 1)]),
					_: 1
				}, 8, ["class"]))], 2)], 2),
				$options.data.externalProviders?.length ? ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)("div", {
					key: 1,
					class: _ctx.$style.form__row
				}, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("label", null, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.mypage.connect_external_account")), 1), (0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: [_ctx.$style.table, _ctx.$style["table--bordered"]] }, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: [
					_ctx.$style.row,
					_ctx.$style["row--head"],
					"table-row"
				] }, [((0, require__plugin_vue_export_helper.vue_exports.openBlock)(true), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(require__plugin_vue_export_helper.vue_exports.Fragment, null, (0, require__plugin_vue_export_helper.vue_exports.renderList)([
					"provider",
					"name",
					"email",
					""
				].map((a) => a && _ctx.$t("views.mypage.external_" + a)), (text) => {
					return (0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)("div", { class: [_ctx.$style.column, "table-column"] }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(text), 3);
				}), 256))], 2), ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(true), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(require__plugin_vue_export_helper.vue_exports.Fragment, null, (0, require__plugin_vue_export_helper.vue_exports.renderList)($options.data.externalProviders, (item) => {
					return (0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)("div", { class: [_ctx.$style.row, "table-row"] }, [
						(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: [_ctx.$style.column, "table-column"] }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(item.displayName), 3),
						(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: [_ctx.$style.column, "table-column"] }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)($options.data.oauth2Maps[item.name]?.name), 3),
						(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: [_ctx.$style.column, "table-column"] }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)($options.data.oauth2Maps[item.name]?.email), 3),
						(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: [
							_ctx.$style.column,
							_ctx.$style["column--button-parent"],
							"table-column"
						] }, [$options.data.oauth2Maps[item.name] ? ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(_component_GeneralButton, {
							key: 0,
							theme: "danger",
							size: "small",
							whenClick: () => $options.removeExternalAccount(item.name)
						}, {
							default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.mypage.external_remove")), 1)]),
							_: 1
						}, 8, ["whenClick"])) : ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(_component_GeneralButton, {
							key: 1,
							theme: "primary",
							size: "small",
							href: "/member/login/oauth2/" + item.name
						}, {
							default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.mypage.external_add")), 1)]),
							_: 1
						}, 8, ["href"]))], 2)
					], 2);
				}), 256))], 2)], 2)) : (0, require__plugin_vue_export_helper.vue_exports.createCommentVNode)("", true),
				$options.data.hasTotp ? ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)("div", {
					key: 2,
					class: _ctx.$style.form__row
				}, [
					(0, require__plugin_vue_export_helper.vue_exports.createVNode)("label", null, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.mypage.passkey")), 1),
					(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: [_ctx.$style.table, _ctx.$style["table--bordered"]] }, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: [
						_ctx.$style.row,
						_ctx.$style["row--head"],
						"table-row"
					] }, [((0, require__plugin_vue_export_helper.vue_exports.openBlock)(true), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(require__plugin_vue_export_helper.vue_exports.Fragment, null, (0, require__plugin_vue_export_helper.vue_exports.renderList)([
						"name",
						"created",
						"last_used",
						""
					].map((a) => a && _ctx.$t("views.mypage.passkey_" + a)), (text) => {
						return (0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)("div", { class: [_ctx.$style.column, "table-column"] }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(text), 3);
					}), 256))], 2), $options.data.passkeys.length ? ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(true), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(require__plugin_vue_export_helper.vue_exports.Fragment, { key: 0 }, (0, require__plugin_vue_export_helper.vue_exports.renderList)($options.data.passkeys, (passkey) => {
						return (0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)("div", { class: [_ctx.$style.row, "table-row"] }, [
							(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: [_ctx.$style.column, "table-column"] }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(passkey.name), 3),
							(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: [_ctx.$style.column, "table-column"] }, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_LocalDate, { date: passkey.createdAt }, null, 8, ["date"])], 2),
							(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: [_ctx.$style.column, "table-column"] }, [passkey.lastUsedAt ? ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(_component_LocalDate, {
								key: 0,
								date: passkey.lastUsedAt
							}, null, 8, ["date"])) : ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(require__plugin_vue_export_helper.vue_exports.Fragment, { key: 1 }, [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.mypage.passkey_not_used")), 1)], 64))], 2),
							(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: [
								_ctx.$style.column,
								_ctx.$style["column--button-parent"],
								"table-column"
							] }, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_GeneralButton, {
								theme: "danger",
								size: "small",
								whenClick: () => $options.deletePasskey(passkey.name)
							}, {
								default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.mypage.passkey_remove")), 1)]),
								_: 1
							}, 8, ["whenClick"])], 2)
						], 2);
					}), 256)) : ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)("div", {
						key: 1,
						class: [_ctx.$style.row, "table-row"]
					}, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: [
						_ctx.$style.column,
						_ctx.$style["column--single"],
						"table-column",
						"no-passkey"
					] }, " (" + (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.mypage.no_passkey")) + ") ", 3)], 2))], 2),
					(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: "new-passkey-block" }, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_InputField, {
						ref: "passkeyName",
						class: "passkey-name",
						type: "text",
						placeholder: _ctx.$t("views.mypage.new_passkey_name")
					}, null, 8, ["placeholder"]), (0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_GeneralButton, { whenClick: $options.addPasskey }, {
						default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.mypage.passkey_add")), 1)]),
						_: 1
					}, 8, ["whenClick"])]),
					(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_CheckBox, {
						name: "usePasswordlessLogin",
						value: "Y",
						checked: $options.data.user.usePasswordlessLogin
					}, {
						default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.mypage.use_passwordless_login")), 1)]),
						_: 1
					}, 8, ["checked"])
				], 2)) : (0, require__plugin_vue_export_helper.vue_exports.createCommentVNode)("", true),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: _ctx.$style.form__row }, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("label", null, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.mypage.api_token")), 1), (0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: _ctx.$style["form__row-inner"] }, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_GeneralButton, {
					class: _ctx.$style.button,
					whenClick: $options.showTokenModal
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.mypage.api_token_button")), 1)]),
					_: 1
				}, 8, ["class", "whenClick"])], 2)], 2),
				$options.data.canWithdraw ? ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)("div", {
					key: 3,
					class: _ctx.$style.form__row
				}, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("label", null, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.mypage.account")), 1), (0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: _ctx.$style["form__row-inner"] }, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_GeneralButton, {
					class: _ctx.$style.button,
					theme: "danger",
					href: "/member/withdraw"
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.mypage.withdraw")), 1)]),
					_: 1
				}, 8, ["class"])], 2)], 2)) : (0, require__plugin_vue_export_helper.vue_exports.createCommentVNode)("", true),
				$options.data.permissions.includes("engine_developer") ? ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)("div", {
					key: 4,
					class: _ctx.$style.form__row
				}, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("label", null, "엔진 개발자"), (0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: _ctx.$style["form__row-inner"] }, [$options.data.permissions.includes("developer") ? ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(_component_GeneralButton, {
					key: 0,
					theme: "danger",
					whenClick: $options.removeDeveloperPerm
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)("개발자 권한 제거")]),
					_: 1
				}, 8, ["whenClick"])) : ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(_component_GeneralButton, {
					key: 1,
					theme: "primary",
					whenClick: $options.getDeveloperPerm
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)("개발자 권한 받기")]),
					_: 1
				}, 8, ["whenClick"]))], 2)], 2)) : (0, require__plugin_vue_export_helper.vue_exports.createCommentVNode)("", true)
			])]), (0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: [_ctx.$style.form__row, _ctx.$style["form__row--buttons"]] }, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: _ctx.$style.form__buttons }, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_GeneralButton, {
				class: _ctx.$style.button,
				theme: "primary",
				type: "submit"
			}, {
				default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.mypage.submit")), 1)]),
				_: 1
			}, 8, ["class"])], 2)], 2)];
		}),
		_: 1
	}, _parent));
}
var cssModules = { "$style": mypage_vue_vue_type_style_index_0_lang_module_default };
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = (0, require__plugin_vue_export_helper.vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/contents/member/mypage.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var mypage_default = /*#__PURE__*/ require__plugin_vue_export_helper._plugin_vue_export_helper_default(_sfc_main, [
	["ssrRender", _sfc_ssrRender],
	["__cssModules", cssModules],
	["__scopeId", "data-v-9899bb3e"]
]);
//#endregion
exports.default = mypage_default;
