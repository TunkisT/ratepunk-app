import css from './GoogleLine.module.sass';
import Image from 'next/image';
import Chrome from '../../assets/Chrome Icon.svg';
import Apple from '../../assets/Apple Store Icon.svg';

function GoogleLine() {
  return (
    <div className={css.googleLine}>
      <div className={css.card}>
        <Image height='52px' width='56px' src={Chrome} alt='chrome' />
        <div className={css.text}>
          <p className={css.title}>available in the</p>
          <p className={css.main}>chrome web store</p>
        </div>
      </div>
      <div className={css.card}>
        <Image height='52px' width='56px' src={Apple} alt='Apple' />
        <div className={css.text}>
          <p className={css.title}>available in the</p>
          <p className={css.main}>apple app store</p>
        </div>
      </div>
      <p className={css.cromeLine}>☆☆☆☆☆ Chrome Store reviews</p>
    </div>
  );
}

export default GoogleLine;
