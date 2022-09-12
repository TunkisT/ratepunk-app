import css from './Button.module.scss';

function Button({ children, type }) {
  return (
    <button className={css.button} type={type}>
      {children}
    </button>
  );
}

export default Button;
