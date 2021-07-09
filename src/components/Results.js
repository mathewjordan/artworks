import React, { Component } from 'react';
import Card from "./Card";

const endpoint = 'https://api.artic.edu/api/v1/artworks/search?query[term][is_public_domain]=true';
const fields = 'id,title,artist_display,thumbnail,image_id';
const limit = 20;

class Results extends Component {
  constructor(props) {
    super(props);

    this.state ={
      query: null,
      response: [],
      fetching: 0,
      page: 1,
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
      let fetchPage = page;
      if (query !== this.props.query) {
        fetchPage = 1;
      }
      let uri = endpoint + '&fields=' + fields + '&limit=' + limit + '&page=' + fetchPage;
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
              total: data.pagination.total,
              response: data.data,
              query: this.props.query,
              page: fetchPage,
              previousPage: fetchPage,
              fetch: 0
            });
          } else {
            this.setState({
              response: [...this.state.response,...data.data],
              previousPage: page,
              fetch: 0
            });
          }
        })
        .catch(err => console.error(this.props.url, err.toString()));
    }
  }

  infiniteScroll = () => {
    let scrollLocation = window.innerHeight + document.documentElement.scrollTop;
    let height = document.documentElement.offsetHeight - 750;
    if ((scrollLocation >= height) && this.state.fetch === 0) {
      let nextPage = this.state.page;
      nextPage++;

      this.setState({
        fetch: 1,
        page: nextPage
      });
    }
  }

  resultsLabel = (query, total) => {
    if (total) {
      let label = `Found ${total} Results.`;
      if (query !== '') {
        label = `Found ${total} Results for "${query}".`;
      }
      return <span>{label}</span>
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

    let { response, query, total } = this.state;

    if (response) {
      return (
        <main className="results">
          {this.resultsLabel(query, total)}
          <div className="items">
            {this.mapCards(response)}
          </div>
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
