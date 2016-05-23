import React, { Component, PropTypes } from 'react';
import radium from 'radium';
import color from 'color';
import transitions from '../styles/transitions';
import themes from '../styles/themes';
import { extendChildren } from '../utils/childUtils';


class FloatingButton extends Component {
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
    style: PropTypes.object,
    /**
     * Depth: 1 - 6
     */
    depth: PropTypes.oneOf([0, 1, 2, 3, 4])
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

    const depth = this.props.depth || 0;

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
        fontWeight: 600,
        height: 40,
        minWidth: 40,
        position: 'relative',
        textAlign: 'center',
        border: 0,
        borderRadius: '50%',
        overflow: 'hidden',
        transition: transitions.easeOut(),
        boxShadow:
          `0 ${_p.shadows[depth][0]}px ${_p.shadows[depth][1]}px
           ${color(_p.shadowColor).alpha(_p.shadows[depth][2]).rgbString()},
           0 ${_p.shadows[depth][3]}px ${_p.shadows[depth][4]}px
           ${color(_p.shadowColor).alpha(_p.shadows[depth][5]).rgbString()}`
      },
      primary: {
        backgroundColor: colors.primaryColor,
        ':hover': {
          backgroundColor: colors.primaryColorHover
        }
      },
      secondary: {
        backgroundColor: colors.accentColor,
        ':hover': {
          backgroundColor: colors.accentColorHover
        }
      },
      disabled: {
        backgroundColor: colors.greyColor,
        ':hover': {
          backgroundColor: colors.greyColor
        },
        opacity: 0.75,
        cursor: 'default'
      },
      large: {
        height: 56,
        width: 56
      }
    };

    const getChildren = () => {
      let children = '';
      if (this.props.icon) {
        const icon = extendChildren(this.props.icon, {
          baseColor: this.props.baseColor || colors.highlightTextColor,
          hoverColor: colors.highlightTextColor
        });
        children = (<div>{icon}</div>);
      }

      return children;
    };

    const inlineStyle = [];
    inlineStyle.push(styles.button);

    if (this.props.disabled) {
      inlineStyle.push(styles.disabled);
    } else {
      inlineStyle.push(styles.secondary);
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

    if (this.props.style) {
      inlineStyle.push(this.props.style);
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

export default radium(FloatingButton);
