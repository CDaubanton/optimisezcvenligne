import React, { Component } from 'react';
import './App.css';
import Navbar from './Component/navbar';
import Footer from './Component/footer';
import Home from './Component/home'
import Services from './Component/services';
import Portfolio from './Component/portfolio';
import Blog from './Component/blog';


class App extends Component {
    render() {
        return (
            <>
                <Navbar />
                <Blog />
                <Footer />
            </>
        );
    }
}

export default App;
