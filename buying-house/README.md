# Demo — Buying House Website

A premium, modern website concept for an apparel **buying house** (a
sourcing agency that connects international brands with garment
factories), built with **Next.js 14 (App Router)**, **TypeScript**, and
**Tailwind CSS**.

This is a **front-end design deliverable**: every page uses realistic
dummy data (companies, factories, inquiries, blog posts). There is no
real database or authentication — see "Going live" below for what to
wire up before launch.

## Design direction

- **Palette** — ink navy, unbleached-canvas background, loom green,
  brass/gold, and a stamp-red accent used sparingly for compliance marks.
- **Type** — Bitter (display/headlines), Manrope (body), IBM Plex Mono
  (spec numbers, order codes, data).
- **Signature elements** — a rotated "QC stamp" badge and a woven
  "selvedge stripe" divider, both nodding to the textile/inspection world
  the business operates in.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000 for the public site.

Build for production:

```bash
npm run build
npm run start
```

## Site map

**Public**
- `/` — Home
- `/about` — Company story, milestones, values
- `/services` — Sourcing process (5 stages) and add-on services
- `/products` — Product categories, factory network, portfolio
- `/team` — Leadership/merchandising team and certifications
- `/blog` — Insights articles
- `/contact` — WhatsApp, Gmail, contact form, office info

**Staff / admin (demo, "user managed" area)**
- `/admin` — sign-in gate, then dashboard
- `/admin/products` — manage product categories (in-memory demo)
- `/admin/messages` — customer inquiries with WhatsApp/Gmail quick-reply
- `/admin/blog` — manage blog posts (in-memory demo)

Demo admin login (shown on the sign-in screen too):
```
email:    admin@meridiansourcing.example
password: meridian2026
```

## Customer communication

- **WhatsApp**: a floating button on every public page, plus dedicated
  links on the Contact page and inside `/admin/messages`, all built from
  `https://wa.me/<number>?text=<message>`.
- **Gmail**: "Email via Gmail" opens a pre-filled Gmail compose window
  using `https://mail.google.com/mail/?view=cm&fs=1&to=...&su=...`; a
  plain `mailto:` link is used in the footer for people without Gmail.

Update the phone number, message text, and email address in one place:
`lib/data.ts` → the `company` object.

## Going live — what to connect

This build is intentionally backend-free so you can plug in whatever
stack you prefer:

1. **Contact form** (`components/ContactForm.tsx`) — currently fakes a
   submit. Point it at an API route, Formspree, or your CRM's inbound
   webhook.
2. **Admin auth** (`components/admin/AdminShell.tsx`) — currently a demo
   login stored in `localStorage`. Replace with real auth (e.g.
   NextAuth, Clerk, or your own session/JWT setup) before storing any
   real content or customer data.
3. **Admin CRUD** (`/admin/products`, `/admin/blog`) — currently holds
   edits in React state only (resets on refresh). Wire to a database
   (Postgres, MongoDB, Supabase, etc.) and replace `lib/data.ts` with
   real queries.
4. **Content** — swap every name, factory, testimonial, and blog post in
   `lib/data.ts` for your real company details.

## Project structure

```
app/                  Routes (App Router)
  admin/               Staff area (layout + dashboard + sub-pages)
  about/ services/ products/ team/ blog/ contact/
components/            Shared UI (Navbar, Footer, WhatsApp button, etc.)
components/admin/       Admin shell + sidebar
lib/data.ts             All dummy content in one place
```
