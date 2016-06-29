import color from 'color';

const monospace = '"Roboto Mono", Menlo, Consolas, monospace';
const sans = {
  fontFamily: '-apple-system, ".SFNSText-Regular", "San Francisco", Roboto, "Segoe UI", "Helvetica Neue", sans-serif'
};

const baseColors = {
  black: '#484848',
  white: '#fff',
  grey: '#f5f5f5',
  midgray: '#e0e0e0',
  darkgray: '#bdbdbd',
  blue: '#448aff',
  red: '#ff5a5f',
  orange: '#f70',
  green: '#1c7'
};

const defaultColors = {
  primary: baseColors.blue,
  secondary: baseColors.red,
  default: baseColors.grey,
  info: baseColors.blue,
  success: baseColors.green,
  warning: baseColors.orange,
  error: baseColors.red,
  inverted: baseColors.white,
  foreground: baseColors.black,
  background: baseColors.white,
};

const palette = {
  ...baseColors,
  ...defaultColors,
  border: baseColors.midgray,
  canvas: baseColors.white,
  disabled: color(defaultColors.default).darken(0.1).rgbString(),
  panelHeader: color(baseColors.white).darken(0.05).rgbString(),
  toolbar: baseColors.white,
  toolbarHover: color(baseColors.white).darken(0.05).rgbString(),
  controlBorder: baseColors.darkgray,
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

const inverted = palette.white;

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
