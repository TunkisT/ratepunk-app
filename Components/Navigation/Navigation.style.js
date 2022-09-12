import styled from 'styled-components';

// export const Navi = styled.nav`
//   display: flex;
//   justify-content: space-between;
//   @media screen and (max-width: 768px) {
//     flex-direction: column;
//     align-items: center;

//   }
// `;
export const Label = styled.label`
  cursor: pointer;
  width: 50px;
  height: 50px;
  display: block;
  border: none;
  padding: 0px;
  margin: 20px;
  background: linear-gradient(
    to bottom,
    #3d0e61,
    #3d0e61 20%,
    white 20%,
    white 40%,
    #3d0e61 40%,
    #3d0e61 60%,
    white 60%,
    white 80%,
    #3d0e61 80%,
    #3d0e61 100%
  );
`;

export const Navi = styled.nav`
  visibility: hidden;
  position: fixed;
  top: 0;
  left: -250px;
  width: 200px;
  height: 100%;
  background-color: #3d0e61;
  padding: 0px 10px;
  box-sizing: border-box;
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
