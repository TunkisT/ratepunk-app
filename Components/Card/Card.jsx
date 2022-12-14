import { useState } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import css from './Card.module.sass';
import Img from '../../assets/success.jpg';
import Image from 'next/image';
const linkForCopy = 'https://ratepunk.com/referral';

function Card({ title, text }) {
  const [lastEmail, setEmail] = useState({
    email: '',
  });
  const [form, setForm] = useState('');

  function formHandler(e) {
    e.preventDefault();
    setForm('OK');
    setJson();
  }

  function setJson() {
    let req = new XMLHttpRequest();

    req.onreadystatechange = () => {
      if (req.readyState == XMLHttpRequest.DONE) {
      }
    };

    req.open('PUT', `https://api.jsonbin.io/v3/b/632045fca1610e638629458e`, true);
    req.setRequestHeader('Content-Type', 'application/json');
    req.setRequestHeader(
      'X-Master-Key',
      '$2b$10$sR65SR1hrDDDUps.W85mOu4qEUpIhUZEdQre/RIqRJHAEq6n2kNwW'
    );
    req.send(JSON.stringify(lastEmail));
  }

  function copyLink(e) {
    e.preventDefault();
    navigator.clipboard.writeText(linkForCopy);
    alert('Copied the text: ' + linkForCopy);
  }
  return (
    <div className={css.card}>
      <p className={css.title}>{title}</p>
      <p className={css.text}>{text}</p>
      <div>
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
      {form !== 'OK' ? (
        <form onSubmit={formHandler}>
          <Input
            placeholder='Enter your email address'
            type='email'
            name='email'
            handleChange={(email) => setEmail({ ...lastEmail, email })}
          />
          <Button type='submit'>Get Referral Link</Button>
        </form>
      ) : (
        <form onSubmit={copyLink}>
          <input
            placeholder={linkForCopy}
            className={css.newInput}
            type='text'
            name='link'
            disabled
          />
          <button type='submit' className={css.newButton}>
            Copy
          </button>
        </form>
      )}

      <p className={css.lastLine}>Limits on max rewards apply.</p>
    </div>
  );
}

export default Card;
