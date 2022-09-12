import styled from 'styled-components';
import '@fontsource/caveat-brush';

export const Card = styled.div`
  border-radius: 16px;
  border: 1px solid #1f343e;
  background: #f8f4f9;
  min-height: 797px;
  padding: 64px;
  width: 50%;
  /* display: flex; */
  /* flex-direction: column; */
  /* justify-content: space-evenly; */
`;
export const Title = styled.h2`
  font-family: 'Caveat Brush';
  text-align: left;
  letter-spacing: 0px;
  font-style: normal;
  font-size: 48px;
  line-height: 72px;
  color: #1f343e;
  text-transform: uppercase;
  margin: 0;
`;
export const Text = styled.p`
  text-align: left;
  letter-spacing: 0px;
  color: #1f343e;
  margin: 0;
`;
