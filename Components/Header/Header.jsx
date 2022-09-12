import Navigation from '../Navigation/Navigation';
import css from './Header.module.sass';

function Header() {
  return (
    <div className={css.header}>
      <Navigation />
    </div>
  );
}

export default Header;
