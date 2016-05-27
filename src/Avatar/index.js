import React, { PropTypes } from 'react';
import radium from 'radium';
import themes from '../styles/themes';
import { extendChildren } from '../utils/childUtils';


const getStyles = (props, theme) => {
  const { palette, spacing } = theme;

  return {
    avatar: {
      outline: 'none',
      boxSizing: 'border-box',
      display: 'inline-flex',
      justifyContent: 'center',
      alignItems: 'center',
      verticalAlign: 'middle',
      textDecoration: 'none',
      margin: '0.5em',
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
    children = (<div>{props.label || props.children}</div>);
  } else {
    children = (<span>&nbsp;</span>);
  }

  return children;
};

const Avatar = (props, context) => {
  const theme = context.theme || themes.getTheme();
  const styles = getStyles(props, theme);

  const inlineStyle = [];
  inlineStyle.push(styles.avatar);

  if (props.src) {
    inlineStyle.push(styles.avatarPic);
  }

  if (props.size === 'large') {
    inlineStyle.push(styles.large);
  }

  if (props.label || props.children) {
    inlineStyle.push(styles.letter);
  }

  if (props.icon) {
    inlineStyle.push(styles.icon);
  }

  if (props.style) {
    inlineStyle.push(props.style);
  }


  return (
    <div style={inlineStyle}>
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
  src: PropTypes.string,
  style: React.PropTypes.object
};

Avatar.contextTypes = {
  theme: React.PropTypes.object
};

export default radium(Avatar);
