import React from 'react';
import { Link } from 'react-router-dom';
import IDate from 'interfaces';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from 'store/actions';

const Item = ({ id, label, completed }: IDate) => {
  const isActive: string = completed ? 'active' : '';

  const dispatch = useDispatch();

  const onRemove = (idItem: number) => {
    dispatch(removeItem(idItem));
  };

  return (
    <li className={`todo-list__item ${isActive}`}>
      <div className="d-flex">
        <button type="button" className="todo-list__done">
          <i className="fas fa-check-circle" />
        </button>
        <Link to={`/tasks/${id}`} className="todo-list__label">{label}</Link>
      </div>
      <button
        type="button"
        className="todo-list__remove"
        onClick={() => onRemove(id)}
      >
        <i className="fas fa-trash" />
      </button>
    </li>
  );
};

export default Item;
