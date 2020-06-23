import React from 'react';
import SinglePledge from './SinglePledge.jsx';

const PledgeList = (props) => {
  const { pledges } = props;
  return (
    <div className="PledgeListComponentDiv">
      {pledges.map((pledge, index) => <SinglePledge pledge={pledge} key={index}/>)}
    </div>
  );
};

export default PledgeList;