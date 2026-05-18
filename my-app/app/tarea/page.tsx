"use client";

import { useEffect, useMemo, useState } from "react";

type Product = {
  id: number;
  name: string;
  category: "Tecnología" | "Hogar" | "Alimentos";
  price: number;
};

const PRODUCTS: Product[] = [
  { id: 1, name: "Teclado mecánico", category: "Tecnología", price: 45.99 },
  { id: 2, name: "Mouse inalámbrico", category: "Tecnología", price: 19.5 },
  { id: 3, name: "Lámpara LED", category: "Hogar", price: 22.0 },
  { id: 4, name: "Sartén antiadherente", category: "Hogar", price: 27.4 },
  { id: 5, name: "Café orgánico", category: "Alimentos", price: 12.25 },
  { id: 6, name: "Granola", category: "Alimentos", price: 8.9 },
];

export default function TareaPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setProducts(PRODUCTS);
    }, 200);

    return () => clearTimeout(timeoutId);
  }, []);

  const categories = useMemo(
    () => ["Todos", ...new Set(products.map((product) => product.category))],
    [products],
  );

  const filteredProducts = useMemo(() => {
    if (selectedCategory === "Todos") return products;
    return products.filter((product) => product.category === selectedCategory);
  }, [products, selectedCategory]);

  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col gap-6 p-6">
      <h1 className="text-3xl font-bold">Tarea: Lista de productos (CSR)</h1>
      <p className="text-zinc-600 dark:text-zinc-300">
        Filtra los productos por categoría usando <code>useState</code> y
        <code> useEffect</code>.
      </p>

      <section className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setSelectedCategory(category)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
              selectedCategory === category
                ? "border-black bg-black text-white dark:border-white dark:bg-white dark:text-black"
                : "border-zinc-300 hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-900"
            }`}
          >
            {category}
          </button>
        ))}
      </section>

      <section className="rounded-xl border border-zinc-200 p-4 dark:border-zinc-800">
        <h2 className="mb-4 text-xl font-semibold">
          Categoría seleccionada: {selectedCategory}
        </h2>

        <ul className="space-y-3">
          {filteredProducts.map((product) => (
            <li
              key={product.id}
              className="flex items-center justify-between rounded-lg bg-zinc-100 p-3 dark:bg-zinc-900"
            >
              <div>
                <p className="font-medium">{product.name}</p>
                <p className="text-sm text-zinc-600 dark:text-zinc-300">
                  {product.category}
                </p>
              </div>
              <p className="font-semibold">${product.price.toFixed(2)}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
