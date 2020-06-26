import styled from 'styled-components';


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
  text-align: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

