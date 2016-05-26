import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import ThemeProvider from '../styles/ThemeProvider';
import Aligner from './Aligner';
import {
  Button,
  IconButton
} from '../Button';
import SvgIcon from '../SvgIcon';
import { ActionAndroid, ContentAdd } from '../SvgIcon/paths';
import { blueGrey500, blueGrey100 } from '../styles/colors';


storiesOf('Button', module)
  .addDecorator((story) => (
    <Aligner>
      <ThemeProvider>
        {story()}
      </ThemeProvider>
    </Aligner>
  ))
  .add('Button', () => (
    <div>
      <Button onClick={action('button clicked')}>Default</Button>
      <Button onClick={action('button clicked')} kind="primary">Primary</Button>
      <Button onClick={action('button clicked')} kind="secondary">Secondary</Button>
      <Button onClick={action('button clicked')} kind="primary" disabled>Disabled</Button>
      <Button onClick={action('button clicked')} label="Label" />
      <Button
        onClick={action('button clicked')}
        backgroundColor={blueGrey500}
        hoverColor={blueGrey100}
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
    </div>
  ))
  .add('IconButton', () => (
    <div>
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
    </div>
  ));
