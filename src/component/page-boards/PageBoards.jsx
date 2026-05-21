import {
  useDispatch,
  useCallback
} from '../uiApi';

import { DragDropContext } from 'react-beautiful-dnd';

import { moveColumn } from '../../flux/column/actions';

import isNotDnD from '../zhn-dnd/isNotDnD';

import Header from './Header';
import Main from '../zhn-ch/Main';
import BoardList from './BoardList';

const PageBoards = () =>  {
  const dispatch = useDispatch()
  , _hDragEnd = useCallback(result => {
    if (isNotDnD(result)){
      return;
    }
    dispatch(moveColumn(result))
  }, [dispatch]);

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
};

export default PageBoards
