import React from 'react';
import {NavLink} from "react-router-dom";
import style from './index.module.css'

const Header = () => {
    return <header className={style.header}>
        <img className={style.logo}
            src="/images/swlogo.png"
            alt="swlogo"/>
        <nav className={style.navbar}>
            <NavLink className={style.link} exact to={'/'} activeStyle={{color: 'red'}}>Main</NavLink>
            <NavLink className={style.link} to={'/movies/'} activeStyle={{color: 'red'}}>Movies</NavLink>
            <NavLink className={style.link} to={'/persons/'} activeStyle={{color: 'red'}}>Persons</NavLink>
            <NavLink className={style.link} to={'/vehicles/'} activeStyle={{color: 'red'}}>Vehicles</NavLink>
        </nav>
    </header>

};

export default Header;