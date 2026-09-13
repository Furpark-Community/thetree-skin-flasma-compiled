const require__plugin_vue_export_helper = require("./_plugin-vue_export-helper-C1TPHJvg.cjs");
const require_server = require("../server.cjs");
const require_seedForm = require("./seedForm-DLpXnK6K.cjs");
const require_prevNextBtn = require("./prevNextBtn-BuquZ4_C.cjs");
const require_inputField = require("./inputField-DBSQICqU.cjs");
const require_authorSpan = require("./authorSpan-Cr3XG9VP.cjs");
const require_diffCount = require("./diffCount-BJeKwZXu.cjs");
//#region src/components/revInput.vue
var _sfc_main$1 = {
	components: {
		SeedForm: require_seedForm.seedForm_default,
		GeneralButton: require_server.generalButton_default,
		InputField: require_inputField.inputField_default
	},
	props: { blockClass: String },
	data() {
		return { value: this.$route.query.from };
	},
	computed: { showClearButton() {
		return !!this.value;
	} },
	methods: { clear() {
		this.value = "";
		this.$refs.input.focus();
	} }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_SeedForm = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("SeedForm");
	const _component_InputField = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("InputField");
	const _component_GeneralButton = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("GeneralButton");
	const _component_FontAwesomeIcon = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("FontAwesomeIcon");
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedForm, _attrs, {
		default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push(`<div class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)([$props.blockClass, "rev-input"])}" data-v-06140a23${_scopeId}>`);
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_InputField, {
					ref: "input",
					modelValue: $data.value,
					"onUpdate:modelValue": ($event) => $data.value = $event,
					class: "input-field",
					type: "number",
					name: "from",
					pattern: "\\d+",
					min: "1",
					required: ""
				}, null, _parent, _scopeId));
				_push(`<span class="r-text" data-v-06140a23${_scopeId}>r</span>`);
				if ($options.showClearButton) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_GeneralButton, {
					class: "clear-button",
					whenClick: $options.clear
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_FontAwesomeIcon, { icon: "circle-xmark" }, null, _parent, _scopeId));
						else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_FontAwesomeIcon, { icon: "circle-xmark" })];
					}),
					_: 1
				}, _parent, _scopeId));
				else _push(`<!---->`);
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_GeneralButton, { type: "submit" }, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_FontAwesomeIcon, { icon: "share" }, null, _parent, _scopeId));
						else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_FontAwesomeIcon, { icon: "share" })];
					}),
					_: 1
				}, _parent, _scopeId));
				_push(`</div>`);
			} else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: ["rev-input", $props.blockClass] }, [
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_InputField, {
					ref: "input",
					modelValue: $data.value,
					"onUpdate:modelValue": ($event) => $data.value = $event,
					class: "input-field",
					type: "number",
					name: "from",
					pattern: "\\d+",
					min: "1",
					required: ""
				}, null, 8, ["modelValue", "onUpdate:modelValue"]),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("span", { class: "r-text" }, "r"),
				$options.showClearButton ? ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(_component_GeneralButton, {
					key: 0,
					class: "clear-button",
					whenClick: $options.clear
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_FontAwesomeIcon, { icon: "circle-xmark" })]),
					_: 1
				}, 8, ["whenClick"])) : (0, require__plugin_vue_export_helper.vue_exports.createCommentVNode)("", true),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_GeneralButton, { type: "submit" }, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_FontAwesomeIcon, { icon: "share" })]),
					_: 1
				})
			], 2)];
		}),
		_: 1
	}, _parent));
}
var _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
	const ssrContext = (0, require__plugin_vue_export_helper.vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/revInput.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var revInput_default = /*#__PURE__*/ require__plugin_vue_export_helper._plugin_vue_export_helper_default(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-06140a23"]]);
//#endregion
//#region src/views/contents/document/history.vue
var _sfc_main = {
	mixins: [require_server.common_default],
	components: {
		SeedForm: require_seedForm.seedForm_default,
		PrevNextBtn: require_prevNextBtn.prevNextBtn_default,
		RevInput: revInput_default,
		GeneralButton: require_server.generalButton_default,
		LocalDate: require_server.localDate_default,
		NuxtLink: require_server.nuxtLink_default,
		DiffCount: require_diffCount.diffCount_default,
		AuthorSpan: require_authorSpan.authorSpan_default
	},
	data() {
		return {
			diffOldRev: null,
			diffRev: null
		};
	},
	computed: { pageProps() {
		const revs = this.data.revs;
		const lastRev = revs[revs.length - 1];
		return {
			prev: revs[0].uuid !== this.data.latestRev.uuid ? { query: { until: revs[0].rev + 1 } } : null,
			next: lastRev.rev > 1 ? { query: { from: lastRev.rev - 1 } } : null
		};
	} },
	methods: {
		getActions(rev) {
			const permissions = this.data.permissions;
			const actions = [
				...rev.troll && !permissions.troll ? [] : [{
					action: "w",
					follow: true
				}],
				{ action: "raw" },
				{ action: "blame" },
				...rev.troll ? [] : [{ action: "revert" }],
				...rev.rev > 1 ? [{ action: "diff" }] : []
			];
			if (rev.transfer) actions.push({
				action: "transfer_contribution",
				post: true
			});
			if (permissions.troll) actions.push(rev.troll ? {
				action: "unmark_troll",
				admin: true
			} : {
				action: "mark_troll",
				admin: true
			});
			if (rev.log && permissions.log) actions.push(rev.hideLog ? {
				action: "unhide_log",
				admin: true
			} : {
				action: "hide_log",
				admin: true
			});
			if (permissions.hide) actions.push(rev.hidden ? {
				action: "unhide",
				admin: true
			} : {
				action: "hide",
				admin: true
			});
			if (permissions.config && (rev.fileKey || rev.videoFileKey)) actions.push({
				action: "delete_file",
				admin: true
			});
			return actions;
		},
		copyUuid(rev) {
			navigator.clipboard.writeText(rev.uuid);
			require_server.Ke(this.$t("views.history.copied_uuid", { rev: rev.rev }));
		},
		async adminAction(rev, action) {
			await this.internalRequestAndProcess(this.doc_action_link(this.data.document, "a/" + action, { uuid: rev.uuid }));
		},
		async postAction(rev, action) {
			await this.internalRequestAndProcess(this.doc_action_link(this.data.document, action), {
				method: "POST",
				headers: { "Content-Type": "application/x-www-form-urlencoded" },
				body: new URLSearchParams({ uuid: rev.uuid }).toString()
			});
		},
		beforeDiff() {
			return !!this.diffOldRev && !!this.diffRev;
		}
	}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_PrevNextBtn = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("PrevNextBtn");
	const _component_RevInput = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("RevInput");
	const _component_SeedForm = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("SeedForm");
	const _component_GeneralButton = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("GeneralButton");
	const _component_LocalDate = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("LocalDate");
	const _component_NuxtLink = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("NuxtLink");
	const _component_DiffCount = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("DiffCount");
	const _component_AuthorSpan = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("AuthorSpan");
	const _component_i18next = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("i18next");
	_push(`<!--[--><div class="top-page-block" data-v-00f2b304>`);
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_PrevNextBtn, (0, require__plugin_vue_export_helper.vue_exports.mergeProps)({
		class: "top-page top-page-item",
		flex: ""
	}, $options.pageProps), null, _parent));
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_RevInput, { blockClass: "top-page-item" }, null, _parent));
	_push(`</div>`);
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedForm, {
		beforeSubmit: $options.beforeDiff,
		action: _ctx.doc_action_link(_ctx.data.document, "diff")
	}, {
		default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push(`<p data-v-00f2b304${_scopeId}>`);
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_GeneralButton, { type: "submit" }, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.history.diff_selected_rev"))}`);
						else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.history.diff_selected_rev")), 1)];
					}),
					_: 1
				}, _parent, _scopeId));
				_push(`</p><ul data-v-00f2b304${_scopeId}><!--[-->`);
				(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderList)(_ctx.data.revs, (rev) => {
					_push(`<li class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)({ troll: rev.troll })}" data-v-00f2b304${_scopeId}><span data-v-00f2b304${_scopeId}>`);
					_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_LocalDate, { date: rev.createdAt }, null, _parent, _scopeId));
					_push(`</span><span class="history-action" data-v-00f2b304${_scopeId}> (<!--[-->`);
					(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderList)($options.getActions(rev), (action, index) => {
						_push(`<!--[-->`);
						if (index !== 0) _push(`<!--[--> | <!--]-->`);
						else _push(`<!---->`);
						if (action.admin) _push(`<a${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttr)("rel", action.follow ? null : "nofollow")} data-v-00f2b304${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("document." + action.action))}</a>`);
						else if (action.post) _push(`<a${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttr)("rel", action.follow ? null : "nofollow")} data-v-00f2b304${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("document." + action.action))}</a>`);
						else _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_NuxtLink, {
							to: _ctx.doc_action_link(_ctx.data.document, action.action, { uuid: rev.uuid }),
							rel: action.follow ? null : "nofollow"
						}, {
							default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
								if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("document." + action.action))}`);
								else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("document." + action.action)), 1)];
							}),
							_: 2
						}, _parent, _scopeId));
						_push(`<!--]-->`);
					});
					_push(`<!--]-->) </span>`);
					if (!rev.troll) _push(`<span data-v-00f2b304${_scopeId}><input type="radio" name="olduuid"${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttr)("value", rev.uuid)}${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrIncludeBooleanAttr)(rev.uuid === $data.diffOldRev) ? " checked" : ""} style="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderStyle)({ visibility: !$data.diffRev || rev.rev < $data.diffRev.rev ? "visible" : "hidden" })}" data-v-00f2b304${_scopeId}><input type="radio" name="uuid"${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttr)("value", rev.uuid)}${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrIncludeBooleanAttr)(rev.uuid === $data.diffRev) ? " checked" : ""} style="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderStyle)({ visibility: !$data.diffOldRev || rev.rev > $data.diffOldRev.rev ? "visible" : "hidden" })}" data-v-00f2b304${_scopeId}></span>`);
					else _push(`<!---->`);
					if (rev.infoText) _push(`<i data-v-00f2b304${_scopeId}>(${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.removeHtmlTags(rev.infoText))}) </i>`);
					else _push(`<!---->`);
					_push(`<strong data-v-00f2b304${_scopeId}><a class="rev-text" href="#" data-v-00f2b304${_scopeId}>r${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(rev.rev)}</a></strong><span data-v-00f2b304${_scopeId}> (`);
					_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_DiffCount, { count: rev.diffLength }, null, _parent, _scopeId));
					_push(`) </span>`);
					if (rev.editRequest) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_NuxtLink, { to: "/edit_request/" + rev.editRequest.url }, {
						default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
							if (_push) _push(`<i data-v-00f2b304${_scopeId}>(${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.history.edit_request_mark"))})</i>  `);
							else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("i", null, "(" + (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.history.edit_request_mark")) + ")", 1), (0, require__plugin_vue_export_helper.vue_exports.createTextVNode)("\xA0 ")];
						}),
						_: 2
					}, _parent, _scopeId));
					else _push(`<!---->`);
					_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_AuthorSpan, {
						account: rev.user,
						pos: `${_ctx.doc_fulltitle(_ctx.data.document)} r${rev.rev}`
					}, null, _parent, _scopeId));
					if (rev.troll) {
						_push(`<!--[--> [`);
						_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_i18next, { translation: _ctx.$t("views.history.marked_troll") }, {
							trollBy: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
								if (_push) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_AuthorSpan, { account: rev.trollBy }, null, _parent, _scopeId));
								else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_AuthorSpan, { account: rev.trollBy }, null, 8, ["account"])];
							}),
							_: 2
						}, _parent, _scopeId));
						_push(`] <!--]-->`);
					} else if (rev.log || rev.hideLog) {
						_push(`<!--[-->`);
						if (rev.hideLog) {
							_push(`<!--[--> (<span class="log" data-v-00f2b304${_scopeId}>`);
							_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_i18next, { translation: _ctx.$t("views.history.hidden_log") }, {
								hideLogBy: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
									if (_push) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_AuthorSpan, { account: rev.hideLogBy }, null, _parent, _scopeId));
									else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_AuthorSpan, { account: rev.hideLogBy }, null, 8, ["account"])];
								}),
								_: 2
							}, _parent, _scopeId));
							_push(`</span>) <!--]-->`);
						} else _push(`<!---->`);
						if (rev.hideLog && !rev.forceShowLog) {
							_push(`<!--[-->`);
							if (_ctx.data.permissions.hide) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_GeneralButton, {
								class: "show-log-button",
								size: "small",
								whenClick: () => rev.forceShowLog = true
							}, {
								default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
									if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.history.force_show_log"))}`);
									else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.history.force_show_log")), 1)];
								}),
								_: 2
							}, _parent, _scopeId));
							else _push(`<!---->`);
							_push(`<!--]-->`);
						} else {
							_push(`<!--[--> (<span class="log" data-v-00f2b304${_scopeId}>`);
							if (rev.hideLog) _push(`<!--[-->${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.history.force_show_log_prefix"))}<!--]-->`);
							else _push(`<!---->`);
							_push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(rev.log)}</span>) <!--]-->`);
						}
						_push(`<!--]-->`);
					} else _push(`<!---->`);
					_push(`</li>`);
				});
				_push(`<!--]--></ul>`);
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_PrevNextBtn, (0, require__plugin_vue_export_helper.vue_exports.mergeProps)({ flex: "" }, $options.pageProps), null, _parent, _scopeId));
			} else return [
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("p", null, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_GeneralButton, { type: "submit" }, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.history.diff_selected_rev")), 1)]),
					_: 1
				})]),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("ul", null, [((0, require__plugin_vue_export_helper.vue_exports.openBlock)(true), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(require__plugin_vue_export_helper.vue_exports.Fragment, null, (0, require__plugin_vue_export_helper.vue_exports.renderList)(_ctx.data.revs, (rev) => {
					return (0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)("li", {
						class: { troll: rev.troll },
						key: rev.uuid
					}, [
						(0, require__plugin_vue_export_helper.vue_exports.createVNode)("span", null, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_LocalDate, { date: rev.createdAt }, null, 8, ["date"])]),
						(0, require__plugin_vue_export_helper.vue_exports.createVNode)("span", { class: "history-action" }, [
							(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)(" ("),
							((0, require__plugin_vue_export_helper.vue_exports.openBlock)(true), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(require__plugin_vue_export_helper.vue_exports.Fragment, null, (0, require__plugin_vue_export_helper.vue_exports.renderList)($options.getActions(rev), (action, index) => {
								return (0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(require__plugin_vue_export_helper.vue_exports.Fragment, null, [index !== 0 ? ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(require__plugin_vue_export_helper.vue_exports.Fragment, { key: 0 }, [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)(" | ")], 64)) : (0, require__plugin_vue_export_helper.vue_exports.createCommentVNode)("", true), action.admin ? ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)("a", {
									key: 1,
									onClick: ($event) => $options.adminAction(rev, action.action),
									rel: action.follow ? null : "nofollow"
								}, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("document." + action.action)), 9, ["onClick", "rel"])) : action.post ? ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)("a", {
									key: 2,
									onClick: ($event) => $options.postAction(rev, action.action),
									rel: action.follow ? null : "nofollow"
								}, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("document." + action.action)), 9, ["onClick", "rel"])) : ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(_component_NuxtLink, {
									key: 3,
									to: _ctx.doc_action_link(_ctx.data.document, action.action, { uuid: rev.uuid }),
									rel: action.follow ? null : "nofollow"
								}, {
									default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("document." + action.action)), 1)]),
									_: 2
								}, 1032, ["to", "rel"]))], 64);
							}), 256)),
							(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)(") ")
						]),
						!rev.troll ? ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)("span", { key: 0 }, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("input", {
							type: "radio",
							name: "olduuid",
							value: rev.uuid,
							checked: rev.uuid === $data.diffOldRev,
							onClick: ($event) => $data.diffOldRev = rev,
							style: { visibility: !$data.diffRev || rev.rev < $data.diffRev.rev ? "visible" : "hidden" }
						}, null, 12, [
							"value",
							"checked",
							"onClick"
						]), (0, require__plugin_vue_export_helper.vue_exports.createVNode)("input", {
							type: "radio",
							name: "uuid",
							value: rev.uuid,
							checked: rev.uuid === $data.diffRev,
							onClick: ($event) => $data.diffRev = rev,
							style: { visibility: !$data.diffOldRev || rev.rev > $data.diffOldRev.rev ? "visible" : "hidden" }
						}, null, 12, [
							"value",
							"checked",
							"onClick"
						])])) : (0, require__plugin_vue_export_helper.vue_exports.createCommentVNode)("", true),
						rev.infoText ? ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)("i", { key: 1 }, "(" + (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.removeHtmlTags(rev.infoText)) + ") ", 1)) : (0, require__plugin_vue_export_helper.vue_exports.createCommentVNode)("", true),
						(0, require__plugin_vue_export_helper.vue_exports.createVNode)("strong", null, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("a", {
							class: "rev-text",
							href: "#",
							onClick: (0, require__plugin_vue_export_helper.vue_exports.withModifiers)(($event) => $options.copyUuid(rev), ["prevent"])
						}, "r" + (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(rev.rev), 9, ["onClick"])]),
						(0, require__plugin_vue_export_helper.vue_exports.createVNode)("span", null, [
							(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)(" ("),
							(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_DiffCount, { count: rev.diffLength }, null, 8, ["count"]),
							(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)(") ")
						]),
						rev.editRequest ? ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(_component_NuxtLink, {
							key: 2,
							to: "/edit_request/" + rev.editRequest.url
						}, {
							default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("i", null, "(" + (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.history.edit_request_mark")) + ")", 1), (0, require__plugin_vue_export_helper.vue_exports.createTextVNode)("\xA0 ")]),
							_: 1
						}, 8, ["to"])) : (0, require__plugin_vue_export_helper.vue_exports.createCommentVNode)("", true),
						(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_AuthorSpan, {
							account: rev.user,
							pos: `${_ctx.doc_fulltitle(_ctx.data.document)} r${rev.rev}`
						}, null, 8, ["account", "pos"]),
						rev.troll ? ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(require__plugin_vue_export_helper.vue_exports.Fragment, { key: 3 }, [
							(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)(" ["),
							(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_i18next, { translation: _ctx.$t("views.history.marked_troll") }, {
								trollBy: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_AuthorSpan, { account: rev.trollBy }, null, 8, ["account"])]),
								_: 2
							}, 1032, ["translation"]),
							(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)("] ")
						], 64)) : rev.log || rev.hideLog ? ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(require__plugin_vue_export_helper.vue_exports.Fragment, { key: 4 }, [rev.hideLog ? ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(require__plugin_vue_export_helper.vue_exports.Fragment, { key: 0 }, [
							(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)(" ("),
							(0, require__plugin_vue_export_helper.vue_exports.createVNode)("span", { class: "log" }, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_i18next, { translation: _ctx.$t("views.history.hidden_log") }, {
								hideLogBy: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_AuthorSpan, { account: rev.hideLogBy }, null, 8, ["account"])]),
								_: 2
							}, 1032, ["translation"])]),
							(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)(") ")
						], 64)) : (0, require__plugin_vue_export_helper.vue_exports.createCommentVNode)("", true), rev.hideLog && !rev.forceShowLog ? ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(require__plugin_vue_export_helper.vue_exports.Fragment, { key: 1 }, [_ctx.data.permissions.hide ? ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(_component_GeneralButton, {
							key: 0,
							class: "show-log-button",
							size: "small",
							whenClick: () => rev.forceShowLog = true
						}, {
							default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.history.force_show_log")), 1)]),
							_: 1
						}, 8, ["whenClick"])) : (0, require__plugin_vue_export_helper.vue_exports.createCommentVNode)("", true)], 64)) : ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(require__plugin_vue_export_helper.vue_exports.Fragment, { key: 2 }, [
							(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)(" ("),
							(0, require__plugin_vue_export_helper.vue_exports.createVNode)("span", { class: "log" }, [rev.hideLog ? ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(require__plugin_vue_export_helper.vue_exports.Fragment, { key: 0 }, [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.history.force_show_log_prefix")), 1)], 64)) : (0, require__plugin_vue_export_helper.vue_exports.createCommentVNode)("", true), (0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(rev.log), 1)]),
							(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)(") ")
						], 64))], 64)) : (0, require__plugin_vue_export_helper.vue_exports.createCommentVNode)("", true)
					], 2);
				}), 128))]),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_PrevNextBtn, (0, require__plugin_vue_export_helper.vue_exports.mergeProps)({ flex: "" }, $options.pageProps), null, 16)
			];
		}),
		_: 1
	}, _parent));
	_push(`<!--]-->`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = (0, require__plugin_vue_export_helper.vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/contents/document/history.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var history_default = /*#__PURE__*/ require__plugin_vue_export_helper._plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-00f2b304"]]);
//#endregion
exports.default = history_default;
