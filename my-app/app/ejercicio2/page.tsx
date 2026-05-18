"use client";

import { useState } from "react";

export default function Ejercicio2Page() {
  const [horaActual, setHoraActual] = useState<string>(
    new Date().toLocaleTimeString(),
  );

  const actualizarHora = () => {
    setHoraActual(new Date().toLocaleTimeString());
  };

  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center gap-6 p-6 text-center">
      <h1 className="text-3xl font-bold">Ejercicio 2: CSR</h1>
      <p className="text-xl">
        Hora actual (cliente): <span className="font-semibold">{horaActual}</span>
      </p>
      <button
        type="button"
        onClick={actualizarHora}
        className="rounded-lg bg-black px-5 py-3 text-white dark:bg-white dark:text-black"
      >
        Actualizar hora
      </button>
    </main>
  );
}
