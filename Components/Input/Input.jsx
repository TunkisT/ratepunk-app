import css from './Input.module.scss';

function Input({ name, type, placeholder, handleChange }) {
  const onChange = (event) => {
    handleChange(event.target.value);
  };
  return (
    <div>
      <input
        className={css.input}
        type={type}
        id={name}
        placeholder={placeholder}
        required
        onChange={onChange}
      />
    </div>
  );
}

export default Input;
