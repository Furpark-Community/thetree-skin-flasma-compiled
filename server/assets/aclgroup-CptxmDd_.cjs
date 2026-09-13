const require__plugin_vue_export_helper = require("./_plugin-vue_export-helper-C1TPHJvg.cjs");
const require_server = require("../server.cjs");
const require_seedForm = require("./seedForm-DLpXnK6K.cjs");
const require_showError = require("./showError-A8EkGqzL.cjs");
const require_durationSelector = require("./durationSelector-GzZYxaRv.cjs");
const require_seedButton = require("./seedButton-CbrSfLgh.cjs");
const require_prevNextBtn = require("./prevNextBtn-BuquZ4_C.cjs");
const require_heading = require("./heading-CgAmXkAX.cjs");
//#region src/views/contents/admin/aclgroup.vue
var _sfc_main = {
	components: {
		Modal: require_server.modal_default,
		Heading: require_heading.heading_default,
		LocalDate: require_server.localDate_default,
		PrevNextBtn: require_prevNextBtn.prevNextBtn_default,
		SeedButton: require_seedButton.seedButton_default,
		DurationSelector: require_durationSelector.durationSelector_default,
		ShowError: require_showError.showError_default,
		SeedForm: require_seedForm.seedForm_default,
		NuxtLink: require_server.nuxtLink_default
	},
	data() {
		return {
			mode: "ip",
			ip: "",
			username: "",
			showCreateModal: false,
			removeModal: {
				show: false,
				uuid: "",
				id: 0
			}
		};
	},
	computed: { pageProps() {
		const prevItem = this.data.prevItem;
		const nextItem = this.data.nextItem;
		return {
			prev: prevItem ? { query: {
				name: this.data.selectedGroup.name,
				until: prevItem
			} } : null,
			next: nextItem ? { query: {
				name: this.data.selectedGroup.name,
				from: nextItem
			} } : null
		};
	} },
	methods: {
		goConfirm() {
			return confirm("go?");
		},
		openRemoveModal(item) {
			this.removeModal.uuid = item.uuid;
			this.removeModal.id = item.id;
			this.removeModal.show = true;
		},
		closeModal() {
			this.$vfm.hideAll();
		}
	}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_NuxtLink = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("NuxtLink");
	const _component_FontAwesomeIcon = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("FontAwesomeIcon");
	const _component_SeedForm = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("SeedForm");
	const _component_ShowError = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("ShowError");
	const _component_DurationSelector = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("DurationSelector");
	const _component_SeedButton = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("SeedButton");
	const _component_PrevNextBtn = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("PrevNextBtn");
	const _component_LocalDate = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("LocalDate");
	const _component_Modal = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("Modal");
	_push(`<!--[--><ul data-v-84492d08><!--[-->`);
	(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderList)(_ctx.data.aclGroups, (item) => {
		_push(`<li data-v-84492d08>`);
		_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_NuxtLink, {
			to: { query: { group: item.name } },
			class: { active: _ctx.data.selectedGroup.uuid === item.uuid }
		}, {
			default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
				if (_push) {
					_push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(item.name)}`);
					if (item.managable) {
						_push(`<button data-v-84492d08${_scopeId}>`);
						_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_FontAwesomeIcon, {
							class: "gear-icon",
							icon: "gear"
						}, null, _parent, _scopeId));
						_push(`</button>`);
					} else _push(`<!---->`);
				} else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(item.name), 1), item.managable ? ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)("button", {
					key: 0,
					onClick: (0, require__plugin_vue_export_helper.vue_exports.withModifiers)(($event) => _ctx.$store.state.components.mainView.routerPush({
						path: "/aclgroup/group_manage",
						query: { name: item.name }
					}), ["prevent"])
				}, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_FontAwesomeIcon, {
					class: "gear-icon",
					icon: "gear"
				})], 8, ["onClick"])) : (0, require__plugin_vue_export_helper.vue_exports.createCommentVNode)("", true)];
			}),
			_: 2
		}, _parent));
		_push(`</li>`);
	});
	_push(`<!--]-->`);
	if (_ctx.data.permissions.aclgroup) _push(`<li data-v-84492d08><button data-v-84492d08>+</button></li>`);
	else _push(`<!---->`);
	_push(`</ul>`);
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedForm, {
		class: "add-form",
		method: "post",
		action: "/aclgroup"
	}, {
		default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push(`<input type="hidden" name="group"${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttr)("value", _ctx.data.selectedGroup?.uuid)} data-v-84492d08${_scopeId}><div class="form-block" data-v-84492d08${_scopeId}><select name="mode" data-v-84492d08${_scopeId}><option value="ip" data-v-84492d08${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrIncludeBooleanAttr)(Array.isArray($data.mode) ? (0, require__plugin_vue_export_helper.server_renderer_exports.ssrLooseContain)($data.mode, "ip") : (0, require__plugin_vue_export_helper.server_renderer_exports.ssrLooseEqual)($data.mode, "ip")) ? " selected" : ""}${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.aclgroup.mode.ip"))}</option><option value="username" data-v-84492d08${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrIncludeBooleanAttr)(Array.isArray($data.mode) ? (0, require__plugin_vue_export_helper.server_renderer_exports.ssrLooseContain)($data.mode, "username") : (0, require__plugin_vue_export_helper.server_renderer_exports.ssrLooseEqual)($data.mode, "username")) ? " selected" : ""}${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.aclgroup.mode.username"))}</option></select>`);
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_ShowError, { tag: "mode" }, null, _parent, _scopeId));
				if ($data.mode === "ip") _push(`<input type="text" name="ip"${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttr)("value", $data.ip)} placeholder="CIDR" data-v-84492d08${_scopeId}>`);
				else _push(`<input type="text" name="username"${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttr)("value", $data.username)}${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttr)("placeholder", _ctx.$t("views.aclgroup.mode.username"))} data-v-84492d08${_scopeId}>`);
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_ShowError, { tag: $data.mode }, null, _parent, _scopeId));
				_push(`</div><div class="form-block" data-v-84492d08${_scopeId}><label for="noteInput" data-v-84492d08${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.aclgroup.note"))}</label><input type="text" id="noteInput" name="note" data-v-84492d08${_scopeId}>`);
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_ShowError, { tag: "note" }, null, _parent, _scopeId));
				_push(`</div><div class="form-block" data-v-84492d08${_scopeId}><label data-v-84492d08${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.aclgroup.duration"))}</label>`);
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_DurationSelector, { name: "duration" }, null, _parent, _scopeId));
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_ShowError, { tag: "duration" }, null, _parent, _scopeId));
				_push(`</div>`);
				if (_ctx.data.permissions.hidelog) {
					_push(`<div class="form-block" data-v-84492d08${_scopeId}><label for="hidelogInput" data-v-84492d08${_scopeId}>hidelog :</label><input type="checkbox" id="hidelogInput" name="hidelog" value="Y" data-v-84492d08${_scopeId}>`);
					_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_ShowError, { tag: "hidelog" }, null, _parent, _scopeId));
					_push(`</div>`);
				} else _push(`<!---->`);
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedButton, {
					disabled: !_ctx.data.addable,
					submit: ""
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.aclgroup.add"))}`);
						else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.aclgroup.add")), 1)];
					}),
					_: 1
				}, _parent, _scopeId));
			} else return [
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("input", {
					type: "hidden",
					name: "group",
					value: _ctx.data.selectedGroup?.uuid
				}, null, 8, ["value"]),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: "form-block" }, [
					(0, require__plugin_vue_export_helper.vue_exports.withDirectives)((0, require__plugin_vue_export_helper.vue_exports.createVNode)("select", {
						name: "mode",
						"onUpdate:modelValue": ($event) => $data.mode = $event
					}, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("option", { value: "ip" }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.aclgroup.mode.ip")), 1), (0, require__plugin_vue_export_helper.vue_exports.createVNode)("option", { value: "username" }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.aclgroup.mode.username")), 1)], 8, ["onUpdate:modelValue"]), [[require__plugin_vue_export_helper.vue_exports.vModelSelect, $data.mode]]),
					(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_ShowError, { tag: "mode" }),
					$data.mode === "ip" ? (0, require__plugin_vue_export_helper.vue_exports.withDirectives)(((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)("input", {
						key: 0,
						type: "text",
						name: "ip",
						"onUpdate:modelValue": ($event) => $data.ip = $event,
						placeholder: "CIDR"
					}, null, 8, ["onUpdate:modelValue"])), [[require__plugin_vue_export_helper.vue_exports.vModelText, $data.ip]]) : (0, require__plugin_vue_export_helper.vue_exports.withDirectives)(((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)("input", {
						key: 1,
						type: "text",
						name: "username",
						"onUpdate:modelValue": ($event) => $data.username = $event,
						placeholder: _ctx.$t("views.aclgroup.mode.username")
					}, null, 8, ["onUpdate:modelValue", "placeholder"])), [[require__plugin_vue_export_helper.vue_exports.vModelText, $data.username]]),
					(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_ShowError, { tag: $data.mode }, null, 8, ["tag"])
				]),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: "form-block" }, [
					(0, require__plugin_vue_export_helper.vue_exports.createVNode)("label", { for: "noteInput" }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.aclgroup.note")), 1),
					(0, require__plugin_vue_export_helper.vue_exports.createVNode)("input", {
						type: "text",
						id: "noteInput",
						name: "note"
					}),
					(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_ShowError, { tag: "note" })
				]),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: "form-block" }, [
					(0, require__plugin_vue_export_helper.vue_exports.createVNode)("label", null, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.aclgroup.duration")), 1),
					(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_DurationSelector, { name: "duration" }),
					(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_ShowError, { tag: "duration" })
				]),
				_ctx.data.permissions.hidelog ? ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)("div", {
					key: 0,
					class: "form-block"
				}, [
					(0, require__plugin_vue_export_helper.vue_exports.createVNode)("label", { for: "hidelogInput" }, "hidelog :"),
					(0, require__plugin_vue_export_helper.vue_exports.createVNode)("input", {
						type: "checkbox",
						id: "hidelogInput",
						name: "hidelog",
						value: "Y"
					}),
					(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_ShowError, { tag: "hidelog" })
				])) : (0, require__plugin_vue_export_helper.vue_exports.createCommentVNode)("", true),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedButton, {
					disabled: !_ctx.data.addable,
					submit: ""
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.aclgroup.add")), 1)]),
					_: 1
				}, 8, ["disabled"])
			];
		}),
		_: 1
	}, _parent));
	if (_ctx.data.selectedGroup) {
		_push(`<!--[-->`);
		_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_PrevNextBtn, (0, require__plugin_vue_export_helper.vue_exports.mergeProps)({ flex: "" }, $options.pageProps), null, _parent));
		_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedForm, { class: "id-input-form" }, {
			default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
				if (_push) {
					_push(`<div class="form-block" data-v-84492d08${_scopeId}><input type="hidden" name="group"${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttr)("value", _ctx.data.selectedGroup?.name)} data-v-84492d08${_scopeId}><input type="text" name="from" placeholder="ID" data-v-84492d08${_scopeId}>`);
					_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedButton, { submit: "" }, {
						default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
							if (_push) _push(`Go`);
							else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)("Go")];
						}),
						_: 1
					}, _parent, _scopeId));
					_push(`</div>`);
				} else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: "form-block" }, [
					(0, require__plugin_vue_export_helper.vue_exports.createVNode)("input", {
						type: "hidden",
						name: "group",
						value: _ctx.data.selectedGroup?.name
					}, null, 8, ["value"]),
					(0, require__plugin_vue_export_helper.vue_exports.createVNode)("input", {
						type: "text",
						name: "from",
						placeholder: "ID"
					}),
					(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedButton, { submit: "" }, {
						default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)("Go")]),
						_: 1
					})
				])];
			}),
			_: 1
		}, _parent));
		_push(`<table data-v-84492d08><colgroup data-v-84492d08><col style="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderStyle)({ "width": "150px" })}" data-v-84492d08><col style="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderStyle)({ "width": "150px" })}" data-v-84492d08><col data-v-84492d08><col style="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderStyle)({ "width": "200px" })}" data-v-84492d08><col style="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderStyle)({ "width": "160px" })}" data-v-84492d08><col style="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderStyle)({ "width": "60px" })}" data-v-84492d08></colgroup><thead data-v-84492d08><tr data-v-84492d08><th data-v-84492d08>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.aclgroup.table.id"))}</th><th data-v-84492d08>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.aclgroup.table.target"))}</th><th data-v-84492d08>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.aclgroup.table.note"))}</th><th data-v-84492d08>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.aclgroup.table.date"))}</th><th data-v-84492d08>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.aclgroup.table.expiry"))}</th><th data-v-84492d08>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.aclgroup.table.action"))}</th></tr></thead><tbody data-v-84492d08>`);
		if (_ctx.data.groupItems.length) {
			_push(`<!--[-->`);
			(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderList)(_ctx.data.groupItems, (item) => {
				_push(`<tr data-v-84492d08><td data-v-84492d08>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(item.id)}</td><td data-v-84492d08>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(item.user?.name || item.ip || item.user?.uuid)}</td><td data-v-84492d08>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(item.note)}</td><td data-v-84492d08>`);
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_LocalDate, { date: item.createdAt }, null, _parent));
				_push(`</td><td data-v-84492d08>`);
				if (item.expiresAt) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_LocalDate, { date: item.expiresAt }, null, _parent));
				else _push(`<!--[-->${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.aclgroup.forever"))}<!--]-->`);
				_push(`</td><td data-v-84492d08>`);
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedButton, {
					disabled: !_ctx.data.removable,
					danger: "",
					onClick: ($event) => $options.openRemoveModal(item)
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.aclgroup.delete"))}`);
						else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.aclgroup.delete")), 1)];
					}),
					_: 2
				}, _parent));
				_push(`</td></tr>`);
			});
			_push(`<!--]-->`);
		} else _push(`<tr data-v-84492d08><td colspan="5" data-v-84492d08>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.aclgroup.table.empty"))}</td></tr>`);
		_push(`</tbody></table>`);
		_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_PrevNextBtn, (0, require__plugin_vue_export_helper.vue_exports.mergeProps)({ flex: "" }, $options.pageProps), null, _parent));
		_push(`<!--]-->`);
	} else _push(`<!---->`);
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_Modal, {
		modelValue: $data.showCreateModal,
		"onUpdate:modelValue": ($event) => $data.showCreateModal = $event,
		class: "aclgroup-modal"
	}, {
		default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((props, _push, _parent, _scopeId) => {
			if (_push) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedForm, {
				beforeSubmit: $options.goConfirm,
				afterSubmit: $options.closeModal,
				method: "post",
				action: "/aclgroup/group_add"
			}, {
				default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<h4 data-v-84492d08${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.aclgroup.group_add_modal.title"))}</h4><div data-v-84492d08${_scopeId}><p data-v-84492d08${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.aclgroup.group_add_modal.group_name"))}</p><input type="text" name="name" data-v-84492d08${_scopeId}>`);
						_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_ShowError, { tag: "name" }, null, _parent, _scopeId));
						_push(`</div><div class="button-block" data-v-84492d08${_scopeId}>`);
						_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedButton, {
							large: "",
							submit: ""
						}, {
							default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
								if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.aclgroup.group_add_modal.submit"))}`);
								else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.aclgroup.group_add_modal.submit")), 1)];
							}),
							_: 2
						}, _parent, _scopeId));
						_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedButton, {
							large: "",
							type: "button",
							onClick: props.close
						}, {
							default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
								if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.aclgroup.group_add_modal.cancel"))}`);
								else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.aclgroup.group_add_modal.cancel")), 1)];
							}),
							_: 2
						}, _parent, _scopeId));
						_push(`</div>`);
					} else return [
						(0, require__plugin_vue_export_helper.vue_exports.createVNode)("h4", null, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.aclgroup.group_add_modal.title")), 1),
						(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", null, [
							(0, require__plugin_vue_export_helper.vue_exports.createVNode)("p", null, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.aclgroup.group_add_modal.group_name")), 1),
							(0, require__plugin_vue_export_helper.vue_exports.createVNode)("input", {
								type: "text",
								name: "name"
							}),
							(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_ShowError, { tag: "name" })
						]),
						(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: "button-block" }, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedButton, {
							large: "",
							submit: ""
						}, {
							default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.aclgroup.group_add_modal.submit")), 1)]),
							_: 1
						}), (0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedButton, {
							large: "",
							type: "button",
							onClick: props.close
						}, {
							default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.aclgroup.group_add_modal.cancel")), 1)]),
							_: 1
						}, 8, ["onClick"])])
					];
				}),
				_: 2
			}, _parent, _scopeId));
			else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedForm, {
				beforeSubmit: $options.goConfirm,
				afterSubmit: $options.closeModal,
				method: "post",
				action: "/aclgroup/group_add"
			}, {
				default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [
					(0, require__plugin_vue_export_helper.vue_exports.createVNode)("h4", null, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.aclgroup.group_add_modal.title")), 1),
					(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", null, [
						(0, require__plugin_vue_export_helper.vue_exports.createVNode)("p", null, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.aclgroup.group_add_modal.group_name")), 1),
						(0, require__plugin_vue_export_helper.vue_exports.createVNode)("input", {
							type: "text",
							name: "name"
						}),
						(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_ShowError, { tag: "name" })
					]),
					(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: "button-block" }, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedButton, {
						large: "",
						submit: ""
					}, {
						default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.aclgroup.group_add_modal.submit")), 1)]),
						_: 1
					}), (0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedButton, {
						large: "",
						type: "button",
						onClick: props.close
					}, {
						default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.aclgroup.group_add_modal.cancel")), 1)]),
						_: 1
					}, 8, ["onClick"])])
				]),
				_: 2
			}, 1032, ["beforeSubmit", "afterSubmit"])];
		}),
		_: 1
	}, _parent));
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_Modal, {
		modelValue: $data.removeModal.show,
		"onUpdate:modelValue": ($event) => $data.removeModal.show = $event,
		class: "aclgroup-modal"
	}, {
		default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((props, _push, _parent, _scopeId) => {
			if (_push) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedForm, {
				afterSubmit: $options.closeModal,
				method: "post",
				action: "/aclgroup/remove"
			}, {
				default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<input type="hidden" name="uuid"${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttr)("value", $data.removeModal.uuid)} data-v-84492d08${_scopeId}><input type="hidden" name="group"${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttr)("value", _ctx.data.selectedGroup?.uuid)} data-v-84492d08${_scopeId}><h4 data-v-84492d08${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.aclgroup.remove_modal.title"))}</h4><div data-v-84492d08${_scopeId}><p data-v-84492d08${_scopeId}>ID:</p><span data-v-84492d08${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)($data.removeModal.id)}</span></div><div data-v-84492d08${_scopeId}><p data-v-84492d08${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.aclgroup.remove_modal.note"))}</p><input type="text" name="note" data-v-84492d08${_scopeId}>`);
						_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_ShowError, { tag: "note" }, null, _parent, _scopeId));
						_push(`</div>`);
						if (_ctx.data.permissions.hidelog) _push(`<div class="form-block" data-v-84492d08${_scopeId}><p data-v-84492d08${_scopeId}>hidelog:</p><input type="checkbox" name="hidelog" value="Y" data-v-84492d08${_scopeId}></div>`);
						else _push(`<!---->`);
						_push(`<div class="button-block" data-v-84492d08${_scopeId}>`);
						_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedButton, {
							large: "",
							submit: ""
						}, {
							default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
								if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.aclgroup.remove_modal.delete"))}`);
								else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.aclgroup.remove_modal.delete")), 1)];
							}),
							_: 2
						}, _parent, _scopeId));
						_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedButton, {
							large: "",
							type: "button",
							onClick: props.close
						}, {
							default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
								if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.aclgroup.remove_modal.cancel"))}`);
								else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.aclgroup.remove_modal.cancel")), 1)];
							}),
							_: 2
						}, _parent, _scopeId));
						_push(`</div>`);
					} else return [
						(0, require__plugin_vue_export_helper.vue_exports.createVNode)("input", {
							type: "hidden",
							name: "uuid",
							value: $data.removeModal.uuid
						}, null, 8, ["value"]),
						(0, require__plugin_vue_export_helper.vue_exports.createVNode)("input", {
							type: "hidden",
							name: "group",
							value: _ctx.data.selectedGroup?.uuid
						}, null, 8, ["value"]),
						(0, require__plugin_vue_export_helper.vue_exports.createVNode)("h4", null, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.aclgroup.remove_modal.title")), 1),
						(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", null, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("p", null, "ID:"), (0, require__plugin_vue_export_helper.vue_exports.createVNode)("span", null, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)($data.removeModal.id), 1)]),
						(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", null, [
							(0, require__plugin_vue_export_helper.vue_exports.createVNode)("p", null, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.aclgroup.remove_modal.note")), 1),
							(0, require__plugin_vue_export_helper.vue_exports.createVNode)("input", {
								type: "text",
								name: "note"
							}),
							(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_ShowError, { tag: "note" })
						]),
						_ctx.data.permissions.hidelog ? ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)("div", {
							key: 0,
							class: "form-block"
						}, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("p", null, "hidelog:"), (0, require__plugin_vue_export_helper.vue_exports.createVNode)("input", {
							type: "checkbox",
							name: "hidelog",
							value: "Y"
						})])) : (0, require__plugin_vue_export_helper.vue_exports.createCommentVNode)("", true),
						(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: "button-block" }, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedButton, {
							large: "",
							submit: ""
						}, {
							default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.aclgroup.remove_modal.delete")), 1)]),
							_: 1
						}), (0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedButton, {
							large: "",
							type: "button",
							onClick: props.close
						}, {
							default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.aclgroup.remove_modal.cancel")), 1)]),
							_: 1
						}, 8, ["onClick"])])
					];
				}),
				_: 2
			}, _parent, _scopeId));
			else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedForm, {
				afterSubmit: $options.closeModal,
				method: "post",
				action: "/aclgroup/remove"
			}, {
				default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [
					(0, require__plugin_vue_export_helper.vue_exports.createVNode)("input", {
						type: "hidden",
						name: "uuid",
						value: $data.removeModal.uuid
					}, null, 8, ["value"]),
					(0, require__plugin_vue_export_helper.vue_exports.createVNode)("input", {
						type: "hidden",
						name: "group",
						value: _ctx.data.selectedGroup?.uuid
					}, null, 8, ["value"]),
					(0, require__plugin_vue_export_helper.vue_exports.createVNode)("h4", null, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.aclgroup.remove_modal.title")), 1),
					(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", null, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("p", null, "ID:"), (0, require__plugin_vue_export_helper.vue_exports.createVNode)("span", null, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)($data.removeModal.id), 1)]),
					(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", null, [
						(0, require__plugin_vue_export_helper.vue_exports.createVNode)("p", null, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.aclgroup.remove_modal.note")), 1),
						(0, require__plugin_vue_export_helper.vue_exports.createVNode)("input", {
							type: "text",
							name: "note"
						}),
						(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_ShowError, { tag: "note" })
					]),
					_ctx.data.permissions.hidelog ? ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)("div", {
						key: 0,
						class: "form-block"
					}, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("p", null, "hidelog:"), (0, require__plugin_vue_export_helper.vue_exports.createVNode)("input", {
						type: "checkbox",
						name: "hidelog",
						value: "Y"
					})])) : (0, require__plugin_vue_export_helper.vue_exports.createCommentVNode)("", true),
					(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: "button-block" }, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedButton, {
						large: "",
						submit: ""
					}, {
						default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.aclgroup.remove_modal.delete")), 1)]),
						_: 1
					}), (0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedButton, {
						large: "",
						type: "button",
						onClick: props.close
					}, {
						default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.aclgroup.remove_modal.cancel")), 1)]),
						_: 1
					}, 8, ["onClick"])])
				]),
				_: 2
			}, 1032, ["afterSubmit"])];
		}),
		_: 1
	}, _parent));
	_push(`<!--]-->`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = (0, require__plugin_vue_export_helper.vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/contents/admin/aclgroup.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var aclgroup_default = /*#__PURE__*/ require__plugin_vue_export_helper._plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-84492d08"]]);
//#endregion
exports.default = aclgroup_default;
