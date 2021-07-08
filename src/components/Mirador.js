import React, { Component } from 'react';
import mirador from 'mirador';
import PropTypes from 'prop-types';

class Mirador extends Component {
  constructor(props) {
    super(props);

    this.miradorInstance = null;
  }

  handleInstance = () => {
    const { config, plugins } = this.props;
    this.miradorInstance = mirador.viewer(config, plugins);
  }

  componentDidMount() {
    this.handleInstance()
  }

  render() {
    const { config } = this.props;
    return <div id={config.id} />;
  }
}

Mirador.propTypes = {
  config: PropTypes.string.isRequired,
  plugins: PropTypes.string.isRequired,
};

export default Mirador;
