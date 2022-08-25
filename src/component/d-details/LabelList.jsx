import Label from './LabelNote';
import {
  CL_NOTE_LABEL,
  CL_NOTE_LABEL_CLOSE
} from '../style/CL';

const S_DIV = { paddingBottom: 4 };

const LabelList = ({
  labels,
  onRemove
}) => (
  <div style={S_DIV}>
    {
      (labels||[]).map(item => (
        <Label
          key={item.id || item.title}
          className={CL_NOTE_LABEL}
          clClose={CL_NOTE_LABEL_CLOSE}
          item={item}
          onRemove={onRemove
            ? onRemove.bind(null, item)
            : void 0
          }
        />
      ))
    }
  </div>
);

export default LabelList
