import { createFileRoute } from "@tanstack/react-router";

import { MenuView } from "@/components/menu/MenuView";
import { menuDoc } from "@/data/menu";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Beer N Nuts — Restaurant & Bar | Digital Menu" },
      {
        name: "description",
        content:
          "Explore the Beer N Nuts restaurant and bar menu, including food, drinks, coffee, snacks and more.",
      },
      { property: "og:title", content: "Beer N Nuts — Restaurant & Bar | Digital Menu" },
      {
        property: "og:description",
        content:
          "Explore the Beer N Nuts restaurant and bar menu, including food, drinks, coffee, snacks and more.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://menusnap-elegant-view.lovable.app/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://menusnap-elegant-view.lovable.app/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Restaurant",
          name: "Beer N Nuts Restaurant & Bar",
          servesCuisine: ["Nepalese", "Newari", "Continental"],
          telephone: "+977 9803339489",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Basantapur",
            addressLocality: "Kathmandu",
            addressCountry: "NP",
          },
          openingHours: "Mo-Su 08:00-21:00",
          hasMenu: "https://menusnap-elegant-view.lovable.app/",
        }),
      },
    ],
  }),

  component: MenuPage,
});

function MenuPage() {
  return <MenuView doc={menuDoc} />;
}
