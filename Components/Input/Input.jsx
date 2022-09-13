import css from './Input.module.sass';

function Input({ name, type, placeholder, handleChange, disabled }) {
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
        disabled={disabled}
      />
    </div>
  );
}

export default Input;
