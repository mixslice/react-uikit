import React, { PropTypes } from 'react';
import radium from 'radium';
import color from 'color';
import transitions from '../styles/transitions';
import themes from '../styles/themes';
import { extendChildren } from '../utils/childUtils';


const getStyles = (props, theme) => {
  const { palette, spacing } = theme;

  const depth = props.depth || 0;

  return {
    button: {
      outline: 'none',
      boxSizing: 'border-box',
      display: 'inline-block',
      fontSize: '1rem',
      cursor: 'pointer',
      textDecoration: 'none',
      margin: '0.8em',
      padding: '0px',
      fontWeight: 600,
      height: spacing.avatarSize,
      minWidth: spacing.avatarSize,
      position: 'relative',
      textAlign: 'center',
      border: 0,
      borderRadius: '50%',
      overflow: 'hidden',
      transition: transitions.easeOut(),
      boxShadow:
        `0 ${palette.shadows[depth][0]}px ${palette.shadows[depth][1]}px
         ${color(palette.shadowColor).alpha(palette.shadows[depth][2]).rgbString()},
         0 ${palette.shadows[depth][3]}px ${palette.shadows[depth][4]}px
         ${color(palette.shadowColor).alpha(palette.shadows[depth][5]).rgbString()}`
    },
    primary: {
      backgroundColor: palette.primaryColor,
      ':hover': {
        backgroundColor: color(palette.primaryColor).lighten(palette.hoverColorDepth * 2).hexString()
      }
    },
    secondary: {
      backgroundColor: palette.accentColor,
      ':hover': {
        backgroundColor: color(palette.accentColor).lighten(palette.hoverColorDepth * 2).hexString()
      }
    },
    disabled: {
      backgroundColor: palette.greyColor,
      ':hover': {
        backgroundColor: palette.greyColor
      },
      opacity: 0.75,
      cursor: 'default'
    },
    large: {
      height: spacing.largeAvatarSize,
      width: spacing.largeAvatarSize
    }
  };
};

const getChildren = (props, palette) => {
  let children = '';
  if (props.icon) {
    const icon = extendChildren(props.icon, {
      baseColor: props.baseColor || palette.highlightTextColor,
      hoverColor: palette.highlightTextColor
    });
    children = (<div>{icon}</div>);
  }

  return children;
};

const FloatingButton = (props, context) => {
  const theme = context.theme || themes.getTheme();
  const { palette } = theme;
  const styles = getStyles(props, theme);

  const inlineStyle = [];
  inlineStyle.push(styles.button);

  if (props.disabled) {
    inlineStyle.push(styles.disabled);
  } else {
    inlineStyle.push(styles.secondary);
    inlineStyle.push(styles[props.kind]);
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

FloatingButton.propTypes = {
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
  style: PropTypes.object,
  /**
   * Depth: 1 - 6
   */
  depth: PropTypes.oneOf([0, 1, 2, 3, 4])
};

FloatingButton.contextTypes = {
  theme: React.PropTypes.object
};

export default radium(FloatingButton);
