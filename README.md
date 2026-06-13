# Marquee Reader — marketing site

The landing page for **Marquee Reader**, a beautiful, private RSS reader for Apple TV
with a Spritz-style speed-reading mode and an iPhone companion app.

🔗 **Live site:** https://marqueereader.app

## What's here

A single-page static site — no build step, no dependencies.

```
.
├── index.html              # the page
├── assets/
│   ├── style.css           # styles (brand: #14171c dark, #f8b43a amber)
│   ├── app.js              # scroll-reveal (progressive enhancement)
│   ├── marquee-logo.svg    # the logo
│   ├── icon-1024.png       # app icon (also the OG fallback)
│   ├── og-image.png        # social share image
│   └── screenshots/        # Apple TV screenshots
└── .nojekyll               # serve assets verbatim on GitHub Pages
```

## Developing

It's plain HTML/CSS/JS — open `index.html` in a browser, or serve the folder:

```sh
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploying (GitHub Pages)

Settings → Pages → Build from branch → `main` / root. Served at the custom
domain in `CNAME` (marqueereader.app); the `.nojekyll` file makes Pages serve
the `assets/` folder as-is.

---

Designed for Apple TV. Not affiliated with Apple Inc. Apple TV, iPhone, tvOS and
iCloud are trademarks of Apple Inc.
