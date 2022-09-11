import styled from 'styled-components';
import Image from 'next/image';

export const GoogleLine = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  padding: 0 1rem;
  height: 100%;
  align-items: center;
  align-content: center;
  gap: 2rem;
`;
export const Card = styled.div`
  border: 1px solid #1f343e;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  gap: 16px;
  height: 80px;
  width: 312px;
`;

export const Title = styled.p`
  color: #f8f4f9;
  font-size: 16px;
  margin: 0;
`;
export const Main = styled.p`
  color: #f8f4f9;
  font-size: 20px;
  margin: 0;
  font-weight: bold;
`;

export const Logo = styled(Image)``;

export const Text = styled.div`
  margin: auto 0;
`;
