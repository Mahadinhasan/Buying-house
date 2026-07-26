"use client";

import { useState } from "react";
import { Plus, Trash2 } from "lucide-react";
import { adminProducts as initialProducts } from "@/lib/data";

type Product = (typeof initialProducts)[number];

const swatchPool = ["#2F5D50", "#A9822E", "#14181F", "#B23A2E", "#3F7566", "#C9A94E"];

export default function AdminProductsPage() {
  const [products, setProducts] = useState<Product[]>(initialProducts);

  function toggleStatus(id: string) {
    setProducts((prev) =>
      prev.map((p) =>
        p.id === id
          ? { ...p, status: p.status === "Published" ? "Draft" : "Published" }
          : p
      )
    );
  }

  function remove(id: string) {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  }

  function addProduct() {
    const n = products.length + 1;
    setProducts((prev) => [
      {
        id: `SKU-${1000 + prev.length + 100}`,
        name: `New Category ${n}`,
        moq: "500 pcs",
        lead: "25–35 days",
        swatch: swatchPool[n % swatchPool.length],
        status: "Draft",
      },
      ...prev,
    ]);
  }

  return (
    <div>
      <div className="flex items-start justify-between flex-wrap gap-4">
        <div>
          <p className="mono-label text-xs text-loom">Products</p>
          <h1 className="mt-1 font-display text-2xl font-semibold text-ink">
            Product categories
          </h1>
          <p className="mt-1.5 text-sm text-ink/55 max-w-lg">
            Changes here update the public "Products &amp; Factories" page.
            This demo stores edits in memory only — they reset on refresh.
          </p>
        </div>
        <button
          onClick={addProduct}
          className="inline-flex items-center gap-2 rounded-sm bg-ink text-canvas font-semibold px-4 py-2.5 text-sm hover:bg-loom-dark transition-colors"
        >
          <Plus size={16} /> Add category
        </button>
      </div>

      <div className="mt-8 bg-paper border border-ink/10 rounded-card overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-ink/10 text-left text-xs text-ink/45">
              <th className="px-6 py-3 font-medium">SKU</th>
              <th className="px-6 py-3 font-medium">Category</th>
              <th className="px-6 py-3 font-medium">MOQ</th>
              <th className="px-6 py-3 font-medium">Lead time</th>
              <th className="px-6 py-3 font-medium">Status</th>
              <th className="px-6 py-3 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-ink/10">
            {products.map((p) => (
              <tr key={p.id}>
                <td className="px-6 py-4 font-mono text-xs text-ink/50">{p.id}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2.5">
                    <span
                      className="w-3 h-3 rounded-sm shrink-0"
                      style={{ backgroundColor: p.swatch }}
                    />
                    <span className="font-medium text-ink">{p.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-ink/70">{p.moq}</td>
                <td className="px-6 py-4 text-ink/70">{p.lead}</td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => toggleStatus(p.id)}
                    className={`text-xs font-medium px-2.5 py-1 rounded-full transition-colors ${
                      p.status === "Published"
                        ? "bg-loom/10 text-loom hover:bg-loom/20"
                        : "bg-ink/10 text-ink/60 hover:bg-ink/15"
                    }`}
                  >
                    {p.status}
                  </button>
                </td>
                <td className="px-6 py-4 text-right">
                  <button
                    onClick={() => remove(p.id)}
                    aria-label={`Delete ${p.name}`}
                    className="text-ink/40 hover:text-stamp transition-colors"
                  >
                    <Trash2 size={16} />
                  </button>
                </td>
              </tr>
            ))}
            {products.length === 0 && (
              <tr>
                <td colSpan={6} className="px-6 py-10 text-center text-ink/45 text-sm">
                  No product categories yet. Add one to get started.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
