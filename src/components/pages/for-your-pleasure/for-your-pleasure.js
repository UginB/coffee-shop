import { Component } from 'react';

import Header from '../../header/header';
import AboutSection from '../../about/about';
import CoffeeItems from '../../coffee-items/coffee-items';

class ForYourPleasure extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
    }
    
    render() {
        const {data} = this.props;
        let clazz = '';
        if(!this.props.visible) {
            clazz +=  'hide';
        }
        return (
            <div className={clazz}>
                <Header 
                    name='For your pleasure'/>
                <AboutSection 
                topic='our goods'/>
                <CoffeeItems 
                    data={data}
                    best={false}/>
            </div>
        );
    }
}
  
export default ForYourPleasure;