const require__plugin_vue_export_helper = require("./_plugin-vue_export-helper-C1TPHJvg.cjs");
const require_server = require("../server.cjs");
const require_seedForm = require("./seedForm-DLpXnK6K.cjs");
const require_seedButton = require("./seedButton-CbrSfLgh.cjs");
const require_formErrorAlert = require("./formErrorAlert-l3UJhtgq.cjs");
const require_seedFormBlock = require("./seedFormBlock-C_WGpUCH.cjs");
const require_seedFormInput = require("./seedFormInput-BLNL06fg.cjs");
//#region src/views/contents/member/withdraw.vue
var _sfc_main = {
	mixins: [require_server.common_default],
	components: {
		SeedForm: require_seedForm.seedForm_default,
		FormErrorAlert: require_formErrorAlert.formErrorAlert_default,
		SeedFormBlock: require_seedFormBlock.seedFormBlock_default,
		SeedFormInput: require_seedFormInput.seedFormInput_default,
		SeedButton: require_seedButton.seedButton_default
	},
	data() {
		return {
			...this.$store.state.viewData,
			pledgeInput: ""
		};
	},
	computed: {
		correctLength() {
			let correctLen = 0;
			for (let i in this.pledge) {
				if (this.pledgeInput[i] !== this.pledge[i]) break;
				correctLen++;
			}
			return correctLen;
		},
		redPledge() {
			return this.pledge.slice(0, this.correctLength);
		},
		normalPledge() {
			return this.pledge.slice(this.correctLength);
		}
	},
	methods: { pledgeChange(event) {
		this.pledgeInput = event.target.value;
	} }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_FormErrorAlert = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("FormErrorAlert");
	const _component_SeedForm = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("SeedForm");
	const _component_SeedFormBlock = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("SeedFormBlock");
	const _component_SeedFormInput = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("SeedFormInput");
	const _component_SeedButton = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("SeedButton");
	_push(`<!--[-->`);
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_FormErrorAlert, null, null, _parent));
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedForm, { method: "post" }, {
		default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedFormBlock, {
					label: _ctx.$t("views.withdraw.password"),
					inputId: "passwordInput",
					name: "password"
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedFormInput, {
							type: "password",
							id: "passwordInput",
							name: "password"
						}, null, _parent, _scopeId));
						else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedFormInput, {
							type: "password",
							id: "passwordInput",
							name: "password"
						})];
					}),
					_: 1
				}, _parent, _scopeId));
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedFormBlock, { name: "pledge" }, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) {
							_push(`<label for="pledgeInput" data-v-b7d591a7${_scopeId}><span class="pledge pledge-correct" data-v-b7d591a7${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)($options.redPledge)}</span><span class="pledge" data-v-b7d591a7${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)($options.normalPledge)}</span></label>`);
							_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedFormInput, {
								onInput: $options.pledgeChange,
								onPaste: () => {},
								type: "text",
								id: "pledgeInput",
								name: "pledge",
								placeholder: _ctx.pledge,
								autocomplete: "off"
							}, null, _parent, _scopeId));
						} else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("label", { for: "pledgeInput" }, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("span", { class: "pledge pledge-correct" }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)($options.redPledge), 1), (0, require__plugin_vue_export_helper.vue_exports.createVNode)("span", { class: "pledge" }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)($options.normalPledge), 1)]), (0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedFormInput, {
							onInput: $options.pledgeChange,
							onPaste: (0, require__plugin_vue_export_helper.vue_exports.withModifiers)(() => {}, ["prevent"]),
							type: "text",
							id: "pledgeInput",
							name: "pledge",
							placeholder: _ctx.pledge,
							autocomplete: "off"
						}, null, 8, [
							"onInput",
							"onPaste",
							"placeholder"
						])];
					}),
					_: 1
				}, _parent, _scopeId));
				_push(`<p data-v-b7d591a7${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.withdraw.last_activity", { duration: _ctx.durationToExactString(_ctx.noActivityTime) }))}</p><p data-v-b7d591a7${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.withdraw.no_recover"))}</p><p data-v-b7d591a7${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.withdraw.no_signup_" + (_ctx.blacklistDays ? "duration" : "forever"), { blacklistDays: _ctx.blacklistDays }))} ${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.withdraw.hash_save_" + (_ctx.blacklistDays ? "duration" : "forever"), { blacklistDays: _ctx.blacklistDays }))}</p><div class="button-block" data-v-b7d591a7${_scopeId}>`);
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedButton, { danger: "" }, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.withdraw.submit"))}`);
						else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.withdraw.submit")), 1)];
					}),
					_: 1
				}, _parent, _scopeId));
				_push(`</div>`);
			} else return [
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedFormBlock, {
					label: _ctx.$t("views.withdraw.password"),
					inputId: "passwordInput",
					name: "password"
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedFormInput, {
						type: "password",
						id: "passwordInput",
						name: "password"
					})]),
					_: 1
				}, 8, ["label"]),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedFormBlock, { name: "pledge" }, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("label", { for: "pledgeInput" }, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("span", { class: "pledge pledge-correct" }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)($options.redPledge), 1), (0, require__plugin_vue_export_helper.vue_exports.createVNode)("span", { class: "pledge" }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)($options.normalPledge), 1)]), (0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedFormInput, {
						onInput: $options.pledgeChange,
						onPaste: (0, require__plugin_vue_export_helper.vue_exports.withModifiers)(() => {}, ["prevent"]),
						type: "text",
						id: "pledgeInput",
						name: "pledge",
						placeholder: _ctx.pledge,
						autocomplete: "off"
					}, null, 8, [
						"onInput",
						"onPaste",
						"placeholder"
					])]),
					_: 1
				}),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("p", null, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.withdraw.last_activity", { duration: _ctx.durationToExactString(_ctx.noActivityTime) })), 1),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("p", null, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.withdraw.no_recover")), 1),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("p", null, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.withdraw.no_signup_" + (_ctx.blacklistDays ? "duration" : "forever"), { blacklistDays: _ctx.blacklistDays })) + " " + (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.withdraw.hash_save_" + (_ctx.blacklistDays ? "duration" : "forever"), { blacklistDays: _ctx.blacklistDays })), 1),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: "button-block" }, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedButton, { danger: "" }, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.withdraw.submit")), 1)]),
					_: 1
				})])
			];
		}),
		_: 1
	}, _parent));
	_push(`<!--]-->`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = (0, require__plugin_vue_export_helper.vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/contents/member/withdraw.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var withdraw_default = /*#__PURE__*/ require__plugin_vue_export_helper._plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-b7d591a7"]]);
//#endregion
exports.default = withdraw_default;
