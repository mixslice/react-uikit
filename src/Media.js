import React, { PropTypes } from 'react';
import radium from 'radium';
import config from './styles/config';
import Base from './Base';
import { extendChildren } from './utils/childUtils';


const getStyles = ({
  palette,
  src,
  width,
  aspectRatio = 1,
  backgroundSize,
  backgroundColor,
}) => ({
  wrapper: {
    width,
  },
  root: {
    position: 'relative',
    width: '100%',
    paddingTop: `${100 / aspectRatio}%`,
  },
  content: {
    overflow: 'hidden',
    boxSizing: 'border-box',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: backgroundColor || palette.default,
  },
  image: {
    backgroundSize: backgroundSize || 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundImage: src ? `url(${src})` : 'none',
  },
});

const Media = ({
  src,
  width,
  aspectRatio,
  backgroundSize,
  backgroundColor,
  rounded,
  style,
  children,
  ...props
}, { theme }) => {
  const mergedTheme = { ...config, ...theme };
  const styles = getStyles({
    src,
    width,
    aspectRatio,
    backgroundSize,
    backgroundColor,
    ...mergedTheme,
  });
  const sx = { ...styles.wrapper, ...style };

  let newChildren = (
    <Base
      style={{ ...styles.content, ...styles.image }}
      rounded={rounded}
    />
  );
  if (children) {
    newChildren = extendChildren(children, {
      style: {
        ...styles.content,
        ...children.props.style
      }
    });
  }

  return (
    <Base style={sx} {...props}>
      <div style={styles.root}>
        {newChildren}
      </div>
    </Base>

  );
};

Media.propTypes = {
  src: PropTypes.string,
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  aspectRatio: PropTypes.number,
  backgroundSize: PropTypes.string,
  backgroundColor: PropTypes.string,
  rounded: PropTypes.bool,
  style: PropTypes.object,
  children: PropTypes.element,
};

Media.contextTypes = {
  theme: PropTypes.object
};

export default radium(Media);
