import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { ThemeProvider } from '../src';
import Aligner from './Aligner';


storiesOf('Sample', module)
  .addDecorator((story) => (
    <Aligner>
      <ThemeProvider>
        {story()}
      </ThemeProvider>
    </Aligner>
  ))
  .add('Custom Story', () => (
    <div>Custom Story</div>
  ));
