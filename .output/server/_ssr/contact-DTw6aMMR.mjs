import { a as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { C as Phone, M as Mail, O as MessageCircle, U as Handshake, _ as Send, _t as ArrowRight, a as Users, at as CircleCheck, ft as Calendar, j as MapPin, l as Star, m as Shield, rt as CircleQuestionMark, t as Zap, tt as Clock, u as Sparkles } from "../_libs/lucide-react.mjs";
import { a as TiltCard, i as Testimonials, r as Reveal, t as Counter } from "./Testimonials-DyS1I9jQ.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-DTw6aMMR.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var services = [
	"SEO & Content",
	"Google Ads (PPC)",
	"Social Media Marketing",
	"Web Development",
	"App Development",
	"CRM & Automation",
	"Branding & Design",
	"Content Marketing",
	"Full-service growth",
	"Not sure yet"
];
var budgets = [
	"Under $2,500 / mo",
	"$2,500 – $7,500 / mo",
	"$7,500 – $20,000 / mo",
	"$20,000+ / mo",
	"Project-based"
];
var reasons = [
	{
		icon: Zap,
		t: "Fast replies",
		d: "Every inquiry gets a real human response within 1 business day."
	},
	{
		icon: Shield,
		t: "No pushy sales",
		d: "Just an honest conversation about your goals — no scripts, no pressure."
	},
	{
		icon: Handshake,
		t: "Senior consultant",
		d: "Your first call is with a strategist, not a sales rep or account manager."
	},
	{
		icon: Sparkles,
		t: "Free audit optional",
		d: "Ask for a complimentary SEO, ads or website audit worth $2,500."
	}
];
var faqs = [
	{
		q: "How quickly will you respond?",
		a: "We reply to every message within 1 business day — often within a few hours during Houston business hours (Mon–Fri, 9am–7pm CT)."
	},
	{
		q: "Is the initial consultation really free?",
		a: "Yes. Your first 30-minute call is completely free, with no obligation. We use it to understand your goals and see if we're the right partner."
	},
	{
		q: "What should I prepare for the first call?",
		a: "Nothing formal. Come with your goals, current challenges and any questions. If you have analytics access or a current site to review, that helps us go deeper."
	},
	{
		q: "Do you work with businesses outside the US?",
		a: "Absolutely. We serve clients in 20+ countries, with English-fluent teams across the Americas, Europe and Asia for 24/5 coverage."
	},
	{
		q: "Can we sign an NDA before sharing details?",
		a: "Of course. We're happy to send a mutual NDA before you share anything sensitive — just mention it in your message."
	},
	{
		q: "What's your minimum engagement?",
		a: "Retainers start at $999/mo (Starter plan). Custom projects typically start at $6,500. See our pricing page for details."
	}
];
function ContactPage() {
	const [sent, setSent] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden bg-hero pb-20 pt-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -top-24 left-1/2 h-96 w-[60rem] -translate-x-1/2 rounded-full bg-brand-blue/25 blur-3xl blob" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold uppercase tracking-widest text-brand-blue",
						children: "Contact"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-3 font-display text-4xl font-black sm:text-6xl",
						children: ["Let's build something ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gradient",
							children: "remarkable."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-6 max-w-2xl text-lg text-muted-foreground",
						children: "Tell us where you are and where you want to be. A senior consultant will reply within 1 business day with clear next steps — no scripts, no pressure."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4",
						children: [
							{
								icon: Clock,
								l: "Reply time",
								v: "< 1 day"
							},
							{
								icon: Users,
								l: "Clients",
								v: "250+"
							},
							{
								icon: Star,
								l: "Rating",
								v: "4.9/5"
							},
							{
								icon: Calendar,
								l: "Kickoff",
								v: "7 days"
							}
						].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-border bg-white/70 p-4 text-center backdrop-blur",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "mx-auto h-5 w-5 text-brand-blue" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-2 font-display text-xl font-black text-gradient",
									children: s.v
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-0.5 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground",
									children: s.l
								})
							]
						}, s.l))
					})
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-8 lg:grid-cols-[1fr_1.4fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex h-full flex-col gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TiltCard, {
						className: "rounded-3xl border border-border bg-card p-8 shadow-card",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-2xl font-bold",
								children: "Get in touch"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: "Full-service digital agency headquartered in Houston, TX — serving clients worldwide."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "mt-8 space-y-5 text-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-start gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "grid h-11 w-11 place-items-center rounded-xl bg-brand-blue/10 text-brand-blue",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-5 w-5" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-xs uppercase tracking-wider text-muted-foreground",
											children: "Phone"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "tel:+12548700892",
											className: "font-semibold hover:text-brand-blue",
											children: "+1 (254) 870-0892"
										})] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-start gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "grid h-11 w-11 place-items-center rounded-xl bg-brand-teal/15 text-brand-teal",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-5 w-5" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-xs uppercase tracking-wider text-muted-foreground",
											children: "Email"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "mailto:info@cionatech.com",
											className: "font-semibold hover:text-brand-blue",
											children: "info@cionatech.com"
										})] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-start gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "grid h-11 w-11 place-items-center rounded-xl bg-success/15 text-success",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-5 w-5" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-xs uppercase tracking-wider text-muted-foreground",
												children: "Location"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "font-semibold",
												children: "Houston, Texas, USA"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-xs text-muted-foreground",
												children: "Serving clients in 20+ countries"
											})
										] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-start gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "grid h-11 w-11 place-items-center rounded-xl bg-highlight/15 text-highlight",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-5 w-5" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-xs uppercase tracking-wider text-muted-foreground",
												children: "Office Hours"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "font-semibold",
												children: "Mon – Fri, 9:00 AM – 7:00 PM CT"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-xs text-muted-foreground",
												children: "24/5 global support for retainer clients"
											})
										] })]
									})
								]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "tel:+12548700892",
							className: "flex items-center gap-3 rounded-2xl border border-border bg-gradient-brand p-4 text-white shadow-elegant transition hover:scale-[1.02]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-5 w-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[11px] uppercase tracking-wider opacity-80",
								children: "Call now"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm font-bold",
								children: "Talk to us"
							})] })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "https://wa.me/12548700892",
							target: "_blank",
							rel: "noopener noreferrer",
							className: "flex items-center gap-3 rounded-2xl border border-border bg-white p-4 shadow-card transition hover:border-success hover:text-success",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-5 w-5 text-success" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[11px] uppercase tracking-wider text-muted-foreground",
								children: "WhatsApp"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm font-bold",
								children: "Chat now"
							})] })]
						})]
					})]
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: (e) => {
							e.preventDefault();
							setSent(true);
						},
						className: "rounded-3xl border border-border bg-card p-8 shadow-card",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-2xl font-bold",
								children: "Send us a message"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: "A senior consultant will reply within 1 business day."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 grid gap-4 sm:grid-cols-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Full Name",
										name: "name",
										required: true
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Work Email",
										name: "email",
										type: "email",
										required: true
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Company",
										name: "company"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Phone",
										name: "phone",
										type: "tel"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 grid gap-4 sm:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground",
									children: "Service Interest"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
									className: "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/30",
									children: services.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: s }, s))
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground",
									children: "Monthly Budget"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
									className: "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/30",
									children: budgets.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: b }, b))
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground",
									children: "Tell us about your project"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									rows: 5,
									className: "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/30",
									placeholder: "Goals, timeline, current stack, anything we should know…"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "mt-4 flex items-start gap-2 text-xs text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "checkbox",
									className: "mt-0.5",
									defaultChecked: true
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "I agree to be contacted about my inquiry. We never share your info — see our privacy policy." })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "submit",
								className: "mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-brand px-6 py-3.5 text-sm font-semibold text-white shadow-elegant transition hover:scale-[1.01] sm:w-auto",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-4 w-4" }), " Send Message"]
							}),
							sent && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 flex items-center gap-2 rounded-xl border border-success/30 bg-success/10 px-4 py-3 text-sm text-success",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4" }), " Thanks! We'll be in touch within one business day."]
							})
						]
					})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-hero py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold uppercase tracking-widest text-brand-blue",
						children: "Why reach out"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-3xl font-bold sm:text-4xl",
						children: "A conversation worth having."
					})]
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
					children: reasons.map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TiltCard, {
							className: "h-full rounded-3xl border border-border bg-white p-6 shadow-card",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid h-12 w-12 place-items-center rounded-2xl bg-gradient-brand text-white shadow-glow",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(r.icon, { className: "h-6 w-6" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-5 font-display text-lg font-bold",
									children: r.t
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted-foreground",
									children: r.d
								})
							]
						})
					}, r.t))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-8 lg:grid-cols-2 lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold uppercase tracking-widest text-brand-blue",
						children: "Visit us"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-3xl font-bold sm:text-4xl",
						children: "Headquartered in Houston."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-muted-foreground",
						children: "Our HQ is in the heart of Houston, Texas — a global business hub where energy, healthcare and tech converge. Prefer remote? Most of our engagements start and stay virtual, with the same quality of collaboration."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 grid grid-cols-3 gap-4",
						children: [
							{
								n: 100,
								s: "+",
								l: "Team members"
							},
							{
								n: 20,
								s: "+",
								l: "Countries served"
							},
							{
								n: 24,
								s: "/5",
								l: "Coverage"
							}
						].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-border bg-card p-4 text-center shadow-card",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display text-2xl font-black text-gradient",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
									to: s.n,
									suffix: s.s
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-1 text-xs text-muted-foreground",
								children: s.l
							})]
						}, s.l))
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden rounded-3xl border border-border shadow-elegant",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
						title: "CIONA TECH LLC — Houston, Texas",
						src: "https://www.google.com/maps?q=Houston,+Texas&output=embed",
						width: "100%",
						height: "380",
						loading: "lazy",
						referrerPolicy: "no-referrer-when-downgrade",
						className: "block"
					})
				})]
			}) })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {
			title: "Loved by teams like yours",
			subtitle: "A few kind words from partners we've worked with."
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
					children: "Before you send that message."
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
						children: "Prefer to skip the form?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-4 max-w-xl text-white/85",
						children: "Give us a call or book a time on our calendar — we'll do the rest."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap justify-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "tel:+12548700892",
							className: "inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-brand-blue shadow-card transition hover:scale-[1.03]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" }), " +1 (254) 870-0892"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/pricing",
							className: "inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/10",
							children: ["See pricing ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						})]
					})
				]
			}) })
		})
	] });
}
function Field({ label, name, type = "text", required }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		htmlFor: name,
		className: "mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		id: name,
		name,
		type,
		required,
		className: "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/30"
	})] });
}
//#endregion
export { ContactPage as component };
