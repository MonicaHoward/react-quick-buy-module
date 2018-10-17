import React, { Component } from 'react';

class Shop extends Component {
    render(){
        console.log(this.props.items)
        return(
            <div>
                Shop
            </div>
        );
    }
}

export default Shop;