import React, { PropTypes } from 'react';
import radium, { Style } from 'radium';


const PanelBody = ({
  children,
  style,
  ...other
}, { theme }) => {
  const { palette } = theme;
  const styles = {
    root: {
      position: 'relative',
      color: palette.textColor,
      padding: 20
    },
    lastChild: {
      'p:last-child': {
        marginBottom: 0
      }
    }
  };

  const inlineStyle = [styles.root];

  if (style) {
    inlineStyle.push(style);
  }

  return (
    <div className="pbody" {...other} style={inlineStyle}>
      <Style scopeSelector=".pbody" rules={styles.lastChild} />
      {children}
    </div>
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
