import color from 'color';

const monospace = '"Roboto Mono", Menlo, Consolas, monospace';
const sans = {
  fontFamily: '-apple-system, ".SFNSText-Regular", "San Francisco", Roboto, "Segoe UI", "Helvetica Neue", sans-serif'
};

const baseColors = {
  black: '#484848',
  white: 'rgba(255, 255, 255, 0.87)',
  grey: '#f5f5f5',
  midgray: '#9e9e9e',
  darkgray: '#616161',
  blue: '#448aff',
  red: '#ff5a5f',
  orange: '#f70',
  green: '#1c7',
  teal: '#38BDB7'
};

const defaultColors = {
  primary: baseColors.red,
  secondary: baseColors.teal,
  default: baseColors.darkgray,
  info: baseColors.blue,
  success: baseColors.green,
  warning: baseColors.orange,
  error: baseColors.red,
  inverted: baseColors.white,
  foreground: baseColors.white,
  background: baseColors.black
};

const palette = {
  ...baseColors,
  ...defaultColors,
  border: baseColors.darkgray,
  canvas: baseColors.black,
  disabled: color(defaultColors.default).lighten(0.2).rgbString(),
  panelHeader: color(baseColors.darkgray).alpha(0.5).rgbString(),
  toolbar: color(defaultColors.background).lighten(0.1).rgbString(),
  toolbarHover: defaultColors.default,
  controlBorder: baseColors.midgray,
  placeholder: color(defaultColors.foreground).alpha(0.5).rgbString(),
  hoverDepth: 0.1,
  hoverLightDepth: 0.175,
};

const spacing = {
  iconSize: 20,
  avatarSize: 40,
  largeAvatarSize: 56,
  buttonWidth: 72,
  margin: 10,
  padding: 20,
  formPadding: 10,
  verticalPadding: '9px 0 8px'
};

const inverted = palette.black;

const scale = [
  0,
  8,
  16,
  32,
  64
];

const fontSizes = [
  48,
  32,
  24,
  20,
  16,
  14,
  12
];

const defaultFontSize = 14;

const zIndex = [
  0,
  2,
  4,
  8,
  16
];

const bold = 600;
const borderRadius = 2;
const borderColor = 'rgba(0, 0, 0, .25)';

const config = {
  scale,
  fontSizes,
  defaultFontSize,
  bold,
  monospace,
  ...sans,
  zIndex,
  inverted,
  borderRadius,
  borderColor,
  palette,
  spacing
};

export default config;
