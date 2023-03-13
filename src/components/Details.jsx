import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ButtonBack from './ButtonBack'
const Details = ({ match }) => {
  const [data, setData] = useState({});
  const { id } = useParams();
  const getCharacter = async () => {
    const result = await axios(
      `https://rickandmortyapi.com/api/character/${id}`
    );

    setData(result.data);
  };

  useEffect(() => {
    getCharacter();
  }, [id]);

  return (
    <div className="details">
      <ButtonBack />
      <div className='details-container'>
        <img alt={data.image} src={data.image} />
      </div>
      <h1 className='details-name'>{data.name}</h1>
      <h2 className='details-informations'>Informations</h2>
      <ul>
        <li>
          <h3>Gender:</h3>
          <h4>{data.gender}</h4>
        </li>
        <li>
          <h3>Status:</h3>
          <h4>{data.status}</h4>
        </li>
        <li>
          <h3>Species:</h3>
          <h4>{data.species}</h4>
        </li>
        <li>
          <h3>Origin:</h3>
          <h4>{data.origin ? data.origin.name : "unknown"}</h4>
        </li>
        <li>
          <h3>Type:</h3>
          <h4>{data.type || "unknown"}</h4>
        </li>
      </ul>
    </div>
  );
};

export default Details;
