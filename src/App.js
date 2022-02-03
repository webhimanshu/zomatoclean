import React from 'react'
import FoodItems from './Body/FoodItems';

import Footer from './Footer/Footer';
import Header from './Header/Header';
import ImageSlider from './ImageSliding/ImageSlider';
import Slide from './ImageSliding/Slide';

import './index.css';
import TopBrands from './TopBrands/TopBrands';
const App = () => {
    return (
        <div className=''>
<Header/>

<ImageSlider/>
<TopBrands/>

<FoodItems/>
<Footer/>
        </div>
    )
}

export default App
