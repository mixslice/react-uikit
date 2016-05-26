import React, { PropTypes } from 'react';

const styles = {
  aligner: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
};

const Aligner = (props) => (
  <div style={styles.aligner}>
    {props.children}
  </div>
);

Aligner.propTypes = {
  children: PropTypes.node
};

export default Aligner;
