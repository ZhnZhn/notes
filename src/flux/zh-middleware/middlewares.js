
import boardId from './boardId'
import columnId from './columnId'
import noteId from './noteId'
import noteLabelId from './noteLabelId'
import appStorage from './appStorage'
import drawerMsg from './drawerMsgId'
import canRemoveColumn from './canRemoveColumn'
import canRemoveBoard from './canRemoveBoard'

import noteTitleValidation from './noteTitleValidation'


const middlewares = [
  boardId,
  columnId,
  noteId,
  noteLabelId,
  appStorage,
  drawerMsg,
  canRemoveColumn,
  canRemoveBoard,
  noteTitleValidation
];

export default middlewares
