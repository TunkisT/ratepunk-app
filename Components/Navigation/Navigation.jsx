import * as S from './Navigation.style';

function Navigation() {
  return (
    <S.Navi>
      <S.Navigate href='#'>Chrome Extension</S.Navigate>
      <S.Navigate href='#'>Price Comparison</S.Navigate>
      <S.Navigate href='#'>Blog</S.Navigate>
    </S.Navi>
  );
}

export default Navigation;
