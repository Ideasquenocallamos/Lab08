import Link from "next/link";

const ejercicios = [
  {
    ruta: "/ejercicio1",
    titulo: "Ejercicio 1: Hola Mundo en Next.js",
    descripcion: "Página básica de bienvenida para validar la configuración.",
  },
  {
    ruta: "/ejercicio2",
    titulo: "Ejercicio 2: CSR (Client-Side Rendering)",
    descripcion: "Reloj en cliente que se actualiza al hacer clic.",
  },
  {
    ruta: "/ejercicio3",
    titulo: "Ejercicio 3: SSR (Server-Side Rendering)",
    descripcion: "Hora renderizada desde el servidor en cada request.",
  },
  {
    ruta: "/tarea",
    titulo: "Tarea: Lista de Productos con filtro (CSR)",
    descripcion: "Listado de productos + filtro por categoría con hooks.",
  },
];

export default function Home() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-4xl p-8">
      <h1 className="mb-3 text-3xl font-bold">Laboratorio Next.js</h1>
      <p className="mb-6 text-zinc-600 dark:text-zinc-300">
        Usa estas rutas para evidenciar cada ejercicio del laboratorio.
      </p>

      <ul className="mb-10 grid gap-4">
        {ejercicios.map((item) => (
          <li key={item.ruta} className="rounded-xl border border-zinc-200 p-4 dark:border-zinc-800">
            <h2 className="text-xl font-semibold">{item.titulo}</h2>
            <p className="mb-3 text-zinc-600 dark:text-zinc-300">{item.descripcion}</p>
            <Link
              href={item.ruta}
              className="inline-block rounded-lg bg-black px-4 py-2 text-white dark:bg-white dark:text-black"
            >
              Ir a {item.ruta}
            </Link>
          </li>
        ))}
      </ul>

      <section className="rounded-xl border border-dashed border-zinc-300 p-4 dark:border-zinc-700">
        <h3 className="mb-2 text-lg font-semibold">Observaciones sugeridas</h3>
        <ul className="list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-200">
          <li>Se verificó la instalación de Node.js y npm antes de iniciar.</li>
          <li>Se utilizó enrutamiento con App Router para separar cada ejercicio.</li>
          <li>En CSR se usó estado local para actualizar contenido dinámico en cliente.</li>
          <li>En SSR la hora se genera en servidor al cargar la ruta.</li>
          <li>Se ejecutó lint para validar calidad del código.</li>
        </ul>
      </section>
    </main>
  );
}
