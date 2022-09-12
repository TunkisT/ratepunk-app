import styled from 'styled-components';

export const Inside = styled.div`
  padding: 12px 16px;
  display: flex;
  justify-content: space-between;
  max-width: 1120px;
  margin: 0 auto;
  height: 56px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Header = styled.header`
  border-bottom: 1px solid #1f343e;
`;
