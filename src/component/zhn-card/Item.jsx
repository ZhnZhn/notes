import React from 'react'

import CL from '../style/cl'

const Item = ({ children }) => (
  <section className={CL.ITEM_CARD}>
    {children}
  </section>
);

export default Item
