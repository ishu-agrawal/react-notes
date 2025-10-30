import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import OpenAI from "openai";

dotenv.config({ path: "../.env" }); 

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post("/api/chat", async (req, res) => {
  try {
    const { query } = req.body;
    const response = await openai.responses.create({
      model: "gpt-4o-mini",
      input: query,
    });
    res.json({ output: response.output_text });
  } catch (error) {
    console.error("OpenAI Error:", error);
    res
      .status(error.status || 500)
      .json({ message: error.message || "Server Error" });
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
