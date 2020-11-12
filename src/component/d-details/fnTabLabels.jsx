
const fnTabLabels = {
  toTitle: (str) => {
    if (typeof str !== 'string') {
      return '';
    }
    const _str = str.trim();
    return (_str && _str.length>0)
      ? _str[0].toUpperCase()+_str.slice(1)
      : _str
  },

  addLabel: (labels, title, color) => {
    if (!title
     || labels.find(item => item.title === title)) {
      return labels;
    }
    return labels.concat({ title, color });
  },

  removeLabel: (labels, label) => labels
    .filter(item => item.title !== label.title)

};

export default fnTabLabels
