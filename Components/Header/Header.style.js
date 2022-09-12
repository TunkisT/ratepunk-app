import styled from 'styled-components';

export const Inside = styled.div`
  padding: 1rem ;
  display: flex;
  justify-content: space-between;
  max-width: 1120px;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Header = styled.header`
  border-bottom: 1px solid #1f343e;
`;
