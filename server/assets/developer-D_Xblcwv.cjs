const require__plugin_vue_export_helper = require("./_plugin-vue_export-helper-C1TPHJvg.cjs");
const require_server = require("../server.cjs");
const require_seedForm = require("./seedForm-DLpXnK6K.cjs");
const require_seedButton = require("./seedButton-CbrSfLgh.cjs");
const require_heading = require("./heading-CgAmXkAX.cjs");
const require_seedFormBlock = require("./seedFormBlock-C_WGpUCH.cjs");
const require_inputField = require("./inputField-DBSQICqU.cjs");
//#region src/views/contents/admin/developer.vue
var _sfc_main = {
	mixins: [require_server.common_default],
	provide() {
		return { submittingSeedForm: (0, require__plugin_vue_export_helper.vue_exports.computed)(() => this.submitting) };
	},
	components: {
		CheckBox: require_server.checkBox_default,
		SeedFormBlock: require_seedFormBlock.seedFormBlock_default,
		InputField: require_inputField.inputField_default,
		SeedButton: require_seedButton.seedButton_default,
		SeedForm: require_seedForm.seedForm_default,
		GeneralButton: require_server.generalButton_default,
		LocalDate: require_server.localDate_default,
		Heading: require_heading.heading_default
	},
	data() {
		return { submitting: false };
	},
	computed: {
		hasBEUpdate() {
			return this.data.versionInfo.commitId !== this.data.newVersionInfo.commitId;
		},
		hasFEUpdate() {
			return this.data.versionInfo.feCommitId !== this.data.newVersionInfo.feCommitId;
		},
		hasUpdate() {
			return this.hasBEUpdate || this.hasFEUpdate;
		}
	},
	methods: {
		async internalGet(url) {
			this.submitting = true;
			await this.internalRequestAndProcess(url);
			this.submitting = false;
		},
		async internalPost(url, data) {
			this.submitting = true;
			await this.internalRequestAndProcess(url, {
				method: "POST",
				headers: { "Content-Type": "application/x-www-form-urlencoded" },
				body: new URLSearchParams(data).toString()
			});
			this.submitting = false;
		},
		buildAllSkin() {
			this.internalPost("/admin/developer/skin/build", { name: Object.keys(this.data.skinCommitIds).filter((a) => a !== "plain") });
		},
		evalKeydown(e) {
			if (!e.shiftKey && e.key === "Enter") {
				e.preventDefault();
				this.$refs.evalForm.$el.requestSubmit();
			}
		}
	}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_Heading = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("Heading");
	const _component_LocalDate = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("LocalDate");
	const _component_GeneralButton = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("GeneralButton");
	const _component_SeedForm = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("SeedForm");
	const _component_SeedFormBlock = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("SeedFormBlock");
	const _component_InputField = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("InputField");
	const _component_SeedButton = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("SeedButton");
	_push(`<!--[-->`);
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_Heading, {
		title: _ctx.$t("views.developer.update"),
		folded: !_ctx.data.checkUpdate && !$options.hasUpdate
	}, {
		default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
			if (_push) {
				if (_ctx.data.versionInfo.branch !== "master") _push(`<p data-v-05cbef9b${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.developer.branch"))}: ${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.data.versionInfo.branch)}</p>`);
				else _push(`<!---->`);
				_push(`<p data-v-05cbef9b${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.developer.current_version"))}: ${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.data.versionInfo.versionData.version)}</p><ul data-v-05cbef9b${_scopeId}><li data-v-05cbef9b${_scopeId}>Backend: ${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.data.versionInfo.commitId.slice(0, 7))}(`);
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_LocalDate, { date: _ctx.data.versionInfo.commitDate }, null, _parent, _scopeId));
				_push(`)</li><li data-v-05cbef9b${_scopeId}>Frontend: ${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.data.versionInfo.feCommitId.slice(0, 7))}(`);
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_LocalDate, { date: _ctx.data.versionInfo.feCommitDate }, null, _parent, _scopeId));
				_push(`)</li></ul><p data-v-05cbef9b${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.developer.new_version"))}: ${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.data.newVersionInfo.versionData.version)}</p><ul data-v-05cbef9b${_scopeId}><li data-v-05cbef9b${_scopeId}>Backend: ${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.data.newVersionInfo.commitId.slice(0, 7))}(`);
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_LocalDate, { date: _ctx.data.newVersionInfo.commitDate }, null, _parent, _scopeId));
				_push(`)</li><li data-v-05cbef9b${_scopeId}>Frontend: ${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.data.newVersionInfo.feCommitId.slice(0, 7))}(`);
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_LocalDate, { date: _ctx.data.newVersionInfo.feCommitDate }, null, _parent, _scopeId));
				_push(`)</li></ul><p data-v-05cbef9b${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.developer.last_update_check"))}: `);
				if (_ctx.data.newVersionInfo.lastUpdateCheck) {
					_push(`<!--[-->`);
					_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_LocalDate, { date: _ctx.data.newVersionInfo.lastUpdateCheck }, null, _parent, _scopeId));
					_push(` (`);
					_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_LocalDate, {
						date: _ctx.data.newVersionInfo.lastUpdateCheck,
						forceRelative: ""
					}, null, _parent, _scopeId));
					_push(`) <!--]-->`);
				} else _push(`<!--[-->${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.developer.no_update_check"))}<!--]-->`);
				if ($options.hasBEUpdate) {
					_push(`<!--[--><p data-v-05cbef9b${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.developer.backend_update_log"))}</p><ul data-v-05cbef9b${_scopeId}><!--[-->`);
					(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderList)(_ctx.data.newCommits, (item) => {
						_push(`<li data-v-05cbef9b${_scopeId}><a${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttr)("href", item.html_url)} target="_blank" data-v-05cbef9b${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(item.sha.slice(0, 7))}</a> ${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(item.commit.message.split("\n")[0])} - <a${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttr)("href", item.author.html_url)} target="_blank" data-v-05cbef9b${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(item.commit.author.name)}</a></li>`);
					});
					_push(`<!--]--></ul><!--]-->`);
				} else _push(`<!---->`);
				if ($options.hasFEUpdate) {
					_push(`<!--[--><p data-v-05cbef9b${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.developer.frontend_update_log"))}</p><ul data-v-05cbef9b${_scopeId}><!--[-->`);
					(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderList)(_ctx.data.newFECommits, (item) => {
						_push(`<li data-v-05cbef9b${_scopeId}><a${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttr)("href", item.html_url)} target="_blank" data-v-05cbef9b${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(item.sha.slice(0, 7))}</a> ${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(item.commit.message.split("\n")[0])} - <a${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttr)("href", item.author.html_url)} target="_blank" data-v-05cbef9b${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(item.commit.author.name)}</a></li>`);
					});
					_push(`<!--]--></ul><!--]-->`);
				} else _push(`<!---->`);
				_push(`</p>`);
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_GeneralButton, {
					theme: "primary",
					type: "event",
					onClick: ($event) => $options.internalGet("/admin/config/tools/checkupdate")
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.developer.check_update"))}`);
						else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.developer.check_update")), 1)];
					}),
					_: 1
				}, _parent, _scopeId));
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_GeneralButton, {
					disabled: !$options.hasUpdate,
					theme: "danger",
					type: "event",
					onClick: ($event) => $options.internalGet("/admin/config/tools/update")
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.developer.do_update"))}`);
						else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.developer.do_update")), 1)];
					}),
					_: 1
				}, _parent, _scopeId));
			} else return [
				_ctx.data.versionInfo.branch !== "master" ? ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)("p", { key: 0 }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.developer.branch")) + ": " + (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.data.versionInfo.branch), 1)) : (0, require__plugin_vue_export_helper.vue_exports.createCommentVNode)("", true),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("p", null, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.developer.current_version")) + ": " + (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.data.versionInfo.versionData.version), 1),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("ul", null, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("li", null, [
					(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)("Backend: " + (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.data.versionInfo.commitId.slice(0, 7)) + "(", 1),
					(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_LocalDate, { date: _ctx.data.versionInfo.commitDate }, null, 8, ["date"]),
					(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)(")")
				]), (0, require__plugin_vue_export_helper.vue_exports.createVNode)("li", null, [
					(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)("Frontend: " + (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.data.versionInfo.feCommitId.slice(0, 7)) + "(", 1),
					(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_LocalDate, { date: _ctx.data.versionInfo.feCommitDate }, null, 8, ["date"]),
					(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)(")")
				])]),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("p", null, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.developer.new_version")) + ": " + (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.data.newVersionInfo.versionData.version), 1),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("ul", null, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("li", null, [
					(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)("Backend: " + (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.data.newVersionInfo.commitId.slice(0, 7)) + "(", 1),
					(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_LocalDate, { date: _ctx.data.newVersionInfo.commitDate }, null, 8, ["date"]),
					(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)(")")
				]), (0, require__plugin_vue_export_helper.vue_exports.createVNode)("li", null, [
					(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)("Frontend: " + (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.data.newVersionInfo.feCommitId.slice(0, 7)) + "(", 1),
					(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_LocalDate, { date: _ctx.data.newVersionInfo.feCommitDate }, null, 8, ["date"]),
					(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)(")")
				])]),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("p", null, [
					(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.developer.last_update_check")) + ": ", 1),
					_ctx.data.newVersionInfo.lastUpdateCheck ? ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(require__plugin_vue_export_helper.vue_exports.Fragment, { key: 0 }, [
						(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_LocalDate, { date: _ctx.data.newVersionInfo.lastUpdateCheck }, null, 8, ["date"]),
						(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)(" ("),
						(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_LocalDate, {
							date: _ctx.data.newVersionInfo.lastUpdateCheck,
							forceRelative: ""
						}, null, 8, ["date"]),
						(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)(") ")
					], 64)) : ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(require__plugin_vue_export_helper.vue_exports.Fragment, { key: 1 }, [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.developer.no_update_check")), 1)], 64)),
					$options.hasBEUpdate ? ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(require__plugin_vue_export_helper.vue_exports.Fragment, { key: 2 }, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("p", null, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.developer.backend_update_log")), 1), (0, require__plugin_vue_export_helper.vue_exports.createVNode)("ul", null, [((0, require__plugin_vue_export_helper.vue_exports.openBlock)(true), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(require__plugin_vue_export_helper.vue_exports.Fragment, null, (0, require__plugin_vue_export_helper.vue_exports.renderList)(_ctx.data.newCommits, (item) => {
						return (0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)("li", null, [
							(0, require__plugin_vue_export_helper.vue_exports.createVNode)("a", {
								href: item.html_url,
								target: "_blank"
							}, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(item.sha.slice(0, 7)), 9, ["href"]),
							(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)(" " + (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(item.commit.message.split("\n")[0]) + " - ", 1),
							(0, require__plugin_vue_export_helper.vue_exports.createVNode)("a", {
								href: item.author.html_url,
								target: "_blank"
							}, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(item.commit.author.name), 9, ["href"])
						]);
					}), 256))])], 64)) : (0, require__plugin_vue_export_helper.vue_exports.createCommentVNode)("", true),
					$options.hasFEUpdate ? ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(require__plugin_vue_export_helper.vue_exports.Fragment, { key: 3 }, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("p", null, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.developer.frontend_update_log")), 1), (0, require__plugin_vue_export_helper.vue_exports.createVNode)("ul", null, [((0, require__plugin_vue_export_helper.vue_exports.openBlock)(true), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(require__plugin_vue_export_helper.vue_exports.Fragment, null, (0, require__plugin_vue_export_helper.vue_exports.renderList)(_ctx.data.newFECommits, (item) => {
						return (0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)("li", null, [
							(0, require__plugin_vue_export_helper.vue_exports.createVNode)("a", {
								href: item.html_url,
								target: "_blank"
							}, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(item.sha.slice(0, 7)), 9, ["href"]),
							(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)(" " + (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(item.commit.message.split("\n")[0]) + " - ", 1),
							(0, require__plugin_vue_export_helper.vue_exports.createVNode)("a", {
								href: item.author.html_url,
								target: "_blank"
							}, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(item.commit.author.name), 9, ["href"])
						]);
					}), 256))])], 64)) : (0, require__plugin_vue_export_helper.vue_exports.createCommentVNode)("", true)
				]),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_GeneralButton, {
					theme: "primary",
					type: "event",
					onClick: ($event) => $options.internalGet("/admin/config/tools/checkupdate")
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.developer.check_update")), 1)]),
					_: 1
				}, 8, ["onClick"]),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_GeneralButton, {
					disabled: !$options.hasUpdate,
					theme: "danger",
					type: "event",
					onClick: ($event) => $options.internalGet("/admin/config/tools/update")
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.developer.do_update")), 1)]),
					_: 1
				}, 8, ["disabled", "onClick"])
			];
		}),
		_: 1
	}, _parent));
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_Heading, { title: _ctx.$t("views.developer.skin") }, {
		default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedForm, {
					method: "post",
					action: "/admin/developer/skin/add"
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) {
							_push(`<input name="name" placeholder="name" required data-v-05cbef9b${_scopeId}><input name="url" placeholder="URL" required style="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderStyle)({ "width": "40%" })}" data-v-05cbef9b${_scopeId}>`);
							_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_GeneralButton, {
								theme: "primary",
								type: "submit"
							}, {
								default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
									if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.developer.add"))}`);
									else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.developer.add")), 1)];
								}),
								_: 1
							}, _parent, _scopeId));
						} else return [
							(0, require__plugin_vue_export_helper.vue_exports.createVNode)("input", {
								name: "name",
								placeholder: "name",
								required: ""
							}),
							(0, require__plugin_vue_export_helper.vue_exports.createVNode)("input", {
								name: "url",
								placeholder: "URL",
								required: "",
								style: { "width": "40%" }
							}),
							(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_GeneralButton, {
								theme: "primary",
								type: "submit"
							}, {
								default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.developer.add")), 1)]),
								_: 1
							})
						];
					}),
					_: 1
				}, _parent, _scopeId));
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_GeneralButton, {
					theme: "primary",
					type: "event",
					onClick: $options.buildAllSkin
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.developer.build_all"))}`);
						else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.developer.build_all")), 1)];
					}),
					_: 1
				}, _parent, _scopeId));
				_push(`<!--[-->`);
				(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderList)(_ctx.data.skinCommitIds, (commitId, name) => {
					_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_Heading, {
						title: name,
						level: 3,
						folded: name === "plain",
						key: name
					}, {
						default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
							if (_push) {
								if (_ctx.data.skinInfos[name]) {
									_push(`<!--[--><p data-v-05cbef9b${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.developer.build_info"))}</p><ul data-v-05cbef9b${_scopeId}><li data-v-05cbef9b${_scopeId}> Frontend: ${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.data.skinInfos[name].commitIds.frontend)}(`);
									_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_LocalDate, { date: _ctx.data.skinInfos[name].commitDates?.frontend ?? 0 }, null, _parent, _scopeId));
									_push(`) `);
									if (_ctx.data.skinInfos[name].commitIds.frontend !== _ctx.data.versionInfo.feCommitId.slice(0, 7)) _push(`<!--[--> (${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.developer.need_update"))}) <!--]-->`);
									else _push(`<!---->`);
									_push(`</li><li data-v-05cbef9b${_scopeId}> Skin: ${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.data.skinInfos[name].commitIds.skin)}(`);
									_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_LocalDate, { date: _ctx.data.skinInfos[name].commitDates?.skin ?? 0 }, null, _parent, _scopeId));
									_push(`) `);
									if (commitId !== _ctx.data.skinInfos[name].commitIds.skin) _push(`<!--[--> (${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.developer.need_update"))}) <!--]-->`);
									else _push(`<!---->`);
									_push(`</li></ul><!--]-->`);
								} else _push(`<p data-v-05cbef9b${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.developer.no_build"))}</p>`);
								_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_GeneralButton, {
									theme: "primary",
									type: "event",
									onClick: ($event) => $options.internalPost("/admin/developer/skin/build", { name })
								}, {
									default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
										if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.developer.build"))}`);
										else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.developer.build")), 1)];
									}),
									_: 2
								}, _parent, _scopeId));
								_push(`<p data-v-05cbef9b${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.developer.installed_skin"))}: ${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(commitId)}</p>`);
								_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_GeneralButton, {
									theme: "primary",
									type: "event",
									onClick: ($event) => $options.internalPost("/admin/developer/skin/update", { name })
								}, {
									default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
										if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.developer.do_update"))}`);
										else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.developer.do_update")), 1)];
									}),
									_: 2
								}, _parent, _scopeId));
								_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_GeneralButton, {
									theme: "danger",
									type: "event",
									onClick: ($event) => $options.internalPost("/admin/developer/skin/delete", { name }),
									disabled: name === "plain"
								}, {
									default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
										if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.developer.delete"))}`);
										else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.developer.delete")), 1)];
									}),
									_: 2
								}, _parent, _scopeId));
							} else return [
								_ctx.data.skinInfos[name] ? ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(require__plugin_vue_export_helper.vue_exports.Fragment, { key: 0 }, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("p", null, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.developer.build_info")), 1), (0, require__plugin_vue_export_helper.vue_exports.createVNode)("ul", null, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("li", null, [
									(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)(" Frontend: " + (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.data.skinInfos[name].commitIds.frontend) + "(", 1),
									(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_LocalDate, { date: _ctx.data.skinInfos[name].commitDates?.frontend ?? 0 }, null, 8, ["date"]),
									(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)(") "),
									_ctx.data.skinInfos[name].commitIds.frontend !== _ctx.data.versionInfo.feCommitId.slice(0, 7) ? ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(require__plugin_vue_export_helper.vue_exports.Fragment, { key: 0 }, [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)(" (" + (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.developer.need_update")) + ") ", 1)], 64)) : (0, require__plugin_vue_export_helper.vue_exports.createCommentVNode)("", true)
								]), (0, require__plugin_vue_export_helper.vue_exports.createVNode)("li", null, [
									(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)(" Skin: " + (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.data.skinInfos[name].commitIds.skin) + "(", 1),
									(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_LocalDate, { date: _ctx.data.skinInfos[name].commitDates?.skin ?? 0 }, null, 8, ["date"]),
									(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)(") "),
									commitId !== _ctx.data.skinInfos[name].commitIds.skin ? ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(require__plugin_vue_export_helper.vue_exports.Fragment, { key: 0 }, [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)(" (" + (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.developer.need_update")) + ") ", 1)], 64)) : (0, require__plugin_vue_export_helper.vue_exports.createCommentVNode)("", true)
								])])], 64)) : ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)("p", { key: 1 }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.developer.no_build")), 1)),
								(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_GeneralButton, {
									theme: "primary",
									type: "event",
									onClick: ($event) => $options.internalPost("/admin/developer/skin/build", { name })
								}, {
									default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.developer.build")), 1)]),
									_: 1
								}, 8, ["onClick"]),
								(0, require__plugin_vue_export_helper.vue_exports.createVNode)("p", null, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.developer.installed_skin")) + ": " + (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(commitId), 1),
								(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_GeneralButton, {
									theme: "primary",
									type: "event",
									onClick: ($event) => $options.internalPost("/admin/developer/skin/update", { name })
								}, {
									default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.developer.do_update")), 1)]),
									_: 1
								}, 8, ["onClick"]),
								(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_GeneralButton, {
									theme: "danger",
									type: "event",
									onClick: ($event) => $options.internalPost("/admin/developer/skin/delete", { name }),
									disabled: name === "plain"
								}, {
									default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.developer.delete")), 1)]),
									_: 1
								}, 8, ["onClick", "disabled"])
							];
						}),
						_: 2
					}, _parent, _scopeId));
				});
				_push(`<!--]-->`);
			} else return [
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedForm, {
					method: "post",
					action: "/admin/developer/skin/add"
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [
						(0, require__plugin_vue_export_helper.vue_exports.createVNode)("input", {
							name: "name",
							placeholder: "name",
							required: ""
						}),
						(0, require__plugin_vue_export_helper.vue_exports.createVNode)("input", {
							name: "url",
							placeholder: "URL",
							required: "",
							style: { "width": "40%" }
						}),
						(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_GeneralButton, {
							theme: "primary",
							type: "submit"
						}, {
							default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.developer.add")), 1)]),
							_: 1
						})
					]),
					_: 1
				}),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_GeneralButton, {
					theme: "primary",
					type: "event",
					onClick: $options.buildAllSkin
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.developer.build_all")), 1)]),
					_: 1
				}, 8, ["onClick"]),
				((0, require__plugin_vue_export_helper.vue_exports.openBlock)(true), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(require__plugin_vue_export_helper.vue_exports.Fragment, null, (0, require__plugin_vue_export_helper.vue_exports.renderList)(_ctx.data.skinCommitIds, (commitId, name) => {
					return (0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(_component_Heading, {
						title: name,
						level: 3,
						folded: name === "plain",
						key: name
					}, {
						default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [
							_ctx.data.skinInfos[name] ? ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(require__plugin_vue_export_helper.vue_exports.Fragment, { key: 0 }, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("p", null, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.developer.build_info")), 1), (0, require__plugin_vue_export_helper.vue_exports.createVNode)("ul", null, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("li", null, [
								(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)(" Frontend: " + (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.data.skinInfos[name].commitIds.frontend) + "(", 1),
								(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_LocalDate, { date: _ctx.data.skinInfos[name].commitDates?.frontend ?? 0 }, null, 8, ["date"]),
								(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)(") "),
								_ctx.data.skinInfos[name].commitIds.frontend !== _ctx.data.versionInfo.feCommitId.slice(0, 7) ? ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(require__plugin_vue_export_helper.vue_exports.Fragment, { key: 0 }, [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)(" (" + (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.developer.need_update")) + ") ", 1)], 64)) : (0, require__plugin_vue_export_helper.vue_exports.createCommentVNode)("", true)
							]), (0, require__plugin_vue_export_helper.vue_exports.createVNode)("li", null, [
								(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)(" Skin: " + (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.data.skinInfos[name].commitIds.skin) + "(", 1),
								(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_LocalDate, { date: _ctx.data.skinInfos[name].commitDates?.skin ?? 0 }, null, 8, ["date"]),
								(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)(") "),
								commitId !== _ctx.data.skinInfos[name].commitIds.skin ? ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(require__plugin_vue_export_helper.vue_exports.Fragment, { key: 0 }, [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)(" (" + (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.developer.need_update")) + ") ", 1)], 64)) : (0, require__plugin_vue_export_helper.vue_exports.createCommentVNode)("", true)
							])])], 64)) : ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)("p", { key: 1 }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.developer.no_build")), 1)),
							(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_GeneralButton, {
								theme: "primary",
								type: "event",
								onClick: ($event) => $options.internalPost("/admin/developer/skin/build", { name })
							}, {
								default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.developer.build")), 1)]),
								_: 1
							}, 8, ["onClick"]),
							(0, require__plugin_vue_export_helper.vue_exports.createVNode)("p", null, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.developer.installed_skin")) + ": " + (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(commitId), 1),
							(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_GeneralButton, {
								theme: "primary",
								type: "event",
								onClick: ($event) => $options.internalPost("/admin/developer/skin/update", { name })
							}, {
								default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.developer.do_update")), 1)]),
								_: 1
							}, 8, ["onClick"]),
							(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_GeneralButton, {
								theme: "danger",
								type: "event",
								onClick: ($event) => $options.internalPost("/admin/developer/skin/delete", { name }),
								disabled: name === "plain"
							}, {
								default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.developer.delete")), 1)]),
								_: 1
							}, 8, ["onClick", "disabled"])
						]),
						_: 2
					}, 1032, ["title", "folded"]);
				}), 128))
			];
		}),
		_: 1
	}, _parent));
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_Heading, { title: _ctx.$t("views.developer.tools.title") }, {
		default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_GeneralButton, {
					theme: "primary",
					type: "event",
					onClick: ($event) => $options.internalGet("/admin/config/tools/migrateopennamu")
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.developer.tools.migrateopennamu"))}`);
						else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.developer.tools.migrateopennamu")), 1)];
					}),
					_: 1
				}, _parent, _scopeId));
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_GeneralButton, {
					theme: "primary",
					type: "event",
					onClick: ($event) => $options.internalGet("/admin/config/tools/mailtest")
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.developer.tools.mailtest"))}`);
						else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.developer.tools.mailtest")), 1)];
					}),
					_: 1
				}, _parent, _scopeId));
				_push(`<br data-v-05cbef9b${_scopeId}><br data-v-05cbef9b${_scopeId}>`);
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_GeneralButton, {
					theme: "danger",
					type: "event",
					onClick: ($event) => $options.internalGet("/admin/config/tools/generateblame")
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.developer.tools.generateblame"))}`);
						else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.developer.tools.generateblame")), 1)];
					}),
					_: 1
				}, _parent, _scopeId));
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_GeneralButton, {
					theme: "danger",
					type: "event",
					onClick: ($event) => $options.internalGet("/admin/config/tools/generatebacklink")
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.developer.tools.generatebacklink"))}`);
						else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.developer.tools.generatebacklink")), 1)];
					}),
					_: 1
				}, _parent, _scopeId));
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_GeneralButton, {
					theme: "danger",
					type: "event",
					onClick: ($event) => $options.internalGet("/admin/config/tools/generatebacklink_backlinkonly")
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.developer.tools.generatebacklink_backlinkonly"))}`);
						else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.developer.tools.generatebacklink_backlinkonly")), 1)];
					}),
					_: 1
				}, _parent, _scopeId));
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_GeneralButton, {
					theme: "danger",
					type: "event",
					onClick: ($event) => $options.internalGet("/admin/config/tools/generatebacklink_searchonly")
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.developer.tools.generatebacklink_searchonly"))}`);
						else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.developer.tools.generatebacklink_searchonly")), 1)];
					}),
					_: 1
				}, _parent, _scopeId));
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_GeneralButton, {
					theme: "danger",
					type: "event",
					onClick: ($event) => $options.internalGet("/admin/config/tools/resetsearchindex")
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.developer.tools.resetsearchindex"))}`);
						else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.developer.tools.resetsearchindex")), 1)];
					}),
					_: 1
				}, _parent, _scopeId));
			} else return [
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_GeneralButton, {
					theme: "primary",
					type: "event",
					onClick: ($event) => $options.internalGet("/admin/config/tools/migrateopennamu")
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.developer.tools.migrateopennamu")), 1)]),
					_: 1
				}, 8, ["onClick"]),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_GeneralButton, {
					theme: "primary",
					type: "event",
					onClick: ($event) => $options.internalGet("/admin/config/tools/mailtest")
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.developer.tools.mailtest")), 1)]),
					_: 1
				}, 8, ["onClick"]),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("br"),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("br"),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_GeneralButton, {
					theme: "danger",
					type: "event",
					onClick: ($event) => $options.internalGet("/admin/config/tools/generateblame")
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.developer.tools.generateblame")), 1)]),
					_: 1
				}, 8, ["onClick"]),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_GeneralButton, {
					theme: "danger",
					type: "event",
					onClick: ($event) => $options.internalGet("/admin/config/tools/generatebacklink")
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.developer.tools.generatebacklink")), 1)]),
					_: 1
				}, 8, ["onClick"]),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_GeneralButton, {
					theme: "danger",
					type: "event",
					onClick: ($event) => $options.internalGet("/admin/config/tools/generatebacklink_backlinkonly")
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.developer.tools.generatebacklink_backlinkonly")), 1)]),
					_: 1
				}, 8, ["onClick"]),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_GeneralButton, {
					theme: "danger",
					type: "event",
					onClick: ($event) => $options.internalGet("/admin/config/tools/generatebacklink_searchonly")
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.developer.tools.generatebacklink_searchonly")), 1)]),
					_: 1
				}, 8, ["onClick"]),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_GeneralButton, {
					theme: "danger",
					type: "event",
					onClick: ($event) => $options.internalGet("/admin/config/tools/resetsearchindex")
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.developer.tools.resetsearchindex")), 1)]),
					_: 1
				}, 8, ["onClick"])
			];
		}),
		_: 1
	}, _parent));
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_Heading, { title: "Eval" }, {
		default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push(`<pre class="eval-output-parent" data-v-05cbef9b${_scopeId}><code data-v-05cbef9b${_scopeId}>${_ctx.data.evalOutput ?? ""}</code></pre>`);
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedForm, {
					ref: "evalForm",
					method: "post",
					action: "/admin/developer/eval"
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) {
							_push(`<textarea rows="5" name="code" data-v-05cbef9b${_scopeId}></textarea>`);
							_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_GeneralButton, {
								theme: "primary",
								type: "submit"
							}, {
								default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
									if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.developer.execute"))}`);
									else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.developer.execute")), 1)];
								}),
								_: 1
							}, _parent, _scopeId));
						} else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("textarea", {
							rows: "5",
							name: "code",
							onKeydown: $options.evalKeydown
						}, null, 40, ["onKeydown"]), (0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_GeneralButton, {
							theme: "primary",
							type: "submit"
						}, {
							default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.developer.execute")), 1)]),
							_: 1
						})];
					}),
					_: 1
				}, _parent, _scopeId));
			} else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("pre", { class: "eval-output-parent" }, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("code", { innerHTML: _ctx.data.evalOutput }, null, 8, ["innerHTML"])]), (0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedForm, {
				ref: "evalForm",
				method: "post",
				action: "/admin/developer/eval"
			}, {
				default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("textarea", {
					rows: "5",
					name: "code",
					onKeydown: $options.evalKeydown
				}, null, 40, ["onKeydown"]), (0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_GeneralButton, {
					theme: "primary",
					type: "submit"
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.developer.execute")), 1)]),
					_: 1
				})]),
				_: 1
			}, 512)];
		}),
		_: 1
	}, _parent));
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_Heading, { title: _ctx.$t("views.config.config") }, {
		default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push(`<!--[-->`);
				(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderList)(_ctx.data.jsonConfigs, (item) => {
					_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_Heading, {
						level: 3,
						title: item.name,
						folded: ""
					}, {
						default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
							if (_push) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedForm, {
								method: "post",
								action: "/admin/config/configjson"
							}, {
								default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
									if (_push) {
										_push(`<input type="hidden" name="config"${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttr)("value", item.name)} data-v-05cbef9b${_scopeId}><textarea name="content" rows="15" data-v-05cbef9b${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(item.content)}</textarea>`);
										_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_GeneralButton, {
											theme: "primary",
											type: "submit"
										}, {
											default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
												if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.config.apply"))}`);
												else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.config.apply")), 1)];
											}),
											_: 2
										}, _parent, _scopeId));
									} else return [
										(0, require__plugin_vue_export_helper.vue_exports.createVNode)("input", {
											type: "hidden",
											name: "config",
											value: item.name
										}, null, 8, ["value"]),
										(0, require__plugin_vue_export_helper.vue_exports.createVNode)("textarea", {
											name: "content",
											rows: "15",
											value: item.content
										}, null, 8, ["value"]),
										(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_GeneralButton, {
											theme: "primary",
											type: "submit"
										}, {
											default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.config.apply")), 1)]),
											_: 1
										})
									];
								}),
								_: 2
							}, _parent, _scopeId));
							else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedForm, {
								method: "post",
								action: "/admin/config/configjson"
							}, {
								default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [
									(0, require__plugin_vue_export_helper.vue_exports.createVNode)("input", {
										type: "hidden",
										name: "config",
										value: item.name
									}, null, 8, ["value"]),
									(0, require__plugin_vue_export_helper.vue_exports.createVNode)("textarea", {
										name: "content",
										rows: "15",
										value: item.content
									}, null, 8, ["value"]),
									(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_GeneralButton, {
										theme: "primary",
										type: "submit"
									}, {
										default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.config.apply")), 1)]),
										_: 1
									})
								]),
								_: 2
							}, 1024)];
						}),
						_: 2
					}, _parent, _scopeId));
				});
				_push(`<!--]-->`);
			} else return [((0, require__plugin_vue_export_helper.vue_exports.openBlock)(true), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(require__plugin_vue_export_helper.vue_exports.Fragment, null, (0, require__plugin_vue_export_helper.vue_exports.renderList)(_ctx.data.jsonConfigs, (item) => {
				return (0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(_component_Heading, {
					level: 3,
					title: item.name,
					folded: ""
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedForm, {
						method: "post",
						action: "/admin/config/configjson"
					}, {
						default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [
							(0, require__plugin_vue_export_helper.vue_exports.createVNode)("input", {
								type: "hidden",
								name: "config",
								value: item.name
							}, null, 8, ["value"]),
							(0, require__plugin_vue_export_helper.vue_exports.createVNode)("textarea", {
								name: "content",
								rows: "15",
								value: item.content
							}, null, 8, ["value"]),
							(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_GeneralButton, {
								theme: "primary",
								type: "submit"
							}, {
								default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.config.apply")), 1)]),
								_: 1
							})
						]),
						_: 2
					}, 1024)]),
					_: 2
				}, 1032, ["title"]);
			}), 256))];
		}),
		_: 1
	}, _parent));
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_Heading, { title: _ctx.$t("views.developer.signup") }, {
		default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
			if (_push) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedForm, {
				method: "post",
				action: "/admin/developer/signup"
			}, {
				default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedFormBlock, {
							label: _ctx.$t("views.developer.email"),
							inputId: "emailInput",
							name: "email"
						}, {
							default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
								if (_push) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_InputField, {
									id: "emailInput",
									name: "email",
									required: ""
								}, null, _parent, _scopeId));
								else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_InputField, {
									id: "emailInput",
									name: "email",
									required: ""
								})];
							}),
							_: 1
						}, _parent, _scopeId));
						_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedFormBlock, {
							label: _ctx.$t("views.developer.username"),
							inputId: "nameInput",
							name: "name"
						}, {
							default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
								if (_push) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_InputField, {
									id: "nameInput",
									name: "name"
								}, null, _parent, _scopeId));
								else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_InputField, {
									id: "nameInput",
									name: "name"
								})];
							}),
							_: 1
						}, _parent, _scopeId));
						_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_GeneralButton, {
							theme: "primary",
							type: "submit"
						}, {
							default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
								if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.developer.generate_url"))}`);
								else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.developer.generate_url")), 1)];
							}),
							_: 1
						}, _parent, _scopeId));
					} else return [
						(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedFormBlock, {
							label: _ctx.$t("views.developer.email"),
							inputId: "emailInput",
							name: "email"
						}, {
							default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_InputField, {
								id: "emailInput",
								name: "email",
								required: ""
							})]),
							_: 1
						}, 8, ["label"]),
						(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedFormBlock, {
							label: _ctx.$t("views.developer.username"),
							inputId: "nameInput",
							name: "name"
						}, {
							default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_InputField, {
								id: "nameInput",
								name: "name"
							})]),
							_: 1
						}, 8, ["label"]),
						(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_GeneralButton, {
							theme: "primary",
							type: "submit"
						}, {
							default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.developer.generate_url")), 1)]),
							_: 1
						})
					];
				}),
				_: 1
			}, _parent, _scopeId));
			else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedForm, {
				method: "post",
				action: "/admin/developer/signup"
			}, {
				default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [
					(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedFormBlock, {
						label: _ctx.$t("views.developer.email"),
						inputId: "emailInput",
						name: "email"
					}, {
						default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_InputField, {
							id: "emailInput",
							name: "email",
							required: ""
						})]),
						_: 1
					}, 8, ["label"]),
					(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedFormBlock, {
						label: _ctx.$t("views.developer.username"),
						inputId: "nameInput",
						name: "name"
					}, {
						default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_InputField, {
							id: "nameInput",
							name: "name"
						})]),
						_: 1
					}, 8, ["label"]),
					(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_GeneralButton, {
						theme: "primary",
						type: "submit"
					}, {
						default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.developer.generate_url")), 1)]),
						_: 1
					})
				]),
				_: 1
			})];
		}),
		_: 1
	}, _parent));
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_Heading, { title: _ctx.$t("views.developer.static_file") }, {
		default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push(`<!--[-->`);
				(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderList)(_ctx.data.customStaticFiles, (item) => {
					_push(`<p class="static-file" data-v-05cbef9b${_scopeId}><a${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttr)("href", item)} target="_blank" data-v-05cbef9b${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(item)}</a>`);
					_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedButton, {
						danger: "",
						onClick: ($event) => $options.internalGet("/admin/config/tools/deletestaticfile?path=" + encodeURIComponent(item))
					}, {
						default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
							if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.developer.delete"))}`);
							else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.developer.delete")), 1)];
						}),
						_: 2
					}, _parent, _scopeId));
					_push(`</p>`);
				});
				_push(`<!--]--><hr data-v-05cbef9b${_scopeId}>`);
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedForm, {
					method: "post",
					action: "/admin/developer/staticfile",
					enctype: "multipart/form-data"
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) {
							_push(`<input name="path"${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttr)("placeholder", _ctx.$t("views.developer.path"))} value="/" required data-v-05cbef9b${_scopeId}><input name="filename"${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttr)("placeholder", _ctx.$t("views.developer.filename"))} data-v-05cbef9b${_scopeId}><input type="file" name="file" required data-v-05cbef9b${_scopeId}>`);
							_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_GeneralButton, {
								theme: "primary",
								type: "submit"
							}, {
								default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
									if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.developer.upload"))}`);
									else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.developer.upload")), 1)];
								}),
								_: 1
							}, _parent, _scopeId));
						} else return [
							(0, require__plugin_vue_export_helper.vue_exports.createVNode)("input", {
								name: "path",
								placeholder: _ctx.$t("views.developer.path"),
								value: "/",
								required: ""
							}, null, 8, ["placeholder"]),
							(0, require__plugin_vue_export_helper.vue_exports.createVNode)("input", {
								name: "filename",
								placeholder: _ctx.$t("views.developer.filename")
							}, null, 8, ["placeholder"]),
							(0, require__plugin_vue_export_helper.vue_exports.createVNode)("input", {
								type: "file",
								name: "file",
								required: ""
							}),
							(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_GeneralButton, {
								theme: "primary",
								type: "submit"
							}, {
								default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.developer.upload")), 1)]),
								_: 1
							})
						];
					}),
					_: 1
				}, _parent, _scopeId));
			} else return [
				((0, require__plugin_vue_export_helper.vue_exports.openBlock)(true), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(require__plugin_vue_export_helper.vue_exports.Fragment, null, (0, require__plugin_vue_export_helper.vue_exports.renderList)(_ctx.data.customStaticFiles, (item) => {
					return (0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)("p", { class: "static-file" }, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("a", {
						href: item,
						target: "_blank"
					}, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(item), 9, ["href"]), (0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedButton, {
						danger: "",
						onClick: ($event) => $options.internalGet("/admin/config/tools/deletestaticfile?path=" + encodeURIComponent(item))
					}, {
						default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.developer.delete")), 1)]),
						_: 1
					}, 8, ["onClick"])]);
				}), 256)),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("hr"),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedForm, {
					method: "post",
					action: "/admin/developer/staticfile",
					enctype: "multipart/form-data"
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [
						(0, require__plugin_vue_export_helper.vue_exports.createVNode)("input", {
							name: "path",
							placeholder: _ctx.$t("views.developer.path"),
							value: "/",
							required: ""
						}, null, 8, ["placeholder"]),
						(0, require__plugin_vue_export_helper.vue_exports.createVNode)("input", {
							name: "filename",
							placeholder: _ctx.$t("views.developer.filename")
						}, null, 8, ["placeholder"]),
						(0, require__plugin_vue_export_helper.vue_exports.createVNode)("input", {
							type: "file",
							name: "file",
							required: ""
						}),
						(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_GeneralButton, {
							theme: "primary",
							type: "submit"
						}, {
							default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.developer.upload")), 1)]),
							_: 1
						})
					]),
					_: 1
				})
			];
		}),
		_: 1
	}, _parent));
	_push(`<!--]-->`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = (0, require__plugin_vue_export_helper.vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/contents/admin/developer.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var developer_default = /*#__PURE__*/ require__plugin_vue_export_helper._plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-05cbef9b"]]);
//#endregion
exports.default = developer_default;
