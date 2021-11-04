import { Component } from 'react';
import BeansLogo from '../beans_logo_black.png';

import './about.scss'

class AboutSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            topic: 'Us'
        }
    }
    

    addText = () => {
        switch(this.state.topic)  {
            case 'our goods':
                this.setState(({topic}) => {
                    topic = this.props.topic;
                });
                return (
                    <p className="about__subheader">
                        Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                        <br />
                        Afraid at highly months do things on at. Situation recommend objection do intention
                        so questions.
                        <br />
                        As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went
                        is song that held help face.
                    </p>
                );
            case 'our beans':
                return (
                    <p className="about__subheader">
                        Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                        <br />
                        Afraid at highly months do things on at. Situation recommend objection do intention
                        so questions.
                        <br />
                        As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went
                        is song that held help face.
                    </p>
                );
            case 'it':
                return (
                    <p className="about__subheader">
                        Country: Brasil <br />
                        Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br />
                        Price:  16.99$
                    </p>
                );
            default:
                return (
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
                );
        }
    }

    


    render() {
        const textAbout = this.addText();

        return (
            <section className="about">
                <h2 className="title title_mb10">About Us</h2>
                <img src={BeansLogo} alt="Beans logo" className="logo"/>
                {textAbout}
            </section>
        );
    }
}
  
export default AboutSection;