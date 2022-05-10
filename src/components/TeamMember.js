import React from 'react';

const Account = (props) => {
  return (
    <li className='list-group-item'
        key={props.index}>
      { props.account.name }
      <button
        type="button"
        className="btn btn-danger float-right"
        onClick={() => props.account.type = "enemy"}
        onClick={() => props.removeAccount(props.account.id)}

      >
        Delete
      </button>
    </li>
  );
};

export default Account;