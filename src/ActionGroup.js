import React, { PropTypes } from 'react';
import radium from 'radium';
import merge from 'lodash.merge';
import { extendChildren } from './utils/childUtils';
import config from './styles/config';
import Base from './Base';


const getStyles = ({ spacing }) => ({
  root: {
    display: 'inline-block',
    boxSizing: 'border-box',
    overflow: 'hidden',
    marginRight: spacing.margin
  }
});

const getChildren = (props) => (
  extendChildren(props.children, (child, idx) => {
    let newStyle;
    if (!props.children.length || idx === props.children.length - 1) {
      // single button or last one
      newStyle = merge({}, child.props.style, {
        marginRight: 0,
        marginLeft: 0,
        marginTop: 0,
        marginBottom: 0,
        borderRadius: 0
      });
    } else {
      newStyle = merge({}, child.props.style, {
        marginRight: 1,
        marginLeft: 0,
        marginTop: 0,
        marginBottom: 0,
        borderRadius: 0
      });
    }
    return { style: newStyle };
  })
);

const ActionGroup = (props, { theme }) => {
  const styles = getStyles({ ...config, ...theme });
  const { style } = props;

  const sx = [styles.root];

  if (style) {
    sx.push(style);
  }

  return (
    <Base rounded style={sx}>
      {getChildren(props)}
    </Base>
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
