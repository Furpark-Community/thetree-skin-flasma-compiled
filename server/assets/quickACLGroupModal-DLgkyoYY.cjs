const require__plugin_vue_export_helper = require("./_plugin-vue_export-helper-C1TPHJvg.cjs");
const require_server = require("../server.cjs");
const require_seedForm = require("./seedForm-DLpXnK6K.cjs");
const require_showError = require("./showError-A8EkGqzL.cjs");
const require_loading = require("./loading-BhmGmpK-.cjs");
const require_durationSelector = require("./durationSelector-GzZYxaRv.cjs");
const require_seedButton = require("./seedButton-CbrSfLgh.cjs");
const require_formErrorAlert = require("./formErrorAlert-l3UJhtgq.cjs");
//#region src/components/quickACLGroupModal.vue
var _sfc_main = {
	mixins: [require_server.common_default],
	components: {
		Modal: require_server.modal_default,
		FormErrorAlert: require_formErrorAlert.formErrorAlert_default,
		SeedButton: require_seedButton.seedButton_default,
		DurationSelector: require_durationSelector.durationSelector_default,
		Loading: require_loading.loading_default,
		ShowError: require_showError.showError_default,
		SeedForm: require_seedForm.seedForm_default
	},
	data() {
		return {
			groups: [],
			mode: "ip",
			ip: "",
			username: "",
			note: ""
		};
	},
	methods: {
		beforeOpen(e) {
			this.loadACLGroups();
			const params = e.ref.params._rawValue;
			this.mode = params.ip ? "ip" : "username";
			this.ip = params.ip;
			this.username = params.username;
			this.note = params.note;
		},
		async loadACLGroups() {
			const res = await this.internalRequest("/aclgroup/groups", { noProgress: true });
			this.groups = Object.values(res);
		},
		afterSubmit() {
			this.$vfm.hideAll();
		}
	}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_Modal = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("Modal");
	const _component_SeedForm = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("SeedForm");
	const _component_FormErrorAlert = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("FormErrorAlert");
	const _component_Loading = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("Loading");
	const _component_ShowError = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("ShowError");
	const _component_DurationSelector = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("DurationSelector");
	const _component_SeedButton = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("SeedButton");
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_Modal, (0, require__plugin_vue_export_helper.vue_exports.mergeProps)({ onBeforeOpen: $options.beforeOpen }, _attrs), {
		default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((props, _push, _parent, _scopeId) => {
			if (_push) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedForm, {
				afterSubmit: $options.afterSubmit,
				method: "post",
				action: "/aclgroup"
			}, {
				default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<h4 data-v-af0b2d7b${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("components.quick_acl_group_modal.title"))}</h4>`);
						_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_FormErrorAlert, null, null, _parent, _scopeId));
						_push(`<div data-v-af0b2d7b${_scopeId}><p data-v-af0b2d7b${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("components.quick_acl_group_modal.group"))}</p>`);
						if ($data.groups.length) {
							_push(`<select name="group" data-v-af0b2d7b${_scopeId}><!--[-->`);
							(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderList)($data.groups, (item) => {
								_push(`<option${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttr)("value", item.uuid)} data-v-af0b2d7b${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(item.name)}</option>`);
							});
							_push(`<!--]--></select>`);
						} else _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_Loading, null, null, _parent, _scopeId));
						_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_ShowError, { tag: "group" }, null, _parent, _scopeId));
						_push(`</div><div data-v-af0b2d7b${_scopeId}><p data-v-af0b2d7b${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("components.quick_acl_group_modal.mode"))}</p><select name="mode" data-v-af0b2d7b${_scopeId}><option value="ip" data-v-af0b2d7b${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrIncludeBooleanAttr)(Array.isArray($data.mode) ? (0, require__plugin_vue_export_helper.server_renderer_exports.ssrLooseContain)($data.mode, "ip") : (0, require__plugin_vue_export_helper.server_renderer_exports.ssrLooseEqual)($data.mode, "ip")) ? " selected" : ""}${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.aclgroup.mode.ip"))}</option><option value="username" data-v-af0b2d7b${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrIncludeBooleanAttr)(Array.isArray($data.mode) ? (0, require__plugin_vue_export_helper.server_renderer_exports.ssrLooseContain)($data.mode, "username") : (0, require__plugin_vue_export_helper.server_renderer_exports.ssrLooseEqual)($data.mode, "username")) ? " selected" : ""}${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.aclgroup.mode.username"))}</option></select>`);
						_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_ShowError, { tag: "mode" }, null, _parent, _scopeId));
						if ($data.mode === "ip") _push(`<input type="text" name="ip"${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttr)("value", $data.ip)} data-v-af0b2d7b${_scopeId}>`);
						else _push(`<input type="text" name="username"${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttr)("value", $data.username)} data-v-af0b2d7b${_scopeId}>`);
						_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_ShowError, { tag: $data.mode }, null, _parent, _scopeId));
						_push(`</div><div data-v-af0b2d7b${_scopeId}><p data-v-af0b2d7b${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("components.quick_acl_group_modal.note"))}</p><input type="text" name="note"${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttr)("value", $data.note)} data-v-af0b2d7b${_scopeId}>`);
						_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_ShowError, { tag: "note" }, null, _parent, _scopeId));
						_push(`</div><div data-v-af0b2d7b${_scopeId}><p data-v-af0b2d7b${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("components.quick_acl_group_modal.duration"))}</p>`);
						_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_DurationSelector, { name: "duration" }, null, _parent, _scopeId));
						_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_ShowError, { tag: "duration" }, null, _parent, _scopeId));
						_push(`</div><div class="button-block" data-v-af0b2d7b${_scopeId}>`);
						_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedButton, {
							type: "submit",
							large: "",
							danger: ""
						}, {
							default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
								if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("components.quick_acl_group_modal.add"))}`);
								else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("components.quick_acl_group_modal.add")), 1)];
							}),
							_: 2
						}, _parent, _scopeId));
						_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedButton, {
							type: "button",
							large: "",
							onClick: props.close
						}, {
							default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
								if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("components.quick_acl_group_modal.cancel"))}`);
								else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("components.quick_acl_group_modal.cancel")), 1)];
							}),
							_: 2
						}, _parent, _scopeId));
						_push(`</div>`);
					} else return [
						(0, require__plugin_vue_export_helper.vue_exports.createVNode)("h4", null, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("components.quick_acl_group_modal.title")), 1),
						(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_FormErrorAlert),
						(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", null, [
							(0, require__plugin_vue_export_helper.vue_exports.createVNode)("p", null, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("components.quick_acl_group_modal.group")), 1),
							$data.groups.length ? ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)("select", {
								key: 0,
								name: "group"
							}, [((0, require__plugin_vue_export_helper.vue_exports.openBlock)(true), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(require__plugin_vue_export_helper.vue_exports.Fragment, null, (0, require__plugin_vue_export_helper.vue_exports.renderList)($data.groups, (item) => {
								return (0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)("option", { value: item.uuid }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(item.name), 9, ["value"]);
							}), 256))])) : ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(_component_Loading, { key: 1 })),
							(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_ShowError, { tag: "group" })
						]),
						(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", null, [
							(0, require__plugin_vue_export_helper.vue_exports.createVNode)("p", null, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("components.quick_acl_group_modal.mode")), 1),
							(0, require__plugin_vue_export_helper.vue_exports.withDirectives)((0, require__plugin_vue_export_helper.vue_exports.createVNode)("select", {
								name: "mode",
								"onUpdate:modelValue": ($event) => $data.mode = $event
							}, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("option", { value: "ip" }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.aclgroup.mode.ip")), 1), (0, require__plugin_vue_export_helper.vue_exports.createVNode)("option", { value: "username" }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.aclgroup.mode.username")), 1)], 8, ["onUpdate:modelValue"]), [[require__plugin_vue_export_helper.vue_exports.vModelSelect, $data.mode]]),
							(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_ShowError, { tag: "mode" }),
							$data.mode === "ip" ? (0, require__plugin_vue_export_helper.vue_exports.withDirectives)(((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)("input", {
								key: 0,
								type: "text",
								name: "ip",
								"onUpdate:modelValue": ($event) => $data.ip = $event
							}, null, 8, ["onUpdate:modelValue"])), [[require__plugin_vue_export_helper.vue_exports.vModelText, $data.ip]]) : (0, require__plugin_vue_export_helper.vue_exports.withDirectives)(((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)("input", {
								key: 1,
								type: "text",
								name: "username",
								"onUpdate:modelValue": ($event) => $data.username = $event
							}, null, 8, ["onUpdate:modelValue"])), [[require__plugin_vue_export_helper.vue_exports.vModelText, $data.username]]),
							(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_ShowError, { tag: $data.mode }, null, 8, ["tag"])
						]),
						(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", null, [
							(0, require__plugin_vue_export_helper.vue_exports.createVNode)("p", null, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("components.quick_acl_group_modal.note")), 1),
							(0, require__plugin_vue_export_helper.vue_exports.withDirectives)((0, require__plugin_vue_export_helper.vue_exports.createVNode)("input", {
								type: "text",
								name: "note",
								"onUpdate:modelValue": ($event) => $data.note = $event
							}, null, 8, ["onUpdate:modelValue"]), [[require__plugin_vue_export_helper.vue_exports.vModelText, $data.note]]),
							(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_ShowError, { tag: "note" })
						]),
						(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", null, [
							(0, require__plugin_vue_export_helper.vue_exports.createVNode)("p", null, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("components.quick_acl_group_modal.duration")), 1),
							(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_DurationSelector, { name: "duration" }),
							(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_ShowError, { tag: "duration" })
						]),
						(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: "button-block" }, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedButton, {
							type: "submit",
							large: "",
							danger: ""
						}, {
							default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("components.quick_acl_group_modal.add")), 1)]),
							_: 1
						}), (0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedButton, {
							type: "button",
							large: "",
							onClick: props.close
						}, {
							default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("components.quick_acl_group_modal.cancel")), 1)]),
							_: 1
						}, 8, ["onClick"])])
					];
				}),
				_: 2
			}, _parent, _scopeId));
			else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedForm, {
				afterSubmit: $options.afterSubmit,
				method: "post",
				action: "/aclgroup"
			}, {
				default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [
					(0, require__plugin_vue_export_helper.vue_exports.createVNode)("h4", null, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("components.quick_acl_group_modal.title")), 1),
					(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_FormErrorAlert),
					(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", null, [
						(0, require__plugin_vue_export_helper.vue_exports.createVNode)("p", null, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("components.quick_acl_group_modal.group")), 1),
						$data.groups.length ? ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)("select", {
							key: 0,
							name: "group"
						}, [((0, require__plugin_vue_export_helper.vue_exports.openBlock)(true), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(require__plugin_vue_export_helper.vue_exports.Fragment, null, (0, require__plugin_vue_export_helper.vue_exports.renderList)($data.groups, (item) => {
							return (0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)("option", { value: item.uuid }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(item.name), 9, ["value"]);
						}), 256))])) : ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(_component_Loading, { key: 1 })),
						(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_ShowError, { tag: "group" })
					]),
					(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", null, [
						(0, require__plugin_vue_export_helper.vue_exports.createVNode)("p", null, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("components.quick_acl_group_modal.mode")), 1),
						(0, require__plugin_vue_export_helper.vue_exports.withDirectives)((0, require__plugin_vue_export_helper.vue_exports.createVNode)("select", {
							name: "mode",
							"onUpdate:modelValue": ($event) => $data.mode = $event
						}, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("option", { value: "ip" }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.aclgroup.mode.ip")), 1), (0, require__plugin_vue_export_helper.vue_exports.createVNode)("option", { value: "username" }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.aclgroup.mode.username")), 1)], 8, ["onUpdate:modelValue"]), [[require__plugin_vue_export_helper.vue_exports.vModelSelect, $data.mode]]),
						(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_ShowError, { tag: "mode" }),
						$data.mode === "ip" ? (0, require__plugin_vue_export_helper.vue_exports.withDirectives)(((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)("input", {
							key: 0,
							type: "text",
							name: "ip",
							"onUpdate:modelValue": ($event) => $data.ip = $event
						}, null, 8, ["onUpdate:modelValue"])), [[require__plugin_vue_export_helper.vue_exports.vModelText, $data.ip]]) : (0, require__plugin_vue_export_helper.vue_exports.withDirectives)(((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)("input", {
							key: 1,
							type: "text",
							name: "username",
							"onUpdate:modelValue": ($event) => $data.username = $event
						}, null, 8, ["onUpdate:modelValue"])), [[require__plugin_vue_export_helper.vue_exports.vModelText, $data.username]]),
						(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_ShowError, { tag: $data.mode }, null, 8, ["tag"])
					]),
					(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", null, [
						(0, require__plugin_vue_export_helper.vue_exports.createVNode)("p", null, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("components.quick_acl_group_modal.note")), 1),
						(0, require__plugin_vue_export_helper.vue_exports.withDirectives)((0, require__plugin_vue_export_helper.vue_exports.createVNode)("input", {
							type: "text",
							name: "note",
							"onUpdate:modelValue": ($event) => $data.note = $event
						}, null, 8, ["onUpdate:modelValue"]), [[require__plugin_vue_export_helper.vue_exports.vModelText, $data.note]]),
						(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_ShowError, { tag: "note" })
					]),
					(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", null, [
						(0, require__plugin_vue_export_helper.vue_exports.createVNode)("p", null, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("components.quick_acl_group_modal.duration")), 1),
						(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_DurationSelector, { name: "duration" }),
						(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_ShowError, { tag: "duration" })
					]),
					(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: "button-block" }, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedButton, {
						type: "submit",
						large: "",
						danger: ""
					}, {
						default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("components.quick_acl_group_modal.add")), 1)]),
						_: 1
					}), (0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedButton, {
						type: "button",
						large: "",
						onClick: props.close
					}, {
						default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("components.quick_acl_group_modal.cancel")), 1)]),
						_: 1
					}, 8, ["onClick"])])
				]),
				_: 2
			}, 1032, ["afterSubmit"])];
		}),
		_: 1
	}, _parent));
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = (0, require__plugin_vue_export_helper.vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/quickACLGroupModal.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var quickACLGroupModal_default = /*#__PURE__*/ require__plugin_vue_export_helper._plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-af0b2d7b"]]);
//#endregion
exports.default = quickACLGroupModal_default;
