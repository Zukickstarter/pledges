import React from 'react';

const MoneyInput = (props) => {
  const {  } = props;
  return (
    <div className="MoneyInputComponentDiv">
      <span className="moneySignDiv">$</span>
      <div className="moneyInputDiv">
        <input type="text"></input>
      </div>
    </div>
  );
};

export default MoneyInput;