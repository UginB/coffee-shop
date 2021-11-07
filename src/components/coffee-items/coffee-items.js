import CoffeeItem from '../coffee-item/coffee-item';
import './coffee-items.scss'

const CoffeeItems = ({data, best, count}) => {
    if(!count) {count = data.length}

    const elements = data.map((item, index) => {
        const {id, ...itemProps} = item;
        if (index < count) {
            return (
                <CoffeeItem 
                    key={id}
                    best={best}
                    {...itemProps}/> 
            )
        }
    });

    return (
        <div className="coffeeItems">
            {elements}
        </div>
    );
}
  
export default CoffeeItems;