const require__plugin_vue_export_helper = require("./_plugin-vue_export-helper-C1TPHJvg.cjs");
const require_seedForm = require("./seedForm-DLpXnK6K.cjs");
const require_seedButton = require("./seedButton-CbrSfLgh.cjs");
const require_formErrorAlert = require("./formErrorAlert-l3UJhtgq.cjs");
const require_seedFormBlock = require("./seedFormBlock-C_WGpUCH.cjs");
const require_seedFormInput = require("./seedFormInput-BLNL06fg.cjs");
//#region src/views/contents/member/recover_password_final.vue
var _sfc_main = { components: {
	SeedForm: require_seedForm.seedForm_default,
	FormErrorAlert: require_formErrorAlert.formErrorAlert_default,
	SeedFormBlock: require_seedFormBlock.seedFormBlock_default,
	SeedFormInput: require_seedFormInput.seedFormInput_default,
	SeedButton: require_seedButton.seedButton_default
} };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_SeedForm = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("SeedForm");
	const _component_FormErrorAlert = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("FormErrorAlert");
	const _component_SeedFormBlock = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("SeedFormBlock");
	const _component_SeedFormInput = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("SeedFormInput");
	const _component_SeedButton = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("SeedButton");
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedForm, (0, require__plugin_vue_export_helper.vue_exports.mergeProps)({ method: "post" }, _attrs), {
		default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_FormErrorAlert, null, null, _parent, _scopeId));
				_push(`<p data-v-c726e057${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.recover_password_final.message"))}</p>`);
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedFormBlock, {
					label: _ctx.$t("views.change_password.new_password"),
					inputId: "passwordInput",
					name: "password"
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedFormInput, {
							type: "password",
							id: "passwordInput",
							name: "password"
						}, null, _parent, _scopeId));
						else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedFormInput, {
							type: "password",
							id: "passwordInput",
							name: "password"
						})];
					}),
					_: 1
				}, _parent, _scopeId));
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedFormBlock, {
					label: _ctx.$t("views.change_password.confirm_password"),
					inputId: "passwordConfirmInput",
					name: "password_confirm"
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedFormInput, {
							type: "password",
							id: "passwordConfirmInput",
							name: "password_confirm"
						}, null, _parent, _scopeId));
						else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedFormInput, {
							type: "password",
							id: "passwordConfirmInput",
							name: "password_confirm"
						})];
					}),
					_: 1
				}, _parent, _scopeId));
				_push(`<div class="buttons-block" data-v-c726e057${_scopeId}>`);
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedButton, { submit: "" }, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.recover_password_final.submit"))}`);
						else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.recover_password_final.submit")), 1)];
					}),
					_: 1
				}, _parent, _scopeId));
				_push(`</div>`);
			} else return [
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_FormErrorAlert),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("p", null, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.recover_password_final.message")), 1),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedFormBlock, {
					label: _ctx.$t("views.change_password.new_password"),
					inputId: "passwordInput",
					name: "password"
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedFormInput, {
						type: "password",
						id: "passwordInput",
						name: "password"
					})]),
					_: 1
				}, 8, ["label"]),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedFormBlock, {
					label: _ctx.$t("views.change_password.confirm_password"),
					inputId: "passwordConfirmInput",
					name: "password_confirm"
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedFormInput, {
						type: "password",
						id: "passwordConfirmInput",
						name: "password_confirm"
					})]),
					_: 1
				}, 8, ["label"]),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: "buttons-block" }, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedButton, { submit: "" }, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.recover_password_final.submit")), 1)]),
					_: 1
				})])
			];
		}),
		_: 1
	}, _parent));
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = (0, require__plugin_vue_export_helper.vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/contents/member/recover_password_final.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var recover_password_final_default = /*#__PURE__*/ require__plugin_vue_export_helper._plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-c726e057"]]);
//#endregion
exports.default = recover_password_final_default;
