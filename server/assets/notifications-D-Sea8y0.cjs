const require__plugin_vue_export_helper = require("./_plugin-vue_export-helper-C1TPHJvg.cjs");
const require_server = require("../server.cjs");
const require_prevNextBtn = require("./prevNextBtn-BuquZ4_C.cjs");
const require_authorSpan = require("./authorSpan-Cr3XG9VP.cjs");
const require_linkTab = require("./linkTab-L3ri292q.cjs");
const require_comment = require("./comment-DpU11qiu.cjs");
//#region src/views/contents/member/notifications.vue
var NotificationTypes = {
	UserDiscuss: 0,
	Mention: 1,
	Owner: 2,
	Plugin: 3
};
var _sfc_main = {
	mixins: [require_server.common_default],
	components: {
		Alert: require_server.alert_default,
		GeneralButton: require_server.generalButton_default,
		LocalDate: require_server.localDate_default,
		AuthorSpan: require_authorSpan.authorSpan_default,
		NuxtLink: require_server.nuxtLink_default,
		PrevNextBtn: require_prevNextBtn.prevNextBtn_default,
		LinkTab: require_linkTab.linkTab_default,
		Comment: require_comment.comment_default
	},
	data() {
		return {
			NotificationTypes,
			showSubscribePushUI: false,
			disableSubscribePushUI: false
		};
	},
	mounted() {
		this.onLoaded();
	},
	watch: { $route() {
		this.onLoaded();
	} },
	computed: { pushNotificationSupported() {
		return "serviceWorker" in navigator && "PushManager" in window;
	} },
	methods: {
		async onLoaded() {
			if (this.pushNotificationSupported) {
				if (!await this.subscribedPushNotification()) this.showSubscribePushUI = true;
			}
		},
		iconClass(type) {
			return {
				[NotificationTypes.UserDiscuss]: "icon-user-discuss",
				[NotificationTypes.Mention]: "icon-mention",
				[NotificationTypes.Owner]: "icon-owner"
			}[type];
		},
		iconName(type) {
			return {
				[NotificationTypes.UserDiscuss]: "comments",
				[NotificationTypes.Mention]: "at",
				[NotificationTypes.Owner]: "bullhorn",
				[NotificationTypes.Plugin]: "bell"
			}[type];
		},
		async markNotification(uuid, read) {
			await this.internalRequestAndProcess(`/member/notifications/${uuid}/${read ? "read" : "unread"}`, { method: "POST" });
		},
		async readAll() {
			await this.internalRequestAndProcess("/member/notifications/read", { method: "POST" });
		},
		async subscribedPushNotification() {
			if (!this.pushNotificationSupported) return false;
			const registration = await navigator.serviceWorker.getRegistration();
			return !!(registration && await registration.pushManager.getSubscription());
		},
		async subscribePushNotificationButton() {
			this.disableSubscribePushUI = true;
			try {
				return await this.subscribePushNotification();
			} finally {
				this.disableSubscribePushUI = false;
			}
		},
		async subscribePushNotification() {
			if (!this.pushNotificationSupported) return;
			if (await this.subscribedPushNotification()) return;
			if (await Notification.requestPermission() === "denied") return alert(this.$t("views.notifications.permission_denied"));
			const { applicationServerKey } = await this.internalRequest("/member/notifications/subscribe");
			const registration = await navigator.serviceWorker.register("/sw.js");
			console.log(registration);
			if (!registration.active) await new Promise((resolve) => {
				registration.addEventListener("updatefound", () => {
					const newWorker = registration.installing;
					newWorker.addEventListener("statechange", () => {
						if (newWorker.state === "activated") resolve();
					});
				});
			});
			const pushSubscription = await registration.pushManager.subscribe({
				userVisibleOnly: true,
				applicationServerKey
			});
			console.log(pushSubscription);
			await this.internalRequestAndProcess("/member/notifications/subscribe", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(pushSubscription)
			});
			this.showSubscribePushUI = false;
		}
	}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_LinkTab = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("LinkTab");
	const _component_PrevNextBtn = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("PrevNextBtn");
	const _component_GeneralButton = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("GeneralButton");
	const _component_FontAwesomeIcon = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("FontAwesomeIcon");
	const _component_i18next = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("i18next");
	const _component_AuthorSpan = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("AuthorSpan");
	const _component_NuxtLink = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("NuxtLink");
	const _component_LocalDate = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("LocalDate");
	_push(`<!--[-->`);
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_LinkTab, { items: [
		{
			title: _ctx.$t("views.notifications.status.unread"),
			href: "?status=unread",
			active: !_ctx.$route.query.status || _ctx.$route.query.status === "unread"
		},
		{
			title: _ctx.$t("views.notifications.status.read"),
			href: "?status=read",
			active: _ctx.$route.query.status === "read"
		},
		{
			title: _ctx.$t("views.notifications.status.all"),
			href: "?status=all",
			active: _ctx.$route.query.status === "all"
		}
	] }, null, _parent));
	_push(`<div class="top-button-group" data-v-aece712e>`);
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_PrevNextBtn, (0, require__plugin_vue_export_helper.vue_exports.mergeProps)({ flex: "" }, _ctx.data.pageProps), null, _parent));
	if ($data.showSubscribePushUI) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_GeneralButton, {
		whenClick: $options.subscribePushNotificationButton,
		disabled: $data.disableSubscribePushUI
	}, {
		default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
			if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.notifications.turn_on_push"))}`);
			else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.notifications.turn_on_push")), 1)];
		}),
		_: 1
	}, _parent));
	else _push(`<!---->`);
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_GeneralButton, {
		whenClick: $options.readAll,
		disabled: !_ctx.session.notifications.length
	}, {
		default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
			if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.notifications.read_all"))}`);
			else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.notifications.read_all")), 1)];
		}),
		_: 1
	}, _parent));
	_push(`</div><ul class="list" data-v-aece712e>`);
	if (_ctx.data.items.length) {
		_push(`<!--[-->`);
		(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderList)(_ctx.data.items, (item) => {
			_push(`<li class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)([{ read: item.read }, "row-parent"])}" data-v-aece712e>`);
			(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderVNode)(_push, (0, require__plugin_vue_export_helper.vue_exports.createVNode)((0, require__plugin_vue_export_helper.vue_exports.resolveDynamicComponent)(item.url ? "NuxtLink" : "div"), {
				to: item.url,
				class: "row row-link"
			}, {
				default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="item" data-v-aece712e${_scopeId}><span class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)([$options.iconClass(item.type), "icon"])}" data-v-aece712e${_scopeId}>`);
						_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_FontAwesomeIcon, { icon: $options.iconName(item.type) }, null, _parent, _scopeId));
						_push(`</span></div><div class="item content" data-v-aece712e${_scopeId}>`);
						if (item.type === $data.NotificationTypes.UserDiscuss) {
							_push(`<!--[--><div data-v-aece712e${_scopeId}>`);
							_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_i18next, { translation: _ctx.$t("views.notifications.messages.user_discuss") }, {
								user: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
									if (_push) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_AuthorSpan, { account: item.comment.user }, null, _parent, _scopeId));
									else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_AuthorSpan, { account: item.comment.user }, null, 8, ["account"])];
								}),
								link: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
									if (_push) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_NuxtLink, { to: "/thread/" + item.thread.url }, {
										default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
											if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(item.thread.topic)} #${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(item.comment.id)}`);
											else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(item.thread.topic) + " #" + (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(item.comment.id), 1)];
										}),
										_: 2
									}, _parent, _scopeId));
									else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_NuxtLink, { to: "/thread/" + item.thread.url }, {
										default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(item.thread.topic) + " #" + (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(item.comment.id), 1)]),
										_: 2
									}, 1032, ["to"])];
								}),
								_: 2
							}, _parent, _scopeId));
							_push(`</div><div class="text" data-v-aece712e${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.removeHtmlTags(item.comment.contentHtml))}</div><!--]-->`);
						} else if (item.type === $data.NotificationTypes.Mention) {
							_push(`<!--[--><div data-v-aece712e${_scopeId}>`);
							_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_i18next, { translation: _ctx.$t("views.notifications.messages.mention") }, {
								user: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
									if (_push) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_AuthorSpan, { account: item.comment.user }, null, _parent, _scopeId));
									else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_AuthorSpan, { account: item.comment.user }, null, 8, ["account"])];
								}),
								link: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
									if (_push) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_NuxtLink, { to: "/thread/" + item.thread.url }, {
										default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
											if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(item.thread.topic)} #${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(item.comment.id)}`);
											else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(item.thread.topic) + " #" + (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(item.comment.id), 1)];
										}),
										_: 2
									}, _parent, _scopeId));
									else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_NuxtLink, { to: "/thread/" + item.thread.url }, {
										default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(item.thread.topic) + " #" + (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(item.comment.id), 1)]),
										_: 2
									}, 1032, ["to"])];
								}),
								_: 2
							}, _parent, _scopeId));
							_push(`<span class="document-group" data-v-aece712e${_scopeId}><span class="document-icon" data-v-aece712e${_scopeId}>`);
							_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_FontAwesomeIcon, { icon: "fa-regular fa-file-lines" }, null, _parent, _scopeId));
							_push(`</span>`);
							_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_NuxtLink, {
								to: _ctx.doc_action_link(item.document, "discuss"),
								class: "document-link"
							}, {
								default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
									if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.doc_fulltitle(item.document))}`);
									else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.doc_fulltitle(item.document)), 1)];
								}),
								_: 2
							}, _parent, _scopeId));
							_push(`</span></div><div class="text" data-v-aece712e${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.removeHtmlTags(item.comment.contentHtml))}</div><!--]-->`);
						} else if (item.type === $data.NotificationTypes.Owner || item.type === $data.NotificationTypes.Plugin) _push(`<div class="html-notification" data-v-aece712e${_scopeId}>${item.data ?? ""}</div>`);
						else _push(`<!---->`);
						_push(`<div class="text" data-v-aece712e${_scopeId}>`);
						_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_LocalDate, {
							date: item.createdAt,
							relative: ""
						}, null, _parent, _scopeId));
						_push(`</div></div><div class="buttons-wrap" data-v-aece712e${_scopeId}>`);
						if (item.read) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_GeneralButton, {
							size: "small",
							whenClick: () => $options.markNotification(item.uuid, false)
						}, {
							default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
								if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.notifications.mark_unread"))}`);
								else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.notifications.mark_unread")), 1)];
							}),
							_: 2
						}, _parent, _scopeId));
						else _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_GeneralButton, {
							size: "small",
							whenClick: () => $options.markNotification(item.uuid, true)
						}, {
							default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
								if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.notifications.mark_read"))}`);
								else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.notifications.mark_read")), 1)];
							}),
							_: 2
						}, _parent, _scopeId));
						_push(`</div>`);
					} else return [
						(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: "item" }, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("span", { class: ["icon", $options.iconClass(item.type)] }, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_FontAwesomeIcon, { icon: $options.iconName(item.type) }, null, 8, ["icon"])], 2)]),
						(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: "item content" }, [item.type === $data.NotificationTypes.UserDiscuss ? ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(require__plugin_vue_export_helper.vue_exports.Fragment, { key: 0 }, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", null, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_i18next, { translation: _ctx.$t("views.notifications.messages.user_discuss") }, {
							user: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_AuthorSpan, { account: item.comment.user }, null, 8, ["account"])]),
							link: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_NuxtLink, { to: "/thread/" + item.thread.url }, {
								default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(item.thread.topic) + " #" + (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(item.comment.id), 1)]),
								_: 2
							}, 1032, ["to"])]),
							_: 2
						}, 1032, ["translation"])]), (0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: "text" }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.removeHtmlTags(item.comment.contentHtml)), 1)], 64)) : item.type === $data.NotificationTypes.Mention ? ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(require__plugin_vue_export_helper.vue_exports.Fragment, { key: 1 }, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", null, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_i18next, { translation: _ctx.$t("views.notifications.messages.mention") }, {
							user: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_AuthorSpan, { account: item.comment.user }, null, 8, ["account"])]),
							link: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_NuxtLink, { to: "/thread/" + item.thread.url }, {
								default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(item.thread.topic) + " #" + (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(item.comment.id), 1)]),
								_: 2
							}, 1032, ["to"])]),
							_: 2
						}, 1032, ["translation"]), (0, require__plugin_vue_export_helper.vue_exports.createVNode)("span", { class: "document-group" }, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("span", { class: "document-icon" }, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_FontAwesomeIcon, { icon: "fa-regular fa-file-lines" })]), (0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_NuxtLink, {
							to: _ctx.doc_action_link(item.document, "discuss"),
							class: "document-link"
						}, {
							default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.doc_fulltitle(item.document)), 1)]),
							_: 2
						}, 1032, ["to"])])]), (0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: "text" }, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.removeHtmlTags(item.comment.contentHtml)), 1)], 64)) : item.type === $data.NotificationTypes.Owner || item.type === $data.NotificationTypes.Plugin ? ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)("div", {
							key: 2,
							innerHTML: item.data,
							class: "html-notification"
						}, null, 8, ["innerHTML"])) : (0, require__plugin_vue_export_helper.vue_exports.createCommentVNode)("", true), (0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: "text" }, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_LocalDate, {
							date: item.createdAt,
							relative: ""
						}, null, 8, ["date"])])]),
						(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: "buttons-wrap" }, [item.read ? ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(_component_GeneralButton, {
							key: 0,
							size: "small",
							whenClick: () => $options.markNotification(item.uuid, false)
						}, {
							default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.notifications.mark_unread")), 1)]),
							_: 1
						}, 8, ["whenClick"])) : ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(_component_GeneralButton, {
							key: 1,
							size: "small",
							whenClick: () => $options.markNotification(item.uuid, true)
						}, {
							default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("views.notifications.mark_read")), 1)]),
							_: 1
						}, 8, ["whenClick"]))])
					];
				}),
				_: 2
			}), _parent);
			_push(`</li>`);
		});
		_push(`<!--]-->`);
	} else _push(`<li class="row-parent" data-v-aece712e><div class="row no-item" data-v-aece712e> (${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("views.notifications.checked_all"))}) </div></li>`);
	_push(`</ul>`);
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_PrevNextBtn, (0, require__plugin_vue_export_helper.vue_exports.mergeProps)({ flex: "" }, _ctx.data.pageProps), null, _parent));
	_push(`<!--]-->`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = (0, require__plugin_vue_export_helper.vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/contents/member/notifications.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var notifications_default = /*#__PURE__*/ require__plugin_vue_export_helper._plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-aece712e"]]);
//#endregion
exports.default = notifications_default;
