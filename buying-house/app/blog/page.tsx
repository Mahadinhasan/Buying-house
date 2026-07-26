import Reveal from "@/components/Reveal";
import SelvedgeDivider from "@/components/SelvedgeDivider";
import { blogPosts } from "@/lib/data";

const morePosts = [
  {
    title: "Reading a Factory Audit Report Without a Compliance Background",
    excerpt: "A plain-language walkthrough of the sections that matter most in a BSCI or Sedex report.",
    date: "2026-03-10",
    tag: "Compliance",
  },
  {
    title: "Why Lead Times Slip in Week Three, Not Week One",
    excerpt: "The mid-production bottlenecks that quietly cost brands their delivery window.",
    date: "2026-02-18",
    tag: "Production",
  },
  {
    title: "Choosing Between FOB and DDP for a First Order",
    excerpt: "A cost and risk comparison for buyers shipping from Bangladesh for the first time.",
    date: "2026-01-27",
    tag: "Logistics",
  },
];

const allPosts = [...blogPosts, ...morePosts];

export default function BlogPage() {
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
          {allPosts.map((post, i) => (
            <Reveal key={post.title} delay={(i % 3) * 70}>
              <article className="border border-ink/10 rounded-card p-6 h-full bg-paper hover:shadow-soft transition-shadow flex flex-col">
                <div className="flex items-center gap-3 font-mono text-[11px] text-ink/45">
                  <span>{post.date}</span>
                  <span>·</span>
                  <span className="text-loom">{post.tag}</span>
                </div>
                <h3 className="mt-3 font-display font-semibold text-ink leading-snug">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm text-ink/60 leading-relaxed flex-1">
                  {post.excerpt}
                </p>
                <span className="mt-4 text-xs font-semibold text-loom">
                  Read more →
                </span>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
