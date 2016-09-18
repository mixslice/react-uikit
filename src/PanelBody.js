import React, { PropTypes } from 'react';
import radium, { Style } from 'radium';
import config from './styles/config';
import Base from './Base';


const PanelBody = ({
  children,
  style,
  ...other
}, { theme }) => {
  const { palette } = { ...config, ...theme };
  const styles = {
    root: {
      position: 'relative',
      color: palette.foreground,
      padding: 20
    },
    lastChild: {
      'p:last-child': {
        marginBottom: 0
      }
    }
  };

  const sx = [styles.root];

  if (style) {
    sx.push(style);
  }

  return (
    <Base className="pbody" {...other} style={sx}>
      <Style scopeSelector=".pbody" rules={styles.lastChild} />
      {children}
    </Base>
  );
};

PanelBody.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object
};

PanelBody.contextTypes = {
  theme: PropTypes.object
};

export default radium(PanelBody);
