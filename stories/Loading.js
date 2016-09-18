import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Aligner from './Aligner';
import {
  Loading
} from '../src';


storiesOf('Loading', module)
  .addDecorator((story) => (
    <Aligner>
      {story()}
    </Aligner>
  ))
  .add('Loading', () => (
    <div>
      <Loading />
      <Loading size="large" baseColor="#4aa" />
    </div>
  ));
