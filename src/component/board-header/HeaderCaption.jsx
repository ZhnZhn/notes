import { useSelector } from 'react-redux';
import s from '../../flux/selectors';

import Logo from '../zhn/Logo';
import CL from '../style/CL';

import crTitle from './crTitle';

const HeaderCaption = () => {
  const board = useSelector(s.board.currentBoard);
  return (
  <>
    <Logo key="logo" className={CL.LOGO_BOARD} />
    <span className={`${CL.HEADER_TITLE} ${CL.TITLE_BOARD}`}>
      {crTitle(board)}
    </span>
  </>);
};

export default HeaderCaption
