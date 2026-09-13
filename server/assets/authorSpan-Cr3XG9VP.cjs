const require__plugin_vue_export_helper = require("./_plugin-vue_export-helper-C1TPHJvg.cjs");
const require_server = require("../server.cjs");
const require_floating_ui_core = require("./floating-ui.core-DRXlJkIO.cjs");
//#region node_modules/floating-vue/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function getWindow(node) {
	var _node$ownerDocument;
	return ((_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getComputedStyle$1(element) {
	return getWindow(element).getComputedStyle(element);
}
var min = Math.min;
var max = Math.max;
var round = Math.round;
function getCssDimensions(element) {
	const css = getComputedStyle$1(element);
	let width = parseFloat(css.width);
	let height = parseFloat(css.height);
	const offsetWidth = element.offsetWidth;
	const offsetHeight = element.offsetHeight;
	const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
	if (shouldFallback) {
		width = offsetWidth;
		height = offsetHeight;
	}
	return {
		width,
		height,
		fallback: shouldFallback
	};
}
function getNodeName(node) {
	return isNode(node) ? (node.nodeName || "").toLowerCase() : "";
}
var uaString;
function getUAString() {
	if (uaString) return uaString;
	const uaData = navigator.userAgentData;
	if (uaData && Array.isArray(uaData.brands)) {
		uaString = uaData.brands.map((item) => item.brand + "/" + item.version).join(" ");
		return uaString;
	}
	return navigator.userAgent;
}
function isHTMLElement(value) {
	return value instanceof getWindow(value).HTMLElement;
}
function isElement(value) {
	return value instanceof getWindow(value).Element;
}
function isNode(value) {
	return value instanceof getWindow(value).Node;
}
function isShadowRoot(node) {
	if (typeof ShadowRoot === "undefined") return false;
	return node instanceof getWindow(node).ShadowRoot || node instanceof ShadowRoot;
}
function isOverflowElement(element) {
	const { overflow, overflowX, overflowY, display } = getComputedStyle$1(element);
	return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !["inline", "contents"].includes(display);
}
function isTableElement(element) {
	return [
		"table",
		"td",
		"th"
	].includes(getNodeName(element));
}
function isContainingBlock(element) {
	const isFirefox = /firefox/i.test(getUAString());
	const css = getComputedStyle$1(element);
	const backdropFilter = css.backdropFilter || css.WebkitBackdropFilter;
	return css.transform !== "none" || css.perspective !== "none" || (backdropFilter ? backdropFilter !== "none" : false) || isFirefox && css.willChange === "filter" || isFirefox && (css.filter ? css.filter !== "none" : false) || ["transform", "perspective"].some((value) => css.willChange.includes(value)) || [
		"paint",
		"layout",
		"strict",
		"content"
	].some((value) => {
		const contain = css.contain;
		return contain != null ? contain.includes(value) : false;
	});
}
function isLayoutViewport() {
	return !/^((?!chrome|android).)*safari/i.test(getUAString());
}
function isLastTraversableNode(node) {
	return [
		"html",
		"body",
		"#document"
	].includes(getNodeName(node));
}
function unwrapElement(element) {
	return !isElement(element) ? element.contextElement : element;
}
var FALLBACK_SCALE = {
	x: 1,
	y: 1
};
function getScale(element) {
	const domElement = unwrapElement(element);
	if (!isHTMLElement(domElement)) return FALLBACK_SCALE;
	const rect = domElement.getBoundingClientRect();
	const { width, height, fallback } = getCssDimensions(domElement);
	let x = (fallback ? round(rect.width) : rect.width) / width;
	let y = (fallback ? round(rect.height) : rect.height) / height;
	if (!x || !Number.isFinite(x)) x = 1;
	if (!y || !Number.isFinite(y)) y = 1;
	return {
		x,
		y
	};
}
function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
	var _win$visualViewport, _win$visualViewport2;
	if (includeScale === void 0) includeScale = false;
	if (isFixedStrategy === void 0) isFixedStrategy = false;
	const clientRect = element.getBoundingClientRect();
	const domElement = unwrapElement(element);
	let scale = FALLBACK_SCALE;
	if (includeScale) if (offsetParent) {
		if (isElement(offsetParent)) scale = getScale(offsetParent);
	} else scale = getScale(element);
	const win = domElement ? getWindow(domElement) : window;
	const addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
	let x = (clientRect.left + (addVisualOffsets ? ((_win$visualViewport = win.visualViewport) == null ? void 0 : _win$visualViewport.offsetLeft) || 0 : 0)) / scale.x;
	let y = (clientRect.top + (addVisualOffsets ? ((_win$visualViewport2 = win.visualViewport) == null ? void 0 : _win$visualViewport2.offsetTop) || 0 : 0)) / scale.y;
	let width = clientRect.width / scale.x;
	let height = clientRect.height / scale.y;
	if (domElement) {
		const win = getWindow(domElement);
		const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
		let currentIFrame = win.frameElement;
		while (currentIFrame && offsetParent && offsetWin !== win) {
			const iframeScale = getScale(currentIFrame);
			const iframeRect = currentIFrame.getBoundingClientRect();
			const css = getComputedStyle(currentIFrame);
			iframeRect.x += (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
			iframeRect.y += (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
			x *= iframeScale.x;
			y *= iframeScale.y;
			width *= iframeScale.x;
			height *= iframeScale.y;
			x += iframeRect.x;
			y += iframeRect.y;
			currentIFrame = getWindow(currentIFrame).frameElement;
		}
	}
	return {
		width,
		height,
		top: y,
		right: x + width,
		bottom: y + height,
		left: x,
		x,
		y
	};
}
function getDocumentElement(node) {
	return ((isNode(node) ? node.ownerDocument : node.document) || window.document).documentElement;
}
function getNodeScroll(element) {
	if (isElement(element)) return {
		scrollLeft: element.scrollLeft,
		scrollTop: element.scrollTop
	};
	return {
		scrollLeft: element.pageXOffset,
		scrollTop: element.pageYOffset
	};
}
function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
	let { rect, offsetParent, strategy } = _ref;
	const isOffsetParentAnElement = isHTMLElement(offsetParent);
	const documentElement = getDocumentElement(offsetParent);
	if (offsetParent === documentElement) return rect;
	let scroll = {
		scrollLeft: 0,
		scrollTop: 0
	};
	let scale = {
		x: 1,
		y: 1
	};
	const offsets = {
		x: 0,
		y: 0
	};
	if (isOffsetParentAnElement || !isOffsetParentAnElement && strategy !== "fixed") {
		if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) scroll = getNodeScroll(offsetParent);
		if (isHTMLElement(offsetParent)) {
			const offsetRect = getBoundingClientRect(offsetParent);
			scale = getScale(offsetParent);
			offsets.x = offsetRect.x + offsetParent.clientLeft;
			offsets.y = offsetRect.y + offsetParent.clientTop;
		}
	}
	return {
		width: rect.width * scale.x,
		height: rect.height * scale.y,
		x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x,
		y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y
	};
}
function getWindowScrollBarX(element) {
	return getBoundingClientRect(getDocumentElement(element)).left + getNodeScroll(element).scrollLeft;
}
function getDocumentRect(element) {
	const html = getDocumentElement(element);
	const scroll = getNodeScroll(element);
	const body = element.ownerDocument.body;
	const width = max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
	const height = max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
	let x = -scroll.scrollLeft + getWindowScrollBarX(element);
	const y = -scroll.scrollTop;
	if (getComputedStyle$1(body).direction === "rtl") x += max(html.clientWidth, body.clientWidth) - width;
	return {
		width,
		height,
		x,
		y
	};
}
function getParentNode(node) {
	if (getNodeName(node) === "html") return node;
	const result = node.assignedSlot || node.parentNode || isShadowRoot(node) && node.host || getDocumentElement(node);
	return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
	const parentNode = getParentNode(node);
	if (isLastTraversableNode(parentNode)) return parentNode.ownerDocument.body;
	if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) return parentNode;
	return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list) {
	var _node$ownerDocument;
	if (list === void 0) list = [];
	const scrollableAncestor = getNearestOverflowAncestor(node);
	const isBody = scrollableAncestor === ((_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.body);
	const win = getWindow(scrollableAncestor);
	if (isBody) return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : []);
	return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor));
}
function getViewportRect(element, strategy) {
	const win = getWindow(element);
	const html = getDocumentElement(element);
	const visualViewport = win.visualViewport;
	let width = html.clientWidth;
	let height = html.clientHeight;
	let x = 0;
	let y = 0;
	if (visualViewport) {
		width = visualViewport.width;
		height = visualViewport.height;
		const layoutViewport = isLayoutViewport();
		if (layoutViewport || !layoutViewport && strategy === "fixed") {
			x = visualViewport.offsetLeft;
			y = visualViewport.offsetTop;
		}
	}
	return {
		width,
		height,
		x,
		y
	};
}
function getInnerBoundingClientRect(element, strategy) {
	const clientRect = getBoundingClientRect(element, true, strategy === "fixed");
	const top = clientRect.top + element.clientTop;
	const left = clientRect.left + element.clientLeft;
	const scale = isHTMLElement(element) ? getScale(element) : {
		x: 1,
		y: 1
	};
	return {
		width: element.clientWidth * scale.x,
		height: element.clientHeight * scale.y,
		x: left * scale.x,
		y: top * scale.y
	};
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
	if (clippingAncestor === "viewport") return require_floating_ui_core.rectToClientRect(getViewportRect(element, strategy));
	if (isElement(clippingAncestor)) return require_floating_ui_core.rectToClientRect(getInnerBoundingClientRect(clippingAncestor, strategy));
	return require_floating_ui_core.rectToClientRect(getDocumentRect(getDocumentElement(element)));
}
function getClippingElementAncestors(element, cache) {
	const cachedResult = cache.get(element);
	if (cachedResult) return cachedResult;
	let result = getOverflowAncestors(element).filter((el) => isElement(el) && getNodeName(el) !== "body");
	let currentContainingBlockComputedStyle = null;
	const elementIsFixed = getComputedStyle$1(element).position === "fixed";
	let currentNode = elementIsFixed ? getParentNode(element) : element;
	while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
		const computedStyle = getComputedStyle$1(currentNode);
		const containingBlock = isContainingBlock(currentNode);
		if (elementIsFixed ? !containingBlock && !currentContainingBlockComputedStyle : !containingBlock && computedStyle.position === "static" && !!currentContainingBlockComputedStyle && ["absolute", "fixed"].includes(currentContainingBlockComputedStyle.position)) result = result.filter((ancestor) => ancestor !== currentNode);
		else currentContainingBlockComputedStyle = computedStyle;
		currentNode = getParentNode(currentNode);
	}
	cache.set(element, result);
	return result;
}
function getClippingRect(_ref) {
	let { element, boundary, rootBoundary, strategy } = _ref;
	const clippingAncestors = [...boundary === "clippingAncestors" ? getClippingElementAncestors(element, this._c) : [].concat(boundary), rootBoundary];
	const firstClippingAncestor = clippingAncestors[0];
	const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
		const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
		accRect.top = max(rect.top, accRect.top);
		accRect.right = min(rect.right, accRect.right);
		accRect.bottom = min(rect.bottom, accRect.bottom);
		accRect.left = max(rect.left, accRect.left);
		return accRect;
	}, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
	return {
		width: clippingRect.right - clippingRect.left,
		height: clippingRect.bottom - clippingRect.top,
		x: clippingRect.left,
		y: clippingRect.top
	};
}
function getDimensions(element) {
	if (isHTMLElement(element)) return getCssDimensions(element);
	return element.getBoundingClientRect();
}
function getTrueOffsetParent(element) {
	if (!isHTMLElement(element) || getComputedStyle$1(element).position === "fixed") return null;
	return element.offsetParent;
}
function getContainingBlock(element) {
	let currentNode = getParentNode(element);
	while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) if (isContainingBlock(currentNode)) return currentNode;
	else currentNode = getParentNode(currentNode);
	return null;
}
function getOffsetParent(element) {
	const window = getWindow(element);
	let offsetParent = getTrueOffsetParent(element);
	while (offsetParent && isTableElement(offsetParent) && getComputedStyle$1(offsetParent).position === "static") offsetParent = getTrueOffsetParent(offsetParent);
	if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle$1(offsetParent).position === "static" && !isContainingBlock(offsetParent))) return window;
	return offsetParent || getContainingBlock(element) || window;
}
function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
	const isOffsetParentAnElement = isHTMLElement(offsetParent);
	const documentElement = getDocumentElement(offsetParent);
	const rect = getBoundingClientRect(element, true, strategy === "fixed", offsetParent);
	let scroll = {
		scrollLeft: 0,
		scrollTop: 0
	};
	const offsets = {
		x: 0,
		y: 0
	};
	if (isOffsetParentAnElement || !isOffsetParentAnElement && strategy !== "fixed") {
		if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) scroll = getNodeScroll(offsetParent);
		if (isHTMLElement(offsetParent)) {
			const offsetRect = getBoundingClientRect(offsetParent, true);
			offsets.x = offsetRect.x + offsetParent.clientLeft;
			offsets.y = offsetRect.y + offsetParent.clientTop;
		} else if (documentElement) offsets.x = getWindowScrollBarX(documentElement);
	}
	return {
		x: rect.left + scroll.scrollLeft - offsets.x,
		y: rect.top + scroll.scrollTop - offsets.y,
		width: rect.width,
		height: rect.height
	};
}
var platform = {
	getClippingRect,
	convertOffsetParentRelativeRectToViewportRelativeRect,
	isElement,
	getDimensions,
	getOffsetParent,
	getDocumentElement,
	getScale,
	async getElementRects(_ref) {
		let { reference, floating, strategy } = _ref;
		const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
		const getDimensionsFn = this.getDimensions;
		return {
			reference: getRectRelativeToOffsetParent(reference, await getOffsetParentFn(floating), strategy),
			floating: {
				x: 0,
				y: 0,
				...await getDimensionsFn(floating)
			}
		};
	},
	getClientRects: (element) => Array.from(element.getClientRects()),
	isRTL: (element) => getComputedStyle$1(element).direction === "rtl"
};
/**
* Computes the `x` and `y` coordinates that will place the floating element
* next to a reference element when it is given a certain CSS positioning
* strategy.
*/
var computePosition = (reference, floating, options) => {
	const cache = /* @__PURE__ */ new Map();
	const mergedOptions = {
		platform,
		...options
	};
	const platformWithCache = {
		...mergedOptions.platform,
		_c: cache
	};
	return require_floating_ui_core.computePosition(reference, floating, {
		...mergedOptions,
		platform: platformWithCache
	});
};
//#endregion
//#region node_modules/floating-vue/dist/floating-vue.mjs
var h = {
	disabled: !1,
	distance: 5,
	skidding: 0,
	container: "body",
	boundary: void 0,
	instantMove: !1,
	disposeTimeout: 150,
	popperTriggers: [],
	strategy: "absolute",
	preventOverflow: !0,
	flip: !0,
	shift: !0,
	overflowPadding: 0,
	arrowPadding: 0,
	arrowOverflow: !0,
	/**
	* By default, compute autohide on 'click'.
	*/
	autoHideOnMousedown: !1,
	themes: {
		tooltip: {
			placement: "top",
			triggers: [
				"hover",
				"focus",
				"touch"
			],
			hideTriggers: (e) => [...e, "click"],
			delay: {
				show: 200,
				hide: 0
			},
			handleResize: !1,
			html: !1,
			loadingContent: "..."
		},
		dropdown: {
			placement: "bottom",
			triggers: ["click"],
			delay: 0,
			handleResize: !0,
			autoHide: !0
		},
		menu: {
			$extend: "dropdown",
			triggers: ["hover", "focus"],
			popperTriggers: ["hover"],
			delay: {
				show: 0,
				hide: 400
			}
		}
	}
};
function S(e, t) {
	let o = h.themes[e] || {}, i;
	do
		i = o[t], typeof i > "u" ? o.$extend ? o = h.themes[o.$extend] || {} : (o = null, i = h[t]) : o = null;
	while (o);
	return i;
}
function Ze(e) {
	const t = [e];
	let o = h.themes[e] || {};
	do
		o.$extend && !o.$resetCss ? (t.push(o.$extend), o = h.themes[o.$extend] || {}) : o = null;
	while (o);
	return t.map((i) => `v-popper--theme-${i}`);
}
function re(e) {
	const t = [e];
	let o = h.themes[e] || {};
	do
		o.$extend ? (t.push(o.$extend), o = h.themes[o.$extend] || {}) : o = null;
	while (o);
	return t;
}
var $ = !1;
if (typeof window < "u") {
	$ = !1;
	try {
		const e = Object.defineProperty({}, "passive", { get() {
			$ = !0;
		} });
		window.addEventListener("test", null, e);
	} catch {}
}
var _e = !1;
typeof window < "u" && typeof navigator < "u" && (_e = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream);
var Te = [
	"auto",
	"top",
	"bottom",
	"left",
	"right"
].reduce((e, t) => e.concat([
	t,
	`${t}-start`,
	`${t}-end`
]), []);
var pe = {
	hover: "mouseenter",
	focus: "focus",
	click: "click",
	touch: "touchstart",
	pointer: "pointerdown"
};
var ae = {
	hover: "mouseleave",
	focus: "blur",
	click: "click",
	touch: "touchend",
	pointer: "pointerup"
};
function de(e, t) {
	const o = e.indexOf(t);
	o !== -1 && e.splice(o, 1);
}
function G() {
	return new Promise((e) => requestAnimationFrame(() => {
		requestAnimationFrame(e);
	}));
}
var d = [];
var g = null;
var le = {};
function he(e) {
	let t = le[e];
	return t || (t = le[e] = []), t;
}
var Y = function() {};
typeof window < "u" && (Y = window.Element);
function n(e) {
	return function(t) {
		return S(t.theme, e);
	};
}
var q = "__floating-vue__popper";
var Q = () => (0, require__plugin_vue_export_helper.vue_exports.defineComponent)({
	name: "VPopper",
	provide() {
		return { [q]: { parentPopper: this } };
	},
	inject: { [q]: { default: null } },
	props: {
		theme: {
			type: String,
			required: !0
		},
		targetNodes: {
			type: Function,
			required: !0
		},
		referenceNode: {
			type: Function,
			default: null
		},
		popperNode: {
			type: Function,
			required: !0
		},
		shown: {
			type: Boolean,
			default: !1
		},
		showGroup: {
			type: String,
			default: null
		},
		ariaId: { default: null },
		disabled: {
			type: Boolean,
			default: n("disabled")
		},
		positioningDisabled: {
			type: Boolean,
			default: n("positioningDisabled")
		},
		placement: {
			type: String,
			default: n("placement"),
			validator: (e) => Te.includes(e)
		},
		delay: {
			type: [
				String,
				Number,
				Object
			],
			default: n("delay")
		},
		distance: {
			type: [Number, String],
			default: n("distance")
		},
		skidding: {
			type: [Number, String],
			default: n("skidding")
		},
		triggers: {
			type: Array,
			default: n("triggers")
		},
		showTriggers: {
			type: [Array, Function],
			default: n("showTriggers")
		},
		hideTriggers: {
			type: [Array, Function],
			default: n("hideTriggers")
		},
		popperTriggers: {
			type: Array,
			default: n("popperTriggers")
		},
		popperShowTriggers: {
			type: [Array, Function],
			default: n("popperShowTriggers")
		},
		popperHideTriggers: {
			type: [Array, Function],
			default: n("popperHideTriggers")
		},
		container: {
			type: [
				String,
				Object,
				Y,
				Boolean
			],
			default: n("container")
		},
		boundary: {
			type: [String, Y],
			default: n("boundary")
		},
		strategy: {
			type: String,
			validator: (e) => ["absolute", "fixed"].includes(e),
			default: n("strategy")
		},
		autoHide: {
			type: [Boolean, Function],
			default: n("autoHide")
		},
		handleResize: {
			type: Boolean,
			default: n("handleResize")
		},
		instantMove: {
			type: Boolean,
			default: n("instantMove")
		},
		eagerMount: {
			type: Boolean,
			default: n("eagerMount")
		},
		popperClass: {
			type: [
				String,
				Array,
				Object
			],
			default: n("popperClass")
		},
		computeTransformOrigin: {
			type: Boolean,
			default: n("computeTransformOrigin")
		},
		/**
		* @deprecated
		*/
		autoMinSize: {
			type: Boolean,
			default: n("autoMinSize")
		},
		autoSize: {
			type: [Boolean, String],
			default: n("autoSize")
		},
		/**
		* @deprecated
		*/
		autoMaxSize: {
			type: Boolean,
			default: n("autoMaxSize")
		},
		autoBoundaryMaxSize: {
			type: Boolean,
			default: n("autoBoundaryMaxSize")
		},
		preventOverflow: {
			type: Boolean,
			default: n("preventOverflow")
		},
		overflowPadding: {
			type: [Number, String],
			default: n("overflowPadding")
		},
		arrowPadding: {
			type: [Number, String],
			default: n("arrowPadding")
		},
		arrowOverflow: {
			type: Boolean,
			default: n("arrowOverflow")
		},
		flip: {
			type: Boolean,
			default: n("flip")
		},
		shift: {
			type: Boolean,
			default: n("shift")
		},
		shiftCrossAxis: {
			type: Boolean,
			default: n("shiftCrossAxis")
		},
		noAutoFocus: {
			type: Boolean,
			default: n("noAutoFocus")
		},
		disposeTimeout: {
			type: Number,
			default: n("disposeTimeout")
		}
	},
	emits: {
		show: () => !0,
		hide: () => !0,
		"update:shown": (e) => !0,
		"apply-show": () => !0,
		"apply-hide": () => !0,
		"close-group": () => !0,
		"close-directive": () => !0,
		"auto-hide": () => !0,
		resize: () => !0
	},
	data() {
		return {
			isShown: !1,
			isMounted: !1,
			skipTransition: !1,
			classes: {
				showFrom: !1,
				showTo: !1,
				hideFrom: !1,
				hideTo: !0
			},
			result: {
				x: 0,
				y: 0,
				placement: "",
				strategy: this.strategy,
				arrow: {
					x: 0,
					y: 0,
					centerOffset: 0
				},
				transformOrigin: null
			},
			randomId: `popper_${[Math.random(), Date.now()].map((e) => e.toString(36).substring(2, 10)).join("_")}`,
			shownChildren: /* @__PURE__ */ new Set(),
			lastAutoHide: !0,
			pendingHide: !1,
			containsGlobalTarget: !1,
			isDisposed: !0,
			mouseDownContains: !1
		};
	},
	computed: {
		popperId() {
			return this.ariaId != null ? this.ariaId : this.randomId;
		},
		shouldMountContent() {
			return this.eagerMount || this.isMounted;
		},
		slotData() {
			return {
				popperId: this.popperId,
				isShown: this.isShown,
				shouldMountContent: this.shouldMountContent,
				skipTransition: this.skipTransition,
				autoHide: typeof this.autoHide == "function" ? this.lastAutoHide : this.autoHide,
				show: this.show,
				hide: this.hide,
				handleResize: this.handleResize,
				onResize: this.onResize,
				classes: {
					...this.classes,
					popperClass: this.popperClass
				},
				result: this.positioningDisabled ? null : this.result,
				attrs: this.$attrs
			};
		},
		parentPopper() {
			var e;
			return (e = this[q]) == null ? void 0 : e.parentPopper;
		},
		hasPopperShowTriggerHover() {
			var e, t;
			return ((e = this.popperTriggers) == null ? void 0 : e.includes("hover")) || ((t = this.popperShowTriggers) == null ? void 0 : t.includes("hover"));
		}
	},
	watch: {
		shown: "$_autoShowHide",
		disabled(e) {
			e ? this.dispose() : this.init();
		},
		async container() {
			this.isShown && (this.$_ensureTeleport(), await this.$_computePosition());
		},
		triggers: {
			handler: "$_refreshListeners",
			deep: !0
		},
		positioningDisabled: "$_refreshListeners",
		...[
			"placement",
			"distance",
			"skidding",
			"boundary",
			"strategy",
			"overflowPadding",
			"arrowPadding",
			"preventOverflow",
			"shift",
			"shiftCrossAxis",
			"flip"
		].reduce((e, t) => (e[t] = "$_computePosition", e), {})
	},
	created() {
		this.autoMinSize && console.warn("[floating-vue] `autoMinSize` option is deprecated. Use `autoSize=\"min\"` instead."), this.autoMaxSize && console.warn("[floating-vue] `autoMaxSize` option is deprecated. Use `autoBoundaryMaxSize` instead.");
	},
	mounted() {
		this.init(), this.$_detachPopperNode();
	},
	activated() {
		this.$_autoShowHide();
	},
	deactivated() {
		this.hide();
	},
	beforeUnmount() {
		this.dispose();
	},
	methods: {
		show({ event: e = null, skipDelay: t = !1, force: o = !1 } = {}) {
			var i, s;
			(i = this.parentPopper) != null && i.lockedChild && this.parentPopper.lockedChild !== this || (this.pendingHide = !1, (o || !this.disabled) && (((s = this.parentPopper) == null ? void 0 : s.lockedChild) === this && (this.parentPopper.lockedChild = null), this.$_scheduleShow(e, t), this.$emit("show"), this.$_showFrameLocked = !0, requestAnimationFrame(() => {
				this.$_showFrameLocked = !1;
			})), this.$emit("update:shown", !0));
		},
		hide({ event: e = null, skipDelay: t = !1 } = {}) {
			var o;
			if (!this.$_hideInProgress) {
				if (this.shownChildren.size > 0) {
					this.pendingHide = !0;
					return;
				}
				if (this.hasPopperShowTriggerHover && this.$_isAimingPopper()) {
					this.parentPopper && (this.parentPopper.lockedChild = this, clearTimeout(this.parentPopper.lockedChildTimer), this.parentPopper.lockedChildTimer = setTimeout(() => {
						this.parentPopper.lockedChild === this && (this.parentPopper.lockedChild.hide({ skipDelay: t }), this.parentPopper.lockedChild = null);
					}, 1e3));
					return;
				}
				((o = this.parentPopper) == null ? void 0 : o.lockedChild) === this && (this.parentPopper.lockedChild = null), this.pendingHide = !1, this.$_scheduleHide(e, t), this.$emit("hide"), this.$emit("update:shown", !1);
			}
		},
		init() {
			var e;
			this.isDisposed && (this.isDisposed = !1, this.isMounted = !1, this.$_events = [], this.$_preventShow = !1, this.$_referenceNode = ((e = this.referenceNode) == null ? void 0 : e.call(this)) ?? this.$el, this.$_targetNodes = this.targetNodes().filter((t) => t.nodeType === t.ELEMENT_NODE), this.$_popperNode = this.popperNode(), this.$_innerNode = this.$_popperNode.querySelector(".v-popper__inner"), this.$_arrowNode = this.$_popperNode.querySelector(".v-popper__arrow-container"), this.$_swapTargetAttrs("title", "data-original-title"), this.$_detachPopperNode(), this.triggers.length && this.$_addEventListeners(), this.shown && this.show());
		},
		dispose() {
			this.isDisposed || (this.isDisposed = !0, this.$_removeEventListeners(), this.hide({ skipDelay: !0 }), this.$_detachPopperNode(), this.isMounted = !1, this.isShown = !1, this.$_updateParentShownChildren(!1), this.$_swapTargetAttrs("data-original-title", "title"));
		},
		async onResize() {
			this.isShown && (await this.$_computePosition(), this.$emit("resize"));
		},
		async $_computePosition() {
			if (this.isDisposed || this.positioningDisabled) return;
			const e = {
				strategy: this.strategy,
				middleware: []
			};
			(this.distance || this.skidding) && e.middleware.push(require_floating_ui_core.offset({
				mainAxis: this.distance,
				crossAxis: this.skidding
			}));
			const t = this.placement.startsWith("auto");
			if (t ? e.middleware.push(require_floating_ui_core.autoPlacement({ alignment: this.placement.split("-")[1] ?? "" })) : e.placement = this.placement, this.preventOverflow && (this.shift && e.middleware.push(require_floating_ui_core.shift({
				padding: this.overflowPadding,
				boundary: this.boundary,
				crossAxis: this.shiftCrossAxis
			})), !t && this.flip && e.middleware.push(require_floating_ui_core.flip({
				padding: this.overflowPadding,
				boundary: this.boundary
			}))), e.middleware.push(require_floating_ui_core.arrow({
				element: this.$_arrowNode,
				padding: this.arrowPadding
			})), this.arrowOverflow && e.middleware.push({
				name: "arrowOverflow",
				fn: ({ placement: i, rects: s, middlewareData: r }) => {
					let p;
					const { centerOffset: a } = r.arrow;
					return i.startsWith("top") || i.startsWith("bottom") ? p = Math.abs(a) > s.reference.width / 2 : p = Math.abs(a) > s.reference.height / 2, { data: { overflow: p } };
				}
			}), this.autoMinSize || this.autoSize) {
				const i = this.autoSize ? this.autoSize : this.autoMinSize ? "min" : null;
				e.middleware.push({
					name: "autoSize",
					fn: ({ rects: s, placement: r, middlewareData: p }) => {
						var u;
						if ((u = p.autoSize) != null && u.skip) return {};
						let a, l;
						return r.startsWith("top") || r.startsWith("bottom") ? a = s.reference.width : l = s.reference.height, this.$_innerNode.style[i === "min" ? "minWidth" : i === "max" ? "maxWidth" : "width"] = a != null ? `${a}px` : null, this.$_innerNode.style[i === "min" ? "minHeight" : i === "max" ? "maxHeight" : "height"] = l != null ? `${l}px` : null, {
							data: { skip: !0 },
							reset: { rects: !0 }
						};
					}
				});
			}
			(this.autoMaxSize || this.autoBoundaryMaxSize) && (this.$_innerNode.style.maxWidth = null, this.$_innerNode.style.maxHeight = null, e.middleware.push(require_floating_ui_core.size({
				boundary: this.boundary,
				padding: this.overflowPadding,
				apply: ({ availableWidth: i, availableHeight: s }) => {
					this.$_innerNode.style.maxWidth = i != null ? `${i}px` : null, this.$_innerNode.style.maxHeight = s != null ? `${s}px` : null;
				}
			})));
			const o = await computePosition(this.$_referenceNode, this.$_popperNode, e);
			Object.assign(this.result, {
				x: o.x,
				y: o.y,
				placement: o.placement,
				strategy: o.strategy,
				arrow: {
					...o.middlewareData.arrow,
					...o.middlewareData.arrowOverflow
				}
			});
		},
		$_scheduleShow(e, t = !1) {
			if (this.$_updateParentShownChildren(!0), this.$_hideInProgress = !1, clearTimeout(this.$_scheduleTimer), g && this.instantMove && g.instantMove && g !== this.parentPopper) {
				g.$_applyHide(!0), this.$_applyShow(!0);
				return;
			}
			t ? this.$_applyShow() : this.$_scheduleTimer = setTimeout(this.$_applyShow.bind(this), this.$_computeDelay("show"));
		},
		$_scheduleHide(e, t = !1) {
			if (this.shownChildren.size > 0) {
				this.pendingHide = !0;
				return;
			}
			this.$_updateParentShownChildren(!1), this.$_hideInProgress = !0, clearTimeout(this.$_scheduleTimer), this.isShown && (g = this), t ? this.$_applyHide() : this.$_scheduleTimer = setTimeout(this.$_applyHide.bind(this), this.$_computeDelay("hide"));
		},
		$_computeDelay(e) {
			const t = this.delay;
			return parseInt(t && t[e] || t || 0);
		},
		async $_applyShow(e = !1) {
			clearTimeout(this.$_disposeTimer), clearTimeout(this.$_scheduleTimer), this.skipTransition = e, !this.isShown && (this.$_ensureTeleport(), await G(), await this.$_computePosition(), await this.$_applyShowEffect(), this.positioningDisabled || this.$_registerEventListeners([...getOverflowAncestors(this.$_referenceNode), ...getOverflowAncestors(this.$_popperNode)], "scroll", () => {
				this.$_computePosition();
			}));
		},
		async $_applyShowEffect() {
			if (this.$_hideInProgress) return;
			if (this.computeTransformOrigin) {
				const t = this.$_referenceNode.getBoundingClientRect(), o = this.$_popperNode.querySelector(".v-popper__wrapper"), i = o.parentNode.getBoundingClientRect(), s = t.x + t.width / 2 - (i.left + o.offsetLeft), r = t.y + t.height / 2 - (i.top + o.offsetTop);
				this.result.transformOrigin = `${s}px ${r}px`;
			}
			this.isShown = !0, this.$_applyAttrsToTarget({
				"aria-describedby": this.popperId,
				"data-popper-shown": ""
			});
			const e = this.showGroup;
			if (e) {
				let t;
				for (let o = 0; o < d.length; o++) t = d[o], t.showGroup !== e && (t.hide(), t.$emit("close-group"));
			}
			d.push(this), document.body.classList.add("v-popper--some-open");
			for (const t of re(this.theme)) he(t).push(this), document.body.classList.add(`v-popper--some-open--${t}`);
			this.$emit("apply-show"), this.classes.showFrom = !0, this.classes.showTo = !1, this.classes.hideFrom = !1, this.classes.hideTo = !1, await G(), this.classes.showFrom = !1, this.classes.showTo = !0, this.noAutoFocus || this.$_popperNode.focus();
		},
		async $_applyHide(e = !1) {
			if (this.shownChildren.size > 0) {
				this.pendingHide = !0, this.$_hideInProgress = !1;
				return;
			}
			if (clearTimeout(this.$_scheduleTimer), !this.isShown) return;
			this.skipTransition = e, de(d, this), d.length === 0 && document.body.classList.remove("v-popper--some-open");
			for (const o of re(this.theme)) {
				const i = he(o);
				de(i, this), i.length === 0 && document.body.classList.remove(`v-popper--some-open--${o}`);
			}
			g === this && (g = null), this.isShown = !1, this.$_applyAttrsToTarget({
				"aria-describedby": void 0,
				"data-popper-shown": void 0
			}), clearTimeout(this.$_disposeTimer);
			const t = this.disposeTimeout;
			t !== null && (this.$_disposeTimer = setTimeout(() => {
				this.$_popperNode && (this.$_detachPopperNode(), this.isMounted = !1);
			}, t)), this.$_removeEventListeners("scroll"), this.$emit("apply-hide"), this.classes.showFrom = !1, this.classes.showTo = !1, this.classes.hideFrom = !0, this.classes.hideTo = !1, await G(), this.classes.hideFrom = !1, this.classes.hideTo = !0;
		},
		$_autoShowHide() {
			this.shown ? this.show() : this.hide();
		},
		$_ensureTeleport() {
			if (this.isDisposed) return;
			let e = this.container;
			if (typeof e == "string" ? e = window.document.querySelector(e) : e === !1 && (e = this.$_targetNodes[0].parentNode), !e) throw new Error("No container for popover: " + this.container);
			e.appendChild(this.$_popperNode), this.isMounted = !0;
		},
		$_addEventListeners() {
			const e = (o) => {
				this.isShown && !this.$_hideInProgress || (o.usedByTooltip = !0, !this.$_preventShow && this.show({ event: o }));
			};
			this.$_registerTriggerListeners(this.$_targetNodes, pe, this.triggers, this.showTriggers, e), this.$_registerTriggerListeners([this.$_popperNode], pe, this.popperTriggers, this.popperShowTriggers, e);
			const t = (o) => {
				o.usedByTooltip || this.hide({ event: o });
			};
			this.$_registerTriggerListeners(this.$_targetNodes, ae, this.triggers, this.hideTriggers, t), this.$_registerTriggerListeners([this.$_popperNode], ae, this.popperTriggers, this.popperHideTriggers, t);
		},
		$_registerEventListeners(e, t, o) {
			this.$_events.push({
				targetNodes: e,
				eventType: t,
				handler: o
			}), e.forEach((i) => i.addEventListener(t, o, $ ? { passive: !0 } : void 0));
		},
		$_registerTriggerListeners(e, t, o, i, s) {
			let r = o;
			i != null && (r = typeof i == "function" ? i(r) : i), r.forEach((p) => {
				const a = t[p];
				a && this.$_registerEventListeners(e, a, s);
			});
		},
		$_removeEventListeners(e) {
			const t = [];
			this.$_events.forEach((o) => {
				const { targetNodes: i, eventType: s, handler: r } = o;
				!e || e === s ? i.forEach((p) => p.removeEventListener(s, r)) : t.push(o);
			}), this.$_events = t;
		},
		$_refreshListeners() {
			this.isDisposed || (this.$_removeEventListeners(), this.$_addEventListeners());
		},
		$_handleGlobalClose(e, t = !1) {
			this.$_showFrameLocked || (this.hide({ event: e }), e.closePopover ? this.$emit("close-directive") : this.$emit("auto-hide"), t && (this.$_preventShow = !0, setTimeout(() => {
				this.$_preventShow = !1;
			}, 300)));
		},
		$_detachPopperNode() {
			this.$_popperNode.parentNode && this.$_popperNode.parentNode.removeChild(this.$_popperNode);
		},
		$_swapTargetAttrs(e, t) {
			for (const o of this.$_targetNodes) {
				const i = o.getAttribute(e);
				i && (o.removeAttribute(e), o.setAttribute(t, i));
			}
		},
		$_applyAttrsToTarget(e) {
			for (const t of this.$_targetNodes) for (const o in e) {
				const i = e[o];
				i == null ? t.removeAttribute(o) : t.setAttribute(o, i);
			}
		},
		$_updateParentShownChildren(e) {
			let t = this.parentPopper;
			for (; t;) e ? t.shownChildren.add(this.randomId) : (t.shownChildren.delete(this.randomId), t.pendingHide && t.hide()), t = t.parentPopper;
		},
		$_isAimingPopper() {
			const e = this.$_referenceNode.getBoundingClientRect();
			if (y >= e.left && y <= e.right && _ >= e.top && _ <= e.bottom) {
				const t = this.$_popperNode.getBoundingClientRect(), o = y - c, i = _ - m, r = t.left + t.width / 2 - c + (t.top + t.height / 2) - m + t.width + t.height, p = c + o * r, a = m + i * r;
				return C(c, m, p, a, t.left, t.top, t.left, t.bottom) || C(c, m, p, a, t.left, t.top, t.right, t.top) || C(c, m, p, a, t.right, t.top, t.right, t.bottom) || C(c, m, p, a, t.left, t.bottom, t.right, t.bottom);
			}
			return !1;
		}
	},
	render() {
		return this.$slots.default(this.slotData);
	}
});
if (typeof document < "u" && typeof window < "u") {
	if (_e) {
		const e = $ ? {
			passive: !0,
			capture: !0
		} : !0;
		document.addEventListener("touchstart", (t) => ue(t, !0), e), document.addEventListener("touchend", (t) => fe(t, !0), e);
	} else window.addEventListener("mousedown", (e) => ue(e, !1), !0), window.addEventListener("click", (e) => fe(e, !1), !0);
	window.addEventListener("resize", tt);
}
function ue(e, t) {
	if (h.autoHideOnMousedown) Pe(e, t);
	else for (let o = 0; o < d.length; o++) {
		const i = d[o];
		try {
			i.mouseDownContains = i.popperNode().contains(e.target);
		} catch {}
	}
}
function fe(e, t) {
	h.autoHideOnMousedown || Pe(e, t);
}
function Pe(e, t) {
	const o = {};
	for (let i = d.length - 1; i >= 0; i--) {
		const s = d[i];
		try {
			const r = s.containsGlobalTarget = s.mouseDownContains || s.popperNode().contains(e.target);
			s.pendingHide = !1, requestAnimationFrame(() => {
				if (s.pendingHide = !1, !o[s.randomId] && ce(s, r, e)) {
					if (s.$_handleGlobalClose(e, t), !e.closeAllPopover && e.closePopover && r) {
						let a = s.parentPopper;
						for (; a;) o[a.randomId] = !0, a = a.parentPopper;
						return;
					}
					let p = s.parentPopper;
					for (; p && ce(p, p.containsGlobalTarget, e);) {
						p.$_handleGlobalClose(e, t);
						p = p.parentPopper;
					}
				}
			});
		} catch {}
	}
}
function ce(e, t, o) {
	return o.closeAllPopover || o.closePopover && t || et(e, o) && !t;
}
function et(e, t) {
	if (typeof e.autoHide == "function") {
		const o = e.autoHide(t);
		return e.lastAutoHide = o, o;
	}
	return e.autoHide;
}
function tt() {
	for (let e = 0; e < d.length; e++) d[e].$_computePosition();
}
var c = 0;
var m = 0;
var y = 0;
var _ = 0;
typeof window < "u" && window.addEventListener("mousemove", (e) => {
	c = y, m = _, y = e.clientX, _ = e.clientY;
}, $ ? { passive: !0 } : void 0);
function C(e, t, o, i, s, r, p, a) {
	const l = ((p - s) * (t - r) - (a - r) * (e - s)) / ((a - r) * (o - e) - (p - s) * (i - t)), u = ((o - e) * (t - r) - (i - t) * (e - s)) / ((a - r) * (o - e) - (p - s) * (i - t));
	return l >= 0 && l <= 1 && u >= 0 && u <= 1;
}
var ot = { extends: Q() };
var B = (e, t) => {
	const o = e.__vccOpts || e;
	for (const [i, s] of t) o[i] = s;
	return o;
};
function it(e, t, o, i, s, r) {
	return (0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createElementBlock)("div", {
		ref: "reference",
		class: (0, require__plugin_vue_export_helper.vue_exports.normalizeClass)(["v-popper", { "v-popper--shown": e.slotData.isShown }])
	}, [(0, require__plugin_vue_export_helper.vue_exports.renderSlot)(e.$slots, "default", (0, require__plugin_vue_export_helper.vue_exports.normalizeProps)((0, require__plugin_vue_export_helper.vue_exports.guardReactiveProps)(e.slotData)))], 2);
}
var st = /* @__PURE__ */ B(ot, [["render", it]]);
function nt() {
	var e = window.navigator.userAgent, t = e.indexOf("MSIE ");
	if (t > 0) return parseInt(e.substring(t + 5, e.indexOf(".", t)), 10);
	if (e.indexOf("Trident/") > 0) {
		var i = e.indexOf("rv:");
		return parseInt(e.substring(i + 3, e.indexOf(".", i)), 10);
	}
	var s = e.indexOf("Edge/");
	return s > 0 ? parseInt(e.substring(s + 5, e.indexOf(".", s)), 10) : -1;
}
var z;
function X() {
	X.init || (X.init = !0, z = nt() !== -1);
}
var E = {
	name: "ResizeObserver",
	props: {
		emitOnMount: {
			type: Boolean,
			default: !1
		},
		ignoreWidth: {
			type: Boolean,
			default: !1
		},
		ignoreHeight: {
			type: Boolean,
			default: !1
		}
	},
	emits: ["notify"],
	mounted() {
		X(), (0, require__plugin_vue_export_helper.vue_exports.nextTick)(() => {
			this._w = this.$el.offsetWidth, this._h = this.$el.offsetHeight, this.emitOnMount && this.emitSize();
		});
		const e = document.createElement("object");
		this._resizeObject = e, e.setAttribute("aria-hidden", "true"), e.setAttribute("tabindex", -1), e.onload = this.addResizeHandlers, e.type = "text/html", z && this.$el.appendChild(e), e.data = "about:blank", z || this.$el.appendChild(e);
	},
	beforeUnmount() {
		this.removeResizeHandlers();
	},
	methods: {
		compareAndNotify() {
			(!this.ignoreWidth && this._w !== this.$el.offsetWidth || !this.ignoreHeight && this._h !== this.$el.offsetHeight) && (this._w = this.$el.offsetWidth, this._h = this.$el.offsetHeight, this.emitSize());
		},
		emitSize() {
			this.$emit("notify", {
				width: this._w,
				height: this._h
			});
		},
		addResizeHandlers() {
			this._resizeObject.contentDocument.defaultView.addEventListener("resize", this.compareAndNotify), this.compareAndNotify();
		},
		removeResizeHandlers() {
			this._resizeObject && this._resizeObject.onload && (!z && this._resizeObject.contentDocument && this._resizeObject.contentDocument.defaultView.removeEventListener("resize", this.compareAndNotify), this.$el.removeChild(this._resizeObject), this._resizeObject.onload = null, this._resizeObject = null);
		}
	}
};
var rt = /* @__PURE__ */ (0, require__plugin_vue_export_helper.vue_exports.withScopeId)("data-v-b329ee4c");
(0, require__plugin_vue_export_helper.vue_exports.pushScopeId)("data-v-b329ee4c");
var pt = {
	class: "resize-observer",
	tabindex: "-1"
};
(0, require__plugin_vue_export_helper.vue_exports.popScopeId)();
E.render = /* @__PURE__ */ rt((e, t, o, i, s, r) => ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)("div", pt)));
E.__scopeId = "data-v-b329ee4c";
E.__file = "src/components/ResizeObserver.vue";
var Z = (e = "theme") => ({ computed: { themeClass() {
	return Ze(this[e]);
} } });
var dt = (0, require__plugin_vue_export_helper.vue_exports.defineComponent)({
	name: "VPopperContent",
	components: { ResizeObserver: E },
	mixins: [Z()],
	props: {
		popperId: String,
		theme: String,
		shown: Boolean,
		mounted: Boolean,
		skipTransition: Boolean,
		autoHide: Boolean,
		handleResize: Boolean,
		classes: Object,
		result: Object
	},
	emits: ["hide", "resize"],
	methods: { toPx(e) {
		return e != null && !isNaN(e) ? `${e}px` : null;
	} }
});
var lt = [
	"id",
	"aria-hidden",
	"tabindex",
	"data-popper-placement"
];
var ht = {
	ref: "inner",
	class: "v-popper__inner"
};
var ct = [/* @__PURE__ */ (0, require__plugin_vue_export_helper.vue_exports.createElementVNode)("div", { class: "v-popper__arrow-outer" }, null, -1), /* @__PURE__ */ (0, require__plugin_vue_export_helper.vue_exports.createElementVNode)("div", { class: "v-popper__arrow-inner" }, null, -1)];
function mt(e, t, o, i, s, r) {
	const p = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("ResizeObserver");
	return (0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createElementBlock)("div", {
		id: e.popperId,
		ref: "popover",
		class: (0, require__plugin_vue_export_helper.vue_exports.normalizeClass)(["v-popper__popper", [
			e.themeClass,
			e.classes.popperClass,
			{
				"v-popper__popper--shown": e.shown,
				"v-popper__popper--hidden": !e.shown,
				"v-popper__popper--show-from": e.classes.showFrom,
				"v-popper__popper--show-to": e.classes.showTo,
				"v-popper__popper--hide-from": e.classes.hideFrom,
				"v-popper__popper--hide-to": e.classes.hideTo,
				"v-popper__popper--skip-transition": e.skipTransition,
				"v-popper__popper--arrow-overflow": e.result && e.result.arrow.overflow,
				"v-popper__popper--no-positioning": !e.result
			}
		]]),
		style: (0, require__plugin_vue_export_helper.vue_exports.normalizeStyle)(e.result ? {
			position: e.result.strategy,
			transform: `translate3d(${Math.round(e.result.x)}px,${Math.round(e.result.y)}px,0)`
		} : void 0),
		"aria-hidden": e.shown ? "false" : "true",
		tabindex: e.autoHide ? 0 : void 0,
		"data-popper-placement": e.result ? e.result.placement : void 0,
		onKeyup: t[2] || (t[2] = (0, require__plugin_vue_export_helper.vue_exports.withKeys)((a) => e.autoHide && e.$emit("hide"), ["esc"]))
	}, [(0, require__plugin_vue_export_helper.vue_exports.createElementVNode)("div", {
		class: "v-popper__backdrop",
		onClick: t[0] || (t[0] = (a) => e.autoHide && e.$emit("hide"))
	}), (0, require__plugin_vue_export_helper.vue_exports.createElementVNode)("div", {
		class: "v-popper__wrapper",
		style: (0, require__plugin_vue_export_helper.vue_exports.normalizeStyle)(e.result ? { transformOrigin: e.result.transformOrigin } : void 0)
	}, [(0, require__plugin_vue_export_helper.vue_exports.createElementVNode)("div", ht, [e.mounted ? ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createElementBlock)(require__plugin_vue_export_helper.vue_exports.Fragment, { key: 0 }, [(0, require__plugin_vue_export_helper.vue_exports.createElementVNode)("div", null, [(0, require__plugin_vue_export_helper.vue_exports.renderSlot)(e.$slots, "default")]), e.handleResize ? ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(p, {
		key: 0,
		onNotify: t[1] || (t[1] = (a) => e.$emit("resize", a))
	})) : (0, require__plugin_vue_export_helper.vue_exports.createCommentVNode)("", !0)], 64)) : (0, require__plugin_vue_export_helper.vue_exports.createCommentVNode)("", !0)], 512), (0, require__plugin_vue_export_helper.vue_exports.createElementVNode)("div", {
		ref: "arrow",
		class: "v-popper__arrow-container",
		style: (0, require__plugin_vue_export_helper.vue_exports.normalizeStyle)(e.result ? {
			left: e.toPx(e.result.arrow.x),
			top: e.toPx(e.result.arrow.y)
		} : void 0)
	}, ct, 4)], 4)], 46, lt);
}
var ee = /* @__PURE__ */ B(dt, [["render", mt]]);
var te = { methods: {
	show(...e) {
		return this.$refs.popper.show(...e);
	},
	hide(...e) {
		return this.$refs.popper.hide(...e);
	},
	dispose(...e) {
		return this.$refs.popper.dispose(...e);
	},
	onResize(...e) {
		return this.$refs.popper.onResize(...e);
	}
} };
var K = function() {};
typeof window < "u" && (K = window.Element);
var gt = (0, require__plugin_vue_export_helper.vue_exports.defineComponent)({
	name: "VPopperWrapper",
	components: {
		Popper: st,
		PopperContent: ee
	},
	mixins: [te, Z("finalTheme")],
	props: {
		theme: {
			type: String,
			default: null
		},
		referenceNode: {
			type: Function,
			default: null
		},
		shown: {
			type: Boolean,
			default: !1
		},
		showGroup: {
			type: String,
			default: null
		},
		ariaId: { default: null },
		disabled: {
			type: Boolean,
			default: void 0
		},
		positioningDisabled: {
			type: Boolean,
			default: void 0
		},
		placement: {
			type: String,
			default: void 0
		},
		delay: {
			type: [
				String,
				Number,
				Object
			],
			default: void 0
		},
		distance: {
			type: [Number, String],
			default: void 0
		},
		skidding: {
			type: [Number, String],
			default: void 0
		},
		triggers: {
			type: Array,
			default: void 0
		},
		showTriggers: {
			type: [Array, Function],
			default: void 0
		},
		hideTriggers: {
			type: [Array, Function],
			default: void 0
		},
		popperTriggers: {
			type: Array,
			default: void 0
		},
		popperShowTriggers: {
			type: [Array, Function],
			default: void 0
		},
		popperHideTriggers: {
			type: [Array, Function],
			default: void 0
		},
		container: {
			type: [
				String,
				Object,
				K,
				Boolean
			],
			default: void 0
		},
		boundary: {
			type: [String, K],
			default: void 0
		},
		strategy: {
			type: String,
			default: void 0
		},
		autoHide: {
			type: [Boolean, Function],
			default: void 0
		},
		handleResize: {
			type: Boolean,
			default: void 0
		},
		instantMove: {
			type: Boolean,
			default: void 0
		},
		eagerMount: {
			type: Boolean,
			default: void 0
		},
		popperClass: {
			type: [
				String,
				Array,
				Object
			],
			default: void 0
		},
		computeTransformOrigin: {
			type: Boolean,
			default: void 0
		},
		/**
		* @deprecated
		*/
		autoMinSize: {
			type: Boolean,
			default: void 0
		},
		autoSize: {
			type: [Boolean, String],
			default: void 0
		},
		/**
		* @deprecated
		*/
		autoMaxSize: {
			type: Boolean,
			default: void 0
		},
		autoBoundaryMaxSize: {
			type: Boolean,
			default: void 0
		},
		preventOverflow: {
			type: Boolean,
			default: void 0
		},
		overflowPadding: {
			type: [Number, String],
			default: void 0
		},
		arrowPadding: {
			type: [Number, String],
			default: void 0
		},
		arrowOverflow: {
			type: Boolean,
			default: void 0
		},
		flip: {
			type: Boolean,
			default: void 0
		},
		shift: {
			type: Boolean,
			default: void 0
		},
		shiftCrossAxis: {
			type: Boolean,
			default: void 0
		},
		noAutoFocus: {
			type: Boolean,
			default: void 0
		},
		disposeTimeout: {
			type: Number,
			default: void 0
		}
	},
	emits: {
		show: () => !0,
		hide: () => !0,
		"update:shown": (e) => !0,
		"apply-show": () => !0,
		"apply-hide": () => !0,
		"close-group": () => !0,
		"close-directive": () => !0,
		"auto-hide": () => !0,
		resize: () => !0
	},
	computed: { finalTheme() {
		return this.theme ?? this.$options.vPopperTheme;
	} },
	methods: { getTargetNodes() {
		return Array.from(this.$el.children).filter((e) => e !== this.$refs.popperContent.$el);
	} }
});
function wt(e, t, o, i, s, r) {
	const p = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("PopperContent"), a = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("Popper");
	return (0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(a, (0, require__plugin_vue_export_helper.vue_exports.mergeProps)({ ref: "popper" }, e.$props, {
		theme: e.finalTheme,
		"target-nodes": e.getTargetNodes,
		"popper-node": () => e.$refs.popperContent.$el,
		class: [e.themeClass],
		onShow: t[0] || (t[0] = () => e.$emit("show")),
		onHide: t[1] || (t[1] = () => e.$emit("hide")),
		"onUpdate:shown": t[2] || (t[2] = (l) => e.$emit("update:shown", l)),
		onApplyShow: t[3] || (t[3] = () => e.$emit("apply-show")),
		onApplyHide: t[4] || (t[4] = () => e.$emit("apply-hide")),
		onCloseGroup: t[5] || (t[5] = () => e.$emit("close-group")),
		onCloseDirective: t[6] || (t[6] = () => e.$emit("close-directive")),
		onAutoHide: t[7] || (t[7] = () => e.$emit("auto-hide")),
		onResize: t[8] || (t[8] = () => e.$emit("resize"))
	}), {
		default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(({ popperId: l, isShown: u, shouldMountContent: L, skipTransition: D, autoHide: I, show: F, hide: v, handleResize: R, onResize: j, classes: V, result: Ee }) => [(0, require__plugin_vue_export_helper.vue_exports.renderSlot)(e.$slots, "default", {
			shown: u,
			show: F,
			hide: v
		}), (0, require__plugin_vue_export_helper.vue_exports.createVNode)(p, {
			ref: "popperContent",
			"popper-id": l,
			theme: e.finalTheme,
			shown: u,
			mounted: L,
			"skip-transition": D,
			"auto-hide": I,
			"handle-resize": R,
			classes: V,
			result: Ee,
			onHide: v,
			onResize: j
		}, {
			default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.renderSlot)(e.$slots, "popper", {
				shown: u,
				hide: v
			})]),
			_: 2
		}, 1032, [
			"popper-id",
			"theme",
			"shown",
			"mounted",
			"skip-transition",
			"auto-hide",
			"handle-resize",
			"classes",
			"result",
			"onHide",
			"onResize"
		])]),
		_: 3
	}, 16, [
		"theme",
		"target-nodes",
		"popper-node",
		"class"
	]);
}
var k = /* @__PURE__ */ B(gt, [["render", wt]]);
({ ...k });
({ ...k });
({ ...k });
var $t = (0, require__plugin_vue_export_helper.vue_exports.defineComponent)({
	name: "VTooltipDirective",
	components: {
		Popper: Q(),
		PopperContent: ee
	},
	mixins: [te],
	inheritAttrs: !1,
	props: {
		theme: {
			type: String,
			default: "tooltip"
		},
		html: {
			type: Boolean,
			default: (e) => S(e.theme, "html")
		},
		content: {
			type: [
				String,
				Number,
				Function
			],
			default: null
		},
		loadingContent: {
			type: String,
			default: (e) => S(e.theme, "loadingContent")
		},
		targetNodes: {
			type: Function,
			required: !0
		}
	},
	data() {
		return { asyncContent: null };
	},
	computed: {
		isContentAsync() {
			return typeof this.content == "function";
		},
		loading() {
			return this.isContentAsync && this.asyncContent == null;
		},
		finalContent() {
			return this.isContentAsync ? this.loading ? this.loadingContent : this.asyncContent : this.content;
		}
	},
	watch: {
		content: {
			handler() {
				this.fetchContent(!0);
			},
			immediate: !0
		},
		async finalContent() {
			await this.$nextTick(), this.$refs.popper.onResize();
		}
	},
	created() {
		this.$_fetchId = 0;
	},
	methods: {
		fetchContent(e) {
			if (typeof this.content == "function" && this.$_isShown && (e || !this.$_loading && this.asyncContent == null)) {
				this.asyncContent = null, this.$_loading = !0;
				const t = ++this.$_fetchId, o = this.content(this);
				o.then ? o.then((i) => this.onResult(t, i)) : this.onResult(t, o);
			}
		},
		onResult(e, t) {
			e === this.$_fetchId && (this.$_loading = !1, this.asyncContent = t);
		},
		onShow() {
			this.$_isShown = !0, this.fetchContent();
		},
		onHide() {
			this.$_isShown = !1;
		}
	}
});
var vt = ["innerHTML"];
var yt = ["textContent"];
function _t(e, t, o, i, s, r) {
	const p = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("PopperContent"), a = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("Popper");
	return (0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(a, (0, require__plugin_vue_export_helper.vue_exports.mergeProps)({ ref: "popper" }, e.$attrs, {
		theme: e.theme,
		"target-nodes": e.targetNodes,
		"popper-node": () => e.$refs.popperContent.$el,
		onApplyShow: e.onShow,
		onApplyHide: e.onHide
	}), {
		default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(({ popperId: l, isShown: u, shouldMountContent: L, skipTransition: D, autoHide: I, hide: F, handleResize: v, onResize: R, classes: j, result: V }) => [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(p, {
			ref: "popperContent",
			class: (0, require__plugin_vue_export_helper.vue_exports.normalizeClass)({ "v-popper--tooltip-loading": e.loading }),
			"popper-id": l,
			theme: e.theme,
			shown: u,
			mounted: L,
			"skip-transition": D,
			"auto-hide": I,
			"handle-resize": v,
			classes: j,
			result: V,
			onHide: F,
			onResize: R
		}, {
			default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [e.html ? ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createElementBlock)("div", {
				key: 0,
				innerHTML: e.finalContent
			}, null, 8, vt)) : ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createElementBlock)("div", {
				key: 1,
				textContent: (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(e.finalContent)
			}, null, 8, yt))]),
			_: 2
		}, 1032, [
			"class",
			"popper-id",
			"theme",
			"shown",
			"mounted",
			"skip-transition",
			"auto-hide",
			"handle-resize",
			"classes",
			"result",
			"onHide",
			"onResize"
		])]),
		_: 1
	}, 16, [
		"theme",
		"target-nodes",
		"popper-node",
		"onApplyShow",
		"onApplyHide"
	]);
}
var ze = /* @__PURE__ */ B($t, [["render", _t]]);
var Ae = "v-popper--has-tooltip";
function Tt(e, t) {
	let o = e.placement;
	if (!o && t) for (const i of Te) t[i] && (o = i);
	return o || (o = S(e.theme || "tooltip", "placement")), o;
}
function Ne(e, t, o) {
	let i;
	const s = typeof t;
	return s === "string" ? i = { content: t } : t && s === "object" ? i = t : i = { content: !1 }, i.placement = Tt(i, o), i.targetNodes = () => [e], i.referenceNode = () => e, i;
}
var x;
var b;
var Pt = 0;
function St() {
	if (x) return;
	b = (0, require__plugin_vue_export_helper.vue_exports.ref)([]), x = (0, require__plugin_vue_export_helper.vue_exports.createApp)({
		name: "VTooltipDirectiveApp",
		setup() {
			return { directives: b };
		},
		render() {
			return this.directives.map((t) => (0, require__plugin_vue_export_helper.vue_exports.h)(ze, {
				...t.options,
				shown: t.shown || t.options.shown,
				key: t.id
			}));
		},
		devtools: { hide: !0 }
	});
	const e = document.createElement("div");
	document.body.appendChild(e), x.mount(e);
}
function bt(e, t, o) {
	St();
	const i = (0, require__plugin_vue_export_helper.vue_exports.ref)(Ne(e, t, o)), s = (0, require__plugin_vue_export_helper.vue_exports.ref)(!1), r = {
		id: Pt++,
		options: i,
		shown: s
	};
	return b.value.push(r), e.classList && e.classList.add(Ae), e.$_popper = {
		options: i,
		item: r,
		show() {
			s.value = !0;
		},
		hide() {
			s.value = !1;
		}
	};
}
function He(e) {
	if (e.$_popper) {
		const t = b.value.indexOf(e.$_popper.item);
		t !== -1 && b.value.splice(t, 1), delete e.$_popper, delete e.$_popperOldShown, delete e.$_popperMountTarget;
	}
	e.classList && e.classList.remove(Ae);
}
function me(e, { value: t, modifiers: o }) {
	const i = Ne(e, t, o);
	if (!i.content || S(i.theme || "tooltip", "disabled")) He(e);
	else {
		let s;
		e.$_popper ? (s = e.$_popper, s.options.value = i) : s = bt(e, t, o), typeof t.shown < "u" && t.shown !== e.$_popperOldShown && (e.$_popperOldShown = t.shown, t.shown ? s.show() : s.hide());
	}
}
var oe = {
	beforeMount: me,
	updated: me,
	beforeUnmount(e) {
		He(e);
	}
};
function ge(e) {
	e.addEventListener("mousedown", H), e.addEventListener("click", H), e.addEventListener("touchstart", Oe, $ ? { passive: !0 } : !1);
}
function we(e) {
	e.removeEventListener("mousedown", H), e.removeEventListener("click", H), e.removeEventListener("touchstart", Oe), e.removeEventListener("touchend", Me), e.removeEventListener("touchcancel", Be);
}
function H(e) {
	const t = e.currentTarget;
	e.closePopover = !t.$_vclosepopover_touch, e.closeAllPopover = t.$_closePopoverModifiers && !!t.$_closePopoverModifiers.all;
}
function Oe(e) {
	if (e.changedTouches.length === 1) {
		const t = e.currentTarget;
		t.$_vclosepopover_touch = !0;
		t.$_vclosepopover_touchPoint = e.changedTouches[0], t.addEventListener("touchend", Me), t.addEventListener("touchcancel", Be);
	}
}
function Me(e) {
	const t = e.currentTarget;
	if (t.$_vclosepopover_touch = !1, e.changedTouches.length === 1) {
		const o = e.changedTouches[0], i = t.$_vclosepopover_touchPoint;
		e.closePopover = Math.abs(o.screenY - i.screenY) < 20 && Math.abs(o.screenX - i.screenX) < 20, e.closeAllPopover = t.$_closePopoverModifiers && !!t.$_closePopoverModifiers.all;
	}
}
function Be(e) {
	const t = e.currentTarget;
	t.$_vclosepopover_touch = !1;
}
var ie = {
	beforeMount(e, { value: t, modifiers: o }) {
		e.$_closePopoverModifiers = o, (typeof t > "u" || t) && ge(e);
	},
	updated(e, { value: t, oldValue: o, modifiers: i }) {
		e.$_closePopoverModifiers = i, t !== o && (typeof t > "u" || t ? ge(e) : we(e));
	},
	beforeUnmount(e) {
		we(e);
	}
};
var Mt = oe;
var Et = ie;
//#endregion
//#region src/components/contextMenu.vue
var _sfc_main$1 = {
	props: {
		placement: {
			type: String,
			default: "bottom-start"
		},
		noMaxSize: Boolean
	},
	components: { PopperWrapper: k }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)((0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("PopperWrapper"), (0, require__plugin_vue_export_helper.vue_exports.mergeProps)({
		theme: "contextmenu",
		delay: 0,
		handleResize: true,
		autoHide: true,
		triggers: ["click"],
		placement: $props.placement,
		popperClass: ["context-menu", { "max-size": !$props.noMaxSize }]
	}, _attrs), {
		popper: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
			if (_push) (0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "menu", {}, null, _push, _parent, _scopeId);
			else return [(0, require__plugin_vue_export_helper.vue_exports.renderSlot)(_ctx.$slots, "menu")];
		}),
		default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
			if (_push) (0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "default", {}, null, _push, _parent, _scopeId);
			else return [(0, require__plugin_vue_export_helper.vue_exports.renderSlot)(_ctx.$slots, "default")];
		}),
		_: 3
	}, _parent));
}
var _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
	const ssrContext = (0, require__plugin_vue_export_helper.vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/contextMenu.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var contextMenu_default = /*#__PURE__*/ require__plugin_vue_export_helper._plugin_vue_export_helper_default(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
//#endregion
//#region src/components/authorSpan.vue
var _sfc_main = {
	mixins: [require_server.common_default],
	components: {
		ContextMenu: contextMenu_default,
		GeneralButton: require_server.generalButton_default
	},
	directives: { closePopover: Et },
	props: {
		account: {
			type: JSON,
			required: true
		},
		discuss: Boolean,
		discussAdmin: Boolean,
		pos: String
	},
	computed: {
		nameLink() {
			if (this.account.type === 1) return this.doc_action_link(`${this.$t("namespaces.사용자", { lng: this.config.lang || "ko" })}:${this.account.name}`, "w");
			else if (this.account.uuid) return this.contribution_link(this.account.uuid);
		},
		isDeleted() {
			return this.account.type === -1;
		},
		isBold() {
			const isAccount = this.account.type === 1;
			return this.discuss ? this.discussAdmin : isAccount;
		},
		isMigrated() {
			return this.account.type === 2;
		},
		accountName() {
			return this.isDeleted ? `(${this.$t("components.author_span.deleted_user")})` : this.account.name || this.account.ip;
		},
		nameStyle() {
			if (!this.isDeleted) return this.account.userCSS;
		},
		accountType() {
			let str = this.$t("components.author_span." + (this.account.type === 0 ? "ip" : "user"));
			if (this.account.type === 2) str = this.$t("components.author_span.migrated", { type: str });
			const admin = !!(this.account.flags & 32);
			const autoVerified = !!(this.account.flags & 2);
			const mobileVerified = !!(this.account.flags & 4);
			if (autoVerified && mobileVerified) str = this.$t("components.author_span.mobile_auto_verified", { type: str });
			else if (autoVerified) str = this.$t("components.author_span.auto_verified", { type: str });
			else if (mobileVerified) str = this.$t("components.author_span.mobile_verified", { type: str });
			if (admin) str += ` (${this.$t("components.author_span.admin")})`;
			else if (this.discussAdmin) str += ` (${this.$t("components.author_span.prev_admin")})`;
			return str;
		},
		isBlockable() {
			return [0, 1].includes(this.account.type);
		}
	},
	methods: {
		onBlockButtonClick() {
			const note = this.$t("components.author_span.quick_block_note", { pos: this.pos || "" }).trim();
			this.openQuickACLGroup({
				...this.account.type === 0 ? { ip: this.account.ip } : { username: this.account.name },
				note
			});
		},
		copyUuid() {
			if (!this.account.uuid) return;
			navigator.clipboard.writeText(this.account.uuid);
			require_server.Ke(this.$t("components.author_span.copied_uuid", { accountName: this.accountName }));
		}
	}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_ContextMenu = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("ContextMenu");
	const _component_GeneralButton = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("GeneralButton");
	const _directive_close_popover = (0, require__plugin_vue_export_helper.vue_exports.resolveDirective)("close-popover");
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_ContextMenu, (0, require__plugin_vue_export_helper.vue_exports.mergeProps)({ class: "author-span" }, _attrs), {
		menu: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push(`<div class="account-info" data-v-95bbc605${_scopeId}><div class="account-type" data-v-95bbc605${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)($options.accountType)}</div><div class="account-name" data-v-95bbc605${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)($options.accountName)}</div></div><hr data-v-95bbc605${_scopeId}>`);
				if ($options.isDeleted && !$props.account.uuid) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_GeneralButton, { disabled: "" }, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push(`(${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("components.author_span.deleted"))})`);
						else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)("(" + (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("components.author_span.deleted")) + ")", 1)];
					}),
					_: 1
				}, _parent, _scopeId));
				else _push(`<!---->`);
				if ($props.account.type === 1 || $props.account.type === 0) {
					_push(`<!--[-->`);
					_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_GeneralButton, { href: _ctx.doc_action_link(_ctx.user_doc($options.accountName, $props.account.type), $props.account.type ? "w" : "discuss") }, {
						default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
							if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("components.author_span." + ($props.account.type ? "user_doc" : "user_discuss")))}`);
							else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("components.author_span." + ($props.account.type ? "user_doc" : "user_discuss"))), 1)];
						}),
						_: 1
					}, _parent, _scopeId));
					_push(`<hr data-v-95bbc605${_scopeId}><!--]-->`);
				} else _push(`<!---->`);
				if ($props.account.uuid) {
					_push(`<!--[-->`);
					_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_GeneralButton, { href: _ctx.contribution_link($props.account.uuid) }, {
						default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
							if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("components.author_span.document_contribution"))}`);
							else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("components.author_span.document_contribution")), 1)];
						}),
						_: 1
					}, _parent, _scopeId));
					_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_GeneralButton, { href: _ctx.contribution_link_discuss($props.account.uuid) }, {
						default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
							if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("components.author_span.discuss_contribution"))}`);
							else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("components.author_span.discuss_contribution")), 1)];
						}),
						_: 1
					}, _parent, _scopeId));
					if (_ctx.session.quick_block) {
						_push(`<!--[--><hr data-v-95bbc605${_scopeId}>`);
						_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_GeneralButton, (0, require__plugin_vue_export_helper.vue_exports.mergeProps)({ whenClick: $options.copyUuid }, (0, require__plugin_vue_export_helper.server_renderer_exports.ssrGetDirectiveProps)(_ctx, _directive_close_popover)), {
							default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
								if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("components.author_span.copy_uuid"))}`);
								else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("components.author_span.copy_uuid")), 1)];
							}),
							_: 1
						}, _parent, _scopeId));
						_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_GeneralButton, { href: {
							path: "/BlockHistory",
							query: {
								query: $props.account.type === 0 ? $props.account.ip : $props.account.uuid,
								target: "text"
							}
						} }, {
							default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
								if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("components.author_span.block_history"))}`);
								else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("components.author_span.block_history")), 1)];
							}),
							_: 1
						}, _parent, _scopeId));
						if ($options.isBlockable) {
							_push(`<!--[--><hr data-v-95bbc605${_scopeId}>`);
							_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_GeneralButton, (0, require__plugin_vue_export_helper.vue_exports.mergeProps)({
								theme: "danger",
								whenClick: $options.onBlockButtonClick
							}, (0, require__plugin_vue_export_helper.server_renderer_exports.ssrGetDirectiveProps)(_ctx, _directive_close_popover)), {
								default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
									if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("components.author_span.block"))}`);
									else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("components.author_span.block")), 1)];
								}),
								_: 1
							}, _parent, _scopeId));
							_push(`<!--]-->`);
						} else _push(`<!---->`);
						_push(`<!--]-->`);
					} else _push(`<!---->`);
					_push(`<!--]-->`);
				} else _push(`<!---->`);
			} else return [
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", { class: "account-info" }, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", {
					class: "account-type",
					textContent: (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)($options.accountType)
				}, null, 8, ["textContent"]), (0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", {
					class: "account-name",
					textContent: (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)($options.accountName)
				}, null, 8, ["textContent"])]),
				(0, require__plugin_vue_export_helper.vue_exports.createVNode)("hr"),
				$options.isDeleted && !$props.account.uuid ? ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(_component_GeneralButton, {
					key: 0,
					disabled: ""
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)("(" + (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("components.author_span.deleted")) + ")", 1)]),
					_: 1
				})) : (0, require__plugin_vue_export_helper.vue_exports.createCommentVNode)("", true),
				$props.account.type === 1 || $props.account.type === 0 ? ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(require__plugin_vue_export_helper.vue_exports.Fragment, { key: 1 }, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_GeneralButton, { href: _ctx.doc_action_link(_ctx.user_doc($options.accountName, $props.account.type), $props.account.type ? "w" : "discuss") }, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("components.author_span." + ($props.account.type ? "user_doc" : "user_discuss"))), 1)]),
					_: 1
				}, 8, ["href"]), (0, require__plugin_vue_export_helper.vue_exports.createVNode)("hr")], 64)) : (0, require__plugin_vue_export_helper.vue_exports.createCommentVNode)("", true),
				$props.account.uuid ? ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(require__plugin_vue_export_helper.vue_exports.Fragment, { key: 2 }, [
					(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_GeneralButton, { href: _ctx.contribution_link($props.account.uuid) }, {
						default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("components.author_span.document_contribution")), 1)]),
						_: 1
					}, 8, ["href"]),
					(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_GeneralButton, { href: _ctx.contribution_link_discuss($props.account.uuid) }, {
						default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("components.author_span.discuss_contribution")), 1)]),
						_: 1
					}, 8, ["href"]),
					_ctx.session.quick_block ? ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(require__plugin_vue_export_helper.vue_exports.Fragment, { key: 0 }, [
						(0, require__plugin_vue_export_helper.vue_exports.createVNode)("hr"),
						(0, require__plugin_vue_export_helper.vue_exports.withDirectives)(((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(_component_GeneralButton, { whenClick: $options.copyUuid }, {
							default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("components.author_span.copy_uuid")), 1)]),
							_: 1
						}, 8, ["whenClick"])), [[_directive_close_popover]]),
						(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_GeneralButton, { href: {
							path: "/BlockHistory",
							query: {
								query: $props.account.type === 0 ? $props.account.ip : $props.account.uuid,
								target: "text"
							}
						} }, {
							default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("components.author_span.block_history")), 1)]),
							_: 1
						}, 8, ["href"]),
						$options.isBlockable ? ((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(require__plugin_vue_export_helper.vue_exports.Fragment, { key: 0 }, [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("hr"), (0, require__plugin_vue_export_helper.vue_exports.withDirectives)(((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)(_component_GeneralButton, {
							theme: "danger",
							whenClick: $options.onBlockButtonClick
						}, {
							default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)(() => [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("components.author_span.block")), 1)]),
							_: 1
						}, 8, ["whenClick"])), [[_directive_close_popover]])], 64)) : (0, require__plugin_vue_export_helper.vue_exports.createCommentVNode)("", true)
					], 64)) : (0, require__plugin_vue_export_helper.vue_exports.createCommentVNode)("", true)
				], 64)) : (0, require__plugin_vue_export_helper.vue_exports.createCommentVNode)("", true)
			];
		}),
		default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
			if (_push) (0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderVNode)(_push, (0, require__plugin_vue_export_helper.vue_exports.createVNode)((0, require__plugin_vue_export_helper.vue_exports.resolveDynamicComponent)($options.nameLink ? "a" : "span"), {
				class: {
					"name-bold": $options.isBold,
					"name-deleted": $options.isDeleted,
					"name-deleted-span": !$options.nameLink,
					"name-migrated": $options.isMigrated
				},
				href: $options.nameLink,
				style: $options.nameStyle,
				onClick: () => {}
			}, null), _parent, _scopeId);
			else return [((0, require__plugin_vue_export_helper.vue_exports.openBlock)(), (0, require__plugin_vue_export_helper.vue_exports.createBlock)((0, require__plugin_vue_export_helper.vue_exports.resolveDynamicComponent)($options.nameLink ? "a" : "span"), {
				class: {
					"name-bold": $options.isBold,
					"name-deleted": $options.isDeleted,
					"name-deleted-span": !$options.nameLink,
					"name-migrated": $options.isMigrated
				},
				href: $options.nameLink,
				style: $options.nameStyle,
				textContent: (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)($options.accountName),
				onClick: (0, require__plugin_vue_export_helper.vue_exports.withModifiers)(() => {}, ["prevent"])
			}, null, 8, [
				"class",
				"href",
				"style",
				"textContent",
				"onClick"
			]))];
		}),
		_: 1
	}, _parent));
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = (0, require__plugin_vue_export_helper.vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/authorSpan.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var authorSpan_default = /*#__PURE__*/ require__plugin_vue_export_helper._plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-95bbc605"]]);
//#endregion
Object.defineProperty(exports, "Et", {
	enumerable: true,
	get: function() {
		return Et;
	}
});
Object.defineProperty(exports, "Mt", {
	enumerable: true,
	get: function() {
		return Mt;
	}
});
Object.defineProperty(exports, "authorSpan_default", {
	enumerable: true,
	get: function() {
		return authorSpan_default;
	}
});
Object.defineProperty(exports, "contextMenu_default", {
	enumerable: true,
	get: function() {
		return contextMenu_default;
	}
});
