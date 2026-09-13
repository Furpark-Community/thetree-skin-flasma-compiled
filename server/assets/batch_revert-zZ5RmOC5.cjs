const require__plugin_vue_export_helper = require("./_plugin-vue_export-helper-C1TPHJvg.cjs");
const require_seedForm = require("./seedForm-DLpXnK6K.cjs");
const require_seedButton = require("./seedButton-CbrSfLgh.cjs");
const require_seedFormBlock = require("./seedFormBlock-C_WGpUCH.cjs");
const require_seedFormInput = require("./seedFormInput-BLNL06fg.cjs");
//#region src/views/contents/admin/batch_revert.vue
var _sfc_main = { components: {
	SeedButton: require_seedButton.seedButton_default,
	SeedFormInput: require_seedFormInput.seedFormInput_default,
	SeedFormBlock: require_seedFormBlock.seedFormBlock_default,
	SeedForm: require_seedForm.seedForm_default
} };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_SeedForm = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("SeedForm");
	const _component_SeedFormBlock = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("SeedFormBlock");
	const _component_SeedFormInput = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("SeedFormInput");
	const _component_SeedButton = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("SeedButton");
	_push(`<!--[-->`);
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedForm, { method: "post" }, {
		default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedFormBlock, {
					label: "UUID",
					inputId: "uuidInput",
					name: "uuid"
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedFormInput, {
							type: "text",
							id: "uuidInput",
							name: "uuid"
						}, null, _parent, _scopeId));
						else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedFormInput, {
							type: "text",
							id: "uuidInput",
							name: "uuid"
						})];
					}),
					_: 1
				}, _parent, _scopeId));
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedFormBlock, {
					label: "Duration",
					inputId: "durationInput",
					name: "duration"
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedFormInput, {
							type: "text",
							id: "durationInput",
							name: "duration",
							value: "24h"
						}, null, _parent, _scopeId));
						else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedFormInput, {
							type: "text",
							id: "durationInput",
							name: "duration",
							value: "24h"
						})];
					}),
					_: 1
				}, _parent, _scopeId));
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedFormBlock, {
					label: "Reason",
					inputId: "reasonInput",
					name: "reason"
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedFormInput, {
							type: "text",
							id: "reasonInput",
							name: "reason"
						}, null, _parent, _scopeId));
						else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedFormInput, {
							type: "text",
							id: "reasonInput",
							name: "reason"
						})];
					}),
					_: 1
				}, _parent, _scopeId));
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedFormBlock, { name: "closeEditRequests" }, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push(`<input type="checkbox" id="close_editrequestsInput" name="closeEditRequests" value="Y" checked data-v-8fc6a78b${_scopeId}><label for="close_editrequestsInput" data-v-8fc6a78b${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.batch_revert.close_edit_requests"))}</label>`);
						else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("input", {
							type: "checkbox",
							id: "close_editrequestsInput",
							name: "closeEditRequests",
							value: "Y",
							checked: ""
						}), (0, require__plugin_vue_export_helper.vue_exports.createVNode)("label", { for: "close_editrequestsInput" }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.batch_revert.close_edit_requests")), 1)];
					}),
					_: 1
				}, _parent, _scopeId));
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedFormBlock, { name: "hideThreadComments" }, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push(`<input type="checkbox" id="hide_threadInput" name="hideThreadComments" value="Y" checked data-v-8fc6a78b${_scopeId}><label for="hide_threadInput" data-v-8fc6a78b${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.batch_revert.hide_thread_comments"))}</label>`);
						else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("input", {
							type: "checkbox",
							id: "hide_threadInput",
							name: "hideThreadComments",
							value: "Y",
							checked: ""
						}), (0, require__plugin_vue_export_helper.vue_exports.createVNode)("label", { for: "hide_threadInput" }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.batch_revert.hide_thread_comments")), 1)];
					}),
					_: 1
				}, _parent, _scopeId));
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedFormBlock, { name: "revertContributions" }, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push(`<input type="checkbox" id="revert_documentInput" name="revertContributions" value="Y" checked data-v-8fc6a78b${_scopeId}><label for="revert_documentInput" data-v-8fc6a78b${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.batch_revert.revert_contributions"))}</label>`);
						else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("input", {
							type: "checkbox",
							id: "revert_documentInput",
							name: "revertContributions",
							value: "Y",
							checked: ""
						}), (0, require__plugin_vue_export_helper.vue_exports.createVNode)("label", { for: "revert_documentInput" }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.batch_revert.revert_contributions")), 1)];
					}),
					_: 1
				}, _parent, _scopeId));
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedFormBlock, { name: "revertEditRequests" }, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push(`<input type="checkbox" id="revert_editrequestInput" name="revertEditRequests" value="Y" checked data-v-8fc6a78b${_scopeId}><label for="revert_editrequestInput" data-v-8fc6a78b${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.batch_revert.revert_edit_requests"))}</label>`);
						else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("input", {
							type: "checkbox",
							id: "revert_editrequestInput",
							name: "revertEditRequests",
							value: "Y",
							checked: ""
						}), (0, require__plugin_vue_export_helper.vue_exports.createVNode)("label", { for: "revert_editrequestInput" }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.batch_revert.revert_edit_requests")), 1)];
					}),
					_: 1
				}, _parent, _scopeId));
				if (_ctx.data.hidelogPerm) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedFormBlock, { name: "revertContributions" }, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push(`<input type="checkbox" id="hidelogInput" name="hidelog" value="Y" data-v-8fc6a78b${_scopeId}><label for="hidelogInput" data-v-8fc6a78b${_scopeId}>hidelog</label>`);
						else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("input", {
							type: "checkbox",
							id: "hidelogInput",
							name: "hidelog",
							value: "Y"
						}), (0, require__plugin_vue_export_helper.vue_exports.createVNode)("label", { for: "hidelogInput" }, "hidelog")];
					}),
					_: 1
				}, _parent, _scopeId));
				else _push(`<!---->`);
				_push(`<div class="button-block" data-v-8fc6a78b${_scopeId}>`);
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedButton, { submit: "" }, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.batch_revert.submit"))}`);
						else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.batch_revert.submit")), 1)];
					}),
					_: 1
				}, _parent, _scopeId));
				_push(`</div>`);
			} else return [
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedFormBlock, {
					label: "UUID",
					inputId: "uuidInput",
					name: "uuid"
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedFormInput, {
						type: "text",
						id: "uuidInput",
						name: "uuid"
					})]),
					_: 1
				}),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedFormBlock, {
					label: "Duration",
					inputId: "durationInput",
					name: "duration"
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedFormInput, {
						type: "text",
						id: "durationInput",
						name: "duration",
						value: "24h"
					})]),
					_: 1
				}),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedFormBlock, {
					label: "Reason",
					inputId: "reasonInput",
					name: "reason"
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedFormInput, {
						type: "text",
						id: "reasonInput",
						name: "reason"
					})]),
					_: 1
				}),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedFormBlock, { name: "closeEditRequests" }, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("input", {
						type: "checkbox",
						id: "close_editrequestsInput",
						name: "closeEditRequests",
						value: "Y",
						checked: ""
					}), (0, require__plugin_vue_export_helper.vue_exports.createVNode)("label", { for: "close_editrequestsInput" }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.batch_revert.close_edit_requests")), 1)]),
					_: 1
				}),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedFormBlock, { name: "hideThreadComments" }, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("input", {
						type: "checkbox",
						id: "hide_threadInput",
						name: "hideThreadComments",
						value: "Y",
						checked: ""
					}), (0, require__plugin_vue_export_helper.vue_exports.createVNode)("label", { for: "hide_threadInput" }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.batch_revert.hide_thread_comments")), 1)]),
					_: 1
				}),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedFormBlock, { name: "revertContributions" }, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("input", {
						type: "checkbox",
						id: "revert_documentInput",
						name: "revertContributions",
						value: "Y",
						checked: ""
					}), (0, require__plugin_vue_export_helper.vue_exports.createVNode)("label", { for: "revert_documentInput" }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.batch_revert.revert_contributions")), 1)]),
					_: 1
				}),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedFormBlock, { name: "revertEditRequests" }, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("input", {
						type: "checkbox",
						id: "revert_editrequestInput",
						name: "revertEditRequests",
						value: "Y",
						checked: ""
					}), (0, require__plugin_vue_export_helper.vue_exports.createVNode)("label", { for: "revert_editrequestInput" }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.batch_revert.revert_edit_requests")), 1)]),
					_: 1
				}),
				_ctx.data.hidelogPerm ? ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(_component_SeedFormBlock, {
					key: 0,
					name: "revertContributions"
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("input", {
						type: "checkbox",
						id: "hidelogInput",
						name: "hidelog",
						value: "Y"
					}), (0, require__plugin_vue_export_helper.vue_exports.createVNode)("label", { for: "hidelogInput" }, "hidelog")]),
					_: 1
				})) : (0, require__plugin_vue_export_helper.vue_exports.createCommentVNode)("", true),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: "button-block" }, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedButton, { submit: "" }, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.batch_revert.submit")), 1)]),
					_: 1
				})])
			];
		}),
		_: 1
	}, _parent));
	if (_ctx.data.result) {
		_push(`<div data-v-8fc6a78b><p data-v-8fc6a78b>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.batch_revert.result"))}</p><ul data-v-8fc6a78b><!--[-->`);
		(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderList)(_ctx.data.result.resultText, (item) => {
			_push(`<li data-v-8fc6a78b>${item ?? ""}</li>`);
		});
		_push(`<!--]--></ul>`);
		if (_ctx.data.result.failResultText.length) {
			_push(`<!--[--><p data-v-8fc6a78b>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.batch_revert.failed_list"))}</p><ul style="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderStyle)({ "color": "red" })}" data-v-8fc6a78b><!--[-->`);
			(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderList)(_ctx.data.result.failResultText, (item) => {
				_push(`<li data-v-8fc6a78b>${item ?? ""}</li>`);
			});
			_push(`<!--]--></ul><!--]-->`);
		} else _push(`<!---->`);
		_push(`<div data-v-8fc6a78b>`);
		_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedButton, { onClick: ($event) => _ctx.data.result = null }, {
			default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
				if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.batch_revert.ok"))}`);
				else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.batch_revert.ok")), 1)];
			}),
			_: 1
		}, _parent));
		_push(`</div></div>`);
	} else _push(`<!---->`);
	_push(`<!--]-->`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = (0, require__plugin_vue_export_helper.vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/contents/admin/batch_revert.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var batch_revert_default = /*#__PURE__*/ require__plugin_vue_export_helper._plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-8fc6a78b"]]);
//#endregion
exports.default = batch_revert_default;
