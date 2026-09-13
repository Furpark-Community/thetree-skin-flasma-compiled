const require__plugin_vue_export_helper = require("./_plugin-vue_export-helper-C1TPHJvg.cjs");
const require_server = require("../server.cjs");
//#region src/components/namespaceSelector.vue
var _sfc_main = {
	components: {
		SeedForm: require("./seedForm-DLpXnK6K.cjs").seedForm_default,
		SelectMenu: require_server.selectMenu_default,
		GeneralButton: require_server.generalButton_default
	},
	props: {
		namespaces: Array,
		selected: String
	},
	computed: { actualNamespaces() {
		return this.namespaces || this.data.namespaces;
	} }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_SeedForm = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("SeedForm");
	const _component_SelectMenu = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("SelectMenu");
	const _component_GeneralButton = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("GeneralButton");
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedForm, (0, require__plugin_vue_export_helper.vue_exports.mergeProps)({
		flex: "",
		box: ""
	}, _attrs), {
		default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push(`<label for="namespaceSelect" data-v-c7b80dff${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("components.namespace_selector.namespace"))}</label>`);
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SelectMenu, {
					id: "namespaceSelect",
					name: "namespace",
					value: $props.selected || _ctx.$route.query.namespace || $options.actualNamespaces[0]
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) {
							_push(`<!--[-->`);
							(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderList)($options.actualNamespaces, (item) => {
								_push(`<option${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttr)("value", item)} data-v-c7b80dff${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t(`namespaces.${item}`, {
									defaultValue: item,
									lng: _ctx.config.lang || "ko"
								}))}</option>`);
							});
							_push(`<!--]-->`);
						} else return [((0, require__plugin_vue_export_helper.vue_exports.openBlock)(true), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(require__plugin_vue_export_helper.vue_exports.Fragment, null, (0, require__plugin_vue_export_helper.vue_exports.renderList)($options.actualNamespaces, (item) => {
							return (0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)("option", { value: item }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t(`namespaces.${item}`, {
								defaultValue: item,
								lng: _ctx.config.lang || "ko"
							})), 9, ["value"]);
						}), 256))];
					}),
					_: 1
				}, _parent, _scopeId));
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_GeneralButton, {
					type: "submit",
					theme: "primary"
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("components.namespace_selector.submit"))}`);
						else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("components.namespace_selector.submit")), 1)];
					}),
					_: 1
				}, _parent, _scopeId));
			} else return [
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("label", { for: "namespaceSelect" }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("components.namespace_selector.namespace")), 1),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SelectMenu, {
					id: "namespaceSelect",
					name: "namespace",
					value: $props.selected || _ctx.$route.query.namespace || $options.actualNamespaces[0]
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [((0, require__plugin_vue_export_helper.vue_exports.openBlock)(true), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(require__plugin_vue_export_helper.vue_exports.Fragment, null, (0, require__plugin_vue_export_helper.vue_exports.renderList)($options.actualNamespaces, (item) => {
						return (0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)("option", { value: item }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t(`namespaces.${item}`, {
							defaultValue: item,
							lng: _ctx.config.lang || "ko"
						})), 9, ["value"]);
					}), 256))]),
					_: 1
				}, 8, ["value"]),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_GeneralButton, {
					type: "submit",
					theme: "primary"
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("components.namespace_selector.submit")), 1)]),
					_: 1
				})
			];
		}),
		_: 1
	}, _parent));
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = (0, require__plugin_vue_export_helper.vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/namespaceSelector.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var namespaceSelector_default = /*#__PURE__*/ require__plugin_vue_export_helper._plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-c7b80dff"]]);
//#endregion
Object.defineProperty(exports, "namespaceSelector_default", {
	enumerable: true,
	get: function() {
		return namespaceSelector_default;
	}
});
