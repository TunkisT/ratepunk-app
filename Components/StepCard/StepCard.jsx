import css from './StepCard.module.sass';
import Image from 'next/image';
import Invite from '../../assets/Invite Friends Img.svg';
import Collect from '../../assets/Collect coins img.svg';
import Voucher from '../../assets/Get voucher img.svg';

function StepCard() {
  return (
    <div className={css.stepCard}>
      <div className={css.listCard}>
        <Image height='125px' width='128px' src={Invite} alt='mail' />
        <div className={css.element}>
          <p className={css.step}>step 1</p>
          <p className={css.title}>invite friends</p>
          <p className={css.text}>Refer friends with your unique referral link.</p>
        </div>
      </div>
      <div className={css.listCard2}>
        <div className={css.element}>
          <p className={css.step}>step 2</p>
          <p className={css.title}>collect coins</p>
          <p className={css.text}>
            Get 1 coin for each friend that installs our extension using your
            referral link.
          </p>
        </div>
        <Image height='125px' width='128px' src={Collect} alt='coins' />
      </div>
      <div className={css.listCard}>
        <Image height='125px' width='128px' src={Voucher} alt='voucher' />
        <div className={css.element}>
          <p className={css.step}>step 3</p>
          <p className={css.title}>get voucher</p>
          <p className={css.text}>
            Redeem for a $20 hotel booking voucher once you collect 20 coins.
          </p>
        </div>
      </div>
    </div>
  );
}

export default StepCard;
