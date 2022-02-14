import React from 'react';
import PropTypes from 'prop-types';

const Details = (props) => {
  const {
    year,
    date,
  } = props;

  return (
    <ul className="home-ul">
      <li className="list-group-item">{year}</li>
      <li className="list-group-item">{date}</li>
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
