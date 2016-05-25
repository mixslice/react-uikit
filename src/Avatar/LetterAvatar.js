import React, { Component, PropTypes } from 'react';
import radium from 'radium';
import color from 'color';
// import transitions from '../styles/transitions';
import themes from '../styles/themes';
// import { extendChildren } from '../utils/childUtils';

class LetterAvatar extends Component {
  static propTypes = {
    /**
     * Customized background color
     */
    backgroundColor: PropTypes.string,
    /**
     * Children node
     */
    children: PropTypes.node,
    // TODO className: React.PropTypes.string,
    /**
     * Letter color
     */
    color: PropTypes.string,
    /**
     * Letter label
     */
    label: PropTypes.string,
    /**
     * onClick event function
     */
    onClick: PropTypes.func,
    /**
     * Preset size: normal, large
     */
    size: PropTypes.oneOf(['normal', 'large']),
    /**
     * Customized style
     */
    style: React.PropTypes.object
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

    const size = this.props.size === 'large' ? _t.spacing.largeAvatarSize : _t.spacing.avatarSize;

    const styles = {
      avatar: {
        outline: 'none',
        boxSizing: 'border-box',
        display: 'inline-block',
        textAlign: 'center',
        lineHeight: `${size}px`,
        borderRadius: '50%',
        height: size,
        width: size,
        margin: '0.5em',
        position: 'relative',
        border: 0,
        backgroundColor: this.props.backgroundColor || colors.greyColor,
        color: this.props.color || colors.textColor,
        fontSize: `${size / _t.spacing.avatarSize}em`
      }
    };

    const inlineStyle = [];
    inlineStyle.push(styles.avatar);

    if (this.props.style) {
      inlineStyle.push(this.props.style);
    }

    return (
      <div
        style={inlineStyle}
        onClick={this.props.onClick}
      >
        <div>{this.props.label || this.props.children}</div>
      </div>
    );
  }
}

export default radium(LetterAvatar);
