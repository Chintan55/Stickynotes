import React from 'react';

import deleteIcon from '../../assets/delete.png';

import './Note.css';

let timer = 500,
  timeout;

function Note(props) {
  const formateDate = (value) => {
    if (!value) return '';
    const date = new Date(value);

    const monthName = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    let hrs = date.getHours();
    let ampm = hrs > 12 ? 'PM' : 'AM';
    hrs = hrs ? hrs : 12;
    hrs = hrs > 12 ? (hrs = 24 - hrs) : hrs;

    let min = date.getMinutes();
    min = min < 10 ? '0' + min : min;
    let day = date.getDay();
    const month = monthName[date.getMonth()];

    return `${hrs}:${min} ${ampm} ${day} ${month}`;
  };

  const debounce = (func) => {
    clearTimeout(timeout);
    timeout = setTimeout(func, timer);
  };

  const updateText = (text, id) => {
    debounce(() => props.updateText(text, id));
  };

  return (
    <div className="note" style={{ backgroundColor: props.note.Color }}>
      <textarea
        autoFocus
        className="note_text"
        defaultValue={props.note.Text}
        placeholder="Write a note..."
        onChange={(event) => updateText(event.target.value, props.note.id)}
      />
      <div className="note_footer">
        <p>{formateDate(props.note.Time)}</p>
        <img
          src={deleteIcon}
          alt="DELETE"
          onClick={() => props.deleteNote(props.note.id)}
        />
      </div>
    </div>
  );
}

export default Note;
