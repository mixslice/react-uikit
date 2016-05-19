import React, { Component, PropTypes } from 'react';
import radium from 'radium';
import color from 'color';
import themes from '../styles/themes';


class Button extends Component {
  static propTypes = {
    backgroundColor: PropTypes.string,
    children: PropTypes.node,
    disabled: PropTypes.bool,
    design: PropTypes.oneOf(['flatButton', 'raisedButton']),
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
    kind: PropTypes.oneOf(['primary', 'secondary'])
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
      disabledColor: color(palette.disabledColor).darken(palette.disabledColorDarken).hexString()
    };

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
        color: colors.textColor
      }
    };

    const inlineStyle = [];
    inlineStyle.push(theme.button);

    if (this.props.disabled) {
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

    return (
      <button
        style={inlineStyle}
        onClick={this.props.onClick}
        disabled={this.props.disabled ? 'disabled' : ''}
      >
        {this.props.children || this.props.label }
      </button>
    );
  }
}

export default radium(Button);
