const require__plugin_vue_export_helper = require("./_plugin-vue_export-helper-C1TPHJvg.cjs");
const require_server = require("../server.cjs");
const require_seedForm = require("./seedForm-DLpXnK6K.cjs");
const require_seedButton = require("./seedButton-CbrSfLgh.cjs");
const require_seedFormBlock = require("./seedFormBlock-C_WGpUCH.cjs");
const require_ipWarn = require("./ipWarn-BzcaAHcz.cjs");
//#region src/views/contents/document/delete.vue
var _sfc_main = {
	mixins: [require_server.common_default],
	components: {
		IpWarn: require_ipWarn.ipWarn_default,
		SeedButton: require_seedButton.seedButton_default,
		NuxtLink: require_server.nuxtLink_default,
		SeedFormBlock: require_seedFormBlock.seedFormBlock_default,
		SeedForm: require_seedForm.seedForm_default
	},
	data() {
		return { log: "" };
	},
	computed: { logLabel() {
		let result = this.$t("views.delete.log_label");
		if (this.log) result += ` (${this.log.length}/255)`;
		return result;
	} },
	methods: { beforeSubmit() {
		if (!this.$refs.agreeCheckbox.checked) {
			alert(this.$t("views.delete.check_agree"));
			return false;
		}
	} }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_SeedForm = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("SeedForm");
	const _component_SeedFormBlock = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("SeedFormBlock");
	const _component_i18next = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("i18next");
	const _component_NuxtLink = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("NuxtLink");
	const _component_IpWarn = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("IpWarn");
	const _component_SeedButton = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("SeedButton");
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedForm, (0, require__plugin_vue_export_helper.vue_exports.mergeProps)({
		method: "post",
		beforeSubmit: $options.beforeSubmit
	}, _attrs), {
		default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedFormBlock, {
					label: $options.logLabel,
					inputId: "logInput",
					name: "log"
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push(`<input${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttr)("value", $data.log)} type="text" id="logInput" name="log" data-v-9b2313ba${_scopeId}>`);
						else return [(0, require__plugin_vue_export_helper.vue_exports.withDirectives)((0, require__plugin_vue_export_helper.vue_exports.createVNode)("input", {
							"onUpdate:modelValue": ($event) => $data.log = $event,
							type: "text",
							id: "logInput",
							name: "log"
						}, null, 8, ["onUpdate:modelValue"]), [[require__plugin_vue_export_helper.vue_exports.vModelText, $data.log]])];
					}),
					_: 1
				}, _parent, _scopeId));
				_push(`<label data-v-9b2313ba${_scopeId}><input type="checkbox" name="agree" value="Y" data-v-9b2313ba${_scopeId}> ${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.delete.agree"))}</label><p data-v-9b2313ba${_scopeId}><b data-v-9b2313ba${_scopeId}>[${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.delete.notify"))}]</b> `);
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_i18next, { translation: _ctx.$t("views.delete.notify_content") }, {
					moveLink: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_NuxtLink, { to: _ctx.doc_action_link(_ctx.data.document, "move") }, {
							default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
								if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.delete.move_link_text"))}`);
								else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.delete.move_link_text")), 1)];
							}),
							_: 1
						}, _parent, _scopeId));
						else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_NuxtLink, { to: _ctx.doc_action_link(_ctx.data.document, "move") }, {
							default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.delete.move_link_text")), 1)]),
							_: 1
						}, 8, ["to"])];
					}),
					_: 1
				}, _parent, _scopeId));
				_push(`<span data-v-9b2313ba${_scopeId}>${(_ctx.config["wiki.delete_document_text"] || "") ?? ""}</span></p>`);
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_IpWarn, null, null, _parent, _scopeId));
				_push(`<div class="button-block" data-v-9b2313ba${_scopeId}>`);
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedButton, { danger: "" }, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.delete.submit"))}`);
						else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.delete.submit")), 1)];
					}),
					_: 1
				}, _parent, _scopeId));
				_push(`</div>`);
			} else return [
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
					ref: "agreeCheckbox",
					type: "checkbox",
					name: "agree",
					value: "Y"
				}, null, 512), (0, require__plugin_vue_export_helper.vue_exports.createTextVNode)(" " + (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.delete.agree")), 1)]),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("p", null, [
					(0, require__plugin_vue_export_helper.vue_exports.createVNode)("b", null, "[" + (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.delete.notify")) + "]", 1),
					(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)("\xA0"),
					(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_i18next, { translation: _ctx.$t("views.delete.notify_content") }, {
						moveLink: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_NuxtLink, { to: _ctx.doc_action_link(_ctx.data.document, "move") }, {
							default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.delete.move_link_text")), 1)]),
							_: 1
						}, 8, ["to"])]),
						_: 1
					}, 8, ["translation"]),
					(0, require__plugin_vue_export_helper.vue_exports.createVNode)("span", { innerHTML: _ctx.config["wiki.delete_document_text"] || "" }, null, 8, ["innerHTML"])
				]),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_IpWarn),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: "button-block" }, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedButton, { danger: "" }, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.delete.submit")), 1)]),
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/contents/document/delete.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var delete_default = /*#__PURE__*/ require__plugin_vue_export_helper._plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-9b2313ba"]]);
//#endregion
exports.default = delete_default;
