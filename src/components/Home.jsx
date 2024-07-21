import React from 'react';
import { Link } from 'react-router-dom';
import Hero from './Hero';
import About from './About';

const Home = () => {
    return (
    <>
       <Hero/>
       <About/>
    </>
    );
};

export default Home;