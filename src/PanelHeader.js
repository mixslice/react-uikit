import React, { PropTypes } from 'react';
import radium from 'radium';
import color from 'color';
import config from './styles/config';
import Base from './Base';


const PanelHeader = ({
  children,
  style,
  ...other
}, { theme }) => {
  const { palette } = { ...config, ...theme };
  const styles = {
    root: {
      position: 'relative',
      fontSize: `${16 / 14}rem`,
      color: color(palette.foreground).alpha(0.65).rgbString(),
      backgroundColor: palette.panelHeader,
      padding: '12px 20px',
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

PanelHeader.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object
};

PanelHeader.contextTypes = {
  theme: PropTypes.object
};

export default radium(PanelHeader);
