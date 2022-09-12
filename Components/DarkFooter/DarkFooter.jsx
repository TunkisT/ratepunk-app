import css from './DarkFooter.module.scss';

function DarkFooter({ children }) {
  return <div className={css.darkFooter}>{children}</div>;
}

export default DarkFooter;
