import "./Testimonials.css";
import Card from "./Card/Card";

function Testimonials(){
    return(
        <section className="section-3">
        <div className="head1"><u>TESTIMONIALS</u></div>
        <div className="head2">SEE WHAT OTHERS HAVE TO SAY</div>
        <div className="item">
            <Card
                img="/images/premanand.svg"
                name="SHRI PREMANAND MAHARAJ"
                testimonial="THE BHAGAVAD GITA OFFERS PROFOUND WISDOM FOR THE SOUL'S LIBERATION. IT TEACHES THE IMPORTANCE OF DISCERNING THE TRUTH BEHIND EVERY ACTION. BY FOLLOWING ITS GUIDANCE, ONE CAN ALIGN THEIR LIFE WITH DIVINE PURPOSE AND INNER PEACE."
            />
            <Card
                img="/images/vivekanand.svg"
                name="SWAMI VIVEKANAND"
                testimonial="THROUGH THE BHAGAVAD GITA, WE COME TO UNDERSTAND THE ESSENCE OF OUR TRUE SELF. IT INSPIRES COURAGE, DISCIPLINE, AND SELFLESS SERVICE TO THE GREATER GOOD. THE TEACHINGS OF THE GITA ENCOURAGE US TO AWAKEN OUR HIGHER POTENTIAL AND LIVE A LIFE OF PURPOSE."
            />
            <Card
                img="/images/adi-shankara.svg"
                name="ADI SHANKARACHARYA"
                testimonial="THE GITA UNVEILS THE ULTIMATE TRUTH OF THE UNITY BETWEEN THE INDIVIDUAL SOUL AND THE SUPREME. IT PROVIDES DEEP SPIRITUAL INSIGHT THAT HELPS TRANSCEND WORLDLY ATTACHMENTS. BY REALIZING THIS UNITY, ONE CAN ATTAIN LIBERATION AND ETERNAL BLISS."
            />
        </div>
    </section>
    );
}

export default Testimonials;