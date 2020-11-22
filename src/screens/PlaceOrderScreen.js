import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CheckoutSteps from '../components/CheckoutSteps';

function PlaceOrderScreen(props) {
  const cart = useSelector(state => state.cart);
  const { cartItems, shipping, payment} = cart;
  if(!shipping.adress){
    props.history.push("/shipping");
  }else if(!payment.paymentMethod){
    props.history.push("/payment");
  }
 
  const itemsPrice = cartItems.reduce((a, c) => a + c.price*c.qty, 0);
  const shippingPrice = itemsPrice > 100 ? 0 : 10;
  const taxPrice = 0.15 * itemsPrice;
  const totalPrice = itemsPrice + shippingPrice + taxPrice;

  const placeOrderHandler = () => {
    //create an order
  }
 
  useEffect(() =>{
  
  }, [] );

  return <div>
    <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
    <div className="placeorder">
      <div className="placeorder-info">
        <div>
          <h3>Shipping</h3>
          <div>
            {cart.shipping.adress},{cart.shipping.city},
            {cart.shipping.postalCode},{cart.shipping.country}
          </div>
        </div>
        <div>
          <h3>Payment</h3>
          <div>
            Payment method: {cart.payment.paymentMethod}
          </div>
        </div>
        <div>
          <ul className="placeorder-list-container">
            <li key="0">
              <h3>
                Shopping cart
              </h3>
              <div>
                Price
              </div>
            </li>
            {
              cartItems.length === 0 ?
              <div>Cart is empty</div>
              :
              cartItems.map(item => 
              <li key={item.id}>
                <div className="placeorder-image">
                  <img src={item.image} alt="product"/>
                </div>
                <div className="placeorder-name">
                  <div>
                    <Link to={"/product/" + item.product}>
                      {item.name}
                    </Link>
                  </div>
                  <div>
                    Qty: {item.qty}
                  </div>
                </div>
                <div className="placeorder-price">
                  $ {item.price}
                </div>
              </li>)
            }
          </ul>
        </div>
      </div>

      <div className="placeorder-action">
        <ul>
          <li>
            <button className="button primary full-width" onClick={placeOrderHandler}>Place Order</button>
          </li>
          <li>
            <h3>Order Summary</h3>
          </li>
          <li>
            <div>Items</div>
            <div>$ {itemsPrice}</div>
          </li>
          <li>
            <div>Shipping</div>
            <div>$ {shippingPrice}</div>
          </li>
          <li>
            <div>Tax</div>
            <div>$ {taxPrice}</div>
          </li>
          <li>
            <div>Order Total</div>
            <div>$ {totalPrice}</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
}

export default PlaceOrderScreen;
