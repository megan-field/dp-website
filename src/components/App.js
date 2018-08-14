import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Navbar from './Navbar.js';
import Home from './Home.js';
import About from './About.js';
import Collection from './Collection.js';
import Tailoring from './Tailoring.js';
import News from './News.js';
import Contact from './Contact.js';

import '../views/styles/app.css';

class App extends Component {
  render() {
    return (
     <BrowserRouter>
        <div className="App background">
          <header className="App-header">
            <Navbar />
          </header>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/collection" component={Collection} />
          <Route path="/tailoring" component={Tailoring} />
          <Route path="/news" component={News} />
          <Route path="/contact" component={Contact} />              
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
