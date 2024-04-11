import { BasketItem } from './BasketItem'
function BasketList(props) {
    const {order = [], handleBasketShow = Function.prototype, removeFromBasket = Function.prototype, incQuantity, decQuantity} = props;

    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price * el.quantity
    }, 0);

    return <ul class="collection basket-list">
    <li  class="collection-item active">Корзина</li>
    {
        order.length ? order.map(item => (
            <BasketItem key={item.id} {...item} removeFromBasket={removeFromBasket} incQuantity={incQuantity} decQuantity={decQuantity}/>
        )) : <li class="collection-item">Корзина пустая</li>
    }
    <li  class="collection-item active">Общая стоимость: {totalPrice} руб.</li>
    <li  class="collection-item"><button className="btn-small">Оформить заказ</button></li>
    <i className="material-icons basket-close" onClick={handleBasketShow}>close</i>
    </ul>
}

export {BasketList}