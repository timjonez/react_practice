import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [items, setItems] = React.useState([]);

  function addNote(note){
    console.log(note)
    setItems(prevNotes =>{
      return [...prevNotes, note]
    })
  }

  function noteDelete(id){
    setItems(prevNote =>{
      return items.filter((note, index) => (index != id) )
    }
  )}

  return (
    <div>
      <Header />
      <CreateArea add={addNote} />
      {items.map((note, index) =>(
        <Note
          id={index}
          key={index}
          title={note.title}
          content={note.content}
          onDelete={noteDelete}
      />
      ))}

      <Footer />
    </div>
  );
}

export default App;
