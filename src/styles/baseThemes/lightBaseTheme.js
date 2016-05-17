import {
  cyan500,
  pinkA200,
  grey100, grey300,
  white, black
} from '../colors';
import color from 'color';

export default {
  fontFamily: 'system,-apple-system,\".SFNSText-Regular\",\"Helvetica Neue\",Roboto,\"Segoe UI\",sans-serif;',
  palette: {
    primaryColor: color(cyan500),
    accentColor: color(pinkA200),
    greyColor: color(grey100),
    textColor: color(black).alpha(0.87),
    highlightTextColor: color(white),
    canvasColor: color(white),
    borderColor: color(grey300),
    disabledColor: color(grey100).darken(0.1),
    shadowColor: color(black).alpha(0.117647)
  }
};
