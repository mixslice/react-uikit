/**
 * Utility for extracting color and backgroundColor props from components
 */

const colorStyle = (props, colors, context) => {
  colors = colors || {};
  const {
    color,
    backgroundColor,
    kind,
    inverted
  } = props || {};
  const result = {};

  if (color && colors[color]) {
    result.color = colors[color];
  } else if (typeof color === 'string') {
    result.color = color;
  }

  if (backgroundColor && colors[backgroundColor]) {
    result.backgroundColor = colors[backgroundColor];
  } else if (typeof backgroundColor === 'string') {
    result.backgroundColor = backgroundColor;
  }

  if (kind && colors[kind]) {
    const invertedColor = context && context.inverted;
    if (inverted) {
      result.color = invertedColor || colors.white;
      result.backgroundColor = colors[kind];
    } else {
      result.color = colors[kind];
    }
  }

  return result;
};

export default colorStyle;
