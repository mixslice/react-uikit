import React, { PropTypes } from 'react';
import radium from 'radium';
import { extendChildren } from '../utils/childUtils';


const getStyles = (props, theme) => {
  const { palette, spacing } = theme;

  return {
    avatar: {
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
      backgroundColor: props.backgroundColor || palette.greyColor
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
      color: props.color || palette.textColor
    },
    icon: {
      fontFamily: 'system'
    },
    clickable: {
      cursor: 'pointer'
    }
  };
};

const getChildren = (props, palette) => {
  let children = '';
  const extendProps = {
    flex: 'none',
    size: props.size || 'normal',
    baseColor: props.baseColor || palette.greyColor,
    hoverColor: props.baseColor || palette.greyColor
  };

  if (props.icon) {
    const icon = extendChildren(props.icon, extendProps);
    children = icon;
  } else if (props.label || props.children) {
    children = props.label || props.children;
  }

  return children;
};

const Avatar = (props, context) => {
  const { theme } = context;
  const styles = getStyles(props, theme);
  const {
    children,
    style,
    icon,
    label,
    size,
    src,
    ...other
  } = props;

  const inlineStyle = [];
  inlineStyle.push(styles.avatar);

  if (src) {
    inlineStyle.push(styles.avatarPic);
  }

  if (size === 'large') {
    inlineStyle.push(styles.large);
  }

  if (label || children) {
    inlineStyle.push(styles.letter);
  }

  if (icon) {
    inlineStyle.push(styles.icon);
  }

  if (props.onClick) {
    inlineStyle.push(styles.clickable);
  }

  if (style) {
    inlineStyle.push(style);
  }


  return (
    <div {...other} style={inlineStyle}>
      {getChildren(props, theme.palette)}
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
