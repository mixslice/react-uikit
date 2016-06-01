import merge from 'lodash.merge';
import base from './base';


class Themes {

  getTheme(theme, ...more) {
    return merge({}, base, theme, ...more);
  }
}

export default new Themes();
