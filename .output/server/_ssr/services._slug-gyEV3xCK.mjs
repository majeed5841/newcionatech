import { B as notFound } from "../_libs/@tanstack/router-core+[...].mjs";
import { l as lazyRouteComponent, o as createFileRoute } from "./esm-Dq0SkE5R.mjs";
import { n as getService } from "./services-CFfaaoSj.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services._slug-gyEV3xCK.js
var $$splitNotFoundComponentImporter = () => import("./services._slug-v2DPa3FC.mjs");
var $$splitComponentImporter = () => import("./services._slug-DXQn-f0Y.mjs");
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
