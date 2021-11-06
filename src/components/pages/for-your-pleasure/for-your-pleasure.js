import AboutSection from '../../about/about';
import CoffeeItems from '../../coffee-items/coffee-items';
import FooterSection from '../../footer/footer';

import './for-your-pleasure.scss'

function ForYourPleasure(props) {
    const {data} = props;
    return (
        <>
            <header className="forYourPleasure">
                <h1 className="title title_main">For your pleasure</h1>
            </header>
            <AboutSection 
            topic='our goods'/>
            <CoffeeItems data={data}/>
            <FooterSection />
        </>
    );
}
  
export default ForYourPleasure;