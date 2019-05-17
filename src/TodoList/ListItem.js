import React from 'react';

const ListItem = ({ children, onClick, index}) => (
  <li>
    {children}
    <button type="button" onClick={() => onClick(index)}>-</button>
  </li>
);

export default ListItem;
