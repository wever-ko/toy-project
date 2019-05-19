import React from 'react';
import PropTypes from 'prop-types';

const ListItem = ({ children, onClick, index }) => (
  <li>
    {children}
    <button type="button" onClick={() => onClick(index)}>[-]</button>
  </li>
);

ListItem.defaultProps = {
  children: null,
};

ListItem.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

export default ListItem;
