import React from 'react';
import radium from 'radium';
import color from 'color';

const styles = {
  base: {
    color: '#fff',
  },

  primary: {
    background: '#0074D9',
    ':hover': {
      background: color('#0074d9').lighten(0.2).hexString()
    }
  },

  warning: {
    background: '#FF4136',
    ':hover': {
      background: color('#FF4136').lighten(0.2).hexString()
    }
  }
};

const Button = ({ children, onClick, kind }) => (
  <button
    style={[
      styles.base,
      kind && styles[kind]
    ]}
    onClick={onClick}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func,
  kind: React.PropTypes.oneOf(['primary', 'warning'])
};

export default radium(Button);
