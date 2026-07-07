import { n as __exportAll } from "../../_runtime.mjs";
import { n as createMemoryHistory, r as parseHref } from "../tanstack__history.mjs";
import { Readable } from "node:stream";
import { ReadableStream as ReadableStream$1 } from "node:stream/web";
//#region node_modules/@tanstack/router-core/dist/esm/utils.js
/**
* Return the last element of an array.
* Intended for non-empty arrays used within router internals.
*/
function last(arr) {
	return arr[arr.length - 1];
}
function isFunction(d) {
	return typeof d === "function";
}
/**
* Apply a value-or-updater to a previous value.
* Accepts either a literal value or a function of the previous value.
*/
function functionalUpdate(updater, previous) {
	if (isFunction(updater)) return updater(previous);
	return updater;
}
var hasOwn = Object.prototype.hasOwnProperty;
function hasKeys(obj) {
	for (const key in obj) if (hasOwn.call(obj, key)) return true;
	return false;
}
var createNull = () => Object.create(null);
var nullReplaceEqualDeep = (prev, next) => replaceEqualDeep(prev, next, createNull);
/**
* This function returns `prev` if `_next` is deeply equal.
* If not, it will replace any deeply equal children of `b` with those of `a`.
* This can be used for structural sharing between immutable JSON values for example.
* Do not use this with signals
*/
function replaceEqualDeep(prev, _next, _makeObj = () => ({}), _depth = 0) {
	return _next;
}
function isPlainObject(o) {
	if (!hasObjectPrototype(o)) return false;
	const ctor = o.constructor;
	if (typeof ctor === "undefined") return true;
	const prot = ctor.prototype;
	if (!hasObjectPrototype(prot)) return false;
	if (!prot.hasOwnProperty("isPrototypeOf")) return false;
	return true;
}
function hasObjectPrototype(o) {
	return Object.prototype.toString.call(o) === "[object Object]";
}
/**
* Perform a deep equality check with options for partial comparison and
* ignoring `undefined` values. Optimized for router state comparisons.
*/
function deepEqual(a, b, opts) {
	if (a === b) return true;
	if (typeof a !== typeof b) return false;
	if (Array.isArray(a) && Array.isArray(b)) {
		if (a.length !== b.length) return false;
		for (let i = 0, l = a.length; i < l; i++) if (!deepEqual(a[i], b[i], opts)) return false;
		return true;
	}
	if (isPlainObject(a) && isPlainObject(b)) {
		const ignoreUndefined = opts?.ignoreUndefined ?? true;
		if (opts?.partial) {
			for (const k in b) if (!ignoreUndefined || b[k] !== void 0) {
				if (!deepEqual(a[k], b[k], opts)) return false;
			}
			return true;
		}
		let aCount = 0;
		if (!ignoreUndefined) aCount = Object.keys(a).length;
		else for (const k in a) if (a[k] !== void 0) aCount++;
		let bCount = 0;
		for (const k in b) if (!ignoreUndefined || b[k] !== void 0) {
			bCount++;
			if (bCount > aCount || !deepEqual(a[k], b[k], opts)) return false;
		}
		return aCount === bCount;
	}
	return false;
}
/**
* Create a promise with exposed resolve/reject and status fields.
* Useful for coordinating async router lifecycle operations.
*/
function createControlledPromise(onResolve) {
	let resolveLoadPromise;
	let rejectLoadPromise;
	const controlledPromise = new Promise((resolve, reject) => {
		resolveLoadPromise = resolve;
		rejectLoadPromise = reject;
	});
	controlledPromise.status = "pending";
	controlledPromise.resolve = (value) => {
		controlledPromise.status = "resolved";
		controlledPromise.value = value;
		resolveLoadPromise(value);
		onResolve?.(value);
	};
	controlledPromise.reject = (e) => {
		controlledPromise.status = "rejected";
		rejectLoadPromise(e);
	};
	return controlledPromise;
}
/**
* Heuristically detect dynamic import "module not found" errors
* across major browsers for lazy route component handling.
*/
function isModuleNotFoundError(error) {
	if (typeof error?.message !== "string") return false;
	return error.message.startsWith("Failed to fetch dynamically imported module") || error.message.startsWith("error loading dynamically imported module") || error.message.startsWith("Importing a module script failed");
}
function isPromise(value) {
	return Boolean(value && typeof value === "object" && typeof value.then === "function");
}
/**
* Re-encode characters that are unsafe in URL paths.
* Includes ASCII control characters (0x00-0x1F, 0x7F) and a subset of the
* WHATWG URL "path percent-encode set" (", <, >, `, {, }).
*
* Space (0x20) is intentionally excluded — decodeURI decodes %20 to space
* and the router stores decoded spaces in location.pathname. The existing
* encodePathLikeUrl already handles re-encoding spaces for outgoing URLs.
*
* These characters are decoded by decodeURI but must remain percent-encoded
* in paths to match how upstream layers (CDNs, edge middleware, browsers)
* interpret the URL, preventing infinite redirect loops and path mismatches.
*/
var PATH_UNSAFE_RE = /[\x00-\x1f\x7f"<>`{}]/g;
function sanitizePathSegment(segment) {
	return segment.replace(PATH_UNSAFE_RE, (ch) => "%" + ch.charCodeAt(0).toString(16).toUpperCase().padStart(2, "0"));
}
function decodeSegment(segment) {
	let decoded;
	try {
		decoded = decodeURI(segment);
	} catch {
		decoded = segment.replaceAll(/%[0-9A-F]{2}/gi, (match) => {
			try {
				return decodeURI(match);
			} catch {
				return match;
			}
		});
	}
	return sanitizePathSegment(decoded);
}
/**
* Default list of URL protocols to allow in links, redirects, and navigation.
* Any absolute URL protocol not in this list is treated as dangerous by default.
*/
var DEFAULT_PROTOCOL_ALLOWLIST = [
	"http:",
	"https:",
	"mailto:",
	"tel:"
];
/**
* Check if a URL string uses a protocol that is not in the allowlist.
* Returns true for blocked protocols like javascript:, blob:, data:, etc.
*
* The URL constructor correctly normalizes:
* - Mixed case (JavaScript: → javascript:)
* - Whitespace/control characters (java\nscript: → javascript:)
* - Leading whitespace
*
* For relative URLs (no protocol), returns false (safe).
*
* @param url - The URL string to check
* @param allowlist - Set of protocols to allow
* @returns true if the URL uses a protocol that is not allowed
*/
function isDangerousProtocol(url, allowlist) {
	if (!url) return false;
	try {
		const parsed = new URL(url);
		return !allowlist.has(parsed.protocol);
	} catch {
		return false;
	}
}
var HTML_ESCAPE_LOOKUP = {
	"&": "\\u0026",
	">": "\\u003e",
	"<": "\\u003c",
	"\u2028": "\\u2028",
	"\u2029": "\\u2029"
};
var HTML_ESCAPE_REGEX = /[&><\u2028\u2029]/g;
/**
* Escape HTML special characters in a string to prevent XSS attacks
* when embedding strings in script tags during SSR.
*
* This is essential for preventing XSS vulnerabilities when user-controlled
* content is embedded in inline scripts.
*/
function escapeHtml(str) {
	return str.replace(HTML_ESCAPE_REGEX, (match) => HTML_ESCAPE_LOOKUP[match]);
}
function decodePath(path) {
	if (!path) return {
		path,
		handledProtocolRelativeURL: false
	};
	if (!/[%\\\x00-\x1f\x7f]/.test(path) && !path.startsWith("//")) return {
		path,
		handledProtocolRelativeURL: false
	};
	const re = /%25|%5C/gi;
	let cursor = 0;
	let result = "";
	let match;
	while (null !== (match = re.exec(path))) {
		result += decodeSegment(path.slice(cursor, match.index)) + match[0];
		cursor = re.lastIndex;
	}
	result = result + decodeSegment(cursor ? path.slice(cursor) : path);
	let handledProtocolRelativeURL = false;
	if (result.startsWith("//")) {
		handledProtocolRelativeURL = true;
		result = "/" + result.replace(/^\/+/, "");
	}
	return {
		path: result,
		handledProtocolRelativeURL
	};
}
/**
* Encodes a path the same way `new URL()` would, but without the overhead of full URL parsing.
*
* This function encodes:
* - Whitespace characters (spaces → %20, tabs → %09, etc.)
* - Non-ASCII/Unicode characters (emojis, accented characters, etc.)
*
* It preserves:
* - Already percent-encoded sequences (won't double-encode %2F, %25, etc.)
* - ASCII special characters valid in URL paths (@, $, &, +, etc.)
* - Forward slashes as path separators
*
* Used to generate proper href values for SSR without constructing URL objects.
*
* @example
* encodePathLikeUrl('/path/file name.pdf') // '/path/file%20name.pdf'
* encodePathLikeUrl('/path/日本語') // '/path/%E6%97%A5%E6%9C%AC%E8%AA%9E'
* encodePathLikeUrl('/path/already%20encoded') // '/path/already%20encoded' (preserved)
*/
function encodePathLikeUrl(path) {
	if (!/\s|[^\u0000-\u007F]/.test(path)) return path;
	return path.replace(/\s|[^\u0000-\u007F]/gu, encodeURIComponent);
}
function arraysEqual(a, b) {
	if (a === b) return true;
	if (a.length !== b.length) return false;
	for (let i = 0; i < a.length; i++) if (a[i] !== b[i]) return false;
	return true;
}
//#endregion
//#region node_modules/@tanstack/router-core/dist/esm/invariant.js
function invariant() {
	throw new Error("Invariant failed");
}
//#endregion
//#region node_modules/@tanstack/router-core/dist/esm/lru-cache.js
function createLRUCache(max) {
	const cache = /* @__PURE__ */ new Map();
	let oldest;
	let newest;
	const touch = (entry) => {
		if (!entry.next) return;
		if (!entry.prev) {
			entry.next.prev = void 0;
			oldest = entry.next;
			entry.next = void 0;
			if (newest) {
				entry.prev = newest;
				newest.next = entry;
			}
		} else {
			entry.prev.next = entry.next;
			entry.next.prev = entry.prev;
			entry.next = void 0;
			if (newest) {
				newest.next = entry;
				entry.prev = newest;
			}
		}
		newest = entry;
	};
	return {
		get(key) {
			const entry = cache.get(key);
			if (!entry) return void 0;
			touch(entry);
			return entry.value;
		},
		set(key, value) {
			if (cache.size >= max && oldest) {
				const toDelete = oldest;
				cache.delete(toDelete.key);
				if (toDelete.next) {
					oldest = toDelete.next;
					toDelete.next.prev = void 0;
				}
				if (toDelete === newest) newest = void 0;
			}
			const existing = cache.get(key);
			if (existing) {
				existing.value = value;
				touch(existing);
			} else {
				const entry = {
					key,
					value,
					prev: newest
				};
				if (newest) newest.next = entry;
				newest = entry;
				if (!oldest) oldest = entry;
				cache.set(key, entry);
			}
		},
		clear() {
			cache.clear();
			oldest = void 0;
			newest = void 0;
		}
	};
}
//#endregion
//#region node_modules/@tanstack/router-core/dist/esm/new-process-route-tree.js
var SEGMENT_TYPE_INDEX = 4;
var SEGMENT_TYPE_PATHLESS = 5;
function getOpenAndCloseBraces(part) {
	const openBrace = part.indexOf("{");
	if (openBrace === -1) return null;
	const closeBrace = part.indexOf("}", openBrace);
	if (closeBrace === -1) return null;
	if (openBrace + 1 >= part.length) return null;
	return [openBrace, closeBrace];
}
/**
* Populates the `output` array with the parsed representation of the given `segment` string.
*
* Usage:
* ```ts
* let output
* let cursor = 0
* while (cursor < path.length) {
*   output = parseSegment(path, cursor, output)
*   const end = output[5]
*   cursor = end + 1
* ```
*
* `output` is stored outside to avoid allocations during repeated calls. It doesn't need to be typed
* or initialized, it will be done automatically.
*/
function parseSegment(path, start, output = /* @__PURE__ */ new Uint16Array(6)) {
	const next = path.indexOf("/", start);
	const end = next === -1 ? path.length : next;
	const part = path.substring(start, end);
	if (!part || !part.includes("$")) {
		output[0] = 0;
		output[1] = start;
		output[2] = start;
		output[3] = end;
		output[4] = end;
		output[5] = end;
		return output;
	}
	if (part === "$") {
		const total = path.length;
		output[0] = 2;
		output[1] = start;
		output[2] = start;
		output[3] = total;
		output[4] = total;
		output[5] = total;
		return output;
	}
	if (part.charCodeAt(0) === 36) {
		output[0] = 1;
		output[1] = start;
		output[2] = start + 1;
		output[3] = end;
		output[4] = end;
		output[5] = end;
		return output;
	}
	const braces = getOpenAndCloseBraces(part);
	if (braces) {
		const [openBrace, closeBrace] = braces;
		const firstChar = part.charCodeAt(openBrace + 1);
		if (firstChar === 45) {
			if (openBrace + 2 < part.length && part.charCodeAt(openBrace + 2) === 36) {
				const paramStart = openBrace + 3;
				const paramEnd = closeBrace;
				if (paramStart < paramEnd) {
					output[0] = 3;
					output[1] = start + openBrace;
					output[2] = start + paramStart;
					output[3] = start + paramEnd;
					output[4] = start + closeBrace + 1;
					output[5] = end;
					return output;
				}
			}
		} else if (firstChar === 36) {
			const dollarPos = openBrace + 1;
			const afterDollar = openBrace + 2;
			if (afterDollar === closeBrace) {
				output[0] = 2;
				output[1] = start + openBrace;
				output[2] = start + dollarPos;
				output[3] = start + afterDollar;
				output[4] = start + closeBrace + 1;
				output[5] = path.length;
				return output;
			}
			output[0] = 1;
			output[1] = start + openBrace;
			output[2] = start + afterDollar;
			output[3] = start + closeBrace;
			output[4] = start + closeBrace + 1;
			output[5] = end;
			return output;
		}
	}
	output[0] = 0;
	output[1] = start;
	output[2] = start;
	output[3] = end;
	output[4] = end;
	output[5] = end;
	return output;
}
/**
* Recursively parses the segments of the given route tree and populates a segment trie.
*
* @param data A reusable Uint16Array for parsing segments. (non important, we're just avoiding allocations)
* @param route The current route to parse.
* @param start The starting index for parsing within the route's full path.
* @param node The current segment node in the trie to populate.
* @param onRoute Callback invoked for each route processed.
*/
function parseSegments(defaultCaseSensitive, data, route, start, node, depth, onRoute) {
	onRoute?.(route);
	let cursor = start;
	{
		const path = route.fullPath ?? route.from;
		const length = path.length;
		const caseSensitive = route.options?.caseSensitive ?? defaultCaseSensitive;
		const parseParams = route.options?.params?.parse ?? route.options?.parseParams;
		while (cursor < length) {
			const segment = parseSegment(path, cursor, data);
			let nextNode;
			const start = cursor;
			const end = segment[5];
			cursor = end + 1;
			depth++;
			switch (segment[0]) {
				case 0: {
					const value = path.substring(segment[2], segment[3]);
					if (caseSensitive) {
						const existingNode = node.static?.get(value);
						if (existingNode) nextNode = existingNode;
						else {
							node.static ??= /* @__PURE__ */ new Map();
							const next = createStaticNode(route.fullPath ?? route.from);
							next.parent = node;
							next.depth = depth;
							nextNode = next;
							node.static.set(value, next);
						}
					} else {
						const name = value.toLowerCase();
						const existingNode = node.staticInsensitive?.get(name);
						if (existingNode) nextNode = existingNode;
						else {
							node.staticInsensitive ??= /* @__PURE__ */ new Map();
							const next = createStaticNode(route.fullPath ?? route.from);
							next.parent = node;
							next.depth = depth;
							nextNode = next;
							node.staticInsensitive.set(name, next);
						}
					}
					break;
				}
				case 1: {
					const prefix_raw = path.substring(start, segment[1]);
					const suffix_raw = path.substring(segment[4], end);
					const actuallyCaseSensitive = caseSensitive && !!(prefix_raw || suffix_raw);
					const prefix = !prefix_raw ? void 0 : actuallyCaseSensitive ? prefix_raw : prefix_raw.toLowerCase();
					const suffix = !suffix_raw ? void 0 : actuallyCaseSensitive ? suffix_raw : suffix_raw.toLowerCase();
					const existingNode = !parseParams && node.dynamic?.find((s) => !s.parse && s.caseSensitive === actuallyCaseSensitive && s.prefix === prefix && s.suffix === suffix);
					if (existingNode) nextNode = existingNode;
					else {
						const next = createDynamicNode(1, route.fullPath ?? route.from, actuallyCaseSensitive, prefix, suffix);
						nextNode = next;
						next.depth = depth;
						next.parent = node;
						node.dynamic ??= [];
						node.dynamic.push(next);
					}
					break;
				}
				case 3: {
					const prefix_raw = path.substring(start, segment[1]);
					const suffix_raw = path.substring(segment[4], end);
					const actuallyCaseSensitive = caseSensitive && !!(prefix_raw || suffix_raw);
					const prefix = !prefix_raw ? void 0 : actuallyCaseSensitive ? prefix_raw : prefix_raw.toLowerCase();
					const suffix = !suffix_raw ? void 0 : actuallyCaseSensitive ? suffix_raw : suffix_raw.toLowerCase();
					const existingNode = !parseParams && node.optional?.find((s) => !s.parse && s.caseSensitive === actuallyCaseSensitive && s.prefix === prefix && s.suffix === suffix);
					if (existingNode) nextNode = existingNode;
					else {
						const next = createDynamicNode(3, route.fullPath ?? route.from, actuallyCaseSensitive, prefix, suffix);
						nextNode = next;
						next.parent = node;
						next.depth = depth;
						node.optional ??= [];
						node.optional.push(next);
					}
					break;
				}
				case 2: {
					const prefix_raw = path.substring(start, segment[1]);
					const suffix_raw = path.substring(segment[4], end);
					const actuallyCaseSensitive = caseSensitive && !!(prefix_raw || suffix_raw);
					const prefix = !prefix_raw ? void 0 : actuallyCaseSensitive ? prefix_raw : prefix_raw.toLowerCase();
					const suffix = !suffix_raw ? void 0 : actuallyCaseSensitive ? suffix_raw : suffix_raw.toLowerCase();
					const next = createDynamicNode(2, route.fullPath ?? route.from, actuallyCaseSensitive, prefix, suffix);
					nextNode = next;
					next.parent = node;
					next.depth = depth;
					node.wildcard ??= [];
					node.wildcard.push(next);
				}
			}
			node = nextNode;
		}
		if (parseParams && route.children && !route.isRoot && route.id && route.id.charCodeAt(route.id.lastIndexOf("/") + 1) === 95) {
			const pathlessNode = createStaticNode(route.fullPath ?? route.from);
			pathlessNode.kind = SEGMENT_TYPE_PATHLESS;
			pathlessNode.parent = node;
			depth++;
			pathlessNode.depth = depth;
			node.pathless ??= [];
			node.pathless.push(pathlessNode);
			node = pathlessNode;
		}
		const isLeaf = (route.path || !route.children) && !route.isRoot;
		if (isLeaf && path.endsWith("/")) {
			const indexNode = createStaticNode(route.fullPath ?? route.from);
			indexNode.kind = SEGMENT_TYPE_INDEX;
			indexNode.parent = node;
			depth++;
			indexNode.depth = depth;
			node.index = indexNode;
			node = indexNode;
		}
		node.parse = parseParams ?? null;
		node.priority = route.options?.params?.priority ?? 0;
		if (isLeaf && !node.route) {
			node.route = route;
			node.fullPath = route.fullPath ?? route.from;
		}
	}
	if (route.children) for (const child of route.children) parseSegments(defaultCaseSensitive, data, child, cursor, node, depth, onRoute);
}
function sortDynamic(a, b) {
	if (a.parse && !b.parse) return -1;
	if (!a.parse && b.parse) return 1;
	if (a.parse && b.parse && (a.priority || b.priority)) return b.priority - a.priority;
	if (a.prefix && b.prefix && a.prefix !== b.prefix) {
		if (a.prefix.startsWith(b.prefix)) return -1;
		if (b.prefix.startsWith(a.prefix)) return 1;
	}
	if (a.suffix && b.suffix && a.suffix !== b.suffix) {
		if (a.suffix.endsWith(b.suffix)) return -1;
		if (b.suffix.endsWith(a.suffix)) return 1;
	}
	if (a.prefix && !b.prefix) return -1;
	if (!a.prefix && b.prefix) return 1;
	if (a.suffix && !b.suffix) return -1;
	if (!a.suffix && b.suffix) return 1;
	if (a.caseSensitive && !b.caseSensitive) return -1;
	if (!a.caseSensitive && b.caseSensitive) return 1;
	return 0;
}
function sortTreeNodes(node) {
	if (node.pathless) for (const child of node.pathless) sortTreeNodes(child);
	if (node.static) for (const child of node.static.values()) sortTreeNodes(child);
	if (node.staticInsensitive) for (const child of node.staticInsensitive.values()) sortTreeNodes(child);
	if (node.dynamic?.length) {
		node.dynamic.sort(sortDynamic);
		for (const child of node.dynamic) sortTreeNodes(child);
	}
	if (node.optional?.length) {
		node.optional.sort(sortDynamic);
		for (const child of node.optional) sortTreeNodes(child);
	}
	if (node.wildcard?.length) {
		node.wildcard.sort(sortDynamic);
		for (const child of node.wildcard) sortTreeNodes(child);
	}
}
function createStaticNode(fullPath) {
	return {
		kind: 0,
		depth: 0,
		pathless: null,
		index: null,
		static: null,
		staticInsensitive: null,
		dynamic: null,
		optional: null,
		wildcard: null,
		route: null,
		fullPath,
		parent: null,
		parse: null,
		priority: 0
	};
}
/**
* Keys must be declared in the same order as in `SegmentNode` type,
* to ensure they are represented as the same object class in the engine.
*/
function createDynamicNode(kind, fullPath, caseSensitive, prefix, suffix) {
	return {
		kind,
		depth: 0,
		pathless: null,
		index: null,
		static: null,
		staticInsensitive: null,
		dynamic: null,
		optional: null,
		wildcard: null,
		route: null,
		fullPath,
		parent: null,
		parse: null,
		priority: 0,
		caseSensitive,
		prefix,
		suffix
	};
}
function processRouteMasks(routeList, processedTree) {
	const segmentTree = createStaticNode("/");
	const data = /* @__PURE__ */ new Uint16Array(6);
	for (const route of routeList) parseSegments(false, data, route, 1, segmentTree, 0);
	sortTreeNodes(segmentTree);
	processedTree.masksTree = segmentTree;
	processedTree.flatCache = createLRUCache(1e3);
}
/**
* Take an arbitrary list of routes, create a tree from them (if it hasn't been created already), and match a path against it.
*/
function findFlatMatch(path, processedTree) {
	path ||= "/";
	const cached = processedTree.flatCache.get(path);
	if (cached) return cached;
	const result = findMatch(path, processedTree.masksTree);
	processedTree.flatCache.set(path, result);
	return result;
}
/**
* @deprecated keep until v2 so that `router.matchRoute` can keep not caring about the actual route tree
*/
function findSingleMatch(from, caseSensitive, fuzzy, path, processedTree) {
	from ||= "/";
	path ||= "/";
	const key = caseSensitive ? `case\0${from}` : from;
	let tree = processedTree.singleCache.get(key);
	if (!tree) {
		tree = createStaticNode("/");
		parseSegments(caseSensitive, /* @__PURE__ */ new Uint16Array(6), { from }, 1, tree, 0);
		processedTree.singleCache.set(key, tree);
	}
	return findMatch(path, tree, fuzzy);
}
function findRouteMatch(path, processedTree, fuzzy = false) {
	const key = fuzzy ? path : `nofuzz\0${path}`;
	const cached = processedTree.matchCache.get(key);
	if (cached !== void 0) return cached;
	path ||= "/";
	let result;
	try {
		result = findMatch(path, processedTree.segmentTree, fuzzy);
	} catch (err) {
		if (err instanceof URIError) result = null;
		else throw err;
	}
	if (result) result.branch = buildRouteBranch(result.route);
	processedTree.matchCache.set(key, result);
	return result;
}
/** Trim trailing slashes (except preserving root '/'). */
function trimPathRight$1(path) {
	return path === "/" ? path : path.replace(/\/{1,}$/, "");
}
/**
* Processes a route tree into a segment trie for efficient path matching.
* Also builds lookup maps for routes by ID and by trimmed full path.
*/
function processRouteTree(routeTree, caseSensitive = false, initRoute) {
	const segmentTree = createStaticNode(routeTree.fullPath);
	const data = /* @__PURE__ */ new Uint16Array(6);
	const routesById = {};
	const routesByPath = {};
	let index = 0;
	parseSegments(caseSensitive, data, routeTree, 1, segmentTree, 0, (route) => {
		initRoute?.(route, index);
		if (route.id in routesById) invariant();
		routesById[route.id] = route;
		if (index !== 0 && route.path) {
			const trimmedFullPath = trimPathRight$1(route.fullPath);
			if (!routesByPath[trimmedFullPath] || route.fullPath.endsWith("/")) routesByPath[trimmedFullPath] = route;
		}
		index++;
	});
	sortTreeNodes(segmentTree);
	return {
		processedTree: {
			segmentTree,
			singleCache: createLRUCache(1e3),
			matchCache: createLRUCache(1e3),
			flatCache: null,
			masksTree: null
		},
		routesById,
		routesByPath
	};
}
function findMatch(path, segmentTree, fuzzy = false) {
	const parts = path.split("/");
	const leaf = getNodeMatch(path, parts, segmentTree, fuzzy);
	if (!leaf) return null;
	const [rawParams] = extractParams(path, parts, leaf);
	return {
		route: leaf.node.route,
		rawParams
	};
}
/**
* This function is "resumable":
* - the `leaf` input can contain `extract` and `rawParams` properties from a previous `extractParams` call
* - the returned `state` can be passed back as `extract` in a future call to continue extracting params from where we left off
*
* Inputs are *not* mutated.
*/
function extractParams(path, parts, leaf) {
	const list = buildBranch(leaf.node);
	let nodeParts = null;
	const rawParams = Object.create(null);
	/** which segment of the path we're currently processing */
	let partIndex = leaf.extract?.part ?? 0;
	/** which node of the route tree branch we're currently processing */
	let nodeIndex = leaf.extract?.node ?? 0;
	/** index of the 1st character of the segment we're processing in the path string */
	let pathIndex = leaf.extract?.path ?? 0;
	/** which fullPath segment we're currently processing */
	let segmentCount = leaf.extract?.segment ?? 0;
	for (; nodeIndex < list.length; partIndex++, nodeIndex++, pathIndex++, segmentCount++) {
		const node = list[nodeIndex];
		if (node.kind === SEGMENT_TYPE_INDEX) break;
		if (node.kind === SEGMENT_TYPE_PATHLESS) {
			segmentCount--;
			partIndex--;
			pathIndex--;
			continue;
		}
		const part = parts[partIndex];
		const currentPathIndex = pathIndex;
		if (part) pathIndex += part.length;
		if (node.kind === 1) {
			nodeParts ??= leaf.node.fullPath.split("/");
			const nodePart = nodeParts[segmentCount];
			const preLength = node.prefix?.length ?? 0;
			if (nodePart.charCodeAt(preLength) === 123) {
				const sufLength = node.suffix?.length ?? 0;
				const name = nodePart.substring(preLength + 2, nodePart.length - sufLength - 1);
				const value = part.substring(preLength, part.length - sufLength);
				rawParams[name] = decodeURIComponent(value);
			} else {
				const name = nodePart.substring(1);
				rawParams[name] = decodeURIComponent(part);
			}
		} else if (node.kind === 3) {
			if (leaf.skipped & 1 << nodeIndex) {
				partIndex--;
				pathIndex = currentPathIndex - 1;
				continue;
			}
			nodeParts ??= leaf.node.fullPath.split("/");
			const nodePart = nodeParts[segmentCount];
			const preLength = node.prefix?.length ?? 0;
			const sufLength = node.suffix?.length ?? 0;
			const name = nodePart.substring(preLength + 3, nodePart.length - sufLength - 1);
			const value = node.suffix || node.prefix ? part.substring(preLength, part.length - sufLength) : part;
			if (value) rawParams[name] = decodeURIComponent(value);
		} else if (node.kind === 2) {
			const n = node;
			const value = path.substring(currentPathIndex + (n.prefix?.length ?? 0), path.length - (n.suffix?.length ?? 0));
			const splat = decodeURIComponent(value);
			rawParams["*"] = splat;
			rawParams._splat = splat;
			break;
		}
	}
	if (leaf.rawParams) Object.assign(rawParams, leaf.rawParams);
	return [rawParams, {
		part: partIndex,
		node: nodeIndex,
		path: pathIndex,
		segment: segmentCount
	}];
}
function buildRouteBranch(route) {
	const list = [route];
	while (route.parentRoute) {
		route = route.parentRoute;
		list.push(route);
	}
	list.reverse();
	return list;
}
function buildBranch(node) {
	const list = Array(node.depth + 1);
	do {
		list[node.depth] = node;
		node = node.parent;
	} while (node);
	return list;
}
function getNodeMatch(path, parts, segmentTree, fuzzy) {
	if (path === "/" && segmentTree.index) return {
		node: segmentTree.index,
		skipped: 0
	};
	const trailingSlash = !last(parts);
	const pathIsIndex = trailingSlash && path !== "/";
	const partsLength = parts.length - (trailingSlash ? 1 : 0);
	const stack = [{
		node: segmentTree,
		index: 1,
		skipped: 0,
		depth: 1,
		statics: 0,
		dynamics: 0,
		optionals: 0
	}];
	let bestFuzzy = null;
	let bestMatch = null;
	while (stack.length) {
		const frame = stack.pop();
		const { node, index, skipped, depth, statics, dynamics, optionals } = frame;
		let { extract, rawParams } = frame;
		if (node.kind === 2 && node.route && !isFrameMoreSpecific(bestMatch, frame)) continue;
		if (node.parse) {
			if (!validateParseParams(path, parts, frame)) continue;
			rawParams = frame.rawParams;
			extract = frame.extract;
		}
		if (fuzzy && node.route && node.kind !== SEGMENT_TYPE_INDEX && isFrameMoreSpecific(bestFuzzy, frame)) bestFuzzy = frame;
		const isBeyondPath = index === partsLength;
		if (isBeyondPath) {
			if (node.route && (!pathIsIndex || node.kind === SEGMENT_TYPE_INDEX || node.kind === 2) && isFrameMoreSpecific(bestMatch, frame)) bestMatch = frame;
			if (!node.optional && !node.wildcard && !node.index && !node.pathless) continue;
		}
		const part = isBeyondPath ? void 0 : parts[index];
		let lowerPart;
		if (isBeyondPath && node.index) {
			const indexFrame = {
				node: node.index,
				index,
				skipped,
				depth: depth + 1,
				statics,
				dynamics,
				optionals,
				extract,
				rawParams
			};
			let indexValid = true;
			if (node.index.parse) {
				if (!validateParseParams(path, parts, indexFrame)) indexValid = false;
			}
			if (indexValid) {
				if (!dynamics && !optionals && !skipped && isPerfectStaticMatch(statics, partsLength)) return indexFrame;
				if (isFrameMoreSpecific(bestMatch, indexFrame)) bestMatch = indexFrame;
			}
		}
		if (node.wildcard) for (let i = node.wildcard.length - 1; i >= 0; i--) {
			const segment = node.wildcard[i];
			const { prefix, suffix } = segment;
			if (prefix) {
				if (isBeyondPath) continue;
				if (!(segment.caseSensitive ? part : lowerPart ??= part.toLowerCase()).startsWith(prefix)) continue;
			}
			if (suffix) {
				if (isBeyondPath) continue;
				const end = parts.slice(index).join("/").slice(-suffix.length);
				if ((segment.caseSensitive ? end : end.toLowerCase()) !== suffix) continue;
			}
			stack.push({
				node: segment,
				index: partsLength,
				skipped,
				depth: depth + 1,
				statics,
				dynamics,
				optionals,
				extract,
				rawParams
			});
		}
		if (node.optional) {
			const nextSkipped = skipped | 1 << depth;
			const nextDepth = depth + 1;
			for (let i = node.optional.length - 1; i >= 0; i--) {
				const segment = node.optional[i];
				stack.push({
					node: segment,
					index,
					skipped: nextSkipped,
					depth: nextDepth,
					statics,
					dynamics,
					optionals,
					extract,
					rawParams
				});
			}
			if (!isBeyondPath) for (let i = node.optional.length - 1; i >= 0; i--) {
				const segment = node.optional[i];
				const { prefix, suffix } = segment;
				if (prefix || suffix) {
					const casePart = segment.caseSensitive ? part : lowerPart ??= part.toLowerCase();
					if (prefix && !casePart.startsWith(prefix)) continue;
					if (suffix && !casePart.endsWith(suffix)) continue;
				}
				stack.push({
					node: segment,
					index: index + 1,
					skipped,
					depth: nextDepth,
					statics,
					dynamics,
					optionals: optionals + segmentScore(partsLength, index),
					extract,
					rawParams
				});
			}
		}
		if (!isBeyondPath && node.dynamic && part) for (let i = node.dynamic.length - 1; i >= 0; i--) {
			const segment = node.dynamic[i];
			const { prefix, suffix } = segment;
			if (prefix || suffix) {
				const casePart = segment.caseSensitive ? part : lowerPart ??= part.toLowerCase();
				if (prefix && !casePart.startsWith(prefix)) continue;
				if (suffix && !casePart.endsWith(suffix)) continue;
			}
			stack.push({
				node: segment,
				index: index + 1,
				skipped,
				depth: depth + 1,
				statics,
				dynamics: dynamics + segmentScore(partsLength, index),
				optionals,
				extract,
				rawParams
			});
		}
		if (!isBeyondPath && node.staticInsensitive) {
			const match = node.staticInsensitive.get(lowerPart ??= part.toLowerCase());
			if (match) stack.push({
				node: match,
				index: index + 1,
				skipped,
				depth: depth + 1,
				statics: statics + segmentScore(partsLength, index),
				dynamics,
				optionals,
				extract,
				rawParams
			});
		}
		if (!isBeyondPath && node.static) {
			const match = node.static.get(part);
			if (match) stack.push({
				node: match,
				index: index + 1,
				skipped,
				depth: depth + 1,
				statics: statics + segmentScore(partsLength, index),
				dynamics,
				optionals,
				extract,
				rawParams
			});
		}
		if (node.pathless) {
			const nextDepth = depth + 1;
			for (let i = node.pathless.length - 1; i >= 0; i--) {
				const segment = node.pathless[i];
				stack.push({
					node: segment,
					index,
					skipped,
					depth: nextDepth,
					statics,
					dynamics,
					optionals,
					extract,
					rawParams
				});
			}
		}
	}
	if (bestMatch) return bestMatch;
	if (fuzzy && bestFuzzy) {
		let sliceIndex = bestFuzzy.index;
		for (let i = 0; i < bestFuzzy.index; i++) sliceIndex += parts[i].length;
		const splat = sliceIndex === path.length ? "/" : path.slice(sliceIndex);
		bestFuzzy.rawParams ??= Object.create(null);
		bestFuzzy.rawParams["**"] = decodeURIComponent(splat);
		return bestFuzzy;
	}
	return null;
}
function segmentScore(partsLength, index) {
	return 2 ** (partsLength - index - 1);
}
function isPerfectStaticMatch(statics, partsLength) {
	return statics === 2 ** (partsLength - 1) - 1;
}
function validateParseParams(path, parts, frame) {
	let rawParams;
	let state;
	try {
		[rawParams, state] = extractParams(path, parts, frame);
	} catch {
		return null;
	}
	frame.rawParams = rawParams;
	frame.extract = state;
	if (!frame.node.parse) return true;
	try {
		if (frame.node.parse(rawParams) === false) return null;
	} catch {}
	return true;
}
function isFrameMoreSpecific(prev, next) {
	if (!prev) return true;
	return next.statics > prev.statics || next.statics === prev.statics && (next.dynamics > prev.dynamics || next.dynamics === prev.dynamics && (next.optionals > prev.optionals || next.optionals === prev.optionals && ((next.node.kind === SEGMENT_TYPE_INDEX) > (prev.node.kind === SEGMENT_TYPE_INDEX) || next.node.kind === SEGMENT_TYPE_INDEX === (prev.node.kind === SEGMENT_TYPE_INDEX) && next.depth > prev.depth)));
}
//#endregion
//#region node_modules/@tanstack/router-core/dist/esm/path.js
/** Join path segments, cleaning duplicate slashes between parts. */
function joinPaths(paths) {
	return cleanPath(paths.filter((val) => {
		return val !== void 0;
	}).join("/"));
}
/** Remove repeated slashes from a path string. */
function cleanPath(path) {
	return path.replace(/\/{2,}/g, "/");
}
/** Trim leading slashes (except preserving root '/'). */
function trimPathLeft(path) {
	return path === "/" ? path : path.replace(/^\/{1,}/, "");
}
/** Trim trailing slashes (except preserving root '/'). */
function trimPathRight(path) {
	const len = path.length;
	return len > 1 && path[len - 1] === "/" ? path.replace(/\/{1,}$/, "") : path;
}
/** Trim both leading and trailing slashes. */
function trimPath(path) {
	return trimPathRight(trimPathLeft(path));
}
/** Remove a trailing slash from value when appropriate for comparisons. */
function removeTrailingSlash(value, basepath) {
	if (value?.endsWith("/") && value !== "/" && value !== `${basepath}/`) return value.slice(0, -1);
	return value;
}
/**
* Compare two pathnames for exact equality after normalizing trailing slashes
* relative to the provided `basepath`.
*/
function exactPathTest(pathName1, pathName2, basepath) {
	return removeTrailingSlash(pathName1, basepath) === removeTrailingSlash(pathName2, basepath);
}
/**
* Resolve a destination path against a base, honoring trailing-slash policy
* and supporting relative segments (`.`/`..`) and absolute `to` values.
*/
function resolvePath({ base, to, trailingSlash = "never", cache }) {
	const isAbsolute = to.startsWith("/");
	const isBase = !isAbsolute && to === ".";
	let key;
	if (cache) {
		key = isAbsolute ? to : isBase ? base : base + "\0" + to;
		const cached = cache.get(key);
		if (cached) return cached;
	}
	let baseSegments;
	if (isBase) baseSegments = base.split("/");
	else if (isAbsolute) baseSegments = to.split("/");
	else {
		baseSegments = base.split("/");
		while (baseSegments.length > 1 && last(baseSegments) === "") baseSegments.pop();
		const toSegments = to.split("/");
		for (let index = 0, length = toSegments.length; index < length; index++) {
			const value = toSegments[index];
			if (value === "") {
				if (!index) baseSegments = [value];
				else if (index === length - 1) baseSegments.push(value);
			} else if (value === "..") baseSegments.pop();
			else if (value === ".") {} else baseSegments.push(value);
		}
	}
	if (baseSegments.length > 1) {
		if (last(baseSegments) === "") {
			if (trailingSlash === "never") baseSegments.pop();
		} else if (trailingSlash === "always") baseSegments.push("");
	}
	const result = cleanPath(baseSegments.join("/")) || "/";
	if (key && cache) cache.set(key, result);
	return result;
}
/**
* Create a pre-compiled decode config from allowed characters.
* This should be called once at router initialization.
*/
function compileDecodeCharMap(pathParamsAllowedCharacters) {
	const charMap = new Map(pathParamsAllowedCharacters.map((char) => [encodeURIComponent(char), char]));
	const pattern = Array.from(charMap.keys()).map((key) => key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|");
	const regex = new RegExp(pattern, "g");
	return (encoded) => encoded.replace(regex, (match) => charMap.get(match) ?? match);
}
function encodeParam(key, params, decoder) {
	const value = params[key];
	if (typeof value !== "string") return value;
	if (key === "_splat") {
		if (/^[a-zA-Z0-9\-._~!/]*$/.test(value)) return value;
		return value.split("/").map((segment) => encodePathParam(segment, decoder)).join("/");
	} else return encodePathParam(value, decoder);
}
/**
* Interpolate params and wildcards into a route path template.
*
* - Encodes params safely (configurable allowed characters)
* - Supports `{-$optional}` segments, `{prefix{$id}suffix}` and `{$}` wildcards
*/
function interpolatePath({ path, params, decoder, ...rest }) {
	let isMissingParams = false;
	const usedParams = Object.create(null);
	if (!path || path === "/") return {
		interpolatedPath: "/",
		usedParams,
		isMissingParams
	};
	if (!path.includes("$")) return {
		interpolatedPath: path,
		usedParams,
		isMissingParams
	};
	if (path.indexOf("{") === -1) {
		const length = path.length;
		let cursor = 0;
		let joined = "";
		while (cursor < length) {
			while (cursor < length && path.charCodeAt(cursor) === 47) cursor++;
			if (cursor >= length) break;
			const start = cursor;
			let end = path.indexOf("/", cursor);
			if (end === -1) end = length;
			cursor = end;
			const part = path.substring(start, end);
			if (!part) continue;
			if (part.charCodeAt(0) === 36) if (part.length === 1) {
				const splat = params._splat;
				usedParams._splat = splat;
				usedParams["*"] = splat;
				if (!splat) {
					isMissingParams = true;
					continue;
				}
				const value = encodeParam("_splat", params, decoder);
				joined += "/" + value;
			} else {
				const key = part.substring(1);
				if (!isMissingParams && !(key in params)) isMissingParams = true;
				usedParams[key] = params[key];
				const value = encodeParam(key, params, decoder) ?? "undefined";
				joined += "/" + value;
			}
			else joined += "/" + part;
		}
		if (path.endsWith("/")) joined += "/";
		return {
			usedParams,
			interpolatedPath: joined || "/",
			isMissingParams
		};
	}
	const length = path.length;
	let cursor = 0;
	let segment;
	let joined = "";
	while (cursor < length) {
		const start = cursor;
		segment = parseSegment(path, start, segment);
		const end = segment[5];
		cursor = end + 1;
		if (start === end) continue;
		const kind = segment[0];
		if (kind === 0) {
			joined += "/" + path.substring(start, end);
			continue;
		}
		if (kind === 2) {
			const splat = params._splat;
			usedParams._splat = splat;
			usedParams["*"] = splat;
			const prefix = path.substring(start, segment[1]);
			const suffix = path.substring(segment[4], end);
			if (!splat) {
				isMissingParams = true;
				if (prefix || suffix) joined += "/" + prefix + suffix;
				continue;
			}
			const value = encodeParam("_splat", params, decoder);
			joined += "/" + prefix + value + suffix;
			continue;
		}
		if (kind === 1) {
			const key = path.substring(segment[2], segment[3]);
			if (!isMissingParams && !(key in params)) isMissingParams = true;
			usedParams[key] = params[key];
			const prefix = path.substring(start, segment[1]);
			const suffix = path.substring(segment[4], end);
			const value = encodeParam(key, params, decoder) ?? "undefined";
			joined += "/" + prefix + value + suffix;
			continue;
		}
		if (kind === 3) {
			const key = path.substring(segment[2], segment[3]);
			const valueRaw = params[key];
			if (valueRaw == null) continue;
			usedParams[key] = valueRaw;
			const prefix = path.substring(start, segment[1]);
			const suffix = path.substring(segment[4], end);
			const value = encodeParam(key, params, decoder) ?? "";
			joined += "/" + prefix + value + suffix;
			continue;
		}
	}
	if (path.endsWith("/")) joined += "/";
	return {
		usedParams,
		interpolatedPath: joined || "/",
		isMissingParams
	};
}
function encodePathParam(value, decoder) {
	const encoded = encodeURIComponent(value);
	return decoder?.(encoded) ?? encoded;
}
//#endregion
//#region node_modules/@tanstack/router-core/dist/esm/not-found.js
/**
* Create a not-found error object recognized by TanStack Router.
*
* Throw this from loaders/actions to trigger the nearest `notFoundComponent`.
* Use `routeId` to target a specific route's not-found boundary. If `throw`
* is true, the error is thrown instead of returned.
*
* @param options Optional settings including `routeId`, `headers`, and `throw`.
* @returns A not-found error object that can be thrown or returned.
* @link https://tanstack.com/router/latest/docs/router/framework/react/api/router/notFoundFunction
*/
function notFound(options = {}) {
	options.isNotFound = true;
	if (options.throw) throw options;
	return options;
}
/** Determine if a value is a TanStack Router not-found error. */
function isNotFound(obj) {
	return obj?.isNotFound === true;
}
//#endregion
//#region node_modules/@tanstack/router-core/dist/esm/qss.js
/**
* Program is a reimplementation of the `qss` package:
* Copyright (c) Luke Edwards luke.edwards05@gmail.com, MIT License
* https://github.com/lukeed/qss/blob/master/license.md
*
* This reimplementation uses modern browser APIs
* (namely URLSearchParams) and TypeScript while still
* maintaining the original functionality and interface.
*
* Update: this implementation has also been mangled to
* fit exactly our use-case (single value per key in encoding).
*/
/**
* Encodes an object into a query string.
* @param obj - The object to encode into a query string.
* @param stringify - An optional custom stringify function.
* @returns The encoded query string.
* @example
* ```
* // Example input: encode({ token: 'foo', key: 'value' })
* // Expected output: "token=foo&key=value"
* ```
*/
function encode(obj, stringify = String) {
	const result = new URLSearchParams();
	for (const key in obj) {
		const val = obj[key];
		if (val !== void 0) result.set(key, stringify(val));
	}
	return result.toString();
}
/**
* Converts a string value to its appropriate type (string, number, boolean).
* @param mix - The string value to convert.
* @returns The converted value.
* @example
* // Example input: toValue("123")
* // Expected output: 123
*/
function toValue(str) {
	if (!str) return "";
	if (str === "false") return false;
	if (str === "true") return true;
	return +str * 0 === 0 && +str + "" === str ? +str : str;
}
/**
* Decodes a query string into an object.
* @param str - The query string to decode.
* @returns The decoded key-value pairs in an object format.
* @example
* // Example input: decode("token=foo&key=value")
* // Expected output: { "token": "foo", "key": "value" }
*/
function decode(str) {
	const searchParams = new URLSearchParams(str);
	const result = Object.create(null);
	for (const [key, value] of searchParams.entries()) {
		const previousValue = result[key];
		if (previousValue == null) result[key] = toValue(value);
		else if (Array.isArray(previousValue)) previousValue.push(toValue(value));
		else result[key] = [previousValue, toValue(value)];
	}
	return result;
}
//#endregion
//#region node_modules/@tanstack/router-core/dist/esm/searchParams.js
/** Default `parseSearch` that strips leading '?' and JSON-parses values. */
var defaultParseSearch = parseSearchWith(JSON.parse);
/** Default `stringifySearch` using JSON.stringify for complex values. */
var defaultStringifySearch = stringifySearchWith(JSON.stringify, JSON.parse);
/**
* Build a `parseSearch` function using a provided JSON-like parser.
*
* The returned function strips a leading `?`, decodes values, and attempts to
* JSON-parse string values using the given `parser`.
*
* @param parser Function to parse a string value (e.g. `JSON.parse`).
* @returns A `parseSearch` function compatible with `Router` options.
* @link https://tanstack.com/router/latest/docs/framework/react/guide/custom-search-param-serialization
*/
function parseSearchWith(parser) {
	return (searchStr) => {
		if (searchStr[0] === "?") searchStr = searchStr.substring(1);
		const query = decode(searchStr);
		for (const key in query) {
			const value = query[key];
			if (typeof value === "string") try {
				query[key] = parser(value);
			} catch (_err) {}
		}
		return query;
	};
}
/**
* Build a `stringifySearch` function using a provided serializer.
*
* Non-primitive values are serialized with `stringify`. If a `parser` is
* supplied, string values that are parseable are re-serialized to ensure
* symmetry with `parseSearch`.
*
* @param stringify Function to serialize a value (e.g. `JSON.stringify`).
* @param parser Optional parser to detect parseable strings.
* @returns A `stringifySearch` function compatible with `Router` options.
* @link https://tanstack.com/router/latest/docs/framework/react/guide/custom-search-param-serialization
*/
function stringifySearchWith(stringify, parser) {
	const hasParser = typeof parser === "function";
	function stringifyValue(val) {
		if (typeof val === "object" && val !== null) try {
			return stringify(val);
		} catch (_err) {}
		else if (hasParser && typeof val === "string") try {
			parser(val);
			return stringify(val);
		} catch (_err) {}
		return val;
	}
	return (search) => {
		const searchStr = encode(search, stringifyValue);
		return searchStr ? `?${searchStr}` : "";
	};
}
//#endregion
//#region node_modules/@tanstack/router-core/dist/esm/root.js
/** Stable identifier used for the root route in a route tree. */
var rootRouteId = "__root__";
//#endregion
//#region node_modules/@tanstack/router-core/dist/esm/redirect.js
/**
* Create a redirect Response understood by TanStack Router.
*
* Use from route `loader`/`beforeLoad` or server functions to trigger a
* navigation. If `throw: true` is set, the redirect is thrown instead of
* returned. When an absolute `href` is supplied and `reloadDocument` is not
* set, a full-document navigation is inferred.
*
* @param opts Options for the redirect. Common fields:
* - `href`: absolute URL for external redirects; infers `reloadDocument`.
* - `statusCode`: HTTP status code to use (defaults to 307).
* - `headers`: additional headers to include on the Response.
* - Standard navigation options like `to`, `params`, `search`, `replace`,
*   and `reloadDocument` for internal redirects.
* @returns A Response augmented with router navigation options.
* @link https://tanstack.com/router/latest/docs/framework/react/api/router/redirectFunction
*/
function redirect(opts) {
	opts.statusCode = opts.statusCode || opts.code || 307;
	if (!opts._builtLocation && !opts.reloadDocument && typeof opts.href === "string") try {
		new URL(opts.href);
		opts.reloadDocument = true;
	} catch {}
	const headers = new Headers(opts.headers);
	if (opts.href && headers.get("Location") === null) headers.set("Location", opts.href);
	const response = new Response(null, {
		status: opts.statusCode,
		headers
	});
	response.options = opts;
	if (opts.throw) throw response;
	return response;
}
/** Check whether a value is a TanStack Router redirect Response. */
/** Check whether a value is a TanStack Router redirect Response. */
function isRedirect(obj) {
	return obj instanceof Response && !!obj.options;
}
/** True if value is a redirect with a resolved `href` location. */
/** True if value is a redirect with a resolved `href` location. */
function isResolvedRedirect(obj) {
	return isRedirect(obj) && !!obj.options.href;
}
//#endregion
//#region node_modules/@tanstack/router-core/dist/esm/load-matches.js
var triggerOnReady = (inner) => {
	if (!inner.rendered) {
		inner.rendered = true;
		return inner.onReady?.();
	}
};
var resolvePreload = (inner, matchId) => {
	return !!(inner.preload && !inner.router.stores.matchStores.has(matchId));
};
/**
* Builds the accumulated context from router options and all matches up to (and optionally including) the given index.
* Merges __routeContext and __beforeLoadContext from each match.
*/
var buildMatchContext = (inner, index, includeCurrentMatch = true) => {
	const context = { ...inner.router.options.context ?? {} };
	const end = includeCurrentMatch ? index : index - 1;
	for (let i = 0; i <= end; i++) {
		const innerMatch = inner.matches[i];
		if (!innerMatch) continue;
		const m = inner.router.getMatch(innerMatch.id);
		if (!m) continue;
		Object.assign(context, m.__routeContext, m.__beforeLoadContext);
	}
	return context;
};
var getNotFoundBoundaryIndex = (inner, err) => {
	if (!inner.matches.length) return;
	const requestedRouteId = err.routeId;
	const matchedRootIndex = inner.matches.findIndex((m) => m.routeId === inner.router.routeTree.id);
	const rootIndex = matchedRootIndex >= 0 ? matchedRootIndex : 0;
	let startIndex = requestedRouteId ? inner.matches.findIndex((match) => match.routeId === requestedRouteId) : inner.firstBadMatchIndex ?? inner.matches.length - 1;
	if (startIndex < 0) startIndex = rootIndex;
	for (let i = startIndex; i >= 0; i--) {
		const match = inner.matches[i];
		if (inner.router.looseRoutesById[match.routeId].options.notFoundComponent) return i;
	}
	return requestedRouteId ? startIndex : rootIndex;
};
var handleRedirectAndNotFound = (inner, match, err) => {
	if (!isRedirect(err) && !isNotFound(err)) return;
	if (isRedirect(err) && err.redirectHandled && !err.options.reloadDocument) throw err;
	if (match) {
		match._nonReactive.beforeLoadPromise?.resolve();
		match._nonReactive.loaderPromise?.resolve();
		match._nonReactive.beforeLoadPromise = void 0;
		match._nonReactive.loaderPromise = void 0;
		match._nonReactive.error = err;
		inner.updateMatch(match.id, (prev) => ({
			...prev,
			status: isRedirect(err) ? "redirected" : isNotFound(err) ? "notFound" : prev.status === "pending" ? "success" : prev.status,
			context: buildMatchContext(inner, match.index),
			isFetching: false,
			error: err
		}));
		if (isNotFound(err) && !err.routeId) err.routeId = match.routeId;
		match._nonReactive.loadPromise?.resolve();
	}
	if (isRedirect(err)) {
		inner.rendered = true;
		err.options._fromLocation = inner.location;
		err.redirectHandled = true;
		err = inner.router.resolveRedirect(err);
	}
	throw err;
};
var shouldSkipLoader = (inner, matchId) => {
	const match = inner.router.getMatch(matchId);
	if (!match) return true;
	if (match.ssr === false) return true;
	return false;
};
var syncMatchContext = (inner, matchId, index) => {
	const nextContext = buildMatchContext(inner, index);
	inner.updateMatch(matchId, (prev) => {
		return {
			...prev,
			context: nextContext
		};
	});
};
var handleSerialError = (inner, index, err) => {
	const { id: matchId, routeId } = inner.matches[index];
	const route = inner.router.looseRoutesById[routeId];
	if (err instanceof Promise) throw err;
	inner.firstBadMatchIndex ??= index;
	handleRedirectAndNotFound(inner, inner.router.getMatch(matchId), err);
	try {
		route.options.onError?.(err);
	} catch (errorHandlerErr) {
		err = errorHandlerErr;
		handleRedirectAndNotFound(inner, inner.router.getMatch(matchId), err);
	}
	inner.updateMatch(matchId, (prev) => {
		prev._nonReactive.beforeLoadPromise?.resolve();
		prev._nonReactive.beforeLoadPromise = void 0;
		prev._nonReactive.loadPromise?.resolve();
		return {
			...prev,
			error: err,
			status: "error",
			isFetching: false,
			updatedAt: Date.now(),
			abortController: new AbortController()
		};
	});
	if (!inner.preload && !isRedirect(err) && !isNotFound(err)) inner.serialError ??= err;
};
var isBeforeLoadSsr = (inner, matchId, index, route) => {
	const existingMatch = inner.router.getMatch(matchId);
	const parentMatchId = inner.matches[index - 1]?.id;
	const parentMatch = parentMatchId ? inner.router.getMatch(parentMatchId) : void 0;
	if (inner.router.isShell()) {
		existingMatch.ssr = route.id === rootRouteId;
		return;
	}
	if (parentMatch?.ssr === false) {
		existingMatch.ssr = false;
		return;
	}
	const parentOverride = (tempSsr) => {
		if (tempSsr === true && parentMatch?.ssr === "data-only") return "data-only";
		return tempSsr;
	};
	const defaultSsr = inner.router.options.defaultSsr ?? true;
	if (route.options.ssr === void 0) {
		existingMatch.ssr = parentOverride(defaultSsr);
		return;
	}
	if (typeof route.options.ssr !== "function") {
		existingMatch.ssr = parentOverride(route.options.ssr);
		return;
	}
	const { search, params } = existingMatch;
	const ssrFnContext = {
		search: makeMaybe(search, existingMatch.searchError),
		params: makeMaybe(params, existingMatch.paramsError),
		location: inner.location,
		matches: inner.matches.map((match) => ({
			index: match.index,
			pathname: match.pathname,
			fullPath: match.fullPath,
			staticData: match.staticData,
			id: match.id,
			routeId: match.routeId,
			search: makeMaybe(match.search, match.searchError),
			params: makeMaybe(match.params, match.paramsError),
			ssr: match.ssr
		}))
	};
	const tempSsr = route.options.ssr(ssrFnContext);
	if (isPromise(tempSsr)) return tempSsr.then((ssr) => {
		existingMatch.ssr = parentOverride(ssr ?? defaultSsr);
	});
	existingMatch.ssr = parentOverride(tempSsr ?? defaultSsr);
};
var setupPendingTimeout = (inner, matchId, route, match) => {
	if (match._nonReactive.pendingTimeout !== void 0) return;
	route.options.pendingMs ?? inner.router.options.defaultPendingMs;
	if (!!(inner.onReady && false));
};
var preBeforeLoadSetup = (inner, matchId, route) => {
	const existingMatch = inner.router.getMatch(matchId);
	if (!existingMatch._nonReactive.beforeLoadPromise && !existingMatch._nonReactive.loaderPromise) return;
	setupPendingTimeout(inner, matchId, route, existingMatch);
	const then = () => {
		const match = inner.router.getMatch(matchId);
		if (match.preload && (match.status === "redirected" || match.status === "notFound")) handleRedirectAndNotFound(inner, match, match.error);
	};
	return existingMatch._nonReactive.beforeLoadPromise ? existingMatch._nonReactive.beforeLoadPromise.then(then) : then();
};
var executeBeforeLoad = (inner, matchId, index, route) => {
	const match = inner.router.getMatch(matchId);
	let prevLoadPromise = match._nonReactive.loadPromise;
	match._nonReactive.loadPromise = createControlledPromise(() => {
		prevLoadPromise?.resolve();
		prevLoadPromise = void 0;
	});
	const { paramsError, searchError } = match;
	if (paramsError) handleSerialError(inner, index, paramsError);
	if (searchError) handleSerialError(inner, index, searchError);
	setupPendingTimeout(inner, matchId, route, match);
	const abortController = new AbortController();
	let isPending = false;
	const pending = () => {
		if (isPending) return;
		isPending = true;
		inner.updateMatch(matchId, (prev) => ({
			...prev,
			isFetching: "beforeLoad",
			fetchCount: prev.fetchCount + 1,
			abortController
		}));
	};
	const resolve = () => {
		match._nonReactive.beforeLoadPromise?.resolve();
		match._nonReactive.beforeLoadPromise = void 0;
		inner.updateMatch(matchId, (prev) => ({
			...prev,
			isFetching: false
		}));
	};
	if (!route.options.beforeLoad) {
		inner.router.batch(() => {
			pending();
			resolve();
		});
		return;
	}
	match._nonReactive.beforeLoadPromise = createControlledPromise();
	const context = {
		...buildMatchContext(inner, index, false),
		...match.__routeContext
	};
	const { search, params, cause } = match;
	const preload = resolvePreload(inner, matchId);
	const beforeLoadFnContext = {
		search,
		abortController,
		params,
		preload,
		context,
		location: inner.location,
		navigate: (opts) => inner.router.navigate({
			...opts,
			_fromLocation: inner.location
		}),
		buildLocation: inner.router.buildLocation,
		cause: preload ? "preload" : cause,
		matches: inner.matches,
		routeId: route.id,
		...inner.router.options.additionalContext
	};
	const updateContext = (beforeLoadContext) => {
		if (beforeLoadContext === void 0) {
			inner.router.batch(() => {
				pending();
				resolve();
			});
			return;
		}
		if (isRedirect(beforeLoadContext) || isNotFound(beforeLoadContext)) {
			pending();
			handleSerialError(inner, index, beforeLoadContext);
		}
		inner.router.batch(() => {
			pending();
			inner.updateMatch(matchId, (prev) => ({
				...prev,
				__beforeLoadContext: beforeLoadContext
			}));
			resolve();
		});
	};
	let beforeLoadContext;
	try {
		beforeLoadContext = route.options.beforeLoad(beforeLoadFnContext);
		if (isPromise(beforeLoadContext)) {
			pending();
			return beforeLoadContext.catch((err) => {
				handleSerialError(inner, index, err);
			}).then(updateContext);
		}
	} catch (err) {
		pending();
		handleSerialError(inner, index, err);
	}
	updateContext(beforeLoadContext);
};
var handleBeforeLoad = (inner, index) => {
	const { id: matchId, routeId } = inner.matches[index];
	const route = inner.router.looseRoutesById[routeId];
	const serverSsr = () => {
		{
			const maybePromise = isBeforeLoadSsr(inner, matchId, index, route);
			if (isPromise(maybePromise)) return maybePromise.then(queueExecution);
		}
		return queueExecution();
	};
	const execute = () => executeBeforeLoad(inner, matchId, index, route);
	const queueExecution = () => {
		if (shouldSkipLoader(inner, matchId)) return;
		const result = preBeforeLoadSetup(inner, matchId, route);
		return isPromise(result) ? result.then(execute) : execute();
	};
	return serverSsr();
};
var executeHead = (inner, matchId, route) => {
	const match = inner.router.getMatch(matchId);
	if (!match) return;
	if (!route.options.head && !route.options.scripts && !route.options.headers) return;
	const assetContext = {
		ssr: inner.router.options.ssr,
		matches: inner.matches,
		match,
		params: match.params,
		loaderData: match.loaderData
	};
	return Promise.all([
		route.options.head?.(assetContext),
		route.options.scripts?.(assetContext),
		route.options.headers?.(assetContext)
	]).then(([headFnContent, scripts, headers]) => {
		return {
			meta: headFnContent?.meta,
			links: headFnContent?.links,
			headScripts: headFnContent?.scripts,
			headers,
			scripts,
			styles: headFnContent?.styles
		};
	});
};
var getLoaderContext = (inner, matchPromises, matchId, index, route) => {
	const parentMatchPromise = matchPromises[index - 1];
	const { params, loaderDeps, abortController, cause } = inner.router.getMatch(matchId);
	const context = buildMatchContext(inner, index);
	const preload = resolvePreload(inner, matchId);
	return {
		params,
		deps: loaderDeps,
		preload: !!preload,
		parentMatchPromise,
		abortController,
		context,
		location: inner.location,
		navigate: (opts) => inner.router.navigate({
			...opts,
			_fromLocation: inner.location
		}),
		cause: preload ? "preload" : cause,
		route,
		...inner.router.options.additionalContext
	};
};
var runLoader = async (inner, matchPromises, matchId, index, route) => {
	try {
		const match = inner.router.getMatch(matchId);
		try {
			if (match.ssr === true) loadRouteChunk(route);
			const routeLoader = route.options.loader;
			const loader = typeof routeLoader === "function" ? routeLoader : routeLoader?.handler;
			const loaderResult = loader?.(getLoaderContext(inner, matchPromises, matchId, index, route));
			const loaderResultIsPromise = !!loader && isPromise(loaderResult);
			if (!!(loaderResultIsPromise || route._lazyPromise || route._componentsPromise || route.options.head || route.options.scripts || route.options.headers || match._nonReactive.minPendingPromise)) inner.updateMatch(matchId, (prev) => ({
				...prev,
				isFetching: "loader"
			}));
			if (loader) {
				const loaderData = loaderResultIsPromise ? await loaderResult : loaderResult;
				handleRedirectAndNotFound(inner, inner.router.getMatch(matchId), loaderData);
				if (loaderData !== void 0) inner.updateMatch(matchId, (prev) => ({
					...prev,
					loaderData
				}));
			}
			if (route._lazyPromise) await route._lazyPromise;
			const pendingPromise = match._nonReactive.minPendingPromise;
			if (pendingPromise) await pendingPromise;
			if (route._componentsPromise) await route._componentsPromise;
			inner.updateMatch(matchId, (prev) => ({
				...prev,
				error: void 0,
				context: buildMatchContext(inner, index),
				status: "success",
				isFetching: false,
				updatedAt: Date.now()
			}));
		} catch (e) {
			let error = e;
			if (error?.name === "AbortError") {
				if (match.abortController.signal.aborted) {
					match._nonReactive.loaderPromise?.resolve();
					match._nonReactive.loaderPromise = void 0;
					return;
				}
				inner.updateMatch(matchId, (prev) => ({
					...prev,
					status: prev.status === "pending" ? "success" : prev.status,
					isFetching: false,
					context: buildMatchContext(inner, index)
				}));
				return;
			}
			const pendingPromise = match._nonReactive.minPendingPromise;
			if (pendingPromise) await pendingPromise;
			if (isNotFound(e)) await route.options.notFoundComponent?.preload?.();
			handleRedirectAndNotFound(inner, inner.router.getMatch(matchId), e);
			try {
				route.options.onError?.(e);
			} catch (onErrorError) {
				error = onErrorError;
				handleRedirectAndNotFound(inner, inner.router.getMatch(matchId), onErrorError);
			}
			if (!isRedirect(error) && !isNotFound(error)) await loadRouteChunk(route, ["errorComponent"]);
			inner.updateMatch(matchId, (prev) => ({
				...prev,
				error,
				context: buildMatchContext(inner, index),
				status: "error",
				isFetching: false
			}));
		}
	} catch (err) {
		const match = inner.router.getMatch(matchId);
		if (match) match._nonReactive.loaderPromise = void 0;
		handleRedirectAndNotFound(inner, match, err);
	}
};
var loadRouteMatch = async (inner, matchPromises, index) => {
	async function handleLoader(preload, prevMatch, previousRouteMatchId, match, route) {
		const age = Date.now() - prevMatch.updatedAt;
		const staleAge = preload ? route.options.preloadStaleTime ?? inner.router.options.defaultPreloadStaleTime ?? 3e4 : route.options.staleTime ?? inner.router.options.defaultStaleTime ?? 0;
		const shouldReloadOption = route.options.shouldReload;
		const shouldReload = typeof shouldReloadOption === "function" ? shouldReloadOption(getLoaderContext(inner, matchPromises, matchId, index, route)) : shouldReloadOption;
		const { status, invalid } = match;
		const staleMatchShouldReload = age >= staleAge && (!!inner.forceStaleReload || match.cause === "enter" || previousRouteMatchId !== void 0 && previousRouteMatchId !== match.id);
		loaderShouldRunAsync = status === "success" && (invalid || (shouldReload ?? staleMatchShouldReload));
		if (preload && route.options.preload === false) {} else if (loaderShouldRunAsync && !inner.sync && shouldReloadInBackground) {
			loaderIsRunningAsync = true;
			(async () => {
				try {
					await runLoader(inner, matchPromises, matchId, index, route);
					const match = inner.router.getMatch(matchId);
					match._nonReactive.loaderPromise?.resolve();
					match._nonReactive.loadPromise?.resolve();
					match._nonReactive.loaderPromise = void 0;
					match._nonReactive.loadPromise = void 0;
				} catch (err) {
					if (isRedirect(err)) await inner.router.navigate(err.options);
				}
			})();
		} else if (status !== "success" || loaderShouldRunAsync) await runLoader(inner, matchPromises, matchId, index, route);
		else syncMatchContext(inner, matchId, index);
	}
	const { id: matchId, routeId } = inner.matches[index];
	let loaderShouldRunAsync = false;
	let loaderIsRunningAsync = false;
	const route = inner.router.looseRoutesById[routeId];
	const routeLoader = route.options.loader;
	const shouldReloadInBackground = ((typeof routeLoader === "function" ? void 0 : routeLoader?.staleReloadMode) ?? inner.router.options.defaultStaleReloadMode) !== "blocking";
	if (shouldSkipLoader(inner, matchId)) {
		if (!inner.router.getMatch(matchId)) return inner.matches[index];
		syncMatchContext(inner, matchId, index);
		return inner.router.getMatch(matchId);
	} else {
		const prevMatch = inner.router.getMatch(matchId);
		const activeIdAtIndex = inner.router.stores.matchesId.get()[index];
		const previousRouteMatchId = (activeIdAtIndex && inner.router.stores.matchStores.get(activeIdAtIndex) || null)?.routeId === routeId ? activeIdAtIndex : inner.router.stores.matches.get().find((d) => d.routeId === routeId)?.id;
		const preload = resolvePreload(inner, matchId);
		if (prevMatch._nonReactive.loaderPromise) {
			if (prevMatch.status === "success" && !inner.sync && !prevMatch.preload && shouldReloadInBackground) return prevMatch;
			await prevMatch._nonReactive.loaderPromise;
			const match = inner.router.getMatch(matchId);
			const error = match._nonReactive.error || match.error;
			if (error) handleRedirectAndNotFound(inner, match, error);
			if (match.status === "pending") await handleLoader(preload, prevMatch, previousRouteMatchId, match, route);
		} else {
			const nextPreload = preload && !inner.router.stores.matchStores.has(matchId);
			const match = inner.router.getMatch(matchId);
			match._nonReactive.loaderPromise = createControlledPromise();
			if (nextPreload !== match.preload) inner.updateMatch(matchId, (prev) => ({
				...prev,
				preload: nextPreload
			}));
			await handleLoader(preload, prevMatch, previousRouteMatchId, match, route);
		}
	}
	const match = inner.router.getMatch(matchId);
	if (!loaderIsRunningAsync) {
		match._nonReactive.loaderPromise?.resolve();
		match._nonReactive.loadPromise?.resolve();
		match._nonReactive.loadPromise = void 0;
	}
	clearTimeout(match._nonReactive.pendingTimeout);
	match._nonReactive.pendingTimeout = void 0;
	if (!loaderIsRunningAsync) match._nonReactive.loaderPromise = void 0;
	match._nonReactive.dehydrated = void 0;
	const nextIsFetching = loaderIsRunningAsync ? match.isFetching : false;
	if (nextIsFetching !== match.isFetching || match.invalid !== false) {
		inner.updateMatch(matchId, (prev) => ({
			...prev,
			isFetching: nextIsFetching,
			invalid: false
		}));
		return inner.router.getMatch(matchId);
	} else return match;
};
async function loadMatches(arg) {
	const inner = arg;
	const matchPromises = [];
	let beforeLoadNotFound;
	for (let i = 0; i < inner.matches.length; i++) {
		try {
			const beforeLoad = handleBeforeLoad(inner, i);
			if (isPromise(beforeLoad)) await beforeLoad;
		} catch (err) {
			if (isRedirect(err)) throw err;
			if (isNotFound(err)) beforeLoadNotFound = err;
			else if (!inner.preload) throw err;
			break;
		}
		if (inner.serialError || inner.firstBadMatchIndex != null) break;
	}
	const baseMaxIndexExclusive = inner.firstBadMatchIndex ?? inner.matches.length;
	const boundaryIndex = beforeLoadNotFound && !inner.preload ? getNotFoundBoundaryIndex(inner, beforeLoadNotFound) : void 0;
	const maxIndexExclusive = beforeLoadNotFound && inner.preload ? 0 : boundaryIndex !== void 0 ? Math.min(boundaryIndex + 1, baseMaxIndexExclusive) : baseMaxIndexExclusive;
	let firstNotFound;
	let firstUnhandledRejection;
	for (let i = 0; i < maxIndexExclusive; i++) matchPromises.push(loadRouteMatch(inner, matchPromises, i));
	try {
		await Promise.all(matchPromises);
	} catch {
		const settled = await Promise.allSettled(matchPromises);
		for (const result of settled) {
			if (result.status !== "rejected") continue;
			const reason = result.reason;
			if (isRedirect(reason)) throw reason;
			if (isNotFound(reason)) firstNotFound ??= reason;
			else firstUnhandledRejection ??= reason;
		}
		if (firstUnhandledRejection !== void 0) throw firstUnhandledRejection;
	}
	const notFoundToThrow = firstNotFound ?? (beforeLoadNotFound && !inner.preload ? beforeLoadNotFound : void 0);
	let headMaxIndex = inner.firstBadMatchIndex !== void 0 ? inner.firstBadMatchIndex : inner.matches.length - 1;
	if (!notFoundToThrow && beforeLoadNotFound && inner.preload) return inner.matches;
	if (notFoundToThrow) {
		const renderedBoundaryIndex = getNotFoundBoundaryIndex(inner, notFoundToThrow);
		if (renderedBoundaryIndex === void 0) invariant();
		const boundaryMatch = inner.matches[renderedBoundaryIndex];
		const boundaryRoute = inner.router.looseRoutesById[boundaryMatch.routeId];
		const defaultNotFoundComponent = inner.router.options?.defaultNotFoundComponent;
		if (!boundaryRoute.options.notFoundComponent && defaultNotFoundComponent) boundaryRoute.options.notFoundComponent = defaultNotFoundComponent;
		notFoundToThrow.routeId = boundaryMatch.routeId;
		const boundaryIsRoot = boundaryMatch.routeId === inner.router.routeTree.id;
		inner.updateMatch(boundaryMatch.id, (prev) => ({
			...prev,
			...boundaryIsRoot ? {
				status: "success",
				globalNotFound: true,
				error: void 0
			} : {
				status: "notFound",
				error: notFoundToThrow
			},
			isFetching: false
		}));
		headMaxIndex = renderedBoundaryIndex;
		await loadRouteChunk(boundaryRoute, ["notFoundComponent"]);
	} else if (!inner.preload) {
		const rootMatch = inner.matches[0];
		if (!rootMatch.globalNotFound) {
			if (inner.router.getMatch(rootMatch.id)?.globalNotFound) inner.updateMatch(rootMatch.id, (prev) => ({
				...prev,
				globalNotFound: false,
				error: void 0
			}));
		}
	}
	if (inner.serialError && inner.firstBadMatchIndex !== void 0) {
		const errorRoute = inner.router.looseRoutesById[inner.matches[inner.firstBadMatchIndex].routeId];
		await loadRouteChunk(errorRoute, ["errorComponent"]);
	}
	for (let i = 0; i <= headMaxIndex; i++) {
		const { id: matchId, routeId } = inner.matches[i];
		const route = inner.router.looseRoutesById[routeId];
		try {
			const headResult = executeHead(inner, matchId, route);
			if (headResult) {
				const head = await headResult;
				inner.updateMatch(matchId, (prev) => ({
					...prev,
					...head
				}));
			}
		} catch (err) {
			console.error(`Error executing head for route ${routeId}:`, err);
		}
	}
	const readyPromise = triggerOnReady(inner);
	if (isPromise(readyPromise)) await readyPromise;
	if (notFoundToThrow) throw notFoundToThrow;
	if (inner.serialError && !inner.preload && !inner.onReady) throw inner.serialError;
	return inner.matches;
}
function preloadRouteComponents(route, componentTypesToLoad) {
	const preloads = componentTypesToLoad.map((type) => route.options[type]?.preload?.()).filter(Boolean);
	if (preloads.length === 0) return void 0;
	return Promise.all(preloads);
}
function loadRouteChunk(route, componentTypesToLoad = componentTypes) {
	if (!route._lazyLoaded && route._lazyPromise === void 0) if (route.lazyFn) route._lazyPromise = route.lazyFn().then((lazyRoute) => {
		const { id: _id, ...options } = lazyRoute.options;
		Object.assign(route.options, options);
		route._lazyLoaded = true;
		route._lazyPromise = void 0;
	});
	else route._lazyLoaded = true;
	const runAfterLazy = () => route._componentsLoaded ? void 0 : componentTypesToLoad === componentTypes ? (() => {
		if (route._componentsPromise === void 0) {
			const componentsPromise = preloadRouteComponents(route, componentTypes);
			if (componentsPromise) route._componentsPromise = componentsPromise.then(() => {
				route._componentsLoaded = true;
				route._componentsPromise = void 0;
			});
			else route._componentsLoaded = true;
		}
		return route._componentsPromise;
	})() : preloadRouteComponents(route, componentTypesToLoad);
	return route._lazyPromise ? route._lazyPromise.then(runAfterLazy) : runAfterLazy();
}
function makeMaybe(value, error) {
	if (error) return {
		status: "error",
		error
	};
	return {
		status: "success",
		value
	};
}
function routeNeedsPreload(route) {
	for (const componentType of componentTypes) if (route.options[componentType]?.preload) return true;
	return false;
}
var componentTypes = [
	"component",
	"errorComponent",
	"pendingComponent",
	"notFoundComponent"
];
//#endregion
//#region node_modules/@tanstack/router-core/dist/esm/rewrite.js
/** Compose multiple rewrite pairs into a single in/out rewrite. */
function composeRewrites(rewrites) {
	return {
		input: ({ url }) => {
			for (const rewrite of rewrites) url = executeRewriteInput(rewrite, url);
			return url;
		},
		output: ({ url }) => {
			for (let i = rewrites.length - 1; i >= 0; i--) url = executeRewriteOutput(rewrites[i], url);
			return url;
		}
	};
}
/** Create a rewrite pair that strips/adds a basepath on input/output. */
function rewriteBasepath(opts) {
	const trimmedBasepath = trimPath(opts.basepath);
	const normalizedBasepath = `/${trimmedBasepath}`;
	const checkBasepath = opts.caseSensitive ? normalizedBasepath : normalizedBasepath.toLowerCase();
	const checkBasepathWithSlash = `${checkBasepath}/`;
	return {
		input: ({ url }) => {
			const pathname = opts.caseSensitive ? url.pathname : url.pathname.toLowerCase();
			if (pathname === checkBasepath) url.pathname = "/";
			else if (pathname.startsWith(checkBasepathWithSlash)) url.pathname = url.pathname.slice(normalizedBasepath.length);
			return url;
		},
		output: ({ url }) => {
			url.pathname = joinPaths([
				"/",
				trimmedBasepath,
				url.pathname
			]);
			return url;
		}
	};
}
/** Execute a location input rewrite if provided. */
function executeRewriteInput(rewrite, url) {
	const res = rewrite?.input?.({ url });
	if (res) {
		if (typeof res === "string") return new URL(res);
		else if (res instanceof URL) return res;
	}
	return url;
}
/** Execute a location output rewrite if provided. */
function executeRewriteOutput(rewrite, url) {
	const res = rewrite?.output?.({ url });
	if (res) {
		if (typeof res === "string") return new URL(res);
		else if (res instanceof URL) return res;
	}
	return url;
}
//#endregion
//#region node_modules/@tanstack/router-core/dist/esm/stores.js
/** SSR non-reactive createMutableStore */
function createNonReactiveMutableStore(initialValue) {
	let value = initialValue;
	return {
		get() {
			return value;
		},
		set(nextOrUpdater) {
			value = functionalUpdate(nextOrUpdater, value);
		}
	};
}
/** SSR non-reactive createReadonlyStore */
function createNonReactiveReadonlyStore(read) {
	return { get() {
		return read();
	} };
}
function createRouterStores(initialState, config) {
	const { createMutableStore, createReadonlyStore, batch, init } = config;
	const matchStores = /* @__PURE__ */ new Map();
	const pendingMatchStores = /* @__PURE__ */ new Map();
	const cachedMatchStores = /* @__PURE__ */ new Map();
	const status = createMutableStore(initialState.status);
	const loadedAt = createMutableStore(initialState.loadedAt);
	const isLoading = createMutableStore(initialState.isLoading);
	const isTransitioning = createMutableStore(initialState.isTransitioning);
	const location = createMutableStore(initialState.location);
	const resolvedLocation = createMutableStore(initialState.resolvedLocation);
	const statusCode = createMutableStore(initialState.statusCode);
	const redirect = createMutableStore(initialState.redirect);
	const matchesId = createMutableStore([]);
	const pendingIds = createMutableStore([]);
	const cachedIds = createMutableStore([]);
	const matches = createReadonlyStore(() => readPoolMatches(matchStores, matchesId.get()));
	const pendingMatches = createReadonlyStore(() => readPoolMatches(pendingMatchStores, pendingIds.get()));
	const cachedMatches = createReadonlyStore(() => readPoolMatches(cachedMatchStores, cachedIds.get()));
	const firstId = createReadonlyStore(() => matchesId.get()[0]);
	const hasPending = createReadonlyStore(() => matchesId.get().some((matchId) => {
		return matchStores.get(matchId)?.get().status === "pending";
	}));
	const matchRouteDeps = createReadonlyStore(() => ({
		locationHref: location.get().href,
		resolvedLocationHref: resolvedLocation.get()?.href,
		status: status.get()
	}));
	const __store = createReadonlyStore(() => ({
		status: status.get(),
		loadedAt: loadedAt.get(),
		isLoading: isLoading.get(),
		isTransitioning: isTransitioning.get(),
		matches: matches.get(),
		location: location.get(),
		resolvedLocation: resolvedLocation.get(),
		statusCode: statusCode.get(),
		redirect: redirect.get()
	}));
	const matchStoreByRouteIdCache = createLRUCache(64);
	function getRouteMatchStore(routeId) {
		let cached = matchStoreByRouteIdCache.get(routeId);
		if (!cached) {
			cached = createReadonlyStore(() => {
				const ids = matchesId.get();
				for (const id of ids) {
					const matchStore = matchStores.get(id);
					if (matchStore && matchStore.routeId === routeId) return matchStore.get();
				}
			});
			matchStoreByRouteIdCache.set(routeId, cached);
		}
		return cached;
	}
	const store = {
		status,
		loadedAt,
		isLoading,
		isTransitioning,
		location,
		resolvedLocation,
		statusCode,
		redirect,
		matchesId,
		pendingIds,
		cachedIds,
		matches,
		pendingMatches,
		cachedMatches,
		firstId,
		hasPending,
		matchRouteDeps,
		matchStores,
		pendingMatchStores,
		cachedMatchStores,
		__store,
		getRouteMatchStore,
		setMatches,
		setPending,
		setCached
	};
	setMatches(initialState.matches);
	init?.(store);
	function setMatches(nextMatches) {
		reconcileMatchPool(nextMatches, matchStores, matchesId, createMutableStore, batch);
	}
	function setPending(nextMatches) {
		reconcileMatchPool(nextMatches, pendingMatchStores, pendingIds, createMutableStore, batch);
	}
	function setCached(nextMatches) {
		reconcileMatchPool(nextMatches, cachedMatchStores, cachedIds, createMutableStore, batch);
	}
	return store;
}
function readPoolMatches(pool, ids) {
	const matches = [];
	for (const id of ids) {
		const matchStore = pool.get(id);
		if (matchStore) matches.push(matchStore.get());
	}
	return matches;
}
function reconcileMatchPool(nextMatches, pool, idStore, createMutableStore, batch) {
	const nextIds = nextMatches.map((d) => d.id);
	const nextIdSet = new Set(nextIds);
	batch(() => {
		for (const id of pool.keys()) if (!nextIdSet.has(id)) pool.delete(id);
		for (const nextMatch of nextMatches) {
			const existing = pool.get(nextMatch.id);
			if (!existing) {
				const matchStore = createMutableStore(nextMatch);
				matchStore.routeId = nextMatch.routeId;
				pool.set(nextMatch.id, matchStore);
				continue;
			}
			existing.routeId = nextMatch.routeId;
			if (existing.get() !== nextMatch) existing.set(nextMatch);
		}
		if (!arraysEqual(idStore.get(), nextIds)) idStore.set(nextIds);
	});
}
//#endregion
//#region node_modules/@tanstack/router-core/dist/esm/router.js
/**
* Compute whether path, href or hash changed between previous and current
* resolved locations.
*/
function getLocationChangeInfo(location, resolvedLocation) {
	const fromLocation = resolvedLocation;
	const toLocation = location;
	return {
		fromLocation,
		toLocation,
		pathChanged: fromLocation?.pathname !== toLocation.pathname,
		hrefChanged: fromLocation?.href !== toLocation.href,
		hashChanged: fromLocation?.hash !== toLocation.hash
	};
}
var locationHistoryActions = /* @__PURE__ */ new WeakMap();
/**
* Core, framework-agnostic router engine that powers TanStack Router.
*
* Provides navigation, matching, loading, preloading, caching and event APIs
* used by framework adapters (React/Solid). Prefer framework helpers like
* `createRouter` in app code.
*
* @link https://tanstack.com/router/latest/docs/framework/react/api/router/RouterType
*/
var RouterCore = class {
	/**
	* @deprecated Use the `createRouter` function instead
	*/
	constructor(options, getStoreConfig) {
		this.tempLocationKey = `${Math.round(Math.random() * 1e7)}`;
		this._scroll = { next: true };
		this.shouldViewTransition = void 0;
		this.isViewTransitionTypesSupported = void 0;
		this.subscribers = /* @__PURE__ */ new Set();
		this.routeBranchCache = /* @__PURE__ */ new WeakMap();
		this.lightweightCache = /* @__PURE__ */ new WeakMap();
		this.startTransition = (fn) => fn();
		this.update = (newOptions) => {
			const prevOptions = this.options;
			const prevBasepath = this.basepath ?? prevOptions?.basepath ?? "/";
			const basepathWasUnset = this.basepath === void 0;
			const prevRewriteOption = prevOptions?.rewrite;
			this.options = {
				...prevOptions,
				...newOptions
			};
			this.isServer = this.options.isServer ?? typeof document === "undefined";
			this.protocolAllowlist = new Set(this.options.protocolAllowlist);
			if (this.options.pathParamsAllowedCharacters) this.pathParamsDecoder = compileDecodeCharMap(this.options.pathParamsAllowedCharacters);
			if (!this.history || this.options.history && this.options.history !== this.history) if (!this.options.history) {} else this.history = this.options.history;
			this.origin = this.options.origin;
			if (!this.origin) this.origin = "http://localhost";
			if (this.history) this.updateLatestLocation();
			if (this.options.routeTree !== this.routeTree) {
				this.routeTree = this.options.routeTree;
				let processRouteTreeResult;
				if (globalThis.__TSR_CACHE__ && globalThis.__TSR_CACHE__.routeTree === this.routeTree) {
					const cached = globalThis.__TSR_CACHE__;
					this.resolvePathCache = cached.resolvePathCache;
					processRouteTreeResult = cached.processRouteTreeResult;
				} else {
					this.resolvePathCache = createLRUCache(1e3);
					processRouteTreeResult = this.buildRouteTree();
					if (globalThis.__TSR_CACHE__ === void 0) globalThis.__TSR_CACHE__ = {
						routeTree: this.routeTree,
						processRouteTreeResult,
						resolvePathCache: this.resolvePathCache
					};
				}
				this.setRoutes(processRouteTreeResult);
			}
			if (!this.stores && this.latestLocation) {
				const config = this.getStoreConfig(this);
				this.batch = config.batch;
				this.stores = createRouterStores(getInitialRouterState(this.latestLocation), config);
			}
			let needsLocationUpdate = false;
			const nextBasepath = this.options.basepath ?? "/";
			const nextRewriteOption = this.options.rewrite;
			if (basepathWasUnset || prevBasepath !== nextBasepath || prevRewriteOption !== nextRewriteOption) {
				this.basepath = nextBasepath;
				const rewrites = [];
				const trimmed = trimPath(nextBasepath);
				if (trimmed && trimmed !== "/") rewrites.push(rewriteBasepath({ basepath: nextBasepath }));
				if (nextRewriteOption) rewrites.push(nextRewriteOption);
				this.rewrite = rewrites.length === 0 ? void 0 : rewrites.length === 1 ? rewrites[0] : composeRewrites(rewrites);
				if (this.history) this.updateLatestLocation();
				needsLocationUpdate = true;
			}
			if (needsLocationUpdate && this.stores) this.stores.location.set(this.latestLocation);
			if (typeof window !== "undefined" && "CSS" in window && typeof window.CSS?.supports === "function") this.isViewTransitionTypesSupported = window.CSS.supports("selector(:active-view-transition-type(a))");
		};
		this.updateLatestLocation = () => {
			this.latestLocation = this.parseLocation(this.history.location, this.latestLocation);
		};
		this.buildRouteTree = () => {
			const result = processRouteTree(this.routeTree, this.options.caseSensitive, (route, i) => {
				route.init({ originalIndex: i });
			});
			if (this.options.routeMasks) processRouteMasks(this.options.routeMasks, result.processedTree);
			return result;
		};
		this.subscribe = (eventType, fn) => {
			const listener = {
				eventType,
				fn
			};
			this.subscribers.add(listener);
			return () => {
				this.subscribers.delete(listener);
			};
		};
		this.emit = (routerEvent) => {
			this.subscribers.forEach((listener) => {
				if (listener.eventType === routerEvent.type) listener.fn(routerEvent);
			});
		};
		this.parseLocation = (locationToParse, previousLocation) => {
			const parse = ({ pathname, search, hash, href, state }) => {
				if (!this.rewrite && !/[ \x00-\x1f\x7f\u0080-\uffff]/.test(pathname)) {
					const parsedSearch = this.options.parseSearch(search);
					const searchStr = this.options.stringifySearch(parsedSearch);
					return {
						href: pathname + searchStr + hash,
						publicHref: pathname + searchStr + hash,
						pathname: decodePath(pathname).path,
						external: false,
						searchStr,
						search: nullReplaceEqualDeep(previousLocation?.search, parsedSearch),
						hash: decodePath(hash.slice(1)).path,
						state: replaceEqualDeep(previousLocation?.state, state)
					};
				}
				const fullUrl = new URL(href, this.origin);
				const url = executeRewriteInput(this.rewrite, fullUrl);
				const parsedSearch = this.options.parseSearch(url.search);
				const searchStr = this.options.stringifySearch(parsedSearch);
				url.search = searchStr;
				return {
					href: url.href.replace(url.origin, ""),
					publicHref: href,
					pathname: decodePath(url.pathname).path,
					external: !!this.rewrite && url.origin !== this.origin,
					searchStr,
					search: nullReplaceEqualDeep(previousLocation?.search, parsedSearch),
					hash: decodePath(url.hash.slice(1)).path,
					state: replaceEqualDeep(previousLocation?.state, state)
				};
			};
			const location = parse(locationToParse);
			const { __tempLocation, __tempKey } = location.state;
			if (__tempLocation && (!__tempKey || __tempKey === this.tempLocationKey)) {
				const parsedTempLocation = parse(__tempLocation);
				parsedTempLocation.state.key = location.state.key;
				parsedTempLocation.state.__TSR_key = location.state.__TSR_key;
				delete parsedTempLocation.state.__tempLocation;
				return {
					...parsedTempLocation,
					maskedLocation: location
				};
			}
			return location;
		};
		this.resolvePathWithBase = (from, path) => {
			return resolvePath({
				base: from,
				to: path.includes("//") ? cleanPath(path) : path,
				trailingSlash: this.options.trailingSlash,
				cache: this.resolvePathCache
			});
		};
		this.matchRoutes = (pathnameOrNext, locationSearchOrOpts, opts) => {
			if (typeof pathnameOrNext === "string") return this.matchRoutesInternal({
				pathname: pathnameOrNext,
				search: locationSearchOrOpts
			}, opts);
			return this.matchRoutesInternal(pathnameOrNext, locationSearchOrOpts);
		};
		this.getMatchedRoutes = (pathname) => {
			return getMatchedRoutes({
				pathname,
				routesById: this.routesById,
				processedTree: this.processedTree
			});
		};
		this.cancelMatch = (id) => {
			const match = this.getMatch(id);
			if (!match) return;
			match.abortController.abort();
			clearTimeout(match._nonReactive.pendingTimeout);
			match._nonReactive.pendingTimeout = void 0;
		};
		this.cancelMatches = () => {
			this.stores.pendingIds.get().forEach((matchId) => {
				this.cancelMatch(matchId);
			});
			this.stores.matchesId.get().forEach((matchId) => {
				if (this.stores.pendingMatchStores.has(matchId)) return;
				const match = this.stores.matchStores.get(matchId)?.get();
				if (!match) return;
				if (match.status === "pending" || match.isFetching === "loader") this.cancelMatch(matchId);
			});
		};
		this.buildLocation = (opts) => {
			const build = (dest = {}) => {
				const currentLocation = dest._fromLocation || this.pendingBuiltLocation || this.latestLocation;
				const lightweightResult = this.matchRoutesLightweight(currentLocation);
				if (dest.from && false);
				const defaultedFromPath = dest.unsafeRelative === "path" ? currentLocation.pathname : dest.from ?? lightweightResult.fullPath;
				const destTo = dest.to ? `${dest.to}` : void 0;
				const fromSearch = lightweightResult.search;
				const fromParams = Object.assign(Object.create(null), lightweightResult.params);
				const sourcePath = destTo?.charCodeAt(0) === 47 ? "/" : this.resolvePathWithBase(defaultedFromPath, ".");
				const nextTo = destTo ? this.resolvePathWithBase(sourcePath, destTo) : sourcePath;
				const nextParams = dest.params === false || dest.params === null ? Object.create(null) : (dest.params ?? true) === true ? fromParams : Object.assign(fromParams, functionalUpdate(dest.params, fromParams));
				const destRoute = this.routesByPath[trimPathRight(nextTo)];
				let destRoutes;
				if (destRoute) destRoutes = this.getRouteBranch(destRoute);
				else if (nextTo.includes("$")) destRoutes = [];
				else {
					const destMatchResult = this.getMatchedRoutes(nextTo);
					destRoutes = destMatchResult.matchedRoutes;
					if (this.options.notFoundRoute && (!destMatchResult.foundRoute || destMatchResult.foundRoute.path !== "/" && destMatchResult.routeParams["**"])) destRoutes = [...destRoutes, this.options.notFoundRoute];
				}
				if (destRoutes.length && hasKeys(nextParams)) for (const route of destRoutes) {
					const fn = route.options.params?.stringify ?? route.options.stringifyParams;
					if (fn) try {
						Object.assign(nextParams, fn(nextParams));
					} catch {}
				}
				const nextPathname = opts.leaveParams ? nextTo : decodePath(interpolatePath({
					path: nextTo,
					params: nextParams,
					decoder: this.pathParamsDecoder,
					server: this.isServer
				}).interpolatedPath).path;
				let nextSearch = fromSearch;
				if (opts._includeValidateSearch && this.options.search?.strict) {
					const validatedSearch = {};
					destRoutes.forEach((route) => {
						if (route.options.validateSearch) try {
							Object.assign(validatedSearch, validateSearch(route.options.validateSearch, {
								...validatedSearch,
								...nextSearch
							}));
						} catch {}
					});
					nextSearch = validatedSearch;
				}
				nextSearch = applySearchMiddleware({
					search: nextSearch,
					dest,
					destRoutes,
					_includeValidateSearch: opts._includeValidateSearch
				});
				nextSearch = nullReplaceEqualDeep(fromSearch, nextSearch);
				const searchStr = this.options.stringifySearch(nextSearch);
				const hash = dest.hash === true ? currentLocation.hash : dest.hash ? functionalUpdate(dest.hash, currentLocation.hash) : void 0;
				const hashStr = hash ? `#${hash}` : "";
				let nextState = dest.state === true ? currentLocation.state : dest.state ? functionalUpdate(dest.state, currentLocation.state) : {};
				nextState = replaceEqualDeep(currentLocation.state, nextState);
				const fullPath = `${nextPathname}${searchStr}${hashStr}`;
				let href;
				let publicHref;
				let external = false;
				if (this.rewrite) {
					const url = new URL(fullPath, this.origin);
					const rewrittenUrl = executeRewriteOutput(this.rewrite, url);
					href = url.href.replace(url.origin, "");
					if (rewrittenUrl.origin !== this.origin) {
						publicHref = rewrittenUrl.href;
						external = true;
					} else publicHref = rewrittenUrl.pathname + rewrittenUrl.search + rewrittenUrl.hash;
				} else {
					href = encodePathLikeUrl(fullPath);
					publicHref = href;
				}
				return {
					publicHref,
					href,
					pathname: nextPathname,
					search: nextSearch,
					searchStr,
					state: nextState,
					hash: hash ?? "",
					external,
					unmaskOnReload: dest.unmaskOnReload
				};
			};
			const buildWithMatches = (dest = {}, maskedDest) => {
				const next = build(dest);
				let maskedNext = maskedDest ? build(maskedDest) : void 0;
				if (!maskedNext) {
					const params = Object.create(null);
					if (this.options.routeMasks) {
						const match = findFlatMatch(next.pathname, this.processedTree);
						if (match) {
							Object.assign(params, match.rawParams);
							const { from: _from, params: maskParams, ...maskProps } = match.route;
							const nextParams = maskParams === false || maskParams === null ? Object.create(null) : (maskParams ?? true) === true ? params : Object.assign(params, functionalUpdate(maskParams, params));
							maskedDest = {
								from: opts.from,
								...maskProps,
								params: nextParams
							};
							maskedNext = build(maskedDest);
						}
					}
				}
				if (maskedNext) next.maskedLocation = maskedNext;
				return next;
			};
			if (opts.mask) return buildWithMatches(opts, {
				from: opts.from,
				...opts.mask
			});
			return buildWithMatches(opts);
		};
		this.commitLocation = async ({ viewTransition, ignoreBlocker, ...next }) => {
			let historyAction;
			const isSameState = () => {
				const ignoredProps = [
					"key",
					"__TSR_key",
					"__TSR_index",
					"__hashScrollIntoViewOptions"
				];
				ignoredProps.forEach((prop) => {
					next.state[prop] = this.latestLocation.state[prop];
				});
				const isEqual = deepEqual(next.state, this.latestLocation.state);
				ignoredProps.forEach((prop) => {
					delete next.state[prop];
				});
				return isEqual;
			};
			const isSameUrl = trimPathRight(this.latestLocation.href) === trimPathRight(next.href);
			let previousCommitPromise = this.commitLocationPromise;
			this.commitLocationPromise = createControlledPromise(() => {
				previousCommitPromise?.resolve();
				previousCommitPromise = void 0;
			});
			if (isSameUrl && isSameState()) this.load();
			else {
				let { maskedLocation, hashScrollIntoView, ...nextHistory } = next;
				if (maskedLocation) {
					nextHistory = {
						...maskedLocation,
						state: {
							...maskedLocation.state,
							__tempKey: void 0,
							__tempLocation: {
								...nextHistory,
								search: nextHistory.searchStr,
								state: {
									...nextHistory.state,
									__tempKey: void 0,
									__tempLocation: void 0,
									__TSR_key: void 0,
									key: void 0
								}
							}
						}
					};
					if (nextHistory.unmaskOnReload ?? this.options.unmaskOnReload ?? false) nextHistory.state.__tempKey = this.tempLocationKey;
				}
				nextHistory.state.__hashScrollIntoViewOptions = hashScrollIntoView ?? this.options.defaultHashScrollIntoView ?? true;
				this.shouldViewTransition = viewTransition;
				historyAction = next.replace ? "REPLACE" : "PUSH";
				this.history[historyAction === "REPLACE" ? "replace" : "push"](nextHistory.publicHref, nextHistory.state, { ignoreBlocker });
			}
			this._scroll.next = next.resetScroll ?? true;
			if (!this.history.subscribers.size) this.load(historyAction ? { action: { type: historyAction } } : void 0);
			return this.commitLocationPromise;
		};
		this.buildAndCommitLocation = ({ replace, resetScroll, hashScrollIntoView, viewTransition, ignoreBlocker, href, ...rest } = {}) => {
			if (href) {
				const currentIndex = this.history.location.state.__TSR_index;
				const parsed = parseHref(href, { __TSR_index: replace ? currentIndex : currentIndex + 1 });
				const hrefUrl = new URL(parsed.pathname, this.origin);
				rest.to = executeRewriteInput(this.rewrite, hrefUrl).pathname;
				rest.search = this.options.parseSearch(parsed.search);
				rest.hash = parsed.hash.slice(1);
			}
			const location = this.buildLocation({
				...rest,
				_includeValidateSearch: true
			});
			this.pendingBuiltLocation = location;
			const commitPromise = this.commitLocation({
				...location,
				viewTransition,
				replace,
				resetScroll,
				hashScrollIntoView,
				ignoreBlocker
			});
			queueMicrotask(() => {
				if (this.pendingBuiltLocation === location) this.pendingBuiltLocation = void 0;
			});
			return commitPromise;
		};
		this.navigate = async ({ to, reloadDocument, href, publicHref, ...rest }) => {
			let hrefIsUrl = false;
			if (href) try {
				new URL(`${href}`);
				hrefIsUrl = true;
			} catch {}
			if (hrefIsUrl && !reloadDocument) reloadDocument = true;
			if (reloadDocument) {
				if (to !== void 0 || !href) {
					const location = this.buildLocation({
						to,
						...rest
					});
					href = href ?? location.publicHref;
					publicHref = publicHref ?? location.publicHref;
				}
				const reloadHref = !hrefIsUrl && publicHref ? publicHref : href;
				if (isDangerousProtocol(reloadHref, this.protocolAllowlist)) return;
				if (!rest.ignoreBlocker) {
					const blockers = this.history.getBlockers?.() ?? [];
					for (const blocker of blockers) if (blocker?.blockerFn) {
						if (await blocker.blockerFn({
							currentLocation: this.latestLocation,
							nextLocation: this.latestLocation,
							action: "PUSH"
						})) return;
					}
				}
				if (rest.replace) window.location.replace(reloadHref);
				else window.location.href = reloadHref;
				return;
			}
			return this.buildAndCommitLocation({
				...rest,
				href,
				to,
				_isNavigate: true
			});
		};
		this.beforeLoad = () => {
			this.cancelMatches();
			this.updateLatestLocation();
			{
				const nextLocation = this.buildLocation({
					to: this.latestLocation.pathname,
					search: true,
					params: true,
					hash: true,
					state: true,
					_includeValidateSearch: true
				});
				if (this.latestLocation.publicHref !== nextLocation.publicHref) {
					const href = this.getParsedLocationHref(nextLocation);
					if (nextLocation.external) throw redirect({ href });
					else throw redirect({
						href,
						_builtLocation: nextLocation
					});
				}
			}
			const pendingMatches = this.matchRoutes(this.latestLocation);
			const nextCachedMatches = this.stores.cachedMatches.get().filter((d) => !pendingMatches.some((e) => e.id === d.id));
			this.batch(() => {
				this.stores.status.set("pending");
				this.stores.statusCode.set(200);
				this.stores.isLoading.set(true);
				this.stores.location.set(this.latestLocation);
				this.stores.setPending(pendingMatches);
				this.stores.setCached(nextCachedMatches);
			});
		};
		this.load = async (opts) => {
			const historyAction = opts?.action?.type;
			let redirect;
			let notFound;
			let loadPromise;
			const previousLocation = this.stores.resolvedLocation.get() ?? this.stores.location.get();
			loadPromise = new Promise((resolve) => {
				this.startTransition(async () => {
					try {
						this.beforeLoad();
						if (historyAction) locationHistoryActions.set(this.latestLocation, historyAction);
						else locationHistoryActions.delete(this.latestLocation);
						const next = this.latestLocation;
						const locationChangeInfo = getLocationChangeInfo(next, this.stores.resolvedLocation.get());
						if (!this.stores.redirect.get()) this.emit({
							type: "onBeforeNavigate",
							...locationChangeInfo
						});
						this.emit({
							type: "onBeforeLoad",
							...locationChangeInfo
						});
						await loadMatches({
							router: this,
							sync: opts?.sync,
							forceStaleReload: previousLocation.href === next.href,
							matches: this.stores.pendingMatches.get(),
							location: next,
							updateMatch: this.updateMatch,
							onReady: async () => {
								this.startTransition(() => {
									this.startViewTransition(async () => {
										let exitingMatches = null;
										let hookExitingMatches = null;
										let hookEnteringMatches = null;
										let hookStayingMatches = null;
										this.batch(() => {
											const pendingMatches = this.stores.pendingMatches.get();
											const mountPending = pendingMatches.length;
											const currentMatches = this.stores.matches.get();
											exitingMatches = mountPending ? currentMatches.filter((match) => !this.stores.pendingMatchStores.has(match.id)) : null;
											const pendingRouteIds = /* @__PURE__ */ new Set();
											for (const s of this.stores.pendingMatchStores.values()) if (s.routeId) pendingRouteIds.add(s.routeId);
											const activeRouteIds = /* @__PURE__ */ new Set();
											for (const s of this.stores.matchStores.values()) if (s.routeId) activeRouteIds.add(s.routeId);
											hookExitingMatches = mountPending ? currentMatches.filter((match) => !pendingRouteIds.has(match.routeId)) : null;
											hookEnteringMatches = mountPending ? pendingMatches.filter((match) => !activeRouteIds.has(match.routeId)) : null;
											hookStayingMatches = mountPending ? pendingMatches.filter((match) => activeRouteIds.has(match.routeId)) : currentMatches;
											this.stores.isLoading.set(false);
											this.stores.loadedAt.set(Date.now());
											/**
											* When committing new matches, cache any exiting matches that are still usable.
											* Routes that resolved with `status: 'error'` or `status: 'notFound'` are
											* deliberately excluded from `cachedMatches` so that subsequent invalidations
											* or reloads re-run their loaders instead of reusing the failed/not-found data.
											*/
											if (mountPending) {
												this.stores.setMatches(pendingMatches);
												this.stores.setPending([]);
												this.stores.setCached([...this.stores.cachedMatches.get(), ...exitingMatches.filter((d) => d.status !== "error" && d.status !== "notFound" && d.status !== "redirected")]);
												this.clearExpiredCache();
											}
										});
										for (const [matches, hook] of [
											[hookExitingMatches, "onLeave"],
											[hookEnteringMatches, "onEnter"],
											[hookStayingMatches, "onStay"]
										]) {
											if (!matches) continue;
											for (const match of matches) this.looseRoutesById[match.routeId].options[hook]?.(match);
										}
									});
								});
							}
						});
					} catch (err) {
						if (isRedirect(err)) redirect = err;
						else if (isNotFound(err)) notFound = err;
						const nextStatusCode = redirect ? redirect.status : notFound ? 404 : this.stores.matches.get().some((d) => d.status === "error") ? 500 : 200;
						this.batch(() => {
							this.stores.statusCode.set(nextStatusCode);
							this.stores.redirect.set(redirect);
						});
					}
					if (this.latestLoadPromise === loadPromise) {
						this.commitLocationPromise?.resolve();
						this.latestLoadPromise = void 0;
						this.commitLocationPromise = void 0;
					}
					resolve();
				});
			});
			this.latestLoadPromise = loadPromise;
			await loadPromise;
			while (this.latestLoadPromise && loadPromise !== this.latestLoadPromise) await this.latestLoadPromise;
			let newStatusCode = void 0;
			if (this.hasNotFoundMatch()) newStatusCode = 404;
			else if (this.stores.matches.get().some((d) => d.status === "error")) newStatusCode = 500;
			if (newStatusCode !== void 0) this.stores.statusCode.set(newStatusCode);
		};
		this.startViewTransition = (fn) => {
			const shouldViewTransition = this.shouldViewTransition ?? this.options.defaultViewTransition;
			this.shouldViewTransition = void 0;
			if (shouldViewTransition && typeof document !== "undefined" && "startViewTransition" in document && typeof document.startViewTransition === "function") {
				let startViewTransitionParams;
				if (typeof shouldViewTransition === "object" && this.isViewTransitionTypesSupported) {
					const next = this.latestLocation;
					const prevLocation = this.stores.resolvedLocation.get();
					const resolvedViewTransitionTypes = typeof shouldViewTransition.types === "function" ? shouldViewTransition.types(getLocationChangeInfo(next, prevLocation)) : shouldViewTransition.types;
					if (resolvedViewTransitionTypes === false) {
						fn();
						return;
					}
					startViewTransitionParams = {
						update: fn,
						types: resolvedViewTransitionTypes
					};
				} else startViewTransitionParams = fn;
				document.startViewTransition(startViewTransitionParams);
			} else fn();
		};
		this.updateMatch = (id, updater) => {
			this.startTransition(() => {
				const pendingMatch = this.stores.pendingMatchStores.get(id);
				if (pendingMatch) {
					pendingMatch.set(updater);
					return;
				}
				const activeMatch = this.stores.matchStores.get(id);
				if (activeMatch) {
					activeMatch.set(updater);
					return;
				}
				const cachedMatch = this.stores.cachedMatchStores.get(id);
				if (cachedMatch) {
					const next = updater(cachedMatch.get());
					if (next.status === "redirected") {
						if (this.stores.cachedMatchStores.delete(id)) this.stores.cachedIds.set((prev) => prev.filter((matchId) => matchId !== id));
					} else cachedMatch.set(next);
				}
			});
		};
		this.getMatch = (matchId) => {
			return this.stores.cachedMatchStores.get(matchId)?.get() ?? this.stores.pendingMatchStores.get(matchId)?.get() ?? this.stores.matchStores.get(matchId)?.get();
		};
		this.invalidate = (opts) => {
			const invalidate = (d) => {
				if (opts?.filter?.(d) ?? true) return {
					...d,
					invalid: true,
					...opts?.forcePending || d.status === "error" || d.status === "notFound" ? {
						status: "pending",
						error: void 0
					} : void 0
				};
				return d;
			};
			this.batch(() => {
				this.stores.setMatches(this.stores.matches.get().map(invalidate));
				this.stores.setCached(this.stores.cachedMatches.get().map(invalidate));
				this.stores.setPending(this.stores.pendingMatches.get().map(invalidate));
			});
			this.shouldViewTransition = false;
			return this.load({ sync: opts?.sync });
		};
		this.getParsedLocationHref = (location) => {
			return location.publicHref || "/";
		};
		this.resolveRedirect = (redirect) => {
			const locationHeader = redirect.headers.get("Location");
			if (!redirect.options.href || redirect.options._builtLocation) {
				const location = redirect.options._builtLocation ?? this.buildLocation(redirect.options);
				const href = this.getParsedLocationHref(location);
				redirect.options.href = href;
				redirect.headers.set("Location", href);
			} else if (locationHeader) try {
				const url = new URL(locationHeader);
				if (this.origin && url.origin === this.origin) {
					const href = url.pathname + url.search + url.hash;
					redirect.options.href = href;
					redirect.headers.set("Location", href);
				}
			} catch {}
			if (redirect.options.href && !redirect.options._builtLocation && isDangerousProtocol(redirect.options.href, this.protocolAllowlist)) throw new Error("Redirect blocked: unsafe protocol");
			if (!redirect.headers.get("Location")) redirect.headers.set("Location", redirect.options.href);
			return redirect;
		};
		this.clearCache = (opts) => {
			const filter = opts?.filter;
			if (filter !== void 0) this.stores.setCached(this.stores.cachedMatches.get().filter((m) => !filter(m)));
			else this.stores.setCached([]);
		};
		this.clearExpiredCache = () => {
			const now = Date.now();
			const filter = (d) => {
				const route = this.looseRoutesById[d.routeId];
				if (!route.options.loader) return true;
				const gcTime = (d.preload ? route.options.preloadGcTime ?? this.options.defaultPreloadGcTime : route.options.gcTime ?? this.options.defaultGcTime) ?? 300 * 1e3;
				if (d.status === "error") return true;
				return now - d.updatedAt >= gcTime;
			};
			this.clearCache({ filter });
		};
		this.loadRouteChunk = loadRouteChunk;
		this.preloadRoute = async (opts) => {
			const next = opts._builtLocation ?? this.buildLocation(opts);
			let matches = this.matchRoutes(next, {
				throwOnError: true,
				preload: true,
				dest: opts
			});
			const activeMatchIds = /* @__PURE__ */ new Set([...this.stores.matchesId.get(), ...this.stores.pendingIds.get()]);
			const loadedMatchIds = /* @__PURE__ */ new Set([...activeMatchIds, ...this.stores.cachedIds.get()]);
			const matchesToCache = matches.filter((match) => !loadedMatchIds.has(match.id));
			if (matchesToCache.length) {
				const cachedMatches = this.stores.cachedMatches.get();
				this.stores.setCached([...cachedMatches, ...matchesToCache]);
			}
			try {
				matches = await loadMatches({
					router: this,
					matches,
					location: next,
					preload: true,
					updateMatch: (id, updater) => {
						if (activeMatchIds.has(id)) matches = matches.map((d) => d.id === id ? updater(d) : d);
						else this.updateMatch(id, updater);
					}
				});
				return matches;
			} catch (err) {
				if (isRedirect(err)) {
					if (err.options.reloadDocument) return;
					return await this.preloadRoute({
						...err.options,
						_fromLocation: next
					});
				}
				if (!isNotFound(err)) console.error(err);
				return;
			}
		};
		this.matchRoute = (location, opts) => {
			const matchLocation = {
				...location,
				to: location.to ? this.resolvePathWithBase(location.from || "", location.to) : void 0,
				params: location.params || {},
				leaveParams: true
			};
			const next = this.buildLocation(matchLocation);
			if (opts?.pending && this.stores.status.get() !== "pending") return false;
			const baseLocation = (opts?.pending === void 0 ? !this.stores.isLoading.get() : opts.pending) ? this.latestLocation : this.stores.resolvedLocation.get() || this.stores.location.get();
			const match = findSingleMatch(next.pathname, opts?.caseSensitive ?? false, opts?.fuzzy ?? false, baseLocation.pathname, this.processedTree);
			if (!match) return false;
			if (location.params) {
				if (!deepEqual(match.rawParams, location.params, { partial: true })) return false;
			}
			if (opts?.includeSearch ?? true) return deepEqual(baseLocation.search, next.search, { partial: true }) ? match.rawParams : false;
			return match.rawParams;
		};
		this.hasNotFoundMatch = () => {
			return this.stores.matches.get().some((d) => d.status === "notFound" || d.globalNotFound);
		};
		this.getStoreConfig = getStoreConfig;
		this.update({
			defaultPreloadDelay: 50,
			defaultPendingMs: 1e3,
			defaultPendingMinMs: 500,
			context: void 0,
			...options,
			caseSensitive: options.caseSensitive ?? false,
			notFoundMode: options.notFoundMode ?? "fuzzy",
			stringifySearch: options.stringifySearch ?? defaultStringifySearch,
			parseSearch: options.parseSearch ?? defaultParseSearch,
			protocolAllowlist: options.protocolAllowlist ?? DEFAULT_PROTOCOL_ALLOWLIST
		});
		if (typeof document !== "undefined") self.__TSR_ROUTER__ = this;
	}
	isShell() {
		return !!this.options.isShell;
	}
	isPrerendering() {
		return !!this.options.isPrerendering;
	}
	get state() {
		return this.stores.__store.get();
	}
	setRoutes({ routesById, routesByPath, processedTree }) {
		this.routesById = routesById;
		this.routesByPath = routesByPath;
		this.processedTree = processedTree;
		const notFoundRoute = this.options.notFoundRoute;
		if (notFoundRoute) {
			notFoundRoute.init({ originalIndex: 99999999999 });
			this.routesById[notFoundRoute.id] = notFoundRoute;
		}
	}
	getRouteBranch(route) {
		let branch = this.routeBranchCache.get(route);
		if (!branch) {
			branch = buildRouteBranch(route);
			this.routeBranchCache.set(route, branch);
		}
		return branch;
	}
	get looseRoutesById() {
		return this.routesById;
	}
	getParentContext(parentMatch) {
		return !parentMatch?.id ? this.options.context ?? void 0 : parentMatch.context ?? this.options.context ?? void 0;
	}
	matchRoutesInternal(next, opts) {
		const matchedRoutesResult = this.getMatchedRoutes(next.pathname);
		const { foundRoute, routeParams } = matchedRoutesResult;
		let { matchedRoutes } = matchedRoutesResult;
		let isGlobalNotFound = false;
		if (foundRoute ? foundRoute.path !== "/" && routeParams["**"] : trimPathRight(next.pathname)) if (this.options.notFoundRoute) matchedRoutes = [...matchedRoutes, this.options.notFoundRoute];
		else isGlobalNotFound = true;
		const globalNotFoundRouteId = isGlobalNotFound ? findGlobalNotFoundRouteId(this.options.notFoundMode, matchedRoutes) : void 0;
		const matches = new Array(matchedRoutes.length);
		const previousActiveMatchesByRouteId = /* @__PURE__ */ new Map();
		for (const store of this.stores.matchStores.values()) if (store.routeId) previousActiveMatchesByRouteId.set(store.routeId, store.get());
		for (let index = 0; index < matchedRoutes.length; index++) {
			const route = matchedRoutes[index];
			const parentMatch = matches[index - 1];
			let preMatchSearch;
			let strictMatchSearch;
			let searchError;
			{
				const parentSearch = parentMatch?.search ?? next.search;
				const parentStrictSearch = parentMatch?._strictSearch ?? void 0;
				try {
					const strictSearch = validateSearch(route.options.validateSearch, { ...parentSearch }) ?? void 0;
					preMatchSearch = {
						...parentSearch,
						...strictSearch
					};
					strictMatchSearch = {
						...parentStrictSearch,
						...strictSearch
					};
					searchError = void 0;
				} catch (err) {
					let searchParamError = err;
					if (!(err instanceof SearchParamError)) searchParamError = new SearchParamError(err.message, { cause: err });
					if (opts?.throwOnError) throw searchParamError;
					preMatchSearch = parentSearch;
					strictMatchSearch = {};
					searchError = searchParamError;
				}
			}
			const loaderDeps = route.options.loaderDeps?.({ search: preMatchSearch }) ?? "";
			const loaderDepsHash = loaderDeps ? JSON.stringify(loaderDeps) : "";
			const { interpolatedPath, usedParams } = interpolatePath({
				path: route.fullPath,
				params: routeParams,
				decoder: this.pathParamsDecoder,
				server: this.isServer
			});
			const matchId = route.id + interpolatedPath + loaderDepsHash;
			const existingMatch = this.getMatch(matchId);
			const previousMatch = previousActiveMatchesByRouteId.get(route.id);
			const strictParams = existingMatch?._strictParams ?? usedParams;
			let paramsError = void 0;
			if (!existingMatch) try {
				extractStrictParams(route, strictParams);
			} catch (err) {
				if (isNotFound(err) || isRedirect(err)) paramsError = err;
				else paramsError = new PathParamError(err.message, { cause: err });
				if (opts?.throwOnError) throw paramsError;
			}
			Object.assign(routeParams, strictParams);
			const cause = previousMatch ? "stay" : "enter";
			let match;
			if (existingMatch) match = {
				...existingMatch,
				cause,
				params: previousMatch?.params ?? routeParams,
				_strictParams: strictParams,
				search: previousMatch ? nullReplaceEqualDeep(previousMatch.search, preMatchSearch) : nullReplaceEqualDeep(existingMatch.search, preMatchSearch),
				_strictSearch: strictMatchSearch
			};
			else {
				const status = route.options.loader || route.options.beforeLoad || route.lazyFn || routeNeedsPreload(route) ? "pending" : "success";
				match = {
					id: matchId,
					ssr: void 0,
					index,
					routeId: route.id,
					params: previousMatch?.params ?? routeParams,
					_strictParams: strictParams,
					pathname: interpolatedPath,
					updatedAt: Date.now(),
					search: previousMatch ? nullReplaceEqualDeep(previousMatch.search, preMatchSearch) : preMatchSearch,
					_strictSearch: strictMatchSearch,
					searchError: void 0,
					status,
					isFetching: false,
					error: void 0,
					paramsError,
					__routeContext: void 0,
					_nonReactive: { loadPromise: createControlledPromise() },
					__beforeLoadContext: void 0,
					context: {},
					abortController: new AbortController(),
					fetchCount: 0,
					cause,
					loaderDeps: previousMatch ? replaceEqualDeep(previousMatch.loaderDeps, loaderDeps) : loaderDeps,
					invalid: false,
					preload: false,
					links: void 0,
					scripts: void 0,
					headScripts: void 0,
					meta: void 0,
					staticData: route.options.staticData || {},
					fullPath: route.fullPath
				};
			}
			if (!opts?.preload) match.globalNotFound = globalNotFoundRouteId === route.id;
			match.searchError = searchError;
			const parentContext = this.getParentContext(parentMatch);
			match.context = {
				...parentContext,
				...match.__routeContext,
				...match.__beforeLoadContext
			};
			matches[index] = match;
		}
		for (let index = 0; index < matches.length; index++) {
			const match = matches[index];
			const route = this.looseRoutesById[match.routeId];
			const existingMatch = this.getMatch(match.id);
			const previousMatch = previousActiveMatchesByRouteId.get(match.routeId);
			match.params = previousMatch ? nullReplaceEqualDeep(previousMatch.params, routeParams) : routeParams;
			if (!existingMatch) {
				const parentMatch = matches[index - 1];
				const parentContext = this.getParentContext(parentMatch);
				if (route.options.context) {
					const contextFnContext = {
						deps: match.loaderDeps,
						params: match.params,
						context: parentContext ?? {},
						location: next,
						navigate: (opts) => this.navigate({
							...opts,
							_fromLocation: next
						}),
						buildLocation: this.buildLocation,
						cause: match.cause,
						abortController: match.abortController,
						preload: !!match.preload,
						matches,
						routeId: route.id
					};
					match.__routeContext = route.options.context(contextFnContext) ?? void 0;
				}
				match.context = {
					...parentContext,
					...match.__routeContext,
					...match.__beforeLoadContext
				};
			}
		}
		return matches;
	}
	/**
	* Lightweight route matching for buildLocation.
	* Only computes fullPath, accumulated search, and params - skipping expensive
	* operations like AbortController, ControlledPromise, loaderDeps, and full match objects.
	*/
	matchRoutesLightweight(location) {
		const lastStateMatchId = last(this.stores.matchesId.get());
		const cached = this.lightweightCache.get(location);
		if (cached && cached[0] === lastStateMatchId) return cached[1];
		const { matchedRoutes, routeParams } = this.getMatchedRoutes(location.pathname);
		const lastRoute = last(matchedRoutes);
		const accumulatedSearch = { ...location.search };
		for (const route of matchedRoutes) try {
			Object.assign(accumulatedSearch, validateSearch(route.options.validateSearch, accumulatedSearch));
		} catch {}
		const lastStateMatch = lastStateMatchId && this.stores.matchStores.get(lastStateMatchId)?.get();
		const canReuseParams = lastStateMatch && lastStateMatch.routeId === lastRoute.id && lastStateMatch.pathname === location.pathname;
		let params;
		if (canReuseParams) params = lastStateMatch.params;
		else {
			const strictParams = Object.assign(Object.create(null), routeParams);
			for (const route of matchedRoutes) try {
				extractStrictParams(route, strictParams);
			} catch {}
			params = strictParams;
		}
		const result = {
			matchedRoutes,
			fullPath: lastRoute.fullPath,
			search: accumulatedSearch,
			params
		};
		this.lightweightCache.set(location, [lastStateMatchId, result]);
		return result;
	}
};
/** Error thrown when search parameter validation fails. */
var SearchParamError = class extends Error {};
/** Error thrown when path parameter parsing/validation fails. */
var PathParamError = class extends Error {};
/** Create an initial RouterState from a parsed location. */
function getInitialRouterState(location) {
	return {
		loadedAt: 0,
		isLoading: false,
		isTransitioning: false,
		status: "idle",
		resolvedLocation: void 0,
		location,
		matches: [],
		statusCode: 200
	};
}
function validateSearch(validateSearch, input) {
	if (validateSearch == null) return {};
	if ("~standard" in validateSearch) {
		const result = validateSearch["~standard"].validate(input);
		if (result instanceof Promise) throw new SearchParamError("Async validation not supported");
		if (result.issues) throw new SearchParamError(JSON.stringify(result.issues, void 0, 2), { cause: result });
		return result.value;
	}
	if ("parse" in validateSearch) return validateSearch.parse(input);
	if (typeof validateSearch === "function") return validateSearch(input);
	return {};
}
/**
* Build the matched route chain and extract params for a pathname.
* Falls back to the root route if no specific route is found.
*/
function getMatchedRoutes({ pathname, routesById, processedTree }) {
	const routeParams = Object.create(null);
	const trimmedPath = trimPathRight(pathname);
	let foundRoute = void 0;
	const match = findRouteMatch(trimmedPath, processedTree, true);
	if (match) {
		foundRoute = match.route;
		Object.assign(routeParams, match.rawParams);
	}
	return {
		matchedRoutes: match?.branch || [routesById["__root__"]],
		routeParams,
		foundRoute
	};
}
/**
* TODO: once caches are persisted across requests on the server,
* we can cache the built middleware chain using `last(destRoutes)` as the key
*/
function applySearchMiddleware({ search, dest, destRoutes, _includeValidateSearch }) {
	return buildMiddlewareChain(destRoutes)(search, dest, _includeValidateSearch ?? false);
}
function buildMiddlewareChain(destRoutes) {
	let dest;
	let includeValidateSearch;
	const middlewares = [];
	for (const route of destRoutes) {
		const routeOptions = route.options;
		if ("search" in routeOptions) {
			if (routeOptions.search?.middlewares) middlewares.push(...routeOptions.search.middlewares);
		} else if (routeOptions.preSearchFilters || routeOptions.postSearchFilters) {
			const legacyMiddleware = ({ search, next }) => {
				const result = next(routeOptions.preSearchFilters ? routeOptions.preSearchFilters.reduce((prev, next) => next(prev), search) : search);
				return routeOptions.postSearchFilters ? routeOptions.postSearchFilters.reduce((prev, next) => next(prev), result) : result;
			};
			middlewares.push(legacyMiddleware);
		}
		const routeValidateSearch = routeOptions.validateSearch;
		if (routeValidateSearch) {
			const validate = ({ search, next, meta }) => {
				const result = next(search);
				if (includeValidateSearch) try {
					const validated = validateSearch(routeValidateSearch, result);
					if (meta && validated) {
						for (const key in validated) if (!(key in result)) (meta.defaulted ||= /* @__PURE__ */ new Map()).set(key, validated[key]);
					}
					return {
						...result,
						...validated
					};
				} catch {}
				return result;
			};
			middlewares.push(validate);
		}
	}
	const applyNext = (index, currentSearch, meta) => {
		if (index >= middlewares.length) {
			if (!dest.search) return {};
			if (dest.search === true) return currentSearch;
			const result = functionalUpdate(dest.search, currentSearch);
			if (meta) meta.explicit = result;
			return result;
		}
		const next = (newSearch, collectMeta) => {
			if (collectMeta) {
				const nextMeta = meta || {};
				return {
					search: applyNext(index + 1, newSearch, nextMeta),
					meta: nextMeta
				};
			}
			return applyNext(index + 1, newSearch, meta);
		};
		return middlewares[index]({
			search: currentSearch,
			next,
			meta
		});
	};
	return function middleware(search, nextDest, _includeValidateSearch) {
		dest = nextDest;
		includeValidateSearch = _includeValidateSearch;
		return applyNext(0, search);
	};
}
function findGlobalNotFoundRouteId(notFoundMode, routes) {
	if (notFoundMode !== "root") for (let i = routes.length - 1; i >= 0; i--) {
		const route = routes[i];
		if (route.children) return route.id;
	}
	return rootRouteId;
}
function extractStrictParams(route, accumulatedParams) {
	const parseParams = route.options.params?.parse ?? route.options.parseParams;
	if (parseParams) {
		const result = parseParams(accumulatedParams);
		if (result === false) throw new Error("Route params.parse returned false for a matched route");
		Object.assign(accumulatedParams, result);
	}
}
//#endregion
//#region node_modules/@tanstack/router-core/dist/esm/scroll-restoration.js
function getSafeSessionStorage() {
	try {
		return sessionStorage;
	} catch {
		return;
	}
}
var storageKey = "tsr-scroll-restoration-v1_3";
getSafeSessionStorage();
/**
* The default `getKey` function for `useScrollRestoration`.
* It returns the `key` from the location state or the `href` of the location.
*
* The `location.href` is used as a fallback to support the use case where the location state is not available like the initial render.
*/
var defaultGetScrollRestorationKey = (location) => {
	return location.state.__TSR_key || location.href;
};
//#endregion
//#region node_modules/@tanstack/router-core/dist/esm/link.js
var preloadWarning = "Error preloading route! ☝️";
//#endregion
//#region node_modules/@tanstack/router-core/dist/esm/manifest.js
function getAssetCrossOrigin(assetCrossOrigin, kind) {
	if (!assetCrossOrigin) return;
	if (typeof assetCrossOrigin === "string") return assetCrossOrigin;
	return assetCrossOrigin[kind];
}
function getManifestScriptFormat(manifest) {
	return manifest?.scriptFormat ?? "module";
}
function getScriptPreloadAttrs(manifest, link, assetCrossOrigin) {
	const preloadLink = resolveManifestAssetLink(link);
	const crossOrigin = getAssetCrossOrigin(assetCrossOrigin, "script") ?? preloadLink.crossOrigin;
	return {
		...getManifestScriptFormat(manifest) === "iife" ? {
			rel: "preload",
			as: "script"
		} : { rel: "modulepreload" },
		href: preloadLink.href,
		...crossOrigin ? { crossOrigin } : {}
	};
}
function resolveManifestAssetLink(link) {
	if (typeof link === "string") return {
		href: link,
		crossOrigin: void 0
	};
	return link;
}
function appendUniqueUserTags(target, tags) {
	if (tags.length === 0) return;
	if (tags.length === 1) {
		target.push(tags[0]);
		return;
	}
	const seen = /* @__PURE__ */ new Set();
	for (const tag of tags) {
		const key = JSON.stringify(tag);
		if (seen.has(key)) continue;
		seen.add(key);
		target.push(tag);
	}
}
function getStylesheetHref(asset) {
	return resolveManifestCssLink(asset).href;
}
function resolveManifestCssLink(link) {
	if (typeof link === "string") return {
		href: link,
		crossOrigin: void 0
	};
	return link;
}
function createInlineCssStyleAsset(css) {
	return {
		attrs: { suppressHydrationWarning: true },
		children: css
	};
}
function createInlineCssPlaceholderAsset() {
	return { attrs: { suppressHydrationWarning: true } };
}
//#endregion
//#region node_modules/@tanstack/router-core/dist/esm/route.js
var BaseRoute = class {
	get to() {
		return this._to;
	}
	get id() {
		return this._id;
	}
	get path() {
		return this._path;
	}
	get fullPath() {
		return this._fullPath;
	}
	constructor(options) {
		this.init = (opts) => {
			this.originalIndex = opts.originalIndex;
			const options = this.options;
			const isRoot = !options?.path && !options?.id;
			this.parentRoute = this.options.getParentRoute?.();
			if (isRoot) this._path = rootRouteId;
			else if (!this.parentRoute) invariant();
			let path = isRoot ? rootRouteId : options?.path;
			if (path && path !== "/") path = trimPathLeft(path);
			const customId = options?.id || path;
			let id = isRoot ? rootRouteId : joinPaths([this.parentRoute.id === "__root__" ? "" : this.parentRoute.id, customId]);
			if (path === "__root__") path = "/";
			if (id !== "__root__") id = joinPaths(["/", id]);
			const fullPath = id === "__root__" ? "/" : joinPaths([this.parentRoute.fullPath, path]);
			this._path = path;
			this._id = id;
			this._fullPath = fullPath;
			this._to = trimPathRight(fullPath);
		};
		this.addChildren = (children) => {
			return this._addFileChildren(children);
		};
		this._addFileChildren = (children) => {
			if (Array.isArray(children)) this.children = children;
			if (typeof children === "object" && children !== null) this.children = Object.values(children);
			return this;
		};
		this._addFileTypes = () => {
			return this;
		};
		this.updateLoader = (options) => {
			Object.assign(this.options, options);
			return this;
		};
		this.update = (options) => {
			Object.assign(this.options, options);
			return this;
		};
		this.lazy = (lazyFn) => {
			this.lazyFn = lazyFn;
			return this;
		};
		this.redirect = (opts) => redirect({
			from: this.fullPath,
			...opts
		});
		this.options = options || {};
		this.isRoot = !options?.getParentRoute;
		if (options?.id && options?.path) throw new Error(`Route cannot have both an 'id' and a 'path' option.`);
	}
};
var BaseRootRoute = class extends BaseRoute {
	constructor(options) {
		super(options);
	}
};
//#endregion
//#region node_modules/@tanstack/router-core/dist/esm/ssr/constants.js
var GLOBAL_TSR = "$_TSR";
var TSR_SCRIPT_BARRIER_ID = "$tsr-stream-barrier";
//#endregion
//#region node_modules/unenv/dist/runtime/polyfill/globalthis.mjs
var globalthis_default = globalThis;
//#endregion
//#region node_modules/seroval/dist/esm/production/index.mjs
var M = ((i) => (i[i.AggregateError = 1] = "AggregateError", i[i.ArrowFunction = 2] = "ArrowFunction", i[i.ErrorPrototypeStack = 4] = "ErrorPrototypeStack", i[i.ObjectAssign = 8] = "ObjectAssign", i[i.BigIntTypedArray = 16] = "BigIntTypedArray", i[i.RegExp = 32] = "RegExp", i))(M || {});
var v$1 = Symbol.asyncIterator, pr = Symbol.hasInstance, R = Symbol.isConcatSpreadable, C = Symbol.iterator, dr = Symbol.match, gr = Symbol.matchAll, yr = Symbol.replace, Nr = Symbol.search, br = Symbol.species, vr = Symbol.split, Cr = Symbol.toPrimitive, P$1 = Symbol.toStringTag, Ar = Symbol.unscopables;
var tt = {
	0: "Symbol.asyncIterator",
	1: "Symbol.hasInstance",
	2: "Symbol.isConcatSpreadable",
	3: "Symbol.iterator",
	4: "Symbol.match",
	5: "Symbol.matchAll",
	6: "Symbol.replace",
	7: "Symbol.search",
	8: "Symbol.species",
	9: "Symbol.split",
	10: "Symbol.toPrimitive",
	11: "Symbol.toStringTag",
	12: "Symbol.unscopables"
}, ve = {
	[v$1]: 0,
	[pr]: 1,
	[R]: 2,
	[C]: 3,
	[dr]: 4,
	[gr]: 5,
	[yr]: 6,
	[Nr]: 7,
	[br]: 8,
	[vr]: 9,
	[Cr]: 10,
	[P$1]: 11,
	[Ar]: 12
}, nt = {
	0: v$1,
	1: pr,
	2: R,
	3: C,
	4: dr,
	5: gr,
	6: yr,
	7: Nr,
	8: br,
	9: vr,
	10: Cr,
	11: P$1,
	12: Ar
}, ot = {
	2: "!0",
	3: "!1",
	1: "void 0",
	0: "null",
	4: "-0",
	5: "1/0",
	6: "-1/0",
	7: "0/0"
}, o$1 = void 0, at = {
	2: !0,
	3: !1,
	1: o$1,
	0: null,
	4: -0,
	5: Number.POSITIVE_INFINITY,
	6: Number.NEGATIVE_INFINITY,
	7: NaN
};
var Ce = {
	0: "Error",
	1: "EvalError",
	2: "RangeError",
	3: "ReferenceError",
	4: "SyntaxError",
	5: "TypeError",
	6: "URIError"
}, st = {
	0: Error,
	1: EvalError,
	2: RangeError,
	3: ReferenceError,
	4: SyntaxError,
	5: TypeError,
	6: URIError
};
function c$1(e, r, t, n, a, s, i, u, l, g, S, d) {
	return {
		t: e,
		i: r,
		s: t,
		c: n,
		m: a,
		p: s,
		e: i,
		a: u,
		f: l,
		b: g,
		o: S,
		l: d
	};
}
function B$1(e) {
	return c$1(2, o$1, e, o$1, o$1, o$1, o$1, o$1, o$1, o$1, o$1, o$1);
}
var H = B$1(2), J = B$1(3), Ae = B$1(1), Ee = B$1(0), it = B$1(4), ut = B$1(5), lt = B$1(6), ct = B$1(7);
function mn(e) {
	switch (e) {
		case "\"": return "\\\"";
		case "\\": return "\\\\";
		case `
`: return "\\n";
		case "\r": return "\\r";
		case "\b": return "\\b";
		case "	": return "\\t";
		case "\f": return "\\f";
		case "<": return "\\x3C";
		case "\u2028": return "\\u2028";
		case "\u2029": return "\\u2029";
		default: return o$1;
	}
}
function y$1(e) {
	let r = "", t = 0, n;
	for (let a = 0, s = e.length; a < s; a++) n = mn(e[a]), n && (r += e.slice(t, a) + n, t = a + 1);
	return t === 0 ? r = e : r += e.slice(t), r;
}
function pn(e) {
	switch (e) {
		case "\\\\": return "\\";
		case "\\\"": return "\"";
		case "\\n": return `
`;
		case "\\r": return "\r";
		case "\\b": return "\b";
		case "\\t": return "	";
		case "\\f": return "\f";
		case "\\x3C": return "<";
		case "\\u2028": return "\u2028";
		case "\\u2029": return "\u2029";
		default: return e;
	}
}
function D$1(e) {
	return e.replace(/(\\\\|\\"|\\n|\\r|\\b|\\t|\\f|\\u2028|\\u2029|\\x3C)/g, pn);
}
var L$1 = "__SEROVAL_REFS__", le = "$R", Ie = `self.${le}`;
function dn(e) {
	return e == null ? `${Ie}=${Ie}||[]` : `(${Ie}=${Ie}||{})["${y$1(e)}"]=[]`;
}
var Er = /* @__PURE__ */ new Map(), U = /* @__PURE__ */ new Map();
function Ir(e) {
	return Er.has(e);
}
function yn(e) {
	return U.has(e);
}
function ft(e) {
	if (Ir(e)) return Er.get(e);
	throw new Re(e);
}
function St(e) {
	if (yn(e)) return U.get(e);
	throw new Pe(e);
}
typeof globalThis != "undefined" ? Object.defineProperty(globalThis, L$1, {
	value: U,
	configurable: !0,
	writable: !1,
	enumerable: !1
}) : typeof window != "undefined" ? Object.defineProperty(window, L$1, {
	value: U,
	configurable: !0,
	writable: !1,
	enumerable: !1
}) : typeof self != "undefined" ? Object.defineProperty(self, L$1, {
	value: U,
	configurable: !0,
	writable: !1,
	enumerable: !1
}) : typeof globalthis_default != "undefined" && Object.defineProperty(globalthis_default, L$1, {
	value: U,
	configurable: !0,
	writable: !1,
	enumerable: !1
});
function xe(e) {
	return e instanceof EvalError ? 1 : e instanceof RangeError ? 2 : e instanceof ReferenceError ? 3 : e instanceof SyntaxError ? 4 : e instanceof TypeError ? 5 : e instanceof URIError ? 6 : 0;
}
function Nn(e) {
	let r = Ce[xe(e)];
	return e.name !== r ? { name: e.name } : e.constructor.name !== r ? { name: e.constructor.name } : {};
}
function Z(e, r) {
	let t = Nn(e), n = Object.getOwnPropertyNames(e);
	for (let a = 0, s = n.length, i; a < s; a++) i = n[a], i !== "name" && i !== "message" && (i === "stack" ? r & 4 && (t = t || {}, t[i] = e[i]) : (t = t || {}, t[i] = e[i]));
	return t;
}
function Te(e) {
	return Object.isFrozen(e) ? 3 : Object.isSealed(e) ? 2 : Object.isExtensible(e) ? 0 : 1;
}
function Oe(e) {
	switch (e) {
		case Number.POSITIVE_INFINITY: return ut;
		case Number.NEGATIVE_INFINITY: return lt;
	}
	return e !== e ? ct : Object.is(e, -0) ? it : c$1(0, o$1, e, o$1, o$1, o$1, o$1, o$1, o$1, o$1, o$1, o$1);
}
function $$1(e) {
	return c$1(1, o$1, y$1(e), o$1, o$1, o$1, o$1, o$1, o$1, o$1, o$1, o$1);
}
function we(e) {
	return c$1(3, o$1, "" + e, o$1, o$1, o$1, o$1, o$1, o$1, o$1, o$1, o$1);
}
function pt(e) {
	return c$1(4, e, o$1, o$1, o$1, o$1, o$1, o$1, o$1, o$1, o$1, o$1);
}
function he(e, r) {
	let t = r.valueOf();
	return c$1(5, e, t !== t ? "" : r.toISOString(), o$1, o$1, o$1, o$1, o$1, o$1, o$1, o$1, o$1);
}
function ze(e, r) {
	return c$1(6, e, o$1, y$1(r.source), r.flags, o$1, o$1, o$1, o$1, o$1, o$1, o$1);
}
function dt(e, r) {
	return c$1(17, e, ve[r], o$1, o$1, o$1, o$1, o$1, o$1, o$1, o$1, o$1);
}
function gt(e, r) {
	return c$1(18, e, y$1(ft(r)), o$1, o$1, o$1, o$1, o$1, o$1, o$1, o$1, o$1);
}
function ce(e, r, t) {
	return c$1(25, e, t, y$1(r), o$1, o$1, o$1, o$1, o$1, o$1, o$1, o$1);
}
function _e(e, r, t) {
	return c$1(9, e, o$1, o$1, o$1, o$1, o$1, t, o$1, o$1, Te(r), o$1);
}
function ke(e, r) {
	return c$1(21, e, o$1, o$1, o$1, o$1, o$1, o$1, r, o$1, o$1, o$1);
}
function De(e, r, t) {
	return c$1(15, e, o$1, r.constructor.name, o$1, o$1, o$1, o$1, t, r.byteOffset, o$1, r.length);
}
function Fe(e, r, t) {
	return c$1(16, e, o$1, r.constructor.name, o$1, o$1, o$1, o$1, t, r.byteOffset, o$1, r.byteLength);
}
function Be(e, r, t) {
	return c$1(20, e, o$1, o$1, o$1, o$1, o$1, o$1, t, r.byteOffset, o$1, r.byteLength);
}
function Ve(e, r, t) {
	return c$1(13, e, xe(r), o$1, y$1(r.message), t, o$1, o$1, o$1, o$1, o$1, o$1);
}
function Me(e, r, t) {
	return c$1(14, e, xe(r), o$1, y$1(r.message), t, o$1, o$1, o$1, o$1, o$1, o$1);
}
function Le(e, r) {
	return c$1(7, e, o$1, o$1, o$1, o$1, o$1, r, o$1, o$1, o$1, o$1);
}
function Ue(e, r) {
	return c$1(28, o$1, o$1, o$1, o$1, o$1, o$1, [e, r], o$1, o$1, o$1, o$1);
}
function je(e, r) {
	return c$1(30, o$1, o$1, o$1, o$1, o$1, o$1, [e, r], o$1, o$1, o$1, o$1);
}
function Ye(e, r, t) {
	return c$1(31, e, o$1, o$1, o$1, o$1, o$1, t, r, o$1, o$1, o$1);
}
function qe(e, r) {
	return c$1(32, e, o$1, o$1, o$1, o$1, o$1, o$1, r, o$1, o$1, o$1);
}
function We(e, r) {
	return c$1(33, e, o$1, o$1, o$1, o$1, o$1, o$1, r, o$1, o$1, o$1);
}
function Ge(e, r) {
	return c$1(34, e, o$1, o$1, o$1, o$1, o$1, o$1, r, o$1, o$1, o$1);
}
function Ke(e, r, t, n) {
	return c$1(35, e, t, o$1, o$1, o$1, o$1, r, o$1, o$1, o$1, n);
}
var { toString: bs } = Object.prototype;
var bn = {
	parsing: 1,
	serialization: 2,
	deserialization: 3
};
function vn(e) {
	return `Seroval Error (step: ${bn[e]})`;
}
var Cn = (e, r) => vn(e), fe$1 = class extends Error {
	constructor(t, n) {
		super(Cn(t, n));
		this.cause = n;
	}
}, z = class extends fe$1 {
	constructor(r) {
		super("parsing", r);
	}
}, He = class extends fe$1 {
	constructor(r) {
		super("deserialization", r);
	}
};
function _(e) {
	return `Seroval Error (specific: ${e})`;
}
var x$1 = class extends Error {
	constructor(t) {
		super(_(1));
		this.value = t;
	}
}, h$1 = class extends Error {
	constructor(r) {
		super(_(2));
	}
}, X = class extends Error {
	constructor(r) {
		super(_(3));
	}
}, V = class extends Error {
	constructor(r) {
		super(_(4));
	}
}, Re = class extends Error {
	constructor(t) {
		super(_(5));
		this.value = t;
	}
}, Pe = class extends Error {
	constructor(r) {
		super(_(6));
	}
}, Je = class extends Error {
	constructor(r) {
		super(_(7));
	}
}, O$1 = class extends Error {
	constructor(r) {
		super(_(8));
	}
}, Q = class extends Error {
	constructor(r) {
		super(_(9));
	}
};
var j = class {
	constructor(r, t) {
		this.value = r;
		this.replacement = t;
	}
};
var ee = () => {
	let e = {
		p: 0,
		s: 0,
		f: 0
	};
	return e.p = new Promise((r, t) => {
		e.s = r, e.f = t;
	}), e;
}, An = (e, r) => {
	e.s(r), e.p.s = 1, e.p.v = r;
}, En = (e, r) => {
	e.f(r), e.p.s = 2, e.p.v = r;
}, Nt = ee.toString(), bt = An.toString(), vt = En.toString(), Pr = () => {
	let e = [], r = [], t = !0, n = !1, a = 0, s = (l, g, S) => {
		for (S = 0; S < a; S++) r[S] && r[S][g](l);
	}, i = (l, g, S, d) => {
		for (g = 0, S = e.length; g < S; g++) d = e[g], !t && g === S - 1 ? l[n ? "return" : "throw"](d) : l.next(d);
	}, u = (l, g) => (t && (g = a++, r[g] = l), i(l), () => {
		t && (r[g] = r[a], r[a--] = void 0);
	});
	return {
		__SEROVAL_STREAM__: !0,
		on: (l) => u(l),
		next: (l) => {
			t && (e.push(l), s(l, "next"));
		},
		throw: (l) => {
			t && (e.push(l), s(l, "throw"), t = !1, n = !1, r.length = 0);
		},
		return: (l) => {
			t && (e.push(l), s(l, "return"), t = !1, n = !0, r.length = 0);
		}
	};
}, Ct = Pr.toString(), xr = (e) => (r) => () => {
	let t = 0, n = {
		[e]: () => n,
		next: () => {
			if (t > r.d) return {
				done: !0,
				value: void 0
			};
			let a = t++, s = r.v[a];
			if (a === r.t) throw s;
			return {
				done: a === r.d,
				value: s
			};
		}
	};
	return n;
}, At = xr.toString(), Tr = (e, r) => (t) => () => {
	let n = 0, a = -1, s = !1, i = [], u = [], l = (S = 0, d = u.length) => {
		for (; S < d; S++) u[S].s({
			done: !0,
			value: void 0
		});
	};
	t.on({
		next: (S) => {
			let d = u.shift();
			d && d.s({
				done: !1,
				value: S
			}), i.push(S);
		},
		throw: (S) => {
			let d = u.shift();
			d && d.f(S), l(), a = i.length, s = !0, i.push(S);
		},
		return: (S) => {
			let d = u.shift();
			d && d.s({
				done: !0,
				value: S
			}), l(), a = i.length, i.push(S);
		}
	});
	let g = {
		[e]: () => g,
		next: () => {
			if (a === -1) {
				let G = n++;
				if (G >= i.length) {
					let rt = r();
					return u.push(rt), rt.p;
				}
				return {
					done: !1,
					value: i[G]
				};
			}
			if (n > a) return {
				done: !0,
				value: void 0
			};
			let S = n++, d = i[S];
			if (S !== a) return {
				done: !1,
				value: d
			};
			if (s) throw d;
			return {
				done: !0,
				value: d
			};
		}
	};
	return g;
}, Et = Tr.toString(), Or = (e) => {
	let r = atob(e), t = r.length, n = new Uint8Array(t);
	for (let a = 0; a < t; a++) n[a] = r.charCodeAt(a);
	return n.buffer;
}, It = Or.toString();
function Ze(e) {
	return "__SEROVAL_SEQUENCE__" in e;
}
function wr(e, r, t) {
	return {
		__SEROVAL_SEQUENCE__: !0,
		v: e,
		t: r,
		d: t
	};
}
function $e(e) {
	let r = [], t = -1, n = -1, a = e[C]();
	for (;;) try {
		let s = a.next();
		if (r.push(s.value), s.done) {
			n = r.length - 1;
			break;
		}
	} catch (s) {
		t = r.length, r.push(s);
	}
	return wr(r, t, n);
}
var In = xr(C);
function Rt(e) {
	return In(e);
}
var Pt = {}, xt = {};
var Tt = {
	0: {},
	1: {},
	2: {},
	3: {},
	4: {},
	5: {}
}, Ot = {
	0: "[]",
	1: Nt,
	2: bt,
	3: vt,
	4: Ct,
	5: It
};
function Xe(e) {
	return "__SEROVAL_STREAM__" in e;
}
function re() {
	return Pr();
}
function Qe(e) {
	let r = re(), t = e[v$1]();
	async function n() {
		try {
			let a = await t.next();
			a.done ? r.return(a.value) : (r.next(a.value), await n());
		} catch (a) {
			r.throw(a);
		}
	}
	return n().catch(() => {}), r;
}
var Rn = Tr(v$1, ee);
function wt(e) {
	return Rn(e);
}
async function hr(e) {
	try {
		return [1, await e];
	} catch (r) {
		return [0, r];
	}
}
function me(e, r) {
	return {
		plugins: r.plugins,
		mode: e,
		marked: /* @__PURE__ */ new Set(),
		features: 63 ^ (r.disabledFeatures || 0),
		refs: r.refs || /* @__PURE__ */ new Map(),
		depthLimit: r.depthLimit || 1e3
	};
}
function pe$1(e, r) {
	e.marked.add(r);
}
function zr(e, r) {
	let t = e.refs.size;
	return e.refs.set(r, t), t;
}
function er(e, r) {
	let t = e.refs.get(r);
	return t != null ? (pe$1(e, t), {
		type: 1,
		value: pt(t)
	}) : {
		type: 0,
		value: zr(e, r)
	};
}
function Y$1(e, r) {
	let t = er(e, r);
	return t.type === 1 ? t : Ir(r) ? {
		type: 2,
		value: gt(t.value, r)
	} : t;
}
function I(e, r) {
	let t = Y$1(e, r);
	if (t.type !== 0) return t.value;
	if (r in ve) return dt(t.value, r);
	throw new x$1(r);
}
function k(e, r) {
	let t = er(e, Tt[r]);
	return t.type === 1 ? t.value : c$1(26, t.value, r, o$1, o$1, o$1, o$1, o$1, o$1, o$1, o$1, o$1);
}
function rr(e) {
	let r = er(e, Pt);
	return r.type === 1 ? r.value : c$1(27, r.value, o$1, o$1, o$1, o$1, o$1, o$1, I(e, C), o$1, o$1, o$1);
}
function tr(e) {
	let r = er(e, xt);
	return r.type === 1 ? r.value : c$1(29, r.value, o$1, o$1, o$1, o$1, o$1, [k(e, 1), I(e, v$1)], o$1, o$1, o$1, o$1);
}
function nr(e, r, t, n) {
	return c$1(t ? 11 : 10, e, o$1, o$1, o$1, n, o$1, o$1, o$1, o$1, Te(r), o$1);
}
function or(e, r, t, n) {
	return c$1(8, r, o$1, o$1, o$1, o$1, {
		k: t,
		v: n
	}, o$1, k(e, 0), o$1, o$1, o$1);
}
function zt(e, r, t) {
	return c$1(22, r, t, o$1, o$1, o$1, o$1, o$1, k(e, 1), o$1, o$1, o$1);
}
function ar(e, r, t) {
	let n = new Uint8Array(t), a = "";
	for (let s = 0, i = n.length; s < i; s++) a += String.fromCharCode(n[s]);
	return c$1(19, r, y$1(btoa(a)), o$1, o$1, o$1, o$1, o$1, k(e, 5), o$1, o$1, o$1);
}
function te$1(e, r) {
	return {
		base: me(e, r),
		child: void 0
	};
}
var kr = class {
	constructor(r, t) {
		this._p = r;
		this.depth = t;
	}
	parse(r) {
		return N$1(this._p, this.depth, r);
	}
};
async function xn(e, r, t) {
	let n = [];
	for (let a = 0, s = t.length; a < s; a++) a in t ? n[a] = await N$1(e, r, t[a]) : n[a] = 0;
	return n;
}
async function Tn(e, r, t, n) {
	return _e(t, n, await xn(e, r, n));
}
async function Dr(e, r, t) {
	let n = Object.entries(t), a = [], s = [];
	for (let i = 0, u = n.length; i < u; i++) a.push(y$1(n[i][0])), s.push(await N$1(e, r, n[i][1]));
	return C in t && (a.push(I(e.base, C)), s.push(Ue(rr(e.base), await N$1(e, r, $e(t))))), v$1 in t && (a.push(I(e.base, v$1)), s.push(je(tr(e.base), await N$1(e, r, Qe(t))))), P$1 in t && (a.push(I(e.base, P$1)), s.push($$1(t[P$1]))), R in t && (a.push(I(e.base, R)), s.push(t[R] ? H : J)), {
		k: a,
		v: s
	};
}
async function _r(e, r, t, n, a) {
	return nr(t, n, a, await Dr(e, r, n));
}
async function On(e, r, t, n) {
	return ke(t, await N$1(e, r, n.valueOf()));
}
async function wn(e, r, t, n) {
	return De(t, n, await N$1(e, r, n.buffer));
}
async function hn(e, r, t, n) {
	return Fe(t, n, await N$1(e, r, n.buffer));
}
async function zn(e, r, t, n) {
	return Be(t, n, await N$1(e, r, n.buffer));
}
async function _t(e, r, t, n) {
	let a = Z(n, e.base.features);
	return Ve(t, n, a ? await Dr(e, r, a) : o$1);
}
async function _n(e, r, t, n) {
	let a = Z(n, e.base.features);
	return Me(t, n, a ? await Dr(e, r, a) : o$1);
}
async function kn(e, r, t, n) {
	let a = [], s = [];
	for (let [i, u] of n.entries()) a.push(await N$1(e, r, i)), s.push(await N$1(e, r, u));
	return or(e.base, t, a, s);
}
async function Dn(e, r, t, n) {
	let a = [];
	for (let s of n.keys()) a.push(await N$1(e, r, s));
	return Le(t, a);
}
async function kt(e, r, t, n) {
	let a = e.base.plugins;
	if (a) for (let s = 0, i = a.length; s < i; s++) {
		let u = a[s];
		if (u.parse.async && u.test(n)) return ce(t, u.tag, await u.parse.async(n, new kr(e, r), { id: t }));
	}
	return o$1;
}
async function Fn(e, r, t, n) {
	let [a, s] = await hr(n);
	return c$1(12, t, a, o$1, o$1, o$1, o$1, o$1, await N$1(e, r, s), o$1, o$1, o$1);
}
function Bn(e, r, t, n, a) {
	let s = [], i = t.on({
		next: (u) => {
			pe$1(this.base, r), N$1(this, e, u).then((l) => {
				s.push(qe(r, l));
			}, (l) => {
				a(l), i();
			});
		},
		throw: (u) => {
			pe$1(this.base, r), N$1(this, e, u).then((l) => {
				s.push(We(r, l)), n(s), i();
			}, (l) => {
				a(l), i();
			});
		},
		return: (u) => {
			pe$1(this.base, r), N$1(this, e, u).then((l) => {
				s.push(Ge(r, l)), n(s), i();
			}, (l) => {
				a(l), i();
			});
		}
	});
}
async function Vn(e, r, t, n) {
	return Ye(t, k(e.base, 4), await new Promise(Bn.bind(e, r, t, n)));
}
async function Mn(e, r, t, n) {
	let a = [];
	for (let s = 0, i = n.v.length; s < i; s++) a[s] = await N$1(e, r, n.v[s]);
	return Ke(t, a, n.t, n.d);
}
async function Ln(e, r, t, n) {
	if (Array.isArray(n)) return Tn(e, r, t, n);
	if (Xe(n)) return Vn(e, r, t, n);
	if (Ze(n)) return Mn(e, r, t, n);
	let a = n.constructor;
	if (a === j) return N$1(e, r, n.replacement);
	let s = await kt(e, r, t, n);
	if (s) return s;
	switch (a) {
		case Object: return _r(e, r, t, n, !1);
		case o$1: return _r(e, r, t, n, !0);
		case Date: return he(t, n);
		case Error:
		case EvalError:
		case RangeError:
		case ReferenceError:
		case SyntaxError:
		case TypeError:
		case URIError: return _t(e, r, t, n);
		case Number:
		case Boolean:
		case String:
		case BigInt: return On(e, r, t, n);
		case ArrayBuffer: return ar(e.base, t, n);
		case Int8Array:
		case Int16Array:
		case Int32Array:
		case Uint8Array:
		case Uint16Array:
		case Uint32Array:
		case Uint8ClampedArray:
		case Float32Array:
		case Float64Array: return wn(e, r, t, n);
		case DataView: return zn(e, r, t, n);
		case Map: return kn(e, r, t, n);
		case Set: return Dn(e, r, t, n);
		default: break;
	}
	if (a === Promise || n instanceof Promise) return Fn(e, r, t, n);
	let i = e.base.features;
	if (i & 32 && a === RegExp) return ze(t, n);
	if (i & 16) switch (a) {
		case BigInt64Array:
		case BigUint64Array: return hn(e, r, t, n);
		default: break;
	}
	if (i & 1 && typeof AggregateError != "undefined" && (a === AggregateError || n instanceof AggregateError)) return _n(e, r, t, n);
	if (n instanceof Error) return _t(e, r, t, n);
	if (C in n || v$1 in n) return _r(e, r, t, n, !!a);
	throw new x$1(n);
}
async function Un(e, r, t) {
	let n = Y$1(e.base, t);
	if (n.type !== 0) return n.value;
	let a = await kt(e, r, n.value, t);
	if (a) return a;
	throw new x$1(t);
}
async function N$1(e, r, t) {
	switch (typeof t) {
		case "boolean": return t ? H : J;
		case "undefined": return Ae;
		case "string": return $$1(t);
		case "number": return Oe(t);
		case "bigint": return we(t);
		case "object":
			if (t) {
				let n = Y$1(e.base, t);
				return n.type === 0 ? await Ln(e, r + 1, n.value, t) : n.value;
			}
			return Ee;
		case "symbol": return I(e.base, t);
		case "function": return Un(e, r, t);
		default: throw new x$1(t);
	}
}
async function ne$1(e, r) {
	try {
		return await N$1(e, 0, r);
	} catch (t) {
		throw t instanceof z ? t : new z(t);
	}
}
var oe = ((t) => (t[t.Vanilla = 1] = "Vanilla", t[t.Cross = 2] = "Cross", t))(oe || {});
function ai(e) {
	return e;
}
function Dt(e, r) {
	for (let t = 0, n = r.length; t < n; t++) {
		let a = r[t];
		e.has(a) || (e.add(a), a.extends && Dt(e, a.extends));
	}
}
function A(e) {
	if (e) {
		let r = /* @__PURE__ */ new Set();
		return Dt(r, e), [...r];
	}
}
function Ft(e) {
	switch (e) {
		case "Int8Array": return Int8Array;
		case "Int16Array": return Int16Array;
		case "Int32Array": return Int32Array;
		case "Uint8Array": return Uint8Array;
		case "Uint16Array": return Uint16Array;
		case "Uint32Array": return Uint32Array;
		case "Uint8ClampedArray": return Uint8ClampedArray;
		case "Float32Array": return Float32Array;
		case "Float64Array": return Float64Array;
		case "BigInt64Array": return BigInt64Array;
		case "BigUint64Array": return BigUint64Array;
		default: throw new Je(e);
	}
}
var jn = 1e6, Yn = 1e4, qn = 2e4;
function Vt(e, r) {
	switch (r) {
		case 3: return Object.freeze(e);
		case 1: return Object.preventExtensions(e);
		case 2: return Object.seal(e);
		default: return e;
	}
}
var Wn = 1e3;
function Mt(e, r) {
	var n;
	let t = r.refs || /* @__PURE__ */ new Map();
	return "types" in t || Object.assign(t, { types: /* @__PURE__ */ new Map() }), {
		mode: e,
		plugins: r.plugins,
		refs: t,
		features: (n = r.features) != null ? n : 63 ^ (r.disabledFeatures || 0),
		depthLimit: r.depthLimit || Wn
	};
}
function Lt(e) {
	return {
		mode: 1,
		base: Mt(1, e),
		child: o$1,
		state: { marked: new Set(e.markedRefs) }
	};
}
var Fr = class {
	constructor(r, t) {
		this._p = r;
		this.depth = t;
	}
	deserialize(r) {
		return p$1(this._p, this.depth, r);
	}
};
function jt(e, r) {
	if (r < 0 || !Number.isFinite(r) || !Number.isInteger(r)) throw new O$1({
		t: 4,
		i: r
	});
	if (e.refs.has(r)) throw new Error("Conflicted ref id: " + r);
}
function Gn(e, r, t) {
	return jt(e.base, r), e.state.marked.has(r) && e.base.refs.set(r, t), t;
}
function Kn(e, r, t) {
	return jt(e.base, r), e.base.refs.set(r, t), t;
}
function b(e, r, t) {
	return e.mode === 1 ? Gn(e, r, t) : Kn(e, r, t);
}
function Br(e, r, t) {
	if (Object.hasOwn(r, t)) return r[t];
	throw new O$1(e);
}
function Hn(e, r) {
	return b(e, r.i, St(D$1(r.s)));
}
function Jn(e, r, t) {
	let n = t.a, a = n.length, s = b(e, t.i, new Array(a));
	for (let i = 0, u; i < a; i++) u = n[i], u && (s[i] = p$1(e, r, u));
	return Vt(s, t.o), s;
}
function Zn(e) {
	switch (e) {
		case "constructor":
		case "__proto__":
		case "prototype":
		case "__defineGetter__":
		case "__defineSetter__":
		case "__lookupGetter__":
		case "__lookupSetter__": return !1;
		default: return !0;
	}
}
function $n(e) {
	switch (e) {
		case v$1:
		case R:
		case P$1:
		case C: return !0;
		default: return !1;
	}
}
function Bt(e, r, t) {
	Zn(r) ? e[r] = t : Object.defineProperty(e, r, {
		value: t,
		configurable: !0,
		enumerable: !0,
		writable: !0
	});
}
function Xn(e, r, t, n, a) {
	if (typeof n == "string") Bt(t, D$1(n), p$1(e, r, a));
	else {
		let s = p$1(e, r, n);
		switch (typeof s) {
			case "string":
				Bt(t, s, p$1(e, r, a));
				break;
			case "symbol":
				$n(s) && (t[s] = p$1(e, r, a));
				break;
			default: throw new O$1(n);
		}
	}
}
function Yt(e, r, t) {
	e.base.refs.types.set(r, t);
}
function de(e, r, t, n) {
	if (e.base.refs.types.get(t) !== n) throw new O$1(r);
}
function qt(e, r, t, n) {
	let a = t.k;
	if (a.length > 0) for (let i = 0, u = t.v, l = a.length; i < l; i++) Xn(e, r, n, a[i], u[i]);
	return n;
}
function Qn(e, r, t) {
	let n = b(e, t.i, t.t === 10 ? {} : Object.create(null));
	return qt(e, r, t.p, n), Vt(n, t.o), n;
}
function eo(e, r) {
	return b(e, r.i, new Date(r.s));
}
function ro(e, r) {
	if (e.base.features & 32) {
		let t = D$1(r.c);
		if (t.length > qn) throw new O$1(r);
		return b(e, r.i, new RegExp(t, r.m));
	}
	throw new h$1(r);
}
function to(e, r, t) {
	let n = b(e, t.i, /* @__PURE__ */ new Set());
	for (let a = 0, s = t.a, i = s.length; a < i; a++) n.add(p$1(e, r, s[a]));
	return n;
}
function no(e, r, t) {
	let n = b(e, t.i, /* @__PURE__ */ new Map());
	for (let a = 0, s = t.e.k, i = t.e.v, u = s.length; a < u; a++) n.set(p$1(e, r, s[a]), p$1(e, r, i[a]));
	return n;
}
function oo(e, r) {
	if (r.s.length > jn) throw new O$1(r);
	return b(e, r.i, Or(D$1(r.s)));
}
function ao(e, r, t) {
	var u;
	let n = Ft(t.c), a = p$1(e, r, t.f), s = (u = t.b) != null ? u : 0;
	if (s < 0 || s > a.byteLength) throw new O$1(t);
	return b(e, t.i, new n(a, s, t.l));
}
function so(e, r, t) {
	var i;
	let n = p$1(e, r, t.f), a = (i = t.b) != null ? i : 0;
	if (a < 0 || a > n.byteLength) throw new O$1(t);
	return b(e, t.i, new DataView(n, a, t.l));
}
function Wt(e, r, t, n) {
	if (t.p) {
		let a = qt(e, r, t.p, {});
		Object.defineProperties(n, Object.getOwnPropertyDescriptors(a));
	}
	return n;
}
function io(e, r, t) {
	return Wt(e, r, t, b(e, t.i, new AggregateError([], D$1(t.m))));
}
function uo(e, r, t) {
	let n = Br(t, st, t.s);
	return Wt(e, r, t, b(e, t.i, new n(D$1(t.m))));
}
function lo(e, r, t) {
	let n = ee(), a = b(e, t.i, n.p), s = p$1(e, r, t.f);
	return t.s ? n.s(s) : n.f(s), a;
}
function co(e, r, t) {
	return b(e, t.i, Object(p$1(e, r, t.f)));
}
function fo(e, r, t) {
	let n = e.base.plugins;
	if (n) {
		let a = D$1(t.c);
		for (let s = 0, i = n.length; s < i; s++) {
			let u = n[s];
			if (u.tag === a) return b(e, t.i, u.deserialize(t.s, new Fr(e, r), { id: t.i }));
		}
	}
	throw new X(t.c);
}
function So(e, r) {
	let t = b(e, r.i, b(e, r.s, ee()).p);
	return Yt(e, r.s, 22), t;
}
function mo(e, r, t) {
	let n = e.base.refs.get(t.i);
	if (n) return de(e, t, t.i, 22), n.s(p$1(e, r, t.a[1])), o$1;
	throw new V("Promise");
}
function po(e, r, t) {
	let n = e.base.refs.get(t.i);
	if (n) return de(e, t, t.i, 22), n.f(p$1(e, r, t.a[1])), o$1;
	throw new V("Promise");
}
function go(e, r, t) {
	p$1(e, r, t.a[0]);
	return Rt(p$1(e, r, t.a[1]));
}
function yo(e, r, t) {
	p$1(e, r, t.a[0]);
	return wt(p$1(e, r, t.a[1]));
}
function No(e, r, t) {
	let n = b(e, t.i, re());
	Yt(e, t.i, 31);
	let a = t.a, s = a.length;
	if (s) for (let i = 0; i < s; i++) p$1(e, r, a[i]);
	return n;
}
function bo(e, r, t) {
	let n = e.base.refs.get(t.i);
	if (n) return de(e, t, t.i, 31), n.next(p$1(e, r, t.f)), o$1;
	throw new V("Stream");
}
function vo(e, r, t) {
	let n = e.base.refs.get(t.i);
	if (n) return de(e, t, t.i, 31), n.throw(p$1(e, r, t.f)), o$1;
	throw new V("Stream");
}
function Co(e, r, t) {
	let n = e.base.refs.get(t.i);
	if (n) return de(e, t, t.i, 31), n.return(p$1(e, r, t.f)), o$1;
	throw new V("Stream");
}
function Ao(e, r, t) {
	return p$1(e, r, t.f), o$1;
}
function Eo(e, r, t) {
	return p$1(e, r, t.a[1]), o$1;
}
function Io(e, r, t) {
	let n = b(e, t.i, wr([], t.s, t.l));
	for (let a = 0, s = t.a.length; a < s; a++) n.v[a] = p$1(e, r, t.a[a]);
	return n;
}
function p$1(e, r, t) {
	if (r > e.base.depthLimit) throw new Q(e.base.depthLimit);
	switch (r += 1, t.t) {
		case 2: return Br(t, at, t.s);
		case 0: return Number(t.s);
		case 1: return D$1(String(t.s));
		case 3:
			if (String(t.s).length > Yn) throw new O$1(t);
			return BigInt(t.s);
		case 4: return e.base.refs.get(t.i);
		case 18: return Hn(e, t);
		case 9: return Jn(e, r, t);
		case 10:
		case 11: return Qn(e, r, t);
		case 5: return eo(e, t);
		case 6: return ro(e, t);
		case 7: return to(e, r, t);
		case 8: return no(e, r, t);
		case 19: return oo(e, t);
		case 16:
		case 15: return ao(e, r, t);
		case 20: return so(e, r, t);
		case 14: return io(e, r, t);
		case 13: return uo(e, r, t);
		case 12: return lo(e, r, t);
		case 17: return Br(t, nt, t.s);
		case 21: return co(e, r, t);
		case 25: return fo(e, r, t);
		case 22: return So(e, t);
		case 23: return mo(e, r, t);
		case 24: return po(e, r, t);
		case 28: return go(e, r, t);
		case 30: return yo(e, r, t);
		case 31: return No(e, r, t);
		case 32: return bo(e, r, t);
		case 33: return vo(e, r, t);
		case 34: return Co(e, r, t);
		case 27: return Ao(e, r, t);
		case 29: return Eo(e, r, t);
		case 35: return Io(e, r, t);
		default: throw new h$1(t);
	}
}
function sr(e, r) {
	try {
		return p$1(e, 0, r);
	} catch (t) {
		throw new He(t);
	}
}
var Ro = () => T, Po = Ro.toString(), Gt = /=>/.test(Po);
function ir(e, r) {
	return Gt ? (e.length === 1 ? e[0] : "(" + e.join(",") + ")") + "=>" + (r.startsWith("{") ? "(" + r + ")" : r) : "function(" + e.join(",") + "){return " + r + "}";
}
function Kt(e, r) {
	return Gt ? (e.length === 1 ? e[0] : "(" + e.join(",") + ")") + "=>{" + r + "}" : "function(" + e.join(",") + "){" + r + "}";
}
var Zt = "hjkmoquxzABCDEFGHIJKLNPQRTUVWXYZ$_", Ht = Zt.length, $t = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$_", Jt = $t.length;
function Vr(e) {
	let r = e % Ht, t = Zt[r];
	for (e = (e - r) / Ht; e > 0;) r = e % Jt, t += $t[r], e = (e - r) / Jt;
	return t;
}
var xo = /^[$A-Z_][0-9A-Z_$]*$/i;
function Mr(e) {
	let r = e[0];
	return (r === "$" || r === "_" || r >= "A" && r <= "Z" || r >= "a" && r <= "z") && xo.test(e);
}
function ye(e) {
	switch (e.t) {
		case 0: return e.s + "=" + e.v;
		case 2: return e.s + ".set(" + e.k + "," + e.v + ")";
		case 1: return e.s + ".add(" + e.v + ")";
		case 3: return e.s + ".delete(" + e.k + ")";
	}
}
function To(e) {
	let r = [], t = e[0];
	for (let n = 1, a = e.length, s, i = t; n < a; n++) s = e[n], s.t === 0 && s.v === i.v ? t = {
		t: 0,
		s: s.s,
		k: o$1,
		v: ye(t)
	} : s.t === 2 && s.s === i.s ? t = {
		t: 2,
		s: ye(t),
		k: s.k,
		v: s.v
	} : s.t === 1 && s.s === i.s ? t = {
		t: 1,
		s: ye(t),
		k: o$1,
		v: s.v
	} : s.t === 3 && s.s === i.s ? t = {
		t: 3,
		s: ye(t),
		k: s.k,
		v: o$1
	} : (r.push(t), t = s), i = s;
	return r.push(t), r;
}
function on(e) {
	if (e.length) {
		let r = "", t = To(e);
		for (let n = 0, a = t.length; n < a; n++) r += ye(t[n]) + ",";
		return r;
	}
	return o$1;
}
var Oo = "Object.create(null)", wo = "new Set", ho = "new Map", zo = "Promise.resolve", _o = "Promise.reject", ko = {
	3: "Object.freeze",
	2: "Object.seal",
	1: "Object.preventExtensions",
	0: o$1
};
function an(e, r) {
	return {
		mode: e,
		plugins: r.plugins,
		features: r.features,
		marked: new Set(r.markedRefs),
		stack: [],
		flags: [],
		assignments: []
	};
}
function lr(e) {
	return {
		mode: 2,
		base: an(2, e),
		state: e,
		child: o$1
	};
}
var Lr = class {
	constructor(r) {
		this._p = r;
	}
	serialize(r) {
		return f$1(this._p, r);
	}
};
function Fo(e, r) {
	let t = e.valid.get(r);
	t ?? (t = e.valid.size, e.valid.set(r, t));
	let n = e.vars[t];
	return n ?? (n = Vr(t), e.vars[t] = n), n;
}
function Bo(e) {
	return le + "[" + e + "]";
}
function m$1(e, r) {
	return e.mode === 1 ? Fo(e.state, r) : Bo(r);
}
function w$1(e, r) {
	e.marked.add(r);
}
function Ur(e, r) {
	return e.marked.has(r);
}
function Yr(e, r, t) {
	r !== 0 && (w$1(e.base, t), e.base.flags.push({
		type: r,
		value: m$1(e, t)
	}));
}
function Vo(e) {
	let r = "";
	for (let t = 0, n = e.flags, a = n.length; t < a; t++) {
		let s = n[t];
		r += ko[s.type] + "(" + s.value + "),";
	}
	return r;
}
function sn(e) {
	let r = on(e.assignments), t = Vo(e);
	return r ? t ? r + t : r : t;
}
function qr(e, r, t) {
	e.assignments.push({
		t: 0,
		s: r,
		k: o$1,
		v: t
	});
}
function Mo(e, r, t) {
	e.base.assignments.push({
		t: 1,
		s: m$1(e, r),
		k: o$1,
		v: t
	});
}
function ge(e, r, t, n) {
	e.base.assignments.push({
		t: 2,
		s: m$1(e, r),
		k: t,
		v: n
	});
}
function Xt(e, r, t) {
	e.base.assignments.push({
		t: 3,
		s: m$1(e, r),
		k: t,
		v: o$1
	});
}
function Ne(e, r, t, n) {
	qr(e.base, m$1(e, r) + "[" + t + "]", n);
}
function jr(e, r, t, n) {
	qr(e.base, m$1(e, r) + "." + t, n);
}
function Lo(e, r, t, n) {
	qr(e.base, m$1(e, r) + ".v[" + t + "]", n);
}
function F(e, r) {
	return r.t === 4 && e.stack.includes(r.i);
}
function ae(e, r, t) {
	return e.mode === 1 && !Ur(e.base, r) ? t : m$1(e, r) + "=" + t;
}
function Uo(e) {
	return L$1 + ".get(\"" + e.s + "\")";
}
function Qt(e, r, t, n) {
	return t ? F(e.base, t) ? (w$1(e.base, r), Ne(e, r, n, m$1(e, t.i)), "") : f$1(e, t) : "";
}
function jo(e, r) {
	let t = r.i, n = r.a, a = n.length;
	if (a > 0) {
		e.base.stack.push(t);
		let s = Qt(e, t, n[0], 0), i = s === "";
		for (let u = 1, l; u < a; u++) l = Qt(e, t, n[u], u), s += "," + l, i = l === "";
		return e.base.stack.pop(), Yr(e, r.o, r.i), "[" + s + (i ? ",]" : "]");
	}
	return "[]";
}
function en(e, r, t, n) {
	if (typeof t == "string") {
		let a = Number(t), s = a >= 0 && a.toString() === t || Mr(t);
		if (F(e.base, n)) {
			let i = m$1(e, n.i);
			return w$1(e.base, r.i), s && a !== a ? jr(e, r.i, t, i) : Ne(e, r.i, s ? t : "\"" + t + "\"", i), "";
		}
		return (s ? t : "\"" + t + "\"") + ":" + f$1(e, n);
	}
	return "[" + f$1(e, t) + "]:" + f$1(e, n);
}
function un(e, r, t) {
	let n = t.k, a = n.length;
	if (a > 0) {
		let s = t.v;
		e.base.stack.push(r.i);
		let i = en(e, r, n[0], s[0]);
		for (let u = 1, l = i; u < a; u++) l = en(e, r, n[u], s[u]), i += (l && i && ",") + l;
		return e.base.stack.pop(), "{" + i + "}";
	}
	return "{}";
}
function Yo(e, r) {
	return Yr(e, r.o, r.i), un(e, r, r.p);
}
function qo(e, r, t, n) {
	let a = un(e, r, t);
	return a !== "{}" ? "Object.assign(" + n + "," + a + ")" : n;
}
function Wo(e, r, t, n, a) {
	let s = e.base, i = f$1(e, a), u = Number(n), l = u >= 0 && u.toString() === n || Mr(n);
	if (F(s, a)) l && u !== u ? jr(e, r.i, n, i) : Ne(e, r.i, l ? n : "\"" + n + "\"", i);
	else {
		let g = s.assignments;
		s.assignments = t, l && u !== u ? jr(e, r.i, n, i) : Ne(e, r.i, l ? n : "\"" + n + "\"", i), s.assignments = g;
	}
}
function Go(e, r, t, n, a) {
	if (typeof n == "string") Wo(e, r, t, n, a);
	else {
		let s = e.base, i = s.stack;
		s.stack = [];
		let u = f$1(e, a);
		s.stack = i;
		let l = s.assignments;
		s.assignments = t, Ne(e, r.i, f$1(e, n), u), s.assignments = l;
	}
}
function Ko(e, r, t) {
	let n = t.k, a = n.length;
	if (a > 0) {
		let s = [], i = t.v;
		e.base.stack.push(r.i);
		for (let u = 0; u < a; u++) Go(e, r, s, n[u], i[u]);
		return e.base.stack.pop(), on(s);
	}
	return o$1;
}
function Wr(e, r, t) {
	if (r.p) {
		let n = e.base;
		if (n.features & 8) t = qo(e, r, r.p, t);
		else {
			w$1(n, r.i);
			let a = Ko(e, r, r.p);
			if (a) return "(" + ae(e, r.i, t) + "," + a + m$1(e, r.i) + ")";
		}
	}
	return t;
}
function Ho(e, r) {
	return Yr(e, r.o, r.i), Wr(e, r, Oo);
}
function Jo(e) {
	return "new Date(\"" + e.s + "\")";
}
function Zo(e, r) {
	if (e.base.features & 32) return "/" + r.c + "/" + r.m;
	throw new h$1(r);
}
function rn(e, r, t) {
	let n = e.base;
	return F(n, t) ? (w$1(n, r), Mo(e, r, m$1(e, t.i)), "") : f$1(e, t);
}
function $o(e, r) {
	let t = wo, n = r.a, a = n.length, s = r.i;
	if (a > 0) {
		e.base.stack.push(s);
		let i = rn(e, s, n[0]);
		for (let u = 1, l = i; u < a; u++) l = rn(e, s, n[u]), i += (l && i && ",") + l;
		e.base.stack.pop(), i && (t += "([" + i + "])");
	}
	return t;
}
function tn(e, r, t, n, a) {
	let s = e.base;
	if (F(s, t)) {
		let i = m$1(e, t.i);
		if (w$1(s, r), F(s, n)) return ge(e, r, i, m$1(e, n.i)), "";
		if (n.t !== 4 && n.i != null && Ur(s, n.i)) {
			let l = "(" + f$1(e, n) + ",[" + a + "," + a + "])";
			return ge(e, r, i, m$1(e, n.i)), Xt(e, r, a), l;
		}
		let u = s.stack;
		return s.stack = [], ge(e, r, i, f$1(e, n)), s.stack = u, "";
	}
	if (F(s, n)) {
		let i = m$1(e, n.i);
		if (w$1(s, r), t.t !== 4 && t.i != null && Ur(s, t.i)) {
			let l = "(" + f$1(e, t) + ",[" + a + "," + a + "])";
			return ge(e, r, m$1(e, t.i), i), Xt(e, r, a), l;
		}
		let u = s.stack;
		return s.stack = [], ge(e, r, f$1(e, t), i), s.stack = u, "";
	}
	return "[" + f$1(e, t) + "," + f$1(e, n) + "]";
}
function Xo(e, r) {
	let t = ho, n = r.e.k, a = n.length, s = r.i, i = r.f, u = m$1(e, i.i), l = e.base;
	if (a > 0) {
		let g = r.e.v;
		l.stack.push(s);
		let S = tn(e, s, n[0], g[0], u);
		for (let d = 1, G = S; d < a; d++) G = tn(e, s, n[d], g[d], u), S += (G && S && ",") + G;
		l.stack.pop(), S && (t += "([" + S + "])");
	}
	return i.t === 26 && (w$1(l, i.i), t = "(" + f$1(e, i) + "," + t + ")"), t;
}
function Qo(e, r) {
	return q$1(e, r.f) + "(\"" + r.s + "\")";
}
function ea(e, r) {
	return "new " + r.c + "(" + f$1(e, r.f) + "," + r.b + "," + r.l + ")";
}
function ra(e, r) {
	return "new DataView(" + f$1(e, r.f) + "," + r.b + "," + r.l + ")";
}
function ta(e, r) {
	let t = r.i;
	e.base.stack.push(t);
	let n = Wr(e, r, "new AggregateError([],\"" + r.m + "\")");
	return e.base.stack.pop(), n;
}
function na(e, r) {
	return Wr(e, r, "new " + Ce[r.s] + "(\"" + r.m + "\")");
}
function oa(e, r) {
	let t, n = r.f, a = r.i, s = r.s ? zo : _o, i = e.base;
	if (F(i, n)) {
		let u = m$1(e, n.i);
		t = s + (r.s ? "().then(" + ir([], u) + ")" : "().catch(" + Kt([], "throw " + u) + ")");
	} else {
		i.stack.push(a);
		let u = f$1(e, n);
		i.stack.pop(), t = s + "(" + u + ")";
	}
	return t;
}
function aa(e, r) {
	return "Object(" + f$1(e, r.f) + ")";
}
function q$1(e, r) {
	let t = f$1(e, r);
	return r.t === 4 ? t : "(" + t + ")";
}
function sa(e, r) {
	if (e.mode === 1) throw new h$1(r);
	return "(" + ae(e, r.s, q$1(e, r.f) + "()") + ").p";
}
function ia(e, r) {
	if (e.mode === 1) throw new h$1(r);
	return q$1(e, r.a[0]) + "(" + m$1(e, r.i) + "," + f$1(e, r.a[1]) + ")";
}
function ua(e, r) {
	if (e.mode === 1) throw new h$1(r);
	return q$1(e, r.a[0]) + "(" + m$1(e, r.i) + "," + f$1(e, r.a[1]) + ")";
}
function la(e, r) {
	let t = e.base.plugins;
	if (t) for (let n = 0, a = t.length; n < a; n++) {
		let s = t[n];
		if (s.tag === r.c) return e.child ??= new Lr(e), s.serialize(r.s, e.child, { id: r.i });
	}
	throw new X(r.c);
}
function ca(e, r) {
	let t = "", n = !1;
	return r.f.t !== 4 && (w$1(e.base, r.f.i), t = "(" + f$1(e, r.f) + ",", n = !0), t += ae(e, r.i, "(" + At + ")(" + m$1(e, r.f.i) + ")"), n && (t += ")"), t;
}
function fa(e, r) {
	return q$1(e, r.a[0]) + "(" + f$1(e, r.a[1]) + ")";
}
function Sa(e, r) {
	let t = r.a[0], n = r.a[1], a = e.base, s = "";
	t.t !== 4 && (w$1(a, t.i), s += "(" + f$1(e, t)), n.t !== 4 && (w$1(a, n.i), s += (s ? "," : "(") + f$1(e, n)), s && (s += ",");
	let i = ae(e, r.i, "(" + Et + ")(" + m$1(e, n.i) + "," + m$1(e, t.i) + ")");
	return s ? s + i + ")" : i;
}
function ma(e, r) {
	return q$1(e, r.a[0]) + "(" + f$1(e, r.a[1]) + ")";
}
function pa(e, r) {
	let t = ae(e, r.i, q$1(e, r.f) + "()"), n = r.a.length;
	if (n) {
		let a = f$1(e, r.a[0]);
		for (let s = 1; s < n; s++) a += "," + f$1(e, r.a[s]);
		return "(" + t + "," + a + "," + m$1(e, r.i) + ")";
	}
	return t;
}
function da(e, r) {
	return m$1(e, r.i) + ".next(" + f$1(e, r.f) + ")";
}
function ga(e, r) {
	return m$1(e, r.i) + ".throw(" + f$1(e, r.f) + ")";
}
function ya(e, r) {
	return m$1(e, r.i) + ".return(" + f$1(e, r.f) + ")";
}
function nn(e, r, t, n) {
	let a = e.base;
	return F(a, n) ? (w$1(a, r), Lo(e, r, t, m$1(e, n.i)), "") : f$1(e, n);
}
function Na(e, r) {
	let t = r.a, n = t.length, a = r.i;
	if (n > 0) {
		e.base.stack.push(a);
		let s = nn(e, a, 0, t[0]);
		for (let i = 1, u = s; i < n; i++) u = nn(e, a, i, t[i]), s += (u && s && ",") + u;
		if (e.base.stack.pop(), s) return "{__SEROVAL_SEQUENCE__:!0,v:[" + s + "],t:" + r.s + ",d:" + r.l + "}";
	}
	return "{__SEROVAL_SEQUENCE__:!0,v:[],t:-1,d:0}";
}
function ba(e, r) {
	switch (r.t) {
		case 17: return tt[r.s];
		case 18: return Uo(r);
		case 9: return jo(e, r);
		case 10: return Yo(e, r);
		case 11: return Ho(e, r);
		case 5: return Jo(r);
		case 6: return Zo(e, r);
		case 7: return $o(e, r);
		case 8: return Xo(e, r);
		case 19: return Qo(e, r);
		case 16:
		case 15: return ea(e, r);
		case 20: return ra(e, r);
		case 14: return ta(e, r);
		case 13: return na(e, r);
		case 12: return oa(e, r);
		case 21: return aa(e, r);
		case 22: return sa(e, r);
		case 25: return la(e, r);
		case 26: return Ot[r.s];
		case 35: return Na(e, r);
		default: throw new h$1(r);
	}
}
function f$1(e, r) {
	switch (r.t) {
		case 2: return ot[r.s];
		case 0: return "" + r.s;
		case 1: return "\"" + r.s + "\"";
		case 3: return r.s + "n";
		case 4: return m$1(e, r.i);
		case 23: return ia(e, r);
		case 24: return ua(e, r);
		case 27: return ca(e, r);
		case 28: return fa(e, r);
		case 29: return Sa(e, r);
		case 30: return ma(e, r);
		case 31: return pa(e, r);
		case 32: return da(e, r);
		case 33: return ga(e, r);
		case 34: return ya(e, r);
		default: return ae(e, r.i, ba(e, r));
	}
}
function fr(e, r) {
	let t = f$1(e, r), n = r.i;
	if (n == null) return t;
	let a = sn(e.base), s = m$1(e, n), i = e.state.scopeId, u = i == null ? "" : le, l = a ? "(" + t + "," + a + s + ")" : t;
	if (u === "") return r.t === 10 && !a ? "(" + l + ")" : l;
	let g = i == null ? "()" : "(" + le + "[\"" + y$1(i) + "\"])";
	return "(" + ir([u], l) + ")" + g;
}
var Kr = class {
	constructor(r, t) {
		this._p = r;
		this.depth = t;
	}
	parse(r) {
		return E$1(this._p, this.depth, r);
	}
}, Hr = class {
	constructor(r, t) {
		this._p = r;
		this.depth = t;
	}
	parse(r) {
		return E$1(this._p, this.depth, r);
	}
	parseWithError(r) {
		return W(this._p, this.depth, r);
	}
	isAlive() {
		return this._p.state.alive;
	}
	pushPendingState() {
		Qr(this._p);
	}
	popPendingState() {
		be(this._p);
	}
	onParse(r) {
		se(this._p, r);
	}
	onError(r) {
		$r(this._p, r);
	}
};
function va(e) {
	return {
		alive: !0,
		pending: 0,
		initial: !0,
		buffer: [],
		onParse: e.onParse,
		onError: e.onError,
		onDone: e.onDone
	};
}
function Jr(e) {
	return {
		type: 2,
		base: me(2, e),
		state: va(e)
	};
}
function Ca(e, r, t) {
	let n = [];
	for (let a = 0, s = t.length; a < s; a++) a in t ? n[a] = E$1(e, r, t[a]) : n[a] = 0;
	return n;
}
function Aa(e, r, t, n) {
	return _e(t, n, Ca(e, r, n));
}
function Zr(e, r, t) {
	let n = Object.entries(t), a = [], s = [];
	for (let i = 0, u = n.length; i < u; i++) a.push(y$1(n[i][0])), s.push(E$1(e, r, n[i][1]));
	return C in t && (a.push(I(e.base, C)), s.push(Ue(rr(e.base), E$1(e, r, $e(t))))), v$1 in t && (a.push(I(e.base, v$1)), s.push(je(tr(e.base), E$1(e, r, e.type === 1 ? re() : Qe(t))))), P$1 in t && (a.push(I(e.base, P$1)), s.push($$1(t[P$1]))), R in t && (a.push(I(e.base, R)), s.push(t[R] ? H : J)), {
		k: a,
		v: s
	};
}
function Gr(e, r, t, n, a) {
	return nr(t, n, a, Zr(e, r, n));
}
function Ea(e, r, t, n) {
	return ke(t, E$1(e, r, n.valueOf()));
}
function Ia(e, r, t, n) {
	return De(t, n, E$1(e, r, n.buffer));
}
function Ra(e, r, t, n) {
	return Fe(t, n, E$1(e, r, n.buffer));
}
function Pa(e, r, t, n) {
	return Be(t, n, E$1(e, r, n.buffer));
}
function ln(e, r, t, n) {
	let a = Z(n, e.base.features);
	return Ve(t, n, a ? Zr(e, r, a) : o$1);
}
function xa(e, r, t, n) {
	let a = Z(n, e.base.features);
	return Me(t, n, a ? Zr(e, r, a) : o$1);
}
function Ta(e, r, t, n) {
	let a = [], s = [];
	for (let [i, u] of n.entries()) a.push(E$1(e, r, i)), s.push(E$1(e, r, u));
	return or(e.base, t, a, s);
}
function Oa(e, r, t, n) {
	let a = [];
	for (let s of n.keys()) a.push(E$1(e, r, s));
	return Le(t, a);
}
function wa(e, r, t, n) {
	let a = Ye(t, k(e.base, 4), []);
	return e.type === 1 || (Qr(e), n.on({
		next: (s) => {
			if (e.state.alive) {
				let i = W(e, r, s);
				i && se(e, qe(t, i));
			}
		},
		throw: (s) => {
			if (e.state.alive) {
				let i = W(e, r, s);
				i && se(e, We(t, i));
			}
			be(e);
		},
		return: (s) => {
			if (e.state.alive) {
				let i = W(e, r, s);
				i && se(e, Ge(t, i));
			}
			be(e);
		}
	})), a;
}
function ha(e, r, t) {
	if (this.state.alive) {
		let n = W(this, r, t);
		n && se(this, c$1(23, e, o$1, o$1, o$1, o$1, o$1, [k(this.base, 2), n], o$1, o$1, o$1, o$1)), be(this);
	}
}
function za(e, r, t) {
	if (this.state.alive) {
		let n = W(this, r, t);
		n && se(this, c$1(24, e, o$1, o$1, o$1, o$1, o$1, [k(this.base, 3), n], o$1, o$1, o$1, o$1));
	}
	be(this);
}
function _a(e, r, t, n) {
	let a = zr(e.base, {});
	return e.type === 2 && (Qr(e), n.then(ha.bind(e, a, r), za.bind(e, a, r))), zt(e.base, t, a);
}
function ka(e, r, t, n, a) {
	for (let s = 0, i = a.length; s < i; s++) {
		let u = a[s];
		if (u.parse.sync && u.test(n)) return ce(t, u.tag, u.parse.sync(n, new Kr(e, r), { id: t }));
	}
	return o$1;
}
function Da(e, r, t, n, a) {
	for (let s = 0, i = a.length; s < i; s++) {
		let u = a[s];
		if (u.parse.stream && u.test(n)) return ce(t, u.tag, u.parse.stream(n, new Hr(e, r), { id: t }));
	}
	return o$1;
}
function cn(e, r, t, n) {
	let a = e.base.plugins;
	return a ? e.type === 1 ? ka(e, r, t, n, a) : Da(e, r, t, n, a) : o$1;
}
function Fa(e, r, t, n) {
	let a = [];
	for (let s = 0, i = n.v.length; s < i; s++) a[s] = E$1(e, r, n.v[s]);
	return Ke(t, a, n.t, n.d);
}
function Ba(e, r, t, n, a) {
	switch (a) {
		case Object: return Gr(e, r, t, n, !1);
		case o$1: return Gr(e, r, t, n, !0);
		case Date: return he(t, n);
		case Error:
		case EvalError:
		case RangeError:
		case ReferenceError:
		case SyntaxError:
		case TypeError:
		case URIError: return ln(e, r, t, n);
		case Number:
		case Boolean:
		case String:
		case BigInt: return Ea(e, r, t, n);
		case ArrayBuffer: return ar(e.base, t, n);
		case Int8Array:
		case Int16Array:
		case Int32Array:
		case Uint8Array:
		case Uint16Array:
		case Uint32Array:
		case Uint8ClampedArray:
		case Float32Array:
		case Float64Array: return Ia(e, r, t, n);
		case DataView: return Pa(e, r, t, n);
		case Map: return Ta(e, r, t, n);
		case Set: return Oa(e, r, t, n);
		default: break;
	}
	if (a === Promise || n instanceof Promise) return _a(e, r, t, n);
	let s = e.base.features;
	if (s & 32 && a === RegExp) return ze(t, n);
	if (s & 16) switch (a) {
		case BigInt64Array:
		case BigUint64Array: return Ra(e, r, t, n);
		default: break;
	}
	if (s & 1 && typeof AggregateError != "undefined" && (a === AggregateError || n instanceof AggregateError)) return xa(e, r, t, n);
	if (n instanceof Error) return ln(e, r, t, n);
	if (C in n || v$1 in n) return Gr(e, r, t, n, !!a);
	throw new x$1(n);
}
function Va(e, r, t, n) {
	if (Array.isArray(n)) return Aa(e, r, t, n);
	if (Xe(n)) return wa(e, r, t, n);
	if (Ze(n)) return Fa(e, r, t, n);
	let a = n.constructor;
	if (a === j) return E$1(e, r, n.replacement);
	return cn(e, r, t, n) || Ba(e, r, t, n, a);
}
function Ma(e, r, t) {
	let n = Y$1(e.base, t);
	if (n.type !== 0) return n.value;
	let a = cn(e, r, n.value, t);
	if (a) return a;
	throw new x$1(t);
}
function E$1(e, r, t) {
	if (r >= e.base.depthLimit) throw new Q(e.base.depthLimit);
	switch (typeof t) {
		case "boolean": return t ? H : J;
		case "undefined": return Ae;
		case "string": return $$1(t);
		case "number": return Oe(t);
		case "bigint": return we(t);
		case "object":
			if (t) {
				let n = Y$1(e.base, t);
				return n.type === 0 ? Va(e, r + 1, n.value, t) : n.value;
			}
			return Ee;
		case "symbol": return I(e.base, t);
		case "function": return Ma(e, r, t);
		default: throw new x$1(t);
	}
}
function se(e, r) {
	e.state.initial ? e.state.buffer.push(r) : Xr(e, r, !1);
}
function $r(e, r) {
	if (e.state.onError) e.state.onError(r);
	else throw r instanceof z ? r : new z(r);
}
function fn(e) {
	e.state.onDone && e.state.onDone();
}
function Xr(e, r, t) {
	try {
		e.state.onParse(r, t);
	} catch (n) {
		$r(e, n);
	}
}
function Qr(e) {
	e.state.pending++;
}
function be(e) {
	--e.state.pending <= 0 && fn(e);
}
function W(e, r, t) {
	try {
		return E$1(e, r, t);
	} catch (n) {
		return $r(e, n), o$1;
	}
}
function et(e, r) {
	let t = W(e, 0, r);
	t && (Xr(e, t, !0), e.state.initial = !1, La(e, e.state), e.state.pending <= 0 && Sr(e));
}
function La(e, r) {
	for (let t = 0, n = r.buffer.length; t < n; t++) Xr(e, r.buffer[t], !1);
}
function Sr(e) {
	e.state.alive && (fn(e), e.state.alive = !1);
}
async function su(e, r = {}) {
	return await ne$1(te$1(2, {
		plugins: A(r.plugins),
		disabledFeatures: r.disabledFeatures,
		refs: r.refs
	}), e);
}
function Sn(e, r) {
	let t = A(r.plugins), n = Jr({
		plugins: t,
		refs: r.refs,
		disabledFeatures: r.disabledFeatures,
		onParse(a, s) {
			let i = lr({
				plugins: t,
				features: n.base.features,
				scopeId: r.scopeId,
				markedRefs: n.base.marked
			}), u;
			try {
				u = fr(i, a);
			} catch (l) {
				r.onError && r.onError(l);
				return;
			}
			r.onSerialize(u, s);
		},
		onError: r.onError,
		onDone: r.onDone
	});
	return et(n, e), Sr.bind(null, n);
}
function iu(e, r) {
	let n = Jr({
		plugins: A(r.plugins),
		refs: r.refs,
		disabledFeatures: r.disabledFeatures,
		depthLimit: r.depthLimit,
		onParse: r.onParse,
		onError: r.onError,
		onDone: r.onDone
	});
	return et(n, e), Sr.bind(null, n);
}
function Pu(e, r = {}) {
	var i;
	let t = A(r.plugins), n = r.disabledFeatures || 0, a = (i = e.f) != null ? i : 63;
	return sr(Lt({
		plugins: t,
		markedRefs: e.m,
		features: a & ~n,
		disabledFeatures: n
	}), e.t);
}
//#endregion
//#region node_modules/@tanstack/router-core/dist/esm/ssr/serializer/transformer.js
/**
* Create a strongly-typed serialization adapter for SSR hydration.
* Use to register custom types with the router serializer.
*/
function createSerializationAdapter(opts) {
	return opts;
}
/** Create a Seroval plugin for server-side serialization only. */
/* @__NO_SIDE_EFFECTS__ */
function makeSsrSerovalPlugin(serializationAdapter, options) {
	return /* @__PURE__ */ ai({
		tag: "$TSR/t/" + serializationAdapter.key,
		test: serializationAdapter.test,
		parse: { stream(value, ctx, _data) {
			return { v: ctx.parse(serializationAdapter.toSerializable(value)) };
		} },
		serialize(node, ctx, _data) {
			options.didRun = true;
			return GLOBAL_TSR + ".t.get(\"" + serializationAdapter.key + "\")(" + ctx.serialize(node.v) + ")";
		},
		deserialize: void 0
	});
}
/** Create a Seroval plugin for client/server symmetric (de)serialization. */
/* @__NO_SIDE_EFFECTS__ */
function makeSerovalPlugin(serializationAdapter) {
	return /* @__PURE__ */ ai({
		tag: "$TSR/t/" + serializationAdapter.key,
		test: serializationAdapter.test,
		parse: {
			sync(value, ctx, _data) {
				return { v: ctx.parse(serializationAdapter.toSerializable(value)) };
			},
			async async(value, ctx, _data) {
				return { v: await ctx.parse(serializationAdapter.toSerializable(value)) };
			},
			stream(value, ctx, _data) {
				return { v: ctx.parse(serializationAdapter.toSerializable(value)) };
			}
		},
		serialize: void 0,
		deserialize(node, ctx, _data) {
			return serializationAdapter.fromSerializable(ctx.deserialize(node.v));
		}
	});
}
//#endregion
//#region node_modules/@tanstack/router-core/dist/esm/ssr/serializer/RawStream.js
/**
* Marker class for ReadableStream<Uint8Array> that should be serialized
* with base64 encoding (SSR) or binary framing (server functions).
*
* Wrap your binary streams with this to get efficient serialization:
* ```ts
* // For binary data (files, images, etc.)
* return { data: new RawStream(file.stream()) }
*
* // For text-heavy data (RSC payloads, etc.)
* return { data: new RawStream(rscStream, { hint: 'text' }) }
* ```
*/
var RawStream = class {
	constructor(stream, options) {
		this.stream = stream;
		this.hint = options?.hint ?? "binary";
	}
};
var BufferCtor = globalThis.Buffer;
var hasNodeBuffer = !!BufferCtor && typeof BufferCtor.from === "function";
function uint8ArrayToBase64(bytes) {
	if (bytes.length === 0) return "";
	if (hasNodeBuffer) return BufferCtor.from(bytes).toString("base64");
	const CHUNK_SIZE = 32768;
	const chunks = [];
	for (let i = 0; i < bytes.length; i += CHUNK_SIZE) {
		const chunk = bytes.subarray(i, i + CHUNK_SIZE);
		chunks.push(String.fromCharCode.apply(null, chunk));
	}
	return btoa(chunks.join(""));
}
function base64ToUint8Array(base64) {
	if (base64.length === 0) return /* @__PURE__ */ new Uint8Array(0);
	if (hasNodeBuffer) {
		const buf = BufferCtor.from(base64, "base64");
		return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength);
	}
	const binary = atob(base64);
	const bytes = new Uint8Array(binary.length);
	for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
	return bytes;
}
var RAW_STREAM_FACTORY_BINARY = Object.create(null);
var RAW_STREAM_FACTORY_TEXT = Object.create(null);
var RAW_STREAM_FACTORY_CONSTRUCTOR_BINARY = (stream) => new ReadableStream({ start(controller) {
	stream.on({
		next(base64) {
			try {
				controller.enqueue(base64ToUint8Array(base64));
			} catch {}
		},
		throw(error) {
			controller.error(error);
		},
		return() {
			try {
				controller.close();
			} catch {}
		}
	});
} });
var textEncoderForFactory = new TextEncoder();
var RAW_STREAM_FACTORY_CONSTRUCTOR_TEXT = (stream) => {
	return new ReadableStream({ start(controller) {
		stream.on({
			next(value) {
				try {
					if (typeof value === "string") controller.enqueue(textEncoderForFactory.encode(value));
					else controller.enqueue(base64ToUint8Array(value.$b64));
				} catch {}
			},
			throw(error) {
				controller.error(error);
			},
			return() {
				try {
					controller.close();
				} catch {}
			}
		});
	} });
};
var FACTORY_BINARY = `(s=>new ReadableStream({start(c){s.on({next(b){try{const d=atob(b),a=new Uint8Array(d.length);for(let i=0;i<d.length;i++)a[i]=d.charCodeAt(i);c.enqueue(a)}catch(_){}},throw(e){c.error(e)},return(){try{c.close()}catch(_){}}})}}))`;
var FACTORY_TEXT = `(s=>{const e=new TextEncoder();return new ReadableStream({start(c){s.on({next(v){try{if(typeof v==='string'){c.enqueue(e.encode(v))}else{const d=atob(v.$b64),a=new Uint8Array(d.length);for(let i=0;i<d.length;i++)a[i]=d.charCodeAt(i);c.enqueue(a)}}catch(_){}},throw(x){c.error(x)},return(){try{c.close()}catch(_){}}})}})})`;
function toBinaryStream(readable) {
	const stream = re();
	const reader = readable.getReader();
	(async () => {
		try {
			while (true) {
				const { done, value } = await reader.read();
				if (done) {
					stream.return(void 0);
					break;
				}
				stream.next(uint8ArrayToBase64(value));
			}
		} catch (error) {
			stream.throw(error);
		} finally {
			reader.releaseLock();
		}
	})();
	return stream;
}
function toTextStream(readable) {
	const stream = re();
	const reader = readable.getReader();
	const decoder = new TextDecoder("utf-8", { fatal: true });
	(async () => {
		try {
			while (true) {
				const { done, value } = await reader.read();
				if (done) {
					try {
						const remaining = decoder.decode();
						if (remaining.length > 0) stream.next(remaining);
					} catch {}
					stream.return(void 0);
					break;
				}
				try {
					const text = decoder.decode(value, { stream: true });
					if (text.length > 0) stream.next(text);
				} catch {
					stream.next({ $b64: uint8ArrayToBase64(value) });
				}
			}
		} catch (error) {
			stream.throw(error);
		} finally {
			reader.releaseLock();
		}
	})();
	return stream;
}
/**
* SSR Plugin - uses base64 or UTF-8+base64 encoding for chunks, delegates to seroval's stream mechanism.
* Used during SSR when serializing to JavaScript code for HTML injection.
*
* Supports two modes based on RawStream hint:
* - 'binary': Always base64 encode (default)
* - 'text': Try UTF-8 first, fallback to base64 for invalid UTF-8
*/
var RawStreamSSRPlugin = /* @__PURE__ */ ai({
	tag: "tss/RawStream",
	extends: [/* @__PURE__ */ ai({
		tag: "tss/RawStreamFactory",
		test(value) {
			return value === RAW_STREAM_FACTORY_BINARY;
		},
		parse: {
			sync(_value, _ctx, _data) {
				return {};
			},
			async async(_value, _ctx, _data) {
				return {};
			},
			stream(_value, _ctx, _data) {
				return {};
			}
		},
		serialize(_node, _ctx, _data) {
			return FACTORY_BINARY;
		},
		deserialize(_node, _ctx, _data) {
			return RAW_STREAM_FACTORY_BINARY;
		}
	}), /* @__PURE__ */ ai({
		tag: "tss/RawStreamFactoryText",
		test(value) {
			return value === RAW_STREAM_FACTORY_TEXT;
		},
		parse: {
			sync(_value, _ctx, _data) {
				return {};
			},
			async async(_value, _ctx, _data) {
				return {};
			},
			stream(_value, _ctx, _data) {
				return {};
			}
		},
		serialize(_node, _ctx, _data) {
			return FACTORY_TEXT;
		},
		deserialize(_node, _ctx, _data) {
			return RAW_STREAM_FACTORY_TEXT;
		}
	})],
	test(value) {
		return value instanceof RawStream;
	},
	parse: {
		sync(value, ctx, _data) {
			const factory = value.hint === "text" ? RAW_STREAM_FACTORY_TEXT : RAW_STREAM_FACTORY_BINARY;
			return {
				hint: ctx.parse(value.hint),
				factory: ctx.parse(factory),
				stream: ctx.parse(re())
			};
		},
		async async(value, ctx, _data) {
			const factory = value.hint === "text" ? RAW_STREAM_FACTORY_TEXT : RAW_STREAM_FACTORY_BINARY;
			const encodedStream = value.hint === "text" ? toTextStream(value.stream) : toBinaryStream(value.stream);
			return {
				hint: await ctx.parse(value.hint),
				factory: await ctx.parse(factory),
				stream: await ctx.parse(encodedStream)
			};
		},
		stream(value, ctx, _data) {
			const factory = value.hint === "text" ? RAW_STREAM_FACTORY_TEXT : RAW_STREAM_FACTORY_BINARY;
			const encodedStream = value.hint === "text" ? toTextStream(value.stream) : toBinaryStream(value.stream);
			return {
				hint: ctx.parse(value.hint),
				factory: ctx.parse(factory),
				stream: ctx.parse(encodedStream)
			};
		}
	},
	serialize(node, ctx, _data) {
		return "(" + ctx.serialize(node.factory) + ")(" + ctx.serialize(node.stream) + ")";
	},
	deserialize(node, ctx, _data) {
		const stream = ctx.deserialize(node.stream);
		return ctx.deserialize(node.hint) === "text" ? RAW_STREAM_FACTORY_CONSTRUCTOR_TEXT(stream) : RAW_STREAM_FACTORY_CONSTRUCTOR_BINARY(stream);
	}
});
/**
* Creates an RPC plugin instance that registers raw streams with a multiplexer.
* Used for server function responses where we want binary framing.
* Note: RPC always uses binary framing regardless of hint.
*
* @param onRawStream Callback invoked when a RawStream is encountered during serialization
*/
/* @__NO_SIDE_EFFECTS__ */
function createRawStreamRPCPlugin(onRawStream) {
	let nextStreamId = 1;
	return /* @__PURE__ */ ai({
		tag: "tss/RawStream",
		test(value) {
			return value instanceof RawStream;
		},
		parse: {
			async async(value, ctx, _data) {
				const streamId = nextStreamId++;
				onRawStream(streamId, value.stream);
				return { streamId: await ctx.parse(streamId) };
			},
			stream(value, ctx, _data) {
				const streamId = nextStreamId++;
				onRawStream(streamId, value.stream);
				return { streamId: ctx.parse(streamId) };
			}
		},
		serialize() {
			throw new Error("RawStreamRPCPlugin.serialize should not be called. RPC uses JSON serialization, not JS code generation.");
		},
		deserialize() {
			throw new Error("RawStreamRPCPlugin.deserialize should not be called. Use createRawStreamDeserializePlugin on client.");
		}
	});
}
//#endregion
//#region node_modules/@tanstack/router-core/dist/esm/ssr/serializer/ShallowErrorPlugin.js
/**
* this plugin serializes only the `message` part of an Error
* this helps with serializing e.g. a ZodError which has functions attached that cannot be serialized
*/
var ShallowErrorPlugin = /* @__PURE__ */ ai({
	tag: "$TSR/Error",
	test(value) {
		return value instanceof Error;
	},
	parse: {
		sync(value, ctx) {
			return { message: ctx.parse(value.message) };
		},
		async async(value, ctx) {
			return { message: await ctx.parse(value.message) };
		},
		stream(value, ctx) {
			return { message: ctx.parse(value.message) };
		}
	},
	serialize(node, ctx) {
		return "new Error(" + ctx.serialize(node.message) + ")";
	},
	deserialize(node, ctx) {
		return new Error(ctx.deserialize(node.message));
	}
});
var n = {}, P = (e) => new ReadableStream({ start: (r) => {
	e.on({
		next: (a) => {
			try {
				r.enqueue(a);
			} catch (t) {}
		},
		throw: (a) => {
			r.error(a);
		},
		return: () => {
			try {
				r.close();
			} catch (a) {}
		}
	});
} }), x = ai({
	tag: "seroval-plugins/web/ReadableStreamFactory",
	test(e) {
		return e === n;
	},
	parse: {
		sync() {
			return n;
		},
		async async() {
			return await Promise.resolve(n);
		},
		stream() {
			return n;
		}
	},
	serialize() {
		return P.toString();
	},
	deserialize() {
		return n;
	}
});
function w(e) {
	let r = re(), a = e.getReader();
	async function t() {
		try {
			let s = await a.read();
			s.done ? r.return(s.value) : (r.next(s.value), await t());
		} catch (s) {
			r.throw(s);
		}
	}
	return t().catch(() => {}), r;
}
//#endregion
//#region node_modules/@tanstack/router-core/dist/esm/ssr/serializer/seroval-plugins.js
var defaultSerovalPlugins = [
	ShallowErrorPlugin,
	RawStreamSSRPlugin,
	ai({
		tag: "seroval/plugins/web/ReadableStream",
		extends: [x],
		test(e) {
			return typeof ReadableStream == "undefined" ? !1 : e instanceof ReadableStream;
		},
		parse: {
			sync(e, r) {
				return {
					factory: r.parse(n),
					stream: r.parse(re())
				};
			},
			async async(e, r) {
				return {
					factory: await r.parse(n),
					stream: await r.parse(w(e))
				};
			},
			stream(e, r) {
				return {
					factory: r.parse(n),
					stream: r.parse(w(e))
				};
			}
		},
		serialize(e, r) {
			return "(" + r.serialize(e.factory) + ")(" + r.serialize(e.stream) + ")";
		},
		deserialize(e, r) {
			return P(r.deserialize(e.stream));
		}
	})
];
//#endregion
//#region node_modules/@tanstack/router-core/dist/esm/scroll-restoration-inline.js
var scroll_restoration_inline_default = "function(a,f){let l;try{l=JSON.parse(sessionStorage.getItem(a)||\"{}\")}catch{return}const n=l?.[f||history.state?.__TSR_key];let c=!1;for(const t in n){const e=n[t],o=e?.scrollX,s=e?.scrollY;if(Number.isFinite(o)&&Number.isFinite(s)){if(t===\"window\")scrollTo(o,s),c=!0;else if(t)try{const r=document.querySelector(t);r&&(r.scrollLeft=o,r.scrollTop=s)}catch{}}}if(c)return;const i=location.hash.slice(1);if(i){const t=history.state?.__hashScrollIntoViewOptions??!0;if(t){const e=document.getElementById(i);e&&e.scrollIntoView(t)}return}scrollTo(0,0)}";
//#endregion
//#region node_modules/@tanstack/router-core/dist/esm/scroll-restoration-script/server.js
var defaultInlineScrollRestorationScript = `(${scroll_restoration_inline_default})(${escapeHtml(JSON.stringify(storageKey))})`;
function getScrollRestorationScript(key) {
	if (key === void 0) return defaultInlineScrollRestorationScript;
	return `(${scroll_restoration_inline_default})(${escapeHtml(JSON.stringify(storageKey))},${escapeHtml(JSON.stringify(key))})`;
}
function getScrollRestorationScriptForRouter(router) {
	if (typeof router.options.scrollRestoration === "function" && !router.options.scrollRestoration({ location: router.latestLocation })) return null;
	const getKey = router.options.getScrollRestorationKey;
	if (!getKey) return defaultInlineScrollRestorationScript;
	const location = router.latestLocation;
	const userKey = getKey(location);
	if (userKey === defaultGetScrollRestorationKey(location)) return defaultInlineScrollRestorationScript;
	return getScrollRestorationScript(userKey);
}
//#endregion
//#region node_modules/@tanstack/router-core/dist/esm/ssr/ssr-match-id.js
function dehydrateSsrMatchId(id) {
	return id.replaceAll("/", "\0");
}
//#endregion
//#region node_modules/@tanstack/router-core/dist/esm/ssr/tsrScript.js
var tsrScript_default = "self.$_TSR={h(){this.hydrated=!0,this.c()},e(){this.streamEnded=!0,this.c()},c(){this.hydrated&&this.streamEnded&&(delete self.$_TSR,delete self.$R.tsr)},p(e){this.initialized?e():this.buffer.push(e)},buffer:[]}";
//#endregion
//#region node_modules/@tanstack/router-core/dist/esm/ssr/ssr-server.js
var SCOPE_ID = "tsr";
var TSR_PREFIX = GLOBAL_TSR + ".router=";
var P_PREFIX = GLOBAL_TSR + ".p(()=>";
var P_SUFFIX = ")";
function dehydrateMatch(match) {
	const dehydratedMatch = {
		i: dehydrateSsrMatchId(match.id),
		u: match.updatedAt,
		s: match.status
	};
	for (const [key, shorthand] of [
		["__beforeLoadContext", "b"],
		["loaderData", "l"],
		["error", "e"],
		["ssr", "ssr"]
	]) if (match[key] !== void 0) dehydratedMatch[shorthand] = match[key];
	if (match.globalNotFound) dehydratedMatch.g = true;
	return dehydratedMatch;
}
var INITIAL_SCRIPTS = [dn(SCOPE_ID), tsrScript_default];
var ScriptBuffer = class {
	constructor(injectScript) {
		this._scriptBarrierLifted = false;
		this._cleanedUp = false;
		this._microtaskVersion = 0;
		this._pendingMicrotaskVersion = 0;
		this.injectScript = injectScript;
		this._queue = INITIAL_SCRIPTS.slice();
	}
	enqueue(script) {
		if (this._cleanedUp) return;
		this._queue.push(script);
		if (this._scriptBarrierLifted) this.scheduleInjectBufferedScripts();
	}
	liftBarrier() {
		if (this._scriptBarrierLifted || this._cleanedUp) return;
		this._scriptBarrierLifted = true;
		if (this._queue.length > 0) this.scheduleInjectBufferedScripts();
	}
	scheduleInjectBufferedScripts() {
		if (this._pendingMicrotaskVersion !== 0) return;
		const pendingVersion = ++this._microtaskVersion;
		this._pendingMicrotaskVersion = pendingVersion;
		queueMicrotask(() => {
			if (this._pendingMicrotaskVersion !== pendingVersion) return;
			this._pendingMicrotaskVersion = 0;
			this.injectBufferedScripts();
		});
	}
	clearPendingMicrotask() {
		if (this._pendingMicrotaskVersion === 0) return;
		this._pendingMicrotaskVersion = 0;
		this._microtaskVersion++;
	}
	/**
	* Flushes any pending scripts synchronously.
	* Call this before signaling serialization finished to ensure all scripts are injected.
	*
	* IMPORTANT: Only injects if the barrier has been lifted. Before the barrier is lifted,
	* scripts should remain in the queue so takeBufferedScripts() can retrieve them
	*/
	flush() {
		if (!this._scriptBarrierLifted) return;
		if (this._cleanedUp) return;
		this.clearPendingMicrotask();
		this.injectBufferedScripts();
	}
	takeAll() {
		return this.takeScripts(this._queue.length);
	}
	takeScripts(count) {
		if (count <= 0) return void 0;
		const bufferedScripts = this._queue.splice(0, count);
		if (bufferedScripts.length === 0) return;
		if (bufferedScripts.length === 1) return bufferedScripts[0] + ";document.currentScript.remove()";
		return bufferedScripts.join(";") + ";document.currentScript.remove()";
	}
	hasPending() {
		return this._queue.length > 0;
	}
	injectBufferedScripts() {
		if (this._cleanedUp) return;
		if (this._queue.length === 0) return;
		const scriptsToInject = this.takeAll();
		if (scriptsToInject) this.injectScript?.(scriptsToInject);
	}
	cleanup() {
		this._cleanedUp = true;
		this.clearPendingMicrotask();
		this._queue = [];
		this.injectScript = void 0;
	}
};
var MANIFEST_CACHE_SIZE = 100;
var manifestCaches = /* @__PURE__ */ new WeakMap();
function getManifestCache(manifest) {
	const cache = manifestCaches.get(manifest);
	if (cache) return cache;
	const newCache = createLRUCache(MANIFEST_CACHE_SIZE);
	manifestCaches.set(manifest, newCache);
	return newCache;
}
function getInlineCssForPreparedRoutes(manifest, preparedRoutes) {
	if (preparedRoutes.inlineCss !== void 0) return preparedRoutes.inlineCss;
	const styles = manifest.inlineCss?.styles;
	const hrefs = preparedRoutes.inlineCssHrefs;
	if (!styles || !hrefs?.length) return void 0;
	let css = "";
	for (const href of hrefs) css += styles[href];
	preparedRoutes.inlineCss = css;
	return css;
}
function getInlineCssAssetForPreparedRoutes(manifest, preparedRoutes) {
	const css = getInlineCssForPreparedRoutes(manifest, preparedRoutes);
	return css === void 0 ? void 0 : createInlineCssStyleAsset(css);
}
function getMatchedRoutesCacheKey(matches) {
	let cacheKey = "";
	for (let i = 0; i < matches.length; i++) cacheKey += (i === 0 ? "" : "\0") + matches[i].routeId;
	return cacheKey;
}
function getPreparedMatchedManifestRoutes(manifest, matches, cacheKey) {
	{
		const cached = getManifestCache(manifest).get(cacheKey);
		if (cached) return cached;
	}
	const preparedRoutes = prepareMatchedManifestRoutes(manifest, matches);
	getManifestCache(manifest).set(cacheKey, preparedRoutes);
	return preparedRoutes;
}
function prepareMatchedManifestRoutes(manifest, matches) {
	const inlineStyles = manifest.inlineCss?.styles;
	const routes = {};
	if (!inlineStyles) {
		for (const match of matches) {
			const route = manifest.routes[match.routeId];
			if (route) routes[match.routeId] = route;
		}
		return {
			routes,
			hasStrippedRoutes: false
		};
	}
	const inlineCssHrefs = [];
	const seenInlineCssHrefs = /* @__PURE__ */ new Set();
	let hasStrippedRoutes = false;
	for (const match of matches) {
		const routeId = match.routeId;
		const route = manifest.routes[routeId];
		if (!route) continue;
		const nextRoute = stripInlinedStylesheetAssetsFromRoute(inlineStyles, route, inlineCssHrefs, seenInlineCssHrefs);
		if (nextRoute !== route) hasStrippedRoutes = true;
		routes[routeId] = nextRoute;
	}
	return {
		routes,
		hasStrippedRoutes,
		...inlineCssHrefs.length ? { inlineCssHrefs } : {}
	};
}
function stripInlinedStylesheetAssetsFromRoute(inlineStyles, route, inlineCssHrefs, seenInlineCssHrefs) {
	const css = route.css;
	if (!css) return route;
	if (css.length === 0) {
		const nextRoute = { ...route };
		delete nextRoute.css;
		return nextRoute;
	}
	let cssLinks;
	for (let i = 0; i < css.length; i++) {
		const link = css[i];
		const href = getStylesheetHref(link);
		if (inlineStyles[href] === void 0) {
			if (cssLinks) cssLinks.push(link);
			continue;
		}
		if (!seenInlineCssHrefs.has(href)) {
			seenInlineCssHrefs.add(href);
			inlineCssHrefs.push(href);
		}
		if (!cssLinks) cssLinks = css.slice(0, i);
	}
	if (!cssLinks) return route;
	if (cssLinks.length > 0) return {
		...route,
		css: cssLinks
	};
	const nextRoute = { ...route };
	delete nextRoute.css;
	return nextRoute;
}
function hasRouteAssets(route) {
	return !!route.scripts?.length || !!route.css?.length;
}
function hasRequestAssets(assets) {
	return !!assets && (!!assets.preloads?.length || hasRouteAssets(assets));
}
function mergeRequestAssetsIntoRootRoute(rootRoute, requestAssets) {
	const preloads = requestAssets?.preloads?.length ? [...requestAssets.preloads, ...rootRoute?.preloads ?? []] : rootRoute?.preloads;
	const scripts = requestAssets?.scripts?.length ? [...requestAssets.scripts, ...rootRoute?.scripts ?? []] : rootRoute?.scripts;
	const cssLinks = requestAssets?.css?.length ? [...requestAssets.css, ...rootRoute?.css ?? []] : rootRoute?.css;
	return {
		...rootRoute ?? {},
		...preloads?.length ? { preloads } : {},
		...scripts?.length ? { scripts } : {},
		...cssLinks?.length ? { css: cssLinks } : {}
	};
}
function attachRouterServerSsrUtils({ router, manifest, getRequestAssets }) {
	router.ssr = { get manifest() {
		if (!manifest) return manifest;
		const requestAssets = getRequestAssets?.();
		const matches = router.stores.matches.get();
		const hasAssets = hasRequestAssets(requestAssets);
		if (!hasAssets && !manifest.inlineCss) return manifest;
		let inlineCssAsset;
		let routes = manifest.routes;
		if (manifest.inlineCss) {
			const preparedManifest = getPreparedMatchedManifestRoutes(manifest, matches, getMatchedRoutesCacheKey(matches));
			inlineCssAsset = getInlineCssAssetForPreparedRoutes(manifest, preparedManifest);
			if (preparedManifest.hasStrippedRoutes) routes = {
				...manifest.routes,
				...preparedManifest.routes
			};
		}
		if (!hasAssets) return {
			...manifest.scriptFormat ? { scriptFormat: manifest.scriptFormat } : {},
			...inlineCssAsset ? { inlineStyle: inlineCssAsset } : {},
			routes
		};
		const rootRoute = routes[rootRouteId];
		return {
			...manifest.scriptFormat ? { scriptFormat: manifest.scriptFormat } : {},
			...inlineCssAsset ? { inlineStyle: inlineCssAsset } : {},
			routes: {
				...routes,
				[rootRouteId]: mergeRequestAssetsIntoRootRoute(rootRoute, requestAssets)
			}
		};
	} };
	let _dehydrated = false;
	let _serializationFinished = false;
	let streamFastPathReserved = false;
	const renderFinishedListeners = [];
	const injectedHtmlListeners = [];
	const serializationFinishedListeners = [];
	const cleanupListeners = [];
	let cleanupStarted = false;
	let injectedHtmlBuffer = "";
	const callListeners = (listeners, errorPrefix) => {
		const snapshot = listeners.slice();
		for (const l of snapshot) try {
			l();
		} catch (err) {
			console.error(`${errorPrefix}:`, err);
		}
	};
	const removeListener = (listeners, listener) => {
		const index = listeners.indexOf(listener);
		if (index >= 0) listeners.splice(index, 1);
	};
	const scriptBuffer = new ScriptBuffer((script) => {
		serverSsr.injectScript(script);
	});
	const serverSsr = {
		injectHtml: (html) => {
			if (!html || cleanupStarted) return;
			injectedHtmlBuffer += html;
			callListeners(injectedHtmlListeners, "SSR injected HTML listener error");
		},
		injectScript: (script) => {
			if (!script || cleanupStarted) return;
			const html = `<script${router.options.ssr?.nonce ? ` nonce='${router.options.ssr.nonce}'` : ""}>${script}<\/script>`;
			serverSsr.injectHtml(html);
		},
		dehydrate: async (opts) => {
			if (_dehydrated) invariant();
			let matchesToDehydrate = router.stores.matches.get();
			if (router.isShell()) matchesToDehydrate = matchesToDehydrate.slice(0, 1);
			const matches = matchesToDehydrate.map(dehydrateMatch);
			let manifestToDehydrate = void 0;
			if (manifest) {
				const cacheKey = getMatchedRoutesCacheKey(matchesToDehydrate);
				const preparedManifest = getPreparedMatchedManifestRoutes(manifest, matchesToDehydrate, cacheKey);
				manifestToDehydrate = {
					...manifest.scriptFormat ? { scriptFormat: manifest.scriptFormat } : {},
					...preparedManifest.inlineCssHrefs ? { inlineStyle: createInlineCssPlaceholderAsset() } : {},
					routes: preparedManifest.routes
				};
				const requestAssets = opts?.requestAssets;
				if (hasRequestAssets(requestAssets)) {
					const existingRoot = manifestToDehydrate.routes[rootRouteId];
					manifestToDehydrate.routes = {
						...manifestToDehydrate.routes,
						[rootRouteId]: mergeRequestAssetsIntoRootRoute(existingRoot, requestAssets)
					};
				}
			}
			const dehydratedRouter = {
				manifest: manifestToDehydrate,
				matches
			};
			const lastMatchId = matchesToDehydrate[matchesToDehydrate.length - 1]?.id;
			if (lastMatchId) dehydratedRouter.lastMatchId = dehydrateSsrMatchId(lastMatchId);
			const dehydratedData = await router.options.dehydrate?.();
			if (dehydratedData) dehydratedRouter.dehydratedData = dehydratedData;
			_dehydrated = true;
			const trackPlugins = { didRun: false };
			const serializationAdapters = router.options.serializationAdapters;
			const plugins = serializationAdapters ? serializationAdapters.map((t) => /* @__PURE__ */ makeSsrSerovalPlugin(t, trackPlugins)).concat(defaultSerovalPlugins) : defaultSerovalPlugins;
			let serializationCompleteSignaled = false;
			const signalSerializationComplete = () => {
				if (serializationCompleteSignaled || cleanupStarted) return;
				serializationCompleteSignaled = true;
				_serializationFinished = true;
				const listeners = serializationFinishedListeners.slice();
				serializationFinishedListeners.length = 0;
				for (const l of listeners) try {
					l();
				} catch (err) {
					console.error("Serialization listener error:", err);
				}
			};
			const finishScriptSerialization = () => {
				if (serializationCompleteSignaled || cleanupStarted) return;
				scriptBuffer.enqueue(GLOBAL_TSR + ".e()");
				scriptBuffer.flush();
				signalSerializationComplete();
			};
			Sn(dehydratedRouter, {
				refs: /* @__PURE__ */ new Map(),
				plugins,
				onSerialize: (data, initial) => {
					let serialized = initial ? TSR_PREFIX + data : data;
					if (trackPlugins.didRun) serialized = P_PREFIX + serialized + P_SUFFIX;
					scriptBuffer.enqueue(serialized);
				},
				onError: (err) => {
					console.error("Serialization error:", err);
					if (err && err.stack) console.error(err.stack);
					finishScriptSerialization();
				},
				scopeId: SCOPE_ID,
				onDone: () => {
					finishScriptSerialization();
				}
			});
		},
		isDehydrated() {
			return _dehydrated;
		},
		isSerializationFinished() {
			return _serializationFinished;
		},
		reserveStreamFastPath() {
			if (!cleanupStarted && _serializationFinished && !streamFastPathReserved && renderFinishedListeners.length === 0 && !injectedHtmlBuffer && !scriptBuffer.hasPending()) {
				streamFastPathReserved = true;
				return true;
			}
			return false;
		},
		onInjectedHtml: (listener) => {
			if (cleanupStarted) return () => {};
			injectedHtmlListeners.push(listener);
			return () => removeListener(injectedHtmlListeners, listener);
		},
		onRenderFinished: (listener) => {
			if (cleanupStarted || streamFastPathReserved) return;
			renderFinishedListeners.push(listener);
		},
		onSerializationFinished: (listener) => {
			if (cleanupStarted) return () => {};
			if (_serializationFinished && !cleanupStarted) {
				try {
					listener();
				} catch (err) {
					console.error("Serialization listener error:", err);
				}
				return () => {};
			}
			serializationFinishedListeners.push(listener);
			return () => removeListener(serializationFinishedListeners, listener);
		},
		onCleanup: (listener) => {
			if (cleanupStarted) return;
			cleanupListeners.push(listener);
		},
		setRenderFinished: () => {
			if (cleanupStarted) return;
			scriptBuffer.liftBarrier();
			const listeners = renderFinishedListeners.slice();
			renderFinishedListeners.length = 0;
			for (const l of listeners) try {
				l();
			} catch (err) {
				console.error("Error in render finished listener:", err);
			}
			if (_serializationFinished) scriptBuffer.flush();
		},
		takeBufferedScripts() {
			const scripts = scriptBuffer.takeAll();
			if (!scripts) return void 0;
			return {
				tag: "script",
				attrs: {
					nonce: router.options.ssr?.nonce,
					className: "$tsr",
					id: TSR_SCRIPT_BARRIER_ID
				},
				children: scripts
			};
		},
		liftScriptBarrier() {
			scriptBuffer.liftBarrier();
		},
		takeBufferedHtml() {
			if (!injectedHtmlBuffer) return;
			const buffered = injectedHtmlBuffer;
			injectedHtmlBuffer = "";
			return buffered;
		},
		cleanup() {
			if (cleanupStarted) return;
			cleanupStarted = true;
			const listeners = cleanupListeners.slice();
			cleanupListeners.length = 0;
			for (const l of listeners) try {
				l();
			} catch (err) {
				console.error("Error in SSR cleanup listener:", err);
			}
			renderFinishedListeners.length = 0;
			injectedHtmlListeners.length = 0;
			serializationFinishedListeners.length = 0;
			injectedHtmlBuffer = "";
			scriptBuffer.cleanup();
			router.serverSsr = void 0;
		}
	};
	router.serverSsr = serverSsr;
	for (const listener of router.serverSsrLifecycle?.onServerSsrAttach ?? []) try {
		listener(serverSsr);
	} catch (err) {
		console.error("SSR attach listener error:", err);
	}
}
/**
* Get the origin for the request.
*
* SECURITY: We intentionally do NOT trust the Origin header for determining
* the router's origin. The Origin header can be spoofed by attackers, which
* could lead to SSRF-like vulnerabilities where redirects are constructed
* using a malicious origin (CVE-2024-34351).
*
* Instead, we derive the origin from request.url, which is typically set by
* the server infrastructure (not client-controlled headers).
*
* For applications behind proxies that need to trust forwarded headers,
* use the router's `origin` option to explicitly configure a trusted origin.
*/
function getOrigin(request) {
	try {
		return new URL(request.url).origin;
	} catch {}
	return "http://localhost";
}
function getNormalizedURL(url, base) {
	if (typeof url === "string") url = url.replace("\\", "%5C");
	const rawUrl = new URL(url, base);
	const { path: decodedPathname, handledProtocolRelativeURL } = decodePath(rawUrl.pathname);
	const searchParams = new URLSearchParams(rawUrl.search);
	const normalizedHref = decodedPathname + (searchParams.size > 0 ? "?" : "") + searchParams.toString() + rawUrl.hash;
	return {
		url: new URL(normalizedHref, rawUrl.origin),
		handledProtocolRelativeURL
	};
}
//#endregion
//#region node_modules/@tanstack/router-core/dist/esm/ssr/handlerCallback.js
function isSsrResponse(value) {
	return typeof value === "object" && value !== null && "response" in value && "serverSsrCleanup" in value;
}
function normalizeSsrResponse(result) {
	return isSsrResponse(result) ? result : {
		response: result,
		serverSsrCleanup: "none"
	};
}
function createSsrStreamResponse(router, response) {
	if (!response.body) throw new Error("Invariant failed: SSR stream response requires a body");
	let disposed = false;
	return {
		response,
		serverSsrCleanup: "stream",
		async dispose(reason) {
			if (disposed) return;
			disposed = true;
			try {
				await response.body.cancel(reason);
			} catch {}
			router.serverSsr?.cleanup();
		}
	};
}
async function replaceSsrResponse(result, response, reason) {
	const ssrResponse = normalizeSsrResponse(result);
	if (ssrResponse.serverSsrCleanup === "stream") await ssrResponse.dispose(reason);
	return {
		response,
		serverSsrCleanup: "none"
	};
}
async function stripSsrResponseBody(result, reason) {
	const ssrResponse = normalizeSsrResponse(result);
	if (ssrResponse.serverSsrCleanup === "stream") await ssrResponse.dispose(reason);
	return {
		response: new Response(null, ssrResponse.response),
		serverSsrCleanup: "none"
	};
}
function defineHandlerCallback(handler) {
	return handler;
}
//#endregion
//#region node_modules/cookie-es/dist/index.mjs
function splitSetCookieString(cookiesString) {
	if (Array.isArray(cookiesString)) return cookiesString.flatMap((c) => splitSetCookieString(c));
	if (typeof cookiesString !== "string") return [];
	const cookiesStrings = [];
	let pos = 0;
	let start;
	let ch;
	let lastComma;
	let nextStart;
	let cookiesSeparatorFound;
	const skipWhitespace = () => {
		while (pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))) pos += 1;
		return pos < cookiesString.length;
	};
	const notSpecialChar = () => {
		ch = cookiesString.charAt(pos);
		return ch !== "=" && ch !== ";" && ch !== ",";
	};
	while (pos < cookiesString.length) {
		start = pos;
		cookiesSeparatorFound = false;
		while (skipWhitespace()) {
			ch = cookiesString.charAt(pos);
			if (ch === ",") {
				lastComma = pos;
				pos += 1;
				skipWhitespace();
				nextStart = pos;
				while (pos < cookiesString.length && notSpecialChar()) pos += 1;
				if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
					cookiesSeparatorFound = true;
					pos = nextStart;
					cookiesStrings.push(cookiesString.slice(start, lastComma));
					start = pos;
				} else pos = lastComma + 1;
			} else pos += 1;
		}
		if (!cookiesSeparatorFound || pos >= cookiesString.length) cookiesStrings.push(cookiesString.slice(start));
	}
	return cookiesStrings;
}
//#endregion
//#region node_modules/@tanstack/router-core/dist/esm/ssr/headers.js
function toHeadersInstance(init) {
	if (init instanceof Headers) return init;
	else if (Array.isArray(init)) return new Headers(init);
	else if (typeof init === "object") return new Headers(init);
	else return null;
}
function mergeHeaders(...headers) {
	return headers.reduce((acc, header) => {
		const headersInstance = toHeadersInstance(header);
		if (!headersInstance) return acc;
		for (const [key, value] of headersInstance.entries()) if (key === "set-cookie") splitSetCookieString(value).forEach((cookie) => acc.append("set-cookie", cookie));
		else acc.set(key, value);
		return acc;
	}, new Headers());
}
//#endregion
//#region node_modules/@tanstack/router-core/dist/esm/ssr/createRequestHandler.js
function createRequestHandler({ createRouter, request, getRouterManifest }) {
	return async (cb) => {
		const router = createRouter();
		let responseOwnsCleanup = false;
		try {
			attachRouterServerSsrUtils({
				router,
				manifest: await getRouterManifest?.()
			});
			const { url } = getNormalizedURL(request.url, "http://localhost");
			const origin = getOrigin(request);
			const history = createMemoryHistory({ initialEntries: [url.href.replace(url.origin, "")] });
			router.update({
				history,
				origin: router.options.origin ?? origin
			});
			await router.load();
			await router.serverSsr?.dehydrate();
			const ssrResponse = normalizeSsrResponse(await cb({
				request,
				router,
				responseHeaders: getRequestHeaders({ router })
			}));
			responseOwnsCleanup = ssrResponse.serverSsrCleanup === "stream";
			return ssrResponse.response;
		} finally {
			if (!responseOwnsCleanup) router.serverSsr?.cleanup();
		}
	};
}
function getRequestHeaders(opts) {
	const matchHeaders = [];
	for (const match of opts.router.stores.matches.get()) matchHeaders.push(match.headers);
	const redirect = opts.router.stores.redirect.get();
	if (redirect) matchHeaders.push(redirect.headers);
	return mergeHeaders({ "Content-Type": "text/html; charset=UTF-8" }, ...matchHeaders);
}
//#endregion
//#region node_modules/@tanstack/router-core/dist/esm/ssr/transformStreamWithRouter.js
function transformReadableStreamWithRouter(router, routerStream, opts) {
	return transformStreamWithRouter(router, routerStream, opts);
}
function transformPipeableStreamWithRouter(router, routerStream, opts) {
	return Readable.fromWeb(transformStreamWithRouter(router, Readable.toWeb(routerStream), opts));
}
var MIN_CLOSING_TAG_LENGTH = 4;
var DEFAULT_SERIALIZATION_TIMEOUT_MS = 6e4;
var DEFAULT_LIFETIME_TIMEOUT_MS = DEFAULT_SERIALIZATION_TIMEOUT_MS * 2;
var MAX_LEFTOVER_CHARS = 2048;
var MAX_TAIL_CHARS = 64 * 1024;
var MAX_ROUTER_HTML_CHARS = 16 * 1024 * 1024;
var MAX_PENDING_WRITE_CHARS = 16 * 1024 * 1024;
var MergeState = {
	ReadingBody: 0,
	HoldingTail: 1,
	AppDone: 2,
	Draining: 3,
	Done: 4
};
var textEncoder = new TextEncoder();
var noop = () => {};
var resolvedPromise = Promise.resolve();
function findHtmlBoundary(str) {
	let lastClosingTagEnd = -1;
	let searchFrom = str.length - MIN_CLOSING_TAG_LENGTH;
	while (searchFrom >= 0) {
		const openSlash = str.lastIndexOf("</", searchFrom);
		if (openSlash === -1) break;
		if ((str.charCodeAt(openSlash + 2) | 32) === 98 && (str.charCodeAt(openSlash + 3) | 32) === 111 && (str.charCodeAt(openSlash + 4) | 32) === 100 && (str.charCodeAt(openSlash + 5) | 32) === 121 && str.charCodeAt(openSlash + 6) === 62) return -openSlash - 2;
		if (lastClosingTagEnd === -1) {
			let i = openSlash + 2;
			const startCode = str.charCodeAt(i);
			if (startCode >= 97 && startCode <= 122 || startCode >= 65 && startCode <= 90) {
				i++;
				while (i < str.length) {
					const code = str.charCodeAt(i);
					if (code >= 97 && code <= 122 || code >= 65 && code <= 90 || code >= 48 && code <= 57 || code === 95 || code === 58 || code === 46 || code === 45) i++;
					else break;
				}
				if (str.charCodeAt(i) === 62) lastClosingTagEnd = i + 1;
			}
		}
		searchFrom = openSlash - 1;
	}
	return lastClosingTagEnd;
}
function safeReleaseReader(reader) {
	try {
		reader.releaseLock();
		return true;
	} catch {
		return false;
	}
}
/**
* Cancel a reader without producing an unhandled rejection. `reader.cancel()`
* can reject (e.g. when the underlying source's cancel() throws), and
* downstream cancel() should still wait for upstream teardown when possible.
*/
function safeCancelReader(reader, reason) {
	let cancelPromise;
	try {
		cancelPromise = reader.cancel(reason);
	} catch {}
	if (!safeReleaseReader(reader) && cancelPromise) return cancelPromise.then(noop, noop).then(() => {
		safeReleaseReader(reader);
	});
	return cancelPromise ? cancelPromise.then(noop, noop) : resolvedPromise;
}
function createReaderState(appStream) {
	const reader = appStream.getReader();
	let released = false;
	return {
		reader,
		cancel: (reason) => {
			if (released) return resolvedPromise;
			released = true;
			return safeCancelReader(reader, reason);
		},
		release: () => {
			if (released) return;
			released = true;
			safeReleaseReader(reader);
		}
	};
}
function createAbortNotifier(opts) {
	let abortNotified = false;
	return (reason) => {
		if (abortNotified) return;
		abortNotified = true;
		try {
			opts?.onAbort?.(reason);
		} catch {}
	};
}
function transformStreamWithRouter(router, appStream, opts) {
	const serverSsr = router.serverSsr;
	if (!serverSsr) throw new Error("Invariant failed: router.serverSsr is required");
	if (serverSsr.reserveStreamFastPath()) return makeFastPathStream(appStream, opts, serverSsr);
	return makeMainStream(serverSsr, appStream, opts);
}
function makeFastPathStream(appStream, opts, serverSsr) {
	let cleanedUp = false;
	let controller;
	let state = MergeState.ReadingBody;
	let lifetimeTimeoutHandle;
	let stopListeningToInjectedHtml;
	const readerState = createReaderState(appStream);
	const notifyAbort = createAbortNotifier(opts);
	const isDone = () => state === MergeState.Done;
	let renderFinished = false;
	const finishSsrRendering = () => {
		if (!serverSsr || renderFinished) return true;
		renderFinished = true;
		try {
			serverSsr.setRenderFinished();
			return true;
		} catch (error) {
			safeError(error);
			cleanup(error);
			return false;
		}
	};
	const cleanup = (reason, cancelReader = true) => {
		if (cleanedUp) return resolvedPromise;
		cleanedUp = true;
		if (lifetimeTimeoutHandle !== void 0) {
			clearTimeout(lifetimeTimeoutHandle);
			lifetimeTimeoutHandle = void 0;
		}
		try {
			stopListeningToInjectedHtml?.();
		} catch {}
		stopListeningToInjectedHtml = void 0;
		if (cancelReader) notifyAbort(reason);
		const readerDone = cancelReader ? readerState.cancel(reason) : (readerState.release(), resolvedPromise);
		if (serverSsr) try {
			serverSsr.cleanup();
		} catch (error) {
			console.error("Error in SSR cleanup:", error);
		}
		return readerDone;
	};
	const safeClose = () => {
		if (isDone()) return;
		state = MergeState.Done;
		try {
			controller?.close();
		} catch {}
	};
	const safeError = (error) => {
		if (isDone()) return;
		state = MergeState.Done;
		try {
			controller?.error(error);
		} catch {}
	};
	if (serverSsr) stopListeningToInjectedHtml = serverSsr.onInjectedHtml(() => {
		const err = /* @__PURE__ */ new Error("SSR router HTML injected during fast path");
		safeError(err);
		cleanup(err);
	});
	const lifetimeMs = opts?.lifetimeMs ?? DEFAULT_LIFETIME_TIMEOUT_MS;
	lifetimeTimeoutHandle = setTimeout(() => {
		if (!cleanedUp && !isDone()) {
			const err = /* @__PURE__ */ new Error("Stream lifetime exceeded");
			console.warn(`SSR stream transform exceeded maximum lifetime (${lifetimeMs}ms), forcing cleanup`);
			safeError(err);
			cleanup(err);
		}
	}, lifetimeMs);
	return new ReadableStream$1({
		start(c) {
			controller = c;
		},
		async pull(c) {
			if (cleanedUp || isDone()) return;
			try {
				const { done, value } = await readerState.reader.read();
				if (!done) {
					if (!cleanedUp && !isDone()) c.enqueue(value);
					return;
				}
				if (cleanedUp || isDone()) return;
				if (!finishSsrRendering()) return;
				safeClose();
				return cleanup(void 0, false);
			} catch (error) {
				if (cleanedUp) return;
				console.error("Error reading appStream:", error);
				if (state < MergeState.AppDone) try {
					serverSsr?.setRenderFinished();
				} catch {}
				safeError(error);
				return cleanup(error);
			} finally {
				if (cleanedUp || isDone()) readerState.release();
			}
		},
		cancel(reason) {
			state = MergeState.Done;
			return cleanup(reason);
		}
	});
}
function makeMainStream(serverSsr, appStream, opts) {
	let stopListeningToInjectedHtml;
	let stopListeningToSerializationFinished;
	let serializationTimeoutHandle;
	let lifetimeTimeoutHandle;
	let cleanedUp = false;
	let controller;
	let closeWhenDrained = false;
	let state = MergeState.ReadingBody;
	const readerState = createReaderState(appStream);
	const notifyAbort = createAbortNotifier(opts);
	const pendingWrites = [];
	let pendingWriteHead = 0;
	let pendingWriteChars = 0;
	function clearPending() {
		pendingWrites.length = 0;
		pendingWriteHead = 0;
		pendingWriteChars = 0;
	}
	let drainResolve = null;
	const waitForDrain = () => new Promise((r) => {
		drainResolve = r;
	});
	const signalDrain = () => {
		if (drainResolve) {
			const r = drainResolve;
			drainResolve = null;
			r();
		}
	};
	const isDone = () => state === MergeState.Done;
	function drainPending() {
		if (!controller || isDone()) return;
		while (pendingWriteHead < pendingWrites.length) {
			const ds = controller.desiredSize;
			if (ds !== null && ds <= 0) return;
			const next = pendingWrites[pendingWriteHead];
			pendingWrites[pendingWriteHead] = "";
			pendingWriteHead++;
			pendingWriteChars -= next.length;
			try {
				controller.enqueue(textEncoder.encode(next));
			} catch (error) {
				safeError(error);
				cleanup(error);
				return;
			}
		}
		if (pendingWriteHead >= pendingWrites.length) {
			pendingWrites.length = 0;
			pendingWriteHead = 0;
		}
		if (closeWhenDrained && pendingWriteHead >= pendingWrites.length) {
			closeWhenDrained = false;
			safeClose();
			cleanup(void 0, false);
		}
	}
	/**
	* Enqueue a string chunk through the backpressure queue. Stored as a
	* string and encoded only when the downstream actually accepts the chunk
	* — keeps native-memory pressure inside the controller's queue (which
	* honors desiredSize) rather than ours.
	*/
	function writeChunk(chunk) {
		if (cleanedUp || isDone()) return;
		if (!chunk.length) return;
		if (pendingWriteChars + chunk.length > MAX_PENDING_WRITE_CHARS) {
			const err = /* @__PURE__ */ new Error("SSR stream pending output exceeded maximum buffer");
			safeError(err);
			cleanup(err);
			return;
		}
		pendingWrites.push(chunk);
		pendingWriteChars += chunk.length;
		drainPending();
	}
	function safeClose() {
		if (isDone()) return;
		state = MergeState.Done;
		try {
			controller?.close();
		} catch {}
	}
	function safeError(error) {
		if (isDone()) return;
		state = MergeState.Done;
		try {
			controller?.error(error);
		} catch {}
	}
	/**
	* Cleanup with guards; must be idempotent.
	*/
	function cleanup(reason, cancelReader = true) {
		if (cleanedUp) return resolvedPromise;
		cleanedUp = true;
		try {
			stopListeningToInjectedHtml?.();
			stopListeningToSerializationFinished?.();
		} catch {}
		stopListeningToInjectedHtml = void 0;
		stopListeningToSerializationFinished = void 0;
		if (serializationTimeoutHandle !== void 0) {
			clearTimeout(serializationTimeoutHandle);
			serializationTimeoutHandle = void 0;
		}
		if (lifetimeTimeoutHandle !== void 0) {
			clearTimeout(lifetimeTimeoutHandle);
			lifetimeTimeoutHandle = void 0;
		}
		clearPendingRouterHtml();
		leftover = "";
		pendingTail = "";
		clearPending();
		if (cancelReader) notifyAbort(reason);
		const readerDone = cancelReader ? readerState.cancel(reason) : (readerState.release(), resolvedPromise);
		signalDrain();
		try {
			serverSsr.cleanup();
		} catch (error) {
			console.error("Error in SSR cleanup:", error);
		}
		return readerDone;
	}
	const textDecoder = new TextDecoder();
	const pendingRouterHtml = [];
	let pendingRouterHtmlChars = 0;
	let leftover = "";
	let pendingTail = "";
	let streamBarrierLifted = false;
	let streamBarrierMarkerSeen = false;
	let serializationFinished = false;
	function noteBarrierMarker(chunk) {
		if (streamBarrierMarkerSeen) return;
		if (chunk.includes("$tsr-stream-barrier")) streamBarrierMarkerSeen = true;
	}
	function liftBarrierAfterBoundary() {
		if (streamBarrierLifted) return;
		if (!streamBarrierMarkerSeen) return;
		streamBarrierLifted = true;
		serverSsr.liftScriptBarrier();
	}
	const stream = new ReadableStream$1({
		start(c) {
			controller = c;
			drainPending();
		},
		pull() {
			drainPending();
			signalDrain();
		},
		cancel(reason) {
			state = MergeState.Done;
			return cleanup(reason);
		}
	});
	function drainRouterHtml() {
		if (cleanedUp || isDone()) return;
		let html;
		try {
			html = serverSsr.takeBufferedHtml();
		} catch (error) {
			safeError(error);
			cleanup(error);
			return;
		}
		if (!html) return;
		if (state >= MergeState.Draining) {
			const err = /* @__PURE__ */ new Error("SSR router HTML injected after stream finalization");
			safeError(err);
			cleanup(err);
			return;
		}
		if (state === MergeState.HoldingTail) {
			flushPendingRouterHtml();
			writeChunk(html);
		} else {
			if (pendingRouterHtmlChars + html.length > MAX_ROUTER_HTML_CHARS) {
				const err = /* @__PURE__ */ new Error("SSR router HTML exceeded maximum buffer");
				safeError(err);
				cleanup(err);
				return;
			}
			pendingRouterHtml.push(html);
			pendingRouterHtmlChars += html.length;
		}
	}
	function flushPendingRouterHtml() {
		if (!pendingRouterHtml.length) return;
		for (const html of pendingRouterHtml) writeChunk(html);
		clearPendingRouterHtml();
	}
	function clearPendingRouterHtml() {
		pendingRouterHtml.length = 0;
		pendingRouterHtmlChars = 0;
	}
	function appendTail(chunk) {
		pendingTail += chunk;
		if (pendingTail.length > MAX_TAIL_CHARS) throw new Error("SSR stream tail exceeded maximum buffer");
	}
	function waitForBackpressure() {
		return !!(controller && controller.desiredSize !== null && controller.desiredSize <= 0);
	}
	function startSerializationTimeout() {
		if (cleanedUp || isDone()) return;
		if (serializationTimeoutHandle !== void 0) return;
		const timeoutMs = opts?.timeoutMs ?? DEFAULT_SERIALIZATION_TIMEOUT_MS;
		serializationTimeoutHandle = setTimeout(() => {
			if (!cleanedUp && !isDone()) {
				const err = /* @__PURE__ */ new Error("Serialization timeout after app render finished");
				console.error("Serialization timeout after app render finished");
				safeError(err);
				cleanup(err);
			}
		}, timeoutMs);
	}
	/**
	* Finish only when app done and serialization complete. Queues final
	* output and requests close-when-drained so we don't close ahead of
	* pending writes still waiting on downstream capacity.
	*/
	function tryFinish() {
		if (state !== MergeState.AppDone || !serializationFinished) return;
		if (cleanedUp || isDone()) return;
		if (serializationTimeoutHandle !== void 0) {
			clearTimeout(serializationTimeoutHandle);
			serializationTimeoutHandle = void 0;
		}
		drainRouterHtml();
		if (cleanedUp || isDone()) return;
		const decoderRemainder = textDecoder.decode();
		if (leftover) writeChunk(leftover);
		if (cleanedUp || isDone()) return;
		if (decoderRemainder) writeChunk(decoderRemainder);
		if (cleanedUp || isDone()) return;
		flushPendingRouterHtml();
		if (cleanedUp || isDone()) return;
		if (pendingTail) writeChunk(pendingTail);
		if (cleanedUp || isDone()) return;
		leftover = "";
		pendingTail = "";
		state = MergeState.Draining;
		closeWhenDrained = true;
		drainPending();
	}
	function finishAppRendering() {
		if (state >= MergeState.AppDone) return;
		state = MergeState.AppDone;
		try {
			serverSsr.setRenderFinished();
		} catch (error) {
			safeError(error);
			cleanup(error);
			return;
		}
		drainRouterHtml();
		if (cleanedUp || isDone()) return;
		serializationFinished = serializationFinished || serverSsr.isSerializationFinished();
		if (serializationFinished) tryFinish();
		else startSerializationTimeout();
	}
	const timeoutMs = opts?.timeoutMs ?? DEFAULT_SERIALIZATION_TIMEOUT_MS;
	const lifetimeMs = opts?.lifetimeMs ?? timeoutMs * 2;
	lifetimeTimeoutHandle = setTimeout(() => {
		if (!cleanedUp && !isDone()) {
			const err = /* @__PURE__ */ new Error("Stream lifetime exceeded");
			console.warn(`SSR stream transform exceeded maximum lifetime (${lifetimeMs}ms), forcing cleanup`);
			safeError(err);
			cleanup(err);
		}
	}, lifetimeMs);
	stopListeningToInjectedHtml = serverSsr.onInjectedHtml(() => {
		drainRouterHtml();
	});
	stopListeningToSerializationFinished = serverSsr.onSerializationFinished(() => {
		serializationFinished = true;
		drainRouterHtml();
		tryFinish();
	});
	drainRouterHtml();
	if (cleanedUp || isDone()) return stream;
	serializationFinished = serializationFinished || serverSsr.isSerializationFinished();
	if (serializationFinished) {
		drainRouterHtml();
		if (cleanedUp || isDone()) return stream;
	}
	(async () => {
		try {
			while (true) {
				if (waitForBackpressure()) {
					await waitForDrain();
					if (cleanedUp || isDone()) return;
				}
				const { done, value } = await readerState.reader.read();
				if (done) break;
				if (cleanedUp || isDone()) return;
				const text = typeof value === "string" ? value : textDecoder.decode(value, { stream: true });
				const chunkString = leftover ? leftover + text : text;
				if (state >= MergeState.HoldingTail) {
					appendTail(chunkString);
					leftover = "";
					continue;
				}
				const boundary = findHtmlBoundary(chunkString);
				if (boundary < -1) {
					const bodyEndIndex = -boundary - 2;
					state = MergeState.HoldingTail;
					appendTail(chunkString.slice(bodyEndIndex));
					const bodyChunk = chunkString.slice(0, bodyEndIndex);
					writeChunk(bodyChunk);
					if (cleanedUp || isDone()) return;
					noteBarrierMarker(bodyChunk);
					liftBarrierAfterBoundary();
					if (cleanedUp || isDone()) return;
					flushPendingRouterHtml();
					leftover = "";
					continue;
				}
				const lastClosingTagEnd = boundary;
				if (lastClosingTagEnd > 0) {
					const safeChunk = chunkString.slice(0, lastClosingTagEnd);
					writeChunk(safeChunk);
					if (cleanedUp || isDone()) return;
					noteBarrierMarker(safeChunk);
					liftBarrierAfterBoundary();
					if (cleanedUp || isDone()) return;
					flushPendingRouterHtml();
					leftover = chunkString.slice(lastClosingTagEnd);
					if (leftover.length > MAX_LEFTOVER_CHARS) {
						noteBarrierMarker(leftover);
						writeChunk(leftover.slice(0, leftover.length - MAX_LEFTOVER_CHARS));
						leftover = leftover.slice(-2048);
					}
				} else {
					const combined = chunkString;
					if (combined.length > MAX_LEFTOVER_CHARS) {
						noteBarrierMarker(combined);
						const flushUpto = combined.length - MAX_LEFTOVER_CHARS;
						writeChunk(combined.slice(0, flushUpto));
						leftover = combined.slice(flushUpto);
					} else leftover = combined;
				}
			}
			if (cleanedUp || isDone()) return;
			finishAppRendering();
		} catch (error) {
			if (cleanedUp) return;
			console.error("Error reading appStream:", error);
			if (state < MergeState.AppDone) try {
				serverSsr.setRenderFinished();
			} catch {}
			safeError(error);
			cleanup(error);
		} finally {
			readerState.release();
		}
	})().catch((error) => {
		if (cleanedUp) return;
		console.error("Error in stream transform:", error);
		safeError(error);
		cleanup(error);
	});
	return stream;
}
//#endregion
//#region node_modules/@tanstack/router-core/dist/esm/ssr/server.js
var server_exports = /* @__PURE__ */ __exportAll({
	attachRouterServerSsrUtils: () => attachRouterServerSsrUtils,
	createRequestHandler: () => createRequestHandler,
	createSsrStreamResponse: () => createSsrStreamResponse,
	defineHandlerCallback: () => defineHandlerCallback,
	getNormalizedURL: () => getNormalizedURL,
	getOrigin: () => getOrigin,
	isSsrResponse: () => isSsrResponse,
	normalizeSsrResponse: () => normalizeSsrResponse,
	replaceSsrResponse: () => replaceSsrResponse,
	stripSsrResponseBody: () => stripSsrResponseBody,
	transformPipeableStreamWithRouter: () => transformPipeableStreamWithRouter,
	transformReadableStreamWithRouter: () => transformReadableStreamWithRouter,
	transformStreamWithRouter: () => transformStreamWithRouter
});
//#endregion
export { preloadWarning as A, notFound as B, BaseRoute as C, getStylesheetHref as D, getScriptPreloadAttrs as E, executeRewriteInput as F, createControlledPromise as G, removeTrailingSlash as H, isRedirect as I, functionalUpdate as J, deepEqual as K, isResolvedRedirect as L, getLocationChangeInfo as M, createNonReactiveMutableStore as N, resolveManifestAssetLink as O, createNonReactiveReadonlyStore as P, replaceEqualDeep as Q, rootRouteId as R, BaseRootRoute as S, getAssetCrossOrigin as T, trimPathRight as U, exactPathTest as V, invariant as W, isDangerousProtocol as X, hasKeys as Y, isModuleNotFoundError as Z, createSerializationAdapter as _, createSsrStreamResponse as a, iu as b, normalizeSsrResponse as c, attachRouterServerSsrUtils as d, getNormalizedURL as f, createRawStreamRPCPlugin as g, defaultSerovalPlugins as h, mergeHeaders as i, RouterCore as j, resolveManifestCssLink as k, replaceSsrResponse as l, getScrollRestorationScriptForRouter as m, transformPipeableStreamWithRouter as n, defineHandlerCallback as o, getOrigin as p, escapeHtml as q, transformReadableStreamWithRouter as r, isSsrResponse as s, server_exports as t, stripSsrResponseBody as u, makeSerovalPlugin as v, appendUniqueUserTags as w, su as x, Pu as y, isNotFound as z };
