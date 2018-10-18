import React, { Component } from 'react';

class Shop extends Component {
    cartTotal(price){
        this.setState({total: this.state.total + price})
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

    click(){
        var active = !this.state.active;
        this.setState({active: active});
        this.props.cartTotal(active ? this.props.price : -this.props.price)
    }

    constructor(props){
        super(props);

        this.state = {
            active: false
        };
        this.click = this.click.bind(this);
    }
    render(){
        return(
            <div>
                <p onClick={this.click}>{this.props.name} {this.props.price}</p>
            </div>
        )
    }
}

export default Shop;