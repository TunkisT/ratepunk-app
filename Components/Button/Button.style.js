import styled from 'styled-components';

export const Button = styled.button`
  background: ${({ color }) => (color ? color : 'inherit')};
  border-radius: 8px;
  border: 1px solid #1f343e;
  cursor: pointer;
  font-size: 20px;
  height: 64px;
  width: 100%;
  letter-spacing: 0px;
  color: #ffffff;
  margin-top: 1rem;
  margin-bottom: 153px;
`;
