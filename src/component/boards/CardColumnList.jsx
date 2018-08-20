import React from 'react'

import Card from '../zhn-card/Card'

const CL = "card__column-list";

const CardColumList = ({ columnIds, columns }) => {
  if (columnIds.length === 0) {
    return null;
  }
  return (
    <ul className={CL}>
      { columnIds.map(id => (
          <li key={id}>
            <span>
              {columns[id].title}
            </span>
            <Card.Counter
               value={columns[id].noteIds.length}
            />
          </li>
      ))}
    </ul>
  );
};

export default CardColumList
