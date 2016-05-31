import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import ThemeProvider from '../styles/ThemeProvider';
import Aligner from './Aligner';
import Slider from '../Slider';
import Subheader from '../Subheader';


const styles = {
  wrapper: {
    width: 300
  }
};

storiesOf('Slider', module)
  .addDecorator((story) => (
    <Aligner>
      <ThemeProvider>
        <div style={styles.wrapper}>
          {story()}
        </div>
      </ThemeProvider>
    </Aligner>
  ))
  .add('Slider', () => (
    <div>
      <Subheader>Slider</Subheader>
      <Slider name="myslider" value="50" onChange={action('Slider Change')} />
    </div>
  ));
