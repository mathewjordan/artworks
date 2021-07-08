import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
    this.searchElement = React.createRef();

    this.state = {
      query: ''
    }
  }

  handleChange = () => {
    this.setState(({
      query: this.searchElement.current.value
    }))
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const query = this.searchElement.current.value
    console.log(query)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="search-input">
          Search
        </label>
        <input
          ref={this.searchElement}
          value={this.state.query}
          id="search-input"
          type="search"
          placeholder="Search for Items"
          onChange={this.handleChange}
        />
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default Search;
