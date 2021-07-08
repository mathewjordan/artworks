import React, {Component} from 'react';
import Search from "./components/Search";
import Results from "./components/Results";

class Artworks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: ''
    }
  }

  handleQuery = (string) => {
    this.setState({
      query: string
    });
  }

  render() {
    return (
      <div className="container">
        <Search onSubmit={this.handleQuery}/>
        <div className="content">
          <Results query={this.state.query} />
        </div>
      </div>
    );
  }
}

export default Artworks;
