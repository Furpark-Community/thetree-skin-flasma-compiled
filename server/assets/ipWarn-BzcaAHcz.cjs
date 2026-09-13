const require__plugin_vue_export_helper = require("./_plugin-vue_export-helper-C1TPHJvg.cjs");
//#region src/components/blinkRedWarn.vue
var _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
	_push(`<p${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttrs)(_attrs)} data-v-b9da30b1>`);
	(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "default", {}, null, _push, _parent);
	_push(`</p>`);
}
var _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
	const ssrContext = (0, require__plugin_vue_export_helper.vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/blinkRedWarn.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
//#endregion
//#region src/components/ipWarn.vue
var _sfc_main = {
	components: { BlinkRedWarn: /* @__PURE__ */ require__plugin_vue_export_helper._plugin_vue_export_helper_default(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-b9da30b1"]]) },
	props: { discuss: Boolean }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_BlinkRedWarn = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("BlinkRedWarn");
	_push(`<div${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttrs)(_attrs)}>`);
	if (_ctx.session.account.type !== 1) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_BlinkRedWarn, null, {
		default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
			if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("components.ip_warn." + ($props.discuss ? "discuss" : "document"), { ip: _ctx.session.account.name }))}`);
			else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("components.ip_warn." + ($props.discuss ? "discuss" : "document"), { ip: _ctx.session.account.name })), 1)];
		}),
		_: 1
	}, _parent));
	else _push(`<!---->`);
	_push(`</div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = (0, require__plugin_vue_export_helper.vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ipWarn.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var ipWarn_default = /*#__PURE__*/ require__plugin_vue_export_helper._plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
//#endregion
Object.defineProperty(exports, "ipWarn_default", {
	enumerable: true,
	get: function() {
		return ipWarn_default;
	}
});
