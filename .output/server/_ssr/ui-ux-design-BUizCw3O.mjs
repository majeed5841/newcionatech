import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as Link } from "./esm-Dq0SkE5R.mjs";
import { a as CardHeader, n as Card, o as CardTitle, r as CardContent, t as Button } from "./button-CaLuUtih.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ui-ux-design-BUizCw3O.js
var import_jsx_runtime = require_jsx_runtime();
function UiUxDesign() {
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
					children: "UI/UX Design"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xl text-slate-600 mb-8",
					children: "Beautiful and intuitive user interfaces"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "What We Offer" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "list-disc list-inside space-y-2 text-slate-700",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "User Research & Analysis" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Wireframing & Prototyping" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Visual Design" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Accessibility (WCAG)" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Design Systems" })
							]
						}) })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Design Tools" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-2",
							children: [
								"Figma",
								"Adobe XD",
								"Sketch",
								"Prototyping",
								"User Testing"
							].map((tool) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm",
								children: tool
							}, tool))
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
var SplitComponent = UiUxDesign;
//#endregion
export { SplitComponent as component };
