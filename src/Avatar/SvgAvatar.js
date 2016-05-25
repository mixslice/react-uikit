import React, { Component, PropTypes } from 'react';
import radium from 'radium';
import color from 'color';
import themes from '../styles/themes';
import { extendChildren } from '../utils/childUtils';

class SvgAvatar extends Component {
  static propTypes = {
    /**
     * Customized backgroundColor
     */
    backgroundColor: React.PropTypes.string,
    // TODO className: React.PropTypes.string,
    /**
     * svg base color
     */
    baseColor: PropTypes.string,
    /**
     * svg icon
     */
    icon: React.PropTypes.element,
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
        fontFamily: 'system',
        boxSizing: 'border-box',
        display: 'inline-block',
        textDecoration: 'none',
        margin: '0.5em',
        padding: '0',
        lineHeight: `${size}px`,
        height: size,
        minWidth: size,
        position: 'relative',
        textAlign: 'center',
        border: 0,
        borderRadius: '50%',
        backgroundColor: this.props.backgroundColor || colors.greyColor
      }
    };
    // let svg;
    const extendProps = {
      size: this.props.size || 'normal',
      baseColor: this.props.baseColor || colors.greyColor,
      hoverColor: this.props.baseColor || colors.greyColor
    };

    const getChildren = () => {
      let children = '';
      if (this.props.icon) {
        const icon = extendChildren(this.props.icon, extendProps);
        children = icon;
      }

      return children;
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
      { getChildren() }
      </div>
    );
  }
}

export default radium(SvgAvatar);
