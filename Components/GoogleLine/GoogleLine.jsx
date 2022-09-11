import React from 'react';
import * as S from './GoogleLine.style';
import Chrome from '../../assets/Chrome Icon.svg';
import Apple from '../../assets/Apple Store Icon.svg';

function GoogleLine() {
  return (
    <S.GoogleLine>
      <S.Card>
        <S.Logo height='52px' width='56px' src={Chrome} alt='chrome' />
        <S.Text>
          <S.Title>available in the</S.Title>
          <S.Main>chrome web store</S.Main>
        </S.Text>
      </S.Card>
      <S.Card>
        <S.Logo height='52px' width='56px' src={Apple} alt='Apple' />
        <S.Text>
          <S.Title>available in the</S.Title>
          <S.Main>apple app store</S.Main>
        </S.Text>
      </S.Card>
      <S.Text>
        <p>☆☆☆☆☆ Chrome Store reviews</p>
      </S.Text>
    </S.GoogleLine>
  );
}

export default GoogleLine;
