import React from 'react';
import Navbar from '../components/Navbar';
import Announcements from '../components/Announcements';
import Slider from '../components/Slider';
import Catergories from '../components/Catergories';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';


const Home = () => {
  return (
    <div>
        <Announcements></Announcements>
        <Navbar/>
        <Slider/>
        <Catergories></Catergories>
        <Products></Products>
        <Newsletter></Newsletter>
        <Footer></Footer>
    </div>);
  
};

export default Home;