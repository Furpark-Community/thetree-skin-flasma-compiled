const require__plugin_vue_export_helper = require("./_plugin-vue_export-helper-C1TPHJvg.cjs");
const require_server = require("../server.cjs");
const require_authorSpan = require("./authorSpan-Cr3XG9VP.cjs");
const require_linkTab = require("./linkTab-L3ri292q.cjs");
const require_diffCount = require("./diffCount-BJeKwZXu.cjs");
//#region src/views/contents/special/recentDiscuss.vue
var _sfc_main = {
	mixins: [require_server.common_default],
	components: {
		LinkTab: require_linkTab.linkTab_default,
		NuxtLink: require_server.nuxtLink_default,
		DiffCount: require_diffCount.diffCount_default,
		GeneralButton: require_server.generalButton_default,
		AuthorSpan: require_authorSpan.authorSpan_default,
		LocalDate: require_server.localDate_default
	}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_LinkTab = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("LinkTab");
	const _component_NuxtLink = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("NuxtLink");
	const _component_DiffCount = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("DiffCount");
	const _component_FontAwesomeIcon = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("FontAwesomeIcon");
	const _component_AuthorSpan = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("AuthorSpan");
	const _component_LocalDate = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("LocalDate");
	_push(`<!--[-->`);
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_LinkTab, {
		class: "link-tab",
		items: [
			{
				title: _ctx.$t("views.recent_discuss.normal_thread"),
				href: "?logtype=normal_thread",
				active: !_ctx.$route.query.logtype || _ctx.$route.query.logtype === "normal_thread"
			},
			{
				title: _ctx.$t("views.recent_discuss.old_thread"),
				href: "?logtype=old_thread",
				active: _ctx.$route.query.logtype === "old_thread"
			},
			{
				title: _ctx.$t("views.recent_discuss.pause_thread"),
				href: "?logtype=pause_thread",
				active: _ctx.$route.query.logtype === "pause_thread"
			},
			{
				title: _ctx.$t("views.recent_discuss.closed_thread"),
				href: "?logtype=closed_thread",
				active: _ctx.$route.query.logtype === "closed_thread"
			},
			{
				title: _ctx.$t("views.recent_discuss.open_editrequest"),
				href: "?logtype=open_editrequest",
				active: _ctx.$route.query.logtype === "open_editrequest"
			},
			{
				title: _ctx.$t("views.recent_discuss.accepted_editrequest"),
				href: "?logtype=accepted_editrequest",
				active: _ctx.$route.query.logtype === "accepted_editrequest"
			},
			{
				title: _ctx.$t("views.recent_discuss.closed_editrequest"),
				href: "?logtype=closed_editrequest",
				active: _ctx.$route.query.logtype === "closed_editrequest"
			},
			{
				title: _ctx.$t("views.recent_discuss.old_editrequest"),
				href: "?logtype=old_editrequest",
				active: _ctx.$route.query.logtype === "old_editrequest"
			}
		]
	}, null, _parent));
	_push(`<div class="list-table" data-v-92784a68><div class="table-row table-heading" data-v-92784a68><div class="table-item" data-v-92784a68>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.user_contribution.topic"))}</div><div class="table-item" data-v-92784a68>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.recent_changes.author"))}</div><div class="table-item" data-v-92784a68>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.user_contribution.date"))}</div></div><!--[-->`);
	(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderList)([..._ctx.data.threads, ..._ctx.data.editRequests], (item) => {
		_push(`<div class="table-row" data-v-92784a68><div class="table-item" data-v-92784a68>`);
		_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_NuxtLink, { to: (item.topic ? "/thread/" : "/edit_request/") + item.url }, {
			default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
				if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(item.topic || _ctx.$t("views.user_contribution.edit_request_link", { slug: item.url }))}`);
				else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(item.topic || _ctx.$t("views.user_contribution.edit_request_link", { slug: item.url })), 1)];
			}),
			_: 2
		}, _parent));
		if (item.diffLength != null) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_DiffCount, {
			class: "diff-count",
			count: item.diffLength
		}, null, _parent));
		else _push(`<!---->`);
		_push(`<span class="document-group" data-v-92784a68><span class="document-icon" data-v-92784a68>`);
		_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_FontAwesomeIcon, { icon: "fa-regular fa-file-lines" }, null, _parent));
		_push(`</span>`);
		_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_NuxtLink, {
			to: _ctx.doc_action_link(item.document.parsedName, "discuss"),
			class: "document-link"
		}, {
			default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
				if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.doc_fulltitle(item.document.parsedName))}`);
				else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.doc_fulltitle(item.document.parsedName)), 1)];
			}),
			_: 2
		}, _parent));
		_push(`</span></div><div class="table-item" data-v-92784a68>`);
		_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_AuthorSpan, {
			account: item.lastUpdateUser || item.createdUser,
			pos: _ctx.$t(item.lastUpdateUser ? "document.discuss" : "document.edit_request") + " " + item.url
		}, null, _parent));
		_push(`</div><div class="table-item" data-v-92784a68>`);
		_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_LocalDate, {
			date: item.lastUpdatedAt,
			relative: ""
		}, null, _parent));
		_push(`</div></div>`);
	});
	_push(`<!--]--></div><!--]-->`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = (0, require__plugin_vue_export_helper.vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/contents/special/recentDiscuss.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var recentDiscuss_default = /*#__PURE__*/ require__plugin_vue_export_helper._plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-92784a68"]]);
//#endregion
exports.default = recentDiscuss_default;
