import crCn from '../zhn-utils/crCn';

const CL_TAB = 'tab not-selected'
, CL_SELECTED = 'tab--selected';

const K_BLANK = ''
, K_BLANK_CODE = 32;

const _isKeyBlank = evt => evt.key === K_BLANK
  || evt.keyCode === K_BLANK_CODE;

const Tab = ({
  id,
  title,
  isSelected,
  onClick
}) => {
    const _cl = crCn(CL_TAB, [isSelected, CL_SELECTED])
    , _onClick = () => {
      if (!isSelected) {
        onClick()
      }
    }
    , _onKeyDown = evt => {
      if (_isKeyBlank(evt)) {
        _onClick()
      }
    };

    return (
       <li
          role="tab"
          tabIndex={0}
          className={_cl}
          id={`tab-${id}`}
          aria-selected={isSelected}
          aria-controls={`tabpanel-${id}`}
          onClick={_onClick}
          onKeyDown={_onKeyDown}
       >
          <span>
            {title}
          </span>
       </li>
    );
};

export default Tab
