# Panduan Deploy ke Vercel

Untuk mendeploy proyek **Core Pawas** ke Vercel menggunakan tim yang Anda berikan, ikuti langkah-langkah di bawah ini:

### 1. Jalankan Perintah Deploy
Buka terminal di direktori proyek ini dan jalankan perintah:
```bash
npx vercel
```

### 2. Konfigurasi Deployment
Saat diminta di terminal, ikuti langkah berikut:
- **Set up and deploy?** Ketik `y` dan tekan Enter.
- **Which scope do you want to deploy to?** Pilih atau masukkan scope: `team_7njIQePJqbNdXPcqYPKZmVcOdababahs-projects`.
- **Link to existing project?** Pilih `n` (karena ini proyek baru).
- **What's your project's name?** Tekan Enter untuk menggunakan default (`corepawas`).
- **In which directory is your code located?** Tekan Enter untuk default (`./`).
- **Want to modify settings?** Pilih `n` (Vercel akan mendeteksi Next.js secara otomatis).

### 3. Selesaikan Proses
- Jika Anda belum login, Vercel akan meminta Anda untuk login melalui browser.
- Setelah proses selesai, Anda akan mendapatkan link **Preview URL**.
- Untuk mendeploy ke production, gunakan:
```bash
npx vercel --prod
```

---

> [!NOTE]
> Proyek Anda sudah lolos pemeriksaan tipe data (TypeScript) sehingga siap untuk dicompile oleh Vercel. Jika ada kendala saat build di Vercel, pastikan semua Environment Variables (jika ada) sudah dimasukkan di Dashboard Vercel.
