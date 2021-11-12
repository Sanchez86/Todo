import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import IDate from 'interfaces';
import { loadTodosRequest } from 'store/actions/load-todos';
import { IState } from './types';
import Item from '../Item';

import './ListItems.scss';

const ListItems: React.FC = () => {
  const dispatch = useDispatch();
  const list:Array<IDate> = useSelector((state:IState) => state.data);

  const listIsCompleted = list.filter((item) => item.completed);
  const listIsNotCompleted = list.filter((item) => !item.completed);

  useEffect(() => {
    dispatch(loadTodosRequest());
  }, [dispatch]);

  return (
    <>
      <ul className="todo-list">
        {
          listIsCompleted.map((item) => (
            <Item
              key={item.id}
              id={item.id}
              title={item.title}
              completed={item.completed}
            />
          ))
        }
      </ul>
      <h2 className="todo-list__h2">
        Remaining tasks
        <span>
          &nbsp;
          (
          {listIsNotCompleted.length}
          )
        </span>
      </h2>
      <ul className="todo-list">
        {
          listIsNotCompleted.map((item) => (
            <Item
              key={item.id}
              id={item.id}
              title={item.title}
              completed={item.completed}
            />
          ))
        }
      </ul>
    </>
  );
};

export default ListItems;
