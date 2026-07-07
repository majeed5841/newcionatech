import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as Link } from "./esm-Dq0SkE5R.mjs";
import { a as CardHeader, n as Card, o as CardTitle, r as CardContent, t as Button } from "./button-CaLuUtih.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/consulting-CgM3_Nn9.js
var import_jsx_runtime = require_jsx_runtime();
function Consulting() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 py-12 px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-4xl mx-auto",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/services",
					className: "text-blue-600 hover:underline mb-6 block",
					children: "← Back to Services"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-4xl font-bold text-slate-900 mb-4",
					children: "Consulting"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xl text-slate-600 mb-8",
					children: "Technical expertise and strategic guidance"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "What We Offer" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "list-disc list-inside space-y-2 text-slate-700",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Architecture & Planning" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Code Review & Optimization" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Best Practices Implementation" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Team Training & Mentoring" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Performance Audits" })
							]
						}) })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Expertise Areas" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-2",
							children: [
								"Architecture",
								"Performance",
								"Security",
								"Scalability",
								"DevOps"
							].map((area) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm",
								children: area
							}, area))
						}) })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							className: "w-full md:w-auto",
							size: "lg",
							children: "Get Started"
						})
					]
				})
			]
		})
	});
}
var SplitComponent = Consulting;
//#endregion
export { SplitComponent as component };
