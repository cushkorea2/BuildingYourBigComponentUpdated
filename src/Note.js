import React from "react";

const Note = () => {
  return (
    <div className="note">
      <input type="text" className="note__title" placeholder="Note Title" />
      <textarea
        className="note__description"
        placeholder="Note description..."
      ></textarea>
      <div className="note__delete">X</div>
    </div>
  );
};

export default Note;
