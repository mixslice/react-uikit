import React, { Component, PropTypes } from 'react';
import radium from 'radium';
import color from 'color';
// import transitions from '../styles/transitions';
import themes from '../styles/themes';
// import { extendChildren } from '../utils/childUtils';

class ImageAvatar extends Component {
  static propTypes = {
    // TODO className: React.PropTypes.string,
    /**
     * The image source url
     */
    src: PropTypes.string,
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
      greyColor: color(_p.greyColor).hexString(),
    };

    const styles = {
      avatar: {
        outline: 'none',
        boxSizing: 'border-box',
        display: 'inline-block',
        textAlign: 'center',
        borderRadius: '50%',
        lineHeight: `${_t.spacing.avatarSize}px`,
        height: _t.spacing.avatarSize,
        width: _t.spacing.avatarSize,
        margin: '0.5em',
        position: 'relative',
        backgroundColor: colors.greyColor
      },
      avatarPic: {
        backgroundImage: `url(${this.props.src})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain'
      },
      large: {
        lineHeight: `${_t.spacing.largeAvatarSize}px`,
        height: _t.spacing.largeAvatarSize,
        width: _t.spacing.largeAvatarSize
      }
    };

    const inlineStyle = [];
    inlineStyle.push(styles.avatar);

    if (this.props.src) {
      inlineStyle.push(styles.avatarPic);
    }
    if (this.props.size && this.props.size !== 'normal') {
      inlineStyle.push(styles[this.props.size]);
    }
    if (this.props.style) {
      inlineStyle.push(this.props.style);
    }

    return (
      <div
        style={inlineStyle}
        onClick={this.props.onClick}
      />
    );
  }
}

export default radium(ImageAvatar);
