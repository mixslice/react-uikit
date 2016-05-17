import React from 'react';
import radium from 'radium';
import themes from './styles/themes';

const themeColors = themes.getTheme().palette;

const styles = {
  base: {
    boxSizing: 'border-box',
    display: 'inline-block',
    cursor: 'pointer',
    textDecoration: 'none',
    outline: 'none',
    padding: '0.5em 1.75em',
    height: '3.5em',
    lineHeight: '2.5em',
    fontWeight: 600,
    minWidth: '3.5em',
    position: 'relative',
    margin: '0.8em',
    textAlign: 'center',
    border: 0,
    borderRadius: '0.2em',
  },
  default: {
    color: themeColors.textColor.hexString(),
    backgroundColor: themeColors.greyColor.hexString(),
    ':hover': {
      backgroundColor: themeColors.greyColor.darken(0.05).hexString()
    }
  },
  raised: {
    backgroundColor: themeColors.canvasColor.hexString(),
    ':hover': {
      backgroundColor: themeColors.greyColor.darken(0.1).hexString()
    },
    boxShadow: `0px 1px 6px ${themeColors.shadowColor.rgbString()}, 0px 1px 4px ${themeColors.shadowColor.rgbString()}`
  },
  primary: {
    backgroundColor: themeColors.primaryColor.hexString(),
    color: themeColors.highlightTextColor.hexString(),
    ':hover': {
      backgroundColor: themeColors.primaryColor.darken(0.1).hexString()
    }
  },
  secondary: {
    backgroundColor: themeColors.accentColor.hexString(),
    color: themeColors.highlightTextColor.hexString(),
    ':hover': {
      backgroundColor: themeColors.accentColor.darken(0.1).hexString()
    }
  },
  disabled: {
    backgroundColor: themeColors.disabledColor.hexString()
  }
};

const Button = (
  {
    backgroundColor, children, disabled, design, hoverColor, icon,
    onClick, kind, label, labelPosition
  }) => (
  <button
    style={[
      styles.base,
      !disabled && styles.default,
      !disabled && design && styles[design],
      !disabled && kind && styles[kind],
      disabled && disabled === true && styles.disabled,
      backgroundColor && { backgroundColor }
    ]}
    onClick={onClick}
    disabled={disabled ? 'disabled' : ''}
  >
    {label || children}
  </button>
);

Button.propTypes = {
  backgroundColor: React.PropTypes.string,
  children: React.PropTypes.string,
  disabled: React.PropTypes.bool,
  design: React.PropTypes.oneOf(['flat', 'raised']),
  hoverColor: React.PropTypes.string,
  // TODO href: React.PropTypes.string,
  icon: React.PropTypes.element,
  label: React.PropTypes.string,
  labelPosition: React.PropTypes.oneOf(['before', 'after']),
  // TODO labelStyle
  // TODO linkButton: React.PropTypes.bool,
  onClick: React.PropTypes.func,
  // TODO onKeyboardFocus, onMouseEnter, onMouseLeave, onTouchStart
  // TODO rippleColor: React.PropTypes.string,
  kind: React.PropTypes.oneOf(['primary', 'secondary'])
};

export default radium(Button);
