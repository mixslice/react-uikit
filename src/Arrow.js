import React, { PropTypes } from 'react';
import radium from 'radium';
import config from './styles/config';
import Base from './Base';


const getStyles = ({ baseColor, palette }) => ({
  root: {
    borderLeft: `solid 2px ${baseColor || palette.controlBorder}`,
    borderTop: `solid 2px ${baseColor || palette.controlBorder}`,
    width: 12,
    height: 12,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  large: {
    width: 24,
    height: 24
  },
  top: {
    transform: 'rotate(45deg)'
  },
  right: {
    transform: 'rotate(135deg)'
  },
  left: {
    transform: 'rotate(-45deg)'
  },
  bottom: {
    transform: 'rotate(-135deg)'
  }
});

const Arrow = ({
  size,
  direction,
  baseColor,
  ...props
}, { theme }) => {
  const mergedTheme = { ...config, ...theme };
  const styles = getStyles({
    baseColor,
    ...mergedTheme
  });

  const sx = [styles.root];
  if (size) {
    sx.push(styles[size]);
  }
  if (direction) {
    sx.push(styles[direction]);
  } else {
    sx.push(styles.right);
  }
  return (
    <Base {...props}>
      <div style={sx} />
    </Base>
  );
};

Arrow.propTypes = {
  size: PropTypes.oneOf(['large']),
  direction: PropTypes.oneOf(['top', 'right', 'left', 'bottom']),
  baseColor: PropTypes.string,
};

Arrow.contextTypes = {
  theme: PropTypes.object
};

export default radium(Arrow);
