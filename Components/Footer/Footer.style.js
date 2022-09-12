import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

export const Footer = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1120px;
  padding: 0 1rem;
  margin-bottom: 58px;
  margin-top: 64px;
  gap: 4rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
  
`;

export const First = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 50%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Second = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 50%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Small = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const Contacts = styled.div`
@media screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const Titles = styled.p`
  text-align: left;
  letter-spacing: 1.6px;
  font-size: 20px;
  color: #1f343e;
  text-transform: uppercase;
  padding: 0 0 14px 0;
  margin: 0;
`;
export const Links = styled(Link)`
  color: red;
  padding: 1rem;
  margin: 1rem;
`;

export const Social = styled(Image)`
  background: #4eb3e3;
`;

export const Icon = styled.div`
  background: #4eb3e3;
  border: 1px solid #1f343e;
  border-radius: 8px;
  height: 32px;
  width: 32px;
  display: flex;
  justify-content: center;
  margin: 4px;
`;

export const IconList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
