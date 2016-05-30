import React, { PropTypes } from 'react';
import radium from 'radium';
import { extendChildren } from '../utils/childUtils';
import merge from 'lodash.merge';


const getStyles = (props, theme) => {
  const { spacing } = theme;
  const { style } = props;

  const styles = {
    root: {
      display: 'flex',
      justifyContent: props.kind,
      padding: spacing.verticalPadding
    }
  };

  const inlineStyle = [];
  inlineStyle.push(styles.root);

  if (style) {
    inlineStyle.push(style);
  }

  return inlineStyle;
};

const getChildren = (props) => {
  let children = props.children;

  if (props.kind === 'stretch') {
    children = extendChildren(props.children, (child) => {
      const newStyle = merge(child.props.style, {
        flex: 1
      });
      return {
        style: newStyle
      };
    });
  }

  return children;
};

const ActionBar = (props, context) => {
  const { theme } = context;
  const styles = getStyles(props, theme);

  return (
    <div style={styles}>
      {getChildren(props)}
    </div>
  );
};

ActionBar.propTypes = {
  children: PropTypes.node,
  kind: PropTypes.oneOf(['stretch', 'flex-end', 'space-between']),
  style: PropTypes.object
};

ActionBar.contextTypes = {
  theme: PropTypes.object
};

export default radium(ActionBar);
