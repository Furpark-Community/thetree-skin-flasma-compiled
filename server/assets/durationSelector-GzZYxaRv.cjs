const require__plugin_vue_export_helper = require("./_plugin-vue_export-helper-C1TPHJvg.cjs");
//#region src/components/durationSelector.vue
var _sfc_main = {
	inject: { submittingSeedForm: { default: false } },
	props: {
		name: String,
		disabled: Boolean,
		value: {
			type: Number,
			default: 0
		},
		unblock: Boolean
	},
	data() {
		return {
			model: this.value,
			select: this.value,
			rawNumber: "",
			rawUnit: "1"
		};
	},
	computed: {
		disable() {
			return this.disabled || this.submittingSeedForm;
		},
		TemplateDuration() {
			return Object.fromEntries([
				0,
				86400,
				259200,
				432e3,
				604800,
				1209600,
				1814400,
				2419200,
				4838400,
				7257600,
				14515200,
				29030400
			].map((a) => [a, this.$t("components.duration_selector.template." + a)]));
		}
	},
	emits: ["change"],
	watch: {
		model(newValue) {
			this.$emit("change", newValue);
		},
		value(newValue) {
			this.model = newValue;
			if (TemplateDuration[newValue] || this.unblock && newValue === "-1") {
				this.select = newValue;
				this.rawNumber = "";
				this.rawUnit = "1";
			} else {
				this.select = "raw";
				this.rawNumber = newValue;
				this.rawUnit = "1";
			}
		},
		select(newValue, oldValue) {
			if (newValue !== oldValue) if (newValue === "raw") this.$nextTick(() => this.$refs.rawNumber.focus());
			else {
				if (oldValue === "raw") {
					this.rawNumber = "";
					this.rawUnit = "1";
				}
				this.model = newValue;
			}
		},
		rawUnit() {
			this.calcRaw();
		},
		rawNumber() {
			this.calcRaw();
		}
	},
	methods: { calcRaw() {
		if (this.select !== "raw") return;
		const num = parseInt(this.rawNumber);
		this.model = isNaN(num) ? "" : this.rawUnit * num;
	} }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	_push(`<span${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttrs)(_attrs)} data-v-ae69b22e><input${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttr)("value", $data.model)} type="hidden"${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttr)("name", $props.name)} data-v-ae69b22e><select${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrIncludeBooleanAttr)($options.disable) ? " disabled" : ""} data-v-ae69b22e>`);
	if ($props.unblock) _push(`<option value="-1" data-v-ae69b22e${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrIncludeBooleanAttr)(Array.isArray($data.select) ? (0, require__plugin_vue_export_helper.server_renderer_exports.ssrLooseContain)($data.select, "-1") : (0, require__plugin_vue_export_helper.server_renderer_exports.ssrLooseEqual)($data.select, "-1")) ? " selected" : ""}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("components.duration_selector.unblock"))}</option>`);
	else _push(`<!---->`);
	_push(`<!--[-->`);
	(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderList)($options.TemplateDuration, (label, value) => {
		_push(`<option${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttr)("value", value)} data-v-ae69b22e${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrIncludeBooleanAttr)(Array.isArray($data.select) ? (0, require__plugin_vue_export_helper.server_renderer_exports.ssrLooseContain)($data.select, value) : (0, require__plugin_vue_export_helper.server_renderer_exports.ssrLooseEqual)($data.select, value)) ? " selected" : ""}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(label)}</option>`);
	});
	_push(`<!--]--><option value="raw" data-v-ae69b22e${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrIncludeBooleanAttr)(Array.isArray($data.select) ? (0, require__plugin_vue_export_helper.server_renderer_exports.ssrLooseContain)($data.select, "raw") : (0, require__plugin_vue_export_helper.server_renderer_exports.ssrLooseEqual)($data.select, "raw")) ? " selected" : ""}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("components.duration_selector.raw"))}</option></select>`);
	if ($data.select === "raw") _push(`<!--[--><input${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttr)("value", $data.rawNumber)} class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)({ invalid: $data.rawNumber && isNaN($data.rawNumber) })}"${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrIncludeBooleanAttr)($options.disable) ? " disabled" : ""} data-v-ae69b22e><select${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrIncludeBooleanAttr)($options.disable) ? " disabled" : ""} data-v-ae69b22e><option value="1" data-v-ae69b22e${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrIncludeBooleanAttr)(Array.isArray($data.rawUnit) ? (0, require__plugin_vue_export_helper.server_renderer_exports.ssrLooseContain)($data.rawUnit, "1") : (0, require__plugin_vue_export_helper.server_renderer_exports.ssrLooseEqual)($data.rawUnit, "1")) ? " selected" : ""}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("duration.seconds"))}</option><option value="60" data-v-ae69b22e${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrIncludeBooleanAttr)(Array.isArray($data.rawUnit) ? (0, require__plugin_vue_export_helper.server_renderer_exports.ssrLooseContain)($data.rawUnit, "60") : (0, require__plugin_vue_export_helper.server_renderer_exports.ssrLooseEqual)($data.rawUnit, "60")) ? " selected" : ""}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("duration.minutes"))}</option><option value="3600" data-v-ae69b22e${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrIncludeBooleanAttr)(Array.isArray($data.rawUnit) ? (0, require__plugin_vue_export_helper.server_renderer_exports.ssrLooseContain)($data.rawUnit, "3600") : (0, require__plugin_vue_export_helper.server_renderer_exports.ssrLooseEqual)($data.rawUnit, "3600")) ? " selected" : ""}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("duration.hours"))}</option><option value="86400" data-v-ae69b22e${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrIncludeBooleanAttr)(Array.isArray($data.rawUnit) ? (0, require__plugin_vue_export_helper.server_renderer_exports.ssrLooseContain)($data.rawUnit, "86400") : (0, require__plugin_vue_export_helper.server_renderer_exports.ssrLooseEqual)($data.rawUnit, "86400")) ? " selected" : ""}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("duration.days"))}</option><option value="604800" data-v-ae69b22e${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrIncludeBooleanAttr)(Array.isArray($data.rawUnit) ? (0, require__plugin_vue_export_helper.server_renderer_exports.ssrLooseContain)($data.rawUnit, "604800") : (0, require__plugin_vue_export_helper.server_renderer_exports.ssrLooseEqual)($data.rawUnit, "604800")) ? " selected" : ""}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("duration.weeks"))}</option></select><!--]-->`);
	else _push(`<!---->`);
	_push(`</span>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = (0, require__plugin_vue_export_helper.vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/durationSelector.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var durationSelector_default = /*#__PURE__*/ require__plugin_vue_export_helper._plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-ae69b22e"]]);
//#endregion
Object.defineProperty(exports, "durationSelector_default", {
	enumerable: true,
	get: function() {
		return durationSelector_default;
	}
});
