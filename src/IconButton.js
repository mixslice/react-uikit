import React, { PropTypes } from 'react';
import radium from 'radium';
import color from 'color';
import transitions from './utils/transitions';
import { extendChildren } from './utils/childUtils';
import config from './styles/config';
import Base from './Base';


const getStyles = (props, { palette, spacing }) => {
  const backgroundColor =
    props.baseColor
    || (props.kind && palette[props.kind])
    || palette.default;

  const backgroundHoverColor =
    props.hoverColor
    || (
      color(backgroundColor).lightness() > 70
      ? color(backgroundColor).darken(palette.hoverDepth).hexString()
      : color(backgroundColor).lighten(palette.hoverLightDepth).hexString()
    );

  const textColor =
    color(backgroundColor).lightness() > 70
    ? palette.black
    : palette.white;

  const textHoverColor =
    color(backgroundHoverColor).lightness() > 80
    ? palette.black
    : palette.white;


  return {
    backgroundColor,
    backgroundHoverColor,
    textColor,
    textHoverColor,
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
    default: {
      color: textColor,
      backgroundColor,
      ':hover': {
        color: textHoverColor,
        backgroundColor: backgroundHoverColor
      }
    },
    large: {
      width: spacing.largeAvatarSize,
      height: spacing.largeAvatarSize
    },
    disabled: {
      cursor: 'default',
      color: palette.disabled,
      boxShadow: 'none'
    }
  };
};

const getChildren = ({
  size,
  disabled,
  icon
}, styles) => {
  let children = '';

  if (icon) {
    children = extendChildren(icon, {
      size,
      disabled,
      baseColor: styles.textColor
    });
  }

  return children;
};

const IconButton = (props, { theme }) => {
  const styles = getStyles(props, { ...config, ...theme });

  const sx = [styles.root];

  if (props.disabled) {
    sx.push(styles.disabled);
  } else {
    sx.push(styles.default);
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
    {getChildren(props, styles)}
    </Base>
  );
};

IconButton.propTypes = {
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
