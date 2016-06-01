import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Aligner from './Aligner';
import {
  ThemeProvider,
  Button,
  IconButton,
  ActionGroup,
  SvgIcon,
} from '../src';
import {
  contactIcon,
  contentAddIcon,
  boxIcon
} from 'utils/paths';
import { blueGrey500, blueGrey100 } from 'utils/colors';
import { Flex } from 'reflexbox';


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
      <Flex wrap justify="center" align="center">
        <Button onClick={action('button clicked')}>Default</Button>
        <Button onClick={action('button clicked')} kind="primary">Primary</Button>
        <Button onClick={action('button clicked')} kind="secondary">Secondary</Button>
        <Button onClick={action('button clicked')} kind="primary" disabled>Disabled</Button>
        <Button onClick={action('button clicked')} label="Label" />
      </Flex>
      <Flex wrap mt={2} justify="center" align="center">
        <Button
          size="large"
          onClick={action('button clicked')}
          backgroundColor={blueGrey500}
          hoverColor={blueGrey100}
        >
          Customized Color
        </Button>
        <Button
          onClick={action('button clicked')}
          icon={<SvgIcon path={contactIcon} />}
        />
        <Button
          onClick={action('button clicked')}
          label="Person"
          icon={<SvgIcon kind="primary" path={contactIcon} />}
        />
        <Button
          onClick={action('button clicked')}
          label="New"
          labelPosition="after"
          icon={<SvgIcon kind="secondary" path={contentAddIcon} />}
        />
      </Flex>
    </div>
  ))
  .add('IconButton', () => (
    <div>
      <IconButton onClick={action('button clicked')}
        icon={<SvgIcon path={boxIcon} />}
      />
      <IconButton onClick={action('button clicked')} kind="primary"
        icon={<SvgIcon path={boxIcon} />}
      />
      <IconButton onClick={action('button clicked')} kind="secondary"
        icon={<SvgIcon path={boxIcon} />}
      />
      <IconButton onClick={action('button clicked')}
        baseColor="#00bcd4" hoverColor="#0097a7"
        icon={<SvgIcon path={boxIcon} />}
      />
      <IconButton onClick={action('button clicked')} disabled
        icon={<SvgIcon path={boxIcon} />}
      />
      <IconButton onClick={action('button clicked')} kind="secondary"
        size="large" icon={<SvgIcon path={boxIcon} />}
      />
    </div>
  ))
  .add('ActionGroup', () => (
    <div>
      <ActionGroup>
        <IconButton
          kind="primary"
          onClick={action('button clicked')}
          icon={<SvgIcon path={contactIcon} />}
        />
        <IconButton
          kind="primary"
          onClick={action('button clicked')}
          icon={<SvgIcon path={contactIcon} />}
        />
        <IconButton
          kind="primary"
          onClick={action('button clicked')}
          icon={<SvgIcon path={contactIcon} />}
        />
      </ActionGroup>
      <ActionGroup>
        <IconButton
          onClick={action('button clicked')}
          icon={<SvgIcon path={contactIcon} />}
        />
        <IconButton
          onClick={action('button clicked')}
          icon={<SvgIcon path={contactIcon} />}
        />
      </ActionGroup>
      <ActionGroup>
        <IconButton
          kind="secondary"
          onClick={action('button clicked')}
          icon={<SvgIcon path={contactIcon} />}
        />
      </ActionGroup>
    </div>
  ));
