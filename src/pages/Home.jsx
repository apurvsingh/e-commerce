import React from 'react';
import Navbar from '../components/Navbar';
import Announcements from '../components/Announcements';
import Slider from '../components/Slider';
import Catergories from '../components/Catergories';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';


const Home = () => {
  return (
    <div>
        <Announcements></Announcements>
        <Navbar/>
        <Slider/>
        <Catergories></Catergories>
        <Products></Products>
        <Newsletter></Newsletter>
    </div>);
  
};

export default Home;