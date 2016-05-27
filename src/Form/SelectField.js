import React, { PropTypes } from 'react';
import radium from 'radium';
import themes from '../styles/themes';
import SvgIcon from '../SvgIcon';
import { ExpandIcon } from '../SvgIcon/paths';


const getStyles = (props, theme) => {
  const { palette, spacing } = theme;

  return {
    root: {
      '-webkit-appearance': 'none',
      boxSizing: 'border-box',
      fontSize: '1.15rem',
      width: '100%',
      color: palette.textColor,
      outline: 'none',
      backgroundColor: palette.backgroundColor,
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: palette.borderColor,
      borderRadius: spacing.borderRadius,
      padding: spacing.padding,
      marginBottom: 15,
      ':focus': {
        boxShadow: `0 0 0 1px ${palette.primaryColor}`,
        borderColor: palette.primaryColor,
      }
    },
    wrapper: {
      position: 'relative'
    },
    icon: {
      position: 'absolute',
      pointerEvents: 'none',
      top: 0,
      bottom: 1,
      marginTop: '0.9em',
      right: 0,
      width: '2.5em',
      textAlign: 'center'
    }
  };
};

const TextField = (props, context) => {
  const theme = context.theme || themes.getTheme();
  const { palette } = theme;
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
    <div style={styles.wrapper}>
      <SvgIcon
        baseColor={palette.placeholderColor}
        style={styles.icon}
        path={ExpandIcon}
      />
      <select {...other} style={inlineStyle}>
        {children}
      </select>
    </div>
  );
};

TextField.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object
};

TextField.contextTypes = {
  theme: PropTypes.object
};

export default radium(TextField);
