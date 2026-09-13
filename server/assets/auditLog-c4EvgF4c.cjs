const require__plugin_vue_export_helper = require("./_plugin-vue_export-helper-C1TPHJvg.cjs");
const require_server = require("../server.cjs");
const require_seedForm = require("./seedForm-DLpXnK6K.cjs");
const require_prevNextBtn = require("./prevNextBtn-BuquZ4_C.cjs");
const require_heading = require("./heading-CgAmXkAX.cjs");
const require_inputField = require("./inputField-DBSQICqU.cjs");
const require_authorSpan = require("./authorSpan-Cr3XG9VP.cjs");
const require_diff = require("./diff-BCMxBxY-.cjs");
//#region src/views/contents/admin/auditLog.vue
var AuditLogTypes = {
	NamespaceACL: 0,
	DeleteThread: 1,
	ACLGroupCreate: 3,
	ACLGroupDelete: 4,
	ManageAccount: 5,
	ModifyConfig: 6,
	ThreadACL: 7,
	DevSupport: 2
};
var _sfc_main = {
	mixins: [require_server.common_default],
	components: {
		Diff: require_diff.diff_default,
		Heading: require_heading.heading_default,
		NuxtLink: require_server.nuxtLink_default,
		LocalDate: require_server.localDate_default,
		AuthorSpan: require_authorSpan.authorSpan_default,
		PrevNextBtn: require_prevNextBtn.prevNextBtn_default,
		GeneralButton: require_server.generalButton_default,
		SelectMenu: require_server.selectMenu_default,
		CheckBox: require_server.checkBox_default,
		InputField: require_inputField.inputField_default,
		SeedForm: require_seedForm.seedForm_default
	},
	data() {
		return { AuditLogTypes };
	},
	methods: {
		reset() {
			this.$router.push("/admin/audit_log");
		},
		iconClass(type) {
			return {
				[AuditLogTypes.NamespaceACL]: "icon-nsacl",
				[AuditLogTypes.DeleteThread]: "icon-delete-thread",
				[AuditLogTypes.DevSupport]: "icon-dev-support",
				[AuditLogTypes.ACLGroupCreate]: "icon-aclgroup-create",
				[AuditLogTypes.ACLGroupDelete]: "icon-aclgroup-delete",
				[AuditLogTypes.ManageAccount]: "icon-manage-account",
				[AuditLogTypes.ModifyConfig]: "icon-modify-config",
				[AuditLogTypes.ThreadACL]: "icon-thread-acl"
			}[type];
		},
		iconName(type) {
			return {
				[AuditLogTypes.NamespaceACL]: "lock",
				[AuditLogTypes.DeleteThread]: "trash-can",
				[AuditLogTypes.DevSupport]: "code",
				[AuditLogTypes.ACLGroupCreate]: "user-plus",
				[AuditLogTypes.ACLGroupDelete]: "user-minus",
				[AuditLogTypes.ManageAccount]: "user-gear",
				[AuditLogTypes.ModifyConfig]: "gear",
				[AuditLogTypes.ThreadACL]: "comments"
			}[type];
		},
		typeName(type) {
			return this.$t("views.audit_log.types." + type);
		},
		async onDiffToggle(item) {
			if (!item.hasDiff || item.diffHtml) return;
			const { diffHtml } = await this.internalRequest(`/admin/audit_log/${item._id}/diff`, { noProgress: true });
			item.diffHtml = diffHtml;
		}
	}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_SeedForm = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("SeedForm");
	const _component_SelectMenu = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("SelectMenu");
	const _component_InputField = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("InputField");
	const _component_GeneralButton = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("GeneralButton");
	const _component_PrevNextBtn = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("PrevNextBtn");
	const _component_FontAwesomeIcon = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("FontAwesomeIcon");
	const _component_i18next = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("i18next");
	const _component_AuthorSpan = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("AuthorSpan");
	const _component_NuxtLink = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("NuxtLink");
	const _component_Diff = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("Diff");
	const _component_LocalDate = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("LocalDate");
	_push(`<!--[-->`);
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedForm, {
		flex: "",
		box: "",
		class: "search-form"
	}, {
		default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SelectMenu, {
					name: "target",
					value: _ctx.$route.query.target || "text"
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push(`<option value="text" data-v-f46fdfcb${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.block_history.target.text"))}</option><option value="author" data-v-f46fdfcb${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.block_history.target.author"))}</option>`);
						else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("option", { value: "text" }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.block_history.target.text")), 1), (0, require__plugin_vue_export_helper.vue_exports.createVNode)("option", { value: "author" }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.block_history.target.author")), 1)];
					}),
					_: 1
				}, _parent, _scopeId));
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SelectMenu, {
					name: "type",
					value: _ctx.$route.query.type || "all"
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) {
							_push(`<option value="all" data-v-f46fdfcb${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.block_history.type_all"))}</option><!--[-->`);
							(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderList)(Object.values($data.AuditLogTypes), (i) => {
								_push(`<option${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttr)("value", i)} data-v-f46fdfcb${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)($options.typeName(i))}</option>`);
							});
							_push(`<!--]-->`);
						} else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("option", { value: "all" }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.block_history.type_all")), 1), ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(true), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(require__plugin_vue_export_helper.vue_exports.Fragment, null, (0, require__plugin_vue_export_helper.vue_exports.renderList)(Object.values($data.AuditLogTypes), (i) => {
							return (0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)("option", { value: i }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)($options.typeName(i)), 9, ["value"]);
						}), 256))];
					}),
					_: 1
				}, _parent, _scopeId));
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_InputField, {
					class: "search-input",
					name: "query",
					placeholder: _ctx.$t("views.block_history.search"),
					modelValue: _ctx.$route.query.query,
					"onUpdate:modelValue": ($event) => _ctx.$route.query.query = $event
				}, null, _parent, _scopeId));
				_push(`<div class="button-block" data-v-f46fdfcb${_scopeId}>`);
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_GeneralButton, {
					type: "submit",
					theme: "primary",
					class: "search-button"
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.block_history.search"))}`);
						else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.block_history.search")), 1)];
					}),
					_: 1
				}, _parent, _scopeId));
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_GeneralButton, { whenClick: $options.reset }, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.block_history.reset"))}`);
						else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.block_history.reset")), 1)];
					}),
					_: 1
				}, _parent, _scopeId));
				_push(`</div>`);
			} else return [
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SelectMenu, {
					name: "target",
					value: _ctx.$route.query.target || "text"
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("option", { value: "text" }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.block_history.target.text")), 1), (0, require__plugin_vue_export_helper.vue_exports.createVNode)("option", { value: "author" }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.block_history.target.author")), 1)]),
					_: 1
				}, 8, ["value"]),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SelectMenu, {
					name: "type",
					value: _ctx.$route.query.type || "all"
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("option", { value: "all" }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.block_history.type_all")), 1), ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(true), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(require__plugin_vue_export_helper.vue_exports.Fragment, null, (0, require__plugin_vue_export_helper.vue_exports.renderList)(Object.values($data.AuditLogTypes), (i) => {
						return (0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)("option", { value: i }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)($options.typeName(i)), 9, ["value"]);
					}), 256))]),
					_: 1
				}, 8, ["value"]),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_InputField, {
					class: "search-input",
					name: "query",
					placeholder: _ctx.$t("views.block_history.search"),
					modelValue: _ctx.$route.query.query,
					"onUpdate:modelValue": ($event) => _ctx.$route.query.query = $event
				}, null, 8, [
					"placeholder",
					"modelValue",
					"onUpdate:modelValue"
				]),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: "button-block" }, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_GeneralButton, {
					type: "submit",
					theme: "primary",
					class: "search-button"
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.block_history.search")), 1)]),
					_: 1
				}), (0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_GeneralButton, { whenClick: $options.reset }, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.block_history.reset")), 1)]),
					_: 1
				}, 8, ["whenClick"])])
			];
		}),
		_: 1
	}, _parent));
	_push(`<div class="top-page-block" data-v-f46fdfcb>`);
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_PrevNextBtn, (0, require__plugin_vue_export_helper.vue_exports.mergeProps)({
		flex: "",
		class: "top-page"
	}, _ctx.data.pageProps), null, _parent));
	_push(`</div><ul class="list" data-v-f46fdfcb><!--[-->`);
	(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderList)(_ctx.data.items, (item) => {
		_push(`<li class="row" data-v-f46fdfcb><div class="item" data-v-f46fdfcb><span class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)([$options.iconClass(item.action), "icon"])}" data-v-f46fdfcb>`);
		_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_FontAwesomeIcon, { icon: $options.iconName(item.action) }, null, _parent));
		_push(`</span></div><div class="item content" data-v-f46fdfcb><div data-v-f46fdfcb>`);
		if (item.action === $data.AuditLogTypes.NamespaceACL) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_i18next, { translation: _ctx.$t("views.audit_log.messages.namespace_acl") }, {
			user: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
				if (_push) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_AuthorSpan, { account: item.user }, null, _parent, _scopeId));
				else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_AuthorSpan, { account: item.user }, null, 8, ["account"])];
			}),
			target: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
				if (_push) _push(`<b data-v-f46fdfcb${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(item.target)}</b>`);
				else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("b", null, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(item.target), 1)];
			}),
			_: 2
		}, _parent));
		else if (item.action === $data.AuditLogTypes.DeleteThread) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_i18next, { translation: _ctx.$t("views.audit_log.messages.delete_thread") }, {
			user: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
				if (_push) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_AuthorSpan, { account: item.user }, null, _parent, _scopeId));
				else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_AuthorSpan, { account: item.user }, null, 8, ["account"])];
			}),
			link: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
				if (_push) {
					_push(`<b data-v-f46fdfcb${_scopeId}>`);
					_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_NuxtLink, { to: "/thread/" + item.thread.url }, {
						default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
							if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(item.thread.topic)}`);
							else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(item.thread.topic), 1)];
						}),
						_: 2
					}, _parent, _scopeId));
					_push(`</b>`);
				} else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("b", null, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_NuxtLink, { to: "/thread/" + item.thread.url }, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(item.thread.topic), 1)]),
					_: 2
				}, 1032, ["to"])])];
			}),
			_: 2
		}, _parent));
		else if (item.action === $data.AuditLogTypes.DevSupport) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_i18next, { translation: _ctx.$t("views.audit_log.messages.dev_support") }, {
			user: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
				if (_push) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_AuthorSpan, { account: item.user }, null, _parent, _scopeId));
				else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_AuthorSpan, { account: item.user }, null, 8, ["account"])];
			}),
			_: 2
		}, _parent));
		else if (item.action === $data.AuditLogTypes.ACLGroupCreate) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_i18next, { translation: _ctx.$t("views.audit_log.messages.acl_group_create") }, {
			user: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
				if (_push) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_AuthorSpan, { account: item.user }, null, _parent, _scopeId));
				else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_AuthorSpan, { account: item.user }, null, 8, ["account"])];
			}),
			target: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
				if (_push) _push(`<b data-v-f46fdfcb${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(item.target)}</b>`);
				else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("b", null, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(item.target), 1)];
			}),
			_: 2
		}, _parent));
		else if (item.action === $data.AuditLogTypes.ACLGroupDelete) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_i18next, { translation: _ctx.$t("views.audit_log.messages.acl_group_delete") }, {
			user: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
				if (_push) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_AuthorSpan, { account: item.user }, null, _parent, _scopeId));
				else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_AuthorSpan, { account: item.user }, null, 8, ["account"])];
			}),
			target: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
				if (_push) _push(`<b data-v-f46fdfcb${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(item.target)}</b>`);
				else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("b", null, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(item.target), 1)];
			}),
			_: 2
		}, _parent));
		else if (item.action === $data.AuditLogTypes.ManageAccount) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_i18next, { translation: _ctx.$t("views.audit_log.messages.manage_account") }, {
			user: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
				if (_push) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_AuthorSpan, { account: item.user }, null, _parent, _scopeId));
				else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_AuthorSpan, { account: item.user }, null, 8, ["account"])];
			}),
			targetUser: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
				if (_push) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_AuthorSpan, { account: item.targetUser }, null, _parent, _scopeId));
				else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_AuthorSpan, { account: item.targetUser }, null, 8, ["account"])];
			}),
			_: 2
		}, _parent));
		else if (item.action === $data.AuditLogTypes.ModifyConfig) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_i18next, { translation: _ctx.$t("views.audit_log.messages.modify_config") }, {
			user: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
				if (_push) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_AuthorSpan, { account: item.user }, null, _parent, _scopeId));
				else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_AuthorSpan, { account: item.user }, null, 8, ["account"])];
			}),
			target: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
				if (_push) _push(`<b data-v-f46fdfcb${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(item.target)}</b>`);
				else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("b", null, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(item.target), 1)];
			}),
			_: 2
		}, _parent));
		else if (item.action === $data.AuditLogTypes.ThreadACL) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_i18next, { translation: _ctx.$t("views.audit_log.messages.thread_acl") }, {
			user: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
				if (_push) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_AuthorSpan, { account: item.user }, null, _parent, _scopeId));
				else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_AuthorSpan, { account: item.user }, null, 8, ["account"])];
			}),
			link: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
				if (_push) {
					_push(`<b data-v-f46fdfcb${_scopeId}>`);
					_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_NuxtLink, { to: "/thread/" + item.thread.url }, {
						default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
							if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(item.thread.topic)}`);
							else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(item.thread.topic), 1)];
						}),
						_: 2
					}, _parent, _scopeId));
					_push(`</b>`);
				} else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("b", null, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_NuxtLink, { to: "/thread/" + item.thread.url }, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(item.thread.topic), 1)]),
					_: 2
				}, 1032, ["to"])])];
			}),
			_: 2
		}, _parent));
		else _push(`<!---->`);
		_push(`</div>`);
		if (item.content) _push(`<div class="text" data-v-f46fdfcb>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(item.content)}</div>`);
		else _push(`<!---->`);
		if (item.hasDiff) {
			_push(`<details data-v-f46fdfcb><summary data-v-f46fdfcb>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.audit_log.diff"))}</summary>`);
			if (item.diffHtml) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_Diff, { diffHtml: item.diffHtml }, null, _parent));
			else _push(`<span data-v-f46fdfcb>Loading...</span>`);
			_push(`</details>`);
		} else _push(`<!---->`);
		_push(`<div class="text" data-v-f46fdfcb>`);
		_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_LocalDate, { date: item.createdAt }, null, _parent));
		_push(`</div></div></li>`);
	});
	_push(`<!--]--></ul>`);
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_PrevNextBtn, (0, require__plugin_vue_export_helper.vue_exports.mergeProps)({ flex: "" }, _ctx.data.pageProps), null, _parent));
	_push(`<!--]-->`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = (0, require__plugin_vue_export_helper.vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/contents/admin/auditLog.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var auditLog_default = /*#__PURE__*/ require__plugin_vue_export_helper._plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-f46fdfcb"]]);
//#endregion
exports.default = auditLog_default;
