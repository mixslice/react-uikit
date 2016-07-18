import React, { PropTypes } from 'react';
import radium from 'radium';
import merge from 'lodash.merge';
import { extendChildren } from './utils/childUtils';
import config from './styles/config';
import Base from './Base';


const getChildren = ({
  palette,
  kind,
  icon,
  label,
  iconPosition,
  disabled,
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

  let newChildren = '';
  if (icon || label) {
    const extendProps = {
      default: {
        disabled,
        baseColor: palette.foreground
      },
      primary: {
        baseColor: palette.inverted
      },
      secondary: {
        baseColor: palette.inverted
      }
    };

    let childProps = extendProps.default;

    if (kind) {
      childProps = merge({}, childProps, extendProps[kind]);
    }

    if (icon) {
      newChildren = extendChildren(icon, childProps);
    }

    const newIcon = extendChildren(icon, {
      baseColor: kind === 'primary' ? palette.primary : palette.placeholder,
      disabled
    });

    const position = icon ? (iconPosition || 'before') : 'root';

    const newLabel = (
      <span style={childrenStyles.label[position]}>
        {label}
      </span>
    );

    if (iconPosition && iconPosition === 'after') {
      newChildren = (<div style={childrenStyles.wrapper}>{newLabel}{newIcon}</div>);
    } else if (label) {
      newChildren = (<div style={childrenStyles.wrapper}>{newIcon}{newLabel}</div>);
    } else {
      newChildren = (<div style={childrenStyles.wrapper}>{newIcon}</div>);
    }
  } else {
    newChildren = children;
  }
  return newChildren;
};

const NavItem = ({
  children,
  style,
  border = true,
  pullRight,
  lastChild,
  borderLeft,
  kind,
  icon,
  label,
  iconPosition,
  disabled,
  ...props,
}, { theme }) => {
  const { palette, spacing } = { ...config, ...theme };
  const styles = {
    root: {
      display: 'flex',
      boxSizing: 'border-box',
      cursor: 'pointer',
      marginLeft: pullRight ? 'auto' : 0,
      fontSize: '1rem',
      height: 60,
      textColor: palette.foreground,
      padding: `0 ${spacing.padding}px`,
      backgroundColor: palette.toolbar,
      ':hover': {
        backgroundColor: palette.toolbarHover
      }
    },
    border: {
      borderRight: lastChild ? 'none' : `1px solid ${palette.border}`,
      borderLeft: borderLeft ? `1px solid ${palette.border}` : 'none'
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
    <Base {...props} style={sx}>
      {getChildren({
        palette,
        kind,
        icon,
        label,
        iconPosition,
        disabled,
        children,
      })}
    </Base>
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
  iconPosition: PropTypes.oneOf(['before', 'after']),
  disabled: PropTypes.bool,
};

NavItem.contextTypes = {
  theme: PropTypes.object
};

export default radium(NavItem);
