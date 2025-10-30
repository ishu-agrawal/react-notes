import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config({ path: "../.env" }); 

const app = express();
app.use(cors());
app.use(express.json());


app.post("/api/chat", async (req, res) => {
  try {
    const { query } = req.body;

    const response = await fetch(`${process.env.GEMINI_API_URL}?key=${process.env.GEMINI_API_KEY}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: query }] }],
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error?.message || "Gemini API error");
    }

    // Extract text safely
    const output =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "No response from Gemini.";

    res.json({ output });
  } catch (error) {
    console.error("Gemini Error:", error);
    res.status(500).json({ message: error.message || "Server Error" });
  }
});


app.get("/api/trailer", async (req, res) => {
  try {
    const { title } = req.query;
    if (!title) return res.status(400).json({ error: "Missing title" });

    const apiKey = process.env.YOUTUBE_API_KEY;
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(
      title + " official trailer"
    )}&maxResults=1&type=video&key=${apiKey}`;

    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Server error", details: err.message });
  }
});

app.listen(process.env.PORT, () =>
  console.log(`✅ Server running on http://localhost:${process.env.PORT}`)
);
