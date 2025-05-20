import React, { useState } from 'react'
import "./header.css"
const Header = () => {
     /*=============== Toogle Menu ===============*/
   const [Toogle , showMenu] = useState(false);


     /*=============== Change background Header===============*/
    window.addEventListener("scroll" , function(){
        const header = document.querySelector(".header");
        if(this.scrollY>=100) header.classList.add("scroll-header");
        else header.classList.remove("scroll-header");

    });
    /*=============== Toogle Menu ===============*/
    const [activeNav , setActiveNav] = useState("#home")
    
   
  return (
      <header className="header">
        <nav className="nav container">
            <a href="index.html" className="nac__logo">Nikhil</a>
            <div className={Toogle?"nav__menu show-menu" :"nav__menu" }>
                <ul className="nav__list grid">
                    <li className="nav__item">
                        <a href="#home" onClick={()=>setActiveNav("#home")} className={activeNav==="#home"?"nav_link active-link":"nav_link"}>
                            <i className="uil uil-estate nav__icon"></i>Home
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#about"  onClick={()=>setActiveNav("#about")} className={activeNav==="#about"?"nav_link active-link":"nav_link"}>
                            <i className="uil uil-user nav__icon"></i>About
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#skills" onClick={()=>setActiveNav("#skills")} className={activeNav==="#skills"?"nav_link active-link":"nav_link"}>
                            <i className="uil uil-file-alt nav__icon"></i>Skills
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#project"onClick={()=>setActiveNav("#project")} className={activeNav==="#project"?"nav_link active-link":"nav_link"}>
                            <i className="uil uil-briefcase-alt nav__icon"></i> Projects
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#portfolio" onClick={()=>setActiveNav("#portfolio")} className={activeNav==="#portfolio"?"nav_link active-link":"nav_link"}>
                            <i className="uil uil-scenery nav__icon"></i> Qualification
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#contact" onClick={()=>setActiveNav("#contact")} className={activeNav==="#contact"?"nav_link active-link":"nav_link"}>
                            <i className="uil uil-message nav__icon"></i>Contact
                        </a>
                    </li>
                </ul>
                <i class="uil uil-times nav__close" onClick={()=>{showMenu(!Toogle)}}></i>
            </div>
            <div className="nav_toggle" onClick={()=>{showMenu(!Toogle)}}>
            <i class="uil uil-apps"></i>
            </div>
        </nav>
      </header>
  )
}

export default Header
