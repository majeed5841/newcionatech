import { createFileRoute, notFound } from "@tanstack/react-router";
import { ServicePage } from "../components/site/ServicePage";
import { getService, services } from "../data/services";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Service not found — CIONA TECH LLC" }, { name: "robots", content: "noindex" }] };
    }
    const s = loaderData.service;
    return {
      meta: [
        { title: s.metaTitle },
        { name: "description", content: s.metaDesc },
        { property: "og:title", content: s.metaTitle },
        { property: "og:description", content: s.metaDesc },
        { property: "og:url", content: `/services/${s.slug}` },
      ],
      links: [{ rel: "canonical", href: `/services/${s.slug}` }],
    };
  },
  component: ServiceDetail,
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-4 py-32 text-center">
      <h1 className="font-display text-3xl font-black">Service not found</h1>
      <p className="mt-3 text-muted-foreground">
        Try one of our services: {services.map((s) => s.name).join(", ")}.
      </p>
    </div>
  ),
});

function ServiceDetail() {
  const { service } = Route.useLoaderData();
  return <ServicePage service={service} />;
}
