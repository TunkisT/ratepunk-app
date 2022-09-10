import Image from 'next/image';
import React from 'react';
import * as S from './StepCard.style';
import Invite from '../../assets/Invite Friends Img.svg';
import Collect from '../../assets/Collect coins img.svg';
import Voucher from '../../assets/Get voucher img.svg';

function StepCard() {
  return (
    <S.StepCard>
      <S.ListCard>
        <S.Logo height='125px' width='128px' src={Invite} alt='mail' />
        <S.Element>
          <S.Step>step 1</S.Step>
          <S.Title>invite friends</S.Title>
          <S.Text>Refer friends with your unique referral link.</S.Text>
        </S.Element>
      </S.ListCard>
      <S.ListCard>
        <S.Element>
          <S.Step>step 1</S.Step>
          <S.Title>invite friends</S.Title>
          <S.Text>Refer friends with your unique referral link.</S.Text>
        </S.Element>
        <S.Logo height='125px' width='128px' src={Collect} alt='mail' />
      </S.ListCard>
      <S.ListCard>
        <S.Logo height='125px' width='128px' src={Voucher} alt='mail' />
        <S.Element>
          <S.Step>step 1</S.Step>
          <S.Title>invite friends</S.Title>
          <S.Text>Refer friends with your unique referral link.</S.Text>
        </S.Element>
      </S.ListCard>
    </S.StepCard>
  );
}

export default StepCard;
