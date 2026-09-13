const require__plugin_vue_export_helper = require("./_plugin-vue_export-helper-C1TPHJvg.cjs");
//#region src/components/form/pinInput.vue
var _sfc_main = {
	components: { InputField: require("./inputField-DBSQICqU.cjs").inputField_default },
	props: {
		name: String,
		length: {
			type: Number,
			default: 6
		}
	},
	data() {
		return { value: "" };
	},
	watch: { value() {
		this.movePinTexts();
	} },
	methods: {
		movePinTexts() {
			const value = this.value;
			for (let i in this.$refs.pinInput) {
				const fillInput = this.$refs.pinInput[i];
				const str = value[i];
				if (!str) break;
				fillInput.$el.value = str;
			}
			this.focus();
		},
		focus() {
			const inputs = this.$refs.pinInput;
			inputs[Math.min(this.value.length, inputs.length - 1)].$el.focus();
		},
		input(e) {
			if (this.value.length >= this.length) {
				this.movePinTexts();
				return e.preventDefault();
			}
			this.value = this.$refs.pinInput.map((a) => a.$el.value).join("") ?? "";
		},
		keydown(e) {
			if (e.key === "Backspace") this.value = this.value.slice(0, this.value.length - 1);
		},
		paste(e) {
			const text = e.clipboardData.getData("text/plain");
			e.preventDefault();
			this.value = text.split("").filter((a) => "0123456789".includes(a)).slice(0, this.length).join("");
			this.movePinTexts();
		}
	}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_InputField = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("InputField");
	_push(`<div${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttrs)(_attrs)} data-v-d980aa13><!--[-->`);
	(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderList)($props.length, (i) => {
		_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_InputField, {
			ref_for: true,
			ref: "pinInput",
			class: "pin-input",
			type: "number",
			inputmode: "numeric",
			pattern: "\\d*",
			autocomplete: "asdf",
			onFocus: $options.focus,
			onInput: $options.input,
			onKeydown: $options.keydown,
			onPaste: $options.paste
		}, null, _parent));
	});
	_push(`<!--]--><input type="hidden"${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttr)("name", $props.name)}${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttr)("value", $data.value)} data-v-d980aa13></div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = (0, require__plugin_vue_export_helper.vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/form/pinInput.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var pinInput_default = /*#__PURE__*/ require__plugin_vue_export_helper._plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-d980aa13"]]);
//#endregion
Object.defineProperty(exports, "pinInput_default", {
	enumerable: true,
	get: function() {
		return pinInput_default;
	}
});
