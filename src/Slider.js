import React, { PropTypes } from 'react';
import radium, { Style } from 'radium';


const getStyles = ({ props, palette }) => {
  const max = props.max || 100;
  const min = props.min || 0;
  const percent = (props.value - min) / (max - min) * 100;

  return {
    root: {
      outline: 'none',
      boxSizing: 'border-box',
      display: 'block',
      width: '100%',
      margin: '10px 0',
      cursor: 'pointer',
      color: 'inherit',
      backgroundColor: palette.borderColor,
      backgroundClip: 'content-box',
      backgroundImage: `linear-gradient(90deg, ${palette.primaryColor}, ${palette.primaryColor} ${percent}%, transparent ${percent}%)`,
      height: 3,
      WebkitAppearance: 'none',
      appearance: 'none'
    },
    thumb: {
      width: 24,
      height: 24,
      backgroundColor: palette.backgroundColor,
      border: `1px solid ${palette.placeholderColor}`,
      borderRadius: '50%',
      appearance: 'none',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }
  };
};

const Slider = ({
  style,
  name,
  ...props
}, { theme }) => {
  const styles = getStyles({ props, ...theme });

  const inlineStyle = [];
  inlineStyle.push(styles.root);

  if (style) {
    inlineStyle.push(style);
  }

  return (
    <div>
      <input className="slider" {...props} name={name} type="range" style={inlineStyle} />
      <Style scopeSelector=".slider::-webkit-slider-thumb" rules={styles.thumb} />
    </div>
  );
};

Slider.propTypes = {
  style: PropTypes.object,
  name: PropTypes.string.isRequired
};

Slider.contextTypes = {
  theme: PropTypes.object
};

export default radium(Slider);
