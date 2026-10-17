# Shadi Ki Baraat

Ad-free baraat playlists and Hindi wedding procession songs, told as one night in seven stops. Built with Astro, deployed to Cloudflare at shadikibaraat.com.

## Run locally

```sh
npm install
npm run dev       # local dev server
npm run build     # static build into dist/
npm run preview   # serve the build
```

Deploy with `npx wrangler deploy` (serves `dist/`, see `wrangler.jsonc`).

## What's on the home page

- Seven painted scenes, one per phase of the baraat, with a clickable timeline. `?phase=N` links straight to a stop.
- A player for each phase's songs (from `src/data/songs.json`), played through a hidden YouTube player, with a synthesised dhol beat as fallback if YouTube fails to load.
- A video window for the full music video.
- Full-scene view (`Z` or the corner button), left/right arrow keys for previous/next song, reduced-motion support.

## Project structure

- `src/pages/` — home page plus `/songs`, `/playlists` and SEO article pages.
- `src/layouts/`, `src/components/` — shared layout, nav and footer.
- `src/data/songs.json` — the song library, grouped by phase.
- `public/assets/phase-*.webp` — desktop scenes; `mobile-phase-*.webp` — portrait scenes for mobile.

The site embeds official YouTube videos and does not redistribute audio.
