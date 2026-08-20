"use client";

import { useState } from "react";
import {
  Plus,
  Trash2,
  Pencil,
  Check,
  Newspaper,
  Calendar,
  Tag,
  Save,
  X,
  Eye,
} from "lucide-react";
import { useSiteStore, BlogPostItem } from "@/lib/siteStore";

export default function AdminBlogPage() {
  const { blogPosts, updateBlogPosts } = useSiteStore();
  const [posts, setPosts] = useState<BlogPostItem[]>(blogPosts);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [savedNotice, setSavedNotice] = useState(false);

  const [newPost, setNewPost] = useState<Omit<BlogPostItem, "id">>({
    title: "",
    excerpt: "",
    date: new Date().toISOString().split("T")[0],
    tag: "Sourcing",
    readTime: "4 min read",
    published: true,
  });

  function handleSaveAll() {
    updateBlogPosts(posts);
    setSavedNotice(true);
    setTimeout(() => setSavedNotice(false), 2500);
  }

  function handleAddPost() {
    if (!newPost.title) return;
    const added: BlogPostItem = {
      ...newPost,
      id: `BLOG-${Date.now()}`,
    };
    const updated = [added, ...posts];
    setPosts(updated);
    updateBlogPosts(updated);
    setNewPost({
      title: "",
      excerpt: "",
      date: new Date().toISOString().split("T")[0],
      tag: "Sourcing",
      readTime: "4 min read",
      published: true,
    });
    setShowAddModal(false);
  }

  function togglePublished(id: string) {
    const updated = posts.map((p) =>
      p.id === id ? { ...p, published: !p.published } : p
    );
    setPosts(updated);
    updateBlogPosts(updated);
  }

  function handleDelete(id: string) {
    if (confirm("Delete this article?")) {
      const updated = posts.filter((p) => p.id !== id);
      setPosts(updated);
      updateBlogPosts(updated);
    }
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-start justify-between flex-wrap gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="mono-label text-xs text-loom font-semibold">Content &amp; Insights</span>
            {savedNotice && (
              <span className="inline-flex items-center gap-1 text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-700 border border-emerald-500/30 animate-pulse">
                <Check size={12} /> Blog Posts Saved!
              </span>
            )}
          </div>
          <h1 className="mt-1 font-display text-3xl font-bold text-ink tracking-tight">
            Insights &amp; Industry Articles
          </h1>
          <p className="mt-1 text-sm text-ink/65 max-w-2xl">
            Manage write-ups and compliance briefs that appear on the public Insights page.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowAddModal(true)}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-loom/10 text-loom font-semibold text-xs sm:text-sm hover:bg-loom/20 transition-colors"
          >
            <Plus size={16} /> New Article
          </button>
          <button
            onClick={handleSaveAll}
            className="inline-flex items-center gap-2 rounded-xl bg-loom text-paper font-semibold px-5 py-2.5 text-xs sm:text-sm hover:bg-loom-dark transition-all shadow-xs"
          >
            <Save size={16} /> Save All
          </button>
        </div>
      </div>

      {/* Add Modal */}
      {showAddModal && (
        <div className="p-6 rounded-2xl bg-paper border border-loom/40 shadow-lifted space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-ink/10">
            <h3 className="font-display font-bold text-base text-ink flex items-center gap-2">
              <Newspaper size={18} className="text-loom" /> Add New Article
            </h3>
            <button onClick={() => setShowAddModal(false)} className="text-ink/50 hover:text-ink">
              <X size={18} />
            </button>
          </div>

          <div className="space-y-3">
            <div>
              <label className="text-xs font-semibold text-ink/75 block mb-1">Article Title *</label>
              <input
                type="text"
                value={newPost.title}
                onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                placeholder="e.g. Navigating 2026 Bangladesh Sustainable Sourcing Trends"
                className="w-full rounded-xl border border-ink/20 bg-canvas px-3.5 py-2 text-xs font-semibold text-ink"
              />
            </div>

            <div className="grid sm:grid-cols-3 gap-3">
              <div>
                <label className="text-xs font-semibold text-ink/75 block mb-1">Category Tag</label>
                <input
                  type="text"
                  value={newPost.tag}
                  onChange={(e) => setNewPost({ ...newPost, tag: e.target.value })}
                  placeholder="Compliance / Sourcing"
                  className="w-full rounded-xl border border-ink/20 bg-canvas px-3.5 py-2 text-xs font-mono"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-ink/75 block mb-1">Publication Date</label>
                <input
                  type="date"
                  value={newPost.date}
                  onChange={(e) => setNewPost({ ...newPost, date: e.target.value })}
                  className="w-full rounded-xl border border-ink/20 bg-canvas px-3.5 py-2 text-xs font-mono"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-ink/75 block mb-1">Read Time</label>
                <input
                  type="text"
                  value={newPost.readTime}
                  onChange={(e) => setNewPost({ ...newPost, readTime: e.target.value })}
                  placeholder="4 min read"
                  className="w-full rounded-xl border border-ink/20 bg-canvas px-3.5 py-2 text-xs"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-ink/75 block mb-1">Excerpt Summary</label>
              <textarea
                value={newPost.excerpt}
                onChange={(e) => setNewPost({ ...newPost, excerpt: e.target.value })}
                rows={3}
                placeholder="Brief summary of the article..."
                className="w-full rounded-xl border border-ink/20 bg-canvas p-3 text-xs"
              />
            </div>
          </div>

          <button
            onClick={handleAddPost}
            className="px-5 py-2.5 rounded-xl bg-loom text-paper font-semibold text-xs hover:bg-loom-dark transition-colors shadow-xs"
          >
            Publish / Save Article
          </button>
        </div>
      )}

      {/* Posts List */}
      <div className="space-y-4">
        {posts.map((p, idx) => {
          const isEditing = editingId === p.id;

          return (
            <div
              key={p.id}
              className="bg-paper border border-ink/10 rounded-2xl p-6 shadow-xs flex flex-col justify-between hover:border-loom/30 transition-all space-y-3"
            >
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div className="min-w-0 space-y-1.5 flex-1">
                  <div className="flex items-center gap-2 font-mono text-[11px] text-ink/45 flex-wrap">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} /> {p.date}
                    </span>
                    <span>·</span>
                    <span className="mono-label text-[10px] bg-loom/10 text-loom font-bold px-2.5 py-0.5 rounded-full">
                      {p.tag}
                    </span>
                  </div>

                  {isEditing ? (
                    <div className="space-y-2 pt-2">
                      <input
                        type="text"
                        value={p.title}
                        onChange={(e) => {
                          const copy = [...posts];
                          copy[idx].title = e.target.value;
                          setPosts(copy);
                        }}
                        className="w-full font-display font-bold text-base bg-canvas border border-ink/20 rounded-lg px-3 py-1.5"
                      />
                      <textarea
                        value={p.excerpt}
                        onChange={(e) => {
                          const copy = [...posts];
                          copy[idx].excerpt = e.target.value;
                          setPosts(copy);
                        }}
                        rows={2}
                        className="w-full text-xs text-ink/70 bg-canvas border border-ink/20 rounded-lg p-2.5"
                      />
                    </div>
                  ) : (
                    <div>
                      <h3 className="font-display font-bold text-base sm:text-lg text-ink">
                        {p.title}
                      </h3>
                      <p className="text-xs text-ink/65 leading-relaxed mt-1">
                        {p.excerpt}
                      </p>
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => togglePublished(p.id)}
                    className={`text-xs font-mono font-bold px-3 py-1 rounded-full transition-colors ${
                      p.published
                        ? "bg-loom/15 text-loom border border-loom/30"
                        : "bg-ink/10 text-ink/60 border border-ink/20"
                    }`}
                  >
                    {p.published ? "Published" : "Draft"}
                  </button>

                  <button
                    onClick={() => setEditingId(isEditing ? null : p.id)}
                    className="p-2 rounded-lg border border-ink/10 text-ink/50 hover:text-loom transition-colors"
                    title={isEditing ? "Done" : "Edit"}
                  >
                    {isEditing ? <Check size={14} /> : <Pencil size={14} />}
                  </button>

                  <button
                    onClick={() => handleDelete(p.id)}
                    className="p-2 rounded-lg border border-ink/10 text-ink/40 hover:text-stamp transition-colors"
                    title="Delete article"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
