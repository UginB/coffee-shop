
import logo from './logo.svg';
import './header.scss';

function Header() {
  return (
    <header className="header">
        <ul className="header__items">
            <li className="header__item"><img src={logo} alt="Coffee shop" className="header__img" />Coffee house</li>
            <li className="header__item">Our coffee</li>
            <li className="header__item">For your pleasure</li>
        </ul>
    </header>
  );
}

export default Header;