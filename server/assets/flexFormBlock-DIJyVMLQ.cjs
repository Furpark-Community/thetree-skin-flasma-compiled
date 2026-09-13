const require__plugin_vue_export_helper = require("./_plugin-vue_export-helper-C1TPHJvg.cjs");
//#region src/components/form/flexFormBlock.vue
var _sfc_main = {
	components: { ShowError: require("./showError-A8EkGqzL.cjs").showError_default },
	props: {
		inputId: String,
		name: String,
		label: String,
		flexStart: Boolean,
		buttons: Boolean,
		padding: Boolean
	}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_ShowError = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("ShowError");
	_push(`<div${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttrs)((0, require__plugin_vue_export_helper.vue_exports.mergeProps)({ class: ["form-block", {
		"flex-start": $props.flexStart,
		buttons: $props.buttons,
		padding: $props.padding
	}] }, _attrs))} data-v-1d8afe56>`);
	if ($props.label) _push(`<label${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttr)("for", $props.inputId)} data-v-1d8afe56>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)($props.label)}</label>`);
	else _push(`<!---->`);
	(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "default", {}, null, _push, _parent);
	if ($props.name) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_ShowError, { tag: $props.name }, null, _parent));
	else _push(`<!---->`);
	if (_ctx.$slots.buttons) {
		_push(`<div class="buttons-group" data-v-1d8afe56>`);
		(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "buttons", {}, null, _push, _parent);
		_push(`</div>`);
	} else _push(`<!---->`);
	_push(`</div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = (0, require__plugin_vue_export_helper.vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/form/flexFormBlock.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var flexFormBlock_default = /*#__PURE__*/ require__plugin_vue_export_helper._plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-1d8afe56"]]);
//#endregion
Object.defineProperty(exports, "flexFormBlock_default", {
	enumerable: true,
	get: function() {
		return flexFormBlock_default;
	}
});
