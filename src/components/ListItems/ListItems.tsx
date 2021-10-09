import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import data from '../../utils/db.json';
import { setData } from '../../store/actions';

const ListItems = () => {
  const dispatch = useDispatch();
  interface IDate {
    'id': number,
    'completed': boolean,
    'label': string
  }
  interface IState {
    data: Array<IDate>;
  }
  useEffect(() => {
    dispatch(setData(data));
  }, []);
  const list:Array<IDate> = useSelector((state:IState) => state.data);
  return (
    <ul>
      {
        list.map((item) => (
          <li key={item.id} className="item">
            <div className="label">{item.label}</div>
          </li>
        ))
      }
    </ul>
  );
};

export default ListItems;
