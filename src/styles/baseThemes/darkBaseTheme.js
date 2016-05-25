import {
  lightBlue800,
  blueGrey700,
  pinkA200,
  blueGrey300,
  grey700,
  white, black
} from '../colors';

export default {
  name: 'darkBaseTheme',
  fontFamily: 'lato,system,-apple-system,".SFNSText-Regular","Helvetica Neue",Roboto,"Segoe UI",sans-serif',
  palette: {
    primaryColor: lightBlue800,
    accentColor: pinkA200,
    greyColor: blueGrey700,
    textColor: white,
    textColorAlpha: 0.87,
    highlightTextColor: white,
    canvasColor: blueGrey700,
    borderColor: blueGrey300,
    disabledColor: grey700,
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
    iconSize: 24,
    avatarSize: 40,
    largeAvatarSize: 56,
    buttonWidth: 72
  }
};
