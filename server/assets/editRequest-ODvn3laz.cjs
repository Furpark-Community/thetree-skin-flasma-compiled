const require__plugin_vue_export_helper = require("./_plugin-vue_export-helper-C1TPHJvg.cjs");
const require_server = require("../server.cjs");
const require_prevNextBtn = require("./prevNextBtn-BuquZ4_C.cjs");
const require_authorSpan = require("./authorSpan-Cr3XG9VP.cjs");
const require_diffCount = require("./diffCount-BJeKwZXu.cjs");
const require_contributionTab = require("./contributionTab-pgYj2XcC.cjs");
var editRequest_vue_vue_type_style_index_0_lang_module_default = {
	table: "_table_13ect_1",
	"table--bordered": "_table--bordered_13ect_1",
	row: "_row_13ect_1",
	"row--head": "_row--head_13ect_1",
	column: "_column_13ect_1",
	"column--stack": "_column--stack_13ect_1",
	"column--button-parent": "_column--button-parent_13ect_1",
	"column--single": "_column--single_13ect_1",
	"column--full": "_column--full_13ect_1"
};
//#endregion
//#region src/views/contents/userContribution/editRequest.vue
var _sfc_main = {
	mixins: [require_server.common_default],
	components: {
		AuthorSpan: require_authorSpan.authorSpan_default,
		LocalDate: require_server.localDate_default,
		DiffCount: require_diffCount.diffCount_default,
		NuxtLink: require_server.nuxtLink_default,
		PrevNextBtn: require_prevNextBtn.prevNextBtn_default,
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
	const _component_PrevNextBtn = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("PrevNextBtn");
	const _component_NuxtLink = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("NuxtLink");
	const _component_DiffCount = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("DiffCount");
	const _component_FontAwesomeIcon = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("FontAwesomeIcon");
	const _component_LocalDate = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("LocalDate");
	const _component_i18next = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("i18next");
	const _component_AuthorSpan = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("AuthorSpan");
	_push(`<!--[-->`);
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_ContributionTab, null, null, _parent));
	_push(`<div data-v-a2d09c87>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.user_contribution.total", { count: _ctx.data.total }))}</div><div style="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderStyle)({ "margin-bottom": "1rem" })}" data-v-a2d09c87>`);
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_PrevNextBtn, (0, require__plugin_vue_export_helper.vue_exports.mergeProps)({ flex: "" }, $options.pageProps), null, _parent));
	_push(`</div><div class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)(_ctx.$style.table)}" data-v-a2d09c87><div class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)([
		_ctx.$style.row,
		_ctx.$style["row--head"],
		"table-row"
	])}" data-v-a2d09c87><div class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)([_ctx.$style.column, "table-column"])}" data-v-a2d09c87>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.user_contribution.edit_request"))}</div><div class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)([_ctx.$style.column, "table-column"])}" data-v-a2d09c87>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.user_contribution.status"))}</div><div class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)([_ctx.$style.column, "table-column"])}" data-v-a2d09c87>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.user_contribution.date"))}</div></div>`);
	if (_ctx.data.items.length) {
		_push(`<!--[-->`);
		(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderList)(_ctx.data.items, (item) => {
			_push(`<div class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)([_ctx.$style.row, "table-row"])}" data-v-a2d09c87><div class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)([_ctx.$style.column, "table-column"])}" data-v-a2d09c87>`);
			_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_NuxtLink, { to: "/edit_request/" + item.url }, {
				default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.user_contribution.edit_request_link", { slug: item.url }))}`);
					else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.user_contribution.edit_request_link", { slug: item.url })), 1)];
				}),
				_: 2
			}, _parent));
			_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_DiffCount, {
				class: "diff-count",
				count: item.diffLength
			}, null, _parent));
			_push(`<span class="document-group" data-v-a2d09c87><span class="document-icon" data-v-a2d09c87>`);
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
			_push(`</span></div><div class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)([_ctx.$style.column, "table-column"])}" data-v-a2d09c87>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)([
				"OPEN",
				"ACCEPTED",
				"CLOSED",
				"LOCKED"
			][item.status])}</div><div class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)([_ctx.$style.column, "table-column"])}" data-v-a2d09c87>`);
			_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_LocalDate, {
				date: item.lastUpdatedAt,
				relative: ""
			}, null, _parent));
			_push(`</div>`);
			if (item.createdUser) {
				_push(`<div class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)([
					_ctx.$style.column,
					_ctx.$style["column--full"],
					"table-column",
					"author-text"
				])}" data-v-a2d09c87> (`);
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_i18next, { translation: _ctx.$t("views.user_contribution.edit_request_author") }, {
					user: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_AuthorSpan, { account: item.createdUser }, null, _parent, _scopeId));
						else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_AuthorSpan, { account: item.createdUser }, null, 8, ["account"])];
					}),
					_: 2
				}, _parent));
				_push(`) </div>`);
			} else _push(`<!---->`);
			_push(`</div>`);
		});
		_push(`<!--]-->`);
	} else _push(`<div class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)([_ctx.$style.row, "table-row"])}" data-v-a2d09c87><div class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)([
		_ctx.$style.column,
		_ctx.$style["column--single"],
		"table-column"
	])}" data-v-a2d09c87> (${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.user_contribution.no_contribution"))}) </div></div>`);
	_push(`</div><div style="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderStyle)({ "margin-top": "1rem" })}" data-v-a2d09c87>`);
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_PrevNextBtn, (0, require__plugin_vue_export_helper.vue_exports.mergeProps)({ flex: "" }, $options.pageProps), null, _parent));
	_push(`</div><!--]-->`);
}
var cssModules = { "$style": editRequest_vue_vue_type_style_index_0_lang_module_default };
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = (0, require__plugin_vue_export_helper.vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/contents/userContribution/editRequest.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var editRequest_default = /*#__PURE__*/ require__plugin_vue_export_helper._plugin_vue_export_helper_default(_sfc_main, [
	["ssrRender", _sfc_ssrRender],
	["__cssModules", cssModules],
	["__scopeId", "data-v-a2d09c87"]
]);
//#endregion
exports.default = editRequest_default;
