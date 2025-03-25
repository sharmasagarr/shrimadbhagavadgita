import PropTypes from "prop-types";
import "./Card.css";

function Card({ img, name, testimonial }) {
    return (
        <div className="card">
            <div className="testimonial-image">
                <img src={img} alt={name} />
            </div>
            <div className="name">
                <u>{name}</u>
            </div>
            <div className="testimonial">"{testimonial}"</div>
        </div>
    );
}

Card.propTypes = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    testimonial: PropTypes.string.isRequired,
};

export default Card;
