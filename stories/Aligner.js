import React, { PropTypes } from 'react';
import { Flex } from 'reflexbox';
import { ThemeProvider } from '../src';
import config from 'styles/config';
// import config from './configs/dark';

const styles = {
  root: {
    margin: '0 auto',
    minHeight: '100%',
    width: 600
  }
};

const Aligner = (props) => (
  <Flex style={styles.root} align="center" justify="center">
    <ThemeProvider theme={config}>
      <div style={props.style}>
        {props.children}
      </div>
    </ThemeProvider>
  </Flex>
);

Aligner.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object
};

export default Aligner;
