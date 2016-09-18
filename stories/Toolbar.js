import React from 'react';
import { storiesOf } from '@kadira/storybook';
import {
  ThemeProvider,
  Toolbar,
  NavItem,
  SvgIcon
} from '../src';
import { ExpandIcon, BoxIcon } from 'utils/paths';
import config from 'styles/config';
// import config from './configs/dark';


storiesOf('Toolbar', module)
  .addDecorator((story) => (
    <ThemeProvider theme={config}>
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
        iconPosition="after"
      />
      <NavItem
        icon={<SvgIcon path={ExpandIcon} />}
        label="Item 2"
        iconPosition="after"
      />
      <NavItem
        lastChild
        icon={<SvgIcon path={ExpandIcon} />}
        label="Item 3"
        iconPosition="after"
      />
    </Toolbar>
  ));
