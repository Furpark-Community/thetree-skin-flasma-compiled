const require__plugin_vue_export_helper = require("./_plugin-vue_export-helper-C1TPHJvg.cjs");
const require_server = require("../server.cjs");
const require_seedForm = require("./seedForm-DLpXnK6K.cjs");
const require_seedButton = require("./seedButton-CbrSfLgh.cjs");
const require_formErrorAlert = require("./formErrorAlert-l3UJhtgq.cjs");
const require_seedFormBlock = require("./seedFormBlock-C_WGpUCH.cjs");
const require_ipWarn = require("./ipWarn-BzcaAHcz.cjs");
const require_comment = require("./comment-DpU11qiu.cjs");
const require_commentPreviewTab = require("./commentPreviewTab-D7FImETd.cjs");
//#region src/views/contents/document/discuss.vue
var _sfc_main = {
	mixins: [require_server.common_default],
	components: {
		CommentPreviewTab: require_commentPreviewTab.commentPreviewTab_default,
		Alert: require_server.alert_default,
		FormErrorAlert: require_formErrorAlert.formErrorAlert_default,
		IpWarn: require_ipWarn.ipWarn_default,
		Comment: require_comment.comment_default,
		SeedFormBlock: require_seedFormBlock.seedFormBlock_default,
		SeedButton: require_seedButton.seedButton_default,
		SeedForm: require_seedForm.seedForm_default,
		NuxtLink: require_server.nuxtLink_default
	},
	created() {
		this.$store.state.components.mainView.beforeLeave = this.beforeLeave;
	},
	methods: {
		goConfirm() {
			return confirm("go?");
		},
		beforeLeave() {
			if (this.$refs.topicInput?.value || this.$refs.commentPreviewTab.$refs.commentInput?.value) return confirm(this.$t("views.edit.not_saved"));
			return true;
		}
	}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_NuxtLink = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("NuxtLink");
	const _component_SeedForm = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("SeedForm");
	const _component_SeedButton = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("SeedButton");
	const _component_Comment = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("Comment");
	const _component_Alert = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("Alert");
	const _component_FormErrorAlert = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("FormErrorAlert");
	const _component_SeedFormBlock = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("SeedFormBlock");
	const _component_CommentPreviewTab = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("CommentPreviewTab");
	const _component_IpWarn = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("IpWarn");
	_push(`<!--[--><h3 data-v-2104e9fb>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.discuss.edit_request"))}</h3><ul data-v-2104e9fb><!--[-->`);
	(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderList)(_ctx.data.openEditRequests, (item) => {
		_push(`<li data-v-2104e9fb>`);
		_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_NuxtLink, { to: "/edit_request/" + item.url }, {
			default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
				if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.user_contribution.edit_request_link", { slug: item.url }))}`);
				else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.user_contribution.edit_request_link", { slug: item.url })), 1)];
			}),
			_: 2
		}, _parent));
		_push(`</li>`);
	});
	_push(`<!--]--></ul><p data-v-2104e9fb>`);
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_NuxtLink, { to: _ctx.doc_action_link(_ctx.data.document, "discuss", { state: "closed_edit_requests" }) }, {
		default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
			if (_push) _push(`[${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.discuss.see_closed_edit_request"))}]`);
			else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)("[" + (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.discuss.see_closed_edit_request")) + "]", 1)];
		}),
		_: 1
	}, _parent));
	_push(`</p><h3 data-v-2104e9fb>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.discuss.discuss"))}</h3><ul data-v-2104e9fb><!--[-->`);
	(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderList)(_ctx.data.openThreads, (item, index) => {
		_push(`<li data-v-2104e9fb>`);
		_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_NuxtLink, { to: "#s-" + index + 1 }, {
			default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
				if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(index + 1)}`);
				else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(index + 1), 1)];
			}),
			_: 2
		}, _parent));
		_push(`<span data-v-2104e9fb>. </span>`);
		_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_NuxtLink, { to: "/thread/" + item.url }, {
			default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
				if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(item.topic)}`);
				else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(item.topic), 1)];
			}),
			_: 2
		}, _parent));
		_push(`</li>`);
	});
	_push(`<!--]--></ul><p data-v-2104e9fb>`);
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_NuxtLink, { to: _ctx.doc_action_link(_ctx.data.document, "discuss", { state: "close" }) }, {
		default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
			if (_push) _push(`[${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.discuss.see_closed_discuss"))}]`);
			else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)("[" + (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.discuss.see_closed_discuss")) + "]", 1)];
		}),
		_: 1
	}, _parent));
	_push(`</p><!--[-->`);
	(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderList)(_ctx.data.openThreads, (item, index) => {
		_push(`<div data-v-2104e9fb>`);
		_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedForm, {
			beforeSubmit: $options.goConfirm,
			method: "post",
			class: "delete-thread-form",
			action: "/admin/thread/" + item.url + "/delete",
			noCaptcha: ""
		}, {
			default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
				if (_push) if (_ctx.data.permissions.delete) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedButton, {
					type: "submit",
					danger: ""
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.thread.delete_thread"))}`);
						else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.thread.delete_thread")), 1)];
					}),
					_: 2
				}, _parent, _scopeId));
				else _push(`<!---->`);
				else return [_ctx.data.permissions.delete ? ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(_component_SeedButton, {
					key: 0,
					type: "submit",
					danger: ""
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.thread.delete_thread")), 1)]),
					_: 1
				})) : (0, require__plugin_vue_export_helper.vue_exports.createCommentVNode)("", true)];
			}),
			_: 2
		}, _parent));
		_push(`<h2 data-v-2104e9fb>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(index + 1)}. `);
		_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_NuxtLink, {
			to: "/thread/" + item.url,
			id: "s-" + index
		}, {
			default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
				if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(item.topic)}`);
				else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(item.topic), 1)];
			}),
			_: 2
		}, _parent));
		_push(`</h2><div class="preview-group" data-v-2104e9fb><!--[-->`);
		(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderList)(item.recentComments, (comment, index) => {
			_push(`<div data-v-2104e9fb>`);
			if (index === 1 && comment.id !== 2) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_NuxtLink, {
				to: "/thread/" + item.url,
				class: "comment-more"
			}, {
				default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) _push(`more...`);
					else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)("more...")];
				}),
				_: 2
			}, _parent));
			else _push(`<!---->`);
			_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_Comment, {
				previewMode: "",
				thread: item,
				slug: item.url,
				comment
			}, null, _parent));
			_push(`</div>`);
		});
		_push(`<!--]--></div></div>`);
	});
	_push(`<!--]--><h3 data-v-2104e9fb>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.discuss.new_topic"))}</h3>`);
	if (_ctx.doc_fulltitle(_ctx.page.data.document) === _ctx.config["wiki.front_page"]) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_Alert, null, {
		default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
			if (_push) _push(`<strong data-v-2104e9fb${_scopeId}>[${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.thread.warn"))}]</strong> ${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.thread.front_page_warn", { document: _ctx.doc_fulltitle(_ctx.page.data.document) }))}`);
			else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("strong", null, "[" + (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.thread.warn")) + "]", 1), (0, require__plugin_vue_export_helper.vue_exports.createTextVNode)(" " + (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.thread.front_page_warn", { document: _ctx.doc_fulltitle(_ctx.page.data.document) })), 1)];
		}),
		_: 1
	}, _parent));
	else _push(`<!---->`);
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_FormErrorAlert, null, null, _parent));
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedForm, { method: "post" }, {
		default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedFormBlock, {
					label: _ctx.$t("views.discuss.topic_label"),
					inputId: "topicInput",
					name: "topic"
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push(`<input type="text" id="topicInput" name="topic" data-v-2104e9fb${_scopeId}>`);
						else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("input", {
							ref: "topicInput",
							type: "text",
							id: "topicInput",
							name: "topic"
						}, null, 512)];
					}),
					_: 1
				}, _parent, _scopeId));
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_CommentPreviewTab, { ref: "commentPreviewTab" }, null, _parent, _scopeId));
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_IpWarn, { discuss: "" }, null, _parent, _scopeId));
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedButton, {
					class: "submit-button",
					submit: ""
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.discuss.submit"))}`);
						else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.discuss.submit")), 1)];
					}),
					_: 1
				}, _parent, _scopeId));
			} else return [
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedFormBlock, {
					label: _ctx.$t("views.discuss.topic_label"),
					inputId: "topicInput",
					name: "topic"
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("input", {
						ref: "topicInput",
						type: "text",
						id: "topicInput",
						name: "topic"
					}, null, 512)]),
					_: 1
				}, 8, ["label"]),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_CommentPreviewTab, { ref: "commentPreviewTab" }, null, 512),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_IpWarn, { discuss: "" }),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedButton, {
					class: "submit-button",
					submit: ""
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.discuss.submit")), 1)]),
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/contents/document/discuss.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var discuss_default = /*#__PURE__*/ require__plugin_vue_export_helper._plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-2104e9fb"]]);
//#endregion
exports.default = discuss_default;
