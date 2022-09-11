import React from 'react';
import * as S from './Footer.style';
import Image from 'next/image';
import Logo from '../../assets/Group 12.svg';
import Link from 'next/link';

function Footer() {
  return (
    <S.Footer>
      <S.Section>
        <Image src={Logo} alt='ratepunk' />
        <p style={{ color: '#1F343E', fontSize: '16px' }}>
          Ratepunk compares hotel room prices across the major online travel
          agencies. When you search for a room, Ratepunk extension scans the top
          booking sites and runs a price comparison, so you can be confident in
          knowing you’re getting the best deal!
        </p>
        <p style={{ color: '#6D7A80', fontSize: '16px' }}>
          © 2021 Ratepunk. All Rights Reserved.
        </p>
      </S.Section>
      <S.Second>
        <S.Inside>
          <h3> QUICK LINKS</h3>
          <Link href='#'>Price Comparison</Link>
          <Link href='#'>Chrome Extension</Link>
          <Link href='#'>How It Works</Link>
          <Link href='#'>Ratepunk Blog</Link>
          <Link href='#'>Privacy Policy</Link>
        </S.Inside>
        <S.Inside>
          <h3>CONTACT</h3>
          <p>hi@ratepunk.com</p>
        </S.Inside>
      </S.Second>
    </S.Footer>
  );
}

export default Footer;
