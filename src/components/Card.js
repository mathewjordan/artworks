import React, { Component } from 'react';
import Figure from "./Figure";

class Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {title, artist_display, thumbnail, image_id} = this.props.data;

    return (
      <div>
        <Figure alt={thumbnail.alt_text}
                placeholder={thumbnail.lqip}
                image_id={image_id}
                size="!400,400" />
        {title}
        {artist_display}
      </div>
    );
  }
}

export default Card;
