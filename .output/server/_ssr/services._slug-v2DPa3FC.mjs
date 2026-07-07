import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { r as services } from "./services-CFfaaoSj.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services._slug-v2DPa3FC.js
var import_jsx_runtime = require_jsx_runtime();
var SplitNotFoundComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
	className: "mx-auto max-w-2xl px-4 py-32 text-center",
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
		className: "font-display text-3xl font-black",
		children: "Service not found"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
		className: "mt-3 text-muted-foreground",
		children: [
			"Try one of our services: ",
			services.map((s) => s.name).join(", "),
			"."
		]
	})]
});
//#endregion
export { SplitNotFoundComponent as notFoundComponent };
