# Shadi Ki Baraat

A responsive, single-page interactive website prototype inspired by cinematic Indian street-scene environment art and understated glassmorphism UI.

## Run locally

1. Extract the ZIP while preserving the `assets` folder beside `index.html`.
2. Open `index.html` in a modern browser.
3. An internet connection is needed for Google Fonts and YouTube video playback. The site artwork and core interactions are bundled locally.

## What's included

- Seven painterly environment scenes for seven phases of an Indian baraat.
- Responsive glassmorphism interface with a 8px spacing rhythm.
- Clickable phase timeline with phase-specific story copy and music selection.
- YouTube video modal. Playback only starts after a user click.
- Interactive chaos controls: deploy an uncle, dhol boost, DJ upgrade, and Full Bollywood.
- Generated Baraat Report with copy, text download, and native share options where supported.
- Lights-up / lights-low toggle, keyboard left/right timeline navigation, reduced-motion support.

## Project structure

- `index.html` — page markup, CSS, interaction logic.
- `assets/phase-*.webp` — optimized painterly phase art.

## Implementation notes

This is a static front-end MVP. The chaos score and report state live in browser memory and reset on reload. YouTube is embedded from official video IDs. The website does not redistribute audio files.
