import { createAction } from '@reduxjs/toolkit';

export const addColumn = createAction("columns/addColumn")
export const removeColumn = createAction("columns/removeColumn")

export const moveColumn = createAction("columns/moveColumn")
