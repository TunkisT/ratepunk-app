import { useState } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import css from './Card.module.sass';
import Img from '../../assets/success.jpg';
import Image from 'next/image';

function Card({ title, text }) {
  const [lastEmail, setEmail] = useState('');
  const [form, setForm] = useState('');

  function formHandler(e) {
    e.preventDefault();
    setForm('OK');
    console.log('suveikia formos submit', lastEmail);
  }

  return (
    <div className={css.card}>
      <p className={css.title}>{title}</p>
      <p className={css.text}>{text}</p>
      <div >
        {form !== 'OK' ? (
          <p className={css.error}>Error state</p>
        ) : (
          <div className={css.errorDiv}>
            <Image
              width={32}
              height={32}
              className={css.image}
              src={Img}
              alt='success'
            />
            <p className={css.confirmed}>Your email is confirmed!</p>
          </div>
        )}
      </div>

      <form onSubmit={formHandler}>
        <Input
          placeholder='Enter your email address'
          type='email'
          name='email'
          labelText='Email'
          handleChange={(email) => setEmail({ ...lastEmail, email })}
        />
        <Button type='submit'>Get Referral Link</Button>
      </form>
      <p className={css.lastLine}>Limits on max rewards apply.</p>
    </div>
  );
}

export default Card;
