import React from 'react';
import SearchForm from './SearchForm.jsx';


export default class Layout extends React.Component {
  render() {
    return(
      <div className="container">
        <SearchForm />
      </div>
    );
  }
}