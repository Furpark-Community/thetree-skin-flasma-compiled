const require__plugin_vue_export_helper = require("./_plugin-vue_export-helper-C1TPHJvg.cjs");
const require_server = require("../server.cjs");
const require_prevNextBtn = require("./prevNextBtn-BuquZ4_C.cjs");
//#region src/views/contents/admin/login_history_result.vue
var _sfc_main = {
	components: {
		LocalDate: require_server.localDate_default,
		PrevNextBtn: require_prevNextBtn.prevNextBtn_default
	},
	computed: { pageProps() {
		const prevItem = this.data.prevItem;
		const nextItem = this.data.nextItem;
		return {
			prev: prevItem ? { query: { until: prevItem._id } } : null,
			next: nextItem ? { query: { from: nextItem._id } } : null
		};
	} }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_PrevNextBtn = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("PrevNextBtn");
	const _component_LocalDate = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("LocalDate");
	_push(`<!--[--><p data-v-78f52a85>${_ctx.$t("views.login_history_result.last_ua", { userAgent: _ctx.data.userAgent }) ?? ""}</p><p data-v-78f52a85>${_ctx.$t("views.login_history_result.email", { email: _ctx.data.targetUser?.email }) ?? ""}</p>`);
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_PrevNextBtn, (0, require__plugin_vue_export_helper.vue_exports.mergeProps)({ flex: "" }, $options.pageProps), null, _parent));
	_push(`<div data-v-78f52a85><table data-v-78f52a85><thead data-v-78f52a85><tr data-v-78f52a85><th data-v-78f52a85>DATE</th><th data-v-78f52a85>TYPE</th><th data-v-78f52a85>IP</th><th data-v-78f52a85>DEVICE</th><th data-v-78f52a85>UA</th></tr></thead><tbody data-v-78f52a85><!--[-->`);
	(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderList)(_ctx.data.logs, (item) => {
		_push(`<tr data-v-78f52a85><td data-v-78f52a85>`);
		_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_LocalDate, { date: item.createdAt }, null, _parent));
		_push(`</td><td data-v-78f52a85>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(["Login", "IPChange"][item.type] ?? item.type)}</td><td data-v-78f52a85>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(item.ip)}</td><td data-v-78f52a85>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(item.device)}</td><td data-v-78f52a85>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(item.userAgent)}</td></tr>`);
	});
	_push(`<!--]--></tbody></table></div>`);
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_PrevNextBtn, $options.pageProps, null, _parent));
	_push(`<!--]-->`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = (0, require__plugin_vue_export_helper.vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/contents/admin/login_history_result.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var login_history_result_default = /*#__PURE__*/ require__plugin_vue_export_helper._plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-78f52a85"]]);
//#endregion
exports.default = login_history_result_default;
