import styled from 'styled-components';

export const Navi = styled.nav`
  display: flex;
  justify-content: space-between;
`;

export const Navigate = styled.a`
  border-radius: 0.3rem;
  border: 0;
  font-size: 20px;
  color: #434a54;
  padding: 0.3rem 2rem;
  text-decoration: 0;
  :hover {
    background: grey;
    color: white;
    transition: 0.5s;
  }
`;
