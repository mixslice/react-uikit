import merge from 'lodash.merge';
import lightBaseTheme from './baseThemes/lightBaseTheme';


class Themes {

  getTheme(theme, ...more) {
    const _t = merge({}, lightBaseTheme, theme, ...more);
    return _t;
  }
}

export default new Themes();
