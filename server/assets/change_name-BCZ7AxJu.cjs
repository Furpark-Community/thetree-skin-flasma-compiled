const require__plugin_vue_export_helper = require("./_plugin-vue_export-helper-C1TPHJvg.cjs");
const require_server = require("../server.cjs");
const require_seedForm = require("./seedForm-DLpXnK6K.cjs");
const require_formErrorAlert = require("./formErrorAlert-l3UJhtgq.cjs");
const require_seedFormBlock = require("./seedFormBlock-C_WGpUCH.cjs");
const require_inputField = require("./inputField-DBSQICqU.cjs");
var change_name_vue_vue_type_style_index_0_lang_module_default = {
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
//#region src/views/contents/member/change_name.vue
var _sfc_main = { components: {
	GeneralButton: require_server.generalButton_default,
	InputField: require_inputField.inputField_default,
	SeedForm: require_seedForm.seedForm_default,
	FormErrorAlert: require_formErrorAlert.formErrorAlert_default,
	SeedFormBlock: require_seedFormBlock.seedFormBlock_default
} };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_FormErrorAlert = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("FormErrorAlert");
	const _component_SeedForm = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("SeedForm");
	const _component_SeedFormBlock = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("SeedFormBlock");
	const _component_InputField = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("InputField");
	const _component_GeneralButton = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("GeneralButton");
	_push(`<!--[-->`);
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_FormErrorAlert, null, null, _parent));
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedForm, {
		class: _ctx.$style.form,
		method: "post"
	}, {
		default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedFormBlock, {
					newStyle: "",
					label: _ctx.$t("views.change_email.password"),
					inputId: "passwordInput",
					name: "password"
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_InputField, {
							type: "password",
							id: "passwordInput",
							name: "password"
						}, null, _parent, _scopeId));
						else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_InputField, {
							type: "password",
							id: "passwordInput",
							name: "password"
						})];
					}),
					_: 1
				}, _parent, _scopeId));
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedFormBlock, {
					newStyle: "",
					label: _ctx.$t("views.change_name.name")
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_InputField, {
							readonly: "",
							disabled: "",
							type: "text",
							value: _ctx.session.account.name
						}, null, _parent, _scopeId));
						else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_InputField, {
							readonly: "",
							disabled: "",
							type: "text",
							value: _ctx.session.account.name
						}, null, 8, ["value"])];
					}),
					_: 1
				}, _parent, _scopeId));
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedFormBlock, {
					newStyle: "",
					label: _ctx.$t("views.change_name.new_name"),
					inputId: "nameInput",
					name: "name"
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_InputField, {
							type: "text",
							id: "nameInput",
							name: "name"
						}, null, _parent, _scopeId));
						else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_InputField, {
							type: "text",
							id: "nameInput",
							name: "name"
						})];
					}),
					_: 1
				}, _parent, _scopeId));
				_push(`<div class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)(_ctx.$style.form__row)}"${_scopeId}><p class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)(_ctx.$style.text)}"${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.change_name.cooldown"))}</p></div><div class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)([_ctx.$style.form__row, _ctx.$style["form__row--buttons"]])}"${_scopeId}><div class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)(_ctx.$style.form__buttons)}"${_scopeId}>`);
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_GeneralButton, {
					class: _ctx.$style.button,
					type: "submit",
					theme: "primary"
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.change_name.submit"))}`);
						else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.change_name.submit")), 1)];
					}),
					_: 1
				}, _parent, _scopeId));
				_push(`</div></div>`);
			} else return [
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedFormBlock, {
					newStyle: "",
					label: _ctx.$t("views.change_email.password"),
					inputId: "passwordInput",
					name: "password"
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_InputField, {
						type: "password",
						id: "passwordInput",
						name: "password"
					})]),
					_: 1
				}, 8, ["label"]),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedFormBlock, {
					newStyle: "",
					label: _ctx.$t("views.change_name.name")
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_InputField, {
						readonly: "",
						disabled: "",
						type: "text",
						value: _ctx.session.account.name
					}, null, 8, ["value"])]),
					_: 1
				}, 8, ["label"]),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedFormBlock, {
					newStyle: "",
					label: _ctx.$t("views.change_name.new_name"),
					inputId: "nameInput",
					name: "name"
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_InputField, {
						type: "text",
						id: "nameInput",
						name: "name"
					})]),
					_: 1
				}, 8, ["label"]),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: _ctx.$style.form__row }, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("p", { class: _ctx.$style.text }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.change_name.cooldown")), 3)], 2),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: [_ctx.$style.form__row, _ctx.$style["form__row--buttons"]] }, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: _ctx.$style.form__buttons }, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_GeneralButton, {
					class: _ctx.$style.button,
					type: "submit",
					theme: "primary"
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.change_name.submit")), 1)]),
					_: 1
				}, 8, ["class"])], 2)], 2)
			];
		}),
		_: 1
	}, _parent));
	_push(`<!--]-->`);
}
var cssModules = { "$style": change_name_vue_vue_type_style_index_0_lang_module_default };
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = (0, require__plugin_vue_export_helper.vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/contents/member/change_name.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var change_name_default = /*#__PURE__*/ require__plugin_vue_export_helper._plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__cssModules", cssModules]]);
//#endregion
exports.default = change_name_default;
