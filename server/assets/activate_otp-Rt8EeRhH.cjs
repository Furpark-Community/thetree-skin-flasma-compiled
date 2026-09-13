const require__plugin_vue_export_helper = require("./_plugin-vue_export-helper-C1TPHJvg.cjs");
const require_server = require("../server.cjs");
const require_seedForm = require("./seedForm-DLpXnK6K.cjs");
const require_formErrorAlert = require("./formErrorAlert-l3UJhtgq.cjs");
const require_seedFormBlock = require("./seedFormBlock-C_WGpUCH.cjs");
const require_inputField = require("./inputField-DBSQICqU.cjs");
const require_pinInput = require("./pinInput-97Jv5Gxs.cjs");
var activate_otp_vue_vue_type_style_index_0_lang_module_default = {
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
//#region src/views/contents/member/activate_otp.vue
var _sfc_main = {
	components: {
		PinInput: require_pinInput.pinInput_default,
		InputField: require_inputField.inputField_default,
		GeneralButton: require_server.generalButton_default,
		SeedForm: require_seedForm.seedForm_default,
		FormErrorAlert: require_formErrorAlert.formErrorAlert_default,
		SeedFormBlock: require_seedFormBlock.seedFormBlock_default
	},
	data() {
		return { step: 1 };
	},
	methods: {
		prevStep() {
			if (this.step > 1) this.step--;
		},
		nextStep() {
			if (this.step < 3) this.step++;
		},
		copySecret() {
			navigator.clipboard.writeText(this.data.secret);
			require_server.Ke(this.$t("views.activate_otp.copied_secret_key"));
		}
	}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_FormErrorAlert = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("FormErrorAlert");
	const _component_FontAwesomeIcon = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("FontAwesomeIcon");
	const _component_GeneralButton = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("GeneralButton");
	const _component_InputField = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("InputField");
	const _component_SeedForm = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("SeedForm");
	const _component_SeedFormBlock = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("SeedFormBlock");
	const _component_PinInput = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("PinInput");
	_push(`<!--[-->`);
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_FormErrorAlert, null, null, _parent));
	if ($data.step === 1) {
		_push(`<div class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)([_ctx.$style.form, _ctx.$style["form--large"]])}" data-v-4f03bd17><div class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)(_ctx.$style.form__row)}" data-v-4f03bd17><div class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)(_ctx.$style["form__section-title"])}" data-v-4f03bd17>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.activate_otp.step", { count: 1 }))}</div><div data-v-4f03bd17><p data-v-4f03bd17>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.activate_otp.install_app"))}</p><ul data-v-4f03bd17><li data-v-4f03bd17> Google OTP (<a href="https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2" rel="noopener" target="_blank" data-v-4f03bd17>Play Store</a>, <a href="https://apps.apple.com/us/app/google-authenticator/id388497605" rel="noopener" target="_blank" data-v-4f03bd17>App Store</a>) </li><li data-v-4f03bd17> FreeOTP (<a href="https://play.google.com/store/apps/details?id=org.fedorahosted.freeotp" rel="noopener" target="_blank" data-v-4f03bd17>Play Store</a>, <a href="https://apps.apple.com/us/app/freeotp-authenticator/id872559395" rel="noopener" target="_blank" data-v-4f03bd17>App Store</a>) </li></ul><p data-v-4f03bd17>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.activate_otp.other_app"))}</p><p data-v-4f03bd17> [`);
		_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_FontAwesomeIcon, {
			class: _ctx.$style.icon,
			icon: "triangle-exclamation"
		}, null, _parent));
		_push(` ${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.activate_otp.warn"))}] <br data-v-4f03bd17> ${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.activate_otp.understand"))}</p></div></div><div class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)([_ctx.$style.form__row, _ctx.$style["form__row--buttons"]])}" data-v-4f03bd17><div class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)(_ctx.$style.form__buttons)}" data-v-4f03bd17>`);
		_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_GeneralButton, {
			class: _ctx.$style.button,
			whenClick: $options.nextStep
		}, {
			default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
				if (_push) {
					_push(`<span data-v-4f03bd17${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.activate_otp.next"))}</span>`);
					_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_FontAwesomeIcon, { icon: "chevron-right" }, null, _parent, _scopeId));
				} else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("span", null, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.activate_otp.next")), 1), (0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_FontAwesomeIcon, { icon: "chevron-right" })];
			}),
			_: 1
		}, _parent));
		_push(`</div></div></div>`);
	} else _push(`<!---->`);
	if ($data.step === 2) {
		_push(`<div class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)([_ctx.$style.form, _ctx.$style["form--large"]])}" data-v-4f03bd17><div class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)(_ctx.$style.form__row)}" data-v-4f03bd17><div class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)(_ctx.$style["form__section-title"])}" data-v-4f03bd17>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.activate_otp.step", { count: 2 }))}</div><div data-v-4f03bd17><ol data-v-4f03bd17><li data-v-4f03bd17>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.activate_otp.run_app"))}</li><li data-v-4f03bd17>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.activate_otp.add_code"))}</li><li data-v-4f03bd17>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.activate_otp.follow_step"))}</li></ol><p data-v-4f03bd17>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.activate_otp.mobile_guide"))}</p></div></div><div class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)([_ctx.$style.form__row, _ctx.$style["form__row--center"]])}" data-v-4f03bd17><a${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttr)("href", _ctx.data.qrUrl)} class="qrcode" data-v-4f03bd17><img${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttr)("src", _ctx.data.qrcode)} data-v-4f03bd17></a></div><div class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)(_ctx.$style.form__row)}" data-v-4f03bd17><p data-v-4f03bd17>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.activate_otp.secret_key_guide"))}</p></div><div class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)([_ctx.$style.form__row, _ctx.$style["form__row--self-center"]])}" data-v-4f03bd17><label data-v-4f03bd17>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.activate_otp.secret_key"))}</label><div class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)(_ctx.$style["form__row-inner"])}" data-v-4f03bd17>`);
		_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_InputField, {
			class: "secret-input",
			readonly: "",
			disabled: "",
			center: "",
			value: _ctx.data.secret
		}, null, _parent));
		_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_GeneralButton, {
			class: "copy-button",
			whenClick: $options.copySecret
		}, {
			default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
				if (_push) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_FontAwesomeIcon, { icon: "fa-regular fa-copy" }, null, _parent, _scopeId));
				else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_FontAwesomeIcon, { icon: "fa-regular fa-copy" })];
			}),
			_: 1
		}, _parent));
		_push(`</div></div><div class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)([
			_ctx.$style.form__row,
			_ctx.$style["form__row--between"],
			_ctx.$style["form__row--buttons"]
		])}" data-v-4f03bd17>`);
		_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_GeneralButton, {
			class: _ctx.$style.button,
			whenClick: $options.prevStep
		}, {
			default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
				if (_push) {
					_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_FontAwesomeIcon, { icon: "chevron-left" }, null, _parent, _scopeId));
					_push(`<span data-v-4f03bd17${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.activate_otp.prev"))}</span>`);
				} else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_FontAwesomeIcon, { icon: "chevron-left" }), (0, require__plugin_vue_export_helper.vue_exports.createVNode)("span", null, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.activate_otp.prev")), 1)];
			}),
			_: 1
		}, _parent));
		_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_GeneralButton, {
			class: _ctx.$style.button,
			whenClick: $options.nextStep
		}, {
			default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
				if (_push) {
					_push(`<span data-v-4f03bd17${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.activate_otp.next"))}</span>`);
					_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_FontAwesomeIcon, { icon: "chevron-right" }, null, _parent, _scopeId));
				} else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("span", null, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.activate_otp.next")), 1), (0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_FontAwesomeIcon, { icon: "chevron-right" })];
			}),
			_: 1
		}, _parent));
		_push(`</div></div>`);
	} else _push(`<!---->`);
	if ($data.step === 3) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedForm, {
		class: [_ctx.$style.form, _ctx.$style["form--large"]],
		method: "post"
	}, {
		default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push(`<div style="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderStyle)({ "margin": "0 0 1rem" })}" data-v-4f03bd17${_scopeId}><div class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)(_ctx.$style["form__section-title"])}" data-v-4f03bd17${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.activate_otp.step", { count: 3 }))}</div><div data-v-4f03bd17${_scopeId}><p data-v-4f03bd17${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.activate_otp.put_code_for_enable"))}</p></div></div>`);
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedFormBlock, {
					newStyle: "",
					label: _ctx.$t("views.activate_otp.otp_label"),
					inputId: "pinInput",
					name: "pin"
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_PinInput, { name: "pin" }, null, _parent, _scopeId));
						else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_PinInput, { name: "pin" })];
					}),
					_: 1
				}, _parent, _scopeId));
				_push(`<div class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)([
					_ctx.$style.form__row,
					_ctx.$style["form__row--between"],
					_ctx.$style["form__row--buttons"]
				])}" data-v-4f03bd17${_scopeId}>`);
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_GeneralButton, {
					class: _ctx.$style.button,
					whenClick: $options.prevStep
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) {
							_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_FontAwesomeIcon, { icon: "chevron-left" }, null, _parent, _scopeId));
							_push(`<span data-v-4f03bd17${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.activate_otp.prev"))}</span>`);
						} else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_FontAwesomeIcon, { icon: "chevron-left" }), (0, require__plugin_vue_export_helper.vue_exports.createVNode)("span", null, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.activate_otp.prev")), 1)];
					}),
					_: 1
				}, _parent, _scopeId));
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_GeneralButton, {
					class: _ctx.$style.button,
					type: "submit",
					theme: "primary"
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.activate_otp.submit"))}`);
						else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.activate_otp.submit")), 1)];
					}),
					_: 1
				}, _parent, _scopeId));
				_push(`</div>`);
			} else return [
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { style: { "margin": "0 0 1rem" } }, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: _ctx.$style["form__section-title"] }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.activate_otp.step", { count: 3 })), 3), (0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", null, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("p", null, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.activate_otp.put_code_for_enable")), 1)])]),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedFormBlock, {
					newStyle: "",
					label: _ctx.$t("views.activate_otp.otp_label"),
					inputId: "pinInput",
					name: "pin"
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_PinInput, { name: "pin" })]),
					_: 1
				}, 8, ["label"]),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: [
					_ctx.$style.form__row,
					_ctx.$style["form__row--between"],
					_ctx.$style["form__row--buttons"]
				] }, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_GeneralButton, {
					class: _ctx.$style.button,
					whenClick: $options.prevStep
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_FontAwesomeIcon, { icon: "chevron-left" }), (0, require__plugin_vue_export_helper.vue_exports.createVNode)("span", null, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.activate_otp.prev")), 1)]),
					_: 1
				}, 8, ["class", "whenClick"]), (0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_GeneralButton, {
					class: _ctx.$style.button,
					type: "submit",
					theme: "primary"
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.activate_otp.submit")), 1)]),
					_: 1
				}, 8, ["class"])], 2)
			];
		}),
		_: 1
	}, _parent));
	else _push(`<!---->`);
	_push(`<!--]-->`);
}
var cssModules = { "$style": activate_otp_vue_vue_type_style_index_0_lang_module_default };
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = (0, require__plugin_vue_export_helper.vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/contents/member/activate_otp.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var activate_otp_default = /*#__PURE__*/ require__plugin_vue_export_helper._plugin_vue_export_helper_default(_sfc_main, [
	["ssrRender", _sfc_ssrRender],
	["__cssModules", cssModules],
	["__scopeId", "data-v-4f03bd17"]
]);
//#endregion
exports.default = activate_otp_default;
