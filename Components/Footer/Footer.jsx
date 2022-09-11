import * as S from './Footer.style';
import Image from 'next/image';
import Logo from '../../assets/Group 12.svg';
import Instagram from '../../assets/Icon awesome-instagram.svg';
import Facebook from '../../assets/Icon awesome-facebook-f.svg';
import LinkedIn from '../../assets/Icon awesome-linkedin-in.svg';
import Twitter from '../../assets/Icon awesome-twitter.svg';
import TikTok from '../../assets/Icon simple-tiktok.svg';
import Link from 'next/link';

function Footer() {
  return (
    <S.Footer>
      <S.First>
        <Image src={Logo} alt='ratepunk' />
        <p style={{ color: '#1F343E', fontSize: '16px' }}>
          Ratepunk compares hotel room prices across the major online travel
          agencies. When you search for a room, Ratepunk extension scans the top
          booking sites and runs a price comparison, so you can be confident in
          knowing you’re getting the best deal!
        </p>
        <p style={{ color: '#6D7A80', fontSize: '16px', padding: '0' }}>
          © 2021 Ratepunk. All Rights Reserved.
        </p>
      </S.First>
      <S.Second>
        <S.Small>
          <S.Titles> QUICK LINKS</S.Titles>
          <div>
            <Link href='#'>Price Comparison</Link>
            <Link href='#'>Chrome Extension</Link>
            <Link href='#'>How It Works</Link>
            <Link href='#'>Ratepunk Blog</Link>
            <Link href='#'>Privacy Policy</Link>
          </div>
        </S.Small>
        <S.Small>
          <S.Contacts>
            <S.Titles>CONTACT</S.Titles>
            <p>hi@ratepunk.com</p>
          </S.Contacts>
          <S.Contacts>
            <S.Titles>SOCIAL</S.Titles>
            <S.IconList>
              <S.Icon>
                <S.Social src={Instagram} alt='Instagram' />
              </S.Icon>
              <S.Icon>
                <S.Social src={Facebook} alt='Facebook' />
              </S.Icon>
              <S.Icon>
                <S.Social src={LinkedIn} alt='LinkedIn' />
              </S.Icon>
              <S.Icon>
                <S.Social src={Twitter} alt='Twitter' />
              </S.Icon>
              <S.Icon>
                <S.Social src={TikTok} alt='TikTok' />
              </S.Icon>
            </S.IconList>
          </S.Contacts>
        </S.Small>
      </S.Second>
    </S.Footer>
  );
}

export default Footer;
