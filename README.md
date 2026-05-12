# Gemini AI RESTful API 🚀

RESTful API berbasis **Express.js** yang terintegrasi dengan **Google Gemini 2.5 Flash** untuk memproses berbagai input multimodal seperti teks, gambar, dokumen, dan audio.

API ini berfungsi sebagai middleware antara client (Frontend, Mobile App, Postman, dll.) dengan layanan AI Gemini untuk menghasilkan respons berbasis AI secara fleksibel dan cepat.

---

## 🌟 Fitur Utama

API ini mendukung 4 jenis input utama:

### 1. 📝 Generate from Text
Menghasilkan respons AI dari prompt teks biasa.

### 2. 🖼️ Generate from Image
Membaca dan menganalisis gambar yang diunggah lalu menghasilkan deskripsi atau jawaban berdasarkan prompt.

### 3. 📄 Generate from Document
Menganalisis atau merangkum file dokumen seperti PDF dan TXT.

### 4. 🎵 Generate from Audio
Melakukan transkripsi atau analisis file audio seperti MP3 dan WAV.

---

## 🛠️ Teknologi yang Digunakan

- **Node.js** (v18+)
- **Express.js** — Framework backend untuk RESTful API
- **@google/genai** — SDK resmi Google Gemini AI
- **Multer** — Middleware upload file (`multipart/form-data`)
- **Dotenv** — Mengelola environment variables secara aman

---

## 📂 Struktur Project

```bash
GeminiAPI/
│
├── uploads/
├── .env
├── .gitignore
├── package.json
├── package-lock.json
├── index.js
└── README.md
```

---

# ⚙️ Instalasi dan Menjalankan Project

## 1. Clone Repository

```bash
git clone https://github.com/MahendraNur/GeminiAPI.git
```

Masuk ke folder project:

```bash
cd GeminiAPI
```

---

## 2. Install Dependencies

Pastikan Node.js versi 18 atau lebih baru sudah terpasang.

```bash
npm install
```

---

## 3. Setup Environment Variables

Buat file `.env` di root project:

```env
GOOGLE_API_KEY=masukkan_api_key_anda_disini
```

Dapatkan API Key dari:

- Google AI Studio

---

## 4. Jalankan Server

```bash
node index.js
```

Server akan berjalan di:

```bash
http://localhost:3000
```

---

# 📡 API Documentation

---

# 1. Generate Text

Menghasilkan teks dari prompt biasa.

## Endpoint

```http
POST /generate-text
```

## Body Type

```json
raw (JSON)
```

## Request Body

```json
{
  "prompt": "Jelaskan apa itu AI dengan bahasa sederhana."
}
```

---

# 2. Generate from Image

Menganalisis gambar menggunakan Gemini AI.

## Endpoint

```http
POST /generate-from-image
```

## Body Type

```bash
form-data
```

## Form Data

| Key     | Type | Description |
|---------|------|-------------|
| prompt  | Text | Opsional |
| image   | File | File gambar (.jpg, .png, dll) |

## Contoh Prompt

```text
Apa yang ada di gambar ini?
```

---

# 3. Generate from Document

Merangkum atau menganalisis dokumen.

## Endpoint

```http
POST /generate-from-document
```

## Body Type

```bash
form-data
```

## Form Data

| Key      | Type | Description |
|----------|------|-------------|
| prompt   | Text | Opsional |
| document | File | File PDF/TXT |

## Contoh Prompt

```text
Tolong buat ringkasan dari dokumen berikut.
```

---

# 4. Generate from Audio

Transkripsi atau analisis file audio.

## Endpoint

```http
POST /generate-from-audio
```

## Body Type

```bash
form-data
```

## Form Data

| Key    | Type | Description |
|--------|------|-------------|
| prompt | Text | Opsional |
| audio  | File | File MP3/WAV |

## Contoh Prompt

```text
Tolong buatkan transkrip dari rekaman berikut.
```

---

# 🧪 Testing API

API dapat diuji menggunakan:

- Postman
- Thunder Client
- Insomnia
- Frontend Web
- Mobile App

---

# 🔐 Keamanan

Pastikan file berikut tidak dipublikasikan ke GitHub:

```bash
.env
node_modules/
uploads/
```

Tambahkan ke `.gitignore`:

```gitignore
node_modules
.env
uploads
```

---

# 📌 Catatan

- Project ini menggunakan model **Google Gemini 2.5 Flash**
- Cocok digunakan untuk:
  - AI Assistant
  - Chatbot
  - OCR sederhana
  - AI Document Analyzer
  - AI Audio Transcription
  - Multimodal AI Apps

---

# 👨‍💻 Author

Dibuat oleh:

**Mahendra Nur Pramudiansyah**

- Hacktiv8

---

# ⭐ Support

Jika project ini membantu, jangan lupa:

```bash
⭐ Star Repository Ini
```

Terima kasih 🚀
