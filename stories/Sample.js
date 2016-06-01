import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Aligner from './Aligner';


storiesOf('Sample', module)
  .addDecorator((story) => (
    <Aligner>
      {story()}
    </Aligner>
  ))
  .add('Custom Story', () => (
    <div>Custom Story</div>
  ));
