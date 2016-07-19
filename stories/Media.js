import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Aligner from './Aligner';
import {
  Media
} from '../src';


storiesOf('Media', module)
  .addDecorator((story) => (
    <Aligner>
      {story()}
    </Aligner>
  ))
  .add('Media', () => (
    <div>
      <Media width={100} />
      <Media
        backgroundColor="#4aa"
        width={200}
        backgroundSize="cover"
        aspectRatio={16 / 9}
        src="http://www.material-ui.com/images/uxceo-128.jpg"
        rounded
      />
    </div>
  ));
