import BeansLogo from './beans_logo.png';

import './main-section.scss'

function MainSection() {
    return (
        <section className="main">
            <h1 className="main__title">Everything You Love About Coffee</h1>
            <img src={BeansLogo} alt="Beans logo" className="main__logo"/>
            <p className="main__subheader">We makes every day full of energy and taste <br />
                Want to try our beans?
            </p>
            <button className="main__btn">More</button>
        </section>
    );
}
  
export default MainSection;