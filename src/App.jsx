import React, { Component } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Navbar from './Component/navbar';
import Footer from './Component/footer';
import Home from './Component/home'
import Services from './Component/services';
import Portfolio from './Component/portfolio';
import Blog from './Component/blog';
import Contact from './Component/contact';
import Legal from './Component/legal';
import GithubUser from './Component/githubUser';


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
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/legal" element={<Legal />} />
                    <Route path="/github" element={<GithubUser />} />
                </Routes>

                <Footer />
            </>
        );
    }
}

export default App;
