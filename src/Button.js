import React from 'react';
import radium from 'radium';
import color from 'color';

const styles = {
  base: {
    color: '#fff',

    // Adding interactive state couldn't be easier! Add a special key to your
    // style object (:hover, :focus, :active, or @media) with the additional rules.
    ':hover': {
      background: color('#0074d9').lighten(0.2).hexString()
    }
  },

  primary: {
    background: '#0074D9'
  },

  warning: {
    background: '#FF4136'
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
