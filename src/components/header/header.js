import BeansDivider from '../beans-divider/beans-divider';

import './header.scss'

const Header = (props) => {
    const {name} = props;

    let headerClasses = 'header',
        subheaderClasses = "header__subheader",
        buttonClasses = "header__btn",
        colorDivider = 'white';

    if (name !== 'Everything You Love About Coffee') {
        headerClasses += " header_secondary"
        subheaderClasses += " hide";
        buttonClasses += " hide";
        colorDivider = 'none'
        if (name === 'For your pleasure') {
            headerClasses += ' header_for-your-pleasure'
        } else if (name === 'Our Coffee') {
            headerClasses += ' header_our-coffee'
        }
    }

    return (
        <header className={headerClasses}>
            <h1 className="title title_main">{name}</h1>
            <BeansDivider color={colorDivider}/>
            <p className={subheaderClasses}>
                We makes every day full of energy and taste <br />
                Want to try our beans?
            </p>
            <button className={buttonClasses}>More</button>
        </header>
    );
}
  
export default Header;