import React from 'react';
import Navbar from './components/Navbar'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/Home'
import about from './components/About'
import contact from './components/Contact'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route exact path='/' component={Home} />
        <Route path='/about' component={about} />
        <Route path='/contact' component={contact} />
      </div>
    </BrowserRouter>
  );
}

export default App
// Implemented NavLinks