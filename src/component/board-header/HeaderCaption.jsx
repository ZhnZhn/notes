import { selectCurrentBoard } from '../../flux/selectors';

import { useSelector } from '../uiApi';
import {
  CL_LOGO_BOARD,
  CL_HEADER_TITLE,
  CL_TITLE_BOARD
} from '../styleFn';

import Logo from '../zhn/Logo';
import crTitle from './crTitle';

const _CL_TITLE = `${CL_HEADER_TITLE} ${CL_TITLE_BOARD}`;

const HeaderCaption = () => {
  const board = useSelector(selectCurrentBoard);
  return (
  <>
    <Logo key="logo" className={CL_LOGO_BOARD} />
    <span className={_CL_TITLE}>
      {crTitle(board)}
    </span>
  </>);
};

export default HeaderCaption
