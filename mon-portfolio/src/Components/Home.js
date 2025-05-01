import React from 'react';
import './Home.css'
 import photo  from './images/PHOTO_AXEL.jpg'



export default function Home () {
    return (<div className="home">
        <div>
            <h1>Olawolé BOUSSARI</h1>
        </div>
        <div>
            <h2 className='pres'>
                I am a <span class="typing"> Software engineer.</span>
            </h2>
        </div>
        <div class="container">
            <img src={photo}/>
        </div>
      </div>
    )
  }