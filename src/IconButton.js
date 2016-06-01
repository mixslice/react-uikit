import React, { PropTypes } from 'react';
import radium from 'radium';
import color from 'color';
import transitions from './utils/transitions';
import merge from 'lodash.merge';
import { extendChildren } from './utils/childUtils';

const getStyles = ({ palette, spacing }) => {
  const colors = {
    primaryColorHover: color(palette.primaryColor).lighten(palette.hoverColorDepth * 1.75).hexString(),
    accentColorHover: color(palette.accentColor).lighten(palette.hoverColorDepth * 1.75).hexString(),
    textColor: palette.textColor,
    disabledColor: color(palette.disabledColor).darken(palette.disabledColorDarken).rgbString()
  };

  return {
    root: {
      outline: 'none',
      boxSizing: 'border-box',
      display: 'inline-flex',
      justifyContent: 'center',
      alignItems: 'center',
      verticalAlign: 'middle',
      cursor: 'pointer',
      textDecoration: 'none',
      borderRadius: spacing.borderRadius,
      width: spacing.avatarSize,
      height: spacing.avatarSize,
      marginBottom: spacing.margin,
      marginRight: spacing.margin,
      border: 0,
      overflow: 'hidden',
      transition: transitions.easeOut(),
      color: palette.textColor,
      backgroundColor: palette.greyColor
    },
    hover: {
      ':hover': {
        backgroundColor: color(palette.greyColor).darken(palette.hoverColorDepth).hexString()
      }
    },
    disabled: {
      cursor: 'default',
      boxShadow: 'none'
    },
    large: {
      width: spacing.largeAvatarSize,
      height: spacing.largeAvatarSize
    },
    primary: {
      backgroundColor: palette.primaryColor,
      color: palette.highlightTextColor,
      ':hover': {
        backgroundColor: colors.primaryColorHover,
        color: palette.highlightTextColor,
      }
    },
    secondary: {
      backgroundColor: palette.accentColor,
      color: palette.highlightTextColor,
      ':hover': {
        backgroundColor: colors.accentColorHover,
        color: palette.highlightTextColor,
      }
    }
  };
};

const getChildren = ({
  size,
  disabled,
  kind,
  icon
}, palette) => {
  const extendProps = {
    default: {
      size,
      disabled,
      baseColor: palette.textColor
    },
    primary: {
      baseColor: palette.highlightTextColor
    },
    secondary: {
      baseColor: palette.highlightTextColor
    }
  };

  let children = '';
  let childProps = extendProps.default;

  if (kind) {
    childProps = merge({}, childProps, extendProps[kind]);
  }

  if (icon) {
    children = extendChildren(icon, childProps);
  }

  return children;
};

const IconButton = (props, { theme }) => {
  const styles = getStyles(theme);
  const { palette } = theme;

  const sx = [styles.root];

  if (props.disabled) {
    sx.push(styles.disabled);
  } else {
    sx.push(styles.hover);
    sx.push(styles[props.kind]);
    if (props.backgroundColor) {
      sx.push({
        backgroundColor: props.backgroundColor,
        color: palette.highlightTextColor
      });
      sx.push(props.hoverColor
        && { ':hover': { backgroundColor: props.hoverColor } });
    }
  }

  if (props.size && props.size !== 'normal') {
    sx.push(styles[props.size]);
  }

  if (props.style) {
    sx.push(props.style);
  }

  return (
    <div
      style={sx}
      onClick={props.onClick}
      disabled={props.disabled ? 'disabled' : ''}
    >
    {getChildren(props, palette)}
    </div>
  );
};

IconButton.propTypes = {
  backgroundColor: PropTypes.string,
  disabled: PropTypes.bool,
  baseColor: PropTypes.string,
  hoverColor: PropTypes.string,
  icon: PropTypes.element,
  onClick: PropTypes.func,
  kind: PropTypes.oneOf(['primary', 'secondary']),
  size: PropTypes.oneOf(['normal', 'large']),
  style: PropTypes.object
};

IconButton.contextTypes = {
  theme: React.PropTypes.object
};


export default radium(IconButton);
