import BeansLogo from './beans_logo.png';

import AboutSection from '../about/about';
import BestSection from '../best/best';

import './main-section.scss'

function MainSection(props) {
    const {data} = props;
    return (
        <>
            <header className="main">
                <h1 className="title title_main">Everything You Love About Coffee</h1>
                <img src={BeansLogo} alt="Beans logo" className="main__logo"/>
                <p className="main__subheader">We makes every day full of energy and taste <br />
                    Want to try our beans?
                </p>
                <button className="main__btn">More</button>
            </header>
            <AboutSection 
                topic='Us'/>
            <BestSection data={data}/>
        </>
    );
}
  
export default MainSection;