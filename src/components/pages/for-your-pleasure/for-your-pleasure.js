import Header from '../../header/header';
import AboutSection from '../../about/about';
import CoffeeItems from '../../coffee-items/coffee-items';

function ForYourPleasure(props) {
    const {data} = props;
    return (
        <>
            <Header 
                name='For your pleasure'/>
            <AboutSection 
            topic='our goods'/>
            <CoffeeItems 
                data={data}
                best={false}/>
        </>
    );
}
  
export default ForYourPleasure;