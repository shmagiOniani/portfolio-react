import React from "react";
import stars from "../../assets/images/stars.svg";
import circles from "../../assets/images/circles.svg";

import brightShadeOne from "../../assets/images/bright-shade(1).png"
import brightShadeTwo from "../../assets/images/bright-shade(2).png"
import moon from "../../assets/images/moon.svg"
import portfolioOne from "../../assets/images/portfolio(1).svg"
import darkShadeOne from "../../assets/images/dark-shade(1).png"
import darkShadeTwo from "../../assets/images/dark-shade(2).png"
import darkShadeThree from "../../assets/images/dark-shade(3).png"


import "./paralax.scss";

function Paralax() {
    document.addEventListener("mousemove", parallax);
    function parallax(e) {
      this.querySelectorAll(".layer").forEach((layer) => {
        const speed = layer.getAttribute("data-speed");
  
        const x = (window.innerWidth - e.pageX * speed) / 1000000;
        const y = (window.innerHeight - e.pageY * speed) / 1000000;
  
        layer.style.transform = "translate3d(" + x + "px, " + y + "px, 0px)";
      });
    }

    const fade = ()=> {
      document.querySelectorAll(".fade-in").forEach((layer, i) => {

        if(layer.classList.contains('moon')){
          if(layer.classList.contains('fade-out')){
            layer.classList.remove('fade-out')
          }else {
            layer.classList.add('fade-out')
          }
        }else {
          if(layer.classList.contains('fade-left') || layer.classList.contains('fade-right' || layer.classList.contains('fade-out'))){
            layer.style.transition = "all 0.3s"
            layer.classList.remove('fade-left')
            layer.classList.remove('fade-right')
            layer.classList.remove('fade-out')

            setTimeout(() => {
              layer.style.transition = "none"
              
            }, 200);
          }else {
            if(i<4){
              layer.classList.add('fade-left')
            }else {
              layer.classList.add('fade-right')
            }
          }
        }
      }
      )
    }
  return <>

  {/* <button onClick={fade}>aeeee</button> */}
   <section className="bg-container">
        <img src={stars} alt="" className="star layer" data-speed="20000" />
        <img
          src={circles}
          alt=""
          className="moon-shine layer "
          data-speed="30000"
        />

        <img src={moon} alt="" className="moon layer fade-in" data-speed="30000"/>
        <img src={brightShadeTwo} alt="" className="bright-shade-2 layer fade-in" data-speed="70000"/>
        <img src={portfolioOne} alt="" className="portfolio layer fade-in" data-speed="40000"/>
        <img src={darkShadeTwo} alt="" className="dark-shade-2 layer fade-in" data-speed="60000"/>

        <img src={brightShadeOne} alt="" className="bright-shade-1 layer fade-in" data-speed="50000"/>
        <img src={darkShadeOne} alt="" className="dark-shade-1 layer fade-in" data-speed="40000"/>
        <img src={darkShadeThree} alt="" className="dark-shade-3 layer fade-in" data-speed="50000"/>

      </section>


  
  </>;
}

export default Paralax;
