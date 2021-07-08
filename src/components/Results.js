import React, { Component } from 'react';
import Card from "./Card";

const endpoint = 'https://api.artic.edu/api/v1/artworks/search?query[term][is_public_domain]=true';
const fields = 'id,title,artist_display,thumbnail,image_id';
const limit = 12;

class Results extends Component {
  constructor(props) {
    super(props);

    this.state ={
      query: null,
      response: [],
      page: 0
    }
  }

  mapCards = (items) => {
    console.log(items)
    return items.map((item, index) => {
      return (
        <Card key={index}
              data={item} />
      )
    });
  }

  getArtworks = (page) => {
    const {query, previousPage} = this.state;
    if((query !== this.props.query) || (page !== previousPage)) {
      let uri = endpoint + '&fields=' + fields + '&limit=' + limit + '&page=' + page;
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
          if(query !== this.props.query) {
            this.setState({
              response: data.data,
              query: this.props.query,
              previousPage: page
            });
          } else {
            this.setState({
              response: [...this.state.response,...data.data],
              previousPage: page
            });
          }
        })
        .catch(err => console.error(this.props.url, err.toString()));
    }
  }

  infiniteScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
      let nextPage = this.state.page;
      nextPage++;

      this.setState({
        page: nextPage
      });
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.infiniteScroll);
    this.getArtworks(this.state.page);
  }

  componentDidUpdate() {
    this.getArtworks(this.state.page);
  }

  render() {
    if (this.state.response) {
      return (
        <main className="results">
          {this.mapCards(this.state.response)}
        </main>
      );
    } else {
      return (
        <span>Loading...</span>
      )
    }
  }
}

export default Results;
