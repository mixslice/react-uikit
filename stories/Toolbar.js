import React from 'react';
import { storiesOf } from '@kadira/storybook';
import {
  ThemeProvider,
  Toolbar,
  NavItem,
  SvgIcon
} from '../src';
import { ExpandIcon, BoxIcon } from 'utils/paths';


storiesOf('Toolbar', module)
  .addDecorator((story) => (
    <ThemeProvider>
      {story()}
    </ThemeProvider>
  ))
  .add('Toolbar', () => (
    <Toolbar>
      <NavItem
        kind="primary"
        icon={<SvgIcon path={BoxIcon} size="large" />}
        border={false}
      />
      <NavItem
        pullRight
        borderLeft
        icon={<SvgIcon path={ExpandIcon} />}
        label="Item 1"
        labelPosition="after"
      />
      <NavItem
        icon={<SvgIcon path={ExpandIcon} />}
        label="Item 2"
        labelPosition="after"
      />
      <NavItem
        lastChild
        icon={<SvgIcon path={ExpandIcon} />}
        label="Item 3"
        labelPosition="after"
      />
    </Toolbar>
  ));
