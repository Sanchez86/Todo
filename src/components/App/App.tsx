import React, { useState } from 'react';
import ListItems from '../ListItems';
import AddItem from '../AddItem';
import './App.scss';

function App() {
  return (
    <div className="todo">
      <ListItems />
      <AddItem />
    </div>
  );
}

export default App;
