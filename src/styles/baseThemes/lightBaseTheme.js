import {
  lightBlue800,
  pinkA200,
  grey100, grey300,
  white, black
} from '../colors';

export default {
  name: 'lightBaseTheme',
  fontFamily: 'lato,system,-apple-system,".SFNSText-Regular","Helvetica Neue",Roboto,"Segoe UI",sans-serif',
  palette: {
    primaryColor: lightBlue800,
    accentColor: pinkA200,
    greyColor: grey100,
    textColor: black,
    textColorAlpha: 0.87,
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
    hoverColorDepth: 0.2
  },
  spacing: {
    iconSize: 24,
    avatarSize: 40,
    largeAvatarSize: 56,
    buttonWidth: 72
  }
};
