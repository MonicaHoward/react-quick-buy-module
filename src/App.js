import React, { Component } from 'react';
import './App.css';

import Shop from './Shop';

class App extends Component {
  render() {
    var inventory = [
        {name: 'Air Jordan 33 "Future Flight"\n', price: 175},
        {name: 'Air Jordan 10 "Tinker"\n', price: 190},
        {name: 'Air Jordan 10', price: 300},
        {name: 'Air Jordan 11 "Platinum Tint"', price: 220},
        {name: '88 Racer', price: 100},
        {name: 'Hustle', price: 200},
        {name: 'Air Jordan 1 Rebel XX', price: 200},
        {name: 'Jordan Spiz\'ike', price: 175},
        {name: 'Air Jordan 9 NRG Boot', price: 225}

    ];
    return (
      <div className="App">
        <Shop items={inventory}/>
      </div>
    );
  }
}

export default App;
