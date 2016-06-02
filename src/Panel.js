import React, { PropTypes } from 'react';
import radium from 'radium';
import config from './styles/config';


const Panel = ({
  children,
  style,
  ...other
}, { theme }) => {
  const { palette } = { ...config, ...theme };
  const styles = {
    root: {
      color: palette.default,
      border: `1px solid ${palette.border}`,
      backgroundColor: palette.background
    }
  };

  const sx = [styles.root];

  if (style) {
    sx.push(style);
  }

  return (
    <div {...other} style={sx}>
      {children}
    </div>
  );
};

Panel.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object
};

Panel.contextTypes = {
  theme: PropTypes.object
};

export default radium(Panel);
