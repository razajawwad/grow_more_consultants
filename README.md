# Grow More Consultants

Professional full-stack website project for Grow More Consultants.

## Project Structure

```text
grow_more_consultants/
frontend/   # React + Vite + Tailwind CSS UI
backend/    # Laravel API
```

## Frontend

```bash
cd frontend
npm install
npm run dev
```

Local frontend:

```text
http://localhost:5173
```

## Backend

```bash
cd backend
composer install
cp .env.example .env
php artisan key:generate
php artisan serve
```

Local API:

```text
http://127.0.0.1:8000/api/v1
```

## Notes

- Frontend uses React, Vite, Tailwind CSS, Framer Motion, and Lucide icons.
- Backend uses Laravel with API routes, validation, CORS, and SMTP mail delivery.
