import React from 'react'
import { Link } from 'react-router-dom'
import classes from './footer.module.css'

import logo from "../../resources/logo.jpg"

export default function Footer() {
  return (
    <div className={classes.footer}>
        <Link to="/"><img src={logo} alt="logo" /></Link>
        <q className={classes.tagline}>Talaga namang anghang-sarap ang kain kapag kasama ang <span>Lvli's Red Hot Chili Garlic!</span></q>
        <div className={classes.icons}>
          <a href='https://www.facebook.com/'><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 20 20"><path fill="#FFFFFF" d="M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6s9.6-4.298 9.6-9.6S15.302.4 10 .4m2.274 6.634h-1.443c-.171 0-.361.225-.361.524V8.6h1.805l-.273 1.486H10.47v4.461H8.767v-4.461H7.222V8.6h1.545v-.874c0-1.254.87-2.273 2.064-2.273h1.443z"/></svg></a>
          <a href='https://www.twitter.com/' ><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 20 20"><path fill="#FFFFFF" d="M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6s9.6-4.298 9.6-9.6S15.302.4 10 .4m3.905 7.864c.004.082.005.164.005.244c0 2.5-1.901 5.381-5.379 5.381a5.335 5.335 0 0 1-2.898-.85c.147.018.298.025.451.025c.886 0 1.701-.301 2.348-.809a1.895 1.895 0 0 1-1.766-1.312a1.9 1.9 0 0 0 .853-.033a1.892 1.892 0 0 1-1.517-1.854v-.023c.255.141.547.227.857.237a1.89 1.89 0 0 1-.585-2.526a5.376 5.376 0 0 0 3.897 1.977a1.891 1.891 0 0 1 3.222-1.725a3.797 3.797 0 0 0 1.2-.459a1.9 1.9 0 0 1-.831 1.047a3.799 3.799 0 0 0 1.086-.299a3.834 3.834 0 0 1-.943.979"/></svg></a>
          <a href='https://instagram.com/?lang=en'><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 20 20"><path fill="#FFFFFF" d="M13 10a3 3 0 1 1-6 0c0-.171.018-.338.049-.5H6v3.997c0 .278.225.503.503.503h6.995a.503.503 0 0 0 .502-.503V9.5h-1.049c.031.162.049.329.049.5m-3 2a2 2 0 1 0-.001-4.001A2 2 0 0 0 10 12m2.4-4.1h1.199a.301.301 0 0 0 .301-.3V6.401a.301.301 0 0 0-.301-.301H12.4a.301.301 0 0 0-.301.301V7.6c.001.165.136.3.301.3M10 .4A9.6 9.6 0 0 0 .4 10a9.6 9.6 0 0 0 9.6 9.6a9.6 9.6 0 0 0 9.6-9.6A9.6 9.6 0 0 0 10 .4m5 13.489C15 14.5 14.5 15 13.889 15H6.111C5.5 15 5 14.5 5 13.889V6.111C5 5.5 5.5 5 6.111 5h7.778C14.5 5 15 5.5 15 6.111z"/></svg></a>
        </div>
        <div className={classes.footer_nav}>
          <Link to='/' className={classes.links}>Home</Link>
          <Link to='/products' className={classes.links}>Products</Link>
          <Link to='/about' className={classes.links}>About</Link>
        </div>
        <p className={classes.copyright}>
          ©2023 Lvli's Red Hot Chili Garlic | All Rights Reserved<br/>
        </p>
    </div>
  )
}
