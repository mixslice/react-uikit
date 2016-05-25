import React, { Component, PropTypes } from 'react';
import radium from 'radium';
import color from 'color';
import themes from '../styles/themes';

class SvgIcon extends Component {
  static muiName = 'SvgIcon';

  static propTypes = {
    path: PropTypes.node,
    baseColor: PropTypes.string,
    style: PropTypes.object,
    viewBox: PropTypes.string,
  };

  static defaultProps = {
    viewBox: '0 0 24 24',
  };

  static contextTypes = {
    theme: PropTypes.object,
  };

  render() {
    const {
      path,
      baseColor,
      viewBox,
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
      }
    };

    const inlineStyle = [];
    inlineStyle.push(styles.default);
    if (baseColor) {
      inlineStyle.push({ fill: baseColor });
    }

    return (
      <svg
        {...other}
        style={inlineStyle}
        viewBox={viewBox}
      >
        {path}
      </svg>
    );
  }
}

export default radium(SvgIcon);
