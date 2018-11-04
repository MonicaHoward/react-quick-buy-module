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
        let inventory = this.props.items.map((item, i) => {
            return <Item name={item.name}
                         price={item.price}
                         className={item.className}
                         img={item.img}
                         key={i}
                         cartTotal={this.cartTotal}
                         active={item.active}/>
        });
        return(
            <div> className="main">
                {/*<section className="info1">*/}
                    {/*<h2>Shop the Latest Kix</h2>*/}
                    {/*<p>The hottest Jordan releases and more</p>*/}
                {/*</section>*/}
                <div>
                    {inventory}
                    <p className="info2">Total: {this.state.total}</p>
                </div>
            </div>
        );
    }
}

class Item extends Component {

    click(){
        let active = !this.state.active;
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
        console.log('this', this.props.className);
        return(
            <div>
                <div className={`${this.props.className}`}>
                    <p onClick={this.click}>{this.props.name} {this.props.price}</p>
                    <img className="shoe-pic" src={this.props.img} alt="shoe kix"/>

                </div>

            </div>
        )
    }
}

export default Shop;