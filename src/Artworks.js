import React, {Component} from 'react';
import Search from "./components/Search";
import Results from "./components/Results";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Item from "./components/Item";

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
      <Router>
        <div className="container">
            <Switch>
              <Route path="/item/:id" component={Item} />
              <Route exact path="/">
                <Search onSubmit={this.handleQuery}/>
                <Results query={this.state.query} />
              </Route>
            </Switch>
        </div>
      </Router>
    );
  }
}

export default Artworks;
