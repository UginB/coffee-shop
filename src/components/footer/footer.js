import CoffeeLinks from '../coffee-links/coffee-links';

import BeansLogo from '../beans_logo_black.png';

import './footer.scss'

const FooterSection = () => {
    return (
        <footer className="footer">
            <CoffeeLinks 
                color='black'
                section='footer'/>
            <img src={BeansLogo} alt="Beans logo" className="logo"/>
        </footer>
    );
}
  
export default FooterSection;