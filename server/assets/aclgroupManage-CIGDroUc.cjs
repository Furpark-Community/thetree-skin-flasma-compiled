const require__plugin_vue_export_helper = require("./_plugin-vue_export-helper-C1TPHJvg.cjs");
const require_server = require("../server.cjs");
const require_seedForm = require("./seedForm-DLpXnK6K.cjs");
const require_seedFormBlock = require("./seedFormBlock-C_WGpUCH.cjs");
const require_inputField = require("./inputField-DBSQICqU.cjs");
var aclgroupManage_vue_vue_type_style_index_0_lang_module_default = {
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
//#region src/views/contents/admin/aclgroupManage.vue
var _sfc_main = {
	mixins: [require_server.common_default],
	components: {
		GeneralButton: require_server.generalButton_default,
		CheckBox: require_server.checkBox_default,
		InputField: require_inputField.inputField_default,
		SeedFormBlock: require_seedFormBlock.seedFormBlock_default,
		SeedForm: require_seedForm.seedForm_default,
		SelectMenu: require_server.selectMenu_default
	},
	computed: { group() {
		return this.data.group;
	} },
	methods: { async deleteGroup() {
		if (!confirm(this.$t("views.aclgroup_manage.delete_confirm", { name: this.group.name }))) return;
		await this.internalRequestAndProcess("/aclgroup/group_remove", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: new URLSearchParams({ uuid: this.group.uuid }).toString()
		});
	} }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_SeedForm = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("SeedForm");
	const _component_SeedFormBlock = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("SeedFormBlock");
	const _component_InputField = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("InputField");
	const _component_SelectMenu = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("SelectMenu");
	const _component_CheckBox = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("CheckBox");
	const _component_GeneralButton = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("GeneralButton");
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedForm, (0, require__plugin_vue_export_helper.vue_exports.mergeProps)({
		class: _ctx.$style.form,
		method: "post"
	}, _attrs), {
		default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push(`<h3${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)($options.group.name)}</h3><input type="hidden" name="uuid"${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttr)("value", $options.group.uuid)}${_scopeId}>`);
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedFormBlock, {
					newStyle: "",
					inputId: "nameInput",
					label: "name",
					name: "name"
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_InputField, {
							type: "text",
							id: "nameInput",
							name: "name",
							value: $options.group.name
						}, null, _parent, _scopeId));
						else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_InputField, {
							type: "text",
							id: "nameInput",
							name: "name",
							value: $options.group.name
						}, null, 8, ["value"])];
					}),
					_: 1
				}, _parent, _scopeId));
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedFormBlock, {
					newStyle: "",
					inputId: "withdraw_period_hoursInput",
					label: "withdraw_period_hours",
					name: "withdrawPeriodHours"
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_InputField, {
							type: "text",
							id: "withdraw_period_hoursInput",
							name: "withdrawPeriodHours",
							modelValue: $options.group.withdrawPeriodHours,
							"onUpdate:modelValue": ($event) => $options.group.withdrawPeriodHours = $event
						}, null, _parent, _scopeId));
						else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_InputField, {
							type: "text",
							id: "withdraw_period_hoursInput",
							name: "withdrawPeriodHours",
							modelValue: $options.group.withdrawPeriodHours,
							"onUpdate:modelValue": ($event) => $options.group.withdrawPeriodHours = $event
						}, null, 8, ["modelValue", "onUpdate:modelValue"])];
					}),
					_: 1
				}, _parent, _scopeId));
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedFormBlock, {
					newStyle: "",
					inputId: "signup_policyInput",
					label: "signup_policy",
					name: "signupPolicy"
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SelectMenu, {
							id: "signup_policyInput",
							name: "signupPolicy",
							value: $options.group.signupPolicy
						}, {
							default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
								if (_push) _push(`<option value="0"${_scopeId}>none</option><option value="1"${_scopeId}>block</option><option value="2"${_scopeId}>require_verification</option>`);
								else return [
									(0, require__plugin_vue_export_helper.vue_exports.createVNode)("option", { value: "0" }, "none"),
									(0, require__plugin_vue_export_helper.vue_exports.createVNode)("option", { value: "1" }, "block"),
									(0, require__plugin_vue_export_helper.vue_exports.createVNode)("option", { value: "2" }, "require_verification")
								];
							}),
							_: 1
						}, _parent, _scopeId));
						else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SelectMenu, {
							id: "signup_policyInput",
							name: "signupPolicy",
							value: $options.group.signupPolicy
						}, {
							default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [
								(0, require__plugin_vue_export_helper.vue_exports.createVNode)("option", { value: "0" }, "none"),
								(0, require__plugin_vue_export_helper.vue_exports.createVNode)("option", { value: "1" }, "block"),
								(0, require__plugin_vue_export_helper.vue_exports.createVNode)("option", { value: "2" }, "require_verification")
							]),
							_: 1
						}, 8, ["value"])];
					}),
					_: 1
				}, _parent, _scopeId));
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedFormBlock, {
					newStyle: "",
					inputId: "max_durationInput",
					label: "max_duration",
					name: "maxDuration"
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_InputField, {
							type: "text",
							id: "max_durationInput",
							name: "maxDuration",
							modelValue: $options.group.maxDuration,
							"onUpdate:modelValue": ($event) => $options.group.maxDuration = $event
						}, null, _parent, _scopeId));
						else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_InputField, {
							type: "text",
							id: "max_durationInput",
							name: "maxDuration",
							modelValue: $options.group.maxDuration,
							"onUpdate:modelValue": ($event) => $options.group.maxDuration = $event
						}, null, 8, ["modelValue", "onUpdate:modelValue"])];
					}),
					_: 1
				}, _parent, _scopeId));
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedFormBlock, {
					newStyle: "",
					inputId: "max_duration_ipInput",
					label: "max_duration_ip",
					name: "maxDurationIp"
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_InputField, {
							type: "text",
							id: "max_duration_ipInput",
							name: "maxDurationIp",
							modelValue: $options.group.maxDurationIp,
							"onUpdate:modelValue": ($event) => $options.group.maxDurationIp = $event
						}, null, _parent, _scopeId));
						else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_InputField, {
							type: "text",
							id: "max_duration_ipInput",
							name: "maxDurationIp",
							modelValue: $options.group.maxDurationIp,
							"onUpdate:modelValue": ($event) => $options.group.maxDurationIp = $event
						}, null, 8, ["modelValue", "onUpdate:modelValue"])];
					}),
					_: 1
				}, _parent, _scopeId));
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedFormBlock, {
					newStyle: "",
					inputId: "max_duration_accountInput",
					label: "max_duration_account",
					name: "maxDurationAccount"
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_InputField, {
							type: "text",
							id: "max_duration_accountInput",
							name: "maxDurationAccount",
							modelValue: $options.group.maxDurationAccount,
							"onUpdate:modelValue": ($event) => $options.group.maxDurationAccount = $event
						}, null, _parent, _scopeId));
						else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_InputField, {
							type: "text",
							id: "max_duration_accountInput",
							name: "maxDurationAccount",
							modelValue: $options.group.maxDurationAccount,
							"onUpdate:modelValue": ($event) => $options.group.maxDurationAccount = $event
						}, null, 8, ["modelValue", "onUpdate:modelValue"])];
					}),
					_: 1
				}, _parent, _scopeId));
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedFormBlock, {
					newStyle: "",
					inputId: "max_ipv4_cidrInput",
					label: "max_ipv4_cidr",
					name: "maxIpv4Cidr"
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_InputField, {
							type: "text",
							id: "max_ipv4_cidrInput",
							name: "maxIpv4Cidr",
							modelValue: $options.group.maxIpv4Cidr,
							"onUpdate:modelValue": ($event) => $options.group.maxIpv4Cidr = $event
						}, null, _parent, _scopeId));
						else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_InputField, {
							type: "text",
							id: "max_ipv4_cidrInput",
							name: "maxIpv4Cidr",
							modelValue: $options.group.maxIpv4Cidr,
							"onUpdate:modelValue": ($event) => $options.group.maxIpv4Cidr = $event
						}, null, 8, ["modelValue", "onUpdate:modelValue"])];
					}),
					_: 1
				}, _parent, _scopeId));
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedFormBlock, {
					newStyle: "",
					inputId: "max_ipv6_cidrInput",
					label: "max_ipv6_cidr",
					name: "maxIpv6Cidr"
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_InputField, {
							type: "text",
							id: "max_ipv6_cidrInput",
							name: "maxIpv6Cidr",
							modelValue: $options.group.maxIpv6Cidr,
							"onUpdate:modelValue": ($event) => $options.group.maxIpv6Cidr = $event
						}, null, _parent, _scopeId));
						else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_InputField, {
							type: "text",
							id: "max_ipv6_cidrInput",
							name: "maxIpv6Cidr",
							modelValue: $options.group.maxIpv6Cidr,
							"onUpdate:modelValue": ($event) => $options.group.maxIpv6Cidr = $event
						}, null, 8, ["modelValue", "onUpdate:modelValue"])];
					}),
					_: 1
				}, _parent, _scopeId));
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedFormBlock, {
					newStyle: "",
					inputId: "access_flagsInput",
					label: "access_flags",
					name: "accessPerms"
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_InputField, {
							type: "text",
							id: "access_flagsInput",
							name: "accessPerms",
							modelValue: $options.group.accessPerms,
							"onUpdate:modelValue": ($event) => $options.group.accessPerms = $event
						}, null, _parent, _scopeId));
						else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_InputField, {
							type: "text",
							id: "access_flagsInput",
							name: "accessPerms",
							modelValue: $options.group.accessPerms,
							"onUpdate:modelValue": ($event) => $options.group.accessPerms = $event
						}, null, 8, ["modelValue", "onUpdate:modelValue"])];
					}),
					_: 1
				}, _parent, _scopeId));
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedFormBlock, {
					newStyle: "",
					inputId: "add_flagsInput",
					label: "add_flags",
					name: "addPerms"
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_InputField, {
							type: "text",
							id: "add_flagsInput",
							name: "addPerms",
							modelValue: $options.group.addPerms,
							"onUpdate:modelValue": ($event) => $options.group.addPerms = $event
						}, null, _parent, _scopeId));
						else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_InputField, {
							type: "text",
							id: "add_flagsInput",
							name: "addPerms",
							modelValue: $options.group.addPerms,
							"onUpdate:modelValue": ($event) => $options.group.addPerms = $event
						}, null, 8, ["modelValue", "onUpdate:modelValue"])];
					}),
					_: 1
				}, _parent, _scopeId));
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedFormBlock, {
					newStyle: "",
					inputId: "remove_flagsInput",
					label: "remove_flags",
					name: "removePerms"
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_InputField, {
							type: "text",
							id: "remove_flagsInput",
							name: "removePerms",
							modelValue: $options.group.removePerms,
							"onUpdate:modelValue": ($event) => $options.group.removePerms = $event
						}, null, _parent, _scopeId));
						else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_InputField, {
							type: "text",
							id: "remove_flagsInput",
							name: "removePerms",
							modelValue: $options.group.removePerms,
							"onUpdate:modelValue": ($event) => $options.group.removePerms = $event
						}, null, 8, ["modelValue", "onUpdate:modelValue"])];
					}),
					_: 1
				}, _parent, _scopeId));
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedFormBlock, {
					newStyle: "",
					inputId: "managePermsInput",
					label: "manage_flags",
					name: "managePerms"
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_InputField, {
							type: "text",
							id: "managePermsInput",
							name: "managePerms",
							modelValue: $options.group.managePerms,
							"onUpdate:modelValue": ($event) => $options.group.managePerms = $event
						}, null, _parent, _scopeId));
						else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_InputField, {
							type: "text",
							id: "managePermsInput",
							name: "managePerms",
							modelValue: $options.group.managePerms,
							"onUpdate:modelValue": ($event) => $options.group.managePerms = $event
						}, null, 8, ["modelValue", "onUpdate:modelValue"])];
					}),
					_: 1
				}, _parent, _scopeId));
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedFormBlock, {
					newStyle: "",
					inputId: "styleInput",
					label: "style",
					name: "userCSS"
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_InputField, {
							type: "text",
							id: "styleInput",
							name: "userCSS",
							modelValue: $options.group.userCSS,
							"onUpdate:modelValue": ($event) => $options.group.userCSS = $event
						}, null, _parent, _scopeId));
						else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_InputField, {
							type: "text",
							id: "styleInput",
							name: "userCSS",
							modelValue: $options.group.userCSS,
							"onUpdate:modelValue": ($event) => $options.group.userCSS = $event
						}, null, 8, ["modelValue", "onUpdate:modelValue"])];
					}),
					_: 1
				}, _parent, _scopeId));
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedFormBlock, {
					newStyle: "",
					inputId: "messageInput",
					label: "message",
					name: "aclMessage"
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_InputField, {
							type: "text",
							id: "messageInput",
							name: "aclMessage",
							modelValue: $options.group.aclMessage,
							"onUpdate:modelValue": ($event) => $options.group.aclMessage = $event
						}, null, _parent, _scopeId));
						else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_InputField, {
							type: "text",
							id: "messageInput",
							name: "aclMessage",
							modelValue: $options.group.aclMessage,
							"onUpdate:modelValue": ($event) => $options.group.aclMessage = $event
						}, null, 8, ["modelValue", "onUpdate:modelValue"])];
					}),
					_: 1
				}, _parent, _scopeId));
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedFormBlock, {
					newStyle: "",
					inputId: "self_remove_noteInput",
					label: "self_remove_note",
					name: "selfRemoveNote"
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_InputField, {
							type: "text",
							id: "self_remove_noteInput",
							name: "selfRemoveNote",
							modelValue: $options.group.selfRemoveNote,
							"onUpdate:modelValue": ($event) => $options.group.selfRemoveNote = $event
						}, null, _parent, _scopeId));
						else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_InputField, {
							type: "text",
							id: "self_remove_noteInput",
							name: "selfRemoveNote",
							modelValue: $options.group.selfRemoveNote,
							"onUpdate:modelValue": ($event) => $options.group.selfRemoveNote = $event
						}, null, 8, ["modelValue", "onUpdate:modelValue"])];
					}),
					_: 1
				}, _parent, _scopeId));
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedFormBlock, {
					newStyle: "",
					inputId: "permissionsInput",
					label: "permissions",
					name: "permissions"
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_InputField, {
							type: "text",
							id: "permissionsInput",
							name: "permissions",
							modelValue: $options.group.permissions,
							"onUpdate:modelValue": ($event) => $options.group.permissions = $event
						}, null, _parent, _scopeId));
						else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_InputField, {
							type: "text",
							id: "permissionsInput",
							name: "permissions",
							modelValue: $options.group.permissions,
							"onUpdate:modelValue": ($event) => $options.group.permissions = $event
						}, null, 8, ["modelValue", "onUpdate:modelValue"])];
					}),
					_: 1
				}, _parent, _scopeId));
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedFormBlock, {
					newStyle: "",
					inputId: "captchaRateInput",
					label: "captcha_rate",
					name: "captchaRate"
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_InputField, {
							type: "text",
							id: "captchaRateInput",
							name: "captchaRate",
							modelValue: $options.group.captchaRate,
							"onUpdate:modelValue": ($event) => $options.group.captchaRate = $event
						}, null, _parent, _scopeId));
						else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_InputField, {
							type: "text",
							id: "captchaRateInput",
							name: "captchaRate",
							modelValue: $options.group.captchaRate,
							"onUpdate:modelValue": ($event) => $options.group.captchaRate = $event
						}, null, 8, ["modelValue", "onUpdate:modelValue"])];
					}),
					_: 1
				}, _parent, _scopeId));
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedFormBlock, { newStyle: "" }, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_CheckBox, {
							id: "show_user_documentInput",
							name: "forBlock",
							modelValue: $options.group.forBlock,
							"onUpdate:modelValue": ($event) => $options.group.forBlock = $event,
							value: "Y"
						}, {
							default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
								if (_push) _push(`show_user_document`);
								else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)("show_user_document")];
							}),
							_: 1
						}, _parent, _scopeId));
						else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_CheckBox, {
							id: "show_user_documentInput",
							name: "forBlock",
							modelValue: $options.group.forBlock,
							"onUpdate:modelValue": ($event) => $options.group.forBlock = $event,
							value: "Y"
						}, {
							default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)("show_user_document")]),
							_: 1
						}, 8, ["modelValue", "onUpdate:modelValue"])];
					}),
					_: 1
				}, _parent, _scopeId));
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedFormBlock, { newStyle: "" }, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_CheckBox, {
							id: "self_removableInput",
							name: "selfRemovable",
							modelValue: $options.group.selfRemovable,
							"onUpdate:modelValue": ($event) => $options.group.selfRemovable = $event,
							value: "Y"
						}, {
							default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
								if (_push) _push(`self_removable`);
								else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)("self_removable")];
							}),
							_: 1
						}, _parent, _scopeId));
						else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_CheckBox, {
							id: "self_removableInput",
							name: "selfRemovable",
							modelValue: $options.group.selfRemovable,
							"onUpdate:modelValue": ($event) => $options.group.selfRemovable = $event,
							value: "Y"
						}, {
							default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)("self_removable")]),
							_: 1
						}, 8, ["modelValue", "onUpdate:modelValue"])];
					}),
					_: 1
				}, _parent, _scopeId));
				_push(`<div class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)([_ctx.$style.form__row, _ctx.$style["form__row--buttons"]])}"${_scopeId}><div class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)(_ctx.$style.form__buttons)}"${_scopeId}>`);
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_GeneralButton, {
					theme: "danger",
					type: "button",
					whenClick: $options.deleteGroup
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.aclgroup_manage.delete"))}`);
						else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.aclgroup_manage.delete")), 1)];
					}),
					_: 1
				}, _parent, _scopeId));
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_GeneralButton, {
					class: _ctx.$style.button,
					theme: "primary",
					type: "submit"
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.aclgroup_manage.submit"))}`);
						else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.aclgroup_manage.submit")), 1)];
					}),
					_: 1
				}, _parent, _scopeId));
				_push(`</div></div>`);
			} else return [
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("h3", null, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)($options.group.name), 1),
				(0, require__plugin_vue_export_helper.vue_exports.withDirectives)((0, require__plugin_vue_export_helper.vue_exports.createVNode)("input", {
					type: "hidden",
					name: "uuid",
					"onUpdate:modelValue": ($event) => $options.group.uuid = $event
				}, null, 8, ["onUpdate:modelValue"]), [[require__plugin_vue_export_helper.vue_exports.vModelText, $options.group.uuid]]),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedFormBlock, {
					newStyle: "",
					inputId: "nameInput",
					label: "name",
					name: "name"
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_InputField, {
						type: "text",
						id: "nameInput",
						name: "name",
						value: $options.group.name
					}, null, 8, ["value"])]),
					_: 1
				}),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedFormBlock, {
					newStyle: "",
					inputId: "withdraw_period_hoursInput",
					label: "withdraw_period_hours",
					name: "withdrawPeriodHours"
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_InputField, {
						type: "text",
						id: "withdraw_period_hoursInput",
						name: "withdrawPeriodHours",
						modelValue: $options.group.withdrawPeriodHours,
						"onUpdate:modelValue": ($event) => $options.group.withdrawPeriodHours = $event
					}, null, 8, ["modelValue", "onUpdate:modelValue"])]),
					_: 1
				}),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedFormBlock, {
					newStyle: "",
					inputId: "signup_policyInput",
					label: "signup_policy",
					name: "signupPolicy"
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SelectMenu, {
						id: "signup_policyInput",
						name: "signupPolicy",
						value: $options.group.signupPolicy
					}, {
						default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [
							(0, require__plugin_vue_export_helper.vue_exports.createVNode)("option", { value: "0" }, "none"),
							(0, require__plugin_vue_export_helper.vue_exports.createVNode)("option", { value: "1" }, "block"),
							(0, require__plugin_vue_export_helper.vue_exports.createVNode)("option", { value: "2" }, "require_verification")
						]),
						_: 1
					}, 8, ["value"])]),
					_: 1
				}),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedFormBlock, {
					newStyle: "",
					inputId: "max_durationInput",
					label: "max_duration",
					name: "maxDuration"
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_InputField, {
						type: "text",
						id: "max_durationInput",
						name: "maxDuration",
						modelValue: $options.group.maxDuration,
						"onUpdate:modelValue": ($event) => $options.group.maxDuration = $event
					}, null, 8, ["modelValue", "onUpdate:modelValue"])]),
					_: 1
				}),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedFormBlock, {
					newStyle: "",
					inputId: "max_duration_ipInput",
					label: "max_duration_ip",
					name: "maxDurationIp"
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_InputField, {
						type: "text",
						id: "max_duration_ipInput",
						name: "maxDurationIp",
						modelValue: $options.group.maxDurationIp,
						"onUpdate:modelValue": ($event) => $options.group.maxDurationIp = $event
					}, null, 8, ["modelValue", "onUpdate:modelValue"])]),
					_: 1
				}),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedFormBlock, {
					newStyle: "",
					inputId: "max_duration_accountInput",
					label: "max_duration_account",
					name: "maxDurationAccount"
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_InputField, {
						type: "text",
						id: "max_duration_accountInput",
						name: "maxDurationAccount",
						modelValue: $options.group.maxDurationAccount,
						"onUpdate:modelValue": ($event) => $options.group.maxDurationAccount = $event
					}, null, 8, ["modelValue", "onUpdate:modelValue"])]),
					_: 1
				}),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedFormBlock, {
					newStyle: "",
					inputId: "max_ipv4_cidrInput",
					label: "max_ipv4_cidr",
					name: "maxIpv4Cidr"
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_InputField, {
						type: "text",
						id: "max_ipv4_cidrInput",
						name: "maxIpv4Cidr",
						modelValue: $options.group.maxIpv4Cidr,
						"onUpdate:modelValue": ($event) => $options.group.maxIpv4Cidr = $event
					}, null, 8, ["modelValue", "onUpdate:modelValue"])]),
					_: 1
				}),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedFormBlock, {
					newStyle: "",
					inputId: "max_ipv6_cidrInput",
					label: "max_ipv6_cidr",
					name: "maxIpv6Cidr"
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_InputField, {
						type: "text",
						id: "max_ipv6_cidrInput",
						name: "maxIpv6Cidr",
						modelValue: $options.group.maxIpv6Cidr,
						"onUpdate:modelValue": ($event) => $options.group.maxIpv6Cidr = $event
					}, null, 8, ["modelValue", "onUpdate:modelValue"])]),
					_: 1
				}),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedFormBlock, {
					newStyle: "",
					inputId: "access_flagsInput",
					label: "access_flags",
					name: "accessPerms"
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_InputField, {
						type: "text",
						id: "access_flagsInput",
						name: "accessPerms",
						modelValue: $options.group.accessPerms,
						"onUpdate:modelValue": ($event) => $options.group.accessPerms = $event
					}, null, 8, ["modelValue", "onUpdate:modelValue"])]),
					_: 1
				}),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedFormBlock, {
					newStyle: "",
					inputId: "add_flagsInput",
					label: "add_flags",
					name: "addPerms"
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_InputField, {
						type: "text",
						id: "add_flagsInput",
						name: "addPerms",
						modelValue: $options.group.addPerms,
						"onUpdate:modelValue": ($event) => $options.group.addPerms = $event
					}, null, 8, ["modelValue", "onUpdate:modelValue"])]),
					_: 1
				}),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedFormBlock, {
					newStyle: "",
					inputId: "remove_flagsInput",
					label: "remove_flags",
					name: "removePerms"
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_InputField, {
						type: "text",
						id: "remove_flagsInput",
						name: "removePerms",
						modelValue: $options.group.removePerms,
						"onUpdate:modelValue": ($event) => $options.group.removePerms = $event
					}, null, 8, ["modelValue", "onUpdate:modelValue"])]),
					_: 1
				}),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedFormBlock, {
					newStyle: "",
					inputId: "managePermsInput",
					label: "manage_flags",
					name: "managePerms"
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_InputField, {
						type: "text",
						id: "managePermsInput",
						name: "managePerms",
						modelValue: $options.group.managePerms,
						"onUpdate:modelValue": ($event) => $options.group.managePerms = $event
					}, null, 8, ["modelValue", "onUpdate:modelValue"])]),
					_: 1
				}),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedFormBlock, {
					newStyle: "",
					inputId: "styleInput",
					label: "style",
					name: "userCSS"
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_InputField, {
						type: "text",
						id: "styleInput",
						name: "userCSS",
						modelValue: $options.group.userCSS,
						"onUpdate:modelValue": ($event) => $options.group.userCSS = $event
					}, null, 8, ["modelValue", "onUpdate:modelValue"])]),
					_: 1
				}),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedFormBlock, {
					newStyle: "",
					inputId: "messageInput",
					label: "message",
					name: "aclMessage"
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_InputField, {
						type: "text",
						id: "messageInput",
						name: "aclMessage",
						modelValue: $options.group.aclMessage,
						"onUpdate:modelValue": ($event) => $options.group.aclMessage = $event
					}, null, 8, ["modelValue", "onUpdate:modelValue"])]),
					_: 1
				}),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedFormBlock, {
					newStyle: "",
					inputId: "self_remove_noteInput",
					label: "self_remove_note",
					name: "selfRemoveNote"
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_InputField, {
						type: "text",
						id: "self_remove_noteInput",
						name: "selfRemoveNote",
						modelValue: $options.group.selfRemoveNote,
						"onUpdate:modelValue": ($event) => $options.group.selfRemoveNote = $event
					}, null, 8, ["modelValue", "onUpdate:modelValue"])]),
					_: 1
				}),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedFormBlock, {
					newStyle: "",
					inputId: "permissionsInput",
					label: "permissions",
					name: "permissions"
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_InputField, {
						type: "text",
						id: "permissionsInput",
						name: "permissions",
						modelValue: $options.group.permissions,
						"onUpdate:modelValue": ($event) => $options.group.permissions = $event
					}, null, 8, ["modelValue", "onUpdate:modelValue"])]),
					_: 1
				}),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedFormBlock, {
					newStyle: "",
					inputId: "captchaRateInput",
					label: "captcha_rate",
					name: "captchaRate"
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_InputField, {
						type: "text",
						id: "captchaRateInput",
						name: "captchaRate",
						modelValue: $options.group.captchaRate,
						"onUpdate:modelValue": ($event) => $options.group.captchaRate = $event
					}, null, 8, ["modelValue", "onUpdate:modelValue"])]),
					_: 1
				}),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedFormBlock, { newStyle: "" }, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_CheckBox, {
						id: "show_user_documentInput",
						name: "forBlock",
						modelValue: $options.group.forBlock,
						"onUpdate:modelValue": ($event) => $options.group.forBlock = $event,
						value: "Y"
					}, {
						default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)("show_user_document")]),
						_: 1
					}, 8, ["modelValue", "onUpdate:modelValue"])]),
					_: 1
				}),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedFormBlock, { newStyle: "" }, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_CheckBox, {
						id: "self_removableInput",
						name: "selfRemovable",
						modelValue: $options.group.selfRemovable,
						"onUpdate:modelValue": ($event) => $options.group.selfRemovable = $event,
						value: "Y"
					}, {
						default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)("self_removable")]),
						_: 1
					}, 8, ["modelValue", "onUpdate:modelValue"])]),
					_: 1
				}),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: [_ctx.$style.form__row, _ctx.$style["form__row--buttons"]] }, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: _ctx.$style.form__buttons }, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_GeneralButton, {
					theme: "danger",
					type: "button",
					whenClick: $options.deleteGroup
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.aclgroup_manage.delete")), 1)]),
					_: 1
				}, 8, ["whenClick"]), (0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_GeneralButton, {
					class: _ctx.$style.button,
					theme: "primary",
					type: "submit"
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.aclgroup_manage.submit")), 1)]),
					_: 1
				}, 8, ["class"])], 2)], 2)
			];
		}),
		_: 1
	}, _parent));
}
var cssModules = { "$style": aclgroupManage_vue_vue_type_style_index_0_lang_module_default };
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = (0, require__plugin_vue_export_helper.vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/contents/admin/aclgroupManage.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var aclgroupManage_default = /*#__PURE__*/ require__plugin_vue_export_helper._plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__cssModules", cssModules]]);
//#endregion
exports.default = aclgroupManage_default;
