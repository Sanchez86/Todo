import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ListItems from '../ListItems';
import AddItem from '../AddItem';
import './App.scss';
import InfoItem from '../InfoItem';

function App() {
  return (
    <div className="todo">
      <Switch>
        <Route path="/" exact>
          <ListItems />
          <AddItem />
        </Route>

        <Route path="/tasks" render={(props) => <InfoItem {...props} />} />
      </Switch>

    </div>
  );
}
export default App;
