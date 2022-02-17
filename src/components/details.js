import React from 'react';
import PropTypes from 'prop-types';

const Details = (props) => {
  const {
    year,
    date,
  } = props;

  return (
    <ul className="details">
      <li className="year">{year}</li>
      <li className="date">{date}</li>
    </ul>
  );
};

Details.propTypes = {
  year: PropTypes.string,
  date: PropTypes.string.isRequired,
};

Details.defaultProps = {
  year: '',
};

export default Details;
