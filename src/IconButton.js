import React, { PropTypes } from 'react';
import radium from 'radium';
import color from 'color';
import transitions from './utils/transitions';
import merge from 'lodash.merge';
import { extendChildren } from './utils/childUtils';
import config from './styles/config';
import Base from './Base';


const getStyles = ({ palette, spacing }) => ({
  root: {
    outline: 'none',
    boxSizing: 'border-box',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    verticalAlign: 'middle',
    cursor: 'pointer',
    textDecoration: 'none',
    width: spacing.avatarSize,
    height: spacing.avatarSize,
    border: 0,
    overflow: 'hidden',
    transition: transitions.easeOut(),
    color: palette.foreground,
    backgroundColor: palette.default
  },
  disabled: {
    cursor: 'default',
    boxShadow: 'none'
  },
  large: {
    width: spacing.largeAvatarSize,
    height: spacing.largeAvatarSize
  },
  hover: {
    ':hover': {
      backgroundColor: color(palette.background).light()
      ? color(palette.default).darken(palette.hoverDepth).hexString()
      : color(palette.default).lighten(palette.hoverLightDepth).hexString()
    }
  },
  primary: {
    backgroundColor: palette.primary,
    color: palette.inverted,
    ':hover': {
      backgroundColor: color(palette.background).dark()
      ? color(palette.primary).lighten(palette.hoverDepth).hexString()
      : color(palette.primary).lighten(palette.hoverLightDepth).hexString()
    }
  },
  secondary: {
    backgroundColor: palette.secondary,
    color: palette.inverted,
    ':hover': {
      backgroundColor: color(palette.background).dark()
      ? color(palette.secondary).lighten(palette.hoverDepth).hexString()
      : color(palette.secondary).lighten(palette.hoverLightDepth).hexString()
    }
  },
});

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
      baseColor: palette.foreground
    },
    primary: {
      baseColor: palette.inverted
    },
    secondary: {
      baseColor: palette.inverted
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
  const mergedTheme = { ...config, ...theme };
  const styles = getStyles(mergedTheme);
  const { palette } = mergedTheme;

  const sx = [styles.root];

  if (props.disabled) {
    sx.push(styles.disabled);
  } else {
    sx.push(styles.hover);
    sx.push(styles[props.kind]);
    if (props.backgroundColor) {
      sx.push({
        backgroundColor: props.backgroundColor,
        color: palette.inverted
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
    <Base
      className="btn"
      style={sx}
      rounded
      onClick={props.onClick}
      disabled={props.disabled ? 'disabled' : ''}
    >
    {getChildren(props, palette)}
    </Base>
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
