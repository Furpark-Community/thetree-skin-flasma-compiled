const require__plugin_vue_export_helper = require("./_plugin-vue_export-helper-C1TPHJvg.cjs");
//#region src/components/historyTypeTab.vue
var _sfc_main = { components: { LinkTab: require("./linkTab-L3ri292q.cjs").linkTab_default } };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)((0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("LinkTab"), (0, require__plugin_vue_export_helper.vue_exports.mergeProps)({
		class: "link-tab",
		items: [
			{
				title: _ctx.$t("components.history_type_tab.all"),
				href: "?logtype=all",
				active: !_ctx.$route.query.logtype || _ctx.$route.query.logtype === "all"
			},
			{
				title: _ctx.$t("components.history_type_tab.create"),
				href: "?logtype=create",
				active: _ctx.$route.query.logtype === "create"
			},
			{
				title: _ctx.$t("components.history_type_tab.delete"),
				href: "?logtype=delete",
				active: _ctx.$route.query.logtype === "delete"
			},
			{
				title: _ctx.$t("components.history_type_tab.move"),
				href: "?logtype=move",
				active: _ctx.$route.query.logtype === "move"
			},
			{
				title: _ctx.$t("components.history_type_tab.revert"),
				href: "?logtype=revert",
				active: _ctx.$route.query.logtype === "revert"
			}
		]
	}, _attrs), null, _parent));
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = (0, require__plugin_vue_export_helper.vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/historyTypeTab.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var historyTypeTab_default = /*#__PURE__*/ require__plugin_vue_export_helper._plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
//#endregion
Object.defineProperty(exports, "historyTypeTab_default", {
	enumerable: true,
	get: function() {
		return historyTypeTab_default;
	}
});
