import React, { PropTypes } from 'react';
import radium from 'radium';


const PanelFooter = ({
  children,
  style,
  ...other
}, { theme }) => {
  const { palette } = theme;
  const styles = {
    root: {
      position: 'relative',
      textAlign: 'right',
      color: palette.textColor,
      borderTop: `1px solid ${palette.borderColor}`,
      padding: 20
    }
  };

  const inlineStyle = [];
  inlineStyle.push(styles.root);

  if (style) {
    inlineStyle.push(style);
  }

  return (
    <div {...other} style={inlineStyle}>
      {children}
    </div>
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
