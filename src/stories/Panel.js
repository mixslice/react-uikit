import React from 'react';
import { storiesOf } from '@kadira/storybook';
import ThemeProvider from '../styles/ThemeProvider';
import Aligner from './Aligner';
import { Panel, PanelBody, PanelHeader, PanelFooter } from '../Panel';
import { Button } from '../Button';


const styles = {
  wrapper: {
    width: 500
  }
};

storiesOf('Panel', module)
  .addDecorator((story) => (
    <Aligner>
      <ThemeProvider>
        <div style={styles.wrapper}>
          {story()}
        </div>
      </ThemeProvider>
    </Aligner>
  ))
  .add('Panel', () => (
    <Panel>
      <PanelHeader>Panel</PanelHeader>
      <PanelBody>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </PanelBody>
      <PanelFooter>
        <Button kind="primary">Button</Button>
      </PanelFooter>
    </Panel>
  ));
