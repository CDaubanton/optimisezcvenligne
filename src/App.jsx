import React, { Component } from 'react';
import './App.css';
import Navbar from './Component/navbar';
import Footer from './Component/footer';
import Home from './Component/home'
import Services from './Component/services';

class App extends Component {
    render() {
        return (
            <>
                <Navbar />
                <Services />
                <Footer />
            </>
        );
    }
}

export default App;
