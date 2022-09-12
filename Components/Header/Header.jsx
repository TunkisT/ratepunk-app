import Navigation from '../Navigation/Navigation';
import css from './Header.module.scss';

function Header() {
  return (
    <div className={css.header}>
      <Navigation />
    </div>
  );
}

export default Header;
