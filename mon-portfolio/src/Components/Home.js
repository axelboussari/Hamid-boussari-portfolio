import React, { useEffect } from 'react';
import './Home.css'
 import photo  from './images/background_home.jpg'



export default function Home () {
    return (
    <div className="home min-h-[calc(100vh-56px)] w-full flex">
      <div class="custom-cursor">&lt;/&gt;</div>
            <div class="w-1/2 flex items-center justify-center px-6 text-balance " style={{color: '#e9e8e6', fontFamily: 'Orbitron', fontSize: '25px'}}>

            {/* <p>Hey, I'm <h1>Olawole BOUSSARI</h1>, a great <h1>SOFTWARE ENGINEER</h1></p> */}
             {/* <article class="text-wrap items-center"> */}
                <p>I am very passionate about IT, my goal is to become an expert in this field. I am driven by a broader ambition to contribute significantly to the development of the technology sector in Africa.
                    My dream is to leverage my skills and expertise to make a meaningful impact in Africa's development.</p>
            {/* </article> */}
            </div>
            <div class="w-1/2 flex flex-wrap  items-center animate-slide-down">
            <img src={photo} class=" w-full h-auto object-cover  rounded-[70px] max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg bg-blue-500 shadow-xl" alt="..." ></img>
            </div>
            
            
      </div>
    )
  }