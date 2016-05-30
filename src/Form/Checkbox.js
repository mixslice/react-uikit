import React, { Component, PropTypes } from 'react';
import radium from 'radium';
import themes from '../styles/themes';
import SvgIcon from '../SvgIcon';
import { checkIcon } from '../SvgIcon/paths';


const getStyles = (props, theme) => {
  const { spacing, palette } = theme;

  const styles = {
    root: {
      userSelect: 'none',
      display: 'flex',
      cursor: 'pointer',
      alignItems: 'center',
      padding: spacing.verticalPadding
    },
    inputWrapper: {
      display: 'flex',
      boxSizing: 'border-box',
      position: 'relative'
    },
    input: {
      cursor: 'pointer',
      appearance: 'none',
      marginRight: 15,
      width: '1.4em',
      height: '1.4em',
      outline: 'none',
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: palette.checkboxColor,
      borderRadius: spacing.borderRadius
    },
    icon: {
      position: 'absolute',
      width: '1.4em',
      height: '1.4em'
    }
  };

  return styles;
};

class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: props.checked
    };
  }

  handleChange = (event) => {
    const checked = event.target.checked;
    this.setState({ checked });
  }

  render() {
    const {
      style,
      label,
      value,
      ...other
    } = this.props;
    const theme = this.context.theme || themes.getTheme();
    const { palette } = theme;
    const styles = getStyles(this.props, theme);

    const inlineStyle = [];
    inlineStyle.push(styles.root);

    if (style) {
      inlineStyle.push(style);
    }

    const checkmark = this.state.checked
    ? <SvgIcon
      baseColor={palette.primaryColor}
      style={styles.icon}
      path={checkIcon}
    /> : null;

    return (
      <label style={inlineStyle}>
        <div style={styles.inputWrapper}>
          {checkmark}
          <input
            {...other}
            value={value}
            onChange={this.handleChange}
            style={styles.input}
            checked={this.state.checked}
            type="checkbox"
          />
        </div>
        <div>
          <span>{label}</span>
        </div>
      </label>
    );
  }
}

Checkbox.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  checked: PropTypes.bool,
  label: PropTypes.string,
  style: PropTypes.object
};

Checkbox.contextTypes = {
  theme: PropTypes.object
};

export default radium(Checkbox);
