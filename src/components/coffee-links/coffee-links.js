import logo from './logo.svg';
import './coffee-links.scss';

function CoffeeLinks() {
  return (
    <header className="links">
        <ul className="links__items">
            <li className="links__item"><img src={logo} alt="Coffee shop" className="links__img" />Coffee house</li>
            <li className="links__item">Our coffee</li>
            <li className="links__item">For your pleasure</li>
        </ul>
    </header>
  );
}

export default CoffeeLinks;