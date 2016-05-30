import React, { PropTypes } from 'react';
import radium from 'radium';
import color from 'color';


const getStyles = (theme) => {
  const { palette, spacing } = theme;

  const colors = {
    primaryColor: color(palette.primaryColor).hexString(),
    primaryColorHover: color(palette.primaryColor).darken(palette.hoverColorDepth).hexString(),
    accentColor: color(palette.accentColor).hexString(),
    accentColorHover: color(palette.accentColor).darken(palette.hoverColorDepth).hexString(),
    greyColor: color(palette.greyColor).hexString(),
    textColor: palette.textColor,
    highlightTextColor: palette.highlightTextColor,
    disabledColor: color(palette.disabledColor).darken(palette.hoverColorDepth).hexString()
  };

  return {
    default: {
      display: 'inline-block',
      height: spacing.iconSize,
      width: spacing.iconSize,
      userSelect: 'none',
      verticalAlign: 'middle',
      fill: colors.textColor
    },
    primary: {
      fill: colors.primaryColor,
      ':hover': {
        fill: colors.primaryColorHover
      }
    },
    secondary: {
      fill: colors.accentColor,
      ':hover': {
        fill: colors.accentColorHover
      }
    },
    disabled: {
      fill: colors.disabledColor,
      ':hover': {
        fill: colors.disabledColor
      }
    },
    large: {
      height: spacing.iconSize * 1.5,
      width: spacing.iconSize * 1.5
    }
  };
};

const SvgIcon = (props, context) => {
  const {
    path,
    baseColor,
    style,
    viewBox,
    disabled,
    kind,
    ...other,
  } = props;

  const { theme } = context;
  const styles = getStyles(theme);

  const inlineStyle = [];
  inlineStyle.push(styles.default);
  if (disabled) {
    inlineStyle.push(styles.disabled);
  } else {
    inlineStyle.push(styles[kind]);
    if (style) {
      inlineStyle.push(style);
    }
    if (baseColor) {
      inlineStyle.push({ fill: baseColor });
    }
  }

  if (props.size && props.size !== 'normal') {
    inlineStyle.push(styles[props.size]);
  }

  return (
    <svg
      {...other}
      style={inlineStyle}
      viewBox={viewBox}
    >
      {path}
    </svg>
  );
};

SvgIcon.propTypes = {
  disabled: PropTypes.bool,
  path: PropTypes.node,
  baseColor: PropTypes.string,
  style: PropTypes.object,
  /**
   * Allows you to redifine what the coordinates
   * without units mean inside an svg element. For example,
   * if the SVG element is 500 (width) by 200 (height), and you
   * pass viewBox="0 0 50 20", this means that the coordinates inside
   * the svg will go from the top left corner (0,0) to bottom right (50,20)
   * and each unit will be worth 10px.
   */
  viewBox: PropTypes.string,
  size: PropTypes.oneOf(['normal', 'large']),
  kind: PropTypes.oneOf(['primary', 'secondary'])
};

SvgIcon.defaultProps = {
  viewBox: '0 0 24 24'
};

SvgIcon.contextTypes = {
  theme: PropTypes.object,
};

export default radium(SvgIcon);
