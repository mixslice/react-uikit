import React, { PropTypes } from 'react';
import radium from 'radium';
import color from 'color';
import config from './styles/config';
import Base from './Base';


const loadingKeyframes = radium.keyframes({
  '0%': {
    transform: 'rotate(0deg)'
  },
  '100%': {
    transform: 'rotate(360deg)'
  }
}, 'loading');


const getStyles = ({ baseColor, palette }) => {
  const defaultColor = baseColor || palette.primary;
  const fadeColor = color(defaultColor).alpha(0.2).rgbString();
  return {
    wrapper: {
      display: 'table',
      width: '100%',
      height: '100%'
    },
    cell: {
      boxSizing: 'border-box',
      display: 'table-cell',
      verticalAlign: 'middle'
    },
    root: {
      boxSizing: 'border-box',
      position: 'relative',
      margin: '0 auto',
      textIndent: '-9999em',
      borderRadius: '50%',
      fontSize: '1rem',
      borderTop: `0.3em solid ${fadeColor}`,
      borderRight: `0.3em solid ${fadeColor}`,
      borderBottom: `0.3em solid ${fadeColor}`,
      borderLeft: `0.3em solid ${defaultColor}`,
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
  baseColor,
  size,
  ...props
}, { theme }) => {
  const styles = getStyles({ baseColor, ...config, ...theme });

  const sx = [styles.root];

  if (size === 'large') {
    sx.push(styles.large);
  }

  return (
    <Base {...props}>
      <div style={styles.wrapper}>
        <div style={styles.cell}>
          <div style={sx} />
        </div>
      </div>
    </Base>
  );
};

Loading.propTypes = {
  baseColor: PropTypes.string,
  size: PropTypes.oneOf(['normal', 'large']),
};

Loading.contextTypes = {
  theme: PropTypes.object
};

export default radium(Loading);
