import React, { Component } from 'react';
import Sticky from "react-sticky-el"

class Search extends Component {
  constructor(props) {
    super(props);
    this.searchElement = React.createRef();

    this.state = {
      value: ''
    }
  }

  handleChange = () => {
    this.setState(({
      value: this.searchElement.current.value
    }))
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const query = this.searchElement.current.value
    this.props.onSubmit(query);
  }

  render() {
    return (
      <Sticky>
        <form className="search" onSubmit={this.handleSubmit}>
          <label htmlFor="search-input">
            Search
          </label>
          <input
            ref={this.searchElement}
            value={this.state.value}
            id="search-input"
            type="search"
            placeholder="Find Artwork by Title"
            onChange={this.handleChange}
          />
          <button type="submit">Go</button>
        </form>
      </Sticky>
    );
  }
}

export default Search;
