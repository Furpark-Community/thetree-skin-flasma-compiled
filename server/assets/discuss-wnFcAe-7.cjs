const require__plugin_vue_export_helper = require("./_plugin-vue_export-helper-C1TPHJvg.cjs");
const require_server = require("../server.cjs");
const require_prevNextBtn = require("./prevNextBtn-BuquZ4_C.cjs");
const require_contributionTab = require("./contributionTab-pgYj2XcC.cjs");
//#region src/views/contents/userContribution/discuss.vue
var _sfc_main = {
	mixins: [require_server.common_default],
	components: {
		LocalDate: require_server.localDate_default,
		NuxtLink: require_server.nuxtLink_default,
		PrevNextBtn: require_prevNextBtn.prevNextBtn_default,
		ContributionTab: require_contributionTab.contributionTab_default
	}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_ContributionTab = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("ContributionTab");
	const _component_PrevNextBtn = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("PrevNextBtn");
	const _component_NuxtLink = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("NuxtLink");
	const _component_FontAwesomeIcon = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("FontAwesomeIcon");
	const _component_LocalDate = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("LocalDate");
	_push(`<!--[-->`);
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_ContributionTab, null, null, _parent));
	_push(`<div data-v-a2cc02a8>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.user_contribution.total", { count: _ctx.data.total }))}</div><div style="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderStyle)({ "margin-bottom": "1rem" })}" data-v-a2cc02a8>`);
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_PrevNextBtn, (0, require__plugin_vue_export_helper.vue_exports.mergeProps)({ flex: "" }, _ctx.data.pageProps), null, _parent));
	_push(`</div><div class="list-table" data-v-a2cc02a8><div class="table-row table-heading" data-v-a2cc02a8><div class="table-item" data-v-a2cc02a8>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.user_contribution.topic"))}</div><div class="table-item" data-v-a2cc02a8>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.user_contribution.date"))}</div></div>`);
	if (_ctx.data.items.length) {
		_push(`<!--[-->`);
		(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderList)(_ctx.data.items, (item) => {
			_push(`<div class="table-row" data-v-a2cc02a8><div class="table-item" data-v-a2cc02a8>`);
			_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_NuxtLink, { to: `/thread/${item.thread.url}#${item.id}` }, {
				default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) _push(`#${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(item.id)} ${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(item.thread.topic)}`);
					else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)("#" + (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(item.id) + " " + (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(item.thread.topic), 1)];
				}),
				_: 2
			}, _parent));
			_push(`<span class="document-group" data-v-a2cc02a8><span class="document-icon" data-v-a2cc02a8>`);
			_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_FontAwesomeIcon, { icon: "fa-regular fa-file-lines" }, null, _parent));
			_push(`</span>`);
			_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_NuxtLink, {
				to: _ctx.doc_action_link(item.thread.document.parsedName, "discuss"),
				class: "document-link"
			}, {
				default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.doc_fulltitle(item.thread.document.parsedName))}`);
					else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.doc_fulltitle(item.thread.document.parsedName)), 1)];
				}),
				_: 2
			}, _parent));
			_push(`</span></div><div class="table-item" data-v-a2cc02a8>`);
			_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_LocalDate, {
				date: item.createdAt,
				relative: ""
			}, null, _parent));
			_push(`</div></div>`);
		});
		_push(`<!--]-->`);
	} else _push(`<div class="table-row" data-v-a2cc02a8><div class="table-item no-item" data-v-a2cc02a8> (${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.user_contribution.no_contribution"))}) </div></div>`);
	_push(`</div><div style="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderStyle)({ "margin-top": "1rem" })}" data-v-a2cc02a8>`);
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_PrevNextBtn, (0, require__plugin_vue_export_helper.vue_exports.mergeProps)({ flex: "" }, _ctx.data.pageProps), null, _parent));
	_push(`</div><!--]-->`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = (0, require__plugin_vue_export_helper.vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/contents/userContribution/discuss.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var discuss_default = /*#__PURE__*/ require__plugin_vue_export_helper._plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-a2cc02a8"]]);
//#endregion
exports.default = discuss_default;
