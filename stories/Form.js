import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Aligner from './Aligner';
import {
  Subheader,
  Button,
  TextField,
  TextArea,
  SelectField,
  ActionBar,
  Checkbox,
  SvgIcon
} from '../src';
import { ContactIcon, LockIcon } from 'utils/paths';
import { Flex, Box } from 'reflexbox';


const styles = {
  wrapper: {
    width: 300
  }
};

storiesOf('Form', module)
  .addDecorator((story) => (
    <Aligner style={styles.wrapper}>
      {story()}
    </Aligner>
  ))
  .add('Basic', () => (
    <div>
      <Subheader>Account</Subheader>
      <TextField
        placeholder="Name"
        icon={<SvgIcon path={ContactIcon} />}
      />
      <TextField
        type="password"
        placeholder="Password"
        icon={<SvgIcon path={LockIcon} />}
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
        <Button style={{ backgroundColor: 'transparent', border: '1px solid #aaa' }}>Cancel</Button>
        <Button kind="primary">Primary</Button>
      </ActionBar>
    </div>
  ))
  .add('Checkbox and Radio', () => (
    <div>
      <Subheader>Checkbox</Subheader>
      <Flex justify="space-between">
        <Box auto>
          <Checkbox onChange={action('check1 clicked')} name="options" value="castello" label="Castello" />
        </Box>
        <Box auto>
          <Checkbox onChange={action('check2 clicked')} name="options" value="cannaregio" label="Cannaregio" checked />
        </Box>
      </Flex>
    </div>
  ));
