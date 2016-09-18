import React, { PropTypes } from 'react';
import radium from 'radium';
import { extendChildren } from './utils/childUtils';
import merge from 'lodash.merge';
import config from './styles/config';
import Base from './Base';


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
  const styles = getStyles(kind, { ...config, ...theme });

  const sx = [styles.root, style];

  return (
    <Base {...other} style={sx}>
      {getChildren(children, kind)}
    </Base>
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
