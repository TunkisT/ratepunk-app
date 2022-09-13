import css from './Navigation.module.sass';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../assets/Group 12.svg';

function Navigation() {
  return (
    <>
      <section className={css.topNav}>
        <Image src={Logo} alt='ratepunk' />
        <input id='menu-toggle' className={css.menuToggle} type='checkbox' />
        <label className={css.menuButtonContainer} htmlFor='menu-toggle'>
          <div className={css.menuButton}></div>
        </label>
        <ul className={css.menu}>
          <li>
            <Link href='/'>Chrome Extension</Link>
          </li>
          <li>
            <Link href='/'>Price Comparison</Link>
          </li>
          <li>
            <Link href='/'>Blog</Link>
          </li>
        </ul>
      </section>
    </>
  );
}

export default Navigation;
