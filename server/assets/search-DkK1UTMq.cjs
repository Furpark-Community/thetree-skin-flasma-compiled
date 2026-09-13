const require__plugin_vue_export_helper = require("./_plugin-vue_export-helper-C1TPHJvg.cjs");
const require_server = require("../server.cjs");
const require_seedForm = require("./seedForm-DLpXnK6K.cjs");
const require_seedButton = require("./seedButton-CbrSfLgh.cjs");
//#region src/views/contents/search.vue
var _sfc_main = {
	mixins: [require_server.common_default],
	components: {
		NuxtLink: require_server.nuxtLink_default,
		SeedLinkButton: require_server.seedLinkButton_default,
		Alert: require_server.alert_default,
		SeedButton: require_seedButton.seedButton_default,
		SeedForm: require_seedForm.seedForm_default
	},
	computed: { pageNum() {
		const num = parseInt(this.$route.query.page) || 1;
		const start = num - num % 10 + 1;
		const end = Math.min(num + 9, this.data.totalPages);
		const result = [];
		for (let i = start; i <= end; i++) result.push(i);
		return result;
	} }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_SeedForm = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("SeedForm");
	const _component_SeedButton = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("SeedButton");
	const _component_Alert = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("Alert");
	const _component_SeedLinkButton = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("SeedLinkButton");
	const _component_NuxtLink = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("NuxtLink");
	_push(`<!--[-->`);
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedForm, null, {
		default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push(`<select name="namespace"${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttr)("value", _ctx.$route.query.namespace || "")} data-v-38a90fe6${_scopeId}><option value="" data-v-38a90fe6${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.search.namespace_all"))}</option><!--[-->`);
				(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderList)(_ctx.data.readableNamespaces, (item) => {
					_push(`<option data-v-38a90fe6${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(item)}</option>`);
				});
				_push(`<!--]--></select><select name="target"${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttr)("value", _ctx.$route.query.target || "title_content")} data-v-38a90fe6${_scopeId}><option value="title_content" data-v-38a90fe6${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.search.target.title_content"))}</option><option value="title" data-v-38a90fe6${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.search.target.title"))}</option><option value="content" data-v-38a90fe6${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.search.target.content"))}</option><option value="raw" data-v-38a90fe6${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.search.target.raw"))}</option></select><input type="text" name="q"${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttr)("value", _ctx.$route.query.q || "")} data-v-38a90fe6${_scopeId}>`);
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedButton, { submit: "" }, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.search.search"))}`);
						else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.search.search")), 1)];
					}),
					_: 1
				}, _parent, _scopeId));
			} else return [
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("select", {
					name: "namespace",
					value: _ctx.$route.query.namespace || ""
				}, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("option", { value: "" }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.search.namespace_all")), 1), ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(true), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(require__plugin_vue_export_helper.vue_exports.Fragment, null, (0, require__plugin_vue_export_helper.vue_exports.renderList)(_ctx.data.readableNamespaces, (item) => {
					return (0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)("option", null, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(item), 1);
				}), 256))], 8, ["value"]),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("select", {
					name: "target",
					value: _ctx.$route.query.target || "title_content"
				}, [
					(0, require__plugin_vue_export_helper.vue_exports.createVNode)("option", { value: "title_content" }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.search.target.title_content")), 1),
					(0, require__plugin_vue_export_helper.vue_exports.createVNode)("option", { value: "title" }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.search.target.title")), 1),
					(0, require__plugin_vue_export_helper.vue_exports.createVNode)("option", { value: "content" }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.search.target.content")), 1),
					(0, require__plugin_vue_export_helper.vue_exports.createVNode)("option", { value: "raw" }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.search.target.raw")), 1)
				], 8, ["value"]),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("input", {
					type: "text",
					name: "q",
					value: _ctx.$route.query.q || ""
				}, null, 8, ["value"]),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedButton, { submit: "" }, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.search.search")), 1)]),
					_: 1
				})
			];
		}),
		_: 1
	}, _parent));
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_Alert, null, {
		default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push(`<div class="alert-block" data-v-38a90fe6${_scopeId}><i class="ion-ios-arrow-forward" data-v-38a90fe6${_scopeId}></i> ${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.search.direct_document"))}</div><div class="alert-button" data-v-38a90fe6${_scopeId}>`);
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedLinkButton, { to: _ctx.doc_action_link(_ctx.$route.query.q, "w") }, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.search.direct_document_btn", { query: _ctx.$route.query.q }))}`);
						else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.search.direct_document_btn", { query: _ctx.$route.query.q })), 1)];
					}),
					_: 1
				}, _parent, _scopeId));
				_push(`</div><div class="clear" data-v-38a90fe6${_scopeId}></div>`);
			} else return [
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: "alert-block" }, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("i", { class: "ion-ios-arrow-forward" }), (0, require__plugin_vue_export_helper.vue_exports.createTextVNode)(" " + (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.search.direct_document")), 1)]),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: "alert-button" }, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedLinkButton, { to: _ctx.doc_action_link(_ctx.$route.query.q, "w") }, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.search.direct_document_btn", { query: _ctx.$route.query.q })), 1)]),
					_: 1
				}, 8, ["to"])]),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: "clear" })
			];
		}),
		_: 1
	}, _parent));
	_push(`<div class="info-text" data-v-38a90fe6>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.search.result", {
		count: _ctx.data.totalHits,
		sec: _ctx.data.processingTime / 1e3
	}))}</div><section data-v-38a90fe6><!--[-->`);
	(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderList)(_ctx.data.hits, (item) => {
		_push(`<div data-v-38a90fe6><h4 data-v-38a90fe6><i class="ion-md-document" data-v-38a90fe6></i>`);
		_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_NuxtLink, { to: _ctx.doc_action_link(item, "w") }, {
			default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
				if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.doc_fulltitle(item))}`);
				else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.doc_fulltitle(item)), 1)];
			}),
			_: 2
		}, _parent));
		_push(`</h4><div data-v-38a90fe6>${(item.content || item.raw) ?? ""}</div></div>`);
	});
	_push(`<!--]--><nav data-v-38a90fe6><ul data-v-38a90fe6><!--[-->`);
	(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderList)($options.pageNum, (i) => {
		_push(`<li data-v-38a90fe6>`);
		_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_NuxtLink, {
			to: { query: { page: i } },
			class: { active: i.toString() === (_ctx.$route.query.page || "1") }
		}, {
			default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
				if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(i)}`);
				else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(i), 1)];
			}),
			_: 2
		}, _parent));
		_push(`</li>`);
	});
	_push(`<!--]--></ul></nav><div class="clear" data-v-38a90fe6></div></section><!--]-->`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = (0, require__plugin_vue_export_helper.vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/contents/search.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var search_default = /*#__PURE__*/ require__plugin_vue_export_helper._plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-38a90fe6"]]);
//#endregion
exports.default = search_default;
