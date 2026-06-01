# Nina — Project Handoff Document
**Date:** June 1, 2026  
**Status:** Phase 2 complete — site live at nintron.com, CMS configured and ready

---

## What Was Built

A personal artist portfolio site for Nina, built on the following stack:

- **Framework:** [Astro](https://astro.build) with the [Dante theme](https://github.com/JustGoodUI/dante-astro-theme)
- **Styling:** Tailwind CSS, dark mode default, coral accent color (`#E8855A`)
- **Content:** Markdown files in `site/src/content/`
- **Hosting:** Cloudflare Pages (auto-deploys on every push to `master`)
- **Repo:** [github.com/chromaglow/Nina](https://github.com/chromaglow/Nina)
- **Live URL:** [nintron.com](https://nintron.com)
- **CMS:** [nintron.com/admin](https://nintron.com/admin)
- **Netlify project:** deluxe-puffpuff-7d0d79.netlify.app
- **Cloudflare Pages (preview):** nina-4dz.pages.dev

---

## Site Structure

| Page | URL | Content file |
|---|---|---|
| Home | `/` | `site/src/data/site-config.ts` |
| Gallery | `/projects` | `site/src/content/projects/*.md` |
| Journal | `/blog` | `site/src/content/blog/*.md` |
| About | `/about` | `site/src/content/pages/about.md` |
| Contact | `/contact` | `site/src/content/pages/contact.md` |

---

## Gallery — Current Paintings (14 pieces)

All images live in `site/src/assets/images/art/`. Working titles — Nina should rename any she wants by editing the corresponding `.md` file in `site/src/content/projects/`.

| File | Working Title | Medium |
|---|---|---|
| the-beetle.md | The Beetle | Acrylic on canvas |
| athena.md | Athena | Acrylic on canvas |
| world-on-fire.md | World on Fire | Acrylic on canvas |
| the-dream.md | The Dream | Colored pencil on paper |
| king-of-worlds.md | King of Worlds | Colored pencil on paper |
| moon-rabbit.md | Moon Rabbit | Acrylic on canvas |
| solar-horse.md | Solar Horse | Acrylic on canvas |
| hive-heart.md | Hive Heart | Colored pencil on paper |
| first-family.md | First Family | Colored pencil on paper |
| the-singer.md | The Singer | Colored pencil on paper |
| phoenix-heart.md | Phoenix Heart | Acrylic on canvas |
| running-free.md | Running Free | Acrylic on canvas |
| skull-garden.md | Skull Garden | Colored pencil on paper |
| cobra-moon.md | Cobra Moon | Acrylic on canvas |

---

## What's Placeholder / Still Needs Nina's Input

- [ ] **Email address** on the contact page — currently `your@email.com`
- [ ] **Painting titles** — all working titles, she can rename any of them
- [ ] **Bio details** — Philadelphia / San Francisco / Pacific Northwest sketch is placeholder, confirm accuracy with Nina
- [ ] **About page photo** — using the b&w studio photo, confirm she's happy with it
- [ ] **Avatar** — using the color photo (pink/teal hair), confirm she's happy with it

---

## Socials Wired Up

- Instagram: [@nintron](https://www.instagram.com/nintron)
- Facebook: [facebook.com/nintron](https://www.facebook.com/nintron)

---

## How to Make Changes Right Now (Developer)

All content is in Markdown. To change anything:

1. Edit the relevant `.md` file in `site/src/content/`
2. For site-wide settings (name, bio, nav, socials) edit `site/src/data/site-config.ts`
3. Commit and push to `master` — Cloudflare Pages auto-rebuilds in ~60 seconds

---

## Next Phase — CMS Setup (Decap + Netlify)

This is what gives Nina a dashboard to manage her own site without touching code.

**What it enables:**
- Nina logs in at `/admin` from any browser
- She can write and publish journal posts with images
- She can add new paintings to the gallery
- She can update her bio and contact info
- No code, no GitHub — just a form-based editor

**Steps to complete:**
1. Create a Netlify account (free tier is sufficient)
2. Connect the `chromaglow/Nina` GitHub repo to Netlify
3. Set build command: `npm run build`, root: `site`, output: `dist`
4. Enable Netlify Identity → set to Invite Only → invite Nina's email
5. Enable Git Gateway under Identity → Services
6. Add `public/admin/index.html` and `public/admin/config.yml` to the site
7. Deploy and verify Nina can log in at `/admin`
8. Walk Nina through publishing her first post (~45 min session)

**Note:** Decap CMS requires Netlify for the Identity/Git Gateway auth to work. The Cloudflare Pages URL can remain as a secondary preview environment.

---

## Future Phases (When Ready)

- **Prints / Commerce:** Stripe Payment Links + buy button embeds on individual gallery pages
- **Custom domain:** Point Nina's own domain to Netlify when she purchases one
- **Image hosting:** Consider Cloudinary if image library grows beyond ~50 pieces

---

## Repo Layout

```
Nina/
├── art/                        # Original art photos (source)
├── site/                       # Astro project
│   ├── src/
│   │   ├── assets/images/      # Optimized images used by the site
│   │   │   ├── art/            # Painting photos
│   │   │   ├── avatar.jpg      # Nina's avatar (color photo)
│   │   │   ├── hero.jpg        # Homepage hero (b&w photo)
│   │   │   └── about.jpg       # About page photo (b&w photo)
│   │   ├── content/
│   │   │   ├── projects/       # Gallery pieces (one .md per painting)
│   │   │   ├── blog/           # Journal posts
│   │   │   └── pages/          # About, Contact
│   │   ├── data/
│   │   │   └── site-config.ts  # Site name, nav, socials, hero text
│   │   └── styles/
│   │       └── global.css      # Colors and theme
├── self portrait.jpg           # Source: drawn self portrait
├── self 2.jpg                  # Source: b&w photo (used as hero + about)
├── self3.jpg                   # Source: color photo (used as avatar)
├── socials.txt                 # Nina's social links
└── HANDOFF.md                  # This document
```

---

## Nina's To-Do — Taking Full Ownership

When you're ready to own your site completely and save money, here's what to do. None of this is urgent — the site works fine as-is.

### 1. Transfer your domain off GoDaddy (saves ~$10/yr)

Your domain **nintron.com** expires December 11, 2026. GoDaddy charges ~$20/yr to renew. Cloudflare charges ~$10/yr (no markup, ever).

To transfer to Cloudflare:
1. Create a free account at [cloudflare.com](https://cloudflare.com)
2. Go to **Domain Registration** → **Transfer Domains**
3. Enter `nintron.com`
4. Back in GoDaddy: turn off auto-renew, turn off domain lock, get the transfer authorization code (EPP code)
5. Enter the EPP code in Cloudflare and complete the transfer (~$10, adds one year)
6. Transfer takes 5–7 days

### 2. Create a free GitHub account

Go to [github.com](https://github.com) and create a free account. Let your developer know your username and they can transfer the site code to your account — then the whole project is truly yours.

### 3. Point your domain to your site

Once you have a GitHub account and Netlify is set up, update two DNS records in GoDaddy (or Cloudflare if you transferred) to point `nintron.com` at Netlify. Your developer can do this in about 5 minutes with your login.

---

*None of this needs to happen right away. Your site is live and working. Do these steps when it feels right.*
