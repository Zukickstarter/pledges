import styled, { keyframes } from 'styled-components';
import { bounce } from 'react-animations';

const bounceAnimation = keyframes`${bounce}`;

export const WholePageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 70%;
  height: 100%;
  width: 100%;
  background-color: white;
  z-index: 1;
`;

export const ModalWrapper = styled.div`
  display: flex;
  position: absolute;
  top: 10%;
  left: 25%;
  height: 70%;
  width: 50%;
`;

export const CreatorModalStyling = styled.div`
  border: 1px solid grey;
  border-radius: 1%;
  background-color: white;
  z-index: 2;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
`;

export const BouncyDiv = styled.div`
  animation: 1s ${bounceAnimation};
`;

export const AboutTheCreatorDiv = styled.div`
  padding: 2%;
  text-align: center;
`;

export const DataWrapper = styled.div`
  // border: 1px solid grey;
  margin-top: 10%;
  padding-left: 5%;
  padding-right: 5%;
`;

export const NameDiv = styled.div`
  font-size: 1.5em;
  font-weight: bold;
`;

export const LocationDiv = styled.div`
  font-size: small;
`;

export const DescriptionDiv = styled.div`
  margin-top: 10%;
`;

export const WebsiteDiv = styled.div`
  margin-top: 10%;
`;

export const BottomSectionDiv = styled.div`
  padding-top; 10%
  display: flex;
  justify-content: space-evenly;
`;

export const CollaboratorsDiv = styled.div`
  padding-top: 10%;
`;

export const CollaboratorsTitleDiv = styled.div`
  font-size: large;
  font-weight: bold;
`;

export const SingleCollaborator = styled.div`
  display: flex;
  justify-content: left;
  font-size: small;
  padding: 1%;
  align-items: center;
`;

