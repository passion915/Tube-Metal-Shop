import React, { Component } from 'react';
import Router from './Router';
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

import Header from './components/common/Header';
import Footer from './components/common/Footer';
import './components/pages/TestPage';


const options = {
  position: 'top right',
  timeout: 5000,
  offset: '30px',
  transition: 'fade',
  width: '100px'
}

class App extends Component {
  render() {
    return (
      <AlertProvider template={AlertTemplate} {...options}>
        <Header />

        <Router />

        <Footer />
      </AlertProvider>
    );
  }
}

export default App;
