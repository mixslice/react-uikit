import React, { PropTypes } from 'react';
import radium from 'radium';
import config from './styles/config';
import Base from './Base';


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
  image: {
    boxSizing: 'border-box',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: backgroundColor || palette.default,
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

  return (
    <Base style={sx} {...props}>
      <div style={styles.root}>
        <div style={styles.image} />
        {children}
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
  style: PropTypes.object,
  children: PropTypes.node,
};

Media.contextTypes = {
  theme: PropTypes.object
};

export default radium(Media);
