import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const port = process.env.PORT || 4000;
const host = '0.0.0.0';

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

const db = new pg.Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
  });

db.connect()
    .then(() => console.log("Connected to PostgreSQL ✅"))
    .catch(err => console.error("Database connection error:", err));



// 📌 1️⃣ Endpoint: Retrieve a specific Shlok by chapter & verse
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

        res.json(result.rows[0].data); // Return the Shlok data
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// 📌 2️⃣ Endpoint: Retrieve a Chapter Summary by ID
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

//keep-alive route
app.get('/keepalive', (req, res) => {
    res.send('Server is alive!');
  });
  
  setInterval(() => {
    http.get('https://shrimadbhagavadgita-api.onrender.com/keepalive');
  }, 14 * 60 * 1000);

app.listen(port, host, () => {
    console.log(`API Server is running on port ${port}`);
});