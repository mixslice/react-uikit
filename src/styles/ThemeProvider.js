import React, { Component, PropTypes } from 'react';
import { Style } from 'radium';
import merge from 'lodash.merge';
import themes from './themes';
import normalize from './normalize';
import globalStyle from './global';
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
    return (
      <div>
        <Style rules={merge(normalize, font, globalStyle)} />
        {this.props.children}
      </div>
    );
  }

}
