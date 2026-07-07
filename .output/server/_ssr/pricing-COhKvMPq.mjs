import { a as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { Q as Crown, U as Handshake, _t as ArrowRight, a as Users, at as CircleCheck, b as Rocket, ht as Award, l as Star, m as Shield, o as TrendingUp, rt as CircleQuestionMark, t as Zap, tt as Clock, u as Sparkles } from "../_libs/lucide-react.mjs";
import { a as TiltCard, i as Testimonials, r as Reveal, t as Counter } from "./Testimonials-DyS1I9jQ.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/pricing-COhKvMPq.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var plans = [
	{
		name: "Starter",
		icon: Sparkles,
		price: 999,
		tagline: "For emerging brands ready to build a professional online presence.",
		features: [
			"Landing site (up to 5 pages)",
			"On-page SEO setup + technical audit",
			"Google Business Profile optimization",
			"Blog & content strategy (2 posts/mo)",
			"Monthly analytics report",
			"Email support (24h response)"
		],
		ideal: "Local businesses, solopreneurs, new brands",
		popular: false
	},
	{
		name: "Momentum",
		icon: Rocket,
		price: 2499,
		tagline: "For growing companies scaling multi-channel demand.",
		features: [
			"Custom website (up to 15 pages)",
			"Full SEO + content plan (8 posts/mo)",
			"Google Ads management (up to $10k spend)",
			"Social media (2 platforms + community)",
			"Landing pages & CRO experiments",
			"Bi-weekly strategy calls",
			"Priority Slack support"
		],
		ideal: "SMBs, DTC brands, funded startups",
		popular: true
	},
	{
		name: "Pioneer",
		icon: Crown,
		price: 0,
		tagline: "For scale-ups & enterprises building compounding growth.",
		features: [
			"Custom web / app / CRM development",
			"SEO + Paid + Social + Email (full mix)",
			"AI, automation & workflow build",
			"Dedicated growth pod (5+ specialists)",
			"Executive reporting & QBRs",
			"24/7 SLA support & on-call engineering",
			"Custom analytics & data warehouse"
		],
		ideal: "Series A+, mid-market, enterprise brands",
		popular: false
	}
];
var addOns = [
	{
		name: "Brand identity system",
		price: "from $3,500",
		d: "Logo, palette, typography, guidelines"
	},
	{
		name: "Video & motion graphics",
		price: "from $1,200/mo",
		d: "Reels, ads, product videos, animation"
	},
	{
		name: "Conversion rate optimization",
		price: "from $1,800/mo",
		d: "A/B tests, heatmaps, funnel tuning"
	},
	{
		name: "eCommerce store build",
		price: "from $6,500",
		d: "Shopify or headless commerce"
	},
	{
		name: "AI chatbot & automation",
		price: "from $2,800",
		d: "GPT-powered assistants, workflows"
	},
	{
		name: "Content marketing pod",
		price: "from $2,000/mo",
		d: "Writers, editors, SEO strategist"
	}
];
var compareRows = [
	{
		label: "Dedicated account manager",
		starter: false,
		momentum: true,
		pioneer: true
	},
	{
		label: "Custom design system",
		starter: false,
		momentum: true,
		pioneer: true
	},
	{
		label: "SEO — technical + on-page",
		starter: true,
		momentum: true,
		pioneer: true
	},
	{
		label: "SEO — link building",
		starter: false,
		momentum: "8/mo",
		pioneer: "20+/mo"
	},
	{
		label: "Paid ads management",
		starter: false,
		momentum: "Up to $10k",
		pioneer: "Unlimited"
	},
	{
		label: "Blog content",
		starter: "2/mo",
		momentum: "8/mo",
		pioneer: "Custom"
	},
	{
		label: "Web / app development",
		starter: "Landing",
		momentum: "Full site",
		pioneer: "Custom apps"
	},
	{
		label: "CRM & automations",
		starter: false,
		momentum: "Basic",
		pioneer: "Advanced"
	},
	{
		label: "Reporting cadence",
		starter: "Monthly",
		momentum: "Bi-weekly",
		pioneer: "Weekly + live dashboards"
	},
	{
		label: "Support SLA",
		starter: "24h email",
		momentum: "Priority Slack",
		pioneer: "24/7 on-call"
	}
];
var faqs = [
	{
		q: "Are the prices really month-to-month?",
		a: "Yes. Every plan is month-to-month with a simple 30-day cancellation notice. We earn your business every month, not through long contracts."
	},
	{
		q: "What if I don't fit into a plan?",
		a: "That's the norm — most engagements are custom. Plans are starting points. Book a call and we'll scope pricing to your goals."
	},
	{
		q: "Do you offer performance-based pricing?",
		a: "For qualifying accounts we blend a base retainer with revenue-share on ads or SEO growth. Ask about our performance model on a call."
	},
	{
		q: "How fast can we start?",
		a: "Kickoff usually happens within 5–10 business days of contract signing. Momentum and Pioneer engagements start with a paid discovery sprint."
	},
	{
		q: "Who owns the work you produce?",
		a: "You do — 100%. Code, content, creative, and data all belong to you and are handed over with source files, credentials and documentation."
	},
	{
		q: "Do you work outside the United States?",
		a: "Yes. We serve clients in 20+ countries with English-fluent teams across three continents for 24/5 coverage."
	},
	{
		q: "What's included in the yearly discount?",
		a: "Paying annually gets you 15% off any monthly plan, priority onboarding, and a free brand or SEO audit worth $2,500."
	},
	{
		q: "Can we upgrade or downgrade at any time?",
		a: "Yes — plans are flexible. Most clients start on Starter or Momentum and expand as their traffic, pipeline and revenue grow."
	}
];
var guarantees = [
	{
		icon: Shield,
		t: "No lock-in contracts",
		d: "Month-to-month with 30-day notice. Cancel anytime."
	},
	{
		icon: Handshake,
		t: "You own everything",
		d: "Code, content, creative, accounts — all yours."
	},
	{
		icon: Zap,
		t: "Fast kickoff",
		d: "Start work within 5–10 business days of signing."
	},
	{
		icon: Award,
		t: "Senior-only pods",
		d: "No juniors billed as seniors. Ever."
	}
];
function PricingPage() {
	const [yearly, setYearly] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden bg-hero pb-20 pt-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -top-24 left-1/2 h-96 w-[60rem] -translate-x-1/2 rounded-full bg-brand-blue/25 blur-3xl blob" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold uppercase tracking-widest text-brand-blue",
						children: "Pricing"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-3 font-display text-4xl font-black sm:text-6xl",
						children: ["Simple pricing. ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gradient",
							children: "Real outcomes."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-6 max-w-2xl text-lg text-muted-foreground",
						children: "Three flexible starting points — every plan is tailored to your goals. Month-to-month, no hidden fees, and staffed by a senior team that treats your business like their own."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 inline-flex rounded-full border border-border bg-card p-1 shadow-card",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setYearly(false),
							className: `rounded-full px-5 py-2 text-sm font-semibold transition ${!yearly ? "bg-gradient-brand text-white shadow-elegant" : "text-muted-foreground"}`,
							children: "Monthly"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setYearly(true),
							className: `rounded-full px-5 py-2 text-sm font-semibold transition ${yearly ? "bg-gradient-brand text-white shadow-elegant" : "text-muted-foreground"}`,
							children: ["Yearly ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "ml-1 rounded-full bg-success/20 px-2 py-0.5 text-xs text-success",
								children: "Save 15%"
							})]
						})]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto mt-14 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4",
						children: [
							{
								n: 250,
								s: "+",
								l: "Clients"
							},
							{
								n: 92,
								s: "%",
								l: "Retention"
							},
							{
								n: 6,
								s: "×",
								l: "Avg. ROAS"
							},
							{
								n: 4.9,
								s: "/5",
								l: "Rating"
							}
						].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-border bg-white/70 p-4 text-center backdrop-blur",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display text-2xl font-black text-gradient",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
									to: s.n,
									suffix: s.s
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground",
								children: s.l
							})]
						}, s.l))
					})
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-6 lg:grid-cols-3",
				children: plans.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TiltCard, {
						className: `relative flex h-full flex-col rounded-3xl border p-8 shadow-card transition hover:shadow-elegant ${p.popular ? "border-brand-blue bg-card ring-2 ring-brand-blue/30" : "border-border bg-card"}`,
						children: [
							p.popular && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-brand px-4 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-elegant",
								children: "Most Popular"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid h-11 w-11 place-items-center rounded-xl bg-gradient-brand text-white shadow-glow",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(p.icon, { className: "h-5 w-5" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-sm font-semibold uppercase tracking-widest text-brand-blue",
									children: p.name
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5 font-display text-5xl font-black",
								children: [p.price === 0 ? "Custom" : `$${(yearly ? Math.round(p.price * .85) : p.price).toLocaleString()}`, p.price !== 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-base font-medium text-muted-foreground",
									children: "/mo"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-2 text-sm text-muted-foreground",
								children: p.tagline
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 rounded-xl bg-secondary/50 px-3 py-2 text-xs",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-semibold",
										children: "Ideal for:"
									}),
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground",
										children: p.ideal
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-6 flex-1 space-y-3 text-sm",
								children: p.features.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mt-0.5 h-4 w-4 shrink-0 text-success" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: f })]
								}, f))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/contact",
								className: `mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition ${p.popular ? "bg-gradient-brand text-white shadow-elegant hover:scale-[1.02]" : "border border-border hover:border-brand-blue hover:text-brand-blue"}`,
								children: ["Get Started ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
							})
						]
					})
				}, p.name))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-hero py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
					children: guarantees.map((g, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-4 rounded-3xl border border-border bg-white p-6 shadow-card",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-12 w-12 place-items-center rounded-2xl bg-gradient-brand-soft text-brand-blue",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(g.icon, { className: "h-6 w-6" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-base font-bold",
								children: g.t
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: g.d
							})] })]
						})
					}, g.t))
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold uppercase tracking-widest text-brand-blue",
						children: "Plan comparison"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-3xl font-bold sm:text-4xl",
						children: "Feature by feature."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-4 max-w-2xl text-muted-foreground",
						children: "A quick side-by-side view of what's included in each plan. Everything is fully customizable."
					})
				]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 overflow-hidden rounded-3xl border border-border bg-card shadow-card",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-x-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						className: "w-full min-w-[720px] text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "bg-gradient-brand-soft text-left",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "p-5 font-display text-base font-bold",
									children: "Feature"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "p-5 text-center font-display text-base font-bold",
									children: "Starter"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "p-5 text-center font-display text-base font-bold text-brand-blue",
									children: "Momentum"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "p-5 text-center font-display text-base font-bold",
									children: "Pioneer"
								})
							]
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: compareRows.map((row, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: i % 2 === 0 ? "bg-white" : "bg-secondary/40",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "p-4 font-medium",
								children: row.label
							}), [
								row.starter,
								row.momentum,
								row.pioneer
							].map((v, j) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "p-4 text-center text-muted-foreground",
								children: v === true ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mx-auto h-5 w-5 text-success" }) : v === false ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground/40",
									children: "—"
								}) : v
							}, j))]
						}, row.label)) })]
					})
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-hero py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold uppercase tracking-widest text-brand-blue",
							children: "Add-ons"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 font-display text-3xl font-bold sm:text-4xl",
							children: "Bolt on what you need."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mt-4 max-w-2xl text-muted-foreground",
							children: "Every plan can be extended with these popular add-on services."
						})
					]
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
					children: addOns.map((a, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i % 3,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "h-full rounded-3xl border border-border bg-white p-6 shadow-card transition hover:-translate-y-1 hover:shadow-elegant",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-lg font-bold",
									children: a.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "whitespace-nowrap rounded-full bg-gradient-brand-soft px-3 py-1 text-xs font-bold text-brand-blue",
									children: a.price
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm text-muted-foreground",
								children: a.d
							})]
						})
					}, a.name))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-semibold uppercase tracking-widest text-brand-blue",
					children: "How it works"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-3xl font-bold sm:text-4xl",
					children: "From first call to first win."
				})]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
				children: [
					{
						step: "01",
						t: "Discovery call",
						d: "A 30-minute deep dive into your goals, market and current stack."
					},
					{
						step: "02",
						t: "Custom proposal",
						d: "A tailored scope, plan and fixed pricing within 3 business days."
					},
					{
						step: "03",
						t: "Kickoff & sprint 1",
						d: "Team is assembled, tools are set up, first sprint starts in ~7 days."
					},
					{
						step: "04",
						t: "Weekly wins",
						d: "Shipping every sprint, reporting every week, learning every month."
					}
				].map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "h-full rounded-3xl border border-border bg-card p-6 shadow-card",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display text-4xl font-black text-gradient",
								children: p.step
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 font-display text-lg font-bold",
								children: p.t
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: p.d
							})
						]
					})
				}, p.step))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-ink py-16 text-white",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
					children: [
						{
							icon: Users,
							l: "Clients served",
							v: "250+"
						},
						{
							icon: Star,
							l: "Average rating",
							v: "4.9/5"
						},
						{
							icon: TrendingUp,
							l: "Client retention",
							v: "92%"
						},
						{
							icon: Clock,
							l: "Avg. kickoff",
							v: "7 days"
						}
					].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-8 w-8 text-brand-teal" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-2xl font-black",
							children: s.v
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-sm text-white/70",
							children: s.l
						})] })]
					}, s.l))
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {
			title: "What clients say about working with us",
			subtitle: "Straight from the founders and operators we partner with."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-4xl px-4 py-24 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-semibold uppercase tracking-widest text-brand-blue",
					children: "FAQ"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-3xl font-bold sm:text-4xl",
					children: "Pricing questions, answered."
				})]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 space-y-3",
				children: faqs.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i % 3,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
						className: "group rounded-2xl border border-border bg-card p-5 shadow-card transition hover:border-brand-blue/40",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", {
							className: "flex cursor-pointer items-start justify-between gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-start gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleQuestionMark, { className: "mt-0.5 h-5 w-5 shrink-0 text-brand-blue" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-base font-bold",
									children: f.q
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-brand-blue transition group-open:rotate-45",
								children: "+"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 pl-8 text-sm text-muted-foreground",
							children: f.a
						})]
					})
				}, f.q))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative overflow-hidden rounded-[2.5rem] bg-gradient-brand p-10 text-center text-white shadow-elegant sm:p-14",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-4xl font-black sm:text-5xl",
						children: "Not sure which plan is right?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-4 max-w-xl text-white/85",
						children: "Book a free 30-minute consultation. We'll listen, ask smart questions and recommend the right starting point — no pressure."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap justify-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/contact",
							className: "inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-brand-blue shadow-card transition hover:scale-[1.03]",
							children: ["Book a free strategy call ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/services",
							className: "inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/10",
							children: "Explore services"
						})]
					})
				]
			}) })
		})
	] });
}
//#endregion
export { PricingPage as component };
