import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import ThemeProvider from '../styles/ThemeProvider';
import {
  FlatButton, RaisedButton,
  IconButton, FloatingButton
} from '../Button';
import SvgIcon from '../SvgIcon';
import { ActionAndroid, ContentAdd } from '../SvgIcon/paths';

storiesOf('Button', module)
  .add('FlatButton', () => (
    <ThemeProvider>
      <FlatButton onClick={ action('button clicked') }>Default</FlatButton>
      <FlatButton onClick={ action('button clicked') } kind="primary">Primary</FlatButton>
      <FlatButton onClick={ action('button clicked') } kind="secondary">Secondary</FlatButton>
      <FlatButton onClick={ action('button clicked') } kind="primary" disabled>Disabled</FlatButton>
      <FlatButton onClick={ action('button clicked') } label="Label" />
      <FlatButton onClick={ action('button clicked') }
        backgroundColor="#607d8b" hoverColor="#bcaaa4"
      >Customized Color</FlatButton>
      <FlatButton onClick={ action('button clicked') }
        icon={<SvgIcon path={ActionAndroid} />}
      />
      <FlatButton onClick={ action('button clicked') } label="Android"
        icon={<SvgIcon kind="primary" path={ActionAndroid} />}
      />
      <FlatButton onClick={ action('button clicked') } label="Android" labelPosition="after"
        icon={<SvgIcon kind="secondary" path={ActionAndroid} />}
      />
    </ThemeProvider>
  ))
  .add('RaisedButton', () => (
    <ThemeProvider>
      <RaisedButton onClick={ action('button clicked') }>Default</RaisedButton>
      <RaisedButton onClick={ action('button clicked') } kind="primary">Primary</RaisedButton>
      <RaisedButton onClick={ action('button clicked') } kind="secondary">Secondary</RaisedButton>
      <RaisedButton onClick={ action('button clicked') } kind="primary" disabled>Disabled</RaisedButton>
      <RaisedButton onClick={ action('button clicked') } label="Label" />
      <RaisedButton onClick={ action('button clicked') }
        backgroundColor="#607d8b" hoverColor="#bcaaa4"
      >Customized Color</RaisedButton>
      <RaisedButton onClick={ action('button clicked') }
        icon={<SvgIcon path={ActionAndroid} />}
      />
      <RaisedButton onClick={ action('button clicked') } label="Android"
        icon={<SvgIcon kind="primary" path={ActionAndroid} />}
      />
      <RaisedButton onClick={ action('button clicked') } label="Android" labelPosition="after"
        icon={<SvgIcon kind="secondary" path={ActionAndroid} />}
      />
    </ThemeProvider>
  ))
  .add('IconButton', () => (
    <ThemeProvider>
      <IconButton onClick={ action('button clicked') }
        icon={<SvgIcon path={ActionAndroid} />}
      />
      <IconButton onClick={ action('button clicked') } kind="primary"
        icon={<SvgIcon path={ActionAndroid} />}
      />
      <IconButton onClick={ action('button clicked') } kind="secondary"
        icon={<SvgIcon path={ActionAndroid} />}
      />
      <IconButton onClick={ action('button clicked') }
        baseColor="#00bcd4" hoverColor="#0097a7"
        icon={<SvgIcon path={ActionAndroid} />}
      />
      <IconButton onClick={ action('button clicked') } disabled
        icon={<SvgIcon path={ActionAndroid} />}
      />
      <IconButton onClick={ action('button clicked') } kind="secondary"
        size="large" icon={<SvgIcon path={ActionAndroid} />}
      />
    </ThemeProvider>
  ))
  .add('FloatingButton', () => (
    <ThemeProvider>
      <FloatingButton onClick={ action('button clicked') }
        icon={<SvgIcon path={ContentAdd} />}
      />
      <FloatingButton onClick={ action('button clicked') } kind="primary"
        icon={<SvgIcon path={ContentAdd} />}
      />
      <FloatingButton onClick={ action('button clicked') } kind="secondary"
        icon={<SvgIcon path={ContentAdd} />}
      />
      <FloatingButton onClick={ action('button clicked') }
        backgroundColor="#00bcd4" hoverColor="#4dd0e1"
        icon={<SvgIcon path={ContentAdd} />}
      />
      <FloatingButton onClick={ action('button clicked') } disabled
        icon={<SvgIcon path={ContentAdd} />}
      />
      <FloatingButton onClick={ action('button clicked') } kind="secondary"
        size="large" icon={<SvgIcon path={ContentAdd} />}
      />
      <FloatingButton onClick={ action('button clicked') } kind="secondary"
        size="large" depth={1} icon={<SvgIcon path={ContentAdd} />}
      />
      <FloatingButton onClick={ action('button clicked') } kind="secondary"
        size="large" depth={2} icon={<SvgIcon path={ContentAdd} />}
      />
    </ThemeProvider>
  ));
