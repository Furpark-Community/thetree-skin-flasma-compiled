const require__plugin_vue_export_helper = require("./_plugin-vue_export-helper-C1TPHJvg.cjs");
const require_server = require("../server.cjs");
const require_seedForm = require("./seedForm-DLpXnK6K.cjs");
const require_loading = require("./loading-BhmGmpK-.cjs");
const require_seedButton = require("./seedButton-CbrSfLgh.cjs");
const require_authorSpan = require("./authorSpan-Cr3XG9VP.cjs");
const require_diff = require("./diff-BCMxBxY-.cjs");
const require_wikiContent = require("./wikiContent-DOztl5qm.cjs");
const require_diffCount = require("./diffCount-BJeKwZXu.cjs");
//#region src/views/contents/document/editRequest.vue
var _sfc_main = {
	mixins: [require_server.common_default],
	directives: { tooltip: require_authorSpan.Mt },
	components: {
		Modal: require_server.modal_default,
		NuxtLink: require_server.nuxtLink_default,
		Diff: require_diff.diff_default,
		Loading: require_loading.loading_default,
		SeedLinkButton: require_server.seedLinkButton_default,
		WikiContent: require_wikiContent.wikiContent_default,
		SeedButton: require_seedButton.seedButton_default,
		SeedForm: require_seedForm.seedForm_default,
		DiffCount: require_diffCount.diffCount_default,
		LocalDate: require_server.localDate_default,
		AuthorSpan: require_authorSpan.authorSpan_default
	},
	data() {
		return {
			showCloseModal: false,
			activeTab: "compare",
			preview: {
				content: null,
				categories: null
			}
		};
	},
	computed: {
		editRequest() {
			return this.data.editRequest;
		},
		pos() {
			return this.$t("document.edit_request") + this.editRequest.url;
		},
		acceptTooltip() {
			return this.data.conflict ? this.$t("views.edit_request.accept_tooltip_conflict") : this.data.editable ? this.$t("views.edit_request.accept_tooltip") : this.$t("views.edit_request.accept_tooltip_missing_perm");
		},
		closeTooltip() {
			return this.data.selfCreated || this.data.editable || this.data.permissions.status ? this.$t("views.edit_request.close_tooltip") : this.$t("views.edit_request.close_tooltip_missing_perm");
		},
		editTooltip() {
			return this.data.selfCreated ? this.$t("views.edit_request.edit_tooltip") : this.$t("views.edit_request.edit_tooltip_not_self");
		},
		reopenInfo() {
			let disabled = false;
			let tooltip = this.$t("views.edit_request.reopen_tooltip");
			const updateThreadStatusPerm = this.data.permissions.status;
			if (this.editRequest.status === 3) {
				if (!updateThreadStatusPerm) {
					disabled = true;
					tooltip = this.$t("views.edit_request.reopen_tooltip_locked");
				}
			} else if (!this.data.selfCreated && !updateThreadStatusPerm) {
				disabled = true;
				tooltip = this.$t("views.edit_request.reopen_tooltip_missing_perm");
			}
			return {
				disabled,
				tooltip
			};
		}
	},
	watch: { activeTab(newValue) {
		if (newValue === "preview") this.loadPreview();
	} },
	methods: {
		async loadPreview() {
			this.preview.content = null;
			this.preview.categories = null;
			const res = await this.internalRequest(this.doc_action_link(this.data.document, "preview"), {
				method: "POST",
				headers: { "Content-Type": "application/x-www-form-urlencoded" },
				body: new URLSearchParams({ content: this.editRequest.content }).toString(),
				noProgress: true
			});
			this.preview.content = res.contentHtml;
			this.preview.categories = res.categories;
		},
		afterCloseSubmit() {
			this.showCloseModal = false;
		}
	}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_i18next = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("i18next");
	const _component_AuthorSpan = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("AuthorSpan");
	const _component_LocalDate = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("LocalDate");
	const _component_DiffCount = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("DiffCount");
	const _component_Modal = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("Modal");
	const _component_SeedForm = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("SeedForm");
	const _component_SeedButton = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("SeedButton");
	const _component_WikiContent = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("WikiContent");
	const _component_SeedLinkButton = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("SeedLinkButton");
	const _component_NuxtLink = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("NuxtLink");
	const _component_Diff = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("Diff");
	const _component_Loading = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("Loading");
	const _directive_tooltip = (0, require__plugin_vue_export_helper.vue_exports.resolveDirective)("tooltip");
	_push(`<!--[--><h3 data-v-510b3803>`);
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_i18next, { translation: _ctx.$t("views.edit_request.name_and_date") }, {
		createdUser: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
			if (_push) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_AuthorSpan, {
				account: $options.editRequest.createdUser,
				pos: $options.pos
			}, null, _parent, _scopeId));
			else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_AuthorSpan, {
				account: $options.editRequest.createdUser,
				pos: $options.pos
			}, null, 8, ["account", "pos"])];
		}),
		createdAt: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
			if (_push) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_LocalDate, { date: $options.editRequest.createdAt }, null, _parent, _scopeId));
			else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_LocalDate, { date: $options.editRequest.createdAt }, null, 8, ["date"])];
		}),
		_: 1
	}, _parent));
	_push(`</h3><hr data-v-510b3803><div class="margin-block" data-v-510b3803><label data-v-510b3803>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.edit_request.base_rev"))}</label> r${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.data.baseRev.rev)} `);
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_DiffCount, { count: $options.editRequest.diffLength }, null, _parent));
	_push(`</div><div class="margin-block" data-v-510b3803><label data-v-510b3803>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.edit_request.log"))}</label> ${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)($options.editRequest.log)}</div>`);
	if ($options.editRequest.status === 0) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_Modal, {
		modelValue: $data.showCloseModal,
		"onUpdate:modelValue": ($event) => $data.showCloseModal = $event,
		classes: "close-modal"
	}, {
		default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((props, _push, _parent, _scopeId) => {
			if (_push) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedForm, {
				method: "post",
				action: "/edit_request/" + $options.editRequest.url + "/close",
				afterSubmit: $options.afterCloseSubmit
			}, {
				default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<h4 data-v-510b3803${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.edit_request.close_modal.title"))}</h4><div data-v-510b3803${_scopeId}><p data-v-510b3803${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.edit_request.reason"))}:</p><input type="text" name="close_reason" data-v-510b3803${_scopeId}></div>`);
						if (_ctx.data.permissions.status) _push(`<div data-v-510b3803${_scopeId}><p data-v-510b3803${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.edit_request.close_modal.lock"))}</p><input type="checkbox" name="lock" value="Y" data-v-510b3803${_scopeId}></div>`);
						else _push(`<!---->`);
						_push(`<div class="button-block" data-v-510b3803${_scopeId}>`);
						_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedButton, {
							submit: "",
							large: ""
						}, {
							default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
								if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.edit_request.close_modal.close"))}`);
								else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.edit_request.close_modal.close")), 1)];
							}),
							_: 2
						}, _parent, _scopeId));
						_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedButton, {
							type: "button",
							large: "",
							onClick: props.close
						}, {
							default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
								if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.edit_request.close_modal.cancel"))}`);
								else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.edit_request.close_modal.cancel")), 1)];
							}),
							_: 2
						}, _parent, _scopeId));
						_push(`</div>`);
					} else return [
						(0, require__plugin_vue_export_helper.vue_exports.createVNode)("h4", null, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.edit_request.close_modal.title")), 1),
						(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", null, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("p", null, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.edit_request.reason")) + ":", 1), (0, require__plugin_vue_export_helper.vue_exports.createVNode)("input", {
							type: "text",
							name: "close_reason"
						})]),
						_ctx.data.permissions.status ? ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)("div", { key: 0 }, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("p", null, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.edit_request.close_modal.lock")), 1), (0, require__plugin_vue_export_helper.vue_exports.createVNode)("input", {
							type: "checkbox",
							name: "lock",
							value: "Y"
						})])) : (0, require__plugin_vue_export_helper.vue_exports.createCommentVNode)("", true),
						(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: "button-block" }, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedButton, {
							submit: "",
							large: ""
						}, {
							default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.edit_request.close_modal.close")), 1)]),
							_: 1
						}), (0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedButton, {
							type: "button",
							large: "",
							onClick: props.close
						}, {
							default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.edit_request.close_modal.cancel")), 1)]),
							_: 1
						}, 8, ["onClick"])])
					];
				}),
				_: 2
			}, _parent, _scopeId));
			else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedForm, {
				method: "post",
				action: "/edit_request/" + $options.editRequest.url + "/close",
				afterSubmit: $options.afterCloseSubmit
			}, {
				default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [
					(0, require__plugin_vue_export_helper.vue_exports.createVNode)("h4", null, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.edit_request.close_modal.title")), 1),
					(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", null, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("p", null, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.edit_request.reason")) + ":", 1), (0, require__plugin_vue_export_helper.vue_exports.createVNode)("input", {
						type: "text",
						name: "close_reason"
					})]),
					_ctx.data.permissions.status ? ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)("div", { key: 0 }, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("p", null, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.edit_request.close_modal.lock")), 1), (0, require__plugin_vue_export_helper.vue_exports.createVNode)("input", {
						type: "checkbox",
						name: "lock",
						value: "Y"
					})])) : (0, require__plugin_vue_export_helper.vue_exports.createCommentVNode)("", true),
					(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: "button-block" }, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedButton, {
						submit: "",
						large: ""
					}, {
						default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.edit_request.close_modal.close")), 1)]),
						_: 1
					}), (0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedButton, {
						type: "button",
						large: "",
						onClick: props.close
					}, {
						default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.edit_request.close_modal.cancel")), 1)]),
						_: 1
					}, 8, ["onClick"])])
				]),
				_: 2
			}, 1032, ["action", "afterSubmit"])];
		}),
		_: 1
	}, _parent));
	else _push(`<!---->`);
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_WikiContent, { content: _ctx.data.contentHtml }, null, _parent));
	_push(`<div class="action-block" data-v-510b3803>`);
	if ($options.editRequest.status === 0) {
		_push(`<div data-v-510b3803><h4 data-v-510b3803>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.edit_request.this_edit_request"))}</h4><div data-v-510b3803>`);
		_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_i18next, { translation: _ctx.$t("views.edit_request.edit_date") }, {
			lastUpdatedAt: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
				if (_push) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_LocalDate, { date: $options.editRequest.lastUpdatedAt }, null, _parent, _scopeId));
				else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_LocalDate, { date: $options.editRequest.lastUpdatedAt }, null, 8, ["date"])];
			}),
			_: 1
		}, _parent));
		_push(`</div><div class="button-block" data-v-510b3803>`);
		_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedForm, {
			method: "post",
			action: "/edit_request/" + $options.editRequest.url + "/accept"
		}, {
			default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
				if (_push) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedButton, (0, require__plugin_vue_export_helper.vue_exports.mergeProps)({
					green: "",
					large: "",
					disabled: _ctx.data.conflict || !_ctx.data.editable
				}, (0, require__plugin_vue_export_helper.server_renderer_exports.ssrGetDirectiveProps)(_ctx, _directive_tooltip, $options.acceptTooltip)), {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push(`Accept`);
						else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)("Accept")];
					}),
					_: 1
				}, _parent, _scopeId));
				else return [(0, require__plugin_vue_export_helper.vue_exports.withDirectives)(((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(_component_SeedButton, {
					green: "",
					large: "",
					disabled: _ctx.data.conflict || !_ctx.data.editable
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)("Accept")]),
					_: 1
				}, 8, ["disabled"])), [[_directive_tooltip, $options.acceptTooltip]])];
			}),
			_: 1
		}, _parent));
		_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedButton, (0, require__plugin_vue_export_helper.vue_exports.mergeProps)({
			onClick: ($event) => $data.showCloseModal = true,
			large: "",
			disabled: !_ctx.data.editable && !_ctx.data.selfCreated && !_ctx.data.permissions.status
		}, (0, require__plugin_vue_export_helper.server_renderer_exports.ssrGetDirectiveProps)(_ctx, _directive_tooltip, $options.closeTooltip)), {
			default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
				if (_push) _push(`Close`);
				else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)("Close")];
			}),
			_: 1
		}, _parent));
		_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedLinkButton, (0, require__plugin_vue_export_helper.vue_exports.mergeProps)({
			info: "",
			large: "",
			to: "/edit_request/" + $options.editRequest.url + "/edit",
			disabled: !_ctx.data.selfCreated
		}, (0, require__plugin_vue_export_helper.server_renderer_exports.ssrGetDirectiveProps)(_ctx, _directive_tooltip, $options.editTooltip)), {
			default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
				if (_push) _push(`Edit`);
				else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)("Edit")];
			}),
			_: 1
		}, _parent));
		_push(`</div></div>`);
	} else if ($options.editRequest.status === 1) {
		_push(`<div data-v-510b3803><h4 data-v-510b3803>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.edit_request.accepted_title"))}</h4><div data-v-510b3803>`);
		_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_i18next, { translation: _ctx.$t("views.edit_request.accepted_description", { rev: $options.editRequest.acceptedRev.rev }) }, {
			lastUpdatedAt: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
				if (_push) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_LocalDate, { date: $options.editRequest.lastUpdatedAt }, null, _parent, _scopeId));
				else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_LocalDate, { date: $options.editRequest.lastUpdatedAt }, null, 8, ["date"])];
			}),
			lastUpdateUser: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
				if (_push) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_AuthorSpan, {
					account: $options.editRequest.lastUpdateUser,
					pos: $options.pos
				}, null, _parent, _scopeId));
				else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_AuthorSpan, {
					account: $options.editRequest.lastUpdateUser,
					pos: $options.pos
				}, null, 8, ["account", "pos"])];
			}),
			action: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
				if (_push) {
					_push(`<span class="history-action" data-v-510b3803${_scopeId}> (`);
					_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_NuxtLink, {
						to: _ctx.doc_action_link(_ctx.data.document, "w", { uuid: $options.editRequest.acceptedRev.uuid }),
						rel: "nofollow"
					}, {
						default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
							if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("document.w"))}`);
							else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("document.w")), 1)];
						}),
						_: 1
					}, _parent, _scopeId));
					_push(` | `);
					_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_NuxtLink, {
						to: _ctx.doc_action_link(_ctx.data.document, "raw", { uuid: $options.editRequest.acceptedRev.uuid }),
						rel: "nofollow"
					}, {
						default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
							if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("document.raw"))}`);
							else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("document.raw")), 1)];
						}),
						_: 1
					}, _parent, _scopeId));
					_push(` | `);
					_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_NuxtLink, {
						to: _ctx.doc_action_link(_ctx.data.document, "diff", { uuid: $options.editRequest.acceptedRev.uuid }),
						rel: "nofollow"
					}, {
						default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
							if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("document.diff"))}`);
							else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("document.diff")), 1)];
						}),
						_: 1
					}, _parent, _scopeId));
					_push(`) </span>`);
				} else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("span", { class: "history-action" }, [
					(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)(" ("),
					(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_NuxtLink, {
						to: _ctx.doc_action_link(_ctx.data.document, "w", { uuid: $options.editRequest.acceptedRev.uuid }),
						rel: "nofollow"
					}, {
						default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("document.w")), 1)]),
						_: 1
					}, 8, ["to"]),
					(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)(" | "),
					(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_NuxtLink, {
						to: _ctx.doc_action_link(_ctx.data.document, "raw", { uuid: $options.editRequest.acceptedRev.uuid }),
						rel: "nofollow"
					}, {
						default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("document.raw")), 1)]),
						_: 1
					}, 8, ["to"]),
					(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)(" | "),
					(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_NuxtLink, {
						to: _ctx.doc_action_link(_ctx.data.document, "diff", { uuid: $options.editRequest.acceptedRev.uuid }),
						rel: "nofollow"
					}, {
						default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("document.diff")), 1)]),
						_: 1
					}, 8, ["to"]),
					(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)(") ")
				])];
			}),
			_: 1
		}, _parent));
		_push(`</div></div>`);
	} else {
		_push(`<div data-v-510b3803><h4 data-v-510b3803>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.edit_request.closed_title"))}</h4><div data-v-510b3803>`);
		_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_i18next, { translation: _ctx.$t(`views.edit_request.${$options.editRequest.status === 3 ? "locked" : "closed"}_description`) }, {
			lastUpdatedAt: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
				if (_push) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_LocalDate, { date: $options.editRequest.lastUpdatedAt }, null, _parent, _scopeId));
				else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_LocalDate, { date: $options.editRequest.lastUpdatedAt }, null, 8, ["date"])];
			}),
			lastUpdateUser: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
				if (_push) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_AuthorSpan, {
					account: $options.editRequest.lastUpdateUser,
					pos: $options.pos
				}, null, _parent, _scopeId));
				else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_AuthorSpan, {
					account: $options.editRequest.lastUpdateUser,
					pos: $options.pos
				}, null, 8, ["account", "pos"])];
			}),
			_: 1
		}, _parent));
		_push(`</div>`);
		if ($options.editRequest.closedReason) _push(`<p data-v-510b3803>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.edit_request.reason"))}: ${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)($options.editRequest.closedReason)}</p>`);
		else _push(`<!---->`);
		_push(`<div class="button-block" data-v-510b3803>`);
		_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedForm, {
			method: "post",
			action: "/edit_request/" + $options.editRequest.url + "/reopen"
		}, {
			default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
				if (_push) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedButton, (0, require__plugin_vue_export_helper.vue_exports.mergeProps)({
					green: "",
					large: "",
					disabled: $options.reopenInfo.disabled
				}, (0, require__plugin_vue_export_helper.server_renderer_exports.ssrGetDirectiveProps)(_ctx, _directive_tooltip, $options.reopenInfo.tooltip)), {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push(`Reopen`);
						else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)("Reopen")];
					}),
					_: 1
				}, _parent, _scopeId));
				else return [(0, require__plugin_vue_export_helper.vue_exports.withDirectives)(((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(_component_SeedButton, {
					green: "",
					large: "",
					disabled: $options.reopenInfo.disabled
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)("Reopen")]),
					_: 1
				}, 8, ["disabled"])), [[_directive_tooltip, $options.reopenInfo.tooltip]])];
			}),
			_: 1
		}, _parent));
		_push(`</div></div>`);
	}
	_push(`</div>`);
	if (_ctx.data.showContent) {
		_push(`<!--[--><ul data-v-510b3803><li data-v-510b3803><button class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)({ active: $data.activeTab === "compare" })}" data-v-510b3803>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.edit_request.compare"))}</button></li><li data-v-510b3803><button class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)({ active: $data.activeTab === "preview" })}" data-v-510b3803>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.edit_request.preview"))}</button></li></ul><div class="tabs" data-v-510b3803><div class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)({ active: $data.activeTab === "compare" })}" data-v-510b3803>`);
		_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_Diff, {
			title: _ctx.$t("views.user_contribution.edit_request_link", { slug: $options.editRequest.url }),
			diffHtml: _ctx.data.diff.diffHtml
		}, null, _parent));
		_push(`</div><div class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)([{
			active: $data.activeTab === "preview",
			loading: !$data.preview.content
		}, "preview-tab"])}" data-v-510b3803>`);
		if ($data.preview.content) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_WikiContent, {
			content: $data.preview.content,
			categories: $data.preview.categories
		}, null, _parent));
		else _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_Loading, null, null, _parent));
		_push(`</div></div><!--]-->`);
	} else _push(`<!---->`);
	_push(`<!--]-->`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = (0, require__plugin_vue_export_helper.vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/contents/document/editRequest.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var editRequest_default = /*#__PURE__*/ require__plugin_vue_export_helper._plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-510b3803"]]);
//#endregion
exports.default = editRequest_default;
