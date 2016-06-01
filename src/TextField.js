import React, { PropTypes } from 'react';
import radium from 'radium';
import { extendChildren } from './utils/childUtils';
import merge from 'lodash.merge';


const getStyles = ({ palette, spacing }) => ({
  wrapper: {
    fontSize: '1rem',
    position: 'relative',
    marginBottom: 15
  },
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

const getChildren = (props, theme) => {
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
  if (props.icon) {
    children = extendChildren(props.icon, {
      baseColor: palette.placeholderColor,
      disabled: props.disabled,
      style: props.iconPosition === 'after'
        ? merge({}, childrenStyles.root, childrenStyles.after)
        : childrenStyles.root
    });
  }
  return children;
};

const TextField = (props, { theme }) => {
  const styles = getStyles(theme);
  const {
    style,
    ...other
  } = props;

  const inlineStyle = [];
  inlineStyle.push(styles.root);

  if (props.icon) {
    const position = props.iconPosition || 'before';
    inlineStyle.push(styles.iconPosition[position]);
  }

  return (
    <div style={[styles.wrapper, style]}>
      {getChildren(props, theme)}
      <input {...other} style={inlineStyle} placeholder={props.placeholder} />
    </div>
  );
};

TextField.propTypes = {
  placeholder: PropTypes.string,
  iconPosition: PropTypes.oneOf(['before', 'after']),
  icon: PropTypes.element,
  style: PropTypes.object
};

TextField.contextTypes = {
  theme: PropTypes.object
};

export default radium(TextField);
