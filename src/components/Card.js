import React, { Component } from 'react';
import {
  Link
} from "react-router-dom";
import Figure from "./Figure";

class Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {id, title, artist_display, thumbnail, image_id} = this.props.data;

    let alt = title;
    let placeholder = null;
    if (thumbnail) {
      alt = thumbnail.alt_text;
      placeholder = thumbnail.lqip;
    }

    return (
      <Link to={`/item/${id}`} className="card">
        <Figure alt={alt}
                title={title}
                artist={artist_display}
                placeholder={placeholder}
                image_id={image_id}
                size="!400,400"
                ratio={1/1} />
      </Link>
    );
  }
}

export default Card;
