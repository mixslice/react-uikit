import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import ThemeProvider from '../styles/ThemeProvider';
import Avatar from '../Avatar';
// import SvgIcon from '../SvgIcon';
import SvgIcon from '../SvgIcon';
import { ActionAndroid, ContentAdd } from '../SvgIcon/paths';

storiesOf('Avatar', module)
  .add('Avatar', () => (
    <ThemeProvider>
      <Avatar onClick={action('button clicked')}
        src="http://www.material-ui.com/images/uxceo-128.jpg"
      />
      <Avatar onClick={action('button clicked')}
        src="http://www.material-ui.com/images/uxceo-128.jpg"
        size="large"
      />
      <Avatar onClick={action('button clicked')} label="L" />
      <Avatar onClick={action('button clicked')}
        size="normal"
        backgroundColor="#40c4ff" color="#dce775"
      >C</Avatar>
      <Avatar onClick={action('button clicked')}
        size="large" label="YP"
        backgroundColor="#aa00ff" color="#fff"
      />
      <Avatar onClick={action('button clicked')}
        icon={<SvgIcon path={ActionAndroid} />}
        backgroundColor="#40c4ff" baseColor="#dce775"
      />
      <Avatar onClick={action('button clicked')}
        icon={<SvgIcon path={ActionAndroid} />}
        size="large"
        backgroundColor="#aa00ff" baseColor="#fff"
      />
      <Avatar onClick={action('button clicked')}
        icon={<SvgIcon path={ContentAdd} />}
        backgroundColor="#ec407a" baseColor="#fff"
      />
      <Avatar onClick={action('button clicked')}
        icon={<SvgIcon path={ContentAdd} />}
        size="large"
        backgroundColor="#ec407a" baseColor="#fff"
      />
    </ThemeProvider>
  ));
