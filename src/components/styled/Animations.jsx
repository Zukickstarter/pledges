import styled, { keyframes } from 'styled-components';
import { fadeIn, fadeOut, slideInDown } from 'react-animations';

const fadeInAnimation = keyframes`${fadeIn}`;
const fadeOutAnimation = keyframes`${fadeOut}`;
const slideInDownAnimation = keyframes`${slideInDown}`;


export const FadeInDiv = styled.div`
  animation: .5s ${fadeInAnimation};
`;

export const FadeOutDiv = styled.div`
  animation: .5s ${fadeOutAnimation};
`;

export const SlideInDownDiv = styled.div`
  animation: .5s ${slideInDownAnimation};
  z-index: -1;
`;

