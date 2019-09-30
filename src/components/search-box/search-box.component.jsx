import React from 'react'
import './search-box.style.scss'

export const SearchBox = ({placeholder, onChange, value}) =>(
    <div className="search-box">
        <input type="Search" placeholder={placeholder} onChange={onChange} value={value} className="search not-ready"/>
    </div>
    
)
// export const SearchBox = ({placeholder, handleChange}) =>(
//     <input type='search' placeholder={placeholder} onChange={handleChange} className="search"/>
// )