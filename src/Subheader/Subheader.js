import React, { PropTypes } from 'react';
import radium from 'radium';
import themes from '../styles/themes';


const getStyles = (props, theme) => {
  const { palette, spacing } = theme;

  return {
    root: {
      boxSizing: 'border-box',
      width: '100%',
      fontSize: '1rem',
      color: palette.textColor,
      textAlign: props.position,
      fontWeight: 600,
      padding: spacing.verticalPadding
    }
  };
};

const Subheader = (props, context) => {
  const theme = context.theme || themes.getTheme();
  const styles = getStyles(props, theme);
  const {
    children,
    style,
    ...other
  } = props;

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

Subheader.propTypes = {
  children: PropTypes.node,
  position: PropTypes.oneOf(['left', 'center', 'right']),
  style: PropTypes.object
};

Subheader.contextTypes = {
  theme: PropTypes.object
};

export default radium(Subheader);
