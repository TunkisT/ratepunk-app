import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

export const Footer = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1120px;
  padding: 0 1rem;
`;

export const First = styled.div`
  width: 50%;
`;

export const Second = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  justify-content: center;
  margin-bottom: 58px;
  margin-top: 64px;
  width: 50%;
`;

export const Small = styled.div`
  width: 40%;
`;
export const Contacts = styled.div``;
export const Titles = styled.p`
  text-align: left;
  letter-spacing: 1.6px;
  font-size: 20px;
  color: #1f343e;
  text-transform: uppercase;
  opacity: 1;
`;
export const Links = styled(Link)`
  color: red;
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
