const NoteCard = ({ note,deleteNote,noteForUpdate }) => {
  return (
    <div className="w-[30%] border border-black p-4 flex flex-col gap-3 rounded-xl">
      <h1>{note.title}</h1>
      <p className="text-xs">
        {note.description.length > 20
          ? note.description.substring(0, 20) + "..."
          : note.description}
      </p>
      <div className="flex justify-between">
        <button onClick={() => noteForUpdate(note)} className=" bg-yellow-600 p-2 text-white rounded">
          Update
        </button>
        <button onClick={() => deleteNote(note._id)} className=" bg-red-700 p-2 text-white rounded">Delete</button>
      </div>
    </div>
  );
};

export default NoteCard;
