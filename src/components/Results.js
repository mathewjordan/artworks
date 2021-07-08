import React, { Component } from 'react';
import Card from "./Card";

const endpoint = 'https://api.artic.edu/api/v1/artworks';

class Results extends Component {
  constructor(props) {
    super(props);

    this.state ={
      response: null
    }
  }

  mapCards = (items) => {
    return items.map((item, index) => {
      return (
        <Card key={index}
              title={item.title} />
      )
    });
  }

  getArtworks = (uri) => {
    fetch(uri, {
      headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          response: data
        });
      })
      .catch(err => console.error(this.props.url, err.toString()));

    return null
  }

  componentDidMount() {
    const request = endpoint;
    this.getArtworks(request);
  }

  render() {
    if (this.state.response) {
      return (
        <>
          <div className="results">
            {this.mapCards(this.state.response.data)}
          </div>
        </>
      );
    } else {
      return (
        <span>Loading...</span>
      )
    }
  }
}

export default Results;
