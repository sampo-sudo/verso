# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Verso is a Finnish sustainable fashion shop discovery app built with React + TypeScript + Vite. Users can browse shops on a map or list, filter by sustainability certifications (vegan, fair working conditions, Finnish-made, sustainable materials), view shop details/reviews, and explore brand lists. The UI language is Finnish.

## Commands

- `npm run dev` — start Vite dev server with HMR
- `npm run build` — TypeScript check + Vite production build
- `npm run lint` — ESLint across the project
- `npm run preview` — preview production build locally
- `docker compose up --build` — build and run in Docker (serves on port 3000)

## Architecture

- **Routing**: React Router v7 (`BrowserRouter` in `main.tsx`, routes in `App.tsx`)
  - `/` Home, `/map` MapView, `/list` ListView, `/filter` FilterPanel, `/shop/:id` ShopDetail, `/shop/:id/brands` BrandList, `/info` InfoPage
- **State**: `FilterContext` (React Context) provides global filter state (search query, certifications, price, rating) to all pages
- **Data**: Static JSON files in `src/data/` — `shops.json` (shop entries) and `brands.json` (brand entries). Types defined in `src/data/types.ts`. Certification metadata in `src/data/certifications.ts`.
- **Styling**: CSS Modules (`*.module.css`) per component/page — no CSS framework
- **Maps**: Leaflet via `react-leaflet`
- **File structure**: Components in `src/components/{Name}/{Name}.tsx` + `{Name}.module.css`; pages in `src/pages/{Name}/`
