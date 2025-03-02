📖 Fullstack Developer Technical Test – Fanintek

Halo! 👋
Ini adalah project technical test untuk posisi Fullstack Developer dengan menggunakan Laravel + Inertia.js serta PostgreSQL sebagai database.

🚀 Installation Instructions
Ikuti langkah-langkah berikut untuk menjalankan project ini secara lokal:

🔹 1. Clone Repository
Clone project ke komputer lokal kamu:

bash
Salin
Edit
git clone https://github.com/namakamu_fdtest.git
cd namakamu_fdtest
⚠️ Jangan lupa ganti namakamu dengan nama kamu sendiri.

🔹 2. Install Dependencies
Backend (Laravel)
bash
Salin
Edit
composer install
Frontend (Vite)
bash
Salin
Edit
npm install
🔹 3. Setup Environment
Salin file .env.example menjadi .env:

bash
Salin
Edit
cp .env.example .env
Lalu konfigurasi database PostgreSQL di .env:

ini
Salin
Edit
DB_CONNECTION=pgsql
DB_HOST=127.0.0.1
DB_PORT=5432
DB_DATABASE=namakamu_fdtest
DB_USERNAME=postgres
DB_PASSWORD=your_password

🔹 4. Generate App Key
bash
Salin
Edit
php artisan key:generate

🔹 5. Jalankan Migration & Seeder (Opsional)
Untuk membuat tabel database dan data awal:

bash
Salin
Edit
php artisan migrate --seed

🔹 6. Run Project
Jalankan Laravel:
bash
Salin
Edit
php artisan serve
Jalankan Vite:
bash
Salin
Edit
npm run dev

🔹 7. Akses Aplikasi
Buka di browser:

cpp
Salin
Edit
http://127.0.0.1:8000
⚡ Tech Stack
Laravel 10.x
Inertia.js
PostgreSQL
Vite
TailwindCSS (opsional jika digunakan)
Bcrypt (untuk enkripsi password)
📌 Fitur Utama
✅ Authentication (Login, Register, Forgot Password, Email Verification)
✅ Manajemen Buku (CRUD)
✅ User List + Filtering & Search
✅ Landing Page untuk publik
✅ Unit Test & Integration Test

📬 Catatan
Pastikan semua service berjalan dengan baik (PostgreSQL, PHP, Node.js).
Untuk email verification & forgot password, sesuaikan konfigurasi SMTP di .env.
Password user diamankan menggunakan Bcrypt.
