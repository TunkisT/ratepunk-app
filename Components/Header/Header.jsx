import Image from 'next/image';
import Navigation from '../Navigation/Navigation';
import * as S from './Header.style';
import Logo from '../../assets/Group 12.svg';

function Header() {
  return (
    <S.Header>
      <S.Inside>
        {/* <Image src={Logo} alt='ratepunk' /> */}
        <Navigation />
      </S.Inside>
    </S.Header>
  );
}

export default Header;
