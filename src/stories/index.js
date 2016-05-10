import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Button from '../Button';

storiesOf('Button', module)
  .add('primary', () => (
    <Button onClick={ action('button clicked') } kind="primary">Hello</Button>
  ))
  .add('warning', () => (
    <Button kind="warning">Miaow</Button>
  ));
