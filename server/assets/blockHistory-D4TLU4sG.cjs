const require__plugin_vue_export_helper = require("./_plugin-vue_export-helper-C1TPHJvg.cjs");
const require_server = require("../server.cjs");
const require_seedForm = require("./seedForm-DLpXnK6K.cjs");
const require_prevNextBtn = require("./prevNextBtn-BuquZ4_C.cjs");
const require_inputField = require("./inputField-DBSQICqU.cjs");
const require_authorSpan = require("./authorSpan-Cr3XG9VP.cjs");
//#region src/views/contents/special/blockHistory.vue
var BlockHistoryTypes = {
	ACLGroupAdd: 0,
	ACLGroupRemove: 1,
	Grant: 2,
	BatchRevert: 3,
	LoginHistory: 4
};
var _sfc_main = {
	mixins: [require_server.common_default],
	components: {
		LocalDate: require_server.localDate_default,
		AuthorSpan: require_authorSpan.authorSpan_default,
		CheckBox: require_server.checkBox_default,
		PrevNextBtn: require_prevNextBtn.prevNextBtn_default,
		GeneralButton: require_server.generalButton_default,
		InputField: require_inputField.inputField_default,
		SeedForm: require_seedForm.seedForm_default,
		SelectMenu: require_server.selectMenu_default
	},
	data() {
		return {
			BlockHistoryTypes,
			useFormattedCopy: this.$store.state.localConfig["block_history.use_formatted_copy"] ?? false
		};
	},
	watch: { useFormattedCopy(newValue) {
		this.$store.state.localConfigSetValue("block_history.use_formatted_copy", newValue);
	} },
	computed: { pageProps() {
		const prevItem = this.data.prevItem;
		const nextItem = this.data.nextItem;
		return {
			prev: prevItem ? { query: { until: prevItem.uuid } } : null,
			next: nextItem ? { query: { from: nextItem.uuid } } : null
		};
	} },
	methods: {
		reset() {
			this.$router.push("/BlockHistory");
		},
		iconClass(type) {
			return {
				[BlockHistoryTypes.ACLGroupAdd]: "aclgroup-add",
				[BlockHistoryTypes.ACLGroupRemove]: "aclgroup-remove",
				[BlockHistoryTypes.Grant]: "grant",
				[BlockHistoryTypes.BatchRevert]: "batch-revert",
				[BlockHistoryTypes.LoginHistory]: "login-history"
			}[type];
		},
		iconName(type) {
			return {
				[BlockHistoryTypes.ACLGroupAdd]: "user-plus",
				[BlockHistoryTypes.ACLGroupRemove]: "user-minus",
				[BlockHistoryTypes.Grant]: "user-check",
				[BlockHistoryTypes.BatchRevert]: "clock-rotate-left",
				[BlockHistoryTypes.LoginHistory]: "user"
			}[type];
		},
		typeName(type) {
			return this.$t("views.block_history.types." + {
				[BlockHistoryTypes.ACLGroupAdd]: "acl_group_add",
				[BlockHistoryTypes.ACLGroupRemove]: "acl_group_remove",
				[BlockHistoryTypes.Grant]: "grant",
				[BlockHistoryTypes.BatchRevert]: "batch_revert",
				[BlockHistoryTypes.LoginHistory]: "login_history"
			}[type]);
		},
		userToText(user) {
			let link;
			let text;
			if (user.type === -1) text = "<i>(삭제된 사용자)</i>";
			else if (user.name || user.ip) {
				text = `<b>${require_server.escapeHtml(user.name || user.ip)}</b>`;
				if (user.type === 1) link = this.doc_action_link(this.user_doc(user.name), "w");
				else if (user.uuid) link = this.contribution_link(user.uuid);
			}
			link &&= new URL(link, location.href).toString();
			return link && text ? `<a href="${link}" target="_blank">${text}</a>` : text;
		},
		onListCopy(e) {
			if (!this.useFormattedCopy) return;
			const sel = document.getSelection();
			if (!sel || sel.rangeCount < 1) return;
			const items = [...e.currentTarget.children].filter((a) => a.nodeType === Node.ELEMENT_NODE && a.classList.contains("block-row"));
			const findClosest = (el) => {
				while (el) {
					if (el.nodeType === Node.ELEMENT_NODE && el.classList.contains("block-row")) return el;
					el = el.parentNode;
				}
				return null;
			};
			const startEl = findClosest(sel.getRangeAt(0).startContainer);
			const endEl = findClosest(sel.getRangeAt(sel.rangeCount - 1).endContainer);
			const startIndex = items.indexOf(startEl);
			const endIndex = items.indexOf(endEl);
			const htmlItems = [];
			const textItems = [];
			for (let i = startIndex; i <= endIndex; i++) {
				const item = this.data.logs[i];
				let li = "<li>";
				if (item.createdAt) li += `(${require_server.formatDate(item.createdAt)}) `;
				li += `${this.userToText(item.createdUser) ?? "(사용자)"} 사용자가`;
				if (item.targetUser) {
					li += ` ${this.userToText(item.targetUser) ?? "(사용자)"}`;
					li += item.targetUser.type === 0 ? " IP" : " 사용자";
					if (item.type === BlockHistoryTypes.BatchRevert) li += "의 기여를";
					else if ([BlockHistoryTypes.ACLGroupAdd, BlockHistoryTypes.ACLGroupRemove].includes(item.type)) li += "를";
					if (item.targetUser && item.targetUser.name !== item.targetUsername) li += ` (차단 당시 이름: ${require_server.escapeHtml(item.targetUsername)})`;
				}
				if ([
					BlockHistoryTypes.ACLGroupAdd,
					BlockHistoryTypes.ACLGroupRemove,
					BlockHistoryTypes.BatchRevert
				].includes(item.type)) {
					if (!item.targetUser && item.targetContent) li += ` ${require_server.escapeHtml(item.targetContent)} IP를`;
					if (item.type === BlockHistoryTypes.BatchRevert) li += " 일괄 되돌림";
					else {
						li += ` <b>${require_server.escapeHtml(item.aclGroup?.name || item.aclGroupName || item.aclGroup)}</b> ACL 그룹에${item.type === BlockHistoryTypes.ACLGroupRemove ? "서" : ""}`;
						if (item.type === BlockHistoryTypes.ACLGroupAdd) {
							li += item.duration ? ` ${this.durationToExactString(item.duration)} 동안` : " 영구적으로";
							li += " 등록함";
						} else li += " 제거함";
						li += ` <b>#${require_server.escapeHtml(item.aclGroupId)}</b>`;
					}
				} else if (item.type === BlockHistoryTypes.Grant) li += `의 권한 설정`;
				else if (item.type === BlockHistoryTypes.LoginHistory) li += `의 로그인 기록 조회`;
				if (item.type === BlockHistoryTypes.Grant) li += `<br>권한: ${require_server.escapeHtml(item.content)}`;
				else if (item.content) li += `<br>사유: ${require_server.escapeHtml(item.content)}`;
				li += "</li>";
				htmlItems.push(li);
				const text = "- " + li.replaceAll("<br>", "\n").replace(/<[^>]*?>/g, "");
				textItems.push(require_server.unescapeHtml(text));
			}
			e.clipboardData.setData("text/html", `<ul>${htmlItems.join("")}</ul>`);
			e.clipboardData.setData("text/plain", textItems.join("\n") + "\n");
			e.preventDefault();
		}
	}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_SeedForm = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("SeedForm");
	const _component_SelectMenu = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("SelectMenu");
	const _component_InputField = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("InputField");
	const _component_GeneralButton = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("GeneralButton");
	const _component_CheckBox = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("CheckBox");
	const _component_PrevNextBtn = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("PrevNextBtn");
	const _component_FontAwesomeIcon = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("FontAwesomeIcon");
	const _component_i18next = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("i18next");
	const _component_AuthorSpan = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("AuthorSpan");
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
						if (_push) _push(`<option value="text" data-v-aaab265f${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.block_history.target.text"))}</option><option value="author" data-v-aaab265f${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.block_history.target.author"))}</option>`);
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
							_push(`<option value="all" data-v-aaab265f${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.block_history.type_all"))}</option><!--[-->`);
							(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderList)(Object.values($data.BlockHistoryTypes), (i) => {
								_push(`<option${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttr)("value", i)} data-v-aaab265f${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)($options.typeName(i))}</option>`);
							});
							_push(`<!--]-->`);
						} else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("option", { value: "all" }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.block_history.type_all")), 1), ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(true), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(require__plugin_vue_export_helper.vue_exports.Fragment, null, (0, require__plugin_vue_export_helper.vue_exports.renderList)(Object.values($data.BlockHistoryTypes), (i) => {
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
				_push(`<div class="button-block" data-v-aaab265f${_scopeId}>`);
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
				if (_ctx.data.permissions.dev) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_CheckBox, {
					checked: _ctx.$route.query.showHidden === "1",
					whenChange: (e) => _ctx.$router.push({ query: { showHidden: e.target.checked ? "1" : void 0 } }),
					name: "showHidden",
					value: "1"
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.block_history.show_hidden"))}`);
						else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.block_history.show_hidden")), 1)];
					}),
					_: 1
				}, _parent, _scopeId));
				else _push(`<!---->`);
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
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("option", { value: "all" }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.block_history.type_all")), 1), ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(true), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(require__plugin_vue_export_helper.vue_exports.Fragment, null, (0, require__plugin_vue_export_helper.vue_exports.renderList)(Object.values($data.BlockHistoryTypes), (i) => {
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
				}, 8, ["whenClick"])]),
				_ctx.data.permissions.dev ? ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(_component_CheckBox, {
					key: 0,
					checked: _ctx.$route.query.showHidden === "1",
					whenChange: (e) => _ctx.$router.push({ query: { showHidden: e.target.checked ? "1" : void 0 } }),
					name: "showHidden",
					value: "1"
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.block_history.show_hidden")), 1)]),
					_: 1
				}, 8, ["checked", "whenChange"])) : (0, require__plugin_vue_export_helper.vue_exports.createCommentVNode)("", true)
			];
		}),
		_: 1
	}, _parent));
	_push(`<div class="top-page-block" data-v-aaab265f>`);
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_PrevNextBtn, (0, require__plugin_vue_export_helper.vue_exports.mergeProps)({
		flex: "",
		class: "top-page"
	}, $options.pageProps), null, _parent));
	if (_ctx.$i18next.language === "ko") _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_CheckBox, {
		modelValue: $data.useFormattedCopy,
		"onUpdate:modelValue": ($event) => $data.useFormattedCopy = $event
	}, {
		default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
			if (_push) _push(`형식화된 복사 사용`);
			else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)("형식화된 복사 사용")];
		}),
		_: 1
	}, _parent));
	else _push(`<!---->`);
	_push(`</div><ul class="block-list" data-v-aaab265f><!--[-->`);
	(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderList)(_ctx.data.logs, (item) => {
		_push(`<li class="block-row" data-v-aaab265f><div class="block-item" data-v-aaab265f><span class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)([$options.iconClass(item.type), "icon"])}" data-v-aaab265f>`);
		_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_FontAwesomeIcon, { icon: $options.iconName(item.type) }, null, _parent));
		_push(`</span></div><div class="block-item block-content" data-v-aaab265f><div data-v-aaab265f>`);
		if (item.hideLog) _push(`<!--[-->(${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.block_history.hidden_prefix"))}) <!--]-->`);
		else _push(`<!---->`);
		if (item.type === $data.BlockHistoryTypes.ACLGroupAdd) {
			_push(`<!--[-->`);
			_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_i18next, { translation: _ctx.$t("views.block_history.messages.acl_group_add_" + (item.duration ? "duration" : "forever"), {
				userOrIp: _ctx.$t("views.block_history.messages." + (item.targetUser ? "user" : "ip")),
				blockNameText: item.targetUser && item.targetUser.name !== item.targetUsername ? _ctx.$t("views.block_history.messages.block_name_text", { targetUsername: item.targetUsername }) : void 0,
				duration: _ctx.durationToExactString(item.duration)
			}) }, {
				createdUser: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_AuthorSpan, { account: item.createdUser }, null, _parent, _scopeId));
					else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_AuthorSpan, { account: item.createdUser }, null, 8, ["account"])];
				}),
				targetUser: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) if (item.targetUser) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_AuthorSpan, { account: item.targetUser }, null, _parent, _scopeId));
					else _push(`<!--[-->${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(item.targetContent)}<!--]-->`);
					else return [item.targetUser ? ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(_component_AuthorSpan, {
						key: 0,
						account: item.targetUser
					}, null, 8, ["account"])) : ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(require__plugin_vue_export_helper.vue_exports.Fragment, { key: 1 }, [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(item.targetContent), 1)], 64))];
				}),
				aclGroup: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<span class="bold" data-v-aaab265f${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(item.aclGroup?.name || item.aclGroupName || item.aclGroup)}</span>`);
					else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("span", { class: "bold" }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(item.aclGroup?.name || item.aclGroupName || item.aclGroup), 1)];
				}),
				_: 2
			}, _parent));
			_push(` <span class="block-id" data-v-aaab265f>#${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(item.aclGroupId)}</span><!--]-->`);
		} else if (item.type === $data.BlockHistoryTypes.ACLGroupRemove) {
			_push(`<!--[-->`);
			_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_i18next, { translation: _ctx.$t("views.block_history.messages.acl_group_remove", {
				userOrIp: _ctx.$t("views.block_history.messages." + (item.targetUser ? "user" : "ip")),
				blockNameText: item.targetUser && item.targetUser.name !== item.targetUsername ? _ctx.$t("views.block_history.messages.block_name_text", { targetUsername: item.targetUsername }) : void 0
			}) }, {
				createdUser: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_AuthorSpan, { account: item.createdUser }, null, _parent, _scopeId));
					else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_AuthorSpan, { account: item.createdUser }, null, 8, ["account"])];
				}),
				targetUser: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) if (item.targetUser) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_AuthorSpan, { account: item.targetUser }, null, _parent, _scopeId));
					else _push(`<!--[-->${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(item.targetContent)}<!--]-->`);
					else return [item.targetUser ? ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(_component_AuthorSpan, {
						key: 0,
						account: item.targetUser
					}, null, 8, ["account"])) : ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(require__plugin_vue_export_helper.vue_exports.Fragment, { key: 1 }, [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(item.targetContent), 1)], 64))];
				}),
				aclGroup: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<span class="bold" data-v-aaab265f${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(item.aclGroup?.name || item.aclGroupName || item.aclGroup)}</span>`);
					else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("span", { class: "bold" }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(item.aclGroup?.name || item.aclGroupName || item.aclGroup), 1)];
				}),
				_: 2
			}, _parent));
			_push(` <span class="block-id" data-v-aaab265f>#${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(item.aclGroupId)}</span><!--]-->`);
		} else if (item.type === $data.BlockHistoryTypes.Grant) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_i18next, { translation: _ctx.$t("views.block_history.messages.grant") }, (0, require__plugin_vue_export_helper.vue_exports.createSlots)({
			createdUser: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
				if (_push) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_AuthorSpan, { account: item.createdUser }, null, _parent, _scopeId));
				else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_AuthorSpan, { account: item.createdUser }, null, 8, ["account"])];
			}),
			_: 2
		}, [item.targetUser ? {
			name: "targetUser",
			fn: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
				if (_push) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_AuthorSpan, { account: item.targetUser }, null, _parent, _scopeId));
				else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_AuthorSpan, { account: item.targetUser }, null, 8, ["account"])];
			}),
			key: "0"
		} : void 0]), _parent));
		else if (item.type === $data.BlockHistoryTypes.BatchRevert) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_i18next, { translation: _ctx.$t("views.block_history.messages.batch_revert", { userOrIp: _ctx.$t("views.block_history.messages." + (item.targetUser ? "user" : "ip")) }) }, (0, require__plugin_vue_export_helper.vue_exports.createSlots)({
			createdUser: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
				if (_push) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_AuthorSpan, { account: item.createdUser }, null, _parent, _scopeId));
				else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_AuthorSpan, { account: item.createdUser }, null, 8, ["account"])];
			}),
			_: 2
		}, [item.targetUser ? {
			name: "targetUser",
			fn: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
				if (_push) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_AuthorSpan, { account: item.targetUser }, null, _parent, _scopeId));
				else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_AuthorSpan, { account: item.targetUser }, null, 8, ["account"])];
			}),
			key: "0"
		} : void 0]), _parent));
		else if (item.type === $data.BlockHistoryTypes.LoginHistory) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_i18next, { translation: _ctx.$t("views.block_history.messages.login_history") }, (0, require__plugin_vue_export_helper.vue_exports.createSlots)({
			createdUser: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
				if (_push) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_AuthorSpan, { account: item.createdUser }, null, _parent, _scopeId));
				else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_AuthorSpan, { account: item.createdUser }, null, 8, ["account"])];
			}),
			_: 2
		}, [item.targetUser ? {
			name: "targetUser",
			fn: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
				if (_push) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_AuthorSpan, { account: item.targetUser }, null, _parent, _scopeId));
				else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_AuthorSpan, { account: item.targetUser }, null, 8, ["account"])];
			}),
			key: "0"
		} : void 0]), _parent));
		else _push(`<!---->`);
		_push(`</div>`);
		if (item.type === $data.BlockHistoryTypes.Grant) _push(`<div class="block-text" data-v-aaab265f>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(item.content)}</div>`);
		else _push(`<!---->`);
		_push(`<div class="block-text" data-v-aaab265f>`);
		_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_LocalDate, { date: item.createdAt }, null, _parent));
		if (item.type !== $data.BlockHistoryTypes.Grant && item.content) _push(`<span data-v-aaab265f> (${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(item.content)}) </span>`);
		else _push(`<!---->`);
		_push(`</div></div></li>`);
	});
	_push(`<!--]--></ul>`);
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_PrevNextBtn, (0, require__plugin_vue_export_helper.vue_exports.mergeProps)({ flex: "" }, $options.pageProps), null, _parent));
	_push(`<!--]-->`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = (0, require__plugin_vue_export_helper.vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/contents/special/blockHistory.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var blockHistory_default = /*#__PURE__*/ require__plugin_vue_export_helper._plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-aaab265f"]]);
//#endregion
exports.default = blockHistory_default;
