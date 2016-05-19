import { Component, PropTypes } from 'react';
import themes from './themes';

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
    return this.props.children;
  }

}
