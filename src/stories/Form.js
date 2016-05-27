import React from 'react';
import { storiesOf } from '@kadira/storybook';
import ThemeProvider from '../styles/ThemeProvider';
import Aligner from './Aligner';
import { TextField, ActionBar } from '../Form';
import Subheader from '../Subheader';
import { Button } from '../Button';

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
      <Subheader>Header</Subheader>
      <TextField placeholder="Name" />
      <TextField type="password" placeholder="Password" />
      <Subheader position="center">Center</Subheader>
      <TextField placeholder="Say hi," />
      <ActionBar kind="stretch">
        <Button style={{ backgroundColor: 'white', border: '1px solid #ccc' }}>Cancel</Button>
        <Button kind="primary" lastChild>Primary</Button>
      </ActionBar>
    </div>
  ));
