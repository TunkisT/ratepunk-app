import css from './Footer.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../assets/Group 12.svg';
import Instagram from '../../assets/Icon awesome-instagram.svg';
import Facebook from '../../assets/Icon awesome-facebook-f.svg';
import LinkedIn from '../../assets/Icon awesome-linkedin-in.svg';
import Twitter from '../../assets/Icon awesome-twitter.svg';
import TikTok from '../../assets/Icon simple-tiktok.svg';

function Footer() {
  return (
    <div className={css.footer}>
      <div className={css.first}>
        <Image src={Logo} alt='ratepunk' />
        <p className={css.firstBody}>
          Ratepunk compares hotel room prices across the major online travel
          agencies. When you search for a room, Ratepunk extension scans the top
          booking sites and runs a price comparison, so you can be confident in
          knowing you’re getting the best deal!
        </p>
        <p className={css.rights}>© 2021 Ratepunk. All Rights Reserved.</p>
      </div>
      <div className={css.second}>
        <div className={css.small}>
          <p className={css.titles}> QUICK LINKS</p>
          <div>
            <Link href='#'>Price Comparison</Link>
            <Link href='#'>Chrome Extension</Link>
            <Link href='#'>How It Works</Link>
            <Link href='#'>Ratepunk Blog</Link>
            <Link href='#'>Privacy Policy</Link>
          </div>
        </div>
        <div className={css.small}>
          <div className={css.contacts}>
            <p className={css.titles}>CONTACT</p>
            <p>hi@ratepunk.com</p>
          </div>
          <div className={css.contacts}>
            <p className={css.titles}>SOCIAL</p>
            <div className={css.iconList}>
              <div className={css.icon}>
                <Image src={Instagram} alt='Instagram' />
              </div>
              <div className={css.icon}>
                <Image src={Facebook} alt='Facebook' />
              </div>
              <div className={css.icon}>
                <Image src={LinkedIn} alt='LinkedIn' />
              </div>
              <div className={css.icon}>
                <Image src={Twitter} alt='Twitter' />
              </div>
              <div className={css.icon}>
                <Image src={TikTok} alt='TikTok' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
