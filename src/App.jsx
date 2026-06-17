import { useState } from 'react';
import './App.css';

function App() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const addNote = (e) => {
    e.preventDefault();
    if (!title.trim()) return; // don't add empty notes
    
    const newNote = {
      id: Date.now(),
      title: title,
      content: content
    };
    
    setNotes([newNote, ...notes]); // add new note to top
    setTitle('');
    setContent('');
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  return (
    <div className="app">
      <h1>My Notes App</h1>
      
      {/* Note Form */}
      <form onSubmit={addNote} className="note-form">
        <input 
          type="text"
          placeholder="Note title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea 
          placeholder="Write your note..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit">Add Note</button>
      </form>

      {/* Notes List */}
      <div className="notes-grid">
        {notes.length === 0 ? (
          <p>No notes yet. Add one!</p>
        ) : (
          notes.map(note => (
            <div key={note.id} className="note">
              <h3>{note.title}</h3>
              <p>{note.content}</p>
              <button onClick={() => deleteNote(note.id)}>Delete</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;