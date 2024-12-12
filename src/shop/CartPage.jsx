import React, { useEffect, useState } from 'react'
import PageHeader from '../components/PageHeader';
import { Link } from 'react-router-dom';
import CheckOutPage from './CheckOutPage';


const CartPage = ({ cart }) => {
    const [cartItems, setcartItems] = useState([]);

    useEffect(() => {
        // fetch cart item from local storage
        const storedCartItems = JSON.parse(localStorage.getItem("cart")) || [];
        setcartItems(storedCartItems);
    }, [])

    // calculate prices
    const calculateTotalPrice = (item) => {
        return item.price * item.quantity;
    }

    // handle quantity increase
    const handleIncrease = (item) => {
        item.quantity += 1;
        setcartItems([...cartItems]);

        // update local storage with new cart items
        localStorage.setItem("cart", JSON.stringify(cartItems));
    }

    // handle quantity decrease
    const handleDecrease = (item) => {
        if (item.quantity > 1) {
            item.quantity -= 1;
            setcartItems([...cartItems]);

            // update local storage with new cart items
            localStorage.setItem("cart", JSON.stringify(cartItems));
        }
    };

    // handle item remove
    const handleRemoveItem = (item) => {
        const updatedCart = cartItems.filter((cartItem) => cartItem.id !== item.id);

        // update new cart
        setcartItems(updatedCart);

        updateLocalStorage(updatedCart);
    }

    const updateLocalStorage = (cart) => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    //cart subtotal
    const cartSubtotal = cartItems.reduce((total, item) => {
        return total + calculateTotalPrice(item);
    }, 0)

    //order total
    const orderTotal = cartSubtotal;


    return <div>
        <PageHeader title={"Check-Out place"} curPage={"cart page"} />
        <div className='shop-cart padding-tb'>
            <div className="container">
                <div className="section-wrapper">
                    {/* cart top */}
                    <div className="cart-top">
                        <table>
                            <thead>
                                <tr>
                                    <th className='cat-product'>Product</th>
                                    <th className='cat-price'>Price</th>
                                    <th className='cat-quantity'>Quantity</th>
                                    <th className='cat-toprice'>Total</th>
                                    <th className='cat-edit'>Edit</th>
                                </tr>
                            </thead>
                            {/* table body */}
                            <tbody>
                                {
                                    cartItems.map((item, i) => (
                                        <tr key={i}>
                                            <td className="product-item cat-product">
                                                <div className='p-thumb'>
                                                    <Link to="/shop"><img src={item.img} alt="" /></Link>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>


                    {/* cart top ends */}
                    <div className='cart-bottom'>
                        {/* checkout box*/}
                        <div className='cart-checkout-box'>
                            <form className='coupon'>
                                <input className='cart-page-input-text' type="text" name='coupon' id='coupo' placeholder='Coupon code...' />
                                <input className='ms-2' type="submit" value="Apply Coupon" />
                            </form>

                            <form className='cart-checkout'>
                                <input type="submit" value="Update Cart" />
                                <div>
                                    <CheckOutPage/>
                                </div>
                            </form>
                        </div>

                        {/* ============== checkout box end =============== */}


                        {/* shopping box */}
                        <div className="shiping-box">
                            <div className='row g-3'>
                                <div className='col-md-6 col-12'>
                                    <div className='calculate-shiping'>
                                        <h3 className=''>Calculate Shipping</h3>

                                        <div className="outline-select">
                                            <select>
                                                <option value="usa">United States (USA)</option>
                                                <option value="nig">Nigeria (NIG)</option>
                                                <option value="uk">United kingdom (UK)</option>
                                                <option value="ind">India (IND)</option>
                                                <option value="eur">Europe (EUR)</option>
                                                <option value="ger">Germany (GER)</option>
                                            </select>
                                            <span className='select-icon'>
                                                <i className="fa-solid fa-circle-chevron-down"></i>
                                            </span>
                                        </div>

                                        <div className='outline-select shipping-select'>

                                            <select>
                                                <option value="usa">America</option>
                                                <option value="nig">Abuja</option>
                                                <option value="uk">London</option>
                                                <option value="ind">Delhi</option>
                                                <option value="eur">Amsterdam</option>
                                                <option value="ger">Hamburg</option>
                                            </select>
                                            <span className='select-icon'>
                                                <i className="fa-solid fa-circle-chevron-down"></i>
                                            </span>
                                        </div>
                                        <input type="text" name='postalCode' id='postalCode' placeholder='postalcode/ZIP' className='cart-page-input-text' />
                                        <button type='submit'>Update Address</button>
                                    </div>
                                </div>
                                <div className='col-md-6 col-12'>
                                    <div className="cart-overview">
                                        <h3>Cart Totals</h3>
                                        <ul className='lab-ul'>
                                            <li>
                                                <span className='pull-left'>Cart Subtotal</span>
                                                <p className='pull-right'>${cartSubtotal}</p>
                                            </li>
                                            <li>
                                                <span className='pull-left'>Shipping and Handling</span>
                                                <p className='pull-right'>Free Shipping/Delivery</p>
                                            </li>
                                            <li>
                                                <span className='pull-left'>order Total</span>
                                                <p className='pull-right'>$$ {orderTotal.toFixed(2)}</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


};

export default CartPage;