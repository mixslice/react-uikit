import React, { PropTypes } from 'react';
import radium from 'radium';
import SvgIcon from './SvgIcon';
import { expandIcon } from './utils/paths';


const getStyles = ({ palette, spacing }) => ({
  root: {
    appearance: 'none',
    boxSizing: 'border-box',
    width: '100%',
    color: palette.default,
    outline: 'none',
    backgroundColor: palette.background,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: palette.border,
    borderRadius: spacing.borderRadius,
    padding: spacing.formPadding,
    marginBottom: 15,
    ':focus': {
      boxShadow: `0 0 0 1px ${palette.primary}`,
      borderColor: palette.primary,
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
});

const TextField = ({
  children,
  style,
  ...other
}, { theme }) => {
  const styles = getStyles(theme);
  const { palette } = theme;

  const sx = [styles.root];

  if (style) {
    sx.push(style);
  }


  return (
    <div style={styles.wrapper}>
      <SvgIcon
        baseColor={palette.placeholder}
        style={styles.icon}
        path={expandIcon}
      />
      <select {...other} style={sx}>
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
