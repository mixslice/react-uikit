import merge from 'lodash.merge';
import lightBaseTheme from './baseThemes/lightBaseTheme';


class Themes {

  getTheme(theme, ...more) {
    return merge({}, lightBaseTheme, theme, ...more);
  }
}

export default new Themes();
