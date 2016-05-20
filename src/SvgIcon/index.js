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
    children: PropTypes.node,
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
    size: PropTypes.oneOf(['normal', 'mini', 'large']),
    kind: PropTypes.oneOf(['primary', 'secondary'])
  };

  static defaultProps = {
    onMouseEnter: () => {},
    onMouseLeave: () => {},
    viewBox: '0 0 24 24',
  };

  static contextTypes = {
    theme: PropTypes.object.isRequired,
  };

  render() {
    const {
      children,
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

    const theme = this.context.theme || themes.getTheme();
    const palette = theme.palette;

    const colors = {
      primaryColor: color(palette.primaryColor).hexString(),
      primaryColorHover: color(palette.primaryColor).darken(palette.hoverDarken).hexString(),
      accentColor: color(palette.accentColor).hexString(),
      accentColorHover: color(palette.accentColor).darken(palette.hoverDarken).hexString(),
      greyColor: color(palette.greyColor).hexString(),
      textColor: palette.textColor,
      highlightTextColor: palette.highlightTextColor,
      disabledColor: color(palette.disabledColor).hexString()
    };

    const styles = {
      default: {
        fill: colors.textColor
      },
      primary: {
        fill: colors.primaryColor
      },
      secondary: {
        fill: colors.accentColor
      },
      disabled: {
        fill: colors.disabledColor
      },
      large: {
        height: theme.spacing.iconSize * 1.5,
        width: theme.spacing.iconSize * 1.5
      },
      mini: {
        height: theme.spacing.iconSize / 2,
        width: theme.spacing.iconSize / 2
      }
    };

    const inlineStyle = [];
    inlineStyle.push(theme.svgIcon);
    if (disabled) {
      inlineStyle.push(styles.disabled);
    } else {
      inlineStyle.push(styles.default);
      inlineStyle.push(styles[kind]);
      if (style) {
        inlineStyle.push(style);
      }
      if (baseColor) {
        inlineStyle.push({ fill: baseColor });
        // inlineStyle.push(hoverColor
        //  && { ':hover': { fill: hoverColor } });
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
        {children}
      </svg>
    );
  }
}

export default radium(SvgIcon);
