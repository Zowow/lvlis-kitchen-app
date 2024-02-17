import React from 'react'
import classes from "./header.module.css"
import { Link } from 'react-router-dom'

// Resources
import logo from '../../resources/logo.jpg'


export default function Header() {

    return (
        <header className={classes.header}>
            <Link to="/">
                <img className={classes.logo} src={logo} alt="logo" />
            </Link>
            <div className={classes.nav}>
                <Link to='/' className={classes.links}>Home</Link>
                <Link to='/products' className={classes.links}>Products</Link>
                <Link to='/about' className={classes.links}>About</Link>
                <Link to='/contact' className={classes.links}>Contact Us</Link>
                
            </div>
            <button className={classes.subscribe}>Subscribe</button>
        </header>
    )
}
