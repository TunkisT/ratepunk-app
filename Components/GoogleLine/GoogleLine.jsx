import React from 'react';
import * as S from './GoogleLine.style';
import Chrome from '../../assets/Chrome Icon.svg';
import Apple from '../../assets/Apple Store Icon.svg';

function GoogleLine() {
  return (
    <S.GoogleLine>
      <S.Card>
        <S.Logo height='26px' width='48px' src={Chrome} alt='chrome' />
        <S.Text>
          <p>available in the</p>
          <p>chrome web store</p>
        </S.Text>
      </S.Card>
      <S.Card>
        <S.Logo height='26px' width='48px' src={Apple} alt='Apple' />
        <S.Text>
          <p>available in the</p>
          <p>apple app store</p>
        </S.Text>
      </S.Card>
      <S.Text>
        <p>☆☆☆☆☆ Chrome Store reviews</p>
      </S.Text>
    </S.GoogleLine>
  );
}

export default GoogleLine;
