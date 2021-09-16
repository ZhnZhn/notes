import { connect } from 'react-redux'
import { addBoard } from '../../flux/board/actions'

import ZhHeader from '../zhn-ch/Header'
import Logo from '../zhn/Logo'
import FlatButton from '../zhn-m/FlatButton'
import HeaderDrawer from '../header/HeaderDrawer'

import CL from '../style/CL'

const Header = ({
  style,
  addBoard
}) => (
  <ZhHeader className={CL.HEADER} style={style}>
    <Logo />
    <span className={CL.TITLE_GAP} />
    <span className={CL.HEADER_TITLE}>
      Notes: Boards
    </span>
    <FlatButton
      caption="Add Board"
      title="Click to add new board"
      accessKey="a"
      isEvent={false}
      timeout={200}
      onClick={addBoard}
    />
    <HeaderDrawer />
  </ZhHeader>
);

const mapDispatchToProps = {
  addBoard
};

export default connect(
  null,
  mapDispatchToProps
)(Header)
