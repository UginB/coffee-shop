import BeansLogo from './beans_logo.png';

import './main-section.scss'

function MainSection() {
    return (
        <header className="main">
            <h1 className="title title_main">Everything You Love About Coffee</h1>
            <img src={BeansLogo} alt="Beans logo" className="main__logo"/>
            <p className="main__subheader">We makes every day full of energy and taste <br />
                Want to try our beans?
            </p>
            <button className="main__btn">More</button>
        </header>
    );
}
  
export default MainSection;