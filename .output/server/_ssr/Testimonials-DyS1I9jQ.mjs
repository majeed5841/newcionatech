import { a as __toESM } from "../_runtime.mjs";
import { a as motion, i as useScroll, n as useTransform, r as useMotionValue, s as performance_default, t as useSpring } from "../_libs/framer-motion.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { l as Star, x as Quote } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Testimonials-DyS1I9jQ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var fadeUp = {
	hidden: {
		opacity: 0,
		y: 24
	},
	show: (i = 0) => ({
		opacity: 1,
		y: 0,
		transition: {
			duration: .6,
			ease: [
				.22,
				1,
				.36,
				1
			],
			delay: i * .06
		}
	})
};
function Reveal({ children, className, delay = 0, as: As = "div" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion(As), {
		className,
		initial: "hidden",
		whileInView: "show",
		viewport: {
			once: true,
			margin: "-80px"
		},
		variants: fadeUp,
		custom: delay,
		children
	});
}
function Counter({ to, suffix = "", duration = 1600 }) {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		let started = false;
		const io = new IntersectionObserver((entries) => {
			entries.forEach((e) => {
				if (e.isIntersecting && !started) {
					started = true;
					const start = performance_default.now();
					const step = (t) => {
						const p = Math.min((t - start) / duration, 1);
						const eased = 1 - Math.pow(1 - p, 3);
						el.textContent = Math.floor(eased * to).toLocaleString() + suffix;
						if (p < 1) requestAnimationFrame(step);
					};
					requestAnimationFrame(step);
				}
			});
		}, { threshold: .4 });
		io.observe(el);
		return () => io.disconnect();
	}, [
		to,
		suffix,
		duration
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		ref,
		children: ["0", suffix]
	});
}
function TiltCard({ children, className }) {
	const ref = (0, import_react.useRef)(null);
	const rx = useSpring(useMotionValue(0), {
		stiffness: 200,
		damping: 20
	});
	const ry = useSpring(useMotionValue(0), {
		stiffness: 200,
		damping: 20
	});
	const onMove = (e) => {
		const el = ref.current;
		if (!el) return;
		const r = el.getBoundingClientRect();
		const x = (e.clientX - r.left) / r.width - .5;
		const y = (e.clientY - r.top) / r.height - .5;
		ry.set(x * 10);
		rx.set(-y * 10);
	};
	const onLeave = () => {
		rx.set(0);
		ry.set(0);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		ref,
		onMouseMove: onMove,
		onMouseLeave: onLeave,
		style: {
			rotateX: rx,
			rotateY: ry,
			transformStyle: "preserve-3d"
		},
		className,
		children
	});
}
function ParallaxY({ children, offset = 60 }) {
	const ref = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"]
	});
	const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		ref,
		style: { y },
		children
	});
}
var testimonials = [
	{
		business: "EZ Notary Services",
		name: "Tonya Ezell",
		role: "Owner",
		comment: "Absolutely loved their service! Here are answers to our most common customer questions. Still curious? Feel free to reach out anytime.",
		rating: 5,
		initials: "EZ",
		color: "from-brand-blue to-brand-teal"
	},
	{
		business: "Dream Homes Designed LLC",
		role: "Founder",
		comment: "Their team exceeded all expectations! Here we answer some of the most frequent questions new clients ask. Have more in mind? Don't hesitate to connect with us anytime for clarity.",
		rating: 5,
		initials: "DH",
		color: "from-brand-green to-brand-teal"
	},
	{
		business: "Ablaze Tree Pros LLC",
		role: "Operations Lead",
		comment: "Outstanding experience from start to finish! Below you'll find answers to common questions new customers usually ask. Still looking for more details? Reach out and our team will happily assist you anytime.",
		rating: 5,
		initials: "AT",
		color: "from-orange-500 to-red-500"
	},
	{
		business: "Cozy Place Learning Center",
		role: "Director",
		comment: "Outstanding experience from start to finish! Below you'll find answers to common questions new customers usually ask. Still looking for more details? Reach out and our team will happily assist you anytime.",
		rating: 5,
		initials: "CP",
		color: "from-pink-500 to-purple-500"
	},
	{
		business: "South Jersey Orofacial Myology",
		role: "Clinical Lead",
		comment: "Outstanding experience from start to finish! Below you'll find answers to common questions new customers usually ask. Still looking for more details? Reach out and our team will happily assist you anytime.",
		rating: 5,
		initials: "SJ",
		color: "from-brand-teal to-brand-blue"
	}
];
function Testimonials({ title = "What Our Clients Say", subtitle = "Real reviews from real business owners we've helped grow." }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden py-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-brand-teal/10 blur-3xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-2xl text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold uppercase tracking-widest text-brand-blue",
						children: "Testimonials"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-3xl font-black sm:text-4xl",
						children: title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-muted-foreground",
						children: subtitle
					})
				]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3",
				children: testimonials.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i % 3,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						whileHover: { y: -6 },
						className: "group relative h-full rounded-3xl border border-border bg-white p-7 shadow-card transition hover:shadow-elegant",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, { className: "absolute right-6 top-6 h-8 w-8 text-brand-blue/15" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex items-center gap-1 text-highlight",
								children: Array.from({ length: t.rating }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-4 w-4 fill-current" }, i))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-5 text-sm leading-relaxed text-foreground/80",
								children: [
									"\"",
									t.comment,
									"\""
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 flex items-center gap-3 border-t border-border/70 pt-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: `grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br ${t.color} font-display text-sm font-bold text-white shadow-glow`,
									children: t.initials
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-sm font-bold",
									children: t.business
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs text-muted-foreground",
									children: [t.name ? `${t.name} · ` : "", t.role ?? "Client"]
								})] })]
							})
						]
					})
				}, t.business))
			})]
		})]
	});
}
//#endregion
export { TiltCard as a, Testimonials as i, ParallaxY as n, Reveal as r, Counter as t };
