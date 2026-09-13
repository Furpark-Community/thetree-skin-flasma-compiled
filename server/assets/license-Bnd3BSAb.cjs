const require__plugin_vue_export_helper = require("./_plugin-vue_export-helper-C1TPHJvg.cjs");
const require_server = require("../server.cjs");
//#region src/views/contents/special/license.vue
var _sfc_main = {
	components: { LocalDate: require_server.localDate_default },
	data() {
		return {
			...this.$store.state.viewData,
			commitIds: {
				"frontend": "dec4b74",
				"skin": "da49f2b"
			},
			commitDates: {
				"frontend": "2026-09-02T08:15:09.000Z",
				"skin": "2026-08-28T14:40:36.000Z"
			}
		};
	},
	computed: {
		beDate() {
			return require_server.formatDate(this.commitDate);
		},
		feDate() {
			return require_server.formatDate(this.commitDates.frontend);
		},
		skinDate() {
			return require_server.formatDate(this.commitDates.skin);
		}
	}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_LocalDate = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("LocalDate");
	_push(`<!--[--><h2>the tree</h2><p>v${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.version)}`);
	if (_ctx.branch) _push(`<span> (${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.branch)})</span>`);
	else _push(`<!---->`);
	_push(`</p><p>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.license.engine_update"))}: `);
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_LocalDate, { date: _ctx.commitDate }, null, _parent));
	_push(` (`);
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_LocalDate, {
		date: _ctx.commitDate,
		forceRelative: ""
	}, null, _parent));
	_push(`)</p><ul><li${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttr)("title", $options.beDate)}>Backend: ${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.commitId)}</li><li${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttr)("title", $options.feDate)}>Frontend: ${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)($data.commitIds.frontend)}</li><li${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttr)("title", $options.skinDate)}>Skin: ${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)($data.commitIds.skin)}</li></ul><p>Copyright <a href="https://github.com/wjdgustn">hyonsu</a> all rights reserved.</p><h3>Contributors</h3><ul><li>admin@hyonsu.com (backend &amp; frontend)</li></ul><h3>Open source license</h3><ul><li><pre>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.openSourceLicense)}</pre></li></ul><!--]-->`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = (0, require__plugin_vue_export_helper.vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/contents/special/license.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var license_default = /*#__PURE__*/ require__plugin_vue_export_helper._plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
//#endregion
exports.default = license_default;
