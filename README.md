# Ecoyaan Checkout Flow

A 3-step checkout flow built as a frontend interview assignment for Ecoyaan.

## Tech Stack
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- React Context API
- React Hook Form + Zod

## Features
- Cart page with Server-Side Rendering (SSR)
- Address form with real-time validation
- Payment confirmation
- State persisted across all 3 steps using Context API

## Prerequisites
Make sure you have these installed on your machine:
- Node.js (v18 or above) 

## Getting Started

### 1. Clone the repository
git clone `https://github.com/pratik50/Ecoyaan.git`

cd Ecoyaan

### 2. Install dependencies
npm install

### 3. Run the development server
npm run dev

### 4. Open in browser
Visit http://localhost:3000
It will automatically redirect you to the cart page.

## Checkout Flow
1. **Cart** `/cart`: Products are fetched server-side and displayed with order summary
2. **Address** `/checkout/address`: Fill in shipping details with form validation
3. **Payment** `/checkout/payment`: Review order and simulate payment

## Architectural Decisions
- **SSR on Cart page**: Used Next.js Server Component to fetch cart data on the server before rendering, so the user sees a fully loaded page instantly
- **React Context**: Chose Context API over Redux to keep it simple; it stores cart items and shipping address across all 3 steps
- **Zod + React Hook Form**: Zod handles the validation schema, React Hook Form handles the form state; together they give clean, type-safe validation with minimal boilerplate
- **Component separation**: UI components like CartItem, OrderSummary are kept separate from pages so they can be reused

## Deployment
Live on Vercel: https://ecoyaan-ecru.vercel.app/cart