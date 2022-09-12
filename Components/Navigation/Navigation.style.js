import styled from 'styled-components';

export const Navi = styled.nav`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Navigate = styled.a`
  border-radius: 0.3rem;
  border: 0;
  font-size: 20px;
  color: #434a54;
  padding: 0.3rem 2rem;
  text-decoration: 0;
  :hover {
    color: black;
    transition: 0.5s;
  }
`;
