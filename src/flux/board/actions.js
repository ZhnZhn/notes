import { createAction } from '@reduxjs/toolkit';

export const addBoard = createAction("boards/addBoard")
export const removeBoard = createAction("boards/removeBoard")

export const setCurrentBoard = createAction("boards/setCurrentBoard")
