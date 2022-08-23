import {
  useCallback
} from '../uiApi';

import {
  useDispatch
} from 'react-redux';

import useBool from '../hooks/useBool';

import {
  editColumnTitle,
  toggleColumn
} from '../../flux/column/reducer';
 import {
   removeColumn
 } from '../../flux/column/actions';

import isArrEmpty from '../../utils/isArrEmpty';

import SvgMore from '../zhn/SvgMore';
import TopicMenuMore from './TopicMenuMore';
import Card from '../zhn-card/Card';
import FlatButton from '../zhn-m/FlatButton';
import DnDNoteList from './DnDNoteList';

import CL from '../style/CL';

const S_SVG_MORE = { marginRight: 8 }
, S_MENU_MORE = {
    position: 'absolute',
    width: 150
};

const Topic = ({
  boardId,
  column,
  notes,
  addNote
}) => {
  const {
    id:columnId,
    isHide,
    title,
    withAdd,
    noteIds
  } = column
  , [
    isMenuMore,
    _openMenuMore,
    _closeMenuMore
  ] = useBool()
  , dispatch = useDispatch()

  /*eslint-disable react-hooks/exhaustive-deps */
  , _hHideTopic = useCallback(() => {
    dispatch(toggleColumn({
      columnId
    }))
  }, [columnId])
  // dispatch
  /*eslint-enable react-hooks/exhaustive-deps */

  , _hAddNewTask = useCallback(() => {
    addNote({ columnId })
  }, [addNote, columnId])

  /*eslint-disable react-hooks/exhaustive-deps */
  , _hBlurTitle = useCallback((evt) => {
     dispatch(editColumnTitle({
       columnId,
       title: evt.target.value
     }))
  }, [columnId])
  // dispatch
  /*eslint-enable react-hooks/exhaustive-deps */

  /*eslint-disable react-hooks/exhaustive-deps */
  , _hRemoveColumn = useCallback(() => {
    dispatch(removeColumn({
      boardId,
      columnId
    }))
  }, [boardId, columnId])
  // dispatch
  /*eslint-enable react-hooks/exhaustive-deps */

  , _numberOfNotes = noteIds.length;

  return (
    <Card.Item isHide={isHide}>
      <Card.Header>
        <SvgMore
          style={S_SVG_MORE}
          title="Click to open topic menu"
          onClick={_openMenuMore}
        />
        { isMenuMore && <TopicMenuMore
          style={S_MENU_MORE}
          isShow={isMenuMore}
          onAddNote={_hAddNewTask}
          onHideTopic={_hHideTopic}
          onClose={_closeMenuMore}
        />}
        <Card.Title
          initialValue={title}
          onBlur={_hBlurTitle}
        />
        <Card.Counter value={_numberOfNotes} />
        {
          withAdd &&
          <FlatButton
            clCaption={CL.CARD_BT}
            caption="AddNote"
            title="Click to add a new note"
            timeout={1000}
            onClick={_hAddNewTask}
          />
        }
      </Card.Header>
      <DnDNoteList
        cId={columnId}
        noteIds={noteIds}
        notes={notes}
      />
      <div>
        {
          isArrEmpty(noteIds) &&
            <FlatButton
              clCaption={CL.CARD_BT}
              caption="Remove Topic"
              onClick={_hRemoveColumn}
            />
        }
      </div>
    </Card.Item>
  );
}

export default Topic
