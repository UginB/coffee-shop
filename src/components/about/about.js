import BeansLogo from '../beans_logo_black.png';

import './about.scss'

function AboutSection() {
    return (
        <section className="about">
            <h2 className="title title_mb10">About Us</h2>
            <img src={BeansLogo} alt="Beans logo" className="logo"/>
            <p className="about__subheader">
                Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                Afraid at highly months do things on at. Situation recommend objection do intention
                so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                met spot shy want. Children me laughing we prospect answered followed. At it went
                is song that held help face. 
                <br /><br />
                Now residence dashwoods she excellent you. Shade being under his bed her, Much
                read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                horrible but confined day end marriage. Eagerness furniture set preserved far
                recommend. Did even but nor are most gave hope. Secure active living depend son
                repair day ladies now.
            </p>
        </section>
    );
}
  
export default AboutSection;