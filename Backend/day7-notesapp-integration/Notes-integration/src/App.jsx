import NoteCard from "./components/NoteCard";
import useNotes from "./hooks/useNotes";

const App = () => {
  const {
    notes,
    formValue,
    handleSubmit,
    handleChange,
    editingNoteId,
    handleDelete,
    handleEdit,
  } = useNotes();
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
          {editingNoteId ? "Update Note" : "Add Note"}
        </button>
      </form>

      <div className="flex gap-4 flex-wrap">
        {notes.map((val) => (
          <NoteCard
            key={val._id}
            note={val}
            noteForUpdate={handleEdit}
            deleteNotes={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
