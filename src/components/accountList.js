import React from 'react';
import { connect } from 'react-redux';

import TeamMember from './TeamMember';
import AddPlayer from './addChecking';

import { removeAccount } from '../actions';

class AccountList extends React.Component {

  onRemoveAccount = (id) => {
    this.props.removeAccount(id);
  }

  render() {
    const { title, accountType } = this.props;

    const accountArr = this.props[this.props.stateList];
    const accountList = accountArr.map((account, index) => {
      return (
        <TeamMember
          key={index}
          index={index}
          account={account}
          removeAccount={this.onRemoveAccount}
        />
      );
    });
    return (
      <div className="card">
        <h3>{title} List</h3>
        <AddPlayer accountType={accountType} />
        <ul className="list-group">
          { accountList }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    checking: state.accounts.checking,
  };
};

export default connect(mapStateToProps, { removeAccount })(AccountList);