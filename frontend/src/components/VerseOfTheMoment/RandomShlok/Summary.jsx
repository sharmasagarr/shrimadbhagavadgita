import "./Random.css";
import PropTypes from 'prop-types';

function Summary({ data }) {
    return <div className="summary">{data}</div>;
}

Summary.propTypes = {
    data: PropTypes.string.isRequired
};

export default Summary;
