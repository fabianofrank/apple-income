import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Details from './details';

const Home = () => {
  const data = useSelector((state) => state.data.data);
  const [searchYear, setYear] = useState('');

  const handleEvent = (event) => setYear(event.currentTarget.value);

  const searchResult = data.filter((item) => { /*eslint-disable-line*/
    if (searchYear === '') {
      return item;
    }
    if (item.year.includes(searchYear)) {
      return item;
    }
  }).map((item) => (<Link id={item.period + item.year} key={item.year} to={`/details/${item.date}`}><Details year={item.year} date={item.date} /></Link>));

  return (
    <ul className="list-group">
      <input onChange={handleEvent} type="search" placeholder="Search by year..." />
      {searchResult}
    </ul>
  );
};

export default Home;
