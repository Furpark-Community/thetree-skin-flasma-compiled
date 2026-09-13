const require__plugin_vue_export_helper = require("./_plugin-vue_export-helper-C1TPHJvg.cjs");
//#region src/components/form/seedFormInput.vue
var _sfc_main = {
	inject: { submittingSeedForm: { default: false } },
	props: {
		modelValue: {
			type: [String, Boolean],
			default: ""
		},
		tag: {
			type: String,
			default: "input"
		}
	},
	emits: ["update:modelValue"],
	watch: { submittingSeedForm(newValue) {
		this.$refs.input.disabled = newValue;
	} }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderVNode)(_push, (0, require__plugin_vue_export_helper.vue_exports.createVNode)((0, require__plugin_vue_export_helper.vue_exports.resolveDynamicComponent)($props.tag), (0, require__plugin_vue_export_helper.vue_exports.mergeProps)({ class: "seed-form-input" }, _ctx.$attrs, {
		value: $props.modelValue,
		onInput: ($event) => _ctx.$emit("update:modelValue", $event.target.value),
		ref: "input"
	}, _attrs), {
		default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
			if (_push) (0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "default", {}, null, _push, _parent, _scopeId);
			else return [(0, require__plugin_vue_export_helper.vue_exports.renderSlot)(_ctx.$slots, "default", {}, void 0, true)];
		}),
		_: 3
	}), _parent);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = (0, require__plugin_vue_export_helper.vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/form/seedFormInput.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var seedFormInput_default = /*#__PURE__*/ require__plugin_vue_export_helper._plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-283d7133"]]);
//#endregion
Object.defineProperty(exports, "seedFormInput_default", {
	enumerable: true,
	get: function() {
		return seedFormInput_default;
	}
});
