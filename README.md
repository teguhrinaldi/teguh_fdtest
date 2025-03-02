📖 Fullstack Developer Technical Test – Fanintek

Halo! 👋
Ini adalah project technical test untuk posisi Fullstack Developer dengan menggunakan Laravel + Inertia.js serta PostgreSQL sebagai database.

🚀 Installation Instructions
Ikuti langkah-langkah berikut untuk menjalankan project ini secara lokal:

🔹 1. Clone Repository
Clone project ke komputer lokal kamu:

https://github.com/teguhrinaldi/teguh_fdtest.git

🔹 2. Install Dependencies
Backend (Laravel)
composer install
Frontend (Vite)
npm install


🔹 3. Setup Environment
Salin file .env.example menjadi .env:
Lalu konfigurasi database PostgreSQL di .env:

ini

DB_CONNECTION=pgsql
DB_HOST=127.0.0.1
DB_PORT=5432
DB_DATABASE=teguh_fdtest
DB_USERNAME=teguh
DB_PASSWORD=

dan juga mail verification

MAIL_MAILER=smtp
MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
MAIL_USERNAME=teguhrinaldi23@gmail.com
MAIL_PASSWORD=kqhudmcjijgchpxe
MAIL_ENCRYPTION=tls
MAIL_FROM_ADDRESS=teguhrinaldi23@gmail.com
MAIL_FROM_NAME="${APP_NAME}"

🔹 4. Generate App Key
php artisan key:generate

🔹 5. Jalankan Migration & Seeder (Opsional)
Untuk membuat tabel database dan data awal:
php artisan migrate --seed

🔹 6. Run Project
Jalankan Laravel:

php artisan serve

Jalankan Vite:

npm run dev

🔹 7. Akses Aplikasi
Buka di browser:
http://127.0.0.1:8000

⚡ Tech Stack
Laravel 10.x
Inertia.js
PostgreSQL
Vite
TailwindCSS 
Bcrypt (untuk enkripsi password)



