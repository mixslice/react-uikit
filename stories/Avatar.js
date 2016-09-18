import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Aligner from './Aligner';
import {
  Avatar,
  SvgIcon,
} from '../src';
import { ContactIcon, ContentAddIcon } from 'utils/paths';


storiesOf('Avatar', module)
  .addDecorator((story) => (
    <Aligner>
      {story()}
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
        baseColor="#dce775"
      >C</Avatar>
      <Avatar
        onClick={action('avatar clicked')}
        size="large"
        label="YP"
        backgroundColor="#aa00ff"
        baseColor="#fff"
      />
      <Avatar
        icon={<SvgIcon path={ContactIcon} />}
        backgroundColor="#40c4ff"
        baseColor="#dce775"
      />
      <Avatar
        icon={<SvgIcon path={ContactIcon} />}
        size="large"
        backgroundColor="#aa00ff"
        baseColor="#fff"
      />
      <Avatar
        icon={<SvgIcon path={ContentAddIcon} />}
        backgroundColor="#ec407a"
        baseColor="#fff"
      />
      <Avatar
        icon={<SvgIcon path={ContentAddIcon} />}
        size="large"
        backgroundColor="#ec407a"
        baseColor="#fff"
      />
    </div>
  ));
