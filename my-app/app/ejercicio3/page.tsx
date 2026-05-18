export default function Ejercicio3Page() {
  const horaServidor = new Date().toLocaleTimeString();

  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center gap-4 p-6 text-center">
      <h1 className="text-3xl font-bold">Ejercicio 3: SSR</h1>
      <p className="text-xl">
        Hora actual (servidor):
        <span className="ml-2 font-semibold">{horaServidor}</span>
      </p>
      <p className="text-sm text-zinc-600 dark:text-zinc-300">
        Recarga la página para obtener una nueva hora renderizada en servidor.
      </p>
    </main>
  );
}
