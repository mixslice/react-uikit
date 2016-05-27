import React, { PropTypes } from 'react';
import radium from 'radium';


const getStyles = (props, theme) => {
  const { palette } = theme;

  return {
    root: {
    }
  };
};

const Slider = (props, context) => {
  const theme = context.theme || themes.getTheme();
  const styles = getStyles(props, theme);
  const {
    style,
    ...other
  } = props;

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
