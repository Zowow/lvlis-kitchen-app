import React from 'react'
import classes from "./aboutpage.module.css"

import Footer from '../../components/Footer/Footer'

export default function AboutPage() {
  return (
    <>
        <div className={classes.aboutpage}> 
            <div className={classes.aboutpage_container}>
              <div className={classes.container_msg}>
                  <h1>Lvli's Kitchens' <span>Story</span></h1>
                  <p>Welcome to Lvli's Kitchen, where passion meets flavor in every jar of our signature Red Hot Chili Garlic Paste! Our journey began in the heart of a bustling kitchen, where Patrick, a culinary enthusiast with a fiery spirit, discovered the magic of blending fresh ingredients to create an unforgettable culinary experience.</p>
                  <p>In Lvli's Kitchen, we believe in the power of simple, high-quality ingredients to transform any meal into a culinary masterpiece. Our red hot chili garlic paste is a testament to that philosophy – a harmonious fusion of sun-ripened red chilies and aromatic garlic, carefully selected to deliver a perfect balance of heat and savory goodness.</p>
                  <p>What sets Lvlli's Kitchen apart is our commitment to authenticity. Each batch of our Red Hot Chili Garlic Paste is crafted with precision and passion, ensuring that every jar captures the essence of our founder's culinary vision. We source the finest red chilies, handpicked at their peak, and combine them with fresh garlic to create a paste that adds a punch of flavor to any dish.</p>
                  <p>Our kitchen is a hub of creativity, where traditional recipes meet modern innovation. We take pride in the artistry of our craft, infusing each jar with the vibrant spirit of Lvli's Kitchen. Whether you're a seasoned chef or a home cook exploring new culinary horizons, our Red Hot Chili Garlic Paste is the perfect companion to elevate your dishes to new heights.</p>
                  <p>At Lvlli's Kitchen, we believe in connecting people through the love of food. Our red hot chili garlic paste is more than a condiment; it's a celebration of bold flavors, shared meals, and the joy of savoring every bite. Join us on a journey of taste and tradition – explore the possibilities with Lvli's Kitchen and let the passion for flavor ignite your culinary adventures!</p>
              </div>
            </div>
        </div>
        <div className={classes.about_footer}><Footer/></div>
    </>
  )
}
