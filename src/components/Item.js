import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Figure from "./Figure";
import Viewer from "./Viewer";

const endpoint = 'https://api.artic.edu/api/v1/artworks/';
const fields = 'id,title,artist_display,thumbnail,image_id';

class Item extends Component {
  constructor(props) {
    super(props);

    this.state = {
      response: null,
      viewer: false
    }
  }

  getArtwork = (id) => {
    const uri = endpoint + id;
    fetch(uri, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          response: data.data
        });
      })
      .catch(err => console.error(this.props.url, err.toString()));

    return null
  }

  metadataPair = (key, value) => {
    if (value) {
      return (
        <span>
          <dt>{key}</dt>
          <dd>{value}</dd>
        </span>
      )
    }
  }

  componentDidMount() {
    const {params: {id}} = this.props.match;
    this.getArtwork(id);
  }

  handleViewer = (e) => {
    e.stopPropagation();
    e.preventDefault();
    this.setState(state => ({
      viewer: !state.viewer
    }));
  }

  render() {
    if (this.state.response) {
      const {id, title, artist_display, thumbnail, image_id, date_display, dimensions, provenance_title, style_title} = this.state.response;
      return (
        <main className="item" id={`item-${id}`}>
          <div className="masthead">
            <Figure alt={thumbnail.alt_text}
                    placeholder={thumbnail.lqip}
                    image_id={image_id}
                    size="843,"
                    ratio={100 / 61.8}/>
            <Viewer id={id} active={this.state.viewer} />
          </div>
          <div className="content">
            <header>
              <div className="item-title">
                <h1>{title}</h1>
                <span>{artist_display}</span>
              </div>
              <div className="item-controls">
                <a href="#"
                   className="expand"
                   onKeyDown={this.handleViewer}
                   onClick={this.handleViewer}>
                  {this.state.viewer ? 'Close Viewer' : 'Expand in Viewer'}
                </a>
                <Link to="/" className="back">Back to Search</Link>
              </div>
            </header>
            <div className="metadata">
              <dl>
                {this.metadataPair('Date', date_display)}
                {this.metadataPair('Dimensions', dimensions)}
                {this.metadataPair('Provenance', provenance_title)}
                {this.metadataPair('Style', style_title)}
              </dl>
            </div>
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

export default Item;


