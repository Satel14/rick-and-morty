import './App.css';
import React, { useState, useEffect } from 'react';
import Axios from 'axios'
function App() {
  const [data, setData] = useState({ result: [] })

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get(
          "https://rickandmortyapi.com/api/character"
        );
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="results">
      <ul className='list'>
        {data?.results && data.results.map((item) => (
          <li className='item' key={item.id}>
            <a href='/'>
              <div className='item-img'>
                <img src={item.image} alt={item.name} />
              </div>
            </a>
            <div className='item-description'>
              <h3 key={item.id} className="title">{item.name}</h3>
              <h4 key={item.id} className="gender">{item.species}</h4>
            </div>
          </li>
        ))}
      </ul>
    </div>

  );
}

export default App;
