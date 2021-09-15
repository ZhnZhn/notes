import { createAction } from '@reduxjs/toolkit';

export const addNote = createAction("notes/addNote")
export const deleteNote = createAction("notes/deleteNote")

export const moveNote = createAction("notes/moveNote")
export const editNoteLabels = createAction("notes/editNoteLabels")
