import merge from 'lodash.merge';
import color from 'color';
import transitions from './transitions';
import lightBaseTheme from './baseThemes/lightBaseTheme';


class Themes {

  getTheme(theme, ...more) {
    let _t = merge({}, lightBaseTheme, theme, ...more);
    _t = merge(
      {
        button: {
          boxSizing: 'border-box',
          display: 'inline-block',
          fontFamily: _t.fontFamily,
          cursor: 'pointer',
          textDecoration: 'none',
          margin: '0.8em',
          padding: '0 1.75em',
          lineHeight: `${_t.spacing.buttonHeight}px`,
          fontWeight: 600,
          minWidth: _t.spacing.buttonWidth,
          height: _t.spacing.buttonHeight,
          position: 'relative',
          textAlign: 'center',
          border: 0,
          borderRadius: '0.2em',
          overflow: 'hidden',
          transition: transitions.easeOut()
        },
        flatButton: {
          color: color(_t.palette.textColor).alpha(_t.palette.textColorAlpha).rgbString(),
          backgroundColor: _t.palette.greyColor,
          ':hover': {
            backgroundColor: color(_t.palette.greyColor).darken(_t.palette.hoverDarken).hexString()
          }
        },
        raisedButton: {
          color: color(_t.palette.textColor).alpha(_t.palette.textColorAlpha).rgbString(),
          backgroundColor: _t.palette.canvasColor,
          ':hover': {
            backgroundColor: _t.palette.greyColor
          },
          boxShadow:
            `0 ${_t.palette.shadows[0][0]}px ${_t.palette.shadows[0][1]}px
             ${color(_t.palette.shadowColor).alpha(_t.palette.shadows[0][2]).rgbString()},
             0 ${_t.palette.shadows[0][3]}px ${_t.palette.shadows[0][4]}px
             ${color(_t.palette.shadowColor).alpha(_t.palette.shadows[0][5]).rgbString()}`
        },
        iconButton: {
          minWidth: _t.spacing.buttonHeight,
          height: _t.spacing.buttonHeight,
          padding: 0,
          color: color(_t.palette.textColor).alpha(_t.palette.textColorAlpha).rgbString(),
          backgroundColor: 'transparent',
          ':hover': {
            backgroundColor: _t.palette.greyColor
          }
        },
        floatingButton: {
          minWidth: _t.spacing.buttonHeight,
          height: _t.spacing.buttonHeight,
          padding: 0,
          borderRadius: '50%',
          color: color(_t.palette.textColor).alpha(_t.palette.textColorAlpha).rgbString(),
          backgroundColor: _t.palette.canvasColor,
          ':hover': {
            backgroundColor: _t.palette.greyColor
          },
          boxShadow:
            `0 ${_t.palette.shadows[0][0]}px ${_t.palette.shadows[0][1]}px
             ${color(_t.palette.shadowColor).alpha(_t.palette.shadows[0][2]).rgbString()},
             0 ${_t.palette.shadows[0][3]}px ${_t.palette.shadows[0][4]}px
             ${color(_t.palette.shadowColor).alpha(_t.palette.shadows[0][5]).rgbString()}`
        },
        svgIcon: {
          display: 'inline-block',
          height: _t.spacing.iconSize,
          width: _t.spacing.iconSize,
          userSelect: 'none',
          verticalAlign: 'middle'
        }
      },
      _t
    );
    return _t;
  }
}

export default new Themes();
