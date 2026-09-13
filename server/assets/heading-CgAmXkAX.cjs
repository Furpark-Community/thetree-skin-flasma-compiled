const require__plugin_vue_export_helper = require("./_plugin-vue_export-helper-C1TPHJvg.cjs");
//#region src/components/heading.vue
var _sfc_main = {
	props: {
		level: {
			type: Number,
			default: 2
		},
		title: {
			type: String,
			required: true
		},
		folded: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return { fold: this.folded };
	},
	methods: { toggleFold() {
		this.fold = !this.fold;
	} }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	_push(`<!--[-->`);
	(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderVNode)(_push, (0, require__plugin_vue_export_helper.vue_exports.createVNode)((0, require__plugin_vue_export_helper.vue_exports.resolveDynamicComponent)("h" + $props.level), {
		onClick: $options.toggleFold,
		class: ["wiki-heading", { "wiki-heading-folded": $data.fold }]
	}, {
		default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
			if (_push) _push(`<span data-v-1a9fd8e9${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)($props.title)}</span>`);
			else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("span", null, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)($props.title), 1)];
		}),
		_: 1
	}), _parent);
	_push(`<div class="wiki-heading-content" style="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderStyle)(!$data.fold ? null : { display: "none" })}" data-v-1a9fd8e9>`);
	(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "default", {}, null, _push, _parent);
	_push(`</div><!--]-->`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = (0, require__plugin_vue_export_helper.vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/heading.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var heading_default = /*#__PURE__*/ require__plugin_vue_export_helper._plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-1a9fd8e9"]]);
//#endregion
Object.defineProperty(exports, "heading_default", {
	enumerable: true,
	get: function() {
		return heading_default;
	}
});
