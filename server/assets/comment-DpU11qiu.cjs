const require__plugin_vue_export_helper = require("./_plugin-vue_export-helper-C1TPHJvg.cjs");
const require_server = require("../server.cjs");
const require_seedButton = require("./seedButton-CbrSfLgh.cjs");
const require_authorSpan = require("./authorSpan-Cr3XG9VP.cjs");
const require_wikiContent = require("./wikiContent-DOztl5qm.cjs");
//#region src/components/comment.vue
var _sfc_main = {
	components: {
		SeedButton: require_seedButton.seedButton_default,
		GeneralButton: require_server.generalButton_default,
		WikiContent: require_wikiContent.wikiContent_default,
		ContextMenu: require_authorSpan.contextMenu_default,
		LocalDate: require_server.localDate_default,
		AuthorSpan: require_authorSpan.authorSpan_default
	},
	mixins: [require_server.common_default],
	emits: [
		"updateShow",
		"updateHide",
		"show",
		"hide"
	],
	directives: { closePopover: require_authorSpan.Et },
	props: {
		comment: {
			type: JSON,
			required: true
		},
		slug: {
			type: String,
			required: true
		},
		previewMode: Boolean,
		tooltipMode: Boolean,
		thread: JSON
	},
	data() {
		return {
			shown: false,
			tooltipVisible: false,
			showRaw: false,
			rawContent: null,
			loadingRaw: false,
			abortController: null,
			forceShow: false
		};
	},
	mounted() {
		this.observer = new IntersectionObserver((entries) => {
			if (entries.length > 0) {
				const entry = entries[0];
				this.shown = entry.isIntersecting;
				this.$emit(this.shown ? "show" : "hide");
			}
		});
		this.observer.observe(this.$refs.elem);
		this.abortController = new AbortController();
	},
	beforeUnmount() {
		if (this.observer) {
			this.observer.disconnect();
			this.observer = null;
		}
		if (this.abortController) {
			this.abortController.abort();
			this.abortController = null;
		}
	},
	computed: {
		fetched() {
			return this.comment.user;
		},
		pos() {
			return this.$t("document.discuss") + " " + this.slug + " #" + this.comment.id;
		}
	},
	methods: {
		async loadRaw() {
			if (this.loadingRaw) return;
			this.loadingRaw = true;
			try {
				const res = await this.internalRequest(`/thread/${this.slug}/${this.comment.id}/raw`, { noProgress: true });
				if (res.code) {
					alert(res.data);
					this.showRaw = false;
					return;
				}
				this.rawContent = res.data;
			} catch (e) {
				console.error(e);
				this.showRaw = false;
			} finally {
				this.loadingRaw = false;
			}
		},
		async toggleRaw() {
			this.showRaw = !this.showRaw;
			if (this.showRaw && this.rawContent === null) await this.loadRaw();
		},
		async toggleHide() {
			await this.internalRequestAndProcess(`/admin/thread/${this.slug}/${this.comment.id}/${this.comment.hidden ? "show" : "hide"}`, { method: "POST" });
		},
		async togglePin() {
			await this.internalRequestAndProcess(`/admin/thread/${this.slug}/${this.data.thread.pinnedComment === this.comment.id ? 0 : this.comment.id}/pin`, { method: "POST" });
		}
	}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_AuthorSpan = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("AuthorSpan");
	const _component_LocalDate = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("LocalDate");
	const _component_ContextMenu = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("ContextMenu");
	const _component_GeneralButton = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("GeneralButton");
	const _component_FontAwesomeIcon = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("FontAwesomeIcon");
	const _component_WikiContent = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("WikiContent");
	const _component_SeedButton = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("SeedButton");
	const _component_i18next = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("i18next");
	const _directive_close_popover = (0, require__plugin_vue_export_helper.vue_exports.resolveDirective)("close-popover");
	_push(`<div${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttrs)((0, require__plugin_vue_export_helper.vue_exports.mergeProps)({
		ref: "elem",
		class: ["comment", {
			loading: !$options.fetched,
			visible: $data.shown,
			"tooltip-mode": $props.tooltipMode
		}]
	}, _attrs, (0, require__plugin_vue_export_helper.server_renderer_exports.ssrGetDirectiveProps)(_ctx, _directive_close_popover)))} data-v-dbf6482e><div class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)([{ "tooltip-mode": $props.tooltipMode }, "comment-inside"])}" data-v-dbf6482e><div class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)([{ "user-starter": !$props.previewMode && $props.comment.user && $props.comment.user?.uuid === _ctx.data.thread?.createdUser }, "user-block"])}" data-v-dbf6482e><span class="num-text" data-v-dbf6482e><a${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttr)("id", $props.comment.id)}${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttr)("href", "#" + $props.comment.id)} data-v-dbf6482e>#${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)($props.comment.id)}</a></span>`);
	if ($options.fetched) {
		_push(`<!--[-->`);
		_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_AuthorSpan, {
			account: $props.comment.user,
			pos: $options.pos,
			discuss: "",
			discussAdmin: $props.comment.admin
		}, null, _parent));
		_push(`<span class="time-block" data-v-dbf6482e>`);
		_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_LocalDate, { date: $props.comment.createdAt }, null, _parent));
		if (!$props.previewMode && ($props.comment.type === 0 || _ctx.data.permissions.manage)) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_ContextMenu, {
			class: "menu-block",
			placement: "bottom-end"
		}, {
			menu: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
				if (_push) {
					if ($props.comment.type === 0) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_GeneralButton, (0, require__plugin_vue_export_helper.vue_exports.mergeProps)({ whenClick: $options.toggleRaw }, (0, require__plugin_vue_export_helper.server_renderer_exports.ssrGetDirectiveProps)(_ctx, _directive_close_popover)), null, _parent, _scopeId));
					else _push(`<!---->`);
					if (_ctx.data.permissions.manage) {
						_push(`<!--[-->`);
						if ($props.comment.type === 0) _push(`<hr data-v-dbf6482e${_scopeId}>`);
						else _push(`<!---->`);
						_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_GeneralButton, (0, require__plugin_vue_export_helper.vue_exports.mergeProps)({
							theme: "danger",
							whenClick: $options.toggleHide
						}, (0, require__plugin_vue_export_helper.server_renderer_exports.ssrGetDirectiveProps)(_ctx, _directive_close_popover)), null, _parent, _scopeId));
						_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_GeneralButton, (0, require__plugin_vue_export_helper.vue_exports.mergeProps)({
							theme: "danger",
							whenClick: $options.togglePin
						}, (0, require__plugin_vue_export_helper.server_renderer_exports.ssrGetDirectiveProps)(_ctx, _directive_close_popover)), null, _parent, _scopeId));
						_push(`<!--]-->`);
					} else _push(`<!---->`);
				} else return [$props.comment.type === 0 ? (0, require__plugin_vue_export_helper.vue_exports.withDirectives)(((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(_component_GeneralButton, {
					key: 0,
					whenClick: $options.toggleRaw,
					textContent: (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("components.comment." + ($data.showRaw ? "wiki" : "raw")))
				}, null, 8, ["whenClick", "textContent"])), [[_directive_close_popover]]) : (0, require__plugin_vue_export_helper.vue_exports.createCommentVNode)("", true), _ctx.data.permissions.manage ? ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(require__plugin_vue_export_helper.vue_exports.Fragment, { key: 1 }, [
					$props.comment.type === 0 ? ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)("hr", { key: 0 })) : (0, require__plugin_vue_export_helper.vue_exports.createCommentVNode)("", true),
					(0, require__plugin_vue_export_helper.vue_exports.withDirectives)((0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_GeneralButton, {
						theme: "danger",
						whenClick: $options.toggleHide,
						textContent: (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("components.comment." + ($props.comment.hidden ? "unhide" : "hide")))
					}, null, 8, ["whenClick", "textContent"]), [[_directive_close_popover]]),
					(0, require__plugin_vue_export_helper.vue_exports.withDirectives)((0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_GeneralButton, {
						theme: "danger",
						whenClick: $options.togglePin,
						textContent: (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("components.comment." + ($props.comment.id === _ctx.data.thread?.pinnedComment ? "unpin" : "pin")))
					}, null, 8, ["whenClick", "textContent"]), [[_directive_close_popover]])
				], 64)) : (0, require__plugin_vue_export_helper.vue_exports.createCommentVNode)("", true)];
			}),
			default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
				if (_push) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_GeneralButton, { class: "menu-button" }, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_FontAwesomeIcon, { icon: "caret-down" }, null, _parent, _scopeId));
						else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_FontAwesomeIcon, { icon: "caret-down" })];
					}),
					_: 1
				}, _parent, _scopeId));
				else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_GeneralButton, { class: "menu-button" }, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_FontAwesomeIcon, { icon: "caret-down" })]),
					_: 1
				})];
			}),
			_: 1
		}, _parent));
		else _push(`<!---->`);
		_push(`</span><div class="clearfix" data-v-dbf6482e></div><!--]-->`);
	} else _push(`<!---->`);
	_push(`</div><div class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)([{
		"special-comment": $options.fetched && $props.comment.type !== 0,
		"hidden-comment": $props.comment.hidden && !$data.forceShow
	}, "content-block"])}" data-v-dbf6482e>`);
	if (!$options.fetched || !$props.comment.hidden || $data.forceShow || $props.comment.type !== 0) {
		_push(`<!--[-->`);
		if ($data.showRaw) _push(`<div class="wiki-raw" data-v-dbf6482e>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)($data.rawContent)}</div>`);
		else if ($props.comment.contentHtml) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_WikiContent, {
			discuss: "",
			content: $props.comment.contentHtml
		}, null, _parent));
		else _push(`<!---->`);
		if ($data.forceShow && $props.comment.hidden) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedButton, {
			onClick: ($event) => $data.forceShow = false,
			danger: ""
		}, {
			default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
				if (_push) _push(`[ADMIN] HIDE`);
				else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)("[ADMIN] HIDE")];
			}),
			_: 1
		}, _parent));
		else _push(`<!---->`);
		_push(`<!--]-->`);
	} else {
		_push(`<!--[--> [`);
		_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_i18next, { translation: _ctx.$t("components.comment.hidden_comment") }, {
			hideUser: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
				if (_push) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_AuthorSpan, {
					account: $props.comment.hideUser,
					pos: $options.pos,
					discuss: "",
					discussAdmin: !!($props.comment.hideUser.flags & 32)
				}, null, _parent, _scopeId));
				else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_AuthorSpan, {
					account: $props.comment.hideUser,
					pos: $options.pos,
					discuss: "",
					discussAdmin: !!($props.comment.hideUser.flags & 32)
				}, null, 8, [
					"account",
					"pos",
					"discussAdmin"
				])];
			}),
			_: 1
		}, _parent));
		_push(`] `);
		if (_ctx.data.permissions.manage) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedButton, {
			onClick: ($event) => $data.forceShow = true,
			danger: ""
		}, {
			default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
				if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("components.comment.force_show"))}`);
				else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("components.comment.force_show")), 1)];
			}),
			_: 1
		}, _parent));
		else _push(`<!---->`);
		_push(`<!--]-->`);
	}
	_push(`</div></div></div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = (0, require__plugin_vue_export_helper.vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/comment.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var comment_default = /*#__PURE__*/ require__plugin_vue_export_helper._plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-dbf6482e"]]);
//#endregion
Object.defineProperty(exports, "comment_default", {
	enumerable: true,
	get: function() {
		return comment_default;
	}
});
