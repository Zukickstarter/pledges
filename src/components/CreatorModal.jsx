import React from 'react';
import { CreatorModalStyling, AboutTheCreatorDiv } from './styled/CreatorModalStyles.jsx';

/*
name - big bold
location - x-small
description - paragraph normal size
website - normal

*/
const CreatorModal = ({ creator, collaborators }) => {
  console.log('creator: ', creator);
  console.log('collaborators: ', collaborators);
  const { totalBackers, imageURL, description, name, location, website } = creator;
  return (
    <CreatorModalStyling>
      <AboutTheCreatorDiv>
        About the creator
      </AboutTheCreatorDiv>

    </CreatorModalStyling>
  );
};

export default CreatorModal;