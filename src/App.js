import React, { useState } from 'react';
import Notes from './components/Note';
import './style.css';

export default function App() {
  let [list, setList] = useState([]);
  let [newNote, setNewNote] = useState('');

  function addNote() {
    let addedNote = list.concat(newNote);
    setList(addedNote);
    setNewNote('');
  }

  function handleChange(e) {
    setNewNote(e.target.value);
  }

  return (
    <div>
      <div className='center'>
      <h1><cente>My Notes</cente></h1>
      <input type="text" value={newNote} onChange={handleChange} />

      <button onClick={addNote}>Save</button>
      </div>
      <Notes data={list} />
    </div>
  );
}