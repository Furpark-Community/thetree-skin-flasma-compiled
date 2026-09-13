const require__plugin_vue_export_helper = require("./_plugin-vue_export-helper-C1TPHJvg.cjs");
const require_server = require("../server.cjs");
const require_seedForm = require("./seedForm-DLpXnK6K.cjs");
const require_formErrorAlert = require("./formErrorAlert-l3UJhtgq.cjs");
const require_inputField = require("./inputField-DBSQICqU.cjs");
const require_emailWhitelist = require("./emailWhitelist-hDhwoKip.cjs");
const require_flexFormBlock = require("./flexFormBlock-DIJyVMLQ.cjs");
//#region src/views/contents/member/signup.vue
var _sfc_main = {
	components: {
		Terms: require("./terms-rUIxfUl9.cjs").terms_default,
		SeedForm: require_seedForm.seedForm_default,
		FormErrorAlert: require_formErrorAlert.formErrorAlert_default,
		FlexFormBlock: require_flexFormBlock.flexFormBlock_default,
		InputField: require_inputField.inputField_default,
		GeneralButton: require_server.generalButton_default,
		CheckBox: require_server.checkBox_default,
		EmailWhitelist: require_emailWhitelist.emailWhitelist_default
	},
	data() {
		return this.$store.state.viewData;
	}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_FormErrorAlert = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("FormErrorAlert");
	const _component_SeedForm = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("SeedForm");
	const _component_FlexFormBlock = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("FlexFormBlock");
	const _component_Terms = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("Terms");
	const _component_CheckBox = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("CheckBox");
	const _component_InputField = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("InputField");
	const _component_EmailWhitelist = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("EmailWhitelist");
	const _component_GeneralButton = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("GeneralButton");
	_push(`<!--[-->`);
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_FormErrorAlert, null, null, _parent));
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedForm, { method: "post" }, {
		default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_FlexFormBlock, null, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_Terms, null, null, _parent, _scopeId));
						else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_Terms)];
					}),
					_: 1
				}, _parent, _scopeId));
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_FlexFormBlock, { name: "agree" }, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_CheckBox, { name: "agree" }, {
							default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
								if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.agreeText)}`);
								else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.agreeText), 1)];
							}),
							_: 1
						}, _parent, _scopeId));
						else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_CheckBox, { name: "agree" }, {
							default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.agreeText), 1)]),
							_: 1
						})];
					}),
					_: 1
				}, _parent, _scopeId));
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_FlexFormBlock, {
					label: _ctx.$t("views.signup.email"),
					inputId: "emailInput",
					name: "email"
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_InputField, {
							id: "emailInput",
							name: "email"
						}, null, _parent, _scopeId));
						else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_InputField, {
							id: "emailInput",
							name: "email"
						})];
					}),
					_: 1
				}, _parent, _scopeId));
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_EmailWhitelist, { domains: _ctx.emailWhitelist }, null, _parent, _scopeId));
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_FlexFormBlock, {
					buttons: "",
					padding: ""
				}, {
					buttons: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_GeneralButton, {
							type: "submit",
							theme: "primary"
						}, {
							default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
								if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.signup.submit"))}`);
								else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.signup.submit")), 1)];
							}),
							_: 1
						}, _parent, _scopeId));
						else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_GeneralButton, {
							type: "submit",
							theme: "primary"
						}, {
							default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.signup.submit")), 1)]),
							_: 1
						})];
					}),
					_: 1
				}, _parent, _scopeId));
			} else return [
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_FlexFormBlock, null, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_Terms)]),
					_: 1
				}),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_FlexFormBlock, { name: "agree" }, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_CheckBox, { name: "agree" }, {
						default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.agreeText), 1)]),
						_: 1
					})]),
					_: 1
				}),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_FlexFormBlock, {
					label: _ctx.$t("views.signup.email"),
					inputId: "emailInput",
					name: "email"
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_InputField, {
						id: "emailInput",
						name: "email"
					})]),
					_: 1
				}, 8, ["label"]),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_EmailWhitelist, { domains: _ctx.emailWhitelist }, null, 8, ["domains"]),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_FlexFormBlock, {
					buttons: "",
					padding: ""
				}, {
					buttons: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_GeneralButton, {
						type: "submit",
						theme: "primary"
					}, {
						default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.signup.submit")), 1)]),
						_: 1
					})]),
					_: 1
				})
			];
		}),
		_: 1
	}, _parent));
	_push(`<!--]-->`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = (0, require__plugin_vue_export_helper.vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/contents/member/signup.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var signup_default = /*#__PURE__*/ require__plugin_vue_export_helper._plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-130275bd"]]);
//#endregion
exports.default = signup_default;
