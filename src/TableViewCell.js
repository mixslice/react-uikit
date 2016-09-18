import React, { PropTypes } from 'react';
import Base from './Base';
import config from './styles/config';


const getStyles = ({ fontSizes, verticalAlign }) => ({
  left: {
    display: 'table-cell',
  },
  content: {
    display: 'table-cell',
    verticalAlign: verticalAlign || 'middle',
    width: '99%',
  },
  right: {
    display: 'table-cell',
    verticalAlign: 'middle'
  },
  text: {
    fontSize: fontSizes[3]
  }
});

const TableViewCell = ({
  text,
  detailText,
  imageView,
  accessoryView,
  verticalAlign,
  children,
  ...props
}, { theme }) => {
  const mergedTheme = { ...config, ...theme };
  const styles = getStyles({
    ...mergedTheme,
    verticalAlign
  });
  const content = children
  ? <div style={styles.content}>{children}</div>
  : (
    <div style={styles.content}>
      <div style={styles.text}>{text}</div>
      <div style={styles.detailText}>{detailText}</div>
    </div>
  );

  return (
    <Base {...props}>
      <div style={styles.left}>{imageView}</div>
      {content}
      <div style={styles.right}>{accessoryView}</div>
    </Base>
  );
};

TableViewCell.propTypes = {
  text: PropTypes.string,
  detailText: PropTypes.string,
  imageView: PropTypes.element,
  accessoryView: PropTypes.element,
  children: PropTypes.node,
  verticalAlign: PropTypes.string,
};

TableViewCell.contextTypes = {
  theme: PropTypes.object
};

export default TableViewCell;
