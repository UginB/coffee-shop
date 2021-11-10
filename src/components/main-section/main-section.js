import { Component } from 'react';

import Header from '../header/header';
import AboutSection from '../about/about';
import BestSection from '../best/best';

class MainSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visibleSection: true
        }
    }

    render() {
        const {data, visible} = this.props;

        let clazz = '';
        if(!visible) {
            clazz +=  'hide';
        }

        return (
            <div className={clazz}>
                <Header name='Everything You Love About Coffee'/>
                <AboutSection topic='Us'/>
                <BestSection data={data}/>
            </div>
        );
    }
}
  
export default MainSection;