import React, { PropTypes } from 'react';
import radium from 'radium';


const PanelBody = ({
  children,
  style,
  ...other
}, { theme }) => {
  const { palette } = theme;
  const styles = {
    root: {
      color: palette.textColor,
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

PanelBody.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object
};

PanelBody.contextTypes = {
  theme: PropTypes.object
};

export default radium(PanelBody);
