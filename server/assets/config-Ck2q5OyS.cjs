const require__plugin_vue_export_helper = require("./_plugin-vue_export-helper-C1TPHJvg.cjs");
const require_server = require("../server.cjs");
const require_seedForm = require("./seedForm-DLpXnK6K.cjs");
const require_seedButton = require("./seedButton-CbrSfLgh.cjs");
const require_heading = require("./heading-CgAmXkAX.cjs");
//#region src/views/contents/admin/config.vue
var _sfc_main = {
	mixins: [require_server.common_default],
	components: {
		SeedButton: require_seedButton.seedButton_default,
		GeneralButton: require_server.generalButton_default,
		SeedForm: require_seedForm.seedForm_default,
		Heading: require_heading.heading_default
	},
	data() {
		return { disabledFeature: {
			template: 0,
			method: "ALL",
			type: "string",
			condition: "",
			messageType: "flexible",
			message: ""
		} };
	},
	watch: { "disabledFeature.template"() {
		const template = this.data.disabledFeaturesTemplates[this.disabledFeature.template];
		Object.assign(this.disabledFeature, template);
	} },
	methods: { async internalGet(url) {
		await this.internalRequestAndProcess(url);
	} }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_Heading = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("Heading");
	const _component_SeedForm = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("SeedForm");
	const _component_GeneralButton = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("GeneralButton");
	const _component_SeedButton = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("SeedButton");
	_push(`<!--[-->`);
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_Heading, { title: _ctx.$t("views.config.config") }, {
		default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push(`<!--[-->`);
				(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderList)(_ctx.data.jsonConfigs, (item) => {
					_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_Heading, {
						level: 3,
						title: item.name
					}, {
						default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
							if (_push) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedForm, {
								method: "post",
								action: "/admin/config/configjson"
							}, {
								default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
									if (_push) {
										_push(`<input type="hidden" name="config"${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttr)("value", item.name)} data-v-03dfdcea${_scopeId}><textarea name="content" rows="15" data-v-03dfdcea${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(item.content)}</textarea>`);
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
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_Heading, {
					level: 3,
					title: _ctx.$t("views.config.text"),
					folded: ""
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) {
							_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedForm, {
								method: "post",
								action: "/admin/config/stringconfig/add"
							}, {
								default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
									if (_push) {
										_push(`<input name="key" placeholder="key" required data-v-03dfdcea${_scopeId}>`);
										_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_GeneralButton, {
											theme: "primary",
											type: "submit"
										}, {
											default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
												if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.config.add"))}`);
												else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.config.add")), 1)];
											}),
											_: 1
										}, _parent, _scopeId));
										_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_GeneralButton, {
											theme: "primary",
											type: "event",
											onClick: ($event) => $options.internalGet("/admin/config/tools/fixstringconfig")
										}, {
											default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
												if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.config.add_string_field"))}`);
												else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.config.add_string_field")), 1)];
											}),
											_: 1
										}, _parent, _scopeId));
									} else return [
										(0, require__plugin_vue_export_helper.vue_exports.createVNode)("input", {
											name: "key",
											placeholder: "key",
											required: ""
										}),
										(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_GeneralButton, {
											theme: "primary",
											type: "submit"
										}, {
											default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.config.add")), 1)]),
											_: 1
										}),
										(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_GeneralButton, {
											theme: "primary",
											type: "event",
											onClick: ($event) => $options.internalGet("/admin/config/tools/fixstringconfig")
										}, {
											default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.config.add_string_field")), 1)]),
											_: 1
										}, 8, ["onClick"])
									];
								}),
								_: 1
							}, _parent, _scopeId));
							_push(`<!--[-->`);
							(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderList)(_ctx.data.stringConfig, (value, key) => {
								_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedForm, {
									key,
									method: "post",
									action: "/admin/config/stringconfig"
								}, {
									default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
										if (_push) {
											_push(`<input type="hidden" name="key"${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttr)("value", key)} data-v-03dfdcea${_scopeId}>`);
											_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_Heading, {
												title: key,
												level: 4,
												folded: ""
											}, {
												default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
													if (_push) {
														_push(`<textarea name="value" rows="10" data-v-03dfdcea${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(value)}</textarea>`);
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
														_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_GeneralButton, {
															theme: "danger",
															type: "event",
															onClick: ($event) => $options.internalGet(`/admin/config/tools/removestringconfig?key=${encodeURIComponent(key)}`)
														}, {
															default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
																if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.config.delete"))}`);
																else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.config.delete")), 1)];
															}),
															_: 2
														}, _parent, _scopeId));
													} else return [
														(0, require__plugin_vue_export_helper.vue_exports.createVNode)("textarea", {
															name: "value",
															rows: "10",
															value
														}, null, 8, ["value"]),
														(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_GeneralButton, {
															theme: "primary",
															type: "submit"
														}, {
															default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.config.apply")), 1)]),
															_: 1
														}),
														(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_GeneralButton, {
															theme: "danger",
															type: "event",
															onClick: ($event) => $options.internalGet(`/admin/config/tools/removestringconfig?key=${encodeURIComponent(key)}`)
														}, {
															default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.config.delete")), 1)]),
															_: 1
														}, 8, ["onClick"])
													];
												}),
												_: 2
											}, _parent, _scopeId));
										} else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("input", {
											type: "hidden",
											name: "key",
											value: key
										}, null, 8, ["value"]), (0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_Heading, {
											title: key,
											level: 4,
											folded: ""
										}, {
											default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [
												(0, require__plugin_vue_export_helper.vue_exports.createVNode)("textarea", {
													name: "value",
													rows: "10",
													value
												}, null, 8, ["value"]),
												(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_GeneralButton, {
													theme: "primary",
													type: "submit"
												}, {
													default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.config.apply")), 1)]),
													_: 1
												}),
												(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_GeneralButton, {
													theme: "danger",
													type: "event",
													onClick: ($event) => $options.internalGet(`/admin/config/tools/removestringconfig?key=${encodeURIComponent(key)}`)
												}, {
													default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.config.delete")), 1)]),
													_: 1
												}, 8, ["onClick"])
											]),
											_: 2
										}, 1032, ["title"])];
									}),
									_: 2
								}, _parent, _scopeId));
							});
							_push(`<!--]-->`);
						} else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedForm, {
							method: "post",
							action: "/admin/config/stringconfig/add"
						}, {
							default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [
								(0, require__plugin_vue_export_helper.vue_exports.createVNode)("input", {
									name: "key",
									placeholder: "key",
									required: ""
								}),
								(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_GeneralButton, {
									theme: "primary",
									type: "submit"
								}, {
									default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.config.add")), 1)]),
									_: 1
								}),
								(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_GeneralButton, {
									theme: "primary",
									type: "event",
									onClick: ($event) => $options.internalGet("/admin/config/tools/fixstringconfig")
								}, {
									default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.config.add_string_field")), 1)]),
									_: 1
								}, 8, ["onClick"])
							]),
							_: 1
						}), ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(true), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(require__plugin_vue_export_helper.vue_exports.Fragment, null, (0, require__plugin_vue_export_helper.vue_exports.renderList)(_ctx.data.stringConfig, (value, key) => {
							return (0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(_component_SeedForm, {
								key,
								method: "post",
								action: "/admin/config/stringconfig"
							}, {
								default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("input", {
									type: "hidden",
									name: "key",
									value: key
								}, null, 8, ["value"]), (0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_Heading, {
									title: key,
									level: 4,
									folded: ""
								}, {
									default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [
										(0, require__plugin_vue_export_helper.vue_exports.createVNode)("textarea", {
											name: "value",
											rows: "10",
											value
										}, null, 8, ["value"]),
										(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_GeneralButton, {
											theme: "primary",
											type: "submit"
										}, {
											default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.config.apply")), 1)]),
											_: 1
										}),
										(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_GeneralButton, {
											theme: "danger",
											type: "event",
											onClick: ($event) => $options.internalGet(`/admin/config/tools/removestringconfig?key=${encodeURIComponent(key)}`)
										}, {
											default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.config.delete")), 1)]),
											_: 1
										}, 8, ["onClick"])
									]),
									_: 2
								}, 1032, ["title"])]),
								_: 2
							}, 1024);
						}), 128))];
					}),
					_: 1
				}, _parent, _scopeId));
			} else return [((0, require__plugin_vue_export_helper.vue_exports.openBlock)(true), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(require__plugin_vue_export_helper.vue_exports.Fragment, null, (0, require__plugin_vue_export_helper.vue_exports.renderList)(_ctx.data.jsonConfigs, (item) => {
				return (0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(_component_Heading, {
					level: 3,
					title: item.name
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
			}), 256)), (0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_Heading, {
				level: 3,
				title: _ctx.$t("views.config.text"),
				folded: ""
			}, {
				default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedForm, {
					method: "post",
					action: "/admin/config/stringconfig/add"
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [
						(0, require__plugin_vue_export_helper.vue_exports.createVNode)("input", {
							name: "key",
							placeholder: "key",
							required: ""
						}),
						(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_GeneralButton, {
							theme: "primary",
							type: "submit"
						}, {
							default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.config.add")), 1)]),
							_: 1
						}),
						(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_GeneralButton, {
							theme: "primary",
							type: "event",
							onClick: ($event) => $options.internalGet("/admin/config/tools/fixstringconfig")
						}, {
							default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.config.add_string_field")), 1)]),
							_: 1
						}, 8, ["onClick"])
					]),
					_: 1
				}), ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(true), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(require__plugin_vue_export_helper.vue_exports.Fragment, null, (0, require__plugin_vue_export_helper.vue_exports.renderList)(_ctx.data.stringConfig, (value, key) => {
					return (0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(_component_SeedForm, {
						key,
						method: "post",
						action: "/admin/config/stringconfig"
					}, {
						default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("input", {
							type: "hidden",
							name: "key",
							value: key
						}, null, 8, ["value"]), (0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_Heading, {
							title: key,
							level: 4,
							folded: ""
						}, {
							default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [
								(0, require__plugin_vue_export_helper.vue_exports.createVNode)("textarea", {
									name: "value",
									rows: "10",
									value
								}, null, 8, ["value"]),
								(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_GeneralButton, {
									theme: "primary",
									type: "submit"
								}, {
									default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.config.apply")), 1)]),
									_: 1
								}),
								(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_GeneralButton, {
									theme: "danger",
									type: "event",
									onClick: ($event) => $options.internalGet(`/admin/config/tools/removestringconfig?key=${encodeURIComponent(key)}`)
								}, {
									default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.config.delete")), 1)]),
									_: 1
								}, 8, ["onClick"])
							]),
							_: 2
						}, 1032, ["title"])]),
						_: 2
					}, 1024);
				}), 128))]),
				_: 1
			}, 8, ["title"])];
		}),
		_: 1
	}, _parent));
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_Heading, { title: _ctx.$t("views.config.disable_feature") }, {
		default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push(`<div class="wiki-content" data-v-03dfdcea${_scopeId}><div class="wiki-table-wrap" data-v-03dfdcea${_scopeId}><table class="wiki-table" data-v-03dfdcea${_scopeId}><tbody data-v-03dfdcea${_scopeId}><tr class="table-heading" data-v-03dfdcea${_scopeId}><td data-v-03dfdcea${_scopeId}>Method</td><td data-v-03dfdcea${_scopeId}>Type</td><td data-v-03dfdcea${_scopeId}>Condition</td><td data-v-03dfdcea${_scopeId}>MessageType</td><td data-v-03dfdcea${_scopeId}>Message</td><td data-v-03dfdcea${_scopeId}>Action</td></tr><!--[-->`);
				(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderList)(_ctx.data.disabledFeatures, (item, index) => {
					_push(`<tr data-v-03dfdcea${_scopeId}><td style="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderStyle)({ "min-width": "100px" })}" data-v-03dfdcea${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(item.method)}</td><td style="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderStyle)({ "min-width": "100px" })}" data-v-03dfdcea${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(item.type)}</td><td style="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderStyle)({
						"max-width": "300px",
						"white-space": "nowrap",
						"overflow-x": "auto"
					})}" data-v-03dfdcea${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(item.condition)}</td><td style="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderStyle)({ "min-width": "120px" })}" data-v-03dfdcea${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(item.messageType)}</td><td style="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderStyle)({ "min-width": "100px" })}" data-v-03dfdcea${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(item.message)}</td><td data-v-03dfdcea${_scopeId}>`);
					_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedButton, {
						danger: "",
						onClick: ($event) => $options.internalGet(`/admin/config/tools/deletedisabledfeature?index=${index}`)
					}, {
						default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
							if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.config.delete"))}`);
							else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.config.delete")), 1)];
						}),
						_: 2
					}, _parent, _scopeId));
					_push(`</td></tr>`);
				});
				_push(`<!--]--></tbody></table></div></div>`);
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedForm, {
					method: "post",
					action: "/admin/config/disabledfeatures"
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) {
							_push(`<select data-v-03dfdcea${_scopeId}><!--[-->`);
							(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderList)(_ctx.data.disabledFeaturesTemplates, (item, index) => {
								_push(`<option${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttr)("value", index)} data-v-03dfdcea${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrIncludeBooleanAttr)(Array.isArray($data.disabledFeature.template) ? (0, require__plugin_vue_export_helper.server_renderer_exports.ssrLooseContain)($data.disabledFeature.template, index) : (0, require__plugin_vue_export_helper.server_renderer_exports.ssrLooseEqual)($data.disabledFeature.template, index)) ? " selected" : ""}${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(item.name)}</option>`);
							});
							_push(`<!--]--></select><select name="methodField" data-v-03dfdcea${_scopeId}><option data-v-03dfdcea${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrIncludeBooleanAttr)(Array.isArray($data.disabledFeature.method) ? (0, require__plugin_vue_export_helper.server_renderer_exports.ssrLooseContain)($data.disabledFeature.method, null) : (0, require__plugin_vue_export_helper.server_renderer_exports.ssrLooseEqual)($data.disabledFeature.method, null)) ? " selected" : ""}${_scopeId}>ALL</option><option data-v-03dfdcea${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrIncludeBooleanAttr)(Array.isArray($data.disabledFeature.method) ? (0, require__plugin_vue_export_helper.server_renderer_exports.ssrLooseContain)($data.disabledFeature.method, null) : (0, require__plugin_vue_export_helper.server_renderer_exports.ssrLooseEqual)($data.disabledFeature.method, null)) ? " selected" : ""}${_scopeId}>GET</option><option data-v-03dfdcea${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrIncludeBooleanAttr)(Array.isArray($data.disabledFeature.method) ? (0, require__plugin_vue_export_helper.server_renderer_exports.ssrLooseContain)($data.disabledFeature.method, null) : (0, require__plugin_vue_export_helper.server_renderer_exports.ssrLooseEqual)($data.disabledFeature.method, null)) ? " selected" : ""}${_scopeId}>POST</option><option data-v-03dfdcea${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrIncludeBooleanAttr)(Array.isArray($data.disabledFeature.method) ? (0, require__plugin_vue_export_helper.server_renderer_exports.ssrLooseContain)($data.disabledFeature.method, null) : (0, require__plugin_vue_export_helper.server_renderer_exports.ssrLooseEqual)($data.disabledFeature.method, null)) ? " selected" : ""}${_scopeId}>PUT</option><option data-v-03dfdcea${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrIncludeBooleanAttr)(Array.isArray($data.disabledFeature.method) ? (0, require__plugin_vue_export_helper.server_renderer_exports.ssrLooseContain)($data.disabledFeature.method, null) : (0, require__plugin_vue_export_helper.server_renderer_exports.ssrLooseEqual)($data.disabledFeature.method, null)) ? " selected" : ""}${_scopeId}>DELETE</option></select><select name="type" data-v-03dfdcea${_scopeId}><option data-v-03dfdcea${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrIncludeBooleanAttr)(Array.isArray($data.disabledFeature.type) ? (0, require__plugin_vue_export_helper.server_renderer_exports.ssrLooseContain)($data.disabledFeature.type, null) : (0, require__plugin_vue_export_helper.server_renderer_exports.ssrLooseEqual)($data.disabledFeature.type, null)) ? " selected" : ""}${_scopeId}>string</option><option data-v-03dfdcea${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrIncludeBooleanAttr)(Array.isArray($data.disabledFeature.type) ? (0, require__plugin_vue_export_helper.server_renderer_exports.ssrLooseContain)($data.disabledFeature.type, null) : (0, require__plugin_vue_export_helper.server_renderer_exports.ssrLooseEqual)($data.disabledFeature.type, null)) ? " selected" : ""}${_scopeId}>js</option></select><input name="condition" placeholder="condition" required${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttr)("value", $data.disabledFeature.condition)} data-v-03dfdcea${_scopeId}><select name="messageType" data-v-03dfdcea${_scopeId}><option data-v-03dfdcea${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrIncludeBooleanAttr)(Array.isArray($data.disabledFeature.messageType) ? (0, require__plugin_vue_export_helper.server_renderer_exports.ssrLooseContain)($data.disabledFeature.messageType, null) : (0, require__plugin_vue_export_helper.server_renderer_exports.ssrLooseEqual)($data.disabledFeature.messageType, null)) ? " selected" : ""}${_scopeId}>flexible</option><option data-v-03dfdcea${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrIncludeBooleanAttr)(Array.isArray($data.disabledFeature.messageType) ? (0, require__plugin_vue_export_helper.server_renderer_exports.ssrLooseContain)($data.disabledFeature.messageType, null) : (0, require__plugin_vue_export_helper.server_renderer_exports.ssrLooseEqual)($data.disabledFeature.messageType, null)) ? " selected" : ""}${_scopeId}>res.error</option><option data-v-03dfdcea${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrIncludeBooleanAttr)(Array.isArray($data.disabledFeature.messageType) ? (0, require__plugin_vue_export_helper.server_renderer_exports.ssrLooseContain)($data.disabledFeature.messageType, null) : (0, require__plugin_vue_export_helper.server_renderer_exports.ssrLooseEqual)($data.disabledFeature.messageType, null)) ? " selected" : ""}${_scopeId}>plaintext</option></select><input name="message" placeholder="message"${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttr)("value", $data.disabledFeature.message)} data-v-03dfdcea${_scopeId}>`);
							_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_GeneralButton, {
								theme: "primary",
								type: "submit"
							}, {
								default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
									if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.config.add"))}`);
									else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.config.add")), 1)];
								}),
								_: 1
							}, _parent, _scopeId));
						} else return [
							(0, require__plugin_vue_export_helper.vue_exports.withDirectives)((0, require__plugin_vue_export_helper.vue_exports.createVNode)("select", { "onUpdate:modelValue": ($event) => $data.disabledFeature.template = $event }, [((0, require__plugin_vue_export_helper.vue_exports.openBlock)(true), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(require__plugin_vue_export_helper.vue_exports.Fragment, null, (0, require__plugin_vue_export_helper.vue_exports.renderList)(_ctx.data.disabledFeaturesTemplates, (item, index) => {
								return (0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)("option", { value: index }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(item.name), 9, ["value"]);
							}), 256))], 8, ["onUpdate:modelValue"]), [[require__plugin_vue_export_helper.vue_exports.vModelSelect, $data.disabledFeature.template]]),
							(0, require__plugin_vue_export_helper.vue_exports.withDirectives)((0, require__plugin_vue_export_helper.vue_exports.createVNode)("select", {
								name: "methodField",
								"onUpdate:modelValue": ($event) => $data.disabledFeature.method = $event
							}, [
								(0, require__plugin_vue_export_helper.vue_exports.createVNode)("option", null, "ALL"),
								(0, require__plugin_vue_export_helper.vue_exports.createVNode)("option", null, "GET"),
								(0, require__plugin_vue_export_helper.vue_exports.createVNode)("option", null, "POST"),
								(0, require__plugin_vue_export_helper.vue_exports.createVNode)("option", null, "PUT"),
								(0, require__plugin_vue_export_helper.vue_exports.createVNode)("option", null, "DELETE")
							], 8, ["onUpdate:modelValue"]), [[require__plugin_vue_export_helper.vue_exports.vModelSelect, $data.disabledFeature.method]]),
							(0, require__plugin_vue_export_helper.vue_exports.withDirectives)((0, require__plugin_vue_export_helper.vue_exports.createVNode)("select", {
								name: "type",
								"onUpdate:modelValue": ($event) => $data.disabledFeature.type = $event
							}, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("option", null, "string"), (0, require__plugin_vue_export_helper.vue_exports.createVNode)("option", null, "js")], 8, ["onUpdate:modelValue"]), [[require__plugin_vue_export_helper.vue_exports.vModelSelect, $data.disabledFeature.type]]),
							(0, require__plugin_vue_export_helper.vue_exports.withDirectives)((0, require__plugin_vue_export_helper.vue_exports.createVNode)("input", {
								name: "condition",
								placeholder: "condition",
								required: "",
								"onUpdate:modelValue": ($event) => $data.disabledFeature.condition = $event
							}, null, 8, ["onUpdate:modelValue"]), [[require__plugin_vue_export_helper.vue_exports.vModelText, $data.disabledFeature.condition]]),
							(0, require__plugin_vue_export_helper.vue_exports.withDirectives)((0, require__plugin_vue_export_helper.vue_exports.createVNode)("select", {
								name: "messageType",
								"onUpdate:modelValue": ($event) => $data.disabledFeature.messageType = $event
							}, [
								(0, require__plugin_vue_export_helper.vue_exports.createVNode)("option", null, "flexible"),
								(0, require__plugin_vue_export_helper.vue_exports.createVNode)("option", null, "res.error"),
								(0, require__plugin_vue_export_helper.vue_exports.createVNode)("option", null, "plaintext")
							], 8, ["onUpdate:modelValue"]), [[require__plugin_vue_export_helper.vue_exports.vModelSelect, $data.disabledFeature.messageType]]),
							(0, require__plugin_vue_export_helper.vue_exports.withDirectives)((0, require__plugin_vue_export_helper.vue_exports.createVNode)("input", {
								name: "message",
								placeholder: "message",
								"onUpdate:modelValue": ($event) => $data.disabledFeature.message = $event
							}, null, 8, ["onUpdate:modelValue"]), [[require__plugin_vue_export_helper.vue_exports.vModelText, $data.disabledFeature.message]]),
							(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_GeneralButton, {
								theme: "primary",
								type: "submit"
							}, {
								default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.config.add")), 1)]),
								_: 1
							})
						];
					}),
					_: 1
				}, _parent, _scopeId));
			} else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: "wiki-content" }, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: "wiki-table-wrap" }, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("table", { class: "wiki-table" }, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("tbody", null, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("tr", { class: "table-heading" }, [
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("td", null, "Method"),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("td", null, "Type"),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("td", null, "Condition"),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("td", null, "MessageType"),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("td", null, "Message"),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("td", null, "Action")
			]), ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(true), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(require__plugin_vue_export_helper.vue_exports.Fragment, null, (0, require__plugin_vue_export_helper.vue_exports.renderList)(_ctx.data.disabledFeatures, (item, index) => {
				return (0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)("tr", null, [
					(0, require__plugin_vue_export_helper.vue_exports.createVNode)("td", { style: { "min-width": "100px" } }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(item.method), 1),
					(0, require__plugin_vue_export_helper.vue_exports.createVNode)("td", { style: { "min-width": "100px" } }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(item.type), 1),
					(0, require__plugin_vue_export_helper.vue_exports.createVNode)("td", { style: {
						"max-width": "300px",
						"white-space": "nowrap",
						"overflow-x": "auto"
					} }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(item.condition), 1),
					(0, require__plugin_vue_export_helper.vue_exports.createVNode)("td", { style: { "min-width": "120px" } }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(item.messageType), 1),
					(0, require__plugin_vue_export_helper.vue_exports.createVNode)("td", { style: { "min-width": "100px" } }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(item.message), 1),
					(0, require__plugin_vue_export_helper.vue_exports.createVNode)("td", null, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedButton, {
						danger: "",
						onClick: ($event) => $options.internalGet(`/admin/config/tools/deletedisabledfeature?index=${index}`)
					}, {
						default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.config.delete")), 1)]),
						_: 1
					}, 8, ["onClick"])])
				]);
			}), 256))])])])]), (0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedForm, {
				method: "post",
				action: "/admin/config/disabledfeatures"
			}, {
				default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [
					(0, require__plugin_vue_export_helper.vue_exports.withDirectives)((0, require__plugin_vue_export_helper.vue_exports.createVNode)("select", { "onUpdate:modelValue": ($event) => $data.disabledFeature.template = $event }, [((0, require__plugin_vue_export_helper.vue_exports.openBlock)(true), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(require__plugin_vue_export_helper.vue_exports.Fragment, null, (0, require__plugin_vue_export_helper.vue_exports.renderList)(_ctx.data.disabledFeaturesTemplates, (item, index) => {
						return (0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)("option", { value: index }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(item.name), 9, ["value"]);
					}), 256))], 8, ["onUpdate:modelValue"]), [[require__plugin_vue_export_helper.vue_exports.vModelSelect, $data.disabledFeature.template]]),
					(0, require__plugin_vue_export_helper.vue_exports.withDirectives)((0, require__plugin_vue_export_helper.vue_exports.createVNode)("select", {
						name: "methodField",
						"onUpdate:modelValue": ($event) => $data.disabledFeature.method = $event
					}, [
						(0, require__plugin_vue_export_helper.vue_exports.createVNode)("option", null, "ALL"),
						(0, require__plugin_vue_export_helper.vue_exports.createVNode)("option", null, "GET"),
						(0, require__plugin_vue_export_helper.vue_exports.createVNode)("option", null, "POST"),
						(0, require__plugin_vue_export_helper.vue_exports.createVNode)("option", null, "PUT"),
						(0, require__plugin_vue_export_helper.vue_exports.createVNode)("option", null, "DELETE")
					], 8, ["onUpdate:modelValue"]), [[require__plugin_vue_export_helper.vue_exports.vModelSelect, $data.disabledFeature.method]]),
					(0, require__plugin_vue_export_helper.vue_exports.withDirectives)((0, require__plugin_vue_export_helper.vue_exports.createVNode)("select", {
						name: "type",
						"onUpdate:modelValue": ($event) => $data.disabledFeature.type = $event
					}, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("option", null, "string"), (0, require__plugin_vue_export_helper.vue_exports.createVNode)("option", null, "js")], 8, ["onUpdate:modelValue"]), [[require__plugin_vue_export_helper.vue_exports.vModelSelect, $data.disabledFeature.type]]),
					(0, require__plugin_vue_export_helper.vue_exports.withDirectives)((0, require__plugin_vue_export_helper.vue_exports.createVNode)("input", {
						name: "condition",
						placeholder: "condition",
						required: "",
						"onUpdate:modelValue": ($event) => $data.disabledFeature.condition = $event
					}, null, 8, ["onUpdate:modelValue"]), [[require__plugin_vue_export_helper.vue_exports.vModelText, $data.disabledFeature.condition]]),
					(0, require__plugin_vue_export_helper.vue_exports.withDirectives)((0, require__plugin_vue_export_helper.vue_exports.createVNode)("select", {
						name: "messageType",
						"onUpdate:modelValue": ($event) => $data.disabledFeature.messageType = $event
					}, [
						(0, require__plugin_vue_export_helper.vue_exports.createVNode)("option", null, "flexible"),
						(0, require__plugin_vue_export_helper.vue_exports.createVNode)("option", null, "res.error"),
						(0, require__plugin_vue_export_helper.vue_exports.createVNode)("option", null, "plaintext")
					], 8, ["onUpdate:modelValue"]), [[require__plugin_vue_export_helper.vue_exports.vModelSelect, $data.disabledFeature.messageType]]),
					(0, require__plugin_vue_export_helper.vue_exports.withDirectives)((0, require__plugin_vue_export_helper.vue_exports.createVNode)("input", {
						name: "message",
						placeholder: "message",
						"onUpdate:modelValue": ($event) => $data.disabledFeature.message = $event
					}, null, 8, ["onUpdate:modelValue"]), [[require__plugin_vue_export_helper.vue_exports.vModelText, $data.disabledFeature.message]]),
					(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_GeneralButton, {
						theme: "primary",
						type: "submit"
					}, {
						default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.config.add")), 1)]),
						_: 1
					})
				]),
				_: 1
			})];
		}),
		_: 1
	}, _parent));
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_Heading, {
		title: _ctx.$t("views.config.move_opennamu_contributions"),
		folded: ""
	}, {
		default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
			if (_push) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_SeedForm, {
				method: "post",
				action: "/admin/config/migratecontribution"
			}, {
				default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<input name="from"${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttr)("placeholder", _ctx.$t("views.config.move_opennamu_from"))} required data-v-03dfdcea${_scopeId}><input name="to"${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttr)("placeholder", _ctx.$t("views.config.move_opennamu_to"))} required data-v-03dfdcea${_scopeId}>`);
						_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_GeneralButton, {
							theme: "primary",
							type: "submit"
						}, {
							default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
								if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.config.move_opennamu_submit"))}`);
								else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.config.move_opennamu_submit")), 1)];
							}),
							_: 1
						}, _parent, _scopeId));
					} else return [
						(0, require__plugin_vue_export_helper.vue_exports.createVNode)("input", {
							name: "from",
							placeholder: _ctx.$t("views.config.move_opennamu_from"),
							required: ""
						}, null, 8, ["placeholder"]),
						(0, require__plugin_vue_export_helper.vue_exports.createVNode)("input", {
							name: "to",
							placeholder: _ctx.$t("views.config.move_opennamu_to"),
							required: ""
						}, null, 8, ["placeholder"]),
						(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_GeneralButton, {
							theme: "primary",
							type: "submit"
						}, {
							default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.config.move_opennamu_submit")), 1)]),
							_: 1
						})
					];
				}),
				_: 1
			}, _parent, _scopeId));
			else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_SeedForm, {
				method: "post",
				action: "/admin/config/migratecontribution"
			}, {
				default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [
					(0, require__plugin_vue_export_helper.vue_exports.createVNode)("input", {
						name: "from",
						placeholder: _ctx.$t("views.config.move_opennamu_from"),
						required: ""
					}, null, 8, ["placeholder"]),
					(0, require__plugin_vue_export_helper.vue_exports.createVNode)("input", {
						name: "to",
						placeholder: _ctx.$t("views.config.move_opennamu_to"),
						required: ""
					}, null, 8, ["placeholder"]),
					(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_GeneralButton, {
						theme: "primary",
						type: "submit"
					}, {
						default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.config.move_opennamu_submit")), 1)]),
						_: 1
					})
				]),
				_: 1
			})];
		}),
		_: 1
	}, _parent));
	_push(`<!--]-->`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = (0, require__plugin_vue_export_helper.vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/contents/admin/config.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var config_default = /*#__PURE__*/ require__plugin_vue_export_helper._plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-03dfdcea"]]);
//#endregion
exports.default = config_default;
