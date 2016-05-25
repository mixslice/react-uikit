import React, { PropTypes } from 'react';
import merge from 'lodash.merge';
import radium from 'radium';
import color from 'color';
import transitions from '../styles/transitions';
import themes from '../styles/themes';
import { extendChildren } from '../utils/childUtils';

const styles = {
  button: {
    outline: 'none',
    boxSizing: 'border-box',
    display: 'inline-block',
    fontSize: '1rem',
    cursor: 'pointer',
    textDecoration: 'none',
    margin: '0.8em',
    padding: '0px',
    lineHeight: 2.5,
    fontWeight: 600,
    minWidth: '2.5em',
    position: 'relative',
    textAlign: 'center',
    border: 0,
    borderRadius: '0.2em',
    overflow: 'hidden',
    transition: transitions.easeOut(),
    backgroundColor: 'transparent'
  },
  disabled: {
    cursor: 'default',
    boxShadow: 'none'
  },
  large: {
    fontSize: '1.5rem'
  }
};

const getChildren = (props, palette) => {
  const extendProps = {
    default: {
      size: props.size,
      baseColor: props.baseColor || palette.textColor,
      hoverColor: props.hoverColor || color(palette.textColor).alpha(palette.textColorAlpha).rgbString()
    },
    primary: {
      baseColor: palette.primaryColor,
      hoverColor: color(palette.primaryColor).lighten(palette.hoverColorDepth * 2).hexString()
    },
    secondary: {
      baseColor: palette.accentColor,
      hoverColor: color(palette.accentColor).lighten(palette.hoverColorDepth * 2).hexString()
    }
  };

  let children = '';
  let childProps = props.disabled ? { disabled: props.disabled } : extendProps.default;

  if (props.kind) {
    childProps = merge({}, childProps, extendProps[props.kind]);
  }

  if (props.icon) {
    const icon = extendChildren(props.icon, childProps);
    children = (<div>{icon}</div>);
  }

  return children;
};

const IconButton = (props, context) => {
  const theme = context.theme || themes.getTheme();
  const { palette } = theme;

  const inlineStyle = [];
  inlineStyle.push(styles.button);

  if (props.disabled) {
    inlineStyle.push(styles.disabled);
  } else {
    if (props.backgroundColor) {
      inlineStyle.push({
        backgroundColor: props.backgroundColor,
        color: palette.highlightTextColor
      });
      inlineStyle.push(props.hoverColor
        && { ':hover': { backgroundColor: props.hoverColor } });
    }
  }

  if (props.size && props.size !== 'normal') {
    inlineStyle.push(styles[props.size]);
  }

  if (props.style) {
    inlineStyle.push(props.style);
  }

  return (
    <button
      style={inlineStyle}
      onClick={props.onClick}
      disabled={props.disabled ? 'disabled' : ''}
    >
    {getChildren(props, palette)}
    </button>
  );
};

IconButton.propTypes = {
  /**
   * Background color: css color string
   */
  backgroundColor: PropTypes.string,
  /**
   * Disable
   */
  disabled: PropTypes.bool,
  /**
   * Base color: css color string
   */
  baseColor: PropTypes.string,
  /**
   * Hover color: css color string
   */
  hoverColor: PropTypes.string,
  // TODO href: React.PropTypes.string,
  /**
   * Icon element: only support SVG Icon
   */
  icon: PropTypes.element,
  // TODO linkButton: React.PropTypes.bool,
  /**
   * Click event function
   */
  onClick: PropTypes.func,
  // TODO onKeyboardFocus, onMouseEnter, onMouseLeave, onTouchStart
  // TODO rippleColor: React.PropTypes.string,
  /**
   * Preset Kind: Primary or Secondary
   */
  kind: PropTypes.oneOf(['primary', 'secondary']),
  /**
   * Preset Size: normal, mini, large
   */
  size: PropTypes.oneOf(['normal', 'large']),
  /**
   * Customized style
   */
  style: PropTypes.object
};

IconButton.contextTypes = {
  theme: React.PropTypes.object
};


export default radium(IconButton);
