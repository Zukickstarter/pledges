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

  // NEED TO FIGURE OUT HOW TO PREVENT DEFAULT
  // clickHandler(event) {
  //   const { selected } = this.state;
  //   this.setState({ selected: !selected });

  //   event.preventDefault();
  // }

  renderView() {
    const { selected } = this.state;
    if (selected) {
      return (
        <div className="pledgeDropDownDiv">
          <div className="dropDownShippingDestDiv">
            Shipping Destination:
            <div>
              <input
                type="text"></input>
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
      )
    } else {
      return null;
    }
  }

  render() {
    const { selected } = this.state;
    console.log('selected: ', selected);
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
        {/* {this.renderView()} */}
        <div className="greenThing">
          <div className="greenThingText">
            select this reward
          </div>
        </div>
      </div>
    );
  };
};

export default SinglePledge;
