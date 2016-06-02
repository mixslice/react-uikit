import React, { PropTypes } from 'react';
import radium from 'radium';
import color from 'color';
import transitions from './utils/transitions';
import { extendChildren } from './utils/childUtils';
import config from './styles/config';


const getStyles = ({ palette, spacing }) => ({
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
    borderRadius: spacing.borderRadius,
    overflow: 'hidden',
    transition: transitions.easeOut(),
    color: palette.foreground,
    backgroundColor: palette.default
  },
  hover: {
    ':hover': {
      backgroundColor: color(palette.default).darken(palette.hoverDepth).hexString()
    }
  },
  primary: {
    backgroundColor: palette.primary,
    color: palette.inverted,
    ':hover': {
      backgroundColor: color(palette.primary).lighten(palette.hoverLightDepth).hexString()
    }
  },
  secondary: {
    backgroundColor: palette.secondary,
    color: palette.inverted,
    ':hover': {
      backgroundColor: color(palette.secondary).lighten(palette.hoverLightDepth).hexString()
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
  iconStyle: {
    before: {
      paddingLeft: 17
    },
    after: {
      paddingRight: 17
    }
  }
});

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

    const labelPosition = props.icon ? (props.labelPosition || 'before') : 'root';

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

const Button = (props, { theme }) => {
  const mergedTheme = { ...config, ...theme };
  const { palette } = mergedTheme;
  const styles = getStyles(mergedTheme);

  const sx = [styles.root];

  if (props.disabled) {
    sx.push(styles.disabled);
  } else {
    sx.push(styles.hover);
    sx.push(styles[props.kind]);
    if (props.backgroundColor) {
      sx.push({
        backgroundColor: props.backgroundColor,
        color: color(props.backgroundColor).light()
          ? palette.foreground
          : palette.inverted
      });
      sx.push(props.hoverColor
        && { ':hover': {
          backgroundColor: props.hoverColor,
          color: color(props.hoverColor).light()
            ? palette.foreground
            : palette.inverted
        }
      });
    }
  }

  if (props.icon && props.label) {
    const position = props.labelPosition || 'before';
    sx.push(styles.iconStyle[position]);
  }

  if (props.size && props.size !== 'normal') {
    sx.push(styles[props.size]);
  }

  if (props.style) {
    sx.push(props.style);
  }

  return (
    <button
      className="btn"
      style={sx}
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
