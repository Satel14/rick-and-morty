import React from 'react';
import arrow from '../assets/arrow.png';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(-1);
  }

  return (
    <button onClick={handleOnClick} className="btn-back">
      <img src={arrow} alt="button back" />
      <span>Go Back</span>
    </button>
  )
}

export default BackButton;
