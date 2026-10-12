import React, { useState } from 'react';
import plusicon from '../../assets/plus.png';

import './Sidebar.css';

function Sidebar(props) {
  const colors = ['#fe9b72', '#fec971', '#00d4fe', '#b693fd', '#e4ee91'];

  const [listOpen, setlistOpen] = useState(false);

  return (
    <div className="Sidebar">
      <img src={plusicon} alt="Add" onClick={() => setlistOpen(!listOpen)} />
      <ul className={`Sidebar_list ${listOpen ? 'Sidebar_list_active' : ''}`}>
        {colors.map((item, index) => (
          <li
            key={index}
            className="Sidebar_list_item"
            style={{ backgroundColor: item }}
            onClick={() => props.addNote(item)}
          />
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
