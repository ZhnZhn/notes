import { isStr } from '../../utils/isTypeFn';

export const toTitle = (str) => {
  if (!isStr(str)) {
    return '';
  }
  const _str = str.trim();
  return (_str && _str.length>0)
    ? _str[0].toUpperCase()+_str.slice(1)
    : _str
}

export const addLabel = (
  labels,
  title,
  color
) => {
  if (!title
   || labels.find(item => item.title === title)) {
    return labels;
  }
  return labels.concat({ title, color });
}

export const removeLabel = (
  labels,
  label
) => labels
 .filter(item => item.title !== label.title)
