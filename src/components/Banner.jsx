import React from 'react'
import banner from '../assets/banner.png'
const Banner = () => {
  return (
    <div className='banner'>
      <a href='/'>
        <img src={banner} alt='banner' />
      </a>
    </div>
  )
}

export default Banner