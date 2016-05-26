import React from 'react';
import { storiesOf } from '@kadira/storybook';
import ThemeProvider from '../styles/ThemeProvider';
import Aligner from './Aligner';
import Avatar from '../Avatar';
// import SvgIcon from '../SvgIcon';
import SvgIcon from '../SvgIcon';
import { ActionAndroid, ContentAdd } from '../SvgIcon/paths';

const styles = {
  wrapper: {
    display: 'flex',
    alignItems: 'center'
  }
};

storiesOf('Avatar', module)
  .addDecorator((story) => (
    <Aligner>
      <ThemeProvider>
        {story()}
      </ThemeProvider>
    </Aligner>
  ))
  .add('Avatar', () => (
    <div style={styles.wrapper}>
      <Avatar
        src="http://www.material-ui.com/images/uxceo-128.jpg"
      />
      <Avatar
        src="http://www.material-ui.com/images/uxceo-128.jpg"
        size="large"
      />
      <Avatar label="L" />
      <Avatar
        size="normal"
        backgroundColor="#40c4ff" color="#dce775"
      >C</Avatar>
      <Avatar
        size="large" label="YP"
        backgroundColor="#aa00ff" color="#fff"
      />
      <Avatar
        icon={<SvgIcon path={ActionAndroid} />}
        backgroundColor="#40c4ff" baseColor="#dce775"
      />
      <Avatar
        icon={<SvgIcon path={ActionAndroid} />}
        size="large"
        backgroundColor="#aa00ff" baseColor="#fff"
      />
      <Avatar
        icon={<SvgIcon path={ContentAdd} />}
        backgroundColor="#ec407a" baseColor="#fff"
      />
      <Avatar
        icon={<SvgIcon path={ContentAdd} />}
        size="large"
        backgroundColor="#ec407a" baseColor="#fff"
      />
    </div>
  ));
