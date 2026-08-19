const S_KEY = {
  textDecoration: 'underline'
};

const _crAccessKeyIndex = (
  accessKey,
  caption
) => accessKey
  ? caption.toLowerCase().indexOf(accessKey)
  : -1;

const _crCaption = (
  accessKey,
  caption
) => {
  const index = _crAccessKeyIndex(accessKey, caption);
  if (index === -1) { return caption; }

  const _before = caption.slice(0, index)
  , _key = caption.slice(index, index + 1)
  , _after = caption.slice(index + 1);
  return (
    <>
     <span>{_before}</span>
     <span style={S_KEY}>{_key}</span>
     <span>{_after}</span>
    </>
  );
};

const CaptionInput = (
  props
) => props.caption ? (
  <span className={props.className}>
    {_crCaption(props.accessKey, props.caption)}
    {props.children}
  </span>
) : null;

export default CaptionInput
