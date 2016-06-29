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

const getChildren = (props) => {
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

  let children = '';
  if (props.icon || props.label) {
    const icon = extendChildren(props.icon, {
      size: props.size,
      disabled: props.disabled
    });

    const iconPosition = props.icon ? (props.iconPosition || 'before') : 'root';

    const label = (
      <span style={childrenStyles.label[iconPosition]}>
        {props.label}
      </span>
    );

    if (props.iconPosition && props.iconPosition === 'after') {
      children = (<div style={childrenStyles.wrapper}>{label}{icon}</div>);
    } else if (props.label) {
      children = (<div style={childrenStyles.wrapper}>{icon}{label}</div>);
    } else {
      children = (<div style={childrenStyles.wrapper}>{icon}</div>);
    }
  } else {
    children = props.children;
  }
  return children;
};

const Button = ({ style, disabled, ...props }, { theme }) => {
  const styles = getStyles(props, { ...config, ...theme });

  const sx = [styles.root];

  if (disabled) {
    sx.push(styles.disabled);
  } else {
    sx.push(styles.default);
  }

  if (props.icon && props.label) {
    const position = props.iconPosition || 'before';
    sx.push(styles.iconPosition[position]);
  }

  if (props.size && props.size !== 'normal') {
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
      disabled={props.disabled ? 'disabled' : ''}
      {...props}
    >
    {getChildren(props)}
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
