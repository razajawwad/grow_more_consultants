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

## Production Mail Settings

Use the Hostinger business mailbox for contact form delivery:

```env
MAIL_MAILER=smtp
MAIL_HOST=smtp.hostinger.com
MAIL_PORT=465
MAIL_USERNAME=info@growmoreconsultants.org
MAIL_PASSWORD=your_mailbox_password
MAIL_ENCRYPTION=ssl
MAIL_FROM_ADDRESS=info@growmoreconsultants.org
MAIL_FROM_NAME="Grow More Consultants"
MAIL_TO_ADDRESS=info@growmoreconsultants.org
```

`MAIL_PASSWORD` is the mailbox password from Hostinger. Do not commit it to Git.
