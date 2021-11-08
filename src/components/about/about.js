import BeansDivider from '../beans-divider/beans-divider';

import './about.scss'

const AboutSection = (props) => {
    const {topic} = props;
    
    const addText = () => {
        switch(topic)  {
            case 'our goods':
                return (
                    <div className="about__subheader about__subheader_ourBeans-goods">
                        <div>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.</div>
                        <div>Afraid at highly months do things on at. Situation recommend objection do intention <br />
                        so questions. <br />
                        As greatly removed calling pleased improve an. <br />
                        Last ask him cold feel <br />
                        met spot shy want. Children me laughing we <br />
                        prospect answered followed. At it went <br />
                        is song that held help face.</div>
                    </div>
                );
            case 'our beans':
                return (
                    <div className="about__subheader about__subheader_ourBeans-goods">
                        <div>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.</div>
                        <div>Afraid at highly months do things on at. Situation recommend objection do intention <br />
                        so questions. <br />
                        As greatly removed calling pleased improve an. <br />
                        Last ask him cold feel <br />
                        met spot shy want. Children me laughing we <br />
                        prospect answered followed. At it went <br />
                        is song that held help face.</div>
                    </div>
                );
            case 'it':
                return (
                    <div className="about__subheader about__subheader_it">
                        <div><b>Country:</b> Brasil</div>
                        <div><b>Description:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                        <div><b>Price:</b> <span>16.99$</span></div>
                    </div>
                );
            default:
                return (
                    <div className="about__subheader">
                        <div>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                        Afraid at highly months do things on at. Situation recommend objection do intention
                        so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                        met spot shy want. Children me laughing we prospect answered followed. At it went
                        is song that held help face.</div>
                        <div>Now residence dashwoods she excellent you. Shade being under his bed her, Much
                        read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                        horrible but confined day end marriage. Eagerness furniture set preserved far
                        recommend. Did even but nor are most gave hope. Secure active living depend son
                        repair day ladies now.</div>
                    </div>
                );
        }
    }

    const addImg = () => {
        switch(topic)  {
            case 'our goods':
                return (
                    <img src={process.env.PUBLIC_URL + '/img/aboutOurGoods.jpg'} className="about__img" alt="our goods" />
                );
            case 'our beans':
                return (
                    <img src={process.env.PUBLIC_URL + '/img/aboutOurBeans.jpg'} className="about__img" alt="our beans" />
                );
            case 'it':
                return (
                    <img src={process.env.PUBLIC_URL + '/img/aboutIt.jpg'} className="about__img" alt="it" />
                );
            default: ;
        }
    }

    const imgAbout = addImg();
    const textAbout = addText();
    return (
        <section className="about">
            {imgAbout}
            <div className="about__text">
                <h2 className="title title_mb10">About {topic}</h2>
                <BeansDivider color='black'/>
                {textAbout}
            </div>
        </section>
    );
    
}
  
export default AboutSection;