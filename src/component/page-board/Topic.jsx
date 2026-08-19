import {
  isArrEmpty
} from '../../utils/isTypeFn';

import {
  editColumnTitle,
  toggleColumn
} from '../../flux/column/reducer';
 import {
   removeColumn
 } from '../../flux/column/actions';
 import {
   addNote
 } from '../../flux/note/actions';

import {
  useDispatch,
  useCallback
} from '../uiApi';
import {
  CL_CARD_BT
} from '../styleFn';

import useBool from '../hooks/useBool';

import { BtSvgMore } from '../zhn/BtSvg';
import TopicMenuMore from './TopicMenuMore';

import CardItem from '../zhn-card/CardItem';
import CardHeader from '../zhn-card/CardHeader';
import CardTitle from '../zhn-card/CardTitle';
import CardCounter from '../zhn-card/CardCounter';

import FlatButton from '../zhn-m/FlatButton';
import DnDNoteList from './DnDNoteList';

const S_BT_SVG_MORE = {
  marginRight: 8
}
, S_MENU_MORE = {
  position: 'absolute',
  width: 150
};

const Topic = ({
  boardId,
  column,
  notes
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

  , _hAddNewTask = useCallback(() => {
    dispatch(addNote({ columnId }))
  }, [columnId])
  //dispatch

  , _hBlurTitle = useCallback((evt) => {
     const title = evt.target.value;
     if (title) {
       dispatch(editColumnTitle({
         columnId,
         title
       }))
     }
  }, [columnId])
  // dispatch

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
    <CardItem isHide={isHide}>
      <CardHeader>
        <BtSvgMore
          style={S_BT_SVG_MORE}
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
        <CardTitle
          initialValue={title}
          onBlur={_hBlurTitle}
        />
        <CardCounter value={_numberOfNotes} />
        {
          withAdd &&
          <FlatButton
            clCaption={CL_CARD_BT}
            caption="AddNote"
            title="Click to add a new note"
            timeout={1000}
            onClick={_hAddNewTask}
          />
        }
      </CardHeader>
      <DnDNoteList
        cId={columnId}
        noteIds={noteIds}
        notes={notes}
      />
      <div>
        {
          isArrEmpty(noteIds) &&
            <FlatButton
              clCaption={CL_CARD_BT}
              caption="Remove Topic"
              onClick={_hRemoveColumn}
            />
        }
      </div>
    </CardItem>
  );
}

export default Topic
