import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CLUSTERS, AREAS } from "@/data/guias";

interface Props {
  params: Promise<{ cluster: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { cluster } = await params;
  const clusterData = CLUSTERS.find((c) => c.slug === cluster);
  
  if (!clusterData) {
    return {
      title: "Tema no encontrado",
    };
  }

  return {
    title: clusterData.title,
    description: clusterData.description,
  };
}

export default async function ClusterPage({ params }: Props) {
  const { cluster } = await params;
  const clusterData = CLUSTERS.find((c) => c.slug === cluster);

  if (!clusterData) {
    notFound();
  }

  const collectionLd={
    "@context":"https://schema.org",
    "@type":"Collection",
    "@id":`https://conductosergui.es/temas/${clusterData.slug}#collection`,
    "name":clusterData.title,
    "description":clusterData.description
  };

  const itemListLd={
    "@context":"https://schema.org",
    "@type":"ItemList",
    "itemListElement":[
      {
        "@type":"ListItem",
        "position":1,
        "url":`https://conductosergui.es/temas/${clusterData.slug}`,
        "name":clusterData.title
      }
    ]
  };

  const breadcrumbLd={
    "@context":"https://schema.org",
    "@type":"BreadcrumbList",
    "itemListElement":[
      {"@type":"ListItem","position":1,"name":"Inicio","item":"https://conductosergui.es"},
      {"@type":"ListItem","position":2,"name":"Guías","item":"https://conductosergui.es/guias"},
      {"@type":"ListItem","position":3,"name":clusterData.title}
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">{clusterData.title}</h1>
        <p className="mb-8 text-gray-700">{clusterData.description}</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Información sobre {clusterData.title.toLowerCase()}</h2>
          <p className="text-gray-700">
            En esta sección encontrarás información detallada sobre {clusterData.title.toLowerCase()}. 
            Nuestros expertos están disponibles para asesorarte en cualquier proyecto relacionado.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Zonas de Servicio</h2>
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
