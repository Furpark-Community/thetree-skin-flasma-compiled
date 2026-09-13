const require__plugin_vue_export_helper = require("./_plugin-vue_export-helper-C1TPHJvg.cjs");
const require_server = require("../server.cjs");
const require_authorSpan = require("./authorSpan-Cr3XG9VP.cjs");
//#region src/views/contents/document/blame.vue
var _sfc_main = {
	mixins: [require_server.common_default],
	components: {
		NuxtLink: require_server.nuxtLink_default,
		AuthorSpan: require_authorSpan.authorSpan_default
	}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_NuxtLink = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("NuxtLink");
	const _component_AuthorSpan = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("AuthorSpan");
	_push(`<table${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttrs)(_attrs)} data-v-4bc5bf31><thead data-v-4bc5bf31><tr data-v-4bc5bf31><th data-v-4bc5bf31></th><th data-v-4bc5bf31></th><th class="texttitle" data-v-4bc5bf31>r${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.data.rev)}</th></tr></thead><tbody data-v-4bc5bf31><!--[-->`);
	(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderList)(_ctx.data.blameLines, (item, index) => {
		_push(`<tr data-v-4bc5bf31>`);
		if (item.diff) {
			_push(`<th${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttr)("rowspan", item.diff.count)} style="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderStyle)({ "background-color": item.diff.user?.color ?? "#fff" })}" data-v-4bc5bf31>`);
			if (item.diff.history.rev !== 1) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_NuxtLink, { to: _ctx.doc_action_link(_ctx.data.document, "diff", { uuid: item.diff.uuid }) }, {
				default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) _push(` r${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(item.diff.history.rev)}`);
					else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)(" r" + (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(item.diff.history.rev), 1)];
				}),
				_: 2
			}, _parent));
			else _push(`<!--[-->r${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(item.diff.history.rev)}<!--]-->`);
			_push(`<br data-v-4bc5bf31>`);
			_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_AuthorSpan, { account: item.diff.user }, null, _parent));
			if (item.diff.history.infoText) {
				_push(`<!--[--><br data-v-4bc5bf31><i data-v-4bc5bf31>`);
				if (item.diff.history.type === 5) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_NuxtLink, { to: _ctx.doc_action_link(_ctx.data.document, "blame", { uuid: item.diff.uuid }) }, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push(` (${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(item.diff.history.infoText)}) `);
						else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)(" (" + (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(item.diff.history.infoText) + ") ", 1)];
					}),
					_: 2
				}, _parent));
				else _push(`<!--[--> (${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(item.diff.history.infoText)}) <!--]-->`);
				_push(`</i><!--]-->`);
			} else _push(`<!---->`);
			_push(`</th>`);
		} else _push(`<!---->`);
		_push(`<th data-v-4bc5bf31>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(index + 1)}</th><td data-v-4bc5bf31>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(item.content)}</td></tr>`);
	});
	_push(`<!--]--></tbody></table>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = (0, require__plugin_vue_export_helper.vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/contents/document/blame.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var blame_default = /*#__PURE__*/ require__plugin_vue_export_helper._plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-4bc5bf31"]]);
//#endregion
exports.default = blame_default;
