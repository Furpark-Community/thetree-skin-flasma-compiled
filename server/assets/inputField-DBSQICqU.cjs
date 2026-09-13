const require__plugin_vue_export_helper = require("./_plugin-vue_export-helper-C1TPHJvg.cjs");
//#region src/components/form/inputField.vue
var _sfc_main = {
	inject: { submittingSeedForm: { default: false } },
	data() {
		return { disable: false };
	},
	props: {
		modelValue: String,
		hasError: Boolean,
		multiline: Boolean,
		whenInput: Function,
		whenKeyDown: Function,
		whenPaste: Function,
		name: String,
		center: Boolean,
		readonly: Boolean,
		disabled: Boolean
	},
	emits: ["update:modelValue"],
	mounted() {
		this.updateError();
		if (this.disabled) this.disable = true;
	},
	watch: {
		submittingSeedForm(newValue) {
			if (this.disabled) return;
			this.disable = newValue;
		},
		error() {
			this.updateError();
		},
		disable(newValue) {
			if (newValue) this.$refs.input.classList.add("disabled");
			else this.$refs.input.classList.remove("disabled");
			this.$refs.input.disabled = newValue;
		},
		readonly(newValue) {
			this.$refs.input.readOnly = newValue;
		}
	},
	computed: {
		fieldError() {
			return this.name && this.$store.state.viewData.fieldErrors?.[this.name];
		},
		error() {
			return !!(this.hasError || this.fieldError || this.$store.state.viewData.errorAlert);
		}
	},
	methods: {
		onInput(e) {
			this.whenInput?.(e);
			this.$emit("update:modelValue", e.target.value);
		},
		focus() {
			this.$refs.input.focus();
		},
		updateError() {
			const classList = this.$refs.input.classList;
			if (this.error) classList.add("error");
			else classList.remove("error");
		}
	}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderVNode)(_push, (0, require__plugin_vue_export_helper.vue_exports.createVNode)((0, require__plugin_vue_export_helper.vue_exports.resolveDynamicComponent)($props.multiline ? "textarea" : "input"), (0, require__plugin_vue_export_helper.vue_exports.mergeProps)({
		class: ["input", {
			multiline: $props.multiline,
			center: $props.center,
			readonly: $props.readonly
		}],
		value: $props.modelValue,
		onInput: $options.onInput,
		onKeydown: $props.whenKeyDown,
		onPaste: $props.whenPaste,
		name: $props.name
	}, _ctx.$attrs, { ref: "input" }, _attrs), null), _parent);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = (0, require__plugin_vue_export_helper.vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/form/inputField.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var inputField_default = /*#__PURE__*/ require__plugin_vue_export_helper._plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-332fe17d"]]);
//#endregion
Object.defineProperty(exports, "inputField_default", {
	enumerable: true,
	get: function() {
		return inputField_default;
	}
});
