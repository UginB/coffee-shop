import CoffeeLinks from '../coffee-links/coffee-links';

import BeansLogo from '../beans_logo_black.png';

import './footer.scss'

function FooterSection() {
    return (
        <footer className="footer">
            <CoffeeLinks /> сделай через пропс черный цвет текста и картинки
            <img src={BeansLogo} alt="Beans logo" className="logo"/>
        </footer>
    );
}
  
export default FooterSection;