import './coffee-item.scss'

function CoffeeItem({img, name, price, country, best}) {
    let coffeeItemClasses = 'coffeeItem', 
        countryTextClasses = "coffeeItem__text coffeeItem__text_country"
    
    if(!best) {
        coffeeItemClasses+=' coffeeItem_shadow'
    } else {
        countryTextClasses+=' hide'
    }
    
    return (
        <div className={coffeeItemClasses}>
            <img src={process.env.PUBLIC_URL + img} alt={name} className="coffeeItem__img" />
            <div className="coffeeItem__text">{name}</div>
            <div className={countryTextClasses}>{country}</div>
            <div className="coffeeItem__text coffeeItem__text_price">{price}</div>
        </div>
    );
}
  
export default CoffeeItem;