
const Svg = ({
  w,
  h=w,
  width,
  height,
  children
}) => (
  <svg
    aria-hidden="true"
    focusable="fasle"
    role="img"
    viewBox={`0 0 ${w} ${h}`}
    width={width || w}
    height={height || h}
    preserveAspectRatio="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {children}
  </svg>
)

export default Svg
