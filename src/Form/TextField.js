import React, { PropTypes } from 'react';
import radium from 'radium';
import themes from '../styles/themes';


const getStyles = (props, theme) => {
  const { palette, spacing } = theme;

  return {
    textField: {
      boxSizing: 'border-box',
      fontSize: '1.15rem',
      width: '100%',
      color: palette.textColor,
      outline: 'none',
      border: `1px solid ${palette.borderColor}`,
      borderColor: palette.borderColor,
      ':focus': {
        boxShadow: `0 0 0 1px ${palette.primaryColor}`,
        borderColor: palette.primaryColor,
      },
      borderRadius: spacing.borderRadius,
      padding: spacing.padding,
      marginBottom: 15
    }
  };
};

const TextField = (props, context) => {
  const theme = context.theme || themes.getTheme();
  const styles = getStyles(props, theme);

  const inlineStyle = [];
  inlineStyle.push(styles.textField);

  if (props.style) {
    inlineStyle.push(props.style);
  }


  return (
    <input style={inlineStyle} placeholder={props.placeholder} />
  );
};

TextField.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.element,
  placeholder: PropTypes.string,
  style: PropTypes.object
};

TextField.contextTypes = {
  theme: PropTypes.object
};

export default radium(TextField);
