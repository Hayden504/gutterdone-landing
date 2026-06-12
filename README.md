# Gutter Done — Marketing Landing Page

React + Vite landing page for the Gutter Done mobile estimating app.
Built for deployment on Vercel.

---

## Before you deploy — two things to configure

### 1. Google Analytics Measurement ID

Open `index.html` and replace **both** occurrences of `G-XXXXXXXXXX`:

```html
<!-- line ~33 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  ...
  gtag('config', 'G-XXXXXXXXXX', { send_page_view: true });
</script>
```

To get your Measurement ID:
1. Go to [analytics.google.com](https://analytics.google.com)
2. Admin → Create Property → follow the web stream setup
3. Copy your `G-XXXXXXXXXX` ID from "Measurement ID"

Events tracked automatically:
| Event | Fired when |
|---|---|
| `page_view` | Page loads (built into GA4) |
| `cta_click` | Nav or Hero CTA clicked (`location`: `nav` / `hero`) |
| `form_start` | User types in the signup form for the first time |
| `form_submit` | Form submitted successfully |

### 2. Formspree form endpoint

Open `src/components/SignupForm.jsx` and replace `YOUR_FORM_ID`:

```js
const FORM_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID'
```

To get your endpoint:
1. Go to [formspree.io](https://formspree.io) and sign up (free tier covers 50 submissions/month)
2. Click **+ New Form**, name it "Gutter Done Beta"
3. Copy the endpoint — it looks like `https://formspree.io/f/abcd1234`
4. Paste it in place of `YOUR_FORM_ID`

Formspree will email you each submission. You can also log in to see all responses in a table.

---

## Local development

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Type-check / build for production
npm run build

# Preview production build locally
npm run preview
```

---

## Deploy to Vercel

### Option A — Vercel CLI (fastest)

```bash
npm install -g vercel
vercel
```

Follow the prompts. Vercel auto-detects Vite and sets the correct build command (`vite build`) and output directory (`dist`).

### Option B — GitHub integration

1. Push this folder to a GitHub repo
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import the repo
4. Vercel auto-detects Vite — click **Deploy**

### Option C — Manual drag-and-drop

```bash
npm run build
```

Then drag the `dist/` folder to [vercel.com/new](https://vercel.com/new) → **Deploy**.

---

## Open Graph image

For best social sharing, create a `1200 × 630 px` image and place it at:

```
public/og-image.png
```

Update the URL in `index.html` to match your live domain:

```html
<meta property="og:image" content="https://yourdomain.com/og-image.png" />
```

---

## Project structure

```
gutterdone-landing/
├── public/
│   ├── logo.png          ← nav + footer logo
│   ├── icon.png          ← browser favicon
│   └── og-image.png      ← social share card (add manually — 1200×630)
├── src/
│   ├── components/
│   │   ├── Nav.jsx           sticky nav bar
│   │   ├── Hero.jsx          full-viewport hero
│   │   ├── ProblemSolution.jsx  quote + differentiator copy
│   │   ├── Features.jsx      6-card feature grid
│   │   ├── StraightTalk.jsx  does / doesn't comparison
│   │   ├── SignupForm.jsx     waitlist form → Formspree
│   │   └── Footer.jsx        social links + copyright
│   ├── hooks/
│   │   └── useAnalytics.js   safe gtag wrapper
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css             all styles (CSS vars + components)
├── index.html                meta/OG tags + GA4 snippet
├── vite.config.js
├── package.json
└── README.md
```
