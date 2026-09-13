const require__plugin_vue_export_helper = require("./_plugin-vue_export-helper-C1TPHJvg.cjs");
const require_server = require("../server.cjs");
const require_prevNextBtn = require("./prevNextBtn-BuquZ4_C.cjs");
const require_namespaceSelector = require("./namespaceSelector-KA3qVwAd.cjs");
//#region src/views/contents/docList/OrphanedPages.vue
var _sfc_main = {
	mixins: [require_server.common_default],
	components: {
		NuxtLink: require_server.nuxtLink_default,
		PrevNextBtn: require_prevNextBtn.prevNextBtn_default,
		GeneralButton: require_server.generalButton_default,
		NamespaceSelector: require_namespaceSelector.namespaceSelector_default
	},
	computed: {
		frontPage() {
			return this.$store.state.config["wiki.front_page"];
		},
		pageProps() {
			const prevItem = this.data.prevItem;
			const nextItem = this.data.nextItem;
			return {
				prev: prevItem >= 0 ? { query: { until: prevItem } } : null,
				next: nextItem < this.data.total ? { query: { from: nextItem } } : null
			};
		}
	},
	methods: { async update() {
		await this.internalRequestAndProcess("/OrphanedPages/update");
	} }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_NamespaceSelector = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("NamespaceSelector");
	const _component_i18next = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("i18next");
	const _component_NuxtLink = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("NuxtLink");
	const _component_GeneralButton = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("GeneralButton");
	const _component_PrevNextBtn = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("PrevNextBtn");
	_push(`<!--[-->`);
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_NamespaceSelector, null, null, _parent));
	_push(`<p data-v-bfee0499>`);
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_i18next, { translation: _ctx.$t("views.orphaned_pages.description") }, {
		link: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
			if (_push) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_NuxtLink, { to: _ctx.doc_action_link($options.frontPage, "w") }, {
				default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)($options.frontPage)}`);
					else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)($options.frontPage), 1)];
				}),
				_: 1
			}, _parent, _scopeId));
			else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_NuxtLink, { to: _ctx.doc_action_link($options.frontPage, "w") }, {
				default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)($options.frontPage), 1)]),
				_: 1
			}, 8, ["to"])];
		}),
		_: 1
	}, _parent));
	_push(`</p><p data-v-bfee0499>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.needed_pages.updated_per_day"))}</p>`);
	if (_ctx.data.permissions.dev) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_GeneralButton, {
		theme: "danger",
		whenClick: $options.update
	}, {
		default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
			if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.needed_pages.update"))}`);
			else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.needed_pages.update")), 1)];
		}),
		_: 1
	}, _parent));
	else _push(`<!---->`);
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_PrevNextBtn, (0, require__plugin_vue_export_helper.vue_exports.mergeProps)({ flex: "" }, $options.pageProps), null, _parent));
	_push(`<ul data-v-bfee0499><!--[-->`);
	(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderList)(_ctx.data.items, (item) => {
		_push(`<li data-v-bfee0499>`);
		_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_NuxtLink, { to: _ctx.doc_action_link(item, "w") }, {
			default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
				if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.doc_fulltitle(item))}`);
				else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.doc_fulltitle(item)), 1)];
			}),
			_: 2
		}, _parent));
		_push(`  `);
		_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_NuxtLink, { to: _ctx.doc_action_link(item, "backlink") }, {
			default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
				if (_push) _push(`[${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.needed_pages.backlink"))}]`);
				else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)("[" + (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.needed_pages.backlink")) + "]", 1)];
			}),
			_: 2
		}, _parent));
		_push(`</li>`);
	});
	_push(`<!--]--></ul>`);
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_PrevNextBtn, (0, require__plugin_vue_export_helper.vue_exports.mergeProps)({ flex: "" }, $options.pageProps), null, _parent));
	_push(`<!--]-->`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = (0, require__plugin_vue_export_helper.vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/contents/docList/OrphanedPages.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var OrphanedPages_default = /*#__PURE__*/ require__plugin_vue_export_helper._plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-bfee0499"]]);
//#endregion
exports.default = OrphanedPages_default;
