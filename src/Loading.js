import React, { PropTypes } from 'react';
import radium from 'radium';
import color from 'color';
import config from './styles/config';


const loadingKeyframes = radium.keyframes({
  '0%': {
    transform: 'rotate(0deg)'
  },
  '100%': {
    transform: 'rotate(360deg)'
  }
}, 'loading');


const getStyles = ({ palette }) => {
  const fadeColor = color(palette.primary).alpha(0.2).rgbString();
  return {
    root: {
      display: 'inline-block',
      boxSizing: 'border-box',
      margin: '0 auto',
      position: 'relative',
      textIndent: '-9999em',
      borderRadius: '50%',
      fontSize: '1rem',
      borderTop: `0.3em solid ${fadeColor}`,
      borderRight: `0.3em solid ${fadeColor}`,
      borderBottom: `0.3em solid ${fadeColor}`,
      borderLeft: `0.3em solid ${palette.primary}`,
      transform: 'translateZ(0)',
      animation: '1.1s infinite linear',
      animationName: loadingKeyframes,
      width: '2.5em',
      height: '2.5em'
    },
    large: {
      width: '5em',
      height: '5em'
    }
  };
};

const Loading = ({
  style,
  size,
  ...other
}, { theme }) => {
  const styles = getStyles({ ...config, ...theme });

  const sx = [styles.root];

  if (size === 'large') {
    sx.push(styles.large);
  }

  if (style) {
    sx.push(style);
  }


  return (<div {...other} style={sx}></div>);
};

Loading.propTypes = {
  size: PropTypes.oneOf(['normal', 'large']),
  style: PropTypes.object
};

Loading.contextTypes = {
  theme: PropTypes.object
};

export default radium(Loading);
