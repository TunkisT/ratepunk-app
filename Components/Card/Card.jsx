import Button from '../Button/Button';
import Input from '../Input/Input';
import css from './Card.module.sass';

function Card({ title, text }) {
  return (
    <div className={css.card}>
      <p className={css.title}>{title}</p>
      <p className={css.text}>{text}</p>
      <p className={css.error}>Error state</p>
      <Input placeholder='Enter your email address' type='email' />
      <Button type='submit'>Get Referral Link</Button>
      <p className={css.lastLine}>Limits on max rewards apply.</p>
    </div>
  );
}

export default Card;
