import React, { PropTypes } from 'react';
import radium from 'radium';
import { extendChildren } from './utils/childUtils';
import merge from 'lodash.merge';
import config from './styles/config';
import Base from './Base';


const getStyles = ({ palette, spacing }) => ({
  wrapper: {
    fontSize: '1rem',
    position: 'relative',
    borderWidth: 1,
    borderStyle: 'solid',
    backgroundColor: palette.background,
    borderColor: palette.border,
    ':focus': {
      boxShadow: `0 0 0 1px ${palette.primary}`,
      borderColor: palette.primary,
    },
    marginBottom: 15
  },
  root: {
    appearance: 'none',
    boxSizing: 'border-box',
    lineHeight: '1.5',
    width: '100%',
    color: palette.foreground,
    backgroundColor: 'transparent',
    outline: 'none',
    border: 'none',
    paddingTop: spacing.formPadding,
    paddingRight: spacing.formPadding,
    paddingBottom: spacing.formPadding,
    paddingLeft: spacing.formPadding
  },
  iconPosition: {
    before: {
      paddingLeft: '2.5em'
    },
    after: {
      paddingRight: '2.5em'
    }
  }
});

const getChildren = ({
  icon,
  iconPosition,
  disabled
}, theme) => {
  const { palette } = theme;

  const childrenStyles = {
    root: {
      pointerEvents: 'none',
      position: 'absolute',
      width: '1.25em',
      height: '100%',
      marginTop: 1,
      marginLeft: '0.75em',
      marginRight: '0.75em',
    },
    after: {
      right: 0
    }
  };

  let children = '';
  if (icon) {
    children = extendChildren(icon, {
      baseColor: palette.placeholder,
      disabled,
      style: iconPosition === 'after'
        ? merge({}, childrenStyles.root, childrenStyles.after)
        : childrenStyles.root
    });
  }
  return children;
};

const TextField = ({
  style,
  icon,
  iconPosition,
  disabled,
  ...props
}, { theme }) => {
  const mergedTheme = { ...config, ...theme };
  const styles = getStyles(mergedTheme);

  const sx = [styles.root];

  if (icon) {
    const position = iconPosition || 'before';
    sx.push(styles.iconPosition[position]);
  }

  return (
    <Base rounded style={[styles.wrapper, style]}>
      {getChildren({ icon, iconPosition, disabled }, mergedTheme)}
      <Base
        {...props}
        is="input"
        rounded
        style={sx}
        disabled={disabled}
        placeholder={props.placeholder}
      />
    </Base>
  );
};

TextField.propTypes = {
  placeholder: PropTypes.string,
  iconPosition: PropTypes.oneOf(['before', 'after']),
  icon: PropTypes.element,
  disabled: PropTypes.bool,
  style: PropTypes.object
};

TextField.contextTypes = {
  theme: PropTypes.object
};

export default radium(TextField);
