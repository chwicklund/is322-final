import React from 'react';

import AccountList from "./accountList";
import BalanceList from "./balanceList";

const App = () => {
  return (
      <div className="container">
        <div className="row">

          <div className="col-sm-6">
            <AccountList title="Checking"
                      stateList="checking"
                      characterType="check"
            />
          </div>

          <div className="col-sm-6">
            <BalanceList />
          </div>


        </div>
      </div>
  );
};

export default App;