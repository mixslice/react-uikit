import lightBaseTheme from './baseThemes/lightBaseTheme';

class Themes {

  getTheme(theme) {
    switch (theme) {
      case 'darkBase':
      case 'lightBase':
      default:
        return lightBaseTheme;
    }
  }

}

export default new Themes();
