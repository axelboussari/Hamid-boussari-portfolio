import React, { useEffect } from 'react';
import './Home.css'
import Typed from 'typed.js';
import photo  from './images/background_home.jpg'



export default function Home () {
    useEffect(() => {
    const typed = new Typed(".auto-type", {
      strings: ["Olawolé BOUSSARI", "A Software Engineer", "Passionate Developer"],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []);
    return (
      <div class="container">
        <div class="row align-items-center">
          <div class="col-6">
          <p style={{color:'white',fontFamily: 'Orbitron', fontSize: '30px'}}>Hi, I'm<br/>
            {/* <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script> */}

            <span class="auto-type" style={{fontFamily: 'Orbitron', fontSize: '25px'}}><br/>Olawolé BOUSSARI</span>
          </p>
          <p style={{color: '#e9e8e6', fontFamily: 'Orbitron', fontSize: '20px'}}>Passionate about coding and innovation, I craft creative solutions with C, C++, C#, Python, and React. Always learning and exploring, I aspire to shape the future as a Software Engineer."</p>
            {/* <h1>Hi, I'm</h1> */}
          </div>
        <div class="col-6 d-flex justify-content-end"           
        initial={{ opacity: 0, x: 50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 1, delay: 0.5 }}>
             <img src={photo} class=" w-full h-auto object-cover  rounded-circle max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg bg-blue-500 shadow-xl align-self-end" alt="..." ></img>
        </div>
        </div>
      </div>
  //   <div className="home min-h-[calc(100vh-56px)] w-full flex">
  //     {/* <div class="custom-cursor">&lt;/&gt;</div> */}
  //           <div class="w-1/2 flex items-center justify-center px-6 text-balance" style={{color: '#e9e8e6', fontFamily: 'Orbitron', fontSize: '25px'}}>
  //           <div class="row ">
  //             <h1>Hi, I'm</h1>
              
  //               {/* <span class="typewriter-text"><br/>Olawolé BOUSSARI</span> */}


  //           {/* <p>Hey, I'm <h1>Olawole BOUSSARI</h1>, a great <h1>SOFTWARE ENGINEER</h1></p> */}
  //            {/* <article class="text-wrap items-center"> */}
  //               <p class="text-wrap">I am very passionate about IT, my goal is to become an expert in this field. I am driven by a broader ambition to contribute significantly to the development of the technology sector in Africa.
  //                   My dream is to leverage my skills and expertise to make a meaningful impact in Africa's development.</p>
  //           {/* </article> */}
  //           </div>
  //            <div class="typewriter">
  //   {/* <h1 class="typewriter-text">Welcome to the Typewriter Effect!</h1> */}
  // </div>
  //           </div>
  //           <div class="w-1/2 flex flex-wrap  items-center animate-slide-down">
  //           <img src={photo} class=" w-full h-auto object-cover  rounded-[70px] max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg bg-blue-500 shadow-xl" alt="..." ></img>
  //           </div>
            
            
  //     </div>
    )
  }