import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import ThemeProvider from '../styles/ThemeProvider';
import Aligner from './Aligner';
import Subheader from '../Subheader';
import { Button } from '../Button';
import {
  TextField,
  TextArea,
  SelectField,
  ActionBar,
  Checkbox
} from '../Form';
import SvgIcon from '../SvgIcon';
import { contactIcon, lockIcon } from '../SvgIcon/paths';


const styles = {
  wrapper: {
    width: 300
  }
};

storiesOf('Form', module)
  .addDecorator((story) => (
    <Aligner>
      <ThemeProvider>
        <div style={styles.wrapper}>
          {story()}
        </div>
      </ThemeProvider>
    </Aligner>
  ))
  .add('Basic', () => (
    <div>
      <Subheader>Account</Subheader>
      <TextField
        placeholder="Name"
        icon={<SvgIcon path={contactIcon} />}
      />
      <TextField
        type="password"
        placeholder="Password"
        icon={<SvgIcon path={lockIcon} />}
        iconPosition="after"
      />

      <Subheader position="right">Users</Subheader>
      <SelectField data-prefill="1">
        <option value="1">1 User</option>
        <option value="2">2 Users</option>
        <option value="3">3 Users</option>
        <option value="4">4 Users</option>
        <option value="5">5 Users</option>
      </SelectField>

      <Subheader position="center">Center</Subheader>
      <TextArea placeholder="Leave your message" />

      <ActionBar kind="stretch">
        <Button style={{ backgroundColor: 'white', border: '1px solid #ccc' }}>Cancel</Button>
        <Button kind="primary" lastChild>Primary</Button>
      </ActionBar>
    </div>
  ))
  .add('Checkbox and Radio', () => (
    <div>
      <Checkbox onChange={action('check1 clicked')} value="castello" label="Castello" />
      <Checkbox onChange={action('check2 clicked')} value="cannaregio" label="Cannaregio" checked />
    </div>
  ));
