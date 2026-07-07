import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as CardHeader, i as CardDescription, n as Card, o as CardTitle, r as CardContent, t as Button } from "./button-D4wWOSWE.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services-DO8yXkg2.js
var import_jsx_runtime = require_jsx_runtime();
function Services() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 py-12 px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-6xl mx-auto",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center mb-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-4xl font-bold text-slate-900 mb-4",
					children: "Our Services"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xl text-slate-600",
					children: "Comprehensive solutions for your digital needs"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 md:grid-cols-3 gap-6",
				children: [
					{
						id: 1,
						title: "Web Development",
						description: "Custom web applications built with modern technologies",
						link: "/services/web-development"
					},
					{
						id: 2,
						title: "UI/UX Design",
						description: "Beautiful and intuitive user interfaces",
						link: "/services/ui-ux-design"
					},
					{
						id: 3,
						title: "Consulting",
						description: "Technical expertise and strategic guidance",
						link: "/services/consulting"
					}
				].map((service) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "hover:shadow-lg transition-shadow flex flex-col",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: service.title }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: service.description })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
						className: "flex-1 flex items-end",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: service.link,
							className: "w-full",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								className: "w-full",
								variant: "outline",
								children: "Learn More"
							})
						})
					})]
				}, service.id))
			})]
		})
	});
}
var SplitComponent = Services;
//#endregion
export { SplitComponent as component };
