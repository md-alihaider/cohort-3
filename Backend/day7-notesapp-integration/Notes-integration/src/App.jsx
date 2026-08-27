import { useEffect, useState } from "react";
import axios from "axios";
import NoteCard from "./components/NoteCard";
const App = () => {
  const [formValue, setFormValue] = useState({
    title: "",
    description: "",
  });
  const [allnotes, setAllnotes] = useState([]);
  const [isDataForUpdate, setIsDataForUpdate] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isDataForUpdate) {
      //update api
      let res = await axios.put(
        `http://localhost:3000/notes/${isDataForUpdate}`,
        formValue,
      );
      console.log(res);
      setIsDataForUpdate(null);
    } else {
      //api call for create
      let res = await axios.post(
        "http://localhost:3000/notes/create",
        formValue,
      );
      console.log(res);
    }

    
    getAllNotes();
    setFormValue({
      title: "",
      description: "",
    });
  };
  const handleChange = (e) => {
    setFormValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const getAllNotes = async () => {
    try {
      let res = await axios.get("http://localhost:3000/notes/allnotes");
      // console.log(res);
      setAllnotes(res.data.data);
    } catch (error) {
      console.log("Error in Getting all notes.", error);
    }
  };

  useEffect(() => {
    getAllNotes();
  }, []);

  const deleteNote = async (id) => {
    try {
      let res = await axios.delete(`http://localhost:3000/notes/${id}`);
      console.log(res); 
      getAllNotes();
    } catch (error) {
      console.log("Error in deleting note.", error);
    }
  };

  const noteForUpdate = (note) => {
    console.log(note)
    setIsDataForUpdate(note._id)
    setFormValue({
      title: note.title,
      description: note.description,
    })
  }
  return (
    <div className=" h-screen p-5 flex flex-col gap-5">
      <h1 className="text-3xl font-semibold">Notes app</h1>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-70 gap-4 rounded-xl border border-black p-4"
      >
        <input
          required={true}
          onChange={handleChange}
          value={formValue.title}
          name="title"
          className="p-2 outline-none text-xl rounded border border-black"
          type="text"
          placeholder="title"
        />
        <input
          required={true}
          minLength={20}
          onChange={handleChange}
          value={formValue.description}
          name="description"
          className="p-2 outline-none text-xl rounded border border-black"
          type="text"
          placeholder="description"
        />
        <button className=" bg-blue-600 p-2 text-white rounded hover:bg-blue-700">
         {isDataForUpdate ? "Update Note" : "Add Note"}
        </button>
      </form>

      <div className="flex gap-4 flex-wrap">
        {allnotes.map((val) => (
          <NoteCard key={val._id} note={val} noteForUpdate={noteForUpdate} deleteNote={deleteNote} />
        ))}
      </div>
    </div>
  );
};

export default App;
