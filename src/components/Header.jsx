import React from 'react';
import removeButton from '../assets/images/zip-file-svgrepo-com.png'

const crossStyle = {
  width: "15px",
  height: "20px",
}


const Header = ({filters, clearFilters, removeFilter}) => {
    return (
      <header>
        {
          (filters.length > 0) && 
          <section className='flex '>
            <div className='flex '>
              {
                filters.map((filter, index) => {
                  return (
                      <p key = {index} className='filters'>
                        <span>{filter.value}</span>
                        <button onClick={() => removeFilter(filter)} >
                          <img style={crossStyle} src={removeButton} alt="remove"/>
                        </button>
                      </p>
                  ) 
                })
              }
            </div>
            <button onClick={clearFilters} className='clear'>Clear</button>
          </section>
        }
        <h1>Remote Tech Jobs</h1>
      </header>
    );
}   
export default Header;