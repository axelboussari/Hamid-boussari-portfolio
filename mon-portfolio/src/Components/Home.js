import React from 'react';
import './Home.css'
 import photo  from './images/background_home.jpg'



export default function Home () {
    return (<div className="home min-h-[calc(100vh-56px)] w-full flex">
            <div class="w-1/2">

            </div>
            <div class="w-1/2 flex flex-wrap justify-center items-center animate-slide-down">
            <img src={photo} class=" w-full h-auto object-cover  rounded-[70px] max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg bg-blue-500 shadow-xl shadow-blue-500/50 hover:shadow-green-500/50" alt="..." ></img>
            </div>
        {/* <div>
            <h1 class="Salutation">Hello, I am</h1>
            <h1 class="Name">Olawolé BOUSSARI</h1>
        </div>
        <div>
            <h2 className='pres'>
                I am a <span class="typing"> Software engineer.</span>
               
            </h2>
        </div>*/}
        {/* <div class="container animate-slide-down">
         <img src={photo} class="rounded-[10px] bg-blue-500 shadow-xl shadow-blue-500/50 hover:shadow-green-500/50" alt="..." ></img>
        </div> */}
        
                {/* <img src={photo}/> */}
                {/* Text */}
                {/* test */}
      </div>
    )
  }