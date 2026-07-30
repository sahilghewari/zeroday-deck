# ZeroDay 2.0 Presentation Deck

This is the interactive, web-based presentation deck for **ZeroDay 2.0: The Next Iconic Innovation Festival**.

## Tech Stack
- **Framework:** React (Vite)
- **Styling:** Vanilla CSS (Premium Apple/Stripe aesthetic)
- **Animations:** Framer Motion
- **Icons:** Lucide React

## Development
To run the presentation locally:

```bash
npm install
npm run dev
```

## Structure
- `src/data/slides.js` - Contains the content payload for all 27 slides.
- `src/components/layouts/` - Contains the specialized UI layouts (`CoverSlide`, `SplitSlide`, `GridSlide`, `TimelineSlide`).
- `src/App.jsx` - The main presentation engine that orchestrates the slides and keyboard navigation.
