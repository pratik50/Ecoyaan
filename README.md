# Ecoyaan Checkout Flow

A simple 3-step checkout flow built as part of a frontend interview assignment.

## Tech Stack
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- React Context API
- React Hook Form + Zod

## How to Run

git clone <repo-url>
cd ecoyaan-checkout
npm install
npm run dev

Open http://localhost:3000

## Flow
1. Cart Page → shows products fetched via SSR
2. Address Page → form with validation
3. Payment Page → review order and simulate payment

## Key Decisions
- Used Next.js Server Components for cart data fetching (SSR)
- React Context to share cart + address data across steps
- Zod + React Hook Form for type-safe form validation
- Kept components small and focused

## Deployment
Vercel: <deploying now>