import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import ThemeProvider from '../styles/ThemeProvider';
import Aligner from './Aligner';
import Avatar from '../Avatar';
// import SvgIcon from '../SvgIcon';
import SvgIcon from '../SvgIcon';
import { contactIcon, contentAddIcon } from '../SvgIcon/paths';


storiesOf('Avatar', module)
  .addDecorator((story) => (
    <Aligner>
      <ThemeProvider>
        {story()}
      </ThemeProvider>
    </Aligner>
  ))
  .add('Avatar', () => (
    <div>
      <Avatar
        src="http://www.material-ui.com/images/uxceo-128.jpg"
      />
      <Avatar
        onClick={action('avatar clicked')}
        src="http://www.material-ui.com/images/uxceo-128.jpg"
        size="large"
      />
      <Avatar label="L" />
      <Avatar
        size="normal"
        backgroundColor="#40c4ff"
        color="#dce775"
      >C</Avatar>
      <Avatar
        onClick={action('avatar clicked')}
        size="large"
        label="YP"
        backgroundColor="#aa00ff"
        color="#fff"
      />
      <Avatar
        icon={<SvgIcon path={contactIcon} />}
        backgroundColor="#40c4ff"
        baseColor="#dce775"
      />
      <Avatar
        icon={<SvgIcon path={contactIcon} />}
        size="large"
        backgroundColor="#aa00ff"
        baseColor="#fff"
      />
      <Avatar
        icon={<SvgIcon path={contentAddIcon} />}
        backgroundColor="#ec407a"
        baseColor="#fff"
      />
      <Avatar
        icon={<SvgIcon path={contentAddIcon} />}
        size="large"
        backgroundColor="#ec407a"
        baseColor="#fff"
      />
    </div>
  ));
