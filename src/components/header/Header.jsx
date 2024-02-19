import React from "react";
import "./Header.css";
import '../ui/button/ButtonNav.css';
import { NavLink } from "react-router-dom";

export default function Header(props) {
  return (
    <header className="header">
      <div className="container">
        <div className="header__top">
            <NavLink to='/'><div style={{width: '60px', height: '60px', borderRadius: '50%', backgroundColor: '#fff'}}></div></NavLink>
             <nav className='header__nav'>
                 <ul className='header__lists'>
                     <li className="header__item">
                        <NavLink to='/'>Форум</NavLink>
                     </li>
                     <li className="header__item">
                        <NavLink to='/rules'>Правила</NavLink>
                     </li>
                     <li className="header__item">
                        <NavLink to='/'>Донат</NavLink>
                     </li>
                     <li className="header__item">
                        <NavLink to='/'>Сервера</NavLink>
                     </li>
                 </ul>
             </nav>
             <NavLink to='/goGame' className="header__btn button-nav">Начать игру</NavLink>
        </div>
      </div>
    </header>
  );
}
