import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import icone from './images/education.jpg'
// import Carrousel from './Carrousel.js';
import "./Education.css"
export default function Education () {
  return (
    
    <div class="container justify-center items-center align-self-center" style={{color: 'grey', fontFamily: 'Orbitron'}}>
      <h1 class="mon-element text-center">Education</h1>
      <h2 class="mon-element text-center" style={{fontSize: '10px'}}>ACADEMIC JOURNEY</h2>
      <div className="home min-h-[calc(100vh-px)] w-full flex">
        <div class="w-1/2 flex items-center justify-center px-6 text-balance">
        <h1>Bachelor of Information technology EPITECH BENIN</h1>
        <h2>Baccalaureat Serie D CS La Rose</h2>
        </div>
        <div class="w-1/2 flex flex-wrap  items-center animate-slide-down"> 
        <h2>Image Etudes </h2>
        </div>
      </div>

      {/* <div class="row justify-center items-center">
        <div class="col">
          <h1 class="mon-element">Education</h1>
        </div>
      </div> */}
      {/* <div class="w-1/2 flex flex-wrap  items-center animate-slide-down"> */}
    </div>
    
// {/* <div className="home min-h-[calc(100vh-px)] w-full flex">
//       <div class="custom-cursor">&lt;/&gt;</div>
//             <div class="w-1/2 flex items-center justify-center px-6 text-balance " style={{color: '#e9e8e6', fontFamily: 'Orbitron', fontSize: '25px'}}>
//             <img src={icone}class="icon"/>
//             <h1 class="mon-element">Education</h1>
//             <h2>ACADEMIC JOURNEY</h2>

//             {/* <p>Hey, I'm <h1>Olawole BOUSSARI</h1>, a great <h1>SOFTWARE ENGINEER</h1></p> */}
//              {/* <article class="text-wrap items-center"> */}
//                 {/* <p>I am very passionate about IT, my goal is to become an expert in this field. I am driven by a broader ambition to contribute significantly to the development of the technology sector in Africa. */}
//                     {/* My dream is to leverage my skills and expertise to make a meaningful impact in Africa's development.</p> */}
//             {/* </article> */}
//             </div>
//             {/* <div class="w-1/2 flex flex-wrap  items-center animate-slide-down"> */}
//             {/* <img src={photo} class=" w-full h-auto object-cover  rounded-[70px] max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg bg-blue-500 shadow-xl" alt="..." ></img> */}
//             {/* </div> */}
            
            
//       </div> */}
  );
}
