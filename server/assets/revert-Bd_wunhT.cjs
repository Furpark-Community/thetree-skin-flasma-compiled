const require__plugin_vue_export_helper = require("./_plugin-vue_export-helper-C1TPHJvg.cjs");
const require_seedForm = require("./seedForm-DLpXnK6K.cjs");
const require_seedButton = require("./seedButton-CbrSfLgh.cjs");
const require_seedFormBlock = require("./seedFormBlock-C_WGpUCH.cjs");
const require_wikiContent = require("./wikiContent-DOztl5qm.cjs");
//#region src/views/contents/document/revert.vue
var _sfc_main = { components: {
	SeedButton: require_seedButton.seedButton_default,
	SeedFormBlock: require_seedFormBlock.seedFormBlock_default,
	WikiContent: require_wikiContent.wikiContent_default,
	SeedForm: require_seedForm.seedForm_default
} };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_SeedForm = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("SeedForm");
	const _component_WikiContent = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("WikiContent");
	const _component_SeedFormBlock = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("SeedFormBlock");
	const _component_SeedButton = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("SeedButton");
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedForm, (0, require__plugin_vue_export_helper.vue_exports.mergeProps)({ method: "post" }, _attrs), {
		default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push(`<input type="hidden" name="uuid"${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttr)("value", _ctx.data.uuid)} data-v-88005a82${_scopeId}>`);
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_WikiContent, { content: _ctx.data.contentHtml }, null, _parent, _scopeId));
				_push(`<textarea readonly data-v-88005a82${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.data.content)}</textarea>`);
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedFormBlock, {
					label: _ctx.$t("views.revert.log_label"),
					inputId: "logInput",
					name: "log"
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push(`<input type="text" id="logInput" name="log" data-v-88005a82${_scopeId}>`);
						else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("input", {
							type: "text",
							id: "logInput",
							name: "log"
						})];
					}),
					_: 1
				}, _parent, _scopeId));
				_push(`<div class="button-block" data-v-88005a82${_scopeId}>`);
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedButton, { submit: "" }, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.revert.submit"))}`);
						else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.revert.submit")), 1)];
					}),
					_: 1
				}, _parent, _scopeId));
				_push(`</div>`);
			} else return [
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("input", {
					type: "hidden",
					name: "uuid",
					value: _ctx.data.uuid
				}, null, 8, ["value"]),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_WikiContent, { content: _ctx.data.contentHtml }, null, 8, ["content"]),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("textarea", {
					readonly: "",
					value: _ctx.data.content
				}, null, 8, ["value"]),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedFormBlock, {
					label: _ctx.$t("views.revert.log_label"),
					inputId: "logInput",
					name: "log"
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("input", {
						type: "text",
						id: "logInput",
						name: "log"
					})]),
					_: 1
				}, 8, ["label"]),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: "button-block" }, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedButton, { submit: "" }, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.revert.submit")), 1)]),
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/contents/document/revert.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var revert_default = /*#__PURE__*/ require__plugin_vue_export_helper._plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-88005a82"]]);
//#endregion
exports.default = revert_default;
