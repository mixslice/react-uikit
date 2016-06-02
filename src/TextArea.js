import React, { PropTypes } from 'react';
import radium from 'radium';
import config from './styles/config';


const getStyles = ({ palette, spacing }) => ({
  root: {
    appearance: 'none',
    boxSizing: 'border-box',
    width: '100%',
    color: palette.foreground,
    background: palette.background,
    outline: 'none',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: palette.border,
    ':focus': {
      boxShadow: `0 0 0 1px ${palette.primary}`,
      borderColor: palette.primary,
    },
    borderRadius: spacing.borderRadius,
    padding: spacing.formPadding,
    marginBottom: 15
  }
});

const Textarea = (props, { theme }) => {
  const styles = getStyles({ ...config, ...theme });
  const {
    style,
    ...other
  } = props;

  const sx = [styles.root];

  if (style) {
    sx.push(style);
  }


  return (
    <textarea {...other} style={sx} placeholder={props.placeholder} />
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
