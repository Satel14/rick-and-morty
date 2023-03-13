import './style.scss';
import React, { useState, useEffect } from 'react';
import Axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Search from './components/Search'
import Banner from './components/Banner'
import Details from './components/Details'
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';

function App() {
  const [data, setData] = useState({ results: [] })
  const [query, setQuery] = useState("")
  const [sortedData, setSortedData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get(
          `https://rickandmortyapi.com/api/character/?name=${query}`
        );
        setData(response.data);
      } catch (error) {
        console.error(error);
        toast.error('Nothing was found');
      }
    };

    fetchData();
  }, [query]);

  useEffect(() => {
    if (data.results && data.results.length) {
      const sortedNames = [...data.results].sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      setSortedData(sortedNames);
    }
  }, [data]);


  return (
    <>
      <Routes>
        <Route path="/details/:id" element={<Details />} />
        <Route path="/" element={<div className="results">
          <Banner />
          <Search query={query} setQuery={setQuery} />
          <ul className='list'>
            {sortedData?.map((item) => (
              <li className='item' key={item.id}>
                <Link to={`/details/${item.id}`}>
                  <div className='item-img'>
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className='item-description'>
                    <h3 className="title">{item.name}</h3>
                    <h4 className="gender">{item.species}</h4>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          <ToastContainer />
        </div>} />
      </Routes>
    </>
  );
}

export default App;
