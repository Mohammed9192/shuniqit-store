# Changelog

## [Unreleased]

### Added
- Initialized Next.js project structure manually (due to environment restrictions).
- Configured TypeScript, Tailwind CSS, and PostCSS.
- Created Docker Compose configuration for PostgreSQL.
- Defined Prisma schema with User, Product, Category, Order, Review, etc.
- Created Seed script for initial data.
- Implemented Core UI Components:
    - Navbar (RTL support, responsive)
    - Footer
    - ProductCard
- Created Pages:
    - Home (Hero, Featured Products, Categories)
    - Product Details (Gallery, Info, Reviews)
    - Cart (Items, Summary)
    - Checkout (Form, Payment Options)
    - Auth (Login, Register)
    - Admin Dashboard (Layout, Overview Stats)
- Added Utility functions for currency formatting and class merging.
- Configured Environment Variables example.
- Initialized Git repository.

### Notes
- Node.js environment was not available, so `npm install` and `prisma generate` must be run by the user.
- Screenshots could not be captured as the server could not be started.
