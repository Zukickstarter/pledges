import React from 'react';
import styled from 'styled-components';
import MoneyInput from './MoneyInput.jsx';
import EstDelivery from './EstDelivery.jsx';
import ReactCSSTransitionGroup from 'react-transition-group';

class SinglePledge extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: false,
      hovered: false
    }
  }

  /**
   * changes this.state.hovered to true
   * @param {DOM element} target
   */
  showGreenOverlay(target) {
    const { selected, hovered } = this.state;
    this.setState({ hovered: true });
  }

  /**
   * changes this.state.hovered to false
   * @param {DOM element} target
   */
  hideGreenOverlay(target) {
    const { selected, hovered } = this.state;
    this.setState({ hovered: false });
  }

  /**
   * handles mouse-over functionality for any instance of this component
   * @param {event} event
   */
  handleMouseOver(event) {
    this.showGreenOverlay(event.target);
  }

  /**
   * handles mouse-leave functionality for any instance of this component
   * @param {event} event
   */
  handleMouseLeave(event) {
    this.hideGreenOverlay(event.target);
  }

  /**
   * checks if hovered but not yet selected.
   * if so, returns green overlay div.
   * css is used to have this div render on top of the entire component
   * click handler sets hovered to false and selected to true, ensuring that this.renderView() renders correctly
   */
  renderGreenOverlay() {
    const { hovered, selected } = this.state;
    if (hovered && !selected) {
      return (
          <div className="greenThing" onClick={() => {
            this.setState({ hovered: false, selected: true }); }}>
            <div className="greenThingText">
              select this reward
            </div>
          </div>
      )
    } else {
      return null;
    }
  }

  /**
   * checks if this.state.selected is true
   * if so, extends component to include a shipping destination text-input and a <MoneyInput /> component
   */
  renderView() {
    const { selected, hovered } = this.state;
    if (selected) {
      return (
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
      )
    } else {
      return null;
    }
  }

  render() {
    const { selected, hovered } = this.state;
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
