import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {

  constructor () {
    super();
    this.state = {
        products : [
            {
                price : 99,
                title : 'Watch',
                qty : 1,
                img : 'https://m.media-amazon.com/images/I/61OUIIXnPqL._AC_SX522_.jpg',
                id : 1
            },
            {
                price : 999,
                title : 'My Phone',
                qty : 10,
                img : 'https://m.media-amazon.com/images/I/61iy2Ru9KdS._SX569_.jpg',
                id : 2
            },
            {
                price : 999,
                title : 'Laptop',
                qty : 4,
                img : 'https://www.bhphotovideo.com/images/images1500x1500/dell_xk86t_latitude_3520_i3_1115g4_4gb_1643207.jpg',
                id : 3
            }
        ]
    }
    // this.increaseQuantity = this.increaseQuantity.bind(this)
  }

  handleIncreaseQuantity = (product) => {
      //console.log('Hey Increase the quantity of' , product);
      const {products} = this.state
      const index = products.indexOf(product);

      products[index].qty += 1;

      this.setState({
          // products: products
          products
      })
  }

  handleDecreaseQuantity = (product) => {
      //console.log('Hey Increase the quantity of' , product);
      const {products} = this.state
      const index = products.indexOf(product);

      if (products[index].qty === 0){
          return;
      }

      products[index].qty -= 1;

      this.setState({
          // products: products
          products
      })
  }

  handleDeleteProduct = (id) => {
      const {products} = this.state;

      const items = products.filter((item) => item.id !== id); //[{}]

      this.setState({
          products: items
      })
  }

  getCartCount = () => {
    const { products } = this.state;

    let count = 0;

    products.forEach((product) => {
      count += product.qty;
    })

    return count

  }

  getCartTotal = () => {
    const { products } = this.state;

    let cartTotal = 0;

    products.map((product) => {
      cartTotal = cartTotal + product.qty * product.price
    })

    return cartTotal
  }

  render () {
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <Cart 
          products = {products}
          onIncreaseQuantity = {this.handleIncreaseQuantity}
          onDecreaseQuantity = {this.handleDecreaseQuantity}
          onDeleteProduct = {this.handleDeleteProduct}
        />
        <div style={ {padding:10, fontSize:20} }>TOTAL: {this.getCartTotal()} </div>
      </div>
    );
  }
}
export default App;
