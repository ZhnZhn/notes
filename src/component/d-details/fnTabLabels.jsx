
const fnTabLabels = {
  toTitle: (str) => {
    if (typeof str !== 'string') {
      return '';
    }
    const _str = str.trim()
    if (_str && _str.length>1) {
      return _str[0].toUpperCase()+_str.substring(1).trim();
    }
    return _str;
  },

  addLabel: (prevState, title, color) => {
    const { labels } = prevState;
    if (!title
     || labels.find(item => item.title === title)) {
      return null;
    }
    return {
      labels: [ ...labels, {
        title,
        color
      }]
    };
  },

  removeLabel: (prevState, label) => ({
    labels: prevState.labels
      .filter(item => item.title !== label.title)
  })
};

export default fnTabLabels
