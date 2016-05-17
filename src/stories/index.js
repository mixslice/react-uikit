import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Button from '../Button';

storiesOf('Button', module)
  .add('FlatButton', () => (
    <div>
    <Button onClick={ action('button clicked') }>Default</Button>
    <Button onClick={ action('button clicked') } kind="primary">Primary</Button>
    <Button onClick={ action('button clicked') } kind="secondary">Secondary</Button>
    <Button onClick={ action('button clicked') } kind="primary" disabled>Disabled</Button>
    <Button onClick={ action('button clicked') } label="Label">Default</Button>
  </div>
  ))
  .add('RasiedButton', () => (
    <div>
    <Button onClick={ action('button clicked') } design="raised">Default</Button>
    <Button onClick={ action('button clicked') }
      design="raised" kind="primary"
    >
      Primary
    </Button>
    <Button onClick={ action('button clicked') }
      design="raised" kind="secondary"
    >
      Secondary
    </Button>
    <Button onClick={ action('button clicked') }
      design="raised" kind="primary" disabled
    >
      Disabled
    </Button>
    <Button onClick={ action('button clicked') } design="raised" label="Label">Default</Button>
    </div>
  ));
