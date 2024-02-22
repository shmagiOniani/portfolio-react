import React from 'react'
import fb from "../../assets/images/facebook-bright.png"
import github from "../../assets/images/github-bright.png"

import "./header.scss"
import { Link } from 'react-router-dom'

function Header() {

    function handleNavigate(path) {
       
    }
  return (
    <header>
        <nav>
            <div className="name">
                <h2 >  <Link to="/">Shmagi Oniani </Link></h2>
            </div>
            <div className="social-icons">
                <div className="facebook">
                    <a target='_blank' rel="noreferrer"  href="https://www.facebook.com/shmagi.onaini"> 
                        <img src={fb} className="facebook-bright" alt=""/>
                    </a>
                </div>
                <div className="github">
                    <a  target='_blank' rel="noreferrer"  href="https://github.com/shmagiOniani">
                        <img src={github} className="github-bright" alt=""/>
                    </a>
                </div>
            </div>
        </nav>
        <div className="left-bar">
            <div id="up-arrow" className="up-arrow" >
                <div className="up"></div>
            </div>
            <ul>
                <li id="nav-home" className="active-nav" ><Link to={"/"}>home</Link></li>
                <li id="nav-projects"><Link to={"projects"}>projects</Link></li>
                <li id="nav-contact" ><Link to={"contact"}>contact</Link></li>
            </ul>
            <div id="down-arrow" className="down-arrow active-arrow">
                <div className="down"></div>
            </div>
        </div>
    </header>
  )
}

export default Header