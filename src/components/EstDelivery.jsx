import React from 'react';

const EstDelivery = (props) => {
  const { estDelivery } = props;
  return (
    <div className="pledgeEstDeliveryDiv">
      <div className="pledgeEstDeliveryTextDiv">
        ESTIMATED DELIVERY
      </div>
      <div className="pledgeEstDeliveryDateDiv">
        {estDelivery}
      </div>
  </div>
  );
};

export default EstDelivery;