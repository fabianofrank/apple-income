import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Details from './details';

const Home = () => {
  const data = useSelector((state) => state.data.data);
  const [getYear, setYear] = useState('');

  const handleEvent = (event) => setYear(event.currentTarget.value);

  const searchResult = data.filter((item) => { /*eslint-disable-line*/
    if (getYear === '') {
      return item;
    }
    if (item.year.includes(getYear)) {
      return item;
    }
  })
    .map((item) => (
      <Link id={item.period + item.year} key={item.year} to={`/details/${item.date}`}>
        <Details year={item.year} date={item.date} />
      </Link>
    ));

  return (
    <ul className="home">
      <input className="input" onChange={handleEvent} type="search" placeholder="Search by year..." />
      <div className="years">
        {data && searchResult}
      </div>
    </ul>
  );
};

export default Home;
