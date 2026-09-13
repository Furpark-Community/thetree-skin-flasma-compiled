const require__plugin_vue_export_helper = require("./_plugin-vue_export-helper-C1TPHJvg.cjs");
const require_server = require("../server.cjs");
const require_comment = require("./comment-DpU11qiu.cjs");
//#region src/components/commentPreviewTab.vue
var _sfc_main = {
	mixins: [require_server.common_default],
	props: { sendComment: Function },
	components: { Comment: require_comment.comment_default },
	data() {
		return {
			activeTab: "raw",
			previewComment: {}
		};
	},
	watch: { activeTab(newValue) {
		if (newValue === "preview") this.loadPreview();
	} },
	methods: { async loadPreview() {
		this.previewComment = {
			type: 0,
			id: (this.data.comments?.at(-1).id ?? 0) + 1,
			createdAt: (/* @__PURE__ */ new Date()).toISOString(),
			user: {
				uuid: this.session.account.uuid,
				name: this.session.account.name,
				type: this.session.account.type
			}
		};
		const json = await this.internalRequest(this.doc_action_link(this.data.document, "preview"), {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: new URLSearchParams({
				content: this.$refs.commentInput.value,
				mode: "thread"
			}).toString(),
			noProgress: true
		});
		this.previewComment.contentHtml = json.contentHtml;
	} }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_Comment = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("Comment");
	_push(`<!--[--><ul data-v-4888f397><li data-v-4888f397><button type="button" class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)([{ active: $data.activeTab === "raw" }, "tab-button"])}" data-v-4888f397>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("components.comment_preview_tab.raw"))}</button></li><li data-v-4888f397><button type="button" class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)([{ active: $data.activeTab === "preview" }, "tab-button"])}" data-v-4888f397>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("components.comment_preview_tab.preview"))}</button></li></ul><div class="tabs" data-v-4888f397><div class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)({ active: $data.activeTab === "raw" })}" data-v-4888f397>`);
	if (!_ctx.data.thread || _ctx.data.thread.status === 0) _push(`<textarea rows="5" name="text" data-v-4888f397></textarea>`);
	else _push(`<textarea rows="5" disabled data-v-4888f397>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)([
		"",
		_ctx.$t("components.comment_preview_tab.pause"),
		_ctx.$t("components.comment_preview_tab.close")
	][_ctx.data.thread.status])}</textarea>`);
	_push(`</div><div class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)([{ active: $data.activeTab === "preview" }, "preview-tab"])}" data-v-4888f397>`);
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_Comment, {
		previewMode: "",
		slug: _ctx.data.thread?.url ?? "dummy",
		comment: $data.previewComment
	}, null, _parent));
	_push(`</div></div><!--]-->`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = (0, require__plugin_vue_export_helper.vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/commentPreviewTab.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var commentPreviewTab_default = /*#__PURE__*/ require__plugin_vue_export_helper._plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-4888f397"]]);
//#endregion
Object.defineProperty(exports, "commentPreviewTab_default", {
	enumerable: true,
	get: function() {
		return commentPreviewTab_default;
	}
});
