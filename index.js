import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import dotenv from "dotenv";

const app = express();
const port = process.env.PORT || 3000;
const host = '0.0.0.0';
dotenv.config();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// home route
app.get("/", async (req, res) => {
    const slokcount = [47, 72, 43, 42, 29, 47, 30, 28, 34, 42, 55, 20, 35, 27, 20, 24, 28, 78]
    const randomChapter = Math.floor(Math.random()* 18) + 1;
    const randomVerse = Math.floor(Math.random() * slokcount[randomChapter - 1]) + 1

    const result = await axios.get(process.env.API_URL + `/shlok/${randomChapter}/${randomVerse}`);
    res.render("index.ejs", {
        chapter: randomChapter,
        verse: randomVerse,
        shlok: result.data.slok,
        summary: result.data.purohit.et
    });
});

// read route
app.post("/read", async (req, res) => {
    try{
        const chapter_number = req.body.chapter_number;
        const verse_number = req.body.verse_number;
        const result = await axios.get(process.env.API_URL + `/shlok/${chapter_number}/${verse_number}`);
        const chapterSummary = await axios.get(process.env.API_URL + `/chapters/${chapter_number}`);
        const bookSummary = await axios.get(process.env.API_URL + `/chapters/0`);
        const chapters = bookSummary.data;
        const allChapterNames = chapters.map(chapter => chapter.name);
        const chapter_name = chapterSummary.data.meaning.en;
        const verses_count = chapterSummary.data.verses_count;
        const direction = req.body.lastDirection;

        res.render("read.ejs", {
            direction,
            chapter_number,
            chapter_name,
            verse_number,
            allChapterNames,
            verses_count,
            shlok: result.data.slok,
            anuwad: result.data.rams.ht,
            anuwadak: result.data.rams.author,
            vyakhya: result.data.chinmay.hc,
            vyakhyata: result.data.chinmay.author,
            translation: result.data.prabhu.et,
            translator: result.data.prabhu.author,
            explanation: result.data.prabhu.ec,
            explainer: result.data.prabhu.author
        });
    }
    catch(error){
        res.status(404).send(error.message);
    }
});

app.listen(port, host, () => {
    console.log(`Server is running on port ${port}`);
});