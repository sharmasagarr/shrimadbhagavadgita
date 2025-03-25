import "./WhyToRead.css";

function WhyToRead(){
    return(
        <section className="section-1">
            <div className="head1"><u>WHY TO READ?</u></div>
            <div className="head2">WHY SHOULD YOU READ BHAGAVAD GITA?</div>
            <div className="item">
                <div><img src="/images/why.svg" alt="why-pic" /></div>
                <div className="content">
                    <div className="reason">✅ Feeling Lost In Life’s Decisions?<br />
                        → The Gita Provides Clarity. <br />
                        ✅ Struggling With Stress & Anxiety? <br />
                        → It Teaches Inner Peace. <br />
                        ✅ Seeking Deeper Meaning? <br />
                        → It Reveals Life’s Ultimate Purpose. <br />
                        ✅ Want To Stay Motivated Without Fear Of Failure? <br />
                        → Learn Selfless Action.
                        <br /><br />
                        🔖 If You Answered ‘YES’ To Any Of These, It’s Time To Start <br /> Reading!                
                    </div>
                    <div className="buttons">
                        <form action="/read" method="post">
                            <input type="hidden" name="chapter_number" value="1" />
                            <input type="hidden" name="verse_number" value="1" />
                            <button className="main-button outfit">READ NOW</button>
                        </form>
                        <button className="secondary-button outfit">TESTIMONIALS</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WhyToRead;