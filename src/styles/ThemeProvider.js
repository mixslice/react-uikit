import React, { Component, PropTypes } from 'react';
import { Style, StyleRoot } from 'radium';
import merge from 'lodash.merge';
import themes from './themes';
import globalStyle from './global';
import normalize from 'normalize.css';
import font from './font.css';


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
      theme: this.props.theme || themes.getTheme()
    };
  }

  render() {
    const themeGlobalStyle = globalStyle(this.props.theme || themes.getTheme());
    return (
      <StyleRoot>
        <Style rules={merge({}, normalize, font, themeGlobalStyle)} />
        {this.props.children}
      </StyleRoot>
    );
  }

}
