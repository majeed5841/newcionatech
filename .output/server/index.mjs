globalThis.__nitro_main__ = import.meta.url;
import { a as FastResponse, n as HTTPError, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/assets/about-B-hHi0Sh.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"49f9-9aKbvrp6bbIqesiu4H5nyiwKbhw\"",
		"mtime": "2026-07-06T12:07:28.821Z",
		"size": 18937,
		"path": "../public/assets/about-B-hHi0Sh.js"
	},
	"/assets/award-Oi1nkgaT.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"112-Ia2pqbOGZWJ3hhP5ZC4MS83AG9A\"",
		"mtime": "2026-07-06T12:07:28.823Z",
		"size": 274,
		"path": "../public/assets/award-Oi1nkgaT.js"
	},
	"/assets/building-2-DKfV41LP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"17f-4C3u6LRlbwz5ObuKj6m7+87hcf4\"",
		"mtime": "2026-07-06T12:07:28.828Z",
		"size": 383,
		"path": "../public/assets/building-2-DKfV41LP.js"
	},
	"/assets/calendar-B1l76TuW.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"101-UIzvR7TUFOSirr9tog0ZG1thfnc\"",
		"mtime": "2026-07-06T12:07:28.830Z",
		"size": 257,
		"path": "../public/assets/calendar-B1l76TuW.js"
	},
	"/assets/chart-line-ucws6nfw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b8-4+WXziewubr4lhc9IW19BhBVFQg\"",
		"mtime": "2026-07-06T12:07:28.833Z",
		"size": 184,
		"path": "../public/assets/chart-line-ucws6nfw.js"
	},
	"/assets/ciona-logo-8KIyASCT.png": {
		"type": "image/png",
		"etag": "\"4f6f-QvV8+jTanIL59iFP1asXqTomXGg\"",
		"mtime": "2026-07-06T12:07:28.935Z",
		"size": 20335,
		"path": "../public/assets/ciona-logo-8KIyASCT.png"
	},
	"/assets/circle-question-mark-C26iIL-d.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f8-rCuzv60vBrMeE+sqj5mWBPmoJAg\"",
		"mtime": "2026-07-06T12:07:28.836Z",
		"size": 248,
		"path": "../public/assets/circle-question-mark-C26iIL-d.js"
	},
	"/assets/clock-LFCcagPA.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a9-9xK0VAwv84247QwmgSmPVRG3oW4\"",
		"mtime": "2026-07-06T12:07:28.842Z",
		"size": 169,
		"path": "../public/assets/clock-LFCcagPA.js"
	},
	"/assets/contact-59UE0vuf.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3fda-16PqPSExKGKlVC8g7C1ynSmc8Lg\"",
		"mtime": "2026-07-06T12:07:28.845Z",
		"size": 16346,
		"path": "../public/assets/contact-59UE0vuf.js"
	},
	"/assets/createLucideIcon-C-QYgx1g.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"267a-Iy/L6BXC9AXCF+8xoycQZ38CORw\"",
		"mtime": "2026-07-06T12:07:28.847Z",
		"size": 9850,
		"path": "../public/assets/createLucideIcon-C-QYgx1g.js"
	},
	"/assets/handshake-DIR83S8P.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1be-bBvuJf/GEe9HImDiwWL5HnqJPpg\"",
		"mtime": "2026-07-06T12:07:28.853Z",
		"size": 446,
		"path": "../public/assets/handshake-DIR83S8P.js"
	},
	"/assets/globe-OjIBEYmW.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1b8-CEGR9GiIQNjbMz2tn5O4jpua06g\"",
		"mtime": "2026-07-06T12:07:28.851Z",
		"size": 440,
		"path": "../public/assets/globe-OjIBEYmW.js"
	},
	"/assets/portfolio-hfSUsF4O.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1906-obTKQnGIr+woik45KehYvNsrwXQ\"",
		"mtime": "2026-07-06T12:07:28.887Z",
		"size": 6406,
		"path": "../public/assets/portfolio-hfSUsF4O.js"
	},
	"/assets/portfolio-L2mQ00aj.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"29bd-5RUfo0SILGDMazuETpt/Uvq0/SE\"",
		"mtime": "2026-07-06T12:07:28.854Z",
		"size": 10685,
		"path": "../public/assets/portfolio-L2mQ00aj.js"
	},
	"/assets/index-DNmJpN5t.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"59a16-q9NqP4A8OWrz0E7Da9IMmXStpxw\"",
		"mtime": "2026-07-06T12:07:28.816Z",
		"size": 367126,
		"path": "../public/assets/index-DNmJpN5t.js"
	},
	"/assets/pricing-Buu-Gcfa.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"466d-xj/qfrsNngYR6B1nih7xr675tww\"",
		"mtime": "2026-07-06T12:07:28.890Z",
		"size": 18029,
		"path": "../public/assets/pricing-Buu-Gcfa.js"
	},
	"/assets/rocket-D6MKGwhf.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1c4-1tedo1r6Nep2F9p6LOFXncuqycs\"",
		"mtime": "2026-07-06T12:07:28.895Z",
		"size": 452,
		"path": "../public/assets/rocket-D6MKGwhf.js"
	},
	"/assets/proxy-D39adK2C.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1dad3-xXHBgCMT9qmng4jneBxtdHpra5I\"",
		"mtime": "2026-07-06T12:07:28.893Z",
		"size": 121555,
		"path": "../public/assets/proxy-D39adK2C.js"
	},
	"/assets/routes-BdXgXXYt.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a660-Cp2eZy5lIfuwVqFG0J0nbKuU3SQ\"",
		"mtime": "2026-07-06T12:07:28.897Z",
		"size": 42592,
		"path": "../public/assets/routes-BdXgXXYt.js"
	},
	"/assets/services-DfUHCSKL.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"839-dfnG92Mv0vK0avr0+W8ocETAWWI\"",
		"mtime": "2026-07-06T12:07:28.920Z",
		"size": 2105,
		"path": "../public/assets/services-DfUHCSKL.js"
	},
	"/assets/services.google-business-profile-DXapLLL6.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4dd2-ItI3b9cxnyd/ouxT90TPbltBOFc\"",
		"mtime": "2026-07-06T12:07:28.924Z",
		"size": 19922,
		"path": "../public/assets/services.google-business-profile-DXapLLL6.js"
	},
	"/assets/services._slug-86lpyAI4.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1ba-LzRtrRgHXPKoaUhLUFapAXRDRug\"",
		"mtime": "2026-07-06T12:07:28.921Z",
		"size": 442,
		"path": "../public/assets/services._slug-86lpyAI4.js"
	},
	"/assets/shield-zdL6kxqO.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"110-2CCHJ5BdGkt0abHWw++Zh6rCQho\"",
		"mtime": "2026-07-06T12:07:28.926Z",
		"size": 272,
		"path": "../public/assets/shield-zdL6kxqO.js"
	},
	"/assets/services._slug-CbCfx_jB.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"18016-FGaEUujXoSfErxKoxkwtqcfVGAY\"",
		"mtime": "2026-07-06T12:07:28.922Z",
		"size": 98326,
		"path": "../public/assets/services._slug-CbCfx_jB.js"
	},
	"/assets/target-BPmtljXN.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e2-BlDL6NdopgQAc5PcfKytSN9wMN8\"",
		"mtime": "2026-07-06T12:07:28.927Z",
		"size": 226,
		"path": "../public/assets/target-BPmtljXN.js"
	},
	"/assets/styles-BSh4-0sN.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"1b231-uQqB+JyW+vDofYvnmeTw/bFz7Uk\"",
		"mtime": "2026-07-06T12:07:28.938Z",
		"size": 111153,
		"path": "../public/assets/styles-BSh4-0sN.css"
	},
	"/assets/Testimonials-BMkXJ0wl.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3a6c-J5/6rvcGUjDGbFU3sGG0epAjEI4\"",
		"mtime": "2026-07-06T12:07:28.818Z",
		"size": 14956,
		"path": "../public/assets/Testimonials-BMkXJ0wl.js"
	},
	"/assets/trending-up-Dx9oSK2q.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"af-QFp48NGGGvgY6i2/05nJpAHHDD4\"",
		"mtime": "2026-07-06T12:07:28.928Z",
		"size": 175,
		"path": "../public/assets/trending-up-Dx9oSK2q.js"
	},
	"/assets/users-BpgutlTh.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"132-JO0b5RoD8sx1HUnVf0zg24uEwjs\"",
		"mtime": "2026-07-06T12:07:28.929Z",
		"size": 306,
		"path": "../public/assets/users-BpgutlTh.js"
	},
	"/assets/utensils-oCZut_Ze.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b98-tyZ4xPRRqdWumddXa/2ltfIO4VY\"",
		"mtime": "2026-07-06T12:07:28.931Z",
		"size": 2968,
		"path": "../public/assets/utensils-oCZut_Ze.js"
	},
	"/assets/zap-CBpOo2jb.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"183-uu2Yops0E3p6PY72NOdu+0N/rnQ\"",
		"mtime": "2026-07-06T12:07:28.933Z",
		"size": 387,
		"path": "../public/assets/zap-CBpOo2jb.js"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"17-ZZkCVrbr4BSdjt/K43J0tq8+Qq4\"",
		"mtime": "2026-07-04T22:28:42.284Z",
		"size": 23,
		"path": "../public/robots.txt"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_qdXmjZ = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_qdXmjZ
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
