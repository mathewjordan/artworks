import React, { Component } from 'react';
import Card from "./Card";

const endpoint = 'https://api.artic.edu/api/v1/artworks/search?query[term][is_public_domain]=true';
const fields = 'id,title,artist_display,thumbnail,image_id';
const limit = 10;

class Results extends Component {
  constructor(props) {
    super(props);

    this.state ={
      query: null,
      response: null
    }
  }

  mapCards = (items) => {
    return items.map((item, index) => {
      return (
        <Card key={index}
              data={item} />
      )
    });
  }

  getArtworks = () => {
    if(this.state.query !== this.props.query) {
      let uri = endpoint + '&fields=' + fields + '&limit=' + limit;
      if (this.props.query !== '') {
        uri = uri + '&q=' + this.props.query;
      }
      fetch(uri, {
        headers : {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })
        .then(response => response.json())
        .then(data => {
          this.setState({
            response: data,
            query: this.props.query
          });
        })
        .catch(err => console.error(this.props.url, err.toString()));

      return null
    }
  }

  componentDidMount() {
    this.getArtworks();
  }

  componentDidUpdate() {
    this.getArtworks();
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
