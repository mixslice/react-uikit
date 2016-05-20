import React, { Component, PropTypes } from 'react';
import radium from 'radium';
import color from 'color';
import themes from '../styles/themes';
import {extendChildren} from '../utils/childUtils';


class Button extends Component {
  static propTypes = {
    backgroundColor: PropTypes.string,
    children: PropTypes.node,
    disabled: PropTypes.bool,
    design: PropTypes.oneOf(['flatButton', 'raisedButton', 'iconButton', 'floatingButton']),
    hoverColor: PropTypes.string,
    // TODO href: React.PropTypes.string,
    icon: PropTypes.element,
    label: PropTypes.string,
    labelPosition: React.PropTypes.oneOf(['before', 'after']),
    // TODO labelStyle
    // TODO linkButton: React.PropTypes.bool,
    onClick: PropTypes.func,
    // TODO onKeyboardFocus, onMouseEnter, onMouseLeave, onTouchStart
    // TODO rippleColor: React.PropTypes.string,
    kind: PropTypes.oneOf(['primary', 'secondary']),
    size: PropTypes.oneOf(['normal', 'mini', 'large']),
    depth: PropTypes.number
  };

  static contextTypes = {
    theme: React.PropTypes.object
  };

  render() {
    const theme = this.context.theme || themes.getTheme();
    const palette = theme.palette;

    const colors = {
      primaryColor: color(palette.primaryColor).hexString(),
      primaryColorHover: color(palette.primaryColor).darken(palette.hoverDarken).hexString(),
      accentColor: color(palette.accentColor).hexString(),
      accentColorHover: color(palette.accentColor).darken(palette.hoverDarken).hexString(),
      greyColor: color(palette.greyColor).hexString(),
      textColor: color(palette.textColor).alpha(palette.textColorAlpha).rgbString(),
      highlightTextColor: palette.highlightTextColor,
      disabledColor: color(palette.disabledColor).darken(palette.disabledColorDarken).rgbString()
    };

    const square = this.props.design &&
                  this.props.design === 'floatingButton' ||
                  this.props.design === 'iconButton';

    const styles = {
      primary: {
        backgroundColor: colors.primaryColor,
        color: colors.highlightTextColor,
        ':hover': {
          backgroundColor: colors.primaryColorHover
        }
      },
      secondary: {
        backgroundColor: colors.accentColor,
        color: colors.highlightTextColor,
        ':hover': {
          backgroundColor: colors.accentColorHover
        }
      },
      disabled: {
        cursor: 'default',
        backgroundColor: colors.disabledColor,
        color: colors.textColor,
        ':hover': {
          backgroundColor: colors.disabledColor
        },
        boxShadow: 'none'
      },
      large: {
        height: theme.spacing.buttonHeight * 1.5,
        width: square ? theme.spacing.buttonHeight * 1.5 : theme.spacing.buttonWidth * 1.5,
        lineHeight: `${theme.spacing.buttonHeight * 1.5}px`
      },
      mini: {
        height: theme.spacing.buttonHeight / 2,
        width: square ? theme.spacing.buttonHeight / 2 : theme.spacing.buttonWidth / 2,
        minWidth: square ? theme.spacing.buttonHeight / 2 : theme.spacing.buttonWidth / 2,
        lineHeight: `${theme.spacing.buttonHeight / 2}px`
      }
    };

    const labelPosition = this.props.labelPosition || 'before';

    const labelStyle = {
      before: {
        margin: '0 1em 0 0.5em'
      },
      after: {
        margin: '0 0.5em 0 1em'
      }
    };

    const label = (
      <span style={[this.props.icon && this.props.label && labelStyle[labelPosition]]}>
        {this.props.label}
      </span>
    );

    const icon = extendChildren(this.props.icon, {
      size: this.props.size,
      disabled: this.props.disabled
    });

    const getChildren = () => {
      let children = '';
      if (this.props.icon || this.props.label) {
        if (this.props.labelPosition && this.props.labelPosition === 'after') {
          children = (<div>{label}{icon}</div>);
        } else {
          children = (<div>{icon}{label}</div>);
        }
      } else {
        children = this.props.children;
      }
      return children;
    };

    const inlineStyle = [];
    inlineStyle.push(theme.button);

    if (this.props.disabled) {
      inlineStyle.push(theme.flatButton);
      inlineStyle.push(theme[this.props.design]);
      inlineStyle.push(styles.disabled);
    } else {
      inlineStyle.push(theme.flatButton);
      inlineStyle.push(theme[this.props.design]);
      inlineStyle.push(styles[this.props.kind]);
      if (this.props.backgroundColor) {
        inlineStyle.push({
          backgroundColor: this.props.backgroundColor,
          color: colors.highlightTextColor
        });
        inlineStyle.push(this.props.hoverColor
          && { ':hover': { backgroundColor: this.props.hoverColor } });
      }
    }

    if (this.props.size && this.props.size !== 'normal') {
      inlineStyle.push(styles[this.props.size]);
    }

    return (
      <button
        style={inlineStyle}
        onClick={this.props.onClick}
        disabled={this.props.disabled ? 'disabled' : ''}
      >
      { getChildren() }
      </button>
    );
  }
}

export default radium(Button);
