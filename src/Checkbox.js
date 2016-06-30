import React, { Component, PropTypes } from 'react';
import radium from 'radium';
import SvgIcon from './SvgIcon';
import { CheckIcon } from './utils/paths';
import config from './styles/config';
import Base from './Base';


const getStyles = ({ spacing, palette }) => ({
  root: {
    userSelect: 'none',
    display: 'table',
    cursor: 'pointer',
    alignItems: 'center',
    padding: spacing.verticalPadding
  },
  inputWrapper: {
    display: 'table-cell',
    verticalAlign: 'top',
    boxSizing: 'border-box',
    position: 'relative',
    lineHeight: 0,
  },
  input: {
    boxSizing: 'border-box',
    cursor: 'pointer',
    appearance: 'none',
    background: 'none',
    marginRight: 15,
    width: '1.4em',
    height: '1.4em',
    outline: 'none',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: palette.controlBorder
  },
  label: {
    boxSizing: 'border-box',
    display: 'table-cell',
    width: '99%'
  },
  hidden: {
    display: 'none'
  },
  icon: {
    position: 'absolute',
    width: '1.4em',
    height: '1.4em'
  }
});

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
    if (this.props.onChange) {
      this.props.onChange(checked);
    }
  }

  render() {
    const {
      style,
      label,
      value,
      ...other
    } = this.props;
    const { theme } = this.context;
    const mergedTheme = { ...config, ...theme };
    const { palette } = mergedTheme;
    const styles = getStyles(mergedTheme);

    const sx = [styles.root];

    if (style) {
      sx.push(style);
    }

    return (
      <Base is="label" style={sx}>
        <div style={styles.inputWrapper}>
          <SvgIcon
            baseColor={palette.primary}
            style={this.state.checked ? styles.icon : styles.hidden}
            path={CheckIcon}
          />
          <Base
            is="input"
            rounded
            {...other}
            value={value}
            onChange={this.handleChange}
            style={styles.input}
            checked={this.state.checked}
            type="checkbox"
          />
        </div>
        <div style={styles.label}>{label}</div>
      </Base>
    );
  }
}

Checkbox.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  onChange: PropTypes.func,
  checked: PropTypes.bool,
  label: PropTypes.string,
  style: PropTypes.object
};

Checkbox.contextTypes = {
  theme: PropTypes.object
};

export default radium(Checkbox);
