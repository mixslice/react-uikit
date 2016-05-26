import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import ThemeProvider from '../styles/ThemeProvider';
import {
  Button,
  IconButton
} from '../Button';
import SvgIcon from '../SvgIcon';
import { ActionAndroid, ContentAdd } from '../SvgIcon/paths';

storiesOf('Button', module)
  .add('Button', () => (
    <ThemeProvider>
      <Button onClick={action('button clicked')}>Default</Button>
      <Button onClick={action('button clicked')} kind="primary">Primary</Button>
      <Button onClick={action('button clicked')} kind="secondary">Secondary</Button>
      <Button onClick={action('button clicked')} kind="primary" disabled>Disabled</Button>
      <Button onClick={action('button clicked')} label="Label" />
      <Button onClick={action('button clicked')}
        backgroundColor="#607d8b" hoverColor="#f4f4f4"
      >Customized Color</Button>
      <Button onClick={action('button clicked')}
        icon={<SvgIcon path={ActionAndroid} />}
      />
      <Button onClick={action('button clicked')} label="Android"
        icon={<SvgIcon kind="primary" path={ActionAndroid} />}
      />
      <Button onClick={action('button clicked')} label="Android" labelPosition="after"
        icon={<SvgIcon kind="secondary" path={ContentAdd} />}
      />
    </ThemeProvider>
  ))
  .add('IconButton', () => (
    <ThemeProvider>
      <IconButton onClick={action('button clicked')}
        icon={<SvgIcon path={ActionAndroid} />}
      />
      <IconButton onClick={action('button clicked')} kind="primary"
        icon={<SvgIcon path={ActionAndroid} />}
      />
      <IconButton onClick={action('button clicked')} kind="secondary"
        icon={<SvgIcon path={ActionAndroid} />}
      />
      <IconButton onClick={action('button clicked')}
        baseColor="#00bcd4" hoverColor="#0097a7"
        icon={<SvgIcon path={ActionAndroid} />}
      />
      <IconButton onClick={action('button clicked')} disabled
        icon={<SvgIcon path={ActionAndroid} />}
      />
      <IconButton onClick={action('button clicked')} kind="secondary"
        size="large" icon={<SvgIcon path={ActionAndroid} />}
      />
    </ThemeProvider>
  ));
