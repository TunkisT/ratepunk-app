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
          <S.Step>step 2</S.Step>
          <S.Title>collect coins</S.Title>
          <S.Text>
            Get 1 coin for each friend that installs our extension using your
            referral link.
          </S.Text>
        </S.Element>
        <S.Logo height='125px' width='128px' src={Collect} alt='coins' />
      </S.ListCard>
      <S.ListCard>
        <S.Logo height='125px' width='128px' src={Voucher} alt='voucher' />
        <S.Element>
          <S.Step>step 3</S.Step>
          <S.Title>get voucher</S.Title>
          <S.Text>
            Redeem for a $20 hotel booking voucher once you collect 20 coins.
          </S.Text>
        </S.Element>
      </S.ListCard>
    </S.StepCard>
  );
}

export default StepCard;
