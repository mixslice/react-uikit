import React, { PropTypes } from 'react';
import radium from 'radium';


const Toolbar = ({
  children,
  style,
  ...other
}, { theme }) => {
  const { palette } = theme;
  const styles = {
    root: {
      display: 'flex',
      alignItems: 'center',
      height: 61,
      lineHeight: '60px',
      boxSizing: 'border-box',
      width: '100%',
      fontSize: '1rem',
      backgroundColor: palette.toolbarColor,
      borderBottom: `1px solid ${palette.borderColor}`
    }
  };

  const inlineStyle = [styles.root];

  if (style) {
    inlineStyle.push(style);
  }

  return (
    <div {...other} style={inlineStyle}>
      {children}
    </div>
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
