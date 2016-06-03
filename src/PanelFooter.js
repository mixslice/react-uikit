import React, { PropTypes } from 'react';
import radium from 'radium';
import config from './styles/config';
import Base from './Base';


const PanelFooter = ({
  children,
  style,
  ...other
}, { theme }) => {
  const { palette } = { ...config, ...theme };
  const styles = {
    root: {
      position: 'relative',
      textAlign: 'right',
      color: palette.foreground,
      borderTop: `1px solid ${palette.border}`,
      padding: 20
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

PanelFooter.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object
};

PanelFooter.contextTypes = {
  theme: PropTypes.object
};

export default radium(PanelFooter);
