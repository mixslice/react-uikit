import React, { PropTypes } from 'react';
import radium from 'radium';
import { extendChildren } from './utils/childUtils';
import config from './styles/config';


const getStyles = (props, { palette, spacing }) => ({
  root: {
    userSelect: 'none',
    outline: 'none',
    boxSizing: 'border-box',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    verticalAlign: 'middle',
    textDecoration: 'none',
    marginRight: '0.5em',
    padding: 0,
    width: spacing.avatarSize,
    height: spacing.avatarSize,
    border: 0,
    borderRadius: '50%',
    backgroundColor: props.backgroundColor || palette.default
  },
  large: {
    fontSize: `${spacing.largeAvatarSize / spacing.avatarSize}rem`,
    width: spacing.largeAvatarSize,
    height: spacing.largeAvatarSize
  },
  avatarPic: {
    backgroundImage: `url(${props.src})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain'
  },
  letter: {
    color: props.color || palette.foreground
  },
  icon: {
    fontFamily: 'system'
  },
  clickable: {
    cursor: 'pointer'
  }
});

const getChildren = (props, { palette }) => {
  let children = '';
  const extendProps = {
    flex: 'none',
    size: props.size || 'normal',
    baseColor: props.baseColor || palette.default,
    hoverColor: props.baseColor || palette.default
  };

  if (props.icon) {
    const icon = extendChildren(props.icon, extendProps);
    children = icon;
  } else if (props.label || props.children) {
    children = props.label || props.children;
  }

  return children;
};

const Avatar = (props, { theme }) => {
  const mergedTheme = { ...config, ...theme };
  const styles = getStyles(props, mergedTheme);
  const {
    children,
    style,
    icon,
    label,
    size,
    src,
    ...other
  } = props;

  const sx = [styles.root];

  if (src) {
    sx.push(styles.avatarPic);
  }

  if (size === 'large') {
    sx.push(styles.large);
  }

  if (label || children) {
    sx.push(styles.letter);
  }

  if (icon) {
    sx.push(styles.icon);
  }

  if (props.onClick) {
    sx.push(styles.clickable);
  }

  if (style) {
    sx.push(style);
  }


  return (
    <div {...other} style={sx}>
      {getChildren(props, mergedTheme)}
    </div>
  );
};

Avatar.propTypes = {
  backgroundColor: React.PropTypes.string,
  baseColor: PropTypes.string,
  children: PropTypes.node,
  icon: React.PropTypes.element,
  label: PropTypes.string,
  size: PropTypes.oneOf(['normal', 'large']),
  onClick: PropTypes.func,
  src: PropTypes.string,
  style: React.PropTypes.object
};

Avatar.contextTypes = {
  theme: React.PropTypes.object
};

export default radium(Avatar);
