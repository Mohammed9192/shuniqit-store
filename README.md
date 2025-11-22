# Shuniqit Store (متجر شنقيط)

A production-ready e-commerce platform built with Next.js, Prisma, and Tailwind CSS.

## Features
- **Arabic First**: Fully RTL design with optional French toggle.
- **Payments**: Stripe and PayPal integration.
- **Admin Panel**: Manage products, orders, and users.
- **Authentication**: Secure login with NextAuth.js.

## Getting Started

### Prerequisites
- Node.js 18+
- Docker (for PostgreSQL)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/shuniqit-store.git
   cd shuniqit-store
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Copy `.env.example` to `.env` and fill in the values.
   ```bash
   cp .env.example .env
   ```

4. Start the database:
   ```bash
   docker-compose up -d
   ```

5. Run database migrations and seed:
   ```bash
   npx prisma migrate dev
   npx prisma db seed
   ```

6. Start the development server:
   ```bash
   npm run dev
   ```

7. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure
- `app/`: Next.js App Router pages and layouts.
- `components/`: Reusable UI components.
- `prisma/`: Database schema and seed scripts.
- `public/`: Static assets.

## License
MIT
