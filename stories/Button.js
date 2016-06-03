import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Aligner from './Aligner';
import {
  Button,
  IconButton,
  ActionGroup,
  SvgIcon,
} from '../src';
import {
  ContactIcon,
  ContentAddIcon,
  BoxIcon
} from 'utils/paths';
import { blueGrey500, blueGrey100 } from 'utils/colors';
import { Flex } from 'reflexbox';


storiesOf('Button', module)
  .addDecorator((story) => (
    <Aligner>
      {story()}
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
          baseColor={blueGrey500}
          hoverColor={blueGrey100}
        >
          Customized Color
        </Button>
        <Button
          onClick={action('button clicked')}
          icon={<SvgIcon path={ContactIcon} />}
        />
        <Button
          onClick={action('button clicked')}
          label="Person"
          icon={<SvgIcon kind="primary" path={ContactIcon} />}
        />
        <Button
          onClick={action('button clicked')}
          label="New"
          iconPosition="after"
          icon={<SvgIcon kind="secondary" path={ContentAddIcon} />}
        />
      </Flex>
    </div>
  ))
  .add('IconButton', () => (
    <div>
      <IconButton
        onClick={action('button clicked')}
        icon={<SvgIcon path={BoxIcon} />}
      />
      <IconButton
        onClick={action('button clicked')}
        kind="primary"
        icon={<SvgIcon path={BoxIcon} />}
      />
      <IconButton
        onClick={action('button clicked')}
        kind="secondary"
        icon={<SvgIcon path={BoxIcon} />}
      />
      <IconButton
        onClick={action('button clicked')}
        baseColor="#0097a7"
        hoverColor="#ffd600"
        icon={<SvgIcon path={BoxIcon} />}
      />
      <IconButton
        onClick={action('button clicked')}
        disabled
        icon={<SvgIcon path={BoxIcon} />}
      />
      <IconButton
        onClick={action('button clicked')}
        kind="secondary"
        size="large"
        icon={<SvgIcon path={BoxIcon} />}
      />
    </div>
  ))
  .add('ActionGroup', () => (
    <div>
      <ActionGroup>
        <IconButton
          kind="primary"
          onClick={action('button clicked')}
          icon={<SvgIcon path={ContactIcon} />}
        />
        <IconButton
          kind="primary"
          onClick={action('button clicked')}
          icon={<SvgIcon path={ContactIcon} />}
        />
        <IconButton
          kind="primary"
          onClick={action('button clicked')}
          icon={<SvgIcon path={ContactIcon} />}
        />
      </ActionGroup>
      <ActionGroup>
        <IconButton
          onClick={action('button clicked')}
          icon={<SvgIcon path={ContactIcon} />}
        />
        <IconButton
          onClick={action('button clicked')}
          icon={<SvgIcon path={ContactIcon} />}
        />
      </ActionGroup>
      <ActionGroup>
        <IconButton
          kind="secondary"
          onClick={action('button clicked')}
          icon={<SvgIcon path={ContactIcon} />}
        />
      </ActionGroup>
    </div>
  ));
