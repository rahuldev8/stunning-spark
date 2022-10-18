import React from 'react';
import {Container} from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';

const App =() => {
  return (
    <>

    <main>
    <Header/>
      <Container>
        <h1>Welcome to Stunning Spark</h1>
      </Container> 
    </main>
    <Footer/>
    </>
  );
}

export default App;
