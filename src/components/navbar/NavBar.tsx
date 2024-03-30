import React, { useState } from 'react';
import "./navBar.scss";
import { Link } from 'react-router-dom';

const NavBar : React.FC = () => {

  const [opMenu, setOpenMenu] = useState<boolean>(false);

  return (
    <nav>
      <div className="left">
        <a href='' className="logo">
          <img src="3aqar.png" alt="" />
          <span>3aqar.<i>city</i></span>
        </a>
        <div className="links">
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Contact</a>
          <a href="">Agents</a>
        </div>
      </div>
      <div className="right">

        <img onClick={() => setOpenMenu(!opMenu)} className='menu-img' src="menu.png" alt="" />

        <div className={opMenu ? 'menu active' : 'menu'}>
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Contact</a>
          <a href="">Agents</a>
          <a href="">Sign in</a>
          <a href="">Sign up</a>
        </div>

        <a href="" className='button'>Sign in</a>
        <a href='' className='button'>Sign up</a>
      </div>
    </nav>
  )
}

export default NavBar