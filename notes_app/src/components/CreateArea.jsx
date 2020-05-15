import React from "react";


function CreateArea(props) {

  const [entry, addEntry] = React.useState({
    title: "",
    content: ""
  });



  function changeEntry(event){
    const {name, value} = event.target;
    console.log(value);
    return addEntry(prev =>{
      return {...prev, [name]:value}
    })
  }

  function submitNote(event){
    props.add(entry);
    event.preventDefault();
    addEntry({title:"", content:""});
  }

  return (
    <div>
      <form>
        <input
          name='title'
          value={entry.title}
          placeholder="Title"
          onChange={changeEntry}
        />
        <textarea
          name="content"
          value={entry.content}
          placeholder="Take a note..." rows="3"
          onChange={changeEntry}
        />
        <button onClick={submitNote} >Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
