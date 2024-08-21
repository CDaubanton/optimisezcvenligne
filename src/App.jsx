import React, { Component } from 'react';
import './App.css';
import Navbar from './Component/navbar';
import Footer from './Component/footer';
import Home from './Component/home'

class App extends Component {
    render() {
        return (
            <>
                <Navbar />
                <Home />
                <Footer />
            </>
        );
    }
}

export default App;
