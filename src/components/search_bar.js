import React, { Component } from 'react';

// const SearchBar = () => <input />

class SearchBar extends React.Component{
  constructor(props){
      super(props);
      this.state = { term: 'Initial value'};
  }

  render(){
    return (
      <div>
        <input
          value={ this.state.term }
          onChange={ e => this.setState({ term: e.target.value })} />
      </div>
    );
  }

  // onInputChange(e){
  //   console.log(e.target.value);
  // }
}

export default SearchBar;
