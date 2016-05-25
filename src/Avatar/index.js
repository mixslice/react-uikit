import React, { PropTypes } from 'react';
import radium from 'radium';
import themes from '../styles/themes';
import { extendChildren } from '../utils/childUtils';


const getStyles = (props, theme) => {
  const { palette, spacing } = theme;

  const size = props.size === 'large' ? spacing.largeAvatarSize : spacing.avatarSize;

  return {
    avatar: {
      outline: 'none',
      boxSizing: 'border-box',
      display: 'inline-block',
      textDecoration: 'none',
      margin: '0.5em',
      padding: '0',
      lineHeight: `${size}px`,
      height: size,
      minWidth: size,
      position: 'relative',
      textAlign: 'center',
      border: 0,
      borderRadius: '50%',
      backgroundColor: props.backgroundColor || palette.greyColor
    },
    avatarPic: {
      backgroundImage: `url(${props.src})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain'
    },
    letter: {
      color: props.color || palette.textColor,
      fontSize: `${size / spacing.avatarSize}em`
    },
    icon: {
      fontFamily: 'system'
    }
  };
};

const getChildren = (props, palette) => {
  let children = '';
  const extendProps = {
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
    <div
      style={inlineStyle}
      onClick={props.onClick}
    >
    {getChildren(props, theme.palette)}
    </div>
  );
};

Avatar.propTypes = {
  /**
   * Customized backgroundColor
   */
  backgroundColor: React.PropTypes.string,
  // TODO className: React.PropTypes.string,
  /**
   * svg base color
   */
  baseColor: PropTypes.string,
  /**
   * Children node
   */
  children: PropTypes.node,
  /**
   * svg icon
   */
  icon: React.PropTypes.element,
  /**
   * Letter label
   */
  label: PropTypes.string,
  /**
   * onClick event function
   */
  onClick: PropTypes.func,
  /**
   * Preset size: normal, large
   */
  size: PropTypes.oneOf(['normal', 'large']),
  /**
   * The image source url
   */
  src: PropTypes.string,
  /**
   * Customized style
   */
  style: React.PropTypes.object
};

Avatar.contextTypes = {
  theme: React.PropTypes.object
};

export default radium(Avatar);
