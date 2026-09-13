const require__plugin_vue_export_helper = require("./_plugin-vue_export-helper-C1TPHJvg.cjs");
const require_server = require("../server.cjs");
const require_prevNextBtn = require("./prevNextBtn-BuquZ4_C.cjs");
const require_floating_ui_core = require("./floating-ui.core-DRXlJkIO.cjs");
//#region node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs
function hasWindow() {
	return typeof window !== "undefined";
}
function getNodeName(node) {
	if (isNode(node)) return (node.nodeName || "").toLowerCase();
	return "#document";
}
function getWindow(node) {
	var _node$ownerDocument;
	return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getDocumentElement(node) {
	var _ref;
	return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
}
function isNode(value) {
	if (!hasWindow()) return false;
	return value instanceof Node || value instanceof getWindow(value).Node;
}
function isElement(value) {
	if (!hasWindow()) return false;
	return value instanceof Element || value instanceof getWindow(value).Element;
}
function isHTMLElement(value) {
	if (!hasWindow()) return false;
	return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
function isShadowRoot(value) {
	if (!hasWindow() || typeof ShadowRoot === "undefined") return false;
	return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
}
function isOverflowElement(element) {
	const { overflow, overflowX, overflowY, display } = getComputedStyle(element);
	return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !["inline", "contents"].includes(display);
}
function isTableElement(element) {
	return [
		"table",
		"td",
		"th"
	].includes(getNodeName(element));
}
function isTopLayer(element) {
	return [":popover-open", ":modal"].some((selector) => {
		try {
			return element.matches(selector);
		} catch (e) {
			return false;
		}
	});
}
function isContainingBlock(elementOrCss) {
	const webkit = isWebKit();
	const css = isElement(elementOrCss) ? getComputedStyle(elementOrCss) : elementOrCss;
	return [
		"transform",
		"translate",
		"scale",
		"rotate",
		"perspective"
	].some((value) => css[value] ? css[value] !== "none" : false) || (css.containerType ? css.containerType !== "normal" : false) || !webkit && (css.backdropFilter ? css.backdropFilter !== "none" : false) || !webkit && (css.filter ? css.filter !== "none" : false) || [
		"transform",
		"translate",
		"scale",
		"rotate",
		"perspective",
		"filter"
	].some((value) => (css.willChange || "").includes(value)) || [
		"paint",
		"layout",
		"strict",
		"content"
	].some((value) => (css.contain || "").includes(value));
}
function getContainingBlock(element) {
	let currentNode = getParentNode(element);
	while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
		if (isContainingBlock(currentNode)) return currentNode;
		else if (isTopLayer(currentNode)) return null;
		currentNode = getParentNode(currentNode);
	}
	return null;
}
function isWebKit() {
	if (typeof CSS === "undefined" || !CSS.supports) return false;
	return CSS.supports("-webkit-backdrop-filter", "none");
}
function isLastTraversableNode(node) {
	return [
		"html",
		"body",
		"#document"
	].includes(getNodeName(node));
}
function getComputedStyle(element) {
	return getWindow(element).getComputedStyle(element);
}
function getNodeScroll(element) {
	if (isElement(element)) return {
		scrollLeft: element.scrollLeft,
		scrollTop: element.scrollTop
	};
	return {
		scrollLeft: element.scrollX,
		scrollTop: element.scrollY
	};
}
function getParentNode(node) {
	if (getNodeName(node) === "html") return node;
	const result = node.assignedSlot || node.parentNode || isShadowRoot(node) && node.host || getDocumentElement(node);
	return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
	const parentNode = getParentNode(node);
	if (isLastTraversableNode(parentNode)) return node.ownerDocument ? node.ownerDocument.body : node.body;
	if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) return parentNode;
	return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list, traverseIframes) {
	var _node$ownerDocument2;
	if (list === void 0) list = [];
	if (traverseIframes === void 0) traverseIframes = true;
	const scrollableAncestor = getNearestOverflowAncestor(node);
	const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
	const win = getWindow(scrollableAncestor);
	if (isBody) {
		const frameElement = getFrameElement(win);
		return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], frameElement && traverseIframes ? getOverflowAncestors(frameElement) : []);
	}
	return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
}
function getFrameElement(win) {
	return win.parent && Object.getPrototypeOf(win.parent) ? win.frameElement : null;
}
//#endregion
//#region node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function getCssDimensions(element) {
	const css = getComputedStyle(element);
	let width = parseFloat(css.width) || 0;
	let height = parseFloat(css.height) || 0;
	const hasOffset = isHTMLElement(element);
	const offsetWidth = hasOffset ? element.offsetWidth : width;
	const offsetHeight = hasOffset ? element.offsetHeight : height;
	const shouldFallback = require_floating_ui_core.round(width) !== offsetWidth || require_floating_ui_core.round(height) !== offsetHeight;
	if (shouldFallback) {
		width = offsetWidth;
		height = offsetHeight;
	}
	return {
		width,
		height,
		$: shouldFallback
	};
}
function unwrapElement(element) {
	return !isElement(element) ? element.contextElement : element;
}
function getScale(element) {
	const domElement = unwrapElement(element);
	if (!isHTMLElement(domElement)) return require_floating_ui_core.createCoords(1);
	const rect = domElement.getBoundingClientRect();
	const { width, height, $ } = getCssDimensions(domElement);
	let x = ($ ? require_floating_ui_core.round(rect.width) : rect.width) / width;
	let y = ($ ? require_floating_ui_core.round(rect.height) : rect.height) / height;
	if (!x || !Number.isFinite(x)) x = 1;
	if (!y || !Number.isFinite(y)) y = 1;
	return {
		x,
		y
	};
}
var noOffsets = /*#__PURE__*/ require_floating_ui_core.createCoords(0);
function getVisualOffsets(element) {
	const win = getWindow(element);
	if (!isWebKit() || !win.visualViewport) return noOffsets;
	return {
		x: win.visualViewport.offsetLeft,
		y: win.visualViewport.offsetTop
	};
}
function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
	if (isFixed === void 0) isFixed = false;
	if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element)) return false;
	return isFixed;
}
function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
	if (includeScale === void 0) includeScale = false;
	if (isFixedStrategy === void 0) isFixedStrategy = false;
	const clientRect = element.getBoundingClientRect();
	const domElement = unwrapElement(element);
	let scale = require_floating_ui_core.createCoords(1);
	if (includeScale) if (offsetParent) {
		if (isElement(offsetParent)) scale = getScale(offsetParent);
	} else scale = getScale(element);
	const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : require_floating_ui_core.createCoords(0);
	let x = (clientRect.left + visualOffsets.x) / scale.x;
	let y = (clientRect.top + visualOffsets.y) / scale.y;
	let width = clientRect.width / scale.x;
	let height = clientRect.height / scale.y;
	if (domElement) {
		const win = getWindow(domElement);
		const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
		let currentWin = win;
		let currentIFrame = getFrameElement(currentWin);
		while (currentIFrame && offsetParent && offsetWin !== currentWin) {
			const iframeScale = getScale(currentIFrame);
			const iframeRect = currentIFrame.getBoundingClientRect();
			const css = getComputedStyle(currentIFrame);
			const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
			const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
			x *= iframeScale.x;
			y *= iframeScale.y;
			width *= iframeScale.x;
			height *= iframeScale.y;
			x += left;
			y += top;
			currentWin = getWindow(currentIFrame);
			currentIFrame = getFrameElement(currentWin);
		}
	}
	return require_floating_ui_core.rectToClientRect({
		width,
		height,
		x,
		y
	});
}
function getWindowScrollBarX(element, rect) {
	const leftScroll = getNodeScroll(element).scrollLeft;
	if (!rect) return getBoundingClientRect(getDocumentElement(element)).left + leftScroll;
	return rect.left + leftScroll;
}
function getHTMLOffset(documentElement, scroll, ignoreScrollbarX) {
	if (ignoreScrollbarX === void 0) ignoreScrollbarX = false;
	const htmlRect = documentElement.getBoundingClientRect();
	return {
		x: htmlRect.left + scroll.scrollLeft - (ignoreScrollbarX ? 0 : getWindowScrollBarX(documentElement, htmlRect)),
		y: htmlRect.top + scroll.scrollTop
	};
}
function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
	let { elements, rect, offsetParent, strategy } = _ref;
	const isFixed = strategy === "fixed";
	const documentElement = getDocumentElement(offsetParent);
	const topLayer = elements ? isTopLayer(elements.floating) : false;
	if (offsetParent === documentElement || topLayer && isFixed) return rect;
	let scroll = {
		scrollLeft: 0,
		scrollTop: 0
	};
	let scale = require_floating_ui_core.createCoords(1);
	const offsets = require_floating_ui_core.createCoords(0);
	const isOffsetParentAnElement = isHTMLElement(offsetParent);
	if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
		if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) scroll = getNodeScroll(offsetParent);
		if (isHTMLElement(offsetParent)) {
			const offsetRect = getBoundingClientRect(offsetParent);
			scale = getScale(offsetParent);
			offsets.x = offsetRect.x + offsetParent.clientLeft;
			offsets.y = offsetRect.y + offsetParent.clientTop;
		}
	}
	const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll, true) : require_floating_ui_core.createCoords(0);
	return {
		width: rect.width * scale.x,
		height: rect.height * scale.y,
		x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x + htmlOffset.x,
		y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y + htmlOffset.y
	};
}
function getClientRects(element) {
	return Array.from(element.getClientRects());
}
function getDocumentRect(element) {
	const html = getDocumentElement(element);
	const scroll = getNodeScroll(element);
	const body = element.ownerDocument.body;
	const width = require_floating_ui_core.max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
	const height = require_floating_ui_core.max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
	let x = -scroll.scrollLeft + getWindowScrollBarX(element);
	const y = -scroll.scrollTop;
	if (getComputedStyle(body).direction === "rtl") x += require_floating_ui_core.max(html.clientWidth, body.clientWidth) - width;
	return {
		width,
		height,
		x,
		y
	};
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
		const visualViewportBased = isWebKit();
		if (!visualViewportBased || visualViewportBased && strategy === "fixed") {
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
	const scale = isHTMLElement(element) ? getScale(element) : require_floating_ui_core.createCoords(1);
	return {
		width: element.clientWidth * scale.x,
		height: element.clientHeight * scale.y,
		x: left * scale.x,
		y: top * scale.y
	};
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
	let rect;
	if (clippingAncestor === "viewport") rect = getViewportRect(element, strategy);
	else if (clippingAncestor === "document") rect = getDocumentRect(getDocumentElement(element));
	else if (isElement(clippingAncestor)) rect = getInnerBoundingClientRect(clippingAncestor, strategy);
	else {
		const visualOffsets = getVisualOffsets(element);
		rect = {
			x: clippingAncestor.x - visualOffsets.x,
			y: clippingAncestor.y - visualOffsets.y,
			width: clippingAncestor.width,
			height: clippingAncestor.height
		};
	}
	return require_floating_ui_core.rectToClientRect(rect);
}
function hasFixedPositionAncestor(element, stopNode) {
	const parentNode = getParentNode(element);
	if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) return false;
	return getComputedStyle(parentNode).position === "fixed" || hasFixedPositionAncestor(parentNode, stopNode);
}
function getClippingElementAncestors(element, cache) {
	const cachedResult = cache.get(element);
	if (cachedResult) return cachedResult;
	let result = getOverflowAncestors(element, [], false).filter((el) => isElement(el) && getNodeName(el) !== "body");
	let currentContainingBlockComputedStyle = null;
	const elementIsFixed = getComputedStyle(element).position === "fixed";
	let currentNode = elementIsFixed ? getParentNode(element) : element;
	while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
		const computedStyle = getComputedStyle(currentNode);
		const currentNodeIsContaining = isContainingBlock(currentNode);
		if (!currentNodeIsContaining && computedStyle.position === "fixed") currentContainingBlockComputedStyle = null;
		if (elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === "static" && !!currentContainingBlockComputedStyle && ["absolute", "fixed"].includes(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode)) result = result.filter((ancestor) => ancestor !== currentNode);
		else currentContainingBlockComputedStyle = computedStyle;
		currentNode = getParentNode(currentNode);
	}
	cache.set(element, result);
	return result;
}
function getClippingRect(_ref) {
	let { element, boundary, rootBoundary, strategy } = _ref;
	const clippingAncestors = [...boundary === "clippingAncestors" ? isTopLayer(element) ? [] : getClippingElementAncestors(element, this._c) : [].concat(boundary), rootBoundary];
	const firstClippingAncestor = clippingAncestors[0];
	const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
		const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
		accRect.top = require_floating_ui_core.max(rect.top, accRect.top);
		accRect.right = require_floating_ui_core.min(rect.right, accRect.right);
		accRect.bottom = require_floating_ui_core.min(rect.bottom, accRect.bottom);
		accRect.left = require_floating_ui_core.max(rect.left, accRect.left);
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
	const { width, height } = getCssDimensions(element);
	return {
		width,
		height
	};
}
function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
	const isOffsetParentAnElement = isHTMLElement(offsetParent);
	const documentElement = getDocumentElement(offsetParent);
	const isFixed = strategy === "fixed";
	const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
	let scroll = {
		scrollLeft: 0,
		scrollTop: 0
	};
	const offsets = require_floating_ui_core.createCoords(0);
	if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
		if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) scroll = getNodeScroll(offsetParent);
		if (isOffsetParentAnElement) {
			const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
			offsets.x = offsetRect.x + offsetParent.clientLeft;
			offsets.y = offsetRect.y + offsetParent.clientTop;
		} else if (documentElement) offsets.x = getWindowScrollBarX(documentElement);
	}
	const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : require_floating_ui_core.createCoords(0);
	return {
		x: rect.left + scroll.scrollLeft - offsets.x - htmlOffset.x,
		y: rect.top + scroll.scrollTop - offsets.y - htmlOffset.y,
		width: rect.width,
		height: rect.height
	};
}
function isStaticPositioned(element) {
	return getComputedStyle(element).position === "static";
}
function getTrueOffsetParent(element, polyfill) {
	if (!isHTMLElement(element) || getComputedStyle(element).position === "fixed") return null;
	if (polyfill) return polyfill(element);
	let rawOffsetParent = element.offsetParent;
	if (getDocumentElement(element) === rawOffsetParent) rawOffsetParent = rawOffsetParent.ownerDocument.body;
	return rawOffsetParent;
}
function getOffsetParent(element, polyfill) {
	const win = getWindow(element);
	if (isTopLayer(element)) return win;
	if (!isHTMLElement(element)) {
		let svgOffsetParent = getParentNode(element);
		while (svgOffsetParent && !isLastTraversableNode(svgOffsetParent)) {
			if (isElement(svgOffsetParent) && !isStaticPositioned(svgOffsetParent)) return svgOffsetParent;
			svgOffsetParent = getParentNode(svgOffsetParent);
		}
		return win;
	}
	let offsetParent = getTrueOffsetParent(element, polyfill);
	while (offsetParent && isTableElement(offsetParent) && isStaticPositioned(offsetParent)) offsetParent = getTrueOffsetParent(offsetParent, polyfill);
	if (offsetParent && isLastTraversableNode(offsetParent) && isStaticPositioned(offsetParent) && !isContainingBlock(offsetParent)) return win;
	return offsetParent || getContainingBlock(element) || win;
}
var getElementRects = async function(data) {
	const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
	const getDimensionsFn = this.getDimensions;
	const floatingDimensions = await getDimensionsFn(data.floating);
	return {
		reference: getRectRelativeToOffsetParent(data.reference, await getOffsetParentFn(data.floating), data.strategy),
		floating: {
			x: 0,
			y: 0,
			width: floatingDimensions.width,
			height: floatingDimensions.height
		}
	};
};
function isRTL(element) {
	return getComputedStyle(element).direction === "rtl";
}
var platform = {
	convertOffsetParentRelativeRectToViewportRelativeRect,
	getDocumentElement,
	getClippingRect,
	getOffsetParent,
	getElementRects,
	getClientRects,
	getDimensions,
	getScale,
	isElement,
	isRTL
};
function rectsAreEqual(a, b) {
	return a.x === b.x && a.y === b.y && a.width === b.width && a.height === b.height;
}
function observeMove(element, onMove) {
	let io = null;
	let timeoutId;
	const root = getDocumentElement(element);
	function cleanup() {
		var _io;
		clearTimeout(timeoutId);
		(_io = io) == null || _io.disconnect();
		io = null;
	}
	function refresh(skip, threshold) {
		if (skip === void 0) skip = false;
		if (threshold === void 0) threshold = 1;
		cleanup();
		const elementRectForRootMargin = element.getBoundingClientRect();
		const { left, top, width, height } = elementRectForRootMargin;
		if (!skip) onMove();
		if (!width || !height) return;
		const insetTop = require_floating_ui_core.floor(top);
		const insetRight = require_floating_ui_core.floor(root.clientWidth - (left + width));
		const insetBottom = require_floating_ui_core.floor(root.clientHeight - (top + height));
		const insetLeft = require_floating_ui_core.floor(left);
		const options = {
			rootMargin: -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px",
			threshold: require_floating_ui_core.max(0, require_floating_ui_core.min(1, threshold)) || 1
		};
		let isFirstUpdate = true;
		function handleObserve(entries) {
			const ratio = entries[0].intersectionRatio;
			if (ratio !== threshold) {
				if (!isFirstUpdate) return refresh();
				if (!ratio) timeoutId = setTimeout(() => {
					refresh(false, 1e-7);
				}, 1e3);
				else refresh(false, ratio);
			}
			if (ratio === 1 && !rectsAreEqual(elementRectForRootMargin, element.getBoundingClientRect())) refresh();
			isFirstUpdate = false;
		}
		try {
			io = new IntersectionObserver(handleObserve, {
				...options,
				root: root.ownerDocument
			});
		} catch (e) {
			io = new IntersectionObserver(handleObserve, options);
		}
		io.observe(element);
	}
	refresh(true);
	return cleanup;
}
/**
* Automatically updates the position of the floating element when necessary.
* Should only be called when the floating element is mounted on the DOM or
* visible on the screen.
* @returns cleanup function that should be invoked when the floating element is
* removed from the DOM or hidden from the screen.
* @see https://floating-ui.com/docs/autoUpdate
*/
function autoUpdate(reference, floating, update, options) {
	if (options === void 0) options = {};
	const { ancestorScroll = true, ancestorResize = true, elementResize = typeof ResizeObserver === "function", layoutShift = typeof IntersectionObserver === "function", animationFrame = false } = options;
	const referenceEl = unwrapElement(reference);
	const ancestors = ancestorScroll || ancestorResize ? [...referenceEl ? getOverflowAncestors(referenceEl) : [], ...getOverflowAncestors(floating)] : [];
	ancestors.forEach((ancestor) => {
		ancestorScroll && ancestor.addEventListener("scroll", update, { passive: true });
		ancestorResize && ancestor.addEventListener("resize", update);
	});
	const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
	let reobserveFrame = -1;
	let resizeObserver = null;
	if (elementResize) {
		resizeObserver = new ResizeObserver((_ref) => {
			let [firstEntry] = _ref;
			if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
				resizeObserver.unobserve(floating);
				cancelAnimationFrame(reobserveFrame);
				reobserveFrame = requestAnimationFrame(() => {
					var _resizeObserver;
					(_resizeObserver = resizeObserver) == null || _resizeObserver.observe(floating);
				});
			}
			update();
		});
		if (referenceEl && !animationFrame) resizeObserver.observe(referenceEl);
		resizeObserver.observe(floating);
	}
	let frameId;
	let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
	if (animationFrame) frameLoop();
	function frameLoop() {
		const nextRefRect = getBoundingClientRect(reference);
		if (prevRefRect && !rectsAreEqual(prevRefRect, nextRefRect)) update();
		prevRefRect = nextRefRect;
		frameId = requestAnimationFrame(frameLoop);
	}
	update();
	return () => {
		var _resizeObserver2;
		ancestors.forEach((ancestor) => {
			ancestorScroll && ancestor.removeEventListener("scroll", update);
			ancestorResize && ancestor.removeEventListener("resize", update);
		});
		cleanupIo?.();
		(_resizeObserver2 = resizeObserver) == null || _resizeObserver2.disconnect();
		resizeObserver = null;
		if (animationFrame) cancelAnimationFrame(frameId);
	};
}
/**
* Modifies the placement by translating the floating element along the
* specified axes.
* A number (shorthand for `mainAxis` or distance), or an axes configuration
* object may be passed.
* @see https://floating-ui.com/docs/offset
*/
var offset = require_floating_ui_core.offset;
/**
* Optimizes the visibility of the floating element by shifting it in order to
* keep it in view when it will overflow the clipping boundary.
* @see https://floating-ui.com/docs/shift
*/
var shift = require_floating_ui_core.shift;
/**
* Optimizes the visibility of the floating element by flipping the `placement`
* in order to keep it in view when the preferred placement(s) will overflow the
* clipping boundary. Alternative to `autoPlacement`.
* @see https://floating-ui.com/docs/flip
*/
var flip = require_floating_ui_core.flip;
/**
* Computes the `x` and `y` coordinates that will place the floating element
* next to a given reference element.
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
//#region src/components/wiki/wikiCategory.vue
var _sfc_main$2 = {
	mixins: [require_server.common_default],
	components: {
		NuxtLink: require_server.nuxtLink_default,
		GeneralButton: require_server.generalButton_default
	},
	props: { categories: {
		type: Array,
		required: true
	} },
	data() {
		return {
			isFold: true,
			showCurtain: false
		};
	},
	methods: {
		onClickUnfoldButton() {
			this.isFold = false;
			this.showCurtain = false;
		},
		async recalculate() {
			this.isFold = true;
			this.showCurtain = false;
			await this.$nextTick();
			const el = this.$refs.el;
			if (!el) return;
			this.showCurtain = el.scrollHeight > el.clientHeight;
		}
	},
	mounted() {
		this.recalculate();
	},
	watch: { categories() {
		this.recalculate();
	} }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_NuxtLink = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("NuxtLink");
	const _component_GeneralButton = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("GeneralButton");
	_push(`<div${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttrs)((0, require__plugin_vue_export_helper.vue_exports.mergeProps)({
		ref: "el",
		class: ["category", { "category-folded": $data.isFold }]
	}, _attrs))} data-v-649a4415><span data-v-649a4415>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("components.wiki_category.category"))}</span><ul data-v-649a4415><!--[-->`);
	(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderList)($props.categories, (c) => {
		_push(`<li class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)({ blur: c.blur })}" data-v-649a4415>`);
		_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_NuxtLink, {
			class: { "not-exist": c.notExist },
			to: _ctx.doc_action_link(c.document, "w")
		}, {
			default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
				if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(c.document.title)}`);
				else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(c.document.title), 1)];
			}),
			_: 2
		}, _parent));
		_push(`</li>`);
	});
	_push(`<!--]--></ul>`);
	if ($data.showCurtain) {
		_push(`<div class="curtain" data-v-649a4415>`);
		_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_GeneralButton, {
			class: "curtain-button",
			whenClick: $options.onClickUnfoldButton
		}, {
			default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
				if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("components.wiki_category.more"))}`);
				else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("components.wiki_category.more")), 1)];
			}),
			_: 1
		}, _parent));
		_push(`</div>`);
	} else _push(`<!---->`);
	_push(`</div>`);
}
var _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
	const ssrContext = (0, require__plugin_vue_export_helper.vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/wiki/wikiCategory.vue");
	return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
var wikiCategory_default = /*#__PURE__*/ require__plugin_vue_export_helper._plugin_vue_export_helper_default(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-649a4415"]]);
//#endregion
//#region src/components/wiki/wikiCategoryDocs.vue
var _sfc_main$1 = {
	mixins: [require_server.common_default],
	components: {
		NuxtLink: require_server.nuxtLink_default,
		PrevNextBtn: require_prevNextBtn.prevNextBtn_default
	},
	props: { categories: JSON },
	methods: { pageProps(name, category) {
		return {
			prev: category.prevItem ? { query: {
				namespace: name,
				cuntil: category.prevItem
			} } : null,
			next: category.nextItem ? { query: {
				namespace: name,
				cfrom: category.nextItem
			} } : null
		};
	} }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_PrevNextBtn = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("PrevNextBtn");
	const _component_NuxtLink = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("NuxtLink");
	_push(`<!--[-->`);
	(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderList)($props.categories, (category, name) => {
		_push(`<div${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderAttr)("id", "category-" + name)} data-v-e8330ab0><h2 data-v-e8330ab0>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(name === "분류" ? _ctx.$t("components.wiki_category_docs.sub_category") : _ctx.$t("components.wiki_category_docs.namespace", {
			category: _ctx.data.document.title,
			namespace: _ctx.$t("namespaces." + name, { defaultValue: name })
		}))}</h2>`);
		if (category.prevItem || category.nextItem) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_PrevNextBtn, (0, require__plugin_vue_export_helper.vue_exports.mergeProps)({ flex: "" }, { ref_for: true }, $options.pageProps(name, category)), null, _parent));
		else _push(`<!---->`);
		_push(`<div data-v-e8330ab0><div data-v-e8330ab0>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("components.wiki_category_docs.total", { count: category.count }))}</div><div class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)({ "many-wrapper": Object.keys(category.categoriesPerChar).length >= 3 })}" data-v-e8330ab0><!--[-->`);
		(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderList)(category.categoriesPerChar, (documents, char) => {
			_push(`<div data-v-e8330ab0><h3 data-v-e8330ab0>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(char)}</h3><ul data-v-e8330ab0><!--[-->`);
			(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderList)(documents, (document) => {
				_push(`<li data-v-e8330ab0>`);
				_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_NuxtLink, {
					to: _ctx.doc_action_link(document.parsedName, "w"),
					title: _ctx.doc_fulltitle(document.parsedName)
				}, {
					default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(document.category.text || document.parsedName.title)}`);
						else return [(0, require__plugin_vue_export_helper.vue_exports.createTextVNode)((0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(document.category.text || document.parsedName.title), 1)];
					}),
					_: 2
				}, _parent));
				_push(`</li>`);
			});
			_push(`<!--]--></ul></div>`);
		});
		_push(`<!--]--></div></div>`);
		if (category.prevItem || category.nextItem) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_PrevNextBtn, (0, require__plugin_vue_export_helper.vue_exports.mergeProps)({ flex: "" }, { ref_for: true }, $options.pageProps(name, category)), null, _parent));
		else _push(`<!---->`);
		_push(`</div>`);
	});
	_push(`<!--]-->`);
}
var _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
	const ssrContext = (0, require__plugin_vue_export_helper.vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/wiki/wikiCategoryDocs.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var wikiCategoryDocs_default = /*#__PURE__*/ require__plugin_vue_export_helper._plugin_vue_export_helper_default(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-e8330ab0"]]);
//#endregion
//#region src/components/wiki/wikiContent.vue
var _sfc_main = {
	mixins: [require_server.common_default],
	components: {
		Modal: require_server.modal_default,
		NuxtLink: require_server.nuxtLink_default,
		Alert: require_server.alert_default,
		WikiCategory: wikiCategory_default,
		WikiCategoryDocs: wikiCategoryDocs_default,
		LocalDate: require_server.localDate_default
	},
	props: {
		discuss: {
			type: Boolean,
			default: false
		},
		content: {
			type: String,
			default: ""
		},
		categories: {
			type: Array,
			default: () => []
		},
		userbox: {
			type: Object,
			default: () => ({})
		},
		topHtml: { type: String },
		bottomHtml: { type: String }
	},
	data() {
		return {
			popover: {
				show: false,
				content: "",
				cleanup: null
			},
			modal: {
				show: false,
				content: ""
			},
			canPlayVideo: false,
			autoplayObserver: null,
			cleanupFunctions: []
		};
	},
	mounted() {
		this.canPlayVideo = (() => {
			try {
				if (document.createElement("video")?.canPlayType?.(`video/mp4; codecs="avc1.4D401E"`)) return true;
			} catch (e) {}
			return false;
		});
		this.autoplayObserver = new IntersectionObserver((entries) => {
			for (let entry of entries) try {
				if (entry.isIntersecting) entry.target.play();
				else entry.target.pause();
			} catch (e) {}
		});
		this.$nextTick(() => this.setupWikiContent());
	},
	beforeUnmount() {
		for (let func of this.cleanupFunctions) func();
		this.cleanupFunctions.length = 0;
	},
	watch: {
		async content() {
			await this.$nextTick();
			await this.setupWikiContent();
		},
		"popover.show"(newValue) {
			if (!newValue) this.popover.cleanup?.();
		},
		$route() {
			this.popover.show = false;
		}
	},
	methods: {
		getFootnotes(element) {
			return [...element.getElementsByClassName("wiki-fn-content")];
		},
		async setupWikiContent(element = this.$refs.div) {
			{
				const imageHide = this.$store.state.localConfig["wiki.image_hide"];
				const disableImageLazy = this.$store.state.localConfig["wiki.disable_image_lazy"];
				for (let img of [...element.getElementsByClassName("wiki-image-loading")]) {
					if (img.tagName !== "IMG") continue;
					const parent = img.parentNode;
					if (!parent) continue;
					const isVideo = img.dataset.videoSrc && this.canPlayVideo;
					const size = parseInt(isVideo ? img.dataset.videoFilesize : img.dataset.filesize);
					img.classList.remove("wiki-image-loading");
					const addInfoBtn = () => {
						if (!img.dataset.doc || img.closest("a")) return;
						const btn = document.createElement("a");
						btn.classList.add("wiki-image-info-btn");
						btn.href = img.dataset.doc;
						btn.rel = "nofollow noopener";
						parent.appendChild(btn);
					};
					const loadImg = () => {
						if (!isVideo) {
							if (!disableImageLazy) img.setAttribute("loading", "lazy");
							img.setAttribute("src", img.dataset.src);
							addInfoBtn();
							return;
						}
						const video = document.createElement("video");
						if (img.dataset.src) {
							video.muted = true;
							video.loop = true;
							const baseUrl = "/skins/flasma";
							video.setAttribute("poster", baseUrl + (baseUrl.endsWith("/") ? "" : "/") + "img/loading.gif");
						} else video.controls = true;
						video.playsInline = true;
						video.setAttribute("src", img.dataset.videoSrc);
						video.classList.add("wiki-image");
						if (img.getAttribute("width")) video.setAttribute("width", img.getAttribute("width"));
						if (img.getAttribute("height")) video.setAttribute("height", img.getAttribute("height"));
						if (!disableImageLazy) video.setAttribute("loading", "lazy");
						parent.insertBefore(video, img);
						addInfoBtn();
						parent.removeChild(img);
						if (img.dataset.src && this.autoplayObserver) {
							this.autoplayObserver.observe(video);
							this.cleanupFunctions.push(() => {
								this.autoplayObserver.unobserve(video);
							});
						}
					};
					if (imageHide === "hide" || imageHide === "hide_1mb" && !isNaN(size) && size >= 1024 * 1024) {
						const btn = document.createElement("button");
						btn.setAttribute("type", "button");
						btn.classList.add("wiki-image", "wiki-image-show-button");
						let sizeText = "";
						if (size) if (size > 1024 * 1024) sizeText = (size / 1024 / 1024).toFixed(2) + "MB";
						else if (size > 1024) sizeText = (size / 1024).toFixed(2) + "KB";
						else sizeText = size + "bytes";
						sizeText &&= ` (${sizeText})`;
						btn.innerText = this.$t("components.wiki_content." + (img.dataset.src ? "image" : "video")) + sizeText;
						const removeBtnListener = () => {
							btn.removeEventListener("click", onBtnClick);
						};
						this.cleanupFunctions.push(removeBtnListener);
						let onBtnClick = (e) => {
							if (!onBtnClick) return;
							e?.preventDefault();
							removeBtnListener();
							onBtnClick = null;
							parent.insertBefore(img, btn);
							parent.removeChild(btn);
							loadImg();
						};
						btn.addEventListener("click", onBtnClick);
						parent.insertBefore(btn, img);
						parent.removeChild(img);
					} else loadImg();
				}
			}
			const headings = element.getElementsByClassName("wiki-heading");
			for (let heading of headings) {
				heading.addEventListener("click", (e) => {
					if (e.target.tagName === "A") return;
					const heading = e.currentTarget;
					const content = heading.nextElementSibling;
					if (heading.classList.contains("wiki-heading-folded")) {
						heading.classList.remove("wiki-heading-folded");
						content.classList.remove("wiki-heading-content-folded");
					} else {
						heading.classList.add("wiki-heading-folded");
						content.classList.add("wiki-heading-content-folded");
					}
				});
				if (this.$store.state.localConfig["wiki.hide_heading_content"]) {
					heading.classList.add("wiki-heading-folded");
					heading.nextElementSibling.classList.add("wiki-heading-content-folded");
				}
			}
			const foldings = element.getElementsByClassName("wiki-folding");
			const showFolding = this.$store.state.localConfig["wiki.show_folding"];
			const disableFoldingAnimation = this.$store.state.localConfig["wiki.disable_folding_animation"];
			for (let folding of foldings) {
				if (!disableFoldingAnimation) this.cleanupFunctions.push(this.setupFoldingAnimation(folding).cleanup);
				if (showFolding) folding.open = true;
			}
			if (!disableFoldingAnimation) {
				const tocs = element.getElementsByClassName("wiki-macro-toc");
				for (let toc of tocs) {
					const details = toc.getElementsByTagName("details")[0];
					if (!details) continue;
					this.cleanupFunctions.push(this.setupFoldingAnimation(details).cleanup);
				}
			}
			let footnoteType = this.$store.state.localConfig["wiki.footnote_type"];
			footnoteType ??= require_server.isMobile ? "popup" : "popover";
			if (footnoteType === "popover") this.setupFootnoteTooltip(element);
			else if (footnoteType === "popup") this.setupFootnoteModal(element);
			else if (footnoteType === "unfold") this.setupFootnoteUnfolded(element);
			if (this.$store.state.localConfig["wiki.unfold_wiki_link"]) {
				const links = element.getElementsByClassName("wiki-link-internal");
				for (let link of links) {
					if (link.tagName !== "A") continue;
					const title = link.getAttribute("title");
					if (!title) continue;
					let checkTitle = title;
					const anchorPos = title.lastIndexOf("#");
					if (anchorPos !== -1) checkTitle = title.slice(0, anchorPos);
					if (checkTitle.trim() === link.innerText.trim()) continue;
					if (link.getElementsByTagName("img").length) continue;
					const unfolded = document.createElement("span");
					unfolded.classList = "wiki-link-unfolded";
					unfolded.innerText = title;
					const linkParent = link.parentNode;
					if (linkParent) if (link.nextSibling) linkParent.insertBefore(unfolded, link.nextSibling);
					else linkParent.appendChild(unfolded);
				}
			}
			const oldDarkStyle = document.getElementById("darkStyle");
			if (oldDarkStyle) oldDarkStyle.remove();
			const darkStyleElements = document.querySelectorAll("*[data-dark-style]");
			const darkStyles = [];
			for (let element of darkStyleElements) {
				const className = "_" + await require_server.sha256(element.dataset.darkStyle);
				if (element.classList.contains(className)) continue;
				const styleData = element.dataset.darkStyle.split(";").map((a) => a.trim()).filter((a) => a);
				let style = "";
				for (let stylePart of styleData) {
					const [key, value] = stylePart.split(":").map((a) => a.trim());
					style += `${key}:${value} !important;`;
				}
				let darkStyle = darkStyles.find((a) => a.style === style);
				if (!darkStyle) {
					darkStyle = {
						style,
						class: className
					};
					darkStyles.push(darkStyle);
				}
				element.classList.add(darkStyle.class);
			}
			if (darkStyles.length) {
				const newDarkStyle = document.createElement("style");
				newDarkStyle.id = "darkStyle";
				newDarkStyle.innerHTML = darkStyles.map((a) => `.theseed-dark-mode .${a.class}{${a.style}}`).join("");
				document.body.appendChild(newDarkStyle);
			}
			const times = element.querySelectorAll("time[data-type=timezone]");
			for (let time of times) {
				const type = time.dataset.type;
				const date = new Date(time.dateTime);
				const dateStr = [
					date.getFullYear(),
					date.getMonth() + 1,
					date.getDate()
				].map((num) => num.toString().padStart(2, "0")).join("-");
				const timeStr = [
					date.getHours(),
					date.getMinutes(),
					date.getSeconds()
				].map((num) => num.toString().padStart(2, "0")).join(":");
				let result = dateStr + " " + timeStr;
				if (type === "timezone") {
					const offset = -(date.getTimezoneOffset() / 60);
					result += (offset > 0 ? "+" : "-") + (offset * 100).toString().padStart(4, "0");
				}
				time.textContent = result;
			}
			const tables = [...element.getElementsByClassName("wiki-table")];
			for (let table of tables) {
				const thead = [...table.children].find((e) => e.tagName === "THEAD");
				const tbody = [...table.children].find((e) => e.tagName === "TBODY");
				if (!thead || !tbody) continue;
				if (tbody.querySelector("td[colspan]") || tbody.querySelector("td[rowspan]")) continue;
				const lastHeaderRow = [...thead.getElementsByTagName("tr")].pop();
				if (!lastHeaderRow) continue;
				const headerCells = [...lastHeaderRow.children].filter((e) => e.tagName === "TH");
				const rows = [...tbody.children].filter((e) => e.tagName === "TR");
				for (let cellIndex in headerCells) {
					const cell = headerCells[cellIndex];
					if (!cell.classList.contains("wiki-table-sortable")) continue;
					cell.classList.add("sortable-table-head-cell");
					const sortDirections = [
						"original",
						"asc",
						"desc"
					];
					const nextSortDirection = (str) => sortDirections[(sortDirections.indexOf(str) + 1) % sortDirections.length];
					const onCellClick = () => {
						for (let otherCell of headerCells) if (cell !== otherCell) delete otherCell.dataset.sortDirection;
						const direction = cell.dataset.sortDirection = nextSortDirection(cell.dataset.sortDirection || "original");
						const directionNum = direction === "asc" ? 1 : -1;
						const sorted = [...rows];
						if (direction !== "original") sorted.sort((a, b) => {
							const cellA = [...a.children].filter((e) => e.tagName === "TD")[cellIndex];
							const cellB = [...b.children].filter((e) => e.tagName === "TD")[cellIndex];
							const textA = cellA ? cellA.textContent : "";
							const textB = cellB ? cellB.textContent : "";
							if (textA === textB) return 0;
							const numA = textA ? parseFloat(textA.replaceAll(",", ""), 10) : NaN;
							const numB = textB ? parseFloat(textB.replaceAll(",", ""), 10) : NaN;
							if (isNaN(numA) || isNaN(numB)) return (textA > textB ? 1 : -1) * directionNum;
							else return (numA - numB) * directionNum;
						});
						for (let row of sorted) tbody.appendChild(row);
					};
					cell.addEventListener("click", onCellClick);
					this.cleanupFunctions.push(() => {
						cell.removeEventListener("click", onCellClick);
						cell.classList.remove("sortable-table-head-cell");
					});
				}
			}
			const onClicks = [...element.querySelectorAll("[data-onclick]")];
			for (let onClick of onClicks) {
				const onclickList = onClick.dataset.onclick.split(";").map((a) => a.split(","));
				const clickHandler = (e) => {
					e.preventDefault();
					for (let onclickParams of onclickList) switch (onclickParams[0]) {
						case "toggle-class": {
							const target = [...document.getElementsByClassName(onclickParams[1])];
							for (let el of target) el.classList.toggle(onclickParams[2]);
							break;
						}
						case "add-class": {
							const target = [...document.getElementsByClassName(onclickParams[1])];
							for (let el of target) el.classList.add(onclickParams[2]);
							break;
						}
						case "remove-class": {
							const target = [...document.getElementsByClassName(onclickParams[1])];
							for (let el of target) el.classList.remove(onclickParams[2]);
							break;
						}
					}
				};
				onClick.addEventListener("click", clickHandler);
				this.cleanupFunctions.push(() => {
					onClick.removeEventListener("click", clickHandler);
				});
			}
			if (!this.discuss) document.getElementById(location.hash.slice(1))?.scrollIntoView();
		},
		setupFootnoteTooltip(element) {
			let hovering = 0;
			const mouseLeaveHandler = (_) => {
				requestAnimationFrame(() => requestAnimationFrame(() => {
					hovering--;
					if (!hovering) this.popover.show = false;
				}));
			};
			const popover = this.$refs.popover;
			popover.addEventListener("mouseenter", (_) => {
				hovering++;
			});
			popover.addEventListener("mouseleave", mouseLeaveHandler);
			for (let footnote of this.getFootnotes(element)) {
				const targetId = footnote.getAttribute("href").slice(1);
				const contentElement = document.getElementById(targetId).parentElement;
				footnote.title = "";
				const update = () => computePosition(footnote, popover, {
					placement: "top",
					middleware: [
						offset(5),
						flip(),
						shift()
					]
				}).then(({ x, y, placement, middlewareData }) => {
					popover.setAttribute("x-placement", placement);
					Object.assign(popover.style, {
						left: `${x}px`,
						top: `${y}px`
					});
					this.$refs.popoverArrow.style.left = `calc(50% - 10px - ${middlewareData.shift.x}px)`;
				});
				footnote.addEventListener("mouseenter", async (_) => {
					hovering++;
					this.popover.show = true;
					this.popover.content = contentElement.innerHTML;
					this.popover.cleanup = autoUpdate(footnote, popover, update);
				});
				footnote.addEventListener("mouseleave", mouseLeaveHandler);
			}
		},
		setupFootnoteModal(element) {
			for (let footnote of this.getFootnotes(element)) {
				const targetId = footnote.getAttribute("href").slice(1);
				const contentElement = document.getElementById(targetId).parentElement;
				footnote.title = "";
				footnote.addEventListener("click", (e) => {
					e.preventDefault();
					this.modal.content = contentElement.innerHTML;
					this.modal.show = true;
				});
			}
		},
		setupFootnoteUnfolded(element) {
			for (let footnote of this.getFootnotes(element)) {
				if (footnote.tagName !== "A") continue;
				const footnoteLink = footnote.getAttribute("href");
				if (!footnoteLink) continue;
				const footnoteId = decodeURIComponent(footnoteLink.slice(1));
				const footnoteParent = footnote.parentNode;
				if (!footnoteParent) continue;
				let footnoteContent = document.getElementById(footnoteId);
				if (!footnoteContent || !footnoteContent.parentNode) continue;
				footnoteContent = footnoteContent.parentNode.innerHTML;
				const unfolded = document.createElement("span");
				unfolded.classList = "wiki-fn-unfolded";
				unfolded.innerHTML = footnoteContent;
				unfolded.id = "r" + footnoteId;
				const unfoldedLink = unfolded.getElementsByTagName("a")[0];
				if (unfoldedLink) unfoldedLink.href = "#" + footnoteId;
				unfolded.removeChild(unfolded.getElementsByTagName("span")[0]);
				this.setupWikiContent(unfolded);
				footnoteParent.insertBefore(unfolded, footnote);
				footnoteParent.removeChild(footnote);
			}
		},
		setupFoldingAnimation(details) {
			const summary = details.getElementsByTagName("summary")[0];
			const content = summary.nextElementSibling;
			if (!summary || !content) return;
			let animation = null;
			let isClosing = false;
			let isOpening = false;
			const onAnimationEnd = (open) => {
				animation = null;
				isClosing = false;
				isOpening = false;
				details.open = open;
				details.style.height = "";
				details.style.overflow = "";
			};
			const onSummaryClick = (e) => {
				e.preventDefault();
				details.style.overflow = "hidden";
				if (isClosing || !details.open) {
					details.style.height = details.offsetHeight + "px";
					details.open = true;
					requestAnimationFrame(() => {
						isOpening = true;
						const start = details.offsetHeight + "px";
						const end = summary.offsetHeight + content.offsetHeight + "px";
						animation?.cancel();
						animation = details.animate({ height: [start, end] }, {
							duration: 100,
							easing: "ease-in"
						});
						animation.addEventListener("finish", () => {
							onAnimationEnd(true);
						});
						animation.addEventListener("cancel", () => {
							isOpening = false;
						});
					});
				} else if (isOpening || details.open) requestAnimationFrame(() => {
					isClosing = true;
					const start = details.offsetHeight + "px";
					const end = summary.offsetHeight + "px";
					animation?.cancel();
					animation = details.animate({ height: [start, end] }, {
						duration: 100,
						easing: "ease-out"
					});
					animation.addEventListener("finish", () => {
						onAnimationEnd(false);
					});
					animation.addEventListener("cancel", () => {
						isClosing = false;
					});
				});
			};
			summary.addEventListener("click", onSummaryClick);
			return { cleanup: () => {
				animation?.cancel();
				details.style.height = "";
				details.style.overflow = "";
				summary.removeEventListener("click", onSummaryClick);
			} };
		},
		async formSubmit(e) {
			const el = e.target;
			const actionAttr = el.getAttribute("action");
			const url = new URL(el.action);
			const formData = new FormData(el);
			await this.internalRequestAndProcess(url.pathname, {
				method: el.method,
				headers: { "Content-Type": "application/x-www-form-urlencoded" },
				body: new URLSearchParams(formData).toString()
			});
			const newEl = this.$refs.div.querySelector(`form[action="${actionAttr}"]`);
			for (let [key, value] of formData.entries()) {
				const input = newEl.querySelector(`[type=radio][name="${key}"][value="${value}"]`);
				input.checked = true;
			}
		}
	}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_WikiCategory = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("WikiCategory");
	const _component_i18next = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("i18next");
	const _component_LocalDate = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("LocalDate");
	const _component_Modal = (0, require__plugin_vue_export_helper.vue_exports.resolveComponent)("Modal");
	_push(`<!--[-->`);
	if ($props.categories.length && _ctx.$store.state.localConfig["wiki.category_position"] !== "bottom") _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_WikiCategory, { categories: $props.categories }, null, _parent));
	else _push(`<!---->`);
	if ($props.userbox.admin) _push(`<div class="user-box admin-box" data-v-cd9a4a5a>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("components.wiki_content.admin"))}</div>`);
	else _push(`<!---->`);
	if ($props.userbox.blocked) {
		_push(`<div class="user-box banned-box" data-v-cd9a4a5a>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("components.wiki_content.blocked", {
			group: $props.userbox.blocked.name,
			id: $props.userbox.blocked.id
		}))}<br data-v-cd9a4a5a><br data-v-cd9a4a5a>`);
		_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_i18next, { translation: _ctx.$t("components.wiki_content.blocked_" + ($props.userbox.blocked.expiresAt ? "duration" : "forever"), { group: $props.userbox.blocked.name }) }, (0, require__plugin_vue_export_helper.vue_exports.createSlots)({
			createdAt: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
				if (_push) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_LocalDate, { date: $props.userbox.blocked.createdAt }, null, _parent, _scopeId));
				else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_LocalDate, { date: $props.userbox.blocked.createdAt }, null, 8, ["date"])];
			}),
			_: 2
		}, [$props.userbox.blocked.expiresAt ? {
			name: "expiresAt",
			fn: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
				if (_push) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_LocalDate, { date: $props.userbox.blocked.expiresAt }, null, _parent, _scopeId));
				else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)(_component_LocalDate, { date: $props.userbox.blocked.expiresAt }, null, 8, ["date"])];
			}),
			key: "0"
		} : void 0]), _parent));
		_push(`<br data-v-cd9a4a5a> ${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("components.wiki_content.reason"))} ${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)($props.userbox.blocked.note ?? "null")}</div>`);
	} else _push(`<!---->`);
	_push(`<div class="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderClass)([{ "wiki-thread-content": $props.discuss }, "wiki-content"])}" data-v-cd9a4a5a>${($props.topHtml || "") + $props.content + ($props.bottomHtml || "") ?? ""}</div>`);
	if ($props.categories.length && ["bottom", "both"].includes(_ctx.$store.state.localConfig["wiki.category_position"])) _push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_WikiCategory, { categories: $props.categories }, null, _parent));
	else _push(`<!---->`);
	_push(`<div id="tooltip" class="popper" style="${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderStyle)($data.popover.show ? null : { display: "none" })}" data-v-cd9a4a5a><div id="tooltip-arrow" class="popper__arrow" data-v-cd9a4a5a></div><div id="tooltip-content" class="wiki-content" data-v-cd9a4a5a>${$data.popover.content ?? ""}</div></div>`);
	_push((0, require__plugin_vue_export_helper.server_renderer_exports.ssrRenderComponent)(_component_Modal, {
		modelValue: $data.modal.show,
		"onUpdate:modelValue": ($event) => $data.modal.show = $event
	}, {
		default: (0, require__plugin_vue_export_helper.vue_exports.withCtx)((props, _push, _parent, _scopeId) => {
			if (_push) _push(`<div class="wiki-content" data-v-cd9a4a5a${_scopeId}>${$data.modal.content ?? ""}</div><button type="button" data-v-cd9a4a5a${_scopeId}>${(0, require__plugin_vue_export_helper.server_renderer_exports.ssrInterpolate)(_ctx.$t("components.wiki_content.close_modal"))}</button>`);
			else return [(0, require__plugin_vue_export_helper.vue_exports.createVNode)("div", {
				class: "wiki-content",
				innerHTML: $data.modal.content,
				onClick: _ctx.onDynamicContentClick
			}, null, 8, ["innerHTML", "onClick"]), (0, require__plugin_vue_export_helper.vue_exports.createVNode)("button", {
				onClick: props.close,
				type: "button"
			}, (0, require__plugin_vue_export_helper.vue_exports.toDisplayString)(_ctx.$t("components.wiki_content.close_modal")), 9, ["onClick"])];
		}),
		_: 1
	}, _parent));
	_push(`<!--]-->`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = (0, require__plugin_vue_export_helper.vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/wiki/wikiContent.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var wikiContent_default = /*#__PURE__*/ require__plugin_vue_export_helper._plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-cd9a4a5a"]]);
//#endregion
Object.defineProperty(exports, "wikiCategoryDocs_default", {
	enumerable: true,
	get: function() {
		return wikiCategoryDocs_default;
	}
});
Object.defineProperty(exports, "wikiContent_default", {
	enumerable: true,
	get: function() {
		return wikiContent_default;
	}
});
