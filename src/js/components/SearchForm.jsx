import React from 'react';

import { connect } from 'react-redux';

import { searchCity } from '../actions/weatherActions.jsx';



  let SearchCity = ({dispatch}) => {
    
    let input;
    return(
      <div>
       
       <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(searchCity(input.value))
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <button type="submit">
          Search city
        </button>
      </form>
       
      </div>
    );
  }
SearchCity = connect()(SearchCity)

export default SearchCity