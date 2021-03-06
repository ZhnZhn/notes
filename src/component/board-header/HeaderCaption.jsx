import { connect } from 'react-redux'
import s from '../../flux/selectors'

import Logo from '../zhn/Logo'
import CL from '../style/CL'

import crTitle from './crTitle'

// @flow

const HeaderCaption = ({ board /*: ?Board */ }) => ([
  <Logo key="logo" className={CL.LOGO_BOARD} />,
  <span
    key="title"
    className={`${CL.HEADER_TITLE} ${CL.TITLE_BOARD}`}
  >
    {crTitle(board)}
  </span>
]);

const mapStateToProps = (state /*: StoreState */) => ({
  board: s.board.currentBoard(state)
});

export default connect(
  mapStateToProps
)(HeaderCaption)
