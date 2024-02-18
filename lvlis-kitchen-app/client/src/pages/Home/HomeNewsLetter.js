import React from 'react'
import classes from './homenewsletter.module.css'

import hrLine from '../../resources/horizontal-line.svg'
import chili_plant from '../../resources/chili-plant.png'
import garlic_plant from '../../resources/garlic-plant.png'

export default function HomeNewsLetter() {
  return (
    <div id='news' className={classes.news_letter}>
      <img src={hrLine} alt="" className={classes.hrline}/>
      <div className={classes.msg}>
        <h2><span>Get a Subscription</span> to Lvli's Kitchen Products</h2>
        <p>Subscribe now and get updates on new products, special offers and more!</p>
      </div>
      <form action="#">
        <div className={classes.form_box}>
          <input type="email" placeholder='Your Email Address' />
          <button type="submit">SUBSCRIBE NOW</button>
        </div>
      </form>
      <img src={chili_plant} alt="chili-plant"  className={classes.chili_plant}/>
      <img src={garlic_plant} alt="chili-plant" className={classes.garlic_plant}/>
      </div>
  )
}
