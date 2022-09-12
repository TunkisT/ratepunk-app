import Button from '../Button/Button';
import Input from '../Input/Input';
import * as S from './Card.style';

function Card({ title, text }) {
  return (
    <S.Card>
      <S.Title>{title}</S.Title>
      <S.Text>{text}</S.Text>
      <p style={{ color: '#ED6F82', fontSize: '12px' }}>Error state</p>
      <Input placeholder='Enter your email address' type='email' />
      <Button type='submit' color='#4EB3E3'>
        Get Referral Link
      </Button>
      <p style={{ color: '#6D7A80', fontSize: '16px' }}>
        Limits on max rewards apply.
      </p>
    </S.Card>
  );
}

export default Card;
