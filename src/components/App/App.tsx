import React, { useState } from 'react';
import ListItems from '../ListItems';
import './App.scss';
import AddItem from '../AddItem';

function App() {
  return (
    <div className="todo">
      <ListItems />
      <AddItem />
    </div>
  );
}

export default App;
