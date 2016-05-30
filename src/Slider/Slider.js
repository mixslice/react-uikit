import React, { PropTypes } from 'react';
import radium from 'radium';


const Slider = ({
  style,
  ...other
}, { theme }) => {
  const { palette } = theme;
  const styles = {
    color: palette.primaryColor
  };

  const inlineStyle = [];
  inlineStyle.push(styles.root);

  if (style) {
    inlineStyle.push(style);
  }


  return (
    <div {...other} style={inlineStyle}>Slider</div>
  );
};

Slider.propTypes = {
  style: PropTypes.object
};

Slider.contextTypes = {
  theme: PropTypes.object
};

export default radium(Slider);
