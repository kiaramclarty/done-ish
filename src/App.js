import React from "react";
import "./App.css";
import ShoppingCart from "./components/shoppingcart";
import ProductList from "./components/productList";
import Hero from "./components/hero";
import react, { Component } from "react";
import Tea from "./components/Tea";

//new
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      total: 0
    };
  }

  inventory = [
    { name: "Holly Jolly Jennie", price: 4.0 },
    { name: "Fa-la-la-la Lisa", price: 4.0 },
    { name: "Winter Rose", price: 4.0 },
    { name: "Jingle Bell Jisoo", price: 4.0 }
  ];

  addToShoppingCart = (item) => {
    let total = this.state.total;
    if (item == "Holly Jolly Jennie") {
      total += 4.0;
    }
    if (item == "Fa-la-la-la Lisa") {
      total += 4.0;
    }
    if (item == "Winter Rose") {
      total += 4.0;
    }

    if (item == "Jingle Bell Jisoo") {
      total += 4.0;
    }
    this.setState((state) => {
      state.cart.push(item);
      return state;
    });
    this.setState({ total: total });
  };

  removeFromShoppingCart = (item) => {
    let total = this.state.total;
    if (item == "Holly Jolly Jennie") {
      total -= 4;
    }
    if (item == "Fa-la-la-la Lisa") {
      total -= 4;
    }
    if (item == "Winter Rose") {
      total -= 4;
    }

    if (item == "Jingle Bell Jisoo") {
      total -= 4;
    }
    this.setState((state) => {
      state.cart.pop(item);
      return state;
    });
    this.setState({ total: total });
  };

  //const cart = this.state.cart;
  //let index = cart.indexOf(item);
  //if (index !== -1) {
  // cart.splice(index, 1);
  //}
  //this.setState((state) => {
  //return state;
  // });
  // };

  render() {
    return (
      <div className="App">
        <Hero />
        <Tea />
        <ShoppingCart
          cart={this.state.cart}
          total={this.state.total}
          inventory={this.inventory}
        />
        <div className="main">
          <ProductList
            inventory={this.inventory}
            addToShoppingCart={this.addToShoppingCart}
            removeFromShoppingCart={this.removeFromShoppingCart}
          />
        </div>
      </div>
    );
  }
}

export default App;

/*    this.setState((state) => {
      state.cart.push(item);
      return state;
    });
    this.setState({ total: total });
  };

     removeFromShoppingCart = (item) => {
    const cart = this.state.cart;
    let index = cart.indexOf(item);
    if (index !== -1) {
      cart.splice(index, 1);
    } 
    
    let remove = this.state.total;  
    if (item == "Holly Jolly Jennie") {
      remove -= 3.99;
    }
    if (item == "Fa-la-la-la Lisa") {
      remove -= 3.99;
    }
    if (item == "Winter Rose") {
      remove -= 3.99;
    }

    if (item == "Jingle Bell Jisoo") {
      remove -= 3.99;
    }

    this.setState((state) => {
      return  this.setState({ remove: remove });
      
    });
  };
  removeFromShoppingCart = (item) => {
    const cart = this.state.cart;
    let index = cart.indexOf(item);
    if (index !== -1) {
      cart.splice(index, 1);
    }
    this.setState((state) => {
      return state;
    });
  };

  render() {
    return (
      <div className="App">
        <Tea />
        <Hero />
        <ShoppingCart
          items={this.state.cart}
          total={this.state.total}
          inventory={this.inventory}
        />
        <div className="main">
          <ProductList
            inventory={this.inventory}
            addToShoppingCart={this.addToShoppingCart}
            removeFromShoppingCart={this.removeFromShoppingCart}
          />
        </div>
      </div>
    );
  }
}

export default App;   
  */
