import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from 'store/actions';
import './AddItem.scss';

const AddItem = () => {
  const [label, setLabel] = useState('');
  const [active, setActive] = useState(false);
  const refInput = useRef(null);

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

  const onToggle = () => {
    setActive(!active);
  };

  const isActive = active ? 'active' : '';
  const isActivePlus = active ? 'minus' : 'plus';

  return (
    <div>

      <div className={`add-item ${isActive}`}>
        <input
          className="add-item__input"
          type="text"
          placeholder="Enter text"
          value={label}
          ref={refInput}
          onChange={(e:React.ChangeEvent<HTMLInputElement>) => onChange(e)}
        />
        <button
          type="button"
          onClick={onAdd}
          className="add-item__add"
        >
          <i className="fas fa-paper-plane" />
        </button>
      </div>

      <button
        type="button"
        className="add-item__toggle"
        onClick={onToggle}
      >
        <i className={`fa fa-${isActivePlus}`} aria-hidden="true" />
      </button>

    </div>
  );
};

export default AddItem;
