import CoffeeItem from '../coffee-item/coffee-item';
import './coffee-items.scss'

function CoffeeItems({data}) {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <CoffeeItem 
                key={id} 
                {...itemProps}/> 
        )
    });

    return (
        <div className="coffeeItems">
            {elements}
        </div>
    );
}
  
export default CoffeeItems;