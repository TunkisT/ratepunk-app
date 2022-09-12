import Image from 'next/image';
import Navigation from '../Navigation/Navigation';
import * as S from './Header.style';

function Header() {
  return (
    <S.Header>
      <Navigation />
    </S.Header>
  );
}

export default Header;
