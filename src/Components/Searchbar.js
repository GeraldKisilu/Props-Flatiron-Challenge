import React from 'react'
import './Searchbar.css'

function Searchbar({seach, handleChange}) {
  return (
    <div class='container1'>
       <input
          type="text"
          className="form-control"
          placeholder="Search your Recent Transactions . . . "
          name="search"
          onChange={handleChange}
        />
    </div>
  )
}

export default Searchbar
