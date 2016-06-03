import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Aligner from './Aligner';
import {
  Slider,
  Subheader
} from '../src';


const styles = {
  wrapper: {
    width: 300
  }
};

storiesOf('Slider', module)
  .addDecorator((story) => (
    <Aligner style={styles.wrapper}>
      {story()}
    </Aligner>
  ))
  .add('Slider', () => (
    <div>
      <Subheader>Slider</Subheader>
      <Slider name="myslider" value="50" onChange={action('Slider Change')} />
    </div>
  ));
