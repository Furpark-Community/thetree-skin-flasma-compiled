const require__plugin_vue_export_helper = require("./_plugin-vue_export-helper-C1TPHJvg.cjs");
const require_server = require("../server.cjs");
const require_prevNextBtn = require("./prevNextBtn-BuquZ4_C.cjs");
const require_diffCount = require("./diffCount-BJeKwZXu.cjs");
const require_historyTypeTab = require("./historyTypeTab-BMqyJSuQ.cjs");
const require_contributionTab = require("./contributionTab-pgYj2XcC.cjs");
//#region src/views/contents/userContribution/document.vue
var _sfc_main = {
	mixins: [require_server.common_default],
	components: {
		LocalDate: require_server.localDate_default,
		GeneralButton: require_server.generalButton_default,
		DiffCount: require_diffCount.diffCount_default,
		NuxtLink: require_server.nuxtLink_default,
		PrevNextBtn: require_prevNextBtn.prevNextBtn_default,
		HistoryTypeTab: require_historyTypeTab.historyTypeTab_default,
		ContributionTab: require_contributionTab.contributionTab_default
	},
	computed: { pageProps() {
		const prevItem = this.data.prevItem;
		const nextItem = this.data.nextItem;
		return {
			prev: prevItem ? { query: { until: prevItem.uuid } } : null,
			next: nextItem ? { query: { from: nextItem.uuid } } : null
		};
	} }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_ContributionTab = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("ContributionTab");
	const _component_HistoryTypeTab = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("HistoryTypeTab");
	const _component_PrevNextBtn = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("PrevNextBtn");
	const _component_NuxtLink = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("NuxtLink");
	const _component_DiffCount = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("DiffCount");
	const _component_GeneralButton = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("GeneralButton");
	const _component_LocalDate = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("LocalDate");
	_push(`<!--[-->`);
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_ContributionTab, null, null, _parent));
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_HistoryTypeTab, null, null, _parent));
	_push(`<div data-v-69464370>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.user_contribution.total", { count: _ctx.data.total }))}</div><div style="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderStyle)({ "margin-bottom": "1rem" })}" data-v-69464370>`);
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_PrevNextBtn, (0, require__plugin_vue_export_helper.vue_exports.mergeProps)({ flex: "" }, $options.pageProps), null, _parent));
	_push(`</div><div class="list-table" data-v-69464370><div class="table-row table-heading" data-v-69464370><div class="table-item" data-v-69464370>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.user_contribution.document"))}</div><div class="table-item" data-v-69464370>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.user_contribution.tools"))}</div><div class="table-item" data-v-69464370>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.user_contribution.edit_date"))}</div></div>`);
	if (_ctx.data.revs.length) {
		_push(`<!--[-->`);
		(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderList)(_ctx.data.revs, (item) => {
			_push(`<div class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)([{ troll: item.troll }, "table-row"])}" data-v-69464370><div class="table-item" data-v-69464370>`);
			_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_NuxtLink, { to: _ctx.doc_action_link(item.document.parsedName, "w") }, {
				default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.doc_fulltitle(item.document.parsedName))}`);
					else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.doc_fulltitle(item.document.parsedName)), 1)];
				}),
				_: 2
			}, _parent));
			_push(`<span class="history-rev" data-v-69464370>(`);
			_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_NuxtLink, {
				class: "history-rev-link",
				to: _ctx.doc_action_link(item.document.parsedName, "w", { uuid: item.uuid })
			}, {
				default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) _push(`r${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(item.rev)}`);
					else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)("r" + (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(item.rev), 1)];
				}),
				_: 2
			}, _parent));
			_push(`)</span>`);
			_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_DiffCount, {
				class: "history-diff-count",
				count: item.diffLength
			}, null, _parent));
			_push(`</div><div class="table-item table-buttons" data-v-69464370><div class="table-buttons-wrap" data-v-69464370>`);
			_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_GeneralButton, {
				size: "small",
				href: _ctx.doc_action_link(item.document.parsedName, "history")
			}, {
				default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("document.history"))}`);
					else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("document.history")), 1)];
				}),
				_: 2
			}, _parent));
			_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_GeneralButton, {
				size: "small",
				disabled: item.rev === 1,
				href: _ctx.doc_action_link(item.document.parsedName, "diff", { uuid: item.uuid })
			}, {
				default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("document.diff"))}`);
					else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("document.diff")), 1)];
				}),
				_: 2
			}, _parent));
			_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_GeneralButton, {
				size: "small",
				href: _ctx.doc_action_link(item.document.parsedName, "discuss")
			}, {
				default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("document.discuss"))}`);
					else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("document.discuss")), 1)];
				}),
				_: 2
			}, _parent));
			_push(`</div></div><div class="table-item" data-v-69464370>`);
			_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_LocalDate, {
				date: item.createdAt,
				relative: ""
			}, null, _parent));
			_push(`</div>`);
			if (item.infoText || item.log) {
				_push(`<div class="table-item history-log" data-v-69464370>`);
				if (item.log) _push(`<span data-v-69464370>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(item.log)}</span>`);
				else _push(`<!---->`);
				if (item.infoText) _push(`<i data-v-69464370>${" (" + item.infoText + ")"}</i>`);
				else _push(`<!---->`);
				_push(`</div>`);
			} else _push(`<!---->`);
			_push(`</div>`);
		});
		_push(`<!--]-->`);
	} else _push(`<div class="table-row" data-v-69464370><div class="table-item no-item" data-v-69464370> (${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.user_contribution.no_contribution"))}) </div></div>`);
	_push(`</div><div style="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderStyle)({ "margin-top": "1rem" })}" data-v-69464370>`);
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_PrevNextBtn, (0, require__plugin_vue_export_helper.vue_exports.mergeProps)({ flex: "" }, $options.pageProps), null, _parent));
	_push(`</div><!--]-->`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = (0, require__plugin_vue_export_helper.vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/contents/userContribution/document.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var document_default = /*#__PURE__*/ require__plugin_vue_export_helper._plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-69464370"]]);
//#endregion
exports.default = document_default;
