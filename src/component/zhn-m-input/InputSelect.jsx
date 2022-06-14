import { Component } from '../uiApi'

import ArrowCell from './ArrowCell'
import OptionsPane from './OptionsPane'

import {
  CL_SELECT,
  CL_LABEL,
  CL_DIV,
  CL_DIV_VALUE,
  CL_DIV_BT,
  CL_INPUT_LINE
} from './CL';

class InputSelect extends Component {
  static defaultProps = {
    initItem: {
      caption: '',
      value: ''
    }
  }

  constructor(props){
    super()
    this.state = {
      isShow: false,
      item: props.initItem
    }
  }

  _handleOpen = () => {
    this.setState({ isShow: true })
  }
  _handleClose = () => {
    this.setState({ isShow: false })
  }
  _handleSelect = (item, event) => {
    event.stopPropagation()
    this.props.onSelect(item)
    this.setState({
      isShow: false,
      item: item
    })
  }


  render(){
    const {
      caption,
      options,
      styleConfig:TS={}
    } = this.props
    , {
      isShow,
      item
    } = this.state;

    return (
      <div
        className={CL_SELECT}
        style={TS.ROOT}
        onClick={this._handleOpen}
      >
        <OptionsPane
           rootStyle={TS.MODAL_PANE}
           isShow={isShow}
           item={item}
           options={options}
           clItem={TS.CL_ITEM}
           onSelect={this._handleSelect}
           onClose={this._handleClose}
         />
        <label className={CL_LABEL}>
          {caption}
        </label>
        <div className={CL_DIV}>
          <div className={CL_DIV_VALUE}>
             {item.caption}
          </div>
          <button className={CL_DIV_BT} tabIndex="0">
            <div>
              <ArrowCell />
            </div>
          </button>
          <div className={CL_INPUT_LINE} />
        </div>
      </div>
    );
  }
}

export default InputSelect
