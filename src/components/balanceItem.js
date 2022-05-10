import React from 'react';

const BalanceItem = (props) => {
  const { name, balance, isCurrentTurn } = props;

  let classNames = 'list-group-item d-flex justify-content-between align-items-center';

  if (isCurrentTurn) {
    classNames = classNames.concat(' active');
  }

  return (
    <li className={classNames}>
      { name }
      <span className="badge badge-primary badge-pull">
        { balance }
      </span>
    </li>
  );
};

export default BalanceItem;
