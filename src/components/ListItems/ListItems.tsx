import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setData } from 'store/actions';
import IDate from 'interfaces';
import data from 'utils/db.json';
import { IState } from './types';
import Item from '../Item';

import './ListItems.scss';

const ListItems = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const lsData = localStorage.getItem('data');

    if (lsData) {
      localStorage.setItem('data', lsData);
      dispatch(setData(JSON.parse(lsData).data));
    } else {
      localStorage.setItem('data', JSON.stringify(data));
      dispatch(setData(data));
    }
  }, []);

  const list:Array<IDate> = useSelector((state:IState) => state.data);

  const listIsCompleted = list.filter((item) => item.completed);
  const listIsNotCompleted = list.filter((item) => !item.completed);

  const tasks = listIsNotCompleted.length;

  return (
    <>
      <ul className="todo-list">
        {
          listIsCompleted.map((item) => (
            <Item
              id={item.id}
              label={item.label}
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
          {tasks}
          )
        </span>
      </h2>
      <ul className="todo-list">
        {
          listIsNotCompleted.map((item) => (
            <Item id={item.id} label={item.label} completed={item.completed} />
          ))
        }
      </ul>
    </>
  );
};

export default ListItems;
