import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import ThemeProvider from '../styles/ThemeProvider';
import {
  ImageAvatar, LetterAvatar, SvgAvatar
} from '../Avatar';
// import SvgIcon from '../SvgIcon';
import SvgIcon from '../SvgIcon';
import { ActionAndroid, ContentAdd } from '../SvgIcon/paths';

storiesOf('Avatar', module)
  .add('ImageAvatar', () => (
    <ThemeProvider>
      <ImageAvatar onClick={ action('button clicked') }
        src="http://www.material-ui.com/images/uxceo-128.jpg"
      />
      <ImageAvatar onClick={ action('button clicked') }
        src="http://www.material-ui.com/images/uxceo-128.jpg"
        size="large"
      />
    </ThemeProvider>
  ))
  .add('LetterAvatar', () => (
    <ThemeProvider>
      <LetterAvatar onClick={ action('button clicked') } label="L" />
      <LetterAvatar onClick={ action('button clicked') }
        size="normal"
        backgroundColor="#40c4ff" color="#dce775"
      >C</LetterAvatar>
      <LetterAvatar onClick={ action('button clicked') }
        size="large" label="YP"
        backgroundColor="#aa00ff" color="#fff"
      />
    </ThemeProvider>
  ))
  .add('SvgAvatar', () => (
    <ThemeProvider>
      <SvgAvatar onClick={ action('button clicked') }
        icon={<SvgIcon path={ActionAndroid} />}
        backgroundColor="#40c4ff" baseColor="#dce775"
      />
      <SvgAvatar onClick={ action('button clicked') }
        icon={<SvgIcon path={ActionAndroid} />}
        size="large"
        backgroundColor="#aa00ff" baseColor="#fff"
      />
      <SvgAvatar onClick={ action('button clicked') }
        icon={<SvgIcon path={ContentAdd} />}
        backgroundColor="#ec407a" baseColor="#fff"
      />
      <SvgAvatar onClick={ action('button clicked') }
        icon={<SvgIcon path={ContentAdd} />}
        size="large"
        backgroundColor="#ec407a" baseColor="#fff"
      />
    </ThemeProvider>
  ));
