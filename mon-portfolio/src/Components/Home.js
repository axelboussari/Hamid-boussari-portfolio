import React from 'react';
import './Home.css'
 import photo  from './images/PHOTO_AXEL.jpg'



export default function Home () {
    return (<div className="home">
        <div>
            <h1 class="Salutation">Hello, I am</h1>
            <h1 class="Name">Olawolé BOUSSARI</h1>
        </div>
        <div>
            <h2 className='pres'>
                I am a <span class="typing"> Software engineer.</span>
               
            </h2>
        </div>
            <img src={photo}/>
      </div>
    )
  }