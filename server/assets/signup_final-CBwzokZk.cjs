const require__plugin_vue_export_helper = require("./_plugin-vue_export-helper-C1TPHJvg.cjs");
const require_seedForm = require("./seedForm-DLpXnK6K.cjs");
const require_seedButton = require("./seedButton-CbrSfLgh.cjs");
const require_seedFormBlock = require("./seedFormBlock-C_WGpUCH.cjs");
const require_seedFormInput = require("./seedFormInput-BLNL06fg.cjs");
//#region src/views/contents/member/signup_final.vue
var _sfc_main = { components: {
	SeedForm: require_seedForm.seedForm_default,
	SeedButton: require_seedButton.seedButton_default,
	SeedFormBlock: require_seedFormBlock.seedFormBlock_default,
	SeedFormInput: require_seedFormInput.seedFormInput_default
} };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_SeedForm = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("SeedForm");
	const _component_SeedFormBlock = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("SeedFormBlock");
	const _component_SeedFormInput = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("SeedFormInput");
	const _component_SeedButton = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("SeedButton");
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedForm, (0, require__plugin_vue_export_helper.vue_exports.mergeProps)({ method: "post" }, _attrs), {
		default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedFormBlock, {
					label: _ctx.$t("views.signup_final.email"),
					inputId: "emailInput",
					name: "email"
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedFormInput, {
							id: "emailInput",
							name: "email",
							readonly: "",
							value: _ctx.data.email
						}, null, _parent, _scopeId));
						else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedFormInput, {
							id: "emailInput",
							name: "email",
							readonly: "",
							value: _ctx.data.email
						}, null, 8, ["value"])];
					}),
					_: 1
				}, _parent, _scopeId));
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedFormBlock, {
					label: _ctx.$t("views.signup_final.username"),
					inputId: "usernameInput",
					name: "username"
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) if (_ctx.data.name) {
							_push(`<!--[-->`);
							_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedFormInput, {
								id: "usernameInput",
								value: _ctx.data.name,
								readonly: ""
							}, null, _parent, _scopeId));
							_push(`<input type="hidden" name="username" value="special:bypass" data-v-818a2299${_scopeId}><!--]-->`);
						} else _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedFormInput, {
							id: "usernameInput",
							name: "username"
						}, null, _parent, _scopeId));
						else return [_ctx.data.name ? ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(require__plugin_vue_export_helper.vue_exports.Fragment, { key: 0 }, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedFormInput, {
							id: "usernameInput",
							value: _ctx.data.name,
							readonly: ""
						}, null, 8, ["value"]), (0, require__plugin_vue_export_helper.vue_exports.createVNode)("input", {
							type: "hidden",
							name: "username",
							value: "special:bypass"
						})], 64)) : ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(_component_SeedFormInput, {
							key: 1,
							id: "usernameInput",
							name: "username"
						}))];
					}),
					_: 1
				}, _parent, _scopeId));
				if (_ctx.data.fromOAuth2) _push(`<input type="hidden" name="from_oauth2" value="Y" data-v-818a2299${_scopeId}>`);
				else {
					_push(`<!--[-->`);
					_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedFormBlock, {
						label: _ctx.$t("views.signup_final.password"),
						inputId: "passwordInput",
						name: "password"
					}, {
						default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
							if (_push) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedFormInput, {
								id: "passwordInput",
								name: "password",
								type: "password"
							}, null, _parent, _scopeId));
							else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedFormInput, {
								id: "passwordInput",
								name: "password",
								type: "password"
							})];
						}),
						_: 1
					}, _parent, _scopeId));
					_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedFormBlock, {
						label: _ctx.$t("views.signup_final.password_confirm"),
						inputId: "passwordConfirmInput",
						name: "password_confirm"
					}, {
						default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
							if (_push) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedFormInput, {
								id: "passwordConfirmInput",
								name: "password_confirm",
								type: "password"
							}, null, _parent, _scopeId));
							else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedFormInput, {
								id: "passwordConfirmInput",
								name: "password_confirm",
								type: "password"
							})];
						}),
						_: 1
					}, _parent, _scopeId));
					_push(`<!--]-->`);
				}
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedButton, { submit: "" }, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.signup_final.submit"))}`);
						else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.signup_final.submit")), 1)];
					}),
					_: 1
				}, _parent, _scopeId));
			} else return [
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedFormBlock, {
					label: _ctx.$t("views.signup_final.email"),
					inputId: "emailInput",
					name: "email"
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedFormInput, {
						id: "emailInput",
						name: "email",
						readonly: "",
						value: _ctx.data.email
					}, null, 8, ["value"])]),
					_: 1
				}, 8, ["label"]),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedFormBlock, {
					label: _ctx.$t("views.signup_final.username"),
					inputId: "usernameInput",
					name: "username"
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [_ctx.data.name ? ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(require__plugin_vue_export_helper.vue_exports.Fragment, { key: 0 }, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedFormInput, {
						id: "usernameInput",
						value: _ctx.data.name,
						readonly: ""
					}, null, 8, ["value"]), (0, require__plugin_vue_export_helper.vue_exports.createVNode)("input", {
						type: "hidden",
						name: "username",
						value: "special:bypass"
					})], 64)) : ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(_component_SeedFormInput, {
						key: 1,
						id: "usernameInput",
						name: "username"
					}))]),
					_: 1
				}, 8, ["label"]),
				_ctx.data.fromOAuth2 ? ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)("input", {
					key: 0,
					type: "hidden",
					name: "from_oauth2",
					value: "Y"
				})) : ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(require__plugin_vue_export_helper.vue_exports.Fragment, { key: 1 }, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedFormBlock, {
					label: _ctx.$t("views.signup_final.password"),
					inputId: "passwordInput",
					name: "password"
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedFormInput, {
						id: "passwordInput",
						name: "password",
						type: "password"
					})]),
					_: 1
				}, 8, ["label"]), (0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedFormBlock, {
					label: _ctx.$t("views.signup_final.password_confirm"),
					inputId: "passwordConfirmInput",
					name: "password_confirm"
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedFormInput, {
						id: "passwordConfirmInput",
						name: "password_confirm",
						type: "password"
					})]),
					_: 1
				}, 8, ["label"])], 64)),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedButton, { submit: "" }, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.signup_final.submit")), 1)]),
					_: 1
				})
			];
		}),
		_: 1
	}, _parent));
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = (0, require__plugin_vue_export_helper.vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/contents/member/signup_final.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var signup_final_default = /*#__PURE__*/ require__plugin_vue_export_helper._plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-818a2299"]]);
//#endregion
exports.default = signup_final_default;
