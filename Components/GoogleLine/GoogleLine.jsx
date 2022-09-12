import Chrome from '../../assets/Chrome Icon.svg';
import Apple from '../../assets/Apple Store Icon.svg';
import css from './GoogleLine.module.scss';
import Image from 'next/image';

function GoogleLine() {
  return (
    <div className={css.googleLine}>
      <div className={css.card}>
        <Image height='52px' width='56px' src={Chrome} alt='chrome' />
        <p className={css.text}>
          <p className={css.title}>available in the</p>
          <p className={css.main}>chrome web store</p>
        </p>
      </div>
      <div className={css.card}>
        <Image height='52px' width='56px' src={Apple} alt='Apple' />
        <p className={css.text}>
          <p className={css.title}>available in the</p>
          <p className={css.main}>apple app store</p>
        </p>
      </div>
      <p className={css.text}>
        <p>☆☆☆☆☆ Chrome Store reviews</p>
      </p>
    </div>
  );
}

export default GoogleLine;
