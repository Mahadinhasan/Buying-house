"use client";

import { useState } from "react";
import { Plus, Trash2, Pencil } from "lucide-react";
import { blogPosts as initialPosts } from "@/lib/data";

type Post = (typeof initialPosts)[number] & { id: string; published: boolean };

const withIds: Post[] = initialPosts.map((p, i) => ({
  ...p,
  id: `POST-${100 + i}`,
  published: true,
}));

export default function AdminBlogPage() {
  const [posts, setPosts] = useState<Post[]>(withIds);

  function togglePublished(id: string) {
    setPosts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, published: !p.published } : p))
    );
  }

  function remove(id: string) {
    setPosts((prev) => prev.filter((p) => p.id !== id));
  }

  function addPost() {
    setPosts((prev) => [
      {
        id: `POST-${200 + prev.length}`,
        title: "Untitled draft",
        excerpt: "Add a summary for this post…",
        date: new Date().toISOString().slice(0, 10),
        tag: "Sourcing",
        published: false,
      },
      ...prev,
    ]);
  }

  return (
    <div>
      <div className="flex items-start justify-between flex-wrap gap-4">
        <div>
          <p className="mono-label text-xs text-loom">Blog</p>
          <h1 className="mt-1 font-display text-2xl font-semibold text-ink">
            Insights posts
          </h1>
          <p className="mt-1.5 text-sm text-ink/55 max-w-lg">
            Manage what appears on the public Insights page.
          </p>
        </div>
        <button
          onClick={addPost}
          className="inline-flex items-center gap-2 rounded-sm bg-ink text-canvas font-semibold px-4 py-2.5 text-sm hover:bg-loom-dark transition-colors"
        >
          <Plus size={16} /> New post
        </button>
      </div>

      <div className="mt-8 space-y-3">
        {posts.map((p) => (
          <div
            key={p.id}
            className="bg-paper border border-ink/10 rounded-card p-5 flex items-center justify-between gap-4 flex-wrap"
          >
            <div className="min-w-0">
              <div className="flex items-center gap-2 font-mono text-[11px] text-ink/45">
                <span>{p.date}</span>
                <span>·</span>
                <span className="text-loom">{p.tag}</span>
              </div>
              <p className="mt-1 text-sm font-medium text-ink truncate max-w-md">
                {p.title}
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => togglePublished(p.id)}
                className={`text-xs font-medium px-2.5 py-1 rounded-full transition-colors ${
                  p.published
                    ? "bg-loom/10 text-loom hover:bg-loom/20"
                    : "bg-ink/10 text-ink/60 hover:bg-ink/15"
                }`}
              >
                {p.published ? "Published" : "Draft"}
              </button>
              <button
                aria-label={`Edit ${p.title}`}
                className="w-8 h-8 rounded-sm border border-ink/10 flex items-center justify-center text-ink/50 hover:border-ink/30 transition-colors"
              >
                <Pencil size={14} />
              </button>
              <button
                onClick={() => remove(p.id)}
                aria-label={`Delete ${p.title}`}
                className="w-8 h-8 rounded-sm border border-ink/10 flex items-center justify-center text-ink/40 hover:text-stamp hover:border-stamp/30 transition-colors"
              >
                <Trash2 size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
