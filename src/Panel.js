import React, { PropTypes } from 'react';
import radium from 'radium';
import config from './styles/config';
import Base from './Base';


const Panel = ({
  children,
  style,
  ...other
}, { theme }) => {
  const { palette } = { ...config, ...theme };
  const styles = {
    root: {
      color: palette.foreground,
      border: `1px solid ${palette.border}`,
      backgroundColor: palette.background
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

Panel.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object
};

Panel.contextTypes = {
  theme: PropTypes.object
};

export default radium(Panel);
