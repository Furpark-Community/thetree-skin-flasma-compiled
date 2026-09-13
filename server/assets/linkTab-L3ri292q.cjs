const require__plugin_vue_export_helper = require("./_plugin-vue_export-helper-C1TPHJvg.cjs");
//#region src/components/linkTabItem.vue
var _sfc_main$1 = {
	components: { NuxtLink: require("../server.cjs").nuxtLink_default },
	props: {
		href: {
			type: String,
			required: true
		},
		active: Boolean
	}
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_NuxtLink = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("NuxtLink");
	_push(`<li${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttrs)((0, require__plugin_vue_export_helper.vue_exports.mergeProps)({ ref: "item" }, _attrs))} data-v-28b4d28e>`);
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_NuxtLink, {
		to: $props.href,
		class: ["item", { active: $props.active }]
	}, {
		default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
			if (_push) (0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "default", {}, null, _push, _parent, _scopeId);
			else return [(0, require__plugin_vue_export_helper.vue_exports.renderSlot)(_ctx.$slots, "default", {}, void 0, true)];
		}),
		_: 3
	}, _parent));
	_push(`</li>`);
}
var _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
	const ssrContext = (0, require__plugin_vue_export_helper.vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/linkTabItem.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
//#endregion
//#region src/components/linkTab.vue
var _sfc_main = {
	components: { LinkTabItem: /* @__PURE__ */ require__plugin_vue_export_helper._plugin_vue_export_helper_default(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-28b4d28e"]]) },
	props: {
		items: {
			type: Array,
			required: true
		},
		tab: Boolean
	},
	data() {
		return {
			eventAbortController: void 0,
			showScrollGlowLeft: false,
			showScrollGlowRight: false,
			scrollGlowOpacityLeft: 1,
			scrollGlowOpacityRight: 1,
			scrollGlowWidth: 0,
			navigationPaddingLeft: 0,
			navigationPaddingRight: 0
		};
	},
	directives: { dragToScroll(el, binding) {
		let startX, startY, scrollLeft;
		let isDragging = false;
		const signal = (binding.value?.controller)?.signal;
		const clearDrag = () => {
			if (!isDragging) return;
			isDragging = false;
			Array.from(el.querySelectorAll("a")).forEach((a) => {
				a.removeAttribute("draggable");
				a.style.removeProperty("user-select");
				a.style.removeProperty("pointer-events");
			});
		};
		el.addEventListener("mousedown", (e) => {
			scrollLeft = el.scrollLeft;
			el.scrollTop;
			startX = e.pageX - el.offsetLeft;
			startY = e.pageY - el.offsetTop;
			isDragging = true;
		}, { signal });
		el.addEventListener("mousemove", (e) => {
			if (!isDragging) return;
			const dx = e.pageX - el.offsetLeft - startX;
			const dy = e.pageY - el.offsetTop - startY;
			if (dx !== 0 || dy !== 0) Array.from(el.querySelectorAll("a")).forEach((a) => {
				a.setAttribute("draggable", "false");
				a.style.userSelect = "none";
				a.style.pointerEvents = "none";
			});
			el.scrollLeft = scrollLeft - dx;
		}, { signal });
		el.addEventListener("mouseup", clearDrag, { signal });
		el.addEventListener("mouseleave", clearDrag, { signal });
	} },
	methods: {
		navigationHorizontalScrollCheck(initial) {
			const nav = this.$refs.navigation;
			if (!nav) return;
			if (nav.firstChild) {
				const style = getComputedStyle(nav.firstChild);
				const mr = parseFloat(style.marginRight) || 0;
				const ml = parseFloat(style.marginLeft) || 0;
				if (mr > 0) this.navigationPaddingRight = mr;
				if (ml > 0) this.navigationPaddingLeft = ml;
			}
			const glowEl = this.$refs.scrollGlowLeft;
			this.scrollGlowWidth = parseFloat(getComputedStyle(glowEl).width) || 0;
			if (initial && Array.isArray(this.$refs.items)) {
				const itemEl = this.$refs.items.find((c) => c.$props.active)?.$refs.item;
				if (itemEl) {
					const rect = itemEl.getBoundingClientRect();
					const center = rect.left + nav.scrollLeft + rect.width / 2;
					const half = nav.offsetWidth / 2;
					nav.scrollLeft = center > half ? center - half : 0;
				}
			}
			this.showScrollGlowLeft = nav.scrollLeft >= this.scrollGlowWidth;
			this.showScrollGlowRight = nav.offsetWidth + nav.scrollLeft < nav.scrollWidth;
		},
		navigationHorizontalScrollProcess() {
			const nav = this.$refs.navigation;
			if (!nav) return;
			if (nav.scrollLeft < this.navigationPaddingLeft) this.scrollGlowOpacityLeft = 1;
			else this.scrollGlowOpacityLeft = (nav.scrollLeft - this.navigationPaddingLeft) / this.scrollGlowWidth;
			this.showScrollGlowLeft = nav.scrollLeft > this.navigationPaddingLeft;
			const maxScroll = nav.scrollWidth - this.navigationPaddingRight;
			const distanceRight = maxScroll - nav.offsetWidth - nav.scrollLeft;
			if (distanceRight > this.scrollGlowWidth) this.scrollGlowOpacityRight = 1;
			else this.scrollGlowOpacityRight = distanceRight / this.scrollGlowWidth;
			this.showScrollGlowRight = nav.offsetWidth + nav.scrollLeft < maxScroll;
		},
		onResizeWindow() {
			this.navigationHorizontalScrollCheck(false);
			this.navigationHorizontalScrollProcess();
		},
		onNavigationScroll() {
			this.navigationHorizontalScrollProcess();
		}
	},
	watch: { async $route() {
		await this.$nextTick();
		this.navigationHorizontalScrollCheck(true);
		this.navigationHorizontalScrollProcess();
	} },
	mounted() {
		this.eventAbortController = new AbortController();
		this.navigationHorizontalScrollCheck(true);
		this.navigationHorizontalScrollProcess();
		window.addEventListener("resize", this.onResizeWindow, { signal: this.eventAbortController.signal });
	}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_LinkTabItem = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("LinkTabItem");
	const _directive_drag_to_scroll = (0, require__plugin_vue_export_helper.vue_exports.resolveDirective)("drag-to-scroll");
	_push(`<div${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttrs)((0, require__plugin_vue_export_helper.vue_exports.mergeProps)({ class: "link-tab" }, _attrs))} data-v-143bfd4e><div${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttrs)((0, require__plugin_vue_export_helper.vue_exports.mergeProps)({
		ref: "navigation",
		class: ["tab-content", { "tab-line": $props.tab }]
	}, (0, require__plugin_vue_export_helper.server_renderer_exports.ssrGetDirectiveProps)(_ctx, _directive_drag_to_scroll, { controller: $data.eventAbortController })))} data-v-143bfd4e><div class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)([{ "tab-wrapper": $props.tab }, "list-wrapper"])}" data-v-143bfd4e><ul class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)([{ "list-tab": $props.tab }, "list"])}" data-v-143bfd4e><!--[-->`);
	(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderList)($props.items, (item) => {
		_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_LinkTabItem, {
			ref_for: true,
			ref: "items",
			href: item.href,
			active: item.active
		}, {
			default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
				if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(item.title)}`);
				else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(item.title), 1)];
			}),
			_: 2
		}, _parent));
	});
	_push(`<!--]--></ul></div></div><div class="tab-glow tab-glow-left" style="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderStyle)([{ opacity: $data.scrollGlowOpacityLeft }, $data.showScrollGlowLeft ? null : { display: "none" }])}" data-v-143bfd4e></div><div class="tab-glow" style="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderStyle)([{ opacity: $data.scrollGlowOpacityRight }, $data.showScrollGlowRight ? null : { display: "none" }])}" data-v-143bfd4e></div></div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = (0, require__plugin_vue_export_helper.vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/linkTab.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var linkTab_default = /*#__PURE__*/ require__plugin_vue_export_helper._plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-143bfd4e"]]);
//#endregion
Object.defineProperty(exports, "linkTab_default", {
	enumerable: true,
	get: function() {
		return linkTab_default;
	}
});
