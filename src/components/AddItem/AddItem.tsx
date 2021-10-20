import React, {
  useEffect,
  useRef,
  useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, updateItem } from 'store/actions';
import { ITemp } from './types';
import './AddItem.scss';

const AddItem = () => {
  const [label, setLabel] = useState('');
  const [isActive, setIsActive] = useState(false);
  const refInput = useRef(null);
  const [isTemp, setIsTemp] = useState(false);

  const temp = useSelector((state: ITemp) => state.temp);

  useEffect(() => {
    if (temp) {
      setIsActive(true);
      setLabel(temp.label);
      setIsTemp(true);
    }
  }, [temp]);

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
    dispatch(updateItem(
      {
        label,
        completed: false,
        id: temp.id,
      },
    ));

    setLabel('');
    setIsActive(false);
  };

  const onClose = (e: any) => {
    if (e.code === 'Enter') {
      if (isTemp) {
        onEdit();
      } else {
        onAdd();
      }
    }
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
          onKeyPress={onClose}
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
