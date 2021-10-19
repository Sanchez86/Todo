import React from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import IDate from '../../interfaces';
import { IState } from './types';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const InfoItem = (match: any) => {
  const query = useQuery();

  const list:Array<IDate> = useSelector((state:IState) => state.data);
  // const item = list.filter((elem) => elem.id === taskId.id);
  const item = [1, 2];
  console.log('query', query.get('id'));
  console.log('match', match);

  return (
    <div>
      <p>hello</p>
      <div>
        {item.map((elem) => (<div className="item">{elem}</div>))}
      </div>
    </div>
  );
};

/* InfoItem.defaultProps = {
  match: {},
}; */

export default InfoItem;
