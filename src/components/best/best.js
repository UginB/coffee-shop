import CoffeeItems from '../coffee-items/coffee-items';

import './best.scss'

function BestSection({data}) {
    
    return (
        <section className="best">
            <h2 className="title">Our best</h2>
            <CoffeeItems data={data}/>
        </section>
    );
}
  
export default BestSection;