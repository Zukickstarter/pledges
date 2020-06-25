import React from 'react';
import styled from 'styled-components';
import MoneyInput from './MoneyInput.jsx';
import EstDelivery from './EstDelivery.jsx';


class SinglePledge extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: false,
      hovered: false
    }
  }

  showGreenOverlay(target) {
    const { selected, hovered } = this.state;
    // console.log('showGreenThing firing on target: ', target);
    this.setState({ hovered: true });
  }

  hideGreenOverlay(target) {
    const { selected, hovered } = this.state;
    // console.log('hideGreenThing firing on target: ', target);
    this.setState({ hovered: false });
  }

  handleMouseOver(event) {
    // console.log('handleMouseOver firing with target: ', event.target);
    this.showGreenOverlay(event.target);
  }

  handleMouseLeave(event) {
    // console.log('handleMouseLeave firing with target: ', event.target);
    this.hideGreenOverlay(event.target);
  }

  renderGreenOverlay() {
    const { hovered } = this.state;
    if (hovered) {
      return (
        <div className="greenThing">
          <div className="greenThingText">
            select this reward
          </div>
        </div>
      )
    } else {
      return null;
    }
  }

  renderView() {
    const { selected, hovered } = this.state;
    console.log('selected: ', selected);
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
    const { selected, hovered } = this.state;
    console.log('selected: ', selected);
    const { pledge } = this.props;
    const { id, price, pledgeTitle, description, estDelivery, backers, listingId } = pledge;
    return (
      <div
        className="SinglePledgeComponentDiv"
        onMouseOver={(event) => {
          this.handleMouseOver(event);
        }}
        onMouseLeave={(event) => {
          this.handleMouseLeave(event);
        }} >
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
        {this.renderGreenOverlay()}
      </div>
    );
  };
};

export default SinglePledge;
