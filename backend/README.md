# Grow More Consultants Backend

Professional Node.js + Express API backend for Grow More Consultants.

## Stack

- Node.js
- Express
- Zod validation
- Helmet security headers
- CORS
- Rate limiting
- Morgan request logging

## Commands

```bash
npm install
npm run dev
```

Production:

```bash
npm start
```

## API

```text
GET  /api/v1/health
POST /api/v1/inquiries
```

The inquiry endpoint currently validates and accepts inquiry data. Email/database integration can be added next.
