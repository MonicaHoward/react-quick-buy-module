import React, { Component } from 'react';

class Shop extends Component {
    cartTotal(price){
        this.setState({total: this.setState.total + price})
    }

    constructor(props){
        super(props);

        this.state = {
            total: 0
        };
        this.cartTotal = this.cartTotal.bind(this)
    }
    render(){
        console.log(this.props.items)
        var inventory = this.props.items.map((item, i) => {
            return <Item name={item.name}
                         price={item.price}
                         key={i}
                         cartTotal={this.cartTotal}
                         active={item.active}/>
        });
        return(
            <div>
                <h1>Shop</h1>
                <div>
                    {inventory}
                    <p>Total: {this.state.total}</p>
                </div>
            </div>
        );
    }
}

class Item extends Component {
    render(){
        return(
            <div>

            </div>
        )
    }
}

export default Shop;