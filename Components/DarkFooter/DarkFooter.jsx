import css from './DarkFooter.module.sass';

function DarkFooter({ children }) {
  return <div className={css.darkFooter}>{children}</div>;
}

export default DarkFooter;
