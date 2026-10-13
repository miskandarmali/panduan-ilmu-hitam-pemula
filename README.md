# Panduan Ilmu Hitam Pemula

Laman dokumentasi VitePress ini boleh dijalankan secara lokal menggunakan Docker Compose di OrbStack.

## Jalankan dengan OrbStack

Pastikan OrbStack dengan Docker Compose tersedia, kemudian jalankan dari direktori projek:

```sh
docker compose up --build -d
```

Buka <http://localhost:8080/panduan-ilmu-hitam-pemula/>. Akses ke <http://localhost:8080/> akan diarahkan ke laman tersebut.

Untuk menghentikan container:

```sh
docker compose down
```

## Pembangunan lokal

Pasang kebergantungan dengan `npm ci`, kemudian jalankan `npm run docs:dev`.
