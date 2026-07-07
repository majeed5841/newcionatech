globalThis.__nitro_main__ = import.meta.url;
import { a as FastResponse, n as HTTPError, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx+unenv.mjs";
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
	"/assets/about-BxUnlTcl.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4a20-IhWpld4uzXNRsPbEu6FGBtVNJ1Y\"",
		"mtime": "2026-07-07T01:09:58.841Z",
		"size": 18976,
		"path": "../public/assets/about-BxUnlTcl.js"
	},
	"/assets/building-2-CapsX892.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"17f-kGi4H3t3ShWnlukydfUEV+GrQm4\"",
		"mtime": "2026-07-07T01:09:58.843Z",
		"size": 383,
		"path": "../public/assets/building-2-CapsX892.js"
	},
	"/assets/award--Ok54kXk.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"112-f4QvSn3FI6h3Xo/DDhE77N7GBqE\"",
		"mtime": "2026-07-07T01:09:58.842Z",
		"size": 274,
		"path": "../public/assets/award--Ok54kXk.js"
	},
	"/assets/calendar-BFiKv9su.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"101-OjWi+iqvmz6BSX8l+QW81/15a9U\"",
		"mtime": "2026-07-07T01:09:58.851Z",
		"size": 257,
		"path": "../public/assets/calendar-BFiKv9su.js"
	},
	"/assets/button-fuhyvuw9.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7e32-z4E3JDngnjzq8gK0c1eZb+heEtA\"",
		"mtime": "2026-07-07T01:09:58.851Z",
		"size": 32306,
		"path": "../public/assets/button-fuhyvuw9.js"
	},
	"/assets/chart-line-0JQHfMXB.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b8-P3eMWR5l5IVlhQ+hMiXg2ZrZDZs\"",
		"mtime": "2026-07-07T01:09:58.852Z",
		"size": 184,
		"path": "../public/assets/chart-line-0JQHfMXB.js"
	},
	"/assets/ciona-logo-8KIyASCT.png": {
		"type": "image/png",
		"etag": "\"4f6f-QvV8+jTanIL59iFP1asXqTomXGg\"",
		"mtime": "2026-07-07T01:09:58.874Z",
		"size": 20335,
		"path": "../public/assets/ciona-logo-8KIyASCT.png"
	},
	"/assets/circle-question-mark-D6-oc5eF.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f8-yN0NUuMgPkNlFsUazhQznlzwKNU\"",
		"mtime": "2026-07-07T01:09:58.852Z",
		"size": 248,
		"path": "../public/assets/circle-question-mark-D6-oc5eF.js"
	},
	"/assets/clock-6-gyif_i.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a9-ltdFrS0Zzz9dBOXmbtuKbhJ38pM\"",
		"mtime": "2026-07-07T01:09:58.853Z",
		"size": 169,
		"path": "../public/assets/clock-6-gyif_i.js"
	},
	"/assets/consulting-BawxpKHi.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"67e-hCY6Ymrehfe59ERJJOZckzubB5k\"",
		"mtime": "2026-07-07T01:09:58.854Z",
		"size": 1662,
		"path": "../public/assets/consulting-BawxpKHi.js"
	},
	"/assets/contact-C3Pwh-g2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4001-h87KAqKdICGN8BNa2eqUJAKn0yE\"",
		"mtime": "2026-07-07T01:09:58.855Z",
		"size": 16385,
		"path": "../public/assets/contact-C3Pwh-g2.js"
	},
	"/assets/createLucideIcon-B_1GbDvl.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4ab-Y4enwiXY2yAcF1Gu2b12sxHBTW8\"",
		"mtime": "2026-07-07T01:09:58.855Z",
		"size": 1195,
		"path": "../public/assets/createLucideIcon-B_1GbDvl.js"
	},
	"/assets/globe-D1W27YRR.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1b8-kXcktgpE2iy6OkN0DCWJRpmXYCc\"",
		"mtime": "2026-07-07T01:09:58.856Z",
		"size": 440,
		"path": "../public/assets/globe-D1W27YRR.js"
	},
	"/assets/handshake-CzyOCMpm.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1be-eKLzsVbW8pJlulSjQ3Knms8/5II\"",
		"mtime": "2026-07-07T01:09:58.856Z",
		"size": 446,
		"path": "../public/assets/handshake-CzyOCMpm.js"
	},
	"/assets/jsx-runtime-D8nDyRPw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2210-qrBAUPDOR8ROKpBVNEla8AGnGKU\"",
		"mtime": "2026-07-07T01:09:58.857Z",
		"size": 8720,
		"path": "../public/assets/jsx-runtime-D8nDyRPw.js"
	},
	"/assets/portfolio-BGasBv-h.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"29e4-Zkvfjamu1QdQLVkyNPwWLYE2RhE\"",
		"mtime": "2026-07-07T01:09:58.857Z",
		"size": 10724,
		"path": "../public/assets/portfolio-BGasBv-h.js"
	},
	"/assets/portfolio-hfSUsF4O.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1906-obTKQnGIr+woik45KehYvNsrwXQ\"",
		"mtime": "2026-07-07T01:09:58.858Z",
		"size": 6406,
		"path": "../public/assets/portfolio-hfSUsF4O.js"
	},
	"/assets/pricing-CsLm--EJ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4694-CuQfg+m+2VAN+UFQfQ3y2wURtlM\"",
		"mtime": "2026-07-07T01:09:58.859Z",
		"size": 18068,
		"path": "../public/assets/pricing-CsLm--EJ.js"
	},
	"/assets/rocket-CaNziVmf.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1c4-d9H0PiMyFMmAzJrMYOq5+PstIYA\"",
		"mtime": "2026-07-07T01:09:58.862Z",
		"size": 452,
		"path": "../public/assets/rocket-CaNziVmf.js"
	},
	"/assets/index-DYhYLcw4.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"59bad-8q0z2ExiHqb3pYEWlHyG/Rs+D3s\"",
		"mtime": "2026-07-07T01:09:58.839Z",
		"size": 367533,
		"path": "../public/assets/index-DYhYLcw4.js"
	},
	"/assets/proxy-CJpc90uQ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1dafa-iGTk8Nn9m3fRUqaReSg8GZefqkk\"",
		"mtime": "2026-07-07T01:09:58.860Z",
		"size": 121594,
		"path": "../public/assets/proxy-CJpc90uQ.js"
	},
	"/assets/routes-ftOgf61I.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a88d-57EayquSdFGmjAZDnOpHqyIRjW8\"",
		"mtime": "2026-07-07T01:09:58.863Z",
		"size": 43149,
		"path": "../public/assets/routes-ftOgf61I.js"
	},
	"/assets/services-BjqeO0Vz.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5c1-hVOX/JZLiKNCOdGCFGn1icOWPfI\"",
		"mtime": "2026-07-07T01:09:58.864Z",
		"size": 1473,
		"path": "../public/assets/services-BjqeO0Vz.js"
	},
	"/assets/services.google-business-profile-CsggQ3t0.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4df9-vpaCk7Ysw/dVwVVSEmisdu/w+qs\"",
		"mtime": "2026-07-07T01:09:58.866Z",
		"size": 19961,
		"path": "../public/assets/services.google-business-profile-CsggQ3t0.js"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"17-ZZkCVrbr4BSdjt/K43J0tq8+Qq4\"",
		"mtime": "2026-07-04T22:28:42.284Z",
		"size": 23,
		"path": "../public/robots.txt"
	},
	"/assets/services._slug-a_aPBZl7.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1803d-yiNhcmDg+u6w4GhOKT/xupl4/Mg\"",
		"mtime": "2026-07-07T01:09:58.865Z",
		"size": 98365,
		"path": "../public/assets/services._slug-a_aPBZl7.js"
	},
	"/assets/shield-DsQSZuZY.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"110-pb0wCrsBS7ER5c9rdXigim+tnao\"",
		"mtime": "2026-07-07T01:09:58.867Z",
		"size": 272,
		"path": "../public/assets/shield-DsQSZuZY.js"
	},
	"/assets/services._slug-Dde_wcJU.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1b5-TXk4NL81ST/23Ks3hH7whRArnSQ\"",
		"mtime": "2026-07-07T01:09:58.864Z",
		"size": 437,
		"path": "../public/assets/services._slug-Dde_wcJU.js"
	},
	"/assets/target-Bob8ye5u.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e2-UyrKHWrPIz7WrkIJewsMwHWudyA\"",
		"mtime": "2026-07-07T01:09:58.868Z",
		"size": 226,
		"path": "../public/assets/target-Bob8ye5u.js"
	},
	"/assets/styles-CFPV_Rmk.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"1bac1-e1DlCzzjXQ+jRF12/8q7QmYRgoM\"",
		"mtime": "2026-07-07T01:09:58.875Z",
		"size": 113345,
		"path": "../public/assets/styles-CFPV_Rmk.css"
	},
	"/assets/Testimonials-DtH_1Dm8.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3a9a-Gq0O49FKQbabnoDTmGGpK5NRKLM\"",
		"mtime": "2026-07-07T01:09:58.840Z",
		"size": 15002,
		"path": "../public/assets/Testimonials-DtH_1Dm8.js"
	},
	"/assets/trending-up-DBINS38T.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"af-WYmECTYCToQjMx6L/+tD+ybJmpY\"",
		"mtime": "2026-07-07T01:09:58.868Z",
		"size": 175,
		"path": "../public/assets/trending-up-DBINS38T.js"
	},
	"/assets/ui-ux-design-42djVLXh.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"65d-E7msz3CaWGTg2CWVM6UIbCUKDzk\"",
		"mtime": "2026-07-07T01:09:58.870Z",
		"size": 1629,
		"path": "../public/assets/ui-ux-design-42djVLXh.js"
	},
	"/assets/users-Bgkhatjh.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"132-OFkfK4SXQV8Wb+ei2ReUKN6rvT4\"",
		"mtime": "2026-07-07T01:09:58.871Z",
		"size": 306,
		"path": "../public/assets/users-Bgkhatjh.js"
	},
	"/assets/utensils-mKPsZ13p.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b98-bAkXfnX14zFa8SxUi7SVU9v27c8\"",
		"mtime": "2026-07-07T01:09:58.872Z",
		"size": 2968,
		"path": "../public/assets/utensils-mKPsZ13p.js"
	},
	"/assets/web-development-D-GktKFh.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"67f-qk7F9t0nzsDv6M5wX18noO6EbjM\"",
		"mtime": "2026-07-07T01:09:58.873Z",
		"size": 1663,
		"path": "../public/assets/web-development-D-GktKFh.js"
	},
	"/assets/zap-B4gqFVJ7.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"183-d36/SfKHpeu+QiDuqAgI3kbs2JY\"",
		"mtime": "2026-07-07T01:09:58.873Z",
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
