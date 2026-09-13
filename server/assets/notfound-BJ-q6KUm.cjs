const require__plugin_vue_export_helper = require("./_plugin-vue_export-helper-C1TPHJvg.cjs");
const require_server = require("../server.cjs");
const require_authorSpan = require("./authorSpan-Cr3XG9VP.cjs");
const require_diffCount = require("./diffCount-BJeKwZXu.cjs");
//#region src/views/contents/notfound.vue
var _sfc_main = {
	mixins: [require_server.common_default],
	components: {
		NuxtLink: require_server.nuxtLink_default,
		AuthorSpan: require_authorSpan.authorSpan_default,
		DiffCount: require_diffCount.diffCount_default,
		LocalDate: require_server.localDate_default
	},
	computed: { newLink() {
		const document = this.data.document;
		if (document.namespace === "파일") return {
			path: "/Upload",
			query: { document: this.doc_fulltitle(document) }
		};
		else return this.doc_action_link(document, "edit");
	} }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_NuxtLink = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("NuxtLink");
	const _component_LocalDate = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("LocalDate");
	const _component_DiffCount = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("DiffCount");
	const _component_AuthorSpan = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("AuthorSpan");
	_push(`<!--[--><p data-v-09c37525>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.notfound.text"))}</p><p data-v-09c37525>`);
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_NuxtLink, {
		to: $options.newLink,
		rel: "nofollow"
	}, {
		default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
			if (_push) _push(`[${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.notfound.new_document"))}]`);
			else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)("[" + (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.notfound.new_document")) + "]", 1)];
		}),
		_: 1
	}, _parent));
	_push(`</p>`);
	if (_ctx.data.revs.length) {
		_push(`<!--[--><div style="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderStyle)({
			"margin-top": "40px",
			"margin-bottom": "15px"
		})}" data-v-09c37525></div><h3 data-v-09c37525>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.notfound.history"))}</h3><ul data-v-09c37525><!--[-->`);
		(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderList)(_ctx.data.revs, (item) => {
			_push(`<li data-v-09c37525><span data-v-09c37525>`);
			_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_LocalDate, { date: item.createdAt }, null, _parent));
			_push(`  </span><strong data-v-09c37525>r${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(item.rev)} </strong>`);
			if (item.infoText) _push(`<i data-v-09c37525>(${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.removeHtmlTags(item.infoText))}) </i>`);
			else _push(`<!---->`);
			_push(` (`);
			_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_DiffCount, { count: item.diffLength }, null, _parent));
			_push(`) `);
			_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_AuthorSpan, {
				account: item.user,
				pos: `${_ctx.doc_fulltitle(_ctx.data.document)} r${item.rev}`
			}, null, _parent));
			_push(` (<span class="log" data-v-09c37525>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(item.log)}</span>) </li>`);
		});
		_push(`<!--]--></ul>`);
		_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_NuxtLink, { to: _ctx.doc_action_link(_ctx.data.document, "history") }, {
			default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
				if (_push) _push(`[${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.notfound.history_more"))}]`);
				else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)("[" + (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.notfound.history_more")) + "]", 1)];
			}),
			_: 1
		}, _parent));
		_push(`<!--]-->`);
	} else _push(`<!---->`);
	_push(`<!--]-->`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = (0, require__plugin_vue_export_helper.vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/contents/notfound.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var notfound_default = /*#__PURE__*/ require__plugin_vue_export_helper._plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-09c37525"]]);
//#endregion
exports.default = notfound_default;
