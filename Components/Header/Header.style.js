import styled from 'styled-components';

export const Inside = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    margin: 0.1rem 0;
  }
`;

export const Header = styled.header`
  border-bottom: 1px solid #1f343e;
`;
