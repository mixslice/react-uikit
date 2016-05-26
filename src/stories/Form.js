import React from 'react';
import { storiesOf } from '@kadira/storybook';
import ThemeProvider from '../styles/ThemeProvider';
import Aligner from './Aligner';
import { TextField } from '../Form';

const styles = {
  wrapper: {
    width: 300
  }
};

storiesOf('Form', module)
  .addDecorator((story) => (
    <Aligner>
      <ThemeProvider>
        {story()}
      </ThemeProvider>
    </Aligner>
  ))
  .add('TextField', () => (
    <div style={styles.wrapper}>
      <TextField placeholder="Text" /><br />
      <TextField placeholder="Text" /><br />
      <TextField /><br />
    </div>
  ));
