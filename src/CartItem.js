import React from "react";

class CartItem extends React.Component {

    increaseQuantity = () => {
        //console.log('this.state', this.state);
        // setState form 1st
        // this.setState({
        //     qty : this.state.qty + 1
        // });
        // setState form 2nd
        this.setState( (prevState) => {
            return {
                qty : prevState.qty + 1
            }
        });
    }

    decreaseQuantity = () => {
        const { qty } = this.state;

        if (qty === 0) {
            return;
        }

        // setState form 2nd
        this.setState( (prevState) => {
            return {
                qty : prevState.qty - 1
            }
        });
    }

    render () {
        // object distructuring
        const {price,title,qty} = this.props.product;  
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
                        <img 
                            alt="increase" 
                            className="action-icons" 
                            src="https://cdn-icons-png.flaticon.com/512/992/992651.png" 
                            onClick={this.increaseQuantity}
                        />
                        <img 
                            alt="decrease" 
                            className="action-icons" 
                            src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
                            onClick={this.decreaseQuantity} 
                        />
                        <img 
                            alt="delete" 
                            className="action-icons" 
                            src="https://cdn-icons-png.flaticon.com/512/1632/1632602.png" 
                        />
                    </div>
                </div>
           </div> 
        );
    }
}

const styles = {
    image : {
        height : 130,
        width : 130,
        borderRadius : 4,
        background : '#ccc'
    }
}

export default CartItem;