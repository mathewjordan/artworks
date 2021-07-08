import React, { Component } from 'react';
import Search from "./components/Search";
import Results from "./components/Results";

class Artworks extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <Search />
        <div className="content">
          <Results />
        </div>
      </div>
    );
  }
}

export default Artworks;
