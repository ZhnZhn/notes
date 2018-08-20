
import boardId from './boardId'
import columnId from './columnId'
import noteId from './noteId'
import appStorage from './appStorage'
import canRemoveColumn from './canRemoveColumn'
import canRemoveBoard from './canRemoveBoard'


const middlewares = [
  boardId,
  columnId,
  noteId,
  appStorage,
  canRemoveColumn,
  canRemoveBoard
];

export default middlewares
