import {
  blueA200,
  grey100,
  grey300,
  white,
  black
} from '../colors';
import color from 'color';

export default {
  name: 'lightBaseTheme',
  fontFamily: 'lato,system,-apple-system,".SFNSText-Regular","Helvetica Neue",Roboto,"Segoe UI",sans-serif',
  palette: {
    primaryColor: blueA200,
    accentColor: '#ff5a5f',
    greyColor: grey100,
    textColor: color(black).alpha(0.75).rgbString(),
    highlightTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    disabledColor: grey100,
    disabledColorDarken: 0.1,
    shadowColor: black,
    shadows: [
      [1, 6, 0.12, 1, 4, 0.12],
      [3, 10, 0.16, 3, 10, 0.23],
      [10, 30, 0.19, 6, 10, 0.23],
      [14, 45, 0.25, 10, 18, 0.22],
      [19, 60, 0.30, 15, 20, 0.22],
    ],
    hoverColorDepth: 0.1
  },
  spacing: {
    iconSize: 20,
    avatarSize: 40,
    largeAvatarSize: 56,
    buttonWidth: 72,
    padding: 10,
    verticalPadding: '9px 0 8px',
    borderRadius: 2
  }
};
