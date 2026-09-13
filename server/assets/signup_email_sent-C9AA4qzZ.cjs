const require__plugin_vue_export_helper = require("./_plugin-vue_export-helper-C1TPHJvg.cjs");
//#region src/views/contents/member/signup_email_sent.vue
var _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
	const _component_i18next = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("i18next");
	_push(`<!--[--><p>`);
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_i18next, { translation: _ctx.$t("views.signup_email_sent.message") }, {
		email: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
			if (_push) _push(`<b${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.data.email)}</b>`);
			else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("b", null, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.data.email), 1)];
		}),
		_: 1
	}, _parent));
	_push(`</p><ul><li>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.recover_password_email_sent.list_2"))}</li><li>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.recover_password_email_sent.list_3"))}</li></ul><!--]-->`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = (0, require__plugin_vue_export_helper.vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/contents/member/signup_email_sent.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var signup_email_sent_default = /*#__PURE__*/ require__plugin_vue_export_helper._plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
//#endregion
exports.default = signup_email_sent_default;
