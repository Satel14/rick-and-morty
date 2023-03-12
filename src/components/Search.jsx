import React from 'react'
import search from '../assets/search.png'
const Search = ({ query, setQuery }) => {

  return (
    <div className='searchbar'>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="input"
        type="text"
        placeholder="Filter by name..."
      />
      <img src={search} alt="search" className='image' />
    </div>
  )
}

export default Search