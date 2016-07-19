import React, { PropTypes } from 'react';
import radium from 'radium';
import config from './styles/config';
import Base from './Base';


const getStyles = ({ baseColor, kind, palette, spacing }) => ({
  root: {
    display: 'inline-block',
    height: spacing.iconSize,
    width: spacing.iconSize,
    userSelect: 'none',
    verticalAlign: 'middle',
    fill: baseColor || palette[kind] || palette.foreground
  },
  disabled: {
    fill: palette.disabled,
    ':hover': {
      fill: palette.disabled
    }
  },
  large: {
    height: spacing.iconSize * 1.5,
    width: spacing.iconSize * 1.5
  }
});

const SvgIcon = ({
  path,
  baseColor,
  style,
  viewBox,
  disabled,
  kind,
  size,
  ...other,
}, { theme }) => {
  const styles = getStyles({ ...config, ...theme, kind, baseColor });

  const sx = [styles.root];
  if (disabled) {
    sx.push(styles.disabled);
  } else {
    if (style) {
      sx.push(style);
    }
  }

  if (size && size !== 'normal') {
    sx.push(styles[size]);
  }

  return (
    <Base
      is="svg"
      {...other}
      style={sx}
      viewBox={viewBox}
    >
      {path}
    </Base>
  );
};

SvgIcon.propTypes = {
  disabled: PropTypes.bool,
  path: PropTypes.node,
  baseColor: PropTypes.string,
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
  kind: PropTypes.oneOf(['primary', 'secondary', 'default'])
};

SvgIcon.defaultProps = {
  viewBox: '0 0 24 24'
};

SvgIcon.contextTypes = {
  theme: PropTypes.object,
};

export default radium(SvgIcon);
