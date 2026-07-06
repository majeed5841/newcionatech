import { A as notFound, f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as getService } from "./services-BLc2ZXRq.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services._slug-jtKESBNF.js
var $$splitNotFoundComponentImporter = () => import("./services._slug-B_U44VXC.mjs");
var $$splitComponentImporter = () => import("./services._slug-Bzd1xAhl.mjs");
var Route = createFileRoute("/services/$slug")({
	loader: ({ params }) => {
		const service = getService(params.slug);
		if (!service) throw notFound();
		return { service };
	},
	head: ({ loaderData }) => {
		if (!loaderData) return { meta: [{ title: "Service not found — CIONA TECH LLC" }, {
			name: "robots",
			content: "noindex"
		}] };
		const s = loaderData.service;
		return {
			meta: [
				{ title: s.metaTitle },
				{
					name: "description",
					content: s.metaDesc
				},
				{
					property: "og:title",
					content: s.metaTitle
				},
				{
					property: "og:description",
					content: s.metaDesc
				},
				{
					property: "og:url",
					content: `/services/${s.slug}`
				}
			],
			links: [{
				rel: "canonical",
				href: `/services/${s.slug}`
			}]
		};
	},
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent")
});
//#endregion
export { Route as t };
