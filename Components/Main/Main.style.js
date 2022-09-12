import styled from 'styled-components';

export const Main = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  align-items: center;
  display: flex;
  padding: 0 1rem;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
