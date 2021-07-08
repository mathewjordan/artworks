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

    return (
      <Link to={`/item/${id}`}>
        <Figure alt={thumbnail.alt_text}
                placeholder={thumbnail.lqip}
                image_id={image_id}
                size="!400,400" />
        {title}
        {artist_display}
      </Link>
    );
  }
}

export default Card;
