import React, { PropTypes } from 'react';
import radium from 'radium';
import merge from 'lodash.merge';
import { extendChildren } from '../utils/childUtils';


const getStyles = (props, theme) => {
  const { spacing } = theme;

  return {
    root: {
      display: 'inline-block',
      boxSizing: 'border-box',
      borderRadius: spacing.borderRadius,
      overflow: 'hidden',
      marginRight: spacing.margin
    }
  };
};

const getChildren = (props) => (
  extendChildren(props.children, (child, idx) => {
    let newStyle;
    if (!props.children.length || idx === props.children.length - 1) {
      // single button or last one
      newStyle = merge(child.props.style, {
        marginRight: 0,
        marginBottom: 0,
        borderRadius: 0
      });
    } else {
      newStyle = merge(child.props.style, {
        marginRight: 1,
        marginBottom: 0,
        borderRadius: 0
      });
    }
    return { style: newStyle };
  })
);

const ActionGroup = (props, context) => {
  const { theme } = context;
  const styles = getStyles(props, theme);
  const { style } = props;

  const inlineStyle = [];
  inlineStyle.push(styles.root);

  if (style) {
    inlineStyle.push(style);
  }

  return (
    <div style={inlineStyle}>
      {getChildren(props)}
    </div>
  );
};

ActionGroup.propTypes = {
  children: PropTypes.node,
  position: PropTypes.oneOf(['left', 'center', 'right']),
  style: PropTypes.object
};

ActionGroup.contextTypes = {
  theme: PropTypes.object
};

export default radium(ActionGroup);
