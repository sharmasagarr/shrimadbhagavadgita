import { useState, useEffect } from "react";
import "./VerseOfTheMoment.css";
import Shlok from "./RandomShlok/Shlok";
import Summary from "./RandomShlok/Summary";

function VerseOfTheMoment() {
  const [shlokData, setShlokData] = useState({
    chapter: "",
    verse: "",
    shlok: "Loading...",
    summary: "Fetching the verse..."
  });

  const fetchRandomVerse = () => {
    fetch("http://localhost:4000/shlok/random")
      .then((response) => response.json())
      .then((data) =>
        setShlokData({
          chapter: data.chapter || "",
          verse: data.verse || "",
          shlok: data.shlok || "No verse available.",
          summary: data.summary || "Summary not available."
        })
      )
      .catch((error) => {
        console.error("Error fetching verse:", error);
        setShlokData({
          chapter: "",
          verse: "",
          shlok: "Unable to fetch verse.",
          summary: "Please try again later."
        });
      });
  };

  useEffect(() => {
    fetchRandomVerse();
  }, []);

  return (
    <section className="section-2">
      <div className="head1">
        <u>VERSE OF THE MOMENT</u>
      </div>
      <div className="head2">DISCOVER A RANDOM VERSE TO INSPIRE YOU</div>
      <div className="item">
        <div className="content">
          <Shlok data={shlokData.shlok} />
          <Summary data={shlokData.summary} />
          <div className="wisdom rock-salt">
            "Let divine wisdom guide your journey."
            <div className="buttons">
              <button
                type="button"
                onClick={fetchRandomVerse}
                className="main-button outfit"
              >
                REFRESH
              </button>
              <form action="/read" method="post">
                <input
                  type="hidden"
                  name="chapter_number"
                  value={shlokData.chapter}
                />
                <input
                  type="hidden"
                  name="verse_number"
                  value={shlokData.verse}
                />
                <button type="submit" className="secondary-button outfit">
                  ELABORATE
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="random-image">
          <img src="/images/random.svg" alt="random-pic" />
        </div>
      </div>
    </section>
  );
}

export default VerseOfTheMoment;