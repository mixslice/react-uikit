import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Aligner from './Aligner';
import {
  ThemeProvider,
  Loading
} from '../src';


storiesOf('Loading', module)
  .addDecorator((story) => (
    <Aligner>
      <ThemeProvider>
        {story()}
      </ThemeProvider>
    </Aligner>
  ))
  .add('Loading', () => (
    <div>
      <Loading />
      <Loading size="large" />
    </div>
  ));
