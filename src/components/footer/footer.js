import CoffeeLinks from '../coffee-links/coffee-links';

import BeansDivider from '../beans-divider/beans-divider';

import './footer.scss'

const FooterSection = (props) => {
    return (
        <footer className="footer">
            <CoffeeLinks 
                color='black'
                section='footer'
                onVisibleSection={props.onVisibleSection}/>
            <BeansDivider color='black'/>
        </footer>
    );
}
  
export default FooterSection;