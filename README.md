# MenuSnap — Beer N Nuts

A mobile-first digital restaurant menu created as a MenuSnap project.

## Overview

MenuSnap turns a restaurant's existing physical menu into a fast, mobile-friendly digital
menu that opens instantly after a customer scans a QR code. There is no ordering, no login
and no checkout — the same information as the printed menu, in a far better digital form.

## Features

- Mobile-first menu experience, tuned for phone widths
- Single-page scrolling menu — no navigation to learn
- Restaurant branding (logo, name, opening information)
- Menu search that filters items live
- Category-based organization, including multi-price tables (momo styles, pizza sizes, hard drinks)
- Selective food imagery used as visual rhythm, not on every item
- Discovery system: Signature, Best Seller, Chef's Pick, Customer Favorite, Special, Popular
- Highlight overlay (bottom sheet) that returns the customer to their exact scroll position
- Restaurant contact information in the footer (address, phone, hours, Instagram)
- Responsive behavior: a centred phone-width column on any screen
- QR-ready single URL

## Design Philosophy

MenuSnap is designed as a beautifully redesigned physical menu for the phone —
information-first, visually engaging, and intentionally simple.

The restaurant owner decides which dishes deserve visual emphasis and which items receive
highlight tags; MenuSnap handles the presentation.

## Technology

- TanStack Start (TanStack Router, file-based routing) with SSR
- React 19 + TypeScript
- Vite
- Tailwind CSS v4
- Vaul (bottom-sheet overlay), lucide-react (icons)
- ESLint + Prettier

## Project Structure

```
public/                 favicon, robots.txt
src/
  routes/
    __root.tsx          document shell, sitewide head metadata
    index.tsx           the menu page (header, search, ticker, sections, footer)
  components/menu/      MenuSection, DiscoveryTicker, HighlightSheet
  components/ui/        drawer primitive used by the highlight overlay
  data/menu.ts          restaurant details + all menu sections and prices
  data/highlights.ts    curated highlight groups and badge metadata
  assets/               food and brand imagery
  styles.css            design tokens and global styles
```

Menu content is edited in `src/data/menu.ts`; highlights in `src/data/highlights.ts`.

## Deployment

The project is intended to be deployed to Vercel from GitHub. Push the repository, import
it in Vercel, and deploy — no environment variables or backend services are required.

## Credits

Powered by MenuSnap.

## Project Status

This is the Beer N Nuts MenuSnap implementation — the first restaurant deployment.
