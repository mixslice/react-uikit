import React, { PropTypes } from 'react';
import radium from 'radium';
import color from 'color';


const loadingKeyframes = radium.keyframes({
  '0%': {
    transform: 'rotate(0deg)'
  },
  '100%': {
    transform: 'rotate(360deg)'
  }
}, 'loading');


const getStyles = (props, theme) => {
  const { palette } = theme;
  const fadeColor = color(palette.primaryColor).alpha(0.2).rgbString();

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
      borderLeft: `0.3em solid ${palette.primaryColor}`,
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

const Loading = (props, context) => {
  const { theme } = context;
  const styles = getStyles(props, theme);
  const {
    style,
    size,
    ...other
  } = props;

  const inlineStyle = [];
  inlineStyle.push(styles.root);

  if (size === 'large') {
    inlineStyle.push(styles.large);
  }

  if (style) {
    inlineStyle.push(style);
  }


  return (
    <div {...other} style={inlineStyle}></div>
  );
};

Loading.propTypes = {
  size: PropTypes.oneOf(['normal', 'large']),
  style: PropTypes.object
};

Loading.contextTypes = {
  theme: PropTypes.object
};

export default radium(Loading);
