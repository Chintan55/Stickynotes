import React from 'react';
import Note from '../Note/Note';
import './NoteContainers.css';

function NoteContainers(props) {
  return (
    <div className="Note-containers">
      <h2>Notes</h2>

      <div className="Note-containers-notes custom-scroll">
        {props.notes?.length === 0 ? (
          <p className="no-notes">No notes present</p>
        ) : (
          props.notes?.map((item) => (
            <Note
              key={item.id || item.Time}
              note={item}
              deleteNote={props.deleteNote}
              updateText={props.updateText}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default NoteContainers;
