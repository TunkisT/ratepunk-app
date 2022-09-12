import css from './Main.module.scss';

function Main({ children }) {
  return <div className={css.main}>{children}</div>;
}

export default Main;
