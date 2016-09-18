import React, { PropTypes } from 'react';
import radium from 'radium';
import color from 'color';
import transitions from './utils/transitions';
import { extendChildren } from './utils/childUtils';
import config from './styles/config';
import Base from './Base';

const getStyles = ({ baseColor, hoverColor, kind }, { palette, spacing }) => {
  const backgroundColor =
    baseColor
    || (kind && palette[kind])
    || palette.default;

  const backgroundHoverColor =
    hoverColor
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
    root: {
      outline: 'none',
      boxSizing: 'border-box',
      display: 'inline-block',
      verticalAlign: 'middle',
      cursor: 'pointer',
      textDecoration: 'none',
      paddingLeft: 21,
      paddingRight: 21,
      paddingTop: 7,
      paddingBottom: 7,
      fontWeight: 600,
      minWidth: spacing.buttonWidth,
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
    disabled: {
      cursor: 'default',
      color: palette.disabled,
      boxShadow: 'none'
    },
    large: {
      paddingLeft: 27,
      paddingRight: 27,
      paddingTop: 9,
      paddingBottom: 9,
    },
    iconPosition: {
      before: {
        paddingLeft: 17
      },
      after: {
        paddingRight: 17
      }
    }
  };
};

const getChildren = ({
  icon,
  label,
  size,
  disabled,
  iconPosition,
  children,
}) => {
  const childrenStyles = {
    wrapper: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '1.5em'
    },
    label: {
      root: {
        margin: 0
      },
      before: {
        margin: '0 0 0 0.5em'
      },
      after: {
        margin: '0 0.5em 0 0'
      }
    }
  };

  let result = '';
  if (icon || label) {
    const newIcon = extendChildren(icon, {
      size,
      disabled
    });

    const position = icon ? (iconPosition || 'before') : 'root';

    const newLabel = (
      <span style={childrenStyles.label[position]}>
        {label}
      </span>
    );

    if (iconPosition && iconPosition === 'after') {
      result = (<div style={childrenStyles.wrapper}>{newLabel}{newIcon}</div>);
    } else if (label) {
      result = (<div style={childrenStyles.wrapper}>{newIcon}{newLabel}</div>);
    } else {
      result = (<div style={childrenStyles.wrapper}>{newIcon}</div>);
    }
  } else {
    result = children;
  }
  return result;
};

const Button = ({
  style,
  disabled,
  baseColor,
  hoverColor,
  kind,
  icon,
  label,
  size,
  iconPosition,
  children,
  ...props
}, { theme }) => {
  const styles = getStyles(
    { baseColor, hoverColor, kind },
    { ...config, ...theme }
  );

  const sx = [styles.root];

  if (disabled) {
    sx.push(styles.disabled);
  } else {
    sx.push(styles.default);
  }

  if (icon && label) {
    const position = iconPosition || 'before';
    sx.push(styles.iconPosition[position]);
  }

  if (size && size !== 'normal') {
    sx.push(styles[props.size]);
  }

  if (style) {
    sx.push(style);
  }

  return (
    <Base
      is="button"
      className="btn"
      style={sx}
      rounded
      disabled={disabled}
      {...props}
    >
    {getChildren({
      icon,
      label,
      size,
      disabled,
      iconPosition,
      children,
    })}
    </Base>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  baseColor: PropTypes.string,
  hoverColor: PropTypes.string,
  icon: PropTypes.element,
  label: PropTypes.string,
  iconPosition: PropTypes.oneOf(['before', 'after']),
  onClick: PropTypes.func,
  kind: PropTypes.oneOf(['primary', 'secondary']),
  size: PropTypes.oneOf(['normal', 'large']),
  float: PropTypes.oneOf(['left', 'right']),
  style: PropTypes.object
};

Button.contextTypes = {
  theme: PropTypes.object
};

export default radium(Button);
