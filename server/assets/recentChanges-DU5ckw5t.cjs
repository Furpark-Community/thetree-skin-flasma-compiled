const require__plugin_vue_export_helper = require("./_plugin-vue_export-helper-C1TPHJvg.cjs");
const require_server = require("../server.cjs");
const require_authorSpan = require("./authorSpan-Cr3XG9VP.cjs");
const require_linkTab = require("./linkTab-L3ri292q.cjs");
const require_diffCount = require("./diffCount-BJeKwZXu.cjs");
const require_historyTypeTab = require("./historyTypeTab-BMqyJSuQ.cjs");
//#region src/views/contents/special/recentChanges.vue
var _sfc_main = {
	mixins: [require_server.common_default],
	components: {
		CheckBox: require_server.checkBox_default,
		HistoryTypeTab: require_historyTypeTab.historyTypeTab_default,
		LinkTab: require_linkTab.linkTab_default,
		NuxtLink: require_server.nuxtLink_default,
		DiffCount: require_diffCount.diffCount_default,
		GeneralButton: require_server.generalButton_default,
		AuthorSpan: require_authorSpan.authorSpan_default,
		LocalDate: require_server.localDate_default
	}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_HistoryTypeTab = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("HistoryTypeTab");
	const _component_CheckBox = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("CheckBox");
	const _component_NuxtLink = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("NuxtLink");
	const _component_DiffCount = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("DiffCount");
	const _component_GeneralButton = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("GeneralButton");
	const _component_AuthorSpan = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("AuthorSpan");
	const _component_LocalDate = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("LocalDate");
	_push(`<!--[-->`);
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_HistoryTypeTab, null, null, _parent));
	if (_ctx.session.quick_block) {
		_push(`<!--[-->`);
		_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_CheckBox, {
			checked: _ctx.$route.query.showAll === "1",
			whenChange: (e) => _ctx.$router.push({ query: { showAll: e.target.checked ? "1" : void 0 } }),
			style: { "float": "right" }
		}, {
			default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
				if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.recent_changes.see_all_changes"))}`);
				else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.recent_changes.see_all_changes")), 1)];
			}),
			_: 1
		}, _parent));
		_push(`<div style="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderStyle)({ "clear": "both" })}" data-v-292f65a0></div><!--]-->`);
	} else _push(`<!---->`);
	_push(`<div class="list-table" data-v-292f65a0><div class="table-row table-heading" data-v-292f65a0><div class="table-item" data-v-292f65a0>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.user_contribution.document"))}</div><div class="table-item" data-v-292f65a0>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.user_contribution.tools"))}</div><div class="table-item" data-v-292f65a0>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.recent_changes.author"))}</div><div class="table-item" data-v-292f65a0>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.user_contribution.edit_date"))}</div></div><!--[-->`);
	(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderList)(_ctx.data.revs, (rev) => {
		_push(`<div class="table-row" data-v-292f65a0><div class="table-item" data-v-292f65a0>`);
		_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_NuxtLink, { to: _ctx.doc_action_link(rev.document.parsedName, "w") }, {
			default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
				if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.doc_fulltitle(rev.document.parsedName))}`);
				else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.doc_fulltitle(rev.document.parsedName)), 1)];
			}),
			_: 2
		}, _parent));
		_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_DiffCount, {
			count: rev.diffLength,
			class: "history-diff-count"
		}, null, _parent));
		_push(`</div><div class="table-item table-buttons" data-v-292f65a0><div class="table-buttons-wrap" data-v-292f65a0>`);
		_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_GeneralButton, {
			size: "small",
			href: _ctx.doc_action_link(rev.document.parsedName, "history")
		}, {
			default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
				if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("document.history"))}`);
				else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("document.history")), 1)];
			}),
			_: 2
		}, _parent));
		_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_GeneralButton, {
			size: "small",
			disabled: rev.rev === 1,
			href: _ctx.doc_action_link(rev.document.parsedName, "diff", { uuid: rev.uuid })
		}, {
			default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
				if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("document.diff"))}`);
				else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("document.diff")), 1)];
			}),
			_: 2
		}, _parent));
		_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_GeneralButton, {
			size: "small",
			href: _ctx.doc_action_link(rev.document.parsedName, "discuss")
		}, {
			default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
				if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("document.discuss"))}`);
				else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("document.discuss")), 1)];
			}),
			_: 2
		}, _parent));
		_push(`</div></div><div class="table-item" data-v-292f65a0><span data-v-292f65a0>`);
		_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_AuthorSpan, { account: rev.user }, null, _parent));
		if (rev.api) _push(`<!--[-->(API)<!--]-->`);
		else _push(`<!---->`);
		_push(`</span></div><div class="table-item" data-v-292f65a0>`);
		_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_LocalDate, {
			date: rev.createdAt,
			relative: ""
		}, null, _parent));
		_push(`</div>`);
		if (rev.infoText || rev.log) {
			_push(`<div class="table-item history-log" data-v-292f65a0>`);
			if (rev.log) _push(`<span data-v-292f65a0>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(rev.log)}</span>`);
			else _push(`<!---->`);
			if (rev.infoText) _push(`<i data-v-292f65a0>${" (" + rev.infoText + ")"}</i>`);
			else _push(`<!---->`);
			_push(`</div>`);
		} else _push(`<!---->`);
		_push(`</div>`);
	});
	_push(`<!--]--></div><!--]-->`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = (0, require__plugin_vue_export_helper.vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/contents/special/recentChanges.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var recentChanges_default = /*#__PURE__*/ require__plugin_vue_export_helper._plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-292f65a0"]]);
//#endregion
exports.default = recentChanges_default;
