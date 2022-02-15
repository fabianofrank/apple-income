import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { fetchData } from '../redux/data/data';
import Home from '../components/home';
import Statements from '../components/statement';
import Navbar from '../components/navbar';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <Router>
      <div className="main">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<Statements />}>
            <Route path=":statementYear" element={<Statements />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
