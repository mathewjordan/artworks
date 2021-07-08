import React, { Component } from 'react';
import Mirador from "./Mirador";

class Viewer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.active) {
      const manifest = "https://api.artic.edu/api/v1/artworks/" + this.props.id + "/manifest.json"
      return (
        <Mirador
          config={{
            id: 'mirador',
            window: {
              hideWindowTitle: false,
              sideBarOpen: false,
              allowTopMenuButton: true,
              allowWindowSideBar: true,
              allowMaximize: false,
              allowClose: false,
              forceDrawAnnotations: true
            },
            windows: [{
              manifestId: manifest
            }],
            workspaceControlPanel: {
              enabled: false,
            },
          }}
          plugins={[]}
        />
      );
    } else {
      return null
    }
  }
}

export default Viewer;
