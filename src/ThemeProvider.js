import React, { Component, PropTypes } from 'react';
import { Style, StyleRoot } from 'radium';
import merge from 'lodash.merge';
import normalize from 'normalize.css';
import themes from './themes/themes';
import globalStyle from './themes/global';


export default class ThemeProvider extends Component {
  static propTypes = {
    children: PropTypes.node,
    theme: PropTypes.object
  };

  static childContextTypes = {
    theme: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.theme = this.props.theme || themes.getTheme();
  }

  getChildContext() {
    return {
      theme: this.theme
    };
  }

  render() {
    const gs = globalStyle(this.theme);
    return (
      <StyleRoot>
        <Style rules={merge({}, normalize, gs)} />
        {this.props.children}
      </StyleRoot>
    );
  }
}
