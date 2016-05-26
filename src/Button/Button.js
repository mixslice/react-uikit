import React, { PropTypes } from 'react';
import radium from 'radium';
import color from 'color';
import transitions from '../styles/transitions';
import themes from '../styles/themes';
import { extendChildren } from '../utils/childUtils';

const getStyles = (theme) => {
  const { palette, spacing } = theme;
  const colors = {
    primaryColorHover: color(palette.primaryColor).lighten(palette.hoverColorDepth * 1.75).hexString(),
    accentColorHover: color(palette.accentColor).lighten(palette.hoverColorDepth * 1.75).hexString(),
    textColor: palette.textColor,
    disabledColor: color(palette.disabledColor).darken(palette.disabledColorDarken).rgbString()
  };

  return {
    button: {
      outline: 'none',
      boxSizing: 'border-box',
      display: 'inline-block',
      verticalAlign: 'middle',
      fontSize: '1rem',
      cursor: 'pointer',
      textDecoration: 'none',
      marginBottom: 20,
      marginRight: 10,
      padding: '9px 20px',
      fontWeight: 600,
      minWidth: spacing.buttonWidth,
      border: 0,
      borderRadius: spacing.borderRadius,
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
    },
    disabled: {
      cursor: 'default',
      color: colors.disabledColor,
      boxShadow: 'none'
    },
    large: {
      fontSize: '1.5rem'
    },
    iconStyle: {
      before: {
        padding: '9px 20px 9px 17px'
      },
      after: {
        padding: '9px 17px 9px 20px'
      }
    }
  };
};

const getChildren = (props) => {
  const childrenStyles = {
    wrapper: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    label: {
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

    const labelPosition = props.labelPosition || 'before';

    const label = (
      <span style={childrenStyles.label[labelPosition]}>
        {props.label}
      </span>
    );

    if (props.labelPosition && props.labelPosition === 'after') {
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

const Button = (props, context) => {
  const theme = context.theme || themes.getTheme();
  const styles = getStyles(theme);

  const inlineStyle = [];
  inlineStyle.push(styles.button);

  if (props.disabled) {
    inlineStyle.push(styles.disabled);
  } else {
    inlineStyle.push(styles.hover);
    inlineStyle.push(styles[props.kind]);
    if (props.backgroundColor) {
      inlineStyle.push({
        backgroundColor: props.backgroundColor,
        color: color(props.backgroundColor).light()
          ? theme.palette.textColor
          : theme.palette.highlightTextColor
      });
      inlineStyle.push(props.hoverColor
        && { ':hover': {
          backgroundColor: props.hoverColor,
          color: color(props.hoverColor).light()
            ? theme.palette.textColor
            : theme.palette.highlightTextColor
        }
      });
    }
  }

  if (props.icon && props.label) {
    const position = props.labelPosition || 'before';
    inlineStyle.push(styles.iconStyle[position]);
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

Button.propTypes = {
  backgroundColor: PropTypes.string,
  children: PropTypes.node,
  disabled: PropTypes.bool,
  hoverColor: PropTypes.string,
  icon: PropTypes.element,
  label: PropTypes.string,
  labelPosition: PropTypes.oneOf(['before', 'after']),
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
