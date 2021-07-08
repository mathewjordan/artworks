import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';
import * as AspectRatio from '@radix-ui/react-aspect-ratio';

class Card extends Component {
  constructor(props) {
    super(props);
  }

  iiifImage = (id, size) => {
    return `https://www.artic.edu/iiif/2/${id}/full/${size}/0/default.jpg`
  }

  render() {
    const {alt, title, artist, placeholder, image_id, size, ratio} = this.props;

    return (
        <figure>
          <AspectRatio.Root ratio={ratio}>
            <LazyLoad>
                <img src={this.iiifImage(image_id, size)} alt={alt} />
            </LazyLoad>
            <span className="placeholder" style={{
              backgroundImage: `url(${placeholder})`
            }}></span>
          </AspectRatio.Root>
          <figcaption>
            <span className="title">{title}</span>
            <span className="artist">{artist}</span>
          </figcaption>
        </figure>
    );
  }
}

export default Card;
