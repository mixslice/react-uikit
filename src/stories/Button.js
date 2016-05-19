import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import ThemeProvider from '../styles/ThemeProvider';
import themes from '../styles/themes';
import darkBaseTheme from '../styles/baseThemes/darkBaseTheme';
import Button from '../Button/Button';

const theme = themes.getTheme(darkBaseTheme);

storiesOf('Button', module)
  .add('FlatButton', () => (
    <div style={{ width: '100%' }}>
      <div>
        <Button onClick={ action('button clicked') }>Default</Button>
        <Button onClick={ action('button clicked') } kind="primary">Primary</Button>
        <Button onClick={ action('button clicked') } kind="secondary">Secondary</Button>
        <Button onClick={ action('button clicked') } kind="primary" disabled>Disabled</Button>
        <Button onClick={ action('button clicked') } label="Label" />
        <Button onClick={ action('button clicked') }
          backgroundColor="#607d8b" hoverColor="#bcaaa4"
        >Customized Color</Button>
      </div>
      <ThemeProvider theme={theme}>
        <div style={{ backgroundColor: '#263238' }}>
          <Button onClick={ action('button clicked') }>Default</Button>
          <Button onClick={ action('button clicked') } kind="primary">Primary</Button>
          <Button onClick={ action('button clicked') } kind="secondary">Secondary</Button>
          <Button onClick={ action('button clicked') } kind="primary" disabled>Disabled</Button>
          <Button onClick={ action('button clicked') } label="Label" />
          <Button onClick={ action('button clicked') }
            backgroundColor="#607d8b" hoverColor="#bcaaa4"
          >Customized Color</Button>
        </div>
      </ThemeProvider>
    </div>
  ))
  .add('RasiedButton', () => (
    <div style={{ width: '100%' }}>
      <div>
        <Button onClick={ action('button clicked') } design="raisedButton">Default</Button>
        <Button onClick={ action('button clicked') }
          design="raisedButton" kind="primary"
        >Primary</Button>
        <Button onClick={ action('button clicked') }
          design="raisedButton" kind="secondary"
        >Secondary</Button>
        <Button onClick={ action('button clicked') }
          design="raisedButton" kind="primary" disabled
        >Disabled</Button>
        <Button onClick={ action('button clicked') } design="raisedButton" label="Label" />
        <Button onClick={ action('button clicked') }
          design="raisedButton" backgroundColor="#607d8b" hoverColor="#bcaaa4"
        >Customized Color</Button>
      </div>
      <ThemeProvider theme={theme}>
        <div style={{ backgroundColor: '#263238' }}>
          <Button onClick={ action('button clicked') } design="raisedButton">Default</Button>
          <Button onClick={ action('button clicked') }
            design="raisedButton" kind="primary"
          >Primary</Button>
          <Button onClick={ action('button clicked') }
            design="raisedButton" kind="secondary"
          >Secondary</Button>
          <Button onClick={ action('button clicked') }
            design="raisedButton" kind="primary" disabled
          >Disabled</Button>
          <Button onClick={ action('button clicked') } design="raisedButton" label="Label" />
          <Button onClick={ action('button clicked') }
            design="raisedButton" backgroundColor="#607d8b" hoverColor="#bcaaa4"
          >Customized Color</Button>
        </div>
      </ThemeProvider>
    </div>
  ));
