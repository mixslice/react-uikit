import React from 'react';
import { storiesOf } from '@kadira/storybook';
import ThemeProvider from '../styles/ThemeProvider';
import { Toolbar, NavItem } from '../Toolbar';
import SvgIcon from '../SvgIcon';
import { contactIcon, boxIcon } from '../SvgIcon/paths';


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
        icon={<SvgIcon path={contactIcon} size="large" />}
        border={false}
      />
      <NavItem
        pullRight
        borderLeft
        icon={<SvgIcon path={boxIcon} />}
        label="Item 2"
        labelPosition="after"
      />
      <NavItem
        icon={<SvgIcon path={boxIcon} />}
        label="Item 3"
        labelPosition="after"
      />
      <NavItem
        lastChild
        icon={<SvgIcon path={boxIcon} />}
        label="Item 4"
        labelPosition="after"
      />
    </Toolbar>
  ));
