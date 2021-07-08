import React from 'react';
import ReactDOM from 'react-dom';
import Artworks from "./Artworks";

ReactDOM.render(
  <Artworks />,
  document.getElementById('artworks')
);

module.hot.accept();
