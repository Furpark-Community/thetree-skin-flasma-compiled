const require__plugin_vue_export_helper = require("./_plugin-vue_export-helper-C1TPHJvg.cjs");
//#region src/components/prevNextBtn.vue
var _sfc_main = {
	components: { GeneralButton: require("../server.cjs").generalButton_default },
	props: {
		start: { type: [
			String,
			JSON,
			null
		] },
		prev: { type: [
			String,
			JSON,
			null
		] },
		next: { type: [
			String,
			JSON,
			null
		] },
		end: { type: [
			String,
			JSON,
			null
		] },
		flex: { type: Boolean }
	},
	computed: {
		actualPrev() {
			return {
				...this.prev,
				query: {
					...this.$route.query,
					...this.prev?.query,
					from: null,
					cfrom: null
				}
			};
		},
		actualNext() {
			return {
				...this.next,
				query: {
					...this.$route.query,
					...this.next?.query,
					until: null,
					cuntil: null
				}
			};
		}
	}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_GeneralButton = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("GeneralButton");
	const _component_FontAwesomeIcon = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("FontAwesomeIcon");
	_push(`<div${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttrs)((0, require__plugin_vue_export_helper.vue_exports.mergeProps)({ class: ["page-group", { "page-flex": $props.flex }] }, _attrs))} data-v-10c8a128>`);
	if ($props.start !== void 0) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_GeneralButton, {
		disabled: !$props.start,
		class: "page-button",
		href: $props.start ?? void 0
	}, {
		default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
			if (_push) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_FontAwesomeIcon, { icon: "angles-left" }, null, _parent, _scopeId));
			else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_FontAwesomeIcon, { icon: "angles-left" })];
		}),
		_: 1
	}, _parent));
	else _push(`<!---->`);
	if ($props.prev !== void 0) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_GeneralButton, {
		disabled: !$props.prev,
		class: "page-button",
		href: $options.actualPrev ?? void 0
	}, {
		default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_FontAwesomeIcon, { icon: "chevron-left" }, null, _parent, _scopeId));
				_push(`<span data-v-10c8a128${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("components.prev_next_btn.prev"))}</span>`);
			} else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_FontAwesomeIcon, { icon: "chevron-left" }), (0, require__plugin_vue_export_helper.vue_exports.createVNode)("span", null, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("components.prev_next_btn.prev")), 1)];
		}),
		_: 1
	}, _parent));
	else _push(`<!---->`);
	if ($props.next !== void 0) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_GeneralButton, {
		disabled: !$props.next,
		class: "page-button",
		href: $options.actualNext ?? void 0
	}, {
		default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push(`<span data-v-10c8a128${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("components.prev_next_btn.next"))}</span>`);
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_FontAwesomeIcon, { icon: "chevron-right" }, null, _parent, _scopeId));
			} else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("span", null, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("components.prev_next_btn.next")), 1), (0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_FontAwesomeIcon, { icon: "chevron-right" })];
		}),
		_: 1
	}, _parent));
	else _push(`<!---->`);
	if ($props.end !== void 0) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_GeneralButton, {
		disabled: !$props.end,
		class: "page-button",
		href: $props.end ?? void 0
	}, {
		default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
			if (_push) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_FontAwesomeIcon, { icon: "angles-right" }, null, _parent, _scopeId));
			else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_FontAwesomeIcon, { icon: "angles-right" })];
		}),
		_: 1
	}, _parent));
	else _push(`<!---->`);
	_push(`</div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = (0, require__plugin_vue_export_helper.vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/prevNextBtn.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var prevNextBtn_default = /*#__PURE__*/ require__plugin_vue_export_helper._plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-10c8a128"]]);
//#endregion
Object.defineProperty(exports, "prevNextBtn_default", {
	enumerable: true,
	get: function() {
		return prevNextBtn_default;
	}
});
