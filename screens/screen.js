import React from 'react';
import ItemContainer from '../components/item-container';

function Screen({instruments}) {
  return (
      <ItemContainer items={instruments}/>
  );
};

export default Screen;