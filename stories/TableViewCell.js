import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Aligner from './Aligner';
import {
  TableViewCell,
  Media,
  Arrow,
  Button,
} from '../src';


storiesOf('TableViewCell', module)
  .addDecorator((story) => (
    <Aligner>
      {story()}
    </Aligner>
  ))
  .add('TableViewCell', () => (
    <div>
      <TableViewCell
        style={{ border: '1px solid #eee' }}
        p={2}
        mb={2}
        text="Hello"
        detailText="this is detail"
        accessoryView={<Button label="label" />}
      />
      <TableViewCell
        style={{ border: '1px solid #eee' }}
        p={2}
        mb={2}
        imageView={<Media
          backgroundColor="#4aa"
          width={80}
          mr={2}
        />}
        text="Hello"
        detailText="this is detail"
        accessoryView={<Arrow />}
      />
      <TableViewCell
        style={{ border: '1px solid #eee' }}
        p={2}
        mb={2}
        imageView={<Media
          backgroundColor="#4aa"
          width={80}
          mr={2}
        />}
        accessoryView={<Arrow ml={1} />}
        verticalAlign="top"
      >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </TableViewCell>
    </div>
  ));
