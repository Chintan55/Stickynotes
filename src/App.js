import React, { useEffect, useState } from 'react';

import NoteContainers from './Components/NoteContainers/NoteContainers';
import Sidebar from './Components/Sidebar/Sidebar';

import './App.css';

function App() {
  const [notes, setNote] = useState(
    JSON.parse(localStorage.getItem('notes-app')) || [],
  );

  const addnote = (color) => {
    const newNote = {
      id: Date.now(),
      Text: '',
      Time: Date.now(),
      Color: color,
    };

    setNote((prevNotes) => {
      return [newNote, ...prevNotes];
    });
  };

  const deleteNote = (id) => {
    setNote((prevNotes) => {
      return prevNotes.filter((item) => item.id !== id);
    });
  };

  const updateText = (text, id) => {
    const tempNots = [...notes];

    const index = tempNots.findIndex((item) => item.id === id);

    if (index < 0) return;

    tempNots[index].Text = text;

    setNote(tempNots);
  };

  useEffect(() => {
    localStorage.setItem('notes-app', JSON.stringify(notes));
  }, [notes]);

  return (
    <div className="App">
      <Sidebar addNote={addnote} />

      <NoteContainers
        notes={notes}
        deleteNote={deleteNote}
        updateText={updateText}
      />
    </div>
  );
}

export default App;
