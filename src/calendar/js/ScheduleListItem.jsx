import React from 'react';
import PropTypes from 'prop-types';

const ScheduleListItem = ({ children, onClick, id }) => (
  <li>
    {children}
    <button type="button" onClick={() => onClick(id)}>[-]</button>
  </li>
);

ScheduleListItem.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,

};

export default ScheduleListItem;
