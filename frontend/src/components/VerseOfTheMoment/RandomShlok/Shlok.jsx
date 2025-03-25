import "./Random.css";
import PropTypes from "prop-types";

function Shlok({ data }) {
    return <div className="shlok">{data} <hr /></div>;
}

Shlok.propTypes = {
    data: PropTypes.string.isRequired
};

export default Shlok;
