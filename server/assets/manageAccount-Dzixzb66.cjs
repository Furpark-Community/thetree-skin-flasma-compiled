const require__plugin_vue_export_helper = require("./_plugin-vue_export-helper-C1TPHJvg.cjs");
const require_server = require("../server.cjs");
const require_seedForm = require("./seedForm-DLpXnK6K.cjs");
const require_formErrorAlert = require("./formErrorAlert-l3UJhtgq.cjs");
const require_prevNextBtn = require("./prevNextBtn-BuquZ4_C.cjs");
const require_heading = require("./heading-CgAmXkAX.cjs");
const require_seedFormBlock = require("./seedFormBlock-C_WGpUCH.cjs");
const require_inputField = require("./inputField-DBSQICqU.cjs");
var manageAccount_vue_vue_type_style_index_0_lang_module_default = {
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
//#region src/views/contents/admin/manageAccount.vue
var _sfc_main = {
	mixins: [require_server.common_default],
	components: {
		FormErrorAlert: require_formErrorAlert.formErrorAlert_default,
		Heading: require_heading.heading_default,
		PrevNextBtn: require_prevNextBtn.prevNextBtn_default,
		NuxtLink: require_server.nuxtLink_default,
		CheckBox: require_server.checkBox_default,
		GeneralButton: require_server.generalButton_default,
		InputField: require_inputField.inputField_default,
		SeedFormBlock: require_seedFormBlock.seedFormBlock_default,
		SeedForm: require_seedForm.seedForm_default
	},
	mounted() {
		this.focusQuery();
	},
	watch: { $route() {
		this.focusQuery();
	} },
	methods: {
		focusQuery() {
			if (!this.data.targetUser) this.$refs.queryInput.focus();
		},
		async accountAction(action, danger = true) {
			if (!this.data.targetUser.uuid) return;
			if (danger && !confirm("go?")) return;
			await this.internalRequestAndProcess("/admin/manage_account/action", {
				method: "POST",
				headers: { "Content-Type": "application/x-www-form-urlencoded" },
				body: new URLSearchParams({
					uuid: this.data.targetUser.uuid,
					action
				}).toString()
			});
		}
	}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_SeedForm = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("SeedForm");
	const _component_FormErrorAlert = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("FormErrorAlert");
	const _component_SeedFormBlock = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("SeedFormBlock");
	const _component_InputField = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("InputField");
	const _component_GeneralButton = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("GeneralButton");
	const _component_PrevNextBtn = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("PrevNextBtn");
	const _component_NuxtLink = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("NuxtLink");
	const _component_CheckBox = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("CheckBox");
	const _component_Heading = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("Heading");
	_push(`<!--[-->`);
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedForm, { class: _ctx.$style.form }, {
		default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
			if (_push) {
				if (!_ctx.data.targetUser) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_FormErrorAlert, null, null, _parent, _scopeId));
				else _push(`<!---->`);
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedFormBlock, {
					name: "query",
					label: "query",
					inputId: "queryInput",
					newStyle: ""
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_InputField, {
							name: "query",
							id: "queryInput",
							required: "",
							ref: "queryInput"
						}, null, _parent, _scopeId));
						else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_InputField, {
							name: "query",
							id: "queryInput",
							required: "",
							ref: "queryInput"
						}, null, 512)];
					}),
					_: 1
				}, _parent, _scopeId));
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedFormBlock, { class: _ctx.$style["form__row--buttons"] }, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) {
							_push(`<div data-v-d553acc4${_scopeId}>`);
							_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_GeneralButton, {
								theme: "primary",
								type: "submit"
							}, {
								default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
									if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.manage_account.search"))}`);
									else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.manage_account.search")), 1)];
								}),
								_: 1
							}, _parent, _scopeId));
							_push(`</div>`);
						} else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", null, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_GeneralButton, {
							theme: "primary",
							type: "submit"
						}, {
							default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.manage_account.search")), 1)]),
							_: 1
						})])];
					}),
					_: 1
				}, _parent, _scopeId));
				if (_ctx.data.searchData) {
					_push(`<div data-v-d553acc4${_scopeId}><div data-v-d553acc4${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.manage_account.total", { count: _ctx.data.searchData.total }))}</div>`);
					_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_PrevNextBtn, (0, require__plugin_vue_export_helper.vue_exports.mergeProps)({ flex: "" }, _ctx.data.searchData.pageProps), null, _parent, _scopeId));
					_push(`<ul data-v-d553acc4${_scopeId}><!--[-->`);
					(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderList)(_ctx.data.searchData.items, (item) => {
						_push(`<li data-v-d553acc4${_scopeId}>`);
						_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_NuxtLink, { to: "?uuid=" + item.uuid }, {
							default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
								if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(item.name)}`);
								else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(item.name), 1)];
							}),
							_: 2
						}, _parent, _scopeId));
						_push(`</li>`);
					});
					_push(`<!--]--></ul>`);
					_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_PrevNextBtn, (0, require__plugin_vue_export_helper.vue_exports.mergeProps)({ flex: "" }, _ctx.data.searchData.pageProps), null, _parent, _scopeId));
					_push(`</div>`);
				} else _push(`<!---->`);
			} else return [
				!_ctx.data.targetUser ? ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(_component_FormErrorAlert, { key: 0 })) : (0, require__plugin_vue_export_helper.vue_exports.createCommentVNode)("", true),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedFormBlock, {
					name: "query",
					label: "query",
					inputId: "queryInput",
					newStyle: ""
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_InputField, {
						name: "query",
						id: "queryInput",
						required: "",
						ref: "queryInput"
					}, null, 512)]),
					_: 1
				}),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedFormBlock, { class: _ctx.$style["form__row--buttons"] }, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", null, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_GeneralButton, {
						theme: "primary",
						type: "submit"
					}, {
						default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.manage_account.search")), 1)]),
						_: 1
					})])]),
					_: 1
				}, 8, ["class"]),
				_ctx.data.searchData ? ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)("div", { key: 1 }, [
					(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", null, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.manage_account.total", { count: _ctx.data.searchData.total })), 1),
					(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_PrevNextBtn, (0, require__plugin_vue_export_helper.vue_exports.mergeProps)({ flex: "" }, _ctx.data.searchData.pageProps), null, 16),
					(0, require__plugin_vue_export_helper.vue_exports.createVNode)("ul", null, [((0, require__plugin_vue_export_helper.vue_exports.openBlock)(true), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(require__plugin_vue_export_helper.vue_exports.Fragment, null, (0, require__plugin_vue_export_helper.vue_exports.renderList)(_ctx.data.searchData.items, (item) => {
						return (0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)("li", { key: item.uuid }, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_NuxtLink, { to: "?uuid=" + item.uuid }, {
							default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(item.name), 1)]),
							_: 2
						}, 1032, ["to"])]);
					}), 128))]),
					(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_PrevNextBtn, (0, require__plugin_vue_export_helper.vue_exports.mergeProps)({ flex: "" }, _ctx.data.searchData.pageProps), null, 16)
				])) : (0, require__plugin_vue_export_helper.vue_exports.createCommentVNode)("", true)
			];
		}),
		_: 1
	}, _parent));
	if (_ctx.data.targetUser) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedForm, {
		method: "post",
		class: _ctx.$style.form
	}, {
		default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push(`<input type="hidden" name="uuid"${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttr)("value", _ctx.data.targetUser.uuid)} data-v-d553acc4${_scopeId}>`);
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_FormErrorAlert, null, null, _parent, _scopeId));
				_push(`<h3 data-v-d553acc4${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.data.targetUser.name)}</h3>`);
				if (_ctx.data.verifyEnabled) {
					_push(`<p class="phone-number-text" data-v-d553acc4${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.manage_account.phone"))} `);
					if (_ctx.data.phoneNumber) _push(`<span data-v-d553acc4${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.data.phoneNumber)}</span>`);
					else if (_ctx.data.targetUser.mobileVerified) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_GeneralButton, {
						size: "small",
						type: "event",
						onClick: ($event) => $options.accountAction("getPhoneNumber", false)
					}, {
						default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
							if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.manage_account.show"))}`);
							else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.manage_account.show")), 1)];
						}),
						_: 1
					}, _parent, _scopeId));
					else _push(`<span data-v-d553acc4${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.manage_account.no_phone"))}</span>`);
					_push(`</p>`);
				} else _push(`<!---->`);
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedFormBlock, {
					name: "name",
					label: "name",
					inputId: "nameInput",
					newStyle: ""
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_InputField, {
							name: "name",
							id: "nameInput",
							value: _ctx.data.targetUser.name,
							required: ""
						}, null, _parent, _scopeId));
						else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_InputField, {
							name: "name",
							id: "nameInput",
							value: _ctx.data.targetUser.name,
							required: ""
						}, null, 8, ["value"])];
					}),
					_: 1
				}, _parent, _scopeId));
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedFormBlock, {
					name: "email",
					label: "email",
					inputId: "emailInput",
					newStyle: ""
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_InputField, {
							name: "email",
							id: "emailInput",
							value: _ctx.data.targetUser.email,
							type: "email",
							required: ""
						}, null, _parent, _scopeId));
						else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_InputField, {
							name: "email",
							id: "emailInput",
							value: _ctx.data.targetUser.email,
							type: "email",
							required: ""
						}, null, 8, ["value"])];
					}),
					_: 1
				}, _parent, _scopeId));
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedFormBlock, { newStyle: "" }, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_CheckBox, {
							name: "useTotp",
							id: "useTotpInput",
							checked: _ctx.data.targetUser.useTotp,
							disabled: !_ctx.data.targetUser.useTotp,
							value: "Y"
						}, {
							default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
								if (_push) _push(` useTotp `);
								else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)(" useTotp ")];
							}),
							_: 1
						}, _parent, _scopeId));
						else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_CheckBox, {
							name: "useTotp",
							id: "useTotpInput",
							checked: _ctx.data.targetUser.useTotp,
							disabled: !_ctx.data.targetUser.useTotp,
							value: "Y"
						}, {
							default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)(" useTotp ")]),
							_: 1
						}, 8, ["checked", "disabled"])];
					}),
					_: 1
				}, _parent, _scopeId));
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedFormBlock, { newStyle: "" }, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_CheckBox, {
							name: "usePasswordlessLogin",
							id: "usePasswordlessLoginInput",
							checked: _ctx.data.targetUser.usePasswordlessLogin,
							value: "Y"
						}, {
							default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
								if (_push) _push(` usePasswordlessLogin `);
								else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)(" usePasswordlessLogin ")];
							}),
							_: 1
						}, _parent, _scopeId));
						else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_CheckBox, {
							name: "usePasswordlessLogin",
							id: "usePasswordlessLoginInput",
							checked: _ctx.data.targetUser.usePasswordlessLogin,
							value: "Y"
						}, {
							default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)(" usePasswordlessLogin ")]),
							_: 1
						}, 8, ["checked"])];
					}),
					_: 1
				}, _parent, _scopeId));
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedFormBlock, { class: _ctx.$style["form__row--buttons"] }, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) {
							_push(`<div data-v-d553acc4${_scopeId}>`);
							_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_GeneralButton, {
								theme: "primary",
								type: "submit"
							}, {
								default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
									if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.manage_account.apply"))}`);
									else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.manage_account.apply")), 1)];
								}),
								_: 1
							}, _parent, _scopeId));
							_push(`</div>`);
						} else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", null, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_GeneralButton, {
							theme: "primary",
							type: "submit"
						}, {
							default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.manage_account.apply")), 1)]),
							_: 1
						})])];
					}),
					_: 1
				}, _parent, _scopeId));
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_Heading, {
					title: _ctx.$t("views.manage_account.tools.title"),
					folded: ""
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedFormBlock, { newStyle: "" }, {
							default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
								if (_push) {
									_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_GeneralButton, {
										theme: "danger",
										type: "event",
										onClick: ($event) => $options.accountAction("resetLastNameChange")
									}, {
										default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
											if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.manage_account.tools.reset_last_name_change"))}`);
											else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.manage_account.tools.reset_last_name_change")), 1)];
										}),
										_: 1
									}, _parent, _scopeId));
									_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_GeneralButton, {
										theme: "danger",
										type: "event",
										onClick: ($event) => $options.accountAction("resetLastActivity")
									}, {
										default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
											if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.manage_account.tools.reset_last_activity"))}`);
											else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.manage_account.tools.reset_last_activity")), 1)];
										}),
										_: 1
									}, _parent, _scopeId));
									_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_GeneralButton, {
										theme: "danger",
										type: "event",
										onClick: ($event) => $options.accountAction("resetPasswordLink")
									}, {
										default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
											if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.manage_account.tools.reset_password_link"))}`);
											else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.manage_account.tools.reset_password_link")), 1)];
										}),
										_: 1
									}, _parent, _scopeId));
									_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_GeneralButton, {
										disabled: !_ctx.data.targetUser.mobileVerified,
										theme: "danger",
										type: "event",
										onClick: ($event) => $options.accountAction("removePhoneNumber")
									}, {
										default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
											if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.manage_account.tools.remove_phone_number"))}`);
											else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.manage_account.tools.remove_phone_number")), 1)];
										}),
										_: 1
									}, _parent, _scopeId));
									_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_GeneralButton, {
										theme: "danger",
										type: "event",
										onClick: ($event) => $options.accountAction("deleteAccount")
									}, {
										default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
											if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.manage_account.tools.delete_account"))}`);
											else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.manage_account.tools.delete_account")), 1)];
										}),
										_: 1
									}, _parent, _scopeId));
								} else return [
									(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_GeneralButton, {
										theme: "danger",
										type: "event",
										onClick: ($event) => $options.accountAction("resetLastNameChange")
									}, {
										default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.manage_account.tools.reset_last_name_change")), 1)]),
										_: 1
									}, 8, ["onClick"]),
									(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_GeneralButton, {
										theme: "danger",
										type: "event",
										onClick: ($event) => $options.accountAction("resetLastActivity")
									}, {
										default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.manage_account.tools.reset_last_activity")), 1)]),
										_: 1
									}, 8, ["onClick"]),
									(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_GeneralButton, {
										theme: "danger",
										type: "event",
										onClick: ($event) => $options.accountAction("resetPasswordLink")
									}, {
										default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.manage_account.tools.reset_password_link")), 1)]),
										_: 1
									}, 8, ["onClick"]),
									(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_GeneralButton, {
										disabled: !_ctx.data.targetUser.mobileVerified,
										theme: "danger",
										type: "event",
										onClick: ($event) => $options.accountAction("removePhoneNumber")
									}, {
										default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.manage_account.tools.remove_phone_number")), 1)]),
										_: 1
									}, 8, ["disabled", "onClick"]),
									(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_GeneralButton, {
										theme: "danger",
										type: "event",
										onClick: ($event) => $options.accountAction("deleteAccount")
									}, {
										default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.manage_account.tools.delete_account")), 1)]),
										_: 1
									}, 8, ["onClick"])
								];
							}),
							_: 1
						}, _parent, _scopeId));
						else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedFormBlock, { newStyle: "" }, {
							default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [
								(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_GeneralButton, {
									theme: "danger",
									type: "event",
									onClick: ($event) => $options.accountAction("resetLastNameChange")
								}, {
									default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.manage_account.tools.reset_last_name_change")), 1)]),
									_: 1
								}, 8, ["onClick"]),
								(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_GeneralButton, {
									theme: "danger",
									type: "event",
									onClick: ($event) => $options.accountAction("resetLastActivity")
								}, {
									default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.manage_account.tools.reset_last_activity")), 1)]),
									_: 1
								}, 8, ["onClick"]),
								(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_GeneralButton, {
									theme: "danger",
									type: "event",
									onClick: ($event) => $options.accountAction("resetPasswordLink")
								}, {
									default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.manage_account.tools.reset_password_link")), 1)]),
									_: 1
								}, 8, ["onClick"]),
								(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_GeneralButton, {
									disabled: !_ctx.data.targetUser.mobileVerified,
									theme: "danger",
									type: "event",
									onClick: ($event) => $options.accountAction("removePhoneNumber")
								}, {
									default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.manage_account.tools.remove_phone_number")), 1)]),
									_: 1
								}, 8, ["disabled", "onClick"]),
								(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_GeneralButton, {
									theme: "danger",
									type: "event",
									onClick: ($event) => $options.accountAction("deleteAccount")
								}, {
									default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.manage_account.tools.delete_account")), 1)]),
									_: 1
								}, 8, ["onClick"])
							]),
							_: 1
						})];
					}),
					_: 1
				}, _parent, _scopeId));
				if (_ctx.data.externalProviders?.length) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_Heading, {
					title: _ctx.$t("views.manage_account.external_account_list"),
					folded: ""
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) {
							_push(`<div class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)([_ctx.$style.table, _ctx.$style["table--bordered"]])}" data-v-d553acc4${_scopeId}><div class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)([
								_ctx.$style.row,
								_ctx.$style["row--head"],
								"table-row"
							])}" data-v-d553acc4${_scopeId}><!--[-->`);
							(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderList)([
								"provider",
								"name",
								"email"
							].map((a) => _ctx.$t("views.mypage.external_" + a)), (text) => {
								_push(`<div class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)([_ctx.$style.column, "table-column"])}" data-v-d553acc4${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(text)}</div>`);
							});
							_push(`<!--]--></div><!--[-->`);
							(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderList)(_ctx.data.externalProviders, (item) => {
								_push(`<div class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)([_ctx.$style.row, "table-row"])}" data-v-d553acc4${_scopeId}><div class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)([_ctx.$style.column, "table-column"])}" data-v-d553acc4${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(item.displayName)}</div><div class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)([_ctx.$style.column, "table-column"])}" data-v-d553acc4${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.data.targetUser.oauth2Maps[item.name]?.name)}</div><div class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)([_ctx.$style.column, "table-column"])}" data-v-d553acc4${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.data.targetUser.oauth2Maps[item.name]?.email)}</div></div>`);
							});
							_push(`<!--]--></div>`);
						} else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: [_ctx.$style.table, _ctx.$style["table--bordered"]] }, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: [
							_ctx.$style.row,
							_ctx.$style["row--head"],
							"table-row"
						] }, [((0, require__plugin_vue_export_helper.vue_exports.openBlock)(true), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(require__plugin_vue_export_helper.vue_exports.Fragment, null, (0, require__plugin_vue_export_helper.vue_exports.renderList)([
							"provider",
							"name",
							"email"
						].map((a) => _ctx.$t("views.mypage.external_" + a)), (text) => {
							return (0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)("div", { class: [_ctx.$style.column, "table-column"] }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(text), 3);
						}), 256))], 2), ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(true), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(require__plugin_vue_export_helper.vue_exports.Fragment, null, (0, require__plugin_vue_export_helper.vue_exports.renderList)(_ctx.data.externalProviders, (item) => {
							return (0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)("div", { class: [_ctx.$style.row, "table-row"] }, [
								(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: [_ctx.$style.column, "table-column"] }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(item.displayName), 3),
								(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: [_ctx.$style.column, "table-column"] }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.data.targetUser.oauth2Maps[item.name]?.name), 3),
								(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: [_ctx.$style.column, "table-column"] }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.data.targetUser.oauth2Maps[item.name]?.email), 3)
							], 2);
						}), 256))], 2)];
					}),
					_: 1
				}, _parent, _scopeId));
				else _push(`<!---->`);
			} else return [
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("input", {
					type: "hidden",
					name: "uuid",
					value: _ctx.data.targetUser.uuid
				}, null, 8, ["value"]),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_FormErrorAlert),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("h3", null, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.data.targetUser.name), 1),
				_ctx.data.verifyEnabled ? ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)("p", {
					key: 0,
					class: "phone-number-text"
				}, [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.manage_account.phone")) + " ", 1), _ctx.data.phoneNumber ? ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)("span", { key: 0 }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.data.phoneNumber), 1)) : _ctx.data.targetUser.mobileVerified ? ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(_component_GeneralButton, {
					key: 1,
					size: "small",
					type: "event",
					onClick: ($event) => $options.accountAction("getPhoneNumber", false)
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.manage_account.show")), 1)]),
					_: 1
				}, 8, ["onClick"])) : ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)("span", { key: 2 }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.manage_account.no_phone")), 1))])) : (0, require__plugin_vue_export_helper.vue_exports.createCommentVNode)("", true),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedFormBlock, {
					name: "name",
					label: "name",
					inputId: "nameInput",
					newStyle: ""
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_InputField, {
						name: "name",
						id: "nameInput",
						value: _ctx.data.targetUser.name,
						required: ""
					}, null, 8, ["value"])]),
					_: 1
				}),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedFormBlock, {
					name: "email",
					label: "email",
					inputId: "emailInput",
					newStyle: ""
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_InputField, {
						name: "email",
						id: "emailInput",
						value: _ctx.data.targetUser.email,
						type: "email",
						required: ""
					}, null, 8, ["value"])]),
					_: 1
				}),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedFormBlock, { newStyle: "" }, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_CheckBox, {
						name: "useTotp",
						id: "useTotpInput",
						checked: _ctx.data.targetUser.useTotp,
						disabled: !_ctx.data.targetUser.useTotp,
						value: "Y"
					}, {
						default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)(" useTotp ")]),
						_: 1
					}, 8, ["checked", "disabled"])]),
					_: 1
				}),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedFormBlock, { newStyle: "" }, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_CheckBox, {
						name: "usePasswordlessLogin",
						id: "usePasswordlessLoginInput",
						checked: _ctx.data.targetUser.usePasswordlessLogin,
						value: "Y"
					}, {
						default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)(" usePasswordlessLogin ")]),
						_: 1
					}, 8, ["checked"])]),
					_: 1
				}),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedFormBlock, { class: _ctx.$style["form__row--buttons"] }, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", null, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_GeneralButton, {
						theme: "primary",
						type: "submit"
					}, {
						default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.manage_account.apply")), 1)]),
						_: 1
					})])]),
					_: 1
				}, 8, ["class"]),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_Heading, {
					title: _ctx.$t("views.manage_account.tools.title"),
					folded: ""
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedFormBlock, { newStyle: "" }, {
						default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [
							(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_GeneralButton, {
								theme: "danger",
								type: "event",
								onClick: ($event) => $options.accountAction("resetLastNameChange")
							}, {
								default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.manage_account.tools.reset_last_name_change")), 1)]),
								_: 1
							}, 8, ["onClick"]),
							(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_GeneralButton, {
								theme: "danger",
								type: "event",
								onClick: ($event) => $options.accountAction("resetLastActivity")
							}, {
								default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.manage_account.tools.reset_last_activity")), 1)]),
								_: 1
							}, 8, ["onClick"]),
							(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_GeneralButton, {
								theme: "danger",
								type: "event",
								onClick: ($event) => $options.accountAction("resetPasswordLink")
							}, {
								default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.manage_account.tools.reset_password_link")), 1)]),
								_: 1
							}, 8, ["onClick"]),
							(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_GeneralButton, {
								disabled: !_ctx.data.targetUser.mobileVerified,
								theme: "danger",
								type: "event",
								onClick: ($event) => $options.accountAction("removePhoneNumber")
							}, {
								default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.manage_account.tools.remove_phone_number")), 1)]),
								_: 1
							}, 8, ["disabled", "onClick"]),
							(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_GeneralButton, {
								theme: "danger",
								type: "event",
								onClick: ($event) => $options.accountAction("deleteAccount")
							}, {
								default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.manage_account.tools.delete_account")), 1)]),
								_: 1
							}, 8, ["onClick"])
						]),
						_: 1
					})]),
					_: 1
				}, 8, ["title"]),
				_ctx.data.externalProviders?.length ? ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(_component_Heading, {
					key: 1,
					title: _ctx.$t("views.manage_account.external_account_list"),
					folded: ""
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: [_ctx.$style.table, _ctx.$style["table--bordered"]] }, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: [
						_ctx.$style.row,
						_ctx.$style["row--head"],
						"table-row"
					] }, [((0, require__plugin_vue_export_helper.vue_exports.openBlock)(true), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(require__plugin_vue_export_helper.vue_exports.Fragment, null, (0, require__plugin_vue_export_helper.vue_exports.renderList)([
						"provider",
						"name",
						"email"
					].map((a) => _ctx.$t("views.mypage.external_" + a)), (text) => {
						return (0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)("div", { class: [_ctx.$style.column, "table-column"] }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(text), 3);
					}), 256))], 2), ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(true), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(require__plugin_vue_export_helper.vue_exports.Fragment, null, (0, require__plugin_vue_export_helper.vue_exports.renderList)(_ctx.data.externalProviders, (item) => {
						return (0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)("div", { class: [_ctx.$style.row, "table-row"] }, [
							(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: [_ctx.$style.column, "table-column"] }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(item.displayName), 3),
							(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: [_ctx.$style.column, "table-column"] }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.data.targetUser.oauth2Maps[item.name]?.name), 3),
							(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: [_ctx.$style.column, "table-column"] }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.data.targetUser.oauth2Maps[item.name]?.email), 3)
						], 2);
					}), 256))], 2)]),
					_: 1
				}, 8, ["title"])) : (0, require__plugin_vue_export_helper.vue_exports.createCommentVNode)("", true)
			];
		}),
		_: 1
	}, _parent));
	else _push(`<!---->`);
	_push(`<!--]-->`);
}
var cssModules = { "$style": manageAccount_vue_vue_type_style_index_0_lang_module_default };
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = (0, require__plugin_vue_export_helper.vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/contents/admin/manageAccount.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var manageAccount_default = /*#__PURE__*/ require__plugin_vue_export_helper._plugin_vue_export_helper_default(_sfc_main, [
	["ssrRender", _sfc_ssrRender],
	["__cssModules", cssModules],
	["__scopeId", "data-v-d553acc4"]
]);
//#endregion
exports.default = manageAccount_default;
