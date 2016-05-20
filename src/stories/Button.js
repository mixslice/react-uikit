import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import ThemeProvider from '../styles/ThemeProvider';
import themes from '../styles/themes';
import darkBaseTheme from '../styles/baseThemes/darkBaseTheme';
import Button from '../Button';
import SvgIcon from '../SvgIcon';
import { ActionAndroid } from '../SvgIcon/paths';

const darkTheme = themes.getTheme(darkBaseTheme);

storiesOf('Button', module)
  .add('FlatButton', () => (
    <div style={{ width: '100%' }}>
      <ThemeProvider>
        <div>
          <Button onClick={ action('button clicked') }>Default</Button>
          <Button onClick={ action('button clicked') } kind="primary">Primary</Button>
          <Button onClick={ action('button clicked') } kind="secondary">Secondary</Button>
          <Button onClick={ action('button clicked') } kind="primary" disabled>Disabled</Button>
          <Button onClick={ action('button clicked') } label="Label" />
          <Button onClick={ action('button clicked') }
            backgroundColor="#607d8b" hoverColor="#bcaaa4"
          >Customized Color</Button>
          <Button onClick={ action('button clicked') }
            icon={<SvgIcon>{ActionAndroid}</SvgIcon>}
          />
          <Button onClick={ action('button clicked') } label="Android"
            icon={<SvgIcon kind="primary">{ActionAndroid}</SvgIcon>}
          />
          <Button onClick={ action('button clicked') } label="Android" labelPosition="after"
            icon={<SvgIcon kind="secondary">{ActionAndroid}</SvgIcon>}
          />
        </div>
      </ThemeProvider>
      <ThemeProvider theme={darkTheme}>
        <div style={{ backgroundColor: '#263238' }}>
          <Button onClick={ action('button clicked') }>Default</Button>
          <Button onClick={ action('button clicked') } kind="primary">Primary</Button>
          <Button onClick={ action('button clicked') } kind="secondary">Secondary</Button>
          <Button onClick={ action('button clicked') } kind="primary" disabled>Disabled</Button>
          <Button onClick={ action('button clicked') } label="Label" />
          <Button onClick={ action('button clicked') }
            backgroundColor="#607d8b" hoverColor="#bcaaa4"
          >Customized Color</Button>
          <Button onClick={ action('button clicked') }
            icon={<SvgIcon>{ActionAndroid}</SvgIcon>}
          />
          <Button onClick={ action('button clicked') } label="Android"
            icon={<SvgIcon kind="primary">{ActionAndroid}</SvgIcon>}
          />
          <Button onClick={ action('button clicked') } label="Android" labelPosition="after"
            icon={<SvgIcon kind="secondary">{ActionAndroid}</SvgIcon>}
          />
        </div>
      </ThemeProvider>
    </div>
  ))
  .add('RasiedButton', () => (
    <div style={{ width: '100%' }}>
      <ThemeProvider>
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
          <Button onClick={ action('button clicked') } design="raisedButton"
            icon={<SvgIcon>{ActionAndroid}</SvgIcon>}
          />
          <Button onClick={ action('button clicked') } design="raisedButton" label="Android"
            icon={<SvgIcon kind="primary">{ActionAndroid}</SvgIcon>}
          />
          <Button onClick={ action('button clicked') } design="raisedButton"
            label="Android" labelPosition="after"
            icon={<SvgIcon kind="secondary">{ActionAndroid}</SvgIcon>}
          />
        </div>
      </ThemeProvider>
      <ThemeProvider theme={darkTheme}>
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
          <Button onClick={ action('button clicked') } design="raisedButton"
            icon={<SvgIcon>{ActionAndroid}</SvgIcon>}
          />
          <Button onClick={ action('button clicked') } design="raisedButton" label="Android"
            icon={<SvgIcon kind="primary">{ActionAndroid}</SvgIcon>}
          />
          <Button onClick={ action('button clicked') } design="raisedButton"
            label="Android" labelPosition="after"
            icon={<SvgIcon kind="secondary">{ActionAndroid}</SvgIcon>}
          />
        </div>
      </ThemeProvider>
    </div>
  ))
  .add('IconButton', () => (
    <div style={{ width: '100%' }}>
      <ThemeProvider>
        <div>
          <Button onClick={ action('button clicked') } design="iconButton"
            icon={<SvgIcon>{ActionAndroid}</SvgIcon>}
          />
          <Button onClick={ action('button clicked') } design="iconButton"
            icon={<SvgIcon kind="primary">{ActionAndroid}</SvgIcon>}
          />
          <Button onClick={ action('button clicked') } design="iconButton"
            icon={<SvgIcon kind="secondary">{ActionAndroid}</SvgIcon>}
          />
          <Button onClick={ action('button clicked') } disabled design="iconButton"
            icon={<SvgIcon>{ActionAndroid}</SvgIcon>}
          />
          <Button onClick={ action('button clicked') } design="iconButton" kind="primary"
            icon={<SvgIcon baseColor="#fff">{ActionAndroid}</SvgIcon>}
          />
          <Button onClick={ action('button clicked') } design="iconButton" kind="secondary"
            icon={<SvgIcon baseColor="#fff">{ActionAndroid}</SvgIcon>}
          />
        </div>
      </ThemeProvider>
      <ThemeProvider theme={darkTheme}>
        <div style={{ backgroundColor: '#263238' }}>
          <Button onClick={ action('button clicked') } design="iconButton"
            icon={<SvgIcon>{ActionAndroid}</SvgIcon>}
          />
          <Button onClick={ action('button clicked') } design="iconButton"
            icon={<SvgIcon kind="primary">{ActionAndroid}</SvgIcon>}
          />
          <Button onClick={ action('button clicked') } design="iconButton"
            icon={<SvgIcon kind="secondary">{ActionAndroid}</SvgIcon>}
          />
          <Button onClick={ action('button clicked') } disabled design="iconButton"
            icon={<SvgIcon>{ActionAndroid}</SvgIcon>}
          />
          <Button onClick={ action('button clicked') } design="iconButton" kind="primary"
            icon={<SvgIcon baseColor="#fff">{ActionAndroid}</SvgIcon>}
          />
          <Button onClick={ action('button clicked') } design="iconButton" kind="secondary"
            icon={<SvgIcon baseColor="#fff">{ActionAndroid}</SvgIcon>}
          />
        </div>
      </ThemeProvider>
    </div>
  ))
  .add('FloatingButton', () => (
    <div style={{ width: '100%' }}>
      <ThemeProvider>
        <div>
          <Button onClick={ action('button clicked') } design="floatingButton"
            icon={<SvgIcon>{ActionAndroid}</SvgIcon>} size="mini"
          />
          <Button onClick={ action('button clicked') } design="floatingButton"
            icon={<SvgIcon kind="primary">{ActionAndroid}</SvgIcon>}
          />
          <Button onClick={ action('button clicked') } design="floatingButton"
            icon={<SvgIcon kind="secondary">{ActionAndroid}</SvgIcon>} size="large"
          />
          <Button onClick={ action('button clicked') } design="floatingButton" kind="primary"
            icon={<SvgIcon baseColor="#fff">{ActionAndroid}</SvgIcon>} size="mini"
          />
          <Button onClick={ action('button clicked') } design="floatingButton" kind="secondary"
            icon={<SvgIcon baseColor="#fff">{ActionAndroid}</SvgIcon>}
          />
          <Button onClick={ action('button clicked') } disabled design="floatingButton"
            icon={<SvgIcon>{ActionAndroid}</SvgIcon>} size="large"
          />
        </div>
      </ThemeProvider>
      <ThemeProvider theme={darkTheme}>
        <div style={{ backgroundColor: '#263238' }}>
          <Button onClick={ action('button clicked') } design="floatingButton"
            icon={<SvgIcon>{ActionAndroid}</SvgIcon>} size="mini"
          />
          <Button onClick={ action('button clicked') } design="floatingButton"
            icon={<SvgIcon kind="primary">{ActionAndroid}</SvgIcon>}
          />
          <Button onClick={ action('button clicked') } design="floatingButton"
            icon={<SvgIcon kind="secondary">{ActionAndroid}</SvgIcon>} size="large"
          />
          <Button onClick={ action('button clicked') } design="floatingButton" kind="primary"
            icon={<SvgIcon baseColor="#fff">{ActionAndroid}</SvgIcon>} size="mini"
          />
          <Button onClick={ action('button clicked') } design="floatingButton" kind="secondary"
            icon={<SvgIcon baseColor="#fff">{ActionAndroid}</SvgIcon>}
          />
          <Button onClick={ action('button clicked') } disabled design="floatingButton"
            icon={<SvgIcon>{ActionAndroid}</SvgIcon>} size="large"
          />
        </div>
      </ThemeProvider>
    </div>
  ));
