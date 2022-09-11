import styled from 'styled-components';
import Image from 'next/image';

export const GoogleLine = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  height: 100%;
  align-items: center;
  align-content: center;
  gap: 2rem;
`;
export const Card = styled.div`
  border: 1px solid #1f343e;
  border-radius: 16px;
  display: flex;
  justify-content: space-evenly;
  height: 80px;
  width: 312px;
`;

export const Logo = styled(Image)``;

export const Text = styled.div`
  /* justify-content: center; */
  /* align-items: center; */
`;
