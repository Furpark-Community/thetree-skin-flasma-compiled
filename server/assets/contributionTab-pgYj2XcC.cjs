const require__plugin_vue_export_helper = require("./_plugin-vue_export-helper-C1TPHJvg.cjs");
const require_server = require("../server.cjs");
const require_linkTab = require("./linkTab-L3ri292q.cjs");
//#region src/components/contributionTab.vue
var _sfc_main = {
	mixins: [require_server.common_default],
	components: { LinkTab: require_linkTab.linkTab_default }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)((0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("LinkTab"), (0, require__plugin_vue_export_helper.vue_exports.mergeProps)({
		class: "link-tab",
		items: [
			{
				title: _ctx.$t("components.contribution_tab.document"),
				href: _ctx.contribution_link(_ctx.data.account.uuid),
				active: _ctx.data.contributionType === "document"
			},
			{
				title: _ctx.$t("components.contribution_tab.discuss"),
				href: _ctx.contribution_link_discuss(_ctx.data.account.uuid),
				active: _ctx.data.contributionType === "discuss"
			},
			{
				title: _ctx.$t("components.contribution_tab.edit_request"),
				href: _ctx.contribution_link_edit_request(_ctx.data.account.uuid),
				active: _ctx.data.contributionType === "edit_request"
			},
			{
				title: _ctx.$t("components.contribution_tab.accepted_edit_request"),
				href: _ctx.contribution_link_accepted_edit_request(_ctx.data.account.uuid),
				active: _ctx.data.contributionType === "accepted_edit_request"
			}
		]
	}, _attrs), null, _parent));
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = (0, require__plugin_vue_export_helper.vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/contributionTab.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var contributionTab_default = /*#__PURE__*/ require__plugin_vue_export_helper._plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
//#endregion
Object.defineProperty(exports, "contributionTab_default", {
	enumerable: true,
	get: function() {
		return contributionTab_default;
	}
});
