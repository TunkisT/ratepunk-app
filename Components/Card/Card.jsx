import React from 'react';
import * as S from './Card.style';

function Card({ title, text }) {
  return (
    <S.Card>
      <S.Title>{title}</S.Title>
      <S.Text>{text}</S.Text>
    </S.Card>
  );
}

export default Card;
