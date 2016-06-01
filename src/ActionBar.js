import React, { PropTypes } from 'react';
import radium from 'radium';
import { extendChildren } from './utils/childUtils';
import merge from 'lodash.merge';


const getStyles = (kind, { spacing }) => ({
  root: {
    display: 'flex',
    justifyContent: kind,
    padding: spacing.verticalPadding
  }
});

const getChildren = (children, kind) => {
  let result = children;

  if (kind === 'stretch') {
    result = extendChildren(children, (child) => {
      const newStyle = merge({}, child.props.style, {
        flex: 1
      });
      return { style: newStyle };
    });
  }

  return result;
};

const ActionBar = ({
  children,
  style,
  kind,
  ...other
}, { theme }) => {
  const styles = getStyles(kind, { ...theme });

  const inlineStyle = [];
  inlineStyle.push(styles.root);

  if (style) {
    inlineStyle.push(style);
  }

  return (
    <div {...other} style={inlineStyle}>
      {getChildren(children, kind)}
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
