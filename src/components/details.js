import React from 'react';
import PropTypes from 'prop-types';

const Details = (props) => {
  const {
    year,
    date,
  } = props;

  return (
    <ul>
      <li>{year}</li>
      <li>{date}</li>
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
