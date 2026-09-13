const require__plugin_vue_export_helper = require("./_plugin-vue_export-helper-C1TPHJvg.cjs");
const require_server = require("../server.cjs");
const require_seedForm = require("./seedForm-DLpXnK6K.cjs");
const require_formErrorAlert = require("./formErrorAlert-l3UJhtgq.cjs");
const require_pinInput = require("./pinInput-97Jv5Gxs.cjs");
const require_esm = require("./esm-B3gcMG7Q.cjs");
const require_flexFormBlock = require("./flexFormBlock-DIJyVMLQ.cjs");
//#region src/views/contents/member/pin_verification.vue
var _sfc_main = {
	mixins: [require_server.common_default],
	components: {
		SeedForm: require_seedForm.seedForm_default,
		FormErrorAlert: require_formErrorAlert.formErrorAlert_default,
		FlexFormBlock: require_flexFormBlock.flexFormBlock_default,
		CheckBox: require_server.checkBox_default,
		GeneralButton: require_server.generalButton_default,
		PinInput: require_pinInput.pinInput_default
	},
	data() {
		const viewData = this.$store.state.viewData;
		return {
			...viewData,
			passkey: viewData.hasPasskey
		};
	},
	mounted() {
		if (this.passkey) this.passkeyLogin();
		else this.$refs.pinInput.focus();
	},
	beforeUnmount() {
		require_esm.WebAuthnAbortService.cancelCeremony();
	},
	watch: { async passkey(newValue) {
		if (!newValue) {
			await this.$nextTick();
			this.$refs.pinInput.focus();
		}
	} },
	methods: {
		togglePasskey() {
			this.passkey = !this.passkey;
		},
		async passkeyLogin() {
			this.$refs.form.submitting = true;
			let asseResp;
			try {
				asseResp = await require_esm.startAuthentication({ optionsJSON: this.$store.state.page.data.passkeyData });
			} catch (e) {
				if (e.code === "ERROR_CEREMONY_ABORTED") return;
				console.error(e);
				alert(e.toString());
				this.$refs.form.submitting = false;
				return;
			}
			await this.internalRequestAndProcess("/member/login/pin", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					challenge: asseResp,
					autologin: this.autologin
				})
			});
			this.$refs.form.submitting = false;
		}
	}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_FormErrorAlert = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("FormErrorAlert");
	const _component_SeedForm = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("SeedForm");
	const _component_i18next = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("i18next");
	const _component_FontAwesomeIcon = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("FontAwesomeIcon");
	const _component_FlexFormBlock = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("FlexFormBlock");
	const _component_GeneralButton = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("GeneralButton");
	const _component_PinInput = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("PinInput");
	const _component_CheckBox = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("CheckBox");
	_push(`<!--[-->`);
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_FormErrorAlert, null, null, _parent));
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedForm, {
		ref: "form",
		method: "post",
		action: "/member/login/pin"
	}, {
		default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push(`<input type="hidden" name="autologin"${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttr)("value", _ctx.autologin)} data-v-6e957f6d${_scopeId}><p data-v-6e957f6d${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.pin_verification.new_device"))}<br data-v-6e957f6d${_scopeId}>`);
				if (_ctx.useTotp) {
					_push(`<!--[-->`);
					if ($data.passkey) _push(`<span data-v-6e957f6d${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.pin_verification.passkey_verify"))}</span>`);
					else _push(`<span data-v-6e957f6d${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.pin_verification.otp_verify"))}</span>`);
					_push(`<!--]-->`);
				} else _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_i18next, { translation: _ctx.$t("views.pin_verification.email_verify") }, {
					email: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push(`<b data-v-6e957f6d${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.email)}</b>`);
						else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("b", null, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.email), 1)];
					}),
					_: 1
				}, _parent, _scopeId));
				_push(`</p>`);
				if ($data.passkey) {
					_push(`<!--[--><div class="passkey-icon" data-v-6e957f6d${_scopeId}>`);
					_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_FontAwesomeIcon, { icon: "key" }, null, _parent, _scopeId));
					_push(`</div>`);
					_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_FlexFormBlock, { class: "padding" }, {
						default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
							if (_push) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_GeneralButton, {
								whenClick: $options.passkeyLogin,
								theme: "primary",
								block: ""
							}, {
								default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
									if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.pin_verification.passkey_login_button"))}`);
									else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.pin_verification.passkey_login_button")), 1)];
								}),
								_: 1
							}, _parent, _scopeId));
							else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_GeneralButton, {
								whenClick: $options.passkeyLogin,
								theme: "primary",
								block: ""
							}, {
								default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.pin_verification.passkey_login_button")), 1)]),
								_: 1
							}, 8, ["whenClick"])];
						}),
						_: 1
					}, _parent, _scopeId));
					_push(`<!--]-->`);
				} else _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_FlexFormBlock, null, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_PinInput, {
							ref: "pinInput",
							name: "pin"
						}, null, _parent, _scopeId));
						else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_PinInput, {
							ref: "pinInput",
							name: "pin"
						}, null, 512)];
					}),
					_: 1
				}, _parent, _scopeId));
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_FlexFormBlock, { class: { "buttons padding": !$data.passkey } }, (0, require__plugin_vue_export_helper.vue_exports.createSlots)({
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_CheckBox, { name: "trust" }, {
							default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
								if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.pin_verification.trust"))}`);
								else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.pin_verification.trust")), 1)];
							}),
							_: 1
						}, _parent, _scopeId));
						else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_CheckBox, { name: "trust" }, {
							default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.pin_verification.trust")), 1)]),
							_: 1
						})];
					}),
					_: 2
				}, [!$data.passkey ? {
					name: "buttons",
					fn: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_GeneralButton, {
							type: "submit",
							theme: "primary"
						}, {
							default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
								if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.pin_verification.login_button"))}`);
								else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.pin_verification.login_button")), 1)];
							}),
							_: 1
						}, _parent, _scopeId));
						else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_GeneralButton, {
							type: "submit",
							theme: "primary"
						}, {
							default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.pin_verification.login_button")), 1)]),
							_: 1
						})];
					}),
					key: "0"
				} : void 0]), _parent, _scopeId));
				if (_ctx.data.hasPasskey) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_FlexFormBlock, { class: "other-method" }, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) {
							_push(`<div class="other-method-title" data-v-6e957f6d${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.pin_verification.other_method"))}</div>`);
							if ($data.passkey) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_GeneralButton, {
								class: "other-method-button",
								whenClick: $options.togglePasskey
							}, {
								default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
									if (_push) {
										_push(`<div class="other-method-icon" data-v-6e957f6d${_scopeId}>`);
										_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_FontAwesomeIcon, { icon: "mobile-screen" }, null, _parent, _scopeId));
										_push(`</div><div class="other-method-content" data-v-6e957f6d${_scopeId}><div data-v-6e957f6d${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.pin_verification.otp_method"))}</div><div class="other-method-description" data-v-6e957f6d${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.pin_verification.otp_method_description"))}</div></div><div class="other-method-arrow" data-v-6e957f6d${_scopeId}>`);
										_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_FontAwesomeIcon, { icon: "chevron-right" }, null, _parent, _scopeId));
										_push(`</div>`);
									} else return [
										(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: "other-method-icon" }, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_FontAwesomeIcon, { icon: "mobile-screen" })]),
										(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: "other-method-content" }, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", null, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.pin_verification.otp_method")), 1), (0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: "other-method-description" }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.pin_verification.otp_method_description")), 1)]),
										(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: "other-method-arrow" }, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_FontAwesomeIcon, { icon: "chevron-right" })])
									];
								}),
								_: 1
							}, _parent, _scopeId));
							else _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_GeneralButton, {
								class: "other-method-button",
								whenClick: $options.togglePasskey
							}, {
								default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
									if (_push) {
										_push(`<div class="other-method-icon" data-v-6e957f6d${_scopeId}>`);
										_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_FontAwesomeIcon, { icon: "key" }, null, _parent, _scopeId));
										_push(`</div><div class="other-method-content" data-v-6e957f6d${_scopeId}><div data-v-6e957f6d${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.pin_verification.passkey_method"))}</div><div class="other-method-description" data-v-6e957f6d${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.pin_verification.passkey_method_description"))}</div></div><div class="other-method-arrow" data-v-6e957f6d${_scopeId}>`);
										_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_FontAwesomeIcon, { icon: "chevron-right" }, null, _parent, _scopeId));
										_push(`</div>`);
									} else return [
										(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: "other-method-icon" }, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_FontAwesomeIcon, { icon: "key" })]),
										(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: "other-method-content" }, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", null, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.pin_verification.passkey_method")), 1), (0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: "other-method-description" }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.pin_verification.passkey_method_description")), 1)]),
										(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: "other-method-arrow" }, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_FontAwesomeIcon, { icon: "chevron-right" })])
									];
								}),
								_: 1
							}, _parent, _scopeId));
						} else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: "other-method-title" }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.pin_verification.other_method")), 1), $data.passkey ? ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(_component_GeneralButton, {
							key: 0,
							class: "other-method-button",
							whenClick: $options.togglePasskey
						}, {
							default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [
								(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: "other-method-icon" }, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_FontAwesomeIcon, { icon: "mobile-screen" })]),
								(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: "other-method-content" }, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", null, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.pin_verification.otp_method")), 1), (0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: "other-method-description" }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.pin_verification.otp_method_description")), 1)]),
								(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: "other-method-arrow" }, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_FontAwesomeIcon, { icon: "chevron-right" })])
							]),
							_: 1
						}, 8, ["whenClick"])) : ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(_component_GeneralButton, {
							key: 1,
							class: "other-method-button",
							whenClick: $options.togglePasskey
						}, {
							default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [
								(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: "other-method-icon" }, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_FontAwesomeIcon, { icon: "key" })]),
								(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: "other-method-content" }, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", null, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.pin_verification.passkey_method")), 1), (0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: "other-method-description" }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.pin_verification.passkey_method_description")), 1)]),
								(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: "other-method-arrow" }, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_FontAwesomeIcon, { icon: "chevron-right" })])
							]),
							_: 1
						}, 8, ["whenClick"]))];
					}),
					_: 1
				}, _parent, _scopeId));
				else _push(`<!---->`);
			} else return [
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("input", {
					type: "hidden",
					name: "autologin",
					value: _ctx.autologin
				}, null, 8, ["value"]),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("p", null, [
					(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.pin_verification.new_device")), 1),
					(0, require__plugin_vue_export_helper.vue_exports.createVNode)("br"),
					_ctx.useTotp ? ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(require__plugin_vue_export_helper.vue_exports.Fragment, { key: 0 }, [$data.passkey ? ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)("span", { key: 0 }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.pin_verification.passkey_verify")), 1)) : ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)("span", { key: 1 }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.pin_verification.otp_verify")), 1))], 64)) : ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(_component_i18next, {
						key: 1,
						translation: _ctx.$t("views.pin_verification.email_verify")
					}, {
						email: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("b", null, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.email), 1)]),
						_: 1
					}, 8, ["translation"]))
				]),
				$data.passkey ? ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(require__plugin_vue_export_helper.vue_exports.Fragment, { key: 0 }, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: "passkey-icon" }, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_FontAwesomeIcon, { icon: "key" })]), (0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_FlexFormBlock, { class: "padding" }, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_GeneralButton, {
						whenClick: $options.passkeyLogin,
						theme: "primary",
						block: ""
					}, {
						default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.pin_verification.passkey_login_button")), 1)]),
						_: 1
					}, 8, ["whenClick"])]),
					_: 1
				})], 64)) : ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(_component_FlexFormBlock, { key: 1 }, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_PinInput, {
						ref: "pinInput",
						name: "pin"
					}, null, 512)]),
					_: 1
				})),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_FlexFormBlock, { class: { "buttons padding": !$data.passkey } }, (0, require__plugin_vue_export_helper.vue_exports.createSlots)({
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_CheckBox, { name: "trust" }, {
						default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.pin_verification.trust")), 1)]),
						_: 1
					})]),
					_: 2
				}, [!$data.passkey ? {
					name: "buttons",
					fn: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_GeneralButton, {
						type: "submit",
						theme: "primary"
					}, {
						default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.pin_verification.login_button")), 1)]),
						_: 1
					})]),
					key: "0"
				} : void 0]), 1032, ["class"]),
				_ctx.data.hasPasskey ? ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(_component_FlexFormBlock, {
					key: 2,
					class: "other-method"
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: "other-method-title" }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.pin_verification.other_method")), 1), $data.passkey ? ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(_component_GeneralButton, {
						key: 0,
						class: "other-method-button",
						whenClick: $options.togglePasskey
					}, {
						default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [
							(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: "other-method-icon" }, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_FontAwesomeIcon, { icon: "mobile-screen" })]),
							(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: "other-method-content" }, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", null, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.pin_verification.otp_method")), 1), (0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: "other-method-description" }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.pin_verification.otp_method_description")), 1)]),
							(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: "other-method-arrow" }, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_FontAwesomeIcon, { icon: "chevron-right" })])
						]),
						_: 1
					}, 8, ["whenClick"])) : ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(_component_GeneralButton, {
						key: 1,
						class: "other-method-button",
						whenClick: $options.togglePasskey
					}, {
						default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [
							(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: "other-method-icon" }, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_FontAwesomeIcon, { icon: "key" })]),
							(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: "other-method-content" }, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", null, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.pin_verification.passkey_method")), 1), (0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: "other-method-description" }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.pin_verification.passkey_method_description")), 1)]),
							(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: "other-method-arrow" }, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_FontAwesomeIcon, { icon: "chevron-right" })])
						]),
						_: 1
					}, 8, ["whenClick"]))]),
					_: 1
				})) : (0, require__plugin_vue_export_helper.vue_exports.createCommentVNode)("", true)
			];
		}),
		_: 1
	}, _parent));
	_push(`<!--]-->`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = (0, require__plugin_vue_export_helper.vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/contents/member/pin_verification.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var pin_verification_default = /*#__PURE__*/ require__plugin_vue_export_helper._plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-6e957f6d"]]);
//#endregion
exports.default = pin_verification_default;
