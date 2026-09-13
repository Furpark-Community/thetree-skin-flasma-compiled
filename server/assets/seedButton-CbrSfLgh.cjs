const require__plugin_vue_export_helper = require("./_plugin-vue_export-helper-C1TPHJvg.cjs");
//#region src/components/seedButton.vue
var _sfc_main = {
	inject: { submittingSeedForm: { default: false } },
	props: {
		disabled: Boolean,
		large: Boolean,
		green: Boolean,
		submit: Boolean,
		info: Boolean,
		danger: Boolean,
		block: Boolean
	}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	_push(`<button${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttrs)((0, require__plugin_vue_export_helper.vue_exports.mergeProps)(_ctx.$attrs, {
		disabled: $props.disabled || $options.submittingSeedForm,
		class: {
			large: _ctx.$props.large,
			green: _ctx.$props.green,
			submit: _ctx.$props.submit,
			info: _ctx.$props.info,
			danger: _ctx.$props.danger,
			block: _ctx.$props.block
		}
	}, _attrs))} data-v-430c059b>`);
	(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "default", {}, null, _push, _parent);
	_push(`</button>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = (0, require__plugin_vue_export_helper.vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/seedButton.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var seedButton_default = /*#__PURE__*/ require__plugin_vue_export_helper._plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-430c059b"]]);
//#endregion
Object.defineProperty(exports, "seedButton_default", {
	enumerable: true,
	get: function() {
		return seedButton_default;
	}
});
