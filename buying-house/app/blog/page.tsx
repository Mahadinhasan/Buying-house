"use client";

import Reveal from "@/components/Reveal";
import SelvedgeDivider from "@/components/SelvedgeDivider";
import { useSiteStore } from "@/lib/siteStore";

export default function BlogPage() {
  const { publishedBlogPosts } = useSiteStore();

  return (
    <>
      <section className="mx-auto max-w-6xl px-5 sm:px-8 pt-16 pb-14 sm:pt-20">
        <p className="mono-label text-xs text-loom font-medium">Insights</p>
        <h1 className="mt-4 font-display text-4xl sm:text-5xl font-semibold tracking-tight max-w-3xl">
          Notes from the merchandising desk.
        </h1>
        <p className="mt-6 text-base sm:text-lg text-ink/65 leading-relaxed max-w-2xl">
          Practical write-ups on sourcing, compliance, and production —
          written by the team running your orders, not a marketing desk.
        </p>
      </section>

      <SelvedgeDivider />

      <section className="mx-auto max-w-6xl px-5 sm:px-8 py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {publishedBlogPosts.map((post, i) => (
            <Reveal key={post.id || post.title} delay={(i % 3) * 70}>
              <article className="border border-ink/10 rounded-2xl p-6 h-full bg-paper hover:shadow-soft transition-shadow flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 font-mono text-[11px] text-ink/45">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span className="mono-label text-[10px] bg-loom/10 text-loom font-bold px-2 py-0.5 rounded-full">
                      {post.tag}
                    </span>
                    {post.readTime && (
                      <>
                        <span>·</span>
                        <span>{post.readTime}</span>
                      </>
                    )}
                  </div>
                  <h3 className="mt-3 font-display font-bold text-lg text-ink leading-snug">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink/65 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
                <span className="mt-5 text-xs font-semibold text-loom inline-flex items-center gap-1 hover:gap-2 transition-all">
                  Read article &rarr;
                </span>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
