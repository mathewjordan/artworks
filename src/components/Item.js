import React, {Component} from 'react';
import { Link } from "react-router-dom";
import Figure from "./Figure";

const endpoint = 'https://api.artic.edu/api/v1/artworks/';
const fields = 'id,title,artist_display,thumbnail,image_id';

class Item extends Component {
  constructor(props) {
    super(props);

    this.state ={
      response: null
    }
  }

  getArtwork = (id) => {
    const uri = endpoint + id;
    fetch(uri, {
      headers : {
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

  componentDidMount() {
    const { params: { id } } = this.props.match;
    this.getArtwork(id);
  }

  render() {
    if (this.state.response) {
      const {id, title, artist_display, thumbnail, image_id} = this.state.response;
      console.log(this.state.response)
      return (
        <div className="content">
          <Link to="/">Back to Search</Link>
          <Figure alt={thumbnail.alt_text}
                   placeholder={thumbnail.lqip}
                   image_id={image_id}
                   size="!1200,1200" />
        </div>
      );
    } else {
      return (
        <span>Loading...</span>
      )
    }
  }
}

export default Item;
