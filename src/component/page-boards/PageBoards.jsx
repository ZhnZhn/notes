import {
  connect,
  useCallback
} from '../uiApi';

import { DragDropContext } from 'react-beautiful-dnd'

import { moveColumn } from '../../flux/column/actions'

import isNotDnD from '../zhn-dnd/isNotDnD'

import Header from './Header'
import Main from '../zhn-ch/Main'
import BoardList from './BoardList'

const PageBoards = ({ moveColumn }) =>  {
  const _hDragEnd = useCallback(result => {
    if (isNotDnD(result)){
      return;
    }
    moveColumn(result)
  }, [moveColumn]);

  return [
    <Header key="header" />,
    <DragDropContext
       key="ddc"
       onDragEnd={_hDragEnd}
    >
      <Main>
        <BoardList />
      </Main>
    </DragDropContext>
  ];
}

const mapDispatchToProps = {
  moveColumn
};

export default connect(
  null,
  mapDispatchToProps
)(PageBoards)
