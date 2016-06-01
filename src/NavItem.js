import React, { PropTypes } from 'react';
import radium from 'radium';
import merge from 'lodash.merge';
import { extendChildren } from './utils/childUtils';


const getChildren = ({ palette, ...props }) => {
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
    const extendProps = {
      default: {
        disabled: props.disabled,
        baseColor: palette.textColor
      },
      primary: {
        baseColor: palette.highlightTextColor
      },
      secondary: {
        baseColor: palette.highlightTextColor
      }
    };

    let childProps = extendProps.default;

    if (props.kind) {
      childProps = merge({}, childProps, extendProps[props.kind]);
    }

    if (props.icon) {
      children = extendChildren(props.icon, childProps);
    }

    const icon = extendChildren(props.icon, {
      baseColor: props.kind === 'primary' ? palette.primaryColor : palette.placeholderColor,
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

const NavItem = ({
  children,
  style,
  border = true,
  pullRight,
  lastChild,
  borderLeft,
  ...props
}, { theme }) => {
  const { palette, spacing } = theme;
  const styles = {
    root: {
      display: 'flex',
      boxSizing: 'border-box',
      cursor: 'pointer',
      marginLeft: pullRight ? 'auto' : 0,
      fontSize: '1rem',
      height: 60,
      textColor: palette.textColor,
      padding: `0 ${spacing.padding}px`,
      backgroundColor: palette.toolbarColor,
      ':hover': {
        backgroundColor: palette.toolbarHoverColor
      }
    },
    border: {
      borderRight: lastChild ? 'none' : `1px solid ${palette.borderColor}`,
      borderLeft: borderLeft ? `1px solid ${palette.borderColor}` : 'none'
    }
  };

  const sx = [styles.root];

  if (border) {
    sx.push(styles.border);
  }

  if (style) {
    sx.push(style);
  }

  return (
    <div {...props} style={sx}>
      {getChildren({ ...props, children, palette })}
    </div>
  );
};

NavItem.propTypes = {
  children: PropTypes.node,
  pullRight: PropTypes.bool,
  style: PropTypes.object,
  lastChild: PropTypes.bool,
  borderLeft: PropTypes.bool,
  border: PropTypes.bool,
  icon: PropTypes.element,
  label: PropTypes.string,
  kind: PropTypes.oneOf(['primary', 'secondary']),
  labelPosition: PropTypes.oneOf(['before', 'after'])
};

NavItem.contextTypes = {
  theme: PropTypes.object
};

export default radium(NavItem);
