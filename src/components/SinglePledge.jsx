import React from 'react';
import styled from 'styled-components';
import MoneyInput from './MoneyInput.jsx';
import EstDelivery from './EstDelivery.jsx';


class SinglePledge extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: false
    }
  }
  // console.log('estDelivery: ', estDelivery);


  render() {
    const { selected } = this.state;
    const { pledge } = this.props;
    const { id, price, pledgeTitle, description, estDelivery, backers, listingId } = pledge;
    return (
      <div className="SinglePledgeComponentDiv">
        <div className="pledgePriceDiv">
          Pledge {price} or more
        </div>
        <div className="pledgeTitleDiv">
          {pledgeTitle}
        </div>
        <div className="pledgeDescriptionDiv">
          {description}
        </div>
        <EstDelivery estDelivery={estDelivery} />
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
          <MoneyInput />
          </div>
          <div className="dropDownContinueButton">
            <button className="continueButton">Continue</button>
          </div>
        </div>
      </div>
    );
  }
};

export default SinglePledge;
