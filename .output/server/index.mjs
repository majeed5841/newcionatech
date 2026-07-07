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
	"/assets/about-DyRdNxcR.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4a20-igUgNiLFlkXkoyk6ZNYlX34o83c\"",
		"mtime": "2026-07-07T00:39:47.738Z",
		"size": 18976,
		"path": "../public/assets/about-DyRdNxcR.js"
	},
	"/assets/building-2-CapsX892.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"17f-kGi4H3t3ShWnlukydfUEV+GrQm4\"",
		"mtime": "2026-07-07T00:39:47.740Z",
		"size": 383,
		"path": "../public/assets/building-2-CapsX892.js"
	},
	"/assets/calendar-BFiKv9su.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"101-OjWi+iqvmz6BSX8l+QW81/15a9U\"",
		"mtime": "2026-07-07T00:39:47.748Z",
		"size": 257,
		"path": "../public/assets/calendar-BFiKv9su.js"
	},
	"/assets/chart-line-0JQHfMXB.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b8-P3eMWR5l5IVlhQ+hMiXg2ZrZDZs\"",
		"mtime": "2026-07-07T00:39:47.748Z",
		"size": 184,
		"path": "../public/assets/chart-line-0JQHfMXB.js"
	},
	"/assets/button-fuhyvuw9.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7e32-z4E3JDngnjzq8gK0c1eZb+heEtA\"",
		"mtime": "2026-07-07T00:39:47.747Z",
		"size": 32306,
		"path": "../public/assets/button-fuhyvuw9.js"
	},
	"/assets/award--Ok54kXk.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"112-f4QvSn3FI6h3Xo/DDhE77N7GBqE\"",
		"mtime": "2026-07-07T00:39:47.739Z",
		"size": 274,
		"path": "../public/assets/award--Ok54kXk.js"
	},
	"/assets/ciona-logo-8KIyASCT.png": {
		"type": "image/png",
		"etag": "\"4f6f-QvV8+jTanIL59iFP1asXqTomXGg\"",
		"mtime": "2026-07-07T00:39:47.771Z",
		"size": 20335,
		"path": "../public/assets/ciona-logo-8KIyASCT.png"
	},
	"/assets/circle-question-mark-D6-oc5eF.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f8-yN0NUuMgPkNlFsUazhQznlzwKNU\"",
		"mtime": "2026-07-07T00:39:47.749Z",
		"size": 248,
		"path": "../public/assets/circle-question-mark-D6-oc5eF.js"
	},
	"/assets/clock-6-gyif_i.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a9-ltdFrS0Zzz9dBOXmbtuKbhJ38pM\"",
		"mtime": "2026-07-07T00:39:47.749Z",
		"size": 169,
		"path": "../public/assets/clock-6-gyif_i.js"
	},
	"/assets/consulting-DuV1iB9y.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"67e-UFfZ354axfwXUU2mHYbWaFrSvWU\"",
		"mtime": "2026-07-07T00:39:47.751Z",
		"size": 1662,
		"path": "../public/assets/consulting-DuV1iB9y.js"
	},
	"/assets/contact-po9pWIi4.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4001-G2/++tU2/oQydmKHBsrRlPgHVaM\"",
		"mtime": "2026-07-07T00:39:47.752Z",
		"size": 16385,
		"path": "../public/assets/contact-po9pWIi4.js"
	},
	"/assets/createLucideIcon-B_1GbDvl.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4ab-Y4enwiXY2yAcF1Gu2b12sxHBTW8\"",
		"mtime": "2026-07-07T00:39:47.752Z",
		"size": 1195,
		"path": "../public/assets/createLucideIcon-B_1GbDvl.js"
	},
	"/assets/globe-D1W27YRR.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1b8-kXcktgpE2iy6OkN0DCWJRpmXYCc\"",
		"mtime": "2026-07-07T00:39:47.753Z",
		"size": 440,
		"path": "../public/assets/globe-D1W27YRR.js"
	},
	"/assets/handshake-CzyOCMpm.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1be-eKLzsVbW8pJlulSjQ3Knms8/5II\"",
		"mtime": "2026-07-07T00:39:47.754Z",
		"size": 446,
		"path": "../public/assets/handshake-CzyOCMpm.js"
	},
	"/assets/jsx-runtime-D8nDyRPw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2210-qrBAUPDOR8ROKpBVNEla8AGnGKU\"",
		"mtime": "2026-07-07T00:39:47.754Z",
		"size": 8720,
		"path": "../public/assets/jsx-runtime-D8nDyRPw.js"
	},
	"/assets/portfolio-DxdUeV-2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"29e4-jqqmAhs0RzM2GtyRA/Kei3man9E\"",
		"mtime": "2026-07-07T00:39:47.755Z",
		"size": 10724,
		"path": "../public/assets/portfolio-DxdUeV-2.js"
	},
	"/assets/portfolio-hfSUsF4O.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1906-obTKQnGIr+woik45KehYvNsrwXQ\"",
		"mtime": "2026-07-07T00:39:47.756Z",
		"size": 6406,
		"path": "../public/assets/portfolio-hfSUsF4O.js"
	},
	"/assets/pricing-D8oguLz-.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4694-EWe1F9Tqn4xtJ6FT+X/+kTiSWL4\"",
		"mtime": "2026-07-07T00:39:47.757Z",
		"size": 18068,
		"path": "../public/assets/pricing-D8oguLz-.js"
	},
	"/assets/rocket-CaNziVmf.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1c4-d9H0PiMyFMmAzJrMYOq5+PstIYA\"",
		"mtime": "2026-07-07T00:39:47.759Z",
		"size": 452,
		"path": "../public/assets/rocket-CaNziVmf.js"
	},
	"/assets/routes-CRNh227U.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a88d-pXG6Q48hK7rvw5shZafLhlqvBq0\"",
		"mtime": "2026-07-07T00:39:47.760Z",
		"size": 43149,
		"path": "../public/assets/routes-CRNh227U.js"
	},
	"/assets/services-CKT__hVo.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5c1-Apoogun7gycBS6+ZY+zz9JwTtII\"",
		"mtime": "2026-07-07T00:39:47.760Z",
		"size": 1473,
		"path": "../public/assets/services-CKT__hVo.js"
	},
	"/assets/proxy-CJpc90uQ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1dafa-iGTk8Nn9m3fRUqaReSg8GZefqkk\"",
		"mtime": "2026-07-07T00:39:47.758Z",
		"size": 121594,
		"path": "../public/assets/proxy-CJpc90uQ.js"
	},
	"/assets/services.google-business-profile-gN6SVhgw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4df9-ksXZW4BWKkLsp4jsu55q8dc9giw\"",
		"mtime": "2026-07-07T00:39:47.762Z",
		"size": 19961,
		"path": "../public/assets/services.google-business-profile-gN6SVhgw.js"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"17-ZZkCVrbr4BSdjt/K43J0tq8+Qq4\"",
		"mtime": "2026-07-04T22:28:42.284Z",
		"size": 23,
		"path": "../public/robots.txt"
	},
	"/assets/index-g5XH2sCQ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"59bad-g+eYNQlU1IF+cQEeYBkOTYwaX30\"",
		"mtime": "2026-07-07T00:39:47.736Z",
		"size": 367533,
		"path": "../public/assets/index-g5XH2sCQ.js"
	},
	"/assets/services._slug-CcuqTj8q.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1b5-KesC311bjZIsta/WVNx/j3Mhfaw\"",
		"mtime": "2026-07-07T00:39:47.762Z",
		"size": 437,
		"path": "../public/assets/services._slug-CcuqTj8q.js"
	},
	"/assets/shield-DsQSZuZY.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"110-pb0wCrsBS7ER5c9rdXigim+tnao\"",
		"mtime": "2026-07-07T00:39:47.763Z",
		"size": 272,
		"path": "../public/assets/shield-DsQSZuZY.js"
	},
	"/assets/services._slug-Bd12JzDU.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1803d-cnuX3LoYhFfkJyrG2izDIw7snWM\"",
		"mtime": "2026-07-07T00:39:47.761Z",
		"size": 98365,
		"path": "../public/assets/services._slug-Bd12JzDU.js"
	},
	"/assets/target-Bob8ye5u.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e2-UyrKHWrPIz7WrkIJewsMwHWudyA\"",
		"mtime": "2026-07-07T00:39:47.764Z",
		"size": 226,
		"path": "../public/assets/target-Bob8ye5u.js"
	},
	"/assets/styles-CFPV_Rmk.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"1bac1-e1DlCzzjXQ+jRF12/8q7QmYRgoM\"",
		"mtime": "2026-07-07T00:39:47.771Z",
		"size": 113345,
		"path": "../public/assets/styles-CFPV_Rmk.css"
	},
	"/assets/trending-up-DBINS38T.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"af-WYmECTYCToQjMx6L/+tD+ybJmpY\"",
		"mtime": "2026-07-07T00:39:47.766Z",
		"size": 175,
		"path": "../public/assets/trending-up-DBINS38T.js"
	},
	"/assets/users-Bgkhatjh.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"132-OFkfK4SXQV8Wb+ei2ReUKN6rvT4\"",
		"mtime": "2026-07-07T00:39:47.768Z",
		"size": 306,
		"path": "../public/assets/users-Bgkhatjh.js"
	},
	"/assets/ui-ux-design-C57RXuNn.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"65d-qqVYP1RKsgfz9fAE+F0crd8zp+M\"",
		"mtime": "2026-07-07T00:39:47.767Z",
		"size": 1629,
		"path": "../public/assets/ui-ux-design-C57RXuNn.js"
	},
	"/assets/utensils-mKPsZ13p.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b98-bAkXfnX14zFa8SxUi7SVU9v27c8\"",
		"mtime": "2026-07-07T00:39:47.769Z",
		"size": 2968,
		"path": "../public/assets/utensils-mKPsZ13p.js"
	},
	"/assets/Testimonials-D8PwXK64.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3a93-eecPJVrujBRkRgS6LATaU8uCozE\"",
		"mtime": "2026-07-07T00:39:47.738Z",
		"size": 14995,
		"path": "../public/assets/Testimonials-D8PwXK64.js"
	},
	"/assets/web-development-C3TuKH4b.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"67f-ZOKLIgMA5AVxAIrKOpsNqSq9ca8\"",
		"mtime": "2026-07-07T00:39:47.769Z",
		"size": 1663,
		"path": "../public/assets/web-development-C3TuKH4b.js"
	},
	"/assets/zap-B4gqFVJ7.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"183-d36/SfKHpeu+QiDuqAgI3kbs2JY\"",
		"mtime": "2026-07-07T00:39:47.770Z",
		"size": 387,
		"path": "../public/assets/zap-B4gqFVJ7.js"
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
