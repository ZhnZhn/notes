const crId = (prefix='a') => {
  const id = (
    Date.now().toString(36) +
    Math.random().toString(36).substr(2, 9)
  ).toUpperCase().substr(12);
  return `${prefix}-${id}`;
}

export default crId
