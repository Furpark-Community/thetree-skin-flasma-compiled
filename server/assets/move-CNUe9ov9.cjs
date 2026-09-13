const require__plugin_vue_export_helper = require("./_plugin-vue_export-helper-C1TPHJvg.cjs");
const require_seedForm = require("./seedForm-DLpXnK6K.cjs");
const require_seedButton = require("./seedButton-CbrSfLgh.cjs");
const require_seedFormBlock = require("./seedFormBlock-C_WGpUCH.cjs");
//#region src/views/contents/document/move.vue
var _sfc_main = {
	components: {
		IpWarn: require("./ipWarn-BzcaAHcz.cjs").ipWarn_default,
		SeedButton: require_seedButton.seedButton_default,
		SeedFormBlock: require_seedFormBlock.seedFormBlock_default,
		SeedForm: require_seedForm.seedForm_default
	},
	data() {
		return { log: "" };
	},
	computed: { logLabel() {
		let result = this.$t("views.move.log_label");
		if (this.log) result += ` (${this.log.length}/255)`;
		return result;
	} }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_SeedForm = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("SeedForm");
	const _component_SeedFormBlock = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("SeedFormBlock");
	const _component_IpWarn = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("IpWarn");
	const _component_SeedButton = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("SeedButton");
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedForm, (0, require__plugin_vue_export_helper.vue_exports.mergeProps)({ method: "post" }, _attrs), {
		default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedFormBlock, {
					label: _ctx.$t("views.move.title"),
					id: "titleInput",
					name: "title"
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push(`<input type="text" id="titleInput" name="title" data-v-fe06f907${_scopeId}>`);
						else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("input", {
							type: "text",
							id: "titleInput",
							name: "title"
						})];
					}),
					_: 1
				}, _parent, _scopeId));
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedFormBlock, {
					label: $options.logLabel,
					inputId: "logInput",
					name: "log"
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push(`<input${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttr)("value", $data.log)} type="text" id="logInput" name="log" data-v-fe06f907${_scopeId}>`);
						else return [(0, require__plugin_vue_export_helper.vue_exports.withDirectives)((0, require__plugin_vue_export_helper.vue_exports.createVNode)("input", {
							"onUpdate:modelValue": ($event) => $data.log = $event,
							type: "text",
							id: "logInput",
							name: "log"
						}, null, 8, ["onUpdate:modelValue"]), [[require__plugin_vue_export_helper.vue_exports.vModelText, $data.log]])];
					}),
					_: 1
				}, _parent, _scopeId));
				_push(`<label data-v-fe06f907${_scopeId}><input type="checkbox" name="mode" value="swap" data-v-fe06f907${_scopeId}> ${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.move.swap"))}</label>`);
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_IpWarn, null, null, _parent, _scopeId));
				_push(`<div class="button-block" data-v-fe06f907${_scopeId}>`);
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedButton, { submit: "" }, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.move.submit"))}`);
						else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.move.submit")), 1)];
					}),
					_: 1
				}, _parent, _scopeId));
				_push(`</div>`);
			} else return [
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedFormBlock, {
					label: _ctx.$t("views.move.title"),
					id: "titleInput",
					name: "title"
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("input", {
						type: "text",
						id: "titleInput",
						name: "title"
					})]),
					_: 1
				}, 8, ["label"]),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedFormBlock, {
					label: $options.logLabel,
					inputId: "logInput",
					name: "log"
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.withDirectives)((0, require__plugin_vue_export_helper.vue_exports.createVNode)("input", {
						"onUpdate:modelValue": ($event) => $data.log = $event,
						type: "text",
						id: "logInput",
						name: "log"
					}, null, 8, ["onUpdate:modelValue"]), [[require__plugin_vue_export_helper.vue_exports.vModelText, $data.log]])]),
					_: 1
				}, 8, ["label"]),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("label", null, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("input", {
					type: "checkbox",
					name: "mode",
					value: "swap"
				}), (0, require__plugin_vue_export_helper.vue_exports.createTextVNode)(" " + (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.move.swap")), 1)]),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_IpWarn),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: "button-block" }, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedButton, { submit: "" }, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.move.submit")), 1)]),
					_: 1
				})])
			];
		}),
		_: 1
	}, _parent));
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = (0, require__plugin_vue_export_helper.vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/contents/document/move.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var move_default = /*#__PURE__*/ require__plugin_vue_export_helper._plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-fe06f907"]]);
//#endregion
exports.default = move_default;
