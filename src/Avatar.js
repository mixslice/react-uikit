import React, { PropTypes } from 'react';
import radium from 'radium';
import { extendChildren } from './utils/childUtils';
import config from './styles/config';
import Base from './Base';


const getStyles = ({
  palette,
  spacing,
  backgroundColor,
  src,
  baseColor
}) => ({
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
    backgroundColor: backgroundColor || palette.default
  },
  large: {
    fontSize: `${spacing.largeAvatarSize / spacing.avatarSize}rem`,
    width: spacing.largeAvatarSize,
    height: spacing.largeAvatarSize
  },
  avatarPic: {
    backgroundImage: `url(${src})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  },
  letter: {
    color: baseColor || palette.foreground
  },
  icon: {
    fontFamily: 'system'
  },
  clickable: {
    cursor: 'pointer'
  }
});

const getChildren = ({
  icon,
  label,
  size,
  baseColor,
  children,
  palette,
}) => {
  let result = '';
  const extendProps = {
    size: size || 'normal',
    baseColor: baseColor || palette.default
  };

  if (icon) {
    result = extendChildren(icon, extendProps);
  } else if (label || children) {
    result = label || children;
  }

  return result;
};

const Avatar = ({
  children,
  style,
  icon,
  label,
  size,
  backgroundColor,
  src,
  baseColor,
  ...props
}, { theme }) => {
  const mergedTheme = { ...config, ...theme };
  const styles = getStyles({
    ...mergedTheme,
    backgroundColor,
    src,
    baseColor,
  });

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
    <Base {...props} style={sx}>
      {getChildren({
        ...mergedTheme,
        icon,
        label,
        size,
        baseColor,
        children,
      })}
    </Base>
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
