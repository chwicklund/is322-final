import React from 'react';
import { connect } from 'react-redux';

import BalanceItem from './balanceItem';

import { nextTurn, prevTurn } from '../actions';

function isCurrentTurn (currentTurn, index) {
  return currentTurn === index;
}

const BalanceList = (props) => {
  const { accounts, currentTurn } = props;

  const accountList = accounts
    .sort((a, b) => {
      return b.balance - a.balance;
    })
    .map((char, index) => {
      return (
        <BalanceItem key={index}
          name={char.name}
          balance={char.balance}
          isCurrentTurn={isCurrentTurn(currentTurn, index)}
       />
      );
    });

  return (
    <div className="card">
      <div className="d-flex justify-content-between align-items-center">
        <button
          type="button"
          className="btn btn-primary"
          onClick={props.prevTurn}>
          Previous
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={props.nextTurn}>
          Next
        </button>
      </div>

      <ul className="list-group">
        { accountList }
      </ul>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    accounts: state.accounts.accounts,
    currentTurn: state.turn.current,
  };
}

export default connect(mapStateToProps, { prevTurn, nextTurn })(BalanceList);