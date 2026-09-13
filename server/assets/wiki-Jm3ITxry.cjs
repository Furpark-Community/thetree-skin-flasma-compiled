const require__plugin_vue_export_helper = require("./_plugin-vue_export-helper-C1TPHJvg.cjs");
const require_server = require("../server.cjs");
const require_wikiContent = require("./wikiContent-DOztl5qm.cjs");
//#region src/views/contents/wiki.vue
var _sfc_main = {
	mixins: [require_server.common_default],
	components: {
		WikiCategoryDocs: require_wikiContent.wikiCategoryDocs_default,
		LocalDate: require_server.localDate_default,
		Alert: require_server.alert_default,
		NuxtLink: require_server.nuxtLink_default,
		WikiContent: require_wikiContent.wikiContent_default
	},
	mounted() {
		if (this.data.docScript) this.$nextTick(() => (0, eval)(this.data.docScript));
	},
	watch: { "data.docScript"(newValue) {
		if (newValue) this.$nextTick(() => (0, eval)(newValue));
	} },
	computed: {
		content() {
			return this.data.contentHtml;
		},
		categories() {
			return this.data.categories;
		},
		categoriesData() {
			return this.data.categoriesData;
		},
		userbox() {
			return this.data.userboxData ?? {};
		}
	}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_Alert = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("Alert");
	const _component_i18next = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("i18next");
	const _component_LocalDate = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("LocalDate");
	const _component_NuxtLink = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("NuxtLink");
	const _component_WikiContent = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("WikiContent");
	const _component_WikiCategoryDocs = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("WikiCategoryDocs");
	_push(`<!--[-->`);
	if (_ctx.data.rev) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_Alert, { error: "" }, {
		default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push(`<b${_scopeId}>[${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.wiki.warn"))}]</b> `);
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_i18next, { translation: _ctx.$t("views.wiki.old_revision") }, {
					date: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_LocalDate, { date: _ctx.data.date }, null, _parent, _scopeId));
						else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_LocalDate, { date: _ctx.data.date }, null, 8, ["date"])];
					}),
					_: 1
				}, _parent, _scopeId));
				_push(` `);
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_NuxtLink, { to: _ctx.doc_action_link(_ctx.data.document, "w") }, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.wiki.go_to_latest"))}`);
						else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.wiki.go_to_latest")), 1)];
					}),
					_: 1
				}, _parent, _scopeId));
			} else return [
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("b", null, "[" + (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.wiki.warn")) + "]", 1),
				(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)(),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_i18next, { translation: _ctx.$t("views.wiki.old_revision") }, {
					date: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_LocalDate, { date: _ctx.data.date }, null, 8, ["date"])]),
					_: 1
				}, 8, ["translation"]),
				(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)(),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_NuxtLink, { to: _ctx.doc_action_link(_ctx.data.document, "w") }, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.wiki.go_to_latest")), 1)]),
					_: 1
				}, 8, ["to"])
			];
		}),
		_: 1
	}, _parent));
	else _push(`<!---->`);
	if (_ctx.$route.query.from) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_Alert, { theme: "primary" }, {
		default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_NuxtLink, {
					rel: "nofollow",
					title: _ctx.$route.query.from,
					to: {
						path: `/w/${_ctx.$route.query.from}`,
						query: { noredirect: 1 }
					}
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$route.query.from)}`);
						else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$route.query.from), 1)];
					}),
					_: 1
				}, _parent, _scopeId));
				_push(`에서 넘어옴 `);
			} else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_NuxtLink, {
				rel: "nofollow",
				title: _ctx.$route.query.from,
				to: {
					path: `/w/${_ctx.$route.query.from}`,
					query: { noredirect: 1 }
				}
			}, {
				default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$route.query.from), 1)]),
				_: 1
			}, 8, ["title", "to"]), (0, require__plugin_vue_export_helper.vue_exports.createTextVNode)("에서 넘어옴 ")];
		}),
		_: 1
	}, _parent));
	else _push(`<!---->`);
	if (!$options.categories.length && _ctx.data.document.namespace !== "사용자" && !_ctx.data.isRedirect) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_Alert, null, {
		default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
			if (_push) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_i18next, { translation: _ctx.$t("views.wiki.no_category") }, {
				link: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_NuxtLink, { to: _ctx.doc_action_link({
						namespace: _ctx.$t("namespaces.분류", { lng: _ctx.config.lang || "ko" }),
						title: _ctx.$t("namespaces.분류", { lng: _ctx.config.lang || "ko" })
					}, "w") }, {
						default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
							if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("namespaces.분류", { lng: _ctx.config.lang || "ko" }))}:${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("namespaces.분류", { lng: _ctx.config.lang || "ko" }))}`);
							else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("namespaces.분류", { lng: _ctx.config.lang || "ko" })) + ":" + (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("namespaces.분류", { lng: _ctx.config.lang || "ko" })), 1)];
						}),
						_: 1
					}, _parent, _scopeId));
					else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_NuxtLink, { to: _ctx.doc_action_link({
						namespace: _ctx.$t("namespaces.분류", { lng: _ctx.config.lang || "ko" }),
						title: _ctx.$t("namespaces.분류", { lng: _ctx.config.lang || "ko" })
					}, "w") }, {
						default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("namespaces.분류", { lng: _ctx.config.lang || "ko" })) + ":" + (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("namespaces.분류", { lng: _ctx.config.lang || "ko" })), 1)]),
						_: 1
					}, 8, ["to"])];
				}),
				_: 1
			}, _parent, _scopeId));
			else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_i18next, { translation: _ctx.$t("views.wiki.no_category") }, {
				link: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_NuxtLink, { to: _ctx.doc_action_link({
					namespace: _ctx.$t("namespaces.분류", { lng: _ctx.config.lang || "ko" }),
					title: _ctx.$t("namespaces.분류", { lng: _ctx.config.lang || "ko" })
				}, "w") }, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("namespaces.분류", { lng: _ctx.config.lang || "ko" })) + ":" + (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("namespaces.분류", { lng: _ctx.config.lang || "ko" })), 1)]),
					_: 1
				}, 8, ["to"])]),
				_: 1
			}, 8, ["translation"])];
		}),
		_: 1
	}, _parent));
	else _push(`<!---->`);
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_WikiContent, {
		content: $options.content,
		categories: $options.categories,
		userbox: $options.userbox,
		topHtml: _ctx.data.topDocument,
		bottomHtml: _ctx.data.bottomDocument
	}, null, _parent));
	if (_ctx.data.document.namespace === "분류") _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_WikiCategoryDocs, { categories: $options.categoriesData }, null, _parent));
	else _push(`<!---->`);
	_push(`<!--]-->`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = (0, require__plugin_vue_export_helper.vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/contents/wiki.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var wiki_default = /*#__PURE__*/ require__plugin_vue_export_helper._plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
//#endregion
exports.default = wiki_default;
