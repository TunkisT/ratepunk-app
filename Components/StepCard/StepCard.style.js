import styled from 'styled-components';
import Image from 'next/image';
import '@fontsource/caveat-brush';

export const StepCard = styled.div`
  min-height: 669px;
  width: 45%;
  @media screen and (max-width: 768px) {
    width: 100%;
    gap: 48px;
  }
`;
export const ListCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-bottom: 64px;
  @media screen and (max-width: 768px) {
    align-items: center;
    flex-direction: column;
    margin-bottom: 48px;
    margin-top: 48px;
    text-align: center;
  }
`;
export const Logo = styled(Image)``;
export const Element = styled.div`
  width: 100%;
`;
export const Step = styled.p`
  letter-spacing: 1.6px;
  color: #4eb3e3;
  text-transform: uppercase;
  font-size: 20px;
  margin: 10px 0;
  @media screen and (max-width: 768px) {
    font-size: 16px;
    letter-spacing: 1.28px;
  }
`;
export const Title = styled.p`
  color: #1f343e;
  font-family: 'Caveat Brush';
  text-transform: uppercase;
  font-size: 32px;
  margin: 10px 0;
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;
export const Text = styled.p`
  color: #1f343e;
  font-size: 20px;
  margin: 10px 0;
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;
