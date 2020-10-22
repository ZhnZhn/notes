const CL = {
  TAB: 'tab not-selected',
  SELECTED: 'tab--selected'
};

const K = {
  BLANK: '',
  BLANK_CODE: 32
};

const _isKeyBlank = (evt) => evt.key === K.BLANK
  || evt.keyCode === K.BLANK_CODE;

const _crOnKeyDown = (isSelected, onClick) => (evt) => {
  if (_isKeyBlank(evt) && !isSelected) {
    onClick()
  }
};
const _crOnClick = (isSelected, onClick) => () => {
  if (!isSelected) {
    onClick()
  }
}
const _crClass = isSelected => isSelected
   ? `${CL.TAB} ${CL.SELECTED}`
   : CL.TAB;

const Tab = ({
  title,
  isSelected,
  onClick
}) => {
    const _cl = _crClass(isSelected)
    , _onClick = _crOnClick(isSelected, onClick)
    , _onKeyDown = _crOnKeyDown(isSelected, onClick);

    return (
       <li
          role="tab"
          tabIndex={0}
          className={_cl}
          onClick={_onClick}
          onKeyDown={_onKeyDown}
       >
          <span>
            {title}
          </span>
       </li>
    );
}

export default Tab
