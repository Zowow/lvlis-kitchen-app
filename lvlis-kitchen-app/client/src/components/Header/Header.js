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
            <input type="checkbox" id={classes.check} />
            <div className={classes.nav}>
                <Link to='/' className={classes.links}>Home</Link>
                <Link to='/product' className={classes.links}>Products</Link>
                <Link to='/about' className={classes.links}>About</Link>
            </div>
            <a href="/#news"><button className={classes.subscribe}>Subscribe</button></a>
            
            <label htmlFor={classes.check} className={classes.icon_list}>
                <svg className={classes.icon1} xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M3 18v-2h18v2zm0-5v-2h18v2zm0-5V6h18v2z"/></svg>
                <svg className={classes.icon2} xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"/></svg>
            </label>
        </header>
    )
}
