import React, { PropTypes } from 'react';
import radium from 'radium';
import color from 'color';
import transitions from '../styles/transitions';
import themes from '../styles/themes';
import { extendChildren } from '../utils/childUtils';


const getStyles = (theme) => {
  const { palette, spacing } = theme;
  const colors = {
    primaryColor: color(palette.primaryColor).hexString(),
    primaryColorHover: color(palette.primaryColor).lighten(palette.hoverColorDepth).hexString(),
    accentColor: color(palette.accentColor).hexString(),
    accentColorHover: color(palette.accentColor).lighten(palette.hoverColorDepth).hexString(),
    greyColor: color(palette.greyColor).hexString(),
    textColor: color(palette.textColor).alpha(palette.textColorAlpha).rgbString(),
    highlightTextColor: palette.highlightTextColor,
    disabledColor: color(palette.disabledColor).darken(palette.disabledColorDarken).rgbString()
  };

  return {
    button: {
      outline: 'none',
      boxSizing: 'border-box',
      display: 'inline-block',
      fontSize: '1rem',
      cursor: 'pointer',
      textDecoration: 'none',
      margin: '0.8em',
      padding: '0 1.75em',
      lineHeight: 2.8,
      fontWeight: 600,
      minWidth: spacing.buttonWidth,
      position: 'relative',
      textAlign: 'center',
      border: 0,
      borderRadius: '0.2em',
      overflow: 'hidden',
      transition: transitions.easeOut()
    },
    flatButton: {
      color: colors.textColor,
      backgroundColor: colors.greyColor,
      ':hover': {
        backgroundColor: colors.primaryColor
      }
    },
    raisedButton: {
      color: colors.textColor,
      backgroundColor: palette.canvasColor,
      ':hover': {
        backgroundColor: colors.greyColor
      },
      boxShadow:
        `0 ${palette.shadows[0][0]}px ${palette.shadows[0][1]}px
         ${color(palette.shadowColor).alpha(palette.shadows[0][2]).rgbString()},
         0 ${palette.shadows[0][3]}px ${palette.shadows[0][4]}px
         ${color(palette.shadowColor).alpha(palette.shadows[0][5]).rgbString()}`
    },
    primary: {
      backgroundColor: colors.primaryColor,
      color: colors.highlightTextColor,
      ':hover': {
        backgroundColor: colors.primaryColorHover
      }
    },
    secondary: {
      backgroundColor: colors.accentColor,
      color: colors.highlightTextColor,
      ':hover': {
        backgroundColor: colors.accentColorHover
      }
    },
    disabled: {
      cursor: 'default',
      backgroundColor: colors.disabledColor,
      color: colors.greyColor,
      ':hover': {
        backgroundColor: colors.disabledColor,
        color: colors.greyColor
      },
      boxShadow: 'none'
    },
    large: {
      fontSize: '1.5rem'
    }
  };
};

const getChildren = (props) => {
  let children = '';
  if (props.icon || props.label) {
    const icon = extendChildren(props.icon, {
      size: props.size,
      disabled: props.disabled
    });

    const labelPosition = props.labelPosition || 'before';

    const labelStyle = {
      before: {
        margin: '0 1em 0 0.5em'
      },
      after: {
        margin: '0 0.5em 0 1em'
      }
    };

    const label = (
      <span style={[props.icon && props.label && labelStyle[labelPosition]]}>
        {props.label}
      </span>
    );

    if (props.labelPosition && props.labelPosition === 'after') {
      children = (<div>{label}{icon}</div>);
    } else {
      children = (<div>{icon}{label}</div>);
    }
  } else {
    children = props.children;
  }
  return children;
};

const RaisedButton = (props, context) => {
  const theme = context.theme || themes.getTheme();
  const styles = getStyles(theme);

  const inlineStyle = [];
  inlineStyle.push(styles.button);

  if (props.disabled) {
    inlineStyle.push(styles.flatButton);
    inlineStyle.push(styles.disabled);
  } else {
    inlineStyle.push(styles.raisedButton);
    inlineStyle.push(styles[props.kind]);
    if (props.backgroundColor) {
      inlineStyle.push({
        backgroundColor: props.backgroundColor,
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
    {getChildren(props)}
    </button>
  );
};

RaisedButton.propTypes = {
  /**
   * Background color: css color string
   */
  backgroundColor: PropTypes.string,
  /**
   * Children Node
   */
  children: PropTypes.node,
  /**
   * Disable
   */
  disabled: PropTypes.bool,
  /**
   * Hover color: css color string
   */
  hoverColor: PropTypes.string,
  // TODO href: React.PropTypes.string,
  /**
   * Icon element: only support SVG Icon
   */
  icon: PropTypes.element,
  /**
   * Label for button, especially for Icon;
   * Icon or Label replaces the children
   */
  label: PropTypes.string,
  /**
   * Label Position, 'before' or 'after' the icon
   */
  labelPosition: React.PropTypes.oneOf(['before', 'after']),
  // TODO labelStyle
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

RaisedButton.contextTypes = {
  theme: React.PropTypes.object
};

export default radium(RaisedButton);
