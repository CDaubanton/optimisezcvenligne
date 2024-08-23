import React, { Component } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'
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

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/blog" element={<Blog />} />
                </Routes>
                
                <Footer />
            </>
        );
    }
}

export default App;
