import merge from 'lodash.merge';
import config from './config';


class Themes {

  getTheme(theme, ...more) {
    return merge({}, config, theme, ...more);
  }
}

export default new Themes();
