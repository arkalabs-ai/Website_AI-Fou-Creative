# Fou Creative — Landing Page

Landing page statis untuk **Fou Creative** (AI Agent Marketing). Tanpa backend — cukup hosting file statis.

## Struktur

```
.
├── index.html                  # halaman utama
├── kebijakan-privasi.html      # halaman legal
├── ketentuan-layanan.html      # halaman legal
└── assets/
    ├── css/
    │   ├── fonts.css           # @font-face (self-hosted, dipakai semua halaman)
    │   └── styles.css          # seluruh styling halaman utama
    ├── js/
    │   └── main.js             # logika UI: render, animasi, demo chat, admin editor
    ├── fonts/                  # Cabinet Grotesk, Satoshi, JetBrains Mono (woff2 subset)
    ├── logos/                  # logo brand klien (portofolio)
    └── og-image.png            # gambar share sosial media
```

## Cara deploy

1. Upload **seluruh isi folder ini** (pertahankan struktur folder `assets/`) ke hosting statis — Netlify atau Cloudflare (opsi "Workers + Static Assets"). Drag-and-drop folder juga bisa di Netlify.
2. Aktifkan domain custom → HTTPS otomatis.
3. **Sebelum go-live**, ganti `og:image` di `index.html` dari path relatif menjadi URL absolut, contoh:
   `<meta property="og:image" content="https://domain-anda.com/assets/og-image.png" />`
   (Twitter & Open Graph butuh URL absolut agar preview muncul saat link dibagikan.)

## Catatan teknis

- **Font** di-self-host di `assets/fonts/` (tidak menarik dari CDN) — situs tetap jalan tanpa koneksi ke Google/Fontshare.
- **Portofolio**: data default 16 logo di-hardcode di `assets/js/main.js` (`DEFAULTS.portfolio`), jadi pengunjung baru langsung melihatnya tanpa perlu admin panel.
- **Admin editor** (client-side, `localStorage`): buka `#admin` di URL untuk mengedit konten/menambah brand. Perubahan hanya tersimpan di browser tersebut — untuk perubahan permanen, edit `DEFAULTS` di `main.js`.
- Logo brand: PNG-24 transparan terkompresi (≤37KB/file). `debodis` memakai SVG vektor.

## Brand yang masih perlu aset (placeholder / belum tampil)

- **Bondi Clinic** — belum ada file logo (tampil sebagai teks).
- **(nama belum diketahui)** — 1 logo siap pakai tapi nama brand belum dikonfirmasi.
- **Bakeri Suans** — file yang ada berupa screenshot, butuh file logo bersih.
