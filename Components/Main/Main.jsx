import css from './Main.module.sass';

function Main({ children }) {
  return <div className={css.main}>{children}</div>;
}

export default Main;
