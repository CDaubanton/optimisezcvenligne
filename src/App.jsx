import React, { Component } from 'react';
import './App.css';
import Navbar from './Component/navbar';
import Footer from './Component/footer';

class App extends Component {
    render() {
        return (
            <>
                <Navbar />
                
                <Footer />
            </>
        );
    }
}

export default App;
