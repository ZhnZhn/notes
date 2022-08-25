import { useSelector } from 'react-redux';
import { sBoard } from '../../flux/selectors';

import Logo from '../zhn/Logo';
import crTitle from './crTitle';
import {
  CL_LOGO_BOARD,
  CL_HEADER_TITLE,
  CL_TITLE_BOARD
} from '../style/CL';

const _CL_TITLE = `${CL_HEADER_TITLE} ${CL_TITLE_BOARD}`;

const HeaderCaption = () => {
  const board = useSelector(sBoard.currentBoard);
  return (
  <>
    <Logo key="logo" className={CL_LOGO_BOARD} />
    <span className={_CL_TITLE}>
      {crTitle(board)}
    </span>
  </>);
};

export default HeaderCaption
