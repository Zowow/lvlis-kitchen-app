import React from 'react';
import classes from './productpage.module.css'

import HomeProducts from '../Home/HomeProducts';
import Footer from '../../components/Footer/Footer'


export default function ProductPage() {
  return (
    <>
        <div className={classes.productpage}>
            <HomeProducts/>
        </div>
        <Footer/>
    </>
    
  )
}
