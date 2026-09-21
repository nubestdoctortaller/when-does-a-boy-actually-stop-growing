# When Does a Boy Actually Stop Growing?

A lightweight, self-contained landing page introducing the Doctor Taller article ["When Do Boys Stop Growing?"](https://doctortaller.com/blogs/science-insight/when-do-boys-stop-growing), with a working mid-parental height mini-calculator built in.

This is a **teaser/intro version** of the full article — it summarizes the key points and links back to the complete piece on [doctortaller.com](https://doctortaller.com/blogs/science-insight/when-do-boys-stop-growing) for the full breakdown, data tables, citations, and the full-featured Height Predictor Calculator.

## Live Demo

Once deployed via GitHub Pages (see below), the page will be available at:

```
https://<your-github-username>.github.io/<repo-name>/
```

## File Structure

```
.
├── index.html    # Page markup and content
├── style.css     # Styling (soft brand palette, mobile-responsive)
├── script.js     # Mid-parental height calculator logic
└── README.md     # This file
```

## What's Inside

- **`index.html`** — The article teaser plus a "Quick Tool" section with a small height-estimator form. Includes a `<link rel="canonical">` tag pointing back to the original article on doctortaller.com to avoid duplicate-content SEO issues.
- **`style.css`** — A self-contained stylesheet (no external dependencies, no build step) using CSS custom properties for the brand color palette, with mobile breakpoints and `prefers-reduced-motion` support.
- **`script.js`** — Vanilla JavaScript (no frameworks) implementing the **mid-parental height method**, a standard clinical estimation formula:

  ```
  Boy's predicted adult height (cm) = (father's height + mother's height + 13) / 2
  ```

  The result is shown as a range (±8.5 cm), since roughly 68% of boys fall within that range of the calculated midpoint — not as a single, falsely precise number.

## Running Locally

No build tools or dependencies required. Just open `index.html` directly in a browser, or serve the folder with any static file server, e.g.:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploying to GitHub Pages

1. Push this repo to GitHub.
2. Go to **Settings → Pages**.
3. Under "Build and deployment," set **Source** to "Deploy from a branch."
4. Select the `main` branch and `/ (root)` folder, then save.
5. GitHub will publish the site at `https://<username>.github.io/<repo-name>/` within a few minutes.

## Content Source & Attribution

Content adapted from the original article on Doctor Taller:
[**When Do Boys Stop Growing?**](https://doctortaller.com/blogs/science-insight/when-do-boys-stop-growing) — Doctor Taller Science Insight, by Joann Caldwellson, reviewed by Doctor Taller Editors.

The full article includes CDC growth chart data, peer-reviewed citations (Marshall & Tanner, Silventoinen et al., Mayo Clinic Laboratories reference ranges, and more), and a full-featured Height Predictor Calculator.

## License

Content © Doctor Taller / NuBest, Inc. This repository is intended for content distribution and demonstration purposes as part of Doctor Taller's cross-platform publishing workflow, not for independent reuse or redistribution.
