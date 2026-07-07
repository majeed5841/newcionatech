import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as CardHeader, n as Card, o as CardTitle, r as CardContent, t as Button } from "./button-D4wWOSWE.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/web-development-lSn-fZPL.js
var import_jsx_runtime = require_jsx_runtime();
function WebDevelopment() {
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
					children: "Web Development"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xl text-slate-600 mb-8",
					children: "Custom web applications built with modern technologies"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "What We Offer" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "list-disc list-inside space-y-2 text-slate-700",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "React & TypeScript Development" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Full Stack Applications" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Performance Optimization" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Responsive Design" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "API Integration" })
							]
						}) })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Technologies" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-2",
							children: [
								"React",
								"TypeScript",
								"Node.js",
								"Tailwind CSS",
								"Vite",
								"TanStack"
							].map((tech) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm",
								children: tech
							}, tech))
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
var SplitComponent = WebDevelopment;
//#endregion
export { SplitComponent as component };
