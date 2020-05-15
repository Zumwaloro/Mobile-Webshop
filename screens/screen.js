import React from 'react';
import ItemContainer from '../components/item-container';

function Screen({instruments, action}) {
  return (
      <ItemContainer items={instruments} handler={action}/>
  );
};

export default Screen;