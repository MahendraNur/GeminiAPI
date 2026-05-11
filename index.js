import 'dotenv/config';
import express from 'express';
import multer from 'multer';
import { GoogleGenAI } from '@google/genai';

const app = express();
const upload = multer();

// Pastikan API Key tersedia di file .env sebelum server berjalan
if (!process.env.GOOGLE_API_KEY) {
  console.error("FATAL ERROR: GOOGLE_API_KEY is not set in the .env file.");
  process.exit(1);
}

const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_API_KEY });
const GEMINI_MODEL = 'gemini-2.5-flash';

// Middleware untuk mem-parsing request body berupa JSON
app.use(express.json());

// --- Rute 1: Generate Text (Menggunakan raw JSON di Postman) ---
app.post('/generate-text', async (req, res) => {
    const { prompt } = req.body;

    if (!prompt) {
        return res.status(400).json({ message: "Prompt is required" });
    }

    try {
        const response = await ai.models.generateContent({
            model: GEMINI_MODEL,
            contents: prompt,
        });
    
        res.status(200).json({ result: response.text });
    } catch (error) {
        console.error("Gemini API Error:", error); 
        res.status(500).json({ message: error.message });
    }
});

// --- Rute 2: Generate from Image (Menggunakan form-data di Postman) ---
app.post("/generate-from-image", upload.single("image"), async (req, res) => {
    const { prompt } = req.body;

    // Validasi agar server tidak crash jika user lupa upload file atau mengisi prompt
    if (!req.file) {
        return res.status(400).json({ message: "Image is required" });
    }
    if (!prompt) {
        return res.status(400).json({ message: "Prompt is required" });
    }

    const base64Image = req.file.buffer.toString("base64");

    try {
        const response = await ai.models.generateContent({
            model: GEMINI_MODEL,
            contents: [
                prompt,
                { inlineData: { data: base64Image, mimeType: req.file.mimetype } }
            ],
        });

        res.status(200).json({ result: response.text });
    } catch (error) {
        console.error("Gemini API Error:", error); 
        res.status(500).json({ message: error.message });
    }
});

app.post("/generate-from-document", upload.single("document"), async (req, res) => {
    const { prompt } = req.body;
    const base64Document = req.file.buffer.toString("base64");

    try {
        const response = await ai.models.generateContent({
            model: GEMINI_MODEL,
            contents: [
                { text: prompt ?? "Tolong buat ringkasan dari dokumen berikut.", type: "text" },
                { inlineData: { data: base64Document, mimeType: req.file.mimetype } }
            ],
    });

    res.status(200).json({ result: response.text });
    } catch (error) {
        console.error("Gemini API Error:", error); 
        res.status(500).json({ message: error.message });
    }
});

app.post("/generate-from-audio", upload.single("audio"), async (req, res) => {
    const { prompt } = req.body;
    const base64Audio = req.file.buffer.toString("base64");

    try {  
        const response = await ai.models.generateContent({
            model: GEMINI_MODEL,
            contents: [
                { text: prompt ?? "Tolong buat ringkasan dari audio berikut.", type: "text" },
                { inlineData: { data: base64Audio, mimeType: req.file.mimetype } }
            ],
        });
    
        res.status(200).json({ result: response.text });
    } catch (error) {
        console.error("Gemini API Error:", error); 
        res.status(500).json({ message: error.message });
    }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});