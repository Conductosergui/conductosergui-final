import type { Metadata } from "next";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

const AUTORES = [
  {
    slug: "juan-perez",
    nombre: "Juan Pérez",
    titulo: "Técnico Especialista en Climatización",
    bio: "Con más de 15 años de experiencia en instalación y mantenimiento de sistemas de climatización y ventilación.",
    imagen: "/fotos/juan-perez.jpg"
  }
];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const autor = AUTORES.find((a) => a.slug === slug);
  
  if (!autor) {
    return {
      title: "Autor no encontrado",
    };
  }

  return {
    title: `Perfil de ${autor.nombre}`,
    description: autor.bio,
  };
}

export default async function AutorPage({ params }: Props) {
  const { slug } = await params;
  const autor = AUTORES.find((a) => a.slug === slug);

  if (!autor) {
    notFound();
  }

  const breadcrumbLd={
    "@context":"https://schema.org",
    "@type":"BreadcrumbList",
    "itemListElement":[
      {"@type":"ListItem","position":1,"name":"Inicio","item":"https://conductosergui.es"},
      {"@type":"ListItem","position":2,"name":"Autores"},
      {"@type":"ListItem","position":3,"name":autor.nombre}
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">{autor.nombre}</h1>
          <p className="text-lg text-gray-600 mb-4">{autor.titulo}</p>
          <p className="text-gray-700 mb-6">{autor.bio}</p>
          
          <div className="border-t pt-6">
            <h2 className="text-xl font-semibold mb-4">Artículos publicados</h2>
            <p className="text-gray-600">Próximamente se mostrarán los artículos de este autor.</p>
          </div>
        </div>
      </main>
    </>
  );
}
