import React from 'react';
import styled from 'styled-components';

// const PledgeBox = styled.div`
//   text-align: center;
//   font-family: Arial;
// `;

const SinglePledge = (props) => {
  const { pledge } = props;
  const { id, price, pledgeTitle, description, estDelivery, backers, listingId } = pledge;
  return (
  <div className="pledgeBox">
    <div className="pledgePriceDiv">
      Pledge {price} or more.
    </div>
    <div className="pledgeTitleDiv">
      {pledgeTitle}
    </div>
    <div className="pledgeDescriptionDiv">
      {description}
    </div>
    <div className="pledgeEstDeliveryDiv">
      estimated delivery: {estDelivery}
    </div>
    <div className="pledgeBackersDiv">
      backers: {backers}
    </div>
    <div className="pledgeDropDownDiv">
      <div className="dropDownShippingDestDiv">
        Shipping Destination:
        <div>
          <input type="text"></input>
        </div>
      </div>
      <div className="dropDownPledgeAmountDiv">
        Pledge Amount
        <div>
          <input type="text"></input>
        </div>
      </div>
      <div className="dropDownContinueButton">
        <button>Continue</button>
      </div>
    </div>
  </div>
  );
};

export default SinglePledge;
