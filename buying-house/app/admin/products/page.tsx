"use client";

import Link from "next/link";
import { Plus, Trash2, ArrowRight, Layers } from "lucide-react";
import { useCategoriesStore } from "@/lib/categoriesStore";

export default function AdminProductsPage() {
  const { categories, saveCategories } = useCategoriesStore();

  function toggleStatus(id: string) {
    saveCategories(
      categories.map((p) =>
        p.id === id
          ? { ...p, status: p.status === "Published" ? "Draft" : "Published" }
          : p
      )
    );
  }

  function remove(id: string) {
    if (confirm("Are you sure you want to delete this category?")) {
      saveCategories(categories.filter((p) => p.id !== id));
    }
  }

  return (
    <div>
      <div className="flex items-start justify-between flex-wrap gap-4">
        <div>
          <p className="mono-label text-xs text-loom">Products &amp; Categories</p>
          <h1 className="mt-1 font-display text-2xl font-semibold text-ink">
            Product Categories Overview
          </h1>
          <p className="mt-1.5 text-sm text-ink/55 max-w-lg">
            Changes here update the public Category Navbar and Products page in real time with local browser persistence.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/admin/categories"
            className="inline-flex items-center gap-2 rounded-sm bg-loom text-paper font-semibold px-4 py-2.5 text-sm hover:bg-loom-dark transition-colors shadow-xs"
          >
            <Layers size={16} /> Advanced Category Manager <ArrowRight size={14} />
          </Link>
        </div>
      </div>

      <div className="mt-8 bg-paper border border-ink/10 rounded-card overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-ink/10 text-left text-xs text-ink/45 bg-canvas">
              <th className="px-6 py-3 font-medium">SKU / ID</th>
              <th className="px-6 py-3 font-medium">Category</th>
              <th className="px-6 py-3 font-medium">Classification</th>
              <th className="px-6 py-3 font-medium">MOQ</th>
              <th className="px-6 py-3 font-medium">Lead time</th>
              <th className="px-6 py-3 font-medium">Status</th>
              <th className="px-6 py-3 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-ink/10">
            {categories.map((p) => (
              <tr key={p.id}>
                <td className="px-6 py-4 font-mono text-xs text-ink/50">{p.id}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-10 h-10 rounded-lg object-cover border border-ink/10"
                    />
                    <div>
                      <span className="font-bold text-ink block">{p.name}</span>
                      <span className="text-[11px] text-ink/50 truncate max-w-xs block">{p.description}</span>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="mono-label text-[11px] bg-brass/15 text-brass-dark px-2.5 py-0.5 rounded-full font-bold">
                    {p.gender}
                  </span>
                </td>
                <td className="px-6 py-4 text-ink/70 font-mono text-xs">{p.moq}</td>
                <td className="px-6 py-4 text-ink/70 font-mono text-xs">{p.lead}</td>
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
            {categories.length === 0 && (
              <tr>
                <td colSpan={7} className="px-6 py-10 text-center text-ink/45 text-sm">
                  No product categories yet. Add one from the Category Manager.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
