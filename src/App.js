import React, { useState } from "react";
import Header from "./Header";
import NotesList from "./NotesList";

const App = () => {
  const [state, setState] = useState({
    notes: [
      {
        id: Date.now(),
        title: "",
        description: "",
        doesMatchSearch: true
      }
    ],
    searchText: ""
  });

  const addNote = () => {
    const newNote = {
      id: Date.now(),
      title: "",
      description: "",
      doesMatchSearch: true
    };

    setState((prevState) => ({
      ...prevState,
      notes: [...prevState.notes, newNote]
    }));
  };

  return (
    <div className="app">
      <Header addNote={addNote} />
      <NotesList notes={state.notes} />
    </div>
  );
};

export default App;
