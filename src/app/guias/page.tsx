import type { Metadata } from "next";
import Link from "next/link";
import { CLUSTERS, AREAS } from "@/data/guias";

export const metadata: Metadata = {
  title: "Guías de Climatización y Pladur",
  description: "Guías completas sobre conductos de ventilación, pladur y mantenimiento HVAC en Cunit y alrededores.",
};

const breadcrumbLd={
  "@context":"https://schema.org",
  "@type":"BreadcrumbList",
  "itemListElement":[
    {"@type":"ListItem","position":1,"name":"Inicio","item":"https://conductosergui.es"},
    {"@type":"ListItem","position":2,"name":"Guías"}
  ]
};

const itemListLd={
  "@context":"https://schema.org",
  "@type":"ItemList",
  "itemListElement":CLUSTERS.map((c,i)=>({
    "@type":"ListItem",
    "position":i+1,
    "url":`https://conductosergui.es/temas/${c.slug}`,
    "name":c.title
  }))
};

export default function GuiasPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd) }}
      />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Guías de Climatización y Pladur</h1>
        <p className="mb-8 text-gray-700">
          Encuentra información detallada sobre conductos de ventilación, instalación de pladur y mantenimiento de sistemas HVAC.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CLUSTERS.map((cluster) => (
            <Link
              key={cluster.slug}
              href={`/temas/${cluster.slug}`}
              className="block p-6 border rounded-lg hover:shadow-md transition-shadow"
            >
              <h2 className="text-xl font-semibold mb-2">{cluster.title}</h2>
              <p className="text-gray-600 mb-3">{cluster.description}</p>
              <span className="text-blue-600 hover:text-blue-800">Leer más →</span>
            </Link>
          ))}
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Zonas de Servicio</h2>
          <div className="flex flex-wrap gap-2">
            {AREAS.map((area) => (
              <span
                key={area}
                className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700"
              >
                {area}
              </span>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
