const require__plugin_vue_export_helper = require("./_plugin-vue_export-helper-C1TPHJvg.cjs");
const require_server = require("../server.cjs");
const require_prevNextBtn = require("./prevNextBtn-BuquZ4_C.cjs");
//#region src/views/contents/docList/OldPages.vue
var _sfc_main = {
	mixins: [require_server.common_default],
	components: {
		LocalDate: require_server.localDate_default,
		NuxtLink: require_server.nuxtLink_default,
		PrevNextBtn: require_prevNextBtn.prevNextBtn_default
	}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_PrevNextBtn = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("PrevNextBtn");
	const _component_NuxtLink = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("NuxtLink");
	const _component_i18next = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("i18next");
	const _component_LocalDate = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("LocalDate");
	_push(`<!--[--><p data-v-51da7d0a>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.old_pages.description"))}</p>`);
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_PrevNextBtn, (0, require__plugin_vue_export_helper.vue_exports.mergeProps)({ flex: "" }, _ctx.data.pageProps), null, _parent));
	_push(`<ul data-v-51da7d0a><!--[-->`);
	(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderList)(_ctx.data.items, (item) => {
		_push(`<li data-v-51da7d0a>`);
		_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_NuxtLink, { to: _ctx.doc_action_link(item.document.parsedName, "w") }, {
			default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
				if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.doc_fulltitle(item.document.parsedName))}`);
				else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.doc_fulltitle(item.document.parsedName)), 1)];
			}),
			_: 2
		}, _parent));
		_push(` (`);
		_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_i18next, { translation: _ctx.$t("views.old_pages.edit_date") }, {
			date: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
				if (_push) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_LocalDate, { date: item.createdAt }, null, _parent, _scopeId));
				else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_LocalDate, { date: item.createdAt }, null, 8, ["date"])];
			}),
			_: 2
		}, _parent));
		_push(`) </li>`);
	});
	_push(`<!--]--></ul>`);
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_PrevNextBtn, (0, require__plugin_vue_export_helper.vue_exports.mergeProps)({ flex: "" }, _ctx.data.pageProps), null, _parent));
	_push(`<!--]-->`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = (0, require__plugin_vue_export_helper.vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/contents/docList/OldPages.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var OldPages_default = /*#__PURE__*/ require__plugin_vue_export_helper._plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-51da7d0a"]]);
//#endregion
exports.default = OldPages_default;
