const require__plugin_vue_export_helper = require("./_plugin-vue_export-helper-C1TPHJvg.cjs");
const require_seedForm = require("./seedForm-DLpXnK6K.cjs");
const require_seedButton = require("./seedButton-CbrSfLgh.cjs");
const require_formErrorAlert = require("./formErrorAlert-l3UJhtgq.cjs");
const require_seedFormBlock = require("./seedFormBlock-C_WGpUCH.cjs");
const require_seedFormInput = require("./seedFormInput-BLNL06fg.cjs");
//#region src/views/contents/admin/grant.vue
var _sfc_main = { components: {
	FormErrorAlert: require_formErrorAlert.formErrorAlert_default,
	SeedButton: require_seedButton.seedButton_default,
	SeedFormInput: require_seedFormInput.seedFormInput_default,
	SeedFormBlock: require_seedFormBlock.seedFormBlock_default,
	SeedForm: require_seedForm.seedForm_default
} };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_SeedForm = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("SeedForm");
	const _component_FormErrorAlert = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("FormErrorAlert");
	const _component_SeedFormBlock = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("SeedFormBlock");
	const _component_SeedFormInput = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("SeedFormInput");
	const _component_SeedButton = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("SeedButton");
	_push(`<!--[-->`);
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedForm, null, {
		default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_FormErrorAlert, null, null, _parent, _scopeId));
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedFormBlock, { name: "username" }, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) {
							_push(` Username `);
							_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedFormInput, {
								name: "username",
								required: ""
							}, null, _parent, _scopeId));
						} else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)(" Username "), (0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedFormInput, {
							name: "username",
							required: ""
						})];
					}),
					_: 1
				}, _parent, _scopeId));
				_push(`<div class="button-block" data-v-1d9bc29c${_scopeId}>`);
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedButton, { submit: "" }, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.grant.submit"))}`);
						else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.grant.submit")), 1)];
					}),
					_: 1
				}, _parent, _scopeId));
				_push(`</div>`);
			} else return [
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_FormErrorAlert),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedFormBlock, { name: "username" }, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)(" Username "), (0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedFormInput, {
						name: "username",
						required: ""
					})]),
					_: 1
				}),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: "button-block" }, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedButton, { submit: "" }, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.grant.submit")), 1)]),
					_: 1
				})])
			];
		}),
		_: 1
	}, _parent));
	if (_ctx.data.targetUser) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedForm, { method: "post" }, {
		default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push(`<input type="hidden" name="uuid"${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttr)("value", _ctx.data.targetUser.uuid)} data-v-1d9bc29c${_scopeId}><h3 data-v-1d9bc29c${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.data.targetUser.name)}</h3><!--[-->`);
				(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderList)(_ctx.data.allPermissions, (item) => {
					_push(`<p data-v-1d9bc29c${_scopeId}><label${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttr)("for", item + "Input")} class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)({ "disabled-perm": !_ctx.data.grantablePermissions.includes(item) })}" data-v-1d9bc29c${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(item)}</label>  <input type="checkbox"${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttr)("id", item + "Input")}${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttr)("name", item)} value="Y"${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrIncludeBooleanAttr)(_ctx.data.targetUser.permissions.includes(item)) ? " checked" : ""}${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrIncludeBooleanAttr)(!_ctx.data.grantablePermissions.includes(item)) ? " disabled" : ""} data-v-1d9bc29c${_scopeId}></p>`);
				});
				_push(`<!--]--><div class="button-block" data-v-1d9bc29c${_scopeId}>`);
				if (_ctx.data.hidelogPerm) _push(`<label data-v-1d9bc29c${_scopeId}> hidelog: <input type="checkbox" name="hidelog" value="Y" data-v-1d9bc29c${_scopeId}></label>`);
				else _push(`<!---->`);
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedButton, { submit: "" }, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.grant.submit"))}`);
						else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.grant.submit")), 1)];
					}),
					_: 1
				}, _parent, _scopeId));
				_push(`</div>`);
			} else return [
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("input", {
					type: "hidden",
					name: "uuid",
					value: _ctx.data.targetUser.uuid
				}, null, 8, ["value"]),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("h3", null, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.data.targetUser.name), 1),
				((0, require__plugin_vue_export_helper.vue_exports.openBlock)(true), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(require__plugin_vue_export_helper.vue_exports.Fragment, null, (0, require__plugin_vue_export_helper.vue_exports.renderList)(_ctx.data.allPermissions, (item) => {
					return (0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)("p", null, [
						(0, require__plugin_vue_export_helper.vue_exports.createVNode)("label", {
							for: item + "Input",
							class: { "disabled-perm": !_ctx.data.grantablePermissions.includes(item) }
						}, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(item), 11, ["for"]),
						(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)(" \xA0"),
						(0, require__plugin_vue_export_helper.vue_exports.createVNode)("input", {
							type: "checkbox",
							id: item + "Input",
							name: item,
							value: "Y",
							checked: _ctx.data.targetUser.permissions.includes(item),
							disabled: !_ctx.data.grantablePermissions.includes(item)
						}, null, 8, [
							"id",
							"name",
							"checked",
							"disabled"
						])
					]);
				}), 256)),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: "button-block" }, [_ctx.data.hidelogPerm ? ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)("label", { key: 0 }, [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)(" hidelog: "), (0, require__plugin_vue_export_helper.vue_exports.createVNode)("input", {
					type: "checkbox",
					name: "hidelog",
					value: "Y"
				})])) : (0, require__plugin_vue_export_helper.vue_exports.createCommentVNode)("", true), (0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedButton, { submit: "" }, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.grant.submit")), 1)]),
					_: 1
				})])
			];
		}),
		_: 1
	}, _parent));
	else _push(`<!---->`);
	_push(`<!--]-->`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = (0, require__plugin_vue_export_helper.vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/contents/admin/grant.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var grant_default = /*#__PURE__*/ require__plugin_vue_export_helper._plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-1d9bc29c"]]);
//#endregion
exports.default = grant_default;
