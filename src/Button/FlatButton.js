import React, { Component, PropTypes } from 'react';
import radium from 'radium';
import color from 'color';
import transitions from '../styles/transitions';
import themes from '../styles/themes';
import { extendChildren } from '../utils/childUtils';


class FlatButton extends Component {
  static propTypes = {
    /**
     * Background color: css color string
     */
    backgroundColor: PropTypes.string,
    /**
     * Children Node
     */
    children: PropTypes.node,
    /**
     * Disable
     */
    disabled: PropTypes.bool,
    /**
     * Hover color: css color string
     */
    hoverColor: PropTypes.string,
    // TODO href: React.PropTypes.string,
    /**
     * Icon element: only support SVG Icon
     */
    icon: PropTypes.element,
    /**
     * Label for button, especially for Icon;
     * Icon or Label replaces the children
     */
    label: PropTypes.string,
    /**
     * Label Position, 'before' or 'after' the icon
     */
    labelPosition: React.PropTypes.oneOf(['before', 'after']),
    // TODO labelStyle
    // TODO linkButton: React.PropTypes.bool,
    /**
     * Click event function
     */
    onClick: PropTypes.func,
    // TODO onKeyboardFocus, onMouseEnter, onMouseLeave, onTouchStart
    // TODO rippleColor: React.PropTypes.string,
    /**
     * Preset Kind: Primary or Secondary
     */
    kind: PropTypes.oneOf(['primary', 'secondary']),
    /**
     * Preset Size: normal, mini, large
     */
    size: PropTypes.oneOf(['normal', 'large']),
    /**
     * Customized style
     */
    style: PropTypes.object
  };

  static contextTypes = {
    theme: React.PropTypes.object
  };

  render() {
    const _t = this.context.theme || themes.getTheme();
    const _p = _t.palette;

    const colors = {
      primaryColor: color(_p.primaryColor).hexString(),
      primaryColorHover: color(_p.primaryColor).lighten(_p.hoverColorDepth).hexString(),
      accentColor: color(_p.accentColor).hexString(),
      accentColorHover: color(_p.accentColor).lighten(_p.hoverColorDepth).hexString(),
      greyColor: color(_p.greyColor).hexString(),
      textColor: color(_p.textColor).alpha(_p.textColorAlpha).rgbString(),
      highlightTextColor: _p.highlightTextColor,
      disabledColor: color(_p.disabledColor).darken(_p.disabledColorDarken).rgbString()
    };

    const styles = {
      button: {
        outline: 'none',
        boxSizing: 'border-box',
        display: 'inline-block',
        fontSize: '1rem',
        cursor: 'pointer',
        textDecoration: 'none',
        margin: '0.8em',
        padding: '0 1.75em',
        fontWeight: 600,
        lineHeight: 2.8,
        minWidth: _t.spacing.buttonWidth,
        position: 'relative',
        textAlign: 'center',
        border: 0,
        borderRadius: '0.2em',
        overflow: 'hidden',
        transition: transitions.easeOut()
      },
      flatButton: {
        color: colors.textColor,
        backgroundColor: colors.greyColor,
        ':hover': {
          color: colors.primaryColor
        }
      },
      primary: {
        backgroundColor: colors.primaryColor,
        color: colors.highlightTextColor,
        ':hover': {
          backgroundColor: colors.primaryColorHover,
          color: colors.highlightTextColor,
        }
      },
      secondary: {
        backgroundColor: colors.accentColor,
        color: colors.highlightTextColor,
        ':hover': {
          backgroundColor: colors.accentColorHover,
          color: colors.highlightTextColor,
        }
      },
      disabled: {
        cursor: 'default',
        backgroundColor: colors.disabledColor,
        color: colors.greyColor,
        ':hover': {
          backgroundColor: colors.disabledColor,
          color: colors.greyColor
        },
        boxShadow: 'none'
      },
      large: {
        fontSize: '1.5rem'
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

    const getChildren = () => {
      let children = '';
      if (this.props.icon || this.props.label) {
        const icon = extendChildren(this.props.icon, {
          size: this.props.size,
          disabled: this.props.disabled
        });

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
    inlineStyle.push(styles.button);

    if (this.props.disabled) {
      inlineStyle.push(styles.flatButton);
      inlineStyle.push(styles.disabled);
    } else {
      inlineStyle.push(styles.flatButton);
      inlineStyle.push(styles[this.props.kind]);
      if (this.props.backgroundColor) {
        inlineStyle.push({
          backgroundColor: this.props.backgroundColor,
          color: colors.highlightTextColor
        });
        inlineStyle.push(this.props.hoverColor
          && { ':hover': {
            backgroundColor: this.props.hoverColor,
            color: colors.highlightTextColor
          }
        });
      }
    }

    if (this.props.size && this.props.size !== 'normal') {
      inlineStyle.push(styles[this.props.size]);
    }

    if (this.props.style) {
      inlineStyle.push(this.props.style);
    }

    return (
      <button
        style={inlineStyle}
        onClick={this.props.onClick}
        disabled={this.props.disabled ? 'disabled' : ''}
      >
      {getChildren()}
      </button>
    );
  }
}

export default radium(FlatButton);
