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
    this.setState({ hovered: true });
  }

  hideGreenOverlay(target) {
    const { selected, hovered } = this.state;
    this.setState({ hovered: false });
  }

  handleMouseOver(event) {
    this.showGreenOverlay(event.target);
  }

  handleMouseLeave(event) {
    this.hideGreenOverlay(event.target);
  }

  renderGreenOverlay() {
    const { hovered, selected } = this.state;
    if (hovered && !selected) {
      return (
        <div className="greenThing" onClick={() => {
          this.setState({ hovered: false, selected: true });
        }}>
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
        {this.renderGreenOverlay()}
        {this.renderView()}
      </div>
    );
  };
};

export default SinglePledge;
