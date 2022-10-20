import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {Container} from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/cartScreen';
import LoginScreen from './screens/loginScreen';

const App =() => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/login' component={LoginScreen} exact/>
          <Route path='/product/:id' component={ProductScreen} exact/>
          <Route path='/cart/:id?' component={CartScreen} exact/>
          <Route path='/' component={HomeScreen} exact/>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
