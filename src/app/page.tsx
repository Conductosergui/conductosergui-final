import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inicio | Conductos Ergui",
  description: "Especialistas en instalación, mantenimiento y reparación de conductos de aire y soluciones de pladur en Cunit y alrededores.",
};

const localBusinessLd={
  "@context":"https://schema.org",
  "@type":"LocalBusiness",
  "@id":"https://conductosergui.es/#localbusiness",
  "name":"Conductos Ergui",
  "url":"https://conductosergui.es",
  "telephone":"+34652551861",
  "email":"conductosergui@gmail.com",
  "address":{
    "@type":"PostalAddress",
    "streetAddress":"Carrer Principal",
    "addressLocality":"Cunit",
    "addressRegion":"Tarragona",
    "postalCode":"43881",
    "addressCountry":"ES"
  },
  "areaServed":["Baix Penedès","Garraf","Alt Penedès","Baix Llobregat","Tarragonès"],
  "openingHoursSpecification":{
    "@type":"OpeningHoursSpecification",
    "dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday"],
    "opens":"08:00",
    "closes":"18:00"
  },
  "priceRange":"€€"
};

const faqPageLd={
  "@context":"https://schema.org",
  "@type":"FAQPage",
  "mainEntity":[
    {
      "@type":"Question",
      "name":"¿En qué zonas realizáis instalaciones?",
      "acceptedAnswer":{
        "@type":"Answer",
        "text":"Realizamos instalaciones en Cunit y toda la zona del Baix Penedès, Garraf, Alt Penedès, Baix Llobregat y Tarragonès. Nuestro radio de acción abarca localidades como Calafell, Cubelles, Vilanova i la Geltrú, El Vendrell, Sitges y Vilafranca del Penedès."
      }
    },
    {
      "@type":"Question",
      "name":"¿Qué servicios ofrecéis relacionados con conductos de aire?",
      "acceptedAnswer":{
        "@type":"Answer",
        "text":"Ofrecemos instalación, mantenimiento y reparación de conductos de aire acondicionado y sistemas de ventilación. También realizamos proyectos de climatización para locales comerciales, oficinas y viviendas particulares."
      }
    },
    {
      "@type":"Question",
      "name":"¿Trabajáis con pladur para obras nuevas y reformas?",
      "acceptedAnswer":{
        "@type":"Answer",
        "text":"Sí, trabajamos con pladur tanto para obras nuevas como para reformas. Realizamos tabiquería, falsos techos, aislamiento acústico y térmico, y todo tipo de soluciones con yeso laminado adaptadas a las necesidades de cada proyecto."
      }
    }
  ]
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageLd) }}
      />
      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Conductos Ergui</h1>
          <p className="text-xl text-gray-700 mb-6">
            Especialistas en climatización y pladur en Cunit y alrededores.
          </p>
          <p className="text-gray-600">
            Ofrecemos servicios profesionales de instalación, mantenimiento y reparación de conductos 
            de aire acondicionado y sistemas de ventilación. También somos expertos en soluciones 
            con pladur para todo tipo de proyectos.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Nuestros Servicios</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-medium mb-2">Conductos de Ventilación</h3>
              <p className="text-gray-600">
                Instalación y mantenimiento de conductos para sistemas de climatización y ventilación.
              </p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-medium mb-2">Pladur y Tabiquería</h3>
              <p className="text-gray-600">
                Soluciones completas con yeso laminado para paredes, techos y aislamiento.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Zonas de Servicio</h2>
          <div className="flex flex-wrap gap-2">
            {["Cunit","Calafell","Cubelles","Vilanova i la Geltrú","El Vendrell","Sitges","Vilafranca del Penedès","Castelldefels","Sant Pere de Ribes","Santa Oliva","L'Arboç"].map((area)=>(
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
