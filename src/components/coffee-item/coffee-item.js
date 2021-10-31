import './coffee-item.scss'

function CoffeeItem({img, name, price}) {
    return (
        <div className="coffeeItem">
            <img src={process.env.PUBLIC_URL + img} alt={name} className="coffeeItem__img" />
            <div className="coffeeItem__text">{name}</div>
            <div className="coffeeItem__price">{price}</div>
        </div>
    );
}
  
export default CoffeeItem;