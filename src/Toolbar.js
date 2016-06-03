import React, { PropTypes } from 'react';
import radium from 'radium';
import config from './styles/config';
import Base from './Base';


const Toolbar = ({
  children,
  style,
  ...other
}, { theme }) => {
  const { palette } = { ...config, ...theme };
  const styles = {
    root: {
      display: 'flex',
      alignItems: 'center',
      height: 61,
      lineHeight: '60px',
      boxSizing: 'border-box',
      width: '100%',
      fontSize: '1rem',
      backgroundColor: palette.toolbar,
      borderBottom: `1px solid ${palette.border}`
    }
  };

  const sx = [styles.root];

  if (style) {
    sx.push(style);
  }

  return (
    <Base {...other} style={sx}>
      {children}
    </Base>
  );
};

Toolbar.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object
};

Toolbar.contextTypes = {
  theme: PropTypes.object
};

export default radium(Toolbar);
