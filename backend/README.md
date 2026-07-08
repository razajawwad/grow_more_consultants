# Grow More Consultants Laravel API

Laravel API backend for the Grow More Consultants website.

## Local Setup

```bash
composer install
cp .env.example .env
php artisan key:generate
php artisan serve
```

The local API runs at:

```text
http://127.0.0.1:8000/api/v1
```

## API Routes

```text
GET  /api/v1/health
POST /api/v1/inquiries
```

## Hostinger Setup

Point the Laravel document root to:

```text
backend/public
```

Set the production environment variables in Hostinger and run Composer install.
