import styled from 'styled-components';
import Image from 'next/image';

export const StepCard = styled.div`
  height: 607px;
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
  opacity: 1;
  font-size: 20px;
`;
export const Title = styled.p`
  letter-spacing: 0px;
  color: #1f343e;
  text-transform: uppercase;
  opacity: 1;
  font-size: 20px;
`;
export const Text = styled.p`
  letter-spacing: 0px;
  color: #1f343e;
  opacity: 1;
  font-size: 20px;
`;
