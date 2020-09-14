import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom'; // We can use Switch Tag to make route priority based on the sequence

import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Data from './components/Data';
import Contact from './components/Contact';
import Post from './components/Post';
import ReduxData from './components/ReduxData';
import ReduxPost from './components/ReduxPost';

class App extends Component {
  render(){
    return ( 
      <BrowserRouter>
        <div className = "App">
            <NavBar />
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/data" component={Data} />
            <Route path="/redux" component={ReduxData} />
            <Route path="/contact" component={Contact} />
            <Route path="/post/:id" component={Post} />
            <Route path="/reduxpost/:id" component={ReduxPost} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;