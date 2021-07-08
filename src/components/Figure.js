import React, { Component } from 'react';

class Card extends Component {
  constructor(props) {
    super(props);
  }

  iiifImage = (id, size) => {
    return `https://www.artic.edu/iiif/2/${id}/full/${size}/0/default.jpg`
  }

  render() {
    const {alt, title, artist, placeholder, image_id, size} = this.props;

    return (
      <figure>
        <img src={this.iiifImage(image_id, size)} alt={alt} />
        <span style={{
          backgroundImage: `url(${placeholder})`
        }}></span>
        <figcaption>
          <span className="title">{title}</span>
          <span className="artist">{artist}</span>
        </figcaption>
      </figure>
    );
  }
}

export default Card;
