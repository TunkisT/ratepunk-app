import styled from 'styled-components';
import Image from 'next/image';
import '@fontsource/caveat-brush';

export const StepCard = styled.div`
  height: 797px;
  width: 45%;

`;
export const ListCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;
export const Logo = styled(Image)``;
export const Element = styled.div`
  width: 50%;
`;
export const Step = styled.p`
  letter-spacing: 1.6px;
  color: #4eb3e3;
  text-transform: uppercase;
  font-size: 20px;
`;
export const Title = styled.p`
  color: #1f343e;
  font-family: 'Caveat Brush';
  text-transform: uppercase;
  font-size: 32px;
`;
export const Text = styled.p`
  color: #1f343e;
  font-size: 20px;
`;
