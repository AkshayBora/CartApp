import React from "react";

class CartItem extends React.Component {
    constructor () {
        super();
        this.state = {
            price : 999,
            title : 'My Phone',
            qty : 1,
            img : ''
        }
    }
    render () {
        // object distructuring
        const {price,title,qty} = this.state;  
        return (
           <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} />
                </div>
                <div className="right-block">
                    <div style={ { fontSize: 25 } }> {title} </div>
                    <div style={ { color: '#777' } }>Rs {price} </div>
                    <div style={ { color: '#777' } }>Qty : {qty} </div>
                    <div className="cart-item-actions">
                        {/* Buttons Here */}
                        <img alt="increase" className="action-icons" src="https://cdn-icons.flaticon.com/png/512/3303/premium/3303893.png?token=exp=1641406078~hmac=a10e1e76785cb471c58f07c55cf4f75a" />
                        <img alt="decrease" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/992/992683.png" />
                        <img alt="delete" className="action-icons" src="https://cdn-icons.flaticon.com/png/512/484/premium/484662.png?token=exp=1641406330~hmac=68132a125a845863a946080e64afca3d" />
                    </div>
                </div>
           </div> 
        );
    }
}

const styles = {
    image : {
        height : 110,
        width : 110,
        borderRadius : 4,
        background : '#ccc'
    }
}

export default CartItem;