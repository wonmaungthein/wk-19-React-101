import React, { Component } from 'react';
import './App.css';
import Logo from './Components/Logo';
import BookingMessage from './Components/BookingMessage';
import SpecialDeals from './Components/SpecialDeals';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Logo />
        <p className="App-intro">
          <h1>Welcome to CYF Hotel</h1>
        </p>
        <div>
          <img src="https://codeyourfuture.io/static/media/cyf_brand.fbcea877.png" alt="CodeYourFuture Logo" />
        </div>
        <div>
          <BookingMessage />
        </div>
        <div>
          <SpecialDeals />
        </div>
      </div>
    );
  }
}

export default App;
