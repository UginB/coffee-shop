import Header from '../header/header';
import AboutSection from '../about/about';
import BestSection from '../best/best';

function MainSection(props) {
    const {data} = props;
    return (
        <>
            <Header name='Everything You Love About Coffee'/>
            <AboutSection topic='Us'/>
            <BestSection data={data}/>
        </>
    );
}
  
export default MainSection;