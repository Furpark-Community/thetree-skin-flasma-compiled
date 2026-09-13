const require__plugin_vue_export_helper = require("./_plugin-vue_export-helper-C1TPHJvg.cjs");
const require_server = require("../server.cjs");
const require_seedForm = require("./seedForm-DLpXnK6K.cjs");
const require_heading = require("./heading-CgAmXkAX.cjs");
const require_seedFormBlock = require("./seedFormBlock-C_WGpUCH.cjs");
const require_inputField = require("./inputField-DBSQICqU.cjs");
//#region src/components/checkMarkText.vue
var _sfc_main$1 = { props: { checked: {
	type: Boolean,
	required: true
} } };
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_FontAwesomeIcon = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("FontAwesomeIcon");
	_push(`<span${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttrs)((0, require__plugin_vue_export_helper.vue_exports.mergeProps)({ class: ["checkmark-text", [$props.checked ? "checkmark-checked" : "checkmark-x"]] }, _attrs))} data-v-629a982d>`);
	if ($props.checked) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_FontAwesomeIcon, { icon: "fa-circle-check" }, null, _parent));
	else _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_FontAwesomeIcon, { icon: "circle-xmark" }, null, _parent));
	(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "default", {}, null, _push, _parent);
	_push(`</span>`);
}
var _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
	const ssrContext = (0, require__plugin_vue_export_helper.vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/checkMarkText.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var checkMarkText_default = /*#__PURE__*/ require__plugin_vue_export_helper._plugin_vue_export_helper_default(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-629a982d"]]);
var initialSetup_vue_vue_type_style_index_0_lang_module_default = {
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
//#region src/views/contents/admin/initialSetup.vue
var _sfc_main = {
	mixins: [require_server.common_default],
	provide() {
		return { submittingSeedForm: (0, require__plugin_vue_export_helper.vue_exports.computed)(() => this.submitting) };
	},
	components: {
		CheckMarkText: checkMarkText_default,
		Alert: require_server.alert_default,
		SeedForm: require_seedForm.seedForm_default,
		GeneralButton: require_server.generalButton_default,
		InputField: require_inputField.inputField_default,
		SeedFormBlock: require_seedFormBlock.seedFormBlock_default,
		Heading: require_heading.heading_default
	},
	data() {
		return {
			submitting: false,
			THETREE_SKIN_NAME: "flasma",
			repoUrl: "",
			skinName: "",
			baseUrl: this.$store.state.config["wiki.canonical_url"],
			recommandedGroupList: [
				this.$t("default_aclgroups.blocked_user"),
				this.$t("default_aclgroups.block_edit_request"),
				this.$t("default_aclgroups.login_allowed_block"),
				this.$t("default_aclgroups.warn_keyword")
			]
		};
	},
	watch: { repoUrl() {
		this.skinName = this.repoUrl.split(/[-_]/).at(-1);
	} },
	computed: {
		baseUrlIsSet() {
			return false;
		},
		changedWikiName() {
			return this.$store.state.config["wiki.site_name"] !== "테스트위키";
		},
		changedFrontPage() {
			return this.$store.state.config["wiki.front_page"] !== "FrontPage";
		}
	},
	methods: {
		async reloadView() {
			await this.$store.state.components.mainView.loadView();
		},
		async internalPost(url, data, andProcess = false) {
			this.submitting = true;
			const options = [url, {
				method: "POST",
				headers: { "Content-Type": "application/x-www-form-urlencoded" },
				body: new URLSearchParams(data).toString()
			}];
			if (andProcess) await this.internalRequestAndProcess(...options);
			else await this.internalRequest(...options);
			this.submitting = false;
		},
		async installSkin() {
			await this.internalPost("/admin/developer/skin/add", {
				name: this.skinName,
				url: this.repoUrl
			});
			await this.internalPost("/admin/developer/skin/build", { name: this.skinName }, true);
		},
		setBaseUrlToOrigin() {
			this.baseUrl = location.origin;
		},
		async addAclGroup() {
			for (let name of this.recommandedGroupList) await this.internalPost("/aclgroup/group_add", { name });
			await this.reloadView();
		},
		async addNsacl() {
			const aclTypes = [
				"Read",
				"Edit",
				"Move",
				"Delete",
				"CreateThread",
				"WriteThreadComment",
				"EditRequest",
				"ACL"
			];
			const addRule = async (namespace, aclType, data = {}) => await this.internalPost(this.doc_action_link({
				namespace,
				title: "dummy"
			}, "acl"), {
				target: "namespace",
				aclType,
				...data,
				duration: 0
			});
			await addRule("문서", "Read", {
				conditionType: "Perm",
				permission: "any",
				actionType: "Allow"
			});
			for (let aclType of [
				"Edit",
				"CreateThread",
				"WriteThreadComment"
			]) {
				await addRule("문서", aclType, {
					conditionType: "ACLGroup",
					conditionContent: this.$t("default_aclgroups.warn_keyword"),
					actionType: "Deny"
				});
				await addRule("문서", aclType, {
					conditionType: "ACLGroup",
					conditionContent: this.$t("default_aclgroups.blocked_user"),
					actionType: "Deny"
				});
				await addRule("문서", aclType, {
					conditionType: "Perm",
					permission: "member",
					actionType: "Allow"
				});
				await addRule("문서", aclType, {
					conditionType: "ACLGroup",
					conditionContent: this.$t("default_aclgroups.login_allowed_block"),
					actionType: "Deny"
				});
				await addRule("문서", aclType, {
					conditionType: "Perm",
					permission: "any",
					actionType: "Allow"
				});
			}
			await addRule("문서", "Move", {
				conditionType: "Perm",
				permission: "member_signup_15days_ago",
				actionType: "Allow"
			});
			await addRule("문서", "Delete", {
				conditionType: "Perm",
				permission: "any",
				actionType: "Allow"
			});
			await addRule("문서", "EditRequest", {
				conditionType: "ACLGroup",
				conditionContent: this.$t("default_aclgroups.warn_keyword"),
				actionType: "Deny"
			});
			await addRule("문서", "EditRequest", {
				conditionType: "ACLGroup",
				conditionContent: this.$t("default_aclgroups.block_edit_request"),
				actionType: "Deny"
			});
			await addRule("문서", "EditRequest", {
				conditionType: "Perm",
				permission: "member",
				actionType: "Allow"
			});
			await addRule("문서", "EditRequest", {
				conditionType: "ACLGroup",
				conditionContent: this.$t("default_aclgroups.blocked_user"),
				actionType: "Deny"
			});
			await addRule("문서", "EditRequest", {
				conditionType: "Perm",
				permission: "any",
				actionType: "Allow"
			});
			await addRule("문서", "ACL", {
				conditionType: "Perm",
				permission: "admin",
				actionType: "Allow"
			});
			for (let namespace of this.data.namespaces) for (let aclType of aclTypes) {
				if (namespace === "아이피사용자" && ![
					"Read",
					"CreateThread",
					"WriteThreadComment"
				].includes(aclType)) continue;
				if (namespace === "사용자" && aclType === "Edit") {
					await addRule(namespace, aclType, {
						conditionType: "Perm",
						permission: "match_username_and_document_title",
						actionType: "GotoOtherNS",
						actionContent: "문서"
					});
					await addRule(namespace, aclType, {
						conditionType: "Perm",
						permission: "admin",
						actionType: "GotoOtherNS",
						actionContent: "문서"
					});
				} else await addRule(namespace, aclType, {
					conditionType: "Perm",
					permission: namespace.includes(this.$t("views.initial_setup.mod_keyword")) || namespace.includes(this.$t("views.initial_setup.trash_keyword")) ? "admin" : "any",
					actionType: "GotoOtherNS",
					actionContent: "문서"
				});
			}
		},
		async removeAllNsacl() {
			await this.internalPost("/admin/initial_setup/remove_all_nsacl", {}, true);
		}
	}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_Heading = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("Heading");
	const _component_SeedFormBlock = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("SeedFormBlock");
	const _component_InputField = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("InputField");
	const _component_GeneralButton = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("GeneralButton");
	const _component_Alert = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("Alert");
	const _component_SeedForm = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("SeedForm");
	const _component_i18next = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("i18next");
	const _component_NuxtLink = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("NuxtLink");
	const _component_CheckMarkText = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("CheckMarkText");
	_push(`<!--[-->`);
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_Heading, {
		title: _ctx.$t("views.initial_setup.install_skin"),
		folded: $data.THETREE_SKIN_NAME !== "plain"
	}, {
		default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push(`<div class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)([_ctx.$style.form, _ctx.$style["form--full"]])}"${_scopeId}>`);
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedFormBlock, {
					label: _ctx.$t("views.initial_setup.skin_git_repo_url"),
					inputId: "skinRepoInput",
					newStyle: ""
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_InputField, {
							id: "skinRepoInput",
							modelValue: $data.repoUrl,
							"onUpdate:modelValue": ($event) => $data.repoUrl = $event
						}, null, _parent, _scopeId));
						else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_InputField, {
							id: "skinRepoInput",
							modelValue: $data.repoUrl,
							"onUpdate:modelValue": ($event) => $data.repoUrl = $event
						}, null, 8, ["modelValue", "onUpdate:modelValue"])];
					}),
					_: 1
				}, _parent, _scopeId));
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedFormBlock, {
					label: _ctx.$t("views.initial_setup.skin_name"),
					inputId: "skinNameInput",
					newStyle: ""
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_InputField, {
							id: "skinNameInput",
							modelValue: $data.skinName,
							"onUpdate:modelValue": ($event) => $data.skinName = $event
						}, null, _parent, _scopeId));
						else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_InputField, {
							id: "skinNameInput",
							modelValue: $data.skinName,
							"onUpdate:modelValue": ($event) => $data.skinName = $event
						}, null, 8, ["modelValue", "onUpdate:modelValue"])];
					}),
					_: 1
				}, _parent, _scopeId));
				_push(`<div${_scopeId}>`);
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_GeneralButton, {
					theme: "primary",
					type: "button",
					whenClick: $options.installSkin
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.initial_setup.install"))}`);
						else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.initial_setup.install")), 1)];
					}),
					_: 1
				}, _parent, _scopeId));
				_push(`</div></div>`);
			} else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: [_ctx.$style.form, _ctx.$style["form--full"]] }, [
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedFormBlock, {
					label: _ctx.$t("views.initial_setup.skin_git_repo_url"),
					inputId: "skinRepoInput",
					newStyle: ""
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_InputField, {
						id: "skinRepoInput",
						modelValue: $data.repoUrl,
						"onUpdate:modelValue": ($event) => $data.repoUrl = $event
					}, null, 8, ["modelValue", "onUpdate:modelValue"])]),
					_: 1
				}, 8, ["label"]),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedFormBlock, {
					label: _ctx.$t("views.initial_setup.skin_name"),
					inputId: "skinNameInput",
					newStyle: ""
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_InputField, {
						id: "skinNameInput",
						modelValue: $data.skinName,
						"onUpdate:modelValue": ($event) => $data.skinName = $event
					}, null, 8, ["modelValue", "onUpdate:modelValue"])]),
					_: 1
				}, 8, ["label"]),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", null, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_GeneralButton, {
					theme: "primary",
					type: "button",
					whenClick: $options.installSkin
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.initial_setup.install")), 1)]),
					_: 1
				}, 8, ["whenClick"])])
			], 2)];
		}),
		_: 1
	}, _parent));
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_Heading, {
		title: _ctx.$t("views.initial_setup.set_base_url"),
		folded: $options.baseUrlIsSet
	}, {
		default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
			if (_push) {
				if (!$options.baseUrlIsSet) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_Alert, { theme: "danger" }, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.initial_setup.different_base_url"))}`);
						else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.initial_setup.different_base_url")), 1)];
					}),
					_: 1
				}, _parent, _scopeId));
				else _push(`<!---->`);
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedForm, {
					method: "post",
					action: "/admin/config/configjson",
					class: [_ctx.$style.form, _ctx.$style["form--full"]]
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) {
							_push(`<input type="hidden" name="config" value="publicConfig.json"${_scopeId}><input type="hidden" name="key" value="base_url"${_scopeId}>`);
							_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedFormBlock, {
								label: "base_url",
								inputId: "baseUrlInput",
								newStyle: ""
							}, {
								default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
									if (_push) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_InputField, {
										id: "baseUrlInput",
										modelValue: $data.baseUrl,
										"onUpdate:modelValue": ($event) => $data.baseUrl = $event,
										name: "value"
									}, null, _parent, _scopeId));
									else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_InputField, {
										id: "baseUrlInput",
										modelValue: $data.baseUrl,
										"onUpdate:modelValue": ($event) => $data.baseUrl = $event,
										name: "value"
									}, null, 8, ["modelValue", "onUpdate:modelValue"])];
								}),
								_: 1
							}, _parent, _scopeId));
							_push(`<div${_scopeId}>`);
							_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_GeneralButton, {
								theme: "primary",
								type: "submit"
							}, {
								default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
									if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.initial_setup.change"))}`);
									else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.initial_setup.change")), 1)];
								}),
								_: 1
							}, _parent, _scopeId));
							_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_GeneralButton, {
								type: "button",
								whenClick: $options.setBaseUrlToOrigin
							}, {
								default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
									if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.initial_setup.set_base_url_to_origin"))}`);
									else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.initial_setup.set_base_url_to_origin")), 1)];
								}),
								_: 1
							}, _parent, _scopeId));
							_push(`</div>`);
						} else return [
							(0, require__plugin_vue_export_helper.vue_exports.createVNode)("input", {
								type: "hidden",
								name: "config",
								value: "publicConfig.json"
							}),
							(0, require__plugin_vue_export_helper.vue_exports.createVNode)("input", {
								type: "hidden",
								name: "key",
								value: "base_url"
							}),
							(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedFormBlock, {
								label: "base_url",
								inputId: "baseUrlInput",
								newStyle: ""
							}, {
								default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_InputField, {
									id: "baseUrlInput",
									modelValue: $data.baseUrl,
									"onUpdate:modelValue": ($event) => $data.baseUrl = $event,
									name: "value"
								}, null, 8, ["modelValue", "onUpdate:modelValue"])]),
								_: 1
							}),
							(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", null, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_GeneralButton, {
								theme: "primary",
								type: "submit"
							}, {
								default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.initial_setup.change")), 1)]),
								_: 1
							}), (0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_GeneralButton, {
								type: "button",
								whenClick: $options.setBaseUrlToOrigin
							}, {
								default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.initial_setup.set_base_url_to_origin")), 1)]),
								_: 1
							}, 8, ["whenClick"])])
						];
					}),
					_: 1
				}, _parent, _scopeId));
			} else return [!$options.baseUrlIsSet ? ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(_component_Alert, {
				key: 0,
				theme: "danger"
			}, {
				default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.initial_setup.different_base_url")), 1)]),
				_: 1
			})) : (0, require__plugin_vue_export_helper.vue_exports.createCommentVNode)("", true), (0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedForm, {
				method: "post",
				action: "/admin/config/configjson",
				class: [_ctx.$style.form, _ctx.$style["form--full"]]
			}, {
				default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [
					(0, require__plugin_vue_export_helper.vue_exports.createVNode)("input", {
						type: "hidden",
						name: "config",
						value: "publicConfig.json"
					}),
					(0, require__plugin_vue_export_helper.vue_exports.createVNode)("input", {
						type: "hidden",
						name: "key",
						value: "base_url"
					}),
					(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedFormBlock, {
						label: "base_url",
						inputId: "baseUrlInput",
						newStyle: ""
					}, {
						default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_InputField, {
							id: "baseUrlInput",
							modelValue: $data.baseUrl,
							"onUpdate:modelValue": ($event) => $data.baseUrl = $event,
							name: "value"
						}, null, 8, ["modelValue", "onUpdate:modelValue"])]),
						_: 1
					}),
					(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", null, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_GeneralButton, {
						theme: "primary",
						type: "submit"
					}, {
						default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.initial_setup.change")), 1)]),
						_: 1
					}), (0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_GeneralButton, {
						type: "button",
						whenClick: $options.setBaseUrlToOrigin
					}, {
						default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.initial_setup.set_base_url_to_origin")), 1)]),
						_: 1
					}, 8, ["whenClick"])])
				]),
				_: 1
			}, 8, ["class"])];
		}),
		_: 1
	}, _parent));
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_Heading, {
		title: _ctx.$t("views.initial_setup.generate_default_aclgroup"),
		folded: _ctx.data.hasAclGroup
	}, {
		default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push(`<p${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.initial_setup.generate_group_list"))}</p><ul${_scopeId}><!--[-->`);
				(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderList)($data.recommandedGroupList, (item) => {
					_push(`<li${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(item)}</li>`);
				});
				_push(`<!--]--></ul>`);
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_GeneralButton, {
					theme: "primary",
					whenClick: $options.addAclGroup,
					disabled: _ctx.data.hasAclGroup
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.initial_setup.generate_default_aclgroup"))}`);
						else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.initial_setup.generate_default_aclgroup")), 1)];
					}),
					_: 1
				}, _parent, _scopeId));
			} else return [
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("p", null, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.initial_setup.generate_group_list")), 1),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("ul", null, [((0, require__plugin_vue_export_helper.vue_exports.openBlock)(true), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(require__plugin_vue_export_helper.vue_exports.Fragment, null, (0, require__plugin_vue_export_helper.vue_exports.renderList)($data.recommandedGroupList, (item) => {
					return (0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)("li", null, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(item), 1);
				}), 256))]),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_GeneralButton, {
					theme: "primary",
					whenClick: $options.addAclGroup,
					disabled: _ctx.data.hasAclGroup
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.initial_setup.generate_default_aclgroup")), 1)]),
					_: 1
				}, 8, ["whenClick", "disabled"])
			];
		}),
		_: 1
	}, _parent));
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_Heading, {
		title: _ctx.$t("views.initial_setup.setup_nsacl"),
		folded: _ctx.data.hasNsacl
	}, {
		default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
			if (_push) {
				if (_ctx.data.namespaces.at(-1) === "삭제된사용자") _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_Alert, { theme: "primary" }, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_i18next, { translation: _ctx.$t("views.initial_setup.add_namespace_before_nsacl") }, {
							link: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
								if (_push) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_NuxtLink, { to: "/admin/config" }, {
									default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
										if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.initial_setup.config_link_text"))}`);
										else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.initial_setup.config_link_text")), 1)];
									}),
									_: 1
								}, _parent, _scopeId));
								else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_NuxtLink, { to: "/admin/config" }, {
									default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.initial_setup.config_link_text")), 1)]),
									_: 1
								})];
							}),
							_: 1
						}, _parent, _scopeId));
						else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_i18next, { translation: _ctx.$t("views.initial_setup.add_namespace_before_nsacl") }, {
							link: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_NuxtLink, { to: "/admin/config" }, {
								default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.initial_setup.config_link_text")), 1)]),
								_: 1
							})]),
							_: 1
						}, 8, ["translation"])];
					}),
					_: 1
				}, _parent, _scopeId));
				else _push(`<!---->`);
				_push(`<p${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.initial_setup.default_aclgroup_guide.title"))}</p><ul${_scopeId}><li${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.initial_setup.default_aclgroup_guide.list_1"))}</li><li${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.initial_setup.default_aclgroup_guide.list_2"))}</li><li${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.initial_setup.default_aclgroup_guide.list_3"))}</li><li${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.initial_setup.default_aclgroup_guide.list_4"))}</li><li${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.initial_setup.default_aclgroup_guide.list_5"))}</li><li${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.initial_setup.default_aclgroup_guide.list_6"))}</li></ul>`);
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_GeneralButton, {
					theme: "primary",
					whenClick: $options.addNsacl,
					disabled: _ctx.data.hasNsacl
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.initial_setup.generate_default_nsacl"))}`);
						else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.initial_setup.generate_default_nsacl")), 1)];
					}),
					_: 1
				}, _parent, _scopeId));
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_GeneralButton, {
					theme: "danger",
					whenClick: $options.removeAllNsacl
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.initial_setup.remove_all_nsacl"))}`);
						else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.initial_setup.remove_all_nsacl")), 1)];
					}),
					_: 1
				}, _parent, _scopeId));
			} else return [
				_ctx.data.namespaces.at(-1) === "삭제된사용자" ? ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(_component_Alert, {
					key: 0,
					theme: "primary"
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_i18next, { translation: _ctx.$t("views.initial_setup.add_namespace_before_nsacl") }, {
						link: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_NuxtLink, { to: "/admin/config" }, {
							default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.initial_setup.config_link_text")), 1)]),
							_: 1
						})]),
						_: 1
					}, 8, ["translation"])]),
					_: 1
				})) : (0, require__plugin_vue_export_helper.vue_exports.createCommentVNode)("", true),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("p", null, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.initial_setup.default_aclgroup_guide.title")), 1),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("ul", null, [
					(0, require__plugin_vue_export_helper.vue_exports.createVNode)("li", null, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.initial_setup.default_aclgroup_guide.list_1")), 1),
					(0, require__plugin_vue_export_helper.vue_exports.createVNode)("li", null, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.initial_setup.default_aclgroup_guide.list_2")), 1),
					(0, require__plugin_vue_export_helper.vue_exports.createVNode)("li", null, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.initial_setup.default_aclgroup_guide.list_3")), 1),
					(0, require__plugin_vue_export_helper.vue_exports.createVNode)("li", null, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.initial_setup.default_aclgroup_guide.list_4")), 1),
					(0, require__plugin_vue_export_helper.vue_exports.createVNode)("li", null, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.initial_setup.default_aclgroup_guide.list_5")), 1),
					(0, require__plugin_vue_export_helper.vue_exports.createVNode)("li", null, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.initial_setup.default_aclgroup_guide.list_6")), 1)
				]),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_GeneralButton, {
					theme: "primary",
					whenClick: $options.addNsacl,
					disabled: _ctx.data.hasNsacl
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.initial_setup.generate_default_nsacl")), 1)]),
					_: 1
				}, 8, ["whenClick", "disabled"]),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_GeneralButton, {
					theme: "danger",
					whenClick: $options.removeAllNsacl
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.initial_setup.remove_all_nsacl")), 1)]),
					_: 1
				}, 8, ["whenClick"])
			];
		}),
		_: 1
	}, _parent));
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_Heading, {
		title: _ctx.$t("views.initial_setup.branding"),
		folded: $options.changedWikiName || $options.changedFrontPage
	}, {
		default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push(`<p${_scopeId}>`);
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_i18next, { translation: _ctx.$t("views.initial_setup.branding_guide") }, {
					link: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_NuxtLink, { to: "/admin/config" }, {
							default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
								if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.initial_setup.config_link_text"))}`);
								else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.initial_setup.config_link_text")), 1)];
							}),
							_: 1
						}, _parent, _scopeId));
						else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_NuxtLink, { to: "/admin/config" }, {
							default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.initial_setup.config_link_text")), 1)]),
							_: 1
						})];
					}),
					_: 1
				}, _parent, _scopeId));
				_push(`</p><p${_scopeId}>`);
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_CheckMarkText, { checked: $options.changedWikiName }, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.initial_setup.change_wiki_name"))}`);
						else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.initial_setup.change_wiki_name")), 1)];
					}),
					_: 1
				}, _parent, _scopeId));
				_push(`</p><p${_scopeId}>`);
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_CheckMarkText, { checked: $options.changedFrontPage }, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.initial_setup.change_frontpage"))}`);
						else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.initial_setup.change_frontpage")), 1)];
					}),
					_: 1
				}, _parent, _scopeId));
				_push(`</p>`);
			} else return [
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("p", null, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_i18next, { translation: _ctx.$t("views.initial_setup.branding_guide") }, {
					link: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_NuxtLink, { to: "/admin/config" }, {
						default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.initial_setup.config_link_text")), 1)]),
						_: 1
					})]),
					_: 1
				}, 8, ["translation"])]),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("p", null, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_CheckMarkText, { checked: $options.changedWikiName }, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.initial_setup.change_wiki_name")), 1)]),
					_: 1
				}, 8, ["checked"])]),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("p", null, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_CheckMarkText, { checked: $options.changedFrontPage }, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.initial_setup.change_frontpage")), 1)]),
					_: 1
				}, 8, ["checked"])])
			];
		}),
		_: 1
	}, _parent));
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_Heading, { title: _ctx.$t("views.initial_setup.guide") }, {
		default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push(`<p${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.initial_setup.guide_description"))}</p><p${_scopeId}>`);
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_CheckMarkText, { checked: _ctx.data.useEmailVerification }, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.initial_setup.use_email_verification"))}`);
						else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.initial_setup.use_email_verification")), 1)];
					}),
					_: 1
				}, _parent, _scopeId));
				_push(`</p><p${_scopeId}>`);
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_CheckMarkText, { checked: _ctx.data.useCaptcha }, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.initial_setup.use_captcha"))}`);
						else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.initial_setup.use_captcha")), 1)];
					}),
					_: 1
				}, _parent, _scopeId));
				_push(`</p><p${_scopeId}>`);
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_CheckMarkText, { checked: _ctx.data.useSearchEngine }, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.initial_setup.use_search_engine"))}`);
						else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.initial_setup.use_search_engine")), 1)];
					}),
					_: 1
				}, _parent, _scopeId));
				_push(`</p><p${_scopeId}>`);
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_CheckMarkText, { checked: _ctx.data.useRedis }, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.initial_setup.use_redis"))}`);
						else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.initial_setup.use_redis")), 1)];
					}),
					_: 1
				}, _parent, _scopeId));
				_push(`</p><p${_scopeId}>`);
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_CheckMarkText, { checked: _ctx.data.useS3 }, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.initial_setup.use_s3"))}`);
						else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.initial_setup.use_s3")), 1)];
					}),
					_: 1
				}, _parent, _scopeId));
				_push(`</p>`);
			} else return [
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("p", null, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.initial_setup.guide_description")), 1),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("p", null, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_CheckMarkText, { checked: _ctx.data.useEmailVerification }, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.initial_setup.use_email_verification")), 1)]),
					_: 1
				}, 8, ["checked"])]),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("p", null, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_CheckMarkText, { checked: _ctx.data.useCaptcha }, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.initial_setup.use_captcha")), 1)]),
					_: 1
				}, 8, ["checked"])]),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("p", null, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_CheckMarkText, { checked: _ctx.data.useSearchEngine }, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.initial_setup.use_search_engine")), 1)]),
					_: 1
				}, 8, ["checked"])]),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("p", null, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_CheckMarkText, { checked: _ctx.data.useRedis }, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.initial_setup.use_redis")), 1)]),
					_: 1
				}, 8, ["checked"])]),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("p", null, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_CheckMarkText, { checked: _ctx.data.useS3 }, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.initial_setup.use_s3")), 1)]),
					_: 1
				}, 8, ["checked"])])
			];
		}),
		_: 1
	}, _parent));
	_push(`<!--]-->`);
}
var cssModules = { "$style": initialSetup_vue_vue_type_style_index_0_lang_module_default };
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = (0, require__plugin_vue_export_helper.vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/contents/admin/initialSetup.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var initialSetup_default = /*#__PURE__*/ require__plugin_vue_export_helper._plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__cssModules", cssModules]]);
//#endregion
exports.default = initialSetup_default;
