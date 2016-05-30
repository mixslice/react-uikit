import React, { PropTypes } from 'react';
import radium from 'radium';


const getStyles = (props, theme) => {
  const { palette, spacing } = theme;

  return {
    root: {
      appearance: 'none',
      boxSizing: 'border-box',
      width: '100%',
      color: palette.textColor,
      outline: 'none',
      borderWidth: 1,
      borderStyle: 'solid',
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

const Textarea = (props, context) => {
  const { theme } = context;
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
    <textarea {...other} style={inlineStyle} placeholder={props.placeholder} />
  );
};

Textarea.propTypes = {
  placeholder: PropTypes.string,
  style: PropTypes.object
};

Textarea.contextTypes = {
  theme: PropTypes.object
};

export default radium(Textarea);
