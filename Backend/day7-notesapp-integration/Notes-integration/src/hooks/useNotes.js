import { useEffect, useState } from "react";
import {
  createNote,
  deleteNote,
  getAllNotes,
  updateNote,
} from "../services/noteService";

const INITIAL_FORM = {
  title: "",
  description: "",
};

const useNotes = () => {
  const [notes, setNotes] = useState([]);
  const [formValue, setFormValue] = useState(INITIAL_FORM);
  const [editingNoteId, setEditingNoteId] = useState(null);

  const getNotes = async () => {
    try {
      const res = await getAllNotes();
      setNotes(res.data);
    } catch (error) {
      console.log("Error in Getting all notes.", error);
    }
  };

  useEffect(() => {
    getNotes();
  }, []);
  const resetForm = () => {
    setFormValue(INITIAL_FORM);
    setEditingNoteId(null);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editingNoteId) {
        await updateNote(editingNoteId, formValue);
      } else {
        await createNote(formValue);
      }

      resetForm();
      await getNotes();
    } catch (error) {
      console.error("Error saving note:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue((prev) => ({ ...prev, [name]: value }));
  };

  const handleDelete = async (id) => {
    try {
      await deleteNote(id);
      getNotes();
    } catch (error) {
      console.log("Error in deleting note.", error);
    }
  };

  const handleEdit = (note) => {
    setEditingNoteId(note._id);
    setFormValue({
      title: note.title,
      description: note.description,
    });
  };

  return {
    notes,
    formValue,
    editingNoteId,
    handleChange,
    handleSubmit,
    handleEdit,
    handleDelete,
  };
};

export default useNotes;
