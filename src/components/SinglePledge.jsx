import React from 'react';
import styled from 'styled-components';

const PledgeBox = styled.div`
  text-align: center;
  font-family: Ariel;
`;

const SinglePledge = (props) => {
  const { pledge } = props;
  const { id, price, pledgeTitle, description, estDelivery, backers, listingId } = pledge;
  return (
  <PledgeBox>
    <div>
      ID: {id}
    </div>
    <div>
      PRICE: {price}
    </div>
    <div>
      TITLE: {pledgeTitle}
    </div>
  </PledgeBox>
  );
};

export default SinglePledge;