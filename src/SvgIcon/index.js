import React, { Component, PropTypes } from 'react';
import radium from 'radium';
import color from 'color';
import themes from '../styles/themes';

class SvgIcon extends Component {
  static muiName = 'SvgIcon';

  static propTypes = {
    disabled: PropTypes.bool,
    /**
     * Elements passed into the SVG Icon.
     */
    path: PropTypes.node,
    /**
     * This is the fill color of the svg icon.
     * If not specified, this component will default
     * to muiTheme.palette.textColor.
     */
    baseColor: PropTypes.string,
    /**
     * This is the icon color when the mouse hovers over the icon.
     */
    hoverColor: PropTypes.string,
    /**
     * Function called when mouse enters this element.
     */
    onMouseEnter: PropTypes.func,
    /**
     * Function called when mouse leaves this element.
     */
    onMouseLeave: PropTypes.func,
    /**
     * Override the inline-styles of the root element.
     */
    style: PropTypes.object,
    /**
     * Allows you to redifine what the coordinates
     * without units mean inside an svg element. For example,
     * if the SVG element is 500 (width) by 200 (height), and you
     * pass viewBox="0 0 50 20", this means that the coordinates inside
     * the svg will go from the top left corner (0,0) to bottom right (50,20)
     * and each unit will be worth 10px.
     */
    viewBox: PropTypes.string,
    size: PropTypes.oneOf(['normal', 'large']),
    kind: PropTypes.oneOf(['primary', 'secondary'])
  };

  static defaultProps = {
    onMouseEnter: () => {},
    onMouseLeave: () => {},
    viewBox: '0 0 24 24',
  };

  static contextTypes = {
    theme: PropTypes.object,
  };

  handleMouseLeave = (event) => {
    this.props.onMouseLeave(event);
  };

  handleMouseEnter = (event) => {
    this.props.onMouseEnter(event);
  };

  render() {
    const {
      path,
      baseColor,
      hoverColor,
      onMouseEnter, // eslint-disable-line no-unused-vars
      onMouseLeave, // eslint-disable-line no-unused-vars
      style,
      viewBox,
      disabled,
      kind,
      ...other,
    } = this.props;

    const _t = this.context.theme || themes.getTheme();
    const _p = _t.palette;

    const colors = {
      primaryColor: color(_p.primaryColor).hexString(),
      primaryColorHover: color(_p.primaryColor).darken(_p.hoverColorDepth).hexString(),
      accentColor: color(_p.accentColor).hexString(),
      accentColorHover: color(_p.accentColor).darken(_p.hoverColorDepth).hexString(),
      greyColor: color(_p.greyColor).hexString(),
      textColor: _p.textColor,
      highlightTextColor: _p.highlightTextColor,
      disabledColor: color(_p.disabledColor).darken(_p.hoverColorDepth).hexString()
    };

    const styles = {
      default: {
        display: 'inline-block',
        height: _t.spacing.iconSize,
        width: _t.spacing.iconSize,
        userSelect: 'none',
        verticalAlign: 'middle',
        fill: colors.textColor,
        ':hover': {
          fill: colors.primaryColor
        }
      },
      primary: {
        fill: colors.primaryColor,
        ':hover': {
          fill: colors.primaryColorHover
        }
      },
      secondary: {
        fill: colors.accentColor,
        ':hover': {
          fill: colors.accentColorHover
        }
      },
      disabled: {
        fill: colors.disabledColor,
        ':hover': {
          fill: colors.disabledColor
        }
      },
      large: {
        height: _t.spacing.iconSize * 1.5,
        width: _t.spacing.iconSize * 1.5
      }
    };

    const inlineStyle = [];
    inlineStyle.push(styles.default);
    if (disabled) {
      inlineStyle.push(styles.disabled);
    } else {
      inlineStyle.push(styles[kind]);
      if (style) {
        inlineStyle.push(style);
      }
      if (baseColor) {
        inlineStyle.push({ fill: baseColor });
      }
      if (hoverColor) {
        inlineStyle.push({
          ':hover': { fill: hoverColor }
        });
      }
    }

    if (this.props.size && this.props.size !== 'normal') {
      inlineStyle.push(styles[this.props.size]);
    }

    return (
      <svg
        {...other}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        style={inlineStyle}
        viewBox={viewBox}
      >
        {path}
      </svg>
    );
  }
}

export default radium(SvgIcon);
