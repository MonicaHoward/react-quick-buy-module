import React, { Component } from 'react';
import './App.css';

import Shop from './Shop';


class App extends Component {
  render() {
    var inventory = [

        {name: 'Air Jordan 33 "Future Flight"\n',
         price: 175,
         className: 'shoe-1',
        },

        {
            name: 'Air Jordan 10 "Tinker"\n',
            price: 190,
            className: 'shoe-1',
        },

        {name: 'Air Jordan 10', price: 300, className: 'shoe-pic shoe-4'},
        {name: 'Air Jordan 11 "Platinum Tint"', price: 220, className: 'shoe-pic shoe-5'},
        {name: '88 Racer', price: 100, className: 'shoe-pic shoe-6'},
        {name: 'Hustle', price: 200, className: 'shoe-pic shoe-7'},
        {name: 'Air Jordan 1 Rebel XX', price: 200, className: 'shoe-pic shoe-8'},
        {name: 'Jordan Spiz\'ike', price: 175, className: 'shoe-pic shoe-9'},
        {name: 'Air Jordan 9 NRG Boot', price: 225, className: 'shoe-pic shoe-10'}

    ];

    return (
      <div>
          <header>
              <a href="https://github.com/MonicaHoward/react-quick-buy-module" alt="KIX" className="logo">
                <h1 className="logo-text">KIX</h1>
              </a>
          </header>
          <div>
              <div>
                  <h2>Shop the Latest Kix</h2>
                  <p>The hottest Jordan releases and more</p>
              </div>
              <div>
                  <Shop items={inventory}/>
              </div>
          </div>
      </div>
    );
  }
}

export default App;
