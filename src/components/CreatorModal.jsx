import React from 'react';
import {
  CreatorModalStyling,
  AboutTheCreatorDiv,
  DataWrapper,
  NameDiv,
  LocationDiv,
  DescriptionDiv,
  BottomSectionDiv,
  WebsiteDiv,
  CollaboratorsDiv,
  SingleCollaborator
} from './styled/CreatorModalStyles.jsx';


const CreatorModal = ({ creator, collaborators }) => {
  const { totalBackers, imageURL, description, name, location, website } = creator;
  const avatarStyle = { borderRadius: "50%", width: "10%", height: "10%" };
  return (
    <CreatorModalStyling>
      <AboutTheCreatorDiv>
        About the creator
      </AboutTheCreatorDiv>
      <DataWrapper>
        <NameDiv>
          {name}
        </NameDiv>
        <LocationDiv>
          {location}
        </LocationDiv>
        <DescriptionDiv>
          {description.repeat(4)}
        </DescriptionDiv>
        <WebsiteDiv>
          {website}
        </WebsiteDiv>
        <BottomSectionDiv>
          <CollaboratorsDiv>
            {collaborators.map((item, index) => {
              let { name, imageURL } = item;
              return (
                <SingleCollaborator key={index} >
                  <img src={imageURL} style={avatarStyle} />
                  <div>{name}</div>
                </SingleCollaborator>
              );
            })}
          </CollaboratorsDiv>
        </BottomSectionDiv>
      </DataWrapper>
    </CreatorModalStyling>
  );
};

export default CreatorModal;