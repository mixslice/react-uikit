import React, { Component, PropTypes } from 'react';
import { Style, StyleRoot } from 'radium';
import merge from 'lodash.merge';
import normalize from 'normalize.css';
import globalStyle from './styles/global';
import config from './styles/config';


export default class ThemeProvider extends Component {
  static propTypes = {
    children: PropTypes.node,
    theme: PropTypes.object
  };

  static childContextTypes = {
    theme: PropTypes.object.isRequired
  };

  getChildContext() {
    return {
      theme: this.props.theme
    };
  }

  render() {
    const gs = globalStyle({ ...config, ...this.props.theme });
    return (
      <StyleRoot>
        <Style rules={merge({}, normalize, gs)} />
        {this.props.children}
      </StyleRoot>
    );
  }
}
