import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();
const port = process.env.PORT || 4000;
const host = '0.0.0.0';

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

const db = new pg.Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
  });

db.connect()
    .then(() => console.log("Connected to PostgreSQL ✅"))
    .catch(err => console.error("Database connection error:", err));



//Retrieve a random Shlok
app.get("/shlok/random", async (req, res) => {
    const slokcount = [47, 72, 43, 42, 29, 47, 30, 28, 34, 42, 55, 20, 35, 27, 20, 24, 28, 78];

    const chapter = Math.floor(Math.random() * 18) + 1;
    const verse = Math.floor(Math.random() * slokcount[chapter - 1]) + 1;

    try {
        const result = await db.query(
            "SELECT data FROM shlok_data WHERE chapter = $1 AND verse = $2",
            [chapter, verse]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ error: "Shlok not found" });
        }

        res.json({
            chapter: chapter,
            verse: verse,
            shlok: result.rows[0].data?.slok || "Shlok not found",
            summary: result.rows[0].data?.prabhu.et || "Summary not available"
          });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

//Retrieve a specific Shlok by chapter & verse
app.get("/shlok/:chapter/:verse", async (req, res) => {
    const { chapter, verse } = req.params;

    try {
        const result = await db.query(
            "SELECT data FROM shlok_data WHERE chapter = $1 AND verse = $2",
            [chapter, verse]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ error: "Shlok not found" });
        }

        res.json({
            chapter: chapter,
            verse: verse,
            content: result.rows[0].data || "Error loading",
          });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

//Retrieve a Chapter Summary by ID
app.get("/chapters/:id", async (req, res) => {
    const { id } = req.params;

    try {
        const result = await db.query(
            "SELECT summary FROM chapters WHERE chapter = $1",
            [id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ error: "Chapter not found" });
        }

        res.json(result.rows[0].summary); // Return the chapter summary
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.listen(port, host, () => {
    console.log(`Server is running on http://localhost:${port}`);
});