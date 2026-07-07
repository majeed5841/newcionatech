import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { a as Scripts, c as createRouter, l as lazyRouteComponent, n as Link, o as createFileRoute, r as Outlet, s as createRootRouteWithContext, t as HeadContent, u as useRouter } from "./esm-Dq0SkE5R.mjs";
import { t as createLucideIcon } from "./createLucideIcon-DdKn5QIO.mjs";
import { t as ArrowRight } from "./arrow-right-BIaDGuWC.mjs";
import { t as CodeXml } from "./code-xml-u-rEQnm2.mjs";
import { t as Sparkles } from "./sparkles-ChS9dYX_.mjs";
import { t as Mail } from "./mail-Bv1BIzQ9.mjs";
import { t as MapPin } from "./map-pin-By6_JMjL.mjs";
import { t as MessageCircle } from "./message-circle-DRiwZ02h.mjs";
import { t as Phone } from "./phone-D-4_FP1-.mjs";
import { a as Smartphone, i as PenTool, n as MousePointerClick, r as Palette, t as Database } from "./smartphone-BcsDpLcQ.mjs";
import { t as Search } from "./search-BVs2Muv4.mjs";
import { r as services, t as Share2 } from "./services-CFfaaoSj.mjs";
import { t as Route$12 } from "./services._slug-gyEV3xCK.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-Kji9GDVi.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-CFPV_Rmk.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ArrowUp = createLucideIcon("arrow-up", [["path", {
	d: "m5 12 7-7 7 7",
	key: "hav0vg"
}], ["path", {
	d: "M12 19V5",
	key: "x0mq9r"
}]]);
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ChevronDown = createLucideIcon("chevron-down", [["path", {
	d: "m6 9 6 6 6-6",
	key: "qrunsl"
}]]);
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Facebook = createLucideIcon("facebook", [["path", {
	d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
	key: "1jg4f8"
}]]);
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Instagram = createLucideIcon("instagram", [
	["rect", {
		width: "20",
		height: "20",
		x: "2",
		y: "2",
		rx: "5",
		ry: "5",
		key: "2e1cvw"
	}],
	["path", {
		d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",
		key: "9exkf1"
	}],
	["line", {
		x1: "17.5",
		x2: "17.51",
		y1: "6.5",
		y2: "6.5",
		key: "r4j83e"
	}]
]);
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Linkedin = createLucideIcon("linkedin", [
	["path", {
		d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
		key: "c2jq9f"
	}],
	["rect", {
		width: "4",
		height: "12",
		x: "2",
		y: "9",
		key: "mk3on5"
	}],
	["circle", {
		cx: "4",
		cy: "4",
		r: "2",
		key: "bt5ra8"
	}]
]);
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Menu = createLucideIcon("menu", [
	["path", {
		d: "M4 5h16",
		key: "1tepv9"
	}],
	["path", {
		d: "M4 12h16",
		key: "1lakjw"
	}],
	["path", {
		d: "M4 19h16",
		key: "1djgab"
	}]
]);
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var X = createLucideIcon("x", [["path", {
	d: "M18 6 6 18",
	key: "1bl5f8"
}], ["path", {
	d: "m6 6 12 12",
	key: "d8bk6v"
}]]);
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Youtube = createLucideIcon("youtube", [["path", {
	d: "M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",
	key: "1q2vi4"
}], ["path", {
	d: "m10 15 5-3-5-3z",
	key: "1jp15x"
}]]);
var ciona_logo_default = "/assets/ciona-logo-8KIyASCT.png";
var megaGroups = [
	{
		title: "Digital Marketing",
		items: [
			{
				to: "/services/seo",
				label: "SEO",
				icon: Search,
				desc: "Rank higher, capture demand"
			},
			{
				to: "/services/google-business-profile",
				label: "Google Business Profile",
				icon: MapPin,
				desc: "Own the local map pack"
			},
			{
				to: "/services/google-ads",
				label: "Google Ads (PPC)",
				icon: MousePointerClick,
				desc: "Instant, predictable ROAS"
			},
			{
				to: "/services/social-media-marketing",
				label: "Social Media Marketing",
				icon: Share2,
				desc: "Grow an audience that buys"
			},
			{
				to: "/services/content-marketing",
				label: "Content Marketing",
				icon: PenTool,
				desc: "Content that ranks & converts"
			}
		]
	},
	{
		title: "Development",
		items: [
			{
				to: "/services/website-development",
				label: "Website Development",
				icon: CodeXml,
				desc: "Fast, SEO-first websites"
			},
			{
				to: "/services/crm-development",
				label: "CRM Development",
				icon: Database,
				desc: "Custom CRMs & automation"
			},
			{
				to: "/services/mobile-app-development",
				label: "App Development",
				icon: Smartphone,
				desc: "iOS, Android & cross-platform"
			}
		]
	},
	{
		title: "Creative",
		items: [{
			to: "/services/graphic-designing",
			label: "Graphic Designing",
			icon: Palette,
			desc: "Brand identity & marketing creative"
		}]
	}
];
var primaryLinks = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/about",
		label: "About"
	},
	{
		to: "/portfolio",
		label: "Portfolio"
	},
	{
		to: "/pricing",
		label: "Pricing"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
function Navbar() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	const [progress, setProgress] = (0, import_react.useState)(0);
	const [mega, setMega] = (0, import_react.useState)(false);
	const [mobileServices, setMobileServices] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => {
			setScrolled(window.scrollY > 20);
			const h = document.documentElement;
			const total = h.scrollHeight - h.clientHeight;
			setProgress(total > 0 ? window.scrollY / total * 100 : 0);
		};
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: `fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "glass-strong shadow-card" : "bg-transparent"}`,
		onMouseLeave: () => setMega(false),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "flex items-center gap-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: ciona_logo_default,
							alt: "CIONA TECH LLC",
							className: "h-9 w-auto"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						className: "hidden items-center gap-1 lg:flex",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/",
								className: "relative rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition hover:text-foreground",
								activeOptions: { exact: true },
								children: "Home"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/about",
								className: "rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition hover:text-foreground",
								children: "About"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative",
								onMouseEnter: () => setMega(true),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => setMega((v) => !v),
									className: "inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition hover:text-foreground",
									children: ["Services ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: `h-4 w-4 transition ${mega ? "rotate-180" : ""}` })]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/portfolio",
								className: "rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition hover:text-foreground",
								children: "Portfolio"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/pricing",
								className: "rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition hover:text-foreground",
								children: "Pricing"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								className: "rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition hover:text-foreground",
								children: "Contact"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							className: "hidden rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-white shadow-elegant transition hover:scale-[1.03] sm:inline-flex",
							children: "Get Free Quote"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setOpen((v) => !v),
							className: "grid h-10 w-10 place-items-center rounded-xl border border-border lg:hidden",
							"aria-label": "Toggle menu",
							children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `absolute inset-x-0 top-full hidden overflow-hidden transition-all duration-300 lg:block ${mega ? "max-h-[600px] opacity-100" : "pointer-events-none max-h-0 opacity-0"}`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-7xl px-4 pb-6 sm:px-6 lg:px-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "glass-strong grid gap-6 rounded-3xl p-6 shadow-elegant md:grid-cols-4",
						children: [megaGroups.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-3 text-xs font-bold uppercase tracking-widest text-brand-blue",
							children: g.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-1",
							children: g.items.map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: it.to,
								onClick: () => setMega(false),
								className: "group flex items-start gap-3 rounded-xl p-2.5 transition hover:bg-gradient-brand-soft",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-white text-brand-blue shadow-card transition group-hover:bg-gradient-brand group-hover:text-white",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(it.icon, { className: "h-4 w-4" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-bold",
									children: it.label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground",
									children: it.desc
								})] })]
							}, it.to))
						})] }, g.title)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl bg-gradient-brand p-5 text-white",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-5 w-5" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 font-display text-lg font-bold",
									children: "Not sure what you need?"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs text-white/80",
									children: "Book a free 30-min strategy call and we'll build a roadmap for you."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/contact",
									onClick: () => setMega(false),
									className: "mt-4 inline-flex items-center gap-1 rounded-full bg-white px-4 py-2 text-xs font-bold text-brand-blue",
									children: ["Book Free Call ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3 w-3" })]
								})
							]
						})]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-0.5 w-full bg-transparent",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-full bg-gradient-brand transition-[width] duration-150",
					style: { width: `${progress}%` }
				})
			}),
			open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "lg:hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "glass-strong mx-4 mb-4 max-h-[80vh] overflow-y-auto rounded-2xl p-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-1",
						children: [
							primaryLinks.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: l.to,
								onClick: () => setOpen(false),
								className: "rounded-lg px-4 py-3 text-sm font-medium text-foreground/80 hover:bg-accent",
								children: l.label
							}, l.to)),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => setMobileServices((v) => !v),
								className: "flex items-center justify-between rounded-lg px-4 py-3 text-sm font-medium text-foreground/80 hover:bg-accent",
								children: ["Services ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: `h-4 w-4 transition ${mobileServices ? "rotate-180" : ""}` })]
							}),
							mobileServices && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "ml-2 space-y-3 border-l border-border pl-3",
								children: megaGroups.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mb-1 text-[10px] font-bold uppercase tracking-widest text-brand-blue",
									children: g.title
								}), g.items.map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: it.to,
									onClick: () => setOpen(false),
									className: "flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium text-foreground/80 hover:bg-accent",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(it.icon, { className: "h-4 w-4 text-brand-blue" }),
										" ",
										it.label
									]
								}, it.to))] }, g.title))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								onClick: () => setOpen(false),
								className: "mt-2 rounded-xl bg-gradient-brand px-4 py-3 text-center text-sm font-semibold text-white",
								children: "Get Free Quote"
							})
						]
					})
				})
			})
		]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "relative mt-24 overflow-hidden bg-white",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-brand" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -top-40 left-1/2 h-96 w-[70rem] -translate-x-1/2 rounded-full bg-brand-teal/10 blur-3xl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-10 md:grid-cols-2 lg:grid-cols-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/",
									className: "inline-flex",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: ciona_logo_default,
										alt: "CIONA TECH LLC",
										className: "h-10 w-auto"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 max-w-sm text-sm text-muted-foreground",
									children: "Your Digital Growth Partner. We turn ideas into digital impact through SEO, marketing, web, apps, and AI-driven solutions."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-5 flex gap-2",
									children: [
										Facebook,
										Instagram,
										Linkedin,
										Youtube
									].map((Icon, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#",
										className: "grid h-9 w-9 place-items-center rounded-full border border-border text-muted-foreground transition hover:border-brand-blue hover:text-brand-blue",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
									}, i))
								})
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "font-display text-sm font-bold uppercase tracking-wider text-foreground",
								children: "Our Services"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "mt-4 space-y-2 text-sm text-muted-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Search Engine Optimization" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Social Media Marketing" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Google Business Profile" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Web Development" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Google Ads (PPC)" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "App Development" })
								]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "font-display text-sm font-bold uppercase tracking-wider text-foreground",
								children: "Company"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-4 space-y-2 text-sm",
								children: [
									["/about", "About"],
									["/services", "Services"],
									["/pricing", "Pricing"],
									["/contact", "Contact"]
								].map(([to, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to,
									className: "text-muted-foreground transition hover:text-brand-blue",
									children: label
								}) }, to))
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "font-display text-sm font-bold uppercase tracking-wider text-foreground",
								children: "Contact Us"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "mt-4 space-y-3 text-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-start gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-0.5 h-4 w-4 shrink-0 text-brand-green" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Houston, Texas, USA" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-start gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "mt-0.5 h-4 w-4 shrink-0 text-brand-blue" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "tel:+12548700892",
											className: "hover:text-brand-blue",
											children: "+1 (254) 870-0892"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-start gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "mt-0.5 h-4 w-4 shrink-0 text-brand-teal" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "mailto:info@cionatech.com",
											className: "hover:text-brand-blue",
											children: "info@cionatech.com"
										})]
									})
								]
							})] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-12 rounded-2xl border border-border bg-gradient-brand-soft p-5 text-sm text-foreground/80",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-semibold text-foreground",
							children: "SMS Notifications"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-xs leading-relaxed",
							children: [
								"CIONA TECH LLC may send you SMS messages regarding account updates, service alerts, delivery status, security notifications, or promotional offers. Message frequency varies. Message & data rates may apply. Reply ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "STOP" }),
								" to opt out or ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "HELP" }),
								" for assistance, or email info@cionatech.com."
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-sm text-muted-foreground md:flex-row md:items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							"© ",
							(/* @__PURE__ */ new Date()).getFullYear(),
							" CIONA TECH LLC. All rights reserved."
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#",
								className: "hover:text-brand-blue",
								children: "Privacy Policy"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#",
								className: "hover:text-brand-blue",
								children: "Terms & Conditions"
							})]
						})]
					})
				]
			})
		]
	});
}
function FloatingActions() {
	const [show, setShow] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const on = () => setShow(window.scrollY > 400);
		on();
		window.addEventListener("scroll", on, { passive: true });
		return () => window.removeEventListener("scroll", on);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "https://wa.me/12548700892",
				target: "_blank",
				rel: "noreferrer",
				className: "grid h-12 w-12 place-items-center rounded-full bg-success text-white shadow-elegant transition hover:scale-110",
				"aria-label": "WhatsApp",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-5 w-5" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "tel:+12548700892",
				className: "grid h-12 w-12 place-items-center rounded-full bg-gradient-brand text-white shadow-elegant transition hover:scale-110",
				"aria-label": "Call",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-5 w-5" })
			}),
			show && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => window.scrollTo({
					top: 0,
					behavior: "smooth"
				}),
				className: "grid h-12 w-12 place-items-center rounded-full bg-ink text-white shadow-elegant transition hover:scale-110",
				"aria-label": "Back to top",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUp, { className: "h-5 w-5" })
			})
		]
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-hero px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-8xl font-black text-gradient",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-4 text-2xl font-semibold",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-white shadow-elegant transition hover:scale-105",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong. You can try again or head home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "rounded-full bg-gradient-brand px-5 py-2 text-sm font-semibold text-white",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "rounded-full border border-border px-5 py-2 text-sm font-semibold",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$11 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "CIONA TECH LLC — Turning Ideas Into Digital Impact" },
			{
				name: "description",
				content: "CIONA TECH LLC is a US-based digital marketing and software development agency in Houston, TX. SEO, Google Ads, Web & App Development, CRM, and AI solutions."
			},
			{
				name: "author",
				content: "CIONA TECH LLC"
			},
			{
				property: "og:site_name",
				content: "CIONA TECH LLC"
			},
			{
				property: "og:title",
				content: "CIONA TECH LLC — Turning Ideas Into Digital Impact"
			},
			{
				property: "og:description",
				content: "Grow faster, rank higher, convert better. Premium digital marketing and software development from Houston, Texas."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700;800;900&family=Inter:wght@400;500;600;700&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$11.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-h-screen bg-background text-foreground",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
					className: "pt-16",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingActions, {})
			]
		})
	});
}
var BASE_URL = "";
var Route$10 = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: async () => {
	const xml = [
		`<?xml version="1.0" encoding="UTF-8"?>`,
		`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
		...[
			{
				path: "/",
				changefreq: "weekly",
				priority: "1.0"
			},
			{
				path: "/about",
				changefreq: "monthly",
				priority: "0.8"
			},
			{
				path: "/services",
				changefreq: "monthly",
				priority: "0.9"
			},
			...services.map((s) => ({
				path: `/services/${s.slug}`,
				changefreq: "monthly",
				priority: "0.85"
			})),
			{
				path: "/portfolio",
				changefreq: "monthly",
				priority: "0.85"
			},
			{
				path: "/pricing",
				changefreq: "monthly",
				priority: "0.8"
			},
			{
				path: "/contact",
				changefreq: "monthly",
				priority: "0.7"
			}
		].map((e) => [
			`  <url>`,
			`    <loc>${BASE_URL}${e.path}</loc>`,
			e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
			e.priority ? `    <priority>${e.priority}</priority>` : null,
			`  </url>`
		].filter(Boolean).join("\n")),
		`</urlset>`
	].join("\n");
	return new Response(xml, { headers: {
		"Content-Type": "application/xml",
		"Cache-Control": "public, max-age=3600"
	} });
} } } });
var $$splitComponentImporter$9 = () => import("./services-DUREO9-0.mjs");
var Route$9 = createFileRoute("/services")({ component: lazyRouteComponent($$splitComponentImporter$9, "component") });
var $$splitComponentImporter$8 = () => import("./pricing-CHODCS3c.mjs");
var Route$8 = createFileRoute("/pricing")({
	head: () => ({
		meta: [
			{ title: "Pricing — Transparent Plans for Marketing & Development | CIONA TECH LLC" },
			{
				name: "description",
				content: "Simple, transparent pricing for digital marketing and software development. Starter, Momentum & Pioneer plans with no hidden fees, month-to-month, and senior-only teams."
			},
			{
				property: "og:title",
				content: "Pricing — CIONA TECH LLC"
			},
			{
				property: "og:description",
				content: "Three flexible plans built around your goals — SEO, ads, web, apps, CRM and more. Month-to-month, no lock-in."
			},
			{
				property: "og:url",
				content: "/pricing"
			}
		],
		links: [{
			rel: "canonical",
			href: "/pricing"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./portfolio-CoIeFIuI.mjs");
var Route$7 = createFileRoute("/portfolio")({
	head: () => ({
		meta: [
			{ title: "Portfolio & Case Studies — Our Work | CIONA TECH LLC" },
			{
				name: "description",
				content: "Explore CIONA TECH LLC case studies across SEO, web, apps, CRM, ads, branding, and content — with measurable results."
			},
			{
				property: "og:title",
				content: "Our Work — CIONA TECH LLC"
			},
			{
				property: "og:description",
				content: "Case studies with real results across every service line."
			},
			{
				property: "og:url",
				content: "/portfolio"
			}
		],
		links: [{
			rel: "canonical",
			href: "/portfolio"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./contact-CkILEEej.mjs");
var Route$6 = createFileRoute("/contact")({
	head: () => ({
		meta: [
			{ title: "Contact CIONA TECH LLC — Free Strategy Call in Houston, TX" },
			{
				name: "description",
				content: "Get in touch with CIONA TECH LLC in Houston, TX. Call +1 (254) 870-0892, email info@cionatech.com, or book a free 30-minute strategy call this week."
			},
			{
				property: "og:title",
				content: "Contact CIONA TECH LLC"
			},
			{
				property: "og:description",
				content: "Book a free strategy call with a senior consultant. We respond within 1 business day."
			},
			{
				property: "og:url",
				content: "/contact"
			}
		],
		links: [{
			rel: "canonical",
			href: "/contact"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./about-CLLhWpvJ.mjs");
var Route$5 = createFileRoute("/about")({
	head: () => ({
		meta: [
			{ title: "About CIONA TECH LLC — Digital Growth Partner in Houston, TX" },
			{
				name: "description",
				content: "Meet CIONA TECH LLC — a Houston-based digital agency of 100+ engineers, marketers & designers delivering measurable growth for 250+ clients across 20+ countries."
			},
			{
				property: "og:title",
				content: "About CIONA TECH LLC"
			},
			{
				property: "og:description",
				content: "Our story, mission, values, culture, and the team building digital success stories from Houston, Texas."
			},
			{
				property: "og:url",
				content: "/about"
			}
		],
		links: [{
			rel: "canonical",
			href: "/about"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./routes-CvSQBL1N.mjs");
var Route$4 = createFileRoute("/")({
	head: () => ({
		meta: [
			{ title: "CIONA TECH LLC — Turning Ideas Into Digital Impact" },
			{
				name: "description",
				content: "CIONA TECH LLC is a Houston-based digital marketing & software development agency. SEO, Google Ads, Google Business Profile, web, apps, CRM, and AI solutions."
			},
			{
				property: "og:title",
				content: "CIONA TECH LLC — Your Digital Growth Partner"
			},
			{
				property: "og:description",
				content: "SEO, Google Ads, Google Business Profile, Web, Apps, CRM & AI. Grow faster with Ciona Tech."
			},
			{
				property: "og:url",
				content: "/"
			}
		],
		links: [{
			rel: "canonical",
			href: "/"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "Organization",
				name: "CIONA TECH LLC",
				url: "/",
				telephone: "+1-254-870-0892",
				email: "info@cionatech.com",
				address: {
					"@type": "PostalAddress",
					addressLocality: "Houston",
					addressRegion: "TX",
					addressCountry: "US"
				},
				slogan: "Turning Ideas Into Digital Impact",
				sameAs: []
			})
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./web-development-tzgt_l96.mjs");
var Route$3 = createFileRoute("/services/web-development")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var $$splitComponentImporter$2 = () => import("./ui-ux-design-BUizCw3O.mjs");
var Route$2 = createFileRoute("/services/ui-ux-design")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
var $$splitComponentImporter$1 = () => import("./consulting-CgM3_Nn9.mjs");
var Route$1 = createFileRoute("/services/consulting")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("./services.google-business-profile-DVzc7oKI.mjs");
var Route = createFileRoute("/src/routes/services/google-business-profile")({
	head: () => ({
		meta: [
			{ title: "Google Business Profile Optimization Services | CIONA TECH LLC" },
			{
				name: "description",
				content: "Rank #1 in Google Maps and the local 3-pack. Full GBP optimization, review management, posts, Q&A, and local SEO that drives calls, visits, and revenue."
			},
			{
				property: "og:title",
				content: "Google Business Profile Optimization Services | CIONA TECH LLC"
			},
			{
				property: "og:description",
				content: "Dominate local search with a fully optimized Google Business Profile. Managed by senior local SEO specialists."
			}
		],
		links: [{
			rel: "canonical",
			href: "/services/google-business-profile"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var SitemapDotxmlRoute = Route$10.update({
	id: "/sitemap.xml",
	path: "/sitemap.xml",
	getParentRoute: () => Route$11
});
var ServicesRoute = Route$9.update({
	id: "/services",
	path: "/services",
	getParentRoute: () => Route$11
});
var PricingRoute = Route$8.update({
	id: "/pricing",
	path: "/pricing",
	getParentRoute: () => Route$11
});
var PortfolioRoute = Route$7.update({
	id: "/portfolio",
	path: "/portfolio",
	getParentRoute: () => Route$11
});
var ContactRoute = Route$6.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$11
});
var AboutRoute = Route$5.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$11
});
var IndexRoute = Route$4.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$11
});
var ServicesWebDevelopmentRoute = Route$3.update({
	id: "/web-development",
	path: "/web-development",
	getParentRoute: () => ServicesRoute
});
var ServicesUiUxDesignRoute = Route$2.update({
	id: "/ui-ux-design",
	path: "/ui-ux-design",
	getParentRoute: () => ServicesRoute
});
var ServicesConsultingRoute = Route$1.update({
	id: "/consulting",
	path: "/consulting",
	getParentRoute: () => ServicesRoute
});
var ServicesSlugRoute = Route$12.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => ServicesRoute
});
var SrcRoutesServicesGoogleBusinessProfileRoute = Route.update({
	id: "/src/routes/services/google-business-profile",
	path: "/src/routes/services/google-business-profile",
	getParentRoute: () => Route$11
});
var ServicesRouteChildren = {
	ServicesSlugRoute,
	ServicesConsultingRoute,
	ServicesUiUxDesignRoute,
	ServicesWebDevelopmentRoute
};
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	ContactRoute,
	PortfolioRoute,
	PricingRoute,
	ServicesRoute: ServicesRoute._addFileChildren(ServicesRouteChildren),
	SitemapDotxmlRoute,
	SrcRoutesServicesGoogleBusinessProfileRoute
};
var router = createRouter({ routeTree: Route$11._addFileChildren(rootRouteChildren)._addFileTypes() });
function getRouter() {
	return router;
}
//#endregion
export { getRouter };
