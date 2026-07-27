"use client";

import { useState } from "react";
import { useCategoriesStore } from "@/lib/categoriesStore";
import { ProductCategory } from "@/lib/data";
import {
  Plus,
  Trash2,
  Edit2,
  RotateCcw,
  Image as ImageIcon,
  Check,
  X,
  Eye,
  EyeOff,
  Sparkles,
  Layers,
} from "lucide-react";

const IMAGE_PRESETS = [
  { label: "Men's Shirt", url: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80" },
  { label: "Women's Fashion", url: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80" },
  { label: "Selvedge Denim", url: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80" },
  { label: "Activewear", url: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=800&q=80" },
  { label: "Kidswear", url: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=800&q=80" },
  { label: "Workwear Suit", url: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80" },
  { label: "Knit Sweater", url: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80" },
  { label: "Mill Fabrics", url: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=800&q=80" },
];

const SWATCH_PRESETS = ["#A9822E", "#C9A94E", "#14181F", "#3F7566", "#2F5D50", "#B23A2E", "#8C4A32", "#5B6C5D"];

export default function AdminCategoriesPage() {
  const { categories, saveCategories, resetCategories } = useCategoriesStore();
  const [modalOpen, setModalOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState<ProductCategory | null>(null);

  // Form State
  const [name, setName] = useState("");
  const [gender, setGender] = useState<ProductCategory["gender"]>("Men");
  const [moq, setMoq] = useState("500 pcs");
  const [lead, setLead] = useState("25–35 days");
  const [swatch, setSwatch] = useState("#A9822E");
  const [image, setImage] = useState(IMAGE_PRESETS[0].url);
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState<"Published" | "Draft">("Published");

  const openAddModal = () => {
    setEditingCategory(null);
    setName("");
    setGender("Men");
    setMoq("500 pcs");
    setLead("25–35 days");
    setSwatch("#A9822E");
    setImage(IMAGE_PRESETS[0].url);
    setDescription("");
    setStatus("Published");
    setModalOpen(true);
  };

  const openEditModal = (cat: ProductCategory) => {
    setEditingCategory(cat);
    setName(cat.name);
    setGender(cat.gender);
    setMoq(cat.moq);
    setLead(cat.lead);
    setSwatch(cat.swatch || "#A9822E");
    setImage(cat.image);
    setDescription(cat.description || "");
    setStatus(cat.status);
    setModalOpen(true);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    if (editingCategory) {
      // Edit mode
      const updated = categories.map((c) =>
        c.id === editingCategory.id
          ? {
              ...c,
              name: name.trim(),
              gender,
              moq: moq.trim(),
              lead: lead.trim(),
              swatch,
              image: image.trim(),
              description: description.trim(),
              status,
            }
          : c
      );
      saveCategories(updated);
    } else {
      // Add mode
      const newCat: ProductCategory = {
        id: `CAT-${100 + categories.length + 1}`,
        name: name.trim(),
        gender,
        moq: moq.trim() || "500 pcs",
        lead: lead.trim() || "25–35 days",
        swatch,
        image: image.trim() || IMAGE_PRESETS[0].url,
        description: description.trim() || "Quality apparel category.",
        status,
      };
      saveCategories([newCat, ...categories]);
    }
    setModalOpen(false);
  };

  const toggleStatus = (id: string) => {
    const updated = categories.map((c) =>
      c.id === id ? { ...c, status: c.status === "Published" ? ("Draft" as const) : ("Published" as const) } : c
    );
    saveCategories(updated);
  };

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this category?")) {
      saveCategories(categories.filter((c) => c.id !== id));
    }
  };

  return (
    <div className="pb-12">
      {/* Top Header */}
      <div className="flex items-start justify-between flex-wrap gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="mono-label text-xs text-loom font-bold">Category Management</span>
            <span className="text-[10px] bg-loom/10 text-loom px-2 py-0.5 rounded font-mono">
              Live Sync to Public Header Navbar
            </span>
          </div>
          <h1 className="mt-1 font-display text-2xl font-semibold text-ink">
            Category &amp; Navbar Roster
          </h1>
          <p className="mt-1 text-sm text-ink/60 max-w-xl">
            Add or edit buying house categories (Men, Women, Kids, Workwear, Denim, Activewear, Fabrics) with images. Edits update the public Category Navbar instantly.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              if (confirm("Reset all categories to initial factory default dataset?")) {
                resetCategories();
              }
            }}
            className="inline-flex items-center gap-1.5 rounded-sm border border-ink/15 bg-paper text-ink font-semibold px-3.5 py-2 text-xs hover:bg-canvas transition-colors"
          >
            <RotateCcw size={14} /> Reset Defaults
          </button>

          <button
            onClick={openAddModal}
            className="inline-flex items-center gap-2 rounded-sm bg-ink text-canvas font-semibold px-4 py-2 text-sm hover:bg-loom-dark transition-colors shadow-xs"
          >
            <Plus size={16} /> Add Category
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-paper border border-ink/10 rounded-xl p-4">
          <p className="text-2xl font-bold font-display text-ink">{categories.length}</p>
          <p className="text-xs text-ink/55 mt-0.5">Total Categories</p>
        </div>
        <div className="bg-paper border border-ink/10 rounded-xl p-4">
          <p className="text-2xl font-bold font-display text-emerald-700">
            {categories.filter((c) => c.status === "Published").length}
          </p>
          <p className="text-xs text-ink/55 mt-0.5">Published Live</p>
        </div>
        <div className="bg-paper border border-ink/10 rounded-xl p-4">
          <p className="text-2xl font-bold font-display text-amber-600">
            {categories.filter((c) => c.gender === "Men" || c.gender === "Women").length}
          </p>
          <p className="text-xs text-ink/55 mt-0.5">Men's &amp; Women's</p>
        </div>
        <div className="bg-paper border border-ink/10 rounded-xl p-4">
          <p className="text-2xl font-bold font-display text-indigo-600">
            {categories.filter((c) => c.gender === "Fabrics" || c.gender === "Workwear").length}
          </p>
          <p className="text-xs text-ink/55 mt-0.5">Workwear &amp; Fabrics</p>
        </div>
      </div>

      {/* Categories Table */}
      <div className="mt-8 bg-paper border border-ink/10 rounded-2xl overflow-hidden shadow-xs">
        <table className="w-full text-sm text-left">
          <thead>
            <tr className="bg-canvas border-b border-ink/10 text-xs font-semibold text-ink/60">
              <th className="px-5 py-3.5">Category &amp; Image</th>
              <th className="px-4 py-3.5">Target Gender</th>
              <th className="px-4 py-3.5">MOQ &amp; Lead Time</th>
              <th className="px-4 py-3.5">Description</th>
              <th className="px-4 py-3.5">Status</th>
              <th className="px-5 py-3.5 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-ink/10">
            {categories.map((cat) => (
              <tr key={cat.id} className="hover:bg-canvas/50 transition-colors">
                {/* Category & Thumbnail Image */}
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg overflow-hidden border border-ink/15 bg-canvas shrink-0 relative">
                      <img src={cat.image} alt={cat.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span
                          className="w-2.5 h-2.5 rounded-full inline-block shrink-0"
                          style={{ backgroundColor: cat.swatch }}
                        />
                        <span className="font-bold text-ink">{cat.name}</span>
                      </div>
                      <span className="font-mono text-[11px] text-ink/45">{cat.id}</span>
                    </div>
                  </div>
                </td>

                {/* Target Gender Badge */}
                <td className="px-4 py-4">
                  <span className="mono-label text-xs bg-brass/15 text-brass-dark font-bold px-2.5 py-1 rounded-full">
                    {cat.gender}
                  </span>
                </td>

                {/* MOQ & Lead Time */}
                <td className="px-4 py-4 font-mono text-xs text-ink/75">
                  <div>MOQ: <strong className="text-ink">{cat.moq}</strong></div>
                  <div>Lead: <strong className="text-ink">{cat.lead}</strong></div>
                </td>

                {/* Description */}
                <td className="px-4 py-4 text-xs text-ink/65 max-w-xs truncate">
                  {cat.description}
                </td>

                {/* Status Toggle */}
                <td className="px-4 py-4">
                  <button
                    onClick={() => toggleStatus(cat.id)}
                    className={`inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full transition-all ${
                      cat.status === "Published"
                        ? "bg-emerald-100 text-emerald-800 hover:bg-emerald-200"
                        : "bg-ink/10 text-ink/60 hover:bg-ink/20"
                    }`}
                  >
                    {cat.status === "Published" ? <Eye size={12} /> : <EyeOff size={12} />}
                    {cat.status}
                  </button>
                </td>

                {/* Actions */}
                <td className="px-5 py-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button
                      onClick={() => openEditModal(cat)}
                      className="p-1.5 rounded text-ink/60 hover:text-loom hover:bg-canvas transition-colors"
                      title="Edit Category"
                    >
                      <Edit2 size={16} />
                    </button>
                    <button
                      onClick={() => handleDelete(cat.id)}
                      className="p-1.5 rounded text-ink/60 hover:text-stamp hover:bg-canvas transition-colors"
                      title="Delete Category"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add / Edit Category Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-ink/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-paper border border-ink/15 rounded-2xl max-w-lg w-full p-6 shadow-lifted animate-in fade-in zoom-in-95 duration-150 overflow-y-auto max-h-[90vh]">
            <div className="flex items-center justify-between pb-4 border-b border-ink/10">
              <h3 className="font-display font-bold text-lg text-ink">
                {editingCategory ? "Edit Category" : "Add New Category"}
              </h3>
              <button
                onClick={() => setModalOpen(false)}
                className="p-1 rounded-md text-ink/50 hover:text-ink hover:bg-canvas"
              >
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleSave} className="mt-4 space-y-4 text-sm">
              {/* Name */}
              <div>
                <label className="block text-xs font-bold text-ink mb-1">Category Name</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Men's Casual Shirts & Jackets"
                  className="w-full px-3.5 py-2 rounded-lg border border-ink/15 bg-canvas text-ink text-sm focus:outline-none focus:border-loom"
                />
              </div>

              {/* Gender Target & Status */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-ink mb-1">Target Classification</label>
                  <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value as any)}
                    className="w-full px-3.5 py-2 rounded-lg border border-ink/15 bg-canvas text-ink text-sm focus:outline-none focus:border-loom"
                  >
                    <option value="Men">Men's Wear</option>
                    <option value="Women">Women's Wear</option>
                    <option value="Kids">Kids &amp; Baby</option>
                    <option value="Workwear">Workwear &amp; Uniforms</option>
                    <option value="Unisex">Unisex / Denim</option>
                    <option value="Fabrics">Mill Fabrics</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-ink mb-1">Publish Status</label>
                  <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value as any)}
                    className="w-full px-3.5 py-2 rounded-lg border border-ink/15 bg-canvas text-ink text-sm focus:outline-none focus:border-loom"
                  >
                    <option value="Published">Published (Live)</option>
                    <option value="Draft">Draft (Hidden)</option>
                  </select>
                </div>
              </div>

              {/* MOQ & Lead Time */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-ink mb-1">Minimum Order (MOQ)</label>
                  <input
                    type="text"
                    value={moq}
                    onChange={(e) => setMoq(e.target.value)}
                    placeholder="e.g. 500 pcs"
                    className="w-full px-3.5 py-2 rounded-lg border border-ink/15 bg-canvas text-ink text-sm focus:outline-none focus:border-loom"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-ink mb-1">Production Lead Time</label>
                  <input
                    type="text"
                    value={lead}
                    onChange={(e) => setLead(e.target.value)}
                    placeholder="e.g. 25–35 days"
                    className="w-full px-3.5 py-2 rounded-lg border border-ink/15 bg-canvas text-ink text-sm focus:outline-none focus:border-loom"
                  />
                </div>
              </div>

              {/* Image URL & Preset Selection */}
              <div>
                <label className="block text-xs font-bold text-ink mb-1">
                  Category Image URL
                </label>
                <input
                  type="text"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  placeholder="https://images.unsplash.com/..."
                  className="w-full px-3.5 py-2 rounded-lg border border-ink/15 bg-canvas text-ink text-sm font-mono text-xs focus:outline-none focus:border-loom"
                />

                {/* Preset Garment Photo Selector */}
                <p className="mt-2 text-[11px] text-ink/55 font-semibold">Or pick a photo preset:</p>
                <div className="mt-1.5 flex flex-wrap gap-1.5">
                  {IMAGE_PRESETS.map((p) => (
                    <button
                      key={p.label}
                      type="button"
                      onClick={() => setImage(p.url)}
                      className={`text-[11px] px-2 py-1 rounded border transition-colors ${
                        image === p.url
                          ? "bg-loom text-paper border-loom font-bold"
                          : "bg-canvas text-ink/75 border-ink/10 hover:border-ink/30"
                      }`}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Preview Image Card */}
              {image && (
                <div className="flex items-center gap-3 p-2.5 rounded-xl border border-ink/10 bg-canvas">
                  <div className="w-14 h-14 rounded-lg overflow-hidden border border-ink/15 shrink-0">
                    <img src={image} alt="Preview" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <span className="mono-label text-[10px] text-loom font-bold">Image Preview</span>
                    <p className="text-xs text-ink/70 truncate max-w-xs">{image}</p>
                  </div>
                </div>
              )}

              {/* Swatch & Description */}
              <div>
                <label className="block text-xs font-bold text-ink mb-1">Badge Color Swatch</label>
                <div className="flex items-center gap-2">
                  <input
                    type="color"
                    value={swatch}
                    onChange={(e) => setSwatch(e.target.value)}
                    className="w-8 h-8 rounded border border-ink/15 cursor-pointer bg-transparent"
                  />
                  <div className="flex items-center gap-1">
                    {SWATCH_PRESETS.map((c) => (
                      <button
                        key={c}
                        type="button"
                        onClick={() => setSwatch(c)}
                        className={`w-6 h-6 rounded-full border transition-transform ${
                          swatch === c ? "scale-110 border-ink shadow-xs" : "border-transparent"
                        }`}
                        style={{ backgroundColor: c }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-ink mb-1">Description</label>
                <textarea
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Summary of garments, fabrics, and styles included in this category..."
                  className="w-full px-3.5 py-2 rounded-lg border border-ink/15 bg-canvas text-ink text-sm focus:outline-none focus:border-loom"
                />
              </div>

              {/* Modal Buttons */}
              <div className="pt-3 border-t border-ink/10 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="px-4 py-2 rounded-lg border border-ink/15 text-ink/75 font-semibold text-xs hover:bg-canvas"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-lg bg-ink text-canvas font-semibold text-xs hover:bg-loom-dark shadow-xs flex items-center gap-1.5"
                >
                  <Check size={14} /> Save Category
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
