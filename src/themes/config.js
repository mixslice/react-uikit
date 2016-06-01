import {
  blueA200,
  grey100,
  grey300,
  grey400,
  grey500,
  white,
} from '../utils/colors';
import color from 'color';

const monospace = '"Roboto Mono", Menlo, Consolas, monospace';

const baseColors = {
  black: '#484848',
  white: '#fff',
  grey: grey100,
  midgray: grey300,
  blue: blueA200,
  red: '#ff5a5f',
  orange: '#f70',
  green: '#1c7'
};

const palette = {
  ...baseColors,
  primary: baseColors.blue,
  secondary: baseColors.red,
  default: baseColors.black,
  info: baseColors.blue,
  success: baseColors.green,
  warning: baseColors.orange,
  error: baseColors.red,
  inverted: white,
  disabled: color(baseColors.grey).darken(0.1).rgbString(),
  background: white,
  canvas: white,
  border: baseColors.midgray,
  panelHeader: color(baseColors.midgray).alpha(0.5).rgbString(),
  toolbar: white,
  toolbarHover: color(white).darken(0.05).rgbString(),
  controlBorder: grey400,
  placeholder: grey500,
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
  verticalPadding: '9px 0 8px',
  borderRadius: 2
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
  bold,
  monospace,
  zIndex,
  inverted,
  borderRadius,
  borderColor,
  palette,
  spacing
};

export default config;
