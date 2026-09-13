const require__plugin_vue_export_helper = require("./_plugin-vue_export-helper-C1TPHJvg.cjs");
const require_server = require("../server.cjs");
//#region src/views/contents/member/starred_documents.vue
var _sfc_main = {
	mixins: [require_server.common_default],
	components: {
		GeneralButton: require_server.generalButton_default,
		LocalDate: require_server.localDate_default,
		NuxtLink: require_server.nuxtLink_default
	},
	data() {
		return { disableButton: false };
	},
	methods: { async toggleStar(item) {
		this.disableButton = true;
		if ((await this.internalRequestAndProcess(this.doc_action_link(item.document.parsedName, "member/" + (item.removed ? "star" : "unstar"))))?.code === 204) item.removed = !item.removed;
		this.disableButton = false;
	} }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_NuxtLink = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("NuxtLink");
	const _component_LocalDate = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("LocalDate");
	const _component_GeneralButton = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("GeneralButton");
	const _component_FontAwesomeIcon = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("FontAwesomeIcon");
	_push(`<div${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttrs)((0, require__plugin_vue_export_helper.vue_exports.mergeProps)({ class: "list-table" }, _attrs))} data-v-b1471d4c><div class="table-row table-heading" data-v-b1471d4c><div class="table-item" data-v-b1471d4c>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.starred_documents.document"))}</div><div class="table-item" data-v-b1471d4c>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.starred_documents.edit_date"))}</div><div class="table-item" data-v-b1471d4c></div></div><!--[-->`);
	(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderList)(_ctx.data.stars, (item) => {
		_push(`<div class="table-row" data-v-b1471d4c><div class="table-item" data-v-b1471d4c>`);
		_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_NuxtLink, { to: _ctx.doc_action_link(item.document.parsedName, "w") }, {
			default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
				if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.doc_fulltitle(item.document.parsedName))}`);
				else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.doc_fulltitle(item.document.parsedName)), 1)];
			}),
			_: 2
		}, _parent));
		_push(`</div><div class="table-item" data-v-b1471d4c>`);
		_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_LocalDate, {
			date: item.rev.createdAt,
			relative: ""
		}, null, _parent));
		_push(`</div><div class="table-item table-buttons" data-v-b1471d4c>`);
		if (item.removed) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_GeneralButton, {
			class: "toggle-button",
			size: "small",
			theme: "primary",
			title: _ctx.$t("views.starred_documents.add"),
			type: "event",
			onClick: ($event) => $options.toggleStar(item),
			disabled: $data.disableButton
		}, {
			default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
				if (_push) {
					_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_FontAwesomeIcon, {
						class: "button-icon",
						icon: "plus"
					}, null, _parent, _scopeId));
					_push(`<span class="button-text" data-v-b1471d4c${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.starred_documents.add"))}</span>`);
				} else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_FontAwesomeIcon, {
					class: "button-icon",
					icon: "plus"
				}), (0, require__plugin_vue_export_helper.vue_exports.createVNode)("span", { class: "button-text" }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.starred_documents.add")), 1)];
			}),
			_: 2
		}, _parent));
		else _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_GeneralButton, {
			class: "toggle-button",
			size: "small",
			theme: "danger",
			title: _ctx.$t("views.starred_documents.remove"),
			type: "event",
			onClick: ($event) => $options.toggleStar(item),
			disabled: $data.disableButton
		}, {
			default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
				if (_push) {
					_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_FontAwesomeIcon, {
						class: "button-icon",
						icon: "trash-can"
					}, null, _parent, _scopeId));
					_push(`<span class="button-text" data-v-b1471d4c${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.starred_documents.remove"))}</span>`);
				} else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_FontAwesomeIcon, {
					class: "button-icon",
					icon: "trash-can"
				}), (0, require__plugin_vue_export_helper.vue_exports.createVNode)("span", { class: "button-text" }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.starred_documents.remove")), 1)];
			}),
			_: 2
		}, _parent));
		_push(`</div></div>`);
	});
	_push(`<!--]--></div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = (0, require__plugin_vue_export_helper.vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/contents/member/starred_documents.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var starred_documents_default = /*#__PURE__*/ require__plugin_vue_export_helper._plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-b1471d4c"]]);
//#endregion
exports.default = starred_documents_default;
