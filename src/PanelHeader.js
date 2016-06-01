import React, { PropTypes } from 'react';
import radium from 'radium';
import color from 'color';


const PanelHeader = ({
  children,
  style,
  ...other
}, { theme }) => {
  const { palette } = theme;
  const styles = {
    root: {
      position: 'relative',
      fontSize: `${16 / 14}rem`,
      color: color(palette.textColor).alpha(0.65).rgbString(),
      backgroundColor: palette.panelHeader,
      padding: '12px 20px',
      borderBottom: `1px solid ${palette.borderColor}`
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

PanelHeader.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object
};

PanelHeader.contextTypes = {
  theme: PropTypes.object
};

export default radium(PanelHeader);
