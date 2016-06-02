import React, { PropTypes } from 'react';
import radium from 'radium';
import color from 'color';
import transitions from './utils/transitions';
import merge from 'lodash.merge';
import { extendChildren } from './utils/childUtils';
import config from './styles/config';


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
    borderRadius: spacing.borderRadius,
    width: spacing.avatarSize,
    height: spacing.avatarSize,
    border: 0,
    overflow: 'hidden',
    transition: transitions.easeOut(),
    color: palette.default,
    backgroundColor: palette.grey
  },
  hover: {
    ':hover': {
      backgroundColor: color(palette.grey).darken(palette.hoverDepth).hexString()
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
    backgroundColor: palette.primary,
    color: palette.inverted,
    ':hover': {
      backgroundColor: color(palette.primary).lighten(palette.hoverLightDepth).hexString(),
      color: palette.inverted,
    }
  },
  secondary: {
    backgroundColor: palette.secondary,
    color: palette.inverted,
    ':hover': {
      backgroundColor: color(palette.secondary).lighten(palette.hoverLightDepth).hexString(),
      color: palette.inverted,
    }
  }
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
      baseColor: palette.default
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
    <div
      className="btn"
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
