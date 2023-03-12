import './App.css';
import React, { useState, useEffect } from 'react';
import Axios from 'axios'
import Search from './components/Search'
import Banner from './components/Banner'
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
    <div className="results">
      <Banner />
      <Search query={query} setQuery={setQuery} />
      <ul className='list'>
        {sortedData?.map((item) => (
          <li className='item' key={item.id}>
            <a href='/'>
              <div className='item-img'>
                <img src={item.image} alt={item.name} />
              </div>
            </a>
            <div className='item-description'>
              <h3 className="title">{item.name}</h3>
              <h4 className="gender">{item.species}</h4>
            </div>
          </li>
        ))}
      </ul>
    </div>

  );
}

export default App;
