import React, { PropTypes } from 'react';
import { Flex } from 'reflexbox';

const styles = {
  aligner: {
    margin: '0 auto',
    minHeight: '100%',
    width: 600
  }
};

const Aligner = (props) => (
  <Flex style={styles.aligner} align="center" justify="center">
    {props.children}
  </Flex>
);

Aligner.propTypes = {
  children: PropTypes.node
};

export default Aligner;
