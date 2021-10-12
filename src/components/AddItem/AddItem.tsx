import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, updateItem } from 'store/actions';
import './AddItem.scss';
import { ITemp } from './types';

const AddItem = () => {
  const [label, setLabel] = useState('');
  const [isActive, setIsActive] = useState(false);
  const refInput = useRef(null);
  const [isTemp, setIsTemp] = useState(false);

  const temp = useSelector((state: ITemp) => state.temp);

  useEffect(() => {
    if (temp.label) {
      setIsActive(true);
      setLabel(temp.label);
      setIsTemp(true);
    }
  }, [temp.label]);

  const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setLabel(e.target.value);
  };

  const dispatch = useDispatch();

  const onAdd = () => {
    if (label === '') {
      refInput.current.focus();
    } else {
      dispatch(addItem(
        {
          label,
          completed: false,
          id: Date.now(),
        },
      ));
      setLabel('');
    }
  };

  const onEdit = () => {
    console.log(100);
    dispatch(updateItem(
      {
        label,
        completed: false,
        id: temp.id,
      },
    ));
    setLabel('');
  };

  const onToggle = () => {
    setIsActive(!isActive);
    if (!isActive) {
      setLabel('');
      setIsTemp(false);
    }
  };

  return (
    <div>

      <div className={`add-item ${isActive ? 'active' : ''}`}>
        <input
          className="add-item__input"
          type="text"
          placeholder="Enter text"
          value={label}
          ref={refInput}
          onChange={onChange}
        />
        <button
          type="button"
          onClick={isTemp ? onEdit : onAdd}
          className="add-item__add"
        >
          <i className={`fas fa-${isTemp ? 'pencil-alt' : 'paper-plane'}`} />
        </button>
      </div>

      <button
        type="button"
        className="add-item__toggle"
        onClick={onToggle}
      >
        <i className={`fa fa-${isActive ? 'minus' : 'plus'}`} aria-hidden="true" />
      </button>

    </div>
  );
};

export default AddItem;
