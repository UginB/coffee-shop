import CoffeeLinks from '../coffee-links/coffee-links';

import BeansDivider from '../beans-divider/beans-divider';

import './footer.scss'

const FooterSection = () => {
    return (
        <footer className="footer">
            <CoffeeLinks 
                color='black'
                section='footer'/>
            <BeansDivider color='black'/>
        </footer>
    );
}
  
export default FooterSection;