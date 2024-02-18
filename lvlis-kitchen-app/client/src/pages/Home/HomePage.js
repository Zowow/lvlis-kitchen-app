import React from 'react'
import classes from "./home.module.css"


// Resources
import hrLine from '../../resources/horizontal-line.svg'
import chili01 from '../../resources/chili01.png'
import chili02 from '../../resources/chili02.png'
import garlic01 from '../../resources/garlic01.png'
import appetizer from '../../resources/appetizer.jpg'
import lunch from '../../resources/lunch.jpg'
import merienda from '../../resources/merienda.jpeg'
import dinner from '../../resources/dinner.jpg'

// Page Sections
import HomeProducts from './HomeProducts.js'
import HomeNewsLetter from "./HomeNewsLetter"
import Footer from '../../components/Footer/Footer'

function Home() {
  return (
    <>
      <div className={classes.home}>
        <div className={classes.home_card}>
              <div className={classes.home_card_container}>
                  <img src={chili01} alt="chiliOne" className={classes.chili01} />
                  <img src={chili02} alt="chiliTwo" className={classes.chili02} />
                  <img src={garlic01} alt="garlicOne" className={classes.garlic01} />
                  <div className={classes.container_border}>
                      <img src={hrLine} alt="" className={classes.hrline}/>
                      <h1>Lvli's <span>Red Hot</span> <br/>Chili Garlic</h1>
                      <p>Made with fresh chilies at niluto sa coconut oil kaya siguradong lasap na lasap mo ang sarap.</p>
                      <button>Explore products →</button>
                  </div>
              </div>
        </div>
      </div>
      <div className={classes.product_used}>
        <img src={hrLine} alt="" className={classes.hrline}/>
        <h2>Best <span>Used</span> For</h2>
        <div className={classes.food}>
          <div className={classes.food_type}>
            <img src={appetizer} alt="" className={classes.food_type_avatar}/>
            <p className={classes.food_type_name}>Appetizer</p>
          </div><div className={classes.food_type}>
            <img src={lunch} alt="" className={classes.food_type_avatar}/>
            <p className={classes.food_type_name}>Lunch</p>
          </div><div className={classes.food_type}>
            <img src={merienda} alt="" className={classes.food_type_avatar}/>
            <p className={classes.food_type_name}>Merienda</p>
          </div><div className={classes.food_type}>
            <img src={dinner} alt="" className={classes.food_type_avatar}/>
            <p className={classes.food_type_name}>Dinner</p>
          </div>
        </div>
      </div>
      <img src={hrLine} alt="" className={classes.hrline2}/>
      <HomeProducts/>
      <HomeNewsLetter/>
      <Footer/>
    </>
  )
}

export default Home;