const require__plugin_vue_export_helper = require("./_plugin-vue_export-helper-C1TPHJvg.cjs");
const require_server = require("../server.cjs");
const require_seedForm = require("./seedForm-DLpXnK6K.cjs");
const require_loading = require("./loading-BhmGmpK-.cjs");
const require_seedButton = require("./seedButton-CbrSfLgh.cjs");
const require_formErrorAlert = require("./formErrorAlert-l3UJhtgq.cjs");
const require_diff = require("./diff-BCMxBxY-.cjs");
const require_seedFormInput = require("./seedFormInput-BLNL06fg.cjs");
const require_ipWarn = require("./ipWarn-BzcaAHcz.cjs");
const require_wikiContent = require("./wikiContent-DOztl5qm.cjs");
//#region src/views/contents/document/edit.vue
var _sfc_main = {
	mixins: [require_server.common_default],
	components: {
		IpWarn: require_ipWarn.ipWarn_default,
		WikiContent: require_wikiContent.wikiContent_default,
		Alert: require_server.alert_default,
		SeedForm: require_seedForm.seedForm_default,
		FormErrorAlert: require_formErrorAlert.formErrorAlert_default,
		SeedButton: require_seedButton.seedButton_default,
		SeedFormInput: require_seedFormInput.seedFormInput_default,
		Diff: require_diff.diff_default,
		Loading: require_loading.loading_default
	},
	data() {
		return {
			tabs: [{
				name: "raw",
				label: "RAW 편집"
			}, {
				name: "preview",
				label: "미리보기"
			}],
			activeTab: null,
			initialContent: null,
			preview: {
				content: null,
				categories: null
			},
			log: ""
		};
	},
	created() {
		if (!this.editable) {
			this.tabs.length = 1;
			this.activeTab = this.tabs[0];
			return;
		}
		this.activeTab = this.tabs[0];
		this.initialContent = this.data.content;
		this.log = this.data.log || "";
		this.$store.state.components.mainView.beforeLeave = this.beforeLeave;
	},
	mounted() {
		if (!this.editable) return;
		this.tabs.unshift(...this.$store.state.thetreePlugins.editor.map((a) => ({
			...a.pluginInfo,
			component: a
		})));
		let activeTabName = this.$store.state.localConfig["wiki.default_edit_mode"];
		if (!this.tabs.some((a) => a.name === activeTabName)) activeTabName = null;
		activeTabName ??= require_server.isMobile ? "raw" : this.tabs[0].name;
		this.activeTab = this.tabs.find((a) => a.name === activeTabName);
	},
	watch: {
		activeTab(newValue, oldValue) {
			if (!oldValue) return;
			this.updateContent(oldValue);
			if (newValue.name === "preview") this.loadPreview();
		},
		"data.content"() {
			if (this.activeTab.name === "raw" || this.activeTab.name === "preview") return;
			this.getTabComponent(this.activeTab.name).setValue(this.data.content);
		}
	},
	computed: {
		logLabel() {
			let result = this.$t("views.edit.log_label");
			if (this.log) result += ` (${this.log.length}/255)`;
			return result;
		},
		editable() {
			return this.data.isEditRequest || !this.data.aclMessage;
		}
	},
	methods: {
		beforeLeave() {
			this.updateContent();
			if (this.data.content !== this.initialContent) return confirm(this.$t("views.edit.not_saved"));
			return true;
		},
		getTabComponent(name) {
			return this.$refs["pluginTab_" + name]?.[0];
		},
		updateContent(from) {
			from ??= this.activeTab;
			const fromComponent = this.getTabComponent(from.name);
			const activeComponent = this.getTabComponent(this.activeTab.name);
			if (fromComponent) this.data.content = fromComponent.getValue();
			if (activeComponent && activeComponent.getValue() !== this.data.content) activeComponent.setValue(this.data.content);
		},
		async beforeSubmit() {
			if (!this.$refs.agreeCheckbox.checked) {
				alert(this.$t("routes.document.errors.missing_edit_agree"));
				return false;
			}
			this.updateContent();
			await this.$nextTick();
		},
		async loadPreview() {
			this.preview.content = null;
			this.preview.categories = null;
			const json = await this.internalRequest(this.doc_action_link(this.data.document, "preview"), {
				method: "POST",
				headers: { "Content-Type": "application/x-www-form-urlencoded" },
				body: new URLSearchParams({ content: this.data.content }).toString(),
				noProgress: true
			});
			this.preview.content = json.contentHtml;
			this.preview.categories = json.categories;
		}
	}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_FormErrorAlert = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("FormErrorAlert");
	const _component_Alert = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("Alert");
	const _component_WikiContent = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("WikiContent");
	const _component_Diff = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("Diff");
	const _component_SeedForm = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("SeedForm");
	const _component_Loading = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("Loading");
	const _component_SeedFormInput = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("SeedFormInput");
	const _component_IpWarn = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("IpWarn");
	const _component_SeedButton = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("SeedButton");
	_push(`<!--[-->`);
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_FormErrorAlert, null, null, _parent));
	if (_ctx.$route.query.redirected === "1" && _ctx.data.isEditRequest && _ctx.data.aclMessage) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_Alert, null, {
		default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
			if (_push) _push(`<strong data-v-2947b248${_scopeId}>[${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.edit.notify"))}]</strong> ${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.edit.edit_request_redirected"))} <div data-v-2947b248${_scopeId}>${_ctx.data.aclMessage ?? ""}</div>`);
			else return [
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("strong", null, "[" + (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.edit.notify")) + "]", 1),
				(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)(" " + (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.edit.edit_request_redirected")) + " ", 1),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { innerHTML: _ctx.data.aclMessage }, null, 8, ["innerHTML"])
			];
		}),
		_: 1
	}, _parent));
	else _push(`<!---->`);
	if (!$options.editable) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_Alert, { theme: "danger" }, {
		default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
			if (_push) _push(`<strong data-v-2947b248${_scopeId}>[${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.edit.error"))}] </strong><span data-v-2947b248${_scopeId}>${_ctx.data.aclMessage ?? ""}</span>`);
			else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("strong", null, "[" + (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.edit.error")) + "] ", 1), (0, require__plugin_vue_export_helper.vue_exports.createVNode)("span", { innerHTML: _ctx.data.aclMessage }, null, 8, ["innerHTML"])];
		}),
		_: 1
	}, _parent));
	else _push(`<!---->`);
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_WikiContent, { content: _ctx.data.contentHtml }, null, _parent));
	if (_ctx.data.conflict) {
		_push(`<!--[-->`);
		_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_Diff, {
			title: _ctx.$t("views.edit.conflict_diff_title", { editedRev: _ctx.data.conflict.editedRev }),
			diffHtml: _ctx.data.conflict.diff.diffHtml
		}, null, _parent));
		_push(`<span class="conflict-error" data-v-2947b248>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.edit.conflict_error"))}</span><!--]-->`);
	} else _push(`<!---->`);
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedForm, {
		beforeSubmit: $options.beforeSubmit,
		method: "post"
	}, {
		default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push(`<!--[-->`);
				(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderList)(_ctx.page.data.body, (value, name) => {
					_push(`<input type="hidden"${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttr)("name", name)}${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttr)("value", value)} data-v-2947b248${_scopeId}>`);
				});
				_push(`<!--]--><ul data-v-2947b248${_scopeId}><!--[-->`);
				(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderList)($data.tabs, (tab) => {
					_push(`<li data-v-2947b248${_scopeId}><button type="button" class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)({ active: $data.activeTab === tab })}" data-v-2947b248${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(tab.label)}</button></li>`);
				});
				_push(`<!--]-->`);
				if ($data.activeTab.buttons?.length) {
					_push(`<li class="editor-buttons" data-v-2947b248${_scopeId}><!--[-->`);
					(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderList)($data.activeTab.buttons, (button) => {
						_push(`<div data-v-2947b248${_scopeId}><button type="button" data-v-2947b248${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(button.label)}</button></div>`);
					});
					_push(`<!--]--></li>`);
				} else _push(`<!---->`);
				_push(`</ul><div class="tabs" data-v-2947b248${_scopeId}><!--[-->`);
				(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderList)($data.tabs.filter((a) => a.component), (tab) => {
					_push(`<div class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)({ active: $data.activeTab === tab })}" data-v-2947b248${_scopeId}>`);
					if (tab.component) (0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderVNode)(_push, (0, require__plugin_vue_export_helper.vue_exports.createVNode)((0, require__plugin_vue_export_helper.vue_exports.resolveDynamicComponent)(tab.component), {
						ref_for: true,
						ref: "pluginTab_" + tab.name
					}, null), _parent, _scopeId);
					else _push(`<!---->`);
					_push(`</div>`);
				});
				_push(`<!--]--><div class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)({ active: $data.activeTab.name === "raw" })}" data-v-2947b248${_scopeId}><textarea name="text" wrap="soft"${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrIncludeBooleanAttr)(!$options.editable) ? " readonly" : ""} data-v-2947b248${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.data.content)}</textarea></div><div class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)([{
					active: $data.activeTab.name === "preview",
					loading: $data.preview.content == null
				}, "preview"])}" data-v-2947b248${_scopeId}>`);
				if ($data.preview.content != null) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_WikiContent, {
					content: $data.preview.content,
					categories: $data.preview.categories
				}, null, _parent, _scopeId));
				else _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_Loading, null, null, _parent, _scopeId));
				_push(`</div></div>`);
				if ($options.editable) {
					_push(`<!--[--><div class="log-block" data-v-2947b248${_scopeId}><label for="logInput" data-v-2947b248${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)($options.logLabel)}</label>`);
					_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedFormInput, {
						modelValue: $data.log,
						"onUpdate:modelValue": ($event) => $data.log = $event,
						id: "logInput",
						name: "log"
					}, null, _parent, _scopeId));
					_push(`</div><label data-v-2947b248${_scopeId}><input type="checkbox" name="agree" value="Y"${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrIncludeBooleanAttr)(_ctx.data.editagreeAgreed) ? " checked" : ""} data-v-2947b248${_scopeId}><span data-v-2947b248${_scopeId}>${_ctx.data.editagree_text ?? ""}</span></label>`);
					_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_IpWarn, null, null, _parent, _scopeId));
					if (_ctx.data.editRequestBottomText) _push(`<span data-v-2947b248${_scopeId}>${_ctx.data.editRequestBottomText ?? ""}</span>`);
					else _push(`<!---->`);
					_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedButton, { submit: "" }, {
						default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
							if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.edit.submit"))}`);
							else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.edit.submit")), 1)];
						}),
						_: 1
					}, _parent, _scopeId));
					_push(`<div class="clearboth" data-v-2947b248${_scopeId}></div><!--]-->`);
				} else _push(`<!---->`);
			} else return [
				((0, require__plugin_vue_export_helper.vue_exports.openBlock)(true), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(require__plugin_vue_export_helper.vue_exports.Fragment, null, (0, require__plugin_vue_export_helper.vue_exports.renderList)(_ctx.page.data.body, (value, name) => {
					return (0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)("input", {
						type: "hidden",
						name,
						value
					}, null, 8, ["name", "value"]);
				}), 256)),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("ul", null, [((0, require__plugin_vue_export_helper.vue_exports.openBlock)(true), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(require__plugin_vue_export_helper.vue_exports.Fragment, null, (0, require__plugin_vue_export_helper.vue_exports.renderList)($data.tabs, (tab) => {
					return (0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)("li", null, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("button", {
						onClick: ($event) => $data.activeTab = tab,
						type: "button",
						class: { active: $data.activeTab === tab }
					}, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(tab.label), 11, ["onClick"])]);
				}), 256)), $data.activeTab.buttons?.length ? ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)("li", {
					key: 0,
					class: "editor-buttons"
				}, [((0, require__plugin_vue_export_helper.vue_exports.openBlock)(true), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(require__plugin_vue_export_helper.vue_exports.Fragment, null, (0, require__plugin_vue_export_helper.vue_exports.renderList)($data.activeTab.buttons, (button) => {
					return (0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)("div", null, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("button", {
						type: "button",
						onClick: ($event) => $options.getTabComponent($data.activeTab.name).onButtonClick?.(button.name)
					}, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(button.label), 9, ["onClick"])]);
				}), 256))])) : (0, require__plugin_vue_export_helper.vue_exports.createCommentVNode)("", true)]),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: "tabs" }, [
					((0, require__plugin_vue_export_helper.vue_exports.openBlock)(true), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(require__plugin_vue_export_helper.vue_exports.Fragment, null, (0, require__plugin_vue_export_helper.vue_exports.renderList)($data.tabs.filter((a) => a.component), (tab) => {
						return (0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)("div", { class: { active: $data.activeTab === tab } }, [tab.component ? ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)((0, require__plugin_vue_export_helper.vue_exports.resolveDynamicComponent)(tab.component), {
							key: 0,
							ref_for: true,
							ref: "pluginTab_" + tab.name
						}, null, 512)) : (0, require__plugin_vue_export_helper.vue_exports.createCommentVNode)("", true)], 2);
					}), 256)),
					(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: { active: $data.activeTab.name === "raw" } }, [(0, require__plugin_vue_export_helper.vue_exports.withDirectives)((0, require__plugin_vue_export_helper.vue_exports.createVNode)("textarea", {
						ref: "textInput",
						name: "text",
						wrap: "soft",
						"onUpdate:modelValue": ($event) => _ctx.data.content = $event,
						readonly: !$options.editable
					}, null, 8, ["onUpdate:modelValue", "readonly"]), [[require__plugin_vue_export_helper.vue_exports.vModelText, _ctx.data.content]])], 2),
					(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: ["preview", {
						active: $data.activeTab.name === "preview",
						loading: $data.preview.content == null
					}] }, [$data.preview.content != null ? ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(_component_WikiContent, {
						key: 0,
						content: $data.preview.content,
						categories: $data.preview.categories
					}, null, 8, ["content", "categories"])) : ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(_component_Loading, { key: 1 }))], 2)
				]),
				$options.editable ? ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(require__plugin_vue_export_helper.vue_exports.Fragment, { key: 0 }, [
					(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: "log-block" }, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("label", { for: "logInput" }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)($options.logLabel), 1), (0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedFormInput, {
						modelValue: $data.log,
						"onUpdate:modelValue": ($event) => $data.log = $event,
						id: "logInput",
						name: "log"
					}, null, 8, ["modelValue", "onUpdate:modelValue"])]),
					(0, require__plugin_vue_export_helper.vue_exports.createVNode)("label", null, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("input", {
						ref: "agreeCheckbox",
						type: "checkbox",
						name: "agree",
						value: "Y",
						checked: _ctx.data.editagreeAgreed
					}, null, 8, ["checked"]), (0, require__plugin_vue_export_helper.vue_exports.createVNode)("span", { innerHTML: _ctx.data.editagree_text }, null, 8, ["innerHTML"])]),
					(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_IpWarn),
					_ctx.data.editRequestBottomText ? ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)("span", {
						key: 0,
						innerHTML: _ctx.data.editRequestBottomText
					}, null, 8, ["innerHTML"])) : (0, require__plugin_vue_export_helper.vue_exports.createCommentVNode)("", true),
					(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedButton, { submit: "" }, {
						default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.edit.submit")), 1)]),
						_: 1
					}),
					(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: "clearboth" })
				], 64)) : (0, require__plugin_vue_export_helper.vue_exports.createCommentVNode)("", true)
			];
		}),
		_: 1
	}, _parent));
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_WikiContent, { content: _ctx.data.dochelptext }, null, _parent));
	_push(`<!--]-->`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = (0, require__plugin_vue_export_helper.vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/contents/document/edit.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var edit_default = /*#__PURE__*/ require__plugin_vue_export_helper._plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-2947b248"]]);
//#endregion
exports.default = edit_default;
