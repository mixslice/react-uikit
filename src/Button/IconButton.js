import React, { Component, PropTypes } from 'react';
import merge from 'lodash.merge';
import radium from 'radium';
import color from 'color';
import transitions from '../styles/transitions';
import themes from '../styles/themes';
import { extendChildren } from '../utils/childUtils';


class IconButton extends Component {
  static propTypes = {
    /**
     * Background color: css color string
     */
    backgroundColor: PropTypes.string,
    /**
     * Disable
     */
    disabled: PropTypes.bool,
    /**
     * Base color: css color string
     */
    baseColor: PropTypes.string,
    /**
     * Hover color: css color string
     */
    hoverColor: PropTypes.string,
    // TODO href: React.PropTypes.string,
    /**
     * Icon element: only support SVG Icon
     */
    icon: PropTypes.element,
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
        padding: '0px',
        lineHeight: 2.5,
        fontWeight: 600,
        minWidth: '2.5em',
        position: 'relative',
        textAlign: 'center',
        border: 0,
        borderRadius: '0.2em',
        overflow: 'hidden',
        transition: transitions.easeOut(),
        backgroundColor: 'transparent'
      },
      disabled: {
        cursor: 'default',
        boxShadow: 'none'
      },
      large: {
        fontSize: '1.5rem'
      }
    };

    const extendProps = {
      default: {
        size: this.props.size,
        baseColor: this.props.baseColor || colors.textColor,
        hoverColor: this.props.hoverColor || colors.primaryColor
      },
      primary: {
        baseColor: colors.primaryColor,
        hoverColor: colors.primaryColorHover
      },
      secondary: {
        baseColor: colors.accentColor,
        hoverColor: colors.accentColorHover
      }
    };

    let childProps = this.props.disabled ? { disabled: this.props.disabled } : extendProps.default;

    if (this.props.kind) {
      childProps = merge({}, childProps, extendProps[this.props.kind]);
    }


    const getChildren = () => {
      let children = '';
      if (this.props.icon) {
        const icon = extendChildren(this.props.icon, childProps);
        children = (<div>{icon}</div>);
      }

      return children;
    };

    const inlineStyle = [];
    inlineStyle.push(styles.button);

    if (this.props.disabled) {
      inlineStyle.push(styles.disabled);
    } else {
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

export default radium(IconButton);
