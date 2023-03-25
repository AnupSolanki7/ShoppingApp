import React from 'react'
import { useSelector } from 'react-redux'
import "../styles/cart.css"

const Cart = () => {
    const cartItems = useSelector((state: any) => state.cart.cartItem)
    const total = () => {
        let num = 0
        cartItems.map((e:any) => {
            num = num + e.price
        })
        return(num)
    }
    
    
    return (
        <div>
            <div className="cart-page">
                <h1>Cart Items</h1>
                {
                    cartItems.map((e: any) => {
                        return (
                            <div className="item-desc">
                                <div className="firstdiv">
                                    <div className="img">
                                        <img width={"100px"} height={"100px"} src={e.thumbnail} alt="" />
                                    </div>
                                    <div className="data">
                                        {e.title}
                                    </div>
                                </div>
                                <div className="seconddiv">
                                    <div className="description-div">
                                        {e.description}
                                    </div>
                                </div>
                                <div className="thirddiv">
                                    <div className="total">
                                        {e.price}$
                                    </div>
                                </div>

                            </div>
                        )

                    })
                }
                <div className="SubTotal">
                    Total: "{total()}$"
                </div>

            </div>
        </div>
    )
}

export default Cart