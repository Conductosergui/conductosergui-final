import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Glosario de Términos",
  description: "Diccionario de términos relacionados con climatización, ventilación y pladur.",
};

const definedTermSetLd={
  "@context":"https://schema.org",
  "@type":"DefinedTermSet",
  "name":"Glosario de Climatización y Pladur",
  "description":"Términos técnicos sobre conductos, ventilación y construcción en seco.",
  "hasDefinedTerm":[
    {
      "@type":"DefinedTerm",
      "name":"Conducto",
      "termCode":"conducto",
      "description":"Tubo o canal por donde circula el aire en sistemas de climatización."
    },
    {
      "@type":"DefinedTerm",
      "name":"Pladur",
      "termCode":"pladur",
      "description":"Marca comercial que se usa comúnmente para referirse al yeso laminado."
    },
    {
      "@type":"DefinedTerm",
      "name":"HVAC",
      "termCode":"hvac",
      "description":"Sistema de calefacción, ventilación y aire acondicionado."
    }
  ]
};

export default function GlosarioPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermSetLd) }}
      />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Glosario de Términos</h1>
        <p className="mb-8 text-gray-700">
          Consulta nuestro diccionario de términos técnicos sobre climatización, ventilación y pladur.
        </p>

        <dl className="space-y-6">
          <div>
            <dt className="font-semibold text-lg">Conducto</dt>
            <dd className="text-gray-700">Tubo o canal por donde circula el aire en sistemas de climatización.</dd>
          </div>
          <div>
            <dt className="font-semibold text-lg">Pladur</dt>
            <dd className="text-gray-700">Marca comercial que se usa comúnmente para referirse al yeso laminado.</dd>
          </div>
          <div>
            <dt className="font-semibold text-lg">HVAC</dt>
            <dd className="text-gray-700">Sistema de calefacción, ventilación y aire acondicionado.</dd>
          </div>
        </dl>
      </main>
    </>
  );
}
