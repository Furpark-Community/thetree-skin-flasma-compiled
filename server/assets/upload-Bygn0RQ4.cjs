const require__plugin_vue_export_helper = require("./_plugin-vue_export-helper-C1TPHJvg.cjs");
const require_seedForm = require("./seedForm-DLpXnK6K.cjs");
const require_showError = require("./showError-A8EkGqzL.cjs");
const require_seedButton = require("./seedButton-CbrSfLgh.cjs");
const require_formErrorAlert = require("./formErrorAlert-l3UJhtgq.cjs");
const require_ipWarn = require("./ipWarn-BzcaAHcz.cjs");
const require_SearchableSelect = require("./SearchableSelect-CJcVzQ_Q.cjs");
//#region src/views/contents/special/upload.vue
var _sfc_main = {
	components: {
		IpWarn: require_ipWarn.ipWarn_default,
		SearchableSelect: require_SearchableSelect.SearchableSelect_default,
		FormErrorAlert: require_formErrorAlert.formErrorAlert_default,
		ShowError: require_showError.showError_default,
		SeedButton: require_seedButton.seedButton_default,
		SeedForm: require_seedForm.seedForm_default
	},
	data() {
		return {
			document: "",
			license: null,
			log: "",
			text: ""
		};
	},
	mounted() {
		this.license = this.data.defaultLicense;
		this.text = this.data.file_upload_template;
	},
	watch: { "$route.query.document"(newValue) {
		if (newValue) this.document = newValue;
	} },
	computed: {
		documentLabel() {
			let result = this.$t("views.upload.document_label");
			if (this.document) result += ` (${this.document.length}/255)`;
			return result;
		},
		logLabel() {
			let result = this.$t("views.upload.log_label");
			if (this.log) result += ` (${this.log.length}/255)`;
			return result;
		}
	},
	methods: { fileChange(e) {
		const fileCount = e.srcElement.files.length;
		if (fileCount > 10) {
			alert(this.$t("views.upload.max_file_amount", { count: 10 }));
			return e.preventDefault();
		}
		if (fileCount <= 1) {
			this.$refs.fakeFileInput.value = this.$refs.fileInput.value;
			if (fileCount === 1) this.document ||= this.$t("namespaces.파일", { lng: this.config.lang || "ko" }) + ":" + this.$refs.fileInput.files[0].name;
			this.$refs.documentInput.disabled = false;
		} else {
			this.$refs.fakeFileInput.value = [...e.srcElement.files].map((a) => `"${a.name}"`).join(", ");
			this.document = "";
			this.$refs.documentInput.disabled = true;
		}
	} }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_SeedForm = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("SeedForm");
	const _component_FormErrorAlert = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("FormErrorAlert");
	const _component_SeedButton = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("SeedButton");
	const _component_ShowError = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("ShowError");
	const _component_SearchableSelect = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("SearchableSelect");
	const _component_IpWarn = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("IpWarn");
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedForm, (0, require__plugin_vue_export_helper.vue_exports.mergeProps)({
		method: "post",
		enctype: "multipart/form-data"
	}, _attrs), {
		default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push(`<input type="file" accept="image/*,video/*" name="file" multiple hidden data-v-e6c81b11${_scopeId}>`);
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_FormErrorAlert, null, null, _parent, _scopeId));
				_push(`<div class="form-block" data-v-e6c81b11${_scopeId}><label for="fakeFileInput" data-v-e6c81b11${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.upload.select_file"))}</label><div class="file-block" data-v-e6c81b11${_scopeId}><input type="text" id="fakeFileInput" readonly data-v-e6c81b11${_scopeId}><span data-v-e6c81b11${_scopeId}>`);
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedButton, { type: "button" }, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.upload.select_button"))}`);
						else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.upload.select_button")), 1)];
					}),
					_: 1
				}, _parent, _scopeId));
				_push(`</span></div></div><div class="form-block" data-v-e6c81b11${_scopeId}><label for="documentInput" data-v-e6c81b11${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)($options.documentLabel)}</label><input${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttr)("value", $data.document)} type="text" id="documentInput" name="document" data-v-e6c81b11${_scopeId}>`);
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_ShowError, { tag: "document" }, null, _parent, _scopeId));
				_push(`</div><textarea name="text" wrap="soft" data-v-e6c81b11${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)($data.text)}</textarea><div class="form-block" data-v-e6c81b11${_scopeId}><label for="licenseSelect" data-v-e6c81b11${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.upload.license"))}</label>`);
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SearchableSelect, {
					name: "license",
					inputId: "licenseSelect",
					options: _ctx.data.licenses,
					modelValue: $data.license,
					"onUpdate:modelValue": ($event) => $data.license = $event
				}, null, _parent, _scopeId));
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_ShowError, { tag: "license" }, null, _parent, _scopeId));
				_push(`</div>`);
				if (_ctx.data.licenseText) _push(`<p data-v-e6c81b11${_scopeId}>${_ctx.data.licenseText ?? ""}</p>`);
				else _push(`<!---->`);
				_push(`<div class="form-block" data-v-e6c81b11${_scopeId}><label for="categorySelect" data-v-e6c81b11${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.upload.category"))}</label>`);
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SearchableSelect, {
					name: "category",
					inputId: "categorySelect",
					options: _ctx.data.categories
				}, null, _parent, _scopeId));
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_ShowError, { tag: "category" }, null, _parent, _scopeId));
				_push(`</div><div class="form-block" data-v-e6c81b11${_scopeId}><label for="logInput" data-v-e6c81b11${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)($options.logLabel)}</label><input${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttr)("value", $data.log)} type="text" id="logInput" name="log" data-v-e6c81b11${_scopeId}></div><span data-v-e6c81b11${_scopeId}>${_ctx.data.editagree_text ?? ""}</span><div data-v-e6c81b11${_scopeId}>`);
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_IpWarn, null, null, _parent, _scopeId));
				_push(`</div>`);
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedButton, { submit: "" }, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.upload.upload"))}`);
						else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.upload.upload")), 1)];
					}),
					_: 1
				}, _parent, _scopeId));
			} else return [
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("input", {
					ref: "fileInput",
					onChange: $options.fileChange,
					type: "file",
					accept: "image/*,video/*",
					name: "file",
					multiple: "",
					hidden: ""
				}, null, 40, ["onChange"]),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_FormErrorAlert),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: "form-block" }, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("label", { for: "fakeFileInput" }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.upload.select_file")), 1), (0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", {
					class: "file-block",
					onClick: _ctx.$refs.fileInput.click
				}, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("input", {
					ref: "fakeFileInput",
					type: "text",
					id: "fakeFileInput",
					readonly: ""
				}, null, 512), (0, require__plugin_vue_export_helper.vue_exports.createVNode)("span", null, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedButton, { type: "button" }, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.upload.select_button")), 1)]),
					_: 1
				})])], 8, ["onClick"])]),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: "form-block" }, [
					(0, require__plugin_vue_export_helper.vue_exports.createVNode)("label", { for: "documentInput" }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)($options.documentLabel), 1),
					(0, require__plugin_vue_export_helper.vue_exports.withDirectives)((0, require__plugin_vue_export_helper.vue_exports.createVNode)("input", {
						ref: "documentInput",
						"onUpdate:modelValue": ($event) => $data.document = $event,
						type: "text",
						id: "documentInput",
						name: "document"
					}, null, 8, ["onUpdate:modelValue"]), [[require__plugin_vue_export_helper.vue_exports.vModelText, $data.document]]),
					(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_ShowError, { tag: "document" })
				]),
				(0, require__plugin_vue_export_helper.vue_exports.withDirectives)((0, require__plugin_vue_export_helper.vue_exports.createVNode)("textarea", {
					name: "text",
					wrap: "soft",
					"onUpdate:modelValue": ($event) => $data.text = $event
				}, null, 8, ["onUpdate:modelValue"]), [[require__plugin_vue_export_helper.vue_exports.vModelText, $data.text]]),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: "form-block" }, [
					(0, require__plugin_vue_export_helper.vue_exports.createVNode)("label", { for: "licenseSelect" }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.upload.license")), 1),
					(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SearchableSelect, {
						name: "license",
						inputId: "licenseSelect",
						options: _ctx.data.licenses,
						modelValue: $data.license,
						"onUpdate:modelValue": ($event) => $data.license = $event
					}, null, 8, [
						"options",
						"modelValue",
						"onUpdate:modelValue"
					]),
					(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_ShowError, { tag: "license" })
				]),
				_ctx.data.licenseText ? ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)("p", {
					key: 0,
					innerHTML: _ctx.data.licenseText
				}, null, 8, ["innerHTML"])) : (0, require__plugin_vue_export_helper.vue_exports.createCommentVNode)("", true),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: "form-block" }, [
					(0, require__plugin_vue_export_helper.vue_exports.createVNode)("label", { for: "categorySelect" }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.upload.category")), 1),
					(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SearchableSelect, {
						name: "category",
						inputId: "categorySelect",
						options: _ctx.data.categories
					}, null, 8, ["options"]),
					(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_ShowError, { tag: "category" })
				]),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: "form-block" }, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("label", { for: "logInput" }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)($options.logLabel), 1), (0, require__plugin_vue_export_helper.vue_exports.withDirectives)((0, require__plugin_vue_export_helper.vue_exports.createVNode)("input", {
					"onUpdate:modelValue": ($event) => $data.log = $event,
					type: "text",
					id: "logInput",
					name: "log"
				}, null, 8, ["onUpdate:modelValue"]), [[require__plugin_vue_export_helper.vue_exports.vModelText, $data.log]])]),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("span", { innerHTML: _ctx.data.editagree_text }, null, 8, ["innerHTML"]),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", null, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_IpWarn)]),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedButton, { submit: "" }, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.upload.upload")), 1)]),
					_: 1
				})
			];
		}),
		_: 1
	}, _parent));
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = (0, require__plugin_vue_export_helper.vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/contents/special/upload.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var upload_default = /*#__PURE__*/ require__plugin_vue_export_helper._plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-e6c81b11"]]);
//#endregion
exports.default = upload_default;
