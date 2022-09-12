import * as S from './Button.style';

function Button({ children, color, type, onClick }) {
  return (
    <S.Button color={color} type={type} onClick={onClick}>
      {children}
    </S.Button>
  );
}

export default Button;
