import "./AreYouReady.css";

function AreYouReady(){
    return(
        <section className="section-4">
            <div className="item1">ARE YOU READY?</div>
            <div className="item2">"DISCOVER THE TIMELESS WISDOM OF THE BHAGAVAD GITA—A GUIDE TO LIFE, PURPOSE, AND INNER PEACE. DIVE INTO ITS TEACHINGS AND TRANSFORM YOUR PERSPECTIVE!"</div>
            <div className="item3">
                <form action="/read" method="post">
                    <input type="hidden" name="chapter_number" value="1" />
                    <input type="hidden" name="verse_number" value="1" />
                    <button className="main-button outfit">GET STARTED</button>
                </form>
            </div>
        </section>
    );
}

export default AreYouReady;