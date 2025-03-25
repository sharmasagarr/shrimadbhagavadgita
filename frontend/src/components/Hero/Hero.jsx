import "./Hero.css";

function Hero() {
    return (
        <div className="hero">
            <div className="hero-content">
                <div className="outfit hero-text-primary">
                    Where Every Verse <br /> is a Reflection of <br /> The Soul.
                </div>
                <div className="hero-text-secondary rock-salt">
                    Let Bhagavadgita illuminate your heart and guide your journey.
                </div>
                <div className="buttons">
                    <form action="/read" method="post">
                        <input type="hidden" name="chapter_number" value="1" />
                        <input type="hidden" name="verse_number" value="1" />
                        <button className="main-button outfit">READ NOW</button>
                    </form>
                    <button className="secondary-button outfit">CHAPTERS</button>
                </div>
            </div>
            <div className="hero-image">
                <img src="/images/book.svg" alt="book" />
            </div>
        </div>
    );
}

export default Hero;
