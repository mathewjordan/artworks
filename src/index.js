import React from 'react';
import ReactDOM from 'react-dom';
import Artworks from "./Artworks";

import "./sass/artworks.scss";

ReactDOM.render(
  <Artworks />,
  document.getElementById('artworks')
);

module.hot.accept();
